var m=Object.defineProperty;var t=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;var s=(a,e,o)=>e in a?m(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o,n=(a,e)=>{for(var o in e||(e={}))c.call(e,o)&&s(a,o,e[o]);if(t)for(var o of t(e))i.call(e,o)&&s(a,o,e[o]);return a};import{d as p,l as d,r as f,f as _,g as b,o as h}from"./vendor.5d56a7d4.js";import{S as l}from"./SearchEngine.d4a7a763.js";import{_ as g}from"./index.d4ff660f.js";import"./bootstrap.esm.29a9ab19.js";import"./bootstrap.bundle.min.b1e20374.js";import"./moment.08a7f518.js";import"./MatchOffer.f3219c47.js";import"./SearchableList.e75dbbf8.js";const j=p({name:"CompanyJobsPage",components:{SearchEngine:l},created(){this.setLayout("CompanyPageLayout")},methods:n({},d(["setLayout"]))}),u={id:"company-jobs",class:"bg-white d-flex"};function y(a,e,o,S,x,C){const r=f("SearchEngine");return h(),_("div",u,[b(r,{show_title:!1})])}var M=g(j,[["render",y]]);export{M as default};
