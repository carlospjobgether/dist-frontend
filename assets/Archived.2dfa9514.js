var l=Object.defineProperty,u=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var f=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,r=(e,t)=>{for(var a in t||(t={}))y.call(t,a)&&f(e,a,t[a]);if(i)for(var a of i(t))C.call(t,a)&&f(e,a,t[a]);return e},d=(e,t)=>u(e,v(t));import{d as g,m as p,l as _,r as j,b as h,h as s,al as k,am as M,j as $,o as n,g as b,q as O,i as w}from"./vendor.3251509c.js";import{_ as T,a as A}from"./MatchOfferCard.4ac5ce54.js";import{a as B}from"./index.0ac40626.js";import"./bootstrap.bundle.min.719ade9c.js";import"./moment.08a7f518.js";import"./utils.1fce72cf.js";const D=g({name:"TalentArchived",components:{MatchOfferCard:T},data(){return{matchOfferType:A.Opportunity,joboffers:[]}},computed:r(r({},p("auth",["userData"])),p("talent",["archived_offers"])),created(){this.getCurrentUser(),this.get_profile_archived_offers().then(e=>this.joboffers=e)},methods:d(r(r({},_("auth",["getCurrentUser"])),_("talent",["get_profile_archived_offers"])),{openMatch(e){this.$router.push({name:"TalentOpportunity",params:{id:e._id}})}})}),x={class:"container favorite_page_container"},N={class:"row"},S={class:"col-12 col-lg-9"},U={class:"d-flex flex-column matchoffers-container"};function V(e,t,a,q,E,F){const m=j("MatchOfferCard");return n(),h("div",x,[s("div",N,[s("div",S,[s("div",U,[e.userData.archived_offers.length>0?(n(!0),h(k,{key:0},M(e.joboffers,o=>b((n(),w(m,{"match-offer":o,"match-offer-type":e.matchOfferType,class:"my-2 new-opportunity",key:o._id,onClick:c=>e.openMatch(o),is_archived_view:!0},null,8,["match-offer","match-offer-type","onClick"])),[[O,e.userData.archived_offers.some(c=>c==o._id)]])),128)):$("",!0)])])])])}var P=B(D,[["render",V]]);export{P as default};
