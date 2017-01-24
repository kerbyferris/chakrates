goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('chakrates.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__40710__delegate = function (x){
if(cljs.core.truth_(chakrates.core.on_js_reload)){
return cljs.core.apply.call(null,chakrates.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'chakrates.core/on-js-reload' is missing");
}
};
var G__40710 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__40711__i = 0, G__40711__a = new Array(arguments.length -  0);
while (G__40711__i < G__40711__a.length) {G__40711__a[G__40711__i] = arguments[G__40711__i + 0]; ++G__40711__i;}
  x = new cljs.core.IndexedSeq(G__40711__a,0);
} 
return G__40710__delegate.call(this,x);};
G__40710.cljs$lang$maxFixedArity = 0;
G__40710.cljs$lang$applyTo = (function (arglist__40712){
var x = cljs.core.seq(arglist__40712);
return G__40710__delegate(x);
});
G__40710.cljs$core$IFn$_invoke$arity$variadic = G__40710__delegate;
return G__40710;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
