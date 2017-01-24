// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x39754_39755 = value;
x39754_39755.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x39759_39760 = value;
x39759_39760.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x39764_39765 = value;
x39764_39765.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__24786__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__24786__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__24786__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__25880__auto__ = [];
var len__25873__auto___39773 = arguments.length;
var i__25874__auto___39774 = (0);
while(true){
if((i__25874__auto___39774 < len__25873__auto___39773)){
args__25880__auto__.push((arguments[i__25874__auto___39774]));

var G__39775 = (i__25874__auto___39774 + (1));
i__25874__auto___39774 = G__39775;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__39769_39776 = cljs.core.seq.call(null,items);
var chunk__39770_39777 = null;
var count__39771_39778 = (0);
var i__39772_39779 = (0);
while(true){
if((i__39772_39779 < count__39771_39778)){
var item_39780 = cljs.core._nth.call(null,chunk__39770_39777,i__39772_39779);
if(cljs.core.some_QMARK_.call(null,item_39780)){
if(cljs.core.coll_QMARK_.call(null,item_39780)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_39780)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_39780));
}
} else {
}

var G__39781 = seq__39769_39776;
var G__39782 = chunk__39770_39777;
var G__39783 = count__39771_39778;
var G__39784 = (i__39772_39779 + (1));
seq__39769_39776 = G__39781;
chunk__39770_39777 = G__39782;
count__39771_39778 = G__39783;
i__39772_39779 = G__39784;
continue;
} else {
var temp__4657__auto___39785 = cljs.core.seq.call(null,seq__39769_39776);
if(temp__4657__auto___39785){
var seq__39769_39786__$1 = temp__4657__auto___39785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39769_39786__$1)){
var c__25609__auto___39787 = cljs.core.chunk_first.call(null,seq__39769_39786__$1);
var G__39788 = cljs.core.chunk_rest.call(null,seq__39769_39786__$1);
var G__39789 = c__25609__auto___39787;
var G__39790 = cljs.core.count.call(null,c__25609__auto___39787);
var G__39791 = (0);
seq__39769_39776 = G__39788;
chunk__39770_39777 = G__39789;
count__39771_39778 = G__39790;
i__39772_39779 = G__39791;
continue;
} else {
var item_39792 = cljs.core.first.call(null,seq__39769_39786__$1);
if(cljs.core.some_QMARK_.call(null,item_39792)){
if(cljs.core.coll_QMARK_.call(null,item_39792)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_39792)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_39792));
}
} else {
}

var G__39793 = cljs.core.next.call(null,seq__39769_39786__$1);
var G__39794 = null;
var G__39795 = (0);
var G__39796 = (0);
seq__39769_39776 = G__39793;
chunk__39770_39777 = G__39794;
count__39771_39778 = G__39795;
i__39772_39779 = G__39796;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq39768){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39768));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__25880__auto__ = [];
var len__25873__auto___39804 = arguments.length;
var i__25874__auto___39805 = (0);
while(true){
if((i__25874__auto___39805 < len__25873__auto___39804)){
args__25880__auto__.push((arguments[i__25874__auto___39805]));

var G__39806 = (i__25874__auto___39805 + (1));
i__25874__auto___39805 = G__39806;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((2) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25881__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__39800_39807 = cljs.core.seq.call(null,children);
var chunk__39801_39808 = null;
var count__39802_39809 = (0);
var i__39803_39810 = (0);
while(true){
if((i__39803_39810 < count__39802_39809)){
var child_39811 = cljs.core._nth.call(null,chunk__39801_39808,i__39803_39810);
if(cljs.core.some_QMARK_.call(null,child_39811)){
if(cljs.core.coll_QMARK_.call(null,child_39811)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_39811))));
} else {
var temp__4655__auto___39812 = devtools.formatters.helpers.pref.call(null,child_39811);
if(cljs.core.truth_(temp__4655__auto___39812)){
var child_value_39813 = temp__4655__auto___39812;
template.push(child_value_39813);
} else {
}
}
} else {
}

var G__39814 = seq__39800_39807;
var G__39815 = chunk__39801_39808;
var G__39816 = count__39802_39809;
var G__39817 = (i__39803_39810 + (1));
seq__39800_39807 = G__39814;
chunk__39801_39808 = G__39815;
count__39802_39809 = G__39816;
i__39803_39810 = G__39817;
continue;
} else {
var temp__4657__auto___39818 = cljs.core.seq.call(null,seq__39800_39807);
if(temp__4657__auto___39818){
var seq__39800_39819__$1 = temp__4657__auto___39818;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39800_39819__$1)){
var c__25609__auto___39820 = cljs.core.chunk_first.call(null,seq__39800_39819__$1);
var G__39821 = cljs.core.chunk_rest.call(null,seq__39800_39819__$1);
var G__39822 = c__25609__auto___39820;
var G__39823 = cljs.core.count.call(null,c__25609__auto___39820);
var G__39824 = (0);
seq__39800_39807 = G__39821;
chunk__39801_39808 = G__39822;
count__39802_39809 = G__39823;
i__39803_39810 = G__39824;
continue;
} else {
var child_39825 = cljs.core.first.call(null,seq__39800_39819__$1);
if(cljs.core.some_QMARK_.call(null,child_39825)){
if(cljs.core.coll_QMARK_.call(null,child_39825)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_39825))));
} else {
var temp__4655__auto___39826 = devtools.formatters.helpers.pref.call(null,child_39825);
if(cljs.core.truth_(temp__4655__auto___39826)){
var child_value_39827 = temp__4655__auto___39826;
template.push(child_value_39827);
} else {
}
}
} else {
}

var G__39828 = cljs.core.next.call(null,seq__39800_39819__$1);
var G__39829 = null;
var G__39830 = (0);
var G__39831 = (0);
seq__39800_39807 = G__39828;
chunk__39801_39808 = G__39829;
count__39802_39809 = G__39830;
i__39803_39810 = G__39831;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq39797){
var G__39798 = cljs.core.first.call(null,seq39797);
var seq39797__$1 = cljs.core.next.call(null,seq39797);
var G__39799 = cljs.core.first.call(null,seq39797__$1);
var seq39797__$2 = cljs.core.next.call(null,seq39797__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__39798,G__39799,seq39797__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__25880__auto__ = [];
var len__25873__auto___39834 = arguments.length;
var i__25874__auto___39835 = (0);
while(true){
if((i__25874__auto___39835 < len__25873__auto___39834)){
args__25880__auto__.push((arguments[i__25874__auto___39835]));

var G__39836 = (i__25874__auto___39835 + (1));
i__25874__auto___39835 = G__39836;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((1) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25881__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq39832){
var G__39833 = cljs.core.first.call(null,seq39832);
var seq39832__$1 = cljs.core.next.call(null,seq39832);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39833,seq39832__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__25880__auto__ = [];
var len__25873__auto___39839 = arguments.length;
var i__25874__auto___39840 = (0);
while(true){
if((i__25874__auto___39840 < len__25873__auto___39839)){
args__25880__auto__.push((arguments[i__25874__auto___39840]));

var G__39841 = (i__25874__auto___39840 + (1));
i__25874__auto___39840 = G__39841;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((1) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25881__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq39837){
var G__39838 = cljs.core.first.call(null,seq39837);
var seq39837__$1 = cljs.core.next.call(null,seq39837);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39838,seq39837__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args39842 = [];
var len__25873__auto___39847 = arguments.length;
var i__25874__auto___39848 = (0);
while(true){
if((i__25874__auto___39848 < len__25873__auto___39847)){
args39842.push((arguments[i__25874__auto___39848]));

var G__39849 = (i__25874__auto___39848 + (1));
i__25874__auto___39848 = G__39849;
continue;
} else {
}
break;
}

var G__39844 = args39842.length;
switch (G__39844) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39842.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj39846 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__24798__auto__ = start_index;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return (0);
}
})()};
return obj39846;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__25880__auto__ = [];
var len__25873__auto___39857 = arguments.length;
var i__25874__auto___39858 = (0);
while(true){
if((i__25874__auto___39858 < len__25873__auto___39857)){
args__25880__auto__.push((arguments[i__25874__auto___39858]));

var G__39859 = (i__25874__auto___39858 + (1));
i__25874__auto___39858 = G__39859;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((1) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25881__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__39853){
var vec__39854 = p__39853;
var state_override_fn = cljs.core.nth.call(null,vec__39854,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq39851){
var G__39852 = cljs.core.first.call(null,seq39851);
var seq39851__$1 = cljs.core.next.call(null,seq39851);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__39852,seq39851__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__25784__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_39863_39866 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_39864_39867 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_39863_39866,_STAR_print_fn_STAR_39864_39867,sb__25784__auto__){
return (function (x__25785__auto__){
return sb__25784__auto__.append(x__25785__auto__);
});})(_STAR_print_newline_STAR_39863_39866,_STAR_print_fn_STAR_39864_39867,sb__25784__auto__))
;

try{var _STAR_print_level_STAR_39865_39868 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_39865_39868;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_39864_39867;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_39863_39866;
}
return [cljs.core.str(sb__25784__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_39870 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_39870;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__39872 = name;
switch (G__39872) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__39877 = tag;
var html_tag = cljs.core.nth.call(null,vec__39877,(0),null);
var style = cljs.core.nth.call(null,vec__39877,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_39881 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_39881;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_39884 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_39885 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_39885;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_39884;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__39886 = initial_value;
var G__39887 = value.call(null);
initial_value = G__39886;
value = G__39887;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__39888 = initial_value;
var G__39889 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__39888;
value = G__39889;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__39890 = initial_value;
var G__39891 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__39890;
value = G__39891;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1485228969379