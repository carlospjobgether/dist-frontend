import{d as r,r as n,a1 as i,a9 as a,o as l,b as c,h as d,e as p}from"./vendor.ddc236c0.js";import{_}from"./index.89da645e.js";const m=r({data(){return{visible:!1}},methods:{scrollTop(){window.scrollTo(0,0)},scrollListener(e){this.visible=window.scrollY>150}},created(){window.addEventListener("scroll",this.scrollListener)},beforeDestroy(){window.removeEventListener("scroll",this.scrollListener)}}),v={class:"bottom-style"};function h(e,o,f,w,g,b){const s=n("font-awesome-icon");return i((l(),c("a",{onClick:o[0]||(o[0]=(...t)=>e.scrollTop&&e.scrollTop(...t)),class:"bottom-right"},[d("span",v,[p(s,{icon:"chevron-up"})])],512)),[[a,e.visible]])}var T=_(m,[["render",h]]),y="https://cdn.jsdelivr.net/gh/carlospjobgether/dist-frontend/assets/img/icons/briefcase.svg",B="https://cdn.jsdelivr.net/gh/carlospjobgether/dist-frontend/assets/img/icons/management-type.png";export{T as S,y as _,B as a};
