// Compiled by ClojureScript 1.9.229 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('ajax.xml_http_request');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('ajax.protocols');
goog.require('clojure.string');
goog.require('ajax.xhrio');
ajax.core.process_response = (function ajax$core$process_response(response,interceptor){

return ajax.protocols._process_response.call(null,interceptor,response);
});
ajax.core.process_request = (function ajax$core$process_request(request,interceptor){

return ajax.protocols._process_request.call(null,interceptor,request);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25420__auto__,k__25421__auto__){
var self__ = this;
var this__25420__auto____$1 = this;
return cljs.core._lookup.call(null,this__25420__auto____$1,k__25421__auto__,null);
});

ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25422__auto__,k28538,else__25423__auto__){
var self__ = this;
var this__25422__auto____$1 = this;
var G__28540 = (((k28538 instanceof cljs.core.Keyword))?k28538.fqn:null);
switch (G__28540) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28538,else__25423__auto__);

}
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__28541,opts){
var self__ = this;
var map__28542 = p__28541;
var map__28542__$1 = ((((!((map__28542 == null)))?((((map__28542.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28542.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28542):map__28542);
var request__$1 = cljs.core.get.call(null,map__28542__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__28544 = this;
var map__28544__$1 = ((((!((map__28544 == null)))?((((map__28544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28544):map__28544);
var request__$2 = cljs.core.get.call(null,map__28544__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__28546,xhrio){
var self__ = this;
var map__28547 = p__28546;
var map__28547__$1 = ((((!((map__28547 == null)))?((((map__28547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28547):map__28547);
var response__$1 = cljs.core.get.call(null,map__28547__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__28549 = this;
var map__28549__$1 = ((((!((map__28549 == null)))?((((map__28549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28549):map__28549);
var response__$2 = cljs.core.get.call(null,map__28549__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.core.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25434__auto__,writer__25435__auto__,opts__25436__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
var pr_pair__25437__auto__ = ((function (this__25434__auto____$1){
return (function (keyval__25438__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25435__auto__,cljs.core.pr_writer,""," ","",opts__25436__auto__,keyval__25438__auto__);
});})(this__25434__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25435__auto__,pr_pair__25437__auto__,"#ajax.core.StandardInterceptor{",", ","}",opts__25436__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$ = true;

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28537){
var self__ = this;
var G__28537__$1 = this;
return (new cljs.core.RecordIter((0),G__28537__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25418__auto__){
var self__ = this;
var this__25418__auto____$1 = this;
return self__.__meta;
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25414__auto__){
var self__ = this;
var this__25414__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25424__auto__){
var self__ = this;
var this__25424__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25415__auto__){
var self__ = this;
var this__25415__auto____$1 = this;
var h__25233__auto__ = self__.__hash;
if(!((h__25233__auto__ == null))){
return h__25233__auto__;
} else {
var h__25233__auto____$1 = cljs.core.hash_imap.call(null,this__25415__auto____$1);
self__.__hash = h__25233__auto____$1;

return h__25233__auto____$1;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25416__auto__,other__25417__auto__){
var self__ = this;
var this__25416__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24786__auto__ = other__25417__auto__;
if(cljs.core.truth_(and__24786__auto__)){
var and__24786__auto____$1 = (this__25416__auto____$1.constructor === other__25417__auto__.constructor);
if(and__24786__auto____$1){
return cljs.core.equiv_map.call(null,this__25416__auto____$1,other__25417__auto__);
} else {
return and__24786__auto____$1;
}
} else {
return and__24786__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25429__auto__,k__25430__auto__){
var self__ = this;
var this__25429__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__25430__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25429__auto____$1),self__.__meta),k__25430__auto__);
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25430__auto__)),null));
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25427__auto__,k__25428__auto__,G__28537){
var self__ = this;
var this__25427__auto____$1 = this;
var pred__28551 = cljs.core.keyword_identical_QMARK_;
var expr__28552 = k__25428__auto__;
if(cljs.core.truth_(pred__28551.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__28552))){
return (new ajax.core.StandardInterceptor(G__28537,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28551.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__28552))){
return (new ajax.core.StandardInterceptor(self__.name,G__28537,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28551.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__28552))){
return (new ajax.core.StandardInterceptor(self__.name,self__.request,G__28537,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25428__auto__,G__28537),null));
}
}
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25432__auto__){
var self__ = this;
var this__25432__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25419__auto__,G__28537){
var self__ = this;
var this__25419__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,G__28537,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25425__auto__,entry__25426__auto__){
var self__ = this;
var this__25425__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25426__auto__)){
return cljs.core._assoc.call(null,this__25425__auto____$1,cljs.core._nth.call(null,entry__25426__auto__,(0)),cljs.core._nth.call(null,entry__25426__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25425__auto____$1,entry__25426__auto__);
}
});

ajax.core.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.core.StandardInterceptor.cljs$lang$type = true;

ajax.core.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__25454__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/StandardInterceptor");
});

ajax.core.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"ajax.core/StandardInterceptor");
});

ajax.core.__GT_StandardInterceptor = (function ajax$core$__GT_StandardInterceptor(name,request,response){
return (new ajax.core.StandardInterceptor(name,request,response,null,null,null));
});

ajax.core.map__GT_StandardInterceptor = (function ajax$core$map__GT_StandardInterceptor(G__28539){
return (new ajax.core.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__28539),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__28539),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__28539),null,cljs.core.dissoc.call(null,G__28539,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)),null));
});

ajax.core.to_interceptor = (function ajax$core$to_interceptor(m){
return ajax.core.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.core.get_content_type = (function ajax$core$get_content_type(response){
var or__24798__auto__ = ajax.protocols._get_response_header.call(null,response,"Content-Type");
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return "";
}
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.protocols._abort.call(null,this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.exception_message = (function ajax$core$exception_message(e){
return e.message;
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__28555,xhrio){
var map__28558 = p__28555;
var map__28558__$1 = ((((!((map__28558 == null)))?((((map__28558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28558):map__28558);
var description = cljs.core.get.call(null,map__28558__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(ajax.core.exception_message.call(null,e)),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.core.fail = (function ajax$core$fail(var_args){
var args__25880__auto__ = [];
var len__25873__auto___28564 = arguments.length;
var i__25874__auto___28565 = (0);
while(true){
if((i__25874__auto___28565 < len__25873__auto___28564)){
args__25880__auto__.push((arguments[i__25874__auto___28565]));

var G__28566 = (i__25874__auto___28565 + (1));
i__25874__auto___28565 = G__28566;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((3) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((3)),(0),null)):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25881__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq28560){
var G__28561 = cljs.core.first.call(null,seq28560);
var seq28560__$1 = cljs.core.next.call(null,seq28560);
var G__28562 = cljs.core.first.call(null,seq28560__$1);
var seq28560__$2 = cljs.core.next.call(null,seq28560__$1);
var G__28563 = cljs.core.first.call(null,seq28560__$2);
var seq28560__$3 = cljs.core.next.call(null,seq28560__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__28561,G__28562,G__28563,seq28560__$3);
});

ajax.core.content_type_to_request_header = (function ajax$core$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25420__auto__,k__25421__auto__){
var self__ = this;
var this__25420__auto____$1 = this;
return cljs.core._lookup.call(null,this__25420__auto____$1,k__25421__auto__,null);
});

ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25422__auto__,k28569,else__25423__auto__){
var self__ = this;
var this__25422__auto____$1 = this;
var G__28571 = (((k28569 instanceof cljs.core.Keyword))?k28569.fqn:null);
switch (G__28571) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28569,else__25423__auto__);

}
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__28572,request){
var self__ = this;
var map__28573 = p__28572;
var map__28573__$1 = ((((!((map__28573 == null)))?((((map__28573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28573):map__28573);
var content_type__$1 = cljs.core.get.call(null,map__28573__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__28575 = this;
var map__28575__$1 = ((((!((map__28575 == null)))?((((map__28575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28575):map__28575);
var content_type__$2 = cljs.core.get.call(null,map__28575__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__28575,map__28575__$1,content_type__$2,map__28573,map__28573__$1,content_type__$1){
return (function (p1__28567_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.core.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__24798__auto__ = p1__28567_SHARP_;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__28575,map__28575__$1,content_type__$2,map__28573,map__28573__$1,content_type__$1))
);
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__28577,xhrio){
var self__ = this;
var map__28578 = p__28577;
var map__28578__$1 = ((((!((map__28578 == null)))?((((map__28578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28578):map__28578);
var format = map__28578__$1;
var read__$1 = cljs.core.get.call(null,map__28578__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__28580 = this;
var map__28580__$1 = ((((!((map__28580 == null)))?((((map__28580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28580):map__28580);
var format__$1 = map__28580__$1;
var read__$2 = cljs.core.get.call(null,map__28580__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
var G__28583 = status;
switch (G__28583) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e28584){if((e28584 instanceof Object)){
var e = e28584;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e28584;

}
}
}
}catch (e28582){if((e28582 instanceof Object)){
var e = e28582;
var message = e.message;
return ajax.core.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e28582;

}
}});

ajax.core.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25434__auto__,writer__25435__auto__,opts__25436__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
var pr_pair__25437__auto__ = ((function (this__25434__auto____$1){
return (function (keyval__25438__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25435__auto__,cljs.core.pr_writer,""," ","",opts__25436__auto__,keyval__25438__auto__);
});})(this__25434__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25435__auto__,pr_pair__25437__auto__,"#ajax.core.ResponseFormat{",", ","}",opts__25436__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28568){
var self__ = this;
var G__28568__$1 = this;
return (new cljs.core.RecordIter((0),G__28568__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25418__auto__){
var self__ = this;
var this__25418__auto____$1 = this;
return self__.__meta;
});

ajax.core.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25414__auto__){
var self__ = this;
var this__25414__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25424__auto__){
var self__ = this;
var this__25424__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25415__auto__){
var self__ = this;
var this__25415__auto____$1 = this;
var h__25233__auto__ = self__.__hash;
if(!((h__25233__auto__ == null))){
return h__25233__auto__;
} else {
var h__25233__auto____$1 = cljs.core.hash_imap.call(null,this__25415__auto____$1);
self__.__hash = h__25233__auto____$1;

return h__25233__auto____$1;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25416__auto__,other__25417__auto__){
var self__ = this;
var this__25416__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24786__auto__ = other__25417__auto__;
if(cljs.core.truth_(and__24786__auto__)){
var and__24786__auto____$1 = (this__25416__auto____$1.constructor === other__25417__auto__.constructor);
if(and__24786__auto____$1){
return cljs.core.equiv_map.call(null,this__25416__auto____$1,other__25417__auto__);
} else {
return and__24786__auto____$1;
}
} else {
return and__24786__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25429__auto__,k__25430__auto__){
var self__ = this;
var this__25429__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__25430__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25429__auto____$1),self__.__meta),k__25430__auto__);
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25430__auto__)),null));
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25427__auto__,k__25428__auto__,G__28568){
var self__ = this;
var this__25427__auto____$1 = this;
var pred__28585 = cljs.core.keyword_identical_QMARK_;
var expr__28586 = k__25428__auto__;
if(cljs.core.truth_(pred__28585.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__28586))){
return (new ajax.core.ResponseFormat(G__28568,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28585.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__28586))){
return (new ajax.core.ResponseFormat(self__.read,G__28568,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28585.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__28586))){
return (new ajax.core.ResponseFormat(self__.read,self__.description,G__28568,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25428__auto__,G__28568),null));
}
}
}
});

ajax.core.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25432__auto__){
var self__ = this;
var this__25432__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25419__auto__,G__28568){
var self__ = this;
var this__25419__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,G__28568,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25425__auto__,entry__25426__auto__){
var self__ = this;
var this__25425__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25426__auto__)){
return cljs.core._assoc.call(null,this__25425__auto____$1,cljs.core._nth.call(null,entry__25426__auto__,(0)),cljs.core._nth.call(null,entry__25426__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25425__auto____$1,entry__25426__auto__);
}
});

ajax.core.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.core.ResponseFormat.cljs$lang$type = true;

ajax.core.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__25454__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ResponseFormat");
});

ajax.core.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"ajax.core/ResponseFormat");
});

ajax.core.__GT_ResponseFormat = (function ajax$core$__GT_ResponseFormat(read,description,content_type){
return (new ajax.core.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.core.map__GT_ResponseFormat = (function ajax$core$map__GT_ResponseFormat(G__28570){
return (new ajax.core.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__28570),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__28570),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__28570),null,cljs.core.dissoc.call(null,G__28570,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)),null));
});

ajax.core.params_to_str_alt = (function ajax$core$params_to_str_alt(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
ajax.core.vec_param_to_str = (function ajax$core$vec_param_to_str(var_args){
var args28590 = [];
var len__25873__auto___28593 = arguments.length;
var i__25874__auto___28594 = (0);
while(true){
if((i__25874__auto___28594 < len__25873__auto___28593)){
args28590.push((arguments[i__25874__auto___28594]));

var G__28595 = (i__25874__auto___28594 + (1));
i__25874__auto___28594 = G__28595;
continue;
} else {
}
break;
}

var G__28592 = args28590.length;
switch (G__28592) {
case 3:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28590.length)].join('')));

}
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3 = (function (prefix,key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,key){
return (function (value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$lang$maxFixedArity = 3;

ajax.core.param_to_str = (function ajax$core$param_to_str(var_args){
var args28597 = [];
var len__25873__auto___28608 = arguments.length;
var i__25874__auto___28609 = (0);
while(true){
if((i__25874__auto___28609 < len__25873__auto___28608)){
args28597.push((arguments[i__25874__auto___28609]));

var G__28610 = (i__25874__auto___28609 + (1));
i__25874__auto___28609 = G__28610;
continue;
} else {
}
break;
}

var G__28599 = args28597.length;
switch (G__28599) {
case 2:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28597.length)].join('')));

}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,p__28600){
var vec__28601 = p__28600;
var key = cljs.core.nth.call(null,vec__28601,(0),null);
var value = cljs.core.nth.call(null,vec__28601,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (p__28604){
var vec__28605 = p__28604;
var key = cljs.core.nth.call(null,vec__28605,(0),null);
var value = cljs.core.nth.call(null,vec__28605,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});
});

ajax.core.param_to_str.cljs$lang$maxFixedArity = 2;

ajax.core.to_utf8_writer = (function ajax$core$to_utf8_writer(to_str){
return to_str;
});
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__28616){
var vec__28617 = p__28616;
var k = cljs.core.nth.call(null,vec__28617,(0),null);
var v = cljs.core.nth.call(null,vec__28617,(1),null);
return [cljs.core.str(k),cljs.core.str("="),cljs.core.str(v)].join('');
}),cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,null),cljs.core.seq.call(null,params))));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(var_args){
var args28620 = [];
var len__25873__auto___28623 = arguments.length;
var i__25874__auto___28624 = (0);
while(true){
if((i__25874__auto___28624 < len__25873__auto___28623)){
args28620.push((arguments[i__25874__auto___28624]));

var G__28625 = (i__25874__auto___28624 + (1));
i__25874__auto___28624 = G__28625;
continue;
} else {
}
break;
}

var G__28622 = args28620.length;
switch (G__28622) {
case 3:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28620.length)].join('')));

}
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$3 = (function (params,params_to_str,uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(params_to_str.call(null,params))].join('');
} else {
return uri;
}
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (params,params_to_str){
return (function (uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (params){
return (function (params_to_str,uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
});

ajax.core.uri_with_params.cljs$lang$maxFixedArity = 3;

ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ProcessGet = (function (params_to_str,__meta,__extmap,__hash){
this.params_to_str = params_to_str;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25420__auto__,k__25421__auto__){
var self__ = this;
var this__25420__auto____$1 = this;
return cljs.core._lookup.call(null,this__25420__auto____$1,k__25421__auto__,null);
});

ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25422__auto__,k28628,else__25423__auto__){
var self__ = this;
var this__25422__auto____$1 = this;
var G__28630 = (((k28628 instanceof cljs.core.Keyword))?k28628.fqn:null);
switch (G__28630) {
case "params-to-str":
return self__.params_to_str;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28628,else__25423__auto__);

}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__28631){
var self__ = this;
var map__28632 = p__28631;
var map__28632__$1 = ((((!((map__28632 == null)))?((((map__28632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28632):map__28632);
var request = map__28632__$1;
var method = cljs.core.get.call(null,map__28632__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),ajax.core.uri_with_params.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(request),self__.params_to_str)));
} else {
return request;
}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25434__auto__,writer__25435__auto__,opts__25436__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
var pr_pair__25437__auto__ = ((function (this__25434__auto____$1){
return (function (keyval__25438__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25435__auto__,cljs.core.pr_writer,""," ","",opts__25436__auto__,keyval__25438__auto__);
});})(this__25434__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25435__auto__,pr_pair__25437__auto__,"#ajax.core.ProcessGet{",", ","}",opts__25436__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),self__.params_to_str],null))], null),self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IIterable$ = true;

ajax.core.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28627){
var self__ = this;
var G__28627__$1 = this;
return (new cljs.core.RecordIter((0),G__28627__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25418__auto__){
var self__ = this;
var this__25418__auto____$1 = this;
return self__.__meta;
});

ajax.core.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25414__auto__){
var self__ = this;
var this__25414__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25424__auto__){
var self__ = this;
var this__25424__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25415__auto__){
var self__ = this;
var this__25415__auto____$1 = this;
var h__25233__auto__ = self__.__hash;
if(!((h__25233__auto__ == null))){
return h__25233__auto__;
} else {
var h__25233__auto____$1 = cljs.core.hash_imap.call(null,this__25415__auto____$1);
self__.__hash = h__25233__auto____$1;

return h__25233__auto____$1;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25416__auto__,other__25417__auto__){
var self__ = this;
var this__25416__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24786__auto__ = other__25417__auto__;
if(cljs.core.truth_(and__24786__auto__)){
var and__24786__auto____$1 = (this__25416__auto____$1.constructor === other__25417__auto__.constructor);
if(and__24786__auto____$1){
return cljs.core.equiv_map.call(null,this__25416__auto____$1,other__25417__auto__);
} else {
return and__24786__auto____$1;
}
} else {
return and__24786__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25429__auto__,k__25430__auto__){
var self__ = this;
var this__25429__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),null], null), null),k__25430__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25429__auto____$1),self__.__meta),k__25430__auto__);
} else {
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25430__auto__)),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25427__auto__,k__25428__auto__,G__28627){
var self__ = this;
var this__25427__auto____$1 = this;
var pred__28634 = cljs.core.keyword_identical_QMARK_;
var expr__28635 = k__25428__auto__;
if(cljs.core.truth_(pred__28634.call(null,new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),expr__28635))){
return (new ajax.core.ProcessGet(G__28627,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25428__auto__,G__28627),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25432__auto__){
var self__ = this;
var this__25432__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),self__.params_to_str],null))], null),self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25419__auto__,G__28627){
var self__ = this;
var this__25419__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.params_to_str,G__28627,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25425__auto__,entry__25426__auto__){
var self__ = this;
var this__25425__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25426__auto__)){
return cljs.core._assoc.call(null,this__25425__auto____$1,cljs.core._nth.call(null,entry__25426__auto__,(0)),cljs.core._nth.call(null,entry__25426__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25425__auto____$1,entry__25426__auto__);
}
});

ajax.core.ProcessGet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params-to-str","params-to-str",705662419,null)], null);
});

ajax.core.ProcessGet.cljs$lang$type = true;

ajax.core.ProcessGet.cljs$lang$ctorPrSeq = (function (this__25454__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ProcessGet");
});

ajax.core.ProcessGet.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"ajax.core/ProcessGet");
});

ajax.core.__GT_ProcessGet = (function ajax$core$__GT_ProcessGet(params_to_str){
return (new ajax.core.ProcessGet(params_to_str,null,null,null));
});

ajax.core.map__GT_ProcessGet = (function ajax$core$map__GT_ProcessGet(G__28629){
return (new ajax.core.ProcessGet(new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108).cljs$core$IFn$_invoke$arity$1(G__28629),null,cljs.core.dissoc.call(null,G__28629,new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108)),null));
});

ajax.core.throw_error = (function ajax$core$throw_error(args){
throw (new Error([cljs.core.str(args)].join('')));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25420__auto__,k__25421__auto__){
var self__ = this;
var this__25420__auto____$1 = this;
return cljs.core._lookup.call(null,this__25420__auto____$1,k__25421__auto__,null);
});

ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25422__auto__,k28639,else__25423__auto__){
var self__ = this;
var this__25422__auto____$1 = this;
var G__28641 = k28639;
switch (G__28641) {
default:
return cljs.core.get.call(null,self__.__extmap,k28639,else__25423__auto__);

}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__28642){
var self__ = this;
var map__28643 = p__28642;
var map__28643__$1 = ((((!((map__28643 == null)))?((((map__28643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28643):map__28643);
var request = map__28643__$1;
var body = cljs.core.get.call(null,map__28643__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var params = cljs.core.get.call(null,map__28643__$1,new cljs.core.Keyword(null,"params","params",710516235));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25434__auto__,writer__25435__auto__,opts__25436__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
var pr_pair__25437__auto__ = ((function (this__25434__auto____$1){
return (function (keyval__25438__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25435__auto__,cljs.core.pr_writer,""," ","",opts__25436__auto__,keyval__25438__auto__);
});})(this__25434__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25435__auto__,pr_pair__25437__auto__,"#ajax.core.DirectSubmission{",", ","}",opts__25436__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$ = true;

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28638){
var self__ = this;
var G__28638__$1 = this;
return (new cljs.core.RecordIter((0),G__28638__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25418__auto__){
var self__ = this;
var this__25418__auto____$1 = this;
return self__.__meta;
});

ajax.core.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25414__auto__){
var self__ = this;
var this__25414__auto____$1 = this;
return (new ajax.core.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25424__auto__){
var self__ = this;
var this__25424__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25415__auto__){
var self__ = this;
var this__25415__auto____$1 = this;
var h__25233__auto__ = self__.__hash;
if(!((h__25233__auto__ == null))){
return h__25233__auto__;
} else {
var h__25233__auto____$1 = cljs.core.hash_imap.call(null,this__25415__auto____$1);
self__.__hash = h__25233__auto____$1;

return h__25233__auto____$1;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25416__auto__,other__25417__auto__){
var self__ = this;
var this__25416__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24786__auto__ = other__25417__auto__;
if(cljs.core.truth_(and__24786__auto__)){
var and__24786__auto____$1 = (this__25416__auto____$1.constructor === other__25417__auto__.constructor);
if(and__24786__auto____$1){
return cljs.core.equiv_map.call(null,this__25416__auto____$1,other__25417__auto__);
} else {
return and__24786__auto____$1;
}
} else {
return and__24786__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25429__auto__,k__25430__auto__){
var self__ = this;
var this__25429__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__25430__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25429__auto____$1),self__.__meta),k__25430__auto__);
} else {
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25430__auto__)),null));
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25427__auto__,k__25428__auto__,G__28638){
var self__ = this;
var this__25427__auto____$1 = this;
var pred__28645 = cljs.core.keyword_identical_QMARK_;
var expr__28646 = k__25428__auto__;
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25428__auto__,G__28638),null));
});

ajax.core.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25432__auto__){
var self__ = this;
var this__25432__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25419__auto__,G__28638){
var self__ = this;
var this__25419__auto____$1 = this;
return (new ajax.core.DirectSubmission(G__28638,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25425__auto__,entry__25426__auto__){
var self__ = this;
var this__25425__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25426__auto__)){
return cljs.core._assoc.call(null,this__25425__auto____$1,cljs.core._nth.call(null,entry__25426__auto__,(0)),cljs.core._nth.call(null,entry__25426__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25425__auto____$1,entry__25426__auto__);
}
});

ajax.core.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.DirectSubmission.cljs$lang$type = true;

ajax.core.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__25454__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/DirectSubmission");
});

ajax.core.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"ajax.core/DirectSubmission");
});

ajax.core.__GT_DirectSubmission = (function ajax$core$__GT_DirectSubmission(){
return (new ajax.core.DirectSubmission(null,null,null));
});

ajax.core.map__GT_DirectSubmission = (function ajax$core$map__GT_DirectSubmission(G__28640){
return (new ajax.core.DirectSubmission(null,cljs.core.dissoc.call(null,G__28640),null));
});

ajax.core.apply_request_format = (function ajax$core$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25420__auto__,k__25421__auto__){
var self__ = this;
var this__25420__auto____$1 = this;
return cljs.core._lookup.call(null,this__25420__auto____$1,k__25421__auto__,null);
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25422__auto__,k28650,else__25423__auto__){
var self__ = this;
var this__25422__auto____$1 = this;
var G__28652 = k28650;
switch (G__28652) {
default:
return cljs.core.get.call(null,self__.__extmap,k28650,else__25423__auto__);

}
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__28653){
var self__ = this;
var map__28654 = p__28653;
var map__28654__$1 = ((((!((map__28654 == null)))?((((map__28654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28654):map__28654);
var request = map__28654__$1;
var uri = cljs.core.get.call(null,map__28654__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__28654__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__28654__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__28654__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__28654__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__28656 = ajax.core.get_request_format.call(null,format);
var map__28656__$1 = ((((!((map__28656 == null)))?((((map__28656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28656):map__28656);
var write = cljs.core.get.call(null,map__28656__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__28656__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.core.apply_request_format.call(null,write,params):ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__24798__auto__ = headers;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.core.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25434__auto__,writer__25435__auto__,opts__25436__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
var pr_pair__25437__auto__ = ((function (this__25434__auto____$1){
return (function (keyval__25438__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25435__auto__,cljs.core.pr_writer,""," ","",opts__25436__auto__,keyval__25438__auto__);
});})(this__25434__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25435__auto__,pr_pair__25437__auto__,"#ajax.core.ApplyRequestFormat{",", ","}",opts__25436__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28649){
var self__ = this;
var G__28649__$1 = this;
return (new cljs.core.RecordIter((0),G__28649__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25418__auto__){
var self__ = this;
var this__25418__auto____$1 = this;
return self__.__meta;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25414__auto__){
var self__ = this;
var this__25414__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25424__auto__){
var self__ = this;
var this__25424__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25415__auto__){
var self__ = this;
var this__25415__auto____$1 = this;
var h__25233__auto__ = self__.__hash;
if(!((h__25233__auto__ == null))){
return h__25233__auto__;
} else {
var h__25233__auto____$1 = cljs.core.hash_imap.call(null,this__25415__auto____$1);
self__.__hash = h__25233__auto____$1;

return h__25233__auto____$1;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25416__auto__,other__25417__auto__){
var self__ = this;
var this__25416__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24786__auto__ = other__25417__auto__;
if(cljs.core.truth_(and__24786__auto__)){
var and__24786__auto____$1 = (this__25416__auto____$1.constructor === other__25417__auto__.constructor);
if(and__24786__auto____$1){
return cljs.core.equiv_map.call(null,this__25416__auto____$1,other__25417__auto__);
} else {
return and__24786__auto____$1;
}
} else {
return and__24786__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25429__auto__,k__25430__auto__){
var self__ = this;
var this__25429__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__25430__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25429__auto____$1),self__.__meta),k__25430__auto__);
} else {
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25430__auto__)),null));
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25427__auto__,k__25428__auto__,G__28649){
var self__ = this;
var this__25427__auto____$1 = this;
var pred__28658 = cljs.core.keyword_identical_QMARK_;
var expr__28659 = k__25428__auto__;
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25428__auto__,G__28649),null));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25432__auto__){
var self__ = this;
var this__25432__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25419__auto__,G__28649){
var self__ = this;
var this__25419__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(G__28649,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25425__auto__,entry__25426__auto__){
var self__ = this;
var this__25425__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25426__auto__)){
return cljs.core._assoc.call(null,this__25425__auto____$1,cljs.core._nth.call(null,entry__25426__auto__,(0)),cljs.core._nth.call(null,entry__25426__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25425__auto____$1,entry__25426__auto__);
}
});

ajax.core.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ApplyRequestFormat.cljs$lang$type = true;

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__25454__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ApplyRequestFormat");
});

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"ajax.core/ApplyRequestFormat");
});

ajax.core.__GT_ApplyRequestFormat = (function ajax$core$__GT_ApplyRequestFormat(){
return (new ajax.core.ApplyRequestFormat(null,null,null));
});

ajax.core.map__GT_ApplyRequestFormat = (function ajax$core$map__GT_ApplyRequestFormat(G__28651){
return (new ajax.core.ApplyRequestFormat(null,cljs.core.dissoc.call(null,G__28651),null));
});

ajax.core.transit_type = (function ajax$core$transit_type(p__28662){
var map__28665 = p__28662;
var map__28665__$1 = ((((!((map__28665 == null)))?((((map__28665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28665):map__28665);
var type = cljs.core.get.call(null,map__28665__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var or__24798__auto__ = type;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
});
ajax.core.transit_write_fn = (function ajax$core$transit_write_fn(type,request){
var writer = (function (){var or__24798__auto__ = new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return cognitect.transit.writer.call(null,type,request);
}
})();
return ((function (writer){
return (function ajax$core$transit_write_fn_$_transit_write_params(params){
return cognitect.transit.write.call(null,writer,params);
});
;})(writer))
});
ajax.core.transit_request_format = (function ajax$core$transit_request_format(var_args){
var args28667 = [];
var len__25873__auto___28670 = arguments.length;
var i__25874__auto___28671 = (0);
while(true){
if((i__25874__auto___28671 < len__25873__auto___28670)){
args28667.push((arguments[i__25874__auto___28671]));

var G__28672 = (i__25874__auto___28671 + (1));
i__25874__auto___28671 = G__28672;
continue;
} else {
}
break;
}

var G__28669 = args28667.length;
switch (G__28669) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28667.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
var type = ajax.core.transit_type.call(null,request);
var mime_type = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"json","json",1279968570)))?"json":"msgpack");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.transit_write_fn.call(null,type,request),new cljs.core.Keyword(null,"content-type","content-type",-508222634),[cljs.core.str("application/transit+"),cljs.core.str(mime_type)].join('')], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;

ajax.core.transit_read_fn = (function ajax$core$transit_read_fn(request){
var reader = (function (){var or__24798__auto__ = new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),request);
}
})();
return ((function (reader){
return (function ajax$core$transit_read_fn_$_transit_read_response(response){
var data = cognitect.transit.read.call(null,reader,ajax.protocols._body.call(null,response));
if(cljs.core.truth_(new cljs.core.Keyword(null,"raw","raw",1604651272).cljs$core$IFn$_invoke$arity$1(request))){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
;})(reader))
});
ajax.core.transit_response_format = (function ajax$core$transit_response_format(var_args){
var args28674 = [];
var len__25873__auto___28677 = arguments.length;
var i__25874__auto___28678 = (0);
while(true){
if((i__25874__auto___28678 < len__25873__auto___28677)){
args28674.push((arguments[i__25874__auto___28678]));

var G__28679 = (i__25874__auto___28678 + (1));
i__25874__auto___28678 = G__28679;
continue;
} else {
}
break;
}

var G__28676 = args28674.length;
switch (G__28676) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28674.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return ajax.core.transit_response_format.call(null,ajax.core.transit_type.call(null,request),request);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2 = (function (type,request){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.transit_read_fn.call(null,request),new cljs.core.Keyword(null,"description","description",-1428560544),"Transit",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json"], null)], null));
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 2;

ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,ajax.core.params_to_str),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded; charset=utf-8"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(var_args){
var args28681 = [];
var len__25873__auto___28684 = arguments.length;
var i__25874__auto___28685 = (0);
while(true){
if((i__25874__auto___28685 < len__25873__auto___28684)){
args28681.push((arguments[i__25874__auto___28685]));

var G__28686 = (i__25874__auto___28685 + (1));
i__25874__auto___28685 = G__28686;
continue;
} else {
}
break;
}

var G__28683 = args28681.length;
switch (G__28683) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28681.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.protocols._body,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.core.raw_response_format.call(null);
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.text_request_format = (function ajax$core$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,cljs.core.identity),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain; charset=utf-8"], null);
});
ajax.core.text_response_format = ajax.core.raw_response_format;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
ajax.core.strip_prefix = (function ajax$core$strip_prefix(prefix,text){
if(cljs.core.truth_((function (){var and__24786__auto__ = prefix;
if(cljs.core.truth_(and__24786__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__24786__auto__;
}
})())){
return text.substring(prefix.length);
} else {
return text;
}
});
ajax.core.json_read = (function ajax$core$json_read(var_args){
var args28688 = [];
var len__25873__auto___28691 = arguments.length;
var i__25874__auto___28692 = (0);
while(true){
if((i__25874__auto___28692 < len__25873__auto___28691)){
args28688.push((arguments[i__25874__auto___28692]));

var G__28693 = (i__25874__auto___28692 + (1));
i__25874__auto___28692 = G__28693;
continue;
} else {
}
break;
}

var G__28690 = args28688.length;
switch (G__28690) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28688.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;

/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(var_args){
var args28695 = [];
var len__25873__auto___28701 = arguments.length;
var i__25874__auto___28702 = (0);
while(true){
if((i__25874__auto___28702 < len__25873__auto___28701)){
args28695.push((arguments[i__25874__auto___28702]));

var G__28703 = (i__25874__auto___28702 + (1));
i__25874__auto___28702 = G__28703;
continue;
} else {
}
break;
}

var G__28697 = args28695.length;
switch (G__28697) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28695.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__28698){
var map__28699 = p__28698;
var map__28699__$1 = ((((!((map__28699 == null)))?((((map__28699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28699):map__28699);
var prefix = cljs.core.get.call(null,map__28699__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var keywords_QMARK_ = cljs.core.get.call(null,map__28699__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var raw = cljs.core.get.call(null,map__28699__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null)], null));
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.core.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*",ajax.core.raw_response_format], null)], null);
ajax.core.get_format = (function ajax$core$get_format(var_args){
var args28705 = [];
var len__25873__auto___28708 = arguments.length;
var i__25874__auto___28709 = (0);
while(true){
if((i__25874__auto___28709 < len__25873__auto___28708)){
args28705.push((arguments[i__25874__auto___28709]));

var G__28710 = (i__25874__auto___28709 + (1));
i__25874__auto___28709 = G__28710;
continue;
} else {
}
break;
}

var G__28707 = args28705.length;
switch (G__28707) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28705.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;

ajax.core.get_accept_entries = (function ajax$core$get_accept_entries(var_args){
var args28712 = [];
var len__25873__auto___28715 = arguments.length;
var i__25874__auto___28716 = (0);
while(true){
if((i__25874__auto___28716 < len__25873__auto___28715)){
args28712.push((arguments[i__25874__auto___28716]));

var G__28717 = (i__25874__auto___28716 + (1));
i__25874__auto___28716 = G__28717;
continue;
} else {
}
break;
}

var G__28714 = args28712.length;
switch (G__28714) {
case 2:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28712.length)].join('')));

}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});
});

ajax.core.get_accept_entries.cljs$lang$maxFixedArity = 2;

ajax.core.content_type_matches = (function ajax$core$content_type_matches(var_args){
var args28719 = [];
var len__25873__auto___28722 = arguments.length;
var i__25874__auto___28723 = (0);
while(true){
if((i__25874__auto___28723 < len__25873__auto___28722)){
args28719.push((arguments[i__25874__auto___28723]));

var G__28724 = (i__25874__auto___28723 + (1));
i__25874__auto___28723 = G__28724;
continue;
} else {
}
break;
}

var G__28721 = args28719.length;
switch (G__28721) {
case 2:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28719.length)].join('')));

}
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2 = (function (content_type,accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.content_type_matches.cljs$lang$maxFixedArity = 2;

ajax.core.detect_content_type = (function ajax$core$detect_content_type(var_args){
var args28726 = [];
var len__25873__auto___28729 = arguments.length;
var i__25874__auto___28730 = (0);
while(true){
if((i__25874__auto___28730 < len__25873__auto___28729)){
args28726.push((arguments[i__25874__auto___28730]));

var G__28731 = (i__25874__auto___28730 + (1));
i__25874__auto___28730 = G__28731;
continue;
} else {
}
break;
}

var G__28728 = args28726.length;
switch (G__28728) {
case 3:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28726.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,request){
return (function (format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;

ajax.core.get_default_format = (function ajax$core$get_default_format(response,p__28733){
var map__28736 = p__28733;
var map__28736__$1 = ((((!((map__28736 == null)))?((((map__28736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28736):map__28736);
var request = map__28736__$1;
var response_format = cljs.core.get.call(null,map__28736__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.core.detect_content_type.call(null,ajax.core.get_content_type.call(null,response),request);
return ajax.core.get_format.call(null,request,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var args28738 = [];
var len__25873__auto___28741 = arguments.length;
var i__25874__auto___28742 = (0);
while(true){
if((i__25874__auto___28742 < len__25873__auto___28741)){
args28738.push((arguments[i__25874__auto___28742]));

var G__28743 = (i__25874__auto___28742 + (1));
i__25874__auto___28742 = G__28743;
continue;
} else {
}
break;
}

var G__28740 = args28738.length;
switch (G__28740) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28738.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (request,response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;

ajax.core.accept_header = (function ajax$core$accept_header(p__28745){
var map__28748 = p__28745;
var map__28748__$1 = ((((!((map__28748 == null)))?((((map__28748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28748):map__28748);
var request = map__28748__$1;
var response_format = cljs.core.get.call(null,map__28748__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return cljs.core.mapcat.call(null,ajax.core.get_accept_entries.call(null,request),response_format);
} else {
return ajax.core.get_accept_entries.call(null,request,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var args28750 = [];
var len__25873__auto___28753 = arguments.length;
var i__25874__auto___28754 = (0);
while(true){
if((i__25874__auto___28754 < len__25873__auto___28753)){
args28750.push((arguments[i__25874__auto___28754]));

var G__28755 = (i__25874__auto___28754 + (1));
i__25874__auto___28754 = G__28755;
continue;
} else {
}
break;
}

var G__28752 = args28750.length;
switch (G__28752) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28750.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header.call(null,opts);
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),accept], null));
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.get_response_format = (function ajax$core$get_response_format(p__28757){
var map__28760 = p__28757;
var map__28760__$1 = ((((!((map__28760 == null)))?((((map__28760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28760):map__28760);
var opts = map__28760__$1;
var response_format = cljs.core.get.call(null,map__28760__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if((response_format instanceof ajax.core.ResponseFormat)){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return ajax.core.detect_response_format.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,response_format);
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.core.js_handler = (function ajax$core$js_handler(var_args){
var args28762 = [];
var len__25873__auto___28765 = arguments.length;
var i__25874__auto___28766 = (0);
while(true){
if((i__25874__auto___28766 < len__25873__auto___28765)){
args28762.push((arguments[i__25874__auto___28766]));

var G__28767 = (i__25874__auto___28766 + (1));
i__25874__auto___28766 = G__28767;
continue;
} else {
}
break;
}

var G__28764 = args28762.length;
switch (G__28764) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28762.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (handler,interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (handler,interceptors){
return (function (response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return (function (interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;

ajax.core.base_handler = (function ajax$core$base_handler(interceptors,p__28769){
var map__28772 = p__28769;
var map__28772__$1 = ((((!((map__28772 == null)))?((((map__28772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28772):map__28772);
var handler = cljs.core.get.call(null,map__28772__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.call(null,handler,interceptors);
} else {
return ajax.core.throw_error.call(null,"No ajax handler provided.");
}
});
ajax.core.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.core.ProcessGet(ajax.core.params_to_str,null,null,null)),(new ajax.core.DirectSubmission(null,null,null)),(new ajax.core.ApplyRequestFormat(null,null,null))], null);
ajax.core.default_interceptors = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
ajax.core.normalize_request = (function ajax$core$normalize_request(request){
var response_format = ajax.core.get_response_format.call(null,request);
return cljs.core.update.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"method","method",55703592),ajax.core.normalize_method),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),((function (response_format){
return (function (p1__28774_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__24798__auto__ = p1__28774_SHARP_;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_interceptors);
}
})(),ajax.core.request_interceptors);
});})(response_format))
);
});
ajax.core.new_default_api = (function ajax$core$new_default_api(){
return (new goog.net.XhrIo());
});
ajax.core.raw_ajax_request = (function ajax$core$raw_ajax_request(p__28775){
var map__28778 = p__28775;
var map__28778__$1 = ((((!((map__28778 == null)))?((((map__28778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28778):map__28778);
var request = map__28778__$1;
var interceptors = cljs.core.get.call(null,map__28778__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var request__$1 = cljs.core.reduce.call(null,ajax.core.process_request,request,interceptors);
var handler = ajax.core.base_handler.call(null,cljs.core.reverse.call(null,interceptors),request__$1);
var api = (function (){var or__24798__auto__ = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return ajax.core.new_default_api.call(null);
}
})();
return ajax.protocols._js_ajax_request.call(null,api,request__$1,handler);
});
ajax.core.ajax_request = (function ajax$core$ajax_request(request){
return ajax.core.raw_ajax_request.call(null,ajax.core.normalize_request.call(null,request));
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.call(null,format_params);
} else {
var G__28781 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__28781) {
case "transit":
return ajax.core.transit_request_format.call(null,format_params);

break;
case "json":
return ajax.core.json_request_format.call(null);

break;
case "text":
return ajax.core.text_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "url":
return ajax.core.url_request_format.call(null);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_element = (function ajax$core$keyword_response_format_element(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,format),ajax$core$keyword_response_format_element.call(null,cljs.core.second.call(null,format),format_params)], null);
} else {
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.call(null);
} else {
var G__28784 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__28784) {
case "transit":
return ajax.core.transit_response_format.call(null,format_params);

break;
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "text":
return ajax.core.text_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
case "detect":
return ajax.core.detect_response_format.call(null);

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__28786_SHARP_){
return ajax.core.keyword_response_format_element.call(null,p1__28786_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_element.call(null,format,format_params);
}
});
ajax.core.print_response = (function ajax$core$print_response(response){
return cljs.core.println.call(null,"CLJS-AJAX response:",response);
});
ajax.core.default_handler = cljs.core.atom.call(null,ajax.core.print_response);
ajax.core.print_error_response = (function ajax$core$print_error_response(response){
if(typeof console !== 'undefined'){
return console.error(response);
} else {
if(typeof window !== 'undefined'){
return window.alert([cljs.core.str(response)].join(''));
} else {
return cljs.core.println.call(null,"CLJS-AJAX ERROR:",response);

}
}
});
ajax.core.default_error_handler = cljs.core.atom.call(null,ajax.core.print_error_response);
ajax.core.transform_handler = (function ajax$core$transform_handler(p__28787){
var map__28797 = p__28787;
var map__28797__$1 = ((((!((map__28797 == null)))?((((map__28797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28797):map__28797);
var handler = cljs.core.get.call(null,map__28797__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__28797__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__28797__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var h = (function (){var or__24798__auto__ = handler;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_handler);
}
})();
var e = (function (){var or__24798__auto__ = error_handler;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_error_handler);
}
})();
return ((function (h,e,map__28797,map__28797__$1,handler,error_handler,finally$){
return (function ajax$core$transform_handler_$_easy_handler(p__28799){
var vec__28803 = p__28799;
var ok = cljs.core.nth.call(null,vec__28803,(0),null);
var result = cljs.core.nth.call(null,vec__28803,(1),null);
(cljs.core.truth_(ok)?h:e).call(null,result);

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(h,e,map__28797,map__28797__$1,handler,error_handler,finally$))
});
ajax.core.transform_opts = (function ajax$core$transform_opts(p__28806){
var map__28809 = p__28806;
var map__28809__$1 = ((((!((map__28809 == null)))?((((map__28809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28809):map__28809);
var opts = map__28809__$1;
var method = cljs.core.get.call(null,map__28809__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__28809__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var response_format = cljs.core.get.call(null,map__28809__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var params = cljs.core.get.call(null,map__28809__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.call(null,map__28809__$1,new cljs.core.Keyword(null,"body","body",-2049205669));

var needs_format = ((body == null)) && (cljs.core.not_EQ_.call(null,method,"GET"));
var rf = (cljs.core.truth_((function (){var or__24798__auto__ = format;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format.call(null,format,opts):null);
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),rf,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.keyword_response_format.call(null,response_format,opts));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request.call(null,ajax.core.transform_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method)));
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__25880__auto__ = [];
var len__25873__auto___28813 = arguments.length;
var i__25874__auto___28814 = (0);
while(true){
if((i__25874__auto___28814 < len__25873__auto___28813)){
args__25880__auto__.push((arguments[i__25874__auto___28814]));

var G__28815 = (i__25874__auto___28814 + (1));
i__25874__auto___28814 = G__28815;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((1) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25881__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__28402__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__28402__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__28402__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq28811){
var G__28812 = cljs.core.first.call(null,seq28811);
var seq28811__$1 = cljs.core.next.call(null,seq28811);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__28812,seq28811__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__25880__auto__ = [];
var len__25873__auto___28818 = arguments.length;
var i__25874__auto___28819 = (0);
while(true){
if((i__25874__auto___28819 < len__25873__auto___28818)){
args__25880__auto__.push((arguments[i__25874__auto___28819]));

var G__28820 = (i__25874__auto___28819 + (1));
i__25874__auto___28819 = G__28820;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((1) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25881__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__28402__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__28402__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__28402__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq28816){
var G__28817 = cljs.core.first.call(null,seq28816);
var seq28816__$1 = cljs.core.next.call(null,seq28816);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__28817,seq28816__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__25880__auto__ = [];
var len__25873__auto___28823 = arguments.length;
var i__25874__auto___28824 = (0);
while(true){
if((i__25874__auto___28824 < len__25873__auto___28823)){
args__25880__auto__.push((arguments[i__25874__auto___28824]));

var G__28825 = (i__25874__auto___28824 + (1));
i__25874__auto___28824 = G__28825;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((1) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25881__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__28402__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__28402__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__28402__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq28821){
var G__28822 = cljs.core.first.call(null,seq28821);
var seq28821__$1 = cljs.core.next.call(null,seq28821);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__28822,seq28821__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__25880__auto__ = [];
var len__25873__auto___28828 = arguments.length;
var i__25874__auto___28829 = (0);
while(true){
if((i__25874__auto___28829 < len__25873__auto___28828)){
args__25880__auto__.push((arguments[i__25874__auto___28829]));

var G__28830 = (i__25874__auto___28829 + (1));
i__25874__auto___28829 = G__28830;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((1) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25881__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__28402__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__28402__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__28402__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq28826){
var G__28827 = cljs.core.first.call(null,seq28826);
var seq28826__$1 = cljs.core.next.call(null,seq28826);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__28827,seq28826__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__25880__auto__ = [];
var len__25873__auto___28833 = arguments.length;
var i__25874__auto___28834 = (0);
while(true){
if((i__25874__auto___28834 < len__25873__auto___28833)){
args__25880__auto__.push((arguments[i__25874__auto___28834]));

var G__28835 = (i__25874__auto___28834 + (1));
i__25874__auto___28834 = G__28835;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((1) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25881__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__28402__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__28402__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__28402__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq28831){
var G__28832 = cljs.core.first.call(null,seq28831);
var seq28831__$1 = cljs.core.next.call(null,seq28831);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__28832,seq28831__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__25880__auto__ = [];
var len__25873__auto___28838 = arguments.length;
var i__25874__auto___28839 = (0);
while(true){
if((i__25874__auto___28839 < len__25873__auto___28838)){
args__25880__auto__.push((arguments[i__25874__auto___28839]));

var G__28840 = (i__25874__auto___28839 + (1));
i__25874__auto___28839 = G__28840;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((1) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25881__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__28402__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__28402__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__28402__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq28836){
var G__28837 = cljs.core.first.call(null,seq28836);
var seq28836__$1 = cljs.core.next.call(null,seq28836);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__28837,seq28836__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__25880__auto__ = [];
var len__25873__auto___28843 = arguments.length;
var i__25874__auto___28844 = (0);
while(true){
if((i__25874__auto___28844 < len__25873__auto___28843)){
args__25880__auto__.push((arguments[i__25874__auto___28844]));

var G__28845 = (i__25874__auto___28844 + (1));
i__25874__auto___28844 = G__28845;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((1) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25881__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__28402__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__28402__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__28402__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq28841){
var G__28842 = cljs.core.first.call(null,seq28841);
var seq28841__$1 = cljs.core.next.call(null,seq28841);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__28842,seq28841__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__25880__auto__ = [];
var len__25873__auto___28848 = arguments.length;
var i__25874__auto___28849 = (0);
while(true){
if((i__25874__auto___28849 < len__25873__auto___28848)){
args__25880__auto__.push((arguments[i__25874__auto___28849]));

var G__28850 = (i__25874__auto___28849 + (1));
i__25874__auto___28849 = G__28850;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((1) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25881__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__28402__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PATCH",(((f__28402__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__28402__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq28846){
var G__28847 = cljs.core.first.call(null,seq28846);
var seq28846__$1 = cljs.core.next.call(null,seq28846);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__28847,seq28846__$1);
});


//# sourceMappingURL=core.js.map?rel=1485228951862