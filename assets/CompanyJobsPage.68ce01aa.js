var c=Object.defineProperty;var t=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;var s=(a,e,o)=>e in a?c(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o,n=(a,e)=>{for(var o in e||(e={}))m.call(e,o)&&s(a,o,e[o]);if(t)for(var o of t(e))i.call(e,o)&&s(a,o,e[o]);return a};import{d as p,k as f,r as d,f as _,g as h,o as b}from"./vendor.41853ef0.js";import{S as l}from"./SearchEngine.b5ea926c.js";import{_ as g}from"./index.f8142d46.js";import"./bootstrap.esm.0ba1a913.js";import"./bootstrap.bundle.min.ac9bf2c0.js";import"./moment.08a7f518.js";import"./MatchOffer.f3219c47.js";import"./SearchableList.30ac8995.js";const j=p({name:"CompanyJobsPage",components:{SearchEngine:l},created(){this.setLayout("CompanyPageLayout")},methods:n({},f(["setLayout"]))}),u={id:"company-jobs",class:"bg-white d-flex"};function y(a,e,o,S,x,C){const r=d("SearchEngine");return b(),_("div",u,[h(r,{show_title:!1})])}var M=g(j,[["render",y]]);export{M as default};
