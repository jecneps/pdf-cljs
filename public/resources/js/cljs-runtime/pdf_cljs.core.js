goog.provide('pdf_cljs.core');
if((typeof pdf_cljs !== 'undefined') && (typeof pdf_cljs.core !== 'undefined') && (typeof pdf_cljs.core.pdfjs !== 'undefined')){
} else {
pdf_cljs.core.pdfjs = null;
}
pdf_cljs.core.in_range_QMARK_ = (function pdf_cljs$core$in_range_QMARK_(i,center,window){
return (cljs.core.abs((i - center)) < window);
});
pdf_cljs.core.in_range_slice = (function pdf_cljs$core$in_range_slice(v,center,window){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(function (){var x__5087__auto__ = (0);
var y__5088__auto__ = (center - window);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})(),(function (){var x__5090__auto__ = cljs.core.count(v);
var y__5091__auto__ = (center + window);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})());
});
pdf_cljs.core.teardown_update = (function pdf_cljs$core$teardown_update(page){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(page,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"inactive","inactive",-306247616),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update","update",1045576396),null,new cljs.core.Keyword(null,"page-obj","page-obj",901698037),null], 0));
});
pdf_cljs.core.cancelled_update = (function pdf_cljs$core$cancelled_update(page){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(page,new cljs.core.Keyword(null,"page-obj","page-obj",901698037),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"cancelled","cancelled",488726224)], 0));
});
pdf_cljs.core.loading_update = (function pdf_cljs$core$loading_update(page){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"loading","loading",-737050189));
});
pdf_cljs.core.re_render_update = (function pdf_cljs$core$re_render_update(page){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.Keyword(null,"update","update",1045576396),null);
});
pdf_cljs.core.prioritize_pages = (function pdf_cljs$core$prioritize_pages(page_nums,cur_in_flight,center,max_in_flight){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"i","i",-1386841315),cljs.core.take.cljs$core$IFn$_invoke$arity$2((max_in_flight - cur_in_flight),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dist","dist",-1401837144),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"i","i",-1386841315),i,new cljs.core.Keyword(null,"dist","dist",-1401837144),cljs.core.abs((center - i))], null);
}),page_nums))));
});
pdf_cljs.core.process_in_range_pages = (function pdf_cljs$core$process_in_range_pages(pages,scale,center,max_in_flight,pdf_obj){
var cur_in_flight = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34473_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rendering","rendering",-424074478),null,new cljs.core.Keyword(null,"loading","loading",-737050189),null], null), null),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__34473_SHARP_));
}),cljs.core.vals(pages)));
var pages_to_load = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34474_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inactive","inactive",-306247616),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__34474_SHARP_))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"re-render","re-render",1133553258),new cljs.core.Keyword(null,"update","update",1045576396).cljs$core$IFn$_invoke$arity$1(p1__34474_SHARP_))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rendering","rendering",-424074478),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__34474_SHARP_))))));
}),cljs.core.vals(pages));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__34475,i){
var vec__34476 = p__34475;
var updates_acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34476,(0),null);
var effects_acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34476,(1),null);
var acc = vec__34476;
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pages,i);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inactive","inactive",-306247616),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(page))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(updates_acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,pdf_cljs.core.loading_update], null)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(effects_acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","load-page","pdf/load-page",-1339448749),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pdf_obj,i], null)], null))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"re-render","re-render",1133553258),new cljs.core.Keyword(null,"update","update",1045576396).cljs$core$IFn$_invoke$arity$1(page))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(updates_acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,pdf_cljs.core.re_render_update], null)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(effects_acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","render-page","pdf/render-page",-1818110591),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale,i,new cljs.core.Keyword(null,"page-obj","page-obj",901698037).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(page)], null)], null))], null);
} else {
return acc;

}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),pdf_cljs.core.prioritize_pages(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915),pages_to_load),cur_in_flight,center,max_in_flight));
});
pdf_cljs.core.process_out_of_range_pages = (function pdf_cljs$core$process_out_of_range_pages(pages){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__34479,page){
var vec__34480 = p__34479;
var updates_acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34480,(0),null);
var effects_acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34480,(1),null);
var acc = vec__34480;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rendered","rendered",-1352292910),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(page))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(updates_acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(page),pdf_cljs.core.teardown_update], null)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(effects_acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","reset-page-canvas","pdf/reset-page-canvas",-968555230),new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(page)], null))], null);
} else {
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancelled","cancelled",488726224),new cljs.core.Keyword(null,"update","update",1045576396).cljs$core$IFn$_invoke$arity$1(page))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(page))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rendering","rendering",-424074478),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(page))))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(updates_acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(page),pdf_cljs.core.cancelled_update], null)),effects_acc], null);
} else {
return acc;

}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),pages);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pdf","check-for-work","pdf/check-for-work",-869556035),(function (p__34483,_){
var map__34484 = p__34483;
var map__34484__$1 = cljs.core.__destructure_map(map__34484);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34484__$1,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pdf-obj","pdf-obj",-287134594)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var pdf_obj = temp__5804__auto__;
var pages = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513)], null));
var map__34485 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"params","params",710516235)], null));
var map__34485__$1 = cljs.core.__destructure_map(map__34485);
var center_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34485__$1,new cljs.core.Keyword(null,"center-page","center-page",943139914));
var window_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34485__$1,new cljs.core.Keyword(null,"window-size","window-size",923834855));
var max_in_flight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34485__$1,new cljs.core.Keyword(null,"max-in-flight","max-in-flight",-1111611362));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34485__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var pages_in_range = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34489){
var vec__34490 = p__34489;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34490,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34490,(1),null);
return pdf_cljs.core.in_range_QMARK_(k,center_page,window_size);
}),pages));
var pages_out_of_range = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34493){
var vec__34494 = p__34493;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34494,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34494,(1),null);
return (!(pdf_cljs.core.in_range_QMARK_(k,center_page,window_size)));
}),pages));
var vec__34486 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,pdf_cljs.core.process_out_of_range_pages(pages_out_of_range),pdf_cljs.core.process_in_range_pages(pages_in_range,scale,center_page,max_in_flight,pdf_obj));
var updates = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34486,(0),null);
var effects = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34486,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc_db,p__34497){
var vec__34498 = p__34497;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34498,(0),null);
var update_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34498,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(acc_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),i], null),update_fn);
}),db,updates),new cljs.core.Keyword(null,"fx","fx",-1237829572),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,effects)], null);
} else {
return null;
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword("pdf","load-page","pdf/load-page",-1339448749),(function (p__34501){
var vec__34502 = p__34501;
var pdf_obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34502,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34502,(1),null);
return pdf_obj.getPage((i + (1))).then((function (page_obj){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","page-loaded","pdf/page-loaded",973980525),i,page_obj], null));
}));
}));
pdf_cljs.core.render_cancelled_fx = (function pdf_cljs$core$render_cancelled_fx(db,i){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i], null),cljs.core.assoc,new cljs.core.Keyword(null,"update","update",1045576396),null,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"inactive","inactive",-306247616)], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"disptach","disptach",644920122),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","check-for-work","pdf/check-for-work",-869556035)], null)], null)], null)], null);
});
pdf_cljs.core.render_cancelled_db_update = (function pdf_cljs$core$render_cancelled_db_update(db,i){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i], null),cljs.core.assoc,new cljs.core.Keyword(null,"update","update",1045576396),null,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"inactive","inactive",-306247616)], 0));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pdf","page-loaded","pdf/page-loaded",973980525),(function (p__34505,p__34506){
var map__34507 = p__34505;
var map__34507__$1 = cljs.core.__destructure_map(map__34507);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34507__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34508 = p__34506;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34508,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34508,(1),null);
var page_obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34508,(2),null);
var page = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i], null));
var scale = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"scale","scale",-230427353)], null));
var ocr_34511 = new cljs.core.Keyword(null,"update","update",1045576396).cljs$core$IFn$_invoke$arity$1(page);
var ocr_34512 = (new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(page) == null);
try{if(cljs.core.keyword_identical_QMARK_(ocr_34511,new cljs.core.Keyword(null,"cancelled","cancelled",488726224))){
return pdf_cljs.core.render_cancelled_fx(db,i);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34518){if((e34518 instanceof Error)){
var e__21480__auto__ = e34518;
if((e__21480__auto__ === cljs.core.match.backtrack)){
try{if((ocr_34512 === true)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i], null),cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"waiting-for-canvas","waiting-for-canvas",-1443916769),new cljs.core.Keyword(null,"page-obj","page-obj",901698037),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page_obj], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34519){if((e34519 instanceof Error)){
var e__21480__auto____$1 = e34519;
if((e__21480__auto____$1 === cljs.core.match.backtrack)){
try{if((ocr_34512 === false)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i], null),cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"rendering","rendering",-424074478),new cljs.core.Keyword(null,"page-obj","page-obj",901698037),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page_obj], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","render-page","pdf/render-page",-1818110591),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale,i,page_obj,new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(page)], null)], null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34520){if((e34520 instanceof Error)){
var e__21480__auto____$2 = e34520;
if((e__21480__auto____$2 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_34511)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_34512)].join('')));
} else {
throw e__21480__auto____$2;
}
} else {
throw e34520;

}
}} else {
throw e__21480__auto____$1;
}
} else {
throw e34519;

}
}} else {
throw e__21480__auto__;
}
} else {
throw e34518;

}
}}));
re_frame.core.reg_fx(new cljs.core.Keyword("pdf","render-page","pdf/render-page",-1818110591),(function (p__34521){
var vec__34522 = p__34521;
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34522,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34522,(1),null);
var page_obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34522,(2),null);
var canvas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34522,(3),null);
var viewport = page_obj.getViewport(({"scale": scale}));
var context = canvas.getContext("2d");
var render_context = ({"canvasContext": context, "viewport": viewport});
(canvas.height = viewport.height);

(canvas.width = viewport.width);

return page_obj.render(render_context).promise.then((function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","page-rendered","pdf/page-rendered",1807887428),i], null));
}));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pdf","page-rendered","pdf/page-rendered",1807887428),(function (p__34525,p__34526){
var map__34527 = p__34525;
var map__34527__$1 = cljs.core.__destructure_map(map__34527);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34527__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34528 = p__34526;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34528,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34528,(1),null);
var scale = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"scale","scale",-230427353)], null));
var page = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"re-render","re-render",1133553258),new cljs.core.Keyword(null,"update","update",1045576396).cljs$core$IFn$_invoke$arity$1(page))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i], null),cljs.core.assoc,new cljs.core.Keyword(null,"update","update",1045576396),null),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","render-page","pdf/render-page",-1818110591),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale,i,new cljs.core.Keyword(null,"page-obj","page-obj",901698037).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(page)], null)], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i], null),cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"rendered","rendered",-1352292910)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","check-for-work","pdf/check-for-work",-869556035)], null)], null)], null)], null);
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword("pdf","reset-page-canvas","pdf/reset-page-canvas",-968555230),(function (canvas_ref){
var ctx = canvas_ref.getContext("2d");
return ctx.reset();
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pdf","canvas-mounted","pdf/canvas-mounted",-1454820776),(function (p__34531,p__34532){
var map__34533 = p__34531;
var map__34533__$1 = cljs.core.__destructure_map(map__34533);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34533__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34534 = p__34532;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34534,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34534,(1),null);
var canvas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34534,(2),null);
var tmp_db = cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i,new cljs.core.Keyword(null,"canvas","canvas",-1798817489)], null),canvas);
var ocr_34537 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i,new cljs.core.Keyword(null,"state","state",-1988618099)], null));
var ocr_34538 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i,new cljs.core.Keyword(null,"update","update",1045576396)], null));
try{if(cljs.core.keyword_identical_QMARK_(ocr_34537,new cljs.core.Keyword(null,"waiting-for-canvas","waiting-for-canvas",-1443916769))){
try{if(cljs.core.keyword_identical_QMARK_(ocr_34538,new cljs.core.Keyword(null,"cancelled","cancelled",488726224))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),pdf_cljs.core.render_cancelled_db_update(tmp_db,i)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34543){if((e34543 instanceof Error)){
var e__21480__auto__ = e34543;
if((e__21480__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(tmp_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i,new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"rendering","rendering",-424074478)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","render-page","pdf/render-page",-1818110591),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"scale","scale",-230427353)], null)),i,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i,new cljs.core.Keyword(null,"page-obj","page-obj",901698037)], null)),canvas], null)], null)], null)], null);
} else {
throw e__21480__auto__;
}
} else {
throw e34543;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34542){if((e34542 instanceof Error)){
var e__21480__auto__ = e34542;
if((e__21480__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),tmp_db], null);
} else {
throw e__21480__auto__;
}
} else {
throw e34542;

}
}}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("pdf","panel-state","pdf/panel-state",-1353120880),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"panel-state","panel-state",-1353075558)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("pdf","page","pdf/page",849240095),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__34544){
var vec__34545 = p__34544;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34545,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34545,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("pdf","pdf-obj","pdf/pdf-obj",-287179376),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pdf-obj","pdf-obj",-287134594)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("pdf","page-count","pdf/page-count",2081708366),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"page-count","page-count",2081744960)], null));
})], 0));
pdf_cljs.core.page_spinner = (function pdf_cljs$core$page_spinner(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"red",new cljs.core.Keyword(null,"width","width",-384071477),"100px",new cljs.core.Keyword(null,"height","height",1025178622),"100px"], null)], null)], null);
});
pdf_cljs.core.pdf_page = (function pdf_cljs$core$pdf_page(i){
var page = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","page","pdf/page",849240095),i], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
if((!((r == null)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","canvas-mounted","pdf/canvas-mounted",-1454820776),i,r], null));
} else {
return null;
}
})], null)], null),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rendered","rendered",-1352292910),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(page)))))?pdf_cljs.core.page_spinner():null)], null);
});
pdf_cljs.core.pdf_component = (function pdf_cljs$core$pdf_component(){
var panel_state = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","panel-state","pdf/panel-state",-1353120880)], null)));
var pdf = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","pdf-obj","pdf/pdf-obj",-287179376)], null)));
var page_count = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","page-count","pdf/page-count",2081708366)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),(((pdf == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"LOADING PDF"], null):cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pdf_cljs.core.pdf_page,cljs.core.range.cljs$core$IFn$_invoke$arity$1(page_count))))], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pdf","view-scale-changed","pdf/view-scale-changed",-962356648),(function (p__34548,p__34549){
var map__34550 = p__34548;
var map__34550__$1 = cljs.core.__destructure_map(map__34550);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34550__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34551 = p__34549;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34551,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34551,(1),null);
var center = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"center-page","center-page",943139914)], null));
var window__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"window-size","window-size",923834855)], null));
var pages = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"scale","scale",-230427353)], null),scale),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513)], null),(function (pages__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page){
var G__34554 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(page);
var G__34554__$1 = (((G__34554 instanceof cljs.core.Keyword))?G__34554.fqn:null);
switch (G__34554__$1) {
case "rendered":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"re-render","re-render",1133553258));

break;
case "else":
return page;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34554__$1)].join('')));

}
}),pages__$1));
})),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","check-for-work","pdf/check-for-work",-869556035)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pdf","quote-clicked","pdf/quote-clicked",281773171),(function (p__34555,p__34556){
var map__34557 = p__34555;
var map__34557__$1 = cljs.core.__destructure_map(map__34557);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34557__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34558 = p__34556;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34558,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34558,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"center-page","center-page",943139914)], null),(1)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","load-pdf","pdf/load-pdf",-80203777),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdfjs","pdfjs",-1034717155).cljs$core$IFn$_invoke$arity$1(db),url], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"panel-state","panel-state",-1353075558)], null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","set-pdf-panel-state","pdf/set-pdf-panel-state",-2045680126),new cljs.core.Keyword(null,"open","open",-1763596448)], null):null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pdf","set-pdf-panel-state","pdf/set-pdf-panel-state",-2045680126),(function (db,p__34561){
var vec__34562 = p__34561;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34562,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34562,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"panel-state","panel-state",-1353075558)], null),state);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pdf","pdf-load-request","pdf/pdf-load-request",-1136550793),(function (p__34565,p__34566){
var map__34567 = p__34565;
var map__34567__$1 = cljs.core.__destructure_map(map__34567);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34567__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34568 = p__34566;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34568,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34568,(1),null);
var temp__5802__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pdfjs","pdfjs",-1034717155)], null));
if(cljs.core.truth_(temp__5802__auto__)){
var pdfjs = temp__5802__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","load-pdf","pdf/load-pdf",-80203777),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pdfjs,url], null)], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"command-queue","command-queue",-45855917)], null),url)], null);
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword("pdf","load-pdf","pdf/load-pdf",-80203777),(function (p__34571){
var vec__34572 = p__34571;
var pdfjs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34572,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34572,(1),null);
return pdfjs.getDocument(url).promise.then((function (pdf_obj){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","pdf-loaded","pdf/pdf-loaded",1080648493),pdf_obj], null));
}));
}));
pdf_cljs.core.pdf_init_db = (function pdf_cljs$core$pdf_init_db(db,pdf_obj){
var page_count = pdf_obj.numPages;
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pdf-obj","pdf-obj",-287134594)], null),pdf_obj),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"command-queue","command-queue",-45855917)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core.assoc,new cljs.core.Keyword(null,"window-size","window-size",923834855),(50),new cljs.core.Keyword(null,"center-page","center-page",943139914),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),new cljs.core.Keyword(null,"max-in-flight","max-in-flight",-1111611362),(5),new cljs.core.Keyword(null,"scale","scale",-230427353),1.5,new cljs.core.Keyword(null,"page-count","page-count",2081744960),page_count], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34575_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__34575_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),p1__34575_SHARP_,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"inactive","inactive",-306247616)], null)],null));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(page_count))));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pdf","pdf-loaded","pdf/pdf-loaded",1080648493),(function (p__34576,p__34577){
var map__34578 = p__34576;
var map__34578__$1 = cljs.core.__destructure_map(map__34578);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34578__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34579 = p__34577;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34579,(0),null);
var pdf_obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34579,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),pdf_cljs.core.pdf_init_db(db,pdf_obj),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","check-for-work","pdf/check-for-work",-869556035)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pdf","page-start","pdf/page-start",874111316),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","load-external-pdfjs","pdf/load-external-pdfjs",-2036032102)], null)], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("pdf","load-external-pdfjs","pdf/load-external-pdfjs",-2036032102),(function (_){
return shadow.esm.dynamic_import("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.189/pdf.min.mjs").then((function (module){
(module.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.189/pdf.worker.min.mjs");

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","pdfjs-loaded","pdf/pdfjs-loaded",-2106548560),module], null));
}));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pdf","pdfjs-loaded","pdf/pdfjs-loaded",-2106548560),(function (p__34582,p__34583){
var map__34584 = p__34582;
var map__34584__$1 = cljs.core.__destructure_map(map__34584);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34584__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34585 = p__34583;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34585,(0),null);
var pdfjs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34585,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pdfjs","pdfjs",-1034717155)], null),pdfjs),new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (){var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"command-queue","command-queue",-45855917)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var url = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","load-pdf","pdf/load-pdf",-80203777),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pdfjs,url], null)], null)], null);
} else {
return null;
}
})()], null);
}));

//# sourceMappingURL=pdf_cljs.core.js.map
