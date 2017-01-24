// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('chakrates.core');
goog.require('cljs.core');
goog.require('cljs_bach.synthesis');
goog.require('ajax.core');
goog.require('chakrates.data');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('chakrates.util');
goog.require('chakrates.numerology');
cljs.core.enable_console_print_BANG_();
if(typeof chakrates.core.app_state !== 'undefined'){
} else {
chakrates.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$chakra,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$number,(5),cljs.core.cst$kw$freq,(528),cljs.core.cst$kw$color,"yellowgreen",cljs.core.cst$kw$location,"heart"], null),cljs.core.cst$kw$word,"chakrates"], null));
}
if(typeof chakrates.core.context !== 'undefined'){
} else {
chakrates.core.context = cljs_bach.synthesis.audio_context();
}
chakrates.core.ping = (function chakrates$core$ping(){
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__36396 = cljs.core.cst$kw$freq.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$chakra.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(chakrates.core.app_state) : cljs.core.deref.call(null,chakrates.core.app_state))));
return (cljs_bach.synthesis.sine.cljs$core$IFn$_invoke$arity$1 ? cljs_bach.synthesis.sine.cljs$core$IFn$_invoke$arity$1(G__36396) : cljs_bach.synthesis.sine.call(null,G__36396));
})(),(function (){var G__36397 = (cljs.core.count(cljs.core.cst$kw$word.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(chakrates.core.app_state) : cljs.core.deref.call(null,chakrates.core.app_state)))) + cljs.core.cst$kw$freq.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$chakra.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(chakrates.core.app_state) : cljs.core.deref.call(null,chakrates.core.app_state)))));
return (cljs_bach.synthesis.sine.cljs$core$IFn$_invoke$arity$1 ? cljs_bach.synthesis.sine.cljs$core$IFn$_invoke$arity$1(G__36397) : cljs_bach.synthesis.sine.call(null,G__36397));
})()], 0)),cljs_bach.synthesis.percussive(0.8,(3)),(cljs_bach.synthesis.low_pass.cljs$core$IFn$_invoke$arity$1 ? cljs_bach.synthesis.low_pass.cljs$core$IFn$_invoke$arity$1((200)) : cljs_bach.synthesis.low_pass.call(null,(200))),cljs_bach.synthesis.gain(0.4)], 0));
});
chakrates.core.EVENTCHANNEL = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
chakrates.core.EVENTS = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$update_DASH_chakra,(function (p__36398){
var map__36399 = p__36398;
var map__36399__$1 = ((((!((map__36399 == null)))?((((map__36399.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36399.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36399):map__36399);
var active_chakra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36399__$1,cljs.core.cst$kw$active_DASH_chakra);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(chakrates.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chakra], null),active_chakra);
}),cljs.core.cst$kw$update_DASH_word,(function (p__36401){
var map__36402 = p__36401;
var map__36402__$1 = ((((!((map__36402 == null)))?((((map__36402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36402):map__36402);
var active_word = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36402__$1,cljs.core.cst$kw$active_DASH_word);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(chakrates.core.app_state,cljs.core.assoc,cljs.core.cst$kw$word,active_word);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(chakrates.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chakra], null),chakrates.util.get_chakra_by_number(chakrates.numerology.word_to_numerology(active_word)));
}),cljs.core.cst$kw$play_DASH_tone,(function (){
return cljs_bach.synthesis.run_with(cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([chakrates.core.ping(),cljs_bach.synthesis.destination], 0)),chakrates.core.context,cljs_bach.synthesis.current_time(chakrates.core.context),(3));
})], null);
var c__33563__auto___36438 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33563__auto___36438){
return (function (){
var f__33564__auto__ = (function (){var switch__33439__auto__ = ((function (c__33563__auto___36438){
return (function (state_36422){
var state_val_36423 = (state_36422[(1)]);
if((state_val_36423 === (1))){
var state_36422__$1 = state_36422;
var statearr_36424_36439 = state_36422__$1;
(statearr_36424_36439[(2)] = null);

(statearr_36424_36439[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36423 === (2))){
var state_36422__$1 = state_36422;
var statearr_36425_36440 = state_36422__$1;
(statearr_36425_36440[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_36423 === (3))){
var inst_36420 = (state_36422[(2)]);
var state_36422__$1 = state_36422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36422__$1,inst_36420);
} else {
if((state_val_36423 === (4))){
var state_36422__$1 = state_36422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36422__$1,(7),chakrates.core.EVENTCHANNEL);
} else {
if((state_val_36423 === (5))){
var state_36422__$1 = state_36422;
var statearr_36427_36441 = state_36422__$1;
(statearr_36427_36441[(2)] = null);

(statearr_36427_36441[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36423 === (6))){
var inst_36418 = (state_36422[(2)]);
var state_36422__$1 = state_36422;
var statearr_36428_36442 = state_36422__$1;
(statearr_36428_36442[(2)] = inst_36418);

(statearr_36428_36442[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36423 === (7))){
var inst_36410 = (state_36422[(2)]);
var inst_36411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36410,(0),null);
var inst_36412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36410,(1),null);
var inst_36413 = (inst_36411.cljs$core$IFn$_invoke$arity$1 ? inst_36411.cljs$core$IFn$_invoke$arity$1(chakrates.core.EVENTS) : inst_36411.call(null,chakrates.core.EVENTS));
var inst_36414 = (inst_36413.cljs$core$IFn$_invoke$arity$1 ? inst_36413.cljs$core$IFn$_invoke$arity$1(inst_36412) : inst_36413.call(null,inst_36412));
var state_36422__$1 = (function (){var statearr_36429 = state_36422;
(statearr_36429[(7)] = inst_36414);

return statearr_36429;
})();
var statearr_36430_36443 = state_36422__$1;
(statearr_36430_36443[(2)] = null);

(statearr_36430_36443[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__33563__auto___36438))
;
return ((function (switch__33439__auto__,c__33563__auto___36438){
return (function() {
var chakrates$core$state_machine__33440__auto__ = null;
var chakrates$core$state_machine__33440__auto____0 = (function (){
var statearr_36434 = [null,null,null,null,null,null,null,null];
(statearr_36434[(0)] = chakrates$core$state_machine__33440__auto__);

(statearr_36434[(1)] = (1));

return statearr_36434;
});
var chakrates$core$state_machine__33440__auto____1 = (function (state_36422){
while(true){
var ret_value__33441__auto__ = (function (){try{while(true){
var result__33442__auto__ = switch__33439__auto__(state_36422);
if(cljs.core.keyword_identical_QMARK_(result__33442__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__33442__auto__;
}
break;
}
}catch (e36435){if((e36435 instanceof Object)){
var ex__33443__auto__ = e36435;
var statearr_36436_36444 = state_36422;
(statearr_36436_36444[(5)] = ex__33443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36422);

return cljs.core.cst$kw$recur;
} else {
throw e36435;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33441__auto__,cljs.core.cst$kw$recur)){
var G__36445 = state_36422;
state_36422 = G__36445;
continue;
} else {
return ret_value__33441__auto__;
}
break;
}
});
chakrates$core$state_machine__33440__auto__ = function(state_36422){
switch(arguments.length){
case 0:
return chakrates$core$state_machine__33440__auto____0.call(this);
case 1:
return chakrates$core$state_machine__33440__auto____1.call(this,state_36422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chakrates$core$state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$0 = chakrates$core$state_machine__33440__auto____0;
chakrates$core$state_machine__33440__auto__.cljs$core$IFn$_invoke$arity$1 = chakrates$core$state_machine__33440__auto____1;
return chakrates$core$state_machine__33440__auto__;
})()
;})(switch__33439__auto__,c__33563__auto___36438))
})();
var state__33565__auto__ = (function (){var statearr_36437 = (f__33564__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33564__auto__.cljs$core$IFn$_invoke$arity$0() : f__33564__auto__.call(null));
(statearr_36437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33563__auto___36438);

return statearr_36437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
});})(c__33563__auto___36438))
);

if(typeof chakrates.core.word_uri !== 'undefined'){
} else {
chakrates.core.word_uri = "http://setgetgo.com/randomword/get.php";
}
chakrates.core.handler = (function chakrates$core$handler(response){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chakrates.core.EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_word,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active_DASH_word,response], null)], null));

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chakrates.core.EVENTCHANNEL,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_tone], null));
});
chakrates.core.get_word = (function chakrates$core$get_word(){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(chakrates.core.word_uri,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$text,cljs.core.cst$kw$keywords_QMARK_,true,cljs.core.cst$kw$handler,chakrates.core.handler], null)], 0));
});
chakrates.core.display_chakras = (function chakrates$core$display_chakras(EVENTCHANNEL){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_chakras,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$chakra.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(chakrates.core.app_state) : cljs.core.deref.call(null,chakrates.core.app_state))))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__25839__auto__ = (function chakrates$core$display_chakras_$_iter__36452(s__36453){
return (new cljs.core.LazySeq(null,(function (){
var s__36453__$1 = s__36453;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__36453__$1);
if(temp__4657__auto__){
var s__36453__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36453__$2)){
var c__25837__auto__ = cljs.core.chunk_first(s__36453__$2);
var size__25838__auto__ = cljs.core.count(c__25837__auto__);
var b__36455 = cljs.core.chunk_buffer(size__25838__auto__);
if((function (){var i__36454 = (0);
while(true){
if((i__36454 < size__25838__auto__)){
var chakra = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__25837__auto__,i__36454);
cljs.core.chunk_append(b__36455,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$chakra,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,[cljs.core.str("chakra-"),cljs.core.str(cljs.core.cst$kw$number.cljs$core$IFn$_invoke$arity$1(chakra))].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(chakra)], null),cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$chakra.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(chakrates.core.app_state) : cljs.core.deref.call(null,chakrates.core.app_state))),chakra))?"active":null),cljs.core.cst$kw$on_DASH_click,((function (i__36454,chakra,c__25837__auto__,size__25838__auto__,b__36455,s__36453__$2,temp__4657__auto__){
return (function (event){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_chakra,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active_DASH_chakra,chakra], null)], null));

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(EVENTCHANNEL,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_tone], null));
});})(i__36454,chakra,c__25837__auto__,size__25838__auto__,b__36455,s__36453__$2,temp__4657__auto__))
], null),cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(chakra)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$number.cljs$core$IFn$_invoke$arity$1(chakra)], null)));

var G__36458 = (i__36454 + (1));
i__36454 = G__36458;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36455),chakrates$core$display_chakras_$_iter__36452(cljs.core.chunk_rest(s__36453__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36455),null);
}
} else {
var chakra = cljs.core.first(s__36453__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$chakra,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,[cljs.core.str("chakra-"),cljs.core.str(cljs.core.cst$kw$number.cljs$core$IFn$_invoke$arity$1(chakra))].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(chakra)], null),cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$chakra.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(chakrates.core.app_state) : cljs.core.deref.call(null,chakrates.core.app_state))),chakra))?"active":null),cljs.core.cst$kw$on_DASH_click,((function (chakra,s__36453__$2,temp__4657__auto__){
return (function (event){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_chakra,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active_DASH_chakra,chakra], null)], null));

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(EVENTCHANNEL,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_tone], null));
});})(chakra,s__36453__$2,temp__4657__auto__))
], null),cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(chakra)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$number.cljs$core$IFn$_invoke$arity$1(chakra)], null)),chakrates$core$display_chakras_$_iter__36452(cljs.core.rest(s__36453__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25839__auto__(chakrates.data.chakras);
})())], null)], null);
});
chakrates.core.atom_input = (function chakrates$core$atom_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$field,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value)),cljs.core.cst$kw$on_DASH_change,(function (p1__36459_SHARP_){
var G__36462_36464 = value;
var G__36463_36465 = p1__36459_SHARP_.target.value;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36462_36464,G__36463_36465) : cljs.core.reset_BANG_.call(null,G__36462_36464,G__36463_36465));

if(((0) < cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value))))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chakrates.core.EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_word,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active_DASH_word,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value))], null)], null));

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chakrates.core.EVENTCHANNEL,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_tone], null));
} else {
return null;
}
})], null)], null);
});
chakrates.core.input_field = (function chakrates$core$input_field(){
var val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Set Word");
return ((function (val){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [chakrates.core.atom_input,val], null);
});
;})(val))
});
chakrates.core.controls = (function chakrates$core$controls(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_controls,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$btn,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"Get Word",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$chakra.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(chakrates.core.app_state) : cljs.core.deref.call(null,chakrates.core.app_state))))], null),cljs.core.cst$kw$on_DASH_click,(function (){
return chakrates.core.get_word();
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chakrates.core.input_field], null)], null);
});
chakrates.core.main = (function chakrates$core$main(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_main,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chakrates.core.controls], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_word,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"http://google.com/search?q=",cljs.core.cst$kw$word.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(chakrates.core.app_state) : cljs.core.deref.call(null,chakrates.core.app_state))),"+conspiracy"),cljs.core.cst$kw$target,"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$word.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(chakrates.core.app_state) : cljs.core.deref.call(null,chakrates.core.app_state)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$chakra.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(chakrates.core.app_state) : cljs.core.deref.call(null,chakrates.core.app_state))))], null)], null),"conspiracy >>"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$chakra.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(chakrates.core.app_state) : cljs.core.deref.call(null,chakrates.core.app_state))))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"chakra: ",cljs.core.cst$kw$number.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$chakra.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(chakrates.core.app_state) : cljs.core.deref.call(null,chakrates.core.app_state))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"frequency: ",cljs.core.cst$kw$freq.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$chakra.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(chakrates.core.app_state) : cljs.core.deref.call(null,chakrates.core.app_state))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"location: ",cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$chakra.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(chakrates.core.app_state) : cljs.core.deref.call(null,chakrates.core.app_state))))], null)], null)], null),chakrates.core.display_chakras(chakrates.core.EVENTCHANNEL)], null);
});
var G__36466_36468 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chakrates.core.main], null);
var G__36467_36469 = document.getElementById("app");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__36466_36468,G__36467_36469) : reagent.core.render_component.call(null,G__36466_36468,G__36467_36469));
chakrates.core.on_js_reload = (function chakrates$core$on_js_reload(){
return null;
});
