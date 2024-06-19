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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(page,new cljs.core.Keyword(null,"update","update",1045576396),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"rendering","rendering",-424074478)], 0));
});
pdf_cljs.core.prioritize_pages = (function pdf_cljs$core$prioritize_pages(page_nums,cur_in_flight,center,max_in_flight){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"i","i",-1386841315),cljs.core.take.cljs$core$IFn$_invoke$arity$2((max_in_flight - cur_in_flight),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dist","dist",-1401837144),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"i","i",-1386841315),i,new cljs.core.Keyword(null,"dist","dist",-1401837144),cljs.core.abs((center - i))], null);
}),page_nums))));
});
pdf_cljs.core.process_in_range_pages = (function pdf_cljs$core$process_in_range_pages(pages,scale,center,max_in_flight,pdf_obj){
var cur_in_flight = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__14832_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rendering","rendering",-424074478),null,new cljs.core.Keyword(null,"loading","loading",-737050189),null], null), null),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__14832_SHARP_));
}),cljs.core.vals(pages)));
var pages_to_load = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__14833_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inactive","inactive",-306247616),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__14833_SHARP_))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"re-render","re-render",1133553258),new cljs.core.Keyword(null,"update","update",1045576396).cljs$core$IFn$_invoke$arity$1(p1__14833_SHARP_))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rendering","rendering",-424074478),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__14833_SHARP_))))));
}),cljs.core.vals(pages));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__14834,i){
var vec__14835 = p__14834;
var updates_acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14835,(0),null);
var effects_acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14835,(1),null);
var acc = vec__14835;
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pages,i);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inactive","inactive",-306247616),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(page))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(updates_acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,pdf_cljs.core.loading_update], null)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(effects_acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","load-page","pdf/load-page",-1339448749),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pdf_obj,i], null)], null))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"re-render","re-render",1133553258),new cljs.core.Keyword(null,"update","update",1045576396).cljs$core$IFn$_invoke$arity$1(page))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(updates_acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,pdf_cljs.core.re_render_update], null)),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(effects_acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","reset-page-canvas","pdf/reset-page-canvas",-968555230),new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(page)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","render-page","pdf/render-page",-1818110591),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale,i,new cljs.core.Keyword(null,"page-obj","page-obj",901698037).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(page)], null)], null)], 0))], null);
} else {
return acc;

}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),pdf_cljs.core.prioritize_pages(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915),pages_to_load),cur_in_flight,center,max_in_flight));
});
pdf_cljs.core.process_out_of_range_pages = (function pdf_cljs$core$process_out_of_range_pages(pages){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__14838,page){
var vec__14839 = p__14838;
var updates_acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14839,(0),null);
var effects_acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14839,(1),null);
var acc = vec__14839;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rendered","rendered",-1352292910),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(page))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(updates_acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(page),pdf_cljs.core.teardown_update], null)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(effects_acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","reset-page-canvas","pdf/reset-page-canvas",-968555230),new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(page)], null))], null);
} else {
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancelled","cancelled",488726224),new cljs.core.Keyword(null,"update","update",1045576396).cljs$core$IFn$_invoke$arity$1(page))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(page))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rendering","rendering",-424074478),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(page))))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(updates_acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(page),pdf_cljs.core.cancelled_update], null)),effects_acc], null);
} else {
return acc;

}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.vals(pages));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pdf","check-for-work","pdf/check-for-work",-869556035),(function (p__14842,_){
var map__14843 = p__14842;
var map__14843__$1 = cljs.core.__destructure_map(map__14843);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14843__$1,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pdf-obj","pdf-obj",-287134594)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var pdf_obj = temp__5804__auto__;
var pages = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513)], null));
var map__14844 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"params","params",710516235)], null));
var map__14844__$1 = cljs.core.__destructure_map(map__14844);
var center_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14844__$1,new cljs.core.Keyword(null,"center-page","center-page",943139914));
var window_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14844__$1,new cljs.core.Keyword(null,"window-size","window-size",923834855));
var max_in_flight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14844__$1,new cljs.core.Keyword(null,"max-in-flight","max-in-flight",-1111611362));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14844__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var pages_in_range = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__14848){
var vec__14849 = p__14848;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14849,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14849,(1),null);
return pdf_cljs.core.in_range_QMARK_(k,center_page,window_size);
}),pages));
var pages_out_of_range = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__14852){
var vec__14853 = p__14852;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14853,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14853,(1),null);
return (!(pdf_cljs.core.in_range_QMARK_(k,center_page,window_size)));
}),pages));
var vec__14845 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,pdf_cljs.core.process_out_of_range_pages(pages_out_of_range),pdf_cljs.core.process_in_range_pages(pages_in_range,scale,center_page,max_in_flight,pdf_obj));
var updates = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14845,(0),null);
var effects = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14845,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc_db,p__14856){
var vec__14857 = p__14856;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14857,(0),null);
var update_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14857,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(acc_db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i], null),update_fn);
}),db,updates),new cljs.core.Keyword(null,"fx","fx",-1237829572),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,effects)], null);
} else {
return null;
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword("pdf","load-page","pdf/load-page",-1339448749),(function (p__14860){
var vec__14861 = p__14860;
var pdf_obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14861,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14861,(1),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pdf","page-loaded","pdf/page-loaded",973980525),(function (p__14864,p__14865){
var map__14866 = p__14864;
var map__14866__$1 = cljs.core.__destructure_map(map__14866);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14866__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__14867 = p__14865;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14867,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14867,(1),null);
var page_obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14867,(2),null);
var page = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i], null));
var scale = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"scale","scale",-230427353)], null));
var ocr_14870 = new cljs.core.Keyword(null,"update","update",1045576396).cljs$core$IFn$_invoke$arity$1(page);
var ocr_14871 = (new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(page) == null);
try{if(cljs.core.keyword_identical_QMARK_(ocr_14870,new cljs.core.Keyword(null,"cancelled","cancelled",488726224))){
return pdf_cljs.core.render_cancelled_fx(db,i);
} else {
throw cljs.core.match.backtrack;

}
}catch (e14877){if((e14877 instanceof Error)){
var e__13152__auto__ = e14877;
if((e__13152__auto__ === cljs.core.match.backtrack)){
try{if((ocr_14871 === true)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i], null),cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"waiting-for-canvas","waiting-for-canvas",-1443916769),new cljs.core.Keyword(null,"page-obj","page-obj",901698037),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page_obj], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e14878){if((e14878 instanceof Error)){
var e__13152__auto____$1 = e14878;
if((e__13152__auto____$1 === cljs.core.match.backtrack)){
try{if((ocr_14871 === false)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i], null),cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"rendering","rendering",-424074478),new cljs.core.Keyword(null,"page-obj","page-obj",901698037),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page_obj], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","render-page","pdf/render-page",-1818110591),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale,i,page_obj,new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(page)], null)], null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e14879){if((e14879 instanceof Error)){
var e__13152__auto____$2 = e14879;
if((e__13152__auto____$2 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_14870)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_14871)].join('')));
} else {
throw e__13152__auto____$2;
}
} else {
throw e14879;

}
}} else {
throw e__13152__auto____$1;
}
} else {
throw e14878;

}
}} else {
throw e__13152__auto__;
}
} else {
throw e14877;

}
}}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pdf","new-canvas-size","pdf/new-canvas-size",-711248914),(function (p__14881,p__14882){
var map__14883 = p__14881;
var map__14883__$1 = cljs.core.__destructure_map(map__14883);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14883__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__14884 = p__14882;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14884,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14884,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14884,(2),null);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(width,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102)], null)))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(height,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231)], null)))))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102)], null),width),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231)], null),height),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","resize-canvases","pdf/resize-canvases",75394290),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"canvas","canvas",-1798817489),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__14880_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inactive","inactive",-306247616),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__14880_SHARP_));
}),cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513)], null))))),width,height], null)], null)], null)], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword("pdf","render-page","pdf/render-page",-1818110591),(function (p__14887){
var vec__14888 = p__14887;
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14888,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14888,(1),null);
var page_obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14888,(2),null);
var canvas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14888,(3),null);
var viewport = page_obj.getViewport(({"scale": scale}));
var context = canvas.getContext("2d");
var render_context = ({"canvasContext": context, "viewport": viewport});
(canvas.height = viewport.height);

(canvas.width = viewport.width);

page_obj.render(render_context).promise.then((function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","page-rendered","pdf/page-rendered",1807887428),i], null));
}));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","new-canvas-size","pdf/new-canvas-size",-711248914),viewport.width,viewport.height], null));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pdf","page-rendered","pdf/page-rendered",1807887428),(function (p__14891,p__14892){
var map__14893 = p__14891;
var map__14893__$1 = cljs.core.__destructure_map(map__14893);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14893__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__14894 = p__14892;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14894,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14894,(1),null);
var scale = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"scale","scale",-230427353)], null));
var page = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"re-render","re-render",1133553258),new cljs.core.Keyword(null,"update","update",1045576396).cljs$core$IFn$_invoke$arity$1(page))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i], null),cljs.core.assoc,new cljs.core.Keyword(null,"update","update",1045576396),null),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","reset-page-canvas","pdf/reset-page-canvas",-968555230),new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(page)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","render-page","pdf/render-page",-1818110591),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale,i,new cljs.core.Keyword(null,"page-obj","page-obj",901698037).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(page)], null)], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i], null),cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"rendered","rendered",-1352292910)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","check-for-work","pdf/check-for-work",-869556035)], null)], null)], null)], null);
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword("pdf","reset-page-canvas","pdf/reset-page-canvas",-968555230),(function (canvas_ref){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["reset canvas"], 0));

var ctx = canvas_ref.getContext("2d");
return ctx.reset();
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pdf","canvas-mounted","pdf/canvas-mounted",-1454820776),(function (p__14897,p__14898){
var map__14899 = p__14897;
var map__14899__$1 = cljs.core.__destructure_map(map__14899);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14899__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__14900 = p__14898;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14900,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14900,(1),null);
var canvas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14900,(2),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["canvas mounted"], 0));

var temp__5802__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i,new cljs.core.Keyword(null,"canvas","canvas",-1798817489)], null));
if(cljs.core.truth_(temp__5802__auto__)){
var prev_canvas = temp__5802__auto__;
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var tmp_db = cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i,new cljs.core.Keyword(null,"canvas","canvas",-1798817489)], null),canvas);
var w = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102)], null));
var h = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231)], null));
(canvas.width = w);

(canvas.height = h);

var ocr_14903 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i,new cljs.core.Keyword(null,"status","status",-1997798413)], null));
var ocr_14904 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i,new cljs.core.Keyword(null,"update","update",1045576396)], null));
try{if(cljs.core.keyword_identical_QMARK_(ocr_14903,new cljs.core.Keyword(null,"waiting-for-canvas","waiting-for-canvas",-1443916769))){
try{if(cljs.core.keyword_identical_QMARK_(ocr_14904,new cljs.core.Keyword(null,"cancelled","cancelled",488726224))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),pdf_cljs.core.render_cancelled_db_update(tmp_db,i)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e14909){if((e14909 instanceof Error)){
var e__13152__auto__ = e14909;
if((e__13152__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(tmp_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"rendering","rendering",-424074478)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","render-page","pdf/render-page",-1818110591),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"scale","scale",-230427353)], null)),i,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i,new cljs.core.Keyword(null,"page-obj","page-obj",901698037)], null)),canvas], null)], null)], null)], null);
} else {
throw e__13152__auto__;
}
} else {
throw e14909;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e14908){if((e14908 instanceof Error)){
var e__13152__auto__ = e14908;
if((e__13152__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),tmp_db], null);
} else {
throw e__13152__auto__;
}
} else {
throw e14908;

}
}}
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("pdf","panel-state","pdf/panel-state",-1353120880),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in panel-state sub"], 0));

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"panel-state","panel-state",-1353075558)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("pdf","page-rendered?","pdf/page-rendered?",-698489659),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__14910){
var vec__14911 = p__14910;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14911,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14911,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rendered","rendered",-1352292910),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i,new cljs.core.Keyword(null,"status","status",-1997798413)], null)));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("pdf","pdf-obj","pdf/pdf-obj",-287179376),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in pdf-obj sub"], 0));

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pdf-obj","pdf-obj",-287134594)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("pdf","page-count","pdf/page-count",2081708366),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in page-count sub"], 0));

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"page-count","page-count",2081744960)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("pdf","canvas-size","pdf/canvas-size",-1620535773),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231)], null))], null);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("pdf","params","pdf/params",710610681),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__14914){
var vec__14915 = p__14914;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14915,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14915,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"params","params",710516235),k], null));
})], 0));
pdf_cljs.core.page_spinner = (function pdf_cljs$core$page_spinner(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"red",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null)], null);
});
pdf_cljs.core.nav_bar = (function pdf_cljs$core$nav_bar(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["navbar!!"], 0));

var scale = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","params","pdf/params",710610681),new cljs.core.Keyword(null,"scale","scale",-230427353)], null)));
var cur_page = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","params","pdf/params",710610681),new cljs.core.Keyword(null,"center-page","center-page",943139914)], null)));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"50px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","view-scale-changed","pdf/view-scale-changed",-962356648),(scale + 0.25)], null));
})], null),"+"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","view-scale-changed","pdf/view-scale-changed",-962356648),(scale - 0.25)], null));
})], null),"-"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Zoome=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scale)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Page=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cur_page)].join('')], null)], null);
});
pdf_cljs.core.pdf_page = (function pdf_cljs$core$pdf_page(i){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["pdf-page component"], 0));

var rendered_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","page-rendered?","pdf/page-rendered?",-698489659),i], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
if((!((r == null)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","canvas-mounted","pdf/canvas-mounted",-1454820776),i,r], null));
} else {
return null;
}
})], null)], null),((cljs.core.not(rendered_QMARK_))?pdf_cljs.core.page_spinner():null)], null);
});
pdf_cljs.core.scale_tmp = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0.5);
pdf_cljs.core.on_scroll = (function pdf_cljs$core$on_scroll(canvas_height,_){
var el = document.getElementById("page-container");
var scroll_top = el.scrollTop;
var view_height = el.clientHeight;
var margin = (10);
var center_page = Math.floor(((scroll_top + (view_height / (2))) / (canvas_height + ((2) * margin))));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","maybe-new-center-page","pdf/maybe-new-center-page",772682232),center_page], null));
});
pdf_cljs.core.pdf_component = (function pdf_cljs$core$pdf_component(){
var panel_state = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","panel-state","pdf/panel-state",-1353120880)], null)));
var page_count = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","page-count","pdf/page-count",2081708366)], null)));
var vec__14918 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","canvas-size","pdf/canvas-size",-1620535773)], null)));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14918,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14918,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["pdf-component render fn"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([panel_state,page_count], 0));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100vh"], null)], null),pdf_cljs.core.nav_bar(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),(((page_count == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"LOADING PDF"], null):cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"scroll"], null),new cljs.core.Keyword(null,"id","id",-1388402092),"page-container",new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(pdf_cljs.core.on_scroll,height)], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pdf_cljs.core.pdf_page,cljs.core.range.cljs$core$IFn$_invoke$arity$1(page_count))))], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pdf","maybe-new-center-page","pdf/maybe-new-center-page",772682232),(function (p__14921,p__14922){
var map__14923 = p__14921;
var map__14923__$1 = cljs.core.__destructure_map(map__14923);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14923__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__14924 = p__14922;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14924,(0),null);
var center_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14924,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(center_page,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"center-page","center-page",943139914)], null)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"center-page","center-page",943139914)], null),center_page),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","check-for-work","pdf/check-for-work",-869556035)], null)], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pdf","view-scale-changed","pdf/view-scale-changed",-962356648),(function (p__14927,p__14928){
var map__14929 = p__14927;
var map__14929__$1 = cljs.core.__destructure_map(map__14929);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14929__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__14930 = p__14928;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14930,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14930,(1),null);
var center = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"center-page","center-page",943139914)], null));
var window__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"window-size","window-size",923834855)], null));
var pages = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc_db,p__14933){
var vec__14934 = p__14933;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14934,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14934,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rendered","rendered",-1352292910),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(page))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rendering","rendering",-424074478),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(page))))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-rendering page",i,page], 0));

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(acc_db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513),i], null),cljs.core.assoc,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"re-render","re-render",1133553258));
} else {
return acc_db;
}
}),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"scale","scale",-230427353)], null),scale),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513)], null))),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","check-for-work","pdf/check-for-work",-869556035)], null)], null)], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("pdf","resize-canvases","pdf/resize-canvases",75394290),(function (p__14937){
var vec__14938 = p__14937;
var canvases = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14938,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14938,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14938,(2),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["reaize ALL OF THEM"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(canvases)], 0));

var seq__14941 = cljs.core.seq(canvases);
var chunk__14942 = null;
var count__14943 = (0);
var i__14944 = (0);
while(true){
if((i__14944 < count__14943)){
var canvas = chunk__14942.cljs$core$IIndexed$_nth$arity$2(null, i__14944);
(canvas.width = width);

(canvas.height = height);


var G__14978 = seq__14941;
var G__14979 = chunk__14942;
var G__14980 = count__14943;
var G__14981 = (i__14944 + (1));
seq__14941 = G__14978;
chunk__14942 = G__14979;
count__14943 = G__14980;
i__14944 = G__14981;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14941);
if(temp__5804__auto__){
var seq__14941__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14941__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14941__$1);
var G__14982 = cljs.core.chunk_rest(seq__14941__$1);
var G__14983 = c__5525__auto__;
var G__14984 = cljs.core.count(c__5525__auto__);
var G__14985 = (0);
seq__14941 = G__14982;
chunk__14942 = G__14983;
count__14943 = G__14984;
i__14944 = G__14985;
continue;
} else {
var canvas = cljs.core.first(seq__14941__$1);
(canvas.width = width);

(canvas.height = height);


var G__14986 = cljs.core.next(seq__14941__$1);
var G__14987 = null;
var G__14988 = (0);
var G__14989 = (0);
seq__14941 = G__14986;
chunk__14942 = G__14987;
count__14943 = G__14988;
i__14944 = G__14989;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pdf","quote-clicked","pdf/quote-clicked",281773171),(function (p__14945,p__14946){
var map__14947 = p__14945;
var map__14947__$1 = cljs.core.__destructure_map(map__14947);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14947__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__14948 = p__14946;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14948,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14948,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"center-page","center-page",943139914)], null),(1)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","load-pdf","pdf/load-pdf",-80203777),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdfjs","pdfjs",-1034717155).cljs$core$IFn$_invoke$arity$1(db),url], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"closed","closed",-919675359),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"panel-state","panel-state",-1353075558)], null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","set-pdf-panel-state","pdf/set-pdf-panel-state",-2045680126),new cljs.core.Keyword(null,"open","open",-1763596448)], null):null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pdf","set-pdf-panel-state","pdf/set-pdf-panel-state",-2045680126),(function (db,p__14951){
var vec__14952 = p__14951;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14952,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14952,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"panel-state","panel-state",-1353075558)], null),state);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pdf","pdf-load-request","pdf/pdf-load-request",-1136550793),(function (p__14955,p__14956){
var map__14957 = p__14955;
var map__14957__$1 = cljs.core.__destructure_map(map__14957);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14957__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__14958 = p__14956;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14958,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14958,(1),null);
var temp__5802__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pdfjs","pdfjs",-1034717155)], null));
if(cljs.core.truth_(temp__5802__auto__)){
var pdfjs = temp__5802__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","load-pdf","pdf/load-pdf",-80203777),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pdfjs,url], null)], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"command-queue","command-queue",-45855917)], null),url)], null);
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword("pdf","load-pdf","pdf/load-pdf",-80203777),(function (p__14961){
var vec__14962 = p__14961;
var pdfjs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14962,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14962,(1),null);
return pdfjs.getDocument(url).promise.then((function (pdf_obj){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","pdf-loaded","pdf/pdf-loaded",1080648493),pdf_obj], null));
}));
}));
pdf_cljs.core.pdf_init_db = (function pdf_cljs$core$pdf_init_db(db,pdf_obj){
var page_count = pdf_obj.numPages;
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pdf-obj","pdf-obj",-287134594)], null),pdf_obj),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"command-queue","command-queue",-45855917)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core.assoc,new cljs.core.Keyword(null,"window-size","window-size",923834855),(10),new cljs.core.Keyword(null,"center-page","center-page",943139914),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),new cljs.core.Keyword(null,"max-in-flight","max-in-flight",-1111611362),(5),new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102),(595),new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231),(842),new cljs.core.Keyword(null,"page-count","page-count",2081744960),page_count], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Keyword(null,"pages","pages",-285406513)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14965_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__14965_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),p1__14965_SHARP_,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"inactive","inactive",-306247616)], null)],null));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(page_count))));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pdf","pdf-loaded","pdf/pdf-loaded",1080648493),(function (p__14966,p__14967){
var map__14968 = p__14966;
var map__14968__$1 = cljs.core.__destructure_map(map__14968);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14968__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__14969 = p__14967;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14969,(0),null);
var pdf_obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14969,(1),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pdf","pdfjs-loaded","pdf/pdfjs-loaded",-2106548560),(function (p__14972,p__14973){
var map__14974 = p__14972;
var map__14974__$1 = cljs.core.__destructure_map(map__14974);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14974__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__14975 = p__14973;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14975,(0),null);
var pdfjs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14975,(1),null);
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
