// Compiled by ClojureScript 1.9.229 {}
goog.provide('chakrates.numerology');
goog.require('cljs.core');
goog.require('clojure.string');
if(typeof chakrates.numerology.alphanumeric_map !== 'undefined'){
} else {
chakrates.numerology.alphanumeric_map = (function (){var charset_lowercase = cljs.core.map.call(null,cljs.core.char$,cljs.core.range.call(null,(97),(123)));
var alphabet_as_numbers = cljs.core.range.call(null,(1),(27));
return cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,charset_lowercase),alphabet_as_numbers);
})();
}
chakrates.numerology.letters_to_numbers = (function chakrates$numerology$letters_to_numbers(word){
return cljs.core.map.call(null,chakrates.numerology.alphanumeric_map,cljs.core.map.call(null,cljs.core.keyword,cljs.core.seq.call(null,clojure.string.lower_case.call(null,word))));
});
chakrates.numerology.word_to_number = (function chakrates$numerology$word_to_number(word){
return cljs.core.long$.call(null,cljs.core.apply.call(null,cljs.core.str,chakrates.numerology.letters_to_numbers.call(null,word)));
});
chakrates.numerology.add_digits = (function chakrates$numerology$add_digits(number){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.int$,cljs.core.seq.call(null,[cljs.core.str(number)].join(''))));
});
chakrates.numerology.number_to_digit = (function chakrates$numerology$number_to_digit(number){
var n = number;
while(true){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,[cljs.core.str(n)].join('')))){
return n;
} else {
var G__33276 = chakrates.numerology.add_digits.call(null,n);
n = G__33276;
continue;
}
break;
}
});
chakrates.numerology.word_to_numerology = (function chakrates$numerology$word_to_numerology(word){
return chakrates.numerology.number_to_digit.call(null,chakrates.numerology.word_to_number.call(null,word));
});

//# sourceMappingURL=numerology.js.map?rel=1485228957653