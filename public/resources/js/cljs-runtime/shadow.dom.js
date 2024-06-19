goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_18909 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_18909(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_18910 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_18910(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17165 = coll;
var G__17166 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17165,G__17166) : shadow.dom.lazy_native_coll_seq.call(null, G__17165,G__17166));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17231 = arguments.length;
switch (G__17231) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17241 = arguments.length;
switch (G__17241) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__17257 = arguments.length;
switch (G__17257) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__17275 = arguments.length;
switch (G__17275) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__17304 = arguments.length;
switch (G__17304) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__17338 = arguments.length;
switch (G__17338) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e17364){if((e17364 instanceof Object)){
var e = e17364;
return console.log("didnt support attachEvent",el,e);
} else {
throw e17364;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17387 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17388 = null;
var count__17389 = (0);
var i__17390 = (0);
while(true){
if((i__17390 < count__17389)){
var el = chunk__17388.cljs$core$IIndexed$_nth$arity$2(null, i__17390);
var handler_18935__$1 = ((function (seq__17387,chunk__17388,count__17389,i__17390,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__17387,chunk__17388,count__17389,i__17390,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18935__$1);


var G__18938 = seq__17387;
var G__18939 = chunk__17388;
var G__18940 = count__17389;
var G__18941 = (i__17390 + (1));
seq__17387 = G__18938;
chunk__17388 = G__18939;
count__17389 = G__18940;
i__17390 = G__18941;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17387);
if(temp__5804__auto__){
var seq__17387__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17387__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17387__$1);
var G__18942 = cljs.core.chunk_rest(seq__17387__$1);
var G__18943 = c__5525__auto__;
var G__18944 = cljs.core.count(c__5525__auto__);
var G__18945 = (0);
seq__17387 = G__18942;
chunk__17388 = G__18943;
count__17389 = G__18944;
i__17390 = G__18945;
continue;
} else {
var el = cljs.core.first(seq__17387__$1);
var handler_18946__$1 = ((function (seq__17387,chunk__17388,count__17389,i__17390,el,seq__17387__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__17387,chunk__17388,count__17389,i__17390,el,seq__17387__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18946__$1);


var G__18947 = cljs.core.next(seq__17387__$1);
var G__18948 = null;
var G__18949 = (0);
var G__18950 = (0);
seq__17387 = G__18947;
chunk__17388 = G__18948;
count__17389 = G__18949;
i__17390 = G__18950;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__17426 = arguments.length;
switch (G__17426) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__17449 = cljs.core.seq(events);
var chunk__17450 = null;
var count__17451 = (0);
var i__17452 = (0);
while(true){
if((i__17452 < count__17451)){
var vec__17473 = chunk__17450.cljs$core$IIndexed$_nth$arity$2(null, i__17452);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17473,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17473,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18954 = seq__17449;
var G__18955 = chunk__17450;
var G__18956 = count__17451;
var G__18957 = (i__17452 + (1));
seq__17449 = G__18954;
chunk__17450 = G__18955;
count__17451 = G__18956;
i__17452 = G__18957;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17449);
if(temp__5804__auto__){
var seq__17449__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17449__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17449__$1);
var G__18958 = cljs.core.chunk_rest(seq__17449__$1);
var G__18959 = c__5525__auto__;
var G__18960 = cljs.core.count(c__5525__auto__);
var G__18961 = (0);
seq__17449 = G__18958;
chunk__17450 = G__18959;
count__17451 = G__18960;
i__17452 = G__18961;
continue;
} else {
var vec__17480 = cljs.core.first(seq__17449__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17480,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17480,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18962 = cljs.core.next(seq__17449__$1);
var G__18963 = null;
var G__18964 = (0);
var G__18965 = (0);
seq__17449 = G__18962;
chunk__17450 = G__18963;
count__17451 = G__18964;
i__17452 = G__18965;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__17495 = cljs.core.seq(styles);
var chunk__17496 = null;
var count__17497 = (0);
var i__17498 = (0);
while(true){
if((i__17498 < count__17497)){
var vec__17526 = chunk__17496.cljs$core$IIndexed$_nth$arity$2(null, i__17498);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17526,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17526,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18970 = seq__17495;
var G__18971 = chunk__17496;
var G__18972 = count__17497;
var G__18973 = (i__17498 + (1));
seq__17495 = G__18970;
chunk__17496 = G__18971;
count__17497 = G__18972;
i__17498 = G__18973;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17495);
if(temp__5804__auto__){
var seq__17495__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17495__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17495__$1);
var G__18974 = cljs.core.chunk_rest(seq__17495__$1);
var G__18975 = c__5525__auto__;
var G__18976 = cljs.core.count(c__5525__auto__);
var G__18977 = (0);
seq__17495 = G__18974;
chunk__17496 = G__18975;
count__17497 = G__18976;
i__17498 = G__18977;
continue;
} else {
var vec__17535 = cljs.core.first(seq__17495__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17535,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17535,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18979 = cljs.core.next(seq__17495__$1);
var G__18980 = null;
var G__18981 = (0);
var G__18982 = (0);
seq__17495 = G__18979;
chunk__17496 = G__18980;
count__17497 = G__18981;
i__17498 = G__18982;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__17555_18983 = key;
var G__17555_18984__$1 = (((G__17555_18983 instanceof cljs.core.Keyword))?G__17555_18983.fqn:null);
switch (G__17555_18984__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_18988 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_18988,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_18988,"aria-");
}
})())){
el.setAttribute(ks_18988,value);
} else {
(el[ks_18988] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__17616){
var map__17620 = p__17616;
var map__17620__$1 = cljs.core.__destructure_map(map__17620);
var props = map__17620__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17620__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__17622 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17622,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17622,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17622,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__17627 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__17627,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__17627;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__17636 = arguments.length;
switch (G__17636) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__17684){
var vec__17688 = p__17684;
var seq__17689 = cljs.core.seq(vec__17688);
var first__17690 = cljs.core.first(seq__17689);
var seq__17689__$1 = cljs.core.next(seq__17689);
var nn = first__17690;
var first__17690__$1 = cljs.core.first(seq__17689__$1);
var seq__17689__$2 = cljs.core.next(seq__17689__$1);
var np = first__17690__$1;
var nc = seq__17689__$2;
var node = vec__17688;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17710 = nn;
var G__17711 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17710,G__17711) : create_fn.call(null, G__17710,G__17711));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17728 = nn;
var G__17729 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17728,G__17729) : create_fn.call(null, G__17728,G__17729));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__17742 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17742,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17742,(1),null);
var seq__17747_18999 = cljs.core.seq(node_children);
var chunk__17748_19000 = null;
var count__17749_19001 = (0);
var i__17750_19002 = (0);
while(true){
if((i__17750_19002 < count__17749_19001)){
var child_struct_19003 = chunk__17748_19000.cljs$core$IIndexed$_nth$arity$2(null, i__17750_19002);
var children_19004 = shadow.dom.dom_node(child_struct_19003);
if(cljs.core.seq_QMARK_(children_19004)){
var seq__17880_19005 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19004));
var chunk__17882_19006 = null;
var count__17883_19007 = (0);
var i__17884_19008 = (0);
while(true){
if((i__17884_19008 < count__17883_19007)){
var child_19009 = chunk__17882_19006.cljs$core$IIndexed$_nth$arity$2(null, i__17884_19008);
if(cljs.core.truth_(child_19009)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19009);


var G__19010 = seq__17880_19005;
var G__19012 = chunk__17882_19006;
var G__19013 = count__17883_19007;
var G__19014 = (i__17884_19008 + (1));
seq__17880_19005 = G__19010;
chunk__17882_19006 = G__19012;
count__17883_19007 = G__19013;
i__17884_19008 = G__19014;
continue;
} else {
var G__19015 = seq__17880_19005;
var G__19016 = chunk__17882_19006;
var G__19017 = count__17883_19007;
var G__19018 = (i__17884_19008 + (1));
seq__17880_19005 = G__19015;
chunk__17882_19006 = G__19016;
count__17883_19007 = G__19017;
i__17884_19008 = G__19018;
continue;
}
} else {
var temp__5804__auto___19019 = cljs.core.seq(seq__17880_19005);
if(temp__5804__auto___19019){
var seq__17880_19020__$1 = temp__5804__auto___19019;
if(cljs.core.chunked_seq_QMARK_(seq__17880_19020__$1)){
var c__5525__auto___19021 = cljs.core.chunk_first(seq__17880_19020__$1);
var G__19022 = cljs.core.chunk_rest(seq__17880_19020__$1);
var G__19023 = c__5525__auto___19021;
var G__19024 = cljs.core.count(c__5525__auto___19021);
var G__19025 = (0);
seq__17880_19005 = G__19022;
chunk__17882_19006 = G__19023;
count__17883_19007 = G__19024;
i__17884_19008 = G__19025;
continue;
} else {
var child_19026 = cljs.core.first(seq__17880_19020__$1);
if(cljs.core.truth_(child_19026)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19026);


var G__19027 = cljs.core.next(seq__17880_19020__$1);
var G__19028 = null;
var G__19029 = (0);
var G__19030 = (0);
seq__17880_19005 = G__19027;
chunk__17882_19006 = G__19028;
count__17883_19007 = G__19029;
i__17884_19008 = G__19030;
continue;
} else {
var G__19031 = cljs.core.next(seq__17880_19020__$1);
var G__19032 = null;
var G__19033 = (0);
var G__19034 = (0);
seq__17880_19005 = G__19031;
chunk__17882_19006 = G__19032;
count__17883_19007 = G__19033;
i__17884_19008 = G__19034;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19004);
}


var G__19036 = seq__17747_18999;
var G__19037 = chunk__17748_19000;
var G__19038 = count__17749_19001;
var G__19039 = (i__17750_19002 + (1));
seq__17747_18999 = G__19036;
chunk__17748_19000 = G__19037;
count__17749_19001 = G__19038;
i__17750_19002 = G__19039;
continue;
} else {
var temp__5804__auto___19040 = cljs.core.seq(seq__17747_18999);
if(temp__5804__auto___19040){
var seq__17747_19041__$1 = temp__5804__auto___19040;
if(cljs.core.chunked_seq_QMARK_(seq__17747_19041__$1)){
var c__5525__auto___19042 = cljs.core.chunk_first(seq__17747_19041__$1);
var G__19043 = cljs.core.chunk_rest(seq__17747_19041__$1);
var G__19044 = c__5525__auto___19042;
var G__19045 = cljs.core.count(c__5525__auto___19042);
var G__19046 = (0);
seq__17747_18999 = G__19043;
chunk__17748_19000 = G__19044;
count__17749_19001 = G__19045;
i__17750_19002 = G__19046;
continue;
} else {
var child_struct_19047 = cljs.core.first(seq__17747_19041__$1);
var children_19048 = shadow.dom.dom_node(child_struct_19047);
if(cljs.core.seq_QMARK_(children_19048)){
var seq__17936_19049 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19048));
var chunk__17938_19050 = null;
var count__17939_19051 = (0);
var i__17940_19052 = (0);
while(true){
if((i__17940_19052 < count__17939_19051)){
var child_19053 = chunk__17938_19050.cljs$core$IIndexed$_nth$arity$2(null, i__17940_19052);
if(cljs.core.truth_(child_19053)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19053);


var G__19054 = seq__17936_19049;
var G__19055 = chunk__17938_19050;
var G__19056 = count__17939_19051;
var G__19057 = (i__17940_19052 + (1));
seq__17936_19049 = G__19054;
chunk__17938_19050 = G__19055;
count__17939_19051 = G__19056;
i__17940_19052 = G__19057;
continue;
} else {
var G__19058 = seq__17936_19049;
var G__19059 = chunk__17938_19050;
var G__19060 = count__17939_19051;
var G__19061 = (i__17940_19052 + (1));
seq__17936_19049 = G__19058;
chunk__17938_19050 = G__19059;
count__17939_19051 = G__19060;
i__17940_19052 = G__19061;
continue;
}
} else {
var temp__5804__auto___19062__$1 = cljs.core.seq(seq__17936_19049);
if(temp__5804__auto___19062__$1){
var seq__17936_19063__$1 = temp__5804__auto___19062__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17936_19063__$1)){
var c__5525__auto___19064 = cljs.core.chunk_first(seq__17936_19063__$1);
var G__19065 = cljs.core.chunk_rest(seq__17936_19063__$1);
var G__19066 = c__5525__auto___19064;
var G__19067 = cljs.core.count(c__5525__auto___19064);
var G__19068 = (0);
seq__17936_19049 = G__19065;
chunk__17938_19050 = G__19066;
count__17939_19051 = G__19067;
i__17940_19052 = G__19068;
continue;
} else {
var child_19069 = cljs.core.first(seq__17936_19063__$1);
if(cljs.core.truth_(child_19069)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19069);


var G__19070 = cljs.core.next(seq__17936_19063__$1);
var G__19071 = null;
var G__19072 = (0);
var G__19073 = (0);
seq__17936_19049 = G__19070;
chunk__17938_19050 = G__19071;
count__17939_19051 = G__19072;
i__17940_19052 = G__19073;
continue;
} else {
var G__19074 = cljs.core.next(seq__17936_19063__$1);
var G__19075 = null;
var G__19076 = (0);
var G__19077 = (0);
seq__17936_19049 = G__19074;
chunk__17938_19050 = G__19075;
count__17939_19051 = G__19076;
i__17940_19052 = G__19077;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19048);
}


var G__19078 = cljs.core.next(seq__17747_19041__$1);
var G__19079 = null;
var G__19080 = (0);
var G__19081 = (0);
seq__17747_18999 = G__19078;
chunk__17748_19000 = G__19079;
count__17749_19001 = G__19080;
i__17750_19002 = G__19081;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18073 = cljs.core.seq(node);
var chunk__18074 = null;
var count__18075 = (0);
var i__18076 = (0);
while(true){
if((i__18076 < count__18075)){
var n = chunk__18074.cljs$core$IIndexed$_nth$arity$2(null, i__18076);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__19084 = seq__18073;
var G__19085 = chunk__18074;
var G__19086 = count__18075;
var G__19087 = (i__18076 + (1));
seq__18073 = G__19084;
chunk__18074 = G__19085;
count__18075 = G__19086;
i__18076 = G__19087;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18073);
if(temp__5804__auto__){
var seq__18073__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18073__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18073__$1);
var G__19088 = cljs.core.chunk_rest(seq__18073__$1);
var G__19089 = c__5525__auto__;
var G__19090 = cljs.core.count(c__5525__auto__);
var G__19091 = (0);
seq__18073 = G__19088;
chunk__18074 = G__19089;
count__18075 = G__19090;
i__18076 = G__19091;
continue;
} else {
var n = cljs.core.first(seq__18073__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__19092 = cljs.core.next(seq__18073__$1);
var G__19093 = null;
var G__19094 = (0);
var G__19095 = (0);
seq__18073 = G__19092;
chunk__18074 = G__19093;
count__18075 = G__19094;
i__18076 = G__19095;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18110 = arguments.length;
switch (G__18110) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18130 = arguments.length;
switch (G__18130) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18152 = arguments.length;
switch (G__18152) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19107 = arguments.length;
var i__5727__auto___19108 = (0);
while(true){
if((i__5727__auto___19108 < len__5726__auto___19107)){
args__5732__auto__.push((arguments[i__5727__auto___19108]));

var G__19109 = (i__5727__auto___19108 + (1));
i__5727__auto___19108 = G__19109;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18216_19110 = cljs.core.seq(nodes);
var chunk__18217_19111 = null;
var count__18218_19112 = (0);
var i__18219_19113 = (0);
while(true){
if((i__18219_19113 < count__18218_19112)){
var node_19114 = chunk__18217_19111.cljs$core$IIndexed$_nth$arity$2(null, i__18219_19113);
fragment.appendChild(shadow.dom._to_dom(node_19114));


var G__19116 = seq__18216_19110;
var G__19117 = chunk__18217_19111;
var G__19118 = count__18218_19112;
var G__19119 = (i__18219_19113 + (1));
seq__18216_19110 = G__19116;
chunk__18217_19111 = G__19117;
count__18218_19112 = G__19118;
i__18219_19113 = G__19119;
continue;
} else {
var temp__5804__auto___19121 = cljs.core.seq(seq__18216_19110);
if(temp__5804__auto___19121){
var seq__18216_19122__$1 = temp__5804__auto___19121;
if(cljs.core.chunked_seq_QMARK_(seq__18216_19122__$1)){
var c__5525__auto___19123 = cljs.core.chunk_first(seq__18216_19122__$1);
var G__19124 = cljs.core.chunk_rest(seq__18216_19122__$1);
var G__19125 = c__5525__auto___19123;
var G__19126 = cljs.core.count(c__5525__auto___19123);
var G__19127 = (0);
seq__18216_19110 = G__19124;
chunk__18217_19111 = G__19125;
count__18218_19112 = G__19126;
i__18219_19113 = G__19127;
continue;
} else {
var node_19132 = cljs.core.first(seq__18216_19122__$1);
fragment.appendChild(shadow.dom._to_dom(node_19132));


var G__19133 = cljs.core.next(seq__18216_19122__$1);
var G__19134 = null;
var G__19135 = (0);
var G__19136 = (0);
seq__18216_19110 = G__19133;
chunk__18217_19111 = G__19134;
count__18218_19112 = G__19135;
i__18219_19113 = G__19136;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18205){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18205));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18253_19138 = cljs.core.seq(scripts);
var chunk__18254_19139 = null;
var count__18255_19140 = (0);
var i__18256_19141 = (0);
while(true){
if((i__18256_19141 < count__18255_19140)){
var vec__18281_19143 = chunk__18254_19139.cljs$core$IIndexed$_nth$arity$2(null, i__18256_19141);
var script_tag_19144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18281_19143,(0),null);
var script_body_19145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18281_19143,(1),null);
eval(script_body_19145);


var G__19147 = seq__18253_19138;
var G__19148 = chunk__18254_19139;
var G__19149 = count__18255_19140;
var G__19150 = (i__18256_19141 + (1));
seq__18253_19138 = G__19147;
chunk__18254_19139 = G__19148;
count__18255_19140 = G__19149;
i__18256_19141 = G__19150;
continue;
} else {
var temp__5804__auto___19151 = cljs.core.seq(seq__18253_19138);
if(temp__5804__auto___19151){
var seq__18253_19155__$1 = temp__5804__auto___19151;
if(cljs.core.chunked_seq_QMARK_(seq__18253_19155__$1)){
var c__5525__auto___19156 = cljs.core.chunk_first(seq__18253_19155__$1);
var G__19157 = cljs.core.chunk_rest(seq__18253_19155__$1);
var G__19158 = c__5525__auto___19156;
var G__19159 = cljs.core.count(c__5525__auto___19156);
var G__19160 = (0);
seq__18253_19138 = G__19157;
chunk__18254_19139 = G__19158;
count__18255_19140 = G__19159;
i__18256_19141 = G__19160;
continue;
} else {
var vec__18294_19161 = cljs.core.first(seq__18253_19155__$1);
var script_tag_19162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18294_19161,(0),null);
var script_body_19163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18294_19161,(1),null);
eval(script_body_19163);


var G__19164 = cljs.core.next(seq__18253_19155__$1);
var G__19165 = null;
var G__19166 = (0);
var G__19167 = (0);
seq__18253_19138 = G__19164;
chunk__18254_19139 = G__19165;
count__18255_19140 = G__19166;
i__18256_19141 = G__19167;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18299){
var vec__18303 = p__18299;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18303,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18303,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18330 = arguments.length;
switch (G__18330) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18375 = cljs.core.seq(style_keys);
var chunk__18376 = null;
var count__18377 = (0);
var i__18378 = (0);
while(true){
if((i__18378 < count__18377)){
var it = chunk__18376.cljs$core$IIndexed$_nth$arity$2(null, i__18378);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19179 = seq__18375;
var G__19180 = chunk__18376;
var G__19181 = count__18377;
var G__19182 = (i__18378 + (1));
seq__18375 = G__19179;
chunk__18376 = G__19180;
count__18377 = G__19181;
i__18378 = G__19182;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18375);
if(temp__5804__auto__){
var seq__18375__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18375__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18375__$1);
var G__19183 = cljs.core.chunk_rest(seq__18375__$1);
var G__19184 = c__5525__auto__;
var G__19185 = cljs.core.count(c__5525__auto__);
var G__19186 = (0);
seq__18375 = G__19183;
chunk__18376 = G__19184;
count__18377 = G__19185;
i__18378 = G__19186;
continue;
} else {
var it = cljs.core.first(seq__18375__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19187 = cljs.core.next(seq__18375__$1);
var G__19188 = null;
var G__19189 = (0);
var G__19190 = (0);
seq__18375 = G__19187;
chunk__18376 = G__19188;
count__18377 = G__19189;
i__18378 = G__19190;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k18402,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__18413 = k18402;
var G__18413__$1 = (((G__18413 instanceof cljs.core.Keyword))?G__18413.fqn:null);
switch (G__18413__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18402,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__18418){
var vec__18419 = p__18418;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18419,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18419,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18401){
var self__ = this;
var G__18401__$1 = this;
return (new cljs.core.RecordIter((0),G__18401__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18403,other18404){
var self__ = this;
var this18403__$1 = this;
return (((!((other18404 == null)))) && ((((this18403__$1.constructor === other18404.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18403__$1.x,other18404.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18403__$1.y,other18404.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18403__$1.__extmap,other18404.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k18402){
var self__ = this;
var this__5307__auto____$1 = this;
var G__18444 = k18402;
var G__18444__$1 = (((G__18444 instanceof cljs.core.Keyword))?G__18444.fqn:null);
switch (G__18444__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18402);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__18401){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__18455 = cljs.core.keyword_identical_QMARK_;
var expr__18456 = k__5309__auto__;
if(cljs.core.truth_((pred__18455.cljs$core$IFn$_invoke$arity$2 ? pred__18455.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18456) : pred__18455.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__18456)))){
return (new shadow.dom.Coordinate(G__18401,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18455.cljs$core$IFn$_invoke$arity$2 ? pred__18455.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18456) : pred__18455.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__18456)))){
return (new shadow.dom.Coordinate(self__.x,G__18401,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__18401),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__18401){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18401,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18407){
var extmap__5342__auto__ = (function (){var G__18478 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18407,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18407)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18478);
} else {
return G__18478;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18407),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18407),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k18502,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__18563 = k18502;
var G__18563__$1 = (((G__18563 instanceof cljs.core.Keyword))?G__18563.fqn:null);
switch (G__18563__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18502,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__18572){
var vec__18576 = p__18572;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18576,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18576,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18501){
var self__ = this;
var G__18501__$1 = this;
return (new cljs.core.RecordIter((0),G__18501__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18503,other18504){
var self__ = this;
var this18503__$1 = this;
return (((!((other18504 == null)))) && ((((this18503__$1.constructor === other18504.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18503__$1.w,other18504.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18503__$1.h,other18504.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18503__$1.__extmap,other18504.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k18502){
var self__ = this;
var this__5307__auto____$1 = this;
var G__18627 = k18502;
var G__18627__$1 = (((G__18627 instanceof cljs.core.Keyword))?G__18627.fqn:null);
switch (G__18627__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18502);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__18501){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__18633 = cljs.core.keyword_identical_QMARK_;
var expr__18634 = k__5309__auto__;
if(cljs.core.truth_((pred__18633.cljs$core$IFn$_invoke$arity$2 ? pred__18633.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18634) : pred__18633.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__18634)))){
return (new shadow.dom.Size(G__18501,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18633.cljs$core$IFn$_invoke$arity$2 ? pred__18633.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18634) : pred__18633.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__18634)))){
return (new shadow.dom.Size(self__.w,G__18501,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__18501),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__18501){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18501,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18510){
var extmap__5342__auto__ = (function (){var G__18656 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18510,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18510)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18656);
} else {
return G__18656;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18510),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18510),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__19229 = (i + (1));
var G__19230 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19229;
ret = G__19230;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18701){
var vec__18702 = p__18701;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18702,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18702,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18711 = arguments.length;
switch (G__18711) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19232 = ps;
var G__19233 = (i + (1));
el__$1 = G__19232;
i = G__19233;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18737 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18737,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18737,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18737,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18740_19237 = cljs.core.seq(props);
var chunk__18741_19238 = null;
var count__18742_19239 = (0);
var i__18743_19240 = (0);
while(true){
if((i__18743_19240 < count__18742_19239)){
var vec__18760_19241 = chunk__18741_19238.cljs$core$IIndexed$_nth$arity$2(null, i__18743_19240);
var k_19242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18760_19241,(0),null);
var v_19243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18760_19241,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19242);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19242),v_19243);


var G__19247 = seq__18740_19237;
var G__19248 = chunk__18741_19238;
var G__19249 = count__18742_19239;
var G__19250 = (i__18743_19240 + (1));
seq__18740_19237 = G__19247;
chunk__18741_19238 = G__19248;
count__18742_19239 = G__19249;
i__18743_19240 = G__19250;
continue;
} else {
var temp__5804__auto___19251 = cljs.core.seq(seq__18740_19237);
if(temp__5804__auto___19251){
var seq__18740_19252__$1 = temp__5804__auto___19251;
if(cljs.core.chunked_seq_QMARK_(seq__18740_19252__$1)){
var c__5525__auto___19253 = cljs.core.chunk_first(seq__18740_19252__$1);
var G__19254 = cljs.core.chunk_rest(seq__18740_19252__$1);
var G__19255 = c__5525__auto___19253;
var G__19256 = cljs.core.count(c__5525__auto___19253);
var G__19257 = (0);
seq__18740_19237 = G__19254;
chunk__18741_19238 = G__19255;
count__18742_19239 = G__19256;
i__18743_19240 = G__19257;
continue;
} else {
var vec__18777_19260 = cljs.core.first(seq__18740_19252__$1);
var k_19261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18777_19260,(0),null);
var v_19262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18777_19260,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19261);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19261),v_19262);


var G__19264 = cljs.core.next(seq__18740_19252__$1);
var G__19265 = null;
var G__19266 = (0);
var G__19267 = (0);
seq__18740_19237 = G__19264;
chunk__18741_19238 = G__19265;
count__18742_19239 = G__19266;
i__18743_19240 = G__19267;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__18784 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18784,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18784,(1),null);
var seq__18787_19268 = cljs.core.seq(node_children);
var chunk__18789_19269 = null;
var count__18790_19270 = (0);
var i__18791_19271 = (0);
while(true){
if((i__18791_19271 < count__18790_19270)){
var child_struct_19272 = chunk__18789_19269.cljs$core$IIndexed$_nth$arity$2(null, i__18791_19271);
if((!((child_struct_19272 == null)))){
if(typeof child_struct_19272 === 'string'){
var text_19273 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19273),child_struct_19272].join(''));
} else {
var children_19274 = shadow.dom.svg_node(child_struct_19272);
if(cljs.core.seq_QMARK_(children_19274)){
var seq__18823_19275 = cljs.core.seq(children_19274);
var chunk__18825_19276 = null;
var count__18826_19277 = (0);
var i__18827_19278 = (0);
while(true){
if((i__18827_19278 < count__18826_19277)){
var child_19280 = chunk__18825_19276.cljs$core$IIndexed$_nth$arity$2(null, i__18827_19278);
if(cljs.core.truth_(child_19280)){
node.appendChild(child_19280);


var G__19282 = seq__18823_19275;
var G__19284 = chunk__18825_19276;
var G__19285 = count__18826_19277;
var G__19286 = (i__18827_19278 + (1));
seq__18823_19275 = G__19282;
chunk__18825_19276 = G__19284;
count__18826_19277 = G__19285;
i__18827_19278 = G__19286;
continue;
} else {
var G__19287 = seq__18823_19275;
var G__19288 = chunk__18825_19276;
var G__19289 = count__18826_19277;
var G__19290 = (i__18827_19278 + (1));
seq__18823_19275 = G__19287;
chunk__18825_19276 = G__19288;
count__18826_19277 = G__19289;
i__18827_19278 = G__19290;
continue;
}
} else {
var temp__5804__auto___19292 = cljs.core.seq(seq__18823_19275);
if(temp__5804__auto___19292){
var seq__18823_19293__$1 = temp__5804__auto___19292;
if(cljs.core.chunked_seq_QMARK_(seq__18823_19293__$1)){
var c__5525__auto___19294 = cljs.core.chunk_first(seq__18823_19293__$1);
var G__19295 = cljs.core.chunk_rest(seq__18823_19293__$1);
var G__19296 = c__5525__auto___19294;
var G__19297 = cljs.core.count(c__5525__auto___19294);
var G__19298 = (0);
seq__18823_19275 = G__19295;
chunk__18825_19276 = G__19296;
count__18826_19277 = G__19297;
i__18827_19278 = G__19298;
continue;
} else {
var child_19299 = cljs.core.first(seq__18823_19293__$1);
if(cljs.core.truth_(child_19299)){
node.appendChild(child_19299);


var G__19302 = cljs.core.next(seq__18823_19293__$1);
var G__19303 = null;
var G__19304 = (0);
var G__19305 = (0);
seq__18823_19275 = G__19302;
chunk__18825_19276 = G__19303;
count__18826_19277 = G__19304;
i__18827_19278 = G__19305;
continue;
} else {
var G__19307 = cljs.core.next(seq__18823_19293__$1);
var G__19308 = null;
var G__19309 = (0);
var G__19310 = (0);
seq__18823_19275 = G__19307;
chunk__18825_19276 = G__19308;
count__18826_19277 = G__19309;
i__18827_19278 = G__19310;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19274);
}
}


var G__19311 = seq__18787_19268;
var G__19312 = chunk__18789_19269;
var G__19313 = count__18790_19270;
var G__19314 = (i__18791_19271 + (1));
seq__18787_19268 = G__19311;
chunk__18789_19269 = G__19312;
count__18790_19270 = G__19313;
i__18791_19271 = G__19314;
continue;
} else {
var G__19315 = seq__18787_19268;
var G__19316 = chunk__18789_19269;
var G__19317 = count__18790_19270;
var G__19318 = (i__18791_19271 + (1));
seq__18787_19268 = G__19315;
chunk__18789_19269 = G__19316;
count__18790_19270 = G__19317;
i__18791_19271 = G__19318;
continue;
}
} else {
var temp__5804__auto___19319 = cljs.core.seq(seq__18787_19268);
if(temp__5804__auto___19319){
var seq__18787_19323__$1 = temp__5804__auto___19319;
if(cljs.core.chunked_seq_QMARK_(seq__18787_19323__$1)){
var c__5525__auto___19324 = cljs.core.chunk_first(seq__18787_19323__$1);
var G__19325 = cljs.core.chunk_rest(seq__18787_19323__$1);
var G__19326 = c__5525__auto___19324;
var G__19327 = cljs.core.count(c__5525__auto___19324);
var G__19328 = (0);
seq__18787_19268 = G__19325;
chunk__18789_19269 = G__19326;
count__18790_19270 = G__19327;
i__18791_19271 = G__19328;
continue;
} else {
var child_struct_19329 = cljs.core.first(seq__18787_19323__$1);
if((!((child_struct_19329 == null)))){
if(typeof child_struct_19329 === 'string'){
var text_19330 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19330),child_struct_19329].join(''));
} else {
var children_19331 = shadow.dom.svg_node(child_struct_19329);
if(cljs.core.seq_QMARK_(children_19331)){
var seq__18839_19332 = cljs.core.seq(children_19331);
var chunk__18841_19333 = null;
var count__18842_19334 = (0);
var i__18843_19335 = (0);
while(true){
if((i__18843_19335 < count__18842_19334)){
var child_19336 = chunk__18841_19333.cljs$core$IIndexed$_nth$arity$2(null, i__18843_19335);
if(cljs.core.truth_(child_19336)){
node.appendChild(child_19336);


var G__19340 = seq__18839_19332;
var G__19341 = chunk__18841_19333;
var G__19342 = count__18842_19334;
var G__19343 = (i__18843_19335 + (1));
seq__18839_19332 = G__19340;
chunk__18841_19333 = G__19341;
count__18842_19334 = G__19342;
i__18843_19335 = G__19343;
continue;
} else {
var G__19344 = seq__18839_19332;
var G__19345 = chunk__18841_19333;
var G__19346 = count__18842_19334;
var G__19347 = (i__18843_19335 + (1));
seq__18839_19332 = G__19344;
chunk__18841_19333 = G__19345;
count__18842_19334 = G__19346;
i__18843_19335 = G__19347;
continue;
}
} else {
var temp__5804__auto___19348__$1 = cljs.core.seq(seq__18839_19332);
if(temp__5804__auto___19348__$1){
var seq__18839_19349__$1 = temp__5804__auto___19348__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18839_19349__$1)){
var c__5525__auto___19352 = cljs.core.chunk_first(seq__18839_19349__$1);
var G__19353 = cljs.core.chunk_rest(seq__18839_19349__$1);
var G__19354 = c__5525__auto___19352;
var G__19355 = cljs.core.count(c__5525__auto___19352);
var G__19356 = (0);
seq__18839_19332 = G__19353;
chunk__18841_19333 = G__19354;
count__18842_19334 = G__19355;
i__18843_19335 = G__19356;
continue;
} else {
var child_19359 = cljs.core.first(seq__18839_19349__$1);
if(cljs.core.truth_(child_19359)){
node.appendChild(child_19359);


var G__19360 = cljs.core.next(seq__18839_19349__$1);
var G__19361 = null;
var G__19362 = (0);
var G__19363 = (0);
seq__18839_19332 = G__19360;
chunk__18841_19333 = G__19361;
count__18842_19334 = G__19362;
i__18843_19335 = G__19363;
continue;
} else {
var G__19364 = cljs.core.next(seq__18839_19349__$1);
var G__19365 = null;
var G__19366 = (0);
var G__19367 = (0);
seq__18839_19332 = G__19364;
chunk__18841_19333 = G__19365;
count__18842_19334 = G__19366;
i__18843_19335 = G__19367;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19331);
}
}


var G__19370 = cljs.core.next(seq__18787_19323__$1);
var G__19371 = null;
var G__19372 = (0);
var G__19373 = (0);
seq__18787_19268 = G__19370;
chunk__18789_19269 = G__19371;
count__18790_19270 = G__19372;
i__18791_19271 = G__19373;
continue;
} else {
var G__19374 = cljs.core.next(seq__18787_19323__$1);
var G__19375 = null;
var G__19376 = (0);
var G__19377 = (0);
seq__18787_19268 = G__19374;
chunk__18789_19269 = G__19375;
count__18790_19270 = G__19376;
i__18791_19271 = G__19377;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19381 = arguments.length;
var i__5727__auto___19382 = (0);
while(true){
if((i__5727__auto___19382 < len__5726__auto___19381)){
args__5732__auto__.push((arguments[i__5727__auto___19382]));

var G__19383 = (i__5727__auto___19382 + (1));
i__5727__auto___19382 = G__19383;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq18871){
var G__18872 = cljs.core.first(seq18871);
var seq18871__$1 = cljs.core.next(seq18871);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18872,seq18871__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__18882 = arguments.length;
switch (G__18882) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5000__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5000__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5000__auto__;
}
})())){
var c__13704__auto___19392 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13705__auto__ = (function (){var switch__12992__auto__ = (function (state_18888){
var state_val_18889 = (state_18888[(1)]);
if((state_val_18889 === (1))){
var state_18888__$1 = state_18888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18888__$1,(2),once_or_cleanup);
} else {
if((state_val_18889 === (2))){
var inst_18885 = (state_18888[(2)]);
var inst_18886 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18888__$1 = (function (){var statearr_18895 = state_18888;
(statearr_18895[(7)] = inst_18885);

return statearr_18895;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18888__$1,inst_18886);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__12993__auto__ = null;
var shadow$dom$state_machine__12993__auto____0 = (function (){
var statearr_18900 = [null,null,null,null,null,null,null,null];
(statearr_18900[(0)] = shadow$dom$state_machine__12993__auto__);

(statearr_18900[(1)] = (1));

return statearr_18900;
});
var shadow$dom$state_machine__12993__auto____1 = (function (state_18888){
while(true){
var ret_value__12994__auto__ = (function (){try{while(true){
var result__12995__auto__ = switch__12992__auto__(state_18888);
if(cljs.core.keyword_identical_QMARK_(result__12995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12995__auto__;
}
break;
}
}catch (e18901){var ex__12996__auto__ = e18901;
var statearr_18902_19400 = state_18888;
(statearr_18902_19400[(2)] = ex__12996__auto__);


if(cljs.core.seq((state_18888[(4)]))){
var statearr_18903_19401 = state_18888;
(statearr_18903_19401[(1)] = cljs.core.first((state_18888[(4)])));

} else {
throw ex__12996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19402 = state_18888;
state_18888 = G__19402;
continue;
} else {
return ret_value__12994__auto__;
}
break;
}
});
shadow$dom$state_machine__12993__auto__ = function(state_18888){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__12993__auto____0.call(this);
case 1:
return shadow$dom$state_machine__12993__auto____1.call(this,state_18888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__12993__auto____0;
shadow$dom$state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__12993__auto____1;
return shadow$dom$state_machine__12993__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_18904 = f__13705__auto__();
(statearr_18904[(6)] = c__13704__auto___19392);

return statearr_18904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13706__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
