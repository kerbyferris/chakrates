// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args33608 = [];
var len__26134__auto___33614 = arguments.length;
var i__26135__auto___33615 = (0);
while(true){
if((i__26135__auto___33615 < len__26134__auto___33614)){
args33608.push((arguments[i__26135__auto___33615]));

var G__33616 = (i__26135__auto___33615 + (1));
i__26135__auto___33615 = G__33616;
continue;
} else {
}
break;
}

var G__33610 = args33608.length;
switch (G__33610) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33608.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async33611 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33611 = (function (f,blockable,meta33612){
this.f = f;
this.blockable = blockable;
this.meta33612 = meta33612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33613,meta33612__$1){
var self__ = this;
var _33613__$1 = this;
return (new cljs.core.async.t_cljs$core$async33611(self__.f,self__.blockable,meta33612__$1));
});

cljs.core.async.t_cljs$core$async33611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33613){
var self__ = this;
var _33613__$1 = this;
return self__.meta33612;
});

cljs.core.async.t_cljs$core$async33611.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33611.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33611.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33611.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta33612], null);
});

cljs.core.async.t_cljs$core$async33611.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33611";

cljs.core.async.t_cljs$core$async33611.cljs$lang$ctorPrWriter = (function (this__25665__auto__,writer__25666__auto__,opt__25667__auto__){
return cljs.core._write(writer__25666__auto__,"cljs.core.async/t_cljs$core$async33611");
});

cljs.core.async.__GT_t_cljs$core$async33611 = (function cljs$core$async$__GT_t_cljs$core$async33611(f__$1,blockable__$1,meta33612){
return (new cljs.core.async.t_cljs$core$async33611(f__$1,blockable__$1,meta33612));
});

}

return (new cljs.core.async.t_cljs$core$async33611(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
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
var args33620 = [];
var len__26134__auto___33623 = arguments.length;
var i__26135__auto___33624 = (0);
while(true){
if((i__26135__auto___33624 < len__26134__auto___33623)){
args33620.push((arguments[i__26135__auto___33624]));

var G__33625 = (i__26135__auto___33624 + (1));
i__26135__auto___33624 = G__33625;
continue;
} else {
}
break;
}

var G__33622 = args33620.length;
switch (G__33622) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33620.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args33627 = [];
var len__26134__auto___33630 = arguments.length;
var i__26135__auto___33631 = (0);
while(true){
if((i__26135__auto___33631 < len__26134__auto___33630)){
args33627.push((arguments[i__26135__auto___33631]));

var G__33632 = (i__26135__auto___33631 + (1));
i__26135__auto___33631 = G__33632;
continue;
} else {
}
break;
}

var G__33629 = args33627.length;
switch (G__33629) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33627.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var args33634 = [];
var len__26134__auto___33637 = arguments.length;
var i__26135__auto___33638 = (0);
while(true){
if((i__26135__auto___33638 < len__26134__auto___33637)){
args33634.push((arguments[i__26135__auto___33638]));

var G__33639 = (i__26135__auto___33638 + (1));
i__26135__auto___33638 = G__33639;
continue;
} else {
}
break;
}

var G__33636 = args33634.length;
switch (G__33636) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33634.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33641 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33641) : fn1.call(null,val_33641));
} else {
cljs.core.async.impl.dispatch.run(((function (val_33641,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33641) : fn1.call(null,val_33641));
});})(val_33641,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

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
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args33642 = [];
var len__26134__auto___33645 = arguments.length;
var i__26135__auto___33646 = (0);
while(true){
if((i__26135__auto___33646 < len__26134__auto___33645)){
args33642.push((arguments[i__26135__auto___33646]));

var G__33647 = (i__26135__auto___33646 + (1));
i__26135__auto___33646 = G__33647;
continue;
} else {
}
break;
}

var G__33644 = args33642.length;
switch (G__33644) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33642.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25974__auto___33649 = n;
var x_33650 = (0);
while(true){
if((x_33650 < n__25974__auto___33649)){
(a[x_33650] = (0));

var G__33651 = (x_33650 + (1));
x_33650 = G__33651;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__33652 = (i + (1));
i = G__33652;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async33656 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33656 = (function (alt_flag,flag,meta33657){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta33657 = meta33657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33658,meta33657__$1){
var self__ = this;
var _33658__$1 = this;
return (new cljs.core.async.t_cljs$core$async33656(self__.alt_flag,self__.flag,meta33657__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33656.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33658){
var self__ = this;
var _33658__$1 = this;
return self__.meta33657;
});})(flag))
;

cljs.core.async.t_cljs$core$async33656.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33656.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async33656.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33656.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33656.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta33657], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33656.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33656";

cljs.core.async.t_cljs$core$async33656.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25665__auto__,writer__25666__auto__,opt__25667__auto__){
return cljs.core._write(writer__25666__auto__,"cljs.core.async/t_cljs$core$async33656");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33656 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33656(alt_flag__$1,flag__$1,meta33657){
return (new cljs.core.async.t_cljs$core$async33656(alt_flag__$1,flag__$1,meta33657));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33656(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33662 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33662 = (function (alt_handler,flag,cb,meta33663){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta33663 = meta33663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33664,meta33663__$1){
var self__ = this;
var _33664__$1 = this;
return (new cljs.core.async.t_cljs$core$async33662(self__.alt_handler,self__.flag,self__.cb,meta33663__$1));
});

cljs.core.async.t_cljs$core$async33662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33664){
var self__ = this;
var _33664__$1 = this;
return self__.meta33663;
});

cljs.core.async.t_cljs$core$async33662.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33662.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async33662.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33662.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta33663], null);
});

cljs.core.async.t_cljs$core$async33662.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33662.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33662";

cljs.core.async.t_cljs$core$async33662.cljs$lang$ctorPrWriter = (function (this__25665__auto__,writer__25666__auto__,opt__25667__auto__){
return cljs.core._write(writer__25666__auto__,"cljs.core.async/t_cljs$core$async33662");
});

cljs.core.async.__GT_t_cljs$core$async33662 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33662(alt_handler__$1,flag__$1,cb__$1,meta33663){
return (new cljs.core.async.t_cljs$core$async33662(alt_handler__$1,flag__$1,cb__$1,meta33663));
});

}

return (new cljs.core.async.t_cljs$core$async33662(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33665_SHARP_){
var G__33669 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33665_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33669) : fret.call(null,G__33669));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33666_SHARP_){
var G__33670 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33666_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33670) : fret.call(null,G__33670));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__25059__auto__ = wport;
if(cljs.core.truth_(or__25059__auto__)){
return or__25059__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33671 = (i + (1));
i = G__33671;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25059__auto__ = ret;
if(cljs.core.truth_(or__25059__auto__)){
return or__25059__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__25047__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__25047__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__25047__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var args__26141__auto__ = [];
var len__26134__auto___33677 = arguments.length;
var i__26135__auto___33678 = (0);
while(true){
if((i__26135__auto___33678 < len__26134__auto___33677)){
args__26141__auto__.push((arguments[i__26135__auto___33678]));

var G__33679 = (i__26135__auto___33678 + (1));
i__26135__auto___33678 = G__33679;
continue;
} else {
}
break;
}

var argseq__26142__auto__ = ((((1) < args__26141__auto__.length))?(new cljs.core.IndexedSeq(args__26141__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26142__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33674){
var map__33675 = p__33674;
var map__33675__$1 = ((((!((map__33675 == null)))?((((map__33675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33675):map__33675);
var opts = map__33675__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33672){
var G__33673 = cljs.core.first(seq33672);
var seq33672__$1 = cljs.core.next(seq33672);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33673,seq33672__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
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
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
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
var args33680 = [];
var len__26134__auto___33730 = arguments.length;
var i__26135__auto___33731 = (0);
while(true){
if((i__26135__auto___33731 < len__26134__auto___33730)){
args33680.push((arguments[i__26135__auto___33731]));

var G__33732 = (i__26135__auto___33731 + (1));
i__26135__auto___33731 = G__33732;
continue;
} else {
}
break;
}

var G__33682 = args33680.length;
switch (G__33682) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33680.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33563__auto___33734 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33563__auto___33734){
return (function (){
var f__33564__auto__ = (function (){var switch__33439__auto__ = ((function (c__33563__auto___33734){
return (function (state_33706){
var state_val_33707 = (state_33706[(1)]);
if((state_val_33707 === (7))){
var inst_33702 = (state_33706[(2)]);
var state_33706__$1 = state_33706;
var statearr_33708_33735 = state_33706__$1;
(statearr_33708_33735[(2)] = inst_33702);

(statearr_33708_33735[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33707 === (1))){
var state_33706__$1 = state_33706;
var statearr_33709_33736 = state_33706__$1;
(statearr_33709_33736[(2)] = null);

(statearr_33709_33736[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33707 === (4))){
var inst_33685 = (state_33706[(7)]);
var inst_33685__$1 = (state_33706[(2)]);
var inst_33686 = (inst_33685__$1 == null);
var state_33706__$1 = (function (){var statearr_33710 = state_33706;
(statearr_33710[(7)] = inst_33685__$1);

return statearr_33710;
})();
if(cljs.core.truth_(inst_33686)){
var statearr_33711_33737 = state_33706__$1;
(statearr_33711_33737[(1)] = (5));

} else {
var statearr_33712_33738 = state_33706__$1;
(statearr_33712_33738[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33707 === (13))){
var state_33706__$1 = state_33706;
var statearr_33713_33739 = state_33706__$1;
(statearr_33713_33739[(2)] = null);

(statearr_33713_33739[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33707 === (6))){
var inst_33685 = (state_33706[(7)]);
var state_33706__$1 = state_33706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33706__$1,(11),to,inst_33685);
} else {
if((state_val_33707 === (3))){
var inst_33704 = (state_33706[(2)]);
var state_33706__$1 = state_33706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33706__$1,inst_33704);
} else {
if((state_val_33707 === (12))){
var state_33706__$1 = state_33706;
var statearr_33714_33740 = state_33706__$1;
(statearr_33714_33740[(2)] = null);

(statearr_33714_33740[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33707 === (2))){
var state_33706__$1 = state_33706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33706__$1,(4),from);
} else {
if((state_val_33707 === (11))){
var inst_33695 = (state_33706[(2)]);
var state_33706__$1 = state_33706;
if(cljs.core.truth_(inst_33695)){
var statearr_33715_33741 = state_33706__$1;
(statearr_33715_33741[(1)] = (12));

} else {
var statearr_33716_33742 = state_33706__$1;
(statearr_33716_33742[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33707 === (9))){
var state_33706__$1 = state_33706;
var statearr_33717_33743 = state_33706__$1;
(statearr_33717_33743[(2)] = null);

(statearr_33717_33743[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33707 === (5))){
var state_33706__$1 = state_33706;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33718_33744 = state_33706__$1;
(statearr_33718_33744[(1)] = (8));

} else {
var statearr_33719_33745 = state_33706__$1;
(statearr_33719_33745[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33707 === (14))){
var inst_33700 = (state_33706[(2)]);
var state_33706__$1 = state_33706;
var statearr_33720_33746 = state_33706__$1;
(statearr_33720_33746[(2)] = inst_33700);

(statearr_33720_33746[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33707 === (10))){
var inst_33692 = (state_33706[(2)]);
var state_33706__$1 = state_33706;
var statearr_33721_33747 = state_33706__$1;
(statearr_33721_33747[(2)] = inst_33692);

(statearr_33721_33747[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33707 === (8))){
var inst_33689 = cljs.core.async.close_BANG_(to);
var state_33706__$1 = state_33706;
var statearr_33722_33748 = state_33706__$1;
(statearr_33722_33748[(2)] = inst_33689);

(statearr_33722_33748[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__33563__auto___33734))
;
return ((function (switch__33439__auto__,c__33563__auto___33734){
return (function() {
var cljs$core$async$state_machine__33440__auto__ = null;
var cljs$core$async$state_machine__33440__auto____0 = (function (){
var statearr_33726 = [null,null,null,null,null,null,null,null];
(statearr_33726[(0)] = cljs$core$async$state_machine__33440__auto__);

(statearr_33726[(1)] = (1));

return statearr_33726;
});
var cljs$core$async$state_machine__33440__auto____1 = (function (state_33706){
while(true){
var ret_value__33441__auto__ = (function (){try{while(true){
var result__33442__auto__ = switch__33439__auto__(state_33706);
if(cljs.core.keyword_identical_QMARK_(result__33442__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__33442__auto__;
}
break;
}
}catch (e33727){if((e33727 instanceof Object)){
var ex__33443__auto__ = e33727;
var statearr_33728_33749 = state_33706;
(statearr_33728_33749[(5)] = ex__33443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33706);

return cljs.core.cst$kw$recur;
} else {
throw e33727;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33441__auto__,cljs.core.cst$kw$recur)){
var G__33750 = state_33706;
state_33706 = G__33750;
continue;
} else {
return ret_value__33441__auto__;
}
break;
}
});
cljs$core$async$state_machine__33440__auto__ = function(state_33706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33440__auto____1.call(this,state_33706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33440__auto____0;
cljs$core$async$state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33440__auto____1;
return cljs$core$async$state_machine__33440__auto__;
})()
;})(switch__33439__auto__,c__33563__auto___33734))
})();
var state__33565__auto__ = (function (){var statearr_33729 = (f__33564__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33564__auto__.cljs$core$IFn$_invoke$arity$0() : f__33564__auto__.call(null));
(statearr_33729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33563__auto___33734);

return statearr_33729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
});})(c__33563__auto___33734))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__33938){
var vec__33939 = p__33938;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33939,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33939,(1),null);
var job = vec__33939;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33563__auto___34125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33563__auto___34125,res,vec__33939,v,p,job,jobs,results){
return (function (){
var f__33564__auto__ = (function (){var switch__33439__auto__ = ((function (c__33563__auto___34125,res,vec__33939,v,p,job,jobs,results){
return (function (state_33946){
var state_val_33947 = (state_33946[(1)]);
if((state_val_33947 === (1))){
var state_33946__$1 = state_33946;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33946__$1,(2),res,v);
} else {
if((state_val_33947 === (2))){
var inst_33943 = (state_33946[(2)]);
var inst_33944 = cljs.core.async.close_BANG_(res);
var state_33946__$1 = (function (){var statearr_33948 = state_33946;
(statearr_33948[(7)] = inst_33943);

return statearr_33948;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33946__$1,inst_33944);
} else {
return null;
}
}
});})(c__33563__auto___34125,res,vec__33939,v,p,job,jobs,results))
;
return ((function (switch__33439__auto__,c__33563__auto___34125,res,vec__33939,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____0 = (function (){
var statearr_33952 = [null,null,null,null,null,null,null,null];
(statearr_33952[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__);

(statearr_33952[(1)] = (1));

return statearr_33952;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____1 = (function (state_33946){
while(true){
var ret_value__33441__auto__ = (function (){try{while(true){
var result__33442__auto__ = switch__33439__auto__(state_33946);
if(cljs.core.keyword_identical_QMARK_(result__33442__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__33442__auto__;
}
break;
}
}catch (e33953){if((e33953 instanceof Object)){
var ex__33443__auto__ = e33953;
var statearr_33954_34126 = state_33946;
(statearr_33954_34126[(5)] = ex__33443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33946);

return cljs.core.cst$kw$recur;
} else {
throw e33953;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33441__auto__,cljs.core.cst$kw$recur)){
var G__34127 = state_33946;
state_33946 = G__34127;
continue;
} else {
return ret_value__33441__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__ = function(state_33946){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____1.call(this,state_33946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__;
})()
;})(switch__33439__auto__,c__33563__auto___34125,res,vec__33939,v,p,job,jobs,results))
})();
var state__33565__auto__ = (function (){var statearr_33955 = (f__33564__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33564__auto__.cljs$core$IFn$_invoke$arity$0() : f__33564__auto__.call(null));
(statearr_33955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33563__auto___34125);

return statearr_33955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
});})(c__33563__auto___34125,res,vec__33939,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33956){
var vec__33957 = p__33956;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33957,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33957,(1),null);
var job = vec__33957;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__25974__auto___34128 = n;
var __34129 = (0);
while(true){
if((__34129 < n__25974__auto___34128)){
var G__33960_34130 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__33960_34130) {
case "compute":
var c__33563__auto___34132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34129,c__33563__auto___34132,G__33960_34130,n__25974__auto___34128,jobs,results,process,async){
return (function (){
var f__33564__auto__ = (function (){var switch__33439__auto__ = ((function (__34129,c__33563__auto___34132,G__33960_34130,n__25974__auto___34128,jobs,results,process,async){
return (function (state_33973){
var state_val_33974 = (state_33973[(1)]);
if((state_val_33974 === (1))){
var state_33973__$1 = state_33973;
var statearr_33975_34133 = state_33973__$1;
(statearr_33975_34133[(2)] = null);

(statearr_33975_34133[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33974 === (2))){
var state_33973__$1 = state_33973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33973__$1,(4),jobs);
} else {
if((state_val_33974 === (3))){
var inst_33971 = (state_33973[(2)]);
var state_33973__$1 = state_33973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33973__$1,inst_33971);
} else {
if((state_val_33974 === (4))){
var inst_33963 = (state_33973[(2)]);
var inst_33964 = process(inst_33963);
var state_33973__$1 = state_33973;
if(cljs.core.truth_(inst_33964)){
var statearr_33976_34134 = state_33973__$1;
(statearr_33976_34134[(1)] = (5));

} else {
var statearr_33977_34135 = state_33973__$1;
(statearr_33977_34135[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33974 === (5))){
var state_33973__$1 = state_33973;
var statearr_33978_34136 = state_33973__$1;
(statearr_33978_34136[(2)] = null);

(statearr_33978_34136[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33974 === (6))){
var state_33973__$1 = state_33973;
var statearr_33979_34137 = state_33973__$1;
(statearr_33979_34137[(2)] = null);

(statearr_33979_34137[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33974 === (7))){
var inst_33969 = (state_33973[(2)]);
var state_33973__$1 = state_33973;
var statearr_33980_34138 = state_33973__$1;
(statearr_33980_34138[(2)] = inst_33969);

(statearr_33980_34138[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__34129,c__33563__auto___34132,G__33960_34130,n__25974__auto___34128,jobs,results,process,async))
;
return ((function (__34129,switch__33439__auto__,c__33563__auto___34132,G__33960_34130,n__25974__auto___34128,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____0 = (function (){
var statearr_33984 = [null,null,null,null,null,null,null];
(statearr_33984[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__);

(statearr_33984[(1)] = (1));

return statearr_33984;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____1 = (function (state_33973){
while(true){
var ret_value__33441__auto__ = (function (){try{while(true){
var result__33442__auto__ = switch__33439__auto__(state_33973);
if(cljs.core.keyword_identical_QMARK_(result__33442__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__33442__auto__;
}
break;
}
}catch (e33985){if((e33985 instanceof Object)){
var ex__33443__auto__ = e33985;
var statearr_33986_34139 = state_33973;
(statearr_33986_34139[(5)] = ex__33443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33973);

return cljs.core.cst$kw$recur;
} else {
throw e33985;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33441__auto__,cljs.core.cst$kw$recur)){
var G__34140 = state_33973;
state_33973 = G__34140;
continue;
} else {
return ret_value__33441__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__ = function(state_33973){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____1.call(this,state_33973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__;
})()
;})(__34129,switch__33439__auto__,c__33563__auto___34132,G__33960_34130,n__25974__auto___34128,jobs,results,process,async))
})();
var state__33565__auto__ = (function (){var statearr_33987 = (f__33564__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33564__auto__.cljs$core$IFn$_invoke$arity$0() : f__33564__auto__.call(null));
(statearr_33987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33563__auto___34132);

return statearr_33987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
});})(__34129,c__33563__auto___34132,G__33960_34130,n__25974__auto___34128,jobs,results,process,async))
);


break;
case "async":
var c__33563__auto___34141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34129,c__33563__auto___34141,G__33960_34130,n__25974__auto___34128,jobs,results,process,async){
return (function (){
var f__33564__auto__ = (function (){var switch__33439__auto__ = ((function (__34129,c__33563__auto___34141,G__33960_34130,n__25974__auto___34128,jobs,results,process,async){
return (function (state_34000){
var state_val_34001 = (state_34000[(1)]);
if((state_val_34001 === (1))){
var state_34000__$1 = state_34000;
var statearr_34002_34142 = state_34000__$1;
(statearr_34002_34142[(2)] = null);

(statearr_34002_34142[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34001 === (2))){
var state_34000__$1 = state_34000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34000__$1,(4),jobs);
} else {
if((state_val_34001 === (3))){
var inst_33998 = (state_34000[(2)]);
var state_34000__$1 = state_34000;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34000__$1,inst_33998);
} else {
if((state_val_34001 === (4))){
var inst_33990 = (state_34000[(2)]);
var inst_33991 = async(inst_33990);
var state_34000__$1 = state_34000;
if(cljs.core.truth_(inst_33991)){
var statearr_34003_34143 = state_34000__$1;
(statearr_34003_34143[(1)] = (5));

} else {
var statearr_34004_34144 = state_34000__$1;
(statearr_34004_34144[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34001 === (5))){
var state_34000__$1 = state_34000;
var statearr_34005_34145 = state_34000__$1;
(statearr_34005_34145[(2)] = null);

(statearr_34005_34145[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34001 === (6))){
var state_34000__$1 = state_34000;
var statearr_34006_34146 = state_34000__$1;
(statearr_34006_34146[(2)] = null);

(statearr_34006_34146[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34001 === (7))){
var inst_33996 = (state_34000[(2)]);
var state_34000__$1 = state_34000;
var statearr_34007_34147 = state_34000__$1;
(statearr_34007_34147[(2)] = inst_33996);

(statearr_34007_34147[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__34129,c__33563__auto___34141,G__33960_34130,n__25974__auto___34128,jobs,results,process,async))
;
return ((function (__34129,switch__33439__auto__,c__33563__auto___34141,G__33960_34130,n__25974__auto___34128,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____0 = (function (){
var statearr_34011 = [null,null,null,null,null,null,null];
(statearr_34011[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__);

(statearr_34011[(1)] = (1));

return statearr_34011;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____1 = (function (state_34000){
while(true){
var ret_value__33441__auto__ = (function (){try{while(true){
var result__33442__auto__ = switch__33439__auto__(state_34000);
if(cljs.core.keyword_identical_QMARK_(result__33442__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__33442__auto__;
}
break;
}
}catch (e34012){if((e34012 instanceof Object)){
var ex__33443__auto__ = e34012;
var statearr_34013_34148 = state_34000;
(statearr_34013_34148[(5)] = ex__33443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34000);

return cljs.core.cst$kw$recur;
} else {
throw e34012;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33441__auto__,cljs.core.cst$kw$recur)){
var G__34149 = state_34000;
state_34000 = G__34149;
continue;
} else {
return ret_value__33441__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__ = function(state_34000){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____1.call(this,state_34000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__;
})()
;})(__34129,switch__33439__auto__,c__33563__auto___34141,G__33960_34130,n__25974__auto___34128,jobs,results,process,async))
})();
var state__33565__auto__ = (function (){var statearr_34014 = (f__33564__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33564__auto__.cljs$core$IFn$_invoke$arity$0() : f__33564__auto__.call(null));
(statearr_34014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33563__auto___34141);

return statearr_34014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
});})(__34129,c__33563__auto___34141,G__33960_34130,n__25974__auto___34128,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__34150 = (__34129 + (1));
__34129 = G__34150;
continue;
} else {
}
break;
}

var c__33563__auto___34151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33563__auto___34151,jobs,results,process,async){
return (function (){
var f__33564__auto__ = (function (){var switch__33439__auto__ = ((function (c__33563__auto___34151,jobs,results,process,async){
return (function (state_34036){
var state_val_34037 = (state_34036[(1)]);
if((state_val_34037 === (1))){
var state_34036__$1 = state_34036;
var statearr_34038_34152 = state_34036__$1;
(statearr_34038_34152[(2)] = null);

(statearr_34038_34152[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34037 === (2))){
var state_34036__$1 = state_34036;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34036__$1,(4),from);
} else {
if((state_val_34037 === (3))){
var inst_34034 = (state_34036[(2)]);
var state_34036__$1 = state_34036;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34036__$1,inst_34034);
} else {
if((state_val_34037 === (4))){
var inst_34017 = (state_34036[(7)]);
var inst_34017__$1 = (state_34036[(2)]);
var inst_34018 = (inst_34017__$1 == null);
var state_34036__$1 = (function (){var statearr_34039 = state_34036;
(statearr_34039[(7)] = inst_34017__$1);

return statearr_34039;
})();
if(cljs.core.truth_(inst_34018)){
var statearr_34040_34153 = state_34036__$1;
(statearr_34040_34153[(1)] = (5));

} else {
var statearr_34041_34154 = state_34036__$1;
(statearr_34041_34154[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34037 === (5))){
var inst_34020 = cljs.core.async.close_BANG_(jobs);
var state_34036__$1 = state_34036;
var statearr_34042_34155 = state_34036__$1;
(statearr_34042_34155[(2)] = inst_34020);

(statearr_34042_34155[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34037 === (6))){
var inst_34017 = (state_34036[(7)]);
var inst_34022 = (state_34036[(8)]);
var inst_34022__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34023 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34024 = [inst_34017,inst_34022__$1];
var inst_34025 = (new cljs.core.PersistentVector(null,2,(5),inst_34023,inst_34024,null));
var state_34036__$1 = (function (){var statearr_34043 = state_34036;
(statearr_34043[(8)] = inst_34022__$1);

return statearr_34043;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34036__$1,(8),jobs,inst_34025);
} else {
if((state_val_34037 === (7))){
var inst_34032 = (state_34036[(2)]);
var state_34036__$1 = state_34036;
var statearr_34044_34156 = state_34036__$1;
(statearr_34044_34156[(2)] = inst_34032);

(statearr_34044_34156[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34037 === (8))){
var inst_34022 = (state_34036[(8)]);
var inst_34027 = (state_34036[(2)]);
var state_34036__$1 = (function (){var statearr_34045 = state_34036;
(statearr_34045[(9)] = inst_34027);

return statearr_34045;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34036__$1,(9),results,inst_34022);
} else {
if((state_val_34037 === (9))){
var inst_34029 = (state_34036[(2)]);
var state_34036__$1 = (function (){var statearr_34046 = state_34036;
(statearr_34046[(10)] = inst_34029);

return statearr_34046;
})();
var statearr_34047_34157 = state_34036__$1;
(statearr_34047_34157[(2)] = null);

(statearr_34047_34157[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__33563__auto___34151,jobs,results,process,async))
;
return ((function (switch__33439__auto__,c__33563__auto___34151,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____0 = (function (){
var statearr_34051 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34051[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__);

(statearr_34051[(1)] = (1));

return statearr_34051;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____1 = (function (state_34036){
while(true){
var ret_value__33441__auto__ = (function (){try{while(true){
var result__33442__auto__ = switch__33439__auto__(state_34036);
if(cljs.core.keyword_identical_QMARK_(result__33442__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__33442__auto__;
}
break;
}
}catch (e34052){if((e34052 instanceof Object)){
var ex__33443__auto__ = e34052;
var statearr_34053_34158 = state_34036;
(statearr_34053_34158[(5)] = ex__33443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34036);

return cljs.core.cst$kw$recur;
} else {
throw e34052;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33441__auto__,cljs.core.cst$kw$recur)){
var G__34159 = state_34036;
state_34036 = G__34159;
continue;
} else {
return ret_value__33441__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__ = function(state_34036){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____1.call(this,state_34036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__;
})()
;})(switch__33439__auto__,c__33563__auto___34151,jobs,results,process,async))
})();
var state__33565__auto__ = (function (){var statearr_34054 = (f__33564__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33564__auto__.cljs$core$IFn$_invoke$arity$0() : f__33564__auto__.call(null));
(statearr_34054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33563__auto___34151);

return statearr_34054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
});})(c__33563__auto___34151,jobs,results,process,async))
);


var c__33563__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33563__auto__,jobs,results,process,async){
return (function (){
var f__33564__auto__ = (function (){var switch__33439__auto__ = ((function (c__33563__auto__,jobs,results,process,async){
return (function (state_34092){
var state_val_34093 = (state_34092[(1)]);
if((state_val_34093 === (7))){
var inst_34088 = (state_34092[(2)]);
var state_34092__$1 = state_34092;
var statearr_34094_34160 = state_34092__$1;
(statearr_34094_34160[(2)] = inst_34088);

(statearr_34094_34160[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34093 === (20))){
var state_34092__$1 = state_34092;
var statearr_34095_34161 = state_34092__$1;
(statearr_34095_34161[(2)] = null);

(statearr_34095_34161[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34093 === (1))){
var state_34092__$1 = state_34092;
var statearr_34096_34162 = state_34092__$1;
(statearr_34096_34162[(2)] = null);

(statearr_34096_34162[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34093 === (4))){
var inst_34057 = (state_34092[(7)]);
var inst_34057__$1 = (state_34092[(2)]);
var inst_34058 = (inst_34057__$1 == null);
var state_34092__$1 = (function (){var statearr_34097 = state_34092;
(statearr_34097[(7)] = inst_34057__$1);

return statearr_34097;
})();
if(cljs.core.truth_(inst_34058)){
var statearr_34098_34163 = state_34092__$1;
(statearr_34098_34163[(1)] = (5));

} else {
var statearr_34099_34164 = state_34092__$1;
(statearr_34099_34164[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34093 === (15))){
var inst_34070 = (state_34092[(8)]);
var state_34092__$1 = state_34092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34092__$1,(18),to,inst_34070);
} else {
if((state_val_34093 === (21))){
var inst_34083 = (state_34092[(2)]);
var state_34092__$1 = state_34092;
var statearr_34100_34165 = state_34092__$1;
(statearr_34100_34165[(2)] = inst_34083);

(statearr_34100_34165[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34093 === (13))){
var inst_34085 = (state_34092[(2)]);
var state_34092__$1 = (function (){var statearr_34101 = state_34092;
(statearr_34101[(9)] = inst_34085);

return statearr_34101;
})();
var statearr_34102_34166 = state_34092__$1;
(statearr_34102_34166[(2)] = null);

(statearr_34102_34166[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34093 === (6))){
var inst_34057 = (state_34092[(7)]);
var state_34092__$1 = state_34092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34092__$1,(11),inst_34057);
} else {
if((state_val_34093 === (17))){
var inst_34078 = (state_34092[(2)]);
var state_34092__$1 = state_34092;
if(cljs.core.truth_(inst_34078)){
var statearr_34103_34167 = state_34092__$1;
(statearr_34103_34167[(1)] = (19));

} else {
var statearr_34104_34168 = state_34092__$1;
(statearr_34104_34168[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34093 === (3))){
var inst_34090 = (state_34092[(2)]);
var state_34092__$1 = state_34092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34092__$1,inst_34090);
} else {
if((state_val_34093 === (12))){
var inst_34067 = (state_34092[(10)]);
var state_34092__$1 = state_34092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34092__$1,(14),inst_34067);
} else {
if((state_val_34093 === (2))){
var state_34092__$1 = state_34092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34092__$1,(4),results);
} else {
if((state_val_34093 === (19))){
var state_34092__$1 = state_34092;
var statearr_34105_34169 = state_34092__$1;
(statearr_34105_34169[(2)] = null);

(statearr_34105_34169[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34093 === (11))){
var inst_34067 = (state_34092[(2)]);
var state_34092__$1 = (function (){var statearr_34106 = state_34092;
(statearr_34106[(10)] = inst_34067);

return statearr_34106;
})();
var statearr_34107_34170 = state_34092__$1;
(statearr_34107_34170[(2)] = null);

(statearr_34107_34170[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34093 === (9))){
var state_34092__$1 = state_34092;
var statearr_34108_34171 = state_34092__$1;
(statearr_34108_34171[(2)] = null);

(statearr_34108_34171[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34093 === (5))){
var state_34092__$1 = state_34092;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34109_34172 = state_34092__$1;
(statearr_34109_34172[(1)] = (8));

} else {
var statearr_34110_34173 = state_34092__$1;
(statearr_34110_34173[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34093 === (14))){
var inst_34072 = (state_34092[(11)]);
var inst_34070 = (state_34092[(8)]);
var inst_34070__$1 = (state_34092[(2)]);
var inst_34071 = (inst_34070__$1 == null);
var inst_34072__$1 = cljs.core.not(inst_34071);
var state_34092__$1 = (function (){var statearr_34111 = state_34092;
(statearr_34111[(11)] = inst_34072__$1);

(statearr_34111[(8)] = inst_34070__$1);

return statearr_34111;
})();
if(inst_34072__$1){
var statearr_34112_34174 = state_34092__$1;
(statearr_34112_34174[(1)] = (15));

} else {
var statearr_34113_34175 = state_34092__$1;
(statearr_34113_34175[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34093 === (16))){
var inst_34072 = (state_34092[(11)]);
var state_34092__$1 = state_34092;
var statearr_34114_34176 = state_34092__$1;
(statearr_34114_34176[(2)] = inst_34072);

(statearr_34114_34176[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34093 === (10))){
var inst_34064 = (state_34092[(2)]);
var state_34092__$1 = state_34092;
var statearr_34115_34177 = state_34092__$1;
(statearr_34115_34177[(2)] = inst_34064);

(statearr_34115_34177[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34093 === (18))){
var inst_34075 = (state_34092[(2)]);
var state_34092__$1 = state_34092;
var statearr_34116_34178 = state_34092__$1;
(statearr_34116_34178[(2)] = inst_34075);

(statearr_34116_34178[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34093 === (8))){
var inst_34061 = cljs.core.async.close_BANG_(to);
var state_34092__$1 = state_34092;
var statearr_34117_34179 = state_34092__$1;
(statearr_34117_34179[(2)] = inst_34061);

(statearr_34117_34179[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__33563__auto__,jobs,results,process,async))
;
return ((function (switch__33439__auto__,c__33563__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____0 = (function (){
var statearr_34121 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34121[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__);

(statearr_34121[(1)] = (1));

return statearr_34121;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____1 = (function (state_34092){
while(true){
var ret_value__33441__auto__ = (function (){try{while(true){
var result__33442__auto__ = switch__33439__auto__(state_34092);
if(cljs.core.keyword_identical_QMARK_(result__33442__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__33442__auto__;
}
break;
}
}catch (e34122){if((e34122 instanceof Object)){
var ex__33443__auto__ = e34122;
var statearr_34123_34180 = state_34092;
(statearr_34123_34180[(5)] = ex__33443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34092);

return cljs.core.cst$kw$recur;
} else {
throw e34122;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33441__auto__,cljs.core.cst$kw$recur)){
var G__34181 = state_34092;
state_34092 = G__34181;
continue;
} else {
return ret_value__33441__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__ = function(state_34092){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____1.call(this,state_34092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33440__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33440__auto__;
})()
;})(switch__33439__auto__,c__33563__auto__,jobs,results,process,async))
})();
var state__33565__auto__ = (function (){var statearr_34124 = (f__33564__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33564__auto__.cljs$core$IFn$_invoke$arity$0() : f__33564__auto__.call(null));
(statearr_34124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33563__auto__);

return statearr_34124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
});})(c__33563__auto__,jobs,results,process,async))
);

return c__33563__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args34182 = [];
var len__26134__auto___34185 = arguments.length;
var i__26135__auto___34186 = (0);
while(true){
if((i__26135__auto___34186 < len__26134__auto___34185)){
args34182.push((arguments[i__26135__auto___34186]));

var G__34187 = (i__26135__auto___34186 + (1));
i__26135__auto___34186 = G__34187;
continue;
} else {
}
break;
}

var G__34184 = args34182.length;
switch (G__34184) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34182.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var args34189 = [];
var len__26134__auto___34192 = arguments.length;
var i__26135__auto___34193 = (0);
while(true){
if((i__26135__auto___34193 < len__26134__auto___34192)){
args34189.push((arguments[i__26135__auto___34193]));

var G__34194 = (i__26135__auto___34193 + (1));
i__26135__auto___34193 = G__34194;
continue;
} else {
}
break;
}

var G__34191 = args34189.length;
switch (G__34191) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34189.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var args34196 = [];
var len__26134__auto___34249 = arguments.length;
var i__26135__auto___34250 = (0);
while(true){
if((i__26135__auto___34250 < len__26134__auto___34249)){
args34196.push((arguments[i__26135__auto___34250]));

var G__34251 = (i__26135__auto___34250 + (1));
i__26135__auto___34250 = G__34251;
continue;
} else {
}
break;
}

var G__34198 = args34196.length;
switch (G__34198) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34196.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33563__auto___34253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33563__auto___34253,tc,fc){
return (function (){
var f__33564__auto__ = (function (){var switch__33439__auto__ = ((function (c__33563__auto___34253,tc,fc){
return (function (state_34224){
var state_val_34225 = (state_34224[(1)]);
if((state_val_34225 === (7))){
var inst_34220 = (state_34224[(2)]);
var state_34224__$1 = state_34224;
var statearr_34226_34254 = state_34224__$1;
(statearr_34226_34254[(2)] = inst_34220);

(statearr_34226_34254[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34225 === (1))){
var state_34224__$1 = state_34224;
var statearr_34227_34255 = state_34224__$1;
(statearr_34227_34255[(2)] = null);

(statearr_34227_34255[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34225 === (4))){
var inst_34201 = (state_34224[(7)]);
var inst_34201__$1 = (state_34224[(2)]);
var inst_34202 = (inst_34201__$1 == null);
var state_34224__$1 = (function (){var statearr_34228 = state_34224;
(statearr_34228[(7)] = inst_34201__$1);

return statearr_34228;
})();
if(cljs.core.truth_(inst_34202)){
var statearr_34229_34256 = state_34224__$1;
(statearr_34229_34256[(1)] = (5));

} else {
var statearr_34230_34257 = state_34224__$1;
(statearr_34230_34257[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34225 === (13))){
var state_34224__$1 = state_34224;
var statearr_34231_34258 = state_34224__$1;
(statearr_34231_34258[(2)] = null);

(statearr_34231_34258[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34225 === (6))){
var inst_34201 = (state_34224[(7)]);
var inst_34207 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34201) : p.call(null,inst_34201));
var state_34224__$1 = state_34224;
if(cljs.core.truth_(inst_34207)){
var statearr_34232_34259 = state_34224__$1;
(statearr_34232_34259[(1)] = (9));

} else {
var statearr_34233_34260 = state_34224__$1;
(statearr_34233_34260[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34225 === (3))){
var inst_34222 = (state_34224[(2)]);
var state_34224__$1 = state_34224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34224__$1,inst_34222);
} else {
if((state_val_34225 === (12))){
var state_34224__$1 = state_34224;
var statearr_34234_34261 = state_34224__$1;
(statearr_34234_34261[(2)] = null);

(statearr_34234_34261[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34225 === (2))){
var state_34224__$1 = state_34224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34224__$1,(4),ch);
} else {
if((state_val_34225 === (11))){
var inst_34201 = (state_34224[(7)]);
var inst_34211 = (state_34224[(2)]);
var state_34224__$1 = state_34224;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34224__$1,(8),inst_34211,inst_34201);
} else {
if((state_val_34225 === (9))){
var state_34224__$1 = state_34224;
var statearr_34235_34262 = state_34224__$1;
(statearr_34235_34262[(2)] = tc);

(statearr_34235_34262[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34225 === (5))){
var inst_34204 = cljs.core.async.close_BANG_(tc);
var inst_34205 = cljs.core.async.close_BANG_(fc);
var state_34224__$1 = (function (){var statearr_34236 = state_34224;
(statearr_34236[(8)] = inst_34204);

return statearr_34236;
})();
var statearr_34237_34263 = state_34224__$1;
(statearr_34237_34263[(2)] = inst_34205);

(statearr_34237_34263[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34225 === (14))){
var inst_34218 = (state_34224[(2)]);
var state_34224__$1 = state_34224;
var statearr_34238_34264 = state_34224__$1;
(statearr_34238_34264[(2)] = inst_34218);

(statearr_34238_34264[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34225 === (10))){
var state_34224__$1 = state_34224;
var statearr_34239_34265 = state_34224__$1;
(statearr_34239_34265[(2)] = fc);

(statearr_34239_34265[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34225 === (8))){
var inst_34213 = (state_34224[(2)]);
var state_34224__$1 = state_34224;
if(cljs.core.truth_(inst_34213)){
var statearr_34240_34266 = state_34224__$1;
(statearr_34240_34266[(1)] = (12));

} else {
var statearr_34241_34267 = state_34224__$1;
(statearr_34241_34267[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__33563__auto___34253,tc,fc))
;
return ((function (switch__33439__auto__,c__33563__auto___34253,tc,fc){
return (function() {
var cljs$core$async$state_machine__33440__auto__ = null;
var cljs$core$async$state_machine__33440__auto____0 = (function (){
var statearr_34245 = [null,null,null,null,null,null,null,null,null];
(statearr_34245[(0)] = cljs$core$async$state_machine__33440__auto__);

(statearr_34245[(1)] = (1));

return statearr_34245;
});
var cljs$core$async$state_machine__33440__auto____1 = (function (state_34224){
while(true){
var ret_value__33441__auto__ = (function (){try{while(true){
var result__33442__auto__ = switch__33439__auto__(state_34224);
if(cljs.core.keyword_identical_QMARK_(result__33442__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__33442__auto__;
}
break;
}
}catch (e34246){if((e34246 instanceof Object)){
var ex__33443__auto__ = e34246;
var statearr_34247_34268 = state_34224;
(statearr_34247_34268[(5)] = ex__33443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34224);

return cljs.core.cst$kw$recur;
} else {
throw e34246;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33441__auto__,cljs.core.cst$kw$recur)){
var G__34269 = state_34224;
state_34224 = G__34269;
continue;
} else {
return ret_value__33441__auto__;
}
break;
}
});
cljs$core$async$state_machine__33440__auto__ = function(state_34224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33440__auto____1.call(this,state_34224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33440__auto____0;
cljs$core$async$state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33440__auto____1;
return cljs$core$async$state_machine__33440__auto__;
})()
;})(switch__33439__auto__,c__33563__auto___34253,tc,fc))
})();
var state__33565__auto__ = (function (){var statearr_34248 = (f__33564__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33564__auto__.cljs$core$IFn$_invoke$arity$0() : f__33564__auto__.call(null));
(statearr_34248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33563__auto___34253);

return statearr_34248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
});})(c__33563__auto___34253,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33563__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33563__auto__){
return (function (){
var f__33564__auto__ = (function (){var switch__33439__auto__ = ((function (c__33563__auto__){
return (function (state_34333){
var state_val_34334 = (state_34333[(1)]);
if((state_val_34334 === (7))){
var inst_34329 = (state_34333[(2)]);
var state_34333__$1 = state_34333;
var statearr_34335_34356 = state_34333__$1;
(statearr_34335_34356[(2)] = inst_34329);

(statearr_34335_34356[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34334 === (1))){
var inst_34313 = init;
var state_34333__$1 = (function (){var statearr_34336 = state_34333;
(statearr_34336[(7)] = inst_34313);

return statearr_34336;
})();
var statearr_34337_34357 = state_34333__$1;
(statearr_34337_34357[(2)] = null);

(statearr_34337_34357[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34334 === (4))){
var inst_34316 = (state_34333[(8)]);
var inst_34316__$1 = (state_34333[(2)]);
var inst_34317 = (inst_34316__$1 == null);
var state_34333__$1 = (function (){var statearr_34338 = state_34333;
(statearr_34338[(8)] = inst_34316__$1);

return statearr_34338;
})();
if(cljs.core.truth_(inst_34317)){
var statearr_34339_34358 = state_34333__$1;
(statearr_34339_34358[(1)] = (5));

} else {
var statearr_34340_34359 = state_34333__$1;
(statearr_34340_34359[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34334 === (6))){
var inst_34320 = (state_34333[(9)]);
var inst_34313 = (state_34333[(7)]);
var inst_34316 = (state_34333[(8)]);
var inst_34320__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34313,inst_34316) : f.call(null,inst_34313,inst_34316));
var inst_34321 = cljs.core.reduced_QMARK_(inst_34320__$1);
var state_34333__$1 = (function (){var statearr_34341 = state_34333;
(statearr_34341[(9)] = inst_34320__$1);

return statearr_34341;
})();
if(inst_34321){
var statearr_34342_34360 = state_34333__$1;
(statearr_34342_34360[(1)] = (8));

} else {
var statearr_34343_34361 = state_34333__$1;
(statearr_34343_34361[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34334 === (3))){
var inst_34331 = (state_34333[(2)]);
var state_34333__$1 = state_34333;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34333__$1,inst_34331);
} else {
if((state_val_34334 === (2))){
var state_34333__$1 = state_34333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34333__$1,(4),ch);
} else {
if((state_val_34334 === (9))){
var inst_34320 = (state_34333[(9)]);
var inst_34313 = inst_34320;
var state_34333__$1 = (function (){var statearr_34344 = state_34333;
(statearr_34344[(7)] = inst_34313);

return statearr_34344;
})();
var statearr_34345_34362 = state_34333__$1;
(statearr_34345_34362[(2)] = null);

(statearr_34345_34362[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34334 === (5))){
var inst_34313 = (state_34333[(7)]);
var state_34333__$1 = state_34333;
var statearr_34346_34363 = state_34333__$1;
(statearr_34346_34363[(2)] = inst_34313);

(statearr_34346_34363[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34334 === (10))){
var inst_34327 = (state_34333[(2)]);
var state_34333__$1 = state_34333;
var statearr_34347_34364 = state_34333__$1;
(statearr_34347_34364[(2)] = inst_34327);

(statearr_34347_34364[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34334 === (8))){
var inst_34320 = (state_34333[(9)]);
var inst_34323 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_34320) : cljs.core.deref.call(null,inst_34320));
var state_34333__$1 = state_34333;
var statearr_34348_34365 = state_34333__$1;
(statearr_34348_34365[(2)] = inst_34323);

(statearr_34348_34365[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__33563__auto__))
;
return ((function (switch__33439__auto__,c__33563__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33440__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33440__auto____0 = (function (){
var statearr_34352 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34352[(0)] = cljs$core$async$reduce_$_state_machine__33440__auto__);

(statearr_34352[(1)] = (1));

return statearr_34352;
});
var cljs$core$async$reduce_$_state_machine__33440__auto____1 = (function (state_34333){
while(true){
var ret_value__33441__auto__ = (function (){try{while(true){
var result__33442__auto__ = switch__33439__auto__(state_34333);
if(cljs.core.keyword_identical_QMARK_(result__33442__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__33442__auto__;
}
break;
}
}catch (e34353){if((e34353 instanceof Object)){
var ex__33443__auto__ = e34353;
var statearr_34354_34366 = state_34333;
(statearr_34354_34366[(5)] = ex__33443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34333);

return cljs.core.cst$kw$recur;
} else {
throw e34353;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33441__auto__,cljs.core.cst$kw$recur)){
var G__34367 = state_34333;
state_34333 = G__34367;
continue;
} else {
return ret_value__33441__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33440__auto__ = function(state_34333){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33440__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33440__auto____1.call(this,state_34333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33440__auto____0;
cljs$core$async$reduce_$_state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33440__auto____1;
return cljs$core$async$reduce_$_state_machine__33440__auto__;
})()
;})(switch__33439__auto__,c__33563__auto__))
})();
var state__33565__auto__ = (function (){var statearr_34355 = (f__33564__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33564__auto__.cljs$core$IFn$_invoke$arity$0() : f__33564__auto__.call(null));
(statearr_34355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33563__auto__);

return statearr_34355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
});})(c__33563__auto__))
);

return c__33563__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args34368 = [];
var len__26134__auto___34420 = arguments.length;
var i__26135__auto___34421 = (0);
while(true){
if((i__26135__auto___34421 < len__26134__auto___34420)){
args34368.push((arguments[i__26135__auto___34421]));

var G__34422 = (i__26135__auto___34421 + (1));
i__26135__auto___34421 = G__34422;
continue;
} else {
}
break;
}

var G__34370 = args34368.length;
switch (G__34370) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34368.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33563__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33563__auto__){
return (function (){
var f__33564__auto__ = (function (){var switch__33439__auto__ = ((function (c__33563__auto__){
return (function (state_34395){
var state_val_34396 = (state_34395[(1)]);
if((state_val_34396 === (7))){
var inst_34377 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
var statearr_34397_34424 = state_34395__$1;
(statearr_34397_34424[(2)] = inst_34377);

(statearr_34397_34424[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34396 === (1))){
var inst_34371 = cljs.core.seq(coll);
var inst_34372 = inst_34371;
var state_34395__$1 = (function (){var statearr_34398 = state_34395;
(statearr_34398[(7)] = inst_34372);

return statearr_34398;
})();
var statearr_34399_34425 = state_34395__$1;
(statearr_34399_34425[(2)] = null);

(statearr_34399_34425[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34396 === (4))){
var inst_34372 = (state_34395[(7)]);
var inst_34375 = cljs.core.first(inst_34372);
var state_34395__$1 = state_34395;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34395__$1,(7),ch,inst_34375);
} else {
if((state_val_34396 === (13))){
var inst_34389 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
var statearr_34400_34426 = state_34395__$1;
(statearr_34400_34426[(2)] = inst_34389);

(statearr_34400_34426[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34396 === (6))){
var inst_34380 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
if(cljs.core.truth_(inst_34380)){
var statearr_34401_34427 = state_34395__$1;
(statearr_34401_34427[(1)] = (8));

} else {
var statearr_34402_34428 = state_34395__$1;
(statearr_34402_34428[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34396 === (3))){
var inst_34393 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34395__$1,inst_34393);
} else {
if((state_val_34396 === (12))){
var state_34395__$1 = state_34395;
var statearr_34403_34429 = state_34395__$1;
(statearr_34403_34429[(2)] = null);

(statearr_34403_34429[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34396 === (2))){
var inst_34372 = (state_34395[(7)]);
var state_34395__$1 = state_34395;
if(cljs.core.truth_(inst_34372)){
var statearr_34404_34430 = state_34395__$1;
(statearr_34404_34430[(1)] = (4));

} else {
var statearr_34405_34431 = state_34395__$1;
(statearr_34405_34431[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34396 === (11))){
var inst_34386 = cljs.core.async.close_BANG_(ch);
var state_34395__$1 = state_34395;
var statearr_34406_34432 = state_34395__$1;
(statearr_34406_34432[(2)] = inst_34386);

(statearr_34406_34432[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34396 === (9))){
var state_34395__$1 = state_34395;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34407_34433 = state_34395__$1;
(statearr_34407_34433[(1)] = (11));

} else {
var statearr_34408_34434 = state_34395__$1;
(statearr_34408_34434[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34396 === (5))){
var inst_34372 = (state_34395[(7)]);
var state_34395__$1 = state_34395;
var statearr_34409_34435 = state_34395__$1;
(statearr_34409_34435[(2)] = inst_34372);

(statearr_34409_34435[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34396 === (10))){
var inst_34391 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
var statearr_34410_34436 = state_34395__$1;
(statearr_34410_34436[(2)] = inst_34391);

(statearr_34410_34436[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34396 === (8))){
var inst_34372 = (state_34395[(7)]);
var inst_34382 = cljs.core.next(inst_34372);
var inst_34372__$1 = inst_34382;
var state_34395__$1 = (function (){var statearr_34411 = state_34395;
(statearr_34411[(7)] = inst_34372__$1);

return statearr_34411;
})();
var statearr_34412_34437 = state_34395__$1;
(statearr_34412_34437[(2)] = null);

(statearr_34412_34437[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__33563__auto__))
;
return ((function (switch__33439__auto__,c__33563__auto__){
return (function() {
var cljs$core$async$state_machine__33440__auto__ = null;
var cljs$core$async$state_machine__33440__auto____0 = (function (){
var statearr_34416 = [null,null,null,null,null,null,null,null];
(statearr_34416[(0)] = cljs$core$async$state_machine__33440__auto__);

(statearr_34416[(1)] = (1));

return statearr_34416;
});
var cljs$core$async$state_machine__33440__auto____1 = (function (state_34395){
while(true){
var ret_value__33441__auto__ = (function (){try{while(true){
var result__33442__auto__ = switch__33439__auto__(state_34395);
if(cljs.core.keyword_identical_QMARK_(result__33442__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__33442__auto__;
}
break;
}
}catch (e34417){if((e34417 instanceof Object)){
var ex__33443__auto__ = e34417;
var statearr_34418_34438 = state_34395;
(statearr_34418_34438[(5)] = ex__33443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34395);

return cljs.core.cst$kw$recur;
} else {
throw e34417;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33441__auto__,cljs.core.cst$kw$recur)){
var G__34439 = state_34395;
state_34395 = G__34439;
continue;
} else {
return ret_value__33441__auto__;
}
break;
}
});
cljs$core$async$state_machine__33440__auto__ = function(state_34395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33440__auto____1.call(this,state_34395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33440__auto____0;
cljs$core$async$state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33440__auto____1;
return cljs$core$async$state_machine__33440__auto__;
})()
;})(switch__33439__auto__,c__33563__auto__))
})();
var state__33565__auto__ = (function (){var statearr_34419 = (f__33564__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33564__auto__.cljs$core$IFn$_invoke$arity$0() : f__33564__auto__.call(null));
(statearr_34419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33563__auto__);

return statearr_34419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
});})(c__33563__auto__))
);

return c__33563__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25722__auto__ = (((_ == null))?null:_);
var m__25723__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25722__auto__)]);
if(!((m__25723__auto__ == null))){
return (m__25723__auto__.cljs$core$IFn$_invoke$arity$1 ? m__25723__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__25723__auto__.call(null,_));
} else {
var m__25723__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25723__auto____$1 == null))){
return (m__25723__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__25723__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__25723__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25722__auto__ = (((m == null))?null:m);
var m__25723__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25722__auto__)]);
if(!((m__25723__auto__ == null))){
return (m__25723__auto__.cljs$core$IFn$_invoke$arity$3 ? m__25723__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__25723__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__25723__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25723__auto____$1 == null))){
return (m__25723__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__25723__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__25723__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25722__auto__ = (((m == null))?null:m);
var m__25723__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25722__auto__)]);
if(!((m__25723__auto__ == null))){
return (m__25723__auto__.cljs$core$IFn$_invoke$arity$2 ? m__25723__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__25723__auto__.call(null,m,ch));
} else {
var m__25723__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25723__auto____$1 == null))){
return (m__25723__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__25723__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__25723__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25722__auto__ = (((m == null))?null:m);
var m__25723__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25722__auto__)]);
if(!((m__25723__auto__ == null))){
return (m__25723__auto__.cljs$core$IFn$_invoke$arity$1 ? m__25723__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__25723__auto__.call(null,m));
} else {
var m__25723__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25723__auto____$1 == null))){
return (m__25723__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__25723__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__25723__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
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
var cs = (function (){var G__34668 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34668) : cljs.core.atom.call(null,G__34668));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34669 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34669 = (function (mult,ch,cs,meta34670){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta34670 = meta34670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34671,meta34670__$1){
var self__ = this;
var _34671__$1 = this;
return (new cljs.core.async.t_cljs$core$async34669(self__.mult,self__.ch,self__.cs,meta34670__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34669.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34671){
var self__ = this;
var _34671__$1 = this;
return self__.meta34670;
});})(cs))
;

cljs.core.async.t_cljs$core$async34669.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34669.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34669.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async34669.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34669.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34669.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__34672_34896 = self__.cs;
var G__34673_34897 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34672_34896,G__34673_34897) : cljs.core.reset_BANG_.call(null,G__34672_34896,G__34673_34897));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34669.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta34670], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34669.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34669.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34669";

cljs.core.async.t_cljs$core$async34669.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25665__auto__,writer__25666__auto__,opt__25667__auto__){
return cljs.core._write(writer__25666__auto__,"cljs.core.async/t_cljs$core$async34669");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34669 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34669(mult__$1,ch__$1,cs__$1,meta34670){
return (new cljs.core.async.t_cljs$core$async34669(mult__$1,ch__$1,cs__$1,meta34670));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34669(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33563__auto___34898 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33563__auto___34898,cs,m,dchan,dctr,done){
return (function (){
var f__33564__auto__ = (function (){var switch__33439__auto__ = ((function (c__33563__auto___34898,cs,m,dchan,dctr,done){
return (function (state_34808){
var state_val_34809 = (state_34808[(1)]);
if((state_val_34809 === (7))){
var inst_34804 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
var statearr_34810_34899 = state_34808__$1;
(statearr_34810_34899[(2)] = inst_34804);

(statearr_34810_34899[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (20))){
var inst_34707 = (state_34808[(7)]);
var inst_34719 = cljs.core.first(inst_34707);
var inst_34720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34719,(0),null);
var inst_34721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34719,(1),null);
var state_34808__$1 = (function (){var statearr_34811 = state_34808;
(statearr_34811[(8)] = inst_34720);

return statearr_34811;
})();
if(cljs.core.truth_(inst_34721)){
var statearr_34812_34900 = state_34808__$1;
(statearr_34812_34900[(1)] = (22));

} else {
var statearr_34813_34901 = state_34808__$1;
(statearr_34813_34901[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (27))){
var inst_34751 = (state_34808[(9)]);
var inst_34676 = (state_34808[(10)]);
var inst_34756 = (state_34808[(11)]);
var inst_34749 = (state_34808[(12)]);
var inst_34756__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34749,inst_34751);
var inst_34757 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34756__$1,inst_34676,done);
var state_34808__$1 = (function (){var statearr_34814 = state_34808;
(statearr_34814[(11)] = inst_34756__$1);

return statearr_34814;
})();
if(cljs.core.truth_(inst_34757)){
var statearr_34815_34902 = state_34808__$1;
(statearr_34815_34902[(1)] = (30));

} else {
var statearr_34816_34903 = state_34808__$1;
(statearr_34816_34903[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (1))){
var state_34808__$1 = state_34808;
var statearr_34817_34904 = state_34808__$1;
(statearr_34817_34904[(2)] = null);

(statearr_34817_34904[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (24))){
var inst_34707 = (state_34808[(7)]);
var inst_34726 = (state_34808[(2)]);
var inst_34727 = cljs.core.next(inst_34707);
var inst_34685 = inst_34727;
var inst_34686 = null;
var inst_34687 = (0);
var inst_34688 = (0);
var state_34808__$1 = (function (){var statearr_34818 = state_34808;
(statearr_34818[(13)] = inst_34685);

(statearr_34818[(14)] = inst_34726);

(statearr_34818[(15)] = inst_34687);

(statearr_34818[(16)] = inst_34686);

(statearr_34818[(17)] = inst_34688);

return statearr_34818;
})();
var statearr_34819_34905 = state_34808__$1;
(statearr_34819_34905[(2)] = null);

(statearr_34819_34905[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (39))){
var state_34808__$1 = state_34808;
var statearr_34823_34906 = state_34808__$1;
(statearr_34823_34906[(2)] = null);

(statearr_34823_34906[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (4))){
var inst_34676 = (state_34808[(10)]);
var inst_34676__$1 = (state_34808[(2)]);
var inst_34677 = (inst_34676__$1 == null);
var state_34808__$1 = (function (){var statearr_34824 = state_34808;
(statearr_34824[(10)] = inst_34676__$1);

return statearr_34824;
})();
if(cljs.core.truth_(inst_34677)){
var statearr_34825_34907 = state_34808__$1;
(statearr_34825_34907[(1)] = (5));

} else {
var statearr_34826_34908 = state_34808__$1;
(statearr_34826_34908[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (15))){
var inst_34685 = (state_34808[(13)]);
var inst_34687 = (state_34808[(15)]);
var inst_34686 = (state_34808[(16)]);
var inst_34688 = (state_34808[(17)]);
var inst_34703 = (state_34808[(2)]);
var inst_34704 = (inst_34688 + (1));
var tmp34820 = inst_34685;
var tmp34821 = inst_34687;
var tmp34822 = inst_34686;
var inst_34685__$1 = tmp34820;
var inst_34686__$1 = tmp34822;
var inst_34687__$1 = tmp34821;
var inst_34688__$1 = inst_34704;
var state_34808__$1 = (function (){var statearr_34827 = state_34808;
(statearr_34827[(18)] = inst_34703);

(statearr_34827[(13)] = inst_34685__$1);

(statearr_34827[(15)] = inst_34687__$1);

(statearr_34827[(16)] = inst_34686__$1);

(statearr_34827[(17)] = inst_34688__$1);

return statearr_34827;
})();
var statearr_34828_34909 = state_34808__$1;
(statearr_34828_34909[(2)] = null);

(statearr_34828_34909[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (21))){
var inst_34730 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
var statearr_34832_34910 = state_34808__$1;
(statearr_34832_34910[(2)] = inst_34730);

(statearr_34832_34910[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (31))){
var inst_34756 = (state_34808[(11)]);
var inst_34760 = done(null);
var inst_34761 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34756);
var state_34808__$1 = (function (){var statearr_34833 = state_34808;
(statearr_34833[(19)] = inst_34760);

return statearr_34833;
})();
var statearr_34834_34911 = state_34808__$1;
(statearr_34834_34911[(2)] = inst_34761);

(statearr_34834_34911[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (32))){
var inst_34751 = (state_34808[(9)]);
var inst_34750 = (state_34808[(20)]);
var inst_34748 = (state_34808[(21)]);
var inst_34749 = (state_34808[(12)]);
var inst_34763 = (state_34808[(2)]);
var inst_34764 = (inst_34751 + (1));
var tmp34829 = inst_34750;
var tmp34830 = inst_34748;
var tmp34831 = inst_34749;
var inst_34748__$1 = tmp34830;
var inst_34749__$1 = tmp34831;
var inst_34750__$1 = tmp34829;
var inst_34751__$1 = inst_34764;
var state_34808__$1 = (function (){var statearr_34835 = state_34808;
(statearr_34835[(9)] = inst_34751__$1);

(statearr_34835[(20)] = inst_34750__$1);

(statearr_34835[(21)] = inst_34748__$1);

(statearr_34835[(22)] = inst_34763);

(statearr_34835[(12)] = inst_34749__$1);

return statearr_34835;
})();
var statearr_34836_34912 = state_34808__$1;
(statearr_34836_34912[(2)] = null);

(statearr_34836_34912[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (40))){
var inst_34776 = (state_34808[(23)]);
var inst_34780 = done(null);
var inst_34781 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34776);
var state_34808__$1 = (function (){var statearr_34837 = state_34808;
(statearr_34837[(24)] = inst_34780);

return statearr_34837;
})();
var statearr_34838_34913 = state_34808__$1;
(statearr_34838_34913[(2)] = inst_34781);

(statearr_34838_34913[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (33))){
var inst_34767 = (state_34808[(25)]);
var inst_34769 = cljs.core.chunked_seq_QMARK_(inst_34767);
var state_34808__$1 = state_34808;
if(inst_34769){
var statearr_34839_34914 = state_34808__$1;
(statearr_34839_34914[(1)] = (36));

} else {
var statearr_34840_34915 = state_34808__$1;
(statearr_34840_34915[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (13))){
var inst_34697 = (state_34808[(26)]);
var inst_34700 = cljs.core.async.close_BANG_(inst_34697);
var state_34808__$1 = state_34808;
var statearr_34841_34916 = state_34808__$1;
(statearr_34841_34916[(2)] = inst_34700);

(statearr_34841_34916[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (22))){
var inst_34720 = (state_34808[(8)]);
var inst_34723 = cljs.core.async.close_BANG_(inst_34720);
var state_34808__$1 = state_34808;
var statearr_34842_34917 = state_34808__$1;
(statearr_34842_34917[(2)] = inst_34723);

(statearr_34842_34917[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (36))){
var inst_34767 = (state_34808[(25)]);
var inst_34771 = cljs.core.chunk_first(inst_34767);
var inst_34772 = cljs.core.chunk_rest(inst_34767);
var inst_34773 = cljs.core.count(inst_34771);
var inst_34748 = inst_34772;
var inst_34749 = inst_34771;
var inst_34750 = inst_34773;
var inst_34751 = (0);
var state_34808__$1 = (function (){var statearr_34843 = state_34808;
(statearr_34843[(9)] = inst_34751);

(statearr_34843[(20)] = inst_34750);

(statearr_34843[(21)] = inst_34748);

(statearr_34843[(12)] = inst_34749);

return statearr_34843;
})();
var statearr_34844_34918 = state_34808__$1;
(statearr_34844_34918[(2)] = null);

(statearr_34844_34918[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (41))){
var inst_34767 = (state_34808[(25)]);
var inst_34783 = (state_34808[(2)]);
var inst_34784 = cljs.core.next(inst_34767);
var inst_34748 = inst_34784;
var inst_34749 = null;
var inst_34750 = (0);
var inst_34751 = (0);
var state_34808__$1 = (function (){var statearr_34845 = state_34808;
(statearr_34845[(9)] = inst_34751);

(statearr_34845[(20)] = inst_34750);

(statearr_34845[(21)] = inst_34748);

(statearr_34845[(27)] = inst_34783);

(statearr_34845[(12)] = inst_34749);

return statearr_34845;
})();
var statearr_34846_34919 = state_34808__$1;
(statearr_34846_34919[(2)] = null);

(statearr_34846_34919[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (43))){
var state_34808__$1 = state_34808;
var statearr_34847_34920 = state_34808__$1;
(statearr_34847_34920[(2)] = null);

(statearr_34847_34920[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (29))){
var inst_34792 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
var statearr_34848_34921 = state_34808__$1;
(statearr_34848_34921[(2)] = inst_34792);

(statearr_34848_34921[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (44))){
var inst_34801 = (state_34808[(2)]);
var state_34808__$1 = (function (){var statearr_34849 = state_34808;
(statearr_34849[(28)] = inst_34801);

return statearr_34849;
})();
var statearr_34850_34922 = state_34808__$1;
(statearr_34850_34922[(2)] = null);

(statearr_34850_34922[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (6))){
var inst_34740 = (state_34808[(29)]);
var inst_34739 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_34740__$1 = cljs.core.keys(inst_34739);
var inst_34741 = cljs.core.count(inst_34740__$1);
var inst_34742 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_34741) : cljs.core.reset_BANG_.call(null,dctr,inst_34741));
var inst_34747 = cljs.core.seq(inst_34740__$1);
var inst_34748 = inst_34747;
var inst_34749 = null;
var inst_34750 = (0);
var inst_34751 = (0);
var state_34808__$1 = (function (){var statearr_34851 = state_34808;
(statearr_34851[(9)] = inst_34751);

(statearr_34851[(29)] = inst_34740__$1);

(statearr_34851[(20)] = inst_34750);

(statearr_34851[(21)] = inst_34748);

(statearr_34851[(30)] = inst_34742);

(statearr_34851[(12)] = inst_34749);

return statearr_34851;
})();
var statearr_34852_34923 = state_34808__$1;
(statearr_34852_34923[(2)] = null);

(statearr_34852_34923[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (28))){
var inst_34767 = (state_34808[(25)]);
var inst_34748 = (state_34808[(21)]);
var inst_34767__$1 = cljs.core.seq(inst_34748);
var state_34808__$1 = (function (){var statearr_34853 = state_34808;
(statearr_34853[(25)] = inst_34767__$1);

return statearr_34853;
})();
if(inst_34767__$1){
var statearr_34854_34924 = state_34808__$1;
(statearr_34854_34924[(1)] = (33));

} else {
var statearr_34855_34925 = state_34808__$1;
(statearr_34855_34925[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (25))){
var inst_34751 = (state_34808[(9)]);
var inst_34750 = (state_34808[(20)]);
var inst_34753 = (inst_34751 < inst_34750);
var inst_34754 = inst_34753;
var state_34808__$1 = state_34808;
if(cljs.core.truth_(inst_34754)){
var statearr_34856_34926 = state_34808__$1;
(statearr_34856_34926[(1)] = (27));

} else {
var statearr_34857_34927 = state_34808__$1;
(statearr_34857_34927[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (34))){
var state_34808__$1 = state_34808;
var statearr_34858_34928 = state_34808__$1;
(statearr_34858_34928[(2)] = null);

(statearr_34858_34928[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (17))){
var state_34808__$1 = state_34808;
var statearr_34859_34929 = state_34808__$1;
(statearr_34859_34929[(2)] = null);

(statearr_34859_34929[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (3))){
var inst_34806 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34808__$1,inst_34806);
} else {
if((state_val_34809 === (12))){
var inst_34735 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
var statearr_34860_34930 = state_34808__$1;
(statearr_34860_34930[(2)] = inst_34735);

(statearr_34860_34930[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (2))){
var state_34808__$1 = state_34808;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34808__$1,(4),ch);
} else {
if((state_val_34809 === (23))){
var state_34808__$1 = state_34808;
var statearr_34861_34931 = state_34808__$1;
(statearr_34861_34931[(2)] = null);

(statearr_34861_34931[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (35))){
var inst_34790 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
var statearr_34862_34932 = state_34808__$1;
(statearr_34862_34932[(2)] = inst_34790);

(statearr_34862_34932[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (19))){
var inst_34707 = (state_34808[(7)]);
var inst_34711 = cljs.core.chunk_first(inst_34707);
var inst_34712 = cljs.core.chunk_rest(inst_34707);
var inst_34713 = cljs.core.count(inst_34711);
var inst_34685 = inst_34712;
var inst_34686 = inst_34711;
var inst_34687 = inst_34713;
var inst_34688 = (0);
var state_34808__$1 = (function (){var statearr_34863 = state_34808;
(statearr_34863[(13)] = inst_34685);

(statearr_34863[(15)] = inst_34687);

(statearr_34863[(16)] = inst_34686);

(statearr_34863[(17)] = inst_34688);

return statearr_34863;
})();
var statearr_34864_34933 = state_34808__$1;
(statearr_34864_34933[(2)] = null);

(statearr_34864_34933[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (11))){
var inst_34685 = (state_34808[(13)]);
var inst_34707 = (state_34808[(7)]);
var inst_34707__$1 = cljs.core.seq(inst_34685);
var state_34808__$1 = (function (){var statearr_34865 = state_34808;
(statearr_34865[(7)] = inst_34707__$1);

return statearr_34865;
})();
if(inst_34707__$1){
var statearr_34866_34934 = state_34808__$1;
(statearr_34866_34934[(1)] = (16));

} else {
var statearr_34867_34935 = state_34808__$1;
(statearr_34867_34935[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (9))){
var inst_34737 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
var statearr_34868_34936 = state_34808__$1;
(statearr_34868_34936[(2)] = inst_34737);

(statearr_34868_34936[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (5))){
var inst_34683 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_34684 = cljs.core.seq(inst_34683);
var inst_34685 = inst_34684;
var inst_34686 = null;
var inst_34687 = (0);
var inst_34688 = (0);
var state_34808__$1 = (function (){var statearr_34869 = state_34808;
(statearr_34869[(13)] = inst_34685);

(statearr_34869[(15)] = inst_34687);

(statearr_34869[(16)] = inst_34686);

(statearr_34869[(17)] = inst_34688);

return statearr_34869;
})();
var statearr_34870_34937 = state_34808__$1;
(statearr_34870_34937[(2)] = null);

(statearr_34870_34937[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (14))){
var state_34808__$1 = state_34808;
var statearr_34871_34938 = state_34808__$1;
(statearr_34871_34938[(2)] = null);

(statearr_34871_34938[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (45))){
var inst_34798 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
var statearr_34872_34939 = state_34808__$1;
(statearr_34872_34939[(2)] = inst_34798);

(statearr_34872_34939[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (26))){
var inst_34740 = (state_34808[(29)]);
var inst_34794 = (state_34808[(2)]);
var inst_34795 = cljs.core.seq(inst_34740);
var state_34808__$1 = (function (){var statearr_34873 = state_34808;
(statearr_34873[(31)] = inst_34794);

return statearr_34873;
})();
if(inst_34795){
var statearr_34874_34940 = state_34808__$1;
(statearr_34874_34940[(1)] = (42));

} else {
var statearr_34875_34941 = state_34808__$1;
(statearr_34875_34941[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (16))){
var inst_34707 = (state_34808[(7)]);
var inst_34709 = cljs.core.chunked_seq_QMARK_(inst_34707);
var state_34808__$1 = state_34808;
if(inst_34709){
var statearr_34876_34942 = state_34808__$1;
(statearr_34876_34942[(1)] = (19));

} else {
var statearr_34877_34943 = state_34808__$1;
(statearr_34877_34943[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (38))){
var inst_34787 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
var statearr_34878_34944 = state_34808__$1;
(statearr_34878_34944[(2)] = inst_34787);

(statearr_34878_34944[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (30))){
var state_34808__$1 = state_34808;
var statearr_34879_34945 = state_34808__$1;
(statearr_34879_34945[(2)] = null);

(statearr_34879_34945[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (10))){
var inst_34686 = (state_34808[(16)]);
var inst_34688 = (state_34808[(17)]);
var inst_34696 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34686,inst_34688);
var inst_34697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34696,(0),null);
var inst_34698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34696,(1),null);
var state_34808__$1 = (function (){var statearr_34880 = state_34808;
(statearr_34880[(26)] = inst_34697);

return statearr_34880;
})();
if(cljs.core.truth_(inst_34698)){
var statearr_34881_34946 = state_34808__$1;
(statearr_34881_34946[(1)] = (13));

} else {
var statearr_34882_34947 = state_34808__$1;
(statearr_34882_34947[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (18))){
var inst_34733 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
var statearr_34883_34948 = state_34808__$1;
(statearr_34883_34948[(2)] = inst_34733);

(statearr_34883_34948[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (42))){
var state_34808__$1 = state_34808;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34808__$1,(45),dchan);
} else {
if((state_val_34809 === (37))){
var inst_34767 = (state_34808[(25)]);
var inst_34676 = (state_34808[(10)]);
var inst_34776 = (state_34808[(23)]);
var inst_34776__$1 = cljs.core.first(inst_34767);
var inst_34777 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34776__$1,inst_34676,done);
var state_34808__$1 = (function (){var statearr_34884 = state_34808;
(statearr_34884[(23)] = inst_34776__$1);

return statearr_34884;
})();
if(cljs.core.truth_(inst_34777)){
var statearr_34885_34949 = state_34808__$1;
(statearr_34885_34949[(1)] = (39));

} else {
var statearr_34886_34950 = state_34808__$1;
(statearr_34886_34950[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34809 === (8))){
var inst_34687 = (state_34808[(15)]);
var inst_34688 = (state_34808[(17)]);
var inst_34690 = (inst_34688 < inst_34687);
var inst_34691 = inst_34690;
var state_34808__$1 = state_34808;
if(cljs.core.truth_(inst_34691)){
var statearr_34887_34951 = state_34808__$1;
(statearr_34887_34951[(1)] = (10));

} else {
var statearr_34888_34952 = state_34808__$1;
(statearr_34888_34952[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__33563__auto___34898,cs,m,dchan,dctr,done))
;
return ((function (switch__33439__auto__,c__33563__auto___34898,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33440__auto__ = null;
var cljs$core$async$mult_$_state_machine__33440__auto____0 = (function (){
var statearr_34892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34892[(0)] = cljs$core$async$mult_$_state_machine__33440__auto__);

(statearr_34892[(1)] = (1));

return statearr_34892;
});
var cljs$core$async$mult_$_state_machine__33440__auto____1 = (function (state_34808){
while(true){
var ret_value__33441__auto__ = (function (){try{while(true){
var result__33442__auto__ = switch__33439__auto__(state_34808);
if(cljs.core.keyword_identical_QMARK_(result__33442__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__33442__auto__;
}
break;
}
}catch (e34893){if((e34893 instanceof Object)){
var ex__33443__auto__ = e34893;
var statearr_34894_34953 = state_34808;
(statearr_34894_34953[(5)] = ex__33443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34808);

return cljs.core.cst$kw$recur;
} else {
throw e34893;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33441__auto__,cljs.core.cst$kw$recur)){
var G__34954 = state_34808;
state_34808 = G__34954;
continue;
} else {
return ret_value__33441__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33440__auto__ = function(state_34808){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33440__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33440__auto____1.call(this,state_34808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33440__auto____0;
cljs$core$async$mult_$_state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33440__auto____1;
return cljs$core$async$mult_$_state_machine__33440__auto__;
})()
;})(switch__33439__auto__,c__33563__auto___34898,cs,m,dchan,dctr,done))
})();
var state__33565__auto__ = (function (){var statearr_34895 = (f__33564__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33564__auto__.cljs$core$IFn$_invoke$arity$0() : f__33564__auto__.call(null));
(statearr_34895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33563__auto___34898);

return statearr_34895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
});})(c__33563__auto___34898,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args34955 = [];
var len__26134__auto___34958 = arguments.length;
var i__26135__auto___34959 = (0);
while(true){
if((i__26135__auto___34959 < len__26134__auto___34958)){
args34955.push((arguments[i__26135__auto___34959]));

var G__34960 = (i__26135__auto___34959 + (1));
i__26135__auto___34959 = G__34960;
continue;
} else {
}
break;
}

var G__34957 = args34955.length;
switch (G__34957) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34955.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25722__auto__ = (((m == null))?null:m);
var m__25723__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25722__auto__)]);
if(!((m__25723__auto__ == null))){
return (m__25723__auto__.cljs$core$IFn$_invoke$arity$2 ? m__25723__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__25723__auto__.call(null,m,ch));
} else {
var m__25723__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25723__auto____$1 == null))){
return (m__25723__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__25723__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__25723__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25722__auto__ = (((m == null))?null:m);
var m__25723__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25722__auto__)]);
if(!((m__25723__auto__ == null))){
return (m__25723__auto__.cljs$core$IFn$_invoke$arity$2 ? m__25723__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__25723__auto__.call(null,m,ch));
} else {
var m__25723__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25723__auto____$1 == null))){
return (m__25723__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__25723__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__25723__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25722__auto__ = (((m == null))?null:m);
var m__25723__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25722__auto__)]);
if(!((m__25723__auto__ == null))){
return (m__25723__auto__.cljs$core$IFn$_invoke$arity$1 ? m__25723__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__25723__auto__.call(null,m));
} else {
var m__25723__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25723__auto____$1 == null))){
return (m__25723__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__25723__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__25723__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25722__auto__ = (((m == null))?null:m);
var m__25723__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25722__auto__)]);
if(!((m__25723__auto__ == null))){
return (m__25723__auto__.cljs$core$IFn$_invoke$arity$2 ? m__25723__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__25723__auto__.call(null,m,state_map));
} else {
var m__25723__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25723__auto____$1 == null))){
return (m__25723__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__25723__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__25723__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25722__auto__ = (((m == null))?null:m);
var m__25723__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25722__auto__)]);
if(!((m__25723__auto__ == null))){
return (m__25723__auto__.cljs$core$IFn$_invoke$arity$2 ? m__25723__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__25723__auto__.call(null,m,mode));
} else {
var m__25723__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25723__auto____$1 == null))){
return (m__25723__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__25723__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__25723__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26141__auto__ = [];
var len__26134__auto___34972 = arguments.length;
var i__26135__auto___34973 = (0);
while(true){
if((i__26135__auto___34973 < len__26134__auto___34972)){
args__26141__auto__.push((arguments[i__26135__auto___34973]));

var G__34974 = (i__26135__auto___34973 + (1));
i__26135__auto___34973 = G__34974;
continue;
} else {
}
break;
}

var argseq__26142__auto__ = ((((3) < args__26141__auto__.length))?(new cljs.core.IndexedSeq(args__26141__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26142__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34966){
var map__34967 = p__34966;
var map__34967__$1 = ((((!((map__34967 == null)))?((((map__34967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34967):map__34967);
var opts = map__34967__$1;
var statearr_34969_34975 = state;
(statearr_34969_34975[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__34967,map__34967__$1,opts){
return (function (val){
var statearr_34970_34976 = state;
(statearr_34970_34976[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__34967,map__34967__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_34971_34977 = state;
(statearr_34971_34977[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34962){
var G__34963 = cljs.core.first(seq34962);
var seq34962__$1 = cljs.core.next(seq34962);
var G__34964 = cljs.core.first(seq34962__$1);
var seq34962__$2 = cljs.core.next(seq34962__$1);
var G__34965 = cljs.core.first(seq34962__$2);
var seq34962__$3 = cljs.core.next(seq34962__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34963,G__34964,G__34965,seq34962__$3);
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
var cs = (function (){var G__35147 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35147) : cljs.core.atom.call(null,G__35147));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__35148 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35148) : cljs.core.atom.call(null,G__35148));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35149 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35149 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35150){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35150 = meta35150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35151,meta35150__$1){
var self__ = this;
var _35151__$1 = this;
return (new cljs.core.async.t_cljs$core$async35149(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35150__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35151){
var self__ = this;
var _35151__$1 = this;
return self__.meta35150;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35149.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35149.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35149.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async35149.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35149.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35149.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__35152_35316 = self__.cs;
var G__35153_35317 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35152_35316,G__35153_35317) : cljs.core.reset_BANG_.call(null,G__35152_35316,G__35153_35317));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35149.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35149.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35149.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta35150], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35149.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35149";

cljs.core.async.t_cljs$core$async35149.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25665__auto__,writer__25666__auto__,opt__25667__auto__){
return cljs.core._write(writer__25666__auto__,"cljs.core.async/t_cljs$core$async35149");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35149 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35149(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35150){
return (new cljs.core.async.t_cljs$core$async35149(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35150));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35149(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33563__auto___35318 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33563__auto___35318,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33564__auto__ = (function (){var switch__33439__auto__ = ((function (c__33563__auto___35318,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35253){
var state_val_35254 = (state_35253[(1)]);
if((state_val_35254 === (7))){
var inst_35169 = (state_35253[(2)]);
var state_35253__$1 = state_35253;
var statearr_35255_35319 = state_35253__$1;
(statearr_35255_35319[(2)] = inst_35169);

(statearr_35255_35319[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (20))){
var inst_35181 = (state_35253[(7)]);
var state_35253__$1 = state_35253;
var statearr_35256_35320 = state_35253__$1;
(statearr_35256_35320[(2)] = inst_35181);

(statearr_35256_35320[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (27))){
var state_35253__$1 = state_35253;
var statearr_35257_35321 = state_35253__$1;
(statearr_35257_35321[(2)] = null);

(statearr_35257_35321[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (1))){
var inst_35157 = (state_35253[(8)]);
var inst_35157__$1 = calc_state();
var inst_35159 = (inst_35157__$1 == null);
var inst_35160 = cljs.core.not(inst_35159);
var state_35253__$1 = (function (){var statearr_35258 = state_35253;
(statearr_35258[(8)] = inst_35157__$1);

return statearr_35258;
})();
if(inst_35160){
var statearr_35259_35322 = state_35253__$1;
(statearr_35259_35322[(1)] = (2));

} else {
var statearr_35260_35323 = state_35253__$1;
(statearr_35260_35323[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (24))){
var inst_35227 = (state_35253[(9)]);
var inst_35213 = (state_35253[(10)]);
var inst_35204 = (state_35253[(11)]);
var inst_35227__$1 = (inst_35204.cljs$core$IFn$_invoke$arity$1 ? inst_35204.cljs$core$IFn$_invoke$arity$1(inst_35213) : inst_35204.call(null,inst_35213));
var state_35253__$1 = (function (){var statearr_35261 = state_35253;
(statearr_35261[(9)] = inst_35227__$1);

return statearr_35261;
})();
if(cljs.core.truth_(inst_35227__$1)){
var statearr_35262_35324 = state_35253__$1;
(statearr_35262_35324[(1)] = (29));

} else {
var statearr_35263_35325 = state_35253__$1;
(statearr_35263_35325[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (4))){
var inst_35172 = (state_35253[(2)]);
var state_35253__$1 = state_35253;
if(cljs.core.truth_(inst_35172)){
var statearr_35264_35326 = state_35253__$1;
(statearr_35264_35326[(1)] = (8));

} else {
var statearr_35265_35327 = state_35253__$1;
(statearr_35265_35327[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (15))){
var inst_35198 = (state_35253[(2)]);
var state_35253__$1 = state_35253;
if(cljs.core.truth_(inst_35198)){
var statearr_35266_35328 = state_35253__$1;
(statearr_35266_35328[(1)] = (19));

} else {
var statearr_35267_35329 = state_35253__$1;
(statearr_35267_35329[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (21))){
var inst_35203 = (state_35253[(12)]);
var inst_35203__$1 = (state_35253[(2)]);
var inst_35204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35203__$1,cljs.core.cst$kw$solos);
var inst_35205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35203__$1,cljs.core.cst$kw$mutes);
var inst_35206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35203__$1,cljs.core.cst$kw$reads);
var state_35253__$1 = (function (){var statearr_35268 = state_35253;
(statearr_35268[(13)] = inst_35205);

(statearr_35268[(12)] = inst_35203__$1);

(statearr_35268[(11)] = inst_35204);

return statearr_35268;
})();
return cljs.core.async.ioc_alts_BANG_(state_35253__$1,(22),inst_35206);
} else {
if((state_val_35254 === (31))){
var inst_35235 = (state_35253[(2)]);
var state_35253__$1 = state_35253;
if(cljs.core.truth_(inst_35235)){
var statearr_35269_35330 = state_35253__$1;
(statearr_35269_35330[(1)] = (32));

} else {
var statearr_35270_35331 = state_35253__$1;
(statearr_35270_35331[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (32))){
var inst_35212 = (state_35253[(14)]);
var state_35253__$1 = state_35253;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35253__$1,(35),out,inst_35212);
} else {
if((state_val_35254 === (33))){
var inst_35203 = (state_35253[(12)]);
var inst_35181 = inst_35203;
var state_35253__$1 = (function (){var statearr_35271 = state_35253;
(statearr_35271[(7)] = inst_35181);

return statearr_35271;
})();
var statearr_35272_35332 = state_35253__$1;
(statearr_35272_35332[(2)] = null);

(statearr_35272_35332[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (13))){
var inst_35181 = (state_35253[(7)]);
var inst_35188 = inst_35181.cljs$lang$protocol_mask$partition0$;
var inst_35189 = (inst_35188 & (64));
var inst_35190 = inst_35181.cljs$core$ISeq$;
var inst_35191 = (inst_35189) || (inst_35190);
var state_35253__$1 = state_35253;
if(cljs.core.truth_(inst_35191)){
var statearr_35273_35333 = state_35253__$1;
(statearr_35273_35333[(1)] = (16));

} else {
var statearr_35274_35334 = state_35253__$1;
(statearr_35274_35334[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (22))){
var inst_35212 = (state_35253[(14)]);
var inst_35213 = (state_35253[(10)]);
var inst_35211 = (state_35253[(2)]);
var inst_35212__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35211,(0),null);
var inst_35213__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35211,(1),null);
var inst_35214 = (inst_35212__$1 == null);
var inst_35215 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35213__$1,change);
var inst_35216 = (inst_35214) || (inst_35215);
var state_35253__$1 = (function (){var statearr_35275 = state_35253;
(statearr_35275[(14)] = inst_35212__$1);

(statearr_35275[(10)] = inst_35213__$1);

return statearr_35275;
})();
if(cljs.core.truth_(inst_35216)){
var statearr_35276_35335 = state_35253__$1;
(statearr_35276_35335[(1)] = (23));

} else {
var statearr_35277_35336 = state_35253__$1;
(statearr_35277_35336[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (36))){
var inst_35203 = (state_35253[(12)]);
var inst_35181 = inst_35203;
var state_35253__$1 = (function (){var statearr_35278 = state_35253;
(statearr_35278[(7)] = inst_35181);

return statearr_35278;
})();
var statearr_35279_35337 = state_35253__$1;
(statearr_35279_35337[(2)] = null);

(statearr_35279_35337[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (29))){
var inst_35227 = (state_35253[(9)]);
var state_35253__$1 = state_35253;
var statearr_35280_35338 = state_35253__$1;
(statearr_35280_35338[(2)] = inst_35227);

(statearr_35280_35338[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (6))){
var state_35253__$1 = state_35253;
var statearr_35281_35339 = state_35253__$1;
(statearr_35281_35339[(2)] = false);

(statearr_35281_35339[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (28))){
var inst_35223 = (state_35253[(2)]);
var inst_35224 = calc_state();
var inst_35181 = inst_35224;
var state_35253__$1 = (function (){var statearr_35282 = state_35253;
(statearr_35282[(7)] = inst_35181);

(statearr_35282[(15)] = inst_35223);

return statearr_35282;
})();
var statearr_35283_35340 = state_35253__$1;
(statearr_35283_35340[(2)] = null);

(statearr_35283_35340[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (25))){
var inst_35249 = (state_35253[(2)]);
var state_35253__$1 = state_35253;
var statearr_35284_35341 = state_35253__$1;
(statearr_35284_35341[(2)] = inst_35249);

(statearr_35284_35341[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (34))){
var inst_35247 = (state_35253[(2)]);
var state_35253__$1 = state_35253;
var statearr_35285_35342 = state_35253__$1;
(statearr_35285_35342[(2)] = inst_35247);

(statearr_35285_35342[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (17))){
var state_35253__$1 = state_35253;
var statearr_35286_35343 = state_35253__$1;
(statearr_35286_35343[(2)] = false);

(statearr_35286_35343[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (3))){
var state_35253__$1 = state_35253;
var statearr_35287_35344 = state_35253__$1;
(statearr_35287_35344[(2)] = false);

(statearr_35287_35344[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (12))){
var inst_35251 = (state_35253[(2)]);
var state_35253__$1 = state_35253;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35253__$1,inst_35251);
} else {
if((state_val_35254 === (2))){
var inst_35157 = (state_35253[(8)]);
var inst_35162 = inst_35157.cljs$lang$protocol_mask$partition0$;
var inst_35163 = (inst_35162 & (64));
var inst_35164 = inst_35157.cljs$core$ISeq$;
var inst_35165 = (inst_35163) || (inst_35164);
var state_35253__$1 = state_35253;
if(cljs.core.truth_(inst_35165)){
var statearr_35288_35345 = state_35253__$1;
(statearr_35288_35345[(1)] = (5));

} else {
var statearr_35289_35346 = state_35253__$1;
(statearr_35289_35346[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (23))){
var inst_35212 = (state_35253[(14)]);
var inst_35218 = (inst_35212 == null);
var state_35253__$1 = state_35253;
if(cljs.core.truth_(inst_35218)){
var statearr_35290_35347 = state_35253__$1;
(statearr_35290_35347[(1)] = (26));

} else {
var statearr_35291_35348 = state_35253__$1;
(statearr_35291_35348[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (35))){
var inst_35238 = (state_35253[(2)]);
var state_35253__$1 = state_35253;
if(cljs.core.truth_(inst_35238)){
var statearr_35292_35349 = state_35253__$1;
(statearr_35292_35349[(1)] = (36));

} else {
var statearr_35293_35350 = state_35253__$1;
(statearr_35293_35350[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (19))){
var inst_35181 = (state_35253[(7)]);
var inst_35200 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35181);
var state_35253__$1 = state_35253;
var statearr_35294_35351 = state_35253__$1;
(statearr_35294_35351[(2)] = inst_35200);

(statearr_35294_35351[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (11))){
var inst_35181 = (state_35253[(7)]);
var inst_35185 = (inst_35181 == null);
var inst_35186 = cljs.core.not(inst_35185);
var state_35253__$1 = state_35253;
if(inst_35186){
var statearr_35295_35352 = state_35253__$1;
(statearr_35295_35352[(1)] = (13));

} else {
var statearr_35296_35353 = state_35253__$1;
(statearr_35296_35353[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (9))){
var inst_35157 = (state_35253[(8)]);
var state_35253__$1 = state_35253;
var statearr_35297_35354 = state_35253__$1;
(statearr_35297_35354[(2)] = inst_35157);

(statearr_35297_35354[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (5))){
var state_35253__$1 = state_35253;
var statearr_35298_35355 = state_35253__$1;
(statearr_35298_35355[(2)] = true);

(statearr_35298_35355[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (14))){
var state_35253__$1 = state_35253;
var statearr_35299_35356 = state_35253__$1;
(statearr_35299_35356[(2)] = false);

(statearr_35299_35356[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (26))){
var inst_35213 = (state_35253[(10)]);
var inst_35220 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35213);
var state_35253__$1 = state_35253;
var statearr_35300_35357 = state_35253__$1;
(statearr_35300_35357[(2)] = inst_35220);

(statearr_35300_35357[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (16))){
var state_35253__$1 = state_35253;
var statearr_35301_35358 = state_35253__$1;
(statearr_35301_35358[(2)] = true);

(statearr_35301_35358[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (38))){
var inst_35243 = (state_35253[(2)]);
var state_35253__$1 = state_35253;
var statearr_35302_35359 = state_35253__$1;
(statearr_35302_35359[(2)] = inst_35243);

(statearr_35302_35359[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (30))){
var inst_35205 = (state_35253[(13)]);
var inst_35213 = (state_35253[(10)]);
var inst_35204 = (state_35253[(11)]);
var inst_35230 = cljs.core.empty_QMARK_(inst_35204);
var inst_35231 = (inst_35205.cljs$core$IFn$_invoke$arity$1 ? inst_35205.cljs$core$IFn$_invoke$arity$1(inst_35213) : inst_35205.call(null,inst_35213));
var inst_35232 = cljs.core.not(inst_35231);
var inst_35233 = (inst_35230) && (inst_35232);
var state_35253__$1 = state_35253;
var statearr_35303_35360 = state_35253__$1;
(statearr_35303_35360[(2)] = inst_35233);

(statearr_35303_35360[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (10))){
var inst_35157 = (state_35253[(8)]);
var inst_35177 = (state_35253[(2)]);
var inst_35178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35177,cljs.core.cst$kw$solos);
var inst_35179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35177,cljs.core.cst$kw$mutes);
var inst_35180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35177,cljs.core.cst$kw$reads);
var inst_35181 = inst_35157;
var state_35253__$1 = (function (){var statearr_35304 = state_35253;
(statearr_35304[(16)] = inst_35180);

(statearr_35304[(17)] = inst_35179);

(statearr_35304[(7)] = inst_35181);

(statearr_35304[(18)] = inst_35178);

return statearr_35304;
})();
var statearr_35305_35361 = state_35253__$1;
(statearr_35305_35361[(2)] = null);

(statearr_35305_35361[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (18))){
var inst_35195 = (state_35253[(2)]);
var state_35253__$1 = state_35253;
var statearr_35306_35362 = state_35253__$1;
(statearr_35306_35362[(2)] = inst_35195);

(statearr_35306_35362[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (37))){
var state_35253__$1 = state_35253;
var statearr_35307_35363 = state_35253__$1;
(statearr_35307_35363[(2)] = null);

(statearr_35307_35363[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35254 === (8))){
var inst_35157 = (state_35253[(8)]);
var inst_35174 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35157);
var state_35253__$1 = state_35253;
var statearr_35308_35364 = state_35253__$1;
(statearr_35308_35364[(2)] = inst_35174);

(statearr_35308_35364[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__33563__auto___35318,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33439__auto__,c__33563__auto___35318,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33440__auto__ = null;
var cljs$core$async$mix_$_state_machine__33440__auto____0 = (function (){
var statearr_35312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35312[(0)] = cljs$core$async$mix_$_state_machine__33440__auto__);

(statearr_35312[(1)] = (1));

return statearr_35312;
});
var cljs$core$async$mix_$_state_machine__33440__auto____1 = (function (state_35253){
while(true){
var ret_value__33441__auto__ = (function (){try{while(true){
var result__33442__auto__ = switch__33439__auto__(state_35253);
if(cljs.core.keyword_identical_QMARK_(result__33442__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__33442__auto__;
}
break;
}
}catch (e35313){if((e35313 instanceof Object)){
var ex__33443__auto__ = e35313;
var statearr_35314_35365 = state_35253;
(statearr_35314_35365[(5)] = ex__33443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35253);

return cljs.core.cst$kw$recur;
} else {
throw e35313;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33441__auto__,cljs.core.cst$kw$recur)){
var G__35366 = state_35253;
state_35253 = G__35366;
continue;
} else {
return ret_value__33441__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33440__auto__ = function(state_35253){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33440__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33440__auto____1.call(this,state_35253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33440__auto____0;
cljs$core$async$mix_$_state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33440__auto____1;
return cljs$core$async$mix_$_state_machine__33440__auto__;
})()
;})(switch__33439__auto__,c__33563__auto___35318,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33565__auto__ = (function (){var statearr_35315 = (f__33564__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33564__auto__.cljs$core$IFn$_invoke$arity$0() : f__33564__auto__.call(null));
(statearr_35315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33563__auto___35318);

return statearr_35315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
});})(c__33563__auto___35318,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25722__auto__ = (((p == null))?null:p);
var m__25723__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25722__auto__)]);
if(!((m__25723__auto__ == null))){
return (m__25723__auto__.cljs$core$IFn$_invoke$arity$4 ? m__25723__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__25723__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__25723__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25723__auto____$1 == null))){
return (m__25723__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__25723__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__25723__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25722__auto__ = (((p == null))?null:p);
var m__25723__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25722__auto__)]);
if(!((m__25723__auto__ == null))){
return (m__25723__auto__.cljs$core$IFn$_invoke$arity$3 ? m__25723__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__25723__auto__.call(null,p,v,ch));
} else {
var m__25723__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25723__auto____$1 == null))){
return (m__25723__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__25723__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__25723__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args35367 = [];
var len__26134__auto___35370 = arguments.length;
var i__26135__auto___35371 = (0);
while(true){
if((i__26135__auto___35371 < len__26134__auto___35370)){
args35367.push((arguments[i__26135__auto___35371]));

var G__35372 = (i__26135__auto___35371 + (1));
i__26135__auto___35371 = G__35372;
continue;
} else {
}
break;
}

var G__35369 = args35367.length;
switch (G__35369) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35367.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25722__auto__ = (((p == null))?null:p);
var m__25723__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25722__auto__)]);
if(!((m__25723__auto__ == null))){
return (m__25723__auto__.cljs$core$IFn$_invoke$arity$1 ? m__25723__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__25723__auto__.call(null,p));
} else {
var m__25723__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25723__auto____$1 == null))){
return (m__25723__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__25723__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__25723__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25722__auto__ = (((p == null))?null:p);
var m__25723__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25722__auto__)]);
if(!((m__25723__auto__ == null))){
return (m__25723__auto__.cljs$core$IFn$_invoke$arity$2 ? m__25723__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__25723__auto__.call(null,p,v));
} else {
var m__25723__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25723__auto____$1 == null))){
return (m__25723__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__25723__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__25723__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var args35375 = [];
var len__26134__auto___35503 = arguments.length;
var i__26135__auto___35504 = (0);
while(true){
if((i__26135__auto___35504 < len__26134__auto___35503)){
args35375.push((arguments[i__26135__auto___35504]));

var G__35505 = (i__26135__auto___35504 + (1));
i__26135__auto___35504 = G__35505;
continue;
} else {
}
break;
}

var G__35377 = args35375.length;
switch (G__35377) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35375.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__35378 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35378) : cljs.core.atom.call(null,G__35378));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__25059__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__25059__auto__)){
return or__25059__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__25059__auto__,mults){
return (function (p1__35374_SHARP_){
if(cljs.core.truth_((p1__35374_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35374_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35374_SHARP_.call(null,topic)))){
return p1__35374_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35374_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__25059__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35379 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35379 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35380){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35380 = meta35380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35381,meta35380__$1){
var self__ = this;
var _35381__$1 = this;
return (new cljs.core.async.t_cljs$core$async35379(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35380__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35379.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35381){
var self__ = this;
var _35381__$1 = this;
return self__.meta35380;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35379.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35379.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35379.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async35379.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35379.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35379.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__35382 = self__.mults;
var G__35383 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35382,G__35383) : cljs.core.reset_BANG_.call(null,G__35382,G__35383));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35379.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35379.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta35380], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35379.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35379";

cljs.core.async.t_cljs$core$async35379.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25665__auto__,writer__25666__auto__,opt__25667__auto__){
return cljs.core._write(writer__25666__auto__,"cljs.core.async/t_cljs$core$async35379");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35379 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35379(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35380){
return (new cljs.core.async.t_cljs$core$async35379(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35380));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35379(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33563__auto___35507 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33563__auto___35507,mults,ensure_mult,p){
return (function (){
var f__33564__auto__ = (function (){var switch__33439__auto__ = ((function (c__33563__auto___35507,mults,ensure_mult,p){
return (function (state_35455){
var state_val_35456 = (state_35455[(1)]);
if((state_val_35456 === (7))){
var inst_35451 = (state_35455[(2)]);
var state_35455__$1 = state_35455;
var statearr_35457_35508 = state_35455__$1;
(statearr_35457_35508[(2)] = inst_35451);

(statearr_35457_35508[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35456 === (20))){
var state_35455__$1 = state_35455;
var statearr_35458_35509 = state_35455__$1;
(statearr_35458_35509[(2)] = null);

(statearr_35458_35509[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35456 === (1))){
var state_35455__$1 = state_35455;
var statearr_35459_35510 = state_35455__$1;
(statearr_35459_35510[(2)] = null);

(statearr_35459_35510[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35456 === (24))){
var inst_35434 = (state_35455[(7)]);
var inst_35443 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35434);
var state_35455__$1 = state_35455;
var statearr_35460_35511 = state_35455__$1;
(statearr_35460_35511[(2)] = inst_35443);

(statearr_35460_35511[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35456 === (4))){
var inst_35386 = (state_35455[(8)]);
var inst_35386__$1 = (state_35455[(2)]);
var inst_35387 = (inst_35386__$1 == null);
var state_35455__$1 = (function (){var statearr_35461 = state_35455;
(statearr_35461[(8)] = inst_35386__$1);

return statearr_35461;
})();
if(cljs.core.truth_(inst_35387)){
var statearr_35462_35512 = state_35455__$1;
(statearr_35462_35512[(1)] = (5));

} else {
var statearr_35463_35513 = state_35455__$1;
(statearr_35463_35513[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35456 === (15))){
var inst_35428 = (state_35455[(2)]);
var state_35455__$1 = state_35455;
var statearr_35464_35514 = state_35455__$1;
(statearr_35464_35514[(2)] = inst_35428);

(statearr_35464_35514[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35456 === (21))){
var inst_35448 = (state_35455[(2)]);
var state_35455__$1 = (function (){var statearr_35465 = state_35455;
(statearr_35465[(9)] = inst_35448);

return statearr_35465;
})();
var statearr_35466_35515 = state_35455__$1;
(statearr_35466_35515[(2)] = null);

(statearr_35466_35515[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35456 === (13))){
var inst_35410 = (state_35455[(10)]);
var inst_35412 = cljs.core.chunked_seq_QMARK_(inst_35410);
var state_35455__$1 = state_35455;
if(inst_35412){
var statearr_35467_35516 = state_35455__$1;
(statearr_35467_35516[(1)] = (16));

} else {
var statearr_35468_35517 = state_35455__$1;
(statearr_35468_35517[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35456 === (22))){
var inst_35440 = (state_35455[(2)]);
var state_35455__$1 = state_35455;
if(cljs.core.truth_(inst_35440)){
var statearr_35469_35518 = state_35455__$1;
(statearr_35469_35518[(1)] = (23));

} else {
var statearr_35470_35519 = state_35455__$1;
(statearr_35470_35519[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35456 === (6))){
var inst_35436 = (state_35455[(11)]);
var inst_35434 = (state_35455[(7)]);
var inst_35386 = (state_35455[(8)]);
var inst_35434__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35386) : topic_fn.call(null,inst_35386));
var inst_35435 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_35436__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35435,inst_35434__$1);
var state_35455__$1 = (function (){var statearr_35471 = state_35455;
(statearr_35471[(11)] = inst_35436__$1);

(statearr_35471[(7)] = inst_35434__$1);

return statearr_35471;
})();
if(cljs.core.truth_(inst_35436__$1)){
var statearr_35472_35520 = state_35455__$1;
(statearr_35472_35520[(1)] = (19));

} else {
var statearr_35473_35521 = state_35455__$1;
(statearr_35473_35521[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35456 === (25))){
var inst_35445 = (state_35455[(2)]);
var state_35455__$1 = state_35455;
var statearr_35474_35522 = state_35455__$1;
(statearr_35474_35522[(2)] = inst_35445);

(statearr_35474_35522[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35456 === (17))){
var inst_35410 = (state_35455[(10)]);
var inst_35419 = cljs.core.first(inst_35410);
var inst_35420 = cljs.core.async.muxch_STAR_(inst_35419);
var inst_35421 = cljs.core.async.close_BANG_(inst_35420);
var inst_35422 = cljs.core.next(inst_35410);
var inst_35396 = inst_35422;
var inst_35397 = null;
var inst_35398 = (0);
var inst_35399 = (0);
var state_35455__$1 = (function (){var statearr_35475 = state_35455;
(statearr_35475[(12)] = inst_35396);

(statearr_35475[(13)] = inst_35399);

(statearr_35475[(14)] = inst_35398);

(statearr_35475[(15)] = inst_35421);

(statearr_35475[(16)] = inst_35397);

return statearr_35475;
})();
var statearr_35476_35523 = state_35455__$1;
(statearr_35476_35523[(2)] = null);

(statearr_35476_35523[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35456 === (3))){
var inst_35453 = (state_35455[(2)]);
var state_35455__$1 = state_35455;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35455__$1,inst_35453);
} else {
if((state_val_35456 === (12))){
var inst_35430 = (state_35455[(2)]);
var state_35455__$1 = state_35455;
var statearr_35477_35524 = state_35455__$1;
(statearr_35477_35524[(2)] = inst_35430);

(statearr_35477_35524[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35456 === (2))){
var state_35455__$1 = state_35455;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35455__$1,(4),ch);
} else {
if((state_val_35456 === (23))){
var state_35455__$1 = state_35455;
var statearr_35478_35525 = state_35455__$1;
(statearr_35478_35525[(2)] = null);

(statearr_35478_35525[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35456 === (19))){
var inst_35436 = (state_35455[(11)]);
var inst_35386 = (state_35455[(8)]);
var inst_35438 = cljs.core.async.muxch_STAR_(inst_35436);
var state_35455__$1 = state_35455;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35455__$1,(22),inst_35438,inst_35386);
} else {
if((state_val_35456 === (11))){
var inst_35396 = (state_35455[(12)]);
var inst_35410 = (state_35455[(10)]);
var inst_35410__$1 = cljs.core.seq(inst_35396);
var state_35455__$1 = (function (){var statearr_35479 = state_35455;
(statearr_35479[(10)] = inst_35410__$1);

return statearr_35479;
})();
if(inst_35410__$1){
var statearr_35480_35526 = state_35455__$1;
(statearr_35480_35526[(1)] = (13));

} else {
var statearr_35481_35527 = state_35455__$1;
(statearr_35481_35527[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35456 === (9))){
var inst_35432 = (state_35455[(2)]);
var state_35455__$1 = state_35455;
var statearr_35482_35528 = state_35455__$1;
(statearr_35482_35528[(2)] = inst_35432);

(statearr_35482_35528[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35456 === (5))){
var inst_35393 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_35394 = cljs.core.vals(inst_35393);
var inst_35395 = cljs.core.seq(inst_35394);
var inst_35396 = inst_35395;
var inst_35397 = null;
var inst_35398 = (0);
var inst_35399 = (0);
var state_35455__$1 = (function (){var statearr_35483 = state_35455;
(statearr_35483[(12)] = inst_35396);

(statearr_35483[(13)] = inst_35399);

(statearr_35483[(14)] = inst_35398);

(statearr_35483[(16)] = inst_35397);

return statearr_35483;
})();
var statearr_35484_35529 = state_35455__$1;
(statearr_35484_35529[(2)] = null);

(statearr_35484_35529[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35456 === (14))){
var state_35455__$1 = state_35455;
var statearr_35488_35530 = state_35455__$1;
(statearr_35488_35530[(2)] = null);

(statearr_35488_35530[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35456 === (16))){
var inst_35410 = (state_35455[(10)]);
var inst_35414 = cljs.core.chunk_first(inst_35410);
var inst_35415 = cljs.core.chunk_rest(inst_35410);
var inst_35416 = cljs.core.count(inst_35414);
var inst_35396 = inst_35415;
var inst_35397 = inst_35414;
var inst_35398 = inst_35416;
var inst_35399 = (0);
var state_35455__$1 = (function (){var statearr_35489 = state_35455;
(statearr_35489[(12)] = inst_35396);

(statearr_35489[(13)] = inst_35399);

(statearr_35489[(14)] = inst_35398);

(statearr_35489[(16)] = inst_35397);

return statearr_35489;
})();
var statearr_35490_35531 = state_35455__$1;
(statearr_35490_35531[(2)] = null);

(statearr_35490_35531[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35456 === (10))){
var inst_35396 = (state_35455[(12)]);
var inst_35399 = (state_35455[(13)]);
var inst_35398 = (state_35455[(14)]);
var inst_35397 = (state_35455[(16)]);
var inst_35404 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35397,inst_35399);
var inst_35405 = cljs.core.async.muxch_STAR_(inst_35404);
var inst_35406 = cljs.core.async.close_BANG_(inst_35405);
var inst_35407 = (inst_35399 + (1));
var tmp35485 = inst_35396;
var tmp35486 = inst_35398;
var tmp35487 = inst_35397;
var inst_35396__$1 = tmp35485;
var inst_35397__$1 = tmp35487;
var inst_35398__$1 = tmp35486;
var inst_35399__$1 = inst_35407;
var state_35455__$1 = (function (){var statearr_35491 = state_35455;
(statearr_35491[(12)] = inst_35396__$1);

(statearr_35491[(13)] = inst_35399__$1);

(statearr_35491[(14)] = inst_35398__$1);

(statearr_35491[(16)] = inst_35397__$1);

(statearr_35491[(17)] = inst_35406);

return statearr_35491;
})();
var statearr_35492_35532 = state_35455__$1;
(statearr_35492_35532[(2)] = null);

(statearr_35492_35532[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35456 === (18))){
var inst_35425 = (state_35455[(2)]);
var state_35455__$1 = state_35455;
var statearr_35493_35533 = state_35455__$1;
(statearr_35493_35533[(2)] = inst_35425);

(statearr_35493_35533[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35456 === (8))){
var inst_35399 = (state_35455[(13)]);
var inst_35398 = (state_35455[(14)]);
var inst_35401 = (inst_35399 < inst_35398);
var inst_35402 = inst_35401;
var state_35455__$1 = state_35455;
if(cljs.core.truth_(inst_35402)){
var statearr_35494_35534 = state_35455__$1;
(statearr_35494_35534[(1)] = (10));

} else {
var statearr_35495_35535 = state_35455__$1;
(statearr_35495_35535[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__33563__auto___35507,mults,ensure_mult,p))
;
return ((function (switch__33439__auto__,c__33563__auto___35507,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33440__auto__ = null;
var cljs$core$async$state_machine__33440__auto____0 = (function (){
var statearr_35499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35499[(0)] = cljs$core$async$state_machine__33440__auto__);

(statearr_35499[(1)] = (1));

return statearr_35499;
});
var cljs$core$async$state_machine__33440__auto____1 = (function (state_35455){
while(true){
var ret_value__33441__auto__ = (function (){try{while(true){
var result__33442__auto__ = switch__33439__auto__(state_35455);
if(cljs.core.keyword_identical_QMARK_(result__33442__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__33442__auto__;
}
break;
}
}catch (e35500){if((e35500 instanceof Object)){
var ex__33443__auto__ = e35500;
var statearr_35501_35536 = state_35455;
(statearr_35501_35536[(5)] = ex__33443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35455);

return cljs.core.cst$kw$recur;
} else {
throw e35500;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33441__auto__,cljs.core.cst$kw$recur)){
var G__35537 = state_35455;
state_35455 = G__35537;
continue;
} else {
return ret_value__33441__auto__;
}
break;
}
});
cljs$core$async$state_machine__33440__auto__ = function(state_35455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33440__auto____1.call(this,state_35455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33440__auto____0;
cljs$core$async$state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33440__auto____1;
return cljs$core$async$state_machine__33440__auto__;
})()
;})(switch__33439__auto__,c__33563__auto___35507,mults,ensure_mult,p))
})();
var state__33565__auto__ = (function (){var statearr_35502 = (f__33564__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33564__auto__.cljs$core$IFn$_invoke$arity$0() : f__33564__auto__.call(null));
(statearr_35502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33563__auto___35507);

return statearr_35502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
});})(c__33563__auto___35507,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args35538 = [];
var len__26134__auto___35541 = arguments.length;
var i__26135__auto___35542 = (0);
while(true){
if((i__26135__auto___35542 < len__26134__auto___35541)){
args35538.push((arguments[i__26135__auto___35542]));

var G__35543 = (i__26135__auto___35542 + (1));
i__26135__auto___35542 = G__35543;
continue;
} else {
}
break;
}

var G__35540 = args35538.length;
switch (G__35540) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35538.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

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
var args35545 = [];
var len__26134__auto___35548 = arguments.length;
var i__26135__auto___35549 = (0);
while(true){
if((i__26135__auto___35549 < len__26134__auto___35548)){
args35545.push((arguments[i__26135__auto___35549]));

var G__35550 = (i__26135__auto___35549 + (1));
i__26135__auto___35549 = G__35550;
continue;
} else {
}
break;
}

var G__35547 = args35545.length;
switch (G__35547) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35545.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var args35552 = [];
var len__26134__auto___35623 = arguments.length;
var i__26135__auto___35624 = (0);
while(true){
if((i__26135__auto___35624 < len__26134__auto___35623)){
args35552.push((arguments[i__26135__auto___35624]));

var G__35625 = (i__26135__auto___35624 + (1));
i__26135__auto___35624 = G__35625;
continue;
} else {
}
break;
}

var G__35554 = args35552.length;
switch (G__35554) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35552.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__33563__auto___35627 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33563__auto___35627,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33564__auto__ = (function (){var switch__33439__auto__ = ((function (c__33563__auto___35627,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35593){
var state_val_35594 = (state_35593[(1)]);
if((state_val_35594 === (7))){
var state_35593__$1 = state_35593;
var statearr_35595_35628 = state_35593__$1;
(statearr_35595_35628[(2)] = null);

(statearr_35595_35628[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35594 === (1))){
var state_35593__$1 = state_35593;
var statearr_35596_35629 = state_35593__$1;
(statearr_35596_35629[(2)] = null);

(statearr_35596_35629[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35594 === (4))){
var inst_35557 = (state_35593[(7)]);
var inst_35559 = (inst_35557 < cnt);
var state_35593__$1 = state_35593;
if(cljs.core.truth_(inst_35559)){
var statearr_35597_35630 = state_35593__$1;
(statearr_35597_35630[(1)] = (6));

} else {
var statearr_35598_35631 = state_35593__$1;
(statearr_35598_35631[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35594 === (15))){
var inst_35589 = (state_35593[(2)]);
var state_35593__$1 = state_35593;
var statearr_35599_35632 = state_35593__$1;
(statearr_35599_35632[(2)] = inst_35589);

(statearr_35599_35632[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35594 === (13))){
var inst_35582 = cljs.core.async.close_BANG_(out);
var state_35593__$1 = state_35593;
var statearr_35600_35633 = state_35593__$1;
(statearr_35600_35633[(2)] = inst_35582);

(statearr_35600_35633[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35594 === (6))){
var state_35593__$1 = state_35593;
var statearr_35601_35634 = state_35593__$1;
(statearr_35601_35634[(2)] = null);

(statearr_35601_35634[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35594 === (3))){
var inst_35591 = (state_35593[(2)]);
var state_35593__$1 = state_35593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35593__$1,inst_35591);
} else {
if((state_val_35594 === (12))){
var inst_35579 = (state_35593[(8)]);
var inst_35579__$1 = (state_35593[(2)]);
var inst_35580 = cljs.core.some(cljs.core.nil_QMARK_,inst_35579__$1);
var state_35593__$1 = (function (){var statearr_35602 = state_35593;
(statearr_35602[(8)] = inst_35579__$1);

return statearr_35602;
})();
if(cljs.core.truth_(inst_35580)){
var statearr_35603_35635 = state_35593__$1;
(statearr_35603_35635[(1)] = (13));

} else {
var statearr_35604_35636 = state_35593__$1;
(statearr_35604_35636[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35594 === (2))){
var inst_35556 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_35557 = (0);
var state_35593__$1 = (function (){var statearr_35605 = state_35593;
(statearr_35605[(7)] = inst_35557);

(statearr_35605[(9)] = inst_35556);

return statearr_35605;
})();
var statearr_35606_35637 = state_35593__$1;
(statearr_35606_35637[(2)] = null);

(statearr_35606_35637[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35594 === (11))){
var inst_35557 = (state_35593[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_35593,(10),Object,null,(9));
var inst_35566 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35557) : chs__$1.call(null,inst_35557));
var inst_35567 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35557) : done.call(null,inst_35557));
var inst_35568 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35566,inst_35567);
var state_35593__$1 = state_35593;
var statearr_35607_35638 = state_35593__$1;
(statearr_35607_35638[(2)] = inst_35568);


cljs.core.async.impl.ioc_helpers.process_exception(state_35593__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_35594 === (9))){
var inst_35557 = (state_35593[(7)]);
var inst_35570 = (state_35593[(2)]);
var inst_35571 = (inst_35557 + (1));
var inst_35557__$1 = inst_35571;
var state_35593__$1 = (function (){var statearr_35608 = state_35593;
(statearr_35608[(7)] = inst_35557__$1);

(statearr_35608[(10)] = inst_35570);

return statearr_35608;
})();
var statearr_35609_35639 = state_35593__$1;
(statearr_35609_35639[(2)] = null);

(statearr_35609_35639[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35594 === (5))){
var inst_35577 = (state_35593[(2)]);
var state_35593__$1 = (function (){var statearr_35610 = state_35593;
(statearr_35610[(11)] = inst_35577);

return statearr_35610;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35593__$1,(12),dchan);
} else {
if((state_val_35594 === (14))){
var inst_35579 = (state_35593[(8)]);
var inst_35584 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35579);
var state_35593__$1 = state_35593;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35593__$1,(16),out,inst_35584);
} else {
if((state_val_35594 === (16))){
var inst_35586 = (state_35593[(2)]);
var state_35593__$1 = (function (){var statearr_35611 = state_35593;
(statearr_35611[(12)] = inst_35586);

return statearr_35611;
})();
var statearr_35612_35640 = state_35593__$1;
(statearr_35612_35640[(2)] = null);

(statearr_35612_35640[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35594 === (10))){
var inst_35561 = (state_35593[(2)]);
var inst_35562 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35593__$1 = (function (){var statearr_35613 = state_35593;
(statearr_35613[(13)] = inst_35561);

return statearr_35613;
})();
var statearr_35614_35641 = state_35593__$1;
(statearr_35614_35641[(2)] = inst_35562);


cljs.core.async.impl.ioc_helpers.process_exception(state_35593__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_35594 === (8))){
var inst_35575 = (state_35593[(2)]);
var state_35593__$1 = state_35593;
var statearr_35615_35642 = state_35593__$1;
(statearr_35615_35642[(2)] = inst_35575);

(statearr_35615_35642[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__33563__auto___35627,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33439__auto__,c__33563__auto___35627,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33440__auto__ = null;
var cljs$core$async$state_machine__33440__auto____0 = (function (){
var statearr_35619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35619[(0)] = cljs$core$async$state_machine__33440__auto__);

(statearr_35619[(1)] = (1));

return statearr_35619;
});
var cljs$core$async$state_machine__33440__auto____1 = (function (state_35593){
while(true){
var ret_value__33441__auto__ = (function (){try{while(true){
var result__33442__auto__ = switch__33439__auto__(state_35593);
if(cljs.core.keyword_identical_QMARK_(result__33442__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__33442__auto__;
}
break;
}
}catch (e35620){if((e35620 instanceof Object)){
var ex__33443__auto__ = e35620;
var statearr_35621_35643 = state_35593;
(statearr_35621_35643[(5)] = ex__33443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35593);

return cljs.core.cst$kw$recur;
} else {
throw e35620;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33441__auto__,cljs.core.cst$kw$recur)){
var G__35644 = state_35593;
state_35593 = G__35644;
continue;
} else {
return ret_value__33441__auto__;
}
break;
}
});
cljs$core$async$state_machine__33440__auto__ = function(state_35593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33440__auto____1.call(this,state_35593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33440__auto____0;
cljs$core$async$state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33440__auto____1;
return cljs$core$async$state_machine__33440__auto__;
})()
;})(switch__33439__auto__,c__33563__auto___35627,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33565__auto__ = (function (){var statearr_35622 = (f__33564__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33564__auto__.cljs$core$IFn$_invoke$arity$0() : f__33564__auto__.call(null));
(statearr_35622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33563__auto___35627);

return statearr_35622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
});})(c__33563__auto___35627,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args35646 = [];
var len__26134__auto___35704 = arguments.length;
var i__26135__auto___35705 = (0);
while(true){
if((i__26135__auto___35705 < len__26134__auto___35704)){
args35646.push((arguments[i__26135__auto___35705]));

var G__35706 = (i__26135__auto___35705 + (1));
i__26135__auto___35705 = G__35706;
continue;
} else {
}
break;
}

var G__35648 = args35646.length;
switch (G__35648) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35646.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33563__auto___35708 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33563__auto___35708,out){
return (function (){
var f__33564__auto__ = (function (){var switch__33439__auto__ = ((function (c__33563__auto___35708,out){
return (function (state_35680){
var state_val_35681 = (state_35680[(1)]);
if((state_val_35681 === (7))){
var inst_35659 = (state_35680[(7)]);
var inst_35660 = (state_35680[(8)]);
var inst_35659__$1 = (state_35680[(2)]);
var inst_35660__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35659__$1,(0),null);
var inst_35661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35659__$1,(1),null);
var inst_35662 = (inst_35660__$1 == null);
var state_35680__$1 = (function (){var statearr_35682 = state_35680;
(statearr_35682[(7)] = inst_35659__$1);

(statearr_35682[(8)] = inst_35660__$1);

(statearr_35682[(9)] = inst_35661);

return statearr_35682;
})();
if(cljs.core.truth_(inst_35662)){
var statearr_35683_35709 = state_35680__$1;
(statearr_35683_35709[(1)] = (8));

} else {
var statearr_35684_35710 = state_35680__$1;
(statearr_35684_35710[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35681 === (1))){
var inst_35649 = cljs.core.vec(chs);
var inst_35650 = inst_35649;
var state_35680__$1 = (function (){var statearr_35685 = state_35680;
(statearr_35685[(10)] = inst_35650);

return statearr_35685;
})();
var statearr_35686_35711 = state_35680__$1;
(statearr_35686_35711[(2)] = null);

(statearr_35686_35711[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35681 === (4))){
var inst_35650 = (state_35680[(10)]);
var state_35680__$1 = state_35680;
return cljs.core.async.ioc_alts_BANG_(state_35680__$1,(7),inst_35650);
} else {
if((state_val_35681 === (6))){
var inst_35676 = (state_35680[(2)]);
var state_35680__$1 = state_35680;
var statearr_35687_35712 = state_35680__$1;
(statearr_35687_35712[(2)] = inst_35676);

(statearr_35687_35712[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35681 === (3))){
var inst_35678 = (state_35680[(2)]);
var state_35680__$1 = state_35680;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35680__$1,inst_35678);
} else {
if((state_val_35681 === (2))){
var inst_35650 = (state_35680[(10)]);
var inst_35652 = cljs.core.count(inst_35650);
var inst_35653 = (inst_35652 > (0));
var state_35680__$1 = state_35680;
if(cljs.core.truth_(inst_35653)){
var statearr_35689_35713 = state_35680__$1;
(statearr_35689_35713[(1)] = (4));

} else {
var statearr_35690_35714 = state_35680__$1;
(statearr_35690_35714[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35681 === (11))){
var inst_35650 = (state_35680[(10)]);
var inst_35669 = (state_35680[(2)]);
var tmp35688 = inst_35650;
var inst_35650__$1 = tmp35688;
var state_35680__$1 = (function (){var statearr_35691 = state_35680;
(statearr_35691[(11)] = inst_35669);

(statearr_35691[(10)] = inst_35650__$1);

return statearr_35691;
})();
var statearr_35692_35715 = state_35680__$1;
(statearr_35692_35715[(2)] = null);

(statearr_35692_35715[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35681 === (9))){
var inst_35660 = (state_35680[(8)]);
var state_35680__$1 = state_35680;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35680__$1,(11),out,inst_35660);
} else {
if((state_val_35681 === (5))){
var inst_35674 = cljs.core.async.close_BANG_(out);
var state_35680__$1 = state_35680;
var statearr_35693_35716 = state_35680__$1;
(statearr_35693_35716[(2)] = inst_35674);

(statearr_35693_35716[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35681 === (10))){
var inst_35672 = (state_35680[(2)]);
var state_35680__$1 = state_35680;
var statearr_35694_35717 = state_35680__$1;
(statearr_35694_35717[(2)] = inst_35672);

(statearr_35694_35717[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35681 === (8))){
var inst_35659 = (state_35680[(7)]);
var inst_35650 = (state_35680[(10)]);
var inst_35660 = (state_35680[(8)]);
var inst_35661 = (state_35680[(9)]);
var inst_35664 = (function (){var cs = inst_35650;
var vec__35655 = inst_35659;
var v = inst_35660;
var c = inst_35661;
return ((function (cs,vec__35655,v,c,inst_35659,inst_35650,inst_35660,inst_35661,state_val_35681,c__33563__auto___35708,out){
return (function (p1__35645_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35645_SHARP_);
});
;})(cs,vec__35655,v,c,inst_35659,inst_35650,inst_35660,inst_35661,state_val_35681,c__33563__auto___35708,out))
})();
var inst_35665 = cljs.core.filterv(inst_35664,inst_35650);
var inst_35650__$1 = inst_35665;
var state_35680__$1 = (function (){var statearr_35695 = state_35680;
(statearr_35695[(10)] = inst_35650__$1);

return statearr_35695;
})();
var statearr_35696_35718 = state_35680__$1;
(statearr_35696_35718[(2)] = null);

(statearr_35696_35718[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__33563__auto___35708,out))
;
return ((function (switch__33439__auto__,c__33563__auto___35708,out){
return (function() {
var cljs$core$async$state_machine__33440__auto__ = null;
var cljs$core$async$state_machine__33440__auto____0 = (function (){
var statearr_35700 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35700[(0)] = cljs$core$async$state_machine__33440__auto__);

(statearr_35700[(1)] = (1));

return statearr_35700;
});
var cljs$core$async$state_machine__33440__auto____1 = (function (state_35680){
while(true){
var ret_value__33441__auto__ = (function (){try{while(true){
var result__33442__auto__ = switch__33439__auto__(state_35680);
if(cljs.core.keyword_identical_QMARK_(result__33442__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__33442__auto__;
}
break;
}
}catch (e35701){if((e35701 instanceof Object)){
var ex__33443__auto__ = e35701;
var statearr_35702_35719 = state_35680;
(statearr_35702_35719[(5)] = ex__33443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35680);

return cljs.core.cst$kw$recur;
} else {
throw e35701;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33441__auto__,cljs.core.cst$kw$recur)){
var G__35720 = state_35680;
state_35680 = G__35720;
continue;
} else {
return ret_value__33441__auto__;
}
break;
}
});
cljs$core$async$state_machine__33440__auto__ = function(state_35680){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33440__auto____1.call(this,state_35680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33440__auto____0;
cljs$core$async$state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33440__auto____1;
return cljs$core$async$state_machine__33440__auto__;
})()
;})(switch__33439__auto__,c__33563__auto___35708,out))
})();
var state__33565__auto__ = (function (){var statearr_35703 = (f__33564__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33564__auto__.cljs$core$IFn$_invoke$arity$0() : f__33564__auto__.call(null));
(statearr_35703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33563__auto___35708);

return statearr_35703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
});})(c__33563__auto___35708,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

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
var args35721 = [];
var len__26134__auto___35770 = arguments.length;
var i__26135__auto___35771 = (0);
while(true){
if((i__26135__auto___35771 < len__26134__auto___35770)){
args35721.push((arguments[i__26135__auto___35771]));

var G__35772 = (i__26135__auto___35771 + (1));
i__26135__auto___35771 = G__35772;
continue;
} else {
}
break;
}

var G__35723 = args35721.length;
switch (G__35723) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35721.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33563__auto___35774 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33563__auto___35774,out){
return (function (){
var f__33564__auto__ = (function (){var switch__33439__auto__ = ((function (c__33563__auto___35774,out){
return (function (state_35747){
var state_val_35748 = (state_35747[(1)]);
if((state_val_35748 === (7))){
var inst_35729 = (state_35747[(7)]);
var inst_35729__$1 = (state_35747[(2)]);
var inst_35730 = (inst_35729__$1 == null);
var inst_35731 = cljs.core.not(inst_35730);
var state_35747__$1 = (function (){var statearr_35749 = state_35747;
(statearr_35749[(7)] = inst_35729__$1);

return statearr_35749;
})();
if(inst_35731){
var statearr_35750_35775 = state_35747__$1;
(statearr_35750_35775[(1)] = (8));

} else {
var statearr_35751_35776 = state_35747__$1;
(statearr_35751_35776[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35748 === (1))){
var inst_35724 = (0);
var state_35747__$1 = (function (){var statearr_35752 = state_35747;
(statearr_35752[(8)] = inst_35724);

return statearr_35752;
})();
var statearr_35753_35777 = state_35747__$1;
(statearr_35753_35777[(2)] = null);

(statearr_35753_35777[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35748 === (4))){
var state_35747__$1 = state_35747;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35747__$1,(7),ch);
} else {
if((state_val_35748 === (6))){
var inst_35742 = (state_35747[(2)]);
var state_35747__$1 = state_35747;
var statearr_35754_35778 = state_35747__$1;
(statearr_35754_35778[(2)] = inst_35742);

(statearr_35754_35778[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35748 === (3))){
var inst_35744 = (state_35747[(2)]);
var inst_35745 = cljs.core.async.close_BANG_(out);
var state_35747__$1 = (function (){var statearr_35755 = state_35747;
(statearr_35755[(9)] = inst_35744);

return statearr_35755;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35747__$1,inst_35745);
} else {
if((state_val_35748 === (2))){
var inst_35724 = (state_35747[(8)]);
var inst_35726 = (inst_35724 < n);
var state_35747__$1 = state_35747;
if(cljs.core.truth_(inst_35726)){
var statearr_35756_35779 = state_35747__$1;
(statearr_35756_35779[(1)] = (4));

} else {
var statearr_35757_35780 = state_35747__$1;
(statearr_35757_35780[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35748 === (11))){
var inst_35724 = (state_35747[(8)]);
var inst_35734 = (state_35747[(2)]);
var inst_35735 = (inst_35724 + (1));
var inst_35724__$1 = inst_35735;
var state_35747__$1 = (function (){var statearr_35758 = state_35747;
(statearr_35758[(8)] = inst_35724__$1);

(statearr_35758[(10)] = inst_35734);

return statearr_35758;
})();
var statearr_35759_35781 = state_35747__$1;
(statearr_35759_35781[(2)] = null);

(statearr_35759_35781[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35748 === (9))){
var state_35747__$1 = state_35747;
var statearr_35760_35782 = state_35747__$1;
(statearr_35760_35782[(2)] = null);

(statearr_35760_35782[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35748 === (5))){
var state_35747__$1 = state_35747;
var statearr_35761_35783 = state_35747__$1;
(statearr_35761_35783[(2)] = null);

(statearr_35761_35783[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35748 === (10))){
var inst_35739 = (state_35747[(2)]);
var state_35747__$1 = state_35747;
var statearr_35762_35784 = state_35747__$1;
(statearr_35762_35784[(2)] = inst_35739);

(statearr_35762_35784[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35748 === (8))){
var inst_35729 = (state_35747[(7)]);
var state_35747__$1 = state_35747;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35747__$1,(11),out,inst_35729);
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
});})(c__33563__auto___35774,out))
;
return ((function (switch__33439__auto__,c__33563__auto___35774,out){
return (function() {
var cljs$core$async$state_machine__33440__auto__ = null;
var cljs$core$async$state_machine__33440__auto____0 = (function (){
var statearr_35766 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35766[(0)] = cljs$core$async$state_machine__33440__auto__);

(statearr_35766[(1)] = (1));

return statearr_35766;
});
var cljs$core$async$state_machine__33440__auto____1 = (function (state_35747){
while(true){
var ret_value__33441__auto__ = (function (){try{while(true){
var result__33442__auto__ = switch__33439__auto__(state_35747);
if(cljs.core.keyword_identical_QMARK_(result__33442__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__33442__auto__;
}
break;
}
}catch (e35767){if((e35767 instanceof Object)){
var ex__33443__auto__ = e35767;
var statearr_35768_35785 = state_35747;
(statearr_35768_35785[(5)] = ex__33443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35747);

return cljs.core.cst$kw$recur;
} else {
throw e35767;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33441__auto__,cljs.core.cst$kw$recur)){
var G__35786 = state_35747;
state_35747 = G__35786;
continue;
} else {
return ret_value__33441__auto__;
}
break;
}
});
cljs$core$async$state_machine__33440__auto__ = function(state_35747){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33440__auto____1.call(this,state_35747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33440__auto____0;
cljs$core$async$state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33440__auto____1;
return cljs$core$async$state_machine__33440__auto__;
})()
;})(switch__33439__auto__,c__33563__auto___35774,out))
})();
var state__33565__auto__ = (function (){var statearr_35769 = (f__33564__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33564__auto__.cljs$core$IFn$_invoke$arity$0() : f__33564__auto__.call(null));
(statearr_35769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33563__auto___35774);

return statearr_35769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
});})(c__33563__auto___35774,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35796 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35796 = (function (map_LT_,f,ch,meta35797){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35797 = meta35797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35798,meta35797__$1){
var self__ = this;
var _35798__$1 = this;
return (new cljs.core.async.t_cljs$core$async35796(self__.map_LT_,self__.f,self__.ch,meta35797__$1));
});

cljs.core.async.t_cljs$core$async35796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35798){
var self__ = this;
var _35798__$1 = this;
return self__.meta35797;
});

cljs.core.async.t_cljs$core$async35796.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35796.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async35796.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async35796.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35796.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35799 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35799 = (function (map_LT_,f,ch,meta35797,_,fn1,meta35800){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35797 = meta35797;
this._ = _;
this.fn1 = fn1;
this.meta35800 = meta35800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35801,meta35800__$1){
var self__ = this;
var _35801__$1 = this;
return (new cljs.core.async.t_cljs$core$async35799(self__.map_LT_,self__.f,self__.ch,self__.meta35797,self__._,self__.fn1,meta35800__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35799.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35801){
var self__ = this;
var _35801__$1 = this;
return self__.meta35800;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35799.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35799.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35799.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35799.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35787_SHARP_){
var G__35802 = (((p1__35787_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35787_SHARP_) : self__.f.call(null,p1__35787_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35802) : f1.call(null,G__35802));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35799.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta35797,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async35796], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta35800], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35799.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35799";

cljs.core.async.t_cljs$core$async35799.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25665__auto__,writer__25666__auto__,opt__25667__auto__){
return cljs.core._write(writer__25666__auto__,"cljs.core.async/t_cljs$core$async35799");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35799 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35799(map_LT___$1,f__$1,ch__$1,meta35797__$1,___$2,fn1__$1,meta35800){
return (new cljs.core.async.t_cljs$core$async35799(map_LT___$1,f__$1,ch__$1,meta35797__$1,___$2,fn1__$1,meta35800));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35799(self__.map_LT_,self__.f,self__.ch,self__.meta35797,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25047__auto__ = ret;
if(cljs.core.truth_(and__25047__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__25047__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35803 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35803) : self__.f.call(null,G__35803));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35796.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35796.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35796.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta35797], null);
});

cljs.core.async.t_cljs$core$async35796.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35796.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35796";

cljs.core.async.t_cljs$core$async35796.cljs$lang$ctorPrWriter = (function (this__25665__auto__,writer__25666__auto__,opt__25667__auto__){
return cljs.core._write(writer__25666__auto__,"cljs.core.async/t_cljs$core$async35796");
});

cljs.core.async.__GT_t_cljs$core$async35796 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35796(map_LT___$1,f__$1,ch__$1,meta35797){
return (new cljs.core.async.t_cljs$core$async35796(map_LT___$1,f__$1,ch__$1,meta35797));
});

}

return (new cljs.core.async.t_cljs$core$async35796(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35807 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35807 = (function (map_GT_,f,ch,meta35808){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta35808 = meta35808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35809,meta35808__$1){
var self__ = this;
var _35809__$1 = this;
return (new cljs.core.async.t_cljs$core$async35807(self__.map_GT_,self__.f,self__.ch,meta35808__$1));
});

cljs.core.async.t_cljs$core$async35807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35809){
var self__ = this;
var _35809__$1 = this;
return self__.meta35808;
});

cljs.core.async.t_cljs$core$async35807.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35807.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async35807.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35807.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35807.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35807.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async35807.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta35808], null);
});

cljs.core.async.t_cljs$core$async35807.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35807";

cljs.core.async.t_cljs$core$async35807.cljs$lang$ctorPrWriter = (function (this__25665__auto__,writer__25666__auto__,opt__25667__auto__){
return cljs.core._write(writer__25666__auto__,"cljs.core.async/t_cljs$core$async35807");
});

cljs.core.async.__GT_t_cljs$core$async35807 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35807(map_GT___$1,f__$1,ch__$1,meta35808){
return (new cljs.core.async.t_cljs$core$async35807(map_GT___$1,f__$1,ch__$1,meta35808));
});

}

return (new cljs.core.async.t_cljs$core$async35807(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35813 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35813 = (function (filter_GT_,p,ch,meta35814){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta35814 = meta35814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35815,meta35814__$1){
var self__ = this;
var _35815__$1 = this;
return (new cljs.core.async.t_cljs$core$async35813(self__.filter_GT_,self__.p,self__.ch,meta35814__$1));
});

cljs.core.async.t_cljs$core$async35813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35815){
var self__ = this;
var _35815__$1 = this;
return self__.meta35814;
});

cljs.core.async.t_cljs$core$async35813.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35813.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async35813.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async35813.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35813.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35813.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35813.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta35814], null);
});

cljs.core.async.t_cljs$core$async35813.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35813.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35813";

cljs.core.async.t_cljs$core$async35813.cljs$lang$ctorPrWriter = (function (this__25665__auto__,writer__25666__auto__,opt__25667__auto__){
return cljs.core._write(writer__25666__auto__,"cljs.core.async/t_cljs$core$async35813");
});

cljs.core.async.__GT_t_cljs$core$async35813 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35813(filter_GT___$1,p__$1,ch__$1,meta35814){
return (new cljs.core.async.t_cljs$core$async35813(filter_GT___$1,p__$1,ch__$1,meta35814));
});

}

return (new cljs.core.async.t_cljs$core$async35813(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args35816 = [];
var len__26134__auto___35860 = arguments.length;
var i__26135__auto___35861 = (0);
while(true){
if((i__26135__auto___35861 < len__26134__auto___35860)){
args35816.push((arguments[i__26135__auto___35861]));

var G__35862 = (i__26135__auto___35861 + (1));
i__26135__auto___35861 = G__35862;
continue;
} else {
}
break;
}

var G__35818 = args35816.length;
switch (G__35818) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35816.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33563__auto___35864 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33563__auto___35864,out){
return (function (){
var f__33564__auto__ = (function (){var switch__33439__auto__ = ((function (c__33563__auto___35864,out){
return (function (state_35839){
var state_val_35840 = (state_35839[(1)]);
if((state_val_35840 === (7))){
var inst_35835 = (state_35839[(2)]);
var state_35839__$1 = state_35839;
var statearr_35841_35865 = state_35839__$1;
(statearr_35841_35865[(2)] = inst_35835);

(statearr_35841_35865[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35840 === (1))){
var state_35839__$1 = state_35839;
var statearr_35842_35866 = state_35839__$1;
(statearr_35842_35866[(2)] = null);

(statearr_35842_35866[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35840 === (4))){
var inst_35821 = (state_35839[(7)]);
var inst_35821__$1 = (state_35839[(2)]);
var inst_35822 = (inst_35821__$1 == null);
var state_35839__$1 = (function (){var statearr_35843 = state_35839;
(statearr_35843[(7)] = inst_35821__$1);

return statearr_35843;
})();
if(cljs.core.truth_(inst_35822)){
var statearr_35844_35867 = state_35839__$1;
(statearr_35844_35867[(1)] = (5));

} else {
var statearr_35845_35868 = state_35839__$1;
(statearr_35845_35868[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35840 === (6))){
var inst_35821 = (state_35839[(7)]);
var inst_35826 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35821) : p.call(null,inst_35821));
var state_35839__$1 = state_35839;
if(cljs.core.truth_(inst_35826)){
var statearr_35846_35869 = state_35839__$1;
(statearr_35846_35869[(1)] = (8));

} else {
var statearr_35847_35870 = state_35839__$1;
(statearr_35847_35870[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35840 === (3))){
var inst_35837 = (state_35839[(2)]);
var state_35839__$1 = state_35839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35839__$1,inst_35837);
} else {
if((state_val_35840 === (2))){
var state_35839__$1 = state_35839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35839__$1,(4),ch);
} else {
if((state_val_35840 === (11))){
var inst_35829 = (state_35839[(2)]);
var state_35839__$1 = state_35839;
var statearr_35848_35871 = state_35839__$1;
(statearr_35848_35871[(2)] = inst_35829);

(statearr_35848_35871[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35840 === (9))){
var state_35839__$1 = state_35839;
var statearr_35849_35872 = state_35839__$1;
(statearr_35849_35872[(2)] = null);

(statearr_35849_35872[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35840 === (5))){
var inst_35824 = cljs.core.async.close_BANG_(out);
var state_35839__$1 = state_35839;
var statearr_35850_35873 = state_35839__$1;
(statearr_35850_35873[(2)] = inst_35824);

(statearr_35850_35873[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35840 === (10))){
var inst_35832 = (state_35839[(2)]);
var state_35839__$1 = (function (){var statearr_35851 = state_35839;
(statearr_35851[(8)] = inst_35832);

return statearr_35851;
})();
var statearr_35852_35874 = state_35839__$1;
(statearr_35852_35874[(2)] = null);

(statearr_35852_35874[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35840 === (8))){
var inst_35821 = (state_35839[(7)]);
var state_35839__$1 = state_35839;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35839__$1,(11),out,inst_35821);
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
});})(c__33563__auto___35864,out))
;
return ((function (switch__33439__auto__,c__33563__auto___35864,out){
return (function() {
var cljs$core$async$state_machine__33440__auto__ = null;
var cljs$core$async$state_machine__33440__auto____0 = (function (){
var statearr_35856 = [null,null,null,null,null,null,null,null,null];
(statearr_35856[(0)] = cljs$core$async$state_machine__33440__auto__);

(statearr_35856[(1)] = (1));

return statearr_35856;
});
var cljs$core$async$state_machine__33440__auto____1 = (function (state_35839){
while(true){
var ret_value__33441__auto__ = (function (){try{while(true){
var result__33442__auto__ = switch__33439__auto__(state_35839);
if(cljs.core.keyword_identical_QMARK_(result__33442__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__33442__auto__;
}
break;
}
}catch (e35857){if((e35857 instanceof Object)){
var ex__33443__auto__ = e35857;
var statearr_35858_35875 = state_35839;
(statearr_35858_35875[(5)] = ex__33443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35839);

return cljs.core.cst$kw$recur;
} else {
throw e35857;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33441__auto__,cljs.core.cst$kw$recur)){
var G__35876 = state_35839;
state_35839 = G__35876;
continue;
} else {
return ret_value__33441__auto__;
}
break;
}
});
cljs$core$async$state_machine__33440__auto__ = function(state_35839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33440__auto____1.call(this,state_35839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33440__auto____0;
cljs$core$async$state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33440__auto____1;
return cljs$core$async$state_machine__33440__auto__;
})()
;})(switch__33439__auto__,c__33563__auto___35864,out))
})();
var state__33565__auto__ = (function (){var statearr_35859 = (f__33564__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33564__auto__.cljs$core$IFn$_invoke$arity$0() : f__33564__auto__.call(null));
(statearr_35859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33563__auto___35864);

return statearr_35859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
});})(c__33563__auto___35864,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args35877 = [];
var len__26134__auto___35880 = arguments.length;
var i__26135__auto___35881 = (0);
while(true){
if((i__26135__auto___35881 < len__26134__auto___35880)){
args35877.push((arguments[i__26135__auto___35881]));

var G__35882 = (i__26135__auto___35881 + (1));
i__26135__auto___35881 = G__35882;
continue;
} else {
}
break;
}

var G__35879 = args35877.length;
switch (G__35879) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35877.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33563__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33563__auto__){
return (function (){
var f__33564__auto__ = (function (){var switch__33439__auto__ = ((function (c__33563__auto__){
return (function (state_36049){
var state_val_36050 = (state_36049[(1)]);
if((state_val_36050 === (7))){
var inst_36045 = (state_36049[(2)]);
var state_36049__$1 = state_36049;
var statearr_36051_36092 = state_36049__$1;
(statearr_36051_36092[(2)] = inst_36045);

(statearr_36051_36092[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36050 === (20))){
var inst_36015 = (state_36049[(7)]);
var inst_36026 = (state_36049[(2)]);
var inst_36027 = cljs.core.next(inst_36015);
var inst_36001 = inst_36027;
var inst_36002 = null;
var inst_36003 = (0);
var inst_36004 = (0);
var state_36049__$1 = (function (){var statearr_36052 = state_36049;
(statearr_36052[(8)] = inst_36001);

(statearr_36052[(9)] = inst_36004);

(statearr_36052[(10)] = inst_36002);

(statearr_36052[(11)] = inst_36003);

(statearr_36052[(12)] = inst_36026);

return statearr_36052;
})();
var statearr_36053_36093 = state_36049__$1;
(statearr_36053_36093[(2)] = null);

(statearr_36053_36093[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36050 === (1))){
var state_36049__$1 = state_36049;
var statearr_36054_36094 = state_36049__$1;
(statearr_36054_36094[(2)] = null);

(statearr_36054_36094[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36050 === (4))){
var inst_35990 = (state_36049[(13)]);
var inst_35990__$1 = (state_36049[(2)]);
var inst_35991 = (inst_35990__$1 == null);
var state_36049__$1 = (function (){var statearr_36055 = state_36049;
(statearr_36055[(13)] = inst_35990__$1);

return statearr_36055;
})();
if(cljs.core.truth_(inst_35991)){
var statearr_36056_36095 = state_36049__$1;
(statearr_36056_36095[(1)] = (5));

} else {
var statearr_36057_36096 = state_36049__$1;
(statearr_36057_36096[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36050 === (15))){
var state_36049__$1 = state_36049;
var statearr_36061_36097 = state_36049__$1;
(statearr_36061_36097[(2)] = null);

(statearr_36061_36097[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36050 === (21))){
var state_36049__$1 = state_36049;
var statearr_36062_36098 = state_36049__$1;
(statearr_36062_36098[(2)] = null);

(statearr_36062_36098[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36050 === (13))){
var inst_36001 = (state_36049[(8)]);
var inst_36004 = (state_36049[(9)]);
var inst_36002 = (state_36049[(10)]);
var inst_36003 = (state_36049[(11)]);
var inst_36011 = (state_36049[(2)]);
var inst_36012 = (inst_36004 + (1));
var tmp36058 = inst_36001;
var tmp36059 = inst_36002;
var tmp36060 = inst_36003;
var inst_36001__$1 = tmp36058;
var inst_36002__$1 = tmp36059;
var inst_36003__$1 = tmp36060;
var inst_36004__$1 = inst_36012;
var state_36049__$1 = (function (){var statearr_36063 = state_36049;
(statearr_36063[(8)] = inst_36001__$1);

(statearr_36063[(9)] = inst_36004__$1);

(statearr_36063[(10)] = inst_36002__$1);

(statearr_36063[(11)] = inst_36003__$1);

(statearr_36063[(14)] = inst_36011);

return statearr_36063;
})();
var statearr_36064_36099 = state_36049__$1;
(statearr_36064_36099[(2)] = null);

(statearr_36064_36099[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36050 === (22))){
var state_36049__$1 = state_36049;
var statearr_36065_36100 = state_36049__$1;
(statearr_36065_36100[(2)] = null);

(statearr_36065_36100[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36050 === (6))){
var inst_35990 = (state_36049[(13)]);
var inst_35999 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35990) : f.call(null,inst_35990));
var inst_36000 = cljs.core.seq(inst_35999);
var inst_36001 = inst_36000;
var inst_36002 = null;
var inst_36003 = (0);
var inst_36004 = (0);
var state_36049__$1 = (function (){var statearr_36066 = state_36049;
(statearr_36066[(8)] = inst_36001);

(statearr_36066[(9)] = inst_36004);

(statearr_36066[(10)] = inst_36002);

(statearr_36066[(11)] = inst_36003);

return statearr_36066;
})();
var statearr_36067_36101 = state_36049__$1;
(statearr_36067_36101[(2)] = null);

(statearr_36067_36101[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36050 === (17))){
var inst_36015 = (state_36049[(7)]);
var inst_36019 = cljs.core.chunk_first(inst_36015);
var inst_36020 = cljs.core.chunk_rest(inst_36015);
var inst_36021 = cljs.core.count(inst_36019);
var inst_36001 = inst_36020;
var inst_36002 = inst_36019;
var inst_36003 = inst_36021;
var inst_36004 = (0);
var state_36049__$1 = (function (){var statearr_36068 = state_36049;
(statearr_36068[(8)] = inst_36001);

(statearr_36068[(9)] = inst_36004);

(statearr_36068[(10)] = inst_36002);

(statearr_36068[(11)] = inst_36003);

return statearr_36068;
})();
var statearr_36069_36102 = state_36049__$1;
(statearr_36069_36102[(2)] = null);

(statearr_36069_36102[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36050 === (3))){
var inst_36047 = (state_36049[(2)]);
var state_36049__$1 = state_36049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36049__$1,inst_36047);
} else {
if((state_val_36050 === (12))){
var inst_36035 = (state_36049[(2)]);
var state_36049__$1 = state_36049;
var statearr_36070_36103 = state_36049__$1;
(statearr_36070_36103[(2)] = inst_36035);

(statearr_36070_36103[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36050 === (2))){
var state_36049__$1 = state_36049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36049__$1,(4),in$);
} else {
if((state_val_36050 === (23))){
var inst_36043 = (state_36049[(2)]);
var state_36049__$1 = state_36049;
var statearr_36071_36104 = state_36049__$1;
(statearr_36071_36104[(2)] = inst_36043);

(statearr_36071_36104[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36050 === (19))){
var inst_36030 = (state_36049[(2)]);
var state_36049__$1 = state_36049;
var statearr_36072_36105 = state_36049__$1;
(statearr_36072_36105[(2)] = inst_36030);

(statearr_36072_36105[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36050 === (11))){
var inst_36001 = (state_36049[(8)]);
var inst_36015 = (state_36049[(7)]);
var inst_36015__$1 = cljs.core.seq(inst_36001);
var state_36049__$1 = (function (){var statearr_36073 = state_36049;
(statearr_36073[(7)] = inst_36015__$1);

return statearr_36073;
})();
if(inst_36015__$1){
var statearr_36074_36106 = state_36049__$1;
(statearr_36074_36106[(1)] = (14));

} else {
var statearr_36075_36107 = state_36049__$1;
(statearr_36075_36107[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36050 === (9))){
var inst_36037 = (state_36049[(2)]);
var inst_36038 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36049__$1 = (function (){var statearr_36076 = state_36049;
(statearr_36076[(15)] = inst_36037);

return statearr_36076;
})();
if(cljs.core.truth_(inst_36038)){
var statearr_36077_36108 = state_36049__$1;
(statearr_36077_36108[(1)] = (21));

} else {
var statearr_36078_36109 = state_36049__$1;
(statearr_36078_36109[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36050 === (5))){
var inst_35993 = cljs.core.async.close_BANG_(out);
var state_36049__$1 = state_36049;
var statearr_36079_36110 = state_36049__$1;
(statearr_36079_36110[(2)] = inst_35993);

(statearr_36079_36110[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36050 === (14))){
var inst_36015 = (state_36049[(7)]);
var inst_36017 = cljs.core.chunked_seq_QMARK_(inst_36015);
var state_36049__$1 = state_36049;
if(inst_36017){
var statearr_36080_36111 = state_36049__$1;
(statearr_36080_36111[(1)] = (17));

} else {
var statearr_36081_36112 = state_36049__$1;
(statearr_36081_36112[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36050 === (16))){
var inst_36033 = (state_36049[(2)]);
var state_36049__$1 = state_36049;
var statearr_36082_36113 = state_36049__$1;
(statearr_36082_36113[(2)] = inst_36033);

(statearr_36082_36113[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36050 === (10))){
var inst_36004 = (state_36049[(9)]);
var inst_36002 = (state_36049[(10)]);
var inst_36009 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36002,inst_36004);
var state_36049__$1 = state_36049;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36049__$1,(13),out,inst_36009);
} else {
if((state_val_36050 === (18))){
var inst_36015 = (state_36049[(7)]);
var inst_36024 = cljs.core.first(inst_36015);
var state_36049__$1 = state_36049;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36049__$1,(20),out,inst_36024);
} else {
if((state_val_36050 === (8))){
var inst_36004 = (state_36049[(9)]);
var inst_36003 = (state_36049[(11)]);
var inst_36006 = (inst_36004 < inst_36003);
var inst_36007 = inst_36006;
var state_36049__$1 = state_36049;
if(cljs.core.truth_(inst_36007)){
var statearr_36083_36114 = state_36049__$1;
(statearr_36083_36114[(1)] = (10));

} else {
var statearr_36084_36115 = state_36049__$1;
(statearr_36084_36115[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__33563__auto__))
;
return ((function (switch__33439__auto__,c__33563__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33440__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33440__auto____0 = (function (){
var statearr_36088 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36088[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33440__auto__);

(statearr_36088[(1)] = (1));

return statearr_36088;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33440__auto____1 = (function (state_36049){
while(true){
var ret_value__33441__auto__ = (function (){try{while(true){
var result__33442__auto__ = switch__33439__auto__(state_36049);
if(cljs.core.keyword_identical_QMARK_(result__33442__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__33442__auto__;
}
break;
}
}catch (e36089){if((e36089 instanceof Object)){
var ex__33443__auto__ = e36089;
var statearr_36090_36116 = state_36049;
(statearr_36090_36116[(5)] = ex__33443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36049);

return cljs.core.cst$kw$recur;
} else {
throw e36089;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33441__auto__,cljs.core.cst$kw$recur)){
var G__36117 = state_36049;
state_36049 = G__36117;
continue;
} else {
return ret_value__33441__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33440__auto__ = function(state_36049){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33440__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33440__auto____1.call(this,state_36049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33440__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33440__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33440__auto__;
})()
;})(switch__33439__auto__,c__33563__auto__))
})();
var state__33565__auto__ = (function (){var statearr_36091 = (f__33564__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33564__auto__.cljs$core$IFn$_invoke$arity$0() : f__33564__auto__.call(null));
(statearr_36091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33563__auto__);

return statearr_36091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
});})(c__33563__auto__))
);

return c__33563__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args36118 = [];
var len__26134__auto___36121 = arguments.length;
var i__26135__auto___36122 = (0);
while(true){
if((i__26135__auto___36122 < len__26134__auto___36121)){
args36118.push((arguments[i__26135__auto___36122]));

var G__36123 = (i__26135__auto___36122 + (1));
i__26135__auto___36122 = G__36123;
continue;
} else {
}
break;
}

var G__36120 = args36118.length;
switch (G__36120) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36118.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args36125 = [];
var len__26134__auto___36128 = arguments.length;
var i__26135__auto___36129 = (0);
while(true){
if((i__26135__auto___36129 < len__26134__auto___36128)){
args36125.push((arguments[i__26135__auto___36129]));

var G__36130 = (i__26135__auto___36129 + (1));
i__26135__auto___36129 = G__36130;
continue;
} else {
}
break;
}

var G__36127 = args36125.length;
switch (G__36127) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36125.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args36132 = [];
var len__26134__auto___36183 = arguments.length;
var i__26135__auto___36184 = (0);
while(true){
if((i__26135__auto___36184 < len__26134__auto___36183)){
args36132.push((arguments[i__26135__auto___36184]));

var G__36185 = (i__26135__auto___36184 + (1));
i__26135__auto___36184 = G__36185;
continue;
} else {
}
break;
}

var G__36134 = args36132.length;
switch (G__36134) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36132.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33563__auto___36187 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33563__auto___36187,out){
return (function (){
var f__33564__auto__ = (function (){var switch__33439__auto__ = ((function (c__33563__auto___36187,out){
return (function (state_36158){
var state_val_36159 = (state_36158[(1)]);
if((state_val_36159 === (7))){
var inst_36153 = (state_36158[(2)]);
var state_36158__$1 = state_36158;
var statearr_36160_36188 = state_36158__$1;
(statearr_36160_36188[(2)] = inst_36153);

(statearr_36160_36188[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36159 === (1))){
var inst_36135 = null;
var state_36158__$1 = (function (){var statearr_36161 = state_36158;
(statearr_36161[(7)] = inst_36135);

return statearr_36161;
})();
var statearr_36162_36189 = state_36158__$1;
(statearr_36162_36189[(2)] = null);

(statearr_36162_36189[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36159 === (4))){
var inst_36138 = (state_36158[(8)]);
var inst_36138__$1 = (state_36158[(2)]);
var inst_36139 = (inst_36138__$1 == null);
var inst_36140 = cljs.core.not(inst_36139);
var state_36158__$1 = (function (){var statearr_36163 = state_36158;
(statearr_36163[(8)] = inst_36138__$1);

return statearr_36163;
})();
if(inst_36140){
var statearr_36164_36190 = state_36158__$1;
(statearr_36164_36190[(1)] = (5));

} else {
var statearr_36165_36191 = state_36158__$1;
(statearr_36165_36191[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36159 === (6))){
var state_36158__$1 = state_36158;
var statearr_36166_36192 = state_36158__$1;
(statearr_36166_36192[(2)] = null);

(statearr_36166_36192[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36159 === (3))){
var inst_36155 = (state_36158[(2)]);
var inst_36156 = cljs.core.async.close_BANG_(out);
var state_36158__$1 = (function (){var statearr_36167 = state_36158;
(statearr_36167[(9)] = inst_36155);

return statearr_36167;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36158__$1,inst_36156);
} else {
if((state_val_36159 === (2))){
var state_36158__$1 = state_36158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36158__$1,(4),ch);
} else {
if((state_val_36159 === (11))){
var inst_36138 = (state_36158[(8)]);
var inst_36147 = (state_36158[(2)]);
var inst_36135 = inst_36138;
var state_36158__$1 = (function (){var statearr_36168 = state_36158;
(statearr_36168[(10)] = inst_36147);

(statearr_36168[(7)] = inst_36135);

return statearr_36168;
})();
var statearr_36169_36193 = state_36158__$1;
(statearr_36169_36193[(2)] = null);

(statearr_36169_36193[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36159 === (9))){
var inst_36138 = (state_36158[(8)]);
var state_36158__$1 = state_36158;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36158__$1,(11),out,inst_36138);
} else {
if((state_val_36159 === (5))){
var inst_36138 = (state_36158[(8)]);
var inst_36135 = (state_36158[(7)]);
var inst_36142 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36138,inst_36135);
var state_36158__$1 = state_36158;
if(inst_36142){
var statearr_36171_36194 = state_36158__$1;
(statearr_36171_36194[(1)] = (8));

} else {
var statearr_36172_36195 = state_36158__$1;
(statearr_36172_36195[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36159 === (10))){
var inst_36150 = (state_36158[(2)]);
var state_36158__$1 = state_36158;
var statearr_36173_36196 = state_36158__$1;
(statearr_36173_36196[(2)] = inst_36150);

(statearr_36173_36196[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36159 === (8))){
var inst_36135 = (state_36158[(7)]);
var tmp36170 = inst_36135;
var inst_36135__$1 = tmp36170;
var state_36158__$1 = (function (){var statearr_36174 = state_36158;
(statearr_36174[(7)] = inst_36135__$1);

return statearr_36174;
})();
var statearr_36175_36197 = state_36158__$1;
(statearr_36175_36197[(2)] = null);

(statearr_36175_36197[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__33563__auto___36187,out))
;
return ((function (switch__33439__auto__,c__33563__auto___36187,out){
return (function() {
var cljs$core$async$state_machine__33440__auto__ = null;
var cljs$core$async$state_machine__33440__auto____0 = (function (){
var statearr_36179 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36179[(0)] = cljs$core$async$state_machine__33440__auto__);

(statearr_36179[(1)] = (1));

return statearr_36179;
});
var cljs$core$async$state_machine__33440__auto____1 = (function (state_36158){
while(true){
var ret_value__33441__auto__ = (function (){try{while(true){
var result__33442__auto__ = switch__33439__auto__(state_36158);
if(cljs.core.keyword_identical_QMARK_(result__33442__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__33442__auto__;
}
break;
}
}catch (e36180){if((e36180 instanceof Object)){
var ex__33443__auto__ = e36180;
var statearr_36181_36198 = state_36158;
(statearr_36181_36198[(5)] = ex__33443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36158);

return cljs.core.cst$kw$recur;
} else {
throw e36180;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33441__auto__,cljs.core.cst$kw$recur)){
var G__36199 = state_36158;
state_36158 = G__36199;
continue;
} else {
return ret_value__33441__auto__;
}
break;
}
});
cljs$core$async$state_machine__33440__auto__ = function(state_36158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33440__auto____1.call(this,state_36158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33440__auto____0;
cljs$core$async$state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33440__auto____1;
return cljs$core$async$state_machine__33440__auto__;
})()
;})(switch__33439__auto__,c__33563__auto___36187,out))
})();
var state__33565__auto__ = (function (){var statearr_36182 = (f__33564__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33564__auto__.cljs$core$IFn$_invoke$arity$0() : f__33564__auto__.call(null));
(statearr_36182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33563__auto___36187);

return statearr_36182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
});})(c__33563__auto___36187,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args36200 = [];
var len__26134__auto___36270 = arguments.length;
var i__26135__auto___36271 = (0);
while(true){
if((i__26135__auto___36271 < len__26134__auto___36270)){
args36200.push((arguments[i__26135__auto___36271]));

var G__36272 = (i__26135__auto___36271 + (1));
i__26135__auto___36271 = G__36272;
continue;
} else {
}
break;
}

var G__36202 = args36200.length;
switch (G__36202) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36200.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33563__auto___36274 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33563__auto___36274,out){
return (function (){
var f__33564__auto__ = (function (){var switch__33439__auto__ = ((function (c__33563__auto___36274,out){
return (function (state_36240){
var state_val_36241 = (state_36240[(1)]);
if((state_val_36241 === (7))){
var inst_36236 = (state_36240[(2)]);
var state_36240__$1 = state_36240;
var statearr_36242_36275 = state_36240__$1;
(statearr_36242_36275[(2)] = inst_36236);

(statearr_36242_36275[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36241 === (1))){
var inst_36203 = (new Array(n));
var inst_36204 = inst_36203;
var inst_36205 = (0);
var state_36240__$1 = (function (){var statearr_36243 = state_36240;
(statearr_36243[(7)] = inst_36205);

(statearr_36243[(8)] = inst_36204);

return statearr_36243;
})();
var statearr_36244_36276 = state_36240__$1;
(statearr_36244_36276[(2)] = null);

(statearr_36244_36276[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36241 === (4))){
var inst_36208 = (state_36240[(9)]);
var inst_36208__$1 = (state_36240[(2)]);
var inst_36209 = (inst_36208__$1 == null);
var inst_36210 = cljs.core.not(inst_36209);
var state_36240__$1 = (function (){var statearr_36245 = state_36240;
(statearr_36245[(9)] = inst_36208__$1);

return statearr_36245;
})();
if(inst_36210){
var statearr_36246_36277 = state_36240__$1;
(statearr_36246_36277[(1)] = (5));

} else {
var statearr_36247_36278 = state_36240__$1;
(statearr_36247_36278[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36241 === (15))){
var inst_36230 = (state_36240[(2)]);
var state_36240__$1 = state_36240;
var statearr_36248_36279 = state_36240__$1;
(statearr_36248_36279[(2)] = inst_36230);

(statearr_36248_36279[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36241 === (13))){
var state_36240__$1 = state_36240;
var statearr_36249_36280 = state_36240__$1;
(statearr_36249_36280[(2)] = null);

(statearr_36249_36280[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36241 === (6))){
var inst_36205 = (state_36240[(7)]);
var inst_36226 = (inst_36205 > (0));
var state_36240__$1 = state_36240;
if(cljs.core.truth_(inst_36226)){
var statearr_36250_36281 = state_36240__$1;
(statearr_36250_36281[(1)] = (12));

} else {
var statearr_36251_36282 = state_36240__$1;
(statearr_36251_36282[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36241 === (3))){
var inst_36238 = (state_36240[(2)]);
var state_36240__$1 = state_36240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36240__$1,inst_36238);
} else {
if((state_val_36241 === (12))){
var inst_36204 = (state_36240[(8)]);
var inst_36228 = cljs.core.vec(inst_36204);
var state_36240__$1 = state_36240;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36240__$1,(15),out,inst_36228);
} else {
if((state_val_36241 === (2))){
var state_36240__$1 = state_36240;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36240__$1,(4),ch);
} else {
if((state_val_36241 === (11))){
var inst_36220 = (state_36240[(2)]);
var inst_36221 = (new Array(n));
var inst_36204 = inst_36221;
var inst_36205 = (0);
var state_36240__$1 = (function (){var statearr_36252 = state_36240;
(statearr_36252[(7)] = inst_36205);

(statearr_36252[(8)] = inst_36204);

(statearr_36252[(10)] = inst_36220);

return statearr_36252;
})();
var statearr_36253_36283 = state_36240__$1;
(statearr_36253_36283[(2)] = null);

(statearr_36253_36283[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36241 === (9))){
var inst_36204 = (state_36240[(8)]);
var inst_36218 = cljs.core.vec(inst_36204);
var state_36240__$1 = state_36240;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36240__$1,(11),out,inst_36218);
} else {
if((state_val_36241 === (5))){
var inst_36208 = (state_36240[(9)]);
var inst_36205 = (state_36240[(7)]);
var inst_36204 = (state_36240[(8)]);
var inst_36213 = (state_36240[(11)]);
var inst_36212 = (inst_36204[inst_36205] = inst_36208);
var inst_36213__$1 = (inst_36205 + (1));
var inst_36214 = (inst_36213__$1 < n);
var state_36240__$1 = (function (){var statearr_36254 = state_36240;
(statearr_36254[(12)] = inst_36212);

(statearr_36254[(11)] = inst_36213__$1);

return statearr_36254;
})();
if(cljs.core.truth_(inst_36214)){
var statearr_36255_36284 = state_36240__$1;
(statearr_36255_36284[(1)] = (8));

} else {
var statearr_36256_36285 = state_36240__$1;
(statearr_36256_36285[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36241 === (14))){
var inst_36233 = (state_36240[(2)]);
var inst_36234 = cljs.core.async.close_BANG_(out);
var state_36240__$1 = (function (){var statearr_36258 = state_36240;
(statearr_36258[(13)] = inst_36233);

return statearr_36258;
})();
var statearr_36259_36286 = state_36240__$1;
(statearr_36259_36286[(2)] = inst_36234);

(statearr_36259_36286[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36241 === (10))){
var inst_36224 = (state_36240[(2)]);
var state_36240__$1 = state_36240;
var statearr_36260_36287 = state_36240__$1;
(statearr_36260_36287[(2)] = inst_36224);

(statearr_36260_36287[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36241 === (8))){
var inst_36204 = (state_36240[(8)]);
var inst_36213 = (state_36240[(11)]);
var tmp36257 = inst_36204;
var inst_36204__$1 = tmp36257;
var inst_36205 = inst_36213;
var state_36240__$1 = (function (){var statearr_36261 = state_36240;
(statearr_36261[(7)] = inst_36205);

(statearr_36261[(8)] = inst_36204__$1);

return statearr_36261;
})();
var statearr_36262_36288 = state_36240__$1;
(statearr_36262_36288[(2)] = null);

(statearr_36262_36288[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__33563__auto___36274,out))
;
return ((function (switch__33439__auto__,c__33563__auto___36274,out){
return (function() {
var cljs$core$async$state_machine__33440__auto__ = null;
var cljs$core$async$state_machine__33440__auto____0 = (function (){
var statearr_36266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36266[(0)] = cljs$core$async$state_machine__33440__auto__);

(statearr_36266[(1)] = (1));

return statearr_36266;
});
var cljs$core$async$state_machine__33440__auto____1 = (function (state_36240){
while(true){
var ret_value__33441__auto__ = (function (){try{while(true){
var result__33442__auto__ = switch__33439__auto__(state_36240);
if(cljs.core.keyword_identical_QMARK_(result__33442__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__33442__auto__;
}
break;
}
}catch (e36267){if((e36267 instanceof Object)){
var ex__33443__auto__ = e36267;
var statearr_36268_36289 = state_36240;
(statearr_36268_36289[(5)] = ex__33443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36240);

return cljs.core.cst$kw$recur;
} else {
throw e36267;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33441__auto__,cljs.core.cst$kw$recur)){
var G__36290 = state_36240;
state_36240 = G__36290;
continue;
} else {
return ret_value__33441__auto__;
}
break;
}
});
cljs$core$async$state_machine__33440__auto__ = function(state_36240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33440__auto____1.call(this,state_36240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33440__auto____0;
cljs$core$async$state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33440__auto____1;
return cljs$core$async$state_machine__33440__auto__;
})()
;})(switch__33439__auto__,c__33563__auto___36274,out))
})();
var state__33565__auto__ = (function (){var statearr_36269 = (f__33564__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33564__auto__.cljs$core$IFn$_invoke$arity$0() : f__33564__auto__.call(null));
(statearr_36269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33563__auto___36274);

return statearr_36269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
});})(c__33563__auto___36274,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args36291 = [];
var len__26134__auto___36365 = arguments.length;
var i__26135__auto___36366 = (0);
while(true){
if((i__26135__auto___36366 < len__26134__auto___36365)){
args36291.push((arguments[i__26135__auto___36366]));

var G__36367 = (i__26135__auto___36366 + (1));
i__26135__auto___36366 = G__36367;
continue;
} else {
}
break;
}

var G__36293 = args36291.length;
switch (G__36293) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36291.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33563__auto___36369 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33563__auto___36369,out){
return (function (){
var f__33564__auto__ = (function (){var switch__33439__auto__ = ((function (c__33563__auto___36369,out){
return (function (state_36335){
var state_val_36336 = (state_36335[(1)]);
if((state_val_36336 === (7))){
var inst_36331 = (state_36335[(2)]);
var state_36335__$1 = state_36335;
var statearr_36337_36370 = state_36335__$1;
(statearr_36337_36370[(2)] = inst_36331);

(statearr_36337_36370[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36336 === (1))){
var inst_36294 = [];
var inst_36295 = inst_36294;
var inst_36296 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_36335__$1 = (function (){var statearr_36338 = state_36335;
(statearr_36338[(7)] = inst_36295);

(statearr_36338[(8)] = inst_36296);

return statearr_36338;
})();
var statearr_36339_36371 = state_36335__$1;
(statearr_36339_36371[(2)] = null);

(statearr_36339_36371[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36336 === (4))){
var inst_36299 = (state_36335[(9)]);
var inst_36299__$1 = (state_36335[(2)]);
var inst_36300 = (inst_36299__$1 == null);
var inst_36301 = cljs.core.not(inst_36300);
var state_36335__$1 = (function (){var statearr_36340 = state_36335;
(statearr_36340[(9)] = inst_36299__$1);

return statearr_36340;
})();
if(inst_36301){
var statearr_36341_36372 = state_36335__$1;
(statearr_36341_36372[(1)] = (5));

} else {
var statearr_36342_36373 = state_36335__$1;
(statearr_36342_36373[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36336 === (15))){
var inst_36325 = (state_36335[(2)]);
var state_36335__$1 = state_36335;
var statearr_36343_36374 = state_36335__$1;
(statearr_36343_36374[(2)] = inst_36325);

(statearr_36343_36374[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36336 === (13))){
var state_36335__$1 = state_36335;
var statearr_36344_36375 = state_36335__$1;
(statearr_36344_36375[(2)] = null);

(statearr_36344_36375[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36336 === (6))){
var inst_36295 = (state_36335[(7)]);
var inst_36320 = inst_36295.length;
var inst_36321 = (inst_36320 > (0));
var state_36335__$1 = state_36335;
if(cljs.core.truth_(inst_36321)){
var statearr_36345_36376 = state_36335__$1;
(statearr_36345_36376[(1)] = (12));

} else {
var statearr_36346_36377 = state_36335__$1;
(statearr_36346_36377[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36336 === (3))){
var inst_36333 = (state_36335[(2)]);
var state_36335__$1 = state_36335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36335__$1,inst_36333);
} else {
if((state_val_36336 === (12))){
var inst_36295 = (state_36335[(7)]);
var inst_36323 = cljs.core.vec(inst_36295);
var state_36335__$1 = state_36335;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36335__$1,(15),out,inst_36323);
} else {
if((state_val_36336 === (2))){
var state_36335__$1 = state_36335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36335__$1,(4),ch);
} else {
if((state_val_36336 === (11))){
var inst_36303 = (state_36335[(10)]);
var inst_36299 = (state_36335[(9)]);
var inst_36313 = (state_36335[(2)]);
var inst_36314 = [];
var inst_36315 = inst_36314.push(inst_36299);
var inst_36295 = inst_36314;
var inst_36296 = inst_36303;
var state_36335__$1 = (function (){var statearr_36347 = state_36335;
(statearr_36347[(7)] = inst_36295);

(statearr_36347[(11)] = inst_36315);

(statearr_36347[(8)] = inst_36296);

(statearr_36347[(12)] = inst_36313);

return statearr_36347;
})();
var statearr_36348_36378 = state_36335__$1;
(statearr_36348_36378[(2)] = null);

(statearr_36348_36378[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36336 === (9))){
var inst_36295 = (state_36335[(7)]);
var inst_36311 = cljs.core.vec(inst_36295);
var state_36335__$1 = state_36335;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36335__$1,(11),out,inst_36311);
} else {
if((state_val_36336 === (5))){
var inst_36296 = (state_36335[(8)]);
var inst_36303 = (state_36335[(10)]);
var inst_36299 = (state_36335[(9)]);
var inst_36303__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36299) : f.call(null,inst_36299));
var inst_36304 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36303__$1,inst_36296);
var inst_36305 = cljs.core.keyword_identical_QMARK_(inst_36296,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_36306 = (inst_36304) || (inst_36305);
var state_36335__$1 = (function (){var statearr_36349 = state_36335;
(statearr_36349[(10)] = inst_36303__$1);

return statearr_36349;
})();
if(cljs.core.truth_(inst_36306)){
var statearr_36350_36379 = state_36335__$1;
(statearr_36350_36379[(1)] = (8));

} else {
var statearr_36351_36380 = state_36335__$1;
(statearr_36351_36380[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36336 === (14))){
var inst_36328 = (state_36335[(2)]);
var inst_36329 = cljs.core.async.close_BANG_(out);
var state_36335__$1 = (function (){var statearr_36353 = state_36335;
(statearr_36353[(13)] = inst_36328);

return statearr_36353;
})();
var statearr_36354_36381 = state_36335__$1;
(statearr_36354_36381[(2)] = inst_36329);

(statearr_36354_36381[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36336 === (10))){
var inst_36318 = (state_36335[(2)]);
var state_36335__$1 = state_36335;
var statearr_36355_36382 = state_36335__$1;
(statearr_36355_36382[(2)] = inst_36318);

(statearr_36355_36382[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36336 === (8))){
var inst_36295 = (state_36335[(7)]);
var inst_36303 = (state_36335[(10)]);
var inst_36299 = (state_36335[(9)]);
var inst_36308 = inst_36295.push(inst_36299);
var tmp36352 = inst_36295;
var inst_36295__$1 = tmp36352;
var inst_36296 = inst_36303;
var state_36335__$1 = (function (){var statearr_36356 = state_36335;
(statearr_36356[(7)] = inst_36295__$1);

(statearr_36356[(14)] = inst_36308);

(statearr_36356[(8)] = inst_36296);

return statearr_36356;
})();
var statearr_36357_36383 = state_36335__$1;
(statearr_36357_36383[(2)] = null);

(statearr_36357_36383[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__33563__auto___36369,out))
;
return ((function (switch__33439__auto__,c__33563__auto___36369,out){
return (function() {
var cljs$core$async$state_machine__33440__auto__ = null;
var cljs$core$async$state_machine__33440__auto____0 = (function (){
var statearr_36361 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36361[(0)] = cljs$core$async$state_machine__33440__auto__);

(statearr_36361[(1)] = (1));

return statearr_36361;
});
var cljs$core$async$state_machine__33440__auto____1 = (function (state_36335){
while(true){
var ret_value__33441__auto__ = (function (){try{while(true){
var result__33442__auto__ = switch__33439__auto__(state_36335);
if(cljs.core.keyword_identical_QMARK_(result__33442__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__33442__auto__;
}
break;
}
}catch (e36362){if((e36362 instanceof Object)){
var ex__33443__auto__ = e36362;
var statearr_36363_36384 = state_36335;
(statearr_36363_36384[(5)] = ex__33443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36335);

return cljs.core.cst$kw$recur;
} else {
throw e36362;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33441__auto__,cljs.core.cst$kw$recur)){
var G__36385 = state_36335;
state_36335 = G__36385;
continue;
} else {
return ret_value__33441__auto__;
}
break;
}
});
cljs$core$async$state_machine__33440__auto__ = function(state_36335){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33440__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33440__auto____1.call(this,state_36335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33440__auto____0;
cljs$core$async$state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33440__auto____1;
return cljs$core$async$state_machine__33440__auto__;
})()
;})(switch__33439__auto__,c__33563__auto___36369,out))
})();
var state__33565__auto__ = (function (){var statearr_36364 = (f__33564__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33564__auto__.cljs$core$IFn$_invoke$arity$0() : f__33564__auto__.call(null));
(statearr_36364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33563__auto___36369);

return statearr_36364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
});})(c__33563__auto___36369,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

