goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__19901__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__19901 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19902__i = 0, G__19902__a = new Array(arguments.length -  0);
while (G__19902__i < G__19902__a.length) {G__19902__a[G__19902__i] = arguments[G__19902__i + 0]; ++G__19902__i;}
  args = new cljs.core.IndexedSeq(G__19902__a,0,null);
} 
return G__19901__delegate.call(this,args);};
G__19901.cljs$lang$maxFixedArity = 0;
G__19901.cljs$lang$applyTo = (function (arglist__19903){
var args = cljs.core.seq(arglist__19903);
return G__19901__delegate(args);
});
G__19901.cljs$core$IFn$_invoke$arity$variadic = G__19901__delegate;
return G__19901;
})()
);

(o.error = (function() { 
var G__19904__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__19904 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19905__i = 0, G__19905__a = new Array(arguments.length -  0);
while (G__19905__i < G__19905__a.length) {G__19905__a[G__19905__i] = arguments[G__19905__i + 0]; ++G__19905__i;}
  args = new cljs.core.IndexedSeq(G__19905__a,0,null);
} 
return G__19904__delegate.call(this,args);};
G__19904.cljs$lang$maxFixedArity = 0;
G__19904.cljs$lang$applyTo = (function (arglist__19908){
var args = cljs.core.seq(arglist__19908);
return G__19904__delegate(args);
});
G__19904.cljs$core$IFn$_invoke$arity$variadic = G__19904__delegate;
return G__19904;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
