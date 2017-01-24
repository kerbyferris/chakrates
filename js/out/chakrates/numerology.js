// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('chakrates.numerology');
goog.require('cljs.core');
goog.require('clojure.string');
if(typeof chakrates.numerology.alphanumeric_map !== 'undefined'){
} else {
chakrates.numerology.alphanumeric_map = (function (){var charset_lowercase = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.char$,cljs.core.range.cljs$core$IFn$_invoke$arity$2((97),(123)));
var alphabet_as_numbers = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(27));
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,charset_lowercase),alphabet_as_numbers);
})();
}
chakrates.numerology.letters_to_numbers = (function chakrates$numerology$letters_to_numbers(word){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(chakrates.numerology.alphanumeric_map,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.seq(clojure.string.lower_case(word))));
});
chakrates.numerology.word_to_number = (function chakrates$numerology$word_to_number(word){
return cljs.core.long$(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,chakrates.numerology.letters_to_numbers(word)));
});
chakrates.numerology.add_digits = (function chakrates$numerology$add_digits(number){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,cljs.core.seq([cljs.core.str(number)].join(''))));
});
chakrates.numerology.number_to_digit = (function chakrates$numerology$number_to_digit(number){
var n = number;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count([cljs.core.str(n)].join('')))){
return n;
} else {
var G__36391 = chakrates.numerology.add_digits(n);
n = G__36391;
continue;
}
break;
}
});
chakrates.numerology.word_to_numerology = (function chakrates$numerology$word_to_numerology(word){
return chakrates.numerology.number_to_digit(chakrates.numerology.word_to_number(word));
});
