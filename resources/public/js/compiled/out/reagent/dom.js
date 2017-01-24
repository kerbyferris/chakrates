// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__24798__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
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
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_29363 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_29363){
return (function (){
var _STAR_always_update_STAR_29364 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_29364;
}});})(_STAR_always_update_STAR_29363))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_29363;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
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
var args29365 = [];
var len__25873__auto___29368 = arguments.length;
var i__25874__auto___29369 = (0);
while(true){
if((i__25874__auto___29369 < len__25873__auto___29368)){
args29365.push((arguments[i__25874__auto___29369]));

var G__29370 = (i__25874__auto___29369 + (1));
i__25874__auto___29369 = G__29370;
continue;
} else {
}
break;
}

var G__29367 = args29365.length;
switch (G__29367) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29365.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
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
reagent.ratom.flush_BANG_.call(null);

var seq__29376_29380 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__29377_29381 = null;
var count__29378_29382 = (0);
var i__29379_29383 = (0);
while(true){
if((i__29379_29383 < count__29378_29382)){
var v_29384 = cljs.core._nth.call(null,chunk__29377_29381,i__29379_29383);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_29384);

var G__29385 = seq__29376_29380;
var G__29386 = chunk__29377_29381;
var G__29387 = count__29378_29382;
var G__29388 = (i__29379_29383 + (1));
seq__29376_29380 = G__29385;
chunk__29377_29381 = G__29386;
count__29378_29382 = G__29387;
i__29379_29383 = G__29388;
continue;
} else {
var temp__4657__auto___29389 = cljs.core.seq.call(null,seq__29376_29380);
if(temp__4657__auto___29389){
var seq__29376_29390__$1 = temp__4657__auto___29389;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29376_29390__$1)){
var c__25609__auto___29391 = cljs.core.chunk_first.call(null,seq__29376_29390__$1);
var G__29392 = cljs.core.chunk_rest.call(null,seq__29376_29390__$1);
var G__29393 = c__25609__auto___29391;
var G__29394 = cljs.core.count.call(null,c__25609__auto___29391);
var G__29395 = (0);
seq__29376_29380 = G__29392;
chunk__29377_29381 = G__29393;
count__29378_29382 = G__29394;
i__29379_29383 = G__29395;
continue;
} else {
var v_29396 = cljs.core.first.call(null,seq__29376_29390__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_29396);

var G__29397 = cljs.core.next.call(null,seq__29376_29390__$1);
var G__29398 = null;
var G__29399 = (0);
var G__29400 = (0);
seq__29376_29380 = G__29397;
chunk__29377_29381 = G__29398;
count__29378_29382 = G__29399;
i__29379_29383 = G__29400;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1485228953494