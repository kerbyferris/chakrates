// Compiled by ClojureScript 1.9.229 {}
goog.provide('chakrates.util_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('chakrates.util');
goog.require('chakrates.data');
chakrates.util_test.gets_last_chakra_by_number = (function chakrates$util_test$gets_last_chakra_by_number(){
return cljs.test.test_var.call(null,chakrates$util_test$gets_last_chakra_by_number.cljs$lang$var);
});
chakrates.util_test.gets_last_chakra_by_number.cljs$lang$test = (function (){
try{var values__27702__auto__ = (function (){var x__25632__auto__ = cljs.core.last.call(null,chakrates.data.chakras);
return cljs.core._conj.call(null,(function (){var x__25632__auto____$1 = chakrates.util.get_chakra_by_number.call(null,(1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto____$1);
})(),x__25632__auto__);
})();
var result__27703__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__27702__auto__);
if(cljs.core.truth_(result__27703__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol("data","chakras","data/chakras",1279314633,null)),cljs.core.list(new cljs.core.Symbol("util","get-chakra-by-number","util/get-chakra-by-number",1031579743,null),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27702__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol("data","chakras","data/chakras",1279314633,null)),cljs.core.list(new cljs.core.Symbol("util","get-chakra-by-number","util/get-chakra-by-number",1031579743,null),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25632__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27702__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27703__auto__;
}catch (e37172){var t__27740__auto__ = e37172;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol("data","chakras","data/chakras",1279314633,null)),cljs.core.list(new cljs.core.Symbol("util","get-chakra-by-number","util/get-chakra-by-number",1031579743,null),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),t__27740__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

chakrates.util_test.gets_last_chakra_by_number.cljs$lang$var = new cljs.core.Var(function(){return chakrates.util_test.gets_last_chakra_by_number;},new cljs.core.Symbol("chakrates.util-test","gets-last-chakra-by-number","chakrates.util-test/gets-last-chakra-by-number",-1759944080,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"chakrates.util-test","chakrates.util-test",-1143097458,null),new cljs.core.Symbol(null,"gets-last-chakra-by-number","gets-last-chakra-by-number",-1832837587,null),"test/chakrates/util_test.cljs",36,1,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(chakrates.util_test.gets_last_chakra_by_number)?chakrates.util_test.gets_last_chakra_by_number.cljs$lang$test:null)]));
chakrates.util_test.gets_first_chakra_by_number = (function chakrates$util_test$gets_first_chakra_by_number(){
return cljs.test.test_var.call(null,chakrates$util_test$gets_first_chakra_by_number.cljs$lang$var);
});
chakrates.util_test.gets_first_chakra_by_number.cljs$lang$test = (function (){
try{var values__27702__auto__ = (function (){var x__25632__auto__ = cljs.core.first.call(null,chakrates.data.chakras);
return cljs.core._conj.call(null,(function (){var x__25632__auto____$1 = chakrates.util.get_chakra_by_number.call(null,(9));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto____$1);
})(),x__25632__auto__);
})();
var result__27703__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__27702__auto__);
if(cljs.core.truth_(result__27703__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol("data","chakras","data/chakras",1279314633,null)),cljs.core.list(new cljs.core.Symbol("util","get-chakra-by-number","util/get-chakra-by-number",1031579743,null),(9))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27702__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol("data","chakras","data/chakras",1279314633,null)),cljs.core.list(new cljs.core.Symbol("util","get-chakra-by-number","util/get-chakra-by-number",1031579743,null),(9))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25632__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27702__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27703__auto__;
}catch (e37173){var t__27740__auto__ = e37173;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol("data","chakras","data/chakras",1279314633,null)),cljs.core.list(new cljs.core.Symbol("util","get-chakra-by-number","util/get-chakra-by-number",1031579743,null),(9))),new cljs.core.Keyword(null,"actual","actual",107306363),t__27740__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

chakrates.util_test.gets_first_chakra_by_number.cljs$lang$var = new cljs.core.Var(function(){return chakrates.util_test.gets_first_chakra_by_number;},new cljs.core.Symbol("chakrates.util-test","gets-first-chakra-by-number","chakrates.util-test/gets-first-chakra-by-number",1415942847,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"chakrates.util-test","chakrates.util-test",-1143097458,null),new cljs.core.Symbol(null,"gets-first-chakra-by-number","gets-first-chakra-by-number",1344134764,null),"test/chakrates/util_test.cljs",37,1,10,10,cljs.core.List.EMPTY,null,(cljs.core.truth_(chakrates.util_test.gets_first_chakra_by_number)?chakrates.util_test.gets_first_chakra_by_number.cljs$lang$test:null)]));

//# sourceMappingURL=util_test.js.map?rel=1485228963003