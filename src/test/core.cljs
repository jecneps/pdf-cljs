(ns test.core
  (:require [reagent.dom :as rdom]
            [reagent.core :as r]
            [re-frame.core :as rf]
            ["react-dom/client" :refer [createRoot]]
            [pdf-cljs.core :as pdfcljs]))




(defonce root (createRoot (.. js/document (getElementById "root"))))

(defn start-page []
  (rf/dispatch [:pdf/page-start])
  (rf/dispatch [:pdf/pdf-load-request "resources/test.pdf"]))

(defn init []
  (.render root (r/as-element [pdfcljs/pdf-component])))

(defn ^:dev-after-load re-render 
  []
  (init))

(defn init! []
  (start-page)
  (init))