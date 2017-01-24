// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__31156,handler){
var map__31157 = p__31156;
var map__31157__$1 = ((((!((map__31157 == null)))?((((map__31157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31157):map__31157);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31157__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31157__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31157__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31157__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31157__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31157__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31157__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__31157,map__31157__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__31155_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__31155_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__31157,map__31157__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___31169 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___31169)){
var response_type_31170 = temp__4657__auto___31169;
this$__$1.responseType = cljs.core.name(response_type_31170);
} else {
}

var seq__31159_31171 = cljs.core.seq(headers);
var chunk__31160_31172 = null;
var count__31161_31173 = (0);
var i__31162_31174 = (0);
while(true){
if((i__31162_31174 < count__31161_31173)){
var vec__31163_31175 = chunk__31160_31172.cljs$core$IIndexed$_nth$arity$2(null,i__31162_31174);
var k_31176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31163_31175,(0),null);
var v_31177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31163_31175,(1),null);
this$__$1.setRequestHeader(k_31176,v_31177);

var G__31178 = seq__31159_31171;
var G__31179 = chunk__31160_31172;
var G__31180 = count__31161_31173;
var G__31181 = (i__31162_31174 + (1));
seq__31159_31171 = G__31178;
chunk__31160_31172 = G__31179;
count__31161_31173 = G__31180;
i__31162_31174 = G__31181;
continue;
} else {
var temp__4657__auto___31182 = cljs.core.seq(seq__31159_31171);
if(temp__4657__auto___31182){
var seq__31159_31183__$1 = temp__4657__auto___31182;
if(cljs.core.chunked_seq_QMARK_(seq__31159_31183__$1)){
var c__25870__auto___31184 = cljs.core.chunk_first(seq__31159_31183__$1);
var G__31185 = cljs.core.chunk_rest(seq__31159_31183__$1);
var G__31186 = c__25870__auto___31184;
var G__31187 = cljs.core.count(c__25870__auto___31184);
var G__31188 = (0);
seq__31159_31171 = G__31185;
chunk__31160_31172 = G__31186;
count__31161_31173 = G__31187;
i__31162_31174 = G__31188;
continue;
} else {
var vec__31166_31189 = cljs.core.first(seq__31159_31183__$1);
var k_31190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31166_31189,(0),null);
var v_31191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31166_31189,(1),null);
this$__$1.setRequestHeader(k_31190,v_31191);

var G__31192 = cljs.core.next(seq__31159_31183__$1);
var G__31193 = null;
var G__31194 = (0);
var G__31195 = (0);
seq__31159_31171 = G__31192;
chunk__31160_31172 = G__31193;
count__31161_31173 = G__31194;
i__31162_31174 = G__31195;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__25059__auto__ = body;
if(cljs.core.truth_(or__25059__auto__)){
return or__25059__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
