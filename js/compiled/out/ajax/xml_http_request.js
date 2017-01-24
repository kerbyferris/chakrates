// Compiled by ClojureScript 1.9.229 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__28182,handler){
var map__28183 = p__28182;
var map__28183__$1 = ((((!((map__28183 == null)))?((((map__28183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28183):map__28183);
var uri = cljs.core.get.call(null,map__28183__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__28183__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__28183__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__28183__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__28183__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__28183__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__28183__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__28183,map__28183__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__28181_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__28181_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__28183,map__28183__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___28195 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___28195)){
var response_type_28196 = temp__4657__auto___28195;
this$__$1.responseType = cljs.core.name.call(null,response_type_28196);
} else {
}

var seq__28185_28197 = cljs.core.seq.call(null,headers);
var chunk__28186_28198 = null;
var count__28187_28199 = (0);
var i__28188_28200 = (0);
while(true){
if((i__28188_28200 < count__28187_28199)){
var vec__28189_28201 = cljs.core._nth.call(null,chunk__28186_28198,i__28188_28200);
var k_28202 = cljs.core.nth.call(null,vec__28189_28201,(0),null);
var v_28203 = cljs.core.nth.call(null,vec__28189_28201,(1),null);
this$__$1.setRequestHeader(k_28202,v_28203);

var G__28204 = seq__28185_28197;
var G__28205 = chunk__28186_28198;
var G__28206 = count__28187_28199;
var G__28207 = (i__28188_28200 + (1));
seq__28185_28197 = G__28204;
chunk__28186_28198 = G__28205;
count__28187_28199 = G__28206;
i__28188_28200 = G__28207;
continue;
} else {
var temp__4657__auto___28208 = cljs.core.seq.call(null,seq__28185_28197);
if(temp__4657__auto___28208){
var seq__28185_28209__$1 = temp__4657__auto___28208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28185_28209__$1)){
var c__25609__auto___28210 = cljs.core.chunk_first.call(null,seq__28185_28209__$1);
var G__28211 = cljs.core.chunk_rest.call(null,seq__28185_28209__$1);
var G__28212 = c__25609__auto___28210;
var G__28213 = cljs.core.count.call(null,c__25609__auto___28210);
var G__28214 = (0);
seq__28185_28197 = G__28211;
chunk__28186_28198 = G__28212;
count__28187_28199 = G__28213;
i__28188_28200 = G__28214;
continue;
} else {
var vec__28192_28215 = cljs.core.first.call(null,seq__28185_28209__$1);
var k_28216 = cljs.core.nth.call(null,vec__28192_28215,(0),null);
var v_28217 = cljs.core.nth.call(null,vec__28192_28215,(1),null);
this$__$1.setRequestHeader(k_28216,v_28217);

var G__28218 = cljs.core.next.call(null,seq__28185_28209__$1);
var G__28219 = null;
var G__28220 = (0);
var G__28221 = (0);
seq__28185_28197 = G__28218;
chunk__28186_28198 = G__28219;
count__28187_28199 = G__28220;
i__28188_28200 = G__28221;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__24798__auto__ = body;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
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
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1485228949916