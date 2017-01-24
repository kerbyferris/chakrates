// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args36321 = [];
var len__25873__auto___36324 = arguments.length;
var i__25874__auto___36325 = (0);
while(true){
if((i__25874__auto___36325 < len__25873__auto___36324)){
args36321.push((arguments[i__25874__auto___36325]));

var G__36326 = (i__25874__auto___36325 + (1));
i__25874__auto___36325 = G__36326;
continue;
} else {
}
break;
}

var G__36323 = args36321.length;
switch (G__36323) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36321.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25880__auto__ = [];
var len__25873__auto___36329 = arguments.length;
var i__25874__auto___36330 = (0);
while(true){
if((i__25874__auto___36330 < len__25873__auto___36329)){
args__25880__auto__.push((arguments[i__25874__auto___36330]));

var G__36331 = (i__25874__auto___36330 + (1));
i__25874__auto___36330 = G__36331;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36328){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36328));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25880__auto__ = [];
var len__25873__auto___36333 = arguments.length;
var i__25874__auto___36334 = (0);
while(true){
if((i__25874__auto___36334 < len__25873__auto___36333)){
args__25880__auto__.push((arguments[i__25874__auto___36334]));

var G__36335 = (i__25874__auto___36334 + (1));
i__25874__auto___36334 = G__36335;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36332){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36332));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__36336 = cljs.core._EQ_;
var expr__36337 = (function (){var or__24798__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e36340){if((e36340 instanceof Error)){
var e = e36340;
return false;
} else {
throw e36340;

}
}})();
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__36336.call(null,"true",expr__36337))){
return true;
} else {
if(cljs.core.truth_(pred__36336.call(null,"false",expr__36337))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__36337)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e36342){if((e36342 instanceof Error)){
var e = e36342;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e36342;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36343){
var map__36346 = p__36343;
var map__36346__$1 = ((((!((map__36346 == null)))?((((map__36346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36346):map__36346);
var message = cljs.core.get.call(null,map__36346__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36346__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24798__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24786__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24786__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24786__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__30477__auto___36508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30477__auto___36508,ch){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (c__30477__auto___36508,ch){
return (function (state_36477){
var state_val_36478 = (state_36477[(1)]);
if((state_val_36478 === (7))){
var inst_36473 = (state_36477[(2)]);
var state_36477__$1 = state_36477;
var statearr_36479_36509 = state_36477__$1;
(statearr_36479_36509[(2)] = inst_36473);

(statearr_36479_36509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36478 === (1))){
var state_36477__$1 = state_36477;
var statearr_36480_36510 = state_36477__$1;
(statearr_36480_36510[(2)] = null);

(statearr_36480_36510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36478 === (4))){
var inst_36430 = (state_36477[(7)]);
var inst_36430__$1 = (state_36477[(2)]);
var state_36477__$1 = (function (){var statearr_36481 = state_36477;
(statearr_36481[(7)] = inst_36430__$1);

return statearr_36481;
})();
if(cljs.core.truth_(inst_36430__$1)){
var statearr_36482_36511 = state_36477__$1;
(statearr_36482_36511[(1)] = (5));

} else {
var statearr_36483_36512 = state_36477__$1;
(statearr_36483_36512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36478 === (15))){
var inst_36437 = (state_36477[(8)]);
var inst_36452 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36437);
var inst_36453 = cljs.core.first.call(null,inst_36452);
var inst_36454 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36453);
var inst_36455 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_36454)].join('');
var inst_36456 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36455);
var state_36477__$1 = state_36477;
var statearr_36484_36513 = state_36477__$1;
(statearr_36484_36513[(2)] = inst_36456);

(statearr_36484_36513[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36478 === (13))){
var inst_36461 = (state_36477[(2)]);
var state_36477__$1 = state_36477;
var statearr_36485_36514 = state_36477__$1;
(statearr_36485_36514[(2)] = inst_36461);

(statearr_36485_36514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36478 === (6))){
var state_36477__$1 = state_36477;
var statearr_36486_36515 = state_36477__$1;
(statearr_36486_36515[(2)] = null);

(statearr_36486_36515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36478 === (17))){
var inst_36459 = (state_36477[(2)]);
var state_36477__$1 = state_36477;
var statearr_36487_36516 = state_36477__$1;
(statearr_36487_36516[(2)] = inst_36459);

(statearr_36487_36516[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36478 === (3))){
var inst_36475 = (state_36477[(2)]);
var state_36477__$1 = state_36477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36477__$1,inst_36475);
} else {
if((state_val_36478 === (12))){
var inst_36436 = (state_36477[(9)]);
var inst_36450 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36436,opts);
var state_36477__$1 = state_36477;
if(cljs.core.truth_(inst_36450)){
var statearr_36488_36517 = state_36477__$1;
(statearr_36488_36517[(1)] = (15));

} else {
var statearr_36489_36518 = state_36477__$1;
(statearr_36489_36518[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36478 === (2))){
var state_36477__$1 = state_36477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36477__$1,(4),ch);
} else {
if((state_val_36478 === (11))){
var inst_36437 = (state_36477[(8)]);
var inst_36442 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36443 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36437);
var inst_36444 = cljs.core.async.timeout.call(null,(1000));
var inst_36445 = [inst_36443,inst_36444];
var inst_36446 = (new cljs.core.PersistentVector(null,2,(5),inst_36442,inst_36445,null));
var state_36477__$1 = state_36477;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36477__$1,(14),inst_36446);
} else {
if((state_val_36478 === (9))){
var inst_36437 = (state_36477[(8)]);
var inst_36463 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36464 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36437);
var inst_36465 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36464);
var inst_36466 = [cljs.core.str("Not loading: "),cljs.core.str(inst_36465)].join('');
var inst_36467 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36466);
var state_36477__$1 = (function (){var statearr_36490 = state_36477;
(statearr_36490[(10)] = inst_36463);

return statearr_36490;
})();
var statearr_36491_36519 = state_36477__$1;
(statearr_36491_36519[(2)] = inst_36467);

(statearr_36491_36519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36478 === (5))){
var inst_36430 = (state_36477[(7)]);
var inst_36432 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36433 = (new cljs.core.PersistentArrayMap(null,2,inst_36432,null));
var inst_36434 = (new cljs.core.PersistentHashSet(null,inst_36433,null));
var inst_36435 = figwheel.client.focus_msgs.call(null,inst_36434,inst_36430);
var inst_36436 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36435);
var inst_36437 = cljs.core.first.call(null,inst_36435);
var inst_36438 = figwheel.client.autoload_QMARK_.call(null);
var state_36477__$1 = (function (){var statearr_36492 = state_36477;
(statearr_36492[(9)] = inst_36436);

(statearr_36492[(8)] = inst_36437);

return statearr_36492;
})();
if(cljs.core.truth_(inst_36438)){
var statearr_36493_36520 = state_36477__$1;
(statearr_36493_36520[(1)] = (8));

} else {
var statearr_36494_36521 = state_36477__$1;
(statearr_36494_36521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36478 === (14))){
var inst_36448 = (state_36477[(2)]);
var state_36477__$1 = state_36477;
var statearr_36495_36522 = state_36477__$1;
(statearr_36495_36522[(2)] = inst_36448);

(statearr_36495_36522[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36478 === (16))){
var state_36477__$1 = state_36477;
var statearr_36496_36523 = state_36477__$1;
(statearr_36496_36523[(2)] = null);

(statearr_36496_36523[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36478 === (10))){
var inst_36469 = (state_36477[(2)]);
var state_36477__$1 = (function (){var statearr_36497 = state_36477;
(statearr_36497[(11)] = inst_36469);

return statearr_36497;
})();
var statearr_36498_36524 = state_36477__$1;
(statearr_36498_36524[(2)] = null);

(statearr_36498_36524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36478 === (8))){
var inst_36436 = (state_36477[(9)]);
var inst_36440 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36436,opts);
var state_36477__$1 = state_36477;
if(cljs.core.truth_(inst_36440)){
var statearr_36499_36525 = state_36477__$1;
(statearr_36499_36525[(1)] = (11));

} else {
var statearr_36500_36526 = state_36477__$1;
(statearr_36500_36526[(1)] = (12));

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
});})(c__30477__auto___36508,ch))
;
return ((function (switch__30365__auto__,c__30477__auto___36508,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30366__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30366__auto____0 = (function (){
var statearr_36504 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36504[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30366__auto__);

(statearr_36504[(1)] = (1));

return statearr_36504;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30366__auto____1 = (function (state_36477){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_36477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e36505){if((e36505 instanceof Object)){
var ex__30369__auto__ = e36505;
var statearr_36506_36527 = state_36477;
(statearr_36506_36527[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36528 = state_36477;
state_36477 = G__36528;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30366__auto__ = function(state_36477){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30366__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30366__auto____1.call(this,state_36477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30366__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30366__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30366__auto__;
})()
;})(switch__30365__auto__,c__30477__auto___36508,ch))
})();
var state__30479__auto__ = (function (){var statearr_36507 = f__30478__auto__.call(null);
(statearr_36507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto___36508);

return statearr_36507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(c__30477__auto___36508,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36529_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36529_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36532 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36532){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36531){if((e36531 instanceof Error)){
var e = e36531;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36532], null));
} else {
var e = e36531;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36532))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36533){
var map__36542 = p__36533;
var map__36542__$1 = ((((!((map__36542 == null)))?((((map__36542.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36542.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36542):map__36542);
var opts = map__36542__$1;
var build_id = cljs.core.get.call(null,map__36542__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36542,map__36542__$1,opts,build_id){
return (function (p__36544){
var vec__36545 = p__36544;
var seq__36546 = cljs.core.seq.call(null,vec__36545);
var first__36547 = cljs.core.first.call(null,seq__36546);
var seq__36546__$1 = cljs.core.next.call(null,seq__36546);
var map__36548 = first__36547;
var map__36548__$1 = ((((!((map__36548 == null)))?((((map__36548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36548):map__36548);
var msg = map__36548__$1;
var msg_name = cljs.core.get.call(null,map__36548__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36546__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36545,seq__36546,first__36547,seq__36546__$1,map__36548,map__36548__$1,msg,msg_name,_,map__36542,map__36542__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36545,seq__36546,first__36547,seq__36546__$1,map__36548,map__36548__$1,msg,msg_name,_,map__36542,map__36542__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36542,map__36542__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36556){
var vec__36557 = p__36556;
var seq__36558 = cljs.core.seq.call(null,vec__36557);
var first__36559 = cljs.core.first.call(null,seq__36558);
var seq__36558__$1 = cljs.core.next.call(null,seq__36558);
var map__36560 = first__36559;
var map__36560__$1 = ((((!((map__36560 == null)))?((((map__36560.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36560.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36560):map__36560);
var msg = map__36560__$1;
var msg_name = cljs.core.get.call(null,map__36560__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36558__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36562){
var map__36574 = p__36562;
var map__36574__$1 = ((((!((map__36574 == null)))?((((map__36574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36574):map__36574);
var on_compile_warning = cljs.core.get.call(null,map__36574__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36574__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36574,map__36574__$1,on_compile_warning,on_compile_fail){
return (function (p__36576){
var vec__36577 = p__36576;
var seq__36578 = cljs.core.seq.call(null,vec__36577);
var first__36579 = cljs.core.first.call(null,seq__36578);
var seq__36578__$1 = cljs.core.next.call(null,seq__36578);
var map__36580 = first__36579;
var map__36580__$1 = ((((!((map__36580 == null)))?((((map__36580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36580):map__36580);
var msg = map__36580__$1;
var msg_name = cljs.core.get.call(null,map__36580__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36578__$1;
var pred__36582 = cljs.core._EQ_;
var expr__36583 = msg_name;
if(cljs.core.truth_(pred__36582.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36583))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36582.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36583))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36574,map__36574__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30477__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30477__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (c__30477__auto__,msg_hist,msg_names,msg){
return (function (state_36811){
var state_val_36812 = (state_36811[(1)]);
if((state_val_36812 === (7))){
var inst_36731 = (state_36811[(2)]);
var state_36811__$1 = state_36811;
if(cljs.core.truth_(inst_36731)){
var statearr_36813_36863 = state_36811__$1;
(statearr_36813_36863[(1)] = (8));

} else {
var statearr_36814_36864 = state_36811__$1;
(statearr_36814_36864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (20))){
var inst_36805 = (state_36811[(2)]);
var state_36811__$1 = state_36811;
var statearr_36815_36865 = state_36811__$1;
(statearr_36815_36865[(2)] = inst_36805);

(statearr_36815_36865[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (27))){
var inst_36801 = (state_36811[(2)]);
var state_36811__$1 = state_36811;
var statearr_36816_36866 = state_36811__$1;
(statearr_36816_36866[(2)] = inst_36801);

(statearr_36816_36866[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (1))){
var inst_36724 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36811__$1 = state_36811;
if(cljs.core.truth_(inst_36724)){
var statearr_36817_36867 = state_36811__$1;
(statearr_36817_36867[(1)] = (2));

} else {
var statearr_36818_36868 = state_36811__$1;
(statearr_36818_36868[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (24))){
var inst_36803 = (state_36811[(2)]);
var state_36811__$1 = state_36811;
var statearr_36819_36869 = state_36811__$1;
(statearr_36819_36869[(2)] = inst_36803);

(statearr_36819_36869[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (4))){
var inst_36809 = (state_36811[(2)]);
var state_36811__$1 = state_36811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36811__$1,inst_36809);
} else {
if((state_val_36812 === (15))){
var inst_36807 = (state_36811[(2)]);
var state_36811__$1 = state_36811;
var statearr_36820_36870 = state_36811__$1;
(statearr_36820_36870[(2)] = inst_36807);

(statearr_36820_36870[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (21))){
var inst_36760 = (state_36811[(2)]);
var inst_36761 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36762 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36761);
var state_36811__$1 = (function (){var statearr_36821 = state_36811;
(statearr_36821[(7)] = inst_36760);

return statearr_36821;
})();
var statearr_36822_36871 = state_36811__$1;
(statearr_36822_36871[(2)] = inst_36762);

(statearr_36822_36871[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (31))){
var inst_36790 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36811__$1 = state_36811;
if(cljs.core.truth_(inst_36790)){
var statearr_36823_36872 = state_36811__$1;
(statearr_36823_36872[(1)] = (34));

} else {
var statearr_36824_36873 = state_36811__$1;
(statearr_36824_36873[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (32))){
var inst_36799 = (state_36811[(2)]);
var state_36811__$1 = state_36811;
var statearr_36825_36874 = state_36811__$1;
(statearr_36825_36874[(2)] = inst_36799);

(statearr_36825_36874[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (33))){
var inst_36786 = (state_36811[(2)]);
var inst_36787 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36788 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36787);
var state_36811__$1 = (function (){var statearr_36826 = state_36811;
(statearr_36826[(8)] = inst_36786);

return statearr_36826;
})();
var statearr_36827_36875 = state_36811__$1;
(statearr_36827_36875[(2)] = inst_36788);

(statearr_36827_36875[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (13))){
var inst_36745 = figwheel.client.heads_up.clear.call(null);
var state_36811__$1 = state_36811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36811__$1,(16),inst_36745);
} else {
if((state_val_36812 === (22))){
var inst_36766 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36767 = figwheel.client.heads_up.append_warning_message.call(null,inst_36766);
var state_36811__$1 = state_36811;
var statearr_36828_36876 = state_36811__$1;
(statearr_36828_36876[(2)] = inst_36767);

(statearr_36828_36876[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (36))){
var inst_36797 = (state_36811[(2)]);
var state_36811__$1 = state_36811;
var statearr_36829_36877 = state_36811__$1;
(statearr_36829_36877[(2)] = inst_36797);

(statearr_36829_36877[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (29))){
var inst_36777 = (state_36811[(2)]);
var inst_36778 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36779 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36778);
var state_36811__$1 = (function (){var statearr_36830 = state_36811;
(statearr_36830[(9)] = inst_36777);

return statearr_36830;
})();
var statearr_36831_36878 = state_36811__$1;
(statearr_36831_36878[(2)] = inst_36779);

(statearr_36831_36878[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (6))){
var inst_36726 = (state_36811[(10)]);
var state_36811__$1 = state_36811;
var statearr_36832_36879 = state_36811__$1;
(statearr_36832_36879[(2)] = inst_36726);

(statearr_36832_36879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (28))){
var inst_36773 = (state_36811[(2)]);
var inst_36774 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36775 = figwheel.client.heads_up.display_warning.call(null,inst_36774);
var state_36811__$1 = (function (){var statearr_36833 = state_36811;
(statearr_36833[(11)] = inst_36773);

return statearr_36833;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36811__$1,(29),inst_36775);
} else {
if((state_val_36812 === (25))){
var inst_36771 = figwheel.client.heads_up.clear.call(null);
var state_36811__$1 = state_36811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36811__$1,(28),inst_36771);
} else {
if((state_val_36812 === (34))){
var inst_36792 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36811__$1 = state_36811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36811__$1,(37),inst_36792);
} else {
if((state_val_36812 === (17))){
var inst_36751 = (state_36811[(2)]);
var inst_36752 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36753 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36752);
var state_36811__$1 = (function (){var statearr_36834 = state_36811;
(statearr_36834[(12)] = inst_36751);

return statearr_36834;
})();
var statearr_36835_36880 = state_36811__$1;
(statearr_36835_36880[(2)] = inst_36753);

(statearr_36835_36880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (3))){
var inst_36743 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36811__$1 = state_36811;
if(cljs.core.truth_(inst_36743)){
var statearr_36836_36881 = state_36811__$1;
(statearr_36836_36881[(1)] = (13));

} else {
var statearr_36837_36882 = state_36811__$1;
(statearr_36837_36882[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (12))){
var inst_36739 = (state_36811[(2)]);
var state_36811__$1 = state_36811;
var statearr_36838_36883 = state_36811__$1;
(statearr_36838_36883[(2)] = inst_36739);

(statearr_36838_36883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (2))){
var inst_36726 = (state_36811[(10)]);
var inst_36726__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36811__$1 = (function (){var statearr_36839 = state_36811;
(statearr_36839[(10)] = inst_36726__$1);

return statearr_36839;
})();
if(cljs.core.truth_(inst_36726__$1)){
var statearr_36840_36884 = state_36811__$1;
(statearr_36840_36884[(1)] = (5));

} else {
var statearr_36841_36885 = state_36811__$1;
(statearr_36841_36885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (23))){
var inst_36769 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36811__$1 = state_36811;
if(cljs.core.truth_(inst_36769)){
var statearr_36842_36886 = state_36811__$1;
(statearr_36842_36886[(1)] = (25));

} else {
var statearr_36843_36887 = state_36811__$1;
(statearr_36843_36887[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (35))){
var state_36811__$1 = state_36811;
var statearr_36844_36888 = state_36811__$1;
(statearr_36844_36888[(2)] = null);

(statearr_36844_36888[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (19))){
var inst_36764 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36811__$1 = state_36811;
if(cljs.core.truth_(inst_36764)){
var statearr_36845_36889 = state_36811__$1;
(statearr_36845_36889[(1)] = (22));

} else {
var statearr_36846_36890 = state_36811__$1;
(statearr_36846_36890[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (11))){
var inst_36735 = (state_36811[(2)]);
var state_36811__$1 = state_36811;
var statearr_36847_36891 = state_36811__$1;
(statearr_36847_36891[(2)] = inst_36735);

(statearr_36847_36891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (9))){
var inst_36737 = figwheel.client.heads_up.clear.call(null);
var state_36811__$1 = state_36811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36811__$1,(12),inst_36737);
} else {
if((state_val_36812 === (5))){
var inst_36728 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36811__$1 = state_36811;
var statearr_36848_36892 = state_36811__$1;
(statearr_36848_36892[(2)] = inst_36728);

(statearr_36848_36892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (14))){
var inst_36755 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36811__$1 = state_36811;
if(cljs.core.truth_(inst_36755)){
var statearr_36849_36893 = state_36811__$1;
(statearr_36849_36893[(1)] = (18));

} else {
var statearr_36850_36894 = state_36811__$1;
(statearr_36850_36894[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (26))){
var inst_36781 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36811__$1 = state_36811;
if(cljs.core.truth_(inst_36781)){
var statearr_36851_36895 = state_36811__$1;
(statearr_36851_36895[(1)] = (30));

} else {
var statearr_36852_36896 = state_36811__$1;
(statearr_36852_36896[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (16))){
var inst_36747 = (state_36811[(2)]);
var inst_36748 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36749 = figwheel.client.heads_up.display_exception.call(null,inst_36748);
var state_36811__$1 = (function (){var statearr_36853 = state_36811;
(statearr_36853[(13)] = inst_36747);

return statearr_36853;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36811__$1,(17),inst_36749);
} else {
if((state_val_36812 === (30))){
var inst_36783 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36784 = figwheel.client.heads_up.display_warning.call(null,inst_36783);
var state_36811__$1 = state_36811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36811__$1,(33),inst_36784);
} else {
if((state_val_36812 === (10))){
var inst_36741 = (state_36811[(2)]);
var state_36811__$1 = state_36811;
var statearr_36854_36897 = state_36811__$1;
(statearr_36854_36897[(2)] = inst_36741);

(statearr_36854_36897[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (18))){
var inst_36757 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36758 = figwheel.client.heads_up.display_exception.call(null,inst_36757);
var state_36811__$1 = state_36811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36811__$1,(21),inst_36758);
} else {
if((state_val_36812 === (37))){
var inst_36794 = (state_36811[(2)]);
var state_36811__$1 = state_36811;
var statearr_36855_36898 = state_36811__$1;
(statearr_36855_36898[(2)] = inst_36794);

(statearr_36855_36898[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (8))){
var inst_36733 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36811__$1 = state_36811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36811__$1,(11),inst_36733);
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
});})(c__30477__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30365__auto__,c__30477__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30366__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30366__auto____0 = (function (){
var statearr_36859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36859[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30366__auto__);

(statearr_36859[(1)] = (1));

return statearr_36859;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30366__auto____1 = (function (state_36811){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_36811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e36860){if((e36860 instanceof Object)){
var ex__30369__auto__ = e36860;
var statearr_36861_36899 = state_36811;
(statearr_36861_36899[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36900 = state_36811;
state_36811 = G__36900;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30366__auto__ = function(state_36811){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30366__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30366__auto____1.call(this,state_36811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30366__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30366__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30366__auto__;
})()
;})(switch__30365__auto__,c__30477__auto__,msg_hist,msg_names,msg))
})();
var state__30479__auto__ = (function (){var statearr_36862 = f__30478__auto__.call(null);
(statearr_36862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto__);

return statearr_36862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(c__30477__auto__,msg_hist,msg_names,msg))
);

return c__30477__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30477__auto___36963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30477__auto___36963,ch){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (c__30477__auto___36963,ch){
return (function (state_36946){
var state_val_36947 = (state_36946[(1)]);
if((state_val_36947 === (1))){
var state_36946__$1 = state_36946;
var statearr_36948_36964 = state_36946__$1;
(statearr_36948_36964[(2)] = null);

(statearr_36948_36964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36947 === (2))){
var state_36946__$1 = state_36946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36946__$1,(4),ch);
} else {
if((state_val_36947 === (3))){
var inst_36944 = (state_36946[(2)]);
var state_36946__$1 = state_36946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36946__$1,inst_36944);
} else {
if((state_val_36947 === (4))){
var inst_36934 = (state_36946[(7)]);
var inst_36934__$1 = (state_36946[(2)]);
var state_36946__$1 = (function (){var statearr_36949 = state_36946;
(statearr_36949[(7)] = inst_36934__$1);

return statearr_36949;
})();
if(cljs.core.truth_(inst_36934__$1)){
var statearr_36950_36965 = state_36946__$1;
(statearr_36950_36965[(1)] = (5));

} else {
var statearr_36951_36966 = state_36946__$1;
(statearr_36951_36966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36947 === (5))){
var inst_36934 = (state_36946[(7)]);
var inst_36936 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36934);
var state_36946__$1 = state_36946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36946__$1,(8),inst_36936);
} else {
if((state_val_36947 === (6))){
var state_36946__$1 = state_36946;
var statearr_36952_36967 = state_36946__$1;
(statearr_36952_36967[(2)] = null);

(statearr_36952_36967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36947 === (7))){
var inst_36942 = (state_36946[(2)]);
var state_36946__$1 = state_36946;
var statearr_36953_36968 = state_36946__$1;
(statearr_36953_36968[(2)] = inst_36942);

(statearr_36953_36968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36947 === (8))){
var inst_36938 = (state_36946[(2)]);
var state_36946__$1 = (function (){var statearr_36954 = state_36946;
(statearr_36954[(8)] = inst_36938);

return statearr_36954;
})();
var statearr_36955_36969 = state_36946__$1;
(statearr_36955_36969[(2)] = null);

(statearr_36955_36969[(1)] = (2));


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
});})(c__30477__auto___36963,ch))
;
return ((function (switch__30365__auto__,c__30477__auto___36963,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30366__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30366__auto____0 = (function (){
var statearr_36959 = [null,null,null,null,null,null,null,null,null];
(statearr_36959[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30366__auto__);

(statearr_36959[(1)] = (1));

return statearr_36959;
});
var figwheel$client$heads_up_plugin_$_state_machine__30366__auto____1 = (function (state_36946){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_36946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e36960){if((e36960 instanceof Object)){
var ex__30369__auto__ = e36960;
var statearr_36961_36970 = state_36946;
(statearr_36961_36970[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36971 = state_36946;
state_36946 = G__36971;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30366__auto__ = function(state_36946){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30366__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30366__auto____1.call(this,state_36946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30366__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30366__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30366__auto__;
})()
;})(switch__30365__auto__,c__30477__auto___36963,ch))
})();
var state__30479__auto__ = (function (){var statearr_36962 = f__30478__auto__.call(null);
(statearr_36962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto___36963);

return statearr_36962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(c__30477__auto___36963,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30477__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30477__auto__){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (c__30477__auto__){
return (function (state_36992){
var state_val_36993 = (state_36992[(1)]);
if((state_val_36993 === (1))){
var inst_36987 = cljs.core.async.timeout.call(null,(3000));
var state_36992__$1 = state_36992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36992__$1,(2),inst_36987);
} else {
if((state_val_36993 === (2))){
var inst_36989 = (state_36992[(2)]);
var inst_36990 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36992__$1 = (function (){var statearr_36994 = state_36992;
(statearr_36994[(7)] = inst_36989);

return statearr_36994;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36992__$1,inst_36990);
} else {
return null;
}
}
});})(c__30477__auto__))
;
return ((function (switch__30365__auto__,c__30477__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30366__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30366__auto____0 = (function (){
var statearr_36998 = [null,null,null,null,null,null,null,null];
(statearr_36998[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30366__auto__);

(statearr_36998[(1)] = (1));

return statearr_36998;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30366__auto____1 = (function (state_36992){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_36992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e36999){if((e36999 instanceof Object)){
var ex__30369__auto__ = e36999;
var statearr_37000_37002 = state_36992;
(statearr_37000_37002[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37003 = state_36992;
state_36992 = G__37003;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30366__auto__ = function(state_36992){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30366__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30366__auto____1.call(this,state_36992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30366__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30366__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30366__auto__;
})()
;})(switch__30365__auto__,c__30477__auto__))
})();
var state__30479__auto__ = (function (){var statearr_37001 = f__30478__auto__.call(null);
(statearr_37001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto__);

return statearr_37001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(c__30477__auto__))
);

return c__30477__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30477__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30477__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (c__30477__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37026){
var state_val_37027 = (state_37026[(1)]);
if((state_val_37027 === (1))){
var inst_37020 = cljs.core.async.timeout.call(null,(2000));
var state_37026__$1 = state_37026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37026__$1,(2),inst_37020);
} else {
if((state_val_37027 === (2))){
var inst_37022 = (state_37026[(2)]);
var inst_37023 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37024 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37023);
var state_37026__$1 = (function (){var statearr_37028 = state_37026;
(statearr_37028[(7)] = inst_37022);

return statearr_37028;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37026__$1,inst_37024);
} else {
return null;
}
}
});})(c__30477__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__30365__auto__,c__30477__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30366__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30366__auto____0 = (function (){
var statearr_37032 = [null,null,null,null,null,null,null,null];
(statearr_37032[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30366__auto__);

(statearr_37032[(1)] = (1));

return statearr_37032;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30366__auto____1 = (function (state_37026){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_37026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e37033){if((e37033 instanceof Object)){
var ex__30369__auto__ = e37033;
var statearr_37034_37036 = state_37026;
(statearr_37034_37036[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37037 = state_37026;
state_37026 = G__37037;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30366__auto__ = function(state_37026){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30366__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30366__auto____1.call(this,state_37026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30366__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30366__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30366__auto__;
})()
;})(switch__30365__auto__,c__30477__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30479__auto__ = (function (){var statearr_37035 = f__30478__auto__.call(null);
(statearr_37035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto__);

return statearr_37035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(c__30477__auto__,figwheel_version,temp__4657__auto__))
);

return c__30477__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37038){
var map__37042 = p__37038;
var map__37042__$1 = ((((!((map__37042 == null)))?((((map__37042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37042):map__37042);
var file = cljs.core.get.call(null,map__37042__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37042__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37042__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37044 = "";
var G__37044__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__37044),cljs.core.str("file "),cljs.core.str(file)].join(''):G__37044);
var G__37044__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__37044__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__37044__$1);
if(cljs.core.truth_((function (){var and__24786__auto__ = line;
if(cljs.core.truth_(and__24786__auto__)){
return column;
} else {
return and__24786__auto__;
}
})())){
return [cljs.core.str(G__37044__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__37044__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37045){
var map__37052 = p__37045;
var map__37052__$1 = ((((!((map__37052 == null)))?((((map__37052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37052):map__37052);
var ed = map__37052__$1;
var formatted_exception = cljs.core.get.call(null,map__37052__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37052__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37052__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37054_37058 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37055_37059 = null;
var count__37056_37060 = (0);
var i__37057_37061 = (0);
while(true){
if((i__37057_37061 < count__37056_37060)){
var msg_37062 = cljs.core._nth.call(null,chunk__37055_37059,i__37057_37061);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37062);

var G__37063 = seq__37054_37058;
var G__37064 = chunk__37055_37059;
var G__37065 = count__37056_37060;
var G__37066 = (i__37057_37061 + (1));
seq__37054_37058 = G__37063;
chunk__37055_37059 = G__37064;
count__37056_37060 = G__37065;
i__37057_37061 = G__37066;
continue;
} else {
var temp__4657__auto___37067 = cljs.core.seq.call(null,seq__37054_37058);
if(temp__4657__auto___37067){
var seq__37054_37068__$1 = temp__4657__auto___37067;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37054_37068__$1)){
var c__25609__auto___37069 = cljs.core.chunk_first.call(null,seq__37054_37068__$1);
var G__37070 = cljs.core.chunk_rest.call(null,seq__37054_37068__$1);
var G__37071 = c__25609__auto___37069;
var G__37072 = cljs.core.count.call(null,c__25609__auto___37069);
var G__37073 = (0);
seq__37054_37058 = G__37070;
chunk__37055_37059 = G__37071;
count__37056_37060 = G__37072;
i__37057_37061 = G__37073;
continue;
} else {
var msg_37074 = cljs.core.first.call(null,seq__37054_37068__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37074);

var G__37075 = cljs.core.next.call(null,seq__37054_37068__$1);
var G__37076 = null;
var G__37077 = (0);
var G__37078 = (0);
seq__37054_37058 = G__37075;
chunk__37055_37059 = G__37076;
count__37056_37060 = G__37077;
i__37057_37061 = G__37078;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37079){
var map__37082 = p__37079;
var map__37082__$1 = ((((!((map__37082 == null)))?((((map__37082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37082):map__37082);
var w = map__37082__$1;
var message = cljs.core.get.call(null,map__37082__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24786__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24786__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24786__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37094 = cljs.core.seq.call(null,plugins);
var chunk__37095 = null;
var count__37096 = (0);
var i__37097 = (0);
while(true){
if((i__37097 < count__37096)){
var vec__37098 = cljs.core._nth.call(null,chunk__37095,i__37097);
var k = cljs.core.nth.call(null,vec__37098,(0),null);
var plugin = cljs.core.nth.call(null,vec__37098,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37104 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37094,chunk__37095,count__37096,i__37097,pl_37104,vec__37098,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37104.call(null,msg_hist);
});})(seq__37094,chunk__37095,count__37096,i__37097,pl_37104,vec__37098,k,plugin))
);
} else {
}

var G__37105 = seq__37094;
var G__37106 = chunk__37095;
var G__37107 = count__37096;
var G__37108 = (i__37097 + (1));
seq__37094 = G__37105;
chunk__37095 = G__37106;
count__37096 = G__37107;
i__37097 = G__37108;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37094);
if(temp__4657__auto__){
var seq__37094__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37094__$1)){
var c__25609__auto__ = cljs.core.chunk_first.call(null,seq__37094__$1);
var G__37109 = cljs.core.chunk_rest.call(null,seq__37094__$1);
var G__37110 = c__25609__auto__;
var G__37111 = cljs.core.count.call(null,c__25609__auto__);
var G__37112 = (0);
seq__37094 = G__37109;
chunk__37095 = G__37110;
count__37096 = G__37111;
i__37097 = G__37112;
continue;
} else {
var vec__37101 = cljs.core.first.call(null,seq__37094__$1);
var k = cljs.core.nth.call(null,vec__37101,(0),null);
var plugin = cljs.core.nth.call(null,vec__37101,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37113 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37094,chunk__37095,count__37096,i__37097,pl_37113,vec__37101,k,plugin,seq__37094__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37113.call(null,msg_hist);
});})(seq__37094,chunk__37095,count__37096,i__37097,pl_37113,vec__37101,k,plugin,seq__37094__$1,temp__4657__auto__))
);
} else {
}

var G__37114 = cljs.core.next.call(null,seq__37094__$1);
var G__37115 = null;
var G__37116 = (0);
var G__37117 = (0);
seq__37094 = G__37114;
chunk__37095 = G__37115;
count__37096 = G__37116;
i__37097 = G__37117;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args37118 = [];
var len__25873__auto___37125 = arguments.length;
var i__25874__auto___37126 = (0);
while(true){
if((i__25874__auto___37126 < len__25873__auto___37125)){
args37118.push((arguments[i__25874__auto___37126]));

var G__37127 = (i__25874__auto___37126 + (1));
i__25874__auto___37126 = G__37127;
continue;
} else {
}
break;
}

var G__37120 = args37118.length;
switch (G__37120) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37118.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37121_37129 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37122_37130 = null;
var count__37123_37131 = (0);
var i__37124_37132 = (0);
while(true){
if((i__37124_37132 < count__37123_37131)){
var msg_37133 = cljs.core._nth.call(null,chunk__37122_37130,i__37124_37132);
figwheel.client.socket.handle_incoming_message.call(null,msg_37133);

var G__37134 = seq__37121_37129;
var G__37135 = chunk__37122_37130;
var G__37136 = count__37123_37131;
var G__37137 = (i__37124_37132 + (1));
seq__37121_37129 = G__37134;
chunk__37122_37130 = G__37135;
count__37123_37131 = G__37136;
i__37124_37132 = G__37137;
continue;
} else {
var temp__4657__auto___37138 = cljs.core.seq.call(null,seq__37121_37129);
if(temp__4657__auto___37138){
var seq__37121_37139__$1 = temp__4657__auto___37138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37121_37139__$1)){
var c__25609__auto___37140 = cljs.core.chunk_first.call(null,seq__37121_37139__$1);
var G__37141 = cljs.core.chunk_rest.call(null,seq__37121_37139__$1);
var G__37142 = c__25609__auto___37140;
var G__37143 = cljs.core.count.call(null,c__25609__auto___37140);
var G__37144 = (0);
seq__37121_37129 = G__37141;
chunk__37122_37130 = G__37142;
count__37123_37131 = G__37143;
i__37124_37132 = G__37144;
continue;
} else {
var msg_37145 = cljs.core.first.call(null,seq__37121_37139__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37145);

var G__37146 = cljs.core.next.call(null,seq__37121_37139__$1);
var G__37147 = null;
var G__37148 = (0);
var G__37149 = (0);
seq__37121_37129 = G__37146;
chunk__37122_37130 = G__37147;
count__37123_37131 = G__37148;
i__37124_37132 = G__37149;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25880__auto__ = [];
var len__25873__auto___37154 = arguments.length;
var i__25874__auto___37155 = (0);
while(true){
if((i__25874__auto___37155 < len__25873__auto___37154)){
args__25880__auto__.push((arguments[i__25874__auto___37155]));

var G__37156 = (i__25874__auto___37155 + (1));
i__25874__auto___37155 = G__37156;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37151){
var map__37152 = p__37151;
var map__37152__$1 = ((((!((map__37152 == null)))?((((map__37152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37152):map__37152);
var opts = map__37152__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37150){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37150));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37158){if((e37158 instanceof Error)){
var e = e37158;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37158;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37162){
var map__37163 = p__37162;
var map__37163__$1 = ((((!((map__37163 == null)))?((((map__37163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37163):map__37163);
var msg_name = cljs.core.get.call(null,map__37163__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1485228962904