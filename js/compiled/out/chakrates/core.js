// Compiled by ClojureScript 1.9.229 {}
goog.provide('chakrates.core');
goog.require('cljs.core');
goog.require('cljs_bach.synthesis');
goog.require('ajax.core');
goog.require('chakrates.data');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('chakrates.util');
goog.require('chakrates.numerology');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof chakrates.core.app_state !== 'undefined'){
} else {
chakrates.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chakra","chakra",442587256),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"number","number",1570378438),(5),new cljs.core.Keyword(null,"freq","freq",-1855845278),(528),new cljs.core.Keyword(null,"color","color",1011675173),"yellowgreen",new cljs.core.Keyword(null,"location","location",1815599388),"heart"], null),new cljs.core.Keyword(null,"word","word",-420123725),"chakrates"], null));
}
if(typeof chakrates.core.context !== 'undefined'){
} else {
chakrates.core.context = cljs_bach.synthesis.audio_context.call(null);
}
chakrates.core.ping = (function chakrates$core$ping(){
return cljs_bach.synthesis.connect__GT_.call(null,cljs_bach.synthesis.add.call(null,cljs_bach.synthesis.sine.call(null,new cljs.core.Keyword(null,"freq","freq",-1855845278).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"chakra","chakra",442587256).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chakrates.core.app_state)))),cljs_bach.synthesis.sine.call(null,(cljs.core.count.call(null,new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chakrates.core.app_state))) + new cljs.core.Keyword(null,"freq","freq",-1855845278).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"chakra","chakra",442587256).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chakrates.core.app_state)))))),cljs_bach.synthesis.percussive.call(null,0.8,(3)),cljs_bach.synthesis.low_pass.call(null,(200)),cljs_bach.synthesis.gain.call(null,0.4));
});
chakrates.core.EVENTCHANNEL = cljs.core.async.chan.call(null);
chakrates.core.EVENTS = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"update-chakra","update-chakra",295282723),(function (p__40782){
var map__40783 = p__40782;
var map__40783__$1 = ((((!((map__40783 == null)))?((((map__40783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40783):map__40783);
var active_chakra = cljs.core.get.call(null,map__40783__$1,new cljs.core.Keyword(null,"active-chakra","active-chakra",500548948));
return cljs.core.swap_BANG_.call(null,chakrates.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chakra","chakra",442587256)], null),active_chakra);
}),new cljs.core.Keyword(null,"update-word","update-word",705364375),(function (p__40785){
var map__40786 = p__40785;
var map__40786__$1 = ((((!((map__40786 == null)))?((((map__40786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40786):map__40786);
var active_word = cljs.core.get.call(null,map__40786__$1,new cljs.core.Keyword(null,"active-word","active-word",-1538304019));
cljs.core.swap_BANG_.call(null,chakrates.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"word","word",-420123725),active_word);

return cljs.core.swap_BANG_.call(null,chakrates.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chakra","chakra",442587256)], null),chakrates.util.get_chakra_by_number.call(null,chakrates.numerology.word_to_numerology.call(null,active_word)));
}),new cljs.core.Keyword(null,"play-tone","play-tone",127518695),(function (){
return cljs_bach.synthesis.run_with.call(null,cljs_bach.synthesis.connect__GT_.call(null,chakrates.core.ping.call(null),cljs_bach.synthesis.destination),chakrates.core.context,cljs_bach.synthesis.current_time.call(null,chakrates.core.context),(3));
})], null);
var c__30477__auto___40822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30477__auto___40822){
return (function (){
var f__30478__auto__ = (function (){var switch__30365__auto__ = ((function (c__30477__auto___40822){
return (function (state_40806){
var state_val_40807 = (state_40806[(1)]);
if((state_val_40807 === (1))){
var state_40806__$1 = state_40806;
var statearr_40808_40823 = state_40806__$1;
(statearr_40808_40823[(2)] = null);

(statearr_40808_40823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40807 === (2))){
var state_40806__$1 = state_40806;
var statearr_40809_40824 = state_40806__$1;
(statearr_40809_40824[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40807 === (3))){
var inst_40804 = (state_40806[(2)]);
var state_40806__$1 = state_40806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40806__$1,inst_40804);
} else {
if((state_val_40807 === (4))){
var state_40806__$1 = state_40806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40806__$1,(7),chakrates.core.EVENTCHANNEL);
} else {
if((state_val_40807 === (5))){
var state_40806__$1 = state_40806;
var statearr_40811_40825 = state_40806__$1;
(statearr_40811_40825[(2)] = null);

(statearr_40811_40825[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40807 === (6))){
var inst_40802 = (state_40806[(2)]);
var state_40806__$1 = state_40806;
var statearr_40812_40826 = state_40806__$1;
(statearr_40812_40826[(2)] = inst_40802);

(statearr_40812_40826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40807 === (7))){
var inst_40794 = (state_40806[(2)]);
var inst_40795 = cljs.core.nth.call(null,inst_40794,(0),null);
var inst_40796 = cljs.core.nth.call(null,inst_40794,(1),null);
var inst_40797 = inst_40795.call(null,chakrates.core.EVENTS);
var inst_40798 = inst_40797.call(null,inst_40796);
var state_40806__$1 = (function (){var statearr_40813 = state_40806;
(statearr_40813[(7)] = inst_40798);

return statearr_40813;
})();
var statearr_40814_40827 = state_40806__$1;
(statearr_40814_40827[(2)] = null);

(statearr_40814_40827[(1)] = (2));


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
});})(c__30477__auto___40822))
;
return ((function (switch__30365__auto__,c__30477__auto___40822){
return (function() {
var chakrates$core$state_machine__30366__auto__ = null;
var chakrates$core$state_machine__30366__auto____0 = (function (){
var statearr_40818 = [null,null,null,null,null,null,null,null];
(statearr_40818[(0)] = chakrates$core$state_machine__30366__auto__);

(statearr_40818[(1)] = (1));

return statearr_40818;
});
var chakrates$core$state_machine__30366__auto____1 = (function (state_40806){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__.call(null,state_40806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e40819){if((e40819 instanceof Object)){
var ex__30369__auto__ = e40819;
var statearr_40820_40828 = state_40806;
(statearr_40820_40828[(5)] = ex__30369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40829 = state_40806;
state_40806 = G__40829;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
chakrates$core$state_machine__30366__auto__ = function(state_40806){
switch(arguments.length){
case 0:
return chakrates$core$state_machine__30366__auto____0.call(this);
case 1:
return chakrates$core$state_machine__30366__auto____1.call(this,state_40806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chakrates$core$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = chakrates$core$state_machine__30366__auto____0;
chakrates$core$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = chakrates$core$state_machine__30366__auto____1;
return chakrates$core$state_machine__30366__auto__;
})()
;})(switch__30365__auto__,c__30477__auto___40822))
})();
var state__30479__auto__ = (function (){var statearr_40821 = f__30478__auto__.call(null);
(statearr_40821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30477__auto___40822);

return statearr_40821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30479__auto__);
});})(c__30477__auto___40822))
);

if(typeof chakrates.core.WORD_API !== 'undefined'){
} else {
chakrates.core.WORD_API = "http://api.wordnik.com/v4/words.json/randomWord";
}
if(typeof chakrates.core.API_KEY !== 'undefined'){
} else {
chakrates.core.API_KEY = "";
}
if(typeof chakrates.core.word_uri !== 'undefined'){
} else {
chakrates.core.word_uri = "https://setgetgo.com/randomword/get.php";
}
chakrates.core.handler = (function chakrates$core$handler(response){
cljs.core.async.put_BANG_.call(null,chakrates.core.EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-word","active-word",-1538304019),response], null)], null));

return cljs.core.async.put_BANG_.call(null,chakrates.core.EVENTCHANNEL,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-tone","play-tone",127518695)], null));
});
chakrates.core.get_word = (function chakrates$core$get_word(){
return ajax.core.GET.call(null,chakrates.core.word_uri,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),chakrates.core.handler], null));
});
chakrates.core.display_chakras = (function chakrates$core$display_chakras(EVENTCHANNEL){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#chakras","div#chakras",29667535),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"chakra","chakra",442587256).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chakrates.core.app_state)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.doall.call(null,(function (){var iter__25578__auto__ = (function chakrates$core$display_chakras_$_iter__40834(s__40835){
return (new cljs.core.LazySeq(null,(function (){
var s__40835__$1 = s__40835;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40835__$1);
if(temp__4657__auto__){
var s__40835__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40835__$2)){
var c__25576__auto__ = cljs.core.chunk_first.call(null,s__40835__$2);
var size__25577__auto__ = cljs.core.count.call(null,c__25576__auto__);
var b__40837 = cljs.core.chunk_buffer.call(null,size__25577__auto__);
if((function (){var i__40836 = (0);
while(true){
if((i__40836 < size__25577__auto__)){
var chakra = cljs.core._nth.call(null,c__25576__auto__,i__40836);
cljs.core.chunk_append.call(null,b__40837,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.chakra","li.chakra",-186207837),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("chakra-"),cljs.core.str(new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(chakra))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(chakra)], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"chakra","chakra",442587256).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chakrates.core.app_state)),chakra))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__40836,chakra,c__25576__auto__,size__25577__auto__,b__40837,s__40835__$2,temp__4657__auto__){
return (function (event){
cljs.core.async.put_BANG_.call(null,EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-chakra","update-chakra",295282723),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-chakra","active-chakra",500548948),chakra], null)], null));

return cljs.core.async.put_BANG_.call(null,EVENTCHANNEL,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-tone","play-tone",127518695)], null));
});})(i__40836,chakra,c__25576__auto__,size__25577__auto__,b__40837,s__40835__$2,temp__4657__auto__))
], null),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(chakra)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(chakra)], null)));

var G__40838 = (i__40836 + (1));
i__40836 = G__40838;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40837),chakrates$core$display_chakras_$_iter__40834.call(null,cljs.core.chunk_rest.call(null,s__40835__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40837),null);
}
} else {
var chakra = cljs.core.first.call(null,s__40835__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.chakra","li.chakra",-186207837),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("chakra-"),cljs.core.str(new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(chakra))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(chakra)], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"chakra","chakra",442587256).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chakrates.core.app_state)),chakra))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (chakra,s__40835__$2,temp__4657__auto__){
return (function (event){
cljs.core.async.put_BANG_.call(null,EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-chakra","update-chakra",295282723),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-chakra","active-chakra",500548948),chakra], null)], null));

return cljs.core.async.put_BANG_.call(null,EVENTCHANNEL,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-tone","play-tone",127518695)], null));
});})(chakra,s__40835__$2,temp__4657__auto__))
], null),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(chakra)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(chakra)], null)),chakrates$core$display_chakras_$_iter__40834.call(null,cljs.core.rest.call(null,s__40835__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25578__auto__.call(null,chakrates.data.chakras);
})())], null)], null);
});
chakrates.core.atom_input = (function chakrates$core$atom_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.field","input.field",586206245),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__40839_SHARP_){
cljs.core.reset_BANG_.call(null,value,p1__40839_SHARP_.target.value);

if(((0) < cljs.core.count.call(null,cljs.core.deref.call(null,value)))){
cljs.core.async.put_BANG_.call(null,chakrates.core.EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-word","active-word",-1538304019),cljs.core.deref.call(null,value)], null)], null));

return cljs.core.async.put_BANG_.call(null,chakrates.core.EVENTCHANNEL,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-tone","play-tone",127518695)], null));
} else {
return null;
}
})], null)], null);
});
chakrates.core.input_field = (function chakrates$core$input_field(){
var val = reagent.core.atom.call(null,"Set Word");
return ((function (val){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [chakrates.core.atom_input,val], null);
});
;})(val))
});
chakrates.core.controls = (function chakrates$core$controls(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#controls","div#controls",1303055548),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.btn","input.btn",638953247),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Get Word",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"chakra","chakra",442587256).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chakrates.core.app_state)))], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return chakrates.core.get_word.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chakrates.core.input_field], null)], null);
});
chakrates.core.main = (function chakrates$core$main(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#main","div#main",-2068630773),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chakrates.core.controls], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#word","div#word",-1807494923),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),cljs.core.apply.call(null,cljs.core.str,"http://google.com/search?q=",new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chakrates.core.app_state)),"+conspiracy"),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chakrates.core.app_state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"chakra","chakra",442587256).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chakrates.core.app_state)))], null)], null),"conspiracy >>"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"chakra","chakra",442587256).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chakrates.core.app_state)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"chakra: ",new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"chakra","chakra",442587256).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chakrates.core.app_state)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"frequency: ",new cljs.core.Keyword(null,"freq","freq",-1855845278).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"chakra","chakra",442587256).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chakrates.core.app_state)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"location: ",new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"chakra","chakra",442587256).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chakrates.core.app_state)))], null)], null)], null),chakrates.core.display_chakras.call(null,chakrates.core.EVENTCHANNEL)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chakrates.core.main], null),document.getElementById("app"));
chakrates.core.on_js_reload = (function chakrates$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1485231642433