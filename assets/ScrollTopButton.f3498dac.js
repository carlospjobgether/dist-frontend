import{d as r,r as n,h as l,p as i,o as c,f as a,i as d,g as p}from"./vendor.5d56a7d4.js";import{_}from"./index.2f4e2f9c.js";const m=r({data(){return{visible:!1}},methods:{scrollTop(){window.scrollTo(0,0)},scrollListener(o){this.visible=window.scrollY>150}},created(){window.addEventListener("scroll",this.scrollListener)},beforeDestroy(){window.removeEventListener("scroll",this.scrollListener)}}),v={class:"scrollbutton bottom-style"};function f(o,e,w,u,h,b){const s=n("font-awesome-icon");return l((c(),a("a",{onClick:e[0]||(e[0]=(...t)=>o.scrollTop&&o.scrollTop(...t)),class:"bottom-right"},[d("span",v,[p(s,{icon:"chevron-up"})])],512)),[[i,o.visible]])}var L=_(m,[["render",f]]);export{L as S};
