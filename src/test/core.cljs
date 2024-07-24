(ns test.core
  (:require [reagent.dom :as rdom]
            [reagent.core :as r]
            [re-frame.core :as rf]
            ["react-dom/client" :refer [createRoot]]
            [pdf-cljs.core :as pdfcljs]
            [pdf-cljs.views :refer [pdf-component]]))



(defonce root (createRoot (.. js/document (getElementById "pdf-panel-container"))))

(defn start-page []
  (rf/dispatch-sync [:pdf/page-start])
  ;; (rf/dispatch [:pdf/pdf-load-request "resources/test.pdf"])
  )

(defn init []
  (.render root (r/as-element [pdf-component])))

(defn ^:dev-after-load re-render 
  []
  (init))

(defn init! []
  (start-page)
  (init))