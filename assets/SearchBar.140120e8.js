import{d as x,ap as y,x as D,aq as U,ar as i,e as $,o as k,f as w,i as e,h as n,g,z as r,as as h,at as S,J as B,u as R,s as z}from"./vendor.a3bdd978.js";import{s as j,S as V}from"./autocomplete.esm.15bcebfa.js";import"./index.b2402258.js";const J={id:"search-bar",class:"w-100 pb-0 pt-3 py-lg-4 bg-white border-0 rounded-12 fs-14"},M={class:"row mx-0"},N={class:"col-12 col-lg-11"},O={class:"row mx-0"},T={class:"col-12 col-lg-4 mb-3 mb-lg-0 z-index-2"},F={class:"mb-2 text-primary d-none d-lg-block"},I={class:"fw-medium"},G={class:"fs-12"},H={class:"position-relative right-bar"},K={class:"col-12 col-lg-4 offset-lg-0 mt-md-2 mt-lg-0"},P={class:"mb-2 text-primary d-none d-lg-block"},Q={class:"fw-medium"},W={class:"fs-12"},X={class:"position-relative"},Y={class:"col-12 col-lg-4 mb-3 mt-3 mt-lg-0 mb-lg-0 pb-1 pb-lg-0 d-flex align-items-end flex-wrap px-lg-2"},Z={class:"check-box_container mt-1 me-16"},ee={class:"form-check form-check-inline d-flex align-items-center"},le={for:"full-remote",class:"form-check-label clickable"},te={class:"check-box_container mt-1"},oe={class:"form-check form-check-inline d-flex align-items-center"},se={for:"flexible-hours",class:"form-check-label clickable"},ae={class:"col-12 col-lg-1 pt-3 px-0 px-lg-4 d-flex align-items-end search_button_container"},ne={class:"d-lg-none"},re=e("i",{class:"ms-2 ms-lg-0 fas fa-search fs-20 align-middle"},null,-1),ce=x({setup(q){const p=y();document.documentElement.lang;let u=document.documentElement.lang?document.documentElement.lang:"en",d="";u=="fr"?d="name_fr":u=="es"?d="name_es":d="name_en",D(()=>{const l=document.getElementById("loading");l&&(l.style.display="none"),[].slice.call(document.querySelectorAll(".search-bar__dropdown-toggle")).map(function(o){return new U(o)})});let c=i(),v=i(),f=i();const C=l=>{if(!l.query.trim().length)f.value=[...v.value];else{const t=`locations/searchLocation/${l.query.toLowerCase()}`;B.get(t,{params:{lang:u}}).then(o=>{f.value=o.data}).then(()=>{Array.prototype.forEach.call(document.querySelectorAll(".p-autocomplete-panel"),o=>new V(o))})}};let a=i(),E=i(),b=i();const L=l=>{if(!l.query.trim().length)b.value=[...E.value];else{const t=`job-reference/searchJobreference/${l.query.toLowerCase()}`;B.get(t,{params:{lang:u}}).then(o=>{b.value=o.data}).then(()=>{Array.prototype.forEach.call(document.querySelectorAll(".p-autocomplete-panel"),o=>new V(o))})}};let m=i(),_=i();const A=()=>{const l={};a.value&&(typeof a.value=="string"?l.title=a.value:l["meta.jobReferences"]=a.value._id),c.value&&(l["meta.locations"]=c.value._id),m.value&&(l.remote="full_remote"),_.value&&(l["meta.flex_criterias"]="Flex working hours"),!a.value&&!c.value&&!m.value&&!_.value&&(l.remote=["full_remote","hybrid"],l.sort="Date",l.page=1),l.refresh=!0,p.push({name:"TalentOpportunities",query:l})};return(l,t)=>{const o=$("t");return k(),w("div",J,[e("div",M,[e("div",N,[e("div",O,[e("div",T,[e("p",F,[n(e("span",I,null,512),[[o,"SearchBar.job_reference.title"]]),n(e("span",G,null,512),[[o,"SearchBar.job_reference.sub_title"]])]),e("div",H,[g(r(j),{inputClass:"form-control job-reference searchable-list__input",class:"w-100",modelValue:r(a),"onUpdate:modelValue":t[0]||(t[0]=s=>h(a)?a.value=s:a=s),delay:250,field:r(d),placeholder:l.$t("SearchBar.job_reference.placeholder"),suggestions:r(b),onComplete:t[1]||(t[1]=s=>L(s))},null,8,["modelValue","field","placeholder","suggestions"])])]),e("div",K,[e("p",P,[n(e("span",Q,null,512),[[o,"SearchBar.location.title"]]),n(e("span",W,null,512),[[o,"SearchBar.location.sub_title"]])]),e("div",X,[g(r(j),{inputClass:"form-control location searchable-list__input",class:"w-100",modelValue:r(c),"onUpdate:modelValue":t[2]||(t[2]=s=>h(c)?c.value=s:c=s),delay:250,forceSelection:"",field:"name",placeholder:l.$t("SearchBar.location.placeholder"),suggestions:r(f),onComplete:t[3]||(t[3]=s=>C(s))},null,8,["modelValue","placeholder","suggestions"])])]),e("div",Y,[e("div",Z,[e("div",ee,[n(e("input",{type:"checkbox",class:"form-check-input clickable",id:"full-remote","onUpdate:modelValue":t[4]||(t[4]=s=>h(m)?m.value=s:m=s)},null,512),[[S,r(m)]]),n(e("label",le,null,512),[[o,"SearchBar.remote.full_remote_title"]])])]),e("div",te,[e("div",oe,[n(e("input",{type:"checkbox",class:"form-check-input clickable",id:"flexible-hours","onUpdate:modelValue":t[5]||(t[5]=s=>h(_)?_.value=s:_=s)},null,512),[[S,r(_)]]),n(e("label",se,null,512),[[o,"SearchBar.checkbox.flexible-hours"]])])])])])]),e("div",ae,[e("button",{type:"button",class:"btn text-white bg-green-app w-100 px-2 py-2 search-bar-button",style:{height:"47px"},onClick:A},[n(e("span",ne,null,512),[[o,"SearchBar.search_button"]]),re])])])])}}});const ie={id:"searh_bar_page"},de={class:"row"},ue={class:"col-12 mx-auto"},he=x({setup(q){const p=R(),u=y();p.commit("setLayout","BaseLayout");const d=z(()=>p.state.auth.userData);return d.value.filters&&d.value.filters.length>0&&u.push({name:"TalentOpportunities"}),(c,v)=>(k(),w("div",ie,[e("div",de,[e("div",ue,[g(ce)])])]))}});export{he as default};
