import{d as r,r as n,h as i,l as a,o as l,f as c,i as d,g as p}from"./vendor.40f1fa49.js";import{_}from"./index.018abdc5.js";const m=r({data(){return{visible:!1}},methods:{scrollTop(){window.scrollTo(0,0)},scrollListener(e){this.visible=window.scrollY>150}},created(){window.addEventListener("scroll",this.scrollListener)},beforeDestroy(){window.removeEventListener("scroll",this.scrollListener)}}),v={class:"bottom-style"};function f(e,o,h,g,w,b){const s=n("font-awesome-icon");return i((l(),c("a",{onClick:o[0]||(o[0]=(...t)=>e.scrollTop&&e.scrollTop(...t)),class:"bottom-right"},[d("span",v,[p(s,{icon:"chevron-up"})])],512)),[[a,e.visible]])}var T=_(m,[["render",f]]),y="https://cdn.jsdelivr.net/gh/carlospjobgether/dist-frontend/assets/img/icons/briefcase.svg",B="https://cdn.jsdelivr.net/gh/carlospjobgether/dist-frontend/assets/img/icons/management-type.png";export{T as S,y as _,B as a};
