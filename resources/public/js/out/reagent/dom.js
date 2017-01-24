// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_(reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__25059__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__25059__auto__)){
return or__25059__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = (function (){var G__32428 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32428) : cljs.core.atom.call(null,G__32428));
})();
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module()["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_32431 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module()["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR_32431){
return (function (){
var _STAR_always_update_STAR_32432 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_32432;
}});})(_STAR_always_update_STAR_32431))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_32431;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args32433 = [];
var len__26134__auto___32436 = arguments.length;
var i__26135__auto___32437 = (0);
while(true){
if((i__26135__auto___32437 < len__26134__auto___32436)){
args32433.push((arguments[i__26135__auto___32437]));

var G__32438 = (i__26135__auto___32437 + (1));
i__26135__auto___32437 = G__32438;
continue;
} else {
}
break;
}

var G__32435 = args32433.length;
switch (G__32435) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32433.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module()["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__32444_32448 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.dom.roots) : cljs.core.deref.call(null,reagent.dom.roots))));
var chunk__32445_32449 = null;
var count__32446_32450 = (0);
var i__32447_32451 = (0);
while(true){
if((i__32447_32451 < count__32446_32450)){
var v_32452 = chunk__32445_32449.cljs$core$IIndexed$_nth$arity$2(null,i__32447_32451);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_32452);

var G__32453 = seq__32444_32448;
var G__32454 = chunk__32445_32449;
var G__32455 = count__32446_32450;
var G__32456 = (i__32447_32451 + (1));
seq__32444_32448 = G__32453;
chunk__32445_32449 = G__32454;
count__32446_32450 = G__32455;
i__32447_32451 = G__32456;
continue;
} else {
var temp__4657__auto___32457 = cljs.core.seq(seq__32444_32448);
if(temp__4657__auto___32457){
var seq__32444_32458__$1 = temp__4657__auto___32457;
if(cljs.core.chunked_seq_QMARK_(seq__32444_32458__$1)){
var c__25870__auto___32459 = cljs.core.chunk_first(seq__32444_32458__$1);
var G__32460 = cljs.core.chunk_rest(seq__32444_32458__$1);
var G__32461 = c__25870__auto___32459;
var G__32462 = cljs.core.count(c__25870__auto___32459);
var G__32463 = (0);
seq__32444_32448 = G__32460;
chunk__32445_32449 = G__32461;
count__32446_32450 = G__32462;
i__32447_32451 = G__32463;
continue;
} else {
var v_32464 = cljs.core.first(seq__32444_32458__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_32464);

var G__32465 = cljs.core.next(seq__32444_32458__$1);
var G__32466 = null;
var G__32467 = (0);
var G__32468 = (0);
seq__32444_32448 = G__32465;
chunk__32445_32449 = G__32466;
count__32446_32450 = G__32467;
i__32447_32451 = G__32468;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
