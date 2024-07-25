(ns pdf-cljs.views
  (:require [re-frame.core :as rf]
            [pdf-cljs.subs]
            [pdf-cljs.globals :as g]))





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

(defn nav-bar [panel-state]
  (let [scale @(rf/subscribe [:pdf/params :scale])]
    [:div {:style {:display "flex"
                   :flex-direction "row"
                   :width "100%"
                   :height "50px"
                   :background-color "#0074D9"}}
     [:button {:on-click #(rf/dispatch [:pdf/view-scale-changed (+ scale 0.25)])} "+"]
     [:button {:on-click #(rf/dispatch [:pdf/view-scale-changed (- scale 0.25)])} "-"]
     [:span (str "Zoome=" scale)]
     [page-nav]
     [:button {:on-click #(rf/dispatch [:pdf/set-pdf-panel-state :closed])} "X"]
     (let [[event img] (if (= :fullscreen panel-state)
                         [[:pdf/set-pdf-panel-state :open] "SMALLER"]
                         [[:pdf/set-pdf-panel-state :fullscreen] "BIGGER"])]
       [:button {:on-click #(rf/dispatch (into [] event))} img])]))

(defn page-canvas [i]
  [:canvas {:ref (fn [r]
                   (when (not (nil? r))
                     (rf/dispatch [:pdf/canvas-mounted i r])))
            :style {:display "block"}}])

(defn text-layer [i]
  [:div {:class "textLayer"
         :ref (fn [r]
                (when (not (nil? r))
                  (rf/dispatch [:pdf/text-layer-div-mounted i r])))}])

(defn pdf-page [i]
  (let [rendered? @(rf/subscribe [:pdf/page-rendered? i])]
    [:div {:style {:margin (str (:page-margin g/GLOBALS) "px")
                   :position "relative"}}
     [page-canvas i]
     [text-layer i]
     (when (not rendered?)
       [page-spinner])
     ;text layer highlight stuff here, when page is rendered
     ]))

(defn on-scroll [canvas-height _]
  (let [el (js/document.getElementById "page-container")
        scroll-top (.-scrollTop el)
        view-height (.-clientHeight el)
        margin (:page-margin g/GLOBALS)
        center-page (js/Math.floor (/ (+ scroll-top (/ view-height 2)) (+ canvas-height (* 2 margin))))]
    (println "onscroll, canvas-height: " canvas-height)
    (rf/dispatch [:pdf/maybe-new-center-page center-page])))

(defn pdf-component []
  (let [panel-state @(rf/subscribe [:pdf/panel-state]) ;; :closed | :fullscreen | :open 
        page-count @(rf/subscribe [:pdf/page-count])
        [_ height] @(rf/subscribe [:pdf/canvas-size])
        base-style {:display "flex"
                    :flex-direction "column"
                    :height "100vh"}
        full-style {:position "fixed"
                    :width "100vw"
                    :z-index "1"
                    :left "0"
                    :top "0"}]
    (println "PDF COMP: " panel-state)
    [:div {:style (case panel-state
                    :fullscreen (merge full-style base-style)
                    :closed (merge base-style {:display "none"})
                    nil (merge base-style {:display "none"})
                    base-style)
           :id "pdf-component"}
     [nav-bar panel-state]
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