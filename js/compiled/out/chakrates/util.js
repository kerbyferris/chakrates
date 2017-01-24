// Compiled by ClojureScript 1.9.229 {}
goog.provide('chakrates.util');
goog.require('cljs.core');
goog.require('chakrates.data');
cljs.core.enable_console_print_BANG_.call(null);
chakrates.util.get_chakra_by_number = (function chakrates$util$get_chakra_by_number(number){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__33273_SHARP_){
return cljs.core._EQ_.call(null,number,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p1__33273_SHARP_));
}),chakrates.data.chakras));
});

//# sourceMappingURL=util.js.map?rel=1485228957633