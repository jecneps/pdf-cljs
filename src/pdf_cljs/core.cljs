(ns pdf-cljs.core
  (:require [clojure.core.match :refer [match]]
            [shadow.cljs.modern :refer (js-await)]
            [shadow.esm :as esm]
            [re-frame.core :as rf]))

(def GLOBALS {:page-margin 10
              :spinner-size 80})

(defn in-range? [i center window]
  (< (abs (- i center)) window))

(defn teardown-update [page]
  (assoc page 
         :status :inactive
         :update nil
         :page-obj nil))

(defn cancelled-update [page]
  (assoc page 
         :page-obj nil
         :update :cancelled))

(defn loading-update [page]
  (assoc page
         :status :loading))

(defn re-render-update [page]
  (assoc page
         :update nil
         :status :rendering))

(defn prioritize-pages [page-nums cur-in-flight center max-in-flight]
  (->> (take (- max-in-flight cur-in-flight)
             (sort-by :dist
                      (map (fn [i] {:i i :dist (abs (- center i))}) page-nums)))
       (map :i)))

(defn process-in-range-pages [pages scale center max-in-flight ^js pdf-obj]
  (let [cur-in-flight (count (filter #(contains? #{:loading :rendering} (:status %)) (vals pages)))
        pages-to-load (filter #(or (= :inactive (:status %)) 
                                   (and (= :re-render (:update %))
                                        (not= :rendering (:status %))))
                              (vals pages))]
    ;; (println "pages to load:" pages-to-load)
    (->> (prioritize-pages (map :index pages-to-load) cur-in-flight center max-in-flight)
         (reduce (fn [[updates-acc effects-acc :as acc] i]
                   (let [page (get pages i)]
                    ;;  (println "reduce pages" i page)
                     (cond
                       (= :inactive (:status page)) [(conj updates-acc [i loading-update])
                                                     (conj effects-acc [:pdf/load-page [pdf-obj i]])]
                       (= :re-render (:update page)) [(conj updates-acc [i re-render-update])
                                                      (conj effects-acc 
                                                            [:pdf/reset-page-canvas (:canvas page)]
                                                            [:pdf/render-page
                                                                         [scale
                                                                          i
                                                                          (:page-obj page)
                                                                          (:canvas page)]])] ;;TODO(jecneps): might need to fix re-render?
                       :else acc)))
                 [[] []]))))

(defn process-out-of-range-pages [pages]
  ;; (println "pages out of range, cnt=" (count pages))
  (reduce (fn [[updates-acc effects-acc :as acc] page]
            (cond
              (= :rendered (:status page)) [(conj updates-acc [(:index page) teardown-update])
                                            (conj effects-acc [:pdf/reset-page-canvas (:canvas page)])]
              (and (not= :cancelled (:update page))
                   (or (= :loading (:status page))
                       (= :rendering (:status page)))) [(conj updates-acc [(:index page) cancelled-update])
                                                        effects-acc]
              :else acc))
          [[] []]
          (vals pages)))

(rf/reg-event-fx
 :pdf/check-for-work
 (fn [{:keys [db]} _]
   (when-let [^js pdf-obj (get-in db [:pdf :pdf-obj])]
     (let [pages (get-in db [:pdf :pages])
           {:keys [center-page window-size max-in-flight scale]} (get-in db [:pdf :params])
           pages-in-range (into {} (filter (fn [[k _]] (in-range? k center-page window-size)) pages))
           pages-out-of-range (into {} (filter (fn [[k _]] (not (in-range? k center-page window-size))) pages))
           [updates effects] (map concat
                                  (process-out-of-range-pages pages-out-of-range)
                                  (process-in-range-pages pages-in-range scale center-page max-in-flight pdf-obj))]
       {:db (reduce (fn [acc-db [i update-fn]]
                      (update-in acc-db [:pdf :pages i] update-fn))
                    db
                    updates)
        :fx (into [] effects)
        }))))

(rf/reg-fx
 :pdf/load-page
 (fn [[^js pdf-obj i]]
  ;;  (println "load-page fx: " i)
   (js-await [^js page-obj (.getPage pdf-obj (inc i))]
             ;(rf/dispatch-sync [:pdf/set-page-data i page])
             (rf/dispatch [:pdf/page-loaded i page-obj]))))

(defn render-cancelled-fx [db i]
  {:db (update-in db [:pdf :pages i]
                  assoc
                  :update nil
                  :status :inactive)
   :fx [[:dispatch [:pdf/check-for-work]]]})

(defn render-cancelled-db-update [db i]
  (update-in db [:pdf :pages i]
             assoc
             :update nil
             :status :inactive))

(rf/reg-event-fx
 :pdf/page-loaded
 (fn [{:keys [db]} [_ i ^js page-obj]]
   (let [page (get-in db [:pdf :pages i])
         scale (get-in db [:pdf :params :scale])]
     (match [(:update page) (nil? (:canvas page))]
       [:cancelled _] (render-cancelled-fx db i)
       [_ true] {:db (update-in db [:pdf :pages i]
                                assoc
                                :status :waiting-for-canvas
                                :page-obj page-obj)}
       [_ false] {:db (update-in db [:pdf :pages i]
                                 assoc
                                 :status :rendering
                                 :page-obj page-obj)
                  :fx [[:pdf/render-page [scale i page-obj (:canvas page)]]]}))))

(rf/reg-event-fx
 :pdf/new-canvas-size
 (fn [{:keys [db]} [_ width height]]
   (if (or (not= width (get-in db [:pdf :params :canvas-width]))
           (not= height (get-in db [:pdf :params :canvas-height])))
     {:db (-> db
              (assoc-in [:pdf :params :canvas-width] width)
              (assoc-in [:pdf :params :canvas-height] height))
      :fx [[:pdf/resize-canvases [(->> (get-in db [:pdf :pages])
                                       (vals)
                                       (filter #(= :inactive (:status %))) ;TODO(jecneps): feel like possible obscure concureny bug
                                       (map :canvas)) 
                                  width
                                  height]]]}
     {})))

(rf/reg-fx
 :pdf/render-page
 (fn [[scale i ^js page-obj canvas]]
  ;;  (println "in rerender: " i scale page-obj canvas)
   (let [viewport (.getViewport page-obj #js {:scale scale})
         context (.getContext canvas "2d")
         render-context #js {:canvasContext context
                             :viewport viewport}]
     (set! canvas -height (.-height viewport))
     (println "render fx, canvas height: " (.-height viewport))
     (set! canvas -width (.-width viewport))
    ;;  (println "render-page")
     (js-await [_ (.-promise (.render page-obj render-context))]
               (rf/dispatch [:pdf/page-rendered i]))
     (rf/dispatch [:pdf/new-canvas-size (.-width viewport) (.-height viewport)]))))

(rf/reg-event-fx
 :pdf/page-rendered
 (fn [{:keys [db]} [_ i]]
  ;;  (println "page was rendered: " i)
   (let [scale (get-in db [:pdf :params :scale])
         page (get-in db [:pdf :pages i])]
    ;;  (println "page " page)
     (if (= :re-render (:update page))
       {:db (update-in db [:pdf :pages i] assoc :update nil)
        :fx [[:pdf/reset-page-canvas (:canvas page)]
             [:pdf/render-page [scale i (:page-obj page) (:canvas page)]]]}
       {:db (update-in db [:pdf :pages i] assoc :status :rendered)
        :fx [[:dispatch [:pdf/check-for-work]]]}))))

(rf/reg-fx
 :pdf/reset-page-canvas
 (fn [canvas-ref]
   (println "reset canvas")
   (let [ctx (.getContext canvas-ref "2d")]
     (.reset ctx))))

;;#########################################################################
; Glue
;;#########################################################################

(rf/reg-event-fx
 :pdf/canvas-mounted
 (fn [{:keys [db]} [_ i canvas]]
   (println "canvas mounted")
   (if-let [_ (get-in db [:pdf :pages i :canvas])] 
       {}
     (let [tmp-db (assoc-in db [:pdf :pages i :canvas] canvas)
           w (get-in db [:pdf :params :canvas-width])
           h (get-in db [:pdf :params :canvas-height])]
        ;;  (do
        ;;    (println "canvas w" (.-width canvas))
        ;;    (set! canvas -width w)
        ;;    (println "canvas w" (.-width canvas)))
       (println "canvas mounted with height: " h)
       (set! canvas -width w)
       (set! canvas -height h)
       (match [(get-in db [:pdf :pages i :status])
               (get-in db [:pdf :pages i :update])]
         [:waiting-for-canvas :cancelled] {:db (render-cancelled-db-update tmp-db i)}
         [:waiting-for-canvas _] {:db (assoc-in tmp-db [:pdf :pages i :status] :rendering)
                                  :fx [[:pdf/render-page [(get-in db [:pdf :params :scale])
                                                          i
                                                          (get-in db [:pdf :pages i :page-obj])
                                                          canvas]]]}
         :else {:db tmp-db})))))

(rf/reg-sub
 :pdf/panel-state
 (fn [db]
   (get-in db [:pdf :panel-state])))

(rf/reg-sub
 :pdf/page-rendered?
 (fn [db [_ i]]
   (= :rendered (get-in db [:pdf :pages i :status]))))

(rf/reg-sub
 :pdf/pdf-obj
 (fn [db _]
   (get-in db [:pdf :pdf-obj])))

(rf/reg-sub
 :pdf/page-count
 (fn [db _]
   (get-in db [:pdf :params :page-count])))

(rf/reg-sub
 :pdf/canvas-size
 (fn [db _]
   [(get-in db [:pdf :params :canvas-width])
    (get-in db [:pdf :params :canvas-height])]))

(rf/reg-sub
 :pdf/params
 (fn [db [_ k]]
   (get-in db [:pdf :params k])))
(rf/reg-sub
 :pdf/nav-input-val
 (fn [db _]
   (get-in db [:pdf :nav-input-val])))

(rf/reg-event-db
 :pdf/nav-input-change
 (fn [db [_ input-val]]
   (assoc-in db [:pdf :nav-input-val] input-val)))


;;#########################################################################
;;#########################################################################
;;#########################################################################
; Components
;;#########################################################################
;;#########################################################################
;;#########################################################################

(defn page-spinner []
  [:div {:style {:background-color "#FFFFFF"
                 :position "absolute"
                 :top "calc(50% - 80px)"
                 :left "calc(50% - 80px)"}}
   (into [:div {:class "lds-spinner"}] (repeat 12 [:div]))])

(defn page-nav []
  (let [cur-page @(rf/subscribe [:pdf/params :center-page])
        page-count @(rf/subscribe [:pdf/page-count])
        nav-input-val @(rf/subscribe [:pdf/nav-input-val])]
    [:div
     [:input {:style {:width "50px"}
              :type "number"
              :value (if (nil? nav-input-val)
                       (inc cur-page)
                       nav-input-val)
              :on-change #(rf/dispatch-sync [:pdf/nav-input-change (.. % -target -value)])
              :on-key-down (fn [e]
                             (when (= "Enter" (.-key e))
                               (let [page-num (if (nil? nav-input-val)
                                                cur-page
                                                (dec (js/parseInt nav-input-val)))]
                                 (rf/dispatch [:pdf/seek-page page-num]))))}]
     [:span (str " / " page-count)]]))

(defn nav-bar []
  (let [scale @(rf/subscribe [:pdf/params :scale])]
    [:div {:style {:display "flex"
                   :flex-direction "row"
                   :width "100%"
                   :height "50px"
                   :background-color "#0074D9"}}
     [:button {:on-click #(rf/dispatch [:pdf/view-scale-changed (+ scale 0.25)])} "+"]
     [:button {:on-click #(rf/dispatch [:pdf/view-scale-changed (- scale 0.25)])} "-"]
     [:span (str "Zoome=" scale)]
     [page-nav]]))

(defn page-canvas [i]
  [:canvas {:ref (fn [r]
                   (when (not (nil? r))
                     (rf/dispatch [:pdf/canvas-mounted i r])))
            :style {:display "block"}}])

(defn pdf-page [i]
  (println "pdf-page component")
  (let [rendered? @(rf/subscribe [:pdf/page-rendered? i])]
    [:div {:style {:margin (str (:page-margin GLOBALS) "px")
                   :position "relative"}}
     [page-canvas i]
     (when (not rendered?)
       [page-spinner])
     ;text layer highlight stuff here, when page is rendered
     ]))

(defn on-scroll [canvas-height _]
  (let [el (js/document.getElementById "page-container")
        scroll-top (.-scrollTop el)
        view-height (.-clientHeight el)
        margin (:page-margin GLOBALS)
        center-page (js/Math.floor (/ (+ scroll-top (/ view-height 2)) (+ canvas-height (* 2 margin))))]
    (println view-height canvas-height)
    (rf/dispatch [:pdf/maybe-new-center-page center-page])))

(defn pdf-component []
  (let [panel-state @(rf/subscribe [:pdf/panel-state]) ;; :closed | :fullscreen | :open 
        page-count @(rf/subscribe [:pdf/page-count])
        [_ height] @(rf/subscribe [:pdf/canvas-size])] 
    (println "pdf-component render fn")
    (println panel-state page-count)
    [:div {:style {:height "100vh"
                   :display "flex"
                   :flex-direction "column"}}
     [nav-bar]
     (if (nil? page-count)
       [:div "LOADING PDF"]
       (into [:div {:style {:display "flex"
                            :flex-direction "column"
                            :background-color "#525659"
                            :width "100%"
                            :align-items "center"
                            :flex "1"
                            :overflow-y "scroll"} 
                    :id "page-container" 
                    :on-scroll (partial on-scroll height)}]
             (map #(vector pdf-page %) (range page-count))))]))


;;#########################################################################
;;#########################################################################

(defn y-of-page [page-num margin canvas-height]
  (* page-num (+ canvas-height (* 2 margin))))

;;########################################################################
;; Top Level User Initiated Events
;;########################################################################
(rf/reg-event-fx
 :pdf/maybe-new-center-page
 (fn [{:keys [db]} [_ center-page]]
   (if (not= center-page (get-in db [:pdf :params :center-page]))
     {:db (-> (assoc-in db [:pdf :params :center-page] center-page)
              (assoc-in [:pdf :nav-input-val] nil))
      :fx [[:dispatch [:pdf/check-for-work]]]
      }
     {:db db})))

(rf/reg-event-fx
 :pdf/seek-page
 (fn [{:keys [db]} [_ page-num]]
   {:db (-> (assoc-in db [:pdf :nav-input-val] nil)
            (assoc-in [:pdf :params :center-page] page-num))
    :fx [[:pdf/scroll-to (y-of-page page-num 10 (get-in db [:pdf :params :canvas-height]))]
         [:dispatch [:pdf/check-for-work]]]}))

(rf/reg-fx
 :pdf/scroll-to
 (fn [y]
   (let [el (js/document.getElementById "page-container")]
     (.scrollTo el #js {:top y :behavior "instant"}))))

(rf/reg-event-fx
 :pdf/view-scale-changed
 (fn [{:keys [db]} [_ scale]]
     {:db (reduce (fn [acc-db [i page]]
                    (if (or (= :rendered (:status page))
                            (= :rendering (:status page)))
                      (update-in acc-db [:pdf :pages i] assoc :update :re-render)
                      acc-db))
                  (assoc-in db [:pdf :params :scale] scale)
                  (get-in db [:pdf :pages]))
      :fx [
           [:dispatch [:pdf/check-for-work]]]}))

(rf/reg-fx
 :pdf/resize-canvases
 (fn [[canvases width height]]
   (println "reaize ALL OF THEM")
   (println (count canvases))
   (doseq [canvas canvases]
     (set! canvas -width width)
     (set! canvas -height height))))

;; DONE(jecneps): what if click to send open event but pdfjs hasn't loaded yet?
;; (rf/reg-event-fx
;;  :pdf/quote-clicked
;;  (fn [{:keys [db]} [_ url]]
;;    {:db (assoc-in db [:pdf :params :center-page] 1) ;TODO(jecneps): derive from quote info
;;     :fx [[:pdf/load-pdf [(:pdfjs db) url]]
;;          (when (= :closed (get-in db [:pdf :panel-state]))
;;            [:pdf/set-pdf-panel-state :open])]}))

;; (rf/reg-event-db
;;  :pdf/set-pdf-panel-state
;;  (fn [db [_ state]]
;;    (assoc-in db [:pdf :panel-state] state)))

;;########################################################################
;; Top Level Initialization
;;########################################################################

;TODO(jecneps): command-queue seems like bad name
(rf/reg-event-fx
 :pdf/pdf-load-request
 (fn [{:keys [db]} [_ url]]
   (if-let [^js pdfjs (get-in db [:pdf :pdfjs])] 
       {:fx [[:pdf/load-pdf [pdfjs url]]]}
     {:db (assoc-in db [:pdf :command-queue] url)})))

(rf/reg-fx
 :pdf/load-pdf
 (fn [[^js pdfjs url]] 
   (js-await [^js pdf-obj (.-promise (.getDocument pdfjs url))]
            
               (rf/dispatch [:pdf/pdf-loaded pdf-obj]))))

(defn pdf-init-db [db ^js pdf-obj]
  (let [page-count (.-numPages pdf-obj)]
    (-> db
        (assoc-in [:pdf :pdf-obj] pdf-obj)
        (assoc-in [:pdf :command-queue] nil)
        (update-in [:pdf :params]
                   assoc
                   :window-size 10
                   :center-page 0
                   :max-in-flight 5
                   :scale 1
                   :canvas-width 595
                   :canvas-height 842
                   :page-count page-count)
        (assoc-in [:pdf :pages] (into {} (map #(vector % {:index %
                                                          :status :inactive})
                                              (range page-count)))))))

(rf/reg-event-fx
 :pdf/pdf-loaded
 (fn [{:keys [db]} [_ ^js pdf-obj]] 
     {:db (pdf-init-db db pdf-obj)
      :fx [[:dispatch [:pdf/check-for-work]]]
      }))

(rf/reg-event-fx
 :pdf/page-start
 (fn [_ _]
   {:fx [[:pdf/load-external-pdfjs]]}))

(rf/reg-fx
 :pdf/load-external-pdfjs
 (fn [_]
   (js-await [^js module (esm/dynamic-import "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.189/pdf.min.mjs")]
             (set! (.. module -GlobalWorkerOptions -workerSrc) "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.189/pdf.worker.min.mjs")
             (rf/dispatch [:pdf/pdfjs-loaded module]))))

(rf/reg-event-fx
 :pdf/pdfjs-loaded
 (fn [{:keys [db]} [_ ^js pdfjs]]
   {:db (assoc-in db [:pdf :pdfjs] pdfjs)
    :fx (when-let [url (get-in db [:pdf :command-queue])]
          [[:pdf/load-pdf [pdfjs url]]])}))