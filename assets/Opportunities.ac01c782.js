var i=Object.defineProperty;var a=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var n=(e,t,s)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,o=(e,t)=>{for(var s in t||(t={}))c.call(t,s)&&n(e,s,t[s]);if(a)for(var s of a(t))p.call(t,s)&&n(e,s,t[s]);return e};import{d as m,m as u,l as d,r as l,f,g as h,o as _}from"./vendor.ff0bb147.js";import{S as y}from"./SearchEngine.4de04bce.js";import{_ as g}from"./index.61551d34.js";import"./moment.08a7f518.js";import"./utils.1fce72cf.js";import"./autocomplete.esm.3a0a6b0b.js";const b=m({name:"Opportunities",components:{SearchEngine:y},computed:o({},u("auth",["userData"])),beforeCreate(){const e=document.getElementById("loading");e&&(e.style.display="block")},async created(){this.setLayout("BaseLayout"),(!this.userData.filters||this.userData.filters.length===0)&&Object.keys(this.$route.query).length===0&&this.$route.name==="TalentOpportunities"&&this.$router.push({name:"TalentSearchBar"})},methods:o({},d(["setLayout"]))}),j={id:"opportunities",class:"my-auto"};function $(e,t,s,B,S,k){const r=l("search-engine");return _(),f("div",j,[h(r)])}var T=g(b,[["render",$]]);export{T as default};
