import{d as Q,ac as s,ad as N,ae as re,af as x,ag as ue,ah as Y,ai as Z,aj as h,ak as C}from"./vendor.fddf60e6.js";/**
 * Vue 3 Carousel 0.1.30
 * (c) 2021
 * @license MIT
 */const v={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,breakpoints:void 0};function ce(){return new Proxy({value:0,read:0},{get(t,a){return a in t?a==="read"?t[a]:t[a]++:0},set(t,a,o){return t[a]=Math.max(o,0),!0}})}function de(t,a){let o;return function(...l){o&&clearTimeout(o),o=setTimeout(()=>{t(...l),o=null},a)}}function fe(t,a){let o;return function(...l){const f=this;o||(t.apply(f,l),o=!0,setTimeout(()=>o=!1,a))}}function ve(t){var a,o,l;return t?((o=(a=t[0])===null||a===void 0?void 0:a.type)===null||o===void 0?void 0:o.name)==="CarouselSlide"?t:((l=t[0])===null||l===void 0?void 0:l.children)||[]:[]}function me(t,a){if(t.wrapAround)return a-1;switch(t.snapAlign){case"start":return a-t.itemsToShow;case"end":return a-1;case"center":case"center-odd":return a-Math.ceil(t.itemsToShow/2);case"center-even":return a-Math.ceil(t.itemsToShow/2);default:return 0}}function he(t){if(t.wrapAround)return 0;switch(t.snapAlign){case"start":return 0;case"end":return t.itemsToShow-1;case"center":case"center-odd":return Math.floor((t.itemsToShow-1)/2);case"center-even":return Math.floor((t.itemsToShow-2)/2);default:return 0}}function ee(t,a,o,l){return t.wrapAround?a:Math.min(Math.max(a,l),o)}var we=Q({name:"Carousel",props:{itemsToShow:{default:v.itemsToShow,type:Number},itemsToScroll:{default:v.itemsToScroll,type:Number},wrapAround:{default:v.wrapAround,type:Boolean},snapAlign:{default:v.snapAlign,validator(t){return["start","end","center","center-even","center-odd"].includes(t)}},transition:{default:v.transition,type:Number},breakpoints:{default:v.breakpoints,type:Object},autoplay:{default:v.autoplay,type:Number},pauseAutoplayOnHover:{default:v.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:v.mouseDrag,type:Boolean},touchDrag:{default:v.touchDrag,type:Boolean},settings:{default(){return{}},type:Object}},setup(t,{slots:a,emit:o}){var l;const f=s(null),g=s([]),p=s([]),w=s(0),i=s(1),_=ce();let T=s({}),k=Object.assign({},v);const n=N(Object.assign({},v));re(t,()=>{U(),j(),E(),z()});const r=s((l=n.modelValue)!==null&&l!==void 0?l:0),V=s(0),y=s(0),b=s(0),O=s(0);x("config",n),x("slidesBuffer",p),x("slidesCount",i),x("currentSlide",r),x("maxSlide",b),x("minSlide",O),x("slidesCounter",_);function U(){const e=Object.assign(Object.assign({},t),t.settings);T=s(Object.assign({},e.breakpoints)),k=Object.assign(Object.assign({},e),{settings:void 0,breakpoints:void 0})}function j(){const e=Object.keys(T.value).map(d=>Number(d)).sort((d,S)=>+S-+d);let u=Object.assign({},k);e.some(d=>window.matchMedia(`(min-width: ${d}px)`).matches?(u=Object.assign(Object.assign({},u),T.value[d]),!0):!1);let c;for(c in u)n[c]=u[c]}const te=de(()=>{T.value&&(j(),E()),z()},16);function z(){if(!f.value)return;const e=f.value.getBoundingClientRect();w.value=e.width/n.itemsToShow}function E(){i.value=g.value.length,!(i.value<=0)&&(y.value=Math.ceil((i.value-1)/2),b.value=me(n,i.value),O.value=he(n),r.value=ee(n,r.value,b.value,O.value))}function I(){const e=[...Array(i.value).keys()];if(n.wrapAround&&n.itemsToShow+1<=i.value){let d=Math.round((i.value-n.itemsToShow)/2)-r.value;if(n.snapAlign==="end"?d+=Math.floor(n.itemsToShow-1):(n.snapAlign==="center"||n.snapAlign==="center-odd")&&d++,d<0)for(let S=d;S<0;S++)e.push(Number(e.shift()));else for(let S=0;S<d;S++)e.unshift(Number(e.pop()))}p.value=e}ue(()=>{T.value&&(j(),E()),z(),n.autoplay&&n.autoplay>0&&oe(),window.addEventListener("resize",te,{passive:!0})});let m=!1;const L={x:0,y:0},B={x:0,y:0},M=N({x:0,y:0}),$=s(!1),P=s(!1),ne=()=>{P.value=!0},ae=()=>{P.value=!1},W=fe(e=>{m||e.preventDefault(),B.x=m?e.touches[0].clientX:e.clientX,B.y=m?e.touches[0].clientY:e.clientY;const u=B.x-L.x,c=B.y-L.y;M.y=c,M.x=u},16);function F(e){m||e.preventDefault(),m=e.type==="touchstart",!(!m&&e.button!==0||D.value)&&($.value=!0,L.x=m?e.touches[0].clientX:e.clientX,L.y=m?e.touches[0].clientY:e.clientY,document.addEventListener(m?"touchmove":"mousemove",W),document.addEventListener(m?"touchend":"mouseup",G))}function G(){$.value=!1;const e=Math.sign(M.x)*.4,u=Math.round(M.x/w.value+e);let c=ee(n,r.value-u,b.value,O.value);A(c),M.x=0,M.y=0,document.removeEventListener(m?"touchmove":"mousemove",W),document.removeEventListener(m?"touchend":"mouseup",G)}function oe(){setInterval(()=>{n.pauseAutoplayOnHover&&P.value||q()},n.autoplay)}const D=s(!1);function A(e,u=!1){if(r.value===e||D.value)return;const c=i.value-1;if(e>c)return A(e-i.value);if(e<0)return A(e+i.value);D.value=!0,V.value=r.value,r.value=e,u||o("update:modelValue",r.value),setTimeout(()=>{n.wrapAround&&I(),D.value=!1},n.transition)}function q(){let e=r.value+n.itemsToScroll;n.wrapAround||(e=Math.min(e,b.value)),A(e)}function le(){let e=r.value-n.itemsToScroll;n.wrapAround||(e=Math.max(e,O.value)),A(e)}x("nav",{slideTo:A,next:q,prev:le});const J=Y(()=>{let e=p.value.indexOf(r.value);if(n.snapAlign==="center"||n.snapAlign==="center-odd"?e-=(n.itemsToShow-1)/2:n.snapAlign==="center-even"?e-=(n.itemsToShow-2)/2:n.snapAlign==="end"&&(e-=n.itemsToShow-1),!n.wrapAround){const u=i.value-n.itemsToShow,c=0;e=Math.max(Math.min(e,u),c)}return e});x("slidesToScroll",J);const se=Y(()=>({transform:`translateX(${M.x-J.value*w.value}px)`,transition:`${D.value?n.transition:0}ms`})),K=N({slideWidth:w,slidesCount:i,currentSlide:r}),X=a.default||a.slides,H=a.addons;return Z(()=>{const e=i.value!==g.value.length;t.modelValue!==void 0&&r.value!==t.modelValue&&A(Number(t.modelValue),!0),e&&(E(),I()),_.read&&(_.value=g.value.length-1)}),U(),j(),I(),()=>{const e=ve(X==null?void 0:X(K)),u=(H==null?void 0:H(K))||[];g.value=e,e.forEach((S,ie)=>S.props.index=ie);const c=h("ol",{class:"carousel__track",style:se.value,onMousedown:n.mouseDrag?F:null,onTouchstart:n.touchDrag?F:null},e),d=h("div",{class:"carousel__viewport"},c);return h("section",{ref:f,class:"carousel","aria-label":"Gallery",onMouseenter:ne,onMouseleave:ae},[d,u])}}});const pe={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},R=t=>{const a=t.name;if(!a||typeof a!="string")return;const o=pe[a],l=h("path",{d:o});t.title;const f=h("title",null,a);return h("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img"},[f,l])};R.props={name:String,title:String};const ye=(t,{slots:a,attrs:o})=>{const{next:l,prev:f}=a,g=C("nav",{}),p=h("button",{type:"button",class:["carousel__prev",o==null?void 0:o.class],onClick:g.prev},(f==null?void 0:f())||h(R,{name:"arrowLeft"})),w=h("button",{type:"button",class:["carousel__next",o==null?void 0:o.class],onClick:g.next},(l==null?void 0:l())||h(R,{name:"arrowRight"}));return[p,w]};var xe=Q({name:"CarouselSlide",props:{index:{type:Number,default:1}},setup(t,{slots:a}){const o=C("config",N(Object.assign({},v))),l=C("slidesBuffer",s([])),f=C("slidesCounter"),g=C("currentSlide",s(0)),p=C("slidesToScroll",s(0)),w=f.value,i=s(w);o.wrapAround&&(_(),Z(_));function _(){i.value=l.value.indexOf(w)}const T=Y(()=>{const y=o.itemsToShow;return{width:`${1/y*100}%`,order:i.value.toString()}}),k=()=>t.index===g.value,n=()=>{const y=Math.ceil(p.value),b=Math.floor(p.value+o.itemsToShow);return l.value.slice(y,b).includes(t.index)},r=()=>t.index===l.value[Math.ceil(p.value)-1],V=()=>t.index===l.value[Math.floor(p.value+o.itemsToShow)];return()=>{var y;return h("li",{style:T.value,class:{carousel__slide:!0,"carousel__slide--active":k(),"carousel__slide--visible":n(),"carousel__slide--prev":r(),"carousel__slide--next":V()}},(y=a.default)===null||y===void 0?void 0:y.call(a))}}});export{we as C,ye as N,xe as S};
