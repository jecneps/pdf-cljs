(ns pdf-cljs.core
  (:require [clojure.core.match :refer [match]]
            [shadow.cljs.modern :refer (js-await)]
            [shadow.esm :as esm]
            [re-frame.core :as rf]))


; a page :status can have the following grammar
;;;;;; stats ::= whole-page-status | <canvas-status, text-layer-status>
;;;;;; whole-page-status ::= :inactive | :loading | :rendered
;;;;;; canvas-status ::= :waiting-for-canvas | :rendering | :rendered
;;;;;; text-layer-status ::= :waiting-for-text-layer-div | :getting-text-content | :aborted | :rendering | :rendered

(defn in-flight? [page-status]
  (or (= :loading page-status)
      (vector? page-status)))

(defn in-range? [i center window]
  (< (abs (- i center)) window))

(defn update-page
  ([db i k v] (update-in db [:pdf :pages i] assoc k v))
  ([db i k v & kvs] (apply update-in db [:pdf :pages i] assoc k v kvs)))

(defn careful-destructure [v]
  (if (vector? v)
    [v nil]
    [[] v]))

;;##############################################################################
;;##############################################################################
;; Checking Logic
;;##############################################################################
;;##############################################################################

(defn teardown-update [page]
  (assoc page 
         :status :inactive
         :update nil
         :page-obj nil))

(def teardown-keys [:status :inactive
                    :update nil
                    :text-contents nil
                    :page-obj nil])

(defn cancelled-update [page]
  (assoc page 
         :page-obj nil
         :update :cancel))

(def cancel-keys [:page-obj nil])
;TODO(Jecnep): errrrror??? does niling the page object here fuck other text-layer things up?

(defn loading-update [page]
  (assoc page
         :status :loading))

(def loading [:status :loading])

(defn re-render-update [page]
  (assoc page
         :update nil
         :status [:rendering :rendering]))

(defn prioritize-pages [page-nums cur-in-flight center max-in-flight]
  (->> (take (- max-in-flight cur-in-flight)
             (sort-by :dist
                      (map (fn [i] {:i i :dist (abs (- center i))}) page-nums)))
       (map :i)))

(defn process-in-range-pages [pages scale center max-in-flight ^js pdf-obj ^js pdfjs]
  (let [cur-in-flight (count (filter #(in-flight? (:status %)) (vals pages)))
        pages-to-load (filter #(or (= :inactive (:status %)) 
                                   (= :re-render (:update %)))
                              (vals pages))]
    (->> (prioritize-pages (map :index pages-to-load) cur-in-flight center max-in-flight)
         (reduce (fn [[updates-acc effects-acc :as acc] i]
                   (let [page (get pages i)]
                     (cond
                       (= :inactive (:status page)) [(conj updates-acc [i loading-update])
                                                     (conj effects-acc [:pdf/load-page [pdf-obj i]])]
                       (= :re-render (:update page)) [(conj updates-acc [i re-render-update])
                                                      (conj effects-acc 
                                                            [:pdf/reset-page-canvas (:canvas page)]
                                                            [:pdf/render-page
                                                                         [i
                                                                          scale
                                                                          (:page-obj page)
                                                                          (:canvas page)]]
                                                            [:pdf/render-text-layer [i
                                                                                     scale
                                                                                     pdfjs
                                                                                     (:text-contents page)
                                                                                     (.getViewport ^js (:page-obj page) #js {:scale scale})
                                                                                     (:text-layer-div page)]])] 
                       :else acc)))
                 [[] []]))))

(defn process-out-of-range-pages [pages]
  (reduce (fn [[updates-acc effects-acc :as acc] page]
            (cond
              (= :rendered (:status page)) [(conj updates-acc [(:index page) teardown-update])
                                            (conj effects-acc [:pdf/reset-page-canvas (:canvas page)])]
              (and (not= :cancel (:update page))
                   (in-flight? (:status page))) [(conj updates-acc [(:index page) cancelled-update])
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
                                  (process-in-range-pages pages-in-range 
                                                          scale 
                                                          center-page 
                                                          max-in-flight 
                                                          pdf-obj 
                                                          (get-in db [:pdf :pdfjs])))]
       {:db (reduce (fn [acc-db [i update-fn]]
                      (update-in acc-db [:pdf :pages i] update-fn))
                    db
                    updates)
        :fx (into [] effects)
        }))))

;;#########################################################################
;;#########################################################################
;; CHAINED EVENTS
;;#########################################################################
;;#########################################################################


(rf/reg-fx
 :pdf/load-page
 (fn [[^js pdf-obj i]] 
   #_{:clj-kondo/ignore [:unresolved-symbol]}
   (js-await [^js page-obj (.getPage pdf-obj (inc i))]
             ;(rf/dispatch-sync [:pdf/set-page-data i page])
             (rf/dispatch [:pdf/page-loaded i page-obj]))))

(rf/reg-event-fx
 :pdf/page-loaded
 (fn [{:keys [db]} [_ i ^js page-obj]]
   (let [page (get-in db [:pdf :pages i])
         scale (get-in db [:pdf :params :scale])]
     (match [(:update page) (nil? (:canvas page))]
       [:cancel _] {:db (update-page db i 
                                        :update nil 
                                        :status :inactive)
                       :fx [[:dispatch [:pdf/check-for-work]]]}
       [_ true] {:db  (update-page db i
                                   :status [:waiting-for-canvas :getting-text-content]
                                   :page-obj page-obj)
                 :fx [[:pdf/get-text-content [page-obj i]]]}
       [_ false] {:db (update-page db i
                                   :status [:rendering :getting-text-content]
                                   :page-obj page-obj)
                  :fx [[:pdf/render-page [i scale page-obj (:canvas page)]]
                       [:pdf/get-text-content [page-obj i]]]}))))

(rf/reg-event-fx
 :pdf/new-canvas-size
 (fn [{:keys [db]} [_ width height]]
   (println "new canvas size FX")
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
 (fn [[i scale ^js page-obj canvas]]
   (let [viewport (.getViewport page-obj #js {:scale scale})
         context (.getContext canvas "2d")
         render-context #js {:canvasContext context
                             :viewport viewport}
         height (js/Math.round (.-height viewport))
         width (js/Math.round (.-width viewport))]
     (set! canvas -height height)
     (set! canvas -width width)
     #_{:clj-kondo/ignore [:unresolved-symbol]}
     (js-await [_ (.-promise (.render page-obj render-context))]
               (rf/dispatch [:pdf/page-rendered i scale]))
     (rf/dispatch [:pdf/new-canvas-size width height]))))

(rf/reg-event-fx
 :pdf/page-rendered
 (fn [{:keys [db]} [_ i scale-rendered]]
   (let [cur-scale (get-in db [:pdf :params :scale])
         page (get-in db [:pdf :pages i])
         [_ text-layer-status] (:status page)
         re-render? (not= scale-rendered cur-scale)]
     (if (and re-render? (not= :cancel (:update page))) 
       {:db (update-page db i
                         :update nil) ;;TODO(jecneps): is this needed? i think not...
        :fx [[:pdf/reset-page-canvas (:canvas page)]
             [:pdf/render-page [i cur-scale (:page-obj page) (:canvas page)]]]}
       {:db (update-page db i
                         :status (if (= :rendered text-layer-status)
                                   :rendered
                                   [:rendered text-layer-status]))
        :fx [[:dispatch [:pdf/check-for-work]]]}))))

(rf/reg-fx
 :pdf/get-text-content
 (fn [[^js page-obj i]]
   #_{:clj-kondo/ignore [:unresolved-symbol]}
   (js-await [text-contents (.getTextContent page-obj)]
             (rf/dispatch [:pdf/text-contents-ready i text-contents]))))

(rf/reg-event-fx
 :pdf/text-contents-ready
 (fn [{:keys [db]} [_ i text-contents]]
   (let [page (get-in db [:pdf :pages i])
         [canvas-status _] (:status page)
         text-layer-div (:text-layer-div page)]
     (match [(:update page) (nil? text-layer-div)]
       [:cancel _] {:db (update-page db i
                                        :status [canvas-status :aborted])}
       [_ true] {:db (update-page db i
                                 :status [canvas-status :waiting-for-text-layer-div]
                                 :text-contents text-contents)}
       [_ false] {:db (update-page db i
                                   :status [canvas-status :rendering]
                                   :text-contents text-contents)
                  :fx [[:pdf/render-text-layer
                        [i
                         (get-in db [:pdf :params :scale])
                         (get-in db [:pdf :pdfjs])
                         text-contents
                         (.getViewport ^js (:page-obj page) #js {:scale (get-in db [:pdf :params :scale])})
                         text-layer-div]]]}))))

(rf/reg-fx
 :pdf/render-text-layer
 (fn [[i scale ^js pdfjs text-content viewport div-ref]]
   (let [TextLayer (.-TextLayer pdfjs)]
     #_{:clj-kondo/ignore [:unresolved-symbol]}
     (.renderTextLayer pdfjs #js {:textContentSource text-content
                                  :viewport viewport
                                  :container div-ref})

     (rf/dispatch [:pdf/text-layer-rendered i scale]))))

(rf/reg-event-fx
 :pdf/text-layer-rendered
 (fn [{:keys [db]} [_ i scale-rendered]]
   (println "text layer rendered "  i scale-rendered)
   (let [cur-scale (get-in db [:pdf :params :scale])
         _ (println "MADE IT")
         page (get-in db [:pdf :pages i])
         _ (println (:status page))
         [canvas-status _] (:status page)
         re-render? (not= cur-scale scale-rendered)]
     (if (and re-render?
              (not= :cancel (:update page)))
       {:fx [[:pdf/render-text-layer
              [i
               cur-scale
               (get-in db [:pdf :pdfjs])
               (:text-contents page)
               (.getViewport ^js (:page-obj page) #js {:scale cur-scale})
               (:text-layer-div page)]]]}
       {:db (update-page db i
                         :status (if (= :rendered canvas-status)
                                   :rendered
                                   [canvas-status :rendered]))
        :fx [[:dispatch [:pdf/check-for-work]]]}))))


;;######################################################
;;######################################################
;; REFS MOUNTED
;;######################################################
;;######################################################

(rf/reg-event-fx
 :pdf/canvas-mounted
 (fn [{:keys [db]} [_ i canvas]]
     (let [new-db (assoc-in db [:pdf :pages i :canvas] canvas)
           [[canvas-status text-layer-status] _] (careful-destructure (get-in db [:pdf :pages i :status]))
           w (get-in db [:pdf :params :canvas-width])
           h (get-in db [:pdf :params :canvas-height])]
       (set! canvas -width w)
       (set! canvas -height h) ;TODO(jecneps): make this an effect
       (match [(get-in db [:pdf :pages i :update])
               canvas-status]
         [:cancel _] {:db new-db
                        :fx [[:pdf/resize-canvas [canvas w h]]
                             [:dispatch [:pdf/check-for-work]]]} 
         [_ :waiting-for-canvas] {:db (update-page new-db i
                                                   :status [:render text-layer-status])
                                  :fx [[:pdf/render-page [i
                                                          (get-in db [:pdf :params :scale]) 
                                                          (get-in db [:pdf :pages i :page-obj])
                                                          canvas]]]}
         :else {:db new-db
                :fx [[:pdf/resize-canvas [canvas w h]]]}))))

(rf/reg-event-fx
 :pdf/text-layer-div-mounted
 (fn [{:keys [db]} [_ i div]]
   (let [new-db (update-page db i :text-layer-div div)
         page (get-in db [:pdf :pages i])
         scale (get-in db [:pdf :params :scale])
         [[canvas-status text-layer-status] _] (careful-destructure (:status page))]
     (match [(get-in db [:pdf :pages i :update])
             text-layer-status]
       [:cancel _] {:db new-db
                    :fx [[:dispatch [:pdf/check-for-work]]]}
       [_ :waiting-for-text-layer-div] {:db (update-page new-db i
                                                         :status [canvas-status :rendering])
                                        :fx [[:pdf/render-text-layer [i
                                                                      scale
                                                                      (get-in db [:pdf :pdfjs])
                                                                      (:text-contents page)
                                                                      (.getViewport ^js (:page-obj page) #js {:scale scale})
                                                                      (:text-layer-div page)]]]}
       :else {:db new-db}))))

;;#########################################################################
;;#########################################################################
;; MISC FXS
;;#########################################################################
;;#########################################################################

(rf/reg-fx
 :pdf/reset-page-canvas
 (fn [canvas-ref]
   (println "reset canvas")
   (let [ctx (.getContext canvas-ref "2d")]
     (.reset ctx))))

(rf/reg-fx
 :pdf/resize-canvases
 (fn [[canvases width height]]
   (println "reaize ALL OF THEM")
   (println (count canvases))
   (doseq [canvas canvases]
     (set! canvas -width width)
     (set! canvas -height height))))

(rf/reg-fx
 :pdf/resize-canvas
 (fn [[canvas width height]]
   (set! canvas -width width)
   (set! canvas -height height)))

(rf/reg-fx
 :pdf/scroll-to
 (fn [y]
   (let [el (js/document.getElementById "page-container")]
     (.scrollTo el #js {:top y :behavior "instant"}))))

;;#########################################################################
;;#########################################################################

(defn y-of-page [page-num margin canvas-height]
  (* page-num (+ canvas-height (* 2 margin))))

;;########################################################################
;;########################################################################
;; TOP LEVEL USER INITIATED EVENTS
;;########################################################################
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

(rf/reg-event-fx
 :pdf/view-scale-changed
 (fn [{:keys [db]} [_ scale]]
     {:db (reduce (fn [acc-db [i page]]
                    (if (= :rendered (:status page))
                      (update-in acc-db [:pdf :pages i] assoc :update :re-render)
                      acc-db))
                  (assoc-in db [:pdf :params :scale] scale)
                  (get-in db [:pdf :pages]))
      :fx [[:dispatch [:pdf/check-for-work]]]}))

(rf/reg-event-db
 :pdf/set-pdf-panel-state
 (fn [db [_ state]]
   (assoc-in db [:pdf :panel-state] state)))

;;########################################################################
;;########################################################################
;; TOP LEVEL INITIALIZATION 
;;########################################################################
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
   #_{:clj-kondo/ignore [:unresolved-symbol]}
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
      :fx [[:dispatch [:pdf/set-pdf-panel-state :open]]
           [:dispatch [:pdf/check-for-work]]]
      }))

(rf/reg-event-fx
 :pdf/page-start
 (fn [_ _]
   {:fx [[:pdf/load-external-pdfjs]
         [:dispatch [:pdf/set-pdf-panel-state :closed]]]}))

(rf/reg-fx
 :pdf/load-external-pdfjs
 (fn [_]
   #_{:clj-kondo/ignore [:unresolved-symbol]}
   (js-await [^js module (esm/dynamic-import "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.189/pdf.min.mjs")]
             (set! (.. module -GlobalWorkerOptions -workerSrc) "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.189/pdf.worker.min.mjs")
             (rf/dispatch [:pdf/pdfjs-loaded module]))))

(rf/reg-event-fx
 :pdf/pdfjs-loaded
 (fn [{:keys [db]} [_ ^js pdfjs]]
   (println "pdfjs loaded")
   {:db (assoc-in db [:pdf :pdfjs] pdfjs)
    :fx (when-let [url (get-in db [:pdf :command-queue])]
          [[:pdf/load-pdf [pdfjs url]]])}))