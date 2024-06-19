goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null, re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__24327 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24328 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24328);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___24418 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___24418)){
var new_db_24419 = temp__5804__auto___24418;
var fexpr__24332_24420 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24332_24420.cljs$core$IFn$_invoke$arity$1 ? fexpr__24332_24420.cljs$core$IFn$_invoke$arity$1(new_db_24419) : fexpr__24332_24420.call(null, new_db_24419));
} else {
}

var seq__24333 = cljs.core.seq(effects_without_db);
var chunk__24334 = null;
var count__24335 = (0);
var i__24336 = (0);
while(true){
if((i__24336 < count__24335)){
var vec__24347 = chunk__24334.cljs$core$IIndexed$_nth$arity$2(null, i__24336);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24347,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24347,(1),null);
var temp__5802__auto___24421 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24421)){
var effect_fn_24422 = temp__5802__auto___24421;
(effect_fn_24422.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24422.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24422.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24423 = seq__24333;
var G__24424 = chunk__24334;
var G__24425 = count__24335;
var G__24426 = (i__24336 + (1));
seq__24333 = G__24423;
chunk__24334 = G__24424;
count__24335 = G__24425;
i__24336 = G__24426;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24333);
if(temp__5804__auto__){
var seq__24333__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24333__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24333__$1);
var G__24427 = cljs.core.chunk_rest(seq__24333__$1);
var G__24428 = c__5525__auto__;
var G__24429 = cljs.core.count(c__5525__auto__);
var G__24430 = (0);
seq__24333 = G__24427;
chunk__24334 = G__24428;
count__24335 = G__24429;
i__24336 = G__24430;
continue;
} else {
var vec__24362 = cljs.core.first(seq__24333__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24362,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24362,(1),null);
var temp__5802__auto___24431 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24431)){
var effect_fn_24432 = temp__5802__auto___24431;
(effect_fn_24432.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24432.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24432.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24433 = cljs.core.next(seq__24333__$1);
var G__24434 = null;
var G__24435 = (0);
var G__24436 = (0);
seq__24333 = G__24433;
chunk__24334 = G__24434;
count__24335 = G__24435;
i__24336 = G__24436;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23929__auto___24437 = re_frame.interop.now();
var duration__23930__auto___24438 = (end__23929__auto___24437 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23930__auto___24438,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23929__auto___24437);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24327);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___24439 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___24439)){
var new_db_24440 = temp__5804__auto___24439;
var fexpr__24369_24441 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24369_24441.cljs$core$IFn$_invoke$arity$1 ? fexpr__24369_24441.cljs$core$IFn$_invoke$arity$1(new_db_24440) : fexpr__24369_24441.call(null, new_db_24440));
} else {
}

var seq__24370 = cljs.core.seq(effects_without_db);
var chunk__24371 = null;
var count__24372 = (0);
var i__24373 = (0);
while(true){
if((i__24373 < count__24372)){
var vec__24380 = chunk__24371.cljs$core$IIndexed$_nth$arity$2(null, i__24373);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24380,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24380,(1),null);
var temp__5802__auto___24442 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24442)){
var effect_fn_24443 = temp__5802__auto___24442;
(effect_fn_24443.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24443.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24443.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24444 = seq__24370;
var G__24445 = chunk__24371;
var G__24446 = count__24372;
var G__24447 = (i__24373 + (1));
seq__24370 = G__24444;
chunk__24371 = G__24445;
count__24372 = G__24446;
i__24373 = G__24447;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24370);
if(temp__5804__auto__){
var seq__24370__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24370__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24370__$1);
var G__24448 = cljs.core.chunk_rest(seq__24370__$1);
var G__24449 = c__5525__auto__;
var G__24450 = cljs.core.count(c__5525__auto__);
var G__24451 = (0);
seq__24370 = G__24448;
chunk__24371 = G__24449;
count__24372 = G__24450;
i__24373 = G__24451;
continue;
} else {
var vec__24383 = cljs.core.first(seq__24370__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24383,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24383,(1),null);
var temp__5802__auto___24452 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24452)){
var effect_fn_24453 = temp__5802__auto___24452;
(effect_fn_24453.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24453.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24453.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__24454 = cljs.core.next(seq__24370__$1);
var G__24455 = null;
var G__24456 = (0);
var G__24457 = (0);
seq__24370 = G__24454;
chunk__24371 = G__24455;
count__24372 = G__24456;
i__24373 = G__24457;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24386){
var map__24387 = p__24386;
var map__24387__$1 = cljs.core.__destructure_map(map__24387);
var effect = map__24387__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24387__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24387__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__24388 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24389 = null;
var count__24390 = (0);
var i__24391 = (0);
while(true){
if((i__24391 < count__24390)){
var effect = chunk__24389.cljs$core$IIndexed$_nth$arity$2(null, i__24391);
re_frame.fx.dispatch_later(effect);


var G__24458 = seq__24388;
var G__24459 = chunk__24389;
var G__24460 = count__24390;
var G__24461 = (i__24391 + (1));
seq__24388 = G__24458;
chunk__24389 = G__24459;
count__24390 = G__24460;
i__24391 = G__24461;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24388);
if(temp__5804__auto__){
var seq__24388__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24388__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24388__$1);
var G__24462 = cljs.core.chunk_rest(seq__24388__$1);
var G__24463 = c__5525__auto__;
var G__24464 = cljs.core.count(c__5525__auto__);
var G__24465 = (0);
seq__24388 = G__24462;
chunk__24389 = G__24463;
count__24390 = G__24464;
i__24391 = G__24465;
continue;
} else {
var effect = cljs.core.first(seq__24388__$1);
re_frame.fx.dispatch_later(effect);


var G__24466 = cljs.core.next(seq__24388__$1);
var G__24467 = null;
var G__24468 = (0);
var G__24469 = (0);
seq__24388 = G__24466;
chunk__24389 = G__24467;
count__24390 = G__24468;
i__24391 = G__24469;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__24392 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24393 = null;
var count__24394 = (0);
var i__24395 = (0);
while(true){
if((i__24395 < count__24394)){
var vec__24402 = chunk__24393.cljs$core$IIndexed$_nth$arity$2(null, i__24395);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24402,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24402,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___24470 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24470)){
var effect_fn_24471 = temp__5802__auto___24470;
(effect_fn_24471.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24471.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24471.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24472 = seq__24392;
var G__24473 = chunk__24393;
var G__24474 = count__24394;
var G__24475 = (i__24395 + (1));
seq__24392 = G__24472;
chunk__24393 = G__24473;
count__24394 = G__24474;
i__24395 = G__24475;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24392);
if(temp__5804__auto__){
var seq__24392__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24392__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24392__$1);
var G__24476 = cljs.core.chunk_rest(seq__24392__$1);
var G__24477 = c__5525__auto__;
var G__24478 = cljs.core.count(c__5525__auto__);
var G__24479 = (0);
seq__24392 = G__24476;
chunk__24393 = G__24477;
count__24394 = G__24478;
i__24395 = G__24479;
continue;
} else {
var vec__24405 = cljs.core.first(seq__24392__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24405,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24405,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___24480 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24480)){
var effect_fn_24481 = temp__5802__auto___24480;
(effect_fn_24481.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24481.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24481.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24482 = cljs.core.next(seq__24392__$1);
var G__24483 = null;
var G__24484 = (0);
var G__24485 = (0);
seq__24392 = G__24482;
chunk__24393 = G__24483;
count__24394 = G__24484;
i__24395 = G__24485;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__24408 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24409 = null;
var count__24410 = (0);
var i__24411 = (0);
while(true){
if((i__24411 < count__24410)){
var event = chunk__24409.cljs$core$IIndexed$_nth$arity$2(null, i__24411);
re_frame.router.dispatch(event);


var G__24486 = seq__24408;
var G__24487 = chunk__24409;
var G__24488 = count__24410;
var G__24489 = (i__24411 + (1));
seq__24408 = G__24486;
chunk__24409 = G__24487;
count__24410 = G__24488;
i__24411 = G__24489;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24408);
if(temp__5804__auto__){
var seq__24408__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24408__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24408__$1);
var G__24490 = cljs.core.chunk_rest(seq__24408__$1);
var G__24491 = c__5525__auto__;
var G__24492 = cljs.core.count(c__5525__auto__);
var G__24493 = (0);
seq__24408 = G__24490;
chunk__24409 = G__24491;
count__24410 = G__24492;
i__24411 = G__24493;
continue;
} else {
var event = cljs.core.first(seq__24408__$1);
re_frame.router.dispatch(event);


var G__24495 = cljs.core.next(seq__24408__$1);
var G__24496 = null;
var G__24497 = (0);
var G__24498 = (0);
seq__24408 = G__24495;
chunk__24409 = G__24496;
count__24410 = G__24497;
i__24411 = G__24498;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__24412 = cljs.core.seq(value);
var chunk__24413 = null;
var count__24414 = (0);
var i__24415 = (0);
while(true){
if((i__24415 < count__24414)){
var event = chunk__24413.cljs$core$IIndexed$_nth$arity$2(null, i__24415);
clear_event(event);


var G__24500 = seq__24412;
var G__24501 = chunk__24413;
var G__24502 = count__24414;
var G__24503 = (i__24415 + (1));
seq__24412 = G__24500;
chunk__24413 = G__24501;
count__24414 = G__24502;
i__24415 = G__24503;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24412);
if(temp__5804__auto__){
var seq__24412__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24412__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24412__$1);
var G__24504 = cljs.core.chunk_rest(seq__24412__$1);
var G__24505 = c__5525__auto__;
var G__24506 = cljs.core.count(c__5525__auto__);
var G__24507 = (0);
seq__24412 = G__24504;
chunk__24413 = G__24505;
count__24414 = G__24506;
i__24415 = G__24507;
continue;
} else {
var event = cljs.core.first(seq__24412__$1);
clear_event(event);


var G__24508 = cljs.core.next(seq__24412__$1);
var G__24509 = null;
var G__24510 = (0);
var G__24511 = (0);
seq__24412 = G__24508;
chunk__24413 = G__24509;
count__24414 = G__24510;
i__24415 = G__24511;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__24416 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24417 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24417);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23929__auto___24512 = re_frame.interop.now();
var duration__23930__auto___24513 = (end__23929__auto___24512 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23930__auto___24513,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23929__auto___24512);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24416);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
