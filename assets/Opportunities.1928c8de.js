var i=Object.defineProperty;var o=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var r=(e,t,s)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,a=(e,t)=>{for(var s in t||(t={}))c.call(t,s)&&r(e,s,t[s]);if(o)for(var s of o(t))p.call(t,s)&&r(e,s,t[s]);return e};import{d as m,m as d,l as u,r as f,f as h,g as l,o as _}from"./vendor.c2063c2f.js";import{S as y}from"./SearchEngine.8bece963.js";import{_ as g}from"./index.c3943a2e.js";import"./bootstrap.esm.29a9ab19.js";import"./moment.08a7f518.js";import"./MatchOffer.1ddb57a9.js";import"./SearchableList.485c27d3.js";const b=m({name:"Opportunities",components:{SearchEngine:y},computed:a({},d("auth",["userData"])),beforeCreate(){const e=document.getElementById("loading");e&&(e.style.display="block")},async created(){this.setLayout("BaseLayout"),(!this.userData.filters||this.userData.filters.length===0)&&Object.keys(this.$route.query).length===0&&this.$router.push({name:"TalentSearchBar"})},methods:a({},u(["setLayout"]))}),j={id:"opportunities",class:"my-auto"};function S(e,t,s,$,B,k){const n=f("search-engine");return _(),h("div",j,[l(n)])}var q=g(b,[["render",S]]);export{q as default};
