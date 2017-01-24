// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24798__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24798__auto__){
return or__24798__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24798__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33398_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33398_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__33403 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33404 = null;
var count__33405 = (0);
var i__33406 = (0);
while(true){
if((i__33406 < count__33405)){
var n = cljs.core._nth.call(null,chunk__33404,i__33406);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33407 = seq__33403;
var G__33408 = chunk__33404;
var G__33409 = count__33405;
var G__33410 = (i__33406 + (1));
seq__33403 = G__33407;
chunk__33404 = G__33408;
count__33405 = G__33409;
i__33406 = G__33410;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33403);
if(temp__4657__auto__){
var seq__33403__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33403__$1)){
var c__25609__auto__ = cljs.core.chunk_first.call(null,seq__33403__$1);
var G__33411 = cljs.core.chunk_rest.call(null,seq__33403__$1);
var G__33412 = c__25609__auto__;
var G__33413 = cljs.core.count.call(null,c__25609__auto__);
var G__33414 = (0);
seq__33403 = G__33411;
chunk__33404 = G__33412;
count__33405 = G__33413;
i__33406 = G__33414;
continue;
} else {
var n = cljs.core.first.call(null,seq__33403__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33415 = cljs.core.next.call(null,seq__33403__$1);
var G__33416 = null;
var G__33417 = (0);
var G__33418 = (0);
seq__33403 = G__33415;
chunk__33404 = G__33416;
count__33405 = G__33417;
i__33406 = G__33418;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__33469_33480 = cljs.core.seq.call(null,deps);
var chunk__33470_33481 = null;
var count__33471_33482 = (0);
var i__33472_33483 = (0);
while(true){
if((i__33472_33483 < count__33471_33482)){
var dep_33484 = cljs.core._nth.call(null,chunk__33470_33481,i__33472_33483);
topo_sort_helper_STAR_.call(null,dep_33484,(depth + (1)),state);

var G__33485 = seq__33469_33480;
var G__33486 = chunk__33470_33481;
var G__33487 = count__33471_33482;
var G__33488 = (i__33472_33483 + (1));
seq__33469_33480 = G__33485;
chunk__33470_33481 = G__33486;
count__33471_33482 = G__33487;
i__33472_33483 = G__33488;
continue;
} else {
var temp__4657__auto___33489 = cljs.core.seq.call(null,seq__33469_33480);
if(temp__4657__auto___33489){
var seq__33469_33490__$1 = temp__4657__auto___33489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33469_33490__$1)){
var c__25609__auto___33491 = cljs.core.chunk_first.call(null,seq__33469_33490__$1);
var G__33492 = cljs.core.chunk_rest.call(null,seq__33469_33490__$1);
var G__33493 = c__25609__auto___33491;
var G__33494 = cljs.core.count.call(null,c__25609__auto___33491);
var G__33495 = (0);
seq__33469_33480 = G__33492;
chunk__33470_33481 = G__33493;
count__33471_33482 = G__33494;
i__33472_33483 = G__33495;
continue;
} else {
var dep_33496 = cljs.core.first.call(null,seq__33469_33490__$1);
topo_sort_helper_STAR_.call(null,dep_33496,(depth + (1)),state);

var G__33497 = cljs.core.next.call(null,seq__33469_33490__$1);
var G__33498 = null;
var G__33499 = (0);
var G__33500 = (0);
seq__33469_33480 = G__33497;
chunk__33470_33481 = G__33498;
count__33471_33482 = G__33499;
i__33472_33483 = G__33500;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33473){
var vec__33477 = p__33473;
var seq__33478 = cljs.core.seq.call(null,vec__33477);
var first__33479 = cljs.core.first.call(null,seq__33478);
var seq__33478__$1 = cljs.core.next.call(null,seq__33478);
var x = first__33479;
var xs = seq__33478__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33477,seq__33478,first__33479,seq__33478__$1,x,xs,get_deps__$1){
return (function (p1__33419_SHARP_){
return clojure.set.difference.call(null,p1__33419_SHARP_,x);
});})(vec__33477,seq__33478,first__33479,seq__33478__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__33513 = cljs.core.seq.call(null,provides);
var chunk__33514 = null;
var count__33515 = (0);
var i__33516 = (0);
while(true){
if((i__33516 < count__33515)){
var prov = cljs.core._nth.call(null,chunk__33514,i__33516);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33517_33525 = cljs.core.seq.call(null,requires);
var chunk__33518_33526 = null;
var count__33519_33527 = (0);
var i__33520_33528 = (0);
while(true){
if((i__33520_33528 < count__33519_33527)){
var req_33529 = cljs.core._nth.call(null,chunk__33518_33526,i__33520_33528);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33529,prov);

var G__33530 = seq__33517_33525;
var G__33531 = chunk__33518_33526;
var G__33532 = count__33519_33527;
var G__33533 = (i__33520_33528 + (1));
seq__33517_33525 = G__33530;
chunk__33518_33526 = G__33531;
count__33519_33527 = G__33532;
i__33520_33528 = G__33533;
continue;
} else {
var temp__4657__auto___33534 = cljs.core.seq.call(null,seq__33517_33525);
if(temp__4657__auto___33534){
var seq__33517_33535__$1 = temp__4657__auto___33534;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33517_33535__$1)){
var c__25609__auto___33536 = cljs.core.chunk_first.call(null,seq__33517_33535__$1);
var G__33537 = cljs.core.chunk_rest.call(null,seq__33517_33535__$1);
var G__33538 = c__25609__auto___33536;
var G__33539 = cljs.core.count.call(null,c__25609__auto___33536);
var G__33540 = (0);
seq__33517_33525 = G__33537;
chunk__33518_33526 = G__33538;
count__33519_33527 = G__33539;
i__33520_33528 = G__33540;
continue;
} else {
var req_33541 = cljs.core.first.call(null,seq__33517_33535__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33541,prov);

var G__33542 = cljs.core.next.call(null,seq__33517_33535__$1);
var G__33543 = null;
var G__33544 = (0);
var G__33545 = (0);
seq__33517_33525 = G__33542;
chunk__33518_33526 = G__33543;
count__33519_33527 = G__33544;
i__33520_33528 = G__33545;
continue;
}
} else {
}
}
break;
}

var G__33546 = seq__33513;
var G__33547 = chunk__33514;
var G__33548 = count__33515;
var G__33549 = (i__33516 + (1));
seq__33513 = G__33546;
chunk__33514 = G__33547;
count__33515 = G__33548;
i__33516 = G__33549;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33513);
if(temp__4657__auto__){
var seq__33513__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33513__$1)){
var c__25609__auto__ = cljs.core.chunk_first.call(null,seq__33513__$1);
var G__33550 = cljs.core.chunk_rest.call(null,seq__33513__$1);
var G__33551 = c__25609__auto__;
var G__33552 = cljs.core.count.call(null,c__25609__auto__);
var G__33553 = (0);
seq__33513 = G__33550;
chunk__33514 = G__33551;
count__33515 = G__33552;
i__33516 = G__33553;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33513__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33521_33554 = cljs.core.seq.call(null,requires);
var chunk__33522_33555 = null;
var count__33523_33556 = (0);
var i__33524_33557 = (0);
while(true){
if((i__33524_33557 < count__33523_33556)){
var req_33558 = cljs.core._nth.call(null,chunk__33522_33555,i__33524_33557);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33558,prov);

var G__33559 = seq__33521_33554;
var G__33560 = chunk__33522_33555;
var G__33561 = count__33523_33556;
var G__33562 = (i__33524_33557 + (1));
seq__33521_33554 = G__33559;
chunk__33522_33555 = G__33560;
count__33523_33556 = G__33561;
i__33524_33557 = G__33562;
continue;
} else {
var temp__4657__auto___33563__$1 = cljs.core.seq.call(null,seq__33521_33554);
if(temp__4657__auto___33563__$1){
var seq__33521_33564__$1 = temp__4657__auto___33563__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33521_33564__$1)){
var c__25609__auto___33565 = cljs.core.chunk_first.call(null,seq__33521_33564__$1);
var G__33566 = cljs.core.chunk_rest.call(null,seq__33521_33564__$1);
var G__33567 = c__25609__auto___33565;
var G__33568 = cljs.core.count.call(null,c__25609__auto___33565);
var G__33569 = (0);
seq__33521_33554 = G__33566;
chunk__33522_33555 = G__33567;
count__33523_33556 = G__33568;
i__33524_33557 = G__33569;
continue;
} else {
var req_33570 = cljs.core.first.call(null,seq__33521_33564__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33570,prov);

var G__33571 = cljs.core.next.call(null,seq__33521_33564__$1);
var G__33572 = null;
var G__33573 = (0);
var G__33574 = (0);
seq__33521_33554 = G__33571;
chunk__33522_33555 = G__33572;
count__33523_33556 = G__33573;
i__33524_33557 = G__33574;
continue;
}
} else {
}
}
break;
}

var G__33575 = cljs.core.next.call(null,seq__33513__$1);
var G__33576 = null;
var G__33577 = (0);
var G__33578 = (0);
seq__33513 = G__33575;
chunk__33514 = G__33576;
count__33515 = G__33577;
i__33516 = G__33578;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__33583_33587 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33584_33588 = null;
var count__33585_33589 = (0);
var i__33586_33590 = (0);
while(true){
if((i__33586_33590 < count__33585_33589)){
var ns_33591 = cljs.core._nth.call(null,chunk__33584_33588,i__33586_33590);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33591);

var G__33592 = seq__33583_33587;
var G__33593 = chunk__33584_33588;
var G__33594 = count__33585_33589;
var G__33595 = (i__33586_33590 + (1));
seq__33583_33587 = G__33592;
chunk__33584_33588 = G__33593;
count__33585_33589 = G__33594;
i__33586_33590 = G__33595;
continue;
} else {
var temp__4657__auto___33596 = cljs.core.seq.call(null,seq__33583_33587);
if(temp__4657__auto___33596){
var seq__33583_33597__$1 = temp__4657__auto___33596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33583_33597__$1)){
var c__25609__auto___33598 = cljs.core.chunk_first.call(null,seq__33583_33597__$1);
var G__33599 = cljs.core.chunk_rest.call(null,seq__33583_33597__$1);
var G__33600 = c__25609__auto___33598;
var G__33601 = cljs.core.count.call(null,c__25609__auto___33598);
var G__33602 = (0);
seq__33583_33587 = G__33599;
chunk__33584_33588 = G__33600;
count__33585_33589 = G__33601;
i__33586_33590 = G__33602;
continue;
} else {
var ns_33603 = cljs.core.first.call(null,seq__33583_33597__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33603);

var G__33604 = cljs.core.next.call(null,seq__33583_33597__$1);
var G__33605 = null;
var G__33606 = (0);
var G__33607 = (0);
seq__33583_33587 = G__33604;
chunk__33584_33588 = G__33605;
count__33585_33589 = G__33606;
i__33586_33590 = G__33607;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24798__auto__ = goog.require__;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__33608__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33608 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33609__i = 0, G__33609__a = new Array(arguments.length -  0);
while (G__33609__i < G__33609__a.length) {G__33609__a[G__33609__i] = arguments[G__33609__i + 0]; ++G__33609__i;}
  args = new cljs.core.IndexedSeq(G__33609__a,0);
} 
return G__33608__delegate.call(this,args);};
G__33608.cljs$lang$maxFixedArity = 0;
G__33608.cljs$lang$applyTo = (function (arglist__33610){
var args = cljs.core.seq(arglist__33610);
return G__33608__delegate(args);
});
G__33608.cljs$core$IFn$_invoke$arity$variadic = G__33608__delegate;
return G__33608;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33612 = cljs.core._EQ_;
var expr__33613 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33612.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33613))){
var path_parts = ((function (pred__33612,expr__33613){
return (function (p1__33611_SHARP_){
return clojure.string.split.call(null,p1__33611_SHARP_,/[\/\\]/);
});})(pred__33612,expr__33613))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__33612,expr__33613){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33615){if((e33615 instanceof Error)){
var e = e33615;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33615;

}
}})());
});
;})(path_parts,sep,root,pred__33612,expr__33613))
} else {
if(cljs.core.truth_(pred__33612.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33613))){
return ((function (pred__33612,expr__33613){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__33612,expr__33613){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__33612,expr__33613))
);

return deferred.addErrback(((function (deferred,pred__33612,expr__33613){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__33612,expr__33613))
);
});
;})(pred__33612,expr__33613))
} else {
return ((function (pred__33612,expr__33613){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33612,expr__33613))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33616,callback){
var map__33619 = p__33616;
var map__33619__$1 = ((((!((map__33619 == null)))?((((map__33619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33619):map__33619);
var file_msg = map__33619__$1;
var request_url = cljs.core.get.call(null,map__33619__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33619,map__33619__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33619,map__33619__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__30477__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30477__auto__){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (c__30477__auto__){
return (function (state_33643){
var state_val_33644 = (state_33643[(1)]);
if((state_val_33644 === (7))){
var inst_33639 = (state_33643[(2)]);
var state_33643__$1 = state_33643;
var statearr_33645_33665 = state_33643__$1;
(statearr_33645_33665[(2)] = inst_33639);

(statearr_33645_33665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (1))){
var state_33643__$1 = state_33643;
var statearr_33646_33666 = state_33643__$1;
(statearr_33646_33666[(2)] = null);

(statearr_33646_33666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (4))){
var inst_33623 = (state_33643[(7)]);
var inst_33623__$1 = (state_33643[(2)]);
var state_33643__$1 = (function (){var statearr_33647 = state_33643;
(statearr_33647[(7)] = inst_33623__$1);

return statearr_33647;
})();
if(cljs.core.truth_(inst_33623__$1)){
var statearr_33648_33667 = state_33643__$1;
(statearr_33648_33667[(1)] = (5));

} else {
var statearr_33649_33668 = state_33643__$1;
(statearr_33649_33668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (6))){
var state_33643__$1 = state_33643;
var statearr_33650_33669 = state_33643__$1;
(statearr_33650_33669[(2)] = null);

(statearr_33650_33669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (3))){
var inst_33641 = (state_33643[(2)]);
var state_33643__$1 = state_33643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33643__$1,inst_33641);
} else {
if((state_val_33644 === (2))){
var state_33643__$1 = state_33643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33643__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33644 === (11))){
var inst_33635 = (state_33643[(2)]);
var state_33643__$1 = (function (){var statearr_33651 = state_33643;
(statearr_33651[(8)] = inst_33635);

return statearr_33651;
})();
var statearr_33652_33670 = state_33643__$1;
(statearr_33652_33670[(2)] = null);

(statearr_33652_33670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (9))){
var inst_33627 = (state_33643[(9)]);
var inst_33629 = (state_33643[(10)]);
var inst_33631 = inst_33629.call(null,inst_33627);
var state_33643__$1 = state_33643;
var statearr_33653_33671 = state_33643__$1;
(statearr_33653_33671[(2)] = inst_33631);

(statearr_33653_33671[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (5))){
var inst_33623 = (state_33643[(7)]);
var inst_33625 = figwheel.client.file_reloading.blocking_load.call(null,inst_33623);
var state_33643__$1 = state_33643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33643__$1,(8),inst_33625);
} else {
if((state_val_33644 === (10))){
var inst_33627 = (state_33643[(9)]);
var inst_33633 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33627);
var state_33643__$1 = state_33643;
var statearr_33654_33672 = state_33643__$1;
(statearr_33654_33672[(2)] = inst_33633);

(statearr_33654_33672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (8))){
var inst_33629 = (state_33643[(10)]);
var inst_33623 = (state_33643[(7)]);
var inst_33627 = (state_33643[(2)]);
var inst_33628 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33629__$1 = cljs.core.get.call(null,inst_33628,inst_33623);
var state_33643__$1 = (function (){var statearr_33655 = state_33643;
(statearr_33655[(9)] = inst_33627);

(statearr_33655[(10)] = inst_33629__$1);

return statearr_33655;
})();
if(cljs.core.truth_(inst_33629__$1)){
var statearr_33656_33673 = state_33643__$1;
(statearr_33656_33673[(1)] = (9));

} else {
var statearr_33657_33674 = state_33643__$1;
(statearr_33657_33674[(1)] = (10));

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
});})(c__30477__auto__))
;
return ((function (switch__30365__auto__,c__30477__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30366__auto__ = null;
var figwheel$client$file_reloading$state_machine__30366__auto____0 = (function (){
var statearr_33661 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33661[(0)] = figwheel$client$file_reloading$state_machine__30366__auto__);

(statearr_33661[(1)] = (1));

return statearr_33661;
});
var figwheel$client$file_reloading$state_machine__30366__auto____1 = (function (state_33643){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_33643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e33662){if((e33662 instanceof Object)){
var ex__30369__auto__ = e33662;
var statearr_33663_33675 = state_33643;
(statearr_33663_33675[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33676 = state_33643;
state_33643 = G__33676;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30366__auto__ = function(state_33643){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30366__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30366__auto____1.call(this,state_33643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30366__auto____0;
figwheel$client$file_reloading$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30366__auto____1;
return figwheel$client$file_reloading$state_machine__30366__auto__;
})()
;})(switch__30365__auto__,c__30477__auto__))
})();
var state__30479__auto__ = (function (){var statearr_33664 = f__30478__auto__.call(null);
(statearr_33664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto__);

return statearr_33664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(c__30477__auto__))
);

return c__30477__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33677,callback){
var map__33680 = p__33677;
var map__33680__$1 = ((((!((map__33680 == null)))?((((map__33680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33680):map__33680);
var file_msg = map__33680__$1;
var namespace = cljs.core.get.call(null,map__33680__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33680,map__33680__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33680,map__33680__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33682){
var map__33685 = p__33682;
var map__33685__$1 = ((((!((map__33685 == null)))?((((map__33685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33685):map__33685);
var file_msg = map__33685__$1;
var namespace = cljs.core.get.call(null,map__33685__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24786__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24786__auto__){
var or__24798__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
var or__24798__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24798__auto____$1)){
return or__24798__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24786__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33687,callback){
var map__33690 = p__33687;
var map__33690__$1 = ((((!((map__33690 == null)))?((((map__33690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33690):map__33690);
var file_msg = map__33690__$1;
var request_url = cljs.core.get.call(null,map__33690__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33690__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__30477__auto___33794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30477__auto___33794,out){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (c__30477__auto___33794,out){
return (function (state_33776){
var state_val_33777 = (state_33776[(1)]);
if((state_val_33777 === (1))){
var inst_33750 = cljs.core.seq.call(null,files);
var inst_33751 = cljs.core.first.call(null,inst_33750);
var inst_33752 = cljs.core.next.call(null,inst_33750);
var inst_33753 = files;
var state_33776__$1 = (function (){var statearr_33778 = state_33776;
(statearr_33778[(7)] = inst_33751);

(statearr_33778[(8)] = inst_33752);

(statearr_33778[(9)] = inst_33753);

return statearr_33778;
})();
var statearr_33779_33795 = state_33776__$1;
(statearr_33779_33795[(2)] = null);

(statearr_33779_33795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (2))){
var inst_33759 = (state_33776[(10)]);
var inst_33753 = (state_33776[(9)]);
var inst_33758 = cljs.core.seq.call(null,inst_33753);
var inst_33759__$1 = cljs.core.first.call(null,inst_33758);
var inst_33760 = cljs.core.next.call(null,inst_33758);
var inst_33761 = (inst_33759__$1 == null);
var inst_33762 = cljs.core.not.call(null,inst_33761);
var state_33776__$1 = (function (){var statearr_33780 = state_33776;
(statearr_33780[(11)] = inst_33760);

(statearr_33780[(10)] = inst_33759__$1);

return statearr_33780;
})();
if(inst_33762){
var statearr_33781_33796 = state_33776__$1;
(statearr_33781_33796[(1)] = (4));

} else {
var statearr_33782_33797 = state_33776__$1;
(statearr_33782_33797[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (3))){
var inst_33774 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33776__$1,inst_33774);
} else {
if((state_val_33777 === (4))){
var inst_33759 = (state_33776[(10)]);
var inst_33764 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33759);
var state_33776__$1 = state_33776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33776__$1,(7),inst_33764);
} else {
if((state_val_33777 === (5))){
var inst_33770 = cljs.core.async.close_BANG_.call(null,out);
var state_33776__$1 = state_33776;
var statearr_33783_33798 = state_33776__$1;
(statearr_33783_33798[(2)] = inst_33770);

(statearr_33783_33798[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (6))){
var inst_33772 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
var statearr_33784_33799 = state_33776__$1;
(statearr_33784_33799[(2)] = inst_33772);

(statearr_33784_33799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (7))){
var inst_33760 = (state_33776[(11)]);
var inst_33766 = (state_33776[(2)]);
var inst_33767 = cljs.core.async.put_BANG_.call(null,out,inst_33766);
var inst_33753 = inst_33760;
var state_33776__$1 = (function (){var statearr_33785 = state_33776;
(statearr_33785[(12)] = inst_33767);

(statearr_33785[(9)] = inst_33753);

return statearr_33785;
})();
var statearr_33786_33800 = state_33776__$1;
(statearr_33786_33800[(2)] = null);

(statearr_33786_33800[(1)] = (2));


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
});})(c__30477__auto___33794,out))
;
return ((function (switch__30365__auto__,c__30477__auto___33794,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30366__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30366__auto____0 = (function (){
var statearr_33790 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33790[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30366__auto__);

(statearr_33790[(1)] = (1));

return statearr_33790;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30366__auto____1 = (function (state_33776){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_33776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e33791){if((e33791 instanceof Object)){
var ex__30369__auto__ = e33791;
var statearr_33792_33801 = state_33776;
(statearr_33792_33801[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33802 = state_33776;
state_33776 = G__33802;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30366__auto__ = function(state_33776){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30366__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30366__auto____1.call(this,state_33776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30366__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30366__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30366__auto__;
})()
;})(switch__30365__auto__,c__30477__auto___33794,out))
})();
var state__30479__auto__ = (function (){var statearr_33793 = f__30478__auto__.call(null);
(statearr_33793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto___33794);

return statearr_33793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(c__30477__auto___33794,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33803,opts){
var map__33807 = p__33803;
var map__33807__$1 = ((((!((map__33807 == null)))?((((map__33807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33807):map__33807);
var eval_body__$1 = cljs.core.get.call(null,map__33807__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33807__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24786__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24786__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24786__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e33809){var e = e33809;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__33810_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33810_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__33819){
var vec__33820 = p__33819;
var k = cljs.core.nth.call(null,vec__33820,(0),null);
var v = cljs.core.nth.call(null,vec__33820,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33823){
var vec__33824 = p__33823;
var k = cljs.core.nth.call(null,vec__33824,(0),null);
var v = cljs.core.nth.call(null,vec__33824,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33830,p__33831){
var map__34078 = p__33830;
var map__34078__$1 = ((((!((map__34078 == null)))?((((map__34078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34078):map__34078);
var opts = map__34078__$1;
var before_jsload = cljs.core.get.call(null,map__34078__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34078__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34078__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34079 = p__33831;
var map__34079__$1 = ((((!((map__34079 == null)))?((((map__34079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34079):map__34079);
var msg = map__34079__$1;
var files = cljs.core.get.call(null,map__34079__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34079__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34079__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30477__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30477__auto__,map__34078,map__34078__$1,opts,before_jsload,on_jsload,reload_dependents,map__34079,map__34079__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (c__30477__auto__,map__34078,map__34078__$1,opts,before_jsload,on_jsload,reload_dependents,map__34079,map__34079__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34232){
var state_val_34233 = (state_34232[(1)]);
if((state_val_34233 === (7))){
var inst_34094 = (state_34232[(7)]);
var inst_34095 = (state_34232[(8)]);
var inst_34093 = (state_34232[(9)]);
var inst_34096 = (state_34232[(10)]);
var inst_34101 = cljs.core._nth.call(null,inst_34094,inst_34096);
var inst_34102 = figwheel.client.file_reloading.eval_body.call(null,inst_34101,opts);
var inst_34103 = (inst_34096 + (1));
var tmp34234 = inst_34094;
var tmp34235 = inst_34095;
var tmp34236 = inst_34093;
var inst_34093__$1 = tmp34236;
var inst_34094__$1 = tmp34234;
var inst_34095__$1 = tmp34235;
var inst_34096__$1 = inst_34103;
var state_34232__$1 = (function (){var statearr_34237 = state_34232;
(statearr_34237[(7)] = inst_34094__$1);

(statearr_34237[(8)] = inst_34095__$1);

(statearr_34237[(9)] = inst_34093__$1);

(statearr_34237[(11)] = inst_34102);

(statearr_34237[(10)] = inst_34096__$1);

return statearr_34237;
})();
var statearr_34238_34324 = state_34232__$1;
(statearr_34238_34324[(2)] = null);

(statearr_34238_34324[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (20))){
var inst_34136 = (state_34232[(12)]);
var inst_34144 = figwheel.client.file_reloading.sort_files.call(null,inst_34136);
var state_34232__$1 = state_34232;
var statearr_34239_34325 = state_34232__$1;
(statearr_34239_34325[(2)] = inst_34144);

(statearr_34239_34325[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (27))){
var state_34232__$1 = state_34232;
var statearr_34240_34326 = state_34232__$1;
(statearr_34240_34326[(2)] = null);

(statearr_34240_34326[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (1))){
var inst_34085 = (state_34232[(13)]);
var inst_34082 = before_jsload.call(null,files);
var inst_34083 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34084 = (function (){return ((function (inst_34085,inst_34082,inst_34083,state_val_34233,c__30477__auto__,map__34078,map__34078__$1,opts,before_jsload,on_jsload,reload_dependents,map__34079,map__34079__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33827_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33827_SHARP_);
});
;})(inst_34085,inst_34082,inst_34083,state_val_34233,c__30477__auto__,map__34078,map__34078__$1,opts,before_jsload,on_jsload,reload_dependents,map__34079,map__34079__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34085__$1 = cljs.core.filter.call(null,inst_34084,files);
var inst_34086 = cljs.core.not_empty.call(null,inst_34085__$1);
var state_34232__$1 = (function (){var statearr_34241 = state_34232;
(statearr_34241[(14)] = inst_34083);

(statearr_34241[(15)] = inst_34082);

(statearr_34241[(13)] = inst_34085__$1);

return statearr_34241;
})();
if(cljs.core.truth_(inst_34086)){
var statearr_34242_34327 = state_34232__$1;
(statearr_34242_34327[(1)] = (2));

} else {
var statearr_34243_34328 = state_34232__$1;
(statearr_34243_34328[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (24))){
var state_34232__$1 = state_34232;
var statearr_34244_34329 = state_34232__$1;
(statearr_34244_34329[(2)] = null);

(statearr_34244_34329[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (39))){
var inst_34186 = (state_34232[(16)]);
var state_34232__$1 = state_34232;
var statearr_34245_34330 = state_34232__$1;
(statearr_34245_34330[(2)] = inst_34186);

(statearr_34245_34330[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (46))){
var inst_34227 = (state_34232[(2)]);
var state_34232__$1 = state_34232;
var statearr_34246_34331 = state_34232__$1;
(statearr_34246_34331[(2)] = inst_34227);

(statearr_34246_34331[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (4))){
var inst_34130 = (state_34232[(2)]);
var inst_34131 = cljs.core.List.EMPTY;
var inst_34132 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34131);
var inst_34133 = (function (){return ((function (inst_34130,inst_34131,inst_34132,state_val_34233,c__30477__auto__,map__34078,map__34078__$1,opts,before_jsload,on_jsload,reload_dependents,map__34079,map__34079__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33828_SHARP_){
var and__24786__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33828_SHARP_);
if(cljs.core.truth_(and__24786__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33828_SHARP_));
} else {
return and__24786__auto__;
}
});
;})(inst_34130,inst_34131,inst_34132,state_val_34233,c__30477__auto__,map__34078,map__34078__$1,opts,before_jsload,on_jsload,reload_dependents,map__34079,map__34079__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34134 = cljs.core.filter.call(null,inst_34133,files);
var inst_34135 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34136 = cljs.core.concat.call(null,inst_34134,inst_34135);
var state_34232__$1 = (function (){var statearr_34247 = state_34232;
(statearr_34247[(12)] = inst_34136);

(statearr_34247[(17)] = inst_34130);

(statearr_34247[(18)] = inst_34132);

return statearr_34247;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34248_34332 = state_34232__$1;
(statearr_34248_34332[(1)] = (16));

} else {
var statearr_34249_34333 = state_34232__$1;
(statearr_34249_34333[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (15))){
var inst_34120 = (state_34232[(2)]);
var state_34232__$1 = state_34232;
var statearr_34250_34334 = state_34232__$1;
(statearr_34250_34334[(2)] = inst_34120);

(statearr_34250_34334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (21))){
var inst_34146 = (state_34232[(19)]);
var inst_34146__$1 = (state_34232[(2)]);
var inst_34147 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34146__$1);
var state_34232__$1 = (function (){var statearr_34251 = state_34232;
(statearr_34251[(19)] = inst_34146__$1);

return statearr_34251;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34232__$1,(22),inst_34147);
} else {
if((state_val_34233 === (31))){
var inst_34230 = (state_34232[(2)]);
var state_34232__$1 = state_34232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34232__$1,inst_34230);
} else {
if((state_val_34233 === (32))){
var inst_34186 = (state_34232[(16)]);
var inst_34191 = inst_34186.cljs$lang$protocol_mask$partition0$;
var inst_34192 = (inst_34191 & (64));
var inst_34193 = inst_34186.cljs$core$ISeq$;
var inst_34194 = (inst_34192) || (inst_34193);
var state_34232__$1 = state_34232;
if(cljs.core.truth_(inst_34194)){
var statearr_34252_34335 = state_34232__$1;
(statearr_34252_34335[(1)] = (35));

} else {
var statearr_34253_34336 = state_34232__$1;
(statearr_34253_34336[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (40))){
var inst_34207 = (state_34232[(20)]);
var inst_34206 = (state_34232[(2)]);
var inst_34207__$1 = cljs.core.get.call(null,inst_34206,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34208 = cljs.core.get.call(null,inst_34206,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34209 = cljs.core.not_empty.call(null,inst_34207__$1);
var state_34232__$1 = (function (){var statearr_34254 = state_34232;
(statearr_34254[(20)] = inst_34207__$1);

(statearr_34254[(21)] = inst_34208);

return statearr_34254;
})();
if(cljs.core.truth_(inst_34209)){
var statearr_34255_34337 = state_34232__$1;
(statearr_34255_34337[(1)] = (41));

} else {
var statearr_34256_34338 = state_34232__$1;
(statearr_34256_34338[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (33))){
var state_34232__$1 = state_34232;
var statearr_34257_34339 = state_34232__$1;
(statearr_34257_34339[(2)] = false);

(statearr_34257_34339[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (13))){
var inst_34106 = (state_34232[(22)]);
var inst_34110 = cljs.core.chunk_first.call(null,inst_34106);
var inst_34111 = cljs.core.chunk_rest.call(null,inst_34106);
var inst_34112 = cljs.core.count.call(null,inst_34110);
var inst_34093 = inst_34111;
var inst_34094 = inst_34110;
var inst_34095 = inst_34112;
var inst_34096 = (0);
var state_34232__$1 = (function (){var statearr_34258 = state_34232;
(statearr_34258[(7)] = inst_34094);

(statearr_34258[(8)] = inst_34095);

(statearr_34258[(9)] = inst_34093);

(statearr_34258[(10)] = inst_34096);

return statearr_34258;
})();
var statearr_34259_34340 = state_34232__$1;
(statearr_34259_34340[(2)] = null);

(statearr_34259_34340[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (22))){
var inst_34149 = (state_34232[(23)]);
var inst_34146 = (state_34232[(19)]);
var inst_34154 = (state_34232[(24)]);
var inst_34150 = (state_34232[(25)]);
var inst_34149__$1 = (state_34232[(2)]);
var inst_34150__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34149__$1);
var inst_34151 = (function (){var all_files = inst_34146;
var res_SINGLEQUOTE_ = inst_34149__$1;
var res = inst_34150__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34149,inst_34146,inst_34154,inst_34150,inst_34149__$1,inst_34150__$1,state_val_34233,c__30477__auto__,map__34078,map__34078__$1,opts,before_jsload,on_jsload,reload_dependents,map__34079,map__34079__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33829_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33829_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34149,inst_34146,inst_34154,inst_34150,inst_34149__$1,inst_34150__$1,state_val_34233,c__30477__auto__,map__34078,map__34078__$1,opts,before_jsload,on_jsload,reload_dependents,map__34079,map__34079__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34152 = cljs.core.filter.call(null,inst_34151,inst_34149__$1);
var inst_34153 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34154__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34153);
var inst_34155 = cljs.core.not_empty.call(null,inst_34154__$1);
var state_34232__$1 = (function (){var statearr_34260 = state_34232;
(statearr_34260[(23)] = inst_34149__$1);

(statearr_34260[(26)] = inst_34152);

(statearr_34260[(24)] = inst_34154__$1);

(statearr_34260[(25)] = inst_34150__$1);

return statearr_34260;
})();
if(cljs.core.truth_(inst_34155)){
var statearr_34261_34341 = state_34232__$1;
(statearr_34261_34341[(1)] = (23));

} else {
var statearr_34262_34342 = state_34232__$1;
(statearr_34262_34342[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (36))){
var state_34232__$1 = state_34232;
var statearr_34263_34343 = state_34232__$1;
(statearr_34263_34343[(2)] = false);

(statearr_34263_34343[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (41))){
var inst_34207 = (state_34232[(20)]);
var inst_34211 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34212 = cljs.core.map.call(null,inst_34211,inst_34207);
var inst_34213 = cljs.core.pr_str.call(null,inst_34212);
var inst_34214 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34213)].join('');
var inst_34215 = figwheel.client.utils.log.call(null,inst_34214);
var state_34232__$1 = state_34232;
var statearr_34264_34344 = state_34232__$1;
(statearr_34264_34344[(2)] = inst_34215);

(statearr_34264_34344[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (43))){
var inst_34208 = (state_34232[(21)]);
var inst_34218 = (state_34232[(2)]);
var inst_34219 = cljs.core.not_empty.call(null,inst_34208);
var state_34232__$1 = (function (){var statearr_34265 = state_34232;
(statearr_34265[(27)] = inst_34218);

return statearr_34265;
})();
if(cljs.core.truth_(inst_34219)){
var statearr_34266_34345 = state_34232__$1;
(statearr_34266_34345[(1)] = (44));

} else {
var statearr_34267_34346 = state_34232__$1;
(statearr_34267_34346[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (29))){
var inst_34149 = (state_34232[(23)]);
var inst_34152 = (state_34232[(26)]);
var inst_34186 = (state_34232[(16)]);
var inst_34146 = (state_34232[(19)]);
var inst_34154 = (state_34232[(24)]);
var inst_34150 = (state_34232[(25)]);
var inst_34182 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34185 = (function (){var all_files = inst_34146;
var res_SINGLEQUOTE_ = inst_34149;
var res = inst_34150;
var files_not_loaded = inst_34152;
var dependencies_that_loaded = inst_34154;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34149,inst_34152,inst_34186,inst_34146,inst_34154,inst_34150,inst_34182,state_val_34233,c__30477__auto__,map__34078,map__34078__$1,opts,before_jsload,on_jsload,reload_dependents,map__34079,map__34079__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34184){
var map__34268 = p__34184;
var map__34268__$1 = ((((!((map__34268 == null)))?((((map__34268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34268):map__34268);
var namespace = cljs.core.get.call(null,map__34268__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34149,inst_34152,inst_34186,inst_34146,inst_34154,inst_34150,inst_34182,state_val_34233,c__30477__auto__,map__34078,map__34078__$1,opts,before_jsload,on_jsload,reload_dependents,map__34079,map__34079__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34186__$1 = cljs.core.group_by.call(null,inst_34185,inst_34152);
var inst_34188 = (inst_34186__$1 == null);
var inst_34189 = cljs.core.not.call(null,inst_34188);
var state_34232__$1 = (function (){var statearr_34270 = state_34232;
(statearr_34270[(16)] = inst_34186__$1);

(statearr_34270[(28)] = inst_34182);

return statearr_34270;
})();
if(inst_34189){
var statearr_34271_34347 = state_34232__$1;
(statearr_34271_34347[(1)] = (32));

} else {
var statearr_34272_34348 = state_34232__$1;
(statearr_34272_34348[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (44))){
var inst_34208 = (state_34232[(21)]);
var inst_34221 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34208);
var inst_34222 = cljs.core.pr_str.call(null,inst_34221);
var inst_34223 = [cljs.core.str("not required: "),cljs.core.str(inst_34222)].join('');
var inst_34224 = figwheel.client.utils.log.call(null,inst_34223);
var state_34232__$1 = state_34232;
var statearr_34273_34349 = state_34232__$1;
(statearr_34273_34349[(2)] = inst_34224);

(statearr_34273_34349[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (6))){
var inst_34127 = (state_34232[(2)]);
var state_34232__$1 = state_34232;
var statearr_34274_34350 = state_34232__$1;
(statearr_34274_34350[(2)] = inst_34127);

(statearr_34274_34350[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (28))){
var inst_34152 = (state_34232[(26)]);
var inst_34179 = (state_34232[(2)]);
var inst_34180 = cljs.core.not_empty.call(null,inst_34152);
var state_34232__$1 = (function (){var statearr_34275 = state_34232;
(statearr_34275[(29)] = inst_34179);

return statearr_34275;
})();
if(cljs.core.truth_(inst_34180)){
var statearr_34276_34351 = state_34232__$1;
(statearr_34276_34351[(1)] = (29));

} else {
var statearr_34277_34352 = state_34232__$1;
(statearr_34277_34352[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (25))){
var inst_34150 = (state_34232[(25)]);
var inst_34166 = (state_34232[(2)]);
var inst_34167 = cljs.core.not_empty.call(null,inst_34150);
var state_34232__$1 = (function (){var statearr_34278 = state_34232;
(statearr_34278[(30)] = inst_34166);

return statearr_34278;
})();
if(cljs.core.truth_(inst_34167)){
var statearr_34279_34353 = state_34232__$1;
(statearr_34279_34353[(1)] = (26));

} else {
var statearr_34280_34354 = state_34232__$1;
(statearr_34280_34354[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (34))){
var inst_34201 = (state_34232[(2)]);
var state_34232__$1 = state_34232;
if(cljs.core.truth_(inst_34201)){
var statearr_34281_34355 = state_34232__$1;
(statearr_34281_34355[(1)] = (38));

} else {
var statearr_34282_34356 = state_34232__$1;
(statearr_34282_34356[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (17))){
var state_34232__$1 = state_34232;
var statearr_34283_34357 = state_34232__$1;
(statearr_34283_34357[(2)] = recompile_dependents);

(statearr_34283_34357[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (3))){
var state_34232__$1 = state_34232;
var statearr_34284_34358 = state_34232__$1;
(statearr_34284_34358[(2)] = null);

(statearr_34284_34358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (12))){
var inst_34123 = (state_34232[(2)]);
var state_34232__$1 = state_34232;
var statearr_34285_34359 = state_34232__$1;
(statearr_34285_34359[(2)] = inst_34123);

(statearr_34285_34359[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (2))){
var inst_34085 = (state_34232[(13)]);
var inst_34092 = cljs.core.seq.call(null,inst_34085);
var inst_34093 = inst_34092;
var inst_34094 = null;
var inst_34095 = (0);
var inst_34096 = (0);
var state_34232__$1 = (function (){var statearr_34286 = state_34232;
(statearr_34286[(7)] = inst_34094);

(statearr_34286[(8)] = inst_34095);

(statearr_34286[(9)] = inst_34093);

(statearr_34286[(10)] = inst_34096);

return statearr_34286;
})();
var statearr_34287_34360 = state_34232__$1;
(statearr_34287_34360[(2)] = null);

(statearr_34287_34360[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (23))){
var inst_34149 = (state_34232[(23)]);
var inst_34152 = (state_34232[(26)]);
var inst_34146 = (state_34232[(19)]);
var inst_34154 = (state_34232[(24)]);
var inst_34150 = (state_34232[(25)]);
var inst_34157 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34159 = (function (){var all_files = inst_34146;
var res_SINGLEQUOTE_ = inst_34149;
var res = inst_34150;
var files_not_loaded = inst_34152;
var dependencies_that_loaded = inst_34154;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34149,inst_34152,inst_34146,inst_34154,inst_34150,inst_34157,state_val_34233,c__30477__auto__,map__34078,map__34078__$1,opts,before_jsload,on_jsload,reload_dependents,map__34079,map__34079__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34158){
var map__34288 = p__34158;
var map__34288__$1 = ((((!((map__34288 == null)))?((((map__34288.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34288.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34288):map__34288);
var request_url = cljs.core.get.call(null,map__34288__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34149,inst_34152,inst_34146,inst_34154,inst_34150,inst_34157,state_val_34233,c__30477__auto__,map__34078,map__34078__$1,opts,before_jsload,on_jsload,reload_dependents,map__34079,map__34079__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34160 = cljs.core.reverse.call(null,inst_34154);
var inst_34161 = cljs.core.map.call(null,inst_34159,inst_34160);
var inst_34162 = cljs.core.pr_str.call(null,inst_34161);
var inst_34163 = figwheel.client.utils.log.call(null,inst_34162);
var state_34232__$1 = (function (){var statearr_34290 = state_34232;
(statearr_34290[(31)] = inst_34157);

return statearr_34290;
})();
var statearr_34291_34361 = state_34232__$1;
(statearr_34291_34361[(2)] = inst_34163);

(statearr_34291_34361[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (35))){
var state_34232__$1 = state_34232;
var statearr_34292_34362 = state_34232__$1;
(statearr_34292_34362[(2)] = true);

(statearr_34292_34362[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (19))){
var inst_34136 = (state_34232[(12)]);
var inst_34142 = figwheel.client.file_reloading.expand_files.call(null,inst_34136);
var state_34232__$1 = state_34232;
var statearr_34293_34363 = state_34232__$1;
(statearr_34293_34363[(2)] = inst_34142);

(statearr_34293_34363[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (11))){
var state_34232__$1 = state_34232;
var statearr_34294_34364 = state_34232__$1;
(statearr_34294_34364[(2)] = null);

(statearr_34294_34364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (9))){
var inst_34125 = (state_34232[(2)]);
var state_34232__$1 = state_34232;
var statearr_34295_34365 = state_34232__$1;
(statearr_34295_34365[(2)] = inst_34125);

(statearr_34295_34365[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (5))){
var inst_34095 = (state_34232[(8)]);
var inst_34096 = (state_34232[(10)]);
var inst_34098 = (inst_34096 < inst_34095);
var inst_34099 = inst_34098;
var state_34232__$1 = state_34232;
if(cljs.core.truth_(inst_34099)){
var statearr_34296_34366 = state_34232__$1;
(statearr_34296_34366[(1)] = (7));

} else {
var statearr_34297_34367 = state_34232__$1;
(statearr_34297_34367[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (14))){
var inst_34106 = (state_34232[(22)]);
var inst_34115 = cljs.core.first.call(null,inst_34106);
var inst_34116 = figwheel.client.file_reloading.eval_body.call(null,inst_34115,opts);
var inst_34117 = cljs.core.next.call(null,inst_34106);
var inst_34093 = inst_34117;
var inst_34094 = null;
var inst_34095 = (0);
var inst_34096 = (0);
var state_34232__$1 = (function (){var statearr_34298 = state_34232;
(statearr_34298[(7)] = inst_34094);

(statearr_34298[(32)] = inst_34116);

(statearr_34298[(8)] = inst_34095);

(statearr_34298[(9)] = inst_34093);

(statearr_34298[(10)] = inst_34096);

return statearr_34298;
})();
var statearr_34299_34368 = state_34232__$1;
(statearr_34299_34368[(2)] = null);

(statearr_34299_34368[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (45))){
var state_34232__$1 = state_34232;
var statearr_34300_34369 = state_34232__$1;
(statearr_34300_34369[(2)] = null);

(statearr_34300_34369[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (26))){
var inst_34149 = (state_34232[(23)]);
var inst_34152 = (state_34232[(26)]);
var inst_34146 = (state_34232[(19)]);
var inst_34154 = (state_34232[(24)]);
var inst_34150 = (state_34232[(25)]);
var inst_34169 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34171 = (function (){var all_files = inst_34146;
var res_SINGLEQUOTE_ = inst_34149;
var res = inst_34150;
var files_not_loaded = inst_34152;
var dependencies_that_loaded = inst_34154;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34149,inst_34152,inst_34146,inst_34154,inst_34150,inst_34169,state_val_34233,c__30477__auto__,map__34078,map__34078__$1,opts,before_jsload,on_jsload,reload_dependents,map__34079,map__34079__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34170){
var map__34301 = p__34170;
var map__34301__$1 = ((((!((map__34301 == null)))?((((map__34301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34301):map__34301);
var namespace = cljs.core.get.call(null,map__34301__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34301__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34149,inst_34152,inst_34146,inst_34154,inst_34150,inst_34169,state_val_34233,c__30477__auto__,map__34078,map__34078__$1,opts,before_jsload,on_jsload,reload_dependents,map__34079,map__34079__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34172 = cljs.core.map.call(null,inst_34171,inst_34150);
var inst_34173 = cljs.core.pr_str.call(null,inst_34172);
var inst_34174 = figwheel.client.utils.log.call(null,inst_34173);
var inst_34175 = (function (){var all_files = inst_34146;
var res_SINGLEQUOTE_ = inst_34149;
var res = inst_34150;
var files_not_loaded = inst_34152;
var dependencies_that_loaded = inst_34154;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34149,inst_34152,inst_34146,inst_34154,inst_34150,inst_34169,inst_34171,inst_34172,inst_34173,inst_34174,state_val_34233,c__30477__auto__,map__34078,map__34078__$1,opts,before_jsload,on_jsload,reload_dependents,map__34079,map__34079__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34149,inst_34152,inst_34146,inst_34154,inst_34150,inst_34169,inst_34171,inst_34172,inst_34173,inst_34174,state_val_34233,c__30477__auto__,map__34078,map__34078__$1,opts,before_jsload,on_jsload,reload_dependents,map__34079,map__34079__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34176 = setTimeout(inst_34175,(10));
var state_34232__$1 = (function (){var statearr_34303 = state_34232;
(statearr_34303[(33)] = inst_34169);

(statearr_34303[(34)] = inst_34174);

return statearr_34303;
})();
var statearr_34304_34370 = state_34232__$1;
(statearr_34304_34370[(2)] = inst_34176);

(statearr_34304_34370[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (16))){
var state_34232__$1 = state_34232;
var statearr_34305_34371 = state_34232__$1;
(statearr_34305_34371[(2)] = reload_dependents);

(statearr_34305_34371[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (38))){
var inst_34186 = (state_34232[(16)]);
var inst_34203 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34186);
var state_34232__$1 = state_34232;
var statearr_34306_34372 = state_34232__$1;
(statearr_34306_34372[(2)] = inst_34203);

(statearr_34306_34372[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (30))){
var state_34232__$1 = state_34232;
var statearr_34307_34373 = state_34232__$1;
(statearr_34307_34373[(2)] = null);

(statearr_34307_34373[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (10))){
var inst_34106 = (state_34232[(22)]);
var inst_34108 = cljs.core.chunked_seq_QMARK_.call(null,inst_34106);
var state_34232__$1 = state_34232;
if(inst_34108){
var statearr_34308_34374 = state_34232__$1;
(statearr_34308_34374[(1)] = (13));

} else {
var statearr_34309_34375 = state_34232__$1;
(statearr_34309_34375[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (18))){
var inst_34140 = (state_34232[(2)]);
var state_34232__$1 = state_34232;
if(cljs.core.truth_(inst_34140)){
var statearr_34310_34376 = state_34232__$1;
(statearr_34310_34376[(1)] = (19));

} else {
var statearr_34311_34377 = state_34232__$1;
(statearr_34311_34377[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (42))){
var state_34232__$1 = state_34232;
var statearr_34312_34378 = state_34232__$1;
(statearr_34312_34378[(2)] = null);

(statearr_34312_34378[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (37))){
var inst_34198 = (state_34232[(2)]);
var state_34232__$1 = state_34232;
var statearr_34313_34379 = state_34232__$1;
(statearr_34313_34379[(2)] = inst_34198);

(statearr_34313_34379[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (8))){
var inst_34093 = (state_34232[(9)]);
var inst_34106 = (state_34232[(22)]);
var inst_34106__$1 = cljs.core.seq.call(null,inst_34093);
var state_34232__$1 = (function (){var statearr_34314 = state_34232;
(statearr_34314[(22)] = inst_34106__$1);

return statearr_34314;
})();
if(inst_34106__$1){
var statearr_34315_34380 = state_34232__$1;
(statearr_34315_34380[(1)] = (10));

} else {
var statearr_34316_34381 = state_34232__$1;
(statearr_34316_34381[(1)] = (11));

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
}
});})(c__30477__auto__,map__34078,map__34078__$1,opts,before_jsload,on_jsload,reload_dependents,map__34079,map__34079__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30365__auto__,c__30477__auto__,map__34078,map__34078__$1,opts,before_jsload,on_jsload,reload_dependents,map__34079,map__34079__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30366__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30366__auto____0 = (function (){
var statearr_34320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34320[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30366__auto__);

(statearr_34320[(1)] = (1));

return statearr_34320;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30366__auto____1 = (function (state_34232){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_34232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e34321){if((e34321 instanceof Object)){
var ex__30369__auto__ = e34321;
var statearr_34322_34382 = state_34232;
(statearr_34322_34382[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34383 = state_34232;
state_34232 = G__34383;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30366__auto__ = function(state_34232){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30366__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30366__auto____1.call(this,state_34232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30366__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30366__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30366__auto__;
})()
;})(switch__30365__auto__,c__30477__auto__,map__34078,map__34078__$1,opts,before_jsload,on_jsload,reload_dependents,map__34079,map__34079__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30479__auto__ = (function (){var statearr_34323 = f__30478__auto__.call(null);
(statearr_34323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto__);

return statearr_34323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(c__30477__auto__,map__34078,map__34078__$1,opts,before_jsload,on_jsload,reload_dependents,map__34079,map__34079__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30477__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34386,link){
var map__34389 = p__34386;
var map__34389__$1 = ((((!((map__34389 == null)))?((((map__34389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34389):map__34389);
var file = cljs.core.get.call(null,map__34389__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34389,map__34389__$1,file){
return (function (p1__34384_SHARP_,p2__34385_SHARP_){
if(cljs.core._EQ_.call(null,p1__34384_SHARP_,p2__34385_SHARP_)){
return p1__34384_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34389,map__34389__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34395){
var map__34396 = p__34395;
var map__34396__$1 = ((((!((map__34396 == null)))?((((map__34396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34396):map__34396);
var match_length = cljs.core.get.call(null,map__34396__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34396__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34391_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34391_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args34398 = [];
var len__25873__auto___34401 = arguments.length;
var i__25874__auto___34402 = (0);
while(true){
if((i__25874__auto___34402 < len__25873__auto___34401)){
args34398.push((arguments[i__25874__auto___34402]));

var G__34403 = (i__25874__auto___34402 + (1));
i__25874__auto___34402 = G__34403;
continue;
} else {
}
break;
}

var G__34400 = args34398.length;
switch (G__34400) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34398.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34405_SHARP_,p2__34406_SHARP_){
return cljs.core.assoc.call(null,p1__34405_SHARP_,cljs.core.get.call(null,p2__34406_SHARP_,key),p2__34406_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__34407){
var map__34410 = p__34407;
var map__34410__$1 = ((((!((map__34410 == null)))?((((map__34410.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34410.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34410):map__34410);
var f_data = map__34410__$1;
var file = cljs.core.get.call(null,map__34410__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34412,p__34413){
var map__34422 = p__34412;
var map__34422__$1 = ((((!((map__34422 == null)))?((((map__34422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34422):map__34422);
var opts = map__34422__$1;
var on_cssload = cljs.core.get.call(null,map__34422__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34423 = p__34413;
var map__34423__$1 = ((((!((map__34423 == null)))?((((map__34423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34423):map__34423);
var files_msg = map__34423__$1;
var files = cljs.core.get.call(null,map__34423__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__34426_34430 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__34427_34431 = null;
var count__34428_34432 = (0);
var i__34429_34433 = (0);
while(true){
if((i__34429_34433 < count__34428_34432)){
var f_34434 = cljs.core._nth.call(null,chunk__34427_34431,i__34429_34433);
figwheel.client.file_reloading.reload_css_file.call(null,f_34434);

var G__34435 = seq__34426_34430;
var G__34436 = chunk__34427_34431;
var G__34437 = count__34428_34432;
var G__34438 = (i__34429_34433 + (1));
seq__34426_34430 = G__34435;
chunk__34427_34431 = G__34436;
count__34428_34432 = G__34437;
i__34429_34433 = G__34438;
continue;
} else {
var temp__4657__auto___34439 = cljs.core.seq.call(null,seq__34426_34430);
if(temp__4657__auto___34439){
var seq__34426_34440__$1 = temp__4657__auto___34439;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34426_34440__$1)){
var c__25609__auto___34441 = cljs.core.chunk_first.call(null,seq__34426_34440__$1);
var G__34442 = cljs.core.chunk_rest.call(null,seq__34426_34440__$1);
var G__34443 = c__25609__auto___34441;
var G__34444 = cljs.core.count.call(null,c__25609__auto___34441);
var G__34445 = (0);
seq__34426_34430 = G__34442;
chunk__34427_34431 = G__34443;
count__34428_34432 = G__34444;
i__34429_34433 = G__34445;
continue;
} else {
var f_34446 = cljs.core.first.call(null,seq__34426_34440__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_34446);

var G__34447 = cljs.core.next.call(null,seq__34426_34440__$1);
var G__34448 = null;
var G__34449 = (0);
var G__34450 = (0);
seq__34426_34430 = G__34447;
chunk__34427_34431 = G__34448;
count__34428_34432 = G__34449;
i__34429_34433 = G__34450;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__34422,map__34422__$1,opts,on_cssload,map__34423,map__34423__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__34422,map__34422__$1,opts,on_cssload,map__34423,map__34423__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1485228958636