import{d as A,am as E,an as se,ad as S,ae as $,ah as te,ai as N,e as T,o as m,f as p,i as s,h as r,g as O,w as R,t as B,ao as a,ap as M,aq as U,n as j,ar as z,ab as F,ac as J,q as W,p as C,as as oe,at as le,y as G,au as ne}from"./vendor.e144c39d.js";import{D as ae}from"./bootstrap.esm.f2db94b8.js";import{D as re,S as H}from"./DropdownVanilla.3d5893b6.js";import{_ as ce}from"./index.27056029.js";const k=v=>(oe("data-v-756134b9"),v=v(),le(),v),ie={id:"search-bar",class:"w-100 bg-white border-0 p-3 rounded-12 fs-14"},de={class:"row"},_e={class:"col-12 col-lg-11"},ue={class:"row mx-0"},me={class:"col-12 col-md-6 col-lg-4"},pe={class:"fw-medium mb-2"},he={class:"position-relative right-bar"},fe={class:"",style:{"padding-top":"12px","padding-bottom":"12px"}},be={class:"fs-12"},ge={class:"mb-1"},ve=C(),we=k(()=>s("br",null,null,-1)),ye={class:"fs-10"},Se={class:"mb-1"},ke=C(),xe=k(()=>s("br",null,null,-1)),$e={class:"fs-10"},Be={class:"mb-1"},je=C(),Ce=k(()=>s("br",null,null,-1)),De={class:"fs-10"},Ve={class:"col-12 col-md-6 col-lg-4"},Le={class:"position-relative"},qe={class:"fw-medium mb-2"},Ie=["placeholder"],Ae={key:0,class:"position-relative"},Ee={class:"dropdown-menu w-100 show","aria-labelledby":"btn_search"},Ne=["onClick"],Te={class:"col-12 col-md-6 col-lg-4 offset-md-3 offset-lg-0 mt-md-2 mt-lg-0"},Oe={class:"position-relative"},Re={class:"fw-medium mb-2"},Me={class:"position-relative right-bar"},Ue=["placeholder","disabled"],ze={key:0,class:"position-relative"},Fe={class:"dropdown-menu w-100 show","aria-labelledby":"btn_search"},Je=["onClick"],We={class:"col-12 col-md-4 col-lg-1 offset-md-4 offset-lg-0 mt-3 mt-lg-0 px-4 px-md-3 d-flex align-items-end search_button_container"},Ge={class:"d-lg-none"},He=k(()=>s("i",{class:"ms-2 ms-lg-0 fas fa-search fs-20 align-middle"},null,-1)),Ke=A({setup(v){const y=E();se();const w=S(null),i=S(null);let o=$({remote:"",location:{name:"",model:"",id:""},job_reference:{name:"",id:""}}),f=window.localStorage.getItem("userLang"),d="";f?d=f:(f=navigator.language,f.includes("es")?d="es":f.includes("fr")?d="fr":d="en"),te(()=>{const e=document.getElementById("loading");e&&(e.style.display="none");const t=[].slice.call(document.querySelectorAll(".search-bar__dropdown-toggle"));console.log(t),t.map(function(n){return new ae(n)})});const D=N(()=>o.remote=="nomad"&&o.job_reference.id!=""||o.remote!=""&&o.location.id!=""&&o.job_reference.id!=""),K=()=>{var e;o.remote="nomad",o.location.name="",o.location.id="",_.value="Worldwide",i.value&&((e=i.value)==null||e.focus())},V=e=>{var t;o.remote=e,i.value&&((t=i.value)==null||t.focus())};let _=S(""),b=$([]);const P=()=>{const e=`locations/searchLocation/${_.value}`;b.splice(0),_.value.length>2&&G.get(e,{params:{lang:d}}).then(t=>{const n=t.data;b.push(...n)}).then(()=>{Array.prototype.forEach.call(document.querySelectorAll(".custom-scroll"),t=>new H(t))})},Q=(e,t)=>{var u,l,c,x;let n="";return e.region?n=`${(l=(u=e==null?void 0:e.region)==null?void 0:u.country)==null?void 0:l.name}, ${(c=e==null?void 0:e.region)==null?void 0:c.name}, ${e==null?void 0:e.name}`:e.country?n=`${(x=e==null?void 0:e.country)==null?void 0:x.name}, ${e==null?void 0:e.name}`:n=e==null?void 0:e.name,n},L=()=>{_.value="",b.splice(0)},X=(e,t)=>{var n,u,l,c;o.location.name=e.name,o.location.id=e._id,e.region?o.location.name=`${(u=(n=e==null?void 0:e.region)==null?void 0:n.country)==null?void 0:u.name}, ${(l=e==null?void 0:e.region)==null?void 0:l.name}, ${e==null?void 0:e.name}`:e.country?o.location.name=`${(c=e==null?void 0:e.country)==null?void 0:c.name}, ${e==null?void 0:e.name}`:o.location.name=e==null?void 0:e.name,t==0?o.location.model="cities":t==1?o.location.model="regions":t==2?o.location.model="countries":t==3&&(o.location.model="continents"),L()};let h=S(""),g=$([]);const Y=()=>{const e=`job-reference/searchJobreference/${h.value}`;g.splice(0),h.value.length>2&&G.get(e,{params:{lang:d}}).then(t=>{const n=t.data;g.push(...n)}).then(()=>{Array.prototype.forEach.call(document.querySelectorAll(".custom-scroll"),t=>new H(t))})},q=e=>{let t="";return d=="fr"?t=e.name_fr:d=="es"?t=e.name_es:t=e.name_en,t},I=()=>{h.value="",g.splice(0)},Z=e=>{var t;o.job_reference.name=q(e),o.job_reference.id=e._id,I(),w.value&&((t=w.value)==null||t.focus())},ee=()=>{if(D.value){const e={};o.remote!=""&&(e.remote=o.remote),o.job_reference.id!=""&&(e.job_reference=o.job_reference.id),o.location.id!=""&&o.location.model!=""&&(e.locations=o.location.id),e.refresh=!0,y.push({name:"TalentOpportunities",query:e})}};return(e,t)=>{const n=T("t"),u=T("debounce");return m(),p("div",ie,[s("div",de,[s("div",_e,[s("div",ue,[s("div",me,[r(s("p",pe,null,512),[[n,"SearchBar.remote.title"]]),s("div",he,[O(re,null,{dropdown_btn:R(()=>[s("div",fe,[s("span",be,B(a(o).remote==""?e.$t("SearchBar.remote.select"):e.$t(`SearchBar.remote.${a(o).remote}_title`)),1)])]),dropdown_li:R(()=>[s("ul",null,[s("li",{class:"my-2 py-2 clickable break-spaces dropdown-item fs-14 rounded",onClick:t[0]||(t[0]=l=>V("full_remote"))},[r(s("span",ge,null,512),[[n,"SearchBar.remote.full_remote_title"]]),ve,we,r(s("span",ye,null,512),[[n,"SearchBar.remote.full_remote_sub-title"]])]),s("li",{class:"py-2 mb-2 clickable break-spaces dropdown-item fs-14 rounded",onClick:t[1]||(t[1]=l=>V("hybrid"))},[r(s("span",Se,null,512),[[n,"SearchBar.remote.hybrid_title"]]),ke,xe,r(s("span",$e,null,512),[[n,"SearchBar.remote.hybrid_sub-title"]])]),s("li",{class:"mb-2 py-2 clickable break-spaces dropdown-item fs-14 rounded",onClick:K},[r(s("span",Be,null,512),[[n,"SearchBar.remote.nomad_title"]]),je,Ce,r(s("span",De,null,512),[[n,"SearchBar.remote.nomad_sub-title"]])])])]),_:1})])]),s("div",Ve,[s("div",Le,[r(s("p",qe,null,512),[[n,"SearchBar.job_reference.title"]]),r(s("input",{type:"text",id:"job_reference-search",ref:(l,c)=>{c.job_reference_input=l,i.value=l},"onUpdate:modelValue":t[2]||(t[2]=l=>U(h)?h.value=l:h=l),style:{"padding-top":"12px","padding-bottom":"12px"},class:"form-control searchable-list__input fs-12",autocomplete:"off",placeholder:a(o).job_reference.name==""?e.$t("SearchBar.job_reference.select"):a(o).job_reference.name},null,8,Ie),[[M,a(h)],[u,Y,"500ms"]]),s("div",{class:j(["position-absolute custom-scroll w-100",{h_0:a(g).length<=0}])},[a(g).length>0?r((m(),p("div",Ae,[s("ul",Ee,[(m(!0),p(F,null,J(a(g),l=>(m(),p("li",{class:"fs-14 clickable break-spaces dropdown-item",onClick:c=>Z(l)},[s("span",null,B(q(l)),1)],8,Ne))),256))])],512)),[[a(z.exports.directive),I]]):W("",!0)],2)])]),s("div",Te,[s("div",Oe,[r(s("p",Re,null,512),[[n,"SearchBar.location.title"]]),s("div",Me,[r(s("input",{type:"text",id:"location-search",ref:(l,c)=>{c.location_input=l,w.value=l},"onUpdate:modelValue":t[3]||(t[3]=l=>U(_)?_.value=l:_=l),style:{"padding-top":"12px","padding-bottom":"12px"},class:"form-control searchable-list__input fs-12",autocomplete:"off",placeholder:a(o).location.name==""?e.$t("SearchBar.location.select"):a(o).location.name,disabled:a(o).remote=="nomad"},null,8,Ue),[[M,a(_)],[u,P,"500ms"]])]),s("div",{class:j(["position-absolute custom-scroll w-100",{h_0:a(b).length<=0}])},[a(b).length>0?r((m(),p("div",ze,[s("ul",Fe,[(m(!0),p(F,null,J(a(b),(l,c)=>(m(),p("li",{class:"clickable break-spaces dropdown-item fs-14",onClick:x=>X(l,c)},[s("span",null,B(Q(l)),1)],8,Je))),256))])],512)),[[a(z.exports.directive),L]]):W("",!0)],2)])])])]),s("div",We,[s("button",{type:"button",class:j(["btn text-white bg-green-app w-100 px-2 py-2 search-bar-button",{disabled:!a(D)}]),style:{height:"47px"},onClick:ee},[r(s("span",Ge,null,512),[[n,"SearchBar.search_button"]]),He],2)])])])}}});var Pe=ce(Ke,[["__scopeId","data-v-756134b9"]]);const Qe={id:"searh_bar_page",class:"container"},Xe={class:"row"},Ye={class:"col-12 col-md-12 col-xl-10 offset-xl-1"},os=A({setup(v){const y=ne(),w=E();y.commit("setLayout","BaseLayout");const i=N(()=>y.state.auth.userData);return i.value.filters&&i.value.filters.length>0&&w.push({name:"TalentOpportunities"}),(o,f)=>(m(),p("div",Qe,[s("div",Xe,[s("div",Ye,[O(Pe)])])]))}});export{os as default};
