import{d as n,r as i,o as l,f as a,h as c,l as d,i as s,g as p}from"./vendor.aec0b27f.js";import{_}from"./index.7418e7f2.js";const m=n({data(){return{visible:!1}},methods:{scrollTop(){window.scrollTo(0,0)},scrollListener(e){this.visible=window.scrollY>150}},created(){window.addEventListener("scroll",this.scrollListener)},beforeDestroy(){window.removeEventListener("scroll",this.scrollListener)}}),v={class:"scrolltopbutton"},f={class:"bottom-style"};function h(e,o,g,w,b,u){const t=i("font-awesome-icon");return l(),a("div",v,[c(s("a",{onClick:o[0]||(o[0]=(...r)=>e.scrollTop&&e.scrollTop(...r)),class:"bottom-right"},[s("span",f,[p(t,{icon:"chevron-up"})])],512),[[d,e.visible]])])}var y=_(m,[["render",h]]),B="https://cdn.jsdelivr.net/gh/carlospjobgether/dist-frontend/assets/img/icons/briefcase.svg",L="https://cdn.jsdelivr.net/gh/carlospjobgether/dist-frontend/assets/img/icons/management-type.png";export{y as S,B as _,L as a};
