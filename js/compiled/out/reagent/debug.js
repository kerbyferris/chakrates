// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__28085__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28085 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28086__i = 0, G__28086__a = new Array(arguments.length -  0);
while (G__28086__i < G__28086__a.length) {G__28086__a[G__28086__i] = arguments[G__28086__i + 0]; ++G__28086__i;}
  args = new cljs.core.IndexedSeq(G__28086__a,0);
} 
return G__28085__delegate.call(this,args);};
G__28085.cljs$lang$maxFixedArity = 0;
G__28085.cljs$lang$applyTo = (function (arglist__28087){
var args = cljs.core.seq(arglist__28087);
return G__28085__delegate(args);
});
G__28085.cljs$core$IFn$_invoke$arity$variadic = G__28085__delegate;
return G__28085;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__28088__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28088 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28089__i = 0, G__28089__a = new Array(arguments.length -  0);
while (G__28089__i < G__28089__a.length) {G__28089__a[G__28089__i] = arguments[G__28089__i + 0]; ++G__28089__i;}
  args = new cljs.core.IndexedSeq(G__28089__a,0);
} 
return G__28088__delegate.call(this,args);};
G__28088.cljs$lang$maxFixedArity = 0;
G__28088.cljs$lang$applyTo = (function (arglist__28090){
var args = cljs.core.seq(arglist__28090);
return G__28088__delegate(args);
});
G__28088.cljs$core$IFn$_invoke$arity$variadic = G__28088__delegate;
return G__28088;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1485228949194