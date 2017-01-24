// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__25461__auto__ = (((value == null))?null:value);
var m__25462__auto__ = (devtools.format._header[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,value);
} else {
var m__25462__auto____$1 = (devtools.format._header["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__25461__auto__ = (((value == null))?null:value);
var m__25462__auto__ = (devtools.format._has_body[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,value);
} else {
var m__25462__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__25461__auto__ = (((value == null))?null:value);
var m__25462__auto__ = (devtools.format._body[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,value);
} else {
var m__25462__auto____$1 = (devtools.format._body["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37270__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37270__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37270__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37270__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37269__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37269__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37270__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37270__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37270__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37270__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37269__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37269__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37270__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37270__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37270__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37270__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37269__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37269__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37270__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37270__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37270__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37270__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37269__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37269__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37270__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37270__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37270__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37270__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37269__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37269__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37270__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37270__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37270__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37270__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37269__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37269__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37270__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37270__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37270__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37270__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37269__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37269__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__25880__auto__ = [];
var len__25873__auto___37291 = arguments.length;
var i__25874__auto___37292 = (0);
while(true){
if((i__25874__auto___37292 < len__25873__auto___37291)){
args__25880__auto__.push((arguments[i__25874__auto___37292]));

var G__37293 = (i__25874__auto___37292 + (1));
i__25874__auto___37292 = G__37293;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq37290){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37290));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__25880__auto__ = [];
var len__25873__auto___37295 = arguments.length;
var i__25874__auto___37296 = (0);
while(true){
if((i__25874__auto___37296 < len__25873__auto___37295)){
args__25880__auto__.push((arguments[i__25874__auto___37296]));

var G__37297 = (i__25874__auto___37296 + (1));
i__25874__auto___37296 = G__37297;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq37294){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37294));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__25880__auto__ = [];
var len__25873__auto___37299 = arguments.length;
var i__25874__auto___37300 = (0);
while(true){
if((i__25874__auto___37300 < len__25873__auto___37299)){
args__25880__auto__.push((arguments[i__25874__auto___37300]));

var G__37301 = (i__25874__auto___37300 + (1));
i__25874__auto___37300 = G__37301;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq37298){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37298));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__25880__auto__ = [];
var len__25873__auto___37303 = arguments.length;
var i__25874__auto___37304 = (0);
while(true){
if((i__25874__auto___37304 < len__25873__auto___37303)){
args__25880__auto__.push((arguments[i__25874__auto___37304]));

var G__37305 = (i__25874__auto___37304 + (1));
i__25874__auto___37304 = G__37305;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq37302){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37302));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__25880__auto__ = [];
var len__25873__auto___37307 = arguments.length;
var i__25874__auto___37308 = (0);
while(true){
if((i__25874__auto___37308 < len__25873__auto___37307)){
args__25880__auto__.push((arguments[i__25874__auto___37308]));

var G__37309 = (i__25874__auto___37308 + (1));
i__25874__auto___37308 = G__37309;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq37306){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37306));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__25880__auto__ = [];
var len__25873__auto___37311 = arguments.length;
var i__25874__auto___37312 = (0);
while(true){
if((i__25874__auto___37312 < len__25873__auto___37311)){
args__25880__auto__.push((arguments[i__25874__auto___37312]));

var G__37313 = (i__25874__auto___37312 + (1));
i__25874__auto___37312 = G__37313;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq37310){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37310));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__25880__auto__ = [];
var len__25873__auto___37315 = arguments.length;
var i__25874__auto___37316 = (0);
while(true){
if((i__25874__auto___37316 < len__25873__auto___37315)){
args__25880__auto__.push((arguments[i__25874__auto___37316]));

var G__37317 = (i__25874__auto___37316 + (1));
i__25874__auto___37316 = G__37317;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq37314){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37314));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__25880__auto__ = [];
var len__25873__auto___37325 = arguments.length;
var i__25874__auto___37326 = (0);
while(true){
if((i__25874__auto___37326 < len__25873__auto___37325)){
args__25880__auto__.push((arguments[i__25874__auto___37326]));

var G__37327 = (i__25874__auto___37326 + (1));
i__25874__auto___37326 = G__37327;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((1) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25881__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__37321){
var vec__37322 = p__37321;
var state_override = cljs.core.nth.call(null,vec__37322,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__37322,state_override){
return (function (p1__37318_SHARP_){
return cljs.core.merge.call(null,p1__37318_SHARP_,state_override);
});})(vec__37322,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq37319){
var G__37320 = cljs.core.first.call(null,seq37319);
var seq37319__$1 = cljs.core.next.call(null,seq37319);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__37320,seq37319__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__25880__auto__ = [];
var len__25873__auto___37329 = arguments.length;
var i__25874__auto___37330 = (0);
while(true){
if((i__25874__auto___37330 < len__25873__auto___37329)){
args__25880__auto__.push((arguments[i__25874__auto___37330]));

var G__37331 = (i__25874__auto___37330 + (1));
i__25874__auto___37330 = G__37331;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq37328){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37328));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__25880__auto__ = [];
var len__25873__auto___37334 = arguments.length;
var i__25874__auto___37335 = (0);
while(true){
if((i__25874__auto___37335 < len__25873__auto___37334)){
args__25880__auto__.push((arguments[i__25874__auto___37335]));

var G__37336 = (i__25874__auto___37335 + (1));
i__25874__auto___37335 = G__37336;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((1) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25881__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq37332){
var G__37333 = cljs.core.first.call(null,seq37332);
var seq37332__$1 = cljs.core.next.call(null,seq37332);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__37333,seq37332__$1);
});


//# sourceMappingURL=format.js.map?rel=1485228963856