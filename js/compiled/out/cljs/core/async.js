// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args30522 = [];
var len__25873__auto___30528 = arguments.length;
var i__25874__auto___30529 = (0);
while(true){
if((i__25874__auto___30529 < len__25873__auto___30528)){
args30522.push((arguments[i__25874__auto___30529]));

var G__30530 = (i__25874__auto___30529 + (1));
i__25874__auto___30529 = G__30530;
continue;
} else {
}
break;
}

var G__30524 = args30522.length;
switch (G__30524) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30522.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30525 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30525 = (function (f,blockable,meta30526){
this.f = f;
this.blockable = blockable;
this.meta30526 = meta30526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30527,meta30526__$1){
var self__ = this;
var _30527__$1 = this;
return (new cljs.core.async.t_cljs$core$async30525(self__.f,self__.blockable,meta30526__$1));
});

cljs.core.async.t_cljs$core$async30525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30527){
var self__ = this;
var _30527__$1 = this;
return self__.meta30526;
});

cljs.core.async.t_cljs$core$async30525.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30525.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30525.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30525.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30525.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30526","meta30526",-1857138081,null)], null);
});

cljs.core.async.t_cljs$core$async30525.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30525.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30525";

cljs.core.async.t_cljs$core$async30525.cljs$lang$ctorPrWriter = (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async30525");
});

cljs.core.async.__GT_t_cljs$core$async30525 = (function cljs$core$async$__GT_t_cljs$core$async30525(f__$1,blockable__$1,meta30526){
return (new cljs.core.async.t_cljs$core$async30525(f__$1,blockable__$1,meta30526));
});

}

return (new cljs.core.async.t_cljs$core$async30525(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args30534 = [];
var len__25873__auto___30537 = arguments.length;
var i__25874__auto___30538 = (0);
while(true){
if((i__25874__auto___30538 < len__25873__auto___30537)){
args30534.push((arguments[i__25874__auto___30538]));

var G__30539 = (i__25874__auto___30538 + (1));
i__25874__auto___30538 = G__30539;
continue;
} else {
}
break;
}

var G__30536 = args30534.length;
switch (G__30536) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30534.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var args30541 = [];
var len__25873__auto___30544 = arguments.length;
var i__25874__auto___30545 = (0);
while(true){
if((i__25874__auto___30545 < len__25873__auto___30544)){
args30541.push((arguments[i__25874__auto___30545]));

var G__30546 = (i__25874__auto___30545 + (1));
i__25874__auto___30545 = G__30546;
continue;
} else {
}
break;
}

var G__30543 = args30541.length;
switch (G__30543) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30541.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args30548 = [];
var len__25873__auto___30551 = arguments.length;
var i__25874__auto___30552 = (0);
while(true){
if((i__25874__auto___30552 < len__25873__auto___30551)){
args30548.push((arguments[i__25874__auto___30552]));

var G__30553 = (i__25874__auto___30552 + (1));
i__25874__auto___30552 = G__30553;
continue;
} else {
}
break;
}

var G__30550 = args30548.length;
switch (G__30550) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30548.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30555 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30555);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30555,ret){
return (function (){
return fn1.call(null,val_30555);
});})(val_30555,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var args30556 = [];
var len__25873__auto___30559 = arguments.length;
var i__25874__auto___30560 = (0);
while(true){
if((i__25874__auto___30560 < len__25873__auto___30559)){
args30556.push((arguments[i__25874__auto___30560]));

var G__30561 = (i__25874__auto___30560 + (1));
i__25874__auto___30560 = G__30561;
continue;
} else {
}
break;
}

var G__30558 = args30556.length;
switch (G__30558) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30556.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25713__auto___30563 = n;
var x_30564 = (0);
while(true){
if((x_30564 < n__25713__auto___30563)){
(a[x_30564] = (0));

var G__30565 = (x_30564 + (1));
x_30564 = G__30565;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30566 = (i + (1));
i = G__30566;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30570 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30570 = (function (alt_flag,flag,meta30571){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30571 = meta30571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30572,meta30571__$1){
var self__ = this;
var _30572__$1 = this;
return (new cljs.core.async.t_cljs$core$async30570(self__.alt_flag,self__.flag,meta30571__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30570.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30572){
var self__ = this;
var _30572__$1 = this;
return self__.meta30571;
});})(flag))
;

cljs.core.async.t_cljs$core$async30570.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30570.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30570.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30570.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30570.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30571","meta30571",1113911264,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30570.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30570";

cljs.core.async.t_cljs$core$async30570.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async30570");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30570 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30570(alt_flag__$1,flag__$1,meta30571){
return (new cljs.core.async.t_cljs$core$async30570(alt_flag__$1,flag__$1,meta30571));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30570(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30576 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30576 = (function (alt_handler,flag,cb,meta30577){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30577 = meta30577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30578,meta30577__$1){
var self__ = this;
var _30578__$1 = this;
return (new cljs.core.async.t_cljs$core$async30576(self__.alt_handler,self__.flag,self__.cb,meta30577__$1));
});

cljs.core.async.t_cljs$core$async30576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30578){
var self__ = this;
var _30578__$1 = this;
return self__.meta30577;
});

cljs.core.async.t_cljs$core$async30576.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30576.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30576.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30576.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30577","meta30577",2047518322,null)], null);
});

cljs.core.async.t_cljs$core$async30576.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30576";

cljs.core.async.t_cljs$core$async30576.cljs$lang$ctorPrWriter = (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async30576");
});

cljs.core.async.__GT_t_cljs$core$async30576 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30576(alt_handler__$1,flag__$1,cb__$1,meta30577){
return (new cljs.core.async.t_cljs$core$async30576(alt_handler__$1,flag__$1,cb__$1,meta30577));
});

}

return (new cljs.core.async.t_cljs$core$async30576(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30579_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30579_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30580_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30580_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24798__auto__ = wport;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30581 = (i + (1));
i = G__30581;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24798__auto__ = ret;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24786__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24786__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24786__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__25880__auto__ = [];
var len__25873__auto___30587 = arguments.length;
var i__25874__auto___30588 = (0);
while(true){
if((i__25874__auto___30588 < len__25873__auto___30587)){
args__25880__auto__.push((arguments[i__25874__auto___30588]));

var G__30589 = (i__25874__auto___30588 + (1));
i__25874__auto___30588 = G__30589;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((1) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25881__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30584){
var map__30585 = p__30584;
var map__30585__$1 = ((((!((map__30585 == null)))?((((map__30585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30585):map__30585);
var opts = map__30585__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30582){
var G__30583 = cljs.core.first.call(null,seq30582);
var seq30582__$1 = cljs.core.next.call(null,seq30582);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30583,seq30582__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args30590 = [];
var len__25873__auto___30640 = arguments.length;
var i__25874__auto___30641 = (0);
while(true){
if((i__25874__auto___30641 < len__25873__auto___30640)){
args30590.push((arguments[i__25874__auto___30641]));

var G__30642 = (i__25874__auto___30641 + (1));
i__25874__auto___30641 = G__30642;
continue;
} else {
}
break;
}

var G__30592 = args30590.length;
switch (G__30592) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30590.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30477__auto___30644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30477__auto___30644){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (c__30477__auto___30644){
return (function (state_30616){
var state_val_30617 = (state_30616[(1)]);
if((state_val_30617 === (7))){
var inst_30612 = (state_30616[(2)]);
var state_30616__$1 = state_30616;
var statearr_30618_30645 = state_30616__$1;
(statearr_30618_30645[(2)] = inst_30612);

(statearr_30618_30645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30617 === (1))){
var state_30616__$1 = state_30616;
var statearr_30619_30646 = state_30616__$1;
(statearr_30619_30646[(2)] = null);

(statearr_30619_30646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30617 === (4))){
var inst_30595 = (state_30616[(7)]);
var inst_30595__$1 = (state_30616[(2)]);
var inst_30596 = (inst_30595__$1 == null);
var state_30616__$1 = (function (){var statearr_30620 = state_30616;
(statearr_30620[(7)] = inst_30595__$1);

return statearr_30620;
})();
if(cljs.core.truth_(inst_30596)){
var statearr_30621_30647 = state_30616__$1;
(statearr_30621_30647[(1)] = (5));

} else {
var statearr_30622_30648 = state_30616__$1;
(statearr_30622_30648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30617 === (13))){
var state_30616__$1 = state_30616;
var statearr_30623_30649 = state_30616__$1;
(statearr_30623_30649[(2)] = null);

(statearr_30623_30649[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30617 === (6))){
var inst_30595 = (state_30616[(7)]);
var state_30616__$1 = state_30616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30616__$1,(11),to,inst_30595);
} else {
if((state_val_30617 === (3))){
var inst_30614 = (state_30616[(2)]);
var state_30616__$1 = state_30616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30616__$1,inst_30614);
} else {
if((state_val_30617 === (12))){
var state_30616__$1 = state_30616;
var statearr_30624_30650 = state_30616__$1;
(statearr_30624_30650[(2)] = null);

(statearr_30624_30650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30617 === (2))){
var state_30616__$1 = state_30616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30616__$1,(4),from);
} else {
if((state_val_30617 === (11))){
var inst_30605 = (state_30616[(2)]);
var state_30616__$1 = state_30616;
if(cljs.core.truth_(inst_30605)){
var statearr_30625_30651 = state_30616__$1;
(statearr_30625_30651[(1)] = (12));

} else {
var statearr_30626_30652 = state_30616__$1;
(statearr_30626_30652[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30617 === (9))){
var state_30616__$1 = state_30616;
var statearr_30627_30653 = state_30616__$1;
(statearr_30627_30653[(2)] = null);

(statearr_30627_30653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30617 === (5))){
var state_30616__$1 = state_30616;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30628_30654 = state_30616__$1;
(statearr_30628_30654[(1)] = (8));

} else {
var statearr_30629_30655 = state_30616__$1;
(statearr_30629_30655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30617 === (14))){
var inst_30610 = (state_30616[(2)]);
var state_30616__$1 = state_30616;
var statearr_30630_30656 = state_30616__$1;
(statearr_30630_30656[(2)] = inst_30610);

(statearr_30630_30656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30617 === (10))){
var inst_30602 = (state_30616[(2)]);
var state_30616__$1 = state_30616;
var statearr_30631_30657 = state_30616__$1;
(statearr_30631_30657[(2)] = inst_30602);

(statearr_30631_30657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30617 === (8))){
var inst_30599 = cljs.core.async.close_BANG_.call(null,to);
var state_30616__$1 = state_30616;
var statearr_30632_30658 = state_30616__$1;
(statearr_30632_30658[(2)] = inst_30599);

(statearr_30632_30658[(1)] = (10));


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
});})(c__30477__auto___30644))
;
return ((function (switch__30365__auto__,c__30477__auto___30644){
return (function() {
var cljs$core$async$state_machine__30366__auto__ = null;
var cljs$core$async$state_machine__30366__auto____0 = (function (){
var statearr_30636 = [null,null,null,null,null,null,null,null];
(statearr_30636[(0)] = cljs$core$async$state_machine__30366__auto__);

(statearr_30636[(1)] = (1));

return statearr_30636;
});
var cljs$core$async$state_machine__30366__auto____1 = (function (state_30616){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_30616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e30637){if((e30637 instanceof Object)){
var ex__30369__auto__ = e30637;
var statearr_30638_30659 = state_30616;
(statearr_30638_30659[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30660 = state_30616;
state_30616 = G__30660;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$state_machine__30366__auto__ = function(state_30616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30366__auto____1.call(this,state_30616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30366__auto____0;
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30366__auto____1;
return cljs$core$async$state_machine__30366__auto__;
})()
;})(switch__30365__auto__,c__30477__auto___30644))
})();
var state__30479__auto__ = (function (){var statearr_30639 = f__30478__auto__.call(null);
(statearr_30639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto___30644);

return statearr_30639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(c__30477__auto___30644))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30848){
var vec__30849 = p__30848;
var v = cljs.core.nth.call(null,vec__30849,(0),null);
var p = cljs.core.nth.call(null,vec__30849,(1),null);
var job = vec__30849;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30477__auto___31035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30477__auto___31035,res,vec__30849,v,p,job,jobs,results){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (c__30477__auto___31035,res,vec__30849,v,p,job,jobs,results){
return (function (state_30856){
var state_val_30857 = (state_30856[(1)]);
if((state_val_30857 === (1))){
var state_30856__$1 = state_30856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30856__$1,(2),res,v);
} else {
if((state_val_30857 === (2))){
var inst_30853 = (state_30856[(2)]);
var inst_30854 = cljs.core.async.close_BANG_.call(null,res);
var state_30856__$1 = (function (){var statearr_30858 = state_30856;
(statearr_30858[(7)] = inst_30853);

return statearr_30858;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30856__$1,inst_30854);
} else {
return null;
}
}
});})(c__30477__auto___31035,res,vec__30849,v,p,job,jobs,results))
;
return ((function (switch__30365__auto__,c__30477__auto___31035,res,vec__30849,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0 = (function (){
var statearr_30862 = [null,null,null,null,null,null,null,null];
(statearr_30862[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__);

(statearr_30862[(1)] = (1));

return statearr_30862;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1 = (function (state_30856){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_30856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e30863){if((e30863 instanceof Object)){
var ex__30369__auto__ = e30863;
var statearr_30864_31036 = state_30856;
(statearr_30864_31036[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31037 = state_30856;
state_30856 = G__31037;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__ = function(state_30856){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1.call(this,state_30856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__;
})()
;})(switch__30365__auto__,c__30477__auto___31035,res,vec__30849,v,p,job,jobs,results))
})();
var state__30479__auto__ = (function (){var statearr_30865 = f__30478__auto__.call(null);
(statearr_30865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto___31035);

return statearr_30865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(c__30477__auto___31035,res,vec__30849,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30866){
var vec__30867 = p__30866;
var v = cljs.core.nth.call(null,vec__30867,(0),null);
var p = cljs.core.nth.call(null,vec__30867,(1),null);
var job = vec__30867;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25713__auto___31038 = n;
var __31039 = (0);
while(true){
if((__31039 < n__25713__auto___31038)){
var G__30870_31040 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30870_31040) {
case "compute":
var c__30477__auto___31042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31039,c__30477__auto___31042,G__30870_31040,n__25713__auto___31038,jobs,results,process,async){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (__31039,c__30477__auto___31042,G__30870_31040,n__25713__auto___31038,jobs,results,process,async){
return (function (state_30883){
var state_val_30884 = (state_30883[(1)]);
if((state_val_30884 === (1))){
var state_30883__$1 = state_30883;
var statearr_30885_31043 = state_30883__$1;
(statearr_30885_31043[(2)] = null);

(statearr_30885_31043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (2))){
var state_30883__$1 = state_30883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30883__$1,(4),jobs);
} else {
if((state_val_30884 === (3))){
var inst_30881 = (state_30883[(2)]);
var state_30883__$1 = state_30883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30883__$1,inst_30881);
} else {
if((state_val_30884 === (4))){
var inst_30873 = (state_30883[(2)]);
var inst_30874 = process.call(null,inst_30873);
var state_30883__$1 = state_30883;
if(cljs.core.truth_(inst_30874)){
var statearr_30886_31044 = state_30883__$1;
(statearr_30886_31044[(1)] = (5));

} else {
var statearr_30887_31045 = state_30883__$1;
(statearr_30887_31045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (5))){
var state_30883__$1 = state_30883;
var statearr_30888_31046 = state_30883__$1;
(statearr_30888_31046[(2)] = null);

(statearr_30888_31046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (6))){
var state_30883__$1 = state_30883;
var statearr_30889_31047 = state_30883__$1;
(statearr_30889_31047[(2)] = null);

(statearr_30889_31047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (7))){
var inst_30879 = (state_30883[(2)]);
var state_30883__$1 = state_30883;
var statearr_30890_31048 = state_30883__$1;
(statearr_30890_31048[(2)] = inst_30879);

(statearr_30890_31048[(1)] = (3));


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
});})(__31039,c__30477__auto___31042,G__30870_31040,n__25713__auto___31038,jobs,results,process,async))
;
return ((function (__31039,switch__30365__auto__,c__30477__auto___31042,G__30870_31040,n__25713__auto___31038,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0 = (function (){
var statearr_30894 = [null,null,null,null,null,null,null];
(statearr_30894[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__);

(statearr_30894[(1)] = (1));

return statearr_30894;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1 = (function (state_30883){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_30883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e30895){if((e30895 instanceof Object)){
var ex__30369__auto__ = e30895;
var statearr_30896_31049 = state_30883;
(statearr_30896_31049[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31050 = state_30883;
state_30883 = G__31050;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__ = function(state_30883){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1.call(this,state_30883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__;
})()
;})(__31039,switch__30365__auto__,c__30477__auto___31042,G__30870_31040,n__25713__auto___31038,jobs,results,process,async))
})();
var state__30479__auto__ = (function (){var statearr_30897 = f__30478__auto__.call(null);
(statearr_30897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto___31042);

return statearr_30897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(__31039,c__30477__auto___31042,G__30870_31040,n__25713__auto___31038,jobs,results,process,async))
);


break;
case "async":
var c__30477__auto___31051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31039,c__30477__auto___31051,G__30870_31040,n__25713__auto___31038,jobs,results,process,async){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (__31039,c__30477__auto___31051,G__30870_31040,n__25713__auto___31038,jobs,results,process,async){
return (function (state_30910){
var state_val_30911 = (state_30910[(1)]);
if((state_val_30911 === (1))){
var state_30910__$1 = state_30910;
var statearr_30912_31052 = state_30910__$1;
(statearr_30912_31052[(2)] = null);

(statearr_30912_31052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30911 === (2))){
var state_30910__$1 = state_30910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30910__$1,(4),jobs);
} else {
if((state_val_30911 === (3))){
var inst_30908 = (state_30910[(2)]);
var state_30910__$1 = state_30910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30910__$1,inst_30908);
} else {
if((state_val_30911 === (4))){
var inst_30900 = (state_30910[(2)]);
var inst_30901 = async.call(null,inst_30900);
var state_30910__$1 = state_30910;
if(cljs.core.truth_(inst_30901)){
var statearr_30913_31053 = state_30910__$1;
(statearr_30913_31053[(1)] = (5));

} else {
var statearr_30914_31054 = state_30910__$1;
(statearr_30914_31054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30911 === (5))){
var state_30910__$1 = state_30910;
var statearr_30915_31055 = state_30910__$1;
(statearr_30915_31055[(2)] = null);

(statearr_30915_31055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30911 === (6))){
var state_30910__$1 = state_30910;
var statearr_30916_31056 = state_30910__$1;
(statearr_30916_31056[(2)] = null);

(statearr_30916_31056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30911 === (7))){
var inst_30906 = (state_30910[(2)]);
var state_30910__$1 = state_30910;
var statearr_30917_31057 = state_30910__$1;
(statearr_30917_31057[(2)] = inst_30906);

(statearr_30917_31057[(1)] = (3));


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
});})(__31039,c__30477__auto___31051,G__30870_31040,n__25713__auto___31038,jobs,results,process,async))
;
return ((function (__31039,switch__30365__auto__,c__30477__auto___31051,G__30870_31040,n__25713__auto___31038,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0 = (function (){
var statearr_30921 = [null,null,null,null,null,null,null];
(statearr_30921[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__);

(statearr_30921[(1)] = (1));

return statearr_30921;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1 = (function (state_30910){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_30910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e30922){if((e30922 instanceof Object)){
var ex__30369__auto__ = e30922;
var statearr_30923_31058 = state_30910;
(statearr_30923_31058[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31059 = state_30910;
state_30910 = G__31059;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__ = function(state_30910){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1.call(this,state_30910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__;
})()
;})(__31039,switch__30365__auto__,c__30477__auto___31051,G__30870_31040,n__25713__auto___31038,jobs,results,process,async))
})();
var state__30479__auto__ = (function (){var statearr_30924 = f__30478__auto__.call(null);
(statearr_30924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto___31051);

return statearr_30924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(__31039,c__30477__auto___31051,G__30870_31040,n__25713__auto___31038,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31060 = (__31039 + (1));
__31039 = G__31060;
continue;
} else {
}
break;
}

var c__30477__auto___31061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30477__auto___31061,jobs,results,process,async){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (c__30477__auto___31061,jobs,results,process,async){
return (function (state_30946){
var state_val_30947 = (state_30946[(1)]);
if((state_val_30947 === (1))){
var state_30946__$1 = state_30946;
var statearr_30948_31062 = state_30946__$1;
(statearr_30948_31062[(2)] = null);

(statearr_30948_31062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (2))){
var state_30946__$1 = state_30946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30946__$1,(4),from);
} else {
if((state_val_30947 === (3))){
var inst_30944 = (state_30946[(2)]);
var state_30946__$1 = state_30946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30946__$1,inst_30944);
} else {
if((state_val_30947 === (4))){
var inst_30927 = (state_30946[(7)]);
var inst_30927__$1 = (state_30946[(2)]);
var inst_30928 = (inst_30927__$1 == null);
var state_30946__$1 = (function (){var statearr_30949 = state_30946;
(statearr_30949[(7)] = inst_30927__$1);

return statearr_30949;
})();
if(cljs.core.truth_(inst_30928)){
var statearr_30950_31063 = state_30946__$1;
(statearr_30950_31063[(1)] = (5));

} else {
var statearr_30951_31064 = state_30946__$1;
(statearr_30951_31064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (5))){
var inst_30930 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30946__$1 = state_30946;
var statearr_30952_31065 = state_30946__$1;
(statearr_30952_31065[(2)] = inst_30930);

(statearr_30952_31065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (6))){
var inst_30927 = (state_30946[(7)]);
var inst_30932 = (state_30946[(8)]);
var inst_30932__$1 = cljs.core.async.chan.call(null,(1));
var inst_30933 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30934 = [inst_30927,inst_30932__$1];
var inst_30935 = (new cljs.core.PersistentVector(null,2,(5),inst_30933,inst_30934,null));
var state_30946__$1 = (function (){var statearr_30953 = state_30946;
(statearr_30953[(8)] = inst_30932__$1);

return statearr_30953;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30946__$1,(8),jobs,inst_30935);
} else {
if((state_val_30947 === (7))){
var inst_30942 = (state_30946[(2)]);
var state_30946__$1 = state_30946;
var statearr_30954_31066 = state_30946__$1;
(statearr_30954_31066[(2)] = inst_30942);

(statearr_30954_31066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (8))){
var inst_30932 = (state_30946[(8)]);
var inst_30937 = (state_30946[(2)]);
var state_30946__$1 = (function (){var statearr_30955 = state_30946;
(statearr_30955[(9)] = inst_30937);

return statearr_30955;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30946__$1,(9),results,inst_30932);
} else {
if((state_val_30947 === (9))){
var inst_30939 = (state_30946[(2)]);
var state_30946__$1 = (function (){var statearr_30956 = state_30946;
(statearr_30956[(10)] = inst_30939);

return statearr_30956;
})();
var statearr_30957_31067 = state_30946__$1;
(statearr_30957_31067[(2)] = null);

(statearr_30957_31067[(1)] = (2));


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
});})(c__30477__auto___31061,jobs,results,process,async))
;
return ((function (switch__30365__auto__,c__30477__auto___31061,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0 = (function (){
var statearr_30961 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30961[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__);

(statearr_30961[(1)] = (1));

return statearr_30961;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1 = (function (state_30946){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_30946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e30962){if((e30962 instanceof Object)){
var ex__30369__auto__ = e30962;
var statearr_30963_31068 = state_30946;
(statearr_30963_31068[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31069 = state_30946;
state_30946 = G__31069;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__ = function(state_30946){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1.call(this,state_30946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__;
})()
;})(switch__30365__auto__,c__30477__auto___31061,jobs,results,process,async))
})();
var state__30479__auto__ = (function (){var statearr_30964 = f__30478__auto__.call(null);
(statearr_30964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto___31061);

return statearr_30964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(c__30477__auto___31061,jobs,results,process,async))
);


var c__30477__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30477__auto__,jobs,results,process,async){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (c__30477__auto__,jobs,results,process,async){
return (function (state_31002){
var state_val_31003 = (state_31002[(1)]);
if((state_val_31003 === (7))){
var inst_30998 = (state_31002[(2)]);
var state_31002__$1 = state_31002;
var statearr_31004_31070 = state_31002__$1;
(statearr_31004_31070[(2)] = inst_30998);

(statearr_31004_31070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (20))){
var state_31002__$1 = state_31002;
var statearr_31005_31071 = state_31002__$1;
(statearr_31005_31071[(2)] = null);

(statearr_31005_31071[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (1))){
var state_31002__$1 = state_31002;
var statearr_31006_31072 = state_31002__$1;
(statearr_31006_31072[(2)] = null);

(statearr_31006_31072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (4))){
var inst_30967 = (state_31002[(7)]);
var inst_30967__$1 = (state_31002[(2)]);
var inst_30968 = (inst_30967__$1 == null);
var state_31002__$1 = (function (){var statearr_31007 = state_31002;
(statearr_31007[(7)] = inst_30967__$1);

return statearr_31007;
})();
if(cljs.core.truth_(inst_30968)){
var statearr_31008_31073 = state_31002__$1;
(statearr_31008_31073[(1)] = (5));

} else {
var statearr_31009_31074 = state_31002__$1;
(statearr_31009_31074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (15))){
var inst_30980 = (state_31002[(8)]);
var state_31002__$1 = state_31002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31002__$1,(18),to,inst_30980);
} else {
if((state_val_31003 === (21))){
var inst_30993 = (state_31002[(2)]);
var state_31002__$1 = state_31002;
var statearr_31010_31075 = state_31002__$1;
(statearr_31010_31075[(2)] = inst_30993);

(statearr_31010_31075[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (13))){
var inst_30995 = (state_31002[(2)]);
var state_31002__$1 = (function (){var statearr_31011 = state_31002;
(statearr_31011[(9)] = inst_30995);

return statearr_31011;
})();
var statearr_31012_31076 = state_31002__$1;
(statearr_31012_31076[(2)] = null);

(statearr_31012_31076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (6))){
var inst_30967 = (state_31002[(7)]);
var state_31002__$1 = state_31002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31002__$1,(11),inst_30967);
} else {
if((state_val_31003 === (17))){
var inst_30988 = (state_31002[(2)]);
var state_31002__$1 = state_31002;
if(cljs.core.truth_(inst_30988)){
var statearr_31013_31077 = state_31002__$1;
(statearr_31013_31077[(1)] = (19));

} else {
var statearr_31014_31078 = state_31002__$1;
(statearr_31014_31078[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (3))){
var inst_31000 = (state_31002[(2)]);
var state_31002__$1 = state_31002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31002__$1,inst_31000);
} else {
if((state_val_31003 === (12))){
var inst_30977 = (state_31002[(10)]);
var state_31002__$1 = state_31002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31002__$1,(14),inst_30977);
} else {
if((state_val_31003 === (2))){
var state_31002__$1 = state_31002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31002__$1,(4),results);
} else {
if((state_val_31003 === (19))){
var state_31002__$1 = state_31002;
var statearr_31015_31079 = state_31002__$1;
(statearr_31015_31079[(2)] = null);

(statearr_31015_31079[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (11))){
var inst_30977 = (state_31002[(2)]);
var state_31002__$1 = (function (){var statearr_31016 = state_31002;
(statearr_31016[(10)] = inst_30977);

return statearr_31016;
})();
var statearr_31017_31080 = state_31002__$1;
(statearr_31017_31080[(2)] = null);

(statearr_31017_31080[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (9))){
var state_31002__$1 = state_31002;
var statearr_31018_31081 = state_31002__$1;
(statearr_31018_31081[(2)] = null);

(statearr_31018_31081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (5))){
var state_31002__$1 = state_31002;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31019_31082 = state_31002__$1;
(statearr_31019_31082[(1)] = (8));

} else {
var statearr_31020_31083 = state_31002__$1;
(statearr_31020_31083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (14))){
var inst_30980 = (state_31002[(8)]);
var inst_30982 = (state_31002[(11)]);
var inst_30980__$1 = (state_31002[(2)]);
var inst_30981 = (inst_30980__$1 == null);
var inst_30982__$1 = cljs.core.not.call(null,inst_30981);
var state_31002__$1 = (function (){var statearr_31021 = state_31002;
(statearr_31021[(8)] = inst_30980__$1);

(statearr_31021[(11)] = inst_30982__$1);

return statearr_31021;
})();
if(inst_30982__$1){
var statearr_31022_31084 = state_31002__$1;
(statearr_31022_31084[(1)] = (15));

} else {
var statearr_31023_31085 = state_31002__$1;
(statearr_31023_31085[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (16))){
var inst_30982 = (state_31002[(11)]);
var state_31002__$1 = state_31002;
var statearr_31024_31086 = state_31002__$1;
(statearr_31024_31086[(2)] = inst_30982);

(statearr_31024_31086[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (10))){
var inst_30974 = (state_31002[(2)]);
var state_31002__$1 = state_31002;
var statearr_31025_31087 = state_31002__$1;
(statearr_31025_31087[(2)] = inst_30974);

(statearr_31025_31087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (18))){
var inst_30985 = (state_31002[(2)]);
var state_31002__$1 = state_31002;
var statearr_31026_31088 = state_31002__$1;
(statearr_31026_31088[(2)] = inst_30985);

(statearr_31026_31088[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31003 === (8))){
var inst_30971 = cljs.core.async.close_BANG_.call(null,to);
var state_31002__$1 = state_31002;
var statearr_31027_31089 = state_31002__$1;
(statearr_31027_31089[(2)] = inst_30971);

(statearr_31027_31089[(1)] = (10));


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
});})(c__30477__auto__,jobs,results,process,async))
;
return ((function (switch__30365__auto__,c__30477__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0 = (function (){
var statearr_31031 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31031[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__);

(statearr_31031[(1)] = (1));

return statearr_31031;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1 = (function (state_31002){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_31002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e31032){if((e31032 instanceof Object)){
var ex__30369__auto__ = e31032;
var statearr_31033_31090 = state_31002;
(statearr_31033_31090[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31091 = state_31002;
state_31002 = G__31091;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__ = function(state_31002){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1.call(this,state_31002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__;
})()
;})(switch__30365__auto__,c__30477__auto__,jobs,results,process,async))
})();
var state__30479__auto__ = (function (){var statearr_31034 = f__30478__auto__.call(null);
(statearr_31034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto__);

return statearr_31034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(c__30477__auto__,jobs,results,process,async))
);

return c__30477__auto__;
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
var args31092 = [];
var len__25873__auto___31095 = arguments.length;
var i__25874__auto___31096 = (0);
while(true){
if((i__25874__auto___31096 < len__25873__auto___31095)){
args31092.push((arguments[i__25874__auto___31096]));

var G__31097 = (i__25874__auto___31096 + (1));
i__25874__auto___31096 = G__31097;
continue;
} else {
}
break;
}

var G__31094 = args31092.length;
switch (G__31094) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31092.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var args31099 = [];
var len__25873__auto___31102 = arguments.length;
var i__25874__auto___31103 = (0);
while(true){
if((i__25874__auto___31103 < len__25873__auto___31102)){
args31099.push((arguments[i__25874__auto___31103]));

var G__31104 = (i__25874__auto___31103 + (1));
i__25874__auto___31103 = G__31104;
continue;
} else {
}
break;
}

var G__31101 = args31099.length;
switch (G__31101) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31099.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var args31106 = [];
var len__25873__auto___31159 = arguments.length;
var i__25874__auto___31160 = (0);
while(true){
if((i__25874__auto___31160 < len__25873__auto___31159)){
args31106.push((arguments[i__25874__auto___31160]));

var G__31161 = (i__25874__auto___31160 + (1));
i__25874__auto___31160 = G__31161;
continue;
} else {
}
break;
}

var G__31108 = args31106.length;
switch (G__31108) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31106.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30477__auto___31163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30477__auto___31163,tc,fc){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (c__30477__auto___31163,tc,fc){
return (function (state_31134){
var state_val_31135 = (state_31134[(1)]);
if((state_val_31135 === (7))){
var inst_31130 = (state_31134[(2)]);
var state_31134__$1 = state_31134;
var statearr_31136_31164 = state_31134__$1;
(statearr_31136_31164[(2)] = inst_31130);

(statearr_31136_31164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (1))){
var state_31134__$1 = state_31134;
var statearr_31137_31165 = state_31134__$1;
(statearr_31137_31165[(2)] = null);

(statearr_31137_31165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (4))){
var inst_31111 = (state_31134[(7)]);
var inst_31111__$1 = (state_31134[(2)]);
var inst_31112 = (inst_31111__$1 == null);
var state_31134__$1 = (function (){var statearr_31138 = state_31134;
(statearr_31138[(7)] = inst_31111__$1);

return statearr_31138;
})();
if(cljs.core.truth_(inst_31112)){
var statearr_31139_31166 = state_31134__$1;
(statearr_31139_31166[(1)] = (5));

} else {
var statearr_31140_31167 = state_31134__$1;
(statearr_31140_31167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (13))){
var state_31134__$1 = state_31134;
var statearr_31141_31168 = state_31134__$1;
(statearr_31141_31168[(2)] = null);

(statearr_31141_31168[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (6))){
var inst_31111 = (state_31134[(7)]);
var inst_31117 = p.call(null,inst_31111);
var state_31134__$1 = state_31134;
if(cljs.core.truth_(inst_31117)){
var statearr_31142_31169 = state_31134__$1;
(statearr_31142_31169[(1)] = (9));

} else {
var statearr_31143_31170 = state_31134__$1;
(statearr_31143_31170[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (3))){
var inst_31132 = (state_31134[(2)]);
var state_31134__$1 = state_31134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31134__$1,inst_31132);
} else {
if((state_val_31135 === (12))){
var state_31134__$1 = state_31134;
var statearr_31144_31171 = state_31134__$1;
(statearr_31144_31171[(2)] = null);

(statearr_31144_31171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (2))){
var state_31134__$1 = state_31134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31134__$1,(4),ch);
} else {
if((state_val_31135 === (11))){
var inst_31111 = (state_31134[(7)]);
var inst_31121 = (state_31134[(2)]);
var state_31134__$1 = state_31134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31134__$1,(8),inst_31121,inst_31111);
} else {
if((state_val_31135 === (9))){
var state_31134__$1 = state_31134;
var statearr_31145_31172 = state_31134__$1;
(statearr_31145_31172[(2)] = tc);

(statearr_31145_31172[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (5))){
var inst_31114 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31115 = cljs.core.async.close_BANG_.call(null,fc);
var state_31134__$1 = (function (){var statearr_31146 = state_31134;
(statearr_31146[(8)] = inst_31114);

return statearr_31146;
})();
var statearr_31147_31173 = state_31134__$1;
(statearr_31147_31173[(2)] = inst_31115);

(statearr_31147_31173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (14))){
var inst_31128 = (state_31134[(2)]);
var state_31134__$1 = state_31134;
var statearr_31148_31174 = state_31134__$1;
(statearr_31148_31174[(2)] = inst_31128);

(statearr_31148_31174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (10))){
var state_31134__$1 = state_31134;
var statearr_31149_31175 = state_31134__$1;
(statearr_31149_31175[(2)] = fc);

(statearr_31149_31175[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31135 === (8))){
var inst_31123 = (state_31134[(2)]);
var state_31134__$1 = state_31134;
if(cljs.core.truth_(inst_31123)){
var statearr_31150_31176 = state_31134__$1;
(statearr_31150_31176[(1)] = (12));

} else {
var statearr_31151_31177 = state_31134__$1;
(statearr_31151_31177[(1)] = (13));

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
});})(c__30477__auto___31163,tc,fc))
;
return ((function (switch__30365__auto__,c__30477__auto___31163,tc,fc){
return (function() {
var cljs$core$async$state_machine__30366__auto__ = null;
var cljs$core$async$state_machine__30366__auto____0 = (function (){
var statearr_31155 = [null,null,null,null,null,null,null,null,null];
(statearr_31155[(0)] = cljs$core$async$state_machine__30366__auto__);

(statearr_31155[(1)] = (1));

return statearr_31155;
});
var cljs$core$async$state_machine__30366__auto____1 = (function (state_31134){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_31134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e31156){if((e31156 instanceof Object)){
var ex__30369__auto__ = e31156;
var statearr_31157_31178 = state_31134;
(statearr_31157_31178[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31179 = state_31134;
state_31134 = G__31179;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$state_machine__30366__auto__ = function(state_31134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30366__auto____1.call(this,state_31134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30366__auto____0;
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30366__auto____1;
return cljs$core$async$state_machine__30366__auto__;
})()
;})(switch__30365__auto__,c__30477__auto___31163,tc,fc))
})();
var state__30479__auto__ = (function (){var statearr_31158 = f__30478__auto__.call(null);
(statearr_31158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto___31163);

return statearr_31158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(c__30477__auto___31163,tc,fc))
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
var c__30477__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30477__auto__){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (c__30477__auto__){
return (function (state_31243){
var state_val_31244 = (state_31243[(1)]);
if((state_val_31244 === (7))){
var inst_31239 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
var statearr_31245_31266 = state_31243__$1;
(statearr_31245_31266[(2)] = inst_31239);

(statearr_31245_31266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (1))){
var inst_31223 = init;
var state_31243__$1 = (function (){var statearr_31246 = state_31243;
(statearr_31246[(7)] = inst_31223);

return statearr_31246;
})();
var statearr_31247_31267 = state_31243__$1;
(statearr_31247_31267[(2)] = null);

(statearr_31247_31267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (4))){
var inst_31226 = (state_31243[(8)]);
var inst_31226__$1 = (state_31243[(2)]);
var inst_31227 = (inst_31226__$1 == null);
var state_31243__$1 = (function (){var statearr_31248 = state_31243;
(statearr_31248[(8)] = inst_31226__$1);

return statearr_31248;
})();
if(cljs.core.truth_(inst_31227)){
var statearr_31249_31268 = state_31243__$1;
(statearr_31249_31268[(1)] = (5));

} else {
var statearr_31250_31269 = state_31243__$1;
(statearr_31250_31269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (6))){
var inst_31223 = (state_31243[(7)]);
var inst_31230 = (state_31243[(9)]);
var inst_31226 = (state_31243[(8)]);
var inst_31230__$1 = f.call(null,inst_31223,inst_31226);
var inst_31231 = cljs.core.reduced_QMARK_.call(null,inst_31230__$1);
var state_31243__$1 = (function (){var statearr_31251 = state_31243;
(statearr_31251[(9)] = inst_31230__$1);

return statearr_31251;
})();
if(inst_31231){
var statearr_31252_31270 = state_31243__$1;
(statearr_31252_31270[(1)] = (8));

} else {
var statearr_31253_31271 = state_31243__$1;
(statearr_31253_31271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (3))){
var inst_31241 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31243__$1,inst_31241);
} else {
if((state_val_31244 === (2))){
var state_31243__$1 = state_31243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31243__$1,(4),ch);
} else {
if((state_val_31244 === (9))){
var inst_31230 = (state_31243[(9)]);
var inst_31223 = inst_31230;
var state_31243__$1 = (function (){var statearr_31254 = state_31243;
(statearr_31254[(7)] = inst_31223);

return statearr_31254;
})();
var statearr_31255_31272 = state_31243__$1;
(statearr_31255_31272[(2)] = null);

(statearr_31255_31272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (5))){
var inst_31223 = (state_31243[(7)]);
var state_31243__$1 = state_31243;
var statearr_31256_31273 = state_31243__$1;
(statearr_31256_31273[(2)] = inst_31223);

(statearr_31256_31273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (10))){
var inst_31237 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
var statearr_31257_31274 = state_31243__$1;
(statearr_31257_31274[(2)] = inst_31237);

(statearr_31257_31274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (8))){
var inst_31230 = (state_31243[(9)]);
var inst_31233 = cljs.core.deref.call(null,inst_31230);
var state_31243__$1 = state_31243;
var statearr_31258_31275 = state_31243__$1;
(statearr_31258_31275[(2)] = inst_31233);

(statearr_31258_31275[(1)] = (10));


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
});})(c__30477__auto__))
;
return ((function (switch__30365__auto__,c__30477__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30366__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30366__auto____0 = (function (){
var statearr_31262 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31262[(0)] = cljs$core$async$reduce_$_state_machine__30366__auto__);

(statearr_31262[(1)] = (1));

return statearr_31262;
});
var cljs$core$async$reduce_$_state_machine__30366__auto____1 = (function (state_31243){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_31243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e31263){if((e31263 instanceof Object)){
var ex__30369__auto__ = e31263;
var statearr_31264_31276 = state_31243;
(statearr_31264_31276[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31277 = state_31243;
state_31243 = G__31277;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30366__auto__ = function(state_31243){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30366__auto____1.call(this,state_31243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30366__auto____0;
cljs$core$async$reduce_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30366__auto____1;
return cljs$core$async$reduce_$_state_machine__30366__auto__;
})()
;})(switch__30365__auto__,c__30477__auto__))
})();
var state__30479__auto__ = (function (){var statearr_31265 = f__30478__auto__.call(null);
(statearr_31265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto__);

return statearr_31265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(c__30477__auto__))
);

return c__30477__auto__;
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
var args31278 = [];
var len__25873__auto___31330 = arguments.length;
var i__25874__auto___31331 = (0);
while(true){
if((i__25874__auto___31331 < len__25873__auto___31330)){
args31278.push((arguments[i__25874__auto___31331]));

var G__31332 = (i__25874__auto___31331 + (1));
i__25874__auto___31331 = G__31332;
continue;
} else {
}
break;
}

var G__31280 = args31278.length;
switch (G__31280) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31278.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30477__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30477__auto__){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (c__30477__auto__){
return (function (state_31305){
var state_val_31306 = (state_31305[(1)]);
if((state_val_31306 === (7))){
var inst_31287 = (state_31305[(2)]);
var state_31305__$1 = state_31305;
var statearr_31307_31334 = state_31305__$1;
(statearr_31307_31334[(2)] = inst_31287);

(statearr_31307_31334[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (1))){
var inst_31281 = cljs.core.seq.call(null,coll);
var inst_31282 = inst_31281;
var state_31305__$1 = (function (){var statearr_31308 = state_31305;
(statearr_31308[(7)] = inst_31282);

return statearr_31308;
})();
var statearr_31309_31335 = state_31305__$1;
(statearr_31309_31335[(2)] = null);

(statearr_31309_31335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (4))){
var inst_31282 = (state_31305[(7)]);
var inst_31285 = cljs.core.first.call(null,inst_31282);
var state_31305__$1 = state_31305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31305__$1,(7),ch,inst_31285);
} else {
if((state_val_31306 === (13))){
var inst_31299 = (state_31305[(2)]);
var state_31305__$1 = state_31305;
var statearr_31310_31336 = state_31305__$1;
(statearr_31310_31336[(2)] = inst_31299);

(statearr_31310_31336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (6))){
var inst_31290 = (state_31305[(2)]);
var state_31305__$1 = state_31305;
if(cljs.core.truth_(inst_31290)){
var statearr_31311_31337 = state_31305__$1;
(statearr_31311_31337[(1)] = (8));

} else {
var statearr_31312_31338 = state_31305__$1;
(statearr_31312_31338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (3))){
var inst_31303 = (state_31305[(2)]);
var state_31305__$1 = state_31305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31305__$1,inst_31303);
} else {
if((state_val_31306 === (12))){
var state_31305__$1 = state_31305;
var statearr_31313_31339 = state_31305__$1;
(statearr_31313_31339[(2)] = null);

(statearr_31313_31339[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (2))){
var inst_31282 = (state_31305[(7)]);
var state_31305__$1 = state_31305;
if(cljs.core.truth_(inst_31282)){
var statearr_31314_31340 = state_31305__$1;
(statearr_31314_31340[(1)] = (4));

} else {
var statearr_31315_31341 = state_31305__$1;
(statearr_31315_31341[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (11))){
var inst_31296 = cljs.core.async.close_BANG_.call(null,ch);
var state_31305__$1 = state_31305;
var statearr_31316_31342 = state_31305__$1;
(statearr_31316_31342[(2)] = inst_31296);

(statearr_31316_31342[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (9))){
var state_31305__$1 = state_31305;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31317_31343 = state_31305__$1;
(statearr_31317_31343[(1)] = (11));

} else {
var statearr_31318_31344 = state_31305__$1;
(statearr_31318_31344[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (5))){
var inst_31282 = (state_31305[(7)]);
var state_31305__$1 = state_31305;
var statearr_31319_31345 = state_31305__$1;
(statearr_31319_31345[(2)] = inst_31282);

(statearr_31319_31345[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (10))){
var inst_31301 = (state_31305[(2)]);
var state_31305__$1 = state_31305;
var statearr_31320_31346 = state_31305__$1;
(statearr_31320_31346[(2)] = inst_31301);

(statearr_31320_31346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (8))){
var inst_31282 = (state_31305[(7)]);
var inst_31292 = cljs.core.next.call(null,inst_31282);
var inst_31282__$1 = inst_31292;
var state_31305__$1 = (function (){var statearr_31321 = state_31305;
(statearr_31321[(7)] = inst_31282__$1);

return statearr_31321;
})();
var statearr_31322_31347 = state_31305__$1;
(statearr_31322_31347[(2)] = null);

(statearr_31322_31347[(1)] = (2));


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
});})(c__30477__auto__))
;
return ((function (switch__30365__auto__,c__30477__auto__){
return (function() {
var cljs$core$async$state_machine__30366__auto__ = null;
var cljs$core$async$state_machine__30366__auto____0 = (function (){
var statearr_31326 = [null,null,null,null,null,null,null,null];
(statearr_31326[(0)] = cljs$core$async$state_machine__30366__auto__);

(statearr_31326[(1)] = (1));

return statearr_31326;
});
var cljs$core$async$state_machine__30366__auto____1 = (function (state_31305){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_31305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e31327){if((e31327 instanceof Object)){
var ex__30369__auto__ = e31327;
var statearr_31328_31348 = state_31305;
(statearr_31328_31348[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31349 = state_31305;
state_31305 = G__31349;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$state_machine__30366__auto__ = function(state_31305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30366__auto____1.call(this,state_31305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30366__auto____0;
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30366__auto____1;
return cljs$core$async$state_machine__30366__auto__;
})()
;})(switch__30365__auto__,c__30477__auto__))
})();
var state__30479__auto__ = (function (){var statearr_31329 = f__30478__auto__.call(null);
(statearr_31329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto__);

return statearr_31329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(c__30477__auto__))
);

return c__30477__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
var x__25461__auto__ = (((_ == null))?null:_);
var m__25462__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,_);
} else {
var m__25462__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
var x__25461__auto__ = (((m == null))?null:m);
var m__25462__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25462__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25461__auto__ = (((m == null))?null:m);
var m__25462__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,m,ch);
} else {
var m__25462__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25461__auto__ = (((m == null))?null:m);
var m__25462__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,m);
} else {
var m__25462__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31575 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31575 = (function (mult,ch,cs,meta31576){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31576 = meta31576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31577,meta31576__$1){
var self__ = this;
var _31577__$1 = this;
return (new cljs.core.async.t_cljs$core$async31575(self__.mult,self__.ch,self__.cs,meta31576__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31575.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31577){
var self__ = this;
var _31577__$1 = this;
return self__.meta31576;
});})(cs))
;

cljs.core.async.t_cljs$core$async31575.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31575.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31575.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31575.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31575.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31575.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31575.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31576","meta31576",-1608800587,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31575.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31575";

cljs.core.async.t_cljs$core$async31575.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async31575");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31575 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31575(mult__$1,ch__$1,cs__$1,meta31576){
return (new cljs.core.async.t_cljs$core$async31575(mult__$1,ch__$1,cs__$1,meta31576));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31575(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30477__auto___31800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30477__auto___31800,cs,m,dchan,dctr,done){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (c__30477__auto___31800,cs,m,dchan,dctr,done){
return (function (state_31712){
var state_val_31713 = (state_31712[(1)]);
if((state_val_31713 === (7))){
var inst_31708 = (state_31712[(2)]);
var state_31712__$1 = state_31712;
var statearr_31714_31801 = state_31712__$1;
(statearr_31714_31801[(2)] = inst_31708);

(statearr_31714_31801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (20))){
var inst_31611 = (state_31712[(7)]);
var inst_31623 = cljs.core.first.call(null,inst_31611);
var inst_31624 = cljs.core.nth.call(null,inst_31623,(0),null);
var inst_31625 = cljs.core.nth.call(null,inst_31623,(1),null);
var state_31712__$1 = (function (){var statearr_31715 = state_31712;
(statearr_31715[(8)] = inst_31624);

return statearr_31715;
})();
if(cljs.core.truth_(inst_31625)){
var statearr_31716_31802 = state_31712__$1;
(statearr_31716_31802[(1)] = (22));

} else {
var statearr_31717_31803 = state_31712__$1;
(statearr_31717_31803[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (27))){
var inst_31580 = (state_31712[(9)]);
var inst_31655 = (state_31712[(10)]);
var inst_31660 = (state_31712[(11)]);
var inst_31653 = (state_31712[(12)]);
var inst_31660__$1 = cljs.core._nth.call(null,inst_31653,inst_31655);
var inst_31661 = cljs.core.async.put_BANG_.call(null,inst_31660__$1,inst_31580,done);
var state_31712__$1 = (function (){var statearr_31718 = state_31712;
(statearr_31718[(11)] = inst_31660__$1);

return statearr_31718;
})();
if(cljs.core.truth_(inst_31661)){
var statearr_31719_31804 = state_31712__$1;
(statearr_31719_31804[(1)] = (30));

} else {
var statearr_31720_31805 = state_31712__$1;
(statearr_31720_31805[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (1))){
var state_31712__$1 = state_31712;
var statearr_31721_31806 = state_31712__$1;
(statearr_31721_31806[(2)] = null);

(statearr_31721_31806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (24))){
var inst_31611 = (state_31712[(7)]);
var inst_31630 = (state_31712[(2)]);
var inst_31631 = cljs.core.next.call(null,inst_31611);
var inst_31589 = inst_31631;
var inst_31590 = null;
var inst_31591 = (0);
var inst_31592 = (0);
var state_31712__$1 = (function (){var statearr_31722 = state_31712;
(statearr_31722[(13)] = inst_31590);

(statearr_31722[(14)] = inst_31591);

(statearr_31722[(15)] = inst_31630);

(statearr_31722[(16)] = inst_31589);

(statearr_31722[(17)] = inst_31592);

return statearr_31722;
})();
var statearr_31723_31807 = state_31712__$1;
(statearr_31723_31807[(2)] = null);

(statearr_31723_31807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (39))){
var state_31712__$1 = state_31712;
var statearr_31727_31808 = state_31712__$1;
(statearr_31727_31808[(2)] = null);

(statearr_31727_31808[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (4))){
var inst_31580 = (state_31712[(9)]);
var inst_31580__$1 = (state_31712[(2)]);
var inst_31581 = (inst_31580__$1 == null);
var state_31712__$1 = (function (){var statearr_31728 = state_31712;
(statearr_31728[(9)] = inst_31580__$1);

return statearr_31728;
})();
if(cljs.core.truth_(inst_31581)){
var statearr_31729_31809 = state_31712__$1;
(statearr_31729_31809[(1)] = (5));

} else {
var statearr_31730_31810 = state_31712__$1;
(statearr_31730_31810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (15))){
var inst_31590 = (state_31712[(13)]);
var inst_31591 = (state_31712[(14)]);
var inst_31589 = (state_31712[(16)]);
var inst_31592 = (state_31712[(17)]);
var inst_31607 = (state_31712[(2)]);
var inst_31608 = (inst_31592 + (1));
var tmp31724 = inst_31590;
var tmp31725 = inst_31591;
var tmp31726 = inst_31589;
var inst_31589__$1 = tmp31726;
var inst_31590__$1 = tmp31724;
var inst_31591__$1 = tmp31725;
var inst_31592__$1 = inst_31608;
var state_31712__$1 = (function (){var statearr_31731 = state_31712;
(statearr_31731[(13)] = inst_31590__$1);

(statearr_31731[(14)] = inst_31591__$1);

(statearr_31731[(18)] = inst_31607);

(statearr_31731[(16)] = inst_31589__$1);

(statearr_31731[(17)] = inst_31592__$1);

return statearr_31731;
})();
var statearr_31732_31811 = state_31712__$1;
(statearr_31732_31811[(2)] = null);

(statearr_31732_31811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (21))){
var inst_31634 = (state_31712[(2)]);
var state_31712__$1 = state_31712;
var statearr_31736_31812 = state_31712__$1;
(statearr_31736_31812[(2)] = inst_31634);

(statearr_31736_31812[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (31))){
var inst_31660 = (state_31712[(11)]);
var inst_31664 = done.call(null,null);
var inst_31665 = cljs.core.async.untap_STAR_.call(null,m,inst_31660);
var state_31712__$1 = (function (){var statearr_31737 = state_31712;
(statearr_31737[(19)] = inst_31664);

return statearr_31737;
})();
var statearr_31738_31813 = state_31712__$1;
(statearr_31738_31813[(2)] = inst_31665);

(statearr_31738_31813[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (32))){
var inst_31652 = (state_31712[(20)]);
var inst_31654 = (state_31712[(21)]);
var inst_31655 = (state_31712[(10)]);
var inst_31653 = (state_31712[(12)]);
var inst_31667 = (state_31712[(2)]);
var inst_31668 = (inst_31655 + (1));
var tmp31733 = inst_31652;
var tmp31734 = inst_31654;
var tmp31735 = inst_31653;
var inst_31652__$1 = tmp31733;
var inst_31653__$1 = tmp31735;
var inst_31654__$1 = tmp31734;
var inst_31655__$1 = inst_31668;
var state_31712__$1 = (function (){var statearr_31739 = state_31712;
(statearr_31739[(20)] = inst_31652__$1);

(statearr_31739[(22)] = inst_31667);

(statearr_31739[(21)] = inst_31654__$1);

(statearr_31739[(10)] = inst_31655__$1);

(statearr_31739[(12)] = inst_31653__$1);

return statearr_31739;
})();
var statearr_31740_31814 = state_31712__$1;
(statearr_31740_31814[(2)] = null);

(statearr_31740_31814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (40))){
var inst_31680 = (state_31712[(23)]);
var inst_31684 = done.call(null,null);
var inst_31685 = cljs.core.async.untap_STAR_.call(null,m,inst_31680);
var state_31712__$1 = (function (){var statearr_31741 = state_31712;
(statearr_31741[(24)] = inst_31684);

return statearr_31741;
})();
var statearr_31742_31815 = state_31712__$1;
(statearr_31742_31815[(2)] = inst_31685);

(statearr_31742_31815[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (33))){
var inst_31671 = (state_31712[(25)]);
var inst_31673 = cljs.core.chunked_seq_QMARK_.call(null,inst_31671);
var state_31712__$1 = state_31712;
if(inst_31673){
var statearr_31743_31816 = state_31712__$1;
(statearr_31743_31816[(1)] = (36));

} else {
var statearr_31744_31817 = state_31712__$1;
(statearr_31744_31817[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (13))){
var inst_31601 = (state_31712[(26)]);
var inst_31604 = cljs.core.async.close_BANG_.call(null,inst_31601);
var state_31712__$1 = state_31712;
var statearr_31745_31818 = state_31712__$1;
(statearr_31745_31818[(2)] = inst_31604);

(statearr_31745_31818[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (22))){
var inst_31624 = (state_31712[(8)]);
var inst_31627 = cljs.core.async.close_BANG_.call(null,inst_31624);
var state_31712__$1 = state_31712;
var statearr_31746_31819 = state_31712__$1;
(statearr_31746_31819[(2)] = inst_31627);

(statearr_31746_31819[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (36))){
var inst_31671 = (state_31712[(25)]);
var inst_31675 = cljs.core.chunk_first.call(null,inst_31671);
var inst_31676 = cljs.core.chunk_rest.call(null,inst_31671);
var inst_31677 = cljs.core.count.call(null,inst_31675);
var inst_31652 = inst_31676;
var inst_31653 = inst_31675;
var inst_31654 = inst_31677;
var inst_31655 = (0);
var state_31712__$1 = (function (){var statearr_31747 = state_31712;
(statearr_31747[(20)] = inst_31652);

(statearr_31747[(21)] = inst_31654);

(statearr_31747[(10)] = inst_31655);

(statearr_31747[(12)] = inst_31653);

return statearr_31747;
})();
var statearr_31748_31820 = state_31712__$1;
(statearr_31748_31820[(2)] = null);

(statearr_31748_31820[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (41))){
var inst_31671 = (state_31712[(25)]);
var inst_31687 = (state_31712[(2)]);
var inst_31688 = cljs.core.next.call(null,inst_31671);
var inst_31652 = inst_31688;
var inst_31653 = null;
var inst_31654 = (0);
var inst_31655 = (0);
var state_31712__$1 = (function (){var statearr_31749 = state_31712;
(statearr_31749[(20)] = inst_31652);

(statearr_31749[(21)] = inst_31654);

(statearr_31749[(27)] = inst_31687);

(statearr_31749[(10)] = inst_31655);

(statearr_31749[(12)] = inst_31653);

return statearr_31749;
})();
var statearr_31750_31821 = state_31712__$1;
(statearr_31750_31821[(2)] = null);

(statearr_31750_31821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (43))){
var state_31712__$1 = state_31712;
var statearr_31751_31822 = state_31712__$1;
(statearr_31751_31822[(2)] = null);

(statearr_31751_31822[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (29))){
var inst_31696 = (state_31712[(2)]);
var state_31712__$1 = state_31712;
var statearr_31752_31823 = state_31712__$1;
(statearr_31752_31823[(2)] = inst_31696);

(statearr_31752_31823[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (44))){
var inst_31705 = (state_31712[(2)]);
var state_31712__$1 = (function (){var statearr_31753 = state_31712;
(statearr_31753[(28)] = inst_31705);

return statearr_31753;
})();
var statearr_31754_31824 = state_31712__$1;
(statearr_31754_31824[(2)] = null);

(statearr_31754_31824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (6))){
var inst_31644 = (state_31712[(29)]);
var inst_31643 = cljs.core.deref.call(null,cs);
var inst_31644__$1 = cljs.core.keys.call(null,inst_31643);
var inst_31645 = cljs.core.count.call(null,inst_31644__$1);
var inst_31646 = cljs.core.reset_BANG_.call(null,dctr,inst_31645);
var inst_31651 = cljs.core.seq.call(null,inst_31644__$1);
var inst_31652 = inst_31651;
var inst_31653 = null;
var inst_31654 = (0);
var inst_31655 = (0);
var state_31712__$1 = (function (){var statearr_31755 = state_31712;
(statearr_31755[(20)] = inst_31652);

(statearr_31755[(21)] = inst_31654);

(statearr_31755[(29)] = inst_31644__$1);

(statearr_31755[(10)] = inst_31655);

(statearr_31755[(30)] = inst_31646);

(statearr_31755[(12)] = inst_31653);

return statearr_31755;
})();
var statearr_31756_31825 = state_31712__$1;
(statearr_31756_31825[(2)] = null);

(statearr_31756_31825[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (28))){
var inst_31652 = (state_31712[(20)]);
var inst_31671 = (state_31712[(25)]);
var inst_31671__$1 = cljs.core.seq.call(null,inst_31652);
var state_31712__$1 = (function (){var statearr_31757 = state_31712;
(statearr_31757[(25)] = inst_31671__$1);

return statearr_31757;
})();
if(inst_31671__$1){
var statearr_31758_31826 = state_31712__$1;
(statearr_31758_31826[(1)] = (33));

} else {
var statearr_31759_31827 = state_31712__$1;
(statearr_31759_31827[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (25))){
var inst_31654 = (state_31712[(21)]);
var inst_31655 = (state_31712[(10)]);
var inst_31657 = (inst_31655 < inst_31654);
var inst_31658 = inst_31657;
var state_31712__$1 = state_31712;
if(cljs.core.truth_(inst_31658)){
var statearr_31760_31828 = state_31712__$1;
(statearr_31760_31828[(1)] = (27));

} else {
var statearr_31761_31829 = state_31712__$1;
(statearr_31761_31829[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (34))){
var state_31712__$1 = state_31712;
var statearr_31762_31830 = state_31712__$1;
(statearr_31762_31830[(2)] = null);

(statearr_31762_31830[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (17))){
var state_31712__$1 = state_31712;
var statearr_31763_31831 = state_31712__$1;
(statearr_31763_31831[(2)] = null);

(statearr_31763_31831[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (3))){
var inst_31710 = (state_31712[(2)]);
var state_31712__$1 = state_31712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31712__$1,inst_31710);
} else {
if((state_val_31713 === (12))){
var inst_31639 = (state_31712[(2)]);
var state_31712__$1 = state_31712;
var statearr_31764_31832 = state_31712__$1;
(statearr_31764_31832[(2)] = inst_31639);

(statearr_31764_31832[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (2))){
var state_31712__$1 = state_31712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31712__$1,(4),ch);
} else {
if((state_val_31713 === (23))){
var state_31712__$1 = state_31712;
var statearr_31765_31833 = state_31712__$1;
(statearr_31765_31833[(2)] = null);

(statearr_31765_31833[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (35))){
var inst_31694 = (state_31712[(2)]);
var state_31712__$1 = state_31712;
var statearr_31766_31834 = state_31712__$1;
(statearr_31766_31834[(2)] = inst_31694);

(statearr_31766_31834[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (19))){
var inst_31611 = (state_31712[(7)]);
var inst_31615 = cljs.core.chunk_first.call(null,inst_31611);
var inst_31616 = cljs.core.chunk_rest.call(null,inst_31611);
var inst_31617 = cljs.core.count.call(null,inst_31615);
var inst_31589 = inst_31616;
var inst_31590 = inst_31615;
var inst_31591 = inst_31617;
var inst_31592 = (0);
var state_31712__$1 = (function (){var statearr_31767 = state_31712;
(statearr_31767[(13)] = inst_31590);

(statearr_31767[(14)] = inst_31591);

(statearr_31767[(16)] = inst_31589);

(statearr_31767[(17)] = inst_31592);

return statearr_31767;
})();
var statearr_31768_31835 = state_31712__$1;
(statearr_31768_31835[(2)] = null);

(statearr_31768_31835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (11))){
var inst_31611 = (state_31712[(7)]);
var inst_31589 = (state_31712[(16)]);
var inst_31611__$1 = cljs.core.seq.call(null,inst_31589);
var state_31712__$1 = (function (){var statearr_31769 = state_31712;
(statearr_31769[(7)] = inst_31611__$1);

return statearr_31769;
})();
if(inst_31611__$1){
var statearr_31770_31836 = state_31712__$1;
(statearr_31770_31836[(1)] = (16));

} else {
var statearr_31771_31837 = state_31712__$1;
(statearr_31771_31837[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (9))){
var inst_31641 = (state_31712[(2)]);
var state_31712__$1 = state_31712;
var statearr_31772_31838 = state_31712__$1;
(statearr_31772_31838[(2)] = inst_31641);

(statearr_31772_31838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (5))){
var inst_31587 = cljs.core.deref.call(null,cs);
var inst_31588 = cljs.core.seq.call(null,inst_31587);
var inst_31589 = inst_31588;
var inst_31590 = null;
var inst_31591 = (0);
var inst_31592 = (0);
var state_31712__$1 = (function (){var statearr_31773 = state_31712;
(statearr_31773[(13)] = inst_31590);

(statearr_31773[(14)] = inst_31591);

(statearr_31773[(16)] = inst_31589);

(statearr_31773[(17)] = inst_31592);

return statearr_31773;
})();
var statearr_31774_31839 = state_31712__$1;
(statearr_31774_31839[(2)] = null);

(statearr_31774_31839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (14))){
var state_31712__$1 = state_31712;
var statearr_31775_31840 = state_31712__$1;
(statearr_31775_31840[(2)] = null);

(statearr_31775_31840[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (45))){
var inst_31702 = (state_31712[(2)]);
var state_31712__$1 = state_31712;
var statearr_31776_31841 = state_31712__$1;
(statearr_31776_31841[(2)] = inst_31702);

(statearr_31776_31841[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (26))){
var inst_31644 = (state_31712[(29)]);
var inst_31698 = (state_31712[(2)]);
var inst_31699 = cljs.core.seq.call(null,inst_31644);
var state_31712__$1 = (function (){var statearr_31777 = state_31712;
(statearr_31777[(31)] = inst_31698);

return statearr_31777;
})();
if(inst_31699){
var statearr_31778_31842 = state_31712__$1;
(statearr_31778_31842[(1)] = (42));

} else {
var statearr_31779_31843 = state_31712__$1;
(statearr_31779_31843[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (16))){
var inst_31611 = (state_31712[(7)]);
var inst_31613 = cljs.core.chunked_seq_QMARK_.call(null,inst_31611);
var state_31712__$1 = state_31712;
if(inst_31613){
var statearr_31780_31844 = state_31712__$1;
(statearr_31780_31844[(1)] = (19));

} else {
var statearr_31781_31845 = state_31712__$1;
(statearr_31781_31845[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (38))){
var inst_31691 = (state_31712[(2)]);
var state_31712__$1 = state_31712;
var statearr_31782_31846 = state_31712__$1;
(statearr_31782_31846[(2)] = inst_31691);

(statearr_31782_31846[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (30))){
var state_31712__$1 = state_31712;
var statearr_31783_31847 = state_31712__$1;
(statearr_31783_31847[(2)] = null);

(statearr_31783_31847[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (10))){
var inst_31590 = (state_31712[(13)]);
var inst_31592 = (state_31712[(17)]);
var inst_31600 = cljs.core._nth.call(null,inst_31590,inst_31592);
var inst_31601 = cljs.core.nth.call(null,inst_31600,(0),null);
var inst_31602 = cljs.core.nth.call(null,inst_31600,(1),null);
var state_31712__$1 = (function (){var statearr_31784 = state_31712;
(statearr_31784[(26)] = inst_31601);

return statearr_31784;
})();
if(cljs.core.truth_(inst_31602)){
var statearr_31785_31848 = state_31712__$1;
(statearr_31785_31848[(1)] = (13));

} else {
var statearr_31786_31849 = state_31712__$1;
(statearr_31786_31849[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (18))){
var inst_31637 = (state_31712[(2)]);
var state_31712__$1 = state_31712;
var statearr_31787_31850 = state_31712__$1;
(statearr_31787_31850[(2)] = inst_31637);

(statearr_31787_31850[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (42))){
var state_31712__$1 = state_31712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31712__$1,(45),dchan);
} else {
if((state_val_31713 === (37))){
var inst_31580 = (state_31712[(9)]);
var inst_31671 = (state_31712[(25)]);
var inst_31680 = (state_31712[(23)]);
var inst_31680__$1 = cljs.core.first.call(null,inst_31671);
var inst_31681 = cljs.core.async.put_BANG_.call(null,inst_31680__$1,inst_31580,done);
var state_31712__$1 = (function (){var statearr_31788 = state_31712;
(statearr_31788[(23)] = inst_31680__$1);

return statearr_31788;
})();
if(cljs.core.truth_(inst_31681)){
var statearr_31789_31851 = state_31712__$1;
(statearr_31789_31851[(1)] = (39));

} else {
var statearr_31790_31852 = state_31712__$1;
(statearr_31790_31852[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (8))){
var inst_31591 = (state_31712[(14)]);
var inst_31592 = (state_31712[(17)]);
var inst_31594 = (inst_31592 < inst_31591);
var inst_31595 = inst_31594;
var state_31712__$1 = state_31712;
if(cljs.core.truth_(inst_31595)){
var statearr_31791_31853 = state_31712__$1;
(statearr_31791_31853[(1)] = (10));

} else {
var statearr_31792_31854 = state_31712__$1;
(statearr_31792_31854[(1)] = (11));

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
});})(c__30477__auto___31800,cs,m,dchan,dctr,done))
;
return ((function (switch__30365__auto__,c__30477__auto___31800,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30366__auto__ = null;
var cljs$core$async$mult_$_state_machine__30366__auto____0 = (function (){
var statearr_31796 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31796[(0)] = cljs$core$async$mult_$_state_machine__30366__auto__);

(statearr_31796[(1)] = (1));

return statearr_31796;
});
var cljs$core$async$mult_$_state_machine__30366__auto____1 = (function (state_31712){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_31712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e31797){if((e31797 instanceof Object)){
var ex__30369__auto__ = e31797;
var statearr_31798_31855 = state_31712;
(statearr_31798_31855[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31856 = state_31712;
state_31712 = G__31856;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30366__auto__ = function(state_31712){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30366__auto____1.call(this,state_31712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30366__auto____0;
cljs$core$async$mult_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30366__auto____1;
return cljs$core$async$mult_$_state_machine__30366__auto__;
})()
;})(switch__30365__auto__,c__30477__auto___31800,cs,m,dchan,dctr,done))
})();
var state__30479__auto__ = (function (){var statearr_31799 = f__30478__auto__.call(null);
(statearr_31799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto___31800);

return statearr_31799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(c__30477__auto___31800,cs,m,dchan,dctr,done))
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
var args31857 = [];
var len__25873__auto___31860 = arguments.length;
var i__25874__auto___31861 = (0);
while(true){
if((i__25874__auto___31861 < len__25873__auto___31860)){
args31857.push((arguments[i__25874__auto___31861]));

var G__31862 = (i__25874__auto___31861 + (1));
i__25874__auto___31861 = G__31862;
continue;
} else {
}
break;
}

var G__31859 = args31857.length;
switch (G__31859) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31857.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25461__auto__ = (((m == null))?null:m);
var m__25462__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,m,ch);
} else {
var m__25462__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25461__auto__ = (((m == null))?null:m);
var m__25462__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,m,ch);
} else {
var m__25462__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25461__auto__ = (((m == null))?null:m);
var m__25462__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,m);
} else {
var m__25462__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25461__auto__ = (((m == null))?null:m);
var m__25462__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,m,state_map);
} else {
var m__25462__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25461__auto__ = (((m == null))?null:m);
var m__25462__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,m,mode);
} else {
var m__25462__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25880__auto__ = [];
var len__25873__auto___31874 = arguments.length;
var i__25874__auto___31875 = (0);
while(true){
if((i__25874__auto___31875 < len__25873__auto___31874)){
args__25880__auto__.push((arguments[i__25874__auto___31875]));

var G__31876 = (i__25874__auto___31875 + (1));
i__25874__auto___31875 = G__31876;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((3) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25881__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31868){
var map__31869 = p__31868;
var map__31869__$1 = ((((!((map__31869 == null)))?((((map__31869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31869):map__31869);
var opts = map__31869__$1;
var statearr_31871_31877 = state;
(statearr_31871_31877[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31869,map__31869__$1,opts){
return (function (val){
var statearr_31872_31878 = state;
(statearr_31872_31878[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31869,map__31869__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31873_31879 = state;
(statearr_31873_31879[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31864){
var G__31865 = cljs.core.first.call(null,seq31864);
var seq31864__$1 = cljs.core.next.call(null,seq31864);
var G__31866 = cljs.core.first.call(null,seq31864__$1);
var seq31864__$2 = cljs.core.next.call(null,seq31864__$1);
var G__31867 = cljs.core.first.call(null,seq31864__$2);
var seq31864__$3 = cljs.core.next.call(null,seq31864__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31865,G__31866,G__31867,seq31864__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32045 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32045 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32046){
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
this.meta32046 = meta32046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32047,meta32046__$1){
var self__ = this;
var _32047__$1 = this;
return (new cljs.core.async.t_cljs$core$async32045(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32046__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32045.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32047){
var self__ = this;
var _32047__$1 = this;
return self__.meta32046;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32045.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32045.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32045.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async32045.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32045.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32045.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32045.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32045.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32045.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32046","meta32046",-2061605192,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32045.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32045.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32045";

cljs.core.async.t_cljs$core$async32045.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async32045");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32045 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32045(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32046){
return (new cljs.core.async.t_cljs$core$async32045(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32046));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32045(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30477__auto___32210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30477__auto___32210,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (c__30477__auto___32210,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32147){
var state_val_32148 = (state_32147[(1)]);
if((state_val_32148 === (7))){
var inst_32063 = (state_32147[(2)]);
var state_32147__$1 = state_32147;
var statearr_32149_32211 = state_32147__$1;
(statearr_32149_32211[(2)] = inst_32063);

(statearr_32149_32211[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (20))){
var inst_32075 = (state_32147[(7)]);
var state_32147__$1 = state_32147;
var statearr_32150_32212 = state_32147__$1;
(statearr_32150_32212[(2)] = inst_32075);

(statearr_32150_32212[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (27))){
var state_32147__$1 = state_32147;
var statearr_32151_32213 = state_32147__$1;
(statearr_32151_32213[(2)] = null);

(statearr_32151_32213[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (1))){
var inst_32051 = (state_32147[(8)]);
var inst_32051__$1 = calc_state.call(null);
var inst_32053 = (inst_32051__$1 == null);
var inst_32054 = cljs.core.not.call(null,inst_32053);
var state_32147__$1 = (function (){var statearr_32152 = state_32147;
(statearr_32152[(8)] = inst_32051__$1);

return statearr_32152;
})();
if(inst_32054){
var statearr_32153_32214 = state_32147__$1;
(statearr_32153_32214[(1)] = (2));

} else {
var statearr_32154_32215 = state_32147__$1;
(statearr_32154_32215[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (24))){
var inst_32098 = (state_32147[(9)]);
var inst_32121 = (state_32147[(10)]);
var inst_32107 = (state_32147[(11)]);
var inst_32121__$1 = inst_32098.call(null,inst_32107);
var state_32147__$1 = (function (){var statearr_32155 = state_32147;
(statearr_32155[(10)] = inst_32121__$1);

return statearr_32155;
})();
if(cljs.core.truth_(inst_32121__$1)){
var statearr_32156_32216 = state_32147__$1;
(statearr_32156_32216[(1)] = (29));

} else {
var statearr_32157_32217 = state_32147__$1;
(statearr_32157_32217[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (4))){
var inst_32066 = (state_32147[(2)]);
var state_32147__$1 = state_32147;
if(cljs.core.truth_(inst_32066)){
var statearr_32158_32218 = state_32147__$1;
(statearr_32158_32218[(1)] = (8));

} else {
var statearr_32159_32219 = state_32147__$1;
(statearr_32159_32219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (15))){
var inst_32092 = (state_32147[(2)]);
var state_32147__$1 = state_32147;
if(cljs.core.truth_(inst_32092)){
var statearr_32160_32220 = state_32147__$1;
(statearr_32160_32220[(1)] = (19));

} else {
var statearr_32161_32221 = state_32147__$1;
(statearr_32161_32221[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (21))){
var inst_32097 = (state_32147[(12)]);
var inst_32097__$1 = (state_32147[(2)]);
var inst_32098 = cljs.core.get.call(null,inst_32097__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32099 = cljs.core.get.call(null,inst_32097__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32100 = cljs.core.get.call(null,inst_32097__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32147__$1 = (function (){var statearr_32162 = state_32147;
(statearr_32162[(9)] = inst_32098);

(statearr_32162[(12)] = inst_32097__$1);

(statearr_32162[(13)] = inst_32099);

return statearr_32162;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32147__$1,(22),inst_32100);
} else {
if((state_val_32148 === (31))){
var inst_32129 = (state_32147[(2)]);
var state_32147__$1 = state_32147;
if(cljs.core.truth_(inst_32129)){
var statearr_32163_32222 = state_32147__$1;
(statearr_32163_32222[(1)] = (32));

} else {
var statearr_32164_32223 = state_32147__$1;
(statearr_32164_32223[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (32))){
var inst_32106 = (state_32147[(14)]);
var state_32147__$1 = state_32147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32147__$1,(35),out,inst_32106);
} else {
if((state_val_32148 === (33))){
var inst_32097 = (state_32147[(12)]);
var inst_32075 = inst_32097;
var state_32147__$1 = (function (){var statearr_32165 = state_32147;
(statearr_32165[(7)] = inst_32075);

return statearr_32165;
})();
var statearr_32166_32224 = state_32147__$1;
(statearr_32166_32224[(2)] = null);

(statearr_32166_32224[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (13))){
var inst_32075 = (state_32147[(7)]);
var inst_32082 = inst_32075.cljs$lang$protocol_mask$partition0$;
var inst_32083 = (inst_32082 & (64));
var inst_32084 = inst_32075.cljs$core$ISeq$;
var inst_32085 = (inst_32083) || (inst_32084);
var state_32147__$1 = state_32147;
if(cljs.core.truth_(inst_32085)){
var statearr_32167_32225 = state_32147__$1;
(statearr_32167_32225[(1)] = (16));

} else {
var statearr_32168_32226 = state_32147__$1;
(statearr_32168_32226[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (22))){
var inst_32106 = (state_32147[(14)]);
var inst_32107 = (state_32147[(11)]);
var inst_32105 = (state_32147[(2)]);
var inst_32106__$1 = cljs.core.nth.call(null,inst_32105,(0),null);
var inst_32107__$1 = cljs.core.nth.call(null,inst_32105,(1),null);
var inst_32108 = (inst_32106__$1 == null);
var inst_32109 = cljs.core._EQ_.call(null,inst_32107__$1,change);
var inst_32110 = (inst_32108) || (inst_32109);
var state_32147__$1 = (function (){var statearr_32169 = state_32147;
(statearr_32169[(14)] = inst_32106__$1);

(statearr_32169[(11)] = inst_32107__$1);

return statearr_32169;
})();
if(cljs.core.truth_(inst_32110)){
var statearr_32170_32227 = state_32147__$1;
(statearr_32170_32227[(1)] = (23));

} else {
var statearr_32171_32228 = state_32147__$1;
(statearr_32171_32228[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (36))){
var inst_32097 = (state_32147[(12)]);
var inst_32075 = inst_32097;
var state_32147__$1 = (function (){var statearr_32172 = state_32147;
(statearr_32172[(7)] = inst_32075);

return statearr_32172;
})();
var statearr_32173_32229 = state_32147__$1;
(statearr_32173_32229[(2)] = null);

(statearr_32173_32229[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (29))){
var inst_32121 = (state_32147[(10)]);
var state_32147__$1 = state_32147;
var statearr_32174_32230 = state_32147__$1;
(statearr_32174_32230[(2)] = inst_32121);

(statearr_32174_32230[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (6))){
var state_32147__$1 = state_32147;
var statearr_32175_32231 = state_32147__$1;
(statearr_32175_32231[(2)] = false);

(statearr_32175_32231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (28))){
var inst_32117 = (state_32147[(2)]);
var inst_32118 = calc_state.call(null);
var inst_32075 = inst_32118;
var state_32147__$1 = (function (){var statearr_32176 = state_32147;
(statearr_32176[(7)] = inst_32075);

(statearr_32176[(15)] = inst_32117);

return statearr_32176;
})();
var statearr_32177_32232 = state_32147__$1;
(statearr_32177_32232[(2)] = null);

(statearr_32177_32232[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (25))){
var inst_32143 = (state_32147[(2)]);
var state_32147__$1 = state_32147;
var statearr_32178_32233 = state_32147__$1;
(statearr_32178_32233[(2)] = inst_32143);

(statearr_32178_32233[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (34))){
var inst_32141 = (state_32147[(2)]);
var state_32147__$1 = state_32147;
var statearr_32179_32234 = state_32147__$1;
(statearr_32179_32234[(2)] = inst_32141);

(statearr_32179_32234[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (17))){
var state_32147__$1 = state_32147;
var statearr_32180_32235 = state_32147__$1;
(statearr_32180_32235[(2)] = false);

(statearr_32180_32235[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (3))){
var state_32147__$1 = state_32147;
var statearr_32181_32236 = state_32147__$1;
(statearr_32181_32236[(2)] = false);

(statearr_32181_32236[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (12))){
var inst_32145 = (state_32147[(2)]);
var state_32147__$1 = state_32147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32147__$1,inst_32145);
} else {
if((state_val_32148 === (2))){
var inst_32051 = (state_32147[(8)]);
var inst_32056 = inst_32051.cljs$lang$protocol_mask$partition0$;
var inst_32057 = (inst_32056 & (64));
var inst_32058 = inst_32051.cljs$core$ISeq$;
var inst_32059 = (inst_32057) || (inst_32058);
var state_32147__$1 = state_32147;
if(cljs.core.truth_(inst_32059)){
var statearr_32182_32237 = state_32147__$1;
(statearr_32182_32237[(1)] = (5));

} else {
var statearr_32183_32238 = state_32147__$1;
(statearr_32183_32238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (23))){
var inst_32106 = (state_32147[(14)]);
var inst_32112 = (inst_32106 == null);
var state_32147__$1 = state_32147;
if(cljs.core.truth_(inst_32112)){
var statearr_32184_32239 = state_32147__$1;
(statearr_32184_32239[(1)] = (26));

} else {
var statearr_32185_32240 = state_32147__$1;
(statearr_32185_32240[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (35))){
var inst_32132 = (state_32147[(2)]);
var state_32147__$1 = state_32147;
if(cljs.core.truth_(inst_32132)){
var statearr_32186_32241 = state_32147__$1;
(statearr_32186_32241[(1)] = (36));

} else {
var statearr_32187_32242 = state_32147__$1;
(statearr_32187_32242[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (19))){
var inst_32075 = (state_32147[(7)]);
var inst_32094 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32075);
var state_32147__$1 = state_32147;
var statearr_32188_32243 = state_32147__$1;
(statearr_32188_32243[(2)] = inst_32094);

(statearr_32188_32243[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (11))){
var inst_32075 = (state_32147[(7)]);
var inst_32079 = (inst_32075 == null);
var inst_32080 = cljs.core.not.call(null,inst_32079);
var state_32147__$1 = state_32147;
if(inst_32080){
var statearr_32189_32244 = state_32147__$1;
(statearr_32189_32244[(1)] = (13));

} else {
var statearr_32190_32245 = state_32147__$1;
(statearr_32190_32245[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (9))){
var inst_32051 = (state_32147[(8)]);
var state_32147__$1 = state_32147;
var statearr_32191_32246 = state_32147__$1;
(statearr_32191_32246[(2)] = inst_32051);

(statearr_32191_32246[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (5))){
var state_32147__$1 = state_32147;
var statearr_32192_32247 = state_32147__$1;
(statearr_32192_32247[(2)] = true);

(statearr_32192_32247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (14))){
var state_32147__$1 = state_32147;
var statearr_32193_32248 = state_32147__$1;
(statearr_32193_32248[(2)] = false);

(statearr_32193_32248[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (26))){
var inst_32107 = (state_32147[(11)]);
var inst_32114 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32107);
var state_32147__$1 = state_32147;
var statearr_32194_32249 = state_32147__$1;
(statearr_32194_32249[(2)] = inst_32114);

(statearr_32194_32249[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (16))){
var state_32147__$1 = state_32147;
var statearr_32195_32250 = state_32147__$1;
(statearr_32195_32250[(2)] = true);

(statearr_32195_32250[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (38))){
var inst_32137 = (state_32147[(2)]);
var state_32147__$1 = state_32147;
var statearr_32196_32251 = state_32147__$1;
(statearr_32196_32251[(2)] = inst_32137);

(statearr_32196_32251[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (30))){
var inst_32098 = (state_32147[(9)]);
var inst_32099 = (state_32147[(13)]);
var inst_32107 = (state_32147[(11)]);
var inst_32124 = cljs.core.empty_QMARK_.call(null,inst_32098);
var inst_32125 = inst_32099.call(null,inst_32107);
var inst_32126 = cljs.core.not.call(null,inst_32125);
var inst_32127 = (inst_32124) && (inst_32126);
var state_32147__$1 = state_32147;
var statearr_32197_32252 = state_32147__$1;
(statearr_32197_32252[(2)] = inst_32127);

(statearr_32197_32252[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (10))){
var inst_32051 = (state_32147[(8)]);
var inst_32071 = (state_32147[(2)]);
var inst_32072 = cljs.core.get.call(null,inst_32071,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32073 = cljs.core.get.call(null,inst_32071,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32074 = cljs.core.get.call(null,inst_32071,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32075 = inst_32051;
var state_32147__$1 = (function (){var statearr_32198 = state_32147;
(statearr_32198[(16)] = inst_32074);

(statearr_32198[(17)] = inst_32072);

(statearr_32198[(7)] = inst_32075);

(statearr_32198[(18)] = inst_32073);

return statearr_32198;
})();
var statearr_32199_32253 = state_32147__$1;
(statearr_32199_32253[(2)] = null);

(statearr_32199_32253[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (18))){
var inst_32089 = (state_32147[(2)]);
var state_32147__$1 = state_32147;
var statearr_32200_32254 = state_32147__$1;
(statearr_32200_32254[(2)] = inst_32089);

(statearr_32200_32254[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (37))){
var state_32147__$1 = state_32147;
var statearr_32201_32255 = state_32147__$1;
(statearr_32201_32255[(2)] = null);

(statearr_32201_32255[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (8))){
var inst_32051 = (state_32147[(8)]);
var inst_32068 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32051);
var state_32147__$1 = state_32147;
var statearr_32202_32256 = state_32147__$1;
(statearr_32202_32256[(2)] = inst_32068);

(statearr_32202_32256[(1)] = (10));


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
});})(c__30477__auto___32210,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30365__auto__,c__30477__auto___32210,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30366__auto__ = null;
var cljs$core$async$mix_$_state_machine__30366__auto____0 = (function (){
var statearr_32206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32206[(0)] = cljs$core$async$mix_$_state_machine__30366__auto__);

(statearr_32206[(1)] = (1));

return statearr_32206;
});
var cljs$core$async$mix_$_state_machine__30366__auto____1 = (function (state_32147){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_32147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e32207){if((e32207 instanceof Object)){
var ex__30369__auto__ = e32207;
var statearr_32208_32257 = state_32147;
(statearr_32208_32257[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32258 = state_32147;
state_32147 = G__32258;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30366__auto__ = function(state_32147){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30366__auto____1.call(this,state_32147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30366__auto____0;
cljs$core$async$mix_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30366__auto____1;
return cljs$core$async$mix_$_state_machine__30366__auto__;
})()
;})(switch__30365__auto__,c__30477__auto___32210,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30479__auto__ = (function (){var statearr_32209 = f__30478__auto__.call(null);
(statearr_32209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto___32210);

return statearr_32209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(c__30477__auto___32210,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25461__auto__ = (((p == null))?null:p);
var m__25462__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25462__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25461__auto__ = (((p == null))?null:p);
var m__25462__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,p,v,ch);
} else {
var m__25462__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args32259 = [];
var len__25873__auto___32262 = arguments.length;
var i__25874__auto___32263 = (0);
while(true){
if((i__25874__auto___32263 < len__25873__auto___32262)){
args32259.push((arguments[i__25874__auto___32263]));

var G__32264 = (i__25874__auto___32263 + (1));
i__25874__auto___32263 = G__32264;
continue;
} else {
}
break;
}

var G__32261 = args32259.length;
switch (G__32261) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32259.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25461__auto__ = (((p == null))?null:p);
var m__25462__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,p);
} else {
var m__25462__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25461__auto__ = (((p == null))?null:p);
var m__25462__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,p,v);
} else {
var m__25462__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var args32267 = [];
var len__25873__auto___32392 = arguments.length;
var i__25874__auto___32393 = (0);
while(true){
if((i__25874__auto___32393 < len__25873__auto___32392)){
args32267.push((arguments[i__25874__auto___32393]));

var G__32394 = (i__25874__auto___32393 + (1));
i__25874__auto___32393 = G__32394;
continue;
} else {
}
break;
}

var G__32269 = args32267.length;
switch (G__32269) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32267.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24798__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24798__auto__,mults){
return (function (p1__32266_SHARP_){
if(cljs.core.truth_(p1__32266_SHARP_.call(null,topic))){
return p1__32266_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32266_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24798__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32270 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32270 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32271){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32271 = meta32271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32272,meta32271__$1){
var self__ = this;
var _32272__$1 = this;
return (new cljs.core.async.t_cljs$core$async32270(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32271__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32270.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32272){
var self__ = this;
var _32272__$1 = this;
return self__.meta32271;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32270.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32270.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32270.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async32270.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32270.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32270.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32270.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32270.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32271","meta32271",-1268834828,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32270.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32270.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32270";

cljs.core.async.t_cljs$core$async32270.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async32270");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32270 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32270(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32271){
return (new cljs.core.async.t_cljs$core$async32270(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32271));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32270(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30477__auto___32396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30477__auto___32396,mults,ensure_mult,p){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (c__30477__auto___32396,mults,ensure_mult,p){
return (function (state_32344){
var state_val_32345 = (state_32344[(1)]);
if((state_val_32345 === (7))){
var inst_32340 = (state_32344[(2)]);
var state_32344__$1 = state_32344;
var statearr_32346_32397 = state_32344__$1;
(statearr_32346_32397[(2)] = inst_32340);

(statearr_32346_32397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (20))){
var state_32344__$1 = state_32344;
var statearr_32347_32398 = state_32344__$1;
(statearr_32347_32398[(2)] = null);

(statearr_32347_32398[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (1))){
var state_32344__$1 = state_32344;
var statearr_32348_32399 = state_32344__$1;
(statearr_32348_32399[(2)] = null);

(statearr_32348_32399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (24))){
var inst_32323 = (state_32344[(7)]);
var inst_32332 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32323);
var state_32344__$1 = state_32344;
var statearr_32349_32400 = state_32344__$1;
(statearr_32349_32400[(2)] = inst_32332);

(statearr_32349_32400[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (4))){
var inst_32275 = (state_32344[(8)]);
var inst_32275__$1 = (state_32344[(2)]);
var inst_32276 = (inst_32275__$1 == null);
var state_32344__$1 = (function (){var statearr_32350 = state_32344;
(statearr_32350[(8)] = inst_32275__$1);

return statearr_32350;
})();
if(cljs.core.truth_(inst_32276)){
var statearr_32351_32401 = state_32344__$1;
(statearr_32351_32401[(1)] = (5));

} else {
var statearr_32352_32402 = state_32344__$1;
(statearr_32352_32402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (15))){
var inst_32317 = (state_32344[(2)]);
var state_32344__$1 = state_32344;
var statearr_32353_32403 = state_32344__$1;
(statearr_32353_32403[(2)] = inst_32317);

(statearr_32353_32403[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (21))){
var inst_32337 = (state_32344[(2)]);
var state_32344__$1 = (function (){var statearr_32354 = state_32344;
(statearr_32354[(9)] = inst_32337);

return statearr_32354;
})();
var statearr_32355_32404 = state_32344__$1;
(statearr_32355_32404[(2)] = null);

(statearr_32355_32404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (13))){
var inst_32299 = (state_32344[(10)]);
var inst_32301 = cljs.core.chunked_seq_QMARK_.call(null,inst_32299);
var state_32344__$1 = state_32344;
if(inst_32301){
var statearr_32356_32405 = state_32344__$1;
(statearr_32356_32405[(1)] = (16));

} else {
var statearr_32357_32406 = state_32344__$1;
(statearr_32357_32406[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (22))){
var inst_32329 = (state_32344[(2)]);
var state_32344__$1 = state_32344;
if(cljs.core.truth_(inst_32329)){
var statearr_32358_32407 = state_32344__$1;
(statearr_32358_32407[(1)] = (23));

} else {
var statearr_32359_32408 = state_32344__$1;
(statearr_32359_32408[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (6))){
var inst_32275 = (state_32344[(8)]);
var inst_32325 = (state_32344[(11)]);
var inst_32323 = (state_32344[(7)]);
var inst_32323__$1 = topic_fn.call(null,inst_32275);
var inst_32324 = cljs.core.deref.call(null,mults);
var inst_32325__$1 = cljs.core.get.call(null,inst_32324,inst_32323__$1);
var state_32344__$1 = (function (){var statearr_32360 = state_32344;
(statearr_32360[(11)] = inst_32325__$1);

(statearr_32360[(7)] = inst_32323__$1);

return statearr_32360;
})();
if(cljs.core.truth_(inst_32325__$1)){
var statearr_32361_32409 = state_32344__$1;
(statearr_32361_32409[(1)] = (19));

} else {
var statearr_32362_32410 = state_32344__$1;
(statearr_32362_32410[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (25))){
var inst_32334 = (state_32344[(2)]);
var state_32344__$1 = state_32344;
var statearr_32363_32411 = state_32344__$1;
(statearr_32363_32411[(2)] = inst_32334);

(statearr_32363_32411[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (17))){
var inst_32299 = (state_32344[(10)]);
var inst_32308 = cljs.core.first.call(null,inst_32299);
var inst_32309 = cljs.core.async.muxch_STAR_.call(null,inst_32308);
var inst_32310 = cljs.core.async.close_BANG_.call(null,inst_32309);
var inst_32311 = cljs.core.next.call(null,inst_32299);
var inst_32285 = inst_32311;
var inst_32286 = null;
var inst_32287 = (0);
var inst_32288 = (0);
var state_32344__$1 = (function (){var statearr_32364 = state_32344;
(statearr_32364[(12)] = inst_32286);

(statearr_32364[(13)] = inst_32310);

(statearr_32364[(14)] = inst_32285);

(statearr_32364[(15)] = inst_32287);

(statearr_32364[(16)] = inst_32288);

return statearr_32364;
})();
var statearr_32365_32412 = state_32344__$1;
(statearr_32365_32412[(2)] = null);

(statearr_32365_32412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (3))){
var inst_32342 = (state_32344[(2)]);
var state_32344__$1 = state_32344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32344__$1,inst_32342);
} else {
if((state_val_32345 === (12))){
var inst_32319 = (state_32344[(2)]);
var state_32344__$1 = state_32344;
var statearr_32366_32413 = state_32344__$1;
(statearr_32366_32413[(2)] = inst_32319);

(statearr_32366_32413[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (2))){
var state_32344__$1 = state_32344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32344__$1,(4),ch);
} else {
if((state_val_32345 === (23))){
var state_32344__$1 = state_32344;
var statearr_32367_32414 = state_32344__$1;
(statearr_32367_32414[(2)] = null);

(statearr_32367_32414[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (19))){
var inst_32275 = (state_32344[(8)]);
var inst_32325 = (state_32344[(11)]);
var inst_32327 = cljs.core.async.muxch_STAR_.call(null,inst_32325);
var state_32344__$1 = state_32344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32344__$1,(22),inst_32327,inst_32275);
} else {
if((state_val_32345 === (11))){
var inst_32299 = (state_32344[(10)]);
var inst_32285 = (state_32344[(14)]);
var inst_32299__$1 = cljs.core.seq.call(null,inst_32285);
var state_32344__$1 = (function (){var statearr_32368 = state_32344;
(statearr_32368[(10)] = inst_32299__$1);

return statearr_32368;
})();
if(inst_32299__$1){
var statearr_32369_32415 = state_32344__$1;
(statearr_32369_32415[(1)] = (13));

} else {
var statearr_32370_32416 = state_32344__$1;
(statearr_32370_32416[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (9))){
var inst_32321 = (state_32344[(2)]);
var state_32344__$1 = state_32344;
var statearr_32371_32417 = state_32344__$1;
(statearr_32371_32417[(2)] = inst_32321);

(statearr_32371_32417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (5))){
var inst_32282 = cljs.core.deref.call(null,mults);
var inst_32283 = cljs.core.vals.call(null,inst_32282);
var inst_32284 = cljs.core.seq.call(null,inst_32283);
var inst_32285 = inst_32284;
var inst_32286 = null;
var inst_32287 = (0);
var inst_32288 = (0);
var state_32344__$1 = (function (){var statearr_32372 = state_32344;
(statearr_32372[(12)] = inst_32286);

(statearr_32372[(14)] = inst_32285);

(statearr_32372[(15)] = inst_32287);

(statearr_32372[(16)] = inst_32288);

return statearr_32372;
})();
var statearr_32373_32418 = state_32344__$1;
(statearr_32373_32418[(2)] = null);

(statearr_32373_32418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (14))){
var state_32344__$1 = state_32344;
var statearr_32377_32419 = state_32344__$1;
(statearr_32377_32419[(2)] = null);

(statearr_32377_32419[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (16))){
var inst_32299 = (state_32344[(10)]);
var inst_32303 = cljs.core.chunk_first.call(null,inst_32299);
var inst_32304 = cljs.core.chunk_rest.call(null,inst_32299);
var inst_32305 = cljs.core.count.call(null,inst_32303);
var inst_32285 = inst_32304;
var inst_32286 = inst_32303;
var inst_32287 = inst_32305;
var inst_32288 = (0);
var state_32344__$1 = (function (){var statearr_32378 = state_32344;
(statearr_32378[(12)] = inst_32286);

(statearr_32378[(14)] = inst_32285);

(statearr_32378[(15)] = inst_32287);

(statearr_32378[(16)] = inst_32288);

return statearr_32378;
})();
var statearr_32379_32420 = state_32344__$1;
(statearr_32379_32420[(2)] = null);

(statearr_32379_32420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (10))){
var inst_32286 = (state_32344[(12)]);
var inst_32285 = (state_32344[(14)]);
var inst_32287 = (state_32344[(15)]);
var inst_32288 = (state_32344[(16)]);
var inst_32293 = cljs.core._nth.call(null,inst_32286,inst_32288);
var inst_32294 = cljs.core.async.muxch_STAR_.call(null,inst_32293);
var inst_32295 = cljs.core.async.close_BANG_.call(null,inst_32294);
var inst_32296 = (inst_32288 + (1));
var tmp32374 = inst_32286;
var tmp32375 = inst_32285;
var tmp32376 = inst_32287;
var inst_32285__$1 = tmp32375;
var inst_32286__$1 = tmp32374;
var inst_32287__$1 = tmp32376;
var inst_32288__$1 = inst_32296;
var state_32344__$1 = (function (){var statearr_32380 = state_32344;
(statearr_32380[(17)] = inst_32295);

(statearr_32380[(12)] = inst_32286__$1);

(statearr_32380[(14)] = inst_32285__$1);

(statearr_32380[(15)] = inst_32287__$1);

(statearr_32380[(16)] = inst_32288__$1);

return statearr_32380;
})();
var statearr_32381_32421 = state_32344__$1;
(statearr_32381_32421[(2)] = null);

(statearr_32381_32421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (18))){
var inst_32314 = (state_32344[(2)]);
var state_32344__$1 = state_32344;
var statearr_32382_32422 = state_32344__$1;
(statearr_32382_32422[(2)] = inst_32314);

(statearr_32382_32422[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (8))){
var inst_32287 = (state_32344[(15)]);
var inst_32288 = (state_32344[(16)]);
var inst_32290 = (inst_32288 < inst_32287);
var inst_32291 = inst_32290;
var state_32344__$1 = state_32344;
if(cljs.core.truth_(inst_32291)){
var statearr_32383_32423 = state_32344__$1;
(statearr_32383_32423[(1)] = (10));

} else {
var statearr_32384_32424 = state_32344__$1;
(statearr_32384_32424[(1)] = (11));

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
});})(c__30477__auto___32396,mults,ensure_mult,p))
;
return ((function (switch__30365__auto__,c__30477__auto___32396,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30366__auto__ = null;
var cljs$core$async$state_machine__30366__auto____0 = (function (){
var statearr_32388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32388[(0)] = cljs$core$async$state_machine__30366__auto__);

(statearr_32388[(1)] = (1));

return statearr_32388;
});
var cljs$core$async$state_machine__30366__auto____1 = (function (state_32344){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_32344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e32389){if((e32389 instanceof Object)){
var ex__30369__auto__ = e32389;
var statearr_32390_32425 = state_32344;
(statearr_32390_32425[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32426 = state_32344;
state_32344 = G__32426;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$state_machine__30366__auto__ = function(state_32344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30366__auto____1.call(this,state_32344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30366__auto____0;
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30366__auto____1;
return cljs$core$async$state_machine__30366__auto__;
})()
;})(switch__30365__auto__,c__30477__auto___32396,mults,ensure_mult,p))
})();
var state__30479__auto__ = (function (){var statearr_32391 = f__30478__auto__.call(null);
(statearr_32391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto___32396);

return statearr_32391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(c__30477__auto___32396,mults,ensure_mult,p))
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
var args32427 = [];
var len__25873__auto___32430 = arguments.length;
var i__25874__auto___32431 = (0);
while(true){
if((i__25874__auto___32431 < len__25873__auto___32430)){
args32427.push((arguments[i__25874__auto___32431]));

var G__32432 = (i__25874__auto___32431 + (1));
i__25874__auto___32431 = G__32432;
continue;
} else {
}
break;
}

var G__32429 = args32427.length;
switch (G__32429) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32427.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args32434 = [];
var len__25873__auto___32437 = arguments.length;
var i__25874__auto___32438 = (0);
while(true){
if((i__25874__auto___32438 < len__25873__auto___32437)){
args32434.push((arguments[i__25874__auto___32438]));

var G__32439 = (i__25874__auto___32438 + (1));
i__25874__auto___32438 = G__32439;
continue;
} else {
}
break;
}

var G__32436 = args32434.length;
switch (G__32436) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32434.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var args32441 = [];
var len__25873__auto___32512 = arguments.length;
var i__25874__auto___32513 = (0);
while(true){
if((i__25874__auto___32513 < len__25873__auto___32512)){
args32441.push((arguments[i__25874__auto___32513]));

var G__32514 = (i__25874__auto___32513 + (1));
i__25874__auto___32513 = G__32514;
continue;
} else {
}
break;
}

var G__32443 = args32441.length;
switch (G__32443) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32441.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__30477__auto___32516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30477__auto___32516,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (c__30477__auto___32516,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32482){
var state_val_32483 = (state_32482[(1)]);
if((state_val_32483 === (7))){
var state_32482__$1 = state_32482;
var statearr_32484_32517 = state_32482__$1;
(statearr_32484_32517[(2)] = null);

(statearr_32484_32517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32483 === (1))){
var state_32482__$1 = state_32482;
var statearr_32485_32518 = state_32482__$1;
(statearr_32485_32518[(2)] = null);

(statearr_32485_32518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32483 === (4))){
var inst_32446 = (state_32482[(7)]);
var inst_32448 = (inst_32446 < cnt);
var state_32482__$1 = state_32482;
if(cljs.core.truth_(inst_32448)){
var statearr_32486_32519 = state_32482__$1;
(statearr_32486_32519[(1)] = (6));

} else {
var statearr_32487_32520 = state_32482__$1;
(statearr_32487_32520[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32483 === (15))){
var inst_32478 = (state_32482[(2)]);
var state_32482__$1 = state_32482;
var statearr_32488_32521 = state_32482__$1;
(statearr_32488_32521[(2)] = inst_32478);

(statearr_32488_32521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32483 === (13))){
var inst_32471 = cljs.core.async.close_BANG_.call(null,out);
var state_32482__$1 = state_32482;
var statearr_32489_32522 = state_32482__$1;
(statearr_32489_32522[(2)] = inst_32471);

(statearr_32489_32522[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32483 === (6))){
var state_32482__$1 = state_32482;
var statearr_32490_32523 = state_32482__$1;
(statearr_32490_32523[(2)] = null);

(statearr_32490_32523[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32483 === (3))){
var inst_32480 = (state_32482[(2)]);
var state_32482__$1 = state_32482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32482__$1,inst_32480);
} else {
if((state_val_32483 === (12))){
var inst_32468 = (state_32482[(8)]);
var inst_32468__$1 = (state_32482[(2)]);
var inst_32469 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32468__$1);
var state_32482__$1 = (function (){var statearr_32491 = state_32482;
(statearr_32491[(8)] = inst_32468__$1);

return statearr_32491;
})();
if(cljs.core.truth_(inst_32469)){
var statearr_32492_32524 = state_32482__$1;
(statearr_32492_32524[(1)] = (13));

} else {
var statearr_32493_32525 = state_32482__$1;
(statearr_32493_32525[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32483 === (2))){
var inst_32445 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32446 = (0);
var state_32482__$1 = (function (){var statearr_32494 = state_32482;
(statearr_32494[(7)] = inst_32446);

(statearr_32494[(9)] = inst_32445);

return statearr_32494;
})();
var statearr_32495_32526 = state_32482__$1;
(statearr_32495_32526[(2)] = null);

(statearr_32495_32526[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32483 === (11))){
var inst_32446 = (state_32482[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32482,(10),Object,null,(9));
var inst_32455 = chs__$1.call(null,inst_32446);
var inst_32456 = done.call(null,inst_32446);
var inst_32457 = cljs.core.async.take_BANG_.call(null,inst_32455,inst_32456);
var state_32482__$1 = state_32482;
var statearr_32496_32527 = state_32482__$1;
(statearr_32496_32527[(2)] = inst_32457);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32482__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32483 === (9))){
var inst_32446 = (state_32482[(7)]);
var inst_32459 = (state_32482[(2)]);
var inst_32460 = (inst_32446 + (1));
var inst_32446__$1 = inst_32460;
var state_32482__$1 = (function (){var statearr_32497 = state_32482;
(statearr_32497[(10)] = inst_32459);

(statearr_32497[(7)] = inst_32446__$1);

return statearr_32497;
})();
var statearr_32498_32528 = state_32482__$1;
(statearr_32498_32528[(2)] = null);

(statearr_32498_32528[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32483 === (5))){
var inst_32466 = (state_32482[(2)]);
var state_32482__$1 = (function (){var statearr_32499 = state_32482;
(statearr_32499[(11)] = inst_32466);

return statearr_32499;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32482__$1,(12),dchan);
} else {
if((state_val_32483 === (14))){
var inst_32468 = (state_32482[(8)]);
var inst_32473 = cljs.core.apply.call(null,f,inst_32468);
var state_32482__$1 = state_32482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32482__$1,(16),out,inst_32473);
} else {
if((state_val_32483 === (16))){
var inst_32475 = (state_32482[(2)]);
var state_32482__$1 = (function (){var statearr_32500 = state_32482;
(statearr_32500[(12)] = inst_32475);

return statearr_32500;
})();
var statearr_32501_32529 = state_32482__$1;
(statearr_32501_32529[(2)] = null);

(statearr_32501_32529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32483 === (10))){
var inst_32450 = (state_32482[(2)]);
var inst_32451 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32482__$1 = (function (){var statearr_32502 = state_32482;
(statearr_32502[(13)] = inst_32450);

return statearr_32502;
})();
var statearr_32503_32530 = state_32482__$1;
(statearr_32503_32530[(2)] = inst_32451);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32482__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32483 === (8))){
var inst_32464 = (state_32482[(2)]);
var state_32482__$1 = state_32482;
var statearr_32504_32531 = state_32482__$1;
(statearr_32504_32531[(2)] = inst_32464);

(statearr_32504_32531[(1)] = (5));


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
});})(c__30477__auto___32516,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30365__auto__,c__30477__auto___32516,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30366__auto__ = null;
var cljs$core$async$state_machine__30366__auto____0 = (function (){
var statearr_32508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32508[(0)] = cljs$core$async$state_machine__30366__auto__);

(statearr_32508[(1)] = (1));

return statearr_32508;
});
var cljs$core$async$state_machine__30366__auto____1 = (function (state_32482){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_32482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e32509){if((e32509 instanceof Object)){
var ex__30369__auto__ = e32509;
var statearr_32510_32532 = state_32482;
(statearr_32510_32532[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32533 = state_32482;
state_32482 = G__32533;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$state_machine__30366__auto__ = function(state_32482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30366__auto____1.call(this,state_32482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30366__auto____0;
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30366__auto____1;
return cljs$core$async$state_machine__30366__auto__;
})()
;})(switch__30365__auto__,c__30477__auto___32516,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30479__auto__ = (function (){var statearr_32511 = f__30478__auto__.call(null);
(statearr_32511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto___32516);

return statearr_32511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(c__30477__auto___32516,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args32535 = [];
var len__25873__auto___32593 = arguments.length;
var i__25874__auto___32594 = (0);
while(true){
if((i__25874__auto___32594 < len__25873__auto___32593)){
args32535.push((arguments[i__25874__auto___32594]));

var G__32595 = (i__25874__auto___32594 + (1));
i__25874__auto___32594 = G__32595;
continue;
} else {
}
break;
}

var G__32537 = args32535.length;
switch (G__32537) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32535.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30477__auto___32597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30477__auto___32597,out){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (c__30477__auto___32597,out){
return (function (state_32569){
var state_val_32570 = (state_32569[(1)]);
if((state_val_32570 === (7))){
var inst_32549 = (state_32569[(7)]);
var inst_32548 = (state_32569[(8)]);
var inst_32548__$1 = (state_32569[(2)]);
var inst_32549__$1 = cljs.core.nth.call(null,inst_32548__$1,(0),null);
var inst_32550 = cljs.core.nth.call(null,inst_32548__$1,(1),null);
var inst_32551 = (inst_32549__$1 == null);
var state_32569__$1 = (function (){var statearr_32571 = state_32569;
(statearr_32571[(9)] = inst_32550);

(statearr_32571[(7)] = inst_32549__$1);

(statearr_32571[(8)] = inst_32548__$1);

return statearr_32571;
})();
if(cljs.core.truth_(inst_32551)){
var statearr_32572_32598 = state_32569__$1;
(statearr_32572_32598[(1)] = (8));

} else {
var statearr_32573_32599 = state_32569__$1;
(statearr_32573_32599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (1))){
var inst_32538 = cljs.core.vec.call(null,chs);
var inst_32539 = inst_32538;
var state_32569__$1 = (function (){var statearr_32574 = state_32569;
(statearr_32574[(10)] = inst_32539);

return statearr_32574;
})();
var statearr_32575_32600 = state_32569__$1;
(statearr_32575_32600[(2)] = null);

(statearr_32575_32600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (4))){
var inst_32539 = (state_32569[(10)]);
var state_32569__$1 = state_32569;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32569__$1,(7),inst_32539);
} else {
if((state_val_32570 === (6))){
var inst_32565 = (state_32569[(2)]);
var state_32569__$1 = state_32569;
var statearr_32576_32601 = state_32569__$1;
(statearr_32576_32601[(2)] = inst_32565);

(statearr_32576_32601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (3))){
var inst_32567 = (state_32569[(2)]);
var state_32569__$1 = state_32569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32569__$1,inst_32567);
} else {
if((state_val_32570 === (2))){
var inst_32539 = (state_32569[(10)]);
var inst_32541 = cljs.core.count.call(null,inst_32539);
var inst_32542 = (inst_32541 > (0));
var state_32569__$1 = state_32569;
if(cljs.core.truth_(inst_32542)){
var statearr_32578_32602 = state_32569__$1;
(statearr_32578_32602[(1)] = (4));

} else {
var statearr_32579_32603 = state_32569__$1;
(statearr_32579_32603[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (11))){
var inst_32539 = (state_32569[(10)]);
var inst_32558 = (state_32569[(2)]);
var tmp32577 = inst_32539;
var inst_32539__$1 = tmp32577;
var state_32569__$1 = (function (){var statearr_32580 = state_32569;
(statearr_32580[(10)] = inst_32539__$1);

(statearr_32580[(11)] = inst_32558);

return statearr_32580;
})();
var statearr_32581_32604 = state_32569__$1;
(statearr_32581_32604[(2)] = null);

(statearr_32581_32604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (9))){
var inst_32549 = (state_32569[(7)]);
var state_32569__$1 = state_32569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32569__$1,(11),out,inst_32549);
} else {
if((state_val_32570 === (5))){
var inst_32563 = cljs.core.async.close_BANG_.call(null,out);
var state_32569__$1 = state_32569;
var statearr_32582_32605 = state_32569__$1;
(statearr_32582_32605[(2)] = inst_32563);

(statearr_32582_32605[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (10))){
var inst_32561 = (state_32569[(2)]);
var state_32569__$1 = state_32569;
var statearr_32583_32606 = state_32569__$1;
(statearr_32583_32606[(2)] = inst_32561);

(statearr_32583_32606[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (8))){
var inst_32550 = (state_32569[(9)]);
var inst_32549 = (state_32569[(7)]);
var inst_32539 = (state_32569[(10)]);
var inst_32548 = (state_32569[(8)]);
var inst_32553 = (function (){var cs = inst_32539;
var vec__32544 = inst_32548;
var v = inst_32549;
var c = inst_32550;
return ((function (cs,vec__32544,v,c,inst_32550,inst_32549,inst_32539,inst_32548,state_val_32570,c__30477__auto___32597,out){
return (function (p1__32534_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32534_SHARP_);
});
;})(cs,vec__32544,v,c,inst_32550,inst_32549,inst_32539,inst_32548,state_val_32570,c__30477__auto___32597,out))
})();
var inst_32554 = cljs.core.filterv.call(null,inst_32553,inst_32539);
var inst_32539__$1 = inst_32554;
var state_32569__$1 = (function (){var statearr_32584 = state_32569;
(statearr_32584[(10)] = inst_32539__$1);

return statearr_32584;
})();
var statearr_32585_32607 = state_32569__$1;
(statearr_32585_32607[(2)] = null);

(statearr_32585_32607[(1)] = (2));


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
});})(c__30477__auto___32597,out))
;
return ((function (switch__30365__auto__,c__30477__auto___32597,out){
return (function() {
var cljs$core$async$state_machine__30366__auto__ = null;
var cljs$core$async$state_machine__30366__auto____0 = (function (){
var statearr_32589 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32589[(0)] = cljs$core$async$state_machine__30366__auto__);

(statearr_32589[(1)] = (1));

return statearr_32589;
});
var cljs$core$async$state_machine__30366__auto____1 = (function (state_32569){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_32569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e32590){if((e32590 instanceof Object)){
var ex__30369__auto__ = e32590;
var statearr_32591_32608 = state_32569;
(statearr_32591_32608[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32609 = state_32569;
state_32569 = G__32609;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$state_machine__30366__auto__ = function(state_32569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30366__auto____1.call(this,state_32569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30366__auto____0;
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30366__auto____1;
return cljs$core$async$state_machine__30366__auto__;
})()
;})(switch__30365__auto__,c__30477__auto___32597,out))
})();
var state__30479__auto__ = (function (){var statearr_32592 = f__30478__auto__.call(null);
(statearr_32592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto___32597);

return statearr_32592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(c__30477__auto___32597,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args32610 = [];
var len__25873__auto___32659 = arguments.length;
var i__25874__auto___32660 = (0);
while(true){
if((i__25874__auto___32660 < len__25873__auto___32659)){
args32610.push((arguments[i__25874__auto___32660]));

var G__32661 = (i__25874__auto___32660 + (1));
i__25874__auto___32660 = G__32661;
continue;
} else {
}
break;
}

var G__32612 = args32610.length;
switch (G__32612) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32610.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30477__auto___32663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30477__auto___32663,out){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (c__30477__auto___32663,out){
return (function (state_32636){
var state_val_32637 = (state_32636[(1)]);
if((state_val_32637 === (7))){
var inst_32618 = (state_32636[(7)]);
var inst_32618__$1 = (state_32636[(2)]);
var inst_32619 = (inst_32618__$1 == null);
var inst_32620 = cljs.core.not.call(null,inst_32619);
var state_32636__$1 = (function (){var statearr_32638 = state_32636;
(statearr_32638[(7)] = inst_32618__$1);

return statearr_32638;
})();
if(inst_32620){
var statearr_32639_32664 = state_32636__$1;
(statearr_32639_32664[(1)] = (8));

} else {
var statearr_32640_32665 = state_32636__$1;
(statearr_32640_32665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (1))){
var inst_32613 = (0);
var state_32636__$1 = (function (){var statearr_32641 = state_32636;
(statearr_32641[(8)] = inst_32613);

return statearr_32641;
})();
var statearr_32642_32666 = state_32636__$1;
(statearr_32642_32666[(2)] = null);

(statearr_32642_32666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (4))){
var state_32636__$1 = state_32636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32636__$1,(7),ch);
} else {
if((state_val_32637 === (6))){
var inst_32631 = (state_32636[(2)]);
var state_32636__$1 = state_32636;
var statearr_32643_32667 = state_32636__$1;
(statearr_32643_32667[(2)] = inst_32631);

(statearr_32643_32667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (3))){
var inst_32633 = (state_32636[(2)]);
var inst_32634 = cljs.core.async.close_BANG_.call(null,out);
var state_32636__$1 = (function (){var statearr_32644 = state_32636;
(statearr_32644[(9)] = inst_32633);

return statearr_32644;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32636__$1,inst_32634);
} else {
if((state_val_32637 === (2))){
var inst_32613 = (state_32636[(8)]);
var inst_32615 = (inst_32613 < n);
var state_32636__$1 = state_32636;
if(cljs.core.truth_(inst_32615)){
var statearr_32645_32668 = state_32636__$1;
(statearr_32645_32668[(1)] = (4));

} else {
var statearr_32646_32669 = state_32636__$1;
(statearr_32646_32669[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (11))){
var inst_32613 = (state_32636[(8)]);
var inst_32623 = (state_32636[(2)]);
var inst_32624 = (inst_32613 + (1));
var inst_32613__$1 = inst_32624;
var state_32636__$1 = (function (){var statearr_32647 = state_32636;
(statearr_32647[(8)] = inst_32613__$1);

(statearr_32647[(10)] = inst_32623);

return statearr_32647;
})();
var statearr_32648_32670 = state_32636__$1;
(statearr_32648_32670[(2)] = null);

(statearr_32648_32670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (9))){
var state_32636__$1 = state_32636;
var statearr_32649_32671 = state_32636__$1;
(statearr_32649_32671[(2)] = null);

(statearr_32649_32671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (5))){
var state_32636__$1 = state_32636;
var statearr_32650_32672 = state_32636__$1;
(statearr_32650_32672[(2)] = null);

(statearr_32650_32672[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (10))){
var inst_32628 = (state_32636[(2)]);
var state_32636__$1 = state_32636;
var statearr_32651_32673 = state_32636__$1;
(statearr_32651_32673[(2)] = inst_32628);

(statearr_32651_32673[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (8))){
var inst_32618 = (state_32636[(7)]);
var state_32636__$1 = state_32636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32636__$1,(11),out,inst_32618);
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
});})(c__30477__auto___32663,out))
;
return ((function (switch__30365__auto__,c__30477__auto___32663,out){
return (function() {
var cljs$core$async$state_machine__30366__auto__ = null;
var cljs$core$async$state_machine__30366__auto____0 = (function (){
var statearr_32655 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32655[(0)] = cljs$core$async$state_machine__30366__auto__);

(statearr_32655[(1)] = (1));

return statearr_32655;
});
var cljs$core$async$state_machine__30366__auto____1 = (function (state_32636){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_32636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e32656){if((e32656 instanceof Object)){
var ex__30369__auto__ = e32656;
var statearr_32657_32674 = state_32636;
(statearr_32657_32674[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32675 = state_32636;
state_32636 = G__32675;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$state_machine__30366__auto__ = function(state_32636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30366__auto____1.call(this,state_32636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30366__auto____0;
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30366__auto____1;
return cljs$core$async$state_machine__30366__auto__;
})()
;})(switch__30365__auto__,c__30477__auto___32663,out))
})();
var state__30479__auto__ = (function (){var statearr_32658 = f__30478__auto__.call(null);
(statearr_32658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto___32663);

return statearr_32658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(c__30477__auto___32663,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32683 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32683 = (function (map_LT_,f,ch,meta32684){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32684 = meta32684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32685,meta32684__$1){
var self__ = this;
var _32685__$1 = this;
return (new cljs.core.async.t_cljs$core$async32683(self__.map_LT_,self__.f,self__.ch,meta32684__$1));
});

cljs.core.async.t_cljs$core$async32683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32685){
var self__ = this;
var _32685__$1 = this;
return self__.meta32684;
});

cljs.core.async.t_cljs$core$async32683.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32683.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32683.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32683.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32683.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32686 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32686 = (function (map_LT_,f,ch,meta32684,_,fn1,meta32687){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32684 = meta32684;
this._ = _;
this.fn1 = fn1;
this.meta32687 = meta32687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32688,meta32687__$1){
var self__ = this;
var _32688__$1 = this;
return (new cljs.core.async.t_cljs$core$async32686(self__.map_LT_,self__.f,self__.ch,self__.meta32684,self__._,self__.fn1,meta32687__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32686.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32688){
var self__ = this;
var _32688__$1 = this;
return self__.meta32687;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32686.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32686.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32686.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32686.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32676_SHARP_){
return f1.call(null,(((p1__32676_SHARP_ == null))?null:self__.f.call(null,p1__32676_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32686.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32684","meta32684",1439924725,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32683","cljs.core.async/t_cljs$core$async32683",-647452244,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32687","meta32687",924513330,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32686.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32686.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32686";

cljs.core.async.t_cljs$core$async32686.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async32686");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32686 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32686(map_LT___$1,f__$1,ch__$1,meta32684__$1,___$2,fn1__$1,meta32687){
return (new cljs.core.async.t_cljs$core$async32686(map_LT___$1,f__$1,ch__$1,meta32684__$1,___$2,fn1__$1,meta32687));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32686(self__.map_LT_,self__.f,self__.ch,self__.meta32684,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24786__auto__ = ret;
if(cljs.core.truth_(and__24786__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24786__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32683.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32683.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32683.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32684","meta32684",1439924725,null)], null);
});

cljs.core.async.t_cljs$core$async32683.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32683.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32683";

cljs.core.async.t_cljs$core$async32683.cljs$lang$ctorPrWriter = (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async32683");
});

cljs.core.async.__GT_t_cljs$core$async32683 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32683(map_LT___$1,f__$1,ch__$1,meta32684){
return (new cljs.core.async.t_cljs$core$async32683(map_LT___$1,f__$1,ch__$1,meta32684));
});

}

return (new cljs.core.async.t_cljs$core$async32683(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32692 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32692 = (function (map_GT_,f,ch,meta32693){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32693 = meta32693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32694,meta32693__$1){
var self__ = this;
var _32694__$1 = this;
return (new cljs.core.async.t_cljs$core$async32692(self__.map_GT_,self__.f,self__.ch,meta32693__$1));
});

cljs.core.async.t_cljs$core$async32692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32694){
var self__ = this;
var _32694__$1 = this;
return self__.meta32693;
});

cljs.core.async.t_cljs$core$async32692.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32692.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32692.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32692.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32692.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32692.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32693","meta32693",174096489,null)], null);
});

cljs.core.async.t_cljs$core$async32692.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32692";

cljs.core.async.t_cljs$core$async32692.cljs$lang$ctorPrWriter = (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async32692");
});

cljs.core.async.__GT_t_cljs$core$async32692 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32692(map_GT___$1,f__$1,ch__$1,meta32693){
return (new cljs.core.async.t_cljs$core$async32692(map_GT___$1,f__$1,ch__$1,meta32693));
});

}

return (new cljs.core.async.t_cljs$core$async32692(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32698 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32698 = (function (filter_GT_,p,ch,meta32699){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32699 = meta32699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32700,meta32699__$1){
var self__ = this;
var _32700__$1 = this;
return (new cljs.core.async.t_cljs$core$async32698(self__.filter_GT_,self__.p,self__.ch,meta32699__$1));
});

cljs.core.async.t_cljs$core$async32698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32700){
var self__ = this;
var _32700__$1 = this;
return self__.meta32699;
});

cljs.core.async.t_cljs$core$async32698.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32698.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32698.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32698.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32698.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32698.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32698.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32698.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32699","meta32699",537200921,null)], null);
});

cljs.core.async.t_cljs$core$async32698.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32698.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32698";

cljs.core.async.t_cljs$core$async32698.cljs$lang$ctorPrWriter = (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async32698");
});

cljs.core.async.__GT_t_cljs$core$async32698 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32698(filter_GT___$1,p__$1,ch__$1,meta32699){
return (new cljs.core.async.t_cljs$core$async32698(filter_GT___$1,p__$1,ch__$1,meta32699));
});

}

return (new cljs.core.async.t_cljs$core$async32698(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args32701 = [];
var len__25873__auto___32745 = arguments.length;
var i__25874__auto___32746 = (0);
while(true){
if((i__25874__auto___32746 < len__25873__auto___32745)){
args32701.push((arguments[i__25874__auto___32746]));

var G__32747 = (i__25874__auto___32746 + (1));
i__25874__auto___32746 = G__32747;
continue;
} else {
}
break;
}

var G__32703 = args32701.length;
switch (G__32703) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32701.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30477__auto___32749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30477__auto___32749,out){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (c__30477__auto___32749,out){
return (function (state_32724){
var state_val_32725 = (state_32724[(1)]);
if((state_val_32725 === (7))){
var inst_32720 = (state_32724[(2)]);
var state_32724__$1 = state_32724;
var statearr_32726_32750 = state_32724__$1;
(statearr_32726_32750[(2)] = inst_32720);

(statearr_32726_32750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (1))){
var state_32724__$1 = state_32724;
var statearr_32727_32751 = state_32724__$1;
(statearr_32727_32751[(2)] = null);

(statearr_32727_32751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (4))){
var inst_32706 = (state_32724[(7)]);
var inst_32706__$1 = (state_32724[(2)]);
var inst_32707 = (inst_32706__$1 == null);
var state_32724__$1 = (function (){var statearr_32728 = state_32724;
(statearr_32728[(7)] = inst_32706__$1);

return statearr_32728;
})();
if(cljs.core.truth_(inst_32707)){
var statearr_32729_32752 = state_32724__$1;
(statearr_32729_32752[(1)] = (5));

} else {
var statearr_32730_32753 = state_32724__$1;
(statearr_32730_32753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (6))){
var inst_32706 = (state_32724[(7)]);
var inst_32711 = p.call(null,inst_32706);
var state_32724__$1 = state_32724;
if(cljs.core.truth_(inst_32711)){
var statearr_32731_32754 = state_32724__$1;
(statearr_32731_32754[(1)] = (8));

} else {
var statearr_32732_32755 = state_32724__$1;
(statearr_32732_32755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (3))){
var inst_32722 = (state_32724[(2)]);
var state_32724__$1 = state_32724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32724__$1,inst_32722);
} else {
if((state_val_32725 === (2))){
var state_32724__$1 = state_32724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32724__$1,(4),ch);
} else {
if((state_val_32725 === (11))){
var inst_32714 = (state_32724[(2)]);
var state_32724__$1 = state_32724;
var statearr_32733_32756 = state_32724__$1;
(statearr_32733_32756[(2)] = inst_32714);

(statearr_32733_32756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (9))){
var state_32724__$1 = state_32724;
var statearr_32734_32757 = state_32724__$1;
(statearr_32734_32757[(2)] = null);

(statearr_32734_32757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (5))){
var inst_32709 = cljs.core.async.close_BANG_.call(null,out);
var state_32724__$1 = state_32724;
var statearr_32735_32758 = state_32724__$1;
(statearr_32735_32758[(2)] = inst_32709);

(statearr_32735_32758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (10))){
var inst_32717 = (state_32724[(2)]);
var state_32724__$1 = (function (){var statearr_32736 = state_32724;
(statearr_32736[(8)] = inst_32717);

return statearr_32736;
})();
var statearr_32737_32759 = state_32724__$1;
(statearr_32737_32759[(2)] = null);

(statearr_32737_32759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (8))){
var inst_32706 = (state_32724[(7)]);
var state_32724__$1 = state_32724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32724__$1,(11),out,inst_32706);
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
});})(c__30477__auto___32749,out))
;
return ((function (switch__30365__auto__,c__30477__auto___32749,out){
return (function() {
var cljs$core$async$state_machine__30366__auto__ = null;
var cljs$core$async$state_machine__30366__auto____0 = (function (){
var statearr_32741 = [null,null,null,null,null,null,null,null,null];
(statearr_32741[(0)] = cljs$core$async$state_machine__30366__auto__);

(statearr_32741[(1)] = (1));

return statearr_32741;
});
var cljs$core$async$state_machine__30366__auto____1 = (function (state_32724){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_32724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e32742){if((e32742 instanceof Object)){
var ex__30369__auto__ = e32742;
var statearr_32743_32760 = state_32724;
(statearr_32743_32760[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32761 = state_32724;
state_32724 = G__32761;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$state_machine__30366__auto__ = function(state_32724){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30366__auto____1.call(this,state_32724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30366__auto____0;
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30366__auto____1;
return cljs$core$async$state_machine__30366__auto__;
})()
;})(switch__30365__auto__,c__30477__auto___32749,out))
})();
var state__30479__auto__ = (function (){var statearr_32744 = f__30478__auto__.call(null);
(statearr_32744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto___32749);

return statearr_32744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(c__30477__auto___32749,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32762 = [];
var len__25873__auto___32765 = arguments.length;
var i__25874__auto___32766 = (0);
while(true){
if((i__25874__auto___32766 < len__25873__auto___32765)){
args32762.push((arguments[i__25874__auto___32766]));

var G__32767 = (i__25874__auto___32766 + (1));
i__25874__auto___32766 = G__32767;
continue;
} else {
}
break;
}

var G__32764 = args32762.length;
switch (G__32764) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32762.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30477__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30477__auto__){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (c__30477__auto__){
return (function (state_32934){
var state_val_32935 = (state_32934[(1)]);
if((state_val_32935 === (7))){
var inst_32930 = (state_32934[(2)]);
var state_32934__$1 = state_32934;
var statearr_32936_32977 = state_32934__$1;
(statearr_32936_32977[(2)] = inst_32930);

(statearr_32936_32977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32935 === (20))){
var inst_32900 = (state_32934[(7)]);
var inst_32911 = (state_32934[(2)]);
var inst_32912 = cljs.core.next.call(null,inst_32900);
var inst_32886 = inst_32912;
var inst_32887 = null;
var inst_32888 = (0);
var inst_32889 = (0);
var state_32934__$1 = (function (){var statearr_32937 = state_32934;
(statearr_32937[(8)] = inst_32911);

(statearr_32937[(9)] = inst_32888);

(statearr_32937[(10)] = inst_32889);

(statearr_32937[(11)] = inst_32887);

(statearr_32937[(12)] = inst_32886);

return statearr_32937;
})();
var statearr_32938_32978 = state_32934__$1;
(statearr_32938_32978[(2)] = null);

(statearr_32938_32978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32935 === (1))){
var state_32934__$1 = state_32934;
var statearr_32939_32979 = state_32934__$1;
(statearr_32939_32979[(2)] = null);

(statearr_32939_32979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32935 === (4))){
var inst_32875 = (state_32934[(13)]);
var inst_32875__$1 = (state_32934[(2)]);
var inst_32876 = (inst_32875__$1 == null);
var state_32934__$1 = (function (){var statearr_32940 = state_32934;
(statearr_32940[(13)] = inst_32875__$1);

return statearr_32940;
})();
if(cljs.core.truth_(inst_32876)){
var statearr_32941_32980 = state_32934__$1;
(statearr_32941_32980[(1)] = (5));

} else {
var statearr_32942_32981 = state_32934__$1;
(statearr_32942_32981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32935 === (15))){
var state_32934__$1 = state_32934;
var statearr_32946_32982 = state_32934__$1;
(statearr_32946_32982[(2)] = null);

(statearr_32946_32982[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32935 === (21))){
var state_32934__$1 = state_32934;
var statearr_32947_32983 = state_32934__$1;
(statearr_32947_32983[(2)] = null);

(statearr_32947_32983[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32935 === (13))){
var inst_32888 = (state_32934[(9)]);
var inst_32889 = (state_32934[(10)]);
var inst_32887 = (state_32934[(11)]);
var inst_32886 = (state_32934[(12)]);
var inst_32896 = (state_32934[(2)]);
var inst_32897 = (inst_32889 + (1));
var tmp32943 = inst_32888;
var tmp32944 = inst_32887;
var tmp32945 = inst_32886;
var inst_32886__$1 = tmp32945;
var inst_32887__$1 = tmp32944;
var inst_32888__$1 = tmp32943;
var inst_32889__$1 = inst_32897;
var state_32934__$1 = (function (){var statearr_32948 = state_32934;
(statearr_32948[(9)] = inst_32888__$1);

(statearr_32948[(10)] = inst_32889__$1);

(statearr_32948[(11)] = inst_32887__$1);

(statearr_32948[(12)] = inst_32886__$1);

(statearr_32948[(14)] = inst_32896);

return statearr_32948;
})();
var statearr_32949_32984 = state_32934__$1;
(statearr_32949_32984[(2)] = null);

(statearr_32949_32984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32935 === (22))){
var state_32934__$1 = state_32934;
var statearr_32950_32985 = state_32934__$1;
(statearr_32950_32985[(2)] = null);

(statearr_32950_32985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32935 === (6))){
var inst_32875 = (state_32934[(13)]);
var inst_32884 = f.call(null,inst_32875);
var inst_32885 = cljs.core.seq.call(null,inst_32884);
var inst_32886 = inst_32885;
var inst_32887 = null;
var inst_32888 = (0);
var inst_32889 = (0);
var state_32934__$1 = (function (){var statearr_32951 = state_32934;
(statearr_32951[(9)] = inst_32888);

(statearr_32951[(10)] = inst_32889);

(statearr_32951[(11)] = inst_32887);

(statearr_32951[(12)] = inst_32886);

return statearr_32951;
})();
var statearr_32952_32986 = state_32934__$1;
(statearr_32952_32986[(2)] = null);

(statearr_32952_32986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32935 === (17))){
var inst_32900 = (state_32934[(7)]);
var inst_32904 = cljs.core.chunk_first.call(null,inst_32900);
var inst_32905 = cljs.core.chunk_rest.call(null,inst_32900);
var inst_32906 = cljs.core.count.call(null,inst_32904);
var inst_32886 = inst_32905;
var inst_32887 = inst_32904;
var inst_32888 = inst_32906;
var inst_32889 = (0);
var state_32934__$1 = (function (){var statearr_32953 = state_32934;
(statearr_32953[(9)] = inst_32888);

(statearr_32953[(10)] = inst_32889);

(statearr_32953[(11)] = inst_32887);

(statearr_32953[(12)] = inst_32886);

return statearr_32953;
})();
var statearr_32954_32987 = state_32934__$1;
(statearr_32954_32987[(2)] = null);

(statearr_32954_32987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32935 === (3))){
var inst_32932 = (state_32934[(2)]);
var state_32934__$1 = state_32934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32934__$1,inst_32932);
} else {
if((state_val_32935 === (12))){
var inst_32920 = (state_32934[(2)]);
var state_32934__$1 = state_32934;
var statearr_32955_32988 = state_32934__$1;
(statearr_32955_32988[(2)] = inst_32920);

(statearr_32955_32988[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32935 === (2))){
var state_32934__$1 = state_32934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32934__$1,(4),in$);
} else {
if((state_val_32935 === (23))){
var inst_32928 = (state_32934[(2)]);
var state_32934__$1 = state_32934;
var statearr_32956_32989 = state_32934__$1;
(statearr_32956_32989[(2)] = inst_32928);

(statearr_32956_32989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32935 === (19))){
var inst_32915 = (state_32934[(2)]);
var state_32934__$1 = state_32934;
var statearr_32957_32990 = state_32934__$1;
(statearr_32957_32990[(2)] = inst_32915);

(statearr_32957_32990[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32935 === (11))){
var inst_32886 = (state_32934[(12)]);
var inst_32900 = (state_32934[(7)]);
var inst_32900__$1 = cljs.core.seq.call(null,inst_32886);
var state_32934__$1 = (function (){var statearr_32958 = state_32934;
(statearr_32958[(7)] = inst_32900__$1);

return statearr_32958;
})();
if(inst_32900__$1){
var statearr_32959_32991 = state_32934__$1;
(statearr_32959_32991[(1)] = (14));

} else {
var statearr_32960_32992 = state_32934__$1;
(statearr_32960_32992[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32935 === (9))){
var inst_32922 = (state_32934[(2)]);
var inst_32923 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32934__$1 = (function (){var statearr_32961 = state_32934;
(statearr_32961[(15)] = inst_32922);

return statearr_32961;
})();
if(cljs.core.truth_(inst_32923)){
var statearr_32962_32993 = state_32934__$1;
(statearr_32962_32993[(1)] = (21));

} else {
var statearr_32963_32994 = state_32934__$1;
(statearr_32963_32994[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32935 === (5))){
var inst_32878 = cljs.core.async.close_BANG_.call(null,out);
var state_32934__$1 = state_32934;
var statearr_32964_32995 = state_32934__$1;
(statearr_32964_32995[(2)] = inst_32878);

(statearr_32964_32995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32935 === (14))){
var inst_32900 = (state_32934[(7)]);
var inst_32902 = cljs.core.chunked_seq_QMARK_.call(null,inst_32900);
var state_32934__$1 = state_32934;
if(inst_32902){
var statearr_32965_32996 = state_32934__$1;
(statearr_32965_32996[(1)] = (17));

} else {
var statearr_32966_32997 = state_32934__$1;
(statearr_32966_32997[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32935 === (16))){
var inst_32918 = (state_32934[(2)]);
var state_32934__$1 = state_32934;
var statearr_32967_32998 = state_32934__$1;
(statearr_32967_32998[(2)] = inst_32918);

(statearr_32967_32998[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32935 === (10))){
var inst_32889 = (state_32934[(10)]);
var inst_32887 = (state_32934[(11)]);
var inst_32894 = cljs.core._nth.call(null,inst_32887,inst_32889);
var state_32934__$1 = state_32934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32934__$1,(13),out,inst_32894);
} else {
if((state_val_32935 === (18))){
var inst_32900 = (state_32934[(7)]);
var inst_32909 = cljs.core.first.call(null,inst_32900);
var state_32934__$1 = state_32934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32934__$1,(20),out,inst_32909);
} else {
if((state_val_32935 === (8))){
var inst_32888 = (state_32934[(9)]);
var inst_32889 = (state_32934[(10)]);
var inst_32891 = (inst_32889 < inst_32888);
var inst_32892 = inst_32891;
var state_32934__$1 = state_32934;
if(cljs.core.truth_(inst_32892)){
var statearr_32968_32999 = state_32934__$1;
(statearr_32968_32999[(1)] = (10));

} else {
var statearr_32969_33000 = state_32934__$1;
(statearr_32969_33000[(1)] = (11));

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
});})(c__30477__auto__))
;
return ((function (switch__30365__auto__,c__30477__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30366__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30366__auto____0 = (function (){
var statearr_32973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32973[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30366__auto__);

(statearr_32973[(1)] = (1));

return statearr_32973;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30366__auto____1 = (function (state_32934){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_32934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e32974){if((e32974 instanceof Object)){
var ex__30369__auto__ = e32974;
var statearr_32975_33001 = state_32934;
(statearr_32975_33001[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33002 = state_32934;
state_32934 = G__33002;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30366__auto__ = function(state_32934){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30366__auto____1.call(this,state_32934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30366__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30366__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30366__auto__;
})()
;})(switch__30365__auto__,c__30477__auto__))
})();
var state__30479__auto__ = (function (){var statearr_32976 = f__30478__auto__.call(null);
(statearr_32976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto__);

return statearr_32976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(c__30477__auto__))
);

return c__30477__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args33003 = [];
var len__25873__auto___33006 = arguments.length;
var i__25874__auto___33007 = (0);
while(true){
if((i__25874__auto___33007 < len__25873__auto___33006)){
args33003.push((arguments[i__25874__auto___33007]));

var G__33008 = (i__25874__auto___33007 + (1));
i__25874__auto___33007 = G__33008;
continue;
} else {
}
break;
}

var G__33005 = args33003.length;
switch (G__33005) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33003.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args33010 = [];
var len__25873__auto___33013 = arguments.length;
var i__25874__auto___33014 = (0);
while(true){
if((i__25874__auto___33014 < len__25873__auto___33013)){
args33010.push((arguments[i__25874__auto___33014]));

var G__33015 = (i__25874__auto___33014 + (1));
i__25874__auto___33014 = G__33015;
continue;
} else {
}
break;
}

var G__33012 = args33010.length;
switch (G__33012) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33010.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args33017 = [];
var len__25873__auto___33068 = arguments.length;
var i__25874__auto___33069 = (0);
while(true){
if((i__25874__auto___33069 < len__25873__auto___33068)){
args33017.push((arguments[i__25874__auto___33069]));

var G__33070 = (i__25874__auto___33069 + (1));
i__25874__auto___33069 = G__33070;
continue;
} else {
}
break;
}

var G__33019 = args33017.length;
switch (G__33019) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33017.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30477__auto___33072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30477__auto___33072,out){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (c__30477__auto___33072,out){
return (function (state_33043){
var state_val_33044 = (state_33043[(1)]);
if((state_val_33044 === (7))){
var inst_33038 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
var statearr_33045_33073 = state_33043__$1;
(statearr_33045_33073[(2)] = inst_33038);

(statearr_33045_33073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (1))){
var inst_33020 = null;
var state_33043__$1 = (function (){var statearr_33046 = state_33043;
(statearr_33046[(7)] = inst_33020);

return statearr_33046;
})();
var statearr_33047_33074 = state_33043__$1;
(statearr_33047_33074[(2)] = null);

(statearr_33047_33074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (4))){
var inst_33023 = (state_33043[(8)]);
var inst_33023__$1 = (state_33043[(2)]);
var inst_33024 = (inst_33023__$1 == null);
var inst_33025 = cljs.core.not.call(null,inst_33024);
var state_33043__$1 = (function (){var statearr_33048 = state_33043;
(statearr_33048[(8)] = inst_33023__$1);

return statearr_33048;
})();
if(inst_33025){
var statearr_33049_33075 = state_33043__$1;
(statearr_33049_33075[(1)] = (5));

} else {
var statearr_33050_33076 = state_33043__$1;
(statearr_33050_33076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (6))){
var state_33043__$1 = state_33043;
var statearr_33051_33077 = state_33043__$1;
(statearr_33051_33077[(2)] = null);

(statearr_33051_33077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (3))){
var inst_33040 = (state_33043[(2)]);
var inst_33041 = cljs.core.async.close_BANG_.call(null,out);
var state_33043__$1 = (function (){var statearr_33052 = state_33043;
(statearr_33052[(9)] = inst_33040);

return statearr_33052;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33043__$1,inst_33041);
} else {
if((state_val_33044 === (2))){
var state_33043__$1 = state_33043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33043__$1,(4),ch);
} else {
if((state_val_33044 === (11))){
var inst_33023 = (state_33043[(8)]);
var inst_33032 = (state_33043[(2)]);
var inst_33020 = inst_33023;
var state_33043__$1 = (function (){var statearr_33053 = state_33043;
(statearr_33053[(10)] = inst_33032);

(statearr_33053[(7)] = inst_33020);

return statearr_33053;
})();
var statearr_33054_33078 = state_33043__$1;
(statearr_33054_33078[(2)] = null);

(statearr_33054_33078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (9))){
var inst_33023 = (state_33043[(8)]);
var state_33043__$1 = state_33043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33043__$1,(11),out,inst_33023);
} else {
if((state_val_33044 === (5))){
var inst_33020 = (state_33043[(7)]);
var inst_33023 = (state_33043[(8)]);
var inst_33027 = cljs.core._EQ_.call(null,inst_33023,inst_33020);
var state_33043__$1 = state_33043;
if(inst_33027){
var statearr_33056_33079 = state_33043__$1;
(statearr_33056_33079[(1)] = (8));

} else {
var statearr_33057_33080 = state_33043__$1;
(statearr_33057_33080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (10))){
var inst_33035 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
var statearr_33058_33081 = state_33043__$1;
(statearr_33058_33081[(2)] = inst_33035);

(statearr_33058_33081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (8))){
var inst_33020 = (state_33043[(7)]);
var tmp33055 = inst_33020;
var inst_33020__$1 = tmp33055;
var state_33043__$1 = (function (){var statearr_33059 = state_33043;
(statearr_33059[(7)] = inst_33020__$1);

return statearr_33059;
})();
var statearr_33060_33082 = state_33043__$1;
(statearr_33060_33082[(2)] = null);

(statearr_33060_33082[(1)] = (2));


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
});})(c__30477__auto___33072,out))
;
return ((function (switch__30365__auto__,c__30477__auto___33072,out){
return (function() {
var cljs$core$async$state_machine__30366__auto__ = null;
var cljs$core$async$state_machine__30366__auto____0 = (function (){
var statearr_33064 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33064[(0)] = cljs$core$async$state_machine__30366__auto__);

(statearr_33064[(1)] = (1));

return statearr_33064;
});
var cljs$core$async$state_machine__30366__auto____1 = (function (state_33043){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_33043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e33065){if((e33065 instanceof Object)){
var ex__30369__auto__ = e33065;
var statearr_33066_33083 = state_33043;
(statearr_33066_33083[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33084 = state_33043;
state_33043 = G__33084;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$state_machine__30366__auto__ = function(state_33043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30366__auto____1.call(this,state_33043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30366__auto____0;
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30366__auto____1;
return cljs$core$async$state_machine__30366__auto__;
})()
;})(switch__30365__auto__,c__30477__auto___33072,out))
})();
var state__30479__auto__ = (function (){var statearr_33067 = f__30478__auto__.call(null);
(statearr_33067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto___33072);

return statearr_33067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(c__30477__auto___33072,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args33085 = [];
var len__25873__auto___33155 = arguments.length;
var i__25874__auto___33156 = (0);
while(true){
if((i__25874__auto___33156 < len__25873__auto___33155)){
args33085.push((arguments[i__25874__auto___33156]));

var G__33157 = (i__25874__auto___33156 + (1));
i__25874__auto___33156 = G__33157;
continue;
} else {
}
break;
}

var G__33087 = args33085.length;
switch (G__33087) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33085.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30477__auto___33159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30477__auto___33159,out){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (c__30477__auto___33159,out){
return (function (state_33125){
var state_val_33126 = (state_33125[(1)]);
if((state_val_33126 === (7))){
var inst_33121 = (state_33125[(2)]);
var state_33125__$1 = state_33125;
var statearr_33127_33160 = state_33125__$1;
(statearr_33127_33160[(2)] = inst_33121);

(statearr_33127_33160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33126 === (1))){
var inst_33088 = (new Array(n));
var inst_33089 = inst_33088;
var inst_33090 = (0);
var state_33125__$1 = (function (){var statearr_33128 = state_33125;
(statearr_33128[(7)] = inst_33089);

(statearr_33128[(8)] = inst_33090);

return statearr_33128;
})();
var statearr_33129_33161 = state_33125__$1;
(statearr_33129_33161[(2)] = null);

(statearr_33129_33161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33126 === (4))){
var inst_33093 = (state_33125[(9)]);
var inst_33093__$1 = (state_33125[(2)]);
var inst_33094 = (inst_33093__$1 == null);
var inst_33095 = cljs.core.not.call(null,inst_33094);
var state_33125__$1 = (function (){var statearr_33130 = state_33125;
(statearr_33130[(9)] = inst_33093__$1);

return statearr_33130;
})();
if(inst_33095){
var statearr_33131_33162 = state_33125__$1;
(statearr_33131_33162[(1)] = (5));

} else {
var statearr_33132_33163 = state_33125__$1;
(statearr_33132_33163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33126 === (15))){
var inst_33115 = (state_33125[(2)]);
var state_33125__$1 = state_33125;
var statearr_33133_33164 = state_33125__$1;
(statearr_33133_33164[(2)] = inst_33115);

(statearr_33133_33164[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33126 === (13))){
var state_33125__$1 = state_33125;
var statearr_33134_33165 = state_33125__$1;
(statearr_33134_33165[(2)] = null);

(statearr_33134_33165[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33126 === (6))){
var inst_33090 = (state_33125[(8)]);
var inst_33111 = (inst_33090 > (0));
var state_33125__$1 = state_33125;
if(cljs.core.truth_(inst_33111)){
var statearr_33135_33166 = state_33125__$1;
(statearr_33135_33166[(1)] = (12));

} else {
var statearr_33136_33167 = state_33125__$1;
(statearr_33136_33167[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33126 === (3))){
var inst_33123 = (state_33125[(2)]);
var state_33125__$1 = state_33125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33125__$1,inst_33123);
} else {
if((state_val_33126 === (12))){
var inst_33089 = (state_33125[(7)]);
var inst_33113 = cljs.core.vec.call(null,inst_33089);
var state_33125__$1 = state_33125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33125__$1,(15),out,inst_33113);
} else {
if((state_val_33126 === (2))){
var state_33125__$1 = state_33125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33125__$1,(4),ch);
} else {
if((state_val_33126 === (11))){
var inst_33105 = (state_33125[(2)]);
var inst_33106 = (new Array(n));
var inst_33089 = inst_33106;
var inst_33090 = (0);
var state_33125__$1 = (function (){var statearr_33137 = state_33125;
(statearr_33137[(7)] = inst_33089);

(statearr_33137[(8)] = inst_33090);

(statearr_33137[(10)] = inst_33105);

return statearr_33137;
})();
var statearr_33138_33168 = state_33125__$1;
(statearr_33138_33168[(2)] = null);

(statearr_33138_33168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33126 === (9))){
var inst_33089 = (state_33125[(7)]);
var inst_33103 = cljs.core.vec.call(null,inst_33089);
var state_33125__$1 = state_33125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33125__$1,(11),out,inst_33103);
} else {
if((state_val_33126 === (5))){
var inst_33089 = (state_33125[(7)]);
var inst_33090 = (state_33125[(8)]);
var inst_33093 = (state_33125[(9)]);
var inst_33098 = (state_33125[(11)]);
var inst_33097 = (inst_33089[inst_33090] = inst_33093);
var inst_33098__$1 = (inst_33090 + (1));
var inst_33099 = (inst_33098__$1 < n);
var state_33125__$1 = (function (){var statearr_33139 = state_33125;
(statearr_33139[(11)] = inst_33098__$1);

(statearr_33139[(12)] = inst_33097);

return statearr_33139;
})();
if(cljs.core.truth_(inst_33099)){
var statearr_33140_33169 = state_33125__$1;
(statearr_33140_33169[(1)] = (8));

} else {
var statearr_33141_33170 = state_33125__$1;
(statearr_33141_33170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33126 === (14))){
var inst_33118 = (state_33125[(2)]);
var inst_33119 = cljs.core.async.close_BANG_.call(null,out);
var state_33125__$1 = (function (){var statearr_33143 = state_33125;
(statearr_33143[(13)] = inst_33118);

return statearr_33143;
})();
var statearr_33144_33171 = state_33125__$1;
(statearr_33144_33171[(2)] = inst_33119);

(statearr_33144_33171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33126 === (10))){
var inst_33109 = (state_33125[(2)]);
var state_33125__$1 = state_33125;
var statearr_33145_33172 = state_33125__$1;
(statearr_33145_33172[(2)] = inst_33109);

(statearr_33145_33172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33126 === (8))){
var inst_33089 = (state_33125[(7)]);
var inst_33098 = (state_33125[(11)]);
var tmp33142 = inst_33089;
var inst_33089__$1 = tmp33142;
var inst_33090 = inst_33098;
var state_33125__$1 = (function (){var statearr_33146 = state_33125;
(statearr_33146[(7)] = inst_33089__$1);

(statearr_33146[(8)] = inst_33090);

return statearr_33146;
})();
var statearr_33147_33173 = state_33125__$1;
(statearr_33147_33173[(2)] = null);

(statearr_33147_33173[(1)] = (2));


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
});})(c__30477__auto___33159,out))
;
return ((function (switch__30365__auto__,c__30477__auto___33159,out){
return (function() {
var cljs$core$async$state_machine__30366__auto__ = null;
var cljs$core$async$state_machine__30366__auto____0 = (function (){
var statearr_33151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33151[(0)] = cljs$core$async$state_machine__30366__auto__);

(statearr_33151[(1)] = (1));

return statearr_33151;
});
var cljs$core$async$state_machine__30366__auto____1 = (function (state_33125){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_33125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e33152){if((e33152 instanceof Object)){
var ex__30369__auto__ = e33152;
var statearr_33153_33174 = state_33125;
(statearr_33153_33174[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33175 = state_33125;
state_33125 = G__33175;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$state_machine__30366__auto__ = function(state_33125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30366__auto____1.call(this,state_33125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30366__auto____0;
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30366__auto____1;
return cljs$core$async$state_machine__30366__auto__;
})()
;})(switch__30365__auto__,c__30477__auto___33159,out))
})();
var state__30479__auto__ = (function (){var statearr_33154 = f__30478__auto__.call(null);
(statearr_33154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto___33159);

return statearr_33154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(c__30477__auto___33159,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args33176 = [];
var len__25873__auto___33250 = arguments.length;
var i__25874__auto___33251 = (0);
while(true){
if((i__25874__auto___33251 < len__25873__auto___33250)){
args33176.push((arguments[i__25874__auto___33251]));

var G__33252 = (i__25874__auto___33251 + (1));
i__25874__auto___33251 = G__33252;
continue;
} else {
}
break;
}

var G__33178 = args33176.length;
switch (G__33178) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33176.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30477__auto___33254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30477__auto___33254,out){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (c__30477__auto___33254,out){
return (function (state_33220){
var state_val_33221 = (state_33220[(1)]);
if((state_val_33221 === (7))){
var inst_33216 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
var statearr_33222_33255 = state_33220__$1;
(statearr_33222_33255[(2)] = inst_33216);

(statearr_33222_33255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (1))){
var inst_33179 = [];
var inst_33180 = inst_33179;
var inst_33181 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33220__$1 = (function (){var statearr_33223 = state_33220;
(statearr_33223[(7)] = inst_33181);

(statearr_33223[(8)] = inst_33180);

return statearr_33223;
})();
var statearr_33224_33256 = state_33220__$1;
(statearr_33224_33256[(2)] = null);

(statearr_33224_33256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (4))){
var inst_33184 = (state_33220[(9)]);
var inst_33184__$1 = (state_33220[(2)]);
var inst_33185 = (inst_33184__$1 == null);
var inst_33186 = cljs.core.not.call(null,inst_33185);
var state_33220__$1 = (function (){var statearr_33225 = state_33220;
(statearr_33225[(9)] = inst_33184__$1);

return statearr_33225;
})();
if(inst_33186){
var statearr_33226_33257 = state_33220__$1;
(statearr_33226_33257[(1)] = (5));

} else {
var statearr_33227_33258 = state_33220__$1;
(statearr_33227_33258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (15))){
var inst_33210 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
var statearr_33228_33259 = state_33220__$1;
(statearr_33228_33259[(2)] = inst_33210);

(statearr_33228_33259[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (13))){
var state_33220__$1 = state_33220;
var statearr_33229_33260 = state_33220__$1;
(statearr_33229_33260[(2)] = null);

(statearr_33229_33260[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (6))){
var inst_33180 = (state_33220[(8)]);
var inst_33205 = inst_33180.length;
var inst_33206 = (inst_33205 > (0));
var state_33220__$1 = state_33220;
if(cljs.core.truth_(inst_33206)){
var statearr_33230_33261 = state_33220__$1;
(statearr_33230_33261[(1)] = (12));

} else {
var statearr_33231_33262 = state_33220__$1;
(statearr_33231_33262[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (3))){
var inst_33218 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33220__$1,inst_33218);
} else {
if((state_val_33221 === (12))){
var inst_33180 = (state_33220[(8)]);
var inst_33208 = cljs.core.vec.call(null,inst_33180);
var state_33220__$1 = state_33220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33220__$1,(15),out,inst_33208);
} else {
if((state_val_33221 === (2))){
var state_33220__$1 = state_33220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33220__$1,(4),ch);
} else {
if((state_val_33221 === (11))){
var inst_33188 = (state_33220[(10)]);
var inst_33184 = (state_33220[(9)]);
var inst_33198 = (state_33220[(2)]);
var inst_33199 = [];
var inst_33200 = inst_33199.push(inst_33184);
var inst_33180 = inst_33199;
var inst_33181 = inst_33188;
var state_33220__$1 = (function (){var statearr_33232 = state_33220;
(statearr_33232[(11)] = inst_33198);

(statearr_33232[(7)] = inst_33181);

(statearr_33232[(8)] = inst_33180);

(statearr_33232[(12)] = inst_33200);

return statearr_33232;
})();
var statearr_33233_33263 = state_33220__$1;
(statearr_33233_33263[(2)] = null);

(statearr_33233_33263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (9))){
var inst_33180 = (state_33220[(8)]);
var inst_33196 = cljs.core.vec.call(null,inst_33180);
var state_33220__$1 = state_33220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33220__$1,(11),out,inst_33196);
} else {
if((state_val_33221 === (5))){
var inst_33181 = (state_33220[(7)]);
var inst_33188 = (state_33220[(10)]);
var inst_33184 = (state_33220[(9)]);
var inst_33188__$1 = f.call(null,inst_33184);
var inst_33189 = cljs.core._EQ_.call(null,inst_33188__$1,inst_33181);
var inst_33190 = cljs.core.keyword_identical_QMARK_.call(null,inst_33181,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33191 = (inst_33189) || (inst_33190);
var state_33220__$1 = (function (){var statearr_33234 = state_33220;
(statearr_33234[(10)] = inst_33188__$1);

return statearr_33234;
})();
if(cljs.core.truth_(inst_33191)){
var statearr_33235_33264 = state_33220__$1;
(statearr_33235_33264[(1)] = (8));

} else {
var statearr_33236_33265 = state_33220__$1;
(statearr_33236_33265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (14))){
var inst_33213 = (state_33220[(2)]);
var inst_33214 = cljs.core.async.close_BANG_.call(null,out);
var state_33220__$1 = (function (){var statearr_33238 = state_33220;
(statearr_33238[(13)] = inst_33213);

return statearr_33238;
})();
var statearr_33239_33266 = state_33220__$1;
(statearr_33239_33266[(2)] = inst_33214);

(statearr_33239_33266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (10))){
var inst_33203 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
var statearr_33240_33267 = state_33220__$1;
(statearr_33240_33267[(2)] = inst_33203);

(statearr_33240_33267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (8))){
var inst_33188 = (state_33220[(10)]);
var inst_33184 = (state_33220[(9)]);
var inst_33180 = (state_33220[(8)]);
var inst_33193 = inst_33180.push(inst_33184);
var tmp33237 = inst_33180;
var inst_33180__$1 = tmp33237;
var inst_33181 = inst_33188;
var state_33220__$1 = (function (){var statearr_33241 = state_33220;
(statearr_33241[(7)] = inst_33181);

(statearr_33241[(14)] = inst_33193);

(statearr_33241[(8)] = inst_33180__$1);

return statearr_33241;
})();
var statearr_33242_33268 = state_33220__$1;
(statearr_33242_33268[(2)] = null);

(statearr_33242_33268[(1)] = (2));


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
});})(c__30477__auto___33254,out))
;
return ((function (switch__30365__auto__,c__30477__auto___33254,out){
return (function() {
var cljs$core$async$state_machine__30366__auto__ = null;
var cljs$core$async$state_machine__30366__auto____0 = (function (){
var statearr_33246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33246[(0)] = cljs$core$async$state_machine__30366__auto__);

(statearr_33246[(1)] = (1));

return statearr_33246;
});
var cljs$core$async$state_machine__30366__auto____1 = (function (state_33220){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_33220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e33247){if((e33247 instanceof Object)){
var ex__30369__auto__ = e33247;
var statearr_33248_33269 = state_33220;
(statearr_33248_33269[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33270 = state_33220;
state_33220 = G__33270;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$state_machine__30366__auto__ = function(state_33220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30366__auto____1.call(this,state_33220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30366__auto____0;
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30366__auto____1;
return cljs$core$async$state_machine__30366__auto__;
})()
;})(switch__30365__auto__,c__30477__auto___33254,out))
})();
var state__30479__auto__ = (function (){var statearr_33249 = f__30478__auto__.call(null);
(statearr_33249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto___33254);

return statearr_33249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(c__30477__auto___33254,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1485228957440