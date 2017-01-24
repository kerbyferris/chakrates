goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('chakrates.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__37167__delegate = function (x){
if(cljs.core.truth_(chakrates.core.on_js_reload)){
return cljs.core.apply.call(null,chakrates.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'chakrates.core/on-js-reload' is missing");
}
};
var G__37167 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__37168__i = 0, G__37168__a = new Array(arguments.length -  0);
while (G__37168__i < G__37168__a.length) {G__37168__a[G__37168__i] = arguments[G__37168__i + 0]; ++G__37168__i;}
  x = new cljs.core.IndexedSeq(G__37168__a,0);
} 
return G__37167__delegate.call(this,x);};
G__37167.cljs$lang$maxFixedArity = 0;
G__37167.cljs$lang$applyTo = (function (arglist__37169){
var x = cljs.core.seq(arglist__37169);
return G__37167__delegate(x);
});
G__37167.cljs$core$IFn$_invoke$arity$variadic = G__37167__delegate;
return G__37167;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
