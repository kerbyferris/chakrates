// Compiled by ClojureScript 1.9.229 {}
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
var args29235 = [];
var len__25873__auto___29238 = arguments.length;
var i__25874__auto___29239 = (0);
while(true){
if((i__25874__auto___29239 < len__25873__auto___29238)){
args29235.push((arguments[i__25874__auto___29239]));

var G__29240 = (i__25874__auto___29239 + (1));
i__25874__auto___29239 = G__29240;
continue;
} else {
}
break;
}

var G__29237 = args29235.length;
switch (G__29237) {
case 2:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29235.length)].join('')));

}
});

cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2 = (function (input,output){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"output","output",-1105869043),output], null);
});

cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1 = (function (singleton){
return cljs_bach.synthesis.subgraph.call(null,singleton,singleton);
});

cljs_bach.synthesis.subgraph.cljs$lang$maxFixedArity = 2;

/**
 * A graph of synthesis nodes without an input, so another graph can't connect to it.
 */
cljs_bach.synthesis.source = (function cljs_bach$synthesis$source(node){
return cljs_bach.synthesis.subgraph.call(null,null,node);
});
/**
 * A graph of synthesis nodes without an output, so it can't connect to another graph.
 */
cljs_bach.synthesis.sink = (function cljs_bach$synthesis$sink(node){
return cljs_bach.synthesis.subgraph.call(null,node,null);
});
/**
 * Convert a synth (actually a reader fn) into a concrete subgraph by supplying context and timing.
 */
cljs_bach.synthesis.run_with = (function cljs_bach$synthesis$run_with(synth,context,at,duration){
return synth.call(null,context,at,duration);
});
/**
 * The destination of the audio context i.e. the speakers.
 */
cljs_bach.synthesis.destination = (function cljs_bach$synthesis$destination(context,at,duration){
return cljs_bach.synthesis.sink.call(null,context.destination);
});
cljs_bach.synthesis.plug = (function cljs_bach$synthesis$plug(param,input,context,at,duration){

if(typeof input === 'number'){
return param.setValueAtTime(input,at);
} else {
return new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs_bach.synthesis.run_with.call(null,input,context,at,duration)).connect(param);
}
});
/**
 * Multiply the signal by level.
 */
cljs_bach.synthesis.gain = (function cljs_bach$synthesis$gain(level){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__29243 = context.createGain();
cljs_bach.synthesis.plug.call(null,G__29243.gain,level,context,at,duration);

return G__29243;
})());
});
});
/**
 * Pass the signal through unaltered.
 */
cljs_bach.synthesis.pass_through = cljs_bach.synthesis.gain.call(null,1.0);
/**
 * Build an envelope out of [segment-duration final-level] coordinates.
 */
cljs_bach.synthesis.envelope = (function cljs_bach$synthesis$envelope(var_args){
var args__25880__auto__ = [];
var len__25873__auto___29251 = arguments.length;
var i__25874__auto___29252 = (0);
while(true){
if((i__25874__auto___29252 < len__25873__auto___29251)){
args__25880__auto__.push((arguments[i__25874__auto___29252]));

var G__29253 = (i__25874__auto___29252 + (1));
i__25874__auto___29252 = G__29253;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});

cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic = (function (corners){
return (function (context,at,duration){
var audio_node = context.createGain();
audio_node.gain.setValueAtTime((0),at);

var x_29254 = at;
var coordinates_29255 = corners;
while(true){
var temp__4657__auto___29256 = coordinates_29255;
if(cljs.core.truth_(temp__4657__auto___29256)){
var vec__29245_29257 = temp__4657__auto___29256;
var seq__29246_29258 = cljs.core.seq.call(null,vec__29245_29257);
var first__29247_29259 = cljs.core.first.call(null,seq__29246_29258);
var seq__29246_29260__$1 = cljs.core.next.call(null,seq__29246_29258);
var vec__29248_29261 = first__29247_29259;
var dx_29262 = cljs.core.nth.call(null,vec__29248_29261,(0),null);
var y_29263 = cljs.core.nth.call(null,vec__29248_29261,(1),null);
var remaining_29264 = seq__29246_29260__$1;
audio_node.gain.linearRampToValueAtTime(y_29263,(x_29254 + dx_29262));

var G__29265 = (dx_29262 + x_29254);
var G__29266 = remaining_29264;
x_29254 = G__29265;
coordinates_29255 = G__29266;
continue;
} else {
}
break;
}

return cljs_bach.synthesis.subgraph.call(null,audio_node);
});
});

cljs_bach.synthesis.envelope.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.envelope.cljs$lang$applyTo = (function (seq29244){
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29244));
});

/**
 * An ADSR envelope that also lets you specify the hold duration.
 */
cljs_bach.synthesis.adshr = (function cljs_bach$synthesis$adshr(attack,decay,sustain,hold,release){
return cljs_bach.synthesis.envelope.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hold,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [release,(0)], null));
});
/**
 * A four-stage envelope.
 */
cljs_bach.synthesis.adsr = (function cljs_bach$synthesis$adsr(attack,decay,sustain,release){
return (function (context,at,duration){
var remainder = (((duration - attack) - decay) - sustain);
var hold = (function (){var x__25129__auto__ = 0.0;
var y__25130__auto__ = remainder;
return ((x__25129__auto__ > y__25130__auto__) ? x__25129__auto__ : y__25130__auto__);
})();
var node = cljs_bach.synthesis.adshr.call(null,attack,decay,sustain,hold,release);
return cljs_bach.synthesis.run_with.call(null,node,context,at,duration);
});
});
/**
 * A simple envelope.
 */
cljs_bach.synthesis.percussive = (function cljs_bach$synthesis$percussive(attack,decay){
return cljs_bach.synthesis.envelope.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,0.0], null));
});
/**
 * Like update-in, but for the node graph a synth will return (and variadic).
 */
cljs_bach.synthesis.update_graph = (function cljs_bach$synthesis$update_graph(var_args){
var args__25880__auto__ = [];
var len__25873__auto___29270 = arguments.length;
var i__25874__auto___29271 = (0);
while(true){
if((i__25874__auto___29271 < len__25873__auto___29270)){
args__25880__auto__.push((arguments[i__25874__auto___29271]));

var G__29272 = (i__25874__auto___29271 + (1));
i__25874__auto___29271 = G__29272;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((1) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((1)),(0),null)):null);
return cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25881__auto__);
});

cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic = (function (f,synths){
return (function (context,at,duration){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,(function (p1__29267_SHARP_){
return cljs_bach.synthesis.run_with.call(null,p1__29267_SHARP_,context,at,duration);
}),synths));
});
});

cljs_bach.synthesis.update_graph.cljs$lang$maxFixedArity = (1);

cljs_bach.synthesis.update_graph.cljs$lang$applyTo = (function (seq29268){
var G__29269 = cljs.core.first.call(null,seq29268);
var seq29268__$1 = cljs.core.next.call(null,seq29268);
return cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic(G__29269,seq29268__$1);
});

/**
 * Use the output of one synth as the input to another.
 */
cljs_bach.synthesis.connect = (function cljs_bach$synthesis$connect(upstream_synth,downstream_synth){
return cljs_bach.synthesis.update_graph.call(null,(function (graph1,graph2){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph1).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph2));

return cljs_bach.synthesis.subgraph.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph1),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph2));
}),upstream_synth,downstream_synth);
});
/**
 * Connect synths in series.
 */
cljs_bach.synthesis.connect__GT_ = (function cljs_bach$synthesis$connect__GT_(var_args){
var args__25880__auto__ = [];
var len__25873__auto___29274 = arguments.length;
var i__25874__auto___29275 = (0);
while(true){
if((i__25874__auto___29275 < len__25873__auto___29274)){
args__25880__auto__.push((arguments[i__25874__auto___29275]));

var G__29276 = (i__25874__auto___29275 + (1));
i__25874__auto___29275 = G__29276;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});

cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return cljs.core.reduce.call(null,cljs_bach.synthesis.connect,nodes);
});

cljs_bach.synthesis.connect__GT_.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq29273){
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29273));
});

/**
 * Join the graphs in parallel, with upstream and downstream as the source and sink.
 */
cljs_bach.synthesis.join = (function cljs_bach$synthesis$join(var_args){
var args__25880__auto__ = [];
var len__25873__auto___29284 = arguments.length;
var i__25874__auto___29285 = (0);
while(true){
if((i__25874__auto___29285 < len__25873__auto___29284)){
args__25880__auto__.push((arguments[i__25874__auto___29285]));

var G__29286 = (i__25874__auto___29285 + (1));
i__25874__auto___29285 = G__29286;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((2) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((2)),(0),null)):null);
return cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25881__auto__);
});

cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__29280_29287 = cljs.core.seq.call(null,graphs);
var chunk__29281_29288 = null;
var count__29282_29289 = (0);
var i__29283_29290 = (0);
while(true){
if((i__29283_29290 < count__29282_29289)){
var graph_29291 = cljs.core._nth.call(null,chunk__29281_29288,i__29283_29290);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_29291).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_29291))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_29291));
} else {
}

var G__29292 = seq__29280_29287;
var G__29293 = chunk__29281_29288;
var G__29294 = count__29282_29289;
var G__29295 = (i__29283_29290 + (1));
seq__29280_29287 = G__29292;
chunk__29281_29288 = G__29293;
count__29282_29289 = G__29294;
i__29283_29290 = G__29295;
continue;
} else {
var temp__4657__auto___29296 = cljs.core.seq.call(null,seq__29280_29287);
if(temp__4657__auto___29296){
var seq__29280_29297__$1 = temp__4657__auto___29296;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29280_29297__$1)){
var c__25609__auto___29298 = cljs.core.chunk_first.call(null,seq__29280_29297__$1);
var G__29299 = cljs.core.chunk_rest.call(null,seq__29280_29297__$1);
var G__29300 = c__25609__auto___29298;
var G__29301 = cljs.core.count.call(null,c__25609__auto___29298);
var G__29302 = (0);
seq__29280_29287 = G__29299;
chunk__29281_29288 = G__29300;
count__29282_29289 = G__29301;
i__29283_29290 = G__29302;
continue;
} else {
var graph_29303 = cljs.core.first.call(null,seq__29280_29297__$1);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_29303).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_29303))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_29303));
} else {
}

var G__29304 = cljs.core.next.call(null,seq__29280_29297__$1);
var G__29305 = null;
var G__29306 = (0);
var G__29307 = (0);
seq__29280_29287 = G__29304;
chunk__29281_29288 = G__29305;
count__29282_29289 = G__29306;
i__29283_29290 = G__29307;
continue;
}
} else {
}
}
break;
}

return cljs_bach.synthesis.subgraph.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(upstream),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(downstream));
});

cljs_bach.synthesis.join.cljs$lang$maxFixedArity = (2);

cljs_bach.synthesis.join.cljs$lang$applyTo = (function (seq29277){
var G__29278 = cljs.core.first.call(null,seq29277);
var seq29277__$1 = cljs.core.next.call(null,seq29277);
var G__29279 = cljs.core.first.call(null,seq29277__$1);
var seq29277__$2 = cljs.core.next.call(null,seq29277__$1);
return cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic(G__29278,G__29279,seq29277__$2);
});

/**
 * Add together synths by connecting them all to the same upstream and downstream gains.
 */
cljs_bach.synthesis.add = (function cljs_bach$synthesis$add(var_args){
var args__25880__auto__ = [];
var len__25873__auto___29309 = arguments.length;
var i__25874__auto___29310 = (0);
while(true){
if((i__25874__auto___29310 < len__25873__auto___29309)){
args__25880__auto__.push((arguments[i__25874__auto___29310]));

var G__29311 = (i__25874__auto___29310 + (1));
i__25874__auto___29310 = G__29311;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});

cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic = (function (synths){
return cljs.core.apply.call(null,cljs_bach.synthesis.update_graph,cljs_bach.synthesis.join,cljs_bach.synthesis.pass_through,cljs_bach.synthesis.pass_through,synths);
});

cljs_bach.synthesis.add.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.add.cljs$lang$applyTo = (function (seq29308){
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29308));
});

cljs_bach.synthesis.raw_buffer = (function cljs_bach$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__29316_29320 = cljs.core.seq.call(null,cljs.core.range.call(null,sample_rate));
var chunk__29317_29321 = null;
var count__29318_29322 = (0);
var i__29319_29323 = (0);
while(true){
if((i__29319_29323 < count__29318_29322)){
var i_29324 = cljs.core._nth.call(null,chunk__29317_29321,i__29319_29323);
(data[i_29324] = generate_bit_BANG_.call(null,i_29324));

var G__29325 = seq__29316_29320;
var G__29326 = chunk__29317_29321;
var G__29327 = count__29318_29322;
var G__29328 = (i__29319_29323 + (1));
seq__29316_29320 = G__29325;
chunk__29317_29321 = G__29326;
count__29318_29322 = G__29327;
i__29319_29323 = G__29328;
continue;
} else {
var temp__4657__auto___29329 = cljs.core.seq.call(null,seq__29316_29320);
if(temp__4657__auto___29329){
var seq__29316_29330__$1 = temp__4657__auto___29329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29316_29330__$1)){
var c__25609__auto___29331 = cljs.core.chunk_first.call(null,seq__29316_29330__$1);
var G__29332 = cljs.core.chunk_rest.call(null,seq__29316_29330__$1);
var G__29333 = c__25609__auto___29331;
var G__29334 = cljs.core.count.call(null,c__25609__auto___29331);
var G__29335 = (0);
seq__29316_29320 = G__29332;
chunk__29317_29321 = G__29333;
count__29318_29322 = G__29334;
i__29319_29323 = G__29335;
continue;
} else {
var i_29336 = cljs.core.first.call(null,seq__29316_29330__$1);
(data[i_29336] = generate_bit_BANG_.call(null,i_29336));

var G__29337 = cljs.core.next.call(null,seq__29316_29330__$1);
var G__29338 = null;
var G__29339 = (0);
var G__29340 = (0);
seq__29316_29320 = G__29337;
chunk__29317_29321 = G__29338;
count__29318_29322 = G__29339;
i__29319_29323 = G__29340;
continue;
}
} else {
}
}
break;
}

return buffer;
});
cljs_bach.synthesis.buffer = cljs.core.memoize.call(null,cljs_bach.synthesis.raw_buffer);
/**
 * Make noise according to the supplied strategy for creating bits.
 */
cljs_bach.synthesis.noise = (function cljs_bach$synthesis$noise(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.source.call(null,(function (){var G__29342 = context.createBufferSource();
G__29342.buffer = cljs_bach.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

G__29342.start(at);

return G__29342;
})());
});
});
/**
 * Random noise.
 */
cljs_bach.synthesis.white_noise = (function (){var white = (function (_){
return ((Math.random() * 2.0) - 1.0);
});
return cljs_bach.synthesis.noise.call(null,white);
})();
/**
 * Make a constant value by creating noise with a fixed value.
 */
cljs_bach.synthesis.constant = (function cljs_bach$synthesis$constant(x){
return cljs_bach.synthesis.noise.call(null,cljs.core.constantly.call(null,x));
});
/**
 * A periodic wave.
 */
cljs_bach.synthesis.oscillator = (function cljs_bach$synthesis$oscillator(type,freq){
return (function (context,at,duration){
return cljs_bach.synthesis.source.call(null,(function (){var G__29344 = context.createOscillator();
G__29344.frequency.value = (0);

cljs_bach.synthesis.plug.call(null,G__29344.frequency,freq,context,at,duration);

G__29344.type = type;

G__29344.start(at);

G__29344.stop(((at + duration) + 1.0));

return G__29344;
})());
});
});
cljs_bach.synthesis.sine = cljs.core.partial.call(null,cljs_bach.synthesis.oscillator,"sine");
cljs_bach.synthesis.sawtooth = cljs.core.partial.call(null,cljs_bach.synthesis.oscillator,"sawtooth");
cljs_bach.synthesis.square = cljs.core.partial.call(null,cljs_bach.synthesis.oscillator,"square");
cljs_bach.synthesis.triangle = cljs.core.partial.call(null,cljs_bach.synthesis.oscillator,"triangle");
/**
 * Attenuate frequencies beyond the cutoff, and intensify the cutoff frequency based on the value of q.
 */
cljs_bach.synthesis.biquad_filter = (function cljs_bach$synthesis$biquad_filter(var_args){
var args29345 = [];
var len__25873__auto___29349 = arguments.length;
var i__25874__auto___29350 = (0);
while(true){
if((i__25874__auto___29350 < len__25873__auto___29349)){
args29345.push((arguments[i__25874__auto___29350]));

var G__29351 = (i__25874__auto___29350 + (1));
i__25874__auto___29350 = G__29351;
continue;
} else {
}
break;
}

var G__29347 = args29345.length;
switch (G__29347) {
case 2:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29345.length)].join('')));

}
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2 = (function (type,freq){
return cljs_bach.synthesis.biquad_filter.call(null,type,freq,1.0);
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3 = (function (type,freq,q){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__29348 = context.createBiquadFilter();
G__29348.frequency.value = (0);

cljs_bach.synthesis.plug.call(null,G__29348.frequency,freq,context,at,duration);

cljs_bach.synthesis.plug.call(null,G__29348.Q,q,context,at,duration);

G__29348.type = type;

return G__29348;
})());
});
});

cljs_bach.synthesis.biquad_filter.cljs$lang$maxFixedArity = 3;

cljs_bach.synthesis.low_pass = cljs.core.partial.call(null,cljs_bach.synthesis.biquad_filter,"lowpass");
cljs_bach.synthesis.high_pass = cljs.core.partial.call(null,cljs_bach.synthesis.biquad_filter,"highpass");
/**
 * Pan the signal left (-1) or right (1).
 */
cljs_bach.synthesis.stereo_panner = (function cljs_bach$synthesis$stereo_panner(pan){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__29354 = context.createStereoPanner();
cljs_bach.synthesis.plug.call(null,G__29354.pan,pan,context,at,duration);

return G__29354;
})());
});
});
/**
 * Delay the signal.
 */
cljs_bach.synthesis.delay_line = (function cljs_bach$synthesis$delay_line(seconds){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var maximum = (5);
var G__29356 = context.createDelay(maximum);
cljs_bach.synthesis.plug.call(null,G__29356.delayTime,seconds,context,at,duration);

return G__29356;
})());
});
});
/**
 * Linear convolution.
 */
cljs_bach.synthesis.convolver = (function cljs_bach$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__29358 = context.createConvolver();
G__29358.buffer = cljs_bach.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

return G__29358;
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
return (((Math.random(i) * 2.0) - 1.0) * Math.pow(((1) - (i / length)),decay));
});})(duration,decay,sample_rate,length))
;
return cljs_bach.synthesis.convolver.call(null,logarithmic_decay);
})();
/**
 * Mix the original signal with one with the effect applied.
 */
cljs_bach.synthesis.enhance = (function cljs_bach$synthesis$enhance(effect,level){
return cljs_bach.synthesis.add.call(null,cljs_bach.synthesis.pass_through,cljs_bach.synthesis.connect__GT_.call(null,effect,cljs_bach.synthesis.gain.call(null,level)));
});

//# sourceMappingURL=synthesis.js.map?rel=1485228953403