var _=Object.defineProperty,u=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var i=(e,t,a)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,o=(e,t)=>{for(var a in t||(t={}))y.call(t,a)&&i(e,a,t[a]);if(f)for(var a of f(t))j.call(t,a)&&i(e,a,t[a]);return e},p=(e,t)=>u(e,v(t));import{d as C,m,l as k,r as M,e as d,h as l,al as O,am as $,j as b,o as s,i as g}from"./vendor.e615fd77.js";import{_ as T,a as B}from"./MatchOfferCard.62910410.js";import{a as F}from"./index.c424dd78.js";import"./bootstrap.bundle.min.c0b9082e.js";import"./moment.08a7f518.js";import"./utils.1fce72cf.js";const w=C({name:"TalentFavorites",components:{MatchOfferCard:T},data(){return{matchOfferType:B.Opportunity,joboffers:[]}},computed:o(o({},m("auth",["userData"])),m("talent",["favorite_data"])),created(){this.get_profile_favorites().then(e=>this.joboffers=e)},methods:p(o({},k("talent",["get_profile_favorites"])),{openMatch(e){this.$router.push({name:"TalentOpportunity",params:{id:e._id}})}})}),D={class:"container favorite_page_container"},N={class:"row"},V={class:"col-12 col-lg-9"};function A(e,t,a,E,L,S){var n,c;const h=M("MatchOfferCard");return s(),d("div",D,[l("div",N,[l("div",V,[((c=(n=e.userData)==null?void 0:n.favorites)==null?void 0:c.length)>0?(s(!0),d(O,{key:0},$(e.joboffers,r=>(s(),g(h,{"match-offer":r,"match-offer-type":e.matchOfferType,class:"my-2 new-opportunity",key:r._id,onClick:q=>e.openMatch(r)},null,8,["match-offer","match-offer-type","onClick"]))),128)):b("",!0)])])])}var P=F(w,[["render",A]]);export{P as default};
