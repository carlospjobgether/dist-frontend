var i=Object.defineProperty;var o=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var r=(e,t,s)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,a=(e,t)=>{for(var s in t||(t={}))c.call(t,s)&&r(e,s,t[s]);if(o)for(var s of o(t))p.call(t,s)&&r(e,s,t[s]);return e};import{d as m,m as d,l as u,r as f,f as h,g as l,o as _}from"./vendor.c2063c2f.js";import{S as y}from"./SearchEngine.1926c0e3.js";import{_ as g}from"./index.ce41479c.js";import"./bootstrap.esm.29a9ab19.js";import"./moment.08a7f518.js";import"./MatchOffer.1ddb57a9.js";import"./SearchableList.e77393ef.js";const j=m({name:"Opportunities",components:{SearchEngine:y},computed:a({},d("auth",["userData"])),beforeCreate(){const e=document.getElementById("loading");e&&(e.style.display="block")},async created(){this.setLayout("BaseLayout"),(!this.userData.filters||this.userData.filters.length===0)&&Object.keys(this.$route.query).length===0&&this.$router.push({name:"TalentSearchBar"})},methods:a({},u(["setLayout"]))}),b={id:"opportunities",class:"my-auto"};function S(e,t,s,$,B,k){const n=f("search-engine");return _(),h("div",b,[l(n)])}var q=g(j,[["render",S]]);export{q as default};
