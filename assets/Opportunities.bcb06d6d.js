var i=Object.defineProperty;var o=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var r=(e,t,s)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,a=(e,t)=>{for(var s in t||(t={}))c.call(t,s)&&r(e,s,t[s]);if(o)for(var s of o(t))p.call(t,s)&&r(e,s,t[s]);return e};import{d as m,m as u,l as f,r as d,f as l,g as h,o as _}from"./vendor.1286b3e0.js";import{S as y}from"./SearchEngine.6d5bf355.js";import{_ as g}from"./index.9bf87a96.js";import"./moment.08a7f518.js";import"./utils.1fce72cf.js";import"./SearchableList.3af69fe8.js";const b=m({name:"Opportunities",components:{SearchEngine:y},computed:a({},u("auth",["userData"])),beforeCreate(){const e=document.getElementById("loading");e&&(e.style.display="block")},async created(){this.setLayout("BaseLayout"),(!this.userData.filters||this.userData.filters.length===0)&&Object.keys(this.$route.query).length===0&&this.$router.push({name:"TalentSearchBar"})},methods:a({},f(["setLayout"]))}),j={id:"opportunities",class:"my-auto"};function S(e,t,s,$,B,k){const n=d("search-engine");return _(),l("div",j,[h(n)])}var q=g(b,[["render",S]]);export{q as default};
