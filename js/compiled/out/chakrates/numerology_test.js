// Compiled by ClojureScript 1.9.229 {}
goog.provide('chakrates.numerology_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('chakrates.numerology');
chakrates.numerology_test.converts_letter_to_number = (function chakrates$numerology_test$converts_letter_to_number(){
return cljs.test.test_var.call(null,chakrates$numerology_test$converts_letter_to_number.cljs$lang$var);
});
chakrates.numerology_test.converts_letter_to_number.cljs$lang$test = (function (){
try{var values__27702__auto__ = (function (){var x__25632__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null);
return cljs.core._conj.call(null,(function (){var x__25632__auto____$1 = chakrates.numerology.letters_to_numbers.call(null,"a");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto____$1);
})(),x__25632__auto__);
})();
var result__27703__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__27702__auto__);
if(cljs.core.truth_(result__27703__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.list(new cljs.core.Symbol("n","letters-to-numbers","n/letters-to-numbers",1624340184,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27702__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.list(new cljs.core.Symbol("n","letters-to-numbers","n/letters-to-numbers",1624340184,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25632__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27702__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27703__auto__;
}catch (e37176){var t__27740__auto__ = e37176;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.list(new cljs.core.Symbol("n","letters-to-numbers","n/letters-to-numbers",1624340184,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),t__27740__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

chakrates.numerology_test.converts_letter_to_number.cljs$lang$var = new cljs.core.Var(function(){return chakrates.numerology_test.converts_letter_to_number;},new cljs.core.Symbol("chakrates.numerology-test","converts-letter-to-number","chakrates.numerology-test/converts-letter-to-number",-171509172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"chakrates.numerology-test","chakrates.numerology-test",-739455532,null),new cljs.core.Symbol(null,"converts-letter-to-number","converts-letter-to-number",-1952452856,null),"test/chakrates/numerology_test.cljs",35,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(chakrates.numerology_test.converts_letter_to_number)?chakrates.numerology_test.converts_letter_to_number.cljs$lang$test:null)]));
chakrates.numerology_test.converts_letters_to_numbers = (function chakrates$numerology_test$converts_letters_to_numbers(){
return cljs.test.test_var.call(null,chakrates$numerology_test$converts_letters_to_numbers.cljs$lang$var);
});
chakrates.numerology_test.converts_letters_to_numbers.cljs$lang$test = (function (){
try{var values__27702__auto__ = (function (){var x__25632__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null);
return cljs.core._conj.call(null,(function (){var x__25632__auto____$1 = chakrates.numerology.letters_to_numbers.call(null,"abc");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto____$1);
})(),x__25632__auto__);
})();
var result__27703__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__27702__auto__);
if(cljs.core.truth_(result__27703__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),cljs.core.list(new cljs.core.Symbol("n","letters-to-numbers","n/letters-to-numbers",1624340184,null),"abc")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27702__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),cljs.core.list(new cljs.core.Symbol("n","letters-to-numbers","n/letters-to-numbers",1624340184,null),"abc")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25632__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27702__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27703__auto__;
}catch (e37177){var t__27740__auto__ = e37177;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),cljs.core.list(new cljs.core.Symbol("n","letters-to-numbers","n/letters-to-numbers",1624340184,null),"abc")),new cljs.core.Keyword(null,"actual","actual",107306363),t__27740__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

chakrates.numerology_test.converts_letters_to_numbers.cljs$lang$var = new cljs.core.Var(function(){return chakrates.numerology_test.converts_letters_to_numbers;},new cljs.core.Symbol("chakrates.numerology-test","converts-letters-to-numbers","chakrates.numerology-test/converts-letters-to-numbers",-320553864,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"chakrates.numerology-test","chakrates.numerology-test",-739455532,null),new cljs.core.Symbol(null,"converts-letters-to-numbers","converts-letters-to-numbers",514805948,null),"test/chakrates/numerology_test.cljs",37,1,8,8,cljs.core.List.EMPTY,null,(cljs.core.truth_(chakrates.numerology_test.converts_letters_to_numbers)?chakrates.numerology_test.converts_letters_to_numbers.cljs$lang$test:null)]));
chakrates.numerology_test.works_for_high_numbers = (function chakrates$numerology_test$works_for_high_numbers(){
return cljs.test.test_var.call(null,chakrates$numerology_test$works_for_high_numbers.cljs$lang$var);
});
chakrates.numerology_test.works_for_high_numbers.cljs$lang$test = (function (){
try{var values__27702__auto__ = (function (){var x__25632__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(25),(26)], null);
return cljs.core._conj.call(null,(function (){var x__25632__auto____$1 = chakrates.numerology.letters_to_numbers.call(null,"xyz");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto____$1);
})(),x__25632__auto__);
})();
var result__27703__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__27702__auto__);
if(cljs.core.truth_(result__27703__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(25),(26)], null),cljs.core.list(new cljs.core.Symbol("n","letters-to-numbers","n/letters-to-numbers",1624340184,null),"xyz")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27702__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(25),(26)], null),cljs.core.list(new cljs.core.Symbol("n","letters-to-numbers","n/letters-to-numbers",1624340184,null),"xyz")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25632__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27702__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27703__auto__;
}catch (e37178){var t__27740__auto__ = e37178;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(25),(26)], null),cljs.core.list(new cljs.core.Symbol("n","letters-to-numbers","n/letters-to-numbers",1624340184,null),"xyz")),new cljs.core.Keyword(null,"actual","actual",107306363),t__27740__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

chakrates.numerology_test.works_for_high_numbers.cljs$lang$var = new cljs.core.Var(function(){return chakrates.numerology_test.works_for_high_numbers;},new cljs.core.Symbol("chakrates.numerology-test","works-for-high-numbers","chakrates.numerology-test/works-for-high-numbers",-114718071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"chakrates.numerology-test","chakrates.numerology-test",-739455532,null),new cljs.core.Symbol(null,"works-for-high-numbers","works-for-high-numbers",-338657707,null),"test/chakrates/numerology_test.cljs",32,1,11,11,cljs.core.List.EMPTY,null,(cljs.core.truth_(chakrates.numerology_test.works_for_high_numbers)?chakrates.numerology_test.works_for_high_numbers.cljs$lang$test:null)]));
chakrates.numerology_test.converts_letter_to_one_number = (function chakrates$numerology_test$converts_letter_to_one_number(){
return cljs.test.test_var.call(null,chakrates$numerology_test$converts_letter_to_one_number.cljs$lang$var);
});
chakrates.numerology_test.converts_letter_to_one_number.cljs$lang$test = (function (){
try{var values__27702__auto__ = cljs.core._conj.call(null,(function (){var x__25632__auto__ = chakrates.numerology.word_to_number.call(null,"a");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),(1));
var result__27703__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__27702__auto__);
if(cljs.core.truth_(result__27703__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("n","word-to-number","n/word-to-number",-677382856,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27702__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("n","word-to-number","n/word-to-number",-677382856,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25632__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27702__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27703__auto__;
}catch (e37179){var t__27740__auto__ = e37179;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("n","word-to-number","n/word-to-number",-677382856,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),t__27740__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

chakrates.numerology_test.converts_letter_to_one_number.cljs$lang$var = new cljs.core.Var(function(){return chakrates.numerology_test.converts_letter_to_one_number;},new cljs.core.Symbol("chakrates.numerology-test","converts-letter-to-one-number","chakrates.numerology-test/converts-letter-to-one-number",26707570,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"chakrates.numerology-test","chakrates.numerology-test",-739455532,null),new cljs.core.Symbol(null,"converts-letter-to-one-number","converts-letter-to-one-number",1940812726,null),"test/chakrates/numerology_test.cljs",39,1,14,14,cljs.core.List.EMPTY,null,(cljs.core.truth_(chakrates.numerology_test.converts_letter_to_one_number)?chakrates.numerology_test.converts_letter_to_one_number.cljs$lang$test:null)]));
chakrates.numerology_test.converts_letters_to_one_number = (function chakrates$numerology_test$converts_letters_to_one_number(){
return cljs.test.test_var.call(null,chakrates$numerology_test$converts_letters_to_one_number.cljs$lang$var);
});
chakrates.numerology_test.converts_letters_to_one_number.cljs$lang$test = (function (){
try{var values__27702__auto__ = cljs.core._conj.call(null,(function (){var x__25632__auto__ = chakrates.numerology.word_to_number.call(null,"abc");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),(123));
var result__27703__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__27702__auto__);
if(cljs.core.truth_(result__27703__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(123),cljs.core.list(new cljs.core.Symbol("n","word-to-number","n/word-to-number",-677382856,null),"abc")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27702__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(123),cljs.core.list(new cljs.core.Symbol("n","word-to-number","n/word-to-number",-677382856,null),"abc")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25632__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27702__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27703__auto__;
}catch (e37180){var t__27740__auto__ = e37180;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(123),cljs.core.list(new cljs.core.Symbol("n","word-to-number","n/word-to-number",-677382856,null),"abc")),new cljs.core.Keyword(null,"actual","actual",107306363),t__27740__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

chakrates.numerology_test.converts_letters_to_one_number.cljs$lang$var = new cljs.core.Var(function(){return chakrates.numerology_test.converts_letters_to_one_number;},new cljs.core.Symbol("chakrates.numerology-test","converts-letters-to-one-number","chakrates.numerology-test/converts-letters-to-one-number",1143478222,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"chakrates.numerology-test","chakrates.numerology-test",-739455532,null),new cljs.core.Symbol(null,"converts-letters-to-one-number","converts-letters-to-one-number",1525877258,null),"test/chakrates/numerology_test.cljs",40,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(chakrates.numerology_test.converts_letters_to_one_number)?chakrates.numerology_test.converts_letters_to_one_number.cljs$lang$test:null)]));
chakrates.numerology_test.works_for_double_digits = (function chakrates$numerology_test$works_for_double_digits(){
return cljs.test.test_var.call(null,chakrates$numerology_test$works_for_double_digits.cljs$lang$var);
});
chakrates.numerology_test.works_for_double_digits.cljs$lang$test = (function (){
try{var values__27702__auto__ = cljs.core._conj.call(null,(function (){var x__25632__auto__ = chakrates.numerology.word_to_number.call(null,"xyz");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),(242526));
var result__27703__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__27702__auto__);
if(cljs.core.truth_(result__27703__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(242526),cljs.core.list(new cljs.core.Symbol("n","word-to-number","n/word-to-number",-677382856,null),"xyz")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27702__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(242526),cljs.core.list(new cljs.core.Symbol("n","word-to-number","n/word-to-number",-677382856,null),"xyz")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25632__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27702__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27703__auto__;
}catch (e37181){var t__27740__auto__ = e37181;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(242526),cljs.core.list(new cljs.core.Symbol("n","word-to-number","n/word-to-number",-677382856,null),"xyz")),new cljs.core.Keyword(null,"actual","actual",107306363),t__27740__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

chakrates.numerology_test.works_for_double_digits.cljs$lang$var = new cljs.core.Var(function(){return chakrates.numerology_test.works_for_double_digits;},new cljs.core.Symbol("chakrates.numerology-test","works-for-double-digits","chakrates.numerology-test/works-for-double-digits",-1192631928,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"chakrates.numerology-test","chakrates.numerology-test",-739455532,null),new cljs.core.Symbol(null,"works-for-double-digits","works-for-double-digits",-1969031860,null),"test/chakrates/numerology_test.cljs",33,1,20,20,cljs.core.List.EMPTY,null,(cljs.core.truth_(chakrates.numerology_test.works_for_double_digits)?chakrates.numerology_test.works_for_double_digits.cljs$lang$test:null)]));
chakrates.numerology_test.returns_value_for_very_long_word = (function chakrates$numerology_test$returns_value_for_very_long_word(){
return cljs.test.test_var.call(null,chakrates$numerology_test$returns_value_for_very_long_word.cljs$lang$var);
});
chakrates.numerology_test.returns_value_for_very_long_word.cljs$lang$test = (function (){
try{var values__27702__auto__ = cljs.core._conj.call(null,(function (){var x__25632__auto__ = chakrates.numerology.word_to_number.call(null,"veryveryverylongwordthatwegot");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),(0));
var result__27703__auto__ = cljs.core.apply.call(null,cljs.core.not_EQ_,values__27702__auto__);
if(cljs.core.truth_(result__27703__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),(0),cljs.core.list(new cljs.core.Symbol("n","word-to-number","n/word-to-number",-677382856,null),"veryveryverylongwordthatwegot")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not_EQ_,values__27702__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),(0),cljs.core.list(new cljs.core.Symbol("n","word-to-number","n/word-to-number",-677382856,null),"veryveryverylongwordthatwegot")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25632__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not=","not=",1466536204,null),values__27702__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27703__auto__;
}catch (e37182){var t__27740__auto__ = e37182;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),(0),cljs.core.list(new cljs.core.Symbol("n","word-to-number","n/word-to-number",-677382856,null),"veryveryverylongwordthatwegot")),new cljs.core.Keyword(null,"actual","actual",107306363),t__27740__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

chakrates.numerology_test.returns_value_for_very_long_word.cljs$lang$var = new cljs.core.Var(function(){return chakrates.numerology_test.returns_value_for_very_long_word;},new cljs.core.Symbol("chakrates.numerology-test","returns-value-for-very-long-word","chakrates.numerology-test/returns-value-for-very-long-word",-219429419,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"chakrates.numerology-test","chakrates.numerology-test",-739455532,null),new cljs.core.Symbol(null,"returns-value-for-very-long-word","returns-value-for-very-long-word",-992815463,null),"test/chakrates/numerology_test.cljs",42,1,23,23,cljs.core.List.EMPTY,null,(cljs.core.truth_(chakrates.numerology_test.returns_value_for_very_long_word)?chakrates.numerology_test.returns_value_for_very_long_word.cljs$lang$test:null)]));
chakrates.numerology_test.works_for_long_words = (function chakrates$numerology_test$works_for_long_words(){
return cljs.test.test_var.call(null,chakrates$numerology_test$works_for_long_words.cljs$lang$var);
});
chakrates.numerology_test.works_for_long_words.cljs$lang$test = (function (){
try{var values__27702__auto__ = cljs.core._conj.call(null,(function (){var x__25632__auto__ = chakrates.numerology.word_to_number.call(null,"abcdefghijklmnop");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),1.2345678910111212E22);
var result__27703__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__27702__auto__);
if(cljs.core.truth_(result__27703__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),1.2345678910111212E22,cljs.core.list(new cljs.core.Symbol("n","word-to-number","n/word-to-number",-677382856,null),"abcdefghijklmnop")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27702__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),1.2345678910111212E22,cljs.core.list(new cljs.core.Symbol("n","word-to-number","n/word-to-number",-677382856,null),"abcdefghijklmnop")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25632__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27702__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27703__auto__;
}catch (e37183){var t__27740__auto__ = e37183;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),1.2345678910111212E22,cljs.core.list(new cljs.core.Symbol("n","word-to-number","n/word-to-number",-677382856,null),"abcdefghijklmnop")),new cljs.core.Keyword(null,"actual","actual",107306363),t__27740__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

chakrates.numerology_test.works_for_long_words.cljs$lang$var = new cljs.core.Var(function(){return chakrates.numerology_test.works_for_long_words;},new cljs.core.Symbol("chakrates.numerology-test","works-for-long-words","chakrates.numerology-test/works-for-long-words",34499286,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"chakrates.numerology-test","chakrates.numerology-test",-739455532,null),new cljs.core.Symbol(null,"works-for-long-words","works-for-long-words",808943594,null),"test/chakrates/numerology_test.cljs",30,1,26,26,cljs.core.List.EMPTY,null,(cljs.core.truth_(chakrates.numerology_test.works_for_long_words)?chakrates.numerology_test.works_for_long_words.cljs$lang$test:null)]));
chakrates.numerology_test.converts_single_number_to_digit = (function chakrates$numerology_test$converts_single_number_to_digit(){
return cljs.test.test_var.call(null,chakrates$numerology_test$converts_single_number_to_digit.cljs$lang$var);
});
chakrates.numerology_test.converts_single_number_to_digit.cljs$lang$test = (function (){
try{var values__27702__auto__ = cljs.core._conj.call(null,(function (){var x__25632__auto__ = chakrates.numerology.number_to_digit.call(null,(1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),(1));
var result__27703__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__27702__auto__);
if(cljs.core.truth_(result__27703__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("n","number-to-digit","n/number-to-digit",-1056084912,null),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27702__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("n","number-to-digit","n/number-to-digit",-1056084912,null),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25632__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27702__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27703__auto__;
}catch (e37184){var t__27740__auto__ = e37184;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("n","number-to-digit","n/number-to-digit",-1056084912,null),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),t__27740__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

chakrates.numerology_test.converts_single_number_to_digit.cljs$lang$var = new cljs.core.Var(function(){return chakrates.numerology_test.converts_single_number_to_digit;},new cljs.core.Symbol("chakrates.numerology-test","converts-single-number-to-digit","chakrates.numerology-test/converts-single-number-to-digit",9364149,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"chakrates.numerology-test","chakrates.numerology-test",-739455532,null),new cljs.core.Symbol(null,"converts-single-number-to-digit","converts-single-number-to-digit",376772553,null),"test/chakrates/numerology_test.cljs",41,1,29,29,cljs.core.List.EMPTY,null,(cljs.core.truth_(chakrates.numerology_test.converts_single_number_to_digit)?chakrates.numerology_test.converts_single_number_to_digit.cljs$lang$test:null)]));
chakrates.numerology_test.converts_two_place_number_to_digit = (function chakrates$numerology_test$converts_two_place_number_to_digit(){
return cljs.test.test_var.call(null,chakrates$numerology_test$converts_two_place_number_to_digit.cljs$lang$var);
});
chakrates.numerology_test.converts_two_place_number_to_digit.cljs$lang$test = (function (){
try{var values__27702__auto__ = cljs.core._conj.call(null,(function (){var x__25632__auto__ = chakrates.numerology.number_to_digit.call(null,(12));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),(3));
var result__27703__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__27702__auto__);
if(cljs.core.truth_(result__27703__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol("n","number-to-digit","n/number-to-digit",-1056084912,null),(12))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27702__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol("n","number-to-digit","n/number-to-digit",-1056084912,null),(12))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25632__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27702__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27703__auto__;
}catch (e37185){var t__27740__auto__ = e37185;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol("n","number-to-digit","n/number-to-digit",-1056084912,null),(12))),new cljs.core.Keyword(null,"actual","actual",107306363),t__27740__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

chakrates.numerology_test.converts_two_place_number_to_digit.cljs$lang$var = new cljs.core.Var(function(){return chakrates.numerology_test.converts_two_place_number_to_digit;},new cljs.core.Symbol("chakrates.numerology-test","converts-two-place-number-to-digit","chakrates.numerology-test/converts-two-place-number-to-digit",-1914693262,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"chakrates.numerology-test","chakrates.numerology-test",-739455532,null),new cljs.core.Symbol(null,"converts-two-place-number-to-digit","converts-two-place-number-to-digit",-6755658,null),"test/chakrates/numerology_test.cljs",44,1,32,32,cljs.core.List.EMPTY,null,(cljs.core.truth_(chakrates.numerology_test.converts_two_place_number_to_digit)?chakrates.numerology_test.converts_two_place_number_to_digit.cljs$lang$test:null)]));
chakrates.numerology_test.works_for_long_numbers = (function chakrates$numerology_test$works_for_long_numbers(){
return cljs.test.test_var.call(null,chakrates$numerology_test$works_for_long_numbers.cljs$lang$var);
});
chakrates.numerology_test.works_for_long_numbers.cljs$lang$test = (function (){
try{var values__27702__auto__ = cljs.core._conj.call(null,(function (){var x__25632__auto__ = chakrates.numerology.number_to_digit.call(null,(999999999999999));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),(9));
var result__27703__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__27702__auto__);
if(cljs.core.truth_(result__27703__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(9),cljs.core.list(new cljs.core.Symbol("n","number-to-digit","n/number-to-digit",-1056084912,null),(999999999999999))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27702__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(9),cljs.core.list(new cljs.core.Symbol("n","number-to-digit","n/number-to-digit",-1056084912,null),(999999999999999))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25632__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27702__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27703__auto__;
}catch (e37186){var t__27740__auto__ = e37186;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(9),cljs.core.list(new cljs.core.Symbol("n","number-to-digit","n/number-to-digit",-1056084912,null),(999999999999999))),new cljs.core.Keyword(null,"actual","actual",107306363),t__27740__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

chakrates.numerology_test.works_for_long_numbers.cljs$lang$var = new cljs.core.Var(function(){return chakrates.numerology_test.works_for_long_numbers;},new cljs.core.Symbol("chakrates.numerology-test","works-for-long-numbers","chakrates.numerology-test/works-for-long-numbers",-603316403,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"chakrates.numerology-test","chakrates.numerology-test",-739455532,null),new cljs.core.Symbol(null,"works-for-long-numbers","works-for-long-numbers",-809295871,null),"test/chakrates/numerology_test.cljs",32,1,35,35,cljs.core.List.EMPTY,null,(cljs.core.truth_(chakrates.numerology_test.works_for_long_numbers)?chakrates.numerology_test.works_for_long_numbers.cljs$lang$test:null)]));
chakrates.numerology_test.calculates_numerology_for_letter = (function chakrates$numerology_test$calculates_numerology_for_letter(){
return cljs.test.test_var.call(null,chakrates$numerology_test$calculates_numerology_for_letter.cljs$lang$var);
});
chakrates.numerology_test.calculates_numerology_for_letter.cljs$lang$test = (function (){
try{var values__27702__auto__ = cljs.core._conj.call(null,(function (){var x__25632__auto__ = chakrates.numerology.word_to_numerology.call(null,"a");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),(1));
var result__27703__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__27702__auto__);
if(cljs.core.truth_(result__27703__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("n","word-to-numerology","n/word-to-numerology",-1099798121,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27702__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("n","word-to-numerology","n/word-to-numerology",-1099798121,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25632__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27702__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27703__auto__;
}catch (e37187){var t__27740__auto__ = e37187;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("n","word-to-numerology","n/word-to-numerology",-1099798121,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),t__27740__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

chakrates.numerology_test.calculates_numerology_for_letter.cljs$lang$var = new cljs.core.Var(function(){return chakrates.numerology_test.calculates_numerology_for_letter;},new cljs.core.Symbol("chakrates.numerology-test","calculates-numerology-for-letter","chakrates.numerology-test/calculates-numerology-for-letter",1375039846,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"chakrates.numerology-test","chakrates.numerology-test",-739455532,null),new cljs.core.Symbol(null,"calculates-numerology-for-letter","calculates-numerology-for-letter",2144232106,null),"test/chakrates/numerology_test.cljs",42,1,38,38,cljs.core.List.EMPTY,null,(cljs.core.truth_(chakrates.numerology_test.calculates_numerology_for_letter)?chakrates.numerology_test.calculates_numerology_for_letter.cljs$lang$test:null)]));
chakrates.numerology_test.calculates_numerology_for_short_word = (function chakrates$numerology_test$calculates_numerology_for_short_word(){
return cljs.test.test_var.call(null,chakrates$numerology_test$calculates_numerology_for_short_word.cljs$lang$var);
});
chakrates.numerology_test.calculates_numerology_for_short_word.cljs$lang$test = (function (){
try{var values__27702__auto__ = cljs.core._conj.call(null,(function (){var x__25632__auto__ = chakrates.numerology.word_to_numerology.call(null,"abc");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),(6));
var result__27703__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__27702__auto__);
if(cljs.core.truth_(result__27703__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(6),cljs.core.list(new cljs.core.Symbol("n","word-to-numerology","n/word-to-numerology",-1099798121,null),"abc")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27702__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(6),cljs.core.list(new cljs.core.Symbol("n","word-to-numerology","n/word-to-numerology",-1099798121,null),"abc")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25632__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27702__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27703__auto__;
}catch (e37188){var t__27740__auto__ = e37188;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(6),cljs.core.list(new cljs.core.Symbol("n","word-to-numerology","n/word-to-numerology",-1099798121,null),"abc")),new cljs.core.Keyword(null,"actual","actual",107306363),t__27740__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

chakrates.numerology_test.calculates_numerology_for_short_word.cljs$lang$var = new cljs.core.Var(function(){return chakrates.numerology_test.calculates_numerology_for_short_word;},new cljs.core.Symbol("chakrates.numerology-test","calculates-numerology-for-short-word","chakrates.numerology-test/calculates-numerology-for-short-word",-378689809,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"chakrates.numerology-test","chakrates.numerology-test",-739455532,null),new cljs.core.Symbol(null,"calculates-numerology-for-short-word","calculates-numerology-for-short-word",-72699477,null),"test/chakrates/numerology_test.cljs",46,1,41,41,cljs.core.List.EMPTY,null,(cljs.core.truth_(chakrates.numerology_test.calculates_numerology_for_short_word)?chakrates.numerology_test.calculates_numerology_for_short_word.cljs$lang$test:null)]));
chakrates.numerology_test.calculates_numerology_for_weirdly_cased_words = (function chakrates$numerology_test$calculates_numerology_for_weirdly_cased_words(){
return cljs.test.test_var.call(null,chakrates$numerology_test$calculates_numerology_for_weirdly_cased_words.cljs$lang$var);
});
chakrates.numerology_test.calculates_numerology_for_weirdly_cased_words.cljs$lang$test = (function (){
try{var values__27702__auto__ = cljs.core._conj.call(null,(function (){var x__25632__auto__ = chakrates.numerology.word_to_numerology.call(null,"WeirDcAse");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),(6));
var result__27703__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__27702__auto__);
if(cljs.core.truth_(result__27703__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(6),cljs.core.list(new cljs.core.Symbol("n","word-to-numerology","n/word-to-numerology",-1099798121,null),"WeirDcAse")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27702__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(6),cljs.core.list(new cljs.core.Symbol("n","word-to-numerology","n/word-to-numerology",-1099798121,null),"WeirDcAse")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25632__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27702__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27703__auto__;
}catch (e37189){var t__27740__auto__ = e37189;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(6),cljs.core.list(new cljs.core.Symbol("n","word-to-numerology","n/word-to-numerology",-1099798121,null),"WeirDcAse")),new cljs.core.Keyword(null,"actual","actual",107306363),t__27740__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

chakrates.numerology_test.calculates_numerology_for_weirdly_cased_words.cljs$lang$var = new cljs.core.Var(function(){return chakrates.numerology_test.calculates_numerology_for_weirdly_cased_words;},new cljs.core.Symbol("chakrates.numerology-test","calculates-numerology-for-weirdly-cased-words","chakrates.numerology-test/calculates-numerology-for-weirdly-cased-words",-683347179,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"chakrates.numerology-test","chakrates.numerology-test",-739455532,null),new cljs.core.Symbol(null,"calculates-numerology-for-weirdly-cased-words","calculates-numerology-for-weirdly-cased-words",-1450319831,null),"test/chakrates/numerology_test.cljs",55,1,44,44,cljs.core.List.EMPTY,null,(cljs.core.truth_(chakrates.numerology_test.calculates_numerology_for_weirdly_cased_words)?chakrates.numerology_test.calculates_numerology_for_weirdly_cased_words.cljs$lang$test:null)]));
chakrates.numerology_test.calculates_numerology_for_long_word = (function chakrates$numerology_test$calculates_numerology_for_long_word(){
return cljs.test.test_var.call(null,chakrates$numerology_test$calculates_numerology_for_long_word.cljs$lang$var);
});
chakrates.numerology_test.calculates_numerology_for_long_word.cljs$lang$test = (function (){
try{var values__27702__auto__ = cljs.core._conj.call(null,(function (){var x__25632__auto__ = chakrates.numerology.word_to_numerology.call(null,"veryverylongwordthatwegot");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),(4));
var result__27703__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__27702__auto__);
if(cljs.core.truth_(result__27703__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol("n","word-to-numerology","n/word-to-numerology",-1099798121,null),"veryverylongwordthatwegot")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27702__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol("n","word-to-numerology","n/word-to-numerology",-1099798121,null),"veryverylongwordthatwegot")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25632__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27702__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27703__auto__;
}catch (e37190){var t__27740__auto__ = e37190;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol("n","word-to-numerology","n/word-to-numerology",-1099798121,null),"veryverylongwordthatwegot")),new cljs.core.Keyword(null,"actual","actual",107306363),t__27740__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

chakrates.numerology_test.calculates_numerology_for_long_word.cljs$lang$var = new cljs.core.Var(function(){return chakrates.numerology_test.calculates_numerology_for_long_word;},new cljs.core.Symbol("chakrates.numerology-test","calculates-numerology-for-long-word","chakrates.numerology-test/calculates-numerology-for-long-word",1575191104,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"chakrates.numerology-test","chakrates.numerology-test",-739455532,null),new cljs.core.Symbol(null,"calculates-numerology-for-long-word","calculates-numerology-for-long-word",841520924,null),"test/chakrates/numerology_test.cljs",45,1,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(chakrates.numerology_test.calculates_numerology_for_long_word)?chakrates.numerology_test.calculates_numerology_for_long_word.cljs$lang$test:null)]));

//# sourceMappingURL=numerology_test.js.map?rel=1485228963221