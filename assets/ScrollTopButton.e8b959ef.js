import{d as r,r as n,h as l,p as i,o as c,f as a,i as p,g as d}from"./vendor.ff0bb147.js";import{_}from"./index.f38c7885.js";const f=r({data(){return{visible:!1}},methods:{scrollTop(){window.scrollTo(0,0)},scrollListener(o){this.visible=window.scrollY>150}},created(){window.addEventListener("scroll",this.scrollListener)},beforeDestroy(){window.removeEventListener("scroll",this.scrollListener)}}),m={class:"scrollbutton bottom-style"};function v(o,e,w,u,b,h){const s=n("font-awesome-icon");return l((c(),a("a",{onClick:e[0]||(e[0]=(...t)=>o.scrollTop&&o.scrollTop(...t)),class:"bottom-right"},[p("span",m,[d(s,{icon:"chevron-up"})])],512)),[[i,o.visible]])}var L=_(f,[["render",v]]);export{L as S};
