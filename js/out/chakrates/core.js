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
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__32164 = cljs.core.cst$kw$freq.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$chakra.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(chakrates.core.app_state) : cljs.core.deref.call(null,chakrates.core.app_state))));
return (cljs_bach.synthesis.sine.cljs$core$IFn$_invoke$arity$1 ? cljs_bach.synthesis.sine.cljs$core$IFn$_invoke$arity$1(G__32164) : cljs_bach.synthesis.sine.call(null,G__32164));
})(),(function (){var G__32165 = (cljs.core.count(cljs.core.cst$kw$word.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(chakrates.core.app_state) : cljs.core.deref.call(null,chakrates.core.app_state)))) + cljs.core.cst$kw$freq.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$chakra.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(chakrates.core.app_state) : cljs.core.deref.call(null,chakrates.core.app_state)))));
return (cljs_bach.synthesis.sine.cljs$core$IFn$_invoke$arity$1 ? cljs_bach.synthesis.sine.cljs$core$IFn$_invoke$arity$1(G__32165) : cljs_bach.synthesis.sine.call(null,G__32165));
})()], 0)),cljs_bach.synthesis.percussive(0.8,(3)),(cljs_bach.synthesis.low_pass.cljs$core$IFn$_invoke$arity$1 ? cljs_bach.synthesis.low_pass.cljs$core$IFn$_invoke$arity$1((200)) : cljs_bach.synthesis.low_pass.call(null,(200))),cljs_bach.synthesis.gain(0.4)], 0));
});
chakrates.core.EVENTCHANNEL = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
chakrates.core.EVENTS = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$update_DASH_chakra,(function (p__32166){
var map__32167 = p__32166;
var map__32167__$1 = ((((!((map__32167 == null)))?((((map__32167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32167):map__32167);
var active_chakra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32167__$1,cljs.core.cst$kw$active_DASH_chakra);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(chakrates.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chakra], null),active_chakra);
}),cljs.core.cst$kw$update_DASH_word,(function (p__32169){
var map__32170 = p__32169;
var map__32170__$1 = ((((!((map__32170 == null)))?((((map__32170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32170):map__32170);
var active_word = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32170__$1,cljs.core.cst$kw$active_DASH_word);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(chakrates.core.app_state,cljs.core.assoc,cljs.core.cst$kw$word,active_word);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(chakrates.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chakra], null),chakrates.util.get_chakra_by_number(chakrates.numerology.word_to_numerology(active_word)));
}),cljs.core.cst$kw$play_DASH_tone,(function (){
return cljs_bach.synthesis.run_with(cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([chakrates.core.ping(),cljs_bach.synthesis.destination], 0)),chakrates.core.context,cljs_bach.synthesis.current_time(chakrates.core.context),(3));
})], null);
var c__29843__auto___32206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__29843__auto___32206){
return (function (){
var f__29844__auto__ = (function (){var switch__29766__auto__ = ((function (c__29843__auto___32206){
return (function (state_32190){
var state_val_32191 = (state_32190[(1)]);
if((state_val_32191 === (1))){
var state_32190__$1 = state_32190;
var statearr_32192_32207 = state_32190__$1;
(statearr_32192_32207[(2)] = null);

(statearr_32192_32207[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32191 === (2))){
var state_32190__$1 = state_32190;
var statearr_32193_32208 = state_32190__$1;
(statearr_32193_32208[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_32191 === (3))){
var inst_32188 = (state_32190[(2)]);
var state_32190__$1 = state_32190;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32190__$1,inst_32188);
} else {
if((state_val_32191 === (4))){
var state_32190__$1 = state_32190;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32190__$1,(7),chakrates.core.EVENTCHANNEL);
} else {
if((state_val_32191 === (5))){
var state_32190__$1 = state_32190;
var statearr_32195_32209 = state_32190__$1;
(statearr_32195_32209[(2)] = null);

(statearr_32195_32209[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32191 === (6))){
var inst_32186 = (state_32190[(2)]);
var state_32190__$1 = state_32190;
var statearr_32196_32210 = state_32190__$1;
(statearr_32196_32210[(2)] = inst_32186);

(statearr_32196_32210[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32191 === (7))){
var inst_32178 = (state_32190[(2)]);
var inst_32179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32178,(0),null);
var inst_32180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32178,(1),null);
var inst_32181 = (inst_32179.cljs$core$IFn$_invoke$arity$1 ? inst_32179.cljs$core$IFn$_invoke$arity$1(chakrates.core.EVENTS) : inst_32179.call(null,chakrates.core.EVENTS));
var inst_32182 = (inst_32181.cljs$core$IFn$_invoke$arity$1 ? inst_32181.cljs$core$IFn$_invoke$arity$1(inst_32180) : inst_32181.call(null,inst_32180));
var state_32190__$1 = (function (){var statearr_32197 = state_32190;
(statearr_32197[(7)] = inst_32182);

return statearr_32197;
})();
var statearr_32198_32211 = state_32190__$1;
(statearr_32198_32211[(2)] = null);

(statearr_32198_32211[(1)] = (2));


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
});})(c__29843__auto___32206))
;
return ((function (switch__29766__auto__,c__29843__auto___32206){
return (function() {
var chakrates$core$state_machine__29767__auto__ = null;
var chakrates$core$state_machine__29767__auto____0 = (function (){
var statearr_32202 = [null,null,null,null,null,null,null,null];
(statearr_32202[(0)] = chakrates$core$state_machine__29767__auto__);

(statearr_32202[(1)] = (1));

return statearr_32202;
});
var chakrates$core$state_machine__29767__auto____1 = (function (state_32190){
while(true){
var ret_value__29768__auto__ = (function (){try{while(true){
var result__29769__auto__ = switch__29766__auto__(state_32190);
if(cljs.core.keyword_identical_QMARK_(result__29769__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29769__auto__;
}
break;
}
}catch (e32203){if((e32203 instanceof Object)){
var ex__29770__auto__ = e32203;
var statearr_32204_32212 = state_32190;
(statearr_32204_32212[(5)] = ex__29770__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32190);

return cljs.core.cst$kw$recur;
} else {
throw e32203;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29768__auto__,cljs.core.cst$kw$recur)){
var G__32213 = state_32190;
state_32190 = G__32213;
continue;
} else {
return ret_value__29768__auto__;
}
break;
}
});
chakrates$core$state_machine__29767__auto__ = function(state_32190){
switch(arguments.length){
case 0:
return chakrates$core$state_machine__29767__auto____0.call(this);
case 1:
return chakrates$core$state_machine__29767__auto____1.call(this,state_32190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chakrates$core$state_machine__29767__auto__.cljs$core$IFn$_invoke$arity$0 = chakrates$core$state_machine__29767__auto____0;
chakrates$core$state_machine__29767__auto__.cljs$core$IFn$_invoke$arity$1 = chakrates$core$state_machine__29767__auto____1;
return chakrates$core$state_machine__29767__auto__;
})()
;})(switch__29766__auto__,c__29843__auto___32206))
})();
var state__29845__auto__ = (function (){var statearr_32205 = (f__29844__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29844__auto__.cljs$core$IFn$_invoke$arity$0() : f__29844__auto__.call(null));
(statearr_32205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto___32206);

return statearr_32205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29845__auto__);
});})(c__29843__auto___32206))
);

if(typeof chakrates.core.WORD_API !== 'undefined'){
} else {
chakrates.core.WORD_API = "https://api.wordnik.com/v4/words.json/randomWords";
}
if(typeof chakrates.core.API_KEY !== 'undefined'){
} else {
chakrates.core.API_KEY = "1e82d20adc034891c000801b43b0a7f94034ecc73d79a70bb";
}
chakrates.core.handler = (function chakrates$core$handler(response){
var word = cljs.core.cst$kw$word.cljs$core$IFn$_invoke$arity$1(cljs.core.first(response));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chakrates.core.EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_word,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active_DASH_word,word], null)], null));

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chakrates.core.EVENTCHANNEL,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_tone], null));
});
chakrates.core.get_word = (function chakrates$core$get_word(){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(chakrates.core.WORD_API,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$limit,(1),cljs.core.cst$kw$hasDictonaryDef,true,cljs.core.cst$kw$api_key,chakrates.core.API_KEY], null),cljs.core.cst$kw$keywords_QMARK_,true,cljs.core.cst$kw$handler,chakrates.core.handler], null)], 0));
});
chakrates.core.display_chakras = (function chakrates$core$display_chakras(EVENTCHANNEL){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_chakras,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$chakra.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(chakrates.core.app_state) : cljs.core.deref.call(null,chakrates.core.app_state))))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__25839__auto__ = (function chakrates$core$display_chakras_$_iter__32220(s__32221){
return (new cljs.core.LazySeq(null,(function (){
var s__32221__$1 = s__32221;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__32221__$1);
if(temp__4657__auto__){
var s__32221__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32221__$2)){
var c__25837__auto__ = cljs.core.chunk_first(s__32221__$2);
var size__25838__auto__ = cljs.core.count(c__25837__auto__);
var b__32223 = cljs.core.chunk_buffer(size__25838__auto__);
if((function (){var i__32222 = (0);
while(true){
if((i__32222 < size__25838__auto__)){
var chakra = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__25837__auto__,i__32222);
cljs.core.chunk_append(b__32223,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$chakra,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,[cljs.core.str("chakra-"),cljs.core.str(cljs.core.cst$kw$number.cljs$core$IFn$_invoke$arity$1(chakra))].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(chakra)], null),cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$chakra.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(chakrates.core.app_state) : cljs.core.deref.call(null,chakrates.core.app_state))),chakra))?"active":null),cljs.core.cst$kw$on_DASH_click,((function (i__32222,chakra,c__25837__auto__,size__25838__auto__,b__32223,s__32221__$2,temp__4657__auto__){
return (function (event){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_chakra,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active_DASH_chakra,chakra], null)], null));

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(EVENTCHANNEL,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_tone], null));
});})(i__32222,chakra,c__25837__auto__,size__25838__auto__,b__32223,s__32221__$2,temp__4657__auto__))
], null),cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(chakra)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$number.cljs$core$IFn$_invoke$arity$1(chakra)], null)));

var G__32226 = (i__32222 + (1));
i__32222 = G__32226;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32223),chakrates$core$display_chakras_$_iter__32220(cljs.core.chunk_rest(s__32221__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32223),null);
}
} else {
var chakra = cljs.core.first(s__32221__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$chakra,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,[cljs.core.str("chakra-"),cljs.core.str(cljs.core.cst$kw$number.cljs$core$IFn$_invoke$arity$1(chakra))].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(chakra)], null),cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$chakra.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(chakrates.core.app_state) : cljs.core.deref.call(null,chakrates.core.app_state))),chakra))?"active":null),cljs.core.cst$kw$on_DASH_click,((function (chakra,s__32221__$2,temp__4657__auto__){
return (function (event){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_chakra,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active_DASH_chakra,chakra], null)], null));

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(EVENTCHANNEL,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_tone], null));
});})(chakra,s__32221__$2,temp__4657__auto__))
], null),cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(chakra)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$number.cljs$core$IFn$_invoke$arity$1(chakra)], null)),chakrates$core$display_chakras_$_iter__32220(cljs.core.rest(s__32221__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$field,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value)),cljs.core.cst$kw$on_DASH_change,(function (p1__32227_SHARP_){
var G__32230_32232 = value;
var G__32231_32233 = p1__32227_SHARP_.target.value;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32230_32232,G__32231_32233) : cljs.core.reset_BANG_.call(null,G__32230_32232,G__32231_32233));

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
var G__32234_32236 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chakrates.core.main], null);
var G__32235_32237 = document.getElementById("app");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__32234_32236,G__32235_32237) : reagent.core.render_component.call(null,G__32234_32236,G__32235_32237));
chakrates.core.on_js_reload = (function chakrates$core$on_js_reload(){
return null;
});
