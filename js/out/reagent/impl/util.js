// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('clojure.string');
if(typeof reagent.impl.util.react !== 'undefined'){
} else {
reagent.impl.util.react = ((typeof React !== 'undefined')?React:((typeof require !== 'undefined')?(function (){var or__25059__auto__ = require("react");
if(cljs.core.truth_(or__25059__auto__)){
return or__25059__auto__;
} else {
throw (new Error("require('react') failed"));
}
})():(function(){throw (new Error("js/React is missing"))})()
));
}
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util._STAR_non_reactive_STAR_ = false;
reagent.impl.util.memoize_1 = (function reagent$impl$util$memoize_1(f){
var mem = (function (){var G__31056 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31056) : cljs.core.atom.call(null,G__31056));
})();
return ((function (mem){
return (function (arg){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mem) : cljs.core.deref.call(null,mem)),arg);
if(!((v == null))){
return v;
} else {
var ret = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg) : f.call(null,arg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function reagent$impl$util$capitalize(s){
if((cljs.core.count(s) < (2))){
return clojure.string.upper_case(s);
} else {
return [cljs.core.str(clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)))),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function reagent$impl$util$dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name(dashed);
var vec__31060 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_str,/-/);
var seq__31061 = cljs.core.seq(vec__31060);
var first__31062 = cljs.core.first(seq__31061);
var seq__31061__$1 = cljs.core.next(seq__31061);
var start = first__31062;
var parts = seq__31061__$1;
if(cljs.core.truth_((reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1(start) : reagent.impl.util.dont_camel_case.call(null,start)))){
return name_str;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,start,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.capitalize,parts));
}
}
});
reagent.impl.util.fun_name = (function reagent$impl$util$fun_name(f){
var n = (function (){var or__25059__auto__ = (function (){var and__25047__auto__ = cljs.core.fn_QMARK_(f);
if(and__25047__auto__){
var or__25059__auto__ = (f["displayName"]);
if(cljs.core.truth_(or__25059__auto__)){
return or__25059__auto__;
} else {
return (f["name"]);
}
} else {
return and__25047__auto__;
}
})();
if(cljs.core.truth_(or__25059__auto__)){
return or__25059__auto__;
} else {
var or__25059__auto____$1 = (function (){var and__25047__auto__ = ((!((f == null)))?((((f.cljs$lang$protocol_mask$partition1$ & (4096))) || (f.cljs$core$INamed$))?true:false):false);
if(and__25047__auto__){
return cljs.core.name(f);
} else {
return and__25047__auto__;
}
})();
if(cljs.core.truth_(or__25059__auto____$1)){
return or__25059__auto____$1;
} else {
var m = cljs.core.meta(f);
if(cljs.core.map_QMARK_(m)){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
})();
return clojure.string.replace([cljs.core.str(n)].join(''),"$",".");
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__31072__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__25059__auto___31073 = self__.p;
if(cljs.core.truth_(or__25059__auto___31073)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__31072 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__31074__i = 0, G__31074__a = new Array(arguments.length -  1);
while (G__31074__i < G__31074__a.length) {G__31074__a[G__31074__i] = arguments[G__31074__i + 1]; ++G__31074__i;}
  a = new cljs.core.IndexedSeq(G__31074__a,0);
} 
return G__31072__delegate.call(this,self__,a);};
G__31072.cljs$lang$maxFixedArity = 1;
G__31072.cljs$lang$applyTo = (function (arglist__31075){
var self__ = cljs.core.first(arglist__31075);
var a = cljs.core.rest(arglist__31075);
return G__31072__delegate(self__,a);
});
G__31072.cljs$core$IFn$_invoke$arity$variadic = G__31072__delegate;
return G__31072;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args31071){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args31071)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__31076__delegate = function (a){
var _ = this;
var or__25059__auto___31077 = self__.p;
if(cljs.core.truth_(or__25059__auto___31077)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__31076 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__31078__i = 0, G__31078__a = new Array(arguments.length -  0);
while (G__31078__i < G__31078__a.length) {G__31078__a[G__31078__i] = arguments[G__31078__i + 0]; ++G__31078__i;}
  a = new cljs.core.IndexedSeq(G__31078__a,0);
} 
return G__31076__delegate.call(this,a);};
G__31076.cljs$lang$maxFixedArity = 0;
G__31076.cljs$lang$applyTo = (function (arglist__31079){
var a = cljs.core.seq(arglist__31079);
return G__31076__delegate(a);
});
G__31076.cljs$core$IFn$_invoke$arity$variadic = G__31076__delegate;
return G__31076;
})()
;

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$args,cljs.core.with_meta(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__25665__auto__,writer__25666__auto__,opt__25667__auto__){
return cljs.core._write(writer__25666__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function reagent$impl$util$__GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function reagent$impl$util$merge_class(p1,p2){
var class$ = (function (){var temp__4657__auto__ = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4657__auto__)){
var c1 = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4657__auto____$1)){
var c2 = temp__4657__auto____$1;
return [cljs.core.str(c1),cljs.core.str(" "),cljs.core.str(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.cst$kw$class,class$);
}
});
reagent.impl.util.merge_style = (function reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__4657__auto__ = cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4657__auto__)){
var s1 = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4657__auto____$1)){
var s2 = temp__4657__auto____$1;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s1,s2], 0));
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.cst$kw$style,style);
}
});
reagent.impl.util.merge_props = (function reagent$impl$util$merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_(p1)){
} else {
throw (new Error("Assert failed: (map? p1)"));
}

return reagent.impl.util.merge_style(p1,reagent.impl.util.merge_class(p1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1,p2], 0))));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
reagent.impl.util.force_update = (function reagent$impl$util$force_update(comp,deep){
if(cljs.core.truth_(deep)){
var _STAR_always_update_STAR_31081 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (comp["forceUpdate"])();
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_31081;
}} else {
return (comp["forceUpdate"])();
}
});
