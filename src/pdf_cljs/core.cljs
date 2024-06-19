(ns pdf-cljs.core
  (:require [clojure.core.match :refer [match]]
            [shadow.cljs.modern :refer (js-await)]
            [shadow.esm :as esm]
            [re-frame.core :as rf]))

(defonce ^js pdfjs nil)

(defn in-range? [i center window]
  (< (abs (- i center)) window))

(defn in-range-slice [v center window]
  (subvec v (max 0 (- center window)) (min (count v) (+ center window))))


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
         :update nil))

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
    (->> (prioritize-pages (map :index pages-to-load) cur-in-flight center max-in-flight)
         (reduce (fn [[updates-acc effects-acc :as acc] i]
                   (let [page (get pages i)]
                     (cond
                       (= :inactive (:status page)) [(conj updates-acc [i loading-update])
                                                     (conj effects-acc [:pdf/load-page [pdf-obj i]])]
                       (= :re-render (:update page)) [(conj updates-acc [i re-render-update])
                                                      (conj effects-acc [:pdf/render-page
                                                                         [scale
                                                                          i
                                                                          (:page-obj page)
                                                                          (:canvas page)]])] ;;TODO(jecneps): might need to fix re-render?
                       :else acc)))
                 [[] []]))))

(defn process-out-of-range-pages [pages]
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
          pages))

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
                      (update-in acc-db [:pdf i] update-fn))
                    db
                    updates)
        :fx (into [] effects)}))))

(rf/reg-fx
 :pdf/load-page
 (fn [[^js pdf-obj i]]
   (js-await [^js page-obj (.getPage pdf-obj (inc i))]
             ;(rf/dispatch-sync [:pdf/set-page-data i page])
             (rf/dispatch [:pdf/page-loaded i page-obj]))))

(defn render-cancelled-fx [db i]
  {:db (update-in db [:pdf :pages i]
                  assoc
                  :update nil
                  :status :inactive)
   :fx [[:disptach [:pdf/check-for-work]]]})

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
     (match [ (:update page) (nil? (:canvas page))]
       [:cancelled _] (render-cancelled-fx db i)
       [_ true] {:db (update-in db [:pdf :pages i]
                                assoc
                                :state :waiting-for-canvas
                                :page-obj page-obj)}
       [_ false] {:db (update-in db [:pdf :pages i]
                                 assoc
                                 :state :rendering
                                 :page-obj page-obj)
                  :fx [[:pdf/render-page [scale i page-obj (:canvas page)]]]}))))

(rf/reg-fx
 :pdf/render-page
 (fn [[scale i ^js page-obj canvas]]
   (let [viewport (.getViewport page-obj #js {:scale scale})
         context (.getContext canvas "2d")
         render-context #js {:canvasContext context
                             :viewport viewport}]
     (set! canvas -height (.-height viewport))
     (set! canvas -width (.-width viewport))
     (js-await [_ (.-promise (.render page-obj render-context))]
               (rf/dispatch [:pdf/page-rendered i])))))

(rf/reg-event-fx
 :pdf/page-rendered
 (fn [{:keys [db]} [_ i]]
   (let [scale (get-in db [:pdf :params :scale])
         page (get-in db [:pdf :pages i])]
     (if (= :re-render (:update page))
       {:db (update-in db [:pdf :pages i] assoc :update nil)
        :fx [[:pdf/render-page [scale i (:page-obj page) (:canvas page)]]]}
       {:db (update-in db [:pdf :pages i] assoc :status :rendered)
        :fx [[:dispatch [:pdf/check-for-work]]]}))))

(rf/reg-fx
 :pdf/reset-page-canvas
 (fn [canvas-ref]
   (let [ctx (.getContext canvas-ref "2d")]
     (. ctx reset))))

;;#########################################################################
; Glue
;;#########################################################################

(rf/reg-event-fx
 :pdf/canvas-mounted
 (fn [{:keys [db]} [_ i canvas]]
   (let [tmp-db (assoc-in db [:pdf :pages i :canvas] canvas)] 
     (match [(get-in db [:pdf :pages i :state])
             (get-in db [:pdf :pages i :update])]
       [:waiting-for-canvas :cancelled] {:db (render-cancelled-db-update tmp-db i)}
       [:waiting-for-canvas _] {:db (assoc-in tmp-db [:pdf :pages i :state] :rendering)
                                :fx [[:pdf/render-page [(get-in db [:pdf :params :scale])
                                                        i
                                                        (get-in db [:pdf :pages i :page-obj])
                                                        canvas]]]}
       :else {:db tmp-db}))))

(rf/reg-sub
 :pdf/panel-state
 (fn [db]
   (get-in db [:pdf :panel-state])))

(rf/reg-sub
 :pdf/page
 (fn [db [_ i]]
   (get-in db [:pdf :pages i])))

(rf/reg-sub
 :pdf/pdf-obj
 (fn [db _]
   (get-in db [:pdf :pdf-obj])))

(rf/reg-sub
 :pdf/page-count
 (fn [db _]
   (get-in db [:pdf :params :page-count])))

;;#########################################################################
; Components
;;#########################################################################

(defn page-spinner []
  [:div {:style {:background-color "red" :width "100px" :height "100px"}}])

(defn pdf-page [i]
  (let [page @(rf/subscribe [:pdf/page i])]
    [:div
     [:canvas {:ref (fn [r]
                      (when (not (nil? r))
                        (rf/dispatch [:pdf/canvas-mounted i r])))}]
     (when (not (= :rendered (:status page)))
       (page-spinner))
     ;text layer highlight stuff here, when page is rendered
     ]))

(defn pdf-component []
  (let [panel-state @(rf/subscribe [:pdf/panel-state]) ;; :closed | :fullscreen | :open
        pdf @(rf/subscribe [:pdf/pdf-obj])
        page-count @(rf/subscribe [:pdf/page-count])]
    [:div
     [:div {:style {:display "flex" :flex-direction "column" :align-items "center"}}
      (if (nil? pdf)
        [:div "LOADING PDF"]
        (into [:div {:style {:display "flex" :flex-direction "column"}}]
              (map pdf-page (range page-count))))]]))


;;#########################################################################
;;#########################################################################



;;########################################################################
;; Top Level User Initiated Events
;;########################################################################

(rf/reg-event-fx
 :pdf/view-scale-changed
 (fn [{:keys [db]} [_ scale]]
   (let [center (get-in db [:pdf :center-page])
         window (get-in db [:pdf :window-size])
         pages (get-in db [:pdf :pages])]
     {:db (-> db
              (assoc-in [:pdf :params :scale] scale)
              (update-in [:pdf :pages] (fn [pages] ;TODO(jecneps): old data shape, update to work at all
                                         (into [] (map (fn [page]
                                                         (case (:status page)
                                                           :rendered (assoc page :update :re-render)
                                                           :else page)) 
                                                       pages)))))
      :fx [[:dispatch [:pdf/check-for-work]]]})))

;; DONE(jecneps): what if click to send open event but pdfjs hasn't loaded yet?
(rf/reg-event-fx
 :pdf/quote-clicked
 (fn [{:keys [db]} [_ url]]
   {:db (assoc-in db [:pdf :params :center-page] 1) ;TODO(jecneps): derive from quote info
    :fx [[:pdf/load-pdf [(:pdfjs db) url]]
         (when (= :closed (get-in db [:pdf :panel-state]))
           [:pdf/set-pdf-panel-state :open])]}))

(rf/reg-event-db
 :pdf/set-pdf-panel-state
 (fn [db [_ state]]
   (assoc-in db [:pdf :panel-state] state)))

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
                   :window-size 50
                   :center-page 0
                   :max-in-flight 5
                   :scale 1.5
                   :page-count page-count)
        (assoc-in [:pdf :pages] (into {} (map #(vector % {:index %
                                                          :status :inactive})
                                              (range page-count)))))))

(rf/reg-event-fx
 :pdf/pdf-loaded
 (fn [{:keys [db]} [_ ^js pdf-obj]] 
     {:db (pdf-init-db db pdf-obj)
      :fx [[:dispatch [:pdf/check-for-work]]]}))

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