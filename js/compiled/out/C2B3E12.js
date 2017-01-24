goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('chakrates.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__40588__delegate = function (x){
if(cljs.core.truth_(chakrates.core.on_js_reload)){
return cljs.core.apply.call(null,chakrates.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'chakrates.core/on-js-reload' is missing");
}
};
var G__40588 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__40589__i = 0, G__40589__a = new Array(arguments.length -  0);
while (G__40589__i < G__40589__a.length) {G__40589__a[G__40589__i] = arguments[G__40589__i + 0]; ++G__40589__i;}
  x = new cljs.core.IndexedSeq(G__40589__a,0);
} 
return G__40588__delegate.call(this,x);};
G__40588.cljs$lang$maxFixedArity = 0;
G__40588.cljs$lang$applyTo = (function (arglist__40590){
var x = cljs.core.seq(arglist__40590);
return G__40588__delegate(x);
});
G__40588.cljs$core$IFn$_invoke$arity$variadic = G__40588__delegate;
return G__40588;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
