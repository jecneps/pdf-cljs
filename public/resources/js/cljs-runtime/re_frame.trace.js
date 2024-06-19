goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__23957){
var map__23958 = p__23957;
var map__23958__$1 = cljs.core.__destructure_map(map__23958);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23958__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23958__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23958__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23958__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5002__auto__ = child_of;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__23963_24002 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__23964_24003 = null;
var count__23965_24004 = (0);
var i__23966_24005 = (0);
while(true){
if((i__23966_24005 < count__23965_24004)){
var vec__23980_24006 = chunk__23964_24003.cljs$core$IIndexed$_nth$arity$2(null, i__23966_24005);
var k_24007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23980_24006,(0),null);
var cb_24008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23980_24006,(1),null);
try{var G__23986_24009 = cljs.core.deref(re_frame.trace.traces);
(cb_24008.cljs$core$IFn$_invoke$arity$1 ? cb_24008.cljs$core$IFn$_invoke$arity$1(G__23986_24009) : cb_24008.call(null, G__23986_24009));
}catch (e23983){var e_24010 = e23983;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_24007,"while storing",cljs.core.deref(re_frame.trace.traces),e_24010], 0));
}

var G__24011 = seq__23963_24002;
var G__24012 = chunk__23964_24003;
var G__24013 = count__23965_24004;
var G__24014 = (i__23966_24005 + (1));
seq__23963_24002 = G__24011;
chunk__23964_24003 = G__24012;
count__23965_24004 = G__24013;
i__23966_24005 = G__24014;
continue;
} else {
var temp__5804__auto___24019 = cljs.core.seq(seq__23963_24002);
if(temp__5804__auto___24019){
var seq__23963_24020__$1 = temp__5804__auto___24019;
if(cljs.core.chunked_seq_QMARK_(seq__23963_24020__$1)){
var c__5525__auto___24021 = cljs.core.chunk_first(seq__23963_24020__$1);
var G__24022 = cljs.core.chunk_rest(seq__23963_24020__$1);
var G__24023 = c__5525__auto___24021;
var G__24024 = cljs.core.count(c__5525__auto___24021);
var G__24025 = (0);
seq__23963_24002 = G__24022;
chunk__23964_24003 = G__24023;
count__23965_24004 = G__24024;
i__23966_24005 = G__24025;
continue;
} else {
var vec__23989_24026 = cljs.core.first(seq__23963_24020__$1);
var k_24027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23989_24026,(0),null);
var cb_24028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23989_24026,(1),null);
try{var G__23996_24029 = cljs.core.deref(re_frame.trace.traces);
(cb_24028.cljs$core$IFn$_invoke$arity$1 ? cb_24028.cljs$core$IFn$_invoke$arity$1(G__23996_24029) : cb_24028.call(null, G__23996_24029));
}catch (e23995){var e_24030 = e23995;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_24027,"while storing",cljs.core.deref(re_frame.trace.traces),e_24030], 0));
}

var G__24031 = cljs.core.next(seq__23963_24020__$1);
var G__24032 = null;
var G__24033 = (0);
var G__24034 = (0);
seq__23963_24002 = G__24031;
chunk__23964_24003 = G__24032;
count__23965_24004 = G__24033;
i__23966_24005 = G__24034;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null, ));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
