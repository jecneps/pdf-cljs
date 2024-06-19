goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13334){
var map__13335 = p__13334;
var map__13335__$1 = cljs.core.__destructure_map(map__13335);
var runtime = map__13335__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13335__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_13633 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_13633)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13349 = runtime;
var G__13350 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_13633);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13349,G__13350) : shadow.remote.runtime.shared.process.call(null, G__13349,G__13350));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__13360,res){
var map__13361 = p__13360;
var map__13361__$1 = cljs.core.__destructure_map(map__13361);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13361__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13361__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__13362 = res;
var G__13362__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13362,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__13362);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13362__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__13362__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__13378 = arguments.length;
switch (G__13378) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__13393,msg,handlers,timeout_after_ms){
var map__13395 = p__13393;
var map__13395__$1 = cljs.core.__destructure_map(map__13395);
var runtime = map__13395__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13395__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13636 = arguments.length;
var i__5727__auto___13637 = (0);
while(true){
if((i__5727__auto___13637 < len__5726__auto___13636)){
args__5732__auto__.push((arguments[i__5727__auto___13637]));

var G__13639 = (i__5727__auto___13637 + (1));
i__5727__auto___13637 = G__13639;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__13436,ev,args){
var map__13437 = p__13436;
var map__13437__$1 = cljs.core.__destructure_map(map__13437);
var runtime = map__13437__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13437__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__13438 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13441 = null;
var count__13442 = (0);
var i__13443 = (0);
while(true){
if((i__13443 < count__13442)){
var ext = chunk__13441.cljs$core$IIndexed$_nth$arity$2(null, i__13443);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__13640 = seq__13438;
var G__13641 = chunk__13441;
var G__13642 = count__13442;
var G__13643 = (i__13443 + (1));
seq__13438 = G__13640;
chunk__13441 = G__13641;
count__13442 = G__13642;
i__13443 = G__13643;
continue;
} else {
var G__13644 = seq__13438;
var G__13645 = chunk__13441;
var G__13646 = count__13442;
var G__13647 = (i__13443 + (1));
seq__13438 = G__13644;
chunk__13441 = G__13645;
count__13442 = G__13646;
i__13443 = G__13647;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13438);
if(temp__5804__auto__){
var seq__13438__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13438__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13438__$1);
var G__13648 = cljs.core.chunk_rest(seq__13438__$1);
var G__13649 = c__5525__auto__;
var G__13650 = cljs.core.count(c__5525__auto__);
var G__13651 = (0);
seq__13438 = G__13648;
chunk__13441 = G__13649;
count__13442 = G__13650;
i__13443 = G__13651;
continue;
} else {
var ext = cljs.core.first(seq__13438__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__13652 = cljs.core.next(seq__13438__$1);
var G__13653 = null;
var G__13654 = (0);
var G__13655 = (0);
seq__13438 = G__13652;
chunk__13441 = G__13653;
count__13442 = G__13654;
i__13443 = G__13655;
continue;
} else {
var G__13656 = cljs.core.next(seq__13438__$1);
var G__13657 = null;
var G__13658 = (0);
var G__13659 = (0);
seq__13438 = G__13656;
chunk__13441 = G__13657;
count__13442 = G__13658;
i__13443 = G__13659;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq13411){
var G__13412 = cljs.core.first(seq13411);
var seq13411__$1 = cljs.core.next(seq13411);
var G__13413 = cljs.core.first(seq13411__$1);
var seq13411__$2 = cljs.core.next(seq13411__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13412,G__13413,seq13411__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__13479,p__13480){
var map__13483 = p__13479;
var map__13483__$1 = cljs.core.__destructure_map(map__13483);
var runtime = map__13483__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13483__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13488 = p__13480;
var map__13488__$1 = cljs.core.__destructure_map(map__13488);
var msg = map__13488__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13488__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__13494 = cljs.core.deref(state_ref);
var map__13494__$1 = cljs.core.__destructure_map(map__13494);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13494__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13494__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__13506,msg){
var map__13508 = p__13506;
var map__13508__$1 = cljs.core.__destructure_map(map__13508);
var runtime = map__13508__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13508__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__13517,key,p__13518){
var map__13519 = p__13517;
var map__13519__$1 = cljs.core.__destructure_map(map__13519);
var state = map__13519__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13519__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__13520 = p__13518;
var map__13520__$1 = cljs.core.__destructure_map(map__13520);
var spec = map__13520__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13520__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13520__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__13525,key,spec){
var map__13527 = p__13525;
var map__13527__$1 = cljs.core.__destructure_map(map__13527);
var runtime = map__13527__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13527__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___13671 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___13671 == null)){
} else {
var on_welcome_13672 = temp__5808__auto___13671;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_13672.cljs$core$IFn$_invoke$arity$0 ? on_welcome_13672.cljs$core$IFn$_invoke$arity$0() : on_welcome_13672.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__13531_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__13531_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__13532_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__13532_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__13534_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__13534_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__13535_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__13535_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__13536_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__13536_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__13560,key){
var map__13561 = p__13560;
var map__13561__$1 = cljs.core.__destructure_map(map__13561);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13561__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__13572,msg){
var map__13573 = p__13572;
var map__13573__$1 = cljs.core.__destructure_map(map__13573);
var runtime = map__13573__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13573__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__13577,p__13578){
var map__13579 = p__13577;
var map__13579__$1 = cljs.core.__destructure_map(map__13579);
var runtime = map__13579__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13579__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13580 = p__13578;
var map__13580__$1 = cljs.core.__destructure_map(map__13580);
var msg = map__13580__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13580__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13580__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__13589 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13591 = null;
var count__13592 = (0);
var i__13593 = (0);
while(true){
if((i__13593 < count__13592)){
var map__13624 = chunk__13591.cljs$core$IIndexed$_nth$arity$2(null, i__13593);
var map__13624__$1 = cljs.core.__destructure_map(map__13624);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13624__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__13680 = seq__13589;
var G__13681 = chunk__13591;
var G__13682 = count__13592;
var G__13683 = (i__13593 + (1));
seq__13589 = G__13680;
chunk__13591 = G__13681;
count__13592 = G__13682;
i__13593 = G__13683;
continue;
} else {
var G__13685 = seq__13589;
var G__13686 = chunk__13591;
var G__13687 = count__13592;
var G__13688 = (i__13593 + (1));
seq__13589 = G__13685;
chunk__13591 = G__13686;
count__13592 = G__13687;
i__13593 = G__13688;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13589);
if(temp__5804__auto__){
var seq__13589__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13589__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13589__$1);
var G__13691 = cljs.core.chunk_rest(seq__13589__$1);
var G__13692 = c__5525__auto__;
var G__13693 = cljs.core.count(c__5525__auto__);
var G__13694 = (0);
seq__13589 = G__13691;
chunk__13591 = G__13692;
count__13592 = G__13693;
i__13593 = G__13694;
continue;
} else {
var map__13630 = cljs.core.first(seq__13589__$1);
var map__13630__$1 = cljs.core.__destructure_map(map__13630);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13630__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__13696 = cljs.core.next(seq__13589__$1);
var G__13697 = null;
var G__13698 = (0);
var G__13699 = (0);
seq__13589 = G__13696;
chunk__13591 = G__13697;
count__13592 = G__13698;
i__13593 = G__13699;
continue;
} else {
var G__13700 = cljs.core.next(seq__13589__$1);
var G__13701 = null;
var G__13702 = (0);
var G__13703 = (0);
seq__13589 = G__13700;
chunk__13591 = G__13701;
count__13592 = G__13702;
i__13593 = G__13703;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
