// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35750){
var map__35775 = p__35750;
var map__35775__$1 = ((((!((map__35775 == null)))?((((map__35775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35775):map__35775);
var m = map__35775__$1;
var n = cljs.core.get.call(null,map__35775__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35775__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35777_35799 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35778_35800 = null;
var count__35779_35801 = (0);
var i__35780_35802 = (0);
while(true){
if((i__35780_35802 < count__35779_35801)){
var f_35803 = cljs.core._nth.call(null,chunk__35778_35800,i__35780_35802);
cljs.core.println.call(null,"  ",f_35803);

var G__35804 = seq__35777_35799;
var G__35805 = chunk__35778_35800;
var G__35806 = count__35779_35801;
var G__35807 = (i__35780_35802 + (1));
seq__35777_35799 = G__35804;
chunk__35778_35800 = G__35805;
count__35779_35801 = G__35806;
i__35780_35802 = G__35807;
continue;
} else {
var temp__4657__auto___35808 = cljs.core.seq.call(null,seq__35777_35799);
if(temp__4657__auto___35808){
var seq__35777_35809__$1 = temp__4657__auto___35808;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35777_35809__$1)){
var c__25609__auto___35810 = cljs.core.chunk_first.call(null,seq__35777_35809__$1);
var G__35811 = cljs.core.chunk_rest.call(null,seq__35777_35809__$1);
var G__35812 = c__25609__auto___35810;
var G__35813 = cljs.core.count.call(null,c__25609__auto___35810);
var G__35814 = (0);
seq__35777_35799 = G__35811;
chunk__35778_35800 = G__35812;
count__35779_35801 = G__35813;
i__35780_35802 = G__35814;
continue;
} else {
var f_35815 = cljs.core.first.call(null,seq__35777_35809__$1);
cljs.core.println.call(null,"  ",f_35815);

var G__35816 = cljs.core.next.call(null,seq__35777_35809__$1);
var G__35817 = null;
var G__35818 = (0);
var G__35819 = (0);
seq__35777_35799 = G__35816;
chunk__35778_35800 = G__35817;
count__35779_35801 = G__35818;
i__35780_35802 = G__35819;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35820 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24798__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35820);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35820)))?cljs.core.second.call(null,arglists_35820):arglists_35820));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35781_35821 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35782_35822 = null;
var count__35783_35823 = (0);
var i__35784_35824 = (0);
while(true){
if((i__35784_35824 < count__35783_35823)){
var vec__35785_35825 = cljs.core._nth.call(null,chunk__35782_35822,i__35784_35824);
var name_35826 = cljs.core.nth.call(null,vec__35785_35825,(0),null);
var map__35788_35827 = cljs.core.nth.call(null,vec__35785_35825,(1),null);
var map__35788_35828__$1 = ((((!((map__35788_35827 == null)))?((((map__35788_35827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35788_35827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35788_35827):map__35788_35827);
var doc_35829 = cljs.core.get.call(null,map__35788_35828__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35830 = cljs.core.get.call(null,map__35788_35828__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35826);

cljs.core.println.call(null," ",arglists_35830);

if(cljs.core.truth_(doc_35829)){
cljs.core.println.call(null," ",doc_35829);
} else {
}

var G__35831 = seq__35781_35821;
var G__35832 = chunk__35782_35822;
var G__35833 = count__35783_35823;
var G__35834 = (i__35784_35824 + (1));
seq__35781_35821 = G__35831;
chunk__35782_35822 = G__35832;
count__35783_35823 = G__35833;
i__35784_35824 = G__35834;
continue;
} else {
var temp__4657__auto___35835 = cljs.core.seq.call(null,seq__35781_35821);
if(temp__4657__auto___35835){
var seq__35781_35836__$1 = temp__4657__auto___35835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35781_35836__$1)){
var c__25609__auto___35837 = cljs.core.chunk_first.call(null,seq__35781_35836__$1);
var G__35838 = cljs.core.chunk_rest.call(null,seq__35781_35836__$1);
var G__35839 = c__25609__auto___35837;
var G__35840 = cljs.core.count.call(null,c__25609__auto___35837);
var G__35841 = (0);
seq__35781_35821 = G__35838;
chunk__35782_35822 = G__35839;
count__35783_35823 = G__35840;
i__35784_35824 = G__35841;
continue;
} else {
var vec__35790_35842 = cljs.core.first.call(null,seq__35781_35836__$1);
var name_35843 = cljs.core.nth.call(null,vec__35790_35842,(0),null);
var map__35793_35844 = cljs.core.nth.call(null,vec__35790_35842,(1),null);
var map__35793_35845__$1 = ((((!((map__35793_35844 == null)))?((((map__35793_35844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35793_35844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35793_35844):map__35793_35844);
var doc_35846 = cljs.core.get.call(null,map__35793_35845__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35847 = cljs.core.get.call(null,map__35793_35845__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35843);

cljs.core.println.call(null," ",arglists_35847);

if(cljs.core.truth_(doc_35846)){
cljs.core.println.call(null," ",doc_35846);
} else {
}

var G__35848 = cljs.core.next.call(null,seq__35781_35836__$1);
var G__35849 = null;
var G__35850 = (0);
var G__35851 = (0);
seq__35781_35821 = G__35848;
chunk__35782_35822 = G__35849;
count__35783_35823 = G__35850;
i__35784_35824 = G__35851;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__35795 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35796 = null;
var count__35797 = (0);
var i__35798 = (0);
while(true){
if((i__35798 < count__35797)){
var role = cljs.core._nth.call(null,chunk__35796,i__35798);
var temp__4657__auto___35852__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35852__$1)){
var spec_35853 = temp__4657__auto___35852__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35853));
} else {
}

var G__35854 = seq__35795;
var G__35855 = chunk__35796;
var G__35856 = count__35797;
var G__35857 = (i__35798 + (1));
seq__35795 = G__35854;
chunk__35796 = G__35855;
count__35797 = G__35856;
i__35798 = G__35857;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35795);
if(temp__4657__auto____$1){
var seq__35795__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35795__$1)){
var c__25609__auto__ = cljs.core.chunk_first.call(null,seq__35795__$1);
var G__35858 = cljs.core.chunk_rest.call(null,seq__35795__$1);
var G__35859 = c__25609__auto__;
var G__35860 = cljs.core.count.call(null,c__25609__auto__);
var G__35861 = (0);
seq__35795 = G__35858;
chunk__35796 = G__35859;
count__35797 = G__35860;
i__35798 = G__35861;
continue;
} else {
var role = cljs.core.first.call(null,seq__35795__$1);
var temp__4657__auto___35862__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35862__$2)){
var spec_35863 = temp__4657__auto___35862__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35863));
} else {
}

var G__35864 = cljs.core.next.call(null,seq__35795__$1);
var G__35865 = null;
var G__35866 = (0);
var G__35867 = (0);
seq__35795 = G__35864;
chunk__35796 = G__35865;
count__35797 = G__35866;
i__35798 = G__35867;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1485228961377