var c=Object.defineProperty;var a=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;var s=(t,e,o)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,n=(t,e)=>{for(var o in e||(e={}))m.call(e,o)&&s(t,o,e[o]);if(a)for(var o of a(e))i.call(e,o)&&s(t,o,e[o]);return t};import{d as p,l as d,r as f,f as _,g as b,o as h}from"./vendor.5d56a7d4.js";import{S as l}from"./SearchEngine.3c204db7.js";import{_ as g}from"./index.66d3f923.js";import"./bootstrap.esm.29a9ab19.js";import"./bootstrap.bundle.min.b1e20374.js";import"./moment.08a7f518.js";import"./MatchOffer.f3219c47.js";import"./SearchableList.2c1db2f5.js";const j=p({name:"CompanyJobsPage",components:{SearchEngine:l},created(){this.setLayout("CompanyPageLayout")},methods:n({},d(["setLayout"]))}),u={id:"company-jobs",class:"bg-white d-flex"};function y(t,e,o,S,x,C){const r=f("SearchEngine");return h(),_("div",u,[b(r,{show_title:!1})])}var M=g(j,[["render",y]]);export{M as default};
