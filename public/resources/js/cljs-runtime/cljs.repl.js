goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17484){
var map__17486 = p__17484;
var map__17486__$1 = cljs.core.__destructure_map(map__17486);
var m = map__17486__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17486__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17486__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17507_17966 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17508_17967 = null;
var count__17509_17968 = (0);
var i__17510_17969 = (0);
while(true){
if((i__17510_17969 < count__17509_17968)){
var f_17970 = chunk__17508_17967.cljs$core$IIndexed$_nth$arity$2(null, i__17510_17969);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_17970], 0));


var G__17971 = seq__17507_17966;
var G__17972 = chunk__17508_17967;
var G__17973 = count__17509_17968;
var G__17974 = (i__17510_17969 + (1));
seq__17507_17966 = G__17971;
chunk__17508_17967 = G__17972;
count__17509_17968 = G__17973;
i__17510_17969 = G__17974;
continue;
} else {
var temp__5804__auto___17975 = cljs.core.seq(seq__17507_17966);
if(temp__5804__auto___17975){
var seq__17507_17976__$1 = temp__5804__auto___17975;
if(cljs.core.chunked_seq_QMARK_(seq__17507_17976__$1)){
var c__5525__auto___17977 = cljs.core.chunk_first(seq__17507_17976__$1);
var G__17978 = cljs.core.chunk_rest(seq__17507_17976__$1);
var G__17979 = c__5525__auto___17977;
var G__17980 = cljs.core.count(c__5525__auto___17977);
var G__17981 = (0);
seq__17507_17966 = G__17978;
chunk__17508_17967 = G__17979;
count__17509_17968 = G__17980;
i__17510_17969 = G__17981;
continue;
} else {
var f_17986 = cljs.core.first(seq__17507_17976__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_17986], 0));


var G__17988 = cljs.core.next(seq__17507_17976__$1);
var G__17989 = null;
var G__17990 = (0);
var G__17991 = (0);
seq__17507_17966 = G__17988;
chunk__17508_17967 = G__17989;
count__17509_17968 = G__17990;
i__17510_17969 = G__17991;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17992 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_17992], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_17992)))?cljs.core.second(arglists_17992):arglists_17992)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17547_17998 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17548_17999 = null;
var count__17549_18000 = (0);
var i__17550_18001 = (0);
while(true){
if((i__17550_18001 < count__17549_18000)){
var vec__17583_18002 = chunk__17548_17999.cljs$core$IIndexed$_nth$arity$2(null, i__17550_18001);
var name_18003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17583_18002,(0),null);
var map__17586_18004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17583_18002,(1),null);
var map__17586_18005__$1 = cljs.core.__destructure_map(map__17586_18004);
var doc_18006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17586_18005__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17586_18005__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18003], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18007], 0));

if(cljs.core.truth_(doc_18006)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18006], 0));
} else {
}


var G__18010 = seq__17547_17998;
var G__18011 = chunk__17548_17999;
var G__18012 = count__17549_18000;
var G__18013 = (i__17550_18001 + (1));
seq__17547_17998 = G__18010;
chunk__17548_17999 = G__18011;
count__17549_18000 = G__18012;
i__17550_18001 = G__18013;
continue;
} else {
var temp__5804__auto___18014 = cljs.core.seq(seq__17547_17998);
if(temp__5804__auto___18014){
var seq__17547_18015__$1 = temp__5804__auto___18014;
if(cljs.core.chunked_seq_QMARK_(seq__17547_18015__$1)){
var c__5525__auto___18016 = cljs.core.chunk_first(seq__17547_18015__$1);
var G__18018 = cljs.core.chunk_rest(seq__17547_18015__$1);
var G__18019 = c__5525__auto___18016;
var G__18020 = cljs.core.count(c__5525__auto___18016);
var G__18021 = (0);
seq__17547_17998 = G__18018;
chunk__17548_17999 = G__18019;
count__17549_18000 = G__18020;
i__17550_18001 = G__18021;
continue;
} else {
var vec__17589_18024 = cljs.core.first(seq__17547_18015__$1);
var name_18025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17589_18024,(0),null);
var map__17592_18026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17589_18024,(1),null);
var map__17592_18027__$1 = cljs.core.__destructure_map(map__17592_18026);
var doc_18028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17592_18027__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17592_18027__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18025], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18029], 0));

if(cljs.core.truth_(doc_18028)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18028], 0));
} else {
}


var G__18031 = cljs.core.next(seq__17547_18015__$1);
var G__18032 = null;
var G__18033 = (0);
var G__18034 = (0);
seq__17547_17998 = G__18031;
chunk__17548_17999 = G__18032;
count__17549_18000 = G__18033;
i__17550_18001 = G__18034;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__17596 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17597 = null;
var count__17598 = (0);
var i__17599 = (0);
while(true){
if((i__17599 < count__17598)){
var role = chunk__17597.cljs$core$IIndexed$_nth$arity$2(null, i__17599);
var temp__5804__auto___18037__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18037__$1)){
var spec_18039 = temp__5804__auto___18037__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18039)], 0));
} else {
}


var G__18042 = seq__17596;
var G__18043 = chunk__17597;
var G__18044 = count__17598;
var G__18045 = (i__17599 + (1));
seq__17596 = G__18042;
chunk__17597 = G__18043;
count__17598 = G__18044;
i__17599 = G__18045;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__17596);
if(temp__5804__auto____$1){
var seq__17596__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__17596__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17596__$1);
var G__18049 = cljs.core.chunk_rest(seq__17596__$1);
var G__18050 = c__5525__auto__;
var G__18051 = cljs.core.count(c__5525__auto__);
var G__18052 = (0);
seq__17596 = G__18049;
chunk__17597 = G__18050;
count__17598 = G__18051;
i__17599 = G__18052;
continue;
} else {
var role = cljs.core.first(seq__17596__$1);
var temp__5804__auto___18054__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18054__$2)){
var spec_18055 = temp__5804__auto___18054__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18055)], 0));
} else {
}


var G__18058 = cljs.core.next(seq__17596__$1);
var G__18059 = null;
var G__18060 = (0);
var G__18061 = (0);
seq__17596 = G__18058;
chunk__17597 = G__18059;
count__17598 = G__18060;
i__17599 = G__18061;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__17691 = datafied_throwable;
var map__17691__$1 = cljs.core.__destructure_map(map__17691);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17691__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17691__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17691__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__17692 = cljs.core.last(via);
var map__17692__$1 = cljs.core.__destructure_map(map__17692);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17692__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17692__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17692__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__17693 = data;
var map__17693__$1 = cljs.core.__destructure_map(map__17693);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17693__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17693__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17693__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__17694 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__17694__$1 = cljs.core.__destructure_map(map__17694);
var top_data = map__17694__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17694__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__17732 = phase;
var G__17732__$1 = (((G__17732 instanceof cljs.core.Keyword))?G__17732.fqn:null);
switch (G__17732__$1) {
case "read-source":
var map__17738 = data;
var map__17738__$1 = cljs.core.__destructure_map(map__17738);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17738__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17738__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__17745 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__17745__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17745,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17745);
var G__17745__$2 = (cljs.core.truth_((function (){var fexpr__17752 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17752.cljs$core$IFn$_invoke$arity$1 ? fexpr__17752.cljs$core$IFn$_invoke$arity$1(source) : fexpr__17752.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17745__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17745__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17745__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17745__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__17765 = top_data;
var G__17765__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17765,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17765);
var G__17765__$2 = (cljs.core.truth_((function (){var fexpr__17775 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17775.cljs$core$IFn$_invoke$arity$1 ? fexpr__17775.cljs$core$IFn$_invoke$arity$1(source) : fexpr__17775.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17765__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17765__$1);
var G__17765__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17765__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17765__$2);
var G__17765__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17765__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17765__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17765__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17765__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__17787 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17787,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17787,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17787,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17787,(3),null);
var G__17791 = top_data;
var G__17791__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17791,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__17791);
var G__17791__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17791__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__17791__$1);
var G__17791__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17791__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__17791__$2);
var G__17791__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17791__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17791__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17791__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17791__$4;
}

break;
case "execution":
var vec__17804 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17804,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17804,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17804,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17804,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__17665_SHARP_){
var or__5002__auto__ = (p1__17665_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__17813 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17813.cljs$core$IFn$_invoke$arity$1 ? fexpr__17813.cljs$core$IFn$_invoke$arity$1(p1__17665_SHARP_) : fexpr__17813.call(null, p1__17665_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__17816 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__17816__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17816,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__17816);
var G__17816__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17816__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17816__$1);
var G__17816__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17816__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__17816__$2);
var G__17816__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17816__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__17816__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17816__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17816__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17732__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__17841){
var map__17843 = p__17841;
var map__17843__$1 = cljs.core.__destructure_map(map__17843);
var triage_data = map__17843__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17843__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17843__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17843__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17843__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17843__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17843__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17843__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17843__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__17896 = phase;
var G__17896__$1 = (((G__17896 instanceof cljs.core.Keyword))?G__17896.fqn:null);
switch (G__17896__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__17900 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__17901 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17902 = loc;
var G__17903 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17908_18139 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17909_18140 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17910_18141 = true;
var _STAR_print_fn_STAR__temp_val__17911_18142 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17910_18141);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17911_18142);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17835_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17835_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17909_18140);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17908_18139);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__17900,G__17901,G__17902,G__17903) : format.call(null, G__17900,G__17901,G__17902,G__17903));

break;
case "macroexpansion":
var G__17915 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__17916 = cause_type;
var G__17917 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17918 = loc;
var G__17919 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17915,G__17916,G__17917,G__17918,G__17919) : format.call(null, G__17915,G__17916,G__17917,G__17918,G__17919));

break;
case "compile-syntax-check":
var G__17921 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__17922 = cause_type;
var G__17923 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17924 = loc;
var G__17925 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17921,G__17922,G__17923,G__17924,G__17925) : format.call(null, G__17921,G__17922,G__17923,G__17924,G__17925));

break;
case "compilation":
var G__17927 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__17928 = cause_type;
var G__17929 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17930 = loc;
var G__17931 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17927,G__17928,G__17929,G__17930,G__17931) : format.call(null, G__17927,G__17928,G__17929,G__17930,G__17931));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__17942 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__17943 = symbol;
var G__17944 = loc;
var G__17945 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17950_18144 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17951_18145 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17952_18146 = true;
var _STAR_print_fn_STAR__temp_val__17953_18147 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17952_18146);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17953_18147);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17839_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17839_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17951_18145);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17950_18144);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__17942,G__17943,G__17944,G__17945) : format.call(null, G__17942,G__17943,G__17944,G__17945));
} else {
var G__17958 = "Execution error%s at %s(%s).\n%s\n";
var G__17959 = cause_type;
var G__17960 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17961 = loc;
var G__17962 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17958,G__17959,G__17960,G__17961,G__17962) : format.call(null, G__17958,G__17959,G__17960,G__17961,G__17962));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17896__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
