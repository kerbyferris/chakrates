// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('cljs_bach.synthesis');
goog.require('cljs.core');
/**
 * Construct an audio context in a way that works even if it's prefixed.
 */
cljs_bach.synthesis.audio_context = (function cljs_bach$synthesis$audio_context(){
if(cljs.core.truth_(window.AudioContext)){
return (new window.AudioContext());
} else {
return (new window.webkitAudioContext());
}
});
/**
 * Return the current time as recorded by the audio context.
 */
cljs_bach.synthesis.current_time = (function cljs_bach$synthesis$current_time(context){
return context.currentTime;
});
cljs_bach.synthesis.subgraph = (function cljs_bach$synthesis$subgraph(var_args){
var args32288 = [];
var len__26134__auto___32291 = arguments.length;
var i__26135__auto___32292 = (0);
while(true){
if((i__26135__auto___32292 < len__26134__auto___32291)){
args32288.push((arguments[i__26135__auto___32292]));

var G__32293 = (i__26135__auto___32292 + (1));
i__26135__auto___32292 = G__32293;
continue;
} else {
}
break;
}

var G__32290 = args32288.length;
switch (G__32290) {
case 2:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32288.length)].join('')));

}
});

cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2 = (function (input,output){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,input,cljs.core.cst$kw$output,output], null);
});

cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1 = (function (singleton){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(singleton,singleton);
});

cljs_bach.synthesis.subgraph.cljs$lang$maxFixedArity = 2;

/**
 * A graph of synthesis nodes without an input, so another graph can't connect to it.
 */
cljs_bach.synthesis.source = (function cljs_bach$synthesis$source(node){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(null,node);
});
/**
 * A graph of synthesis nodes without an output, so it can't connect to another graph.
 */
cljs_bach.synthesis.sink = (function cljs_bach$synthesis$sink(node){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(node,null);
});
/**
 * Convert a synth (actually a reader fn) into a concrete subgraph by supplying context and timing.
 */
cljs_bach.synthesis.run_with = (function cljs_bach$synthesis$run_with(synth,context,at,duration){
return (synth.cljs$core$IFn$_invoke$arity$3 ? synth.cljs$core$IFn$_invoke$arity$3(context,at,duration) : synth.call(null,context,at,duration));
});
/**
 * The destination of the audio context i.e. the speakers.
 */
cljs_bach.synthesis.destination = (function cljs_bach$synthesis$destination(context,at,duration){
return cljs_bach.synthesis.sink(context.destination);
});
cljs_bach.synthesis.plug = (function cljs_bach$synthesis$plug(param,input,context,at,duration){

if(typeof input === 'number'){
return param.setValueAtTime(input,at);
} else {
return cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(cljs_bach.synthesis.run_with(input,context,at,duration)).connect(param);
}
});
/**
 * Multiply the signal by level.
 */
cljs_bach.synthesis.gain = (function cljs_bach$synthesis$gain(level){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__32296 = context.createGain();
cljs_bach.synthesis.plug(G__32296.gain,level,context,at,duration);

return G__32296;
})());
});
});
/**
 * Pass the signal through unaltered.
 */
cljs_bach.synthesis.pass_through = cljs_bach.synthesis.gain(1.0);
/**
 * Build an envelope out of [segment-duration final-level] coordinates.
 */
cljs_bach.synthesis.envelope = (function cljs_bach$synthesis$envelope(var_args){
var args__26141__auto__ = [];
var len__26134__auto___32304 = arguments.length;
var i__26135__auto___32305 = (0);
while(true){
if((i__26135__auto___32305 < len__26134__auto___32304)){
args__26141__auto__.push((arguments[i__26135__auto___32305]));

var G__32306 = (i__26135__auto___32305 + (1));
i__26135__auto___32305 = G__32306;
continue;
} else {
}
break;
}

var argseq__26142__auto__ = ((((0) < args__26141__auto__.length))?(new cljs.core.IndexedSeq(args__26141__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(argseq__26142__auto__);
});

cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic = (function (corners){
return (function (context,at,duration){
var audio_node = context.createGain();
audio_node.gain.setValueAtTime((0),at);

var x_32307 = at;
var coordinates_32308 = corners;
while(true){
var temp__4657__auto___32309 = coordinates_32308;
if(cljs.core.truth_(temp__4657__auto___32309)){
var vec__32298_32310 = temp__4657__auto___32309;
var seq__32299_32311 = cljs.core.seq(vec__32298_32310);
var first__32300_32312 = cljs.core.first(seq__32299_32311);
var seq__32299_32313__$1 = cljs.core.next(seq__32299_32311);
var vec__32301_32314 = first__32300_32312;
var dx_32315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32301_32314,(0),null);
var y_32316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32301_32314,(1),null);
var remaining_32317 = seq__32299_32313__$1;
audio_node.gain.linearRampToValueAtTime(y_32316,(x_32307 + dx_32315));

var G__32318 = (dx_32315 + x_32307);
var G__32319 = remaining_32317;
x_32307 = G__32318;
coordinates_32308 = G__32319;
continue;
} else {
}
break;
}

return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1(audio_node);
});
});

cljs_bach.synthesis.envelope.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.envelope.cljs$lang$applyTo = (function (seq32297){
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32297));
});

/**
 * An ADSR envelope that also lets you specify the hold duration.
 */
cljs_bach.synthesis.adshr = (function cljs_bach$synthesis$adshr(attack,decay,sustain,hold,release){
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hold,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [release,(0)], null)], 0));
});
/**
 * A four-stage envelope.
 */
cljs_bach.synthesis.adsr = (function cljs_bach$synthesis$adsr(attack,decay,sustain,release){
return (function (context,at,duration){
var remainder = (((duration - attack) - decay) - sustain);
var hold = (function (){var x__25390__auto__ = 0.0;
var y__25391__auto__ = remainder;
return ((x__25390__auto__ > y__25391__auto__) ? x__25390__auto__ : y__25391__auto__);
})();
var node = cljs_bach.synthesis.adshr(attack,decay,sustain,hold,release);
return cljs_bach.synthesis.run_with(node,context,at,duration);
});
});
/**
 * A simple envelope.
 */
cljs_bach.synthesis.percussive = (function cljs_bach$synthesis$percussive(attack,decay){
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,0.0], null)], 0));
});
/**
 * Like update-in, but for the node graph a synth will return (and variadic).
 */
cljs_bach.synthesis.update_graph = (function cljs_bach$synthesis$update_graph(var_args){
var args__26141__auto__ = [];
var len__26134__auto___32323 = arguments.length;
var i__26135__auto___32324 = (0);
while(true){
if((i__26135__auto___32324 < len__26134__auto___32323)){
args__26141__auto__.push((arguments[i__26135__auto___32324]));

var G__32325 = (i__26135__auto___32324 + (1));
i__26135__auto___32324 = G__32325;
continue;
} else {
}
break;
}

var argseq__26142__auto__ = ((((1) < args__26141__auto__.length))?(new cljs.core.IndexedSeq(args__26141__auto__.slice((1)),(0),null)):null);
return cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26142__auto__);
});

cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic = (function (f,synths){
return (function (context,at,duration){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32320_SHARP_){
return cljs_bach.synthesis.run_with(p1__32320_SHARP_,context,at,duration);
}),synths));
});
});

cljs_bach.synthesis.update_graph.cljs$lang$maxFixedArity = (1);

cljs_bach.synthesis.update_graph.cljs$lang$applyTo = (function (seq32321){
var G__32322 = cljs.core.first(seq32321);
var seq32321__$1 = cljs.core.next(seq32321);
return cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic(G__32322,seq32321__$1);
});

/**
 * Use the output of one synth as the input to another.
 */
cljs_bach.synthesis.connect = (function cljs_bach$synthesis$connect(upstream_synth,downstream_synth){
return cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic((function (graph1,graph2){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph1).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph2));

return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph1),cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph2));
}),cljs.core.array_seq([upstream_synth,downstream_synth], 0));
});
/**
 * Connect synths in series.
 */
cljs_bach.synthesis.connect__GT_ = (function cljs_bach$synthesis$connect__GT_(var_args){
var args__26141__auto__ = [];
var len__26134__auto___32327 = arguments.length;
var i__26135__auto___32328 = (0);
while(true){
if((i__26135__auto___32328 < len__26134__auto___32327)){
args__26141__auto__.push((arguments[i__26135__auto___32328]));

var G__32329 = (i__26135__auto___32328 + (1));
i__26135__auto___32328 = G__32329;
continue;
} else {
}
break;
}

var argseq__26142__auto__ = ((((0) < args__26141__auto__.length))?(new cljs.core.IndexedSeq(args__26141__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__26142__auto__);
});

cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.connect,nodes);
});

cljs_bach.synthesis.connect__GT_.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq32326){
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32326));
});

/**
 * Join the graphs in parallel, with upstream and downstream as the source and sink.
 */
cljs_bach.synthesis.join = (function cljs_bach$synthesis$join(var_args){
var args__26141__auto__ = [];
var len__26134__auto___32337 = arguments.length;
var i__26135__auto___32338 = (0);
while(true){
if((i__26135__auto___32338 < len__26134__auto___32337)){
args__26141__auto__.push((arguments[i__26135__auto___32338]));

var G__32339 = (i__26135__auto___32338 + (1));
i__26135__auto___32338 = G__32339;
continue;
} else {
}
break;
}

var argseq__26142__auto__ = ((((2) < args__26141__auto__.length))?(new cljs.core.IndexedSeq(args__26141__auto__.slice((2)),(0),null)):null);
return cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26142__auto__);
});

cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__32333_32340 = cljs.core.seq(graphs);
var chunk__32334_32341 = null;
var count__32335_32342 = (0);
var i__32336_32343 = (0);
while(true){
if((i__32336_32343 < count__32335_32342)){
var graph_32344 = chunk__32334_32341.cljs$core$IIndexed$_nth$arity$2(null,i__32336_32343);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_32344).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_32344))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_32344));
} else {
}

var G__32345 = seq__32333_32340;
var G__32346 = chunk__32334_32341;
var G__32347 = count__32335_32342;
var G__32348 = (i__32336_32343 + (1));
seq__32333_32340 = G__32345;
chunk__32334_32341 = G__32346;
count__32335_32342 = G__32347;
i__32336_32343 = G__32348;
continue;
} else {
var temp__4657__auto___32349 = cljs.core.seq(seq__32333_32340);
if(temp__4657__auto___32349){
var seq__32333_32350__$1 = temp__4657__auto___32349;
if(cljs.core.chunked_seq_QMARK_(seq__32333_32350__$1)){
var c__25870__auto___32351 = cljs.core.chunk_first(seq__32333_32350__$1);
var G__32352 = cljs.core.chunk_rest(seq__32333_32350__$1);
var G__32353 = c__25870__auto___32351;
var G__32354 = cljs.core.count(c__25870__auto___32351);
var G__32355 = (0);
seq__32333_32340 = G__32352;
chunk__32334_32341 = G__32353;
count__32335_32342 = G__32354;
i__32336_32343 = G__32355;
continue;
} else {
var graph_32356 = cljs.core.first(seq__32333_32350__$1);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_32356).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_32356))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_32356));
} else {
}

var G__32357 = cljs.core.next(seq__32333_32350__$1);
var G__32358 = null;
var G__32359 = (0);
var G__32360 = (0);
seq__32333_32340 = G__32357;
chunk__32334_32341 = G__32358;
count__32335_32342 = G__32359;
i__32336_32343 = G__32360;
continue;
}
} else {
}
}
break;
}

return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(upstream),cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(downstream));
});

cljs_bach.synthesis.join.cljs$lang$maxFixedArity = (2);

cljs_bach.synthesis.join.cljs$lang$applyTo = (function (seq32330){
var G__32331 = cljs.core.first(seq32330);
var seq32330__$1 = cljs.core.next(seq32330);
var G__32332 = cljs.core.first(seq32330__$1);
var seq32330__$2 = cljs.core.next(seq32330__$1);
return cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic(G__32331,G__32332,seq32330__$2);
});

/**
 * Add together synths by connecting them all to the same upstream and downstream gains.
 */
cljs_bach.synthesis.add = (function cljs_bach$synthesis$add(var_args){
var args__26141__auto__ = [];
var len__26134__auto___32362 = arguments.length;
var i__26135__auto___32363 = (0);
while(true){
if((i__26135__auto___32363 < len__26134__auto___32362)){
args__26141__auto__.push((arguments[i__26135__auto___32363]));

var G__32364 = (i__26135__auto___32363 + (1));
i__26135__auto___32363 = G__32364;
continue;
} else {
}
break;
}

var argseq__26142__auto__ = ((((0) < args__26141__auto__.length))?(new cljs.core.IndexedSeq(args__26141__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(argseq__26142__auto__);
});

cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic = (function (synths){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs_bach.synthesis.update_graph,cljs_bach.synthesis.join,cljs_bach.synthesis.pass_through,cljs_bach.synthesis.pass_through,synths);
});

cljs_bach.synthesis.add.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.add.cljs$lang$applyTo = (function (seq32361){
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32361));
});

cljs_bach.synthesis.raw_buffer = (function cljs_bach$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__32369_32373 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(sample_rate));
var chunk__32370_32374 = null;
var count__32371_32375 = (0);
var i__32372_32376 = (0);
while(true){
if((i__32372_32376 < count__32371_32375)){
var i_32377 = chunk__32370_32374.cljs$core$IIndexed$_nth$arity$2(null,i__32372_32376);
(data[i_32377] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_32377) : generate_bit_BANG_.call(null,i_32377)));

var G__32378 = seq__32369_32373;
var G__32379 = chunk__32370_32374;
var G__32380 = count__32371_32375;
var G__32381 = (i__32372_32376 + (1));
seq__32369_32373 = G__32378;
chunk__32370_32374 = G__32379;
count__32371_32375 = G__32380;
i__32372_32376 = G__32381;
continue;
} else {
var temp__4657__auto___32382 = cljs.core.seq(seq__32369_32373);
if(temp__4657__auto___32382){
var seq__32369_32383__$1 = temp__4657__auto___32382;
if(cljs.core.chunked_seq_QMARK_(seq__32369_32383__$1)){
var c__25870__auto___32384 = cljs.core.chunk_first(seq__32369_32383__$1);
var G__32385 = cljs.core.chunk_rest(seq__32369_32383__$1);
var G__32386 = c__25870__auto___32384;
var G__32387 = cljs.core.count(c__25870__auto___32384);
var G__32388 = (0);
seq__32369_32373 = G__32385;
chunk__32370_32374 = G__32386;
count__32371_32375 = G__32387;
i__32372_32376 = G__32388;
continue;
} else {
var i_32389 = cljs.core.first(seq__32369_32383__$1);
(data[i_32389] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_32389) : generate_bit_BANG_.call(null,i_32389)));

var G__32390 = cljs.core.next(seq__32369_32383__$1);
var G__32391 = null;
var G__32392 = (0);
var G__32393 = (0);
seq__32369_32373 = G__32390;
chunk__32370_32374 = G__32391;
count__32371_32375 = G__32392;
i__32372_32376 = G__32393;
continue;
}
} else {
}
}
break;
}

return buffer;
});
cljs_bach.synthesis.buffer = cljs.core.memoize(cljs_bach.synthesis.raw_buffer);
/**
 * Make noise according to the supplied strategy for creating bits.
 */
cljs_bach.synthesis.noise = (function cljs_bach$synthesis$noise(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.source((function (){var G__32398 = context.createBufferSource();
G__32398.buffer = (function (){var G__32399 = generate_bit_BANG_;
var G__32400 = context;
var G__32401 = (duration + 1.0);
return (cljs_bach.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? cljs_bach.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__32399,G__32400,G__32401) : cljs_bach.synthesis.buffer.call(null,G__32399,G__32400,G__32401));
})();

G__32398.start(at);

return G__32398;
})());
});
});
/**
 * Random noise.
 */
cljs_bach.synthesis.white_noise = (function (){var white = (function (_){
return ((Math.random() * 2.0) - 1.0);
});
return cljs_bach.synthesis.noise(white);
})();
/**
 * Make a constant value by creating noise with a fixed value.
 */
cljs_bach.synthesis.constant = (function cljs_bach$synthesis$constant(x){
return cljs_bach.synthesis.noise(cljs.core.constantly(x));
});
/**
 * A periodic wave.
 */
cljs_bach.synthesis.oscillator = (function cljs_bach$synthesis$oscillator(type,freq){
return (function (context,at,duration){
return cljs_bach.synthesis.source((function (){var G__32403 = context.createOscillator();
G__32403.frequency.value = (0);

cljs_bach.synthesis.plug(G__32403.frequency,freq,context,at,duration);

G__32403.type = type;

G__32403.start(at);

G__32403.stop(((at + duration) + 1.0));

return G__32403;
})());
});
});
cljs_bach.synthesis.sine = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.oscillator,"sine");
cljs_bach.synthesis.sawtooth = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.oscillator,"sawtooth");
cljs_bach.synthesis.square = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.oscillator,"square");
cljs_bach.synthesis.triangle = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.oscillator,"triangle");
/**
 * Attenuate frequencies beyond the cutoff, and intensify the cutoff frequency based on the value of q.
 */
cljs_bach.synthesis.biquad_filter = (function cljs_bach$synthesis$biquad_filter(var_args){
var args32404 = [];
var len__26134__auto___32408 = arguments.length;
var i__26135__auto___32409 = (0);
while(true){
if((i__26135__auto___32409 < len__26134__auto___32408)){
args32404.push((arguments[i__26135__auto___32409]));

var G__32410 = (i__26135__auto___32409 + (1));
i__26135__auto___32409 = G__32410;
continue;
} else {
}
break;
}

var G__32406 = args32404.length;
switch (G__32406) {
case 2:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32404.length)].join('')));

}
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2 = (function (type,freq){
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3(type,freq,1.0);
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3 = (function (type,freq,q){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__32407 = context.createBiquadFilter();
G__32407.frequency.value = (0);

cljs_bach.synthesis.plug(G__32407.frequency,freq,context,at,duration);

cljs_bach.synthesis.plug(G__32407.Q,q,context,at,duration);

G__32407.type = type;

return G__32407;
})());
});
});

cljs_bach.synthesis.biquad_filter.cljs$lang$maxFixedArity = 3;

cljs_bach.synthesis.low_pass = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.biquad_filter,"lowpass");
cljs_bach.synthesis.high_pass = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.biquad_filter,"highpass");
/**
 * Pan the signal left (-1) or right (1).
 */
cljs_bach.synthesis.stereo_panner = (function cljs_bach$synthesis$stereo_panner(pan){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__32413 = context.createStereoPanner();
cljs_bach.synthesis.plug(G__32413.pan,pan,context,at,duration);

return G__32413;
})());
});
});
/**
 * Delay the signal.
 */
cljs_bach.synthesis.delay_line = (function cljs_bach$synthesis$delay_line(seconds){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var maximum = (5);
var G__32415 = context.createDelay(maximum);
cljs_bach.synthesis.plug(G__32415.delayTime,seconds,context,at,duration);

return G__32415;
})());
});
});
/**
 * Linear convolution.
 */
cljs_bach.synthesis.convolver = (function cljs_bach$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__32420 = context.createConvolver();
G__32420.buffer = (function (){var G__32421 = generate_bit_BANG_;
var G__32422 = context;
var G__32423 = (duration + 1.0);
return (cljs_bach.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? cljs_bach.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__32421,G__32422,G__32423) : cljs_bach.synthesis.buffer.call(null,G__32421,G__32422,G__32423));
})();

return G__32420;
})());
});
});
/**
 * Crude reverb.
 */
cljs_bach.synthesis.reverb = (function (){var duration = (5);
var decay = (3);
var sample_rate = (44100);
var length = (sample_rate * (duration + 1.0));
var logarithmic_decay = ((function (duration,decay,sample_rate,length){
return (function (i){
return (((Math.random(i) * 2.0) - 1.0) * (function (){var G__32424 = ((1) - (i / length));
var G__32425 = decay;
return Math.pow(G__32424,G__32425);
})());
});})(duration,decay,sample_rate,length))
;
return cljs_bach.synthesis.convolver(logarithmic_decay);
})();
/**
 * Mix the original signal with one with the effect applied.
 */
cljs_bach.synthesis.enhance = (function cljs_bach$synthesis$enhance(effect,level){
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_bach.synthesis.pass_through,cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([effect,cljs_bach.synthesis.gain(level)], 0))], 0));
});
