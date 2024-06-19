goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13857 = (function (f,blockable,meta13858){
this.f = f;
this.blockable = blockable;
this.meta13858 = meta13858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13859,meta13858__$1){
var self__ = this;
var _13859__$1 = this;
return (new cljs.core.async.t_cljs$core$async13857(self__.f,self__.blockable,meta13858__$1));
}));

(cljs.core.async.t_cljs$core$async13857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13859){
var self__ = this;
var _13859__$1 = this;
return self__.meta13858;
}));

(cljs.core.async.t_cljs$core$async13857.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13857.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13857.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13857.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13857.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13858","meta13858",2101350505,null)], null);
}));

(cljs.core.async.t_cljs$core$async13857.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13857");

(cljs.core.async.t_cljs$core$async13857.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async13857");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13857.
 */
cljs.core.async.__GT_t_cljs$core$async13857 = (function cljs$core$async$__GT_t_cljs$core$async13857(f,blockable,meta13858){
return (new cljs.core.async.t_cljs$core$async13857(f,blockable,meta13858));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13839 = arguments.length;
switch (G__13839) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async13857(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13922 = arguments.length;
switch (G__13922) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13946 = arguments.length;
switch (G__13946) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13965 = arguments.length;
switch (G__13965) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17143 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17143) : fn1.call(null, val_17143));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17143) : fn1.call(null, val_17143));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13994 = arguments.length;
switch (G__13994) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___17156 = n;
var x_17157 = (0);
while(true){
if((x_17157 < n__5593__auto___17156)){
(a[x_17157] = x_17157);

var G__17158 = (x_17157 + (1));
x_17157 = G__17158;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14047 = (function (flag,meta14048){
this.flag = flag;
this.meta14048 = meta14048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14049,meta14048__$1){
var self__ = this;
var _14049__$1 = this;
return (new cljs.core.async.t_cljs$core$async14047(self__.flag,meta14048__$1));
}));

(cljs.core.async.t_cljs$core$async14047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14049){
var self__ = this;
var _14049__$1 = this;
return self__.meta14048;
}));

(cljs.core.async.t_cljs$core$async14047.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14047.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14047.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14047.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14048","meta14048",292771293,null)], null);
}));

(cljs.core.async.t_cljs$core$async14047.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14047");

(cljs.core.async.t_cljs$core$async14047.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14047");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14047.
 */
cljs.core.async.__GT_t_cljs$core$async14047 = (function cljs$core$async$__GT_t_cljs$core$async14047(flag,meta14048){
return (new cljs.core.async.t_cljs$core$async14047(flag,meta14048));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14047(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14087 = (function (flag,cb,meta14088){
this.flag = flag;
this.cb = cb;
this.meta14088 = meta14088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14089,meta14088__$1){
var self__ = this;
var _14089__$1 = this;
return (new cljs.core.async.t_cljs$core$async14087(self__.flag,self__.cb,meta14088__$1));
}));

(cljs.core.async.t_cljs$core$async14087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14089){
var self__ = this;
var _14089__$1 = this;
return self__.meta14088;
}));

(cljs.core.async.t_cljs$core$async14087.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14087.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14087.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14087.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14087.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14088","meta14088",-1067020047,null)], null);
}));

(cljs.core.async.t_cljs$core$async14087.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14087");

(cljs.core.async.t_cljs$core$async14087.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14087");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14087.
 */
cljs.core.async.__GT_t_cljs$core$async14087 = (function cljs$core$async$__GT_t_cljs$core$async14087(flag,cb,meta14088){
return (new cljs.core.async.t_cljs$core$async14087(flag,cb,meta14088));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14087(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14104_SHARP_){
var G__14111 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14104_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14111) : fret.call(null, G__14111));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14105_SHARP_){
var G__14118 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14105_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14118) : fret.call(null, G__14118));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17186 = (i + (1));
i = G__17186;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17188 = arguments.length;
var i__5727__auto___17190 = (0);
while(true){
if((i__5727__auto___17190 < len__5726__auto___17188)){
args__5732__auto__.push((arguments[i__5727__auto___17190]));

var G__17192 = (i__5727__auto___17190 + (1));
i__5727__auto___17190 = G__17192;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14146){
var map__14147 = p__14146;
var map__14147__$1 = cljs.core.__destructure_map(map__14147);
var opts = map__14147__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14136){
var G__14138 = cljs.core.first(seq14136);
var seq14136__$1 = cljs.core.next(seq14136);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14138,seq14136__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14179 = arguments.length;
switch (G__14179) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13704__auto___17202 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13705__auto__ = (function (){var switch__12992__auto__ = (function (state_14231){
var state_val_14232 = (state_14231[(1)]);
if((state_val_14232 === (7))){
var inst_14227 = (state_14231[(2)]);
var state_14231__$1 = state_14231;
var statearr_14235_17203 = state_14231__$1;
(statearr_14235_17203[(2)] = inst_14227);

(statearr_14235_17203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14232 === (1))){
var state_14231__$1 = state_14231;
var statearr_14236_17204 = state_14231__$1;
(statearr_14236_17204[(2)] = null);

(statearr_14236_17204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14232 === (4))){
var inst_14207 = (state_14231[(7)]);
var inst_14207__$1 = (state_14231[(2)]);
var inst_14211 = (inst_14207__$1 == null);
var state_14231__$1 = (function (){var statearr_14238 = state_14231;
(statearr_14238[(7)] = inst_14207__$1);

return statearr_14238;
})();
if(cljs.core.truth_(inst_14211)){
var statearr_14239_17206 = state_14231__$1;
(statearr_14239_17206[(1)] = (5));

} else {
var statearr_14240_17207 = state_14231__$1;
(statearr_14240_17207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14232 === (13))){
var state_14231__$1 = state_14231;
var statearr_14243_17208 = state_14231__$1;
(statearr_14243_17208[(2)] = null);

(statearr_14243_17208[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14232 === (6))){
var inst_14207 = (state_14231[(7)]);
var state_14231__$1 = state_14231;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14231__$1,(11),to,inst_14207);
} else {
if((state_val_14232 === (3))){
var inst_14229 = (state_14231[(2)]);
var state_14231__$1 = state_14231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14231__$1,inst_14229);
} else {
if((state_val_14232 === (12))){
var state_14231__$1 = state_14231;
var statearr_14245_17211 = state_14231__$1;
(statearr_14245_17211[(2)] = null);

(statearr_14245_17211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14232 === (2))){
var state_14231__$1 = state_14231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14231__$1,(4),from);
} else {
if((state_val_14232 === (11))){
var inst_14220 = (state_14231[(2)]);
var state_14231__$1 = state_14231;
if(cljs.core.truth_(inst_14220)){
var statearr_14246_17212 = state_14231__$1;
(statearr_14246_17212[(1)] = (12));

} else {
var statearr_14247_17213 = state_14231__$1;
(statearr_14247_17213[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14232 === (9))){
var state_14231__$1 = state_14231;
var statearr_14248_17214 = state_14231__$1;
(statearr_14248_17214[(2)] = null);

(statearr_14248_17214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14232 === (5))){
var state_14231__$1 = state_14231;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14249_17215 = state_14231__$1;
(statearr_14249_17215[(1)] = (8));

} else {
var statearr_14250_17216 = state_14231__$1;
(statearr_14250_17216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14232 === (14))){
var inst_14225 = (state_14231[(2)]);
var state_14231__$1 = state_14231;
var statearr_14251_17217 = state_14231__$1;
(statearr_14251_17217[(2)] = inst_14225);

(statearr_14251_17217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14232 === (10))){
var inst_14217 = (state_14231[(2)]);
var state_14231__$1 = state_14231;
var statearr_14254_17224 = state_14231__$1;
(statearr_14254_17224[(2)] = inst_14217);

(statearr_14254_17224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14232 === (8))){
var inst_14214 = cljs.core.async.close_BANG_(to);
var state_14231__$1 = state_14231;
var statearr_14257_17226 = state_14231__$1;
(statearr_14257_17226[(2)] = inst_14214);

(statearr_14257_17226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12993__auto__ = null;
var cljs$core$async$state_machine__12993__auto____0 = (function (){
var statearr_14258 = [null,null,null,null,null,null,null,null];
(statearr_14258[(0)] = cljs$core$async$state_machine__12993__auto__);

(statearr_14258[(1)] = (1));

return statearr_14258;
});
var cljs$core$async$state_machine__12993__auto____1 = (function (state_14231){
while(true){
var ret_value__12994__auto__ = (function (){try{while(true){
var result__12995__auto__ = switch__12992__auto__(state_14231);
if(cljs.core.keyword_identical_QMARK_(result__12995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12995__auto__;
}
break;
}
}catch (e14262){var ex__12996__auto__ = e14262;
var statearr_14263_17232 = state_14231;
(statearr_14263_17232[(2)] = ex__12996__auto__);


if(cljs.core.seq((state_14231[(4)]))){
var statearr_14264_17233 = state_14231;
(statearr_14264_17233[(1)] = cljs.core.first((state_14231[(4)])));

} else {
throw ex__12996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17234 = state_14231;
state_14231 = G__17234;
continue;
} else {
return ret_value__12994__auto__;
}
break;
}
});
cljs$core$async$state_machine__12993__auto__ = function(state_14231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12993__auto____1.call(this,state_14231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12993__auto____0;
cljs$core$async$state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12993__auto____1;
return cljs$core$async$state_machine__12993__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_14265 = f__13705__auto__();
(statearr_14265[(6)] = c__13704__auto___17202);

return statearr_14265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13706__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14276){
var vec__14279 = p__14276;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14279,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14279,(1),null);
var job = vec__14279;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13704__auto___17238 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13705__auto__ = (function (){var switch__12992__auto__ = (function (state_14289){
var state_val_14290 = (state_14289[(1)]);
if((state_val_14290 === (1))){
var state_14289__$1 = state_14289;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14289__$1,(2),res,v);
} else {
if((state_val_14290 === (2))){
var inst_14286 = (state_14289[(2)]);
var inst_14287 = cljs.core.async.close_BANG_(res);
var state_14289__$1 = (function (){var statearr_14292 = state_14289;
(statearr_14292[(7)] = inst_14286);

return statearr_14292;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14289__$1,inst_14287);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____0 = (function (){
var statearr_14295 = [null,null,null,null,null,null,null,null];
(statearr_14295[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__);

(statearr_14295[(1)] = (1));

return statearr_14295;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____1 = (function (state_14289){
while(true){
var ret_value__12994__auto__ = (function (){try{while(true){
var result__12995__auto__ = switch__12992__auto__(state_14289);
if(cljs.core.keyword_identical_QMARK_(result__12995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12995__auto__;
}
break;
}
}catch (e14299){var ex__12996__auto__ = e14299;
var statearr_14301_17243 = state_14289;
(statearr_14301_17243[(2)] = ex__12996__auto__);


if(cljs.core.seq((state_14289[(4)]))){
var statearr_14302_17244 = state_14289;
(statearr_14302_17244[(1)] = cljs.core.first((state_14289[(4)])));

} else {
throw ex__12996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17245 = state_14289;
state_14289 = G__17245;
continue;
} else {
return ret_value__12994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__ = function(state_14289){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____1.call(this,state_14289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_14307 = f__13705__auto__();
(statearr_14307[(6)] = c__13704__auto___17238);

return statearr_14307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13706__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14308){
var vec__14309 = p__14308;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14309,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14309,(1),null);
var job = vec__14309;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___17249 = n;
var __17250 = (0);
while(true){
if((__17250 < n__5593__auto___17249)){
var G__14317_17251 = type;
var G__14317_17252__$1 = (((G__14317_17251 instanceof cljs.core.Keyword))?G__14317_17251.fqn:null);
switch (G__14317_17252__$1) {
case "compute":
var c__13704__auto___17254 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17250,c__13704__auto___17254,G__14317_17251,G__14317_17252__$1,n__5593__auto___17249,jobs,results,process__$1,async){
return (function (){
var f__13705__auto__ = (function (){var switch__12992__auto__ = ((function (__17250,c__13704__auto___17254,G__14317_17251,G__14317_17252__$1,n__5593__auto___17249,jobs,results,process__$1,async){
return (function (state_14330){
var state_val_14331 = (state_14330[(1)]);
if((state_val_14331 === (1))){
var state_14330__$1 = state_14330;
var statearr_14332_17256 = state_14330__$1;
(statearr_14332_17256[(2)] = null);

(statearr_14332_17256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14331 === (2))){
var state_14330__$1 = state_14330;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14330__$1,(4),jobs);
} else {
if((state_val_14331 === (3))){
var inst_14328 = (state_14330[(2)]);
var state_14330__$1 = state_14330;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14330__$1,inst_14328);
} else {
if((state_val_14331 === (4))){
var inst_14320 = (state_14330[(2)]);
var inst_14321 = process__$1(inst_14320);
var state_14330__$1 = state_14330;
if(cljs.core.truth_(inst_14321)){
var statearr_14334_17258 = state_14330__$1;
(statearr_14334_17258[(1)] = (5));

} else {
var statearr_14335_17259 = state_14330__$1;
(statearr_14335_17259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14331 === (5))){
var state_14330__$1 = state_14330;
var statearr_14336_17260 = state_14330__$1;
(statearr_14336_17260[(2)] = null);

(statearr_14336_17260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14331 === (6))){
var state_14330__$1 = state_14330;
var statearr_14337_17261 = state_14330__$1;
(statearr_14337_17261[(2)] = null);

(statearr_14337_17261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14331 === (7))){
var inst_14326 = (state_14330[(2)]);
var state_14330__$1 = state_14330;
var statearr_14338_17262 = state_14330__$1;
(statearr_14338_17262[(2)] = inst_14326);

(statearr_14338_17262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17250,c__13704__auto___17254,G__14317_17251,G__14317_17252__$1,n__5593__auto___17249,jobs,results,process__$1,async))
;
return ((function (__17250,switch__12992__auto__,c__13704__auto___17254,G__14317_17251,G__14317_17252__$1,n__5593__auto___17249,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____0 = (function (){
var statearr_14339 = [null,null,null,null,null,null,null];
(statearr_14339[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__);

(statearr_14339[(1)] = (1));

return statearr_14339;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____1 = (function (state_14330){
while(true){
var ret_value__12994__auto__ = (function (){try{while(true){
var result__12995__auto__ = switch__12992__auto__(state_14330);
if(cljs.core.keyword_identical_QMARK_(result__12995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12995__auto__;
}
break;
}
}catch (e14341){var ex__12996__auto__ = e14341;
var statearr_14342_17263 = state_14330;
(statearr_14342_17263[(2)] = ex__12996__auto__);


if(cljs.core.seq((state_14330[(4)]))){
var statearr_14343_17265 = state_14330;
(statearr_14343_17265[(1)] = cljs.core.first((state_14330[(4)])));

} else {
throw ex__12996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17269 = state_14330;
state_14330 = G__17269;
continue;
} else {
return ret_value__12994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__ = function(state_14330){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____1.call(this,state_14330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__;
})()
;})(__17250,switch__12992__auto__,c__13704__auto___17254,G__14317_17251,G__14317_17252__$1,n__5593__auto___17249,jobs,results,process__$1,async))
})();
var state__13706__auto__ = (function (){var statearr_14348 = f__13705__auto__();
(statearr_14348[(6)] = c__13704__auto___17254);

return statearr_14348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13706__auto__);
});})(__17250,c__13704__auto___17254,G__14317_17251,G__14317_17252__$1,n__5593__auto___17249,jobs,results,process__$1,async))
);


break;
case "async":
var c__13704__auto___17270 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17250,c__13704__auto___17270,G__14317_17251,G__14317_17252__$1,n__5593__auto___17249,jobs,results,process__$1,async){
return (function (){
var f__13705__auto__ = (function (){var switch__12992__auto__ = ((function (__17250,c__13704__auto___17270,G__14317_17251,G__14317_17252__$1,n__5593__auto___17249,jobs,results,process__$1,async){
return (function (state_14362){
var state_val_14363 = (state_14362[(1)]);
if((state_val_14363 === (1))){
var state_14362__$1 = state_14362;
var statearr_14367_17276 = state_14362__$1;
(statearr_14367_17276[(2)] = null);

(statearr_14367_17276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14363 === (2))){
var state_14362__$1 = state_14362;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14362__$1,(4),jobs);
} else {
if((state_val_14363 === (3))){
var inst_14359 = (state_14362[(2)]);
var state_14362__$1 = state_14362;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14362__$1,inst_14359);
} else {
if((state_val_14363 === (4))){
var inst_14351 = (state_14362[(2)]);
var inst_14352 = async(inst_14351);
var state_14362__$1 = state_14362;
if(cljs.core.truth_(inst_14352)){
var statearr_14370_17280 = state_14362__$1;
(statearr_14370_17280[(1)] = (5));

} else {
var statearr_14371_17281 = state_14362__$1;
(statearr_14371_17281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14363 === (5))){
var state_14362__$1 = state_14362;
var statearr_14372_17282 = state_14362__$1;
(statearr_14372_17282[(2)] = null);

(statearr_14372_17282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14363 === (6))){
var state_14362__$1 = state_14362;
var statearr_14374_17286 = state_14362__$1;
(statearr_14374_17286[(2)] = null);

(statearr_14374_17286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14363 === (7))){
var inst_14357 = (state_14362[(2)]);
var state_14362__$1 = state_14362;
var statearr_14375_17287 = state_14362__$1;
(statearr_14375_17287[(2)] = inst_14357);

(statearr_14375_17287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17250,c__13704__auto___17270,G__14317_17251,G__14317_17252__$1,n__5593__auto___17249,jobs,results,process__$1,async))
;
return ((function (__17250,switch__12992__auto__,c__13704__auto___17270,G__14317_17251,G__14317_17252__$1,n__5593__auto___17249,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____0 = (function (){
var statearr_14377 = [null,null,null,null,null,null,null];
(statearr_14377[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__);

(statearr_14377[(1)] = (1));

return statearr_14377;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____1 = (function (state_14362){
while(true){
var ret_value__12994__auto__ = (function (){try{while(true){
var result__12995__auto__ = switch__12992__auto__(state_14362);
if(cljs.core.keyword_identical_QMARK_(result__12995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12995__auto__;
}
break;
}
}catch (e14381){var ex__12996__auto__ = e14381;
var statearr_14383_17288 = state_14362;
(statearr_14383_17288[(2)] = ex__12996__auto__);


if(cljs.core.seq((state_14362[(4)]))){
var statearr_14385_17289 = state_14362;
(statearr_14385_17289[(1)] = cljs.core.first((state_14362[(4)])));

} else {
throw ex__12996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17295 = state_14362;
state_14362 = G__17295;
continue;
} else {
return ret_value__12994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__ = function(state_14362){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____1.call(this,state_14362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__;
})()
;})(__17250,switch__12992__auto__,c__13704__auto___17270,G__14317_17251,G__14317_17252__$1,n__5593__auto___17249,jobs,results,process__$1,async))
})();
var state__13706__auto__ = (function (){var statearr_14386 = f__13705__auto__();
(statearr_14386[(6)] = c__13704__auto___17270);

return statearr_14386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13706__auto__);
});})(__17250,c__13704__auto___17270,G__14317_17251,G__14317_17252__$1,n__5593__auto___17249,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14317_17252__$1)].join('')));

}

var G__17296 = (__17250 + (1));
__17250 = G__17296;
continue;
} else {
}
break;
}

var c__13704__auto___17297 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13705__auto__ = (function (){var switch__12992__auto__ = (function (state_14420){
var state_val_14421 = (state_14420[(1)]);
if((state_val_14421 === (7))){
var inst_14414 = (state_14420[(2)]);
var state_14420__$1 = state_14420;
var statearr_14437_17298 = state_14420__$1;
(statearr_14437_17298[(2)] = inst_14414);

(statearr_14437_17298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14421 === (1))){
var state_14420__$1 = state_14420;
var statearr_14439_17300 = state_14420__$1;
(statearr_14439_17300[(2)] = null);

(statearr_14439_17300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14421 === (4))){
var inst_14396 = (state_14420[(7)]);
var inst_14396__$1 = (state_14420[(2)]);
var inst_14397 = (inst_14396__$1 == null);
var state_14420__$1 = (function (){var statearr_14442 = state_14420;
(statearr_14442[(7)] = inst_14396__$1);

return statearr_14442;
})();
if(cljs.core.truth_(inst_14397)){
var statearr_14443_17305 = state_14420__$1;
(statearr_14443_17305[(1)] = (5));

} else {
var statearr_14445_17306 = state_14420__$1;
(statearr_14445_17306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14421 === (6))){
var inst_14401 = (state_14420[(8)]);
var inst_14396 = (state_14420[(7)]);
var inst_14401__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14404 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14405 = [inst_14396,inst_14401__$1];
var inst_14406 = (new cljs.core.PersistentVector(null,2,(5),inst_14404,inst_14405,null));
var state_14420__$1 = (function (){var statearr_14451 = state_14420;
(statearr_14451[(8)] = inst_14401__$1);

return statearr_14451;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14420__$1,(8),jobs,inst_14406);
} else {
if((state_val_14421 === (3))){
var inst_14417 = (state_14420[(2)]);
var state_14420__$1 = state_14420;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14420__$1,inst_14417);
} else {
if((state_val_14421 === (2))){
var state_14420__$1 = state_14420;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14420__$1,(4),from);
} else {
if((state_val_14421 === (9))){
var inst_14410 = (state_14420[(2)]);
var state_14420__$1 = (function (){var statearr_14454 = state_14420;
(statearr_14454[(9)] = inst_14410);

return statearr_14454;
})();
var statearr_14456_17307 = state_14420__$1;
(statearr_14456_17307[(2)] = null);

(statearr_14456_17307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14421 === (5))){
var inst_14399 = cljs.core.async.close_BANG_(jobs);
var state_14420__$1 = state_14420;
var statearr_14460_17317 = state_14420__$1;
(statearr_14460_17317[(2)] = inst_14399);

(statearr_14460_17317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14421 === (8))){
var inst_14401 = (state_14420[(8)]);
var inst_14408 = (state_14420[(2)]);
var state_14420__$1 = (function (){var statearr_14464 = state_14420;
(statearr_14464[(10)] = inst_14408);

return statearr_14464;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14420__$1,(9),results,inst_14401);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____0 = (function (){
var statearr_14467 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14467[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__);

(statearr_14467[(1)] = (1));

return statearr_14467;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____1 = (function (state_14420){
while(true){
var ret_value__12994__auto__ = (function (){try{while(true){
var result__12995__auto__ = switch__12992__auto__(state_14420);
if(cljs.core.keyword_identical_QMARK_(result__12995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12995__auto__;
}
break;
}
}catch (e14470){var ex__12996__auto__ = e14470;
var statearr_14473_17326 = state_14420;
(statearr_14473_17326[(2)] = ex__12996__auto__);


if(cljs.core.seq((state_14420[(4)]))){
var statearr_14475_17330 = state_14420;
(statearr_14475_17330[(1)] = cljs.core.first((state_14420[(4)])));

} else {
throw ex__12996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17333 = state_14420;
state_14420 = G__17333;
continue;
} else {
return ret_value__12994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__ = function(state_14420){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____1.call(this,state_14420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_14479 = f__13705__auto__();
(statearr_14479[(6)] = c__13704__auto___17297);

return statearr_14479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13706__auto__);
}));


var c__13704__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13705__auto__ = (function (){var switch__12992__auto__ = (function (state_14532){
var state_val_14533 = (state_14532[(1)]);
if((state_val_14533 === (7))){
var inst_14527 = (state_14532[(2)]);
var state_14532__$1 = state_14532;
var statearr_14540_17334 = state_14532__$1;
(statearr_14540_17334[(2)] = inst_14527);

(statearr_14540_17334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14533 === (20))){
var state_14532__$1 = state_14532;
var statearr_14544_17335 = state_14532__$1;
(statearr_14544_17335[(2)] = null);

(statearr_14544_17335[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14533 === (1))){
var state_14532__$1 = state_14532;
var statearr_14545_17337 = state_14532__$1;
(statearr_14545_17337[(2)] = null);

(statearr_14545_17337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14533 === (4))){
var inst_14489 = (state_14532[(7)]);
var inst_14489__$1 = (state_14532[(2)]);
var inst_14492 = (inst_14489__$1 == null);
var state_14532__$1 = (function (){var statearr_14547 = state_14532;
(statearr_14547[(7)] = inst_14489__$1);

return statearr_14547;
})();
if(cljs.core.truth_(inst_14492)){
var statearr_14549_17339 = state_14532__$1;
(statearr_14549_17339[(1)] = (5));

} else {
var statearr_14551_17340 = state_14532__$1;
(statearr_14551_17340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14533 === (15))){
var inst_14505 = (state_14532[(8)]);
var state_14532__$1 = state_14532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14532__$1,(18),to,inst_14505);
} else {
if((state_val_14533 === (21))){
var inst_14522 = (state_14532[(2)]);
var state_14532__$1 = state_14532;
var statearr_14556_17341 = state_14532__$1;
(statearr_14556_17341[(2)] = inst_14522);

(statearr_14556_17341[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14533 === (13))){
var inst_14524 = (state_14532[(2)]);
var state_14532__$1 = (function (){var statearr_14560 = state_14532;
(statearr_14560[(9)] = inst_14524);

return statearr_14560;
})();
var statearr_14561_17354 = state_14532__$1;
(statearr_14561_17354[(2)] = null);

(statearr_14561_17354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14533 === (6))){
var inst_14489 = (state_14532[(7)]);
var state_14532__$1 = state_14532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14532__$1,(11),inst_14489);
} else {
if((state_val_14533 === (17))){
var inst_14515 = (state_14532[(2)]);
var state_14532__$1 = state_14532;
if(cljs.core.truth_(inst_14515)){
var statearr_14571_17355 = state_14532__$1;
(statearr_14571_17355[(1)] = (19));

} else {
var statearr_14575_17356 = state_14532__$1;
(statearr_14575_17356[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14533 === (3))){
var inst_14529 = (state_14532[(2)]);
var state_14532__$1 = state_14532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14532__$1,inst_14529);
} else {
if((state_val_14533 === (12))){
var inst_14501 = (state_14532[(10)]);
var state_14532__$1 = state_14532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14532__$1,(14),inst_14501);
} else {
if((state_val_14533 === (2))){
var state_14532__$1 = state_14532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14532__$1,(4),results);
} else {
if((state_val_14533 === (19))){
var state_14532__$1 = state_14532;
var statearr_14581_17358 = state_14532__$1;
(statearr_14581_17358[(2)] = null);

(statearr_14581_17358[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14533 === (11))){
var inst_14501 = (state_14532[(2)]);
var state_14532__$1 = (function (){var statearr_14584 = state_14532;
(statearr_14584[(10)] = inst_14501);

return statearr_14584;
})();
var statearr_14585_17359 = state_14532__$1;
(statearr_14585_17359[(2)] = null);

(statearr_14585_17359[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14533 === (9))){
var state_14532__$1 = state_14532;
var statearr_14587_17360 = state_14532__$1;
(statearr_14587_17360[(2)] = null);

(statearr_14587_17360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14533 === (5))){
var state_14532__$1 = state_14532;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14590_17361 = state_14532__$1;
(statearr_14590_17361[(1)] = (8));

} else {
var statearr_14594_17362 = state_14532__$1;
(statearr_14594_17362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14533 === (14))){
var inst_14508 = (state_14532[(11)]);
var inst_14505 = (state_14532[(8)]);
var inst_14505__$1 = (state_14532[(2)]);
var inst_14507 = (inst_14505__$1 == null);
var inst_14508__$1 = cljs.core.not(inst_14507);
var state_14532__$1 = (function (){var statearr_14597 = state_14532;
(statearr_14597[(11)] = inst_14508__$1);

(statearr_14597[(8)] = inst_14505__$1);

return statearr_14597;
})();
if(inst_14508__$1){
var statearr_14598_17363 = state_14532__$1;
(statearr_14598_17363[(1)] = (15));

} else {
var statearr_14600_17365 = state_14532__$1;
(statearr_14600_17365[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14533 === (16))){
var inst_14508 = (state_14532[(11)]);
var state_14532__$1 = state_14532;
var statearr_14601_17368 = state_14532__$1;
(statearr_14601_17368[(2)] = inst_14508);

(statearr_14601_17368[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14533 === (10))){
var inst_14498 = (state_14532[(2)]);
var state_14532__$1 = state_14532;
var statearr_14603_17371 = state_14532__$1;
(statearr_14603_17371[(2)] = inst_14498);

(statearr_14603_17371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14533 === (18))){
var inst_14512 = (state_14532[(2)]);
var state_14532__$1 = state_14532;
var statearr_14606_17372 = state_14532__$1;
(statearr_14606_17372[(2)] = inst_14512);

(statearr_14606_17372[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14533 === (8))){
var inst_14495 = cljs.core.async.close_BANG_(to);
var state_14532__$1 = state_14532;
var statearr_14607_17375 = state_14532__$1;
(statearr_14607_17375[(2)] = inst_14495);

(statearr_14607_17375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____0 = (function (){
var statearr_14609 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14609[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__);

(statearr_14609[(1)] = (1));

return statearr_14609;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____1 = (function (state_14532){
while(true){
var ret_value__12994__auto__ = (function (){try{while(true){
var result__12995__auto__ = switch__12992__auto__(state_14532);
if(cljs.core.keyword_identical_QMARK_(result__12995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12995__auto__;
}
break;
}
}catch (e14612){var ex__12996__auto__ = e14612;
var statearr_14614_17380 = state_14532;
(statearr_14614_17380[(2)] = ex__12996__auto__);


if(cljs.core.seq((state_14532[(4)]))){
var statearr_14615_17381 = state_14532;
(statearr_14615_17381[(1)] = cljs.core.first((state_14532[(4)])));

} else {
throw ex__12996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17382 = state_14532;
state_14532 = G__17382;
continue;
} else {
return ret_value__12994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__ = function(state_14532){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____1.call(this,state_14532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12993__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_14616 = f__13705__auto__();
(statearr_14616[(6)] = c__13704__auto__);

return statearr_14616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13706__auto__);
}));

return c__13704__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14623 = arguments.length;
switch (G__14623) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14638 = arguments.length;
switch (G__14638) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14646 = arguments.length;
switch (G__14646) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13704__auto___17394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13705__auto__ = (function (){var switch__12992__auto__ = (function (state_14676){
var state_val_14677 = (state_14676[(1)]);
if((state_val_14677 === (7))){
var inst_14672 = (state_14676[(2)]);
var state_14676__$1 = state_14676;
var statearr_14680_17395 = state_14676__$1;
(statearr_14680_17395[(2)] = inst_14672);

(statearr_14680_17395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (1))){
var state_14676__$1 = state_14676;
var statearr_14681_17396 = state_14676__$1;
(statearr_14681_17396[(2)] = null);

(statearr_14681_17396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (4))){
var inst_14653 = (state_14676[(7)]);
var inst_14653__$1 = (state_14676[(2)]);
var inst_14654 = (inst_14653__$1 == null);
var state_14676__$1 = (function (){var statearr_14686 = state_14676;
(statearr_14686[(7)] = inst_14653__$1);

return statearr_14686;
})();
if(cljs.core.truth_(inst_14654)){
var statearr_14687_17404 = state_14676__$1;
(statearr_14687_17404[(1)] = (5));

} else {
var statearr_14688_17405 = state_14676__$1;
(statearr_14688_17405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (13))){
var state_14676__$1 = state_14676;
var statearr_14693_17410 = state_14676__$1;
(statearr_14693_17410[(2)] = null);

(statearr_14693_17410[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (6))){
var inst_14653 = (state_14676[(7)]);
var inst_14659 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14653) : p.call(null, inst_14653));
var state_14676__$1 = state_14676;
if(cljs.core.truth_(inst_14659)){
var statearr_14694_17411 = state_14676__$1;
(statearr_14694_17411[(1)] = (9));

} else {
var statearr_14696_17416 = state_14676__$1;
(statearr_14696_17416[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (3))){
var inst_14674 = (state_14676[(2)]);
var state_14676__$1 = state_14676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14676__$1,inst_14674);
} else {
if((state_val_14677 === (12))){
var state_14676__$1 = state_14676;
var statearr_14697_17417 = state_14676__$1;
(statearr_14697_17417[(2)] = null);

(statearr_14697_17417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (2))){
var state_14676__$1 = state_14676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14676__$1,(4),ch);
} else {
if((state_val_14677 === (11))){
var inst_14653 = (state_14676[(7)]);
var inst_14663 = (state_14676[(2)]);
var state_14676__$1 = state_14676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14676__$1,(8),inst_14663,inst_14653);
} else {
if((state_val_14677 === (9))){
var state_14676__$1 = state_14676;
var statearr_14700_17418 = state_14676__$1;
(statearr_14700_17418[(2)] = tc);

(statearr_14700_17418[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (5))){
var inst_14656 = cljs.core.async.close_BANG_(tc);
var inst_14657 = cljs.core.async.close_BANG_(fc);
var state_14676__$1 = (function (){var statearr_14701 = state_14676;
(statearr_14701[(8)] = inst_14656);

return statearr_14701;
})();
var statearr_14702_17422 = state_14676__$1;
(statearr_14702_17422[(2)] = inst_14657);

(statearr_14702_17422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (14))){
var inst_14670 = (state_14676[(2)]);
var state_14676__$1 = state_14676;
var statearr_14704_17424 = state_14676__$1;
(statearr_14704_17424[(2)] = inst_14670);

(statearr_14704_17424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (10))){
var state_14676__$1 = state_14676;
var statearr_14709_17425 = state_14676__$1;
(statearr_14709_17425[(2)] = fc);

(statearr_14709_17425[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (8))){
var inst_14665 = (state_14676[(2)]);
var state_14676__$1 = state_14676;
if(cljs.core.truth_(inst_14665)){
var statearr_14712_17427 = state_14676__$1;
(statearr_14712_17427[(1)] = (12));

} else {
var statearr_14713_17428 = state_14676__$1;
(statearr_14713_17428[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12993__auto__ = null;
var cljs$core$async$state_machine__12993__auto____0 = (function (){
var statearr_14715 = [null,null,null,null,null,null,null,null,null];
(statearr_14715[(0)] = cljs$core$async$state_machine__12993__auto__);

(statearr_14715[(1)] = (1));

return statearr_14715;
});
var cljs$core$async$state_machine__12993__auto____1 = (function (state_14676){
while(true){
var ret_value__12994__auto__ = (function (){try{while(true){
var result__12995__auto__ = switch__12992__auto__(state_14676);
if(cljs.core.keyword_identical_QMARK_(result__12995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12995__auto__;
}
break;
}
}catch (e14718){var ex__12996__auto__ = e14718;
var statearr_14720_17429 = state_14676;
(statearr_14720_17429[(2)] = ex__12996__auto__);


if(cljs.core.seq((state_14676[(4)]))){
var statearr_14721_17430 = state_14676;
(statearr_14721_17430[(1)] = cljs.core.first((state_14676[(4)])));

} else {
throw ex__12996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17435 = state_14676;
state_14676 = G__17435;
continue;
} else {
return ret_value__12994__auto__;
}
break;
}
});
cljs$core$async$state_machine__12993__auto__ = function(state_14676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12993__auto____1.call(this,state_14676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12993__auto____0;
cljs$core$async$state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12993__auto____1;
return cljs$core$async$state_machine__12993__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_14723 = f__13705__auto__();
(statearr_14723[(6)] = c__13704__auto___17394);

return statearr_14723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13706__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13704__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13705__auto__ = (function (){var switch__12992__auto__ = (function (state_14756){
var state_val_14757 = (state_14756[(1)]);
if((state_val_14757 === (7))){
var inst_14749 = (state_14756[(2)]);
var state_14756__$1 = state_14756;
var statearr_14758_17441 = state_14756__$1;
(statearr_14758_17441[(2)] = inst_14749);

(statearr_14758_17441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14757 === (1))){
var inst_14728 = init;
var inst_14729 = inst_14728;
var state_14756__$1 = (function (){var statearr_14759 = state_14756;
(statearr_14759[(7)] = inst_14729);

return statearr_14759;
})();
var statearr_14761_17445 = state_14756__$1;
(statearr_14761_17445[(2)] = null);

(statearr_14761_17445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14757 === (4))){
var inst_14733 = (state_14756[(8)]);
var inst_14733__$1 = (state_14756[(2)]);
var inst_14734 = (inst_14733__$1 == null);
var state_14756__$1 = (function (){var statearr_14764 = state_14756;
(statearr_14764[(8)] = inst_14733__$1);

return statearr_14764;
})();
if(cljs.core.truth_(inst_14734)){
var statearr_14767_17446 = state_14756__$1;
(statearr_14767_17446[(1)] = (5));

} else {
var statearr_14769_17447 = state_14756__$1;
(statearr_14769_17447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14757 === (6))){
var inst_14733 = (state_14756[(8)]);
var inst_14738 = (state_14756[(9)]);
var inst_14729 = (state_14756[(7)]);
var inst_14738__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14729,inst_14733) : f.call(null, inst_14729,inst_14733));
var inst_14739 = cljs.core.reduced_QMARK_(inst_14738__$1);
var state_14756__$1 = (function (){var statearr_14772 = state_14756;
(statearr_14772[(9)] = inst_14738__$1);

return statearr_14772;
})();
if(inst_14739){
var statearr_14776_17448 = state_14756__$1;
(statearr_14776_17448[(1)] = (8));

} else {
var statearr_14777_17453 = state_14756__$1;
(statearr_14777_17453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14757 === (3))){
var inst_14751 = (state_14756[(2)]);
var state_14756__$1 = state_14756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14756__$1,inst_14751);
} else {
if((state_val_14757 === (2))){
var state_14756__$1 = state_14756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14756__$1,(4),ch);
} else {
if((state_val_14757 === (9))){
var inst_14738 = (state_14756[(9)]);
var inst_14729 = inst_14738;
var state_14756__$1 = (function (){var statearr_14778 = state_14756;
(statearr_14778[(7)] = inst_14729);

return statearr_14778;
})();
var statearr_14779_17457 = state_14756__$1;
(statearr_14779_17457[(2)] = null);

(statearr_14779_17457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14757 === (5))){
var inst_14729 = (state_14756[(7)]);
var state_14756__$1 = state_14756;
var statearr_14781_17458 = state_14756__$1;
(statearr_14781_17458[(2)] = inst_14729);

(statearr_14781_17458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14757 === (10))){
var inst_14747 = (state_14756[(2)]);
var state_14756__$1 = state_14756;
var statearr_14784_17461 = state_14756__$1;
(statearr_14784_17461[(2)] = inst_14747);

(statearr_14784_17461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14757 === (8))){
var inst_14738 = (state_14756[(9)]);
var inst_14743 = cljs.core.deref(inst_14738);
var state_14756__$1 = state_14756;
var statearr_14787_17462 = state_14756__$1;
(statearr_14787_17462[(2)] = inst_14743);

(statearr_14787_17462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__12993__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12993__auto____0 = (function (){
var statearr_14788 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14788[(0)] = cljs$core$async$reduce_$_state_machine__12993__auto__);

(statearr_14788[(1)] = (1));

return statearr_14788;
});
var cljs$core$async$reduce_$_state_machine__12993__auto____1 = (function (state_14756){
while(true){
var ret_value__12994__auto__ = (function (){try{while(true){
var result__12995__auto__ = switch__12992__auto__(state_14756);
if(cljs.core.keyword_identical_QMARK_(result__12995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12995__auto__;
}
break;
}
}catch (e14790){var ex__12996__auto__ = e14790;
var statearr_14791_17468 = state_14756;
(statearr_14791_17468[(2)] = ex__12996__auto__);


if(cljs.core.seq((state_14756[(4)]))){
var statearr_14794_17470 = state_14756;
(statearr_14794_17470[(1)] = cljs.core.first((state_14756[(4)])));

} else {
throw ex__12996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17476 = state_14756;
state_14756 = G__17476;
continue;
} else {
return ret_value__12994__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12993__auto__ = function(state_14756){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12993__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12993__auto____1.call(this,state_14756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12993__auto____0;
cljs$core$async$reduce_$_state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12993__auto____1;
return cljs$core$async$reduce_$_state_machine__12993__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_14798 = f__13705__auto__();
(statearr_14798[(6)] = c__13704__auto__);

return statearr_14798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13706__auto__);
}));

return c__13704__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__13704__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13705__auto__ = (function (){var switch__12992__auto__ = (function (state_14810){
var state_val_14811 = (state_14810[(1)]);
if((state_val_14811 === (1))){
var inst_14804 = cljs.core.async.reduce(f__$1,init,ch);
var state_14810__$1 = state_14810;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14810__$1,(2),inst_14804);
} else {
if((state_val_14811 === (2))){
var inst_14806 = (state_14810[(2)]);
var inst_14808 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14806) : f__$1.call(null, inst_14806));
var state_14810__$1 = state_14810;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14810__$1,inst_14808);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__12993__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12993__auto____0 = (function (){
var statearr_14822 = [null,null,null,null,null,null,null];
(statearr_14822[(0)] = cljs$core$async$transduce_$_state_machine__12993__auto__);

(statearr_14822[(1)] = (1));

return statearr_14822;
});
var cljs$core$async$transduce_$_state_machine__12993__auto____1 = (function (state_14810){
while(true){
var ret_value__12994__auto__ = (function (){try{while(true){
var result__12995__auto__ = switch__12992__auto__(state_14810);
if(cljs.core.keyword_identical_QMARK_(result__12995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12995__auto__;
}
break;
}
}catch (e14823){var ex__12996__auto__ = e14823;
var statearr_14824_17485 = state_14810;
(statearr_14824_17485[(2)] = ex__12996__auto__);


if(cljs.core.seq((state_14810[(4)]))){
var statearr_14825_17487 = state_14810;
(statearr_14825_17487[(1)] = cljs.core.first((state_14810[(4)])));

} else {
throw ex__12996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17490 = state_14810;
state_14810 = G__17490;
continue;
} else {
return ret_value__12994__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12993__auto__ = function(state_14810){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12993__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12993__auto____1.call(this,state_14810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12993__auto____0;
cljs$core$async$transduce_$_state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12993__auto____1;
return cljs$core$async$transduce_$_state_machine__12993__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_14828 = f__13705__auto__();
(statearr_14828[(6)] = c__13704__auto__);

return statearr_14828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13706__auto__);
}));

return c__13704__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__14835 = arguments.length;
switch (G__14835) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13704__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13705__auto__ = (function (){var switch__12992__auto__ = (function (state_14870){
var state_val_14874 = (state_14870[(1)]);
if((state_val_14874 === (7))){
var inst_14851 = (state_14870[(2)]);
var state_14870__$1 = state_14870;
var statearr_14879_17506 = state_14870__$1;
(statearr_14879_17506[(2)] = inst_14851);

(statearr_14879_17506[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14874 === (1))){
var inst_14842 = cljs.core.seq(coll);
var inst_14843 = inst_14842;
var state_14870__$1 = (function (){var statearr_14880 = state_14870;
(statearr_14880[(7)] = inst_14843);

return statearr_14880;
})();
var statearr_14881_17511 = state_14870__$1;
(statearr_14881_17511[(2)] = null);

(statearr_14881_17511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14874 === (4))){
var inst_14843 = (state_14870[(7)]);
var inst_14849 = cljs.core.first(inst_14843);
var state_14870__$1 = state_14870;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14870__$1,(7),ch,inst_14849);
} else {
if((state_val_14874 === (13))){
var inst_14864 = (state_14870[(2)]);
var state_14870__$1 = state_14870;
var statearr_14887_17513 = state_14870__$1;
(statearr_14887_17513[(2)] = inst_14864);

(statearr_14887_17513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14874 === (6))){
var inst_14854 = (state_14870[(2)]);
var state_14870__$1 = state_14870;
if(cljs.core.truth_(inst_14854)){
var statearr_14892_17514 = state_14870__$1;
(statearr_14892_17514[(1)] = (8));

} else {
var statearr_14893_17518 = state_14870__$1;
(statearr_14893_17518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14874 === (3))){
var inst_14868 = (state_14870[(2)]);
var state_14870__$1 = state_14870;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14870__$1,inst_14868);
} else {
if((state_val_14874 === (12))){
var state_14870__$1 = state_14870;
var statearr_14897_17519 = state_14870__$1;
(statearr_14897_17519[(2)] = null);

(statearr_14897_17519[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14874 === (2))){
var inst_14843 = (state_14870[(7)]);
var state_14870__$1 = state_14870;
if(cljs.core.truth_(inst_14843)){
var statearr_14903_17521 = state_14870__$1;
(statearr_14903_17521[(1)] = (4));

} else {
var statearr_14904_17523 = state_14870__$1;
(statearr_14904_17523[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14874 === (11))){
var inst_14861 = cljs.core.async.close_BANG_(ch);
var state_14870__$1 = state_14870;
var statearr_14907_17525 = state_14870__$1;
(statearr_14907_17525[(2)] = inst_14861);

(statearr_14907_17525[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14874 === (9))){
var state_14870__$1 = state_14870;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14912_17529 = state_14870__$1;
(statearr_14912_17529[(1)] = (11));

} else {
var statearr_14914_17530 = state_14870__$1;
(statearr_14914_17530[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14874 === (5))){
var inst_14843 = (state_14870[(7)]);
var state_14870__$1 = state_14870;
var statearr_14919_17531 = state_14870__$1;
(statearr_14919_17531[(2)] = inst_14843);

(statearr_14919_17531[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14874 === (10))){
var inst_14866 = (state_14870[(2)]);
var state_14870__$1 = state_14870;
var statearr_14924_17533 = state_14870__$1;
(statearr_14924_17533[(2)] = inst_14866);

(statearr_14924_17533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14874 === (8))){
var inst_14843 = (state_14870[(7)]);
var inst_14857 = cljs.core.next(inst_14843);
var inst_14843__$1 = inst_14857;
var state_14870__$1 = (function (){var statearr_14928 = state_14870;
(statearr_14928[(7)] = inst_14843__$1);

return statearr_14928;
})();
var statearr_14929_17534 = state_14870__$1;
(statearr_14929_17534[(2)] = null);

(statearr_14929_17534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12993__auto__ = null;
var cljs$core$async$state_machine__12993__auto____0 = (function (){
var statearr_14936 = [null,null,null,null,null,null,null,null];
(statearr_14936[(0)] = cljs$core$async$state_machine__12993__auto__);

(statearr_14936[(1)] = (1));

return statearr_14936;
});
var cljs$core$async$state_machine__12993__auto____1 = (function (state_14870){
while(true){
var ret_value__12994__auto__ = (function (){try{while(true){
var result__12995__auto__ = switch__12992__auto__(state_14870);
if(cljs.core.keyword_identical_QMARK_(result__12995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12995__auto__;
}
break;
}
}catch (e14938){var ex__12996__auto__ = e14938;
var statearr_14939_17541 = state_14870;
(statearr_14939_17541[(2)] = ex__12996__auto__);


if(cljs.core.seq((state_14870[(4)]))){
var statearr_14941_17542 = state_14870;
(statearr_14941_17542[(1)] = cljs.core.first((state_14870[(4)])));

} else {
throw ex__12996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17543 = state_14870;
state_14870 = G__17543;
continue;
} else {
return ret_value__12994__auto__;
}
break;
}
});
cljs$core$async$state_machine__12993__auto__ = function(state_14870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12993__auto____1.call(this,state_14870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12993__auto____0;
cljs$core$async$state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12993__auto____1;
return cljs$core$async$state_machine__12993__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_14945 = f__13705__auto__();
(statearr_14945[(6)] = c__13704__auto__);

return statearr_14945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13706__auto__);
}));

return c__13704__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14954 = arguments.length;
switch (G__14954) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17561 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17561(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17568 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17568(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17573 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17573(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17587 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17587(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15026 = (function (ch,cs,meta15027){
this.ch = ch;
this.cs = cs;
this.meta15027 = meta15027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15028,meta15027__$1){
var self__ = this;
var _15028__$1 = this;
return (new cljs.core.async.t_cljs$core$async15026(self__.ch,self__.cs,meta15027__$1));
}));

(cljs.core.async.t_cljs$core$async15026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15028){
var self__ = this;
var _15028__$1 = this;
return self__.meta15027;
}));

(cljs.core.async.t_cljs$core$async15026.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15026.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15026.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15026.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15026.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15026.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15026.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15027","meta15027",-57331781,null)], null);
}));

(cljs.core.async.t_cljs$core$async15026.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15026.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15026");

(cljs.core.async.t_cljs$core$async15026.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15026");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15026.
 */
cljs.core.async.__GT_t_cljs$core$async15026 = (function cljs$core$async$__GT_t_cljs$core$async15026(ch,cs,meta15027){
return (new cljs.core.async.t_cljs$core$async15026(ch,cs,meta15027));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15026(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13704__auto___17593 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13705__auto__ = (function (){var switch__12992__auto__ = (function (state_15234){
var state_val_15236 = (state_15234[(1)]);
if((state_val_15236 === (7))){
var inst_15223 = (state_15234[(2)]);
var state_15234__$1 = state_15234;
var statearr_15245_17594 = state_15234__$1;
(statearr_15245_17594[(2)] = inst_15223);

(statearr_15245_17594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (20))){
var inst_15105 = (state_15234[(7)]);
var inst_15122 = cljs.core.first(inst_15105);
var inst_15124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15122,(0),null);
var inst_15125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15122,(1),null);
var state_15234__$1 = (function (){var statearr_15251 = state_15234;
(statearr_15251[(8)] = inst_15124);

return statearr_15251;
})();
if(cljs.core.truth_(inst_15125)){
var statearr_15253_17601 = state_15234__$1;
(statearr_15253_17601[(1)] = (22));

} else {
var statearr_15255_17602 = state_15234__$1;
(statearr_15255_17602[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (27))){
var inst_15068 = (state_15234[(9)]);
var inst_15158 = (state_15234[(10)]);
var inst_15160 = (state_15234[(11)]);
var inst_15167 = (state_15234[(12)]);
var inst_15167__$1 = cljs.core._nth(inst_15158,inst_15160);
var inst_15170 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15167__$1,inst_15068,done);
var state_15234__$1 = (function (){var statearr_15259 = state_15234;
(statearr_15259[(12)] = inst_15167__$1);

return statearr_15259;
})();
if(cljs.core.truth_(inst_15170)){
var statearr_15261_17604 = state_15234__$1;
(statearr_15261_17604[(1)] = (30));

} else {
var statearr_15265_17606 = state_15234__$1;
(statearr_15265_17606[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (1))){
var state_15234__$1 = state_15234;
var statearr_15266_17610 = state_15234__$1;
(statearr_15266_17610[(2)] = null);

(statearr_15266_17610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (24))){
var inst_15105 = (state_15234[(7)]);
var inst_15134 = (state_15234[(2)]);
var inst_15135 = cljs.core.next(inst_15105);
var inst_15077 = inst_15135;
var inst_15078 = null;
var inst_15079 = (0);
var inst_15080 = (0);
var state_15234__$1 = (function (){var statearr_15271 = state_15234;
(statearr_15271[(13)] = inst_15078);

(statearr_15271[(14)] = inst_15079);

(statearr_15271[(15)] = inst_15080);

(statearr_15271[(16)] = inst_15134);

(statearr_15271[(17)] = inst_15077);

return statearr_15271;
})();
var statearr_15274_17611 = state_15234__$1;
(statearr_15274_17611[(2)] = null);

(statearr_15274_17611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (39))){
var state_15234__$1 = state_15234;
var statearr_15282_17612 = state_15234__$1;
(statearr_15282_17612[(2)] = null);

(statearr_15282_17612[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (4))){
var inst_15068 = (state_15234[(9)]);
var inst_15068__$1 = (state_15234[(2)]);
var inst_15069 = (inst_15068__$1 == null);
var state_15234__$1 = (function (){var statearr_15286 = state_15234;
(statearr_15286[(9)] = inst_15068__$1);

return statearr_15286;
})();
if(cljs.core.truth_(inst_15069)){
var statearr_15287_17614 = state_15234__$1;
(statearr_15287_17614[(1)] = (5));

} else {
var statearr_15290_17615 = state_15234__$1;
(statearr_15290_17615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (15))){
var inst_15078 = (state_15234[(13)]);
var inst_15079 = (state_15234[(14)]);
var inst_15080 = (state_15234[(15)]);
var inst_15077 = (state_15234[(17)]);
var inst_15099 = (state_15234[(2)]);
var inst_15101 = (inst_15080 + (1));
var tmp15279 = inst_15078;
var tmp15280 = inst_15079;
var tmp15281 = inst_15077;
var inst_15077__$1 = tmp15281;
var inst_15078__$1 = tmp15279;
var inst_15079__$1 = tmp15280;
var inst_15080__$1 = inst_15101;
var state_15234__$1 = (function (){var statearr_15297 = state_15234;
(statearr_15297[(13)] = inst_15078__$1);

(statearr_15297[(14)] = inst_15079__$1);

(statearr_15297[(18)] = inst_15099);

(statearr_15297[(15)] = inst_15080__$1);

(statearr_15297[(17)] = inst_15077__$1);

return statearr_15297;
})();
var statearr_15299_17621 = state_15234__$1;
(statearr_15299_17621[(2)] = null);

(statearr_15299_17621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (21))){
var inst_15138 = (state_15234[(2)]);
var state_15234__$1 = state_15234;
var statearr_15308_17625 = state_15234__$1;
(statearr_15308_17625[(2)] = inst_15138);

(statearr_15308_17625[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (31))){
var inst_15167 = (state_15234[(12)]);
var inst_15174 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15167);
var state_15234__$1 = state_15234;
var statearr_15311_17626 = state_15234__$1;
(statearr_15311_17626[(2)] = inst_15174);

(statearr_15311_17626[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (32))){
var inst_15157 = (state_15234[(19)]);
var inst_15158 = (state_15234[(10)]);
var inst_15160 = (state_15234[(11)]);
var inst_15159 = (state_15234[(20)]);
var inst_15176 = (state_15234[(2)]);
var inst_15177 = (inst_15160 + (1));
var tmp15301 = inst_15157;
var tmp15302 = inst_15158;
var tmp15303 = inst_15159;
var inst_15157__$1 = tmp15301;
var inst_15158__$1 = tmp15302;
var inst_15159__$1 = tmp15303;
var inst_15160__$1 = inst_15177;
var state_15234__$1 = (function (){var statearr_15320 = state_15234;
(statearr_15320[(19)] = inst_15157__$1);

(statearr_15320[(10)] = inst_15158__$1);

(statearr_15320[(11)] = inst_15160__$1);

(statearr_15320[(21)] = inst_15176);

(statearr_15320[(20)] = inst_15159__$1);

return statearr_15320;
})();
var statearr_15322_17629 = state_15234__$1;
(statearr_15322_17629[(2)] = null);

(statearr_15322_17629[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (40))){
var inst_15192 = (state_15234[(22)]);
var inst_15198 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15192);
var state_15234__$1 = state_15234;
var statearr_15326_17631 = state_15234__$1;
(statearr_15326_17631[(2)] = inst_15198);

(statearr_15326_17631[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (33))){
var inst_15180 = (state_15234[(23)]);
var inst_15184 = cljs.core.chunked_seq_QMARK_(inst_15180);
var state_15234__$1 = state_15234;
if(inst_15184){
var statearr_15334_17637 = state_15234__$1;
(statearr_15334_17637[(1)] = (36));

} else {
var statearr_15337_17638 = state_15234__$1;
(statearr_15337_17638[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (13))){
var inst_15090 = (state_15234[(24)]);
var inst_15096 = cljs.core.async.close_BANG_(inst_15090);
var state_15234__$1 = state_15234;
var statearr_15341_17653 = state_15234__$1;
(statearr_15341_17653[(2)] = inst_15096);

(statearr_15341_17653[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (22))){
var inst_15124 = (state_15234[(8)]);
var inst_15131 = cljs.core.async.close_BANG_(inst_15124);
var state_15234__$1 = state_15234;
var statearr_15343_17655 = state_15234__$1;
(statearr_15343_17655[(2)] = inst_15131);

(statearr_15343_17655[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (36))){
var inst_15180 = (state_15234[(23)]);
var inst_15186 = cljs.core.chunk_first(inst_15180);
var inst_15187 = cljs.core.chunk_rest(inst_15180);
var inst_15188 = cljs.core.count(inst_15186);
var inst_15157 = inst_15187;
var inst_15158 = inst_15186;
var inst_15159 = inst_15188;
var inst_15160 = (0);
var state_15234__$1 = (function (){var statearr_15347 = state_15234;
(statearr_15347[(19)] = inst_15157);

(statearr_15347[(10)] = inst_15158);

(statearr_15347[(11)] = inst_15160);

(statearr_15347[(20)] = inst_15159);

return statearr_15347;
})();
var statearr_15348_17656 = state_15234__$1;
(statearr_15348_17656[(2)] = null);

(statearr_15348_17656[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (41))){
var inst_15180 = (state_15234[(23)]);
var inst_15200 = (state_15234[(2)]);
var inst_15201 = cljs.core.next(inst_15180);
var inst_15157 = inst_15201;
var inst_15158 = null;
var inst_15159 = (0);
var inst_15160 = (0);
var state_15234__$1 = (function (){var statearr_15351 = state_15234;
(statearr_15351[(19)] = inst_15157);

(statearr_15351[(10)] = inst_15158);

(statearr_15351[(11)] = inst_15160);

(statearr_15351[(25)] = inst_15200);

(statearr_15351[(20)] = inst_15159);

return statearr_15351;
})();
var statearr_15354_17666 = state_15234__$1;
(statearr_15354_17666[(2)] = null);

(statearr_15354_17666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (43))){
var state_15234__$1 = state_15234;
var statearr_15356_17667 = state_15234__$1;
(statearr_15356_17667[(2)] = null);

(statearr_15356_17667[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (29))){
var inst_15209 = (state_15234[(2)]);
var state_15234__$1 = state_15234;
var statearr_15359_17671 = state_15234__$1;
(statearr_15359_17671[(2)] = inst_15209);

(statearr_15359_17671[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (44))){
var inst_15218 = (state_15234[(2)]);
var state_15234__$1 = (function (){var statearr_15362 = state_15234;
(statearr_15362[(26)] = inst_15218);

return statearr_15362;
})();
var statearr_15363_17677 = state_15234__$1;
(statearr_15363_17677[(2)] = null);

(statearr_15363_17677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (6))){
var inst_15148 = (state_15234[(27)]);
var inst_15147 = cljs.core.deref(cs);
var inst_15148__$1 = cljs.core.keys(inst_15147);
var inst_15150 = cljs.core.count(inst_15148__$1);
var inst_15151 = cljs.core.reset_BANG_(dctr,inst_15150);
var inst_15156 = cljs.core.seq(inst_15148__$1);
var inst_15157 = inst_15156;
var inst_15158 = null;
var inst_15159 = (0);
var inst_15160 = (0);
var state_15234__$1 = (function (){var statearr_15371 = state_15234;
(statearr_15371[(19)] = inst_15157);

(statearr_15371[(28)] = inst_15151);

(statearr_15371[(10)] = inst_15158);

(statearr_15371[(11)] = inst_15160);

(statearr_15371[(27)] = inst_15148__$1);

(statearr_15371[(20)] = inst_15159);

return statearr_15371;
})();
var statearr_15372_17695 = state_15234__$1;
(statearr_15372_17695[(2)] = null);

(statearr_15372_17695[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (28))){
var inst_15157 = (state_15234[(19)]);
var inst_15180 = (state_15234[(23)]);
var inst_15180__$1 = cljs.core.seq(inst_15157);
var state_15234__$1 = (function (){var statearr_15376 = state_15234;
(statearr_15376[(23)] = inst_15180__$1);

return statearr_15376;
})();
if(inst_15180__$1){
var statearr_15377_17706 = state_15234__$1;
(statearr_15377_17706[(1)] = (33));

} else {
var statearr_15378_17708 = state_15234__$1;
(statearr_15378_17708[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (25))){
var inst_15160 = (state_15234[(11)]);
var inst_15159 = (state_15234[(20)]);
var inst_15163 = (inst_15160 < inst_15159);
var inst_15164 = inst_15163;
var state_15234__$1 = state_15234;
if(cljs.core.truth_(inst_15164)){
var statearr_15379_17726 = state_15234__$1;
(statearr_15379_17726[(1)] = (27));

} else {
var statearr_15380_17727 = state_15234__$1;
(statearr_15380_17727[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (34))){
var state_15234__$1 = state_15234;
var statearr_15381_17730 = state_15234__$1;
(statearr_15381_17730[(2)] = null);

(statearr_15381_17730[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (17))){
var state_15234__$1 = state_15234;
var statearr_15384_17731 = state_15234__$1;
(statearr_15384_17731[(2)] = null);

(statearr_15384_17731[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (3))){
var inst_15225 = (state_15234[(2)]);
var state_15234__$1 = state_15234;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15234__$1,inst_15225);
} else {
if((state_val_15236 === (12))){
var inst_15143 = (state_15234[(2)]);
var state_15234__$1 = state_15234;
var statearr_15385_17737 = state_15234__$1;
(statearr_15385_17737[(2)] = inst_15143);

(statearr_15385_17737[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (2))){
var state_15234__$1 = state_15234;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15234__$1,(4),ch);
} else {
if((state_val_15236 === (23))){
var state_15234__$1 = state_15234;
var statearr_15386_17746 = state_15234__$1;
(statearr_15386_17746[(2)] = null);

(statearr_15386_17746[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (35))){
var inst_15207 = (state_15234[(2)]);
var state_15234__$1 = state_15234;
var statearr_15393_17751 = state_15234__$1;
(statearr_15393_17751[(2)] = inst_15207);

(statearr_15393_17751[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (19))){
var inst_15105 = (state_15234[(7)]);
var inst_15113 = cljs.core.chunk_first(inst_15105);
var inst_15114 = cljs.core.chunk_rest(inst_15105);
var inst_15115 = cljs.core.count(inst_15113);
var inst_15077 = inst_15114;
var inst_15078 = inst_15113;
var inst_15079 = inst_15115;
var inst_15080 = (0);
var state_15234__$1 = (function (){var statearr_15399 = state_15234;
(statearr_15399[(13)] = inst_15078);

(statearr_15399[(14)] = inst_15079);

(statearr_15399[(15)] = inst_15080);

(statearr_15399[(17)] = inst_15077);

return statearr_15399;
})();
var statearr_15400_17767 = state_15234__$1;
(statearr_15400_17767[(2)] = null);

(statearr_15400_17767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (11))){
var inst_15105 = (state_15234[(7)]);
var inst_15077 = (state_15234[(17)]);
var inst_15105__$1 = cljs.core.seq(inst_15077);
var state_15234__$1 = (function (){var statearr_15405 = state_15234;
(statearr_15405[(7)] = inst_15105__$1);

return statearr_15405;
})();
if(inst_15105__$1){
var statearr_15406_17776 = state_15234__$1;
(statearr_15406_17776[(1)] = (16));

} else {
var statearr_15407_17777 = state_15234__$1;
(statearr_15407_17777[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (9))){
var inst_15145 = (state_15234[(2)]);
var state_15234__$1 = state_15234;
var statearr_15408_17782 = state_15234__$1;
(statearr_15408_17782[(2)] = inst_15145);

(statearr_15408_17782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (5))){
var inst_15075 = cljs.core.deref(cs);
var inst_15076 = cljs.core.seq(inst_15075);
var inst_15077 = inst_15076;
var inst_15078 = null;
var inst_15079 = (0);
var inst_15080 = (0);
var state_15234__$1 = (function (){var statearr_15413 = state_15234;
(statearr_15413[(13)] = inst_15078);

(statearr_15413[(14)] = inst_15079);

(statearr_15413[(15)] = inst_15080);

(statearr_15413[(17)] = inst_15077);

return statearr_15413;
})();
var statearr_15417_17790 = state_15234__$1;
(statearr_15417_17790[(2)] = null);

(statearr_15417_17790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (14))){
var state_15234__$1 = state_15234;
var statearr_15419_17796 = state_15234__$1;
(statearr_15419_17796[(2)] = null);

(statearr_15419_17796[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (45))){
var inst_15215 = (state_15234[(2)]);
var state_15234__$1 = state_15234;
var statearr_15420_17797 = state_15234__$1;
(statearr_15420_17797[(2)] = inst_15215);

(statearr_15420_17797[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (26))){
var inst_15148 = (state_15234[(27)]);
var inst_15211 = (state_15234[(2)]);
var inst_15212 = cljs.core.seq(inst_15148);
var state_15234__$1 = (function (){var statearr_15421 = state_15234;
(statearr_15421[(29)] = inst_15211);

return statearr_15421;
})();
if(inst_15212){
var statearr_15425_17799 = state_15234__$1;
(statearr_15425_17799[(1)] = (42));

} else {
var statearr_15426_17801 = state_15234__$1;
(statearr_15426_17801[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (16))){
var inst_15105 = (state_15234[(7)]);
var inst_15109 = cljs.core.chunked_seq_QMARK_(inst_15105);
var state_15234__$1 = state_15234;
if(inst_15109){
var statearr_15430_17802 = state_15234__$1;
(statearr_15430_17802[(1)] = (19));

} else {
var statearr_15431_17803 = state_15234__$1;
(statearr_15431_17803[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (38))){
var inst_15204 = (state_15234[(2)]);
var state_15234__$1 = state_15234;
var statearr_15432_17808 = state_15234__$1;
(statearr_15432_17808[(2)] = inst_15204);

(statearr_15432_17808[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (30))){
var state_15234__$1 = state_15234;
var statearr_15439_17809 = state_15234__$1;
(statearr_15439_17809[(2)] = null);

(statearr_15439_17809[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (10))){
var inst_15078 = (state_15234[(13)]);
var inst_15080 = (state_15234[(15)]);
var inst_15089 = cljs.core._nth(inst_15078,inst_15080);
var inst_15090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15089,(0),null);
var inst_15091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15089,(1),null);
var state_15234__$1 = (function (){var statearr_15443 = state_15234;
(statearr_15443[(24)] = inst_15090);

return statearr_15443;
})();
if(cljs.core.truth_(inst_15091)){
var statearr_15444_17814 = state_15234__$1;
(statearr_15444_17814[(1)] = (13));

} else {
var statearr_15445_17815 = state_15234__$1;
(statearr_15445_17815[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (18))){
var inst_15141 = (state_15234[(2)]);
var state_15234__$1 = state_15234;
var statearr_15446_17818 = state_15234__$1;
(statearr_15446_17818[(2)] = inst_15141);

(statearr_15446_17818[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (42))){
var state_15234__$1 = state_15234;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15234__$1,(45),dchan);
} else {
if((state_val_15236 === (37))){
var inst_15068 = (state_15234[(9)]);
var inst_15192 = (state_15234[(22)]);
var inst_15180 = (state_15234[(23)]);
var inst_15192__$1 = cljs.core.first(inst_15180);
var inst_15194 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15192__$1,inst_15068,done);
var state_15234__$1 = (function (){var statearr_15452 = state_15234;
(statearr_15452[(22)] = inst_15192__$1);

return statearr_15452;
})();
if(cljs.core.truth_(inst_15194)){
var statearr_15453_17829 = state_15234__$1;
(statearr_15453_17829[(1)] = (39));

} else {
var statearr_15454_17830 = state_15234__$1;
(statearr_15454_17830[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15236 === (8))){
var inst_15079 = (state_15234[(14)]);
var inst_15080 = (state_15234[(15)]);
var inst_15083 = (inst_15080 < inst_15079);
var inst_15084 = inst_15083;
var state_15234__$1 = state_15234;
if(cljs.core.truth_(inst_15084)){
var statearr_15456_17831 = state_15234__$1;
(statearr_15456_17831[(1)] = (10));

} else {
var statearr_15457_17832 = state_15234__$1;
(statearr_15457_17832[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__12993__auto__ = null;
var cljs$core$async$mult_$_state_machine__12993__auto____0 = (function (){
var statearr_15458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15458[(0)] = cljs$core$async$mult_$_state_machine__12993__auto__);

(statearr_15458[(1)] = (1));

return statearr_15458;
});
var cljs$core$async$mult_$_state_machine__12993__auto____1 = (function (state_15234){
while(true){
var ret_value__12994__auto__ = (function (){try{while(true){
var result__12995__auto__ = switch__12992__auto__(state_15234);
if(cljs.core.keyword_identical_QMARK_(result__12995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12995__auto__;
}
break;
}
}catch (e15459){var ex__12996__auto__ = e15459;
var statearr_15460_17836 = state_15234;
(statearr_15460_17836[(2)] = ex__12996__auto__);


if(cljs.core.seq((state_15234[(4)]))){
var statearr_15461_17838 = state_15234;
(statearr_15461_17838[(1)] = cljs.core.first((state_15234[(4)])));

} else {
throw ex__12996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17840 = state_15234;
state_15234 = G__17840;
continue;
} else {
return ret_value__12994__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12993__auto__ = function(state_15234){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12993__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12993__auto____1.call(this,state_15234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12993__auto____0;
cljs$core$async$mult_$_state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12993__auto____1;
return cljs$core$async$mult_$_state_machine__12993__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_15462 = f__13705__auto__();
(statearr_15462[(6)] = c__13704__auto___17593);

return statearr_15462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13706__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15464 = arguments.length;
switch (G__15464) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17854 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17854(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17886 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17886(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17888 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17888(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17905 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17905(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17912 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17912(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17913 = arguments.length;
var i__5727__auto___17914 = (0);
while(true){
if((i__5727__auto___17914 < len__5726__auto___17913)){
args__5732__auto__.push((arguments[i__5727__auto___17914]));

var G__17920 = (i__5727__auto___17914 + (1));
i__5727__auto___17914 = G__17920;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15537){
var map__15538 = p__15537;
var map__15538__$1 = cljs.core.__destructure_map(map__15538);
var opts = map__15538__$1;
var statearr_15539_17926 = state;
(statearr_15539_17926[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15544_17932 = state;
(statearr_15544_17932[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15545_17933 = state;
(statearr_15545_17933[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15521){
var G__15522 = cljs.core.first(seq15521);
var seq15521__$1 = cljs.core.next(seq15521);
var G__15523 = cljs.core.first(seq15521__$1);
var seq15521__$2 = cljs.core.next(seq15521__$1);
var G__15524 = cljs.core.first(seq15521__$2);
var seq15521__$3 = cljs.core.next(seq15521__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15522,G__15523,G__15524,seq15521__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15573 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15574){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15574 = meta15574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15575,meta15574__$1){
var self__ = this;
var _15575__$1 = this;
return (new cljs.core.async.t_cljs$core$async15573(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15574__$1));
}));

(cljs.core.async.t_cljs$core$async15573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15575){
var self__ = this;
var _15575__$1 = this;
return self__.meta15574;
}));

(cljs.core.async.t_cljs$core$async15573.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15573.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15573.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15573.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15573.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15573.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15573.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15573.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15573.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15574","meta15574",1949993248,null)], null);
}));

(cljs.core.async.t_cljs$core$async15573.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15573.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15573");

(cljs.core.async.t_cljs$core$async15573.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15573");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15573.
 */
cljs.core.async.__GT_t_cljs$core$async15573 = (function cljs$core$async$__GT_t_cljs$core$async15573(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15574){
return (new cljs.core.async.t_cljs$core$async15573(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15574));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15573(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__13704__auto___17985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13705__auto__ = (function (){var switch__12992__auto__ = (function (state_15663){
var state_val_15664 = (state_15663[(1)]);
if((state_val_15664 === (7))){
var inst_15622 = (state_15663[(2)]);
var state_15663__$1 = state_15663;
if(cljs.core.truth_(inst_15622)){
var statearr_15665_17993 = state_15663__$1;
(statearr_15665_17993[(1)] = (8));

} else {
var statearr_15667_17994 = state_15663__$1;
(statearr_15667_17994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (20))){
var inst_15610 = (state_15663[(7)]);
var state_15663__$1 = state_15663;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15663__$1,(23),out,inst_15610);
} else {
if((state_val_15664 === (1))){
var inst_15593 = calc_state();
var inst_15594 = cljs.core.__destructure_map(inst_15593);
var inst_15595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15594,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15594,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15594,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15598 = inst_15593;
var state_15663__$1 = (function (){var statearr_15671 = state_15663;
(statearr_15671[(8)] = inst_15597);

(statearr_15671[(9)] = inst_15595);

(statearr_15671[(10)] = inst_15598);

(statearr_15671[(11)] = inst_15596);

return statearr_15671;
})();
var statearr_15672_17996 = state_15663__$1;
(statearr_15672_17996[(2)] = null);

(statearr_15672_17996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (24))){
var inst_15601 = (state_15663[(12)]);
var inst_15598 = inst_15601;
var state_15663__$1 = (function (){var statearr_15674 = state_15663;
(statearr_15674[(10)] = inst_15598);

return statearr_15674;
})();
var statearr_15676_17997 = state_15663__$1;
(statearr_15676_17997[(2)] = null);

(statearr_15676_17997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (4))){
var inst_15610 = (state_15663[(7)]);
var inst_15617 = (state_15663[(13)]);
var inst_15609 = (state_15663[(2)]);
var inst_15610__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15609,(0),null);
var inst_15616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15609,(1),null);
var inst_15617__$1 = (inst_15610__$1 == null);
var state_15663__$1 = (function (){var statearr_15677 = state_15663;
(statearr_15677[(7)] = inst_15610__$1);

(statearr_15677[(14)] = inst_15616);

(statearr_15677[(13)] = inst_15617__$1);

return statearr_15677;
})();
if(cljs.core.truth_(inst_15617__$1)){
var statearr_15678_18008 = state_15663__$1;
(statearr_15678_18008[(1)] = (5));

} else {
var statearr_15679_18009 = state_15663__$1;
(statearr_15679_18009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (15))){
var inst_15637 = (state_15663[(15)]);
var inst_15602 = (state_15663[(16)]);
var inst_15637__$1 = cljs.core.empty_QMARK_(inst_15602);
var state_15663__$1 = (function (){var statearr_15682 = state_15663;
(statearr_15682[(15)] = inst_15637__$1);

return statearr_15682;
})();
if(inst_15637__$1){
var statearr_15683_18017 = state_15663__$1;
(statearr_15683_18017[(1)] = (17));

} else {
var statearr_15684_18022 = state_15663__$1;
(statearr_15684_18022[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (21))){
var inst_15601 = (state_15663[(12)]);
var inst_15598 = inst_15601;
var state_15663__$1 = (function (){var statearr_15688 = state_15663;
(statearr_15688[(10)] = inst_15598);

return statearr_15688;
})();
var statearr_15689_18030 = state_15663__$1;
(statearr_15689_18030[(2)] = null);

(statearr_15689_18030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (13))){
var inst_15630 = (state_15663[(2)]);
var inst_15631 = calc_state();
var inst_15598 = inst_15631;
var state_15663__$1 = (function (){var statearr_15690 = state_15663;
(statearr_15690[(17)] = inst_15630);

(statearr_15690[(10)] = inst_15598);

return statearr_15690;
})();
var statearr_15691_18035 = state_15663__$1;
(statearr_15691_18035[(2)] = null);

(statearr_15691_18035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (22))){
var inst_15657 = (state_15663[(2)]);
var state_15663__$1 = state_15663;
var statearr_15692_18036 = state_15663__$1;
(statearr_15692_18036[(2)] = inst_15657);

(statearr_15692_18036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (6))){
var inst_15616 = (state_15663[(14)]);
var inst_15620 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15616,change);
var state_15663__$1 = state_15663;
var statearr_15694_18038 = state_15663__$1;
(statearr_15694_18038[(2)] = inst_15620);

(statearr_15694_18038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (25))){
var state_15663__$1 = state_15663;
var statearr_15695_18041 = state_15663__$1;
(statearr_15695_18041[(2)] = null);

(statearr_15695_18041[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (17))){
var inst_15616 = (state_15663[(14)]);
var inst_15603 = (state_15663[(18)]);
var inst_15639 = (inst_15603.cljs$core$IFn$_invoke$arity$1 ? inst_15603.cljs$core$IFn$_invoke$arity$1(inst_15616) : inst_15603.call(null, inst_15616));
var inst_15640 = cljs.core.not(inst_15639);
var state_15663__$1 = state_15663;
var statearr_15698_18048 = state_15663__$1;
(statearr_15698_18048[(2)] = inst_15640);

(statearr_15698_18048[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (3))){
var inst_15661 = (state_15663[(2)]);
var state_15663__$1 = state_15663;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15663__$1,inst_15661);
} else {
if((state_val_15664 === (12))){
var state_15663__$1 = state_15663;
var statearr_15704_18056 = state_15663__$1;
(statearr_15704_18056[(2)] = null);

(statearr_15704_18056[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (2))){
var inst_15598 = (state_15663[(10)]);
var inst_15601 = (state_15663[(12)]);
var inst_15601__$1 = cljs.core.__destructure_map(inst_15598);
var inst_15602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15601__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15601__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15601__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15663__$1 = (function (){var statearr_15705 = state_15663;
(statearr_15705[(18)] = inst_15603);

(statearr_15705[(16)] = inst_15602);

(statearr_15705[(12)] = inst_15601__$1);

return statearr_15705;
})();
return cljs.core.async.ioc_alts_BANG_(state_15663__$1,(4),inst_15604);
} else {
if((state_val_15664 === (23))){
var inst_15648 = (state_15663[(2)]);
var state_15663__$1 = state_15663;
if(cljs.core.truth_(inst_15648)){
var statearr_15711_18063 = state_15663__$1;
(statearr_15711_18063[(1)] = (24));

} else {
var statearr_15713_18064 = state_15663__$1;
(statearr_15713_18064[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (19))){
var inst_15643 = (state_15663[(2)]);
var state_15663__$1 = state_15663;
var statearr_15716_18067 = state_15663__$1;
(statearr_15716_18067[(2)] = inst_15643);

(statearr_15716_18067[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (11))){
var inst_15616 = (state_15663[(14)]);
var inst_15627 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15616);
var state_15663__$1 = state_15663;
var statearr_15717_18072 = state_15663__$1;
(statearr_15717_18072[(2)] = inst_15627);

(statearr_15717_18072[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (9))){
var inst_15616 = (state_15663[(14)]);
var inst_15634 = (state_15663[(19)]);
var inst_15602 = (state_15663[(16)]);
var inst_15634__$1 = (inst_15602.cljs$core$IFn$_invoke$arity$1 ? inst_15602.cljs$core$IFn$_invoke$arity$1(inst_15616) : inst_15602.call(null, inst_15616));
var state_15663__$1 = (function (){var statearr_15721 = state_15663;
(statearr_15721[(19)] = inst_15634__$1);

return statearr_15721;
})();
if(cljs.core.truth_(inst_15634__$1)){
var statearr_15722_18079 = state_15663__$1;
(statearr_15722_18079[(1)] = (14));

} else {
var statearr_15723_18080 = state_15663__$1;
(statearr_15723_18080[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (5))){
var inst_15617 = (state_15663[(13)]);
var state_15663__$1 = state_15663;
var statearr_15724_18081 = state_15663__$1;
(statearr_15724_18081[(2)] = inst_15617);

(statearr_15724_18081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (14))){
var inst_15634 = (state_15663[(19)]);
var state_15663__$1 = state_15663;
var statearr_15725_18082 = state_15663__$1;
(statearr_15725_18082[(2)] = inst_15634);

(statearr_15725_18082[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (26))){
var inst_15653 = (state_15663[(2)]);
var state_15663__$1 = state_15663;
var statearr_15734_18084 = state_15663__$1;
(statearr_15734_18084[(2)] = inst_15653);

(statearr_15734_18084[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (16))){
var inst_15645 = (state_15663[(2)]);
var state_15663__$1 = state_15663;
if(cljs.core.truth_(inst_15645)){
var statearr_15744_18086 = state_15663__$1;
(statearr_15744_18086[(1)] = (20));

} else {
var statearr_15745_18088 = state_15663__$1;
(statearr_15745_18088[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (10))){
var inst_15659 = (state_15663[(2)]);
var state_15663__$1 = state_15663;
var statearr_15752_18089 = state_15663__$1;
(statearr_15752_18089[(2)] = inst_15659);

(statearr_15752_18089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (18))){
var inst_15637 = (state_15663[(15)]);
var state_15663__$1 = state_15663;
var statearr_15753_18093 = state_15663__$1;
(statearr_15753_18093[(2)] = inst_15637);

(statearr_15753_18093[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (8))){
var inst_15610 = (state_15663[(7)]);
var inst_15624 = (inst_15610 == null);
var state_15663__$1 = state_15663;
if(cljs.core.truth_(inst_15624)){
var statearr_15754_18094 = state_15663__$1;
(statearr_15754_18094[(1)] = (11));

} else {
var statearr_15755_18095 = state_15663__$1;
(statearr_15755_18095[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__12993__auto__ = null;
var cljs$core$async$mix_$_state_machine__12993__auto____0 = (function (){
var statearr_15756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15756[(0)] = cljs$core$async$mix_$_state_machine__12993__auto__);

(statearr_15756[(1)] = (1));

return statearr_15756;
});
var cljs$core$async$mix_$_state_machine__12993__auto____1 = (function (state_15663){
while(true){
var ret_value__12994__auto__ = (function (){try{while(true){
var result__12995__auto__ = switch__12992__auto__(state_15663);
if(cljs.core.keyword_identical_QMARK_(result__12995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12995__auto__;
}
break;
}
}catch (e15764){var ex__12996__auto__ = e15764;
var statearr_15777_18096 = state_15663;
(statearr_15777_18096[(2)] = ex__12996__auto__);


if(cljs.core.seq((state_15663[(4)]))){
var statearr_15790_18097 = state_15663;
(statearr_15790_18097[(1)] = cljs.core.first((state_15663[(4)])));

} else {
throw ex__12996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18099 = state_15663;
state_15663 = G__18099;
continue;
} else {
return ret_value__12994__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12993__auto__ = function(state_15663){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12993__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12993__auto____1.call(this,state_15663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12993__auto____0;
cljs$core$async$mix_$_state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12993__auto____1;
return cljs$core$async$mix_$_state_machine__12993__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_15794 = f__13705__auto__();
(statearr_15794[(6)] = c__13704__auto___17985);

return statearr_15794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13706__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18109 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18109(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18119 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18119(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18124 = (function() {
var G__18125 = null;
var G__18125__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18125__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18125 = function(p,v){
switch(arguments.length){
case 1:
return G__18125__1.call(this,p);
case 2:
return G__18125__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18125.cljs$core$IFn$_invoke$arity$1 = G__18125__1;
G__18125.cljs$core$IFn$_invoke$arity$2 = G__18125__2;
return G__18125;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15826 = arguments.length;
switch (G__15826) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18124(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18124(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15839 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15840){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15840 = meta15840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15841,meta15840__$1){
var self__ = this;
var _15841__$1 = this;
return (new cljs.core.async.t_cljs$core$async15839(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15840__$1));
}));

(cljs.core.async.t_cljs$core$async15839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15841){
var self__ = this;
var _15841__$1 = this;
return self__.meta15840;
}));

(cljs.core.async.t_cljs$core$async15839.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15839.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15839.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15839.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15839.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15839.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15839.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15839.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15840","meta15840",-1400317739,null)], null);
}));

(cljs.core.async.t_cljs$core$async15839.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15839.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15839");

(cljs.core.async.t_cljs$core$async15839.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15839");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15839.
 */
cljs.core.async.__GT_t_cljs$core$async15839 = (function cljs$core$async$__GT_t_cljs$core$async15839(ch,topic_fn,buf_fn,mults,ensure_mult,meta15840){
return (new cljs.core.async.t_cljs$core$async15839(ch,topic_fn,buf_fn,mults,ensure_mult,meta15840));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15834 = arguments.length;
switch (G__15834) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15832_SHARP_){
if(cljs.core.truth_((p1__15832_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15832_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15832_SHARP_.call(null, topic)))){
return p1__15832_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15832_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async15839(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__13704__auto___18156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13705__auto__ = (function (){var switch__12992__auto__ = (function (state_15926){
var state_val_15928 = (state_15926[(1)]);
if((state_val_15928 === (7))){
var inst_15921 = (state_15926[(2)]);
var state_15926__$1 = state_15926;
var statearr_15931_18162 = state_15926__$1;
(statearr_15931_18162[(2)] = inst_15921);

(statearr_15931_18162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (20))){
var state_15926__$1 = state_15926;
var statearr_15933_18163 = state_15926__$1;
(statearr_15933_18163[(2)] = null);

(statearr_15933_18163[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (1))){
var state_15926__$1 = state_15926;
var statearr_15938_18164 = state_15926__$1;
(statearr_15938_18164[(2)] = null);

(statearr_15938_18164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (24))){
var inst_15904 = (state_15926[(7)]);
var inst_15913 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15904);
var state_15926__$1 = state_15926;
var statearr_15942_18168 = state_15926__$1;
(statearr_15942_18168[(2)] = inst_15913);

(statearr_15942_18168[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (4))){
var inst_15851 = (state_15926[(8)]);
var inst_15851__$1 = (state_15926[(2)]);
var inst_15852 = (inst_15851__$1 == null);
var state_15926__$1 = (function (){var statearr_15945 = state_15926;
(statearr_15945[(8)] = inst_15851__$1);

return statearr_15945;
})();
if(cljs.core.truth_(inst_15852)){
var statearr_15949_18169 = state_15926__$1;
(statearr_15949_18169[(1)] = (5));

} else {
var statearr_15950_18177 = state_15926__$1;
(statearr_15950_18177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (15))){
var inst_15898 = (state_15926[(2)]);
var state_15926__$1 = state_15926;
var statearr_15951_18178 = state_15926__$1;
(statearr_15951_18178[(2)] = inst_15898);

(statearr_15951_18178[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (21))){
var inst_15918 = (state_15926[(2)]);
var state_15926__$1 = (function (){var statearr_15953 = state_15926;
(statearr_15953[(9)] = inst_15918);

return statearr_15953;
})();
var statearr_15955_18187 = state_15926__$1;
(statearr_15955_18187[(2)] = null);

(statearr_15955_18187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (13))){
var inst_15875 = (state_15926[(10)]);
var inst_15877 = cljs.core.chunked_seq_QMARK_(inst_15875);
var state_15926__$1 = state_15926;
if(inst_15877){
var statearr_15956_18191 = state_15926__$1;
(statearr_15956_18191[(1)] = (16));

} else {
var statearr_15957_18192 = state_15926__$1;
(statearr_15957_18192[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (22))){
var inst_15910 = (state_15926[(2)]);
var state_15926__$1 = state_15926;
if(cljs.core.truth_(inst_15910)){
var statearr_15960_18193 = state_15926__$1;
(statearr_15960_18193[(1)] = (23));

} else {
var statearr_15962_18194 = state_15926__$1;
(statearr_15962_18194[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (6))){
var inst_15851 = (state_15926[(8)]);
var inst_15906 = (state_15926[(11)]);
var inst_15904 = (state_15926[(7)]);
var inst_15904__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15851) : topic_fn.call(null, inst_15851));
var inst_15905 = cljs.core.deref(mults);
var inst_15906__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15905,inst_15904__$1);
var state_15926__$1 = (function (){var statearr_15964 = state_15926;
(statearr_15964[(11)] = inst_15906__$1);

(statearr_15964[(7)] = inst_15904__$1);

return statearr_15964;
})();
if(cljs.core.truth_(inst_15906__$1)){
var statearr_15965_18195 = state_15926__$1;
(statearr_15965_18195[(1)] = (19));

} else {
var statearr_15967_18196 = state_15926__$1;
(statearr_15967_18196[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (25))){
var inst_15915 = (state_15926[(2)]);
var state_15926__$1 = state_15926;
var statearr_15971_18197 = state_15926__$1;
(statearr_15971_18197[(2)] = inst_15915);

(statearr_15971_18197[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (17))){
var inst_15875 = (state_15926[(10)]);
var inst_15888 = cljs.core.first(inst_15875);
var inst_15889 = cljs.core.async.muxch_STAR_(inst_15888);
var inst_15890 = cljs.core.async.close_BANG_(inst_15889);
var inst_15891 = cljs.core.next(inst_15875);
var inst_15861 = inst_15891;
var inst_15862 = null;
var inst_15863 = (0);
var inst_15864 = (0);
var state_15926__$1 = (function (){var statearr_15972 = state_15926;
(statearr_15972[(12)] = inst_15862);

(statearr_15972[(13)] = inst_15863);

(statearr_15972[(14)] = inst_15861);

(statearr_15972[(15)] = inst_15864);

(statearr_15972[(16)] = inst_15890);

return statearr_15972;
})();
var statearr_15973_18202 = state_15926__$1;
(statearr_15973_18202[(2)] = null);

(statearr_15973_18202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (3))){
var inst_15923 = (state_15926[(2)]);
var state_15926__$1 = state_15926;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15926__$1,inst_15923);
} else {
if((state_val_15928 === (12))){
var inst_15900 = (state_15926[(2)]);
var state_15926__$1 = state_15926;
var statearr_15975_18203 = state_15926__$1;
(statearr_15975_18203[(2)] = inst_15900);

(statearr_15975_18203[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (2))){
var state_15926__$1 = state_15926;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15926__$1,(4),ch);
} else {
if((state_val_15928 === (23))){
var state_15926__$1 = state_15926;
var statearr_15979_18204 = state_15926__$1;
(statearr_15979_18204[(2)] = null);

(statearr_15979_18204[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (19))){
var inst_15851 = (state_15926[(8)]);
var inst_15906 = (state_15926[(11)]);
var inst_15908 = cljs.core.async.muxch_STAR_(inst_15906);
var state_15926__$1 = state_15926;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15926__$1,(22),inst_15908,inst_15851);
} else {
if((state_val_15928 === (11))){
var inst_15861 = (state_15926[(14)]);
var inst_15875 = (state_15926[(10)]);
var inst_15875__$1 = cljs.core.seq(inst_15861);
var state_15926__$1 = (function (){var statearr_15980 = state_15926;
(statearr_15980[(10)] = inst_15875__$1);

return statearr_15980;
})();
if(inst_15875__$1){
var statearr_15981_18207 = state_15926__$1;
(statearr_15981_18207[(1)] = (13));

} else {
var statearr_15983_18208 = state_15926__$1;
(statearr_15983_18208[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (9))){
var inst_15902 = (state_15926[(2)]);
var state_15926__$1 = state_15926;
var statearr_15987_18213 = state_15926__$1;
(statearr_15987_18213[(2)] = inst_15902);

(statearr_15987_18213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (5))){
var inst_15858 = cljs.core.deref(mults);
var inst_15859 = cljs.core.vals(inst_15858);
var inst_15860 = cljs.core.seq(inst_15859);
var inst_15861 = inst_15860;
var inst_15862 = null;
var inst_15863 = (0);
var inst_15864 = (0);
var state_15926__$1 = (function (){var statearr_15988 = state_15926;
(statearr_15988[(12)] = inst_15862);

(statearr_15988[(13)] = inst_15863);

(statearr_15988[(14)] = inst_15861);

(statearr_15988[(15)] = inst_15864);

return statearr_15988;
})();
var statearr_15989_18215 = state_15926__$1;
(statearr_15989_18215[(2)] = null);

(statearr_15989_18215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (14))){
var state_15926__$1 = state_15926;
var statearr_15994_18220 = state_15926__$1;
(statearr_15994_18220[(2)] = null);

(statearr_15994_18220[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (16))){
var inst_15875 = (state_15926[(10)]);
var inst_15881 = cljs.core.chunk_first(inst_15875);
var inst_15884 = cljs.core.chunk_rest(inst_15875);
var inst_15885 = cljs.core.count(inst_15881);
var inst_15861 = inst_15884;
var inst_15862 = inst_15881;
var inst_15863 = inst_15885;
var inst_15864 = (0);
var state_15926__$1 = (function (){var statearr_15995 = state_15926;
(statearr_15995[(12)] = inst_15862);

(statearr_15995[(13)] = inst_15863);

(statearr_15995[(14)] = inst_15861);

(statearr_15995[(15)] = inst_15864);

return statearr_15995;
})();
var statearr_15996_18224 = state_15926__$1;
(statearr_15996_18224[(2)] = null);

(statearr_15996_18224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (10))){
var inst_15862 = (state_15926[(12)]);
var inst_15863 = (state_15926[(13)]);
var inst_15861 = (state_15926[(14)]);
var inst_15864 = (state_15926[(15)]);
var inst_15869 = cljs.core._nth(inst_15862,inst_15864);
var inst_15870 = cljs.core.async.muxch_STAR_(inst_15869);
var inst_15871 = cljs.core.async.close_BANG_(inst_15870);
var inst_15872 = (inst_15864 + (1));
var tmp15990 = inst_15862;
var tmp15991 = inst_15863;
var tmp15992 = inst_15861;
var inst_15861__$1 = tmp15992;
var inst_15862__$1 = tmp15990;
var inst_15863__$1 = tmp15991;
var inst_15864__$1 = inst_15872;
var state_15926__$1 = (function (){var statearr_15997 = state_15926;
(statearr_15997[(12)] = inst_15862__$1);

(statearr_15997[(13)] = inst_15863__$1);

(statearr_15997[(14)] = inst_15861__$1);

(statearr_15997[(15)] = inst_15864__$1);

(statearr_15997[(17)] = inst_15871);

return statearr_15997;
})();
var statearr_15998_18225 = state_15926__$1;
(statearr_15998_18225[(2)] = null);

(statearr_15998_18225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (18))){
var inst_15894 = (state_15926[(2)]);
var state_15926__$1 = state_15926;
var statearr_16000_18226 = state_15926__$1;
(statearr_16000_18226[(2)] = inst_15894);

(statearr_16000_18226[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (8))){
var inst_15863 = (state_15926[(13)]);
var inst_15864 = (state_15926[(15)]);
var inst_15866 = (inst_15864 < inst_15863);
var inst_15867 = inst_15866;
var state_15926__$1 = state_15926;
if(cljs.core.truth_(inst_15867)){
var statearr_16002_18234 = state_15926__$1;
(statearr_16002_18234[(1)] = (10));

} else {
var statearr_16005_18235 = state_15926__$1;
(statearr_16005_18235[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12993__auto__ = null;
var cljs$core$async$state_machine__12993__auto____0 = (function (){
var statearr_16006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16006[(0)] = cljs$core$async$state_machine__12993__auto__);

(statearr_16006[(1)] = (1));

return statearr_16006;
});
var cljs$core$async$state_machine__12993__auto____1 = (function (state_15926){
while(true){
var ret_value__12994__auto__ = (function (){try{while(true){
var result__12995__auto__ = switch__12992__auto__(state_15926);
if(cljs.core.keyword_identical_QMARK_(result__12995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12995__auto__;
}
break;
}
}catch (e16007){var ex__12996__auto__ = e16007;
var statearr_16008_18248 = state_15926;
(statearr_16008_18248[(2)] = ex__12996__auto__);


if(cljs.core.seq((state_15926[(4)]))){
var statearr_16013_18249 = state_15926;
(statearr_16013_18249[(1)] = cljs.core.first((state_15926[(4)])));

} else {
throw ex__12996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18250 = state_15926;
state_15926 = G__18250;
continue;
} else {
return ret_value__12994__auto__;
}
break;
}
});
cljs$core$async$state_machine__12993__auto__ = function(state_15926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12993__auto____1.call(this,state_15926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12993__auto____0;
cljs$core$async$state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12993__auto____1;
return cljs$core$async$state_machine__12993__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_16014 = f__13705__auto__();
(statearr_16014[(6)] = c__13704__auto___18156);

return statearr_16014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13706__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16019 = arguments.length;
switch (G__16019) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16021 = arguments.length;
switch (G__16021) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16023 = arguments.length;
switch (G__16023) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13704__auto___18284 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13705__auto__ = (function (){var switch__12992__auto__ = (function (state_16081){
var state_val_16082 = (state_16081[(1)]);
if((state_val_16082 === (7))){
var state_16081__$1 = state_16081;
var statearr_16086_18285 = state_16081__$1;
(statearr_16086_18285[(2)] = null);

(statearr_16086_18285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16082 === (1))){
var state_16081__$1 = state_16081;
var statearr_16088_18286 = state_16081__$1;
(statearr_16088_18286[(2)] = null);

(statearr_16088_18286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16082 === (4))){
var inst_16039 = (state_16081[(7)]);
var inst_16040 = (state_16081[(8)]);
var inst_16042 = (inst_16040 < inst_16039);
var state_16081__$1 = state_16081;
if(cljs.core.truth_(inst_16042)){
var statearr_16090_18291 = state_16081__$1;
(statearr_16090_18291[(1)] = (6));

} else {
var statearr_16091_18293 = state_16081__$1;
(statearr_16091_18293[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16082 === (15))){
var inst_16067 = (state_16081[(9)]);
var inst_16072 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16067);
var state_16081__$1 = state_16081;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16081__$1,(17),out,inst_16072);
} else {
if((state_val_16082 === (13))){
var inst_16067 = (state_16081[(9)]);
var inst_16067__$1 = (state_16081[(2)]);
var inst_16068 = cljs.core.some(cljs.core.nil_QMARK_,inst_16067__$1);
var state_16081__$1 = (function (){var statearr_16094 = state_16081;
(statearr_16094[(9)] = inst_16067__$1);

return statearr_16094;
})();
if(cljs.core.truth_(inst_16068)){
var statearr_16095_18297 = state_16081__$1;
(statearr_16095_18297[(1)] = (14));

} else {
var statearr_16098_18298 = state_16081__$1;
(statearr_16098_18298[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16082 === (6))){
var state_16081__$1 = state_16081;
var statearr_16101_18302 = state_16081__$1;
(statearr_16101_18302[(2)] = null);

(statearr_16101_18302[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16082 === (17))){
var inst_16074 = (state_16081[(2)]);
var state_16081__$1 = (function (){var statearr_16106 = state_16081;
(statearr_16106[(10)] = inst_16074);

return statearr_16106;
})();
var statearr_16107_18307 = state_16081__$1;
(statearr_16107_18307[(2)] = null);

(statearr_16107_18307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16082 === (3))){
var inst_16079 = (state_16081[(2)]);
var state_16081__$1 = state_16081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16081__$1,inst_16079);
} else {
if((state_val_16082 === (12))){
var _ = (function (){var statearr_16112 = state_16081;
(statearr_16112[(4)] = cljs.core.rest((state_16081[(4)])));

return statearr_16112;
})();
var state_16081__$1 = state_16081;
var ex16105 = (state_16081__$1[(2)]);
var statearr_16114_18311 = state_16081__$1;
(statearr_16114_18311[(5)] = ex16105);


if((ex16105 instanceof Object)){
var statearr_16117_18312 = state_16081__$1;
(statearr_16117_18312[(1)] = (11));

(statearr_16117_18312[(5)] = null);

} else {
throw ex16105;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16082 === (2))){
var inst_16038 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16039 = cnt;
var inst_16040 = (0);
var state_16081__$1 = (function (){var statearr_16123 = state_16081;
(statearr_16123[(7)] = inst_16039);

(statearr_16123[(11)] = inst_16038);

(statearr_16123[(8)] = inst_16040);

return statearr_16123;
})();
var statearr_16124_18316 = state_16081__$1;
(statearr_16124_18316[(2)] = null);

(statearr_16124_18316[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16082 === (11))){
var inst_16044 = (state_16081[(2)]);
var inst_16047 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16081__$1 = (function (){var statearr_16126 = state_16081;
(statearr_16126[(12)] = inst_16044);

return statearr_16126;
})();
var statearr_16127_18317 = state_16081__$1;
(statearr_16127_18317[(2)] = inst_16047);

(statearr_16127_18317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16082 === (9))){
var inst_16040 = (state_16081[(8)]);
var _ = (function (){var statearr_16128 = state_16081;
(statearr_16128[(4)] = cljs.core.cons((12),(state_16081[(4)])));

return statearr_16128;
})();
var inst_16053 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16040) : chs__$1.call(null, inst_16040));
var inst_16054 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16040) : done.call(null, inst_16040));
var inst_16055 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16053,inst_16054);
var ___$1 = (function (){var statearr_16129 = state_16081;
(statearr_16129[(4)] = cljs.core.rest((state_16081[(4)])));

return statearr_16129;
})();
var state_16081__$1 = state_16081;
var statearr_16131_18323 = state_16081__$1;
(statearr_16131_18323[(2)] = inst_16055);

(statearr_16131_18323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16082 === (5))){
var inst_16065 = (state_16081[(2)]);
var state_16081__$1 = (function (){var statearr_16136 = state_16081;
(statearr_16136[(13)] = inst_16065);

return statearr_16136;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16081__$1,(13),dchan);
} else {
if((state_val_16082 === (14))){
var inst_16070 = cljs.core.async.close_BANG_(out);
var state_16081__$1 = state_16081;
var statearr_16142_18324 = state_16081__$1;
(statearr_16142_18324[(2)] = inst_16070);

(statearr_16142_18324[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16082 === (16))){
var inst_16077 = (state_16081[(2)]);
var state_16081__$1 = state_16081;
var statearr_16147_18326 = state_16081__$1;
(statearr_16147_18326[(2)] = inst_16077);

(statearr_16147_18326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16082 === (10))){
var inst_16040 = (state_16081[(8)]);
var inst_16058 = (state_16081[(2)]);
var inst_16059 = (inst_16040 + (1));
var inst_16040__$1 = inst_16059;
var state_16081__$1 = (function (){var statearr_16149 = state_16081;
(statearr_16149[(14)] = inst_16058);

(statearr_16149[(8)] = inst_16040__$1);

return statearr_16149;
})();
var statearr_16150_18334 = state_16081__$1;
(statearr_16150_18334[(2)] = null);

(statearr_16150_18334[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16082 === (8))){
var inst_16063 = (state_16081[(2)]);
var state_16081__$1 = state_16081;
var statearr_16151_18338 = state_16081__$1;
(statearr_16151_18338[(2)] = inst_16063);

(statearr_16151_18338[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12993__auto__ = null;
var cljs$core$async$state_machine__12993__auto____0 = (function (){
var statearr_16154 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16154[(0)] = cljs$core$async$state_machine__12993__auto__);

(statearr_16154[(1)] = (1));

return statearr_16154;
});
var cljs$core$async$state_machine__12993__auto____1 = (function (state_16081){
while(true){
var ret_value__12994__auto__ = (function (){try{while(true){
var result__12995__auto__ = switch__12992__auto__(state_16081);
if(cljs.core.keyword_identical_QMARK_(result__12995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12995__auto__;
}
break;
}
}catch (e16155){var ex__12996__auto__ = e16155;
var statearr_16156_18339 = state_16081;
(statearr_16156_18339[(2)] = ex__12996__auto__);


if(cljs.core.seq((state_16081[(4)]))){
var statearr_16160_18340 = state_16081;
(statearr_16160_18340[(1)] = cljs.core.first((state_16081[(4)])));

} else {
throw ex__12996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18341 = state_16081;
state_16081 = G__18341;
continue;
} else {
return ret_value__12994__auto__;
}
break;
}
});
cljs$core$async$state_machine__12993__auto__ = function(state_16081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12993__auto____1.call(this,state_16081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12993__auto____0;
cljs$core$async$state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12993__auto____1;
return cljs$core$async$state_machine__12993__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_16169 = f__13705__auto__();
(statearr_16169[(6)] = c__13704__auto___18284);

return statearr_16169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13706__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16186 = arguments.length;
switch (G__16186) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13704__auto___18347 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13705__auto__ = (function (){var switch__12992__auto__ = (function (state_16248){
var state_val_16249 = (state_16248[(1)]);
if((state_val_16249 === (7))){
var inst_16219 = (state_16248[(7)]);
var inst_16220 = (state_16248[(8)]);
var inst_16219__$1 = (state_16248[(2)]);
var inst_16220__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16219__$1,(0),null);
var inst_16223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16219__$1,(1),null);
var inst_16230 = (inst_16220__$1 == null);
var state_16248__$1 = (function (){var statearr_16253 = state_16248;
(statearr_16253[(7)] = inst_16219__$1);

(statearr_16253[(8)] = inst_16220__$1);

(statearr_16253[(9)] = inst_16223);

return statearr_16253;
})();
if(cljs.core.truth_(inst_16230)){
var statearr_16256_18348 = state_16248__$1;
(statearr_16256_18348[(1)] = (8));

} else {
var statearr_16257_18349 = state_16248__$1;
(statearr_16257_18349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16249 === (1))){
var inst_16200 = cljs.core.vec(chs);
var inst_16204 = inst_16200;
var state_16248__$1 = (function (){var statearr_16258 = state_16248;
(statearr_16258[(10)] = inst_16204);

return statearr_16258;
})();
var statearr_16259_18353 = state_16248__$1;
(statearr_16259_18353[(2)] = null);

(statearr_16259_18353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16249 === (4))){
var inst_16204 = (state_16248[(10)]);
var state_16248__$1 = state_16248;
return cljs.core.async.ioc_alts_BANG_(state_16248__$1,(7),inst_16204);
} else {
if((state_val_16249 === (6))){
var inst_16244 = (state_16248[(2)]);
var state_16248__$1 = state_16248;
var statearr_16261_18360 = state_16248__$1;
(statearr_16261_18360[(2)] = inst_16244);

(statearr_16261_18360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16249 === (3))){
var inst_16246 = (state_16248[(2)]);
var state_16248__$1 = state_16248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16248__$1,inst_16246);
} else {
if((state_val_16249 === (2))){
var inst_16204 = (state_16248[(10)]);
var inst_16210 = cljs.core.count(inst_16204);
var inst_16211 = (inst_16210 > (0));
var state_16248__$1 = state_16248;
if(cljs.core.truth_(inst_16211)){
var statearr_16269_18362 = state_16248__$1;
(statearr_16269_18362[(1)] = (4));

} else {
var statearr_16270_18363 = state_16248__$1;
(statearr_16270_18363[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16249 === (11))){
var inst_16204 = (state_16248[(10)]);
var inst_16237 = (state_16248[(2)]);
var tmp16262 = inst_16204;
var inst_16204__$1 = tmp16262;
var state_16248__$1 = (function (){var statearr_16272 = state_16248;
(statearr_16272[(10)] = inst_16204__$1);

(statearr_16272[(11)] = inst_16237);

return statearr_16272;
})();
var statearr_16273_18372 = state_16248__$1;
(statearr_16273_18372[(2)] = null);

(statearr_16273_18372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16249 === (9))){
var inst_16220 = (state_16248[(8)]);
var state_16248__$1 = state_16248;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16248__$1,(11),out,inst_16220);
} else {
if((state_val_16249 === (5))){
var inst_16242 = cljs.core.async.close_BANG_(out);
var state_16248__$1 = state_16248;
var statearr_16275_18373 = state_16248__$1;
(statearr_16275_18373[(2)] = inst_16242);

(statearr_16275_18373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16249 === (10))){
var inst_16240 = (state_16248[(2)]);
var state_16248__$1 = state_16248;
var statearr_16276_18374 = state_16248__$1;
(statearr_16276_18374[(2)] = inst_16240);

(statearr_16276_18374[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16249 === (8))){
var inst_16219 = (state_16248[(7)]);
var inst_16204 = (state_16248[(10)]);
var inst_16220 = (state_16248[(8)]);
var inst_16223 = (state_16248[(9)]);
var inst_16232 = (function (){var cs = inst_16204;
var vec__16213 = inst_16219;
var v = inst_16220;
var c = inst_16223;
return (function (p1__16178_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16178_SHARP_);
});
})();
var inst_16233 = cljs.core.filterv(inst_16232,inst_16204);
var inst_16204__$1 = inst_16233;
var state_16248__$1 = (function (){var statearr_16279 = state_16248;
(statearr_16279[(10)] = inst_16204__$1);

return statearr_16279;
})();
var statearr_16280_18382 = state_16248__$1;
(statearr_16280_18382[(2)] = null);

(statearr_16280_18382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12993__auto__ = null;
var cljs$core$async$state_machine__12993__auto____0 = (function (){
var statearr_16281 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16281[(0)] = cljs$core$async$state_machine__12993__auto__);

(statearr_16281[(1)] = (1));

return statearr_16281;
});
var cljs$core$async$state_machine__12993__auto____1 = (function (state_16248){
while(true){
var ret_value__12994__auto__ = (function (){try{while(true){
var result__12995__auto__ = switch__12992__auto__(state_16248);
if(cljs.core.keyword_identical_QMARK_(result__12995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12995__auto__;
}
break;
}
}catch (e16282){var ex__12996__auto__ = e16282;
var statearr_16283_18383 = state_16248;
(statearr_16283_18383[(2)] = ex__12996__auto__);


if(cljs.core.seq((state_16248[(4)]))){
var statearr_16285_18384 = state_16248;
(statearr_16285_18384[(1)] = cljs.core.first((state_16248[(4)])));

} else {
throw ex__12996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18397 = state_16248;
state_16248 = G__18397;
continue;
} else {
return ret_value__12994__auto__;
}
break;
}
});
cljs$core$async$state_machine__12993__auto__ = function(state_16248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12993__auto____1.call(this,state_16248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12993__auto____0;
cljs$core$async$state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12993__auto____1;
return cljs$core$async$state_machine__12993__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_16286 = f__13705__auto__();
(statearr_16286[(6)] = c__13704__auto___18347);

return statearr_16286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13706__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16290 = arguments.length;
switch (G__16290) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13704__auto___18399 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13705__auto__ = (function (){var switch__12992__auto__ = (function (state_16326){
var state_val_16327 = (state_16326[(1)]);
if((state_val_16327 === (7))){
var inst_16303 = (state_16326[(7)]);
var inst_16303__$1 = (state_16326[(2)]);
var inst_16304 = (inst_16303__$1 == null);
var inst_16305 = cljs.core.not(inst_16304);
var state_16326__$1 = (function (){var statearr_16328 = state_16326;
(statearr_16328[(7)] = inst_16303__$1);

return statearr_16328;
})();
if(inst_16305){
var statearr_16329_18405 = state_16326__$1;
(statearr_16329_18405[(1)] = (8));

} else {
var statearr_16330_18406 = state_16326__$1;
(statearr_16330_18406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16327 === (1))){
var inst_16295 = (0);
var state_16326__$1 = (function (){var statearr_16334 = state_16326;
(statearr_16334[(8)] = inst_16295);

return statearr_16334;
})();
var statearr_16335_18408 = state_16326__$1;
(statearr_16335_18408[(2)] = null);

(statearr_16335_18408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16327 === (4))){
var state_16326__$1 = state_16326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16326__$1,(7),ch);
} else {
if((state_val_16327 === (6))){
var inst_16319 = (state_16326[(2)]);
var state_16326__$1 = state_16326;
var statearr_16340_18409 = state_16326__$1;
(statearr_16340_18409[(2)] = inst_16319);

(statearr_16340_18409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16327 === (3))){
var inst_16321 = (state_16326[(2)]);
var inst_16322 = cljs.core.async.close_BANG_(out);
var state_16326__$1 = (function (){var statearr_16345 = state_16326;
(statearr_16345[(9)] = inst_16321);

return statearr_16345;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16326__$1,inst_16322);
} else {
if((state_val_16327 === (2))){
var inst_16295 = (state_16326[(8)]);
var inst_16300 = (inst_16295 < n);
var state_16326__$1 = state_16326;
if(cljs.core.truth_(inst_16300)){
var statearr_16349_18410 = state_16326__$1;
(statearr_16349_18410[(1)] = (4));

} else {
var statearr_16350_18411 = state_16326__$1;
(statearr_16350_18411[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16327 === (11))){
var inst_16295 = (state_16326[(8)]);
var inst_16311 = (state_16326[(2)]);
var inst_16312 = (inst_16295 + (1));
var inst_16295__$1 = inst_16312;
var state_16326__$1 = (function (){var statearr_16351 = state_16326;
(statearr_16351[(10)] = inst_16311);

(statearr_16351[(8)] = inst_16295__$1);

return statearr_16351;
})();
var statearr_16352_18412 = state_16326__$1;
(statearr_16352_18412[(2)] = null);

(statearr_16352_18412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16327 === (9))){
var state_16326__$1 = state_16326;
var statearr_16353_18414 = state_16326__$1;
(statearr_16353_18414[(2)] = null);

(statearr_16353_18414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16327 === (5))){
var state_16326__$1 = state_16326;
var statearr_16354_18415 = state_16326__$1;
(statearr_16354_18415[(2)] = null);

(statearr_16354_18415[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16327 === (10))){
var inst_16316 = (state_16326[(2)]);
var state_16326__$1 = state_16326;
var statearr_16355_18416 = state_16326__$1;
(statearr_16355_18416[(2)] = inst_16316);

(statearr_16355_18416[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16327 === (8))){
var inst_16303 = (state_16326[(7)]);
var state_16326__$1 = state_16326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16326__$1,(11),out,inst_16303);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12993__auto__ = null;
var cljs$core$async$state_machine__12993__auto____0 = (function (){
var statearr_16356 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16356[(0)] = cljs$core$async$state_machine__12993__auto__);

(statearr_16356[(1)] = (1));

return statearr_16356;
});
var cljs$core$async$state_machine__12993__auto____1 = (function (state_16326){
while(true){
var ret_value__12994__auto__ = (function (){try{while(true){
var result__12995__auto__ = switch__12992__auto__(state_16326);
if(cljs.core.keyword_identical_QMARK_(result__12995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12995__auto__;
}
break;
}
}catch (e16357){var ex__12996__auto__ = e16357;
var statearr_16358_18422 = state_16326;
(statearr_16358_18422[(2)] = ex__12996__auto__);


if(cljs.core.seq((state_16326[(4)]))){
var statearr_16359_18423 = state_16326;
(statearr_16359_18423[(1)] = cljs.core.first((state_16326[(4)])));

} else {
throw ex__12996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18424 = state_16326;
state_16326 = G__18424;
continue;
} else {
return ret_value__12994__auto__;
}
break;
}
});
cljs$core$async$state_machine__12993__auto__ = function(state_16326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12993__auto____1.call(this,state_16326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12993__auto____0;
cljs$core$async$state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12993__auto____1;
return cljs$core$async$state_machine__12993__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_16363 = f__13705__auto__();
(statearr_16363[(6)] = c__13704__auto___18399);

return statearr_16363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13706__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16376 = (function (f,ch,meta16366,_,fn1,meta16377){
this.f = f;
this.ch = ch;
this.meta16366 = meta16366;
this._ = _;
this.fn1 = fn1;
this.meta16377 = meta16377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16378,meta16377__$1){
var self__ = this;
var _16378__$1 = this;
return (new cljs.core.async.t_cljs$core$async16376(self__.f,self__.ch,self__.meta16366,self__._,self__.fn1,meta16377__$1));
}));

(cljs.core.async.t_cljs$core$async16376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16378){
var self__ = this;
var _16378__$1 = this;
return self__.meta16377;
}));

(cljs.core.async.t_cljs$core$async16376.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16376.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16376.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16376.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16364_SHARP_){
var G__16385 = (((p1__16364_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16364_SHARP_) : self__.f.call(null, p1__16364_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16385) : f1.call(null, G__16385));
});
}));

(cljs.core.async.t_cljs$core$async16376.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16366","meta16366",-1346003111,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16365","cljs.core.async/t_cljs$core$async16365",1952521360,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16377","meta16377",1565349972,null)], null);
}));

(cljs.core.async.t_cljs$core$async16376.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16376");

(cljs.core.async.t_cljs$core$async16376.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16376");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16376.
 */
cljs.core.async.__GT_t_cljs$core$async16376 = (function cljs$core$async$__GT_t_cljs$core$async16376(f,ch,meta16366,_,fn1,meta16377){
return (new cljs.core.async.t_cljs$core$async16376(f,ch,meta16366,_,fn1,meta16377));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16365 = (function (f,ch,meta16366){
this.f = f;
this.ch = ch;
this.meta16366 = meta16366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16367,meta16366__$1){
var self__ = this;
var _16367__$1 = this;
return (new cljs.core.async.t_cljs$core$async16365(self__.f,self__.ch,meta16366__$1));
}));

(cljs.core.async.t_cljs$core$async16365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16367){
var self__ = this;
var _16367__$1 = this;
return self__.meta16366;
}));

(cljs.core.async.t_cljs$core$async16365.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16365.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16365.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16365.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16365.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16376(self__.f,self__.ch,self__.meta16366,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16394 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16394) : self__.f.call(null, G__16394));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16365.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16365.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16366","meta16366",-1346003111,null)], null);
}));

(cljs.core.async.t_cljs$core$async16365.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16365");

(cljs.core.async.t_cljs$core$async16365.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16365");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16365.
 */
cljs.core.async.__GT_t_cljs$core$async16365 = (function cljs$core$async$__GT_t_cljs$core$async16365(f,ch,meta16366){
return (new cljs.core.async.t_cljs$core$async16365(f,ch,meta16366));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16365(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16396 = (function (f,ch,meta16397){
this.f = f;
this.ch = ch;
this.meta16397 = meta16397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16398,meta16397__$1){
var self__ = this;
var _16398__$1 = this;
return (new cljs.core.async.t_cljs$core$async16396(self__.f,self__.ch,meta16397__$1));
}));

(cljs.core.async.t_cljs$core$async16396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16398){
var self__ = this;
var _16398__$1 = this;
return self__.meta16397;
}));

(cljs.core.async.t_cljs$core$async16396.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16396.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16396.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16396.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16396.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16396.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16397","meta16397",1783896971,null)], null);
}));

(cljs.core.async.t_cljs$core$async16396.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16396");

(cljs.core.async.t_cljs$core$async16396.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16396");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16396.
 */
cljs.core.async.__GT_t_cljs$core$async16396 = (function cljs$core$async$__GT_t_cljs$core$async16396(f,ch,meta16397){
return (new cljs.core.async.t_cljs$core$async16396(f,ch,meta16397));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16396(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16405 = (function (p,ch,meta16406){
this.p = p;
this.ch = ch;
this.meta16406 = meta16406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16407,meta16406__$1){
var self__ = this;
var _16407__$1 = this;
return (new cljs.core.async.t_cljs$core$async16405(self__.p,self__.ch,meta16406__$1));
}));

(cljs.core.async.t_cljs$core$async16405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16407){
var self__ = this;
var _16407__$1 = this;
return self__.meta16406;
}));

(cljs.core.async.t_cljs$core$async16405.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16405.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16405.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16405.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16405.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16405.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16405.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16406","meta16406",-1369907474,null)], null);
}));

(cljs.core.async.t_cljs$core$async16405.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16405.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16405");

(cljs.core.async.t_cljs$core$async16405.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16405");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16405.
 */
cljs.core.async.__GT_t_cljs$core$async16405 = (function cljs$core$async$__GT_t_cljs$core$async16405(p,ch,meta16406){
return (new cljs.core.async.t_cljs$core$async16405(p,ch,meta16406));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16405(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16452 = arguments.length;
switch (G__16452) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13704__auto___18452 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13705__auto__ = (function (){var switch__12992__auto__ = (function (state_16482){
var state_val_16483 = (state_16482[(1)]);
if((state_val_16483 === (7))){
var inst_16476 = (state_16482[(2)]);
var state_16482__$1 = state_16482;
var statearr_16484_18454 = state_16482__$1;
(statearr_16484_18454[(2)] = inst_16476);

(statearr_16484_18454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16483 === (1))){
var state_16482__$1 = state_16482;
var statearr_16485_18458 = state_16482__$1;
(statearr_16485_18458[(2)] = null);

(statearr_16485_18458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16483 === (4))){
var inst_16462 = (state_16482[(7)]);
var inst_16462__$1 = (state_16482[(2)]);
var inst_16463 = (inst_16462__$1 == null);
var state_16482__$1 = (function (){var statearr_16486 = state_16482;
(statearr_16486[(7)] = inst_16462__$1);

return statearr_16486;
})();
if(cljs.core.truth_(inst_16463)){
var statearr_16487_18460 = state_16482__$1;
(statearr_16487_18460[(1)] = (5));

} else {
var statearr_16488_18462 = state_16482__$1;
(statearr_16488_18462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16483 === (6))){
var inst_16462 = (state_16482[(7)]);
var inst_16467 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16462) : p.call(null, inst_16462));
var state_16482__$1 = state_16482;
if(cljs.core.truth_(inst_16467)){
var statearr_16489_18463 = state_16482__$1;
(statearr_16489_18463[(1)] = (8));

} else {
var statearr_16490_18464 = state_16482__$1;
(statearr_16490_18464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16483 === (3))){
var inst_16480 = (state_16482[(2)]);
var state_16482__$1 = state_16482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16482__$1,inst_16480);
} else {
if((state_val_16483 === (2))){
var state_16482__$1 = state_16482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16482__$1,(4),ch);
} else {
if((state_val_16483 === (11))){
var inst_16470 = (state_16482[(2)]);
var state_16482__$1 = state_16482;
var statearr_16492_18465 = state_16482__$1;
(statearr_16492_18465[(2)] = inst_16470);

(statearr_16492_18465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16483 === (9))){
var state_16482__$1 = state_16482;
var statearr_16493_18466 = state_16482__$1;
(statearr_16493_18466[(2)] = null);

(statearr_16493_18466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16483 === (5))){
var inst_16465 = cljs.core.async.close_BANG_(out);
var state_16482__$1 = state_16482;
var statearr_16494_18467 = state_16482__$1;
(statearr_16494_18467[(2)] = inst_16465);

(statearr_16494_18467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16483 === (10))){
var inst_16473 = (state_16482[(2)]);
var state_16482__$1 = (function (){var statearr_16495 = state_16482;
(statearr_16495[(8)] = inst_16473);

return statearr_16495;
})();
var statearr_16496_18471 = state_16482__$1;
(statearr_16496_18471[(2)] = null);

(statearr_16496_18471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16483 === (8))){
var inst_16462 = (state_16482[(7)]);
var state_16482__$1 = state_16482;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16482__$1,(11),out,inst_16462);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12993__auto__ = null;
var cljs$core$async$state_machine__12993__auto____0 = (function (){
var statearr_16497 = [null,null,null,null,null,null,null,null,null];
(statearr_16497[(0)] = cljs$core$async$state_machine__12993__auto__);

(statearr_16497[(1)] = (1));

return statearr_16497;
});
var cljs$core$async$state_machine__12993__auto____1 = (function (state_16482){
while(true){
var ret_value__12994__auto__ = (function (){try{while(true){
var result__12995__auto__ = switch__12992__auto__(state_16482);
if(cljs.core.keyword_identical_QMARK_(result__12995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12995__auto__;
}
break;
}
}catch (e16498){var ex__12996__auto__ = e16498;
var statearr_16499_18472 = state_16482;
(statearr_16499_18472[(2)] = ex__12996__auto__);


if(cljs.core.seq((state_16482[(4)]))){
var statearr_16500_18473 = state_16482;
(statearr_16500_18473[(1)] = cljs.core.first((state_16482[(4)])));

} else {
throw ex__12996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18474 = state_16482;
state_16482 = G__18474;
continue;
} else {
return ret_value__12994__auto__;
}
break;
}
});
cljs$core$async$state_machine__12993__auto__ = function(state_16482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12993__auto____1.call(this,state_16482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12993__auto____0;
cljs$core$async$state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12993__auto____1;
return cljs$core$async$state_machine__12993__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_16501 = f__13705__auto__();
(statearr_16501[(6)] = c__13704__auto___18452);

return statearr_16501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13706__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16503 = arguments.length;
switch (G__16503) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13704__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13705__auto__ = (function (){var switch__12992__auto__ = (function (state_16584){
var state_val_16585 = (state_16584[(1)]);
if((state_val_16585 === (7))){
var inst_16579 = (state_16584[(2)]);
var state_16584__$1 = state_16584;
var statearr_16588_18486 = state_16584__$1;
(statearr_16588_18486[(2)] = inst_16579);

(statearr_16588_18486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16585 === (20))){
var inst_16548 = (state_16584[(7)]);
var inst_16560 = (state_16584[(2)]);
var inst_16561 = cljs.core.next(inst_16548);
var inst_16523 = inst_16561;
var inst_16524 = null;
var inst_16525 = (0);
var inst_16526 = (0);
var state_16584__$1 = (function (){var statearr_16589 = state_16584;
(statearr_16589[(8)] = inst_16560);

(statearr_16589[(9)] = inst_16524);

(statearr_16589[(10)] = inst_16526);

(statearr_16589[(11)] = inst_16523);

(statearr_16589[(12)] = inst_16525);

return statearr_16589;
})();
var statearr_16590_18492 = state_16584__$1;
(statearr_16590_18492[(2)] = null);

(statearr_16590_18492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16585 === (1))){
var state_16584__$1 = state_16584;
var statearr_16591_18494 = state_16584__$1;
(statearr_16591_18494[(2)] = null);

(statearr_16591_18494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16585 === (4))){
var inst_16508 = (state_16584[(13)]);
var inst_16508__$1 = (state_16584[(2)]);
var inst_16509 = (inst_16508__$1 == null);
var state_16584__$1 = (function (){var statearr_16592 = state_16584;
(statearr_16592[(13)] = inst_16508__$1);

return statearr_16592;
})();
if(cljs.core.truth_(inst_16509)){
var statearr_16593_18496 = state_16584__$1;
(statearr_16593_18496[(1)] = (5));

} else {
var statearr_16594_18497 = state_16584__$1;
(statearr_16594_18497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16585 === (15))){
var state_16584__$1 = state_16584;
var statearr_16598_18498 = state_16584__$1;
(statearr_16598_18498[(2)] = null);

(statearr_16598_18498[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16585 === (21))){
var state_16584__$1 = state_16584;
var statearr_16599_18500 = state_16584__$1;
(statearr_16599_18500[(2)] = null);

(statearr_16599_18500[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16585 === (13))){
var inst_16524 = (state_16584[(9)]);
var inst_16526 = (state_16584[(10)]);
var inst_16523 = (state_16584[(11)]);
var inst_16525 = (state_16584[(12)]);
var inst_16543 = (state_16584[(2)]);
var inst_16544 = (inst_16526 + (1));
var tmp16595 = inst_16524;
var tmp16596 = inst_16523;
var tmp16597 = inst_16525;
var inst_16523__$1 = tmp16596;
var inst_16524__$1 = tmp16595;
var inst_16525__$1 = tmp16597;
var inst_16526__$1 = inst_16544;
var state_16584__$1 = (function (){var statearr_16600 = state_16584;
(statearr_16600[(9)] = inst_16524__$1);

(statearr_16600[(10)] = inst_16526__$1);

(statearr_16600[(11)] = inst_16523__$1);

(statearr_16600[(12)] = inst_16525__$1);

(statearr_16600[(14)] = inst_16543);

return statearr_16600;
})();
var statearr_16601_18507 = state_16584__$1;
(statearr_16601_18507[(2)] = null);

(statearr_16601_18507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16585 === (22))){
var state_16584__$1 = state_16584;
var statearr_16602_18509 = state_16584__$1;
(statearr_16602_18509[(2)] = null);

(statearr_16602_18509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16585 === (6))){
var inst_16508 = (state_16584[(13)]);
var inst_16521 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16508) : f.call(null, inst_16508));
var inst_16522 = cljs.core.seq(inst_16521);
var inst_16523 = inst_16522;
var inst_16524 = null;
var inst_16525 = (0);
var inst_16526 = (0);
var state_16584__$1 = (function (){var statearr_16605 = state_16584;
(statearr_16605[(9)] = inst_16524);

(statearr_16605[(10)] = inst_16526);

(statearr_16605[(11)] = inst_16523);

(statearr_16605[(12)] = inst_16525);

return statearr_16605;
})();
var statearr_16607_18511 = state_16584__$1;
(statearr_16607_18511[(2)] = null);

(statearr_16607_18511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16585 === (17))){
var inst_16548 = (state_16584[(7)]);
var inst_16552 = cljs.core.chunk_first(inst_16548);
var inst_16553 = cljs.core.chunk_rest(inst_16548);
var inst_16554 = cljs.core.count(inst_16552);
var inst_16523 = inst_16553;
var inst_16524 = inst_16552;
var inst_16525 = inst_16554;
var inst_16526 = (0);
var state_16584__$1 = (function (){var statearr_16609 = state_16584;
(statearr_16609[(9)] = inst_16524);

(statearr_16609[(10)] = inst_16526);

(statearr_16609[(11)] = inst_16523);

(statearr_16609[(12)] = inst_16525);

return statearr_16609;
})();
var statearr_16610_18530 = state_16584__$1;
(statearr_16610_18530[(2)] = null);

(statearr_16610_18530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16585 === (3))){
var inst_16581 = (state_16584[(2)]);
var state_16584__$1 = state_16584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16584__$1,inst_16581);
} else {
if((state_val_16585 === (12))){
var inst_16569 = (state_16584[(2)]);
var state_16584__$1 = state_16584;
var statearr_16613_18542 = state_16584__$1;
(statearr_16613_18542[(2)] = inst_16569);

(statearr_16613_18542[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16585 === (2))){
var state_16584__$1 = state_16584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16584__$1,(4),in$);
} else {
if((state_val_16585 === (23))){
var inst_16577 = (state_16584[(2)]);
var state_16584__$1 = state_16584;
var statearr_16619_18552 = state_16584__$1;
(statearr_16619_18552[(2)] = inst_16577);

(statearr_16619_18552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16585 === (19))){
var inst_16564 = (state_16584[(2)]);
var state_16584__$1 = state_16584;
var statearr_16629_18564 = state_16584__$1;
(statearr_16629_18564[(2)] = inst_16564);

(statearr_16629_18564[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16585 === (11))){
var inst_16548 = (state_16584[(7)]);
var inst_16523 = (state_16584[(11)]);
var inst_16548__$1 = cljs.core.seq(inst_16523);
var state_16584__$1 = (function (){var statearr_16630 = state_16584;
(statearr_16630[(7)] = inst_16548__$1);

return statearr_16630;
})();
if(inst_16548__$1){
var statearr_16631_18566 = state_16584__$1;
(statearr_16631_18566[(1)] = (14));

} else {
var statearr_16632_18567 = state_16584__$1;
(statearr_16632_18567[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16585 === (9))){
var inst_16571 = (state_16584[(2)]);
var inst_16572 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16584__$1 = (function (){var statearr_16634 = state_16584;
(statearr_16634[(15)] = inst_16571);

return statearr_16634;
})();
if(cljs.core.truth_(inst_16572)){
var statearr_16635_18568 = state_16584__$1;
(statearr_16635_18568[(1)] = (21));

} else {
var statearr_16636_18569 = state_16584__$1;
(statearr_16636_18569[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16585 === (5))){
var inst_16511 = cljs.core.async.close_BANG_(out);
var state_16584__$1 = state_16584;
var statearr_16637_18575 = state_16584__$1;
(statearr_16637_18575[(2)] = inst_16511);

(statearr_16637_18575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16585 === (14))){
var inst_16548 = (state_16584[(7)]);
var inst_16550 = cljs.core.chunked_seq_QMARK_(inst_16548);
var state_16584__$1 = state_16584;
if(inst_16550){
var statearr_16638_18579 = state_16584__$1;
(statearr_16638_18579[(1)] = (17));

} else {
var statearr_16639_18580 = state_16584__$1;
(statearr_16639_18580[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16585 === (16))){
var inst_16567 = (state_16584[(2)]);
var state_16584__$1 = state_16584;
var statearr_16640_18583 = state_16584__$1;
(statearr_16640_18583[(2)] = inst_16567);

(statearr_16640_18583[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16585 === (10))){
var inst_16524 = (state_16584[(9)]);
var inst_16526 = (state_16584[(10)]);
var inst_16541 = cljs.core._nth(inst_16524,inst_16526);
var state_16584__$1 = state_16584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16584__$1,(13),out,inst_16541);
} else {
if((state_val_16585 === (18))){
var inst_16548 = (state_16584[(7)]);
var inst_16558 = cljs.core.first(inst_16548);
var state_16584__$1 = state_16584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16584__$1,(20),out,inst_16558);
} else {
if((state_val_16585 === (8))){
var inst_16526 = (state_16584[(10)]);
var inst_16525 = (state_16584[(12)]);
var inst_16528 = (inst_16526 < inst_16525);
var inst_16529 = inst_16528;
var state_16584__$1 = state_16584;
if(cljs.core.truth_(inst_16529)){
var statearr_16641_18584 = state_16584__$1;
(statearr_16641_18584[(1)] = (10));

} else {
var statearr_16642_18585 = state_16584__$1;
(statearr_16642_18585[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12993__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12993__auto____0 = (function (){
var statearr_16644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16644[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12993__auto__);

(statearr_16644[(1)] = (1));

return statearr_16644;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12993__auto____1 = (function (state_16584){
while(true){
var ret_value__12994__auto__ = (function (){try{while(true){
var result__12995__auto__ = switch__12992__auto__(state_16584);
if(cljs.core.keyword_identical_QMARK_(result__12995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12995__auto__;
}
break;
}
}catch (e16645){var ex__12996__auto__ = e16645;
var statearr_16646_18591 = state_16584;
(statearr_16646_18591[(2)] = ex__12996__auto__);


if(cljs.core.seq((state_16584[(4)]))){
var statearr_16647_18600 = state_16584;
(statearr_16647_18600[(1)] = cljs.core.first((state_16584[(4)])));

} else {
throw ex__12996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18601 = state_16584;
state_16584 = G__18601;
continue;
} else {
return ret_value__12994__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12993__auto__ = function(state_16584){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12993__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12993__auto____1.call(this,state_16584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12993__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12993__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12993__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_16650 = f__13705__auto__();
(statearr_16650[(6)] = c__13704__auto__);

return statearr_16650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13706__auto__);
}));

return c__13704__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16657 = arguments.length;
switch (G__16657) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16661 = arguments.length;
switch (G__16661) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16682 = arguments.length;
switch (G__16682) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13704__auto___18610 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13705__auto__ = (function (){var switch__12992__auto__ = (function (state_16716){
var state_val_16717 = (state_16716[(1)]);
if((state_val_16717 === (7))){
var inst_16711 = (state_16716[(2)]);
var state_16716__$1 = state_16716;
var statearr_16725_18612 = state_16716__$1;
(statearr_16725_18612[(2)] = inst_16711);

(statearr_16725_18612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (1))){
var inst_16684 = null;
var state_16716__$1 = (function (){var statearr_16726 = state_16716;
(statearr_16726[(7)] = inst_16684);

return statearr_16726;
})();
var statearr_16727_18614 = state_16716__$1;
(statearr_16727_18614[(2)] = null);

(statearr_16727_18614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (4))){
var inst_16687 = (state_16716[(8)]);
var inst_16687__$1 = (state_16716[(2)]);
var inst_16697 = (inst_16687__$1 == null);
var inst_16698 = cljs.core.not(inst_16697);
var state_16716__$1 = (function (){var statearr_16735 = state_16716;
(statearr_16735[(8)] = inst_16687__$1);

return statearr_16735;
})();
if(inst_16698){
var statearr_16736_18615 = state_16716__$1;
(statearr_16736_18615[(1)] = (5));

} else {
var statearr_16737_18618 = state_16716__$1;
(statearr_16737_18618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (6))){
var state_16716__$1 = state_16716;
var statearr_16739_18619 = state_16716__$1;
(statearr_16739_18619[(2)] = null);

(statearr_16739_18619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (3))){
var inst_16713 = (state_16716[(2)]);
var inst_16714 = cljs.core.async.close_BANG_(out);
var state_16716__$1 = (function (){var statearr_16740 = state_16716;
(statearr_16740[(9)] = inst_16713);

return statearr_16740;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16716__$1,inst_16714);
} else {
if((state_val_16717 === (2))){
var state_16716__$1 = state_16716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16716__$1,(4),ch);
} else {
if((state_val_16717 === (11))){
var inst_16687 = (state_16716[(8)]);
var inst_16705 = (state_16716[(2)]);
var inst_16684 = inst_16687;
var state_16716__$1 = (function (){var statearr_16749 = state_16716;
(statearr_16749[(10)] = inst_16705);

(statearr_16749[(7)] = inst_16684);

return statearr_16749;
})();
var statearr_16754_18626 = state_16716__$1;
(statearr_16754_18626[(2)] = null);

(statearr_16754_18626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (9))){
var inst_16687 = (state_16716[(8)]);
var state_16716__$1 = state_16716;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16716__$1,(11),out,inst_16687);
} else {
if((state_val_16717 === (5))){
var inst_16687 = (state_16716[(8)]);
var inst_16684 = (state_16716[(7)]);
var inst_16700 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16687,inst_16684);
var state_16716__$1 = state_16716;
if(inst_16700){
var statearr_16763_18631 = state_16716__$1;
(statearr_16763_18631[(1)] = (8));

} else {
var statearr_16764_18632 = state_16716__$1;
(statearr_16764_18632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (10))){
var inst_16708 = (state_16716[(2)]);
var state_16716__$1 = state_16716;
var statearr_16766_18636 = state_16716__$1;
(statearr_16766_18636[(2)] = inst_16708);

(statearr_16766_18636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (8))){
var inst_16684 = (state_16716[(7)]);
var tmp16760 = inst_16684;
var inst_16684__$1 = tmp16760;
var state_16716__$1 = (function (){var statearr_16768 = state_16716;
(statearr_16768[(7)] = inst_16684__$1);

return statearr_16768;
})();
var statearr_16771_18637 = state_16716__$1;
(statearr_16771_18637[(2)] = null);

(statearr_16771_18637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12993__auto__ = null;
var cljs$core$async$state_machine__12993__auto____0 = (function (){
var statearr_16773 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16773[(0)] = cljs$core$async$state_machine__12993__auto__);

(statearr_16773[(1)] = (1));

return statearr_16773;
});
var cljs$core$async$state_machine__12993__auto____1 = (function (state_16716){
while(true){
var ret_value__12994__auto__ = (function (){try{while(true){
var result__12995__auto__ = switch__12992__auto__(state_16716);
if(cljs.core.keyword_identical_QMARK_(result__12995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12995__auto__;
}
break;
}
}catch (e16777){var ex__12996__auto__ = e16777;
var statearr_16778_18638 = state_16716;
(statearr_16778_18638[(2)] = ex__12996__auto__);


if(cljs.core.seq((state_16716[(4)]))){
var statearr_16780_18639 = state_16716;
(statearr_16780_18639[(1)] = cljs.core.first((state_16716[(4)])));

} else {
throw ex__12996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18640 = state_16716;
state_16716 = G__18640;
continue;
} else {
return ret_value__12994__auto__;
}
break;
}
});
cljs$core$async$state_machine__12993__auto__ = function(state_16716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12993__auto____1.call(this,state_16716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12993__auto____0;
cljs$core$async$state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12993__auto____1;
return cljs$core$async$state_machine__12993__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_16783 = f__13705__auto__();
(statearr_16783[(6)] = c__13704__auto___18610);

return statearr_16783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13706__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16788 = arguments.length;
switch (G__16788) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13704__auto___18643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13705__auto__ = (function (){var switch__12992__auto__ = (function (state_16844){
var state_val_16845 = (state_16844[(1)]);
if((state_val_16845 === (7))){
var inst_16840 = (state_16844[(2)]);
var state_16844__$1 = state_16844;
var statearr_16850_18648 = state_16844__$1;
(statearr_16850_18648[(2)] = inst_16840);

(statearr_16850_18648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16845 === (1))){
var inst_16807 = (new Array(n));
var inst_16808 = inst_16807;
var inst_16809 = (0);
var state_16844__$1 = (function (){var statearr_16851 = state_16844;
(statearr_16851[(7)] = inst_16809);

(statearr_16851[(8)] = inst_16808);

return statearr_16851;
})();
var statearr_16853_18650 = state_16844__$1;
(statearr_16853_18650[(2)] = null);

(statearr_16853_18650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16845 === (4))){
var inst_16812 = (state_16844[(9)]);
var inst_16812__$1 = (state_16844[(2)]);
var inst_16813 = (inst_16812__$1 == null);
var inst_16814 = cljs.core.not(inst_16813);
var state_16844__$1 = (function (){var statearr_16858 = state_16844;
(statearr_16858[(9)] = inst_16812__$1);

return statearr_16858;
})();
if(inst_16814){
var statearr_16859_18652 = state_16844__$1;
(statearr_16859_18652[(1)] = (5));

} else {
var statearr_16861_18653 = state_16844__$1;
(statearr_16861_18653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16845 === (15))){
var inst_16834 = (state_16844[(2)]);
var state_16844__$1 = state_16844;
var statearr_16862_18655 = state_16844__$1;
(statearr_16862_18655[(2)] = inst_16834);

(statearr_16862_18655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16845 === (13))){
var state_16844__$1 = state_16844;
var statearr_16863_18657 = state_16844__$1;
(statearr_16863_18657[(2)] = null);

(statearr_16863_18657[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16845 === (6))){
var inst_16809 = (state_16844[(7)]);
var inst_16830 = (inst_16809 > (0));
var state_16844__$1 = state_16844;
if(cljs.core.truth_(inst_16830)){
var statearr_16866_18658 = state_16844__$1;
(statearr_16866_18658[(1)] = (12));

} else {
var statearr_16868_18659 = state_16844__$1;
(statearr_16868_18659[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16845 === (3))){
var inst_16842 = (state_16844[(2)]);
var state_16844__$1 = state_16844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16844__$1,inst_16842);
} else {
if((state_val_16845 === (12))){
var inst_16808 = (state_16844[(8)]);
var inst_16832 = cljs.core.vec(inst_16808);
var state_16844__$1 = state_16844;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16844__$1,(15),out,inst_16832);
} else {
if((state_val_16845 === (2))){
var state_16844__$1 = state_16844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16844__$1,(4),ch);
} else {
if((state_val_16845 === (11))){
var inst_16824 = (state_16844[(2)]);
var inst_16825 = (new Array(n));
var inst_16808 = inst_16825;
var inst_16809 = (0);
var state_16844__$1 = (function (){var statearr_16874 = state_16844;
(statearr_16874[(7)] = inst_16809);

(statearr_16874[(8)] = inst_16808);

(statearr_16874[(10)] = inst_16824);

return statearr_16874;
})();
var statearr_16875_18661 = state_16844__$1;
(statearr_16875_18661[(2)] = null);

(statearr_16875_18661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16845 === (9))){
var inst_16808 = (state_16844[(8)]);
var inst_16822 = cljs.core.vec(inst_16808);
var state_16844__$1 = state_16844;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16844__$1,(11),out,inst_16822);
} else {
if((state_val_16845 === (5))){
var inst_16809 = (state_16844[(7)]);
var inst_16817 = (state_16844[(11)]);
var inst_16808 = (state_16844[(8)]);
var inst_16812 = (state_16844[(9)]);
var inst_16816 = (inst_16808[inst_16809] = inst_16812);
var inst_16817__$1 = (inst_16809 + (1));
var inst_16818 = (inst_16817__$1 < n);
var state_16844__$1 = (function (){var statearr_16877 = state_16844;
(statearr_16877[(11)] = inst_16817__$1);

(statearr_16877[(12)] = inst_16816);

return statearr_16877;
})();
if(cljs.core.truth_(inst_16818)){
var statearr_16881_18666 = state_16844__$1;
(statearr_16881_18666[(1)] = (8));

} else {
var statearr_16882_18667 = state_16844__$1;
(statearr_16882_18667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16845 === (14))){
var inst_16837 = (state_16844[(2)]);
var inst_16838 = cljs.core.async.close_BANG_(out);
var state_16844__$1 = (function (){var statearr_16890 = state_16844;
(statearr_16890[(13)] = inst_16837);

return statearr_16890;
})();
var statearr_16891_18669 = state_16844__$1;
(statearr_16891_18669[(2)] = inst_16838);

(statearr_16891_18669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16845 === (10))){
var inst_16828 = (state_16844[(2)]);
var state_16844__$1 = state_16844;
var statearr_16895_18670 = state_16844__$1;
(statearr_16895_18670[(2)] = inst_16828);

(statearr_16895_18670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16845 === (8))){
var inst_16817 = (state_16844[(11)]);
var inst_16808 = (state_16844[(8)]);
var tmp16883 = inst_16808;
var inst_16808__$1 = tmp16883;
var inst_16809 = inst_16817;
var state_16844__$1 = (function (){var statearr_16897 = state_16844;
(statearr_16897[(7)] = inst_16809);

(statearr_16897[(8)] = inst_16808__$1);

return statearr_16897;
})();
var statearr_16901_18673 = state_16844__$1;
(statearr_16901_18673[(2)] = null);

(statearr_16901_18673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12993__auto__ = null;
var cljs$core$async$state_machine__12993__auto____0 = (function (){
var statearr_16902 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16902[(0)] = cljs$core$async$state_machine__12993__auto__);

(statearr_16902[(1)] = (1));

return statearr_16902;
});
var cljs$core$async$state_machine__12993__auto____1 = (function (state_16844){
while(true){
var ret_value__12994__auto__ = (function (){try{while(true){
var result__12995__auto__ = switch__12992__auto__(state_16844);
if(cljs.core.keyword_identical_QMARK_(result__12995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12995__auto__;
}
break;
}
}catch (e16903){var ex__12996__auto__ = e16903;
var statearr_16910_18676 = state_16844;
(statearr_16910_18676[(2)] = ex__12996__auto__);


if(cljs.core.seq((state_16844[(4)]))){
var statearr_16911_18681 = state_16844;
(statearr_16911_18681[(1)] = cljs.core.first((state_16844[(4)])));

} else {
throw ex__12996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18682 = state_16844;
state_16844 = G__18682;
continue;
} else {
return ret_value__12994__auto__;
}
break;
}
});
cljs$core$async$state_machine__12993__auto__ = function(state_16844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12993__auto____1.call(this,state_16844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12993__auto____0;
cljs$core$async$state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12993__auto____1;
return cljs$core$async$state_machine__12993__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_16921 = f__13705__auto__();
(statearr_16921[(6)] = c__13704__auto___18643);

return statearr_16921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13706__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16924 = arguments.length;
switch (G__16924) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13704__auto___18686 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13705__auto__ = (function (){var switch__12992__auto__ = (function (state_16983){
var state_val_16984 = (state_16983[(1)]);
if((state_val_16984 === (7))){
var inst_16979 = (state_16983[(2)]);
var state_16983__$1 = state_16983;
var statearr_16986_18692 = state_16983__$1;
(statearr_16986_18692[(2)] = inst_16979);

(statearr_16986_18692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16984 === (1))){
var inst_16929 = [];
var inst_16930 = inst_16929;
var inst_16931 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16983__$1 = (function (){var statearr_16988 = state_16983;
(statearr_16988[(7)] = inst_16930);

(statearr_16988[(8)] = inst_16931);

return statearr_16988;
})();
var statearr_16989_18697 = state_16983__$1;
(statearr_16989_18697[(2)] = null);

(statearr_16989_18697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16984 === (4))){
var inst_16934 = (state_16983[(9)]);
var inst_16934__$1 = (state_16983[(2)]);
var inst_16940 = (inst_16934__$1 == null);
var inst_16941 = cljs.core.not(inst_16940);
var state_16983__$1 = (function (){var statearr_16995 = state_16983;
(statearr_16995[(9)] = inst_16934__$1);

return statearr_16995;
})();
if(inst_16941){
var statearr_16996_18699 = state_16983__$1;
(statearr_16996_18699[(1)] = (5));

} else {
var statearr_17009_18700 = state_16983__$1;
(statearr_17009_18700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16984 === (15))){
var inst_16930 = (state_16983[(7)]);
var inst_16971 = cljs.core.vec(inst_16930);
var state_16983__$1 = state_16983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16983__$1,(18),out,inst_16971);
} else {
if((state_val_16984 === (13))){
var inst_16966 = (state_16983[(2)]);
var state_16983__$1 = state_16983;
var statearr_17011_18705 = state_16983__$1;
(statearr_17011_18705[(2)] = inst_16966);

(statearr_17011_18705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16984 === (6))){
var inst_16930 = (state_16983[(7)]);
var inst_16968 = inst_16930.length;
var inst_16969 = (inst_16968 > (0));
var state_16983__$1 = state_16983;
if(cljs.core.truth_(inst_16969)){
var statearr_17012_18706 = state_16983__$1;
(statearr_17012_18706[(1)] = (15));

} else {
var statearr_17013_18708 = state_16983__$1;
(statearr_17013_18708[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16984 === (17))){
var inst_16976 = (state_16983[(2)]);
var inst_16977 = cljs.core.async.close_BANG_(out);
var state_16983__$1 = (function (){var statearr_17018 = state_16983;
(statearr_17018[(10)] = inst_16976);

return statearr_17018;
})();
var statearr_17019_18710 = state_16983__$1;
(statearr_17019_18710[(2)] = inst_16977);

(statearr_17019_18710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16984 === (3))){
var inst_16981 = (state_16983[(2)]);
var state_16983__$1 = state_16983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16983__$1,inst_16981);
} else {
if((state_val_16984 === (12))){
var inst_16930 = (state_16983[(7)]);
var inst_16959 = cljs.core.vec(inst_16930);
var state_16983__$1 = state_16983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16983__$1,(14),out,inst_16959);
} else {
if((state_val_16984 === (2))){
var state_16983__$1 = state_16983;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16983__$1,(4),ch);
} else {
if((state_val_16984 === (11))){
var inst_16943 = (state_16983[(11)]);
var inst_16930 = (state_16983[(7)]);
var inst_16934 = (state_16983[(9)]);
var inst_16956 = inst_16930.push(inst_16934);
var tmp17021 = inst_16930;
var inst_16930__$1 = tmp17021;
var inst_16931 = inst_16943;
var state_16983__$1 = (function (){var statearr_17031 = state_16983;
(statearr_17031[(7)] = inst_16930__$1);

(statearr_17031[(8)] = inst_16931);

(statearr_17031[(12)] = inst_16956);

return statearr_17031;
})();
var statearr_17032_18712 = state_16983__$1;
(statearr_17032_18712[(2)] = null);

(statearr_17032_18712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16984 === (9))){
var inst_16931 = (state_16983[(8)]);
var inst_16947 = cljs.core.keyword_identical_QMARK_(inst_16931,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_16983__$1 = state_16983;
var statearr_17036_18713 = state_16983__$1;
(statearr_17036_18713[(2)] = inst_16947);

(statearr_17036_18713[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16984 === (5))){
var inst_16944 = (state_16983[(13)]);
var inst_16943 = (state_16983[(11)]);
var inst_16931 = (state_16983[(8)]);
var inst_16934 = (state_16983[(9)]);
var inst_16943__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16934) : f.call(null, inst_16934));
var inst_16944__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16943__$1,inst_16931);
var state_16983__$1 = (function (){var statearr_17037 = state_16983;
(statearr_17037[(13)] = inst_16944__$1);

(statearr_17037[(11)] = inst_16943__$1);

return statearr_17037;
})();
if(inst_16944__$1){
var statearr_17038_18714 = state_16983__$1;
(statearr_17038_18714[(1)] = (8));

} else {
var statearr_17039_18715 = state_16983__$1;
(statearr_17039_18715[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16984 === (14))){
var inst_16943 = (state_16983[(11)]);
var inst_16934 = (state_16983[(9)]);
var inst_16961 = (state_16983[(2)]);
var inst_16962 = [];
var inst_16963 = inst_16962.push(inst_16934);
var inst_16930 = inst_16962;
var inst_16931 = inst_16943;
var state_16983__$1 = (function (){var statearr_17040 = state_16983;
(statearr_17040[(14)] = inst_16961);

(statearr_17040[(15)] = inst_16963);

(statearr_17040[(7)] = inst_16930);

(statearr_17040[(8)] = inst_16931);

return statearr_17040;
})();
var statearr_17044_18716 = state_16983__$1;
(statearr_17044_18716[(2)] = null);

(statearr_17044_18716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16984 === (16))){
var state_16983__$1 = state_16983;
var statearr_17045_18717 = state_16983__$1;
(statearr_17045_18717[(2)] = null);

(statearr_17045_18717[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16984 === (10))){
var inst_16949 = (state_16983[(2)]);
var state_16983__$1 = state_16983;
if(cljs.core.truth_(inst_16949)){
var statearr_17046_18718 = state_16983__$1;
(statearr_17046_18718[(1)] = (11));

} else {
var statearr_17047_18719 = state_16983__$1;
(statearr_17047_18719[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16984 === (18))){
var inst_16973 = (state_16983[(2)]);
var state_16983__$1 = state_16983;
var statearr_17048_18724 = state_16983__$1;
(statearr_17048_18724[(2)] = inst_16973);

(statearr_17048_18724[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16984 === (8))){
var inst_16944 = (state_16983[(13)]);
var state_16983__$1 = state_16983;
var statearr_17049_18725 = state_16983__$1;
(statearr_17049_18725[(2)] = inst_16944);

(statearr_17049_18725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12993__auto__ = null;
var cljs$core$async$state_machine__12993__auto____0 = (function (){
var statearr_17060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17060[(0)] = cljs$core$async$state_machine__12993__auto__);

(statearr_17060[(1)] = (1));

return statearr_17060;
});
var cljs$core$async$state_machine__12993__auto____1 = (function (state_16983){
while(true){
var ret_value__12994__auto__ = (function (){try{while(true){
var result__12995__auto__ = switch__12992__auto__(state_16983);
if(cljs.core.keyword_identical_QMARK_(result__12995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12995__auto__;
}
break;
}
}catch (e17061){var ex__12996__auto__ = e17061;
var statearr_17065_18729 = state_16983;
(statearr_17065_18729[(2)] = ex__12996__auto__);


if(cljs.core.seq((state_16983[(4)]))){
var statearr_17066_18730 = state_16983;
(statearr_17066_18730[(1)] = cljs.core.first((state_16983[(4)])));

} else {
throw ex__12996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18731 = state_16983;
state_16983 = G__18731;
continue;
} else {
return ret_value__12994__auto__;
}
break;
}
});
cljs$core$async$state_machine__12993__auto__ = function(state_16983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12993__auto____1.call(this,state_16983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12993__auto____0;
cljs$core$async$state_machine__12993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12993__auto____1;
return cljs$core$async$state_machine__12993__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_17071 = f__13705__auto__();
(statearr_17071[(6)] = c__13704__auto___18686);

return statearr_17071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13706__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
