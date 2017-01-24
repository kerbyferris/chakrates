// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('chakrates.util');
goog.require('cljs.core');
goog.require('chakrates.data');
cljs.core.enable_console_print_BANG_();
chakrates.util.get_chakra_by_number = (function chakrates$util$get_chakra_by_number(number){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__36388_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(number,cljs.core.cst$kw$number.cljs$core$IFn$_invoke$arity$1(p1__36388_SHARP_));
}),chakrates.data.chakras));
});
