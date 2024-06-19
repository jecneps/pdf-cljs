goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23103 = arguments.length;
var i__5727__auto___23104 = (0);
while(true){
if((i__5727__auto___23104 < len__5726__auto___23103)){
args__5732__auto__.push((arguments[i__5727__auto___23104]));

var G__23105 = (i__5727__auto___23104 + (1));
i__5727__auto___23104 = G__23105;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22637){
var G__22638 = cljs.core.first(seq22637);
var seq22637__$1 = cljs.core.next(seq22637);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22638,seq22637__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22644 = cljs.core.seq(sources);
var chunk__22645 = null;
var count__22646 = (0);
var i__22647 = (0);
while(true){
if((i__22647 < count__22646)){
var map__22660 = chunk__22645.cljs$core$IIndexed$_nth$arity$2(null, i__22647);
var map__22660__$1 = cljs.core.__destructure_map(map__22660);
var src = map__22660__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22660__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22660__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22660__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22660__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22661){var e_23106 = e22661;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23106);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23106.message)].join('')));
}

var G__23107 = seq__22644;
var G__23108 = chunk__22645;
var G__23109 = count__22646;
var G__23110 = (i__22647 + (1));
seq__22644 = G__23107;
chunk__22645 = G__23108;
count__22646 = G__23109;
i__22647 = G__23110;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22644);
if(temp__5804__auto__){
var seq__22644__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22644__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22644__$1);
var G__23111 = cljs.core.chunk_rest(seq__22644__$1);
var G__23112 = c__5525__auto__;
var G__23113 = cljs.core.count(c__5525__auto__);
var G__23114 = (0);
seq__22644 = G__23111;
chunk__22645 = G__23112;
count__22646 = G__23113;
i__22647 = G__23114;
continue;
} else {
var map__22662 = cljs.core.first(seq__22644__$1);
var map__22662__$1 = cljs.core.__destructure_map(map__22662);
var src = map__22662__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22662__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22662__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22662__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22662__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22663){var e_23115 = e22663;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23115);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23115.message)].join('')));
}

var G__23116 = cljs.core.next(seq__22644__$1);
var G__23117 = null;
var G__23118 = (0);
var G__23119 = (0);
seq__22644 = G__23116;
chunk__22645 = G__23117;
count__22646 = G__23118;
i__22647 = G__23119;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22675 = cljs.core.seq(js_requires);
var chunk__22676 = null;
var count__22677 = (0);
var i__22678 = (0);
while(true){
if((i__22678 < count__22677)){
var js_ns = chunk__22676.cljs$core$IIndexed$_nth$arity$2(null, i__22678);
var require_str_23121 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23121);


var G__23122 = seq__22675;
var G__23123 = chunk__22676;
var G__23124 = count__22677;
var G__23125 = (i__22678 + (1));
seq__22675 = G__23122;
chunk__22676 = G__23123;
count__22677 = G__23124;
i__22678 = G__23125;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22675);
if(temp__5804__auto__){
var seq__22675__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22675__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22675__$1);
var G__23126 = cljs.core.chunk_rest(seq__22675__$1);
var G__23127 = c__5525__auto__;
var G__23128 = cljs.core.count(c__5525__auto__);
var G__23129 = (0);
seq__22675 = G__23126;
chunk__22676 = G__23127;
count__22677 = G__23128;
i__22678 = G__23129;
continue;
} else {
var js_ns = cljs.core.first(seq__22675__$1);
var require_str_23130 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23130);


var G__23131 = cljs.core.next(seq__22675__$1);
var G__23132 = null;
var G__23133 = (0);
var G__23134 = (0);
seq__22675 = G__23131;
chunk__22676 = G__23132;
count__22677 = G__23133;
i__22678 = G__23134;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22684){
var map__22685 = p__22684;
var map__22685__$1 = cljs.core.__destructure_map(map__22685);
var msg = map__22685__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22685__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22685__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22686(s__22687){
return (new cljs.core.LazySeq(null,(function (){
var s__22687__$1 = s__22687;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22687__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__22692 = cljs.core.first(xs__6360__auto__);
var map__22692__$1 = cljs.core.__destructure_map(map__22692);
var src = map__22692__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22692__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22692__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__22687__$1,map__22692,map__22692__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22685,map__22685__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22686_$_iter__22688(s__22689){
return (new cljs.core.LazySeq(null,((function (s__22687__$1,map__22692,map__22692__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22685,map__22685__$1,msg,info,reload_info){
return (function (){
var s__22689__$1 = s__22689;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22689__$1);
if(temp__5804__auto____$1){
var s__22689__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22689__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22689__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22691 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22690 = (0);
while(true){
if((i__22690 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__22690);
cljs.core.chunk_append(b__22691,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__23135 = (i__22690 + (1));
i__22690 = G__23135;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22691),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22686_$_iter__22688(cljs.core.chunk_rest(s__22689__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22691),null);
}
} else {
var warning = cljs.core.first(s__22689__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22686_$_iter__22688(cljs.core.rest(s__22689__$2)));
}
} else {
return null;
}
break;
}
});})(s__22687__$1,map__22692,map__22692__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22685,map__22685__$1,msg,info,reload_info))
,null,null));
});})(s__22687__$1,map__22692,map__22692__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22685,map__22685__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22686(cljs.core.rest(s__22687__$1)));
} else {
var G__23136 = cljs.core.rest(s__22687__$1);
s__22687__$1 = G__23136;
continue;
}
} else {
var G__23137 = cljs.core.rest(s__22687__$1);
s__22687__$1 = G__23137;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22694_23138 = cljs.core.seq(warnings);
var chunk__22695_23139 = null;
var count__22696_23140 = (0);
var i__22697_23141 = (0);
while(true){
if((i__22697_23141 < count__22696_23140)){
var map__22706_23142 = chunk__22695_23139.cljs$core$IIndexed$_nth$arity$2(null, i__22697_23141);
var map__22706_23143__$1 = cljs.core.__destructure_map(map__22706_23142);
var w_23144 = map__22706_23143__$1;
var msg_23145__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22706_23143__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22706_23143__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22706_23143__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22706_23143__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23148)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23146),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23147),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23145__$1)].join(''));


var G__23152 = seq__22694_23138;
var G__23153 = chunk__22695_23139;
var G__23154 = count__22696_23140;
var G__23155 = (i__22697_23141 + (1));
seq__22694_23138 = G__23152;
chunk__22695_23139 = G__23153;
count__22696_23140 = G__23154;
i__22697_23141 = G__23155;
continue;
} else {
var temp__5804__auto___23157 = cljs.core.seq(seq__22694_23138);
if(temp__5804__auto___23157){
var seq__22694_23158__$1 = temp__5804__auto___23157;
if(cljs.core.chunked_seq_QMARK_(seq__22694_23158__$1)){
var c__5525__auto___23159 = cljs.core.chunk_first(seq__22694_23158__$1);
var G__23160 = cljs.core.chunk_rest(seq__22694_23158__$1);
var G__23161 = c__5525__auto___23159;
var G__23162 = cljs.core.count(c__5525__auto___23159);
var G__23163 = (0);
seq__22694_23138 = G__23160;
chunk__22695_23139 = G__23161;
count__22696_23140 = G__23162;
i__22697_23141 = G__23163;
continue;
} else {
var map__22707_23164 = cljs.core.first(seq__22694_23158__$1);
var map__22707_23165__$1 = cljs.core.__destructure_map(map__22707_23164);
var w_23166 = map__22707_23165__$1;
var msg_23167__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22707_23165__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22707_23165__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22707_23165__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23170 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22707_23165__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23170)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23168),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23169),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23167__$1)].join(''));


var G__23171 = cljs.core.next(seq__22694_23158__$1);
var G__23172 = null;
var G__23173 = (0);
var G__23174 = (0);
seq__22694_23138 = G__23171;
chunk__22695_23139 = G__23172;
count__22696_23140 = G__23173;
i__22697_23141 = G__23174;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22681_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22681_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22709){
var map__22710 = p__22709;
var map__22710__$1 = cljs.core.__destructure_map(map__22710);
var msg = map__22710__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22710__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22710__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22711 = cljs.core.seq(updates);
var chunk__22713 = null;
var count__22714 = (0);
var i__22715 = (0);
while(true){
if((i__22715 < count__22714)){
var path = chunk__22713.cljs$core$IIndexed$_nth$arity$2(null, i__22715);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22910_23178 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22914_23179 = null;
var count__22915_23180 = (0);
var i__22916_23181 = (0);
while(true){
if((i__22916_23181 < count__22915_23180)){
var node_23182 = chunk__22914_23179.cljs$core$IIndexed$_nth$arity$2(null, i__22916_23181);
if(cljs.core.not(node_23182.shadow$old)){
var path_match_23184 = shadow.cljs.devtools.client.browser.match_paths(node_23182.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23184)){
var new_link_23185 = (function (){var G__22978 = node_23182.cloneNode(true);
G__22978.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23184),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22978;
})();
(node_23182.shadow$old = true);

(new_link_23185.onload = ((function (seq__22910_23178,chunk__22914_23179,count__22915_23180,i__22916_23181,seq__22711,chunk__22713,count__22714,i__22715,new_link_23185,path_match_23184,node_23182,path,map__22710,map__22710__$1,msg,updates,reload_info){
return (function (e){
var seq__22979_23186 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22981_23187 = null;
var count__22982_23188 = (0);
var i__22983_23189 = (0);
while(true){
if((i__22983_23189 < count__22982_23188)){
var map__22987_23191 = chunk__22981_23187.cljs$core$IIndexed$_nth$arity$2(null, i__22983_23189);
var map__22987_23192__$1 = cljs.core.__destructure_map(map__22987_23191);
var task_23193 = map__22987_23192__$1;
var fn_str_23194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22987_23192__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23195 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22987_23192__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23196 = goog.getObjectByName(fn_str_23194,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23195)].join(''));

(fn_obj_23196.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23196.cljs$core$IFn$_invoke$arity$2(path,new_link_23185) : fn_obj_23196.call(null, path,new_link_23185));


var G__23197 = seq__22979_23186;
var G__23198 = chunk__22981_23187;
var G__23199 = count__22982_23188;
var G__23200 = (i__22983_23189 + (1));
seq__22979_23186 = G__23197;
chunk__22981_23187 = G__23198;
count__22982_23188 = G__23199;
i__22983_23189 = G__23200;
continue;
} else {
var temp__5804__auto___23201 = cljs.core.seq(seq__22979_23186);
if(temp__5804__auto___23201){
var seq__22979_23202__$1 = temp__5804__auto___23201;
if(cljs.core.chunked_seq_QMARK_(seq__22979_23202__$1)){
var c__5525__auto___23203 = cljs.core.chunk_first(seq__22979_23202__$1);
var G__23204 = cljs.core.chunk_rest(seq__22979_23202__$1);
var G__23205 = c__5525__auto___23203;
var G__23206 = cljs.core.count(c__5525__auto___23203);
var G__23207 = (0);
seq__22979_23186 = G__23204;
chunk__22981_23187 = G__23205;
count__22982_23188 = G__23206;
i__22983_23189 = G__23207;
continue;
} else {
var map__22988_23208 = cljs.core.first(seq__22979_23202__$1);
var map__22988_23209__$1 = cljs.core.__destructure_map(map__22988_23208);
var task_23210 = map__22988_23209__$1;
var fn_str_23211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22988_23209__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22988_23209__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23213 = goog.getObjectByName(fn_str_23211,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23212)].join(''));

(fn_obj_23213.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23213.cljs$core$IFn$_invoke$arity$2(path,new_link_23185) : fn_obj_23213.call(null, path,new_link_23185));


var G__23215 = cljs.core.next(seq__22979_23202__$1);
var G__23216 = null;
var G__23217 = (0);
var G__23218 = (0);
seq__22979_23186 = G__23215;
chunk__22981_23187 = G__23216;
count__22982_23188 = G__23217;
i__22983_23189 = G__23218;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23182);
});})(seq__22910_23178,chunk__22914_23179,count__22915_23180,i__22916_23181,seq__22711,chunk__22713,count__22714,i__22715,new_link_23185,path_match_23184,node_23182,path,map__22710,map__22710__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23184], 0));

goog.dom.insertSiblingAfter(new_link_23185,node_23182);


var G__23220 = seq__22910_23178;
var G__23221 = chunk__22914_23179;
var G__23222 = count__22915_23180;
var G__23223 = (i__22916_23181 + (1));
seq__22910_23178 = G__23220;
chunk__22914_23179 = G__23221;
count__22915_23180 = G__23222;
i__22916_23181 = G__23223;
continue;
} else {
var G__23224 = seq__22910_23178;
var G__23225 = chunk__22914_23179;
var G__23226 = count__22915_23180;
var G__23227 = (i__22916_23181 + (1));
seq__22910_23178 = G__23224;
chunk__22914_23179 = G__23225;
count__22915_23180 = G__23226;
i__22916_23181 = G__23227;
continue;
}
} else {
var G__23228 = seq__22910_23178;
var G__23229 = chunk__22914_23179;
var G__23230 = count__22915_23180;
var G__23231 = (i__22916_23181 + (1));
seq__22910_23178 = G__23228;
chunk__22914_23179 = G__23229;
count__22915_23180 = G__23230;
i__22916_23181 = G__23231;
continue;
}
} else {
var temp__5804__auto___23232 = cljs.core.seq(seq__22910_23178);
if(temp__5804__auto___23232){
var seq__22910_23233__$1 = temp__5804__auto___23232;
if(cljs.core.chunked_seq_QMARK_(seq__22910_23233__$1)){
var c__5525__auto___23234 = cljs.core.chunk_first(seq__22910_23233__$1);
var G__23235 = cljs.core.chunk_rest(seq__22910_23233__$1);
var G__23236 = c__5525__auto___23234;
var G__23237 = cljs.core.count(c__5525__auto___23234);
var G__23238 = (0);
seq__22910_23178 = G__23235;
chunk__22914_23179 = G__23236;
count__22915_23180 = G__23237;
i__22916_23181 = G__23238;
continue;
} else {
var node_23239 = cljs.core.first(seq__22910_23233__$1);
if(cljs.core.not(node_23239.shadow$old)){
var path_match_23240 = shadow.cljs.devtools.client.browser.match_paths(node_23239.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23240)){
var new_link_23241 = (function (){var G__22989 = node_23239.cloneNode(true);
G__22989.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23240),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22989;
})();
(node_23239.shadow$old = true);

(new_link_23241.onload = ((function (seq__22910_23178,chunk__22914_23179,count__22915_23180,i__22916_23181,seq__22711,chunk__22713,count__22714,i__22715,new_link_23241,path_match_23240,node_23239,seq__22910_23233__$1,temp__5804__auto___23232,path,map__22710,map__22710__$1,msg,updates,reload_info){
return (function (e){
var seq__22990_23242 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22992_23243 = null;
var count__22993_23244 = (0);
var i__22994_23245 = (0);
while(true){
if((i__22994_23245 < count__22993_23244)){
var map__22998_23247 = chunk__22992_23243.cljs$core$IIndexed$_nth$arity$2(null, i__22994_23245);
var map__22998_23248__$1 = cljs.core.__destructure_map(map__22998_23247);
var task_23249 = map__22998_23248__$1;
var fn_str_23250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22998_23248__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22998_23248__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23255 = goog.getObjectByName(fn_str_23250,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23251)].join(''));

(fn_obj_23255.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23255.cljs$core$IFn$_invoke$arity$2(path,new_link_23241) : fn_obj_23255.call(null, path,new_link_23241));


var G__23256 = seq__22990_23242;
var G__23257 = chunk__22992_23243;
var G__23258 = count__22993_23244;
var G__23259 = (i__22994_23245 + (1));
seq__22990_23242 = G__23256;
chunk__22992_23243 = G__23257;
count__22993_23244 = G__23258;
i__22994_23245 = G__23259;
continue;
} else {
var temp__5804__auto___23260__$1 = cljs.core.seq(seq__22990_23242);
if(temp__5804__auto___23260__$1){
var seq__22990_23261__$1 = temp__5804__auto___23260__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22990_23261__$1)){
var c__5525__auto___23262 = cljs.core.chunk_first(seq__22990_23261__$1);
var G__23263 = cljs.core.chunk_rest(seq__22990_23261__$1);
var G__23264 = c__5525__auto___23262;
var G__23265 = cljs.core.count(c__5525__auto___23262);
var G__23266 = (0);
seq__22990_23242 = G__23263;
chunk__22992_23243 = G__23264;
count__22993_23244 = G__23265;
i__22994_23245 = G__23266;
continue;
} else {
var map__22999_23267 = cljs.core.first(seq__22990_23261__$1);
var map__22999_23268__$1 = cljs.core.__destructure_map(map__22999_23267);
var task_23269 = map__22999_23268__$1;
var fn_str_23270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22999_23268__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22999_23268__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23272 = goog.getObjectByName(fn_str_23270,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23271)].join(''));

(fn_obj_23272.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23272.cljs$core$IFn$_invoke$arity$2(path,new_link_23241) : fn_obj_23272.call(null, path,new_link_23241));


var G__23274 = cljs.core.next(seq__22990_23261__$1);
var G__23275 = null;
var G__23276 = (0);
var G__23277 = (0);
seq__22990_23242 = G__23274;
chunk__22992_23243 = G__23275;
count__22993_23244 = G__23276;
i__22994_23245 = G__23277;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23239);
});})(seq__22910_23178,chunk__22914_23179,count__22915_23180,i__22916_23181,seq__22711,chunk__22713,count__22714,i__22715,new_link_23241,path_match_23240,node_23239,seq__22910_23233__$1,temp__5804__auto___23232,path,map__22710,map__22710__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23240], 0));

goog.dom.insertSiblingAfter(new_link_23241,node_23239);


var G__23280 = cljs.core.next(seq__22910_23233__$1);
var G__23281 = null;
var G__23282 = (0);
var G__23283 = (0);
seq__22910_23178 = G__23280;
chunk__22914_23179 = G__23281;
count__22915_23180 = G__23282;
i__22916_23181 = G__23283;
continue;
} else {
var G__23285 = cljs.core.next(seq__22910_23233__$1);
var G__23286 = null;
var G__23287 = (0);
var G__23288 = (0);
seq__22910_23178 = G__23285;
chunk__22914_23179 = G__23286;
count__22915_23180 = G__23287;
i__22916_23181 = G__23288;
continue;
}
} else {
var G__23289 = cljs.core.next(seq__22910_23233__$1);
var G__23290 = null;
var G__23291 = (0);
var G__23292 = (0);
seq__22910_23178 = G__23289;
chunk__22914_23179 = G__23290;
count__22915_23180 = G__23291;
i__22916_23181 = G__23292;
continue;
}
}
} else {
}
}
break;
}


var G__23293 = seq__22711;
var G__23294 = chunk__22713;
var G__23295 = count__22714;
var G__23296 = (i__22715 + (1));
seq__22711 = G__23293;
chunk__22713 = G__23294;
count__22714 = G__23295;
i__22715 = G__23296;
continue;
} else {
var G__23297 = seq__22711;
var G__23298 = chunk__22713;
var G__23299 = count__22714;
var G__23300 = (i__22715 + (1));
seq__22711 = G__23297;
chunk__22713 = G__23298;
count__22714 = G__23299;
i__22715 = G__23300;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22711);
if(temp__5804__auto__){
var seq__22711__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22711__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22711__$1);
var G__23301 = cljs.core.chunk_rest(seq__22711__$1);
var G__23302 = c__5525__auto__;
var G__23303 = cljs.core.count(c__5525__auto__);
var G__23304 = (0);
seq__22711 = G__23301;
chunk__22713 = G__23302;
count__22714 = G__23303;
i__22715 = G__23304;
continue;
} else {
var path = cljs.core.first(seq__22711__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23002_23305 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23006_23306 = null;
var count__23007_23307 = (0);
var i__23008_23308 = (0);
while(true){
if((i__23008_23308 < count__23007_23307)){
var node_23309 = chunk__23006_23306.cljs$core$IIndexed$_nth$arity$2(null, i__23008_23308);
if(cljs.core.not(node_23309.shadow$old)){
var path_match_23310 = shadow.cljs.devtools.client.browser.match_paths(node_23309.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23310)){
var new_link_23311 = (function (){var G__23043 = node_23309.cloneNode(true);
G__23043.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23310),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23043;
})();
(node_23309.shadow$old = true);

(new_link_23311.onload = ((function (seq__23002_23305,chunk__23006_23306,count__23007_23307,i__23008_23308,seq__22711,chunk__22713,count__22714,i__22715,new_link_23311,path_match_23310,node_23309,path,seq__22711__$1,temp__5804__auto__,map__22710,map__22710__$1,msg,updates,reload_info){
return (function (e){
var seq__23045_23317 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23047_23318 = null;
var count__23048_23319 = (0);
var i__23049_23320 = (0);
while(true){
if((i__23049_23320 < count__23048_23319)){
var map__23053_23321 = chunk__23047_23318.cljs$core$IIndexed$_nth$arity$2(null, i__23049_23320);
var map__23053_23322__$1 = cljs.core.__destructure_map(map__23053_23321);
var task_23323 = map__23053_23322__$1;
var fn_str_23324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23053_23322__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23053_23322__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23329 = goog.getObjectByName(fn_str_23324,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23325)].join(''));

(fn_obj_23329.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23329.cljs$core$IFn$_invoke$arity$2(path,new_link_23311) : fn_obj_23329.call(null, path,new_link_23311));


var G__23332 = seq__23045_23317;
var G__23333 = chunk__23047_23318;
var G__23334 = count__23048_23319;
var G__23335 = (i__23049_23320 + (1));
seq__23045_23317 = G__23332;
chunk__23047_23318 = G__23333;
count__23048_23319 = G__23334;
i__23049_23320 = G__23335;
continue;
} else {
var temp__5804__auto___23336__$1 = cljs.core.seq(seq__23045_23317);
if(temp__5804__auto___23336__$1){
var seq__23045_23341__$1 = temp__5804__auto___23336__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23045_23341__$1)){
var c__5525__auto___23342 = cljs.core.chunk_first(seq__23045_23341__$1);
var G__23343 = cljs.core.chunk_rest(seq__23045_23341__$1);
var G__23344 = c__5525__auto___23342;
var G__23345 = cljs.core.count(c__5525__auto___23342);
var G__23346 = (0);
seq__23045_23317 = G__23343;
chunk__23047_23318 = G__23344;
count__23048_23319 = G__23345;
i__23049_23320 = G__23346;
continue;
} else {
var map__23054_23347 = cljs.core.first(seq__23045_23341__$1);
var map__23054_23348__$1 = cljs.core.__destructure_map(map__23054_23347);
var task_23349 = map__23054_23348__$1;
var fn_str_23350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23054_23348__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23054_23348__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23352 = goog.getObjectByName(fn_str_23350,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23351)].join(''));

(fn_obj_23352.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23352.cljs$core$IFn$_invoke$arity$2(path,new_link_23311) : fn_obj_23352.call(null, path,new_link_23311));


var G__23353 = cljs.core.next(seq__23045_23341__$1);
var G__23354 = null;
var G__23355 = (0);
var G__23356 = (0);
seq__23045_23317 = G__23353;
chunk__23047_23318 = G__23354;
count__23048_23319 = G__23355;
i__23049_23320 = G__23356;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23309);
});})(seq__23002_23305,chunk__23006_23306,count__23007_23307,i__23008_23308,seq__22711,chunk__22713,count__22714,i__22715,new_link_23311,path_match_23310,node_23309,path,seq__22711__$1,temp__5804__auto__,map__22710,map__22710__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23310], 0));

goog.dom.insertSiblingAfter(new_link_23311,node_23309);


var G__23359 = seq__23002_23305;
var G__23360 = chunk__23006_23306;
var G__23361 = count__23007_23307;
var G__23362 = (i__23008_23308 + (1));
seq__23002_23305 = G__23359;
chunk__23006_23306 = G__23360;
count__23007_23307 = G__23361;
i__23008_23308 = G__23362;
continue;
} else {
var G__23364 = seq__23002_23305;
var G__23365 = chunk__23006_23306;
var G__23366 = count__23007_23307;
var G__23367 = (i__23008_23308 + (1));
seq__23002_23305 = G__23364;
chunk__23006_23306 = G__23365;
count__23007_23307 = G__23366;
i__23008_23308 = G__23367;
continue;
}
} else {
var G__23368 = seq__23002_23305;
var G__23369 = chunk__23006_23306;
var G__23370 = count__23007_23307;
var G__23371 = (i__23008_23308 + (1));
seq__23002_23305 = G__23368;
chunk__23006_23306 = G__23369;
count__23007_23307 = G__23370;
i__23008_23308 = G__23371;
continue;
}
} else {
var temp__5804__auto___23372__$1 = cljs.core.seq(seq__23002_23305);
if(temp__5804__auto___23372__$1){
var seq__23002_23373__$1 = temp__5804__auto___23372__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23002_23373__$1)){
var c__5525__auto___23374 = cljs.core.chunk_first(seq__23002_23373__$1);
var G__23375 = cljs.core.chunk_rest(seq__23002_23373__$1);
var G__23376 = c__5525__auto___23374;
var G__23377 = cljs.core.count(c__5525__auto___23374);
var G__23378 = (0);
seq__23002_23305 = G__23375;
chunk__23006_23306 = G__23376;
count__23007_23307 = G__23377;
i__23008_23308 = G__23378;
continue;
} else {
var node_23379 = cljs.core.first(seq__23002_23373__$1);
if(cljs.core.not(node_23379.shadow$old)){
var path_match_23380 = shadow.cljs.devtools.client.browser.match_paths(node_23379.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23380)){
var new_link_23381 = (function (){var G__23059 = node_23379.cloneNode(true);
G__23059.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23380),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23059;
})();
(node_23379.shadow$old = true);

(new_link_23381.onload = ((function (seq__23002_23305,chunk__23006_23306,count__23007_23307,i__23008_23308,seq__22711,chunk__22713,count__22714,i__22715,new_link_23381,path_match_23380,node_23379,seq__23002_23373__$1,temp__5804__auto___23372__$1,path,seq__22711__$1,temp__5804__auto__,map__22710,map__22710__$1,msg,updates,reload_info){
return (function (e){
var seq__23060_23385 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23062_23386 = null;
var count__23063_23387 = (0);
var i__23064_23388 = (0);
while(true){
if((i__23064_23388 < count__23063_23387)){
var map__23068_23389 = chunk__23062_23386.cljs$core$IIndexed$_nth$arity$2(null, i__23064_23388);
var map__23068_23390__$1 = cljs.core.__destructure_map(map__23068_23389);
var task_23391 = map__23068_23390__$1;
var fn_str_23392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23068_23390__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23068_23390__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23394 = goog.getObjectByName(fn_str_23392,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23393)].join(''));

(fn_obj_23394.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23394.cljs$core$IFn$_invoke$arity$2(path,new_link_23381) : fn_obj_23394.call(null, path,new_link_23381));


var G__23395 = seq__23060_23385;
var G__23396 = chunk__23062_23386;
var G__23397 = count__23063_23387;
var G__23398 = (i__23064_23388 + (1));
seq__23060_23385 = G__23395;
chunk__23062_23386 = G__23396;
count__23063_23387 = G__23397;
i__23064_23388 = G__23398;
continue;
} else {
var temp__5804__auto___23399__$2 = cljs.core.seq(seq__23060_23385);
if(temp__5804__auto___23399__$2){
var seq__23060_23400__$1 = temp__5804__auto___23399__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23060_23400__$1)){
var c__5525__auto___23401 = cljs.core.chunk_first(seq__23060_23400__$1);
var G__23402 = cljs.core.chunk_rest(seq__23060_23400__$1);
var G__23403 = c__5525__auto___23401;
var G__23404 = cljs.core.count(c__5525__auto___23401);
var G__23405 = (0);
seq__23060_23385 = G__23402;
chunk__23062_23386 = G__23403;
count__23063_23387 = G__23404;
i__23064_23388 = G__23405;
continue;
} else {
var map__23071_23408 = cljs.core.first(seq__23060_23400__$1);
var map__23071_23409__$1 = cljs.core.__destructure_map(map__23071_23408);
var task_23410 = map__23071_23409__$1;
var fn_str_23411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23071_23409__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23071_23409__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23414 = goog.getObjectByName(fn_str_23411,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23412)].join(''));

(fn_obj_23414.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23414.cljs$core$IFn$_invoke$arity$2(path,new_link_23381) : fn_obj_23414.call(null, path,new_link_23381));


var G__23415 = cljs.core.next(seq__23060_23400__$1);
var G__23416 = null;
var G__23417 = (0);
var G__23418 = (0);
seq__23060_23385 = G__23415;
chunk__23062_23386 = G__23416;
count__23063_23387 = G__23417;
i__23064_23388 = G__23418;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23379);
});})(seq__23002_23305,chunk__23006_23306,count__23007_23307,i__23008_23308,seq__22711,chunk__22713,count__22714,i__22715,new_link_23381,path_match_23380,node_23379,seq__23002_23373__$1,temp__5804__auto___23372__$1,path,seq__22711__$1,temp__5804__auto__,map__22710,map__22710__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23380], 0));

goog.dom.insertSiblingAfter(new_link_23381,node_23379);


var G__23419 = cljs.core.next(seq__23002_23373__$1);
var G__23420 = null;
var G__23421 = (0);
var G__23422 = (0);
seq__23002_23305 = G__23419;
chunk__23006_23306 = G__23420;
count__23007_23307 = G__23421;
i__23008_23308 = G__23422;
continue;
} else {
var G__23423 = cljs.core.next(seq__23002_23373__$1);
var G__23424 = null;
var G__23425 = (0);
var G__23426 = (0);
seq__23002_23305 = G__23423;
chunk__23006_23306 = G__23424;
count__23007_23307 = G__23425;
i__23008_23308 = G__23426;
continue;
}
} else {
var G__23427 = cljs.core.next(seq__23002_23373__$1);
var G__23428 = null;
var G__23429 = (0);
var G__23430 = (0);
seq__23002_23305 = G__23427;
chunk__23006_23306 = G__23428;
count__23007_23307 = G__23429;
i__23008_23308 = G__23430;
continue;
}
}
} else {
}
}
break;
}


var G__23431 = cljs.core.next(seq__22711__$1);
var G__23432 = null;
var G__23433 = (0);
var G__23434 = (0);
seq__22711 = G__23431;
chunk__22713 = G__23432;
count__22714 = G__23433;
i__22715 = G__23434;
continue;
} else {
var G__23435 = cljs.core.next(seq__22711__$1);
var G__23436 = null;
var G__23437 = (0);
var G__23438 = (0);
seq__22711 = G__23435;
chunk__22713 = G__23436;
count__22714 = G__23437;
i__22715 = G__23438;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__23074){
var map__23075 = p__23074;
var map__23075__$1 = cljs.core.__destructure_map(map__23075);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23075__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__23076,done,error){
var map__23077 = p__23076;
var map__23077__$1 = cljs.core.__destructure_map(map__23077);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23077__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__23081,done,error){
var map__23082 = p__23081;
var map__23082__$1 = cljs.core.__destructure_map(map__23082);
var msg = map__23082__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23082__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23082__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23082__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__23083){
var map__23084 = p__23083;
var map__23084__$1 = cljs.core.__destructure_map(map__23084);
var src = map__23084__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23084__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__23085 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__23085) : done.call(null, G__23085));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__23086){
var map__23087 = p__23086;
var map__23087__$1 = cljs.core.__destructure_map(map__23087);
var msg__$1 = map__23087__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23087__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e23088){var ex = e23088;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__23089){
var map__23090 = p__23089;
var map__23090__$1 = cljs.core.__destructure_map(map__23090);
var env = map__23090__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23090__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__23096){
var map__23097 = p__23096;
var map__23097__$1 = cljs.core.__destructure_map(map__23097);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23097__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23097__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__23099){
var map__23100 = p__23099;
var map__23100__$1 = cljs.core.__destructure_map(map__23100);
var svc = map__23100__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23100__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
