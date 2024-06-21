(ns pdf-cljs.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 :pdf/panel-state
 (fn [db]
   (get-in db [:pdf :panel-state])))

(rf/reg-sub
 :pdf/page-rendered?
 (fn [db [_ i]]
   (= :rendered (get-in db [:pdf :pages i :status]))))

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