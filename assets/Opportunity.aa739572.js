var _t=Object.defineProperty,pt=Object.defineProperties;var yt=Object.getOwnPropertyDescriptors;var mt=Object.getOwnPropertySymbols;var bt=Object.prototype.hasOwnProperty,vt=Object.prototype.propertyIsEnumerable;var dt=(a,i,h)=>i in a?_t(a,i,{enumerable:!0,configurable:!0,writable:!0,value:h}):a[i]=h,W=(a,i)=>{for(var h in i||(i={}))bt.call(i,h)&&dt(a,h,i[h]);if(mt)for(var h of mt(i))vt.call(i,h)&&dt(a,h,i[h]);return a},ht=(a,i)=>pt(a,yt(i));import{d as M,x as kt,z as ut,y as q,b as C,o as s,e as n,h as t,t as o,g as e,q as u,av as f,ak as ft,j as r,s as k,al as x,i as gt,w as T,f as D,am as j,r as S,m as wt}from"./vendor.e615fd77.js";import{S as Dt}from"./ScrollTopButton.c29ef80c.js";import{s as $t}from"./utils.1fce72cf.js";import{b as xt}from"./bootstrap.bundle.min.c0b9082e.js";import{r as Tt,a as jt}from"./index.d3ee8058.js";import{_ as St,a as Mt}from"./management-type.7d09bcbe.js";import{S as A,C as Ct}from"./carousel.es.401c86f9.js";const Wt={class:"row gx-4 mx-0 mb-4 pb-2",id:"information-location"},qt={class:"col-12 col-md-6 ps-md-0 mb-4"},At={class:"bg-white h-100 shadow rounded-12 px-4 py-3"},zt={class:"d-flex h-100 align-items-center"},Ft={class:"p-2 w-100"},Lt={class:"d-flex bd-highlight"},Bt={class:"p-2 w-100 bd-highlight"},Zt={class:"p-2 flex-shrink-1 bd-highlight clickable"},Pt=t("em",{class:"fas fa-heart ms-3 fs-20 mb-n1 text-blue-app"},null,-1),Et=[Pt],It=t("em",{class:"far fa-heart ms-3 fs-20 mb-n1"},null,-1),Ht=[It],Rt={class:"mb-1 ps-2"},Vt={key:0,class:"me-4"},Ot=t("i",{class:"fas fa-file-alt text-dark-gray me-1"},null,-1),Nt={class:"ms-1"},Gt={key:1,class:"me-4"},Ut={key:0,class:"fas fa-dollar-sign text-dark-gray me-1"},Jt={key:1,class:"fas fa-euro-sign text-dark-gray me-1"},Kt={key:2},Yt={key:3},Qt={key:2},Xt={key:0},ta={key:1},aa={key:0,class:"mb-1 ps-2"},ea=t("i",{class:"fas fa-map-marker-alt text-dark-gray me-1"},null,-1),sa=["data-bs-content"],na={key:1,class:"ms-1"},la={class:"mb-1 ps-2"},oa={key:0,class:"me-4"},ia=t("i",{class:"fas fa-home-lg-alt text-dark-gray",style:{"font-size":"12px"}},null,-1),ca={class:"ms-1 me-1"},ra={key:1},ma=t("i",{class:"fas fa-plane text-dark-gray me-1"},null,-1),da=k(),ha={key:0,class:"col-12 col-md-6 pe-md-0 mb-4"},ua={class:"bg-white h-100 shadow rounded-12 px-4 py-0"},fa={class:"d-flex h-100 align-items-center"},ga=["src"],_a=t("div",{class:"vertical-hr"},null,-1),pa={class:"px-2 w-100"},ya={class:"mb-0"},ba={class:"mb-2"},va=t("i",{class:"fas fa-user-friends text-dark-gray"},null,-1),ka={class:"ps-1 d-flex align-items-center"},wa=t("i",{class:"fas fa-map-marker-alt text-dark-gray me-1"},null,-1),Da=k(),$a=t("i",{class:"fas fa-chevron-right"},null,-1),xa=M({props:{matchData:null},emits:["favorite","goTo"],setup(a,{emit:i}){const h=a,d="en",m=kt();ut(()=>{Array.from(document.querySelectorAll('#information-location [data-bs-toggle="popover"]')).forEach(g=>new xt.exports.Popover(g))});let y=q(()=>m.state.auth.userData.favorites?m.state.auth.userData.favorites:[]),$=q(()=>m.state.auth.userData._id),c=q(()=>m.state.auth.accessToken!=null);ut(()=>{if(c)return m.dispatch("auth/getCurrentUser")});function _(g){return Number(g)/1e3}function l(){i("goTo")}function b(){if(c){let g={id:$.value,type:"favorites",value:h.matchData._id};m.commit("auth/update_user_data_array",g),m.dispatch("talent/update_profile_favorites",g)}else Tt.push({name:"TalentLogin"})}return(g,p)=>{var z,F,L,B,Z,P,E,I,H,R,V,O,N,G,U,J,K,Y,Q,X,tt,at,et,st,nt,lt,ot,it,ct,rt;const w=C("t");return s(),n("div",Wt,[t("div",qt,[t("div",At,[t("div",zt,[t("div",Ft,[t("div",Lt,[t("h5",Bt,o(a.matchData.title),1),t("span",Zt,[t("div",null,[t("div",null,[e(t("div",{class:"fav_icon",onClick:p[0]||(p[0]=ft(v=>b(),["stop"]))},Et,512),[[u,f(y).some(v=>v==(h==null?void 0:h.matchData._id))]]),e(t("div",{class:"fav_icon",onClick:p[1]||(p[1]=ft(v=>b(),["stop"]))},Ht,512),[[u,!f(y).some(v=>v==(h==null?void 0:h.matchData._id))]])])])])]),t("p",Rt,[a.matchData.meta.contractType?(s(),n("span",Vt,[Ot,e(t("span",Nt,null,512),[[w,`opportunity.informations.contractType.${(z=a.matchData.meta)==null?void 0:z.contractType}`]])])):r("",!0),((L=(F=a.matchData.meta)==null?void 0:F.salary)==null?void 0:L.min)&&((Z=(B=a.matchData.meta)==null?void 0:B.salary)==null?void 0:Z.max)?(s(),n("span",Gt,[(a.matchData.meta.currency="USD")?(s(),n("em",Ut)):(s(),n("em",Jt)),((E=(P=a.matchData.meta)==null?void 0:P.salary)==null?void 0:E.min)&&((H=(I=a.matchData.meta)==null?void 0:I.salary)==null?void 0:H.max)?(s(),n("span",Kt,o(_((V=(R=a.matchData.meta)==null?void 0:R.salary)==null?void 0:V.min))+" - "+o(_((N=(O=a.matchData.meta)==null?void 0:O.salary)==null?void 0:N.max)),1)):(s(),n("span",Yt," 0")),e(t("span",null,null,512),[[w,"global.kAnnuel"]])])):r("",!0),((U=(G=a.matchData.meta)==null?void 0:G.remmuneration)==null?void 0:U.min)&&((K=(J=a.matchData.meta)==null?void 0:J.remmuneration)==null?void 0:K.max)?(s(),n("span",Qt,[e(t("span",null,null,512),[[w,"global.variable"]]),((Q=(Y=a.matchData.meta)==null?void 0:Y.remmuneration)==null?void 0:Q.min)&&((tt=(X=a.matchData.meta)==null?void 0:X.remmuneration)==null?void 0:tt.max)?(s(),n("span",Xt,o(_((et=(at=a.matchData.meta)==null?void 0:at.remmuneration)==null?void 0:et.min))+" - "+o(_((nt=(st=a.matchData.meta)==null?void 0:st.remmuneration)==null?void 0:nt.max)),1)):(s(),n("span",ta," 0")),e(t("span",null,null,512),[[w,"global.kAnnuel"]])])):r("",!0)]),a.matchData.meta.locations&&a.matchData.meta.locations.length>0?(s(),n("p",aa,[ea,a.matchData.meta.locations.length>3?(s(),n("span",{key:0,class:"ms-1","data-bs-toggle":"popover","data-bs-trigger":"hover","data-bs-placement":"bottom","data-bs-content":a.matchData.meta.locations.map(v=>v.name).join(", ")},o(a.matchData.meta.locations.map(v=>v.name).slice(0,3).join(", "))+"... ",9,sa)):(s(),n("span",na,o(a.matchData.meta.locations.map(v=>v.name).join(", ")),1))])):r("",!0),t("p",la,[a.matchData.meta.remote.length>0?(s(),n("span",oa,[ia,e(t("strong",ca,null,512),[[w,"opportunity.informations.homeworking.title"]]),k(" "+o(a.matchData.meta.remote.map(v=>g.$t(`widget.matchOfferCard.${v}`)).join(", ")),1)])):r("",!0),a.matchData.meta.travel?(s(),n("span",ra,[ma,e(t("strong",null,null,512),[[w,"opportunity.informations.travel.title"]]),da,e(t("span",null,null,512),[[w,`opportunity.informations.travel.${a.matchData.meta.travel}`]])])):r("",!0)])])])])]),a.matchData.company?(s(),n("div",ha,[t("div",ua,[t("div",fa,[t("div",null,[t("img",{src:(ot=(lt=a.matchData.company)==null?void 0:lt.meta)==null?void 0:ot.picture,alt:"Match working",class:"img-fluid ms-2",width:"200"},null,8,ga)]),_a,t("div",pa,[t("h5",ya,o(a.matchData.company.name),1),t("p",null,[e(t("span",null,o((it=a.matchData.company.meta.industry)==null?void 0:it.name_fr),513),[[u,d=="fr"]]),e(t("span",null,o((ct=a.matchData.company.meta.industry)==null?void 0:ct.name_en),513),[[u,d=="en"]]),e(t("span",null,o((rt=a.matchData.company.meta.industry)==null?void 0:rt.name_es),513),[[u,d=="es"]]),k(" - "+o(a.matchData.company.meta.organization_type),1)]),t("p",ba,[va,k(" "+o(a.matchData.company.meta.employees)+" ",1),e(t("span",null,null,512),[[w,"global.employees"]])]),t("p",ka,[a.matchData.company.meta.presence?(s(),n(x,{key:0},[wa,k(" "+o(a.matchData.company.meta.presence.slice(0,2).join(", ")+"..."),1)],64)):r("",!0),f(c)?(s(),n("strong",{key:1,class:"ms-auto clickable",onClick:l},[e(t("span",null,null,512),[[w,"opportunity.informations.seeCompany"]]),Da,$a])):r("",!0),f(c)?r("",!0):(s(),n("button",{key:2,class:"ms-auto btn btn-outline-primary fs-14 fw-bold",onClick:l}," S\u2019inscrire "))])])])])])):r("",!0)])}}}),Ta={class:"col col-12 bg-white shadow-jg rounded-12 px-4 py-3 mb-3"},ja=t("img",{class:"ms-n10 me-2 mb-1",src:St,alt:"Logo Jobgether"},null,-1),Sa={class:"d-inline-flex ms-1 h6 fw-bold text-uppercase"},Ma={class:"description__container fw-light pt-2"},Ca=["innerHTML"],Wa=M({props:{description:null},setup(a){return(i,h)=>{const d=C("t");return s(),n("div",Ta,[ja,e(t("p",Sa,null,512),[[d,"opportunity.description.subtitle"]]),t("div",Ma,[t("div",{class:"temp",innerHTML:a.description},null,8,Ca)])])}}});var qa="https://cdn.jsdelivr.net/gh/carlospjobgether/dist-frontend/assets/img/icons/training-icon.png",Aa="https://cdn.jsdelivr.net/gh/carlospjobgether/dist-frontend/assets/img/icons/skills-icon.png",za="https://cdn.jsdelivr.net/gh/carlospjobgether/dist-frontend/assets/img/icons/personality-style-icon.png",Fa="https://cdn.jsdelivr.net/gh/carlospjobgether/dist-frontend/assets/img/icons/professional-character-icon.png",La="https://cdn.jsdelivr.net/gh/carlospjobgether/dist-frontend/assets/img/icons/thinking-style-icon.png";const Ba={class:"carousel__item big shadow-sm"},Za={class:"d-flex carousel__item_title"},Pa=t("div",{class:"flex-shrink-0"},[t("img",{src:qa,alt:"Match working",class:"img-fluid",width:"35",height:"35"})],-1),Ea={class:"flex-grow-1 d-flex align-items-center text-uppercase"},Ia={class:"break-spaces fw-bold"},Ha={class:"ps-2"},Ra={key:0},Va=t("svg",{class:"me-2",xmlns:"http://www.w3.org/2000/svg",width:"13.83",height:"10.562",viewBox:"0 0 13.83 10.562"},[t("g",{transform:"translate(-1855.624 140.847)"},[t("path",{d:"M1911.689-130.779c-.021-.019-.043-.036-.063-.056a5.063,5.063,0,0,0-2.087-1.225,6.947,6.947,0,0,0-1.629-.3c-.187-.013-.374-.021-.562-.026a.51.51,0,0,1-.548-.558q0-3.655,0-7.31a.494.494,0,0,1,.329-.514.628.628,0,0,1,.21-.03,7.21,7.21,0,0,1,1.553.178,4.654,4.654,0,0,1,2.017.99,3.872,3.872,0,0,1,.718.839.625.625,0,0,1,.085.348q0,3,0,6v1.653Z",transform:"translate(-49.552 -0.046)",fill:"#6e8d98"}),t("path",{d:"M2085.75-130.813c0-.045,0-.073,0-.1q0-3.794,0-7.588a.7.7,0,0,1,.126-.4,3.893,3.893,0,0,1,1.149-1.129,4.776,4.776,0,0,1,1.161-.531,6.962,6.962,0,0,1,1.951-.285.5.5,0,0,1,.525.536q0,1.9,0,3.794,0,1.77,0,3.541a.492.492,0,0,1-.273.48.707.707,0,0,1-.259.06c-.318.024-.639.024-.956.063a5.85,5.85,0,0,0-2.879,1.091c-.162.122-.307.266-.459.4Z",transform:"translate(-222.824 0)",fill:"#6e8d98"}),t("path",{d:"M1861.446-78.163c-.116-.024-.209-.047-.3-.063-.268-.044-.535-.1-.8-.124a11.026,11.026,0,0,0-1.8-.035,13.446,13.446,0,0,0-1.711.211c-.215.041-.429.089-.645.121a.488.488,0,0,1-.554-.465c0-.018,0-.037,0-.055q0-3.9,0-7.793a.492.492,0,0,1,.28-.476.48.48,0,0,1,.173-.048c.1-.008.206,0,.308-.007.079-.005.1.027.1.1a.633.633,0,0,0,0,.079v5.94a1.356,1.356,0,0,0,.166.7,1.2,1.2,0,0,0,.726.583,1.806,1.806,0,0,0,.42.062,8.268,8.268,0,0,1,1.29.132,4.983,4.983,0,0,1,1.9.758c.142.1.274.214.41.322A.567.567,0,0,1,1861.446-78.163Z",transform:"translate(0 -52.239)",fill:"#6e8d98"}),t("path",{d:"M2108.532-78.129c.062-.055.121-.113.186-.165a4.541,4.541,0,0,1,1.445-.766,6.961,6.961,0,0,1,2.017-.316,1.343,1.343,0,0,0,.688-.181,1.181,1.181,0,0,0,.552-.7,1.774,1.774,0,0,0,.066-.475q.007-2.994,0-5.988c0-.125,0-.129.124-.124a2,2,0,0,1,.392.03.464.464,0,0,1,.338.439q0,.028,0,.055,0,3.9,0,7.794a.5.5,0,0,1-.262.472.552.552,0,0,1-.392.04c-.347-.065-.693-.141-1.042-.193a11.257,11.257,0,0,0-2.281-.137c-.379.02-.758.054-1.135.1-.209.023-.414.077-.621.117l-.068.013Z",transform:"translate(-244.888 -52.294)",fill:"#6e8d98"})])],-1),Oa={class:"fw-bold"},Na=k(" : "),Ga={key:1},Ua=t("svg",{class:"me-2",xmlns:"http://www.w3.org/2000/svg",width:"15.509",height:"10.973",viewBox:"0 0 15.509 10.973"},[t("g",{transform:"translate(-1416.187 170.913)"},[t("path",{d:"M1589.433-146.023c.016-.117.031-.226.047-.334a4.169,4.169,0,0,0-.017-1.345,4.268,4.268,0,0,0-1.329-2.446,4.215,4.215,0,0,0-2.221-1.093,7.214,7.214,0,0,0-.79-.059c-.119-.007-.13-.008-.13-.125,0-.644,0-1.288,0-1.933a.57.57,0,0,1,.613-.6q3.358,0,6.716,0a.582.582,0,0,1,.621.623q0,3.351,0,6.7a.586.586,0,0,1-.614.622c-.927,0-1.855,0-2.783,0C1589.516-146.014,1589.483-146.019,1589.433-146.023Z",transform:"translate(-161.251 -16.192)",fill:"#6e8d98"}),t("path",{d:"M1520.691-69.639a3.23,3.23,0,0,1,3.214,3.227,3.234,3.234,0,0,1-3.229,3.214,3.233,3.233,0,0,1-3.213-3.24A3.229,3.229,0,0,1,1520.691-69.639Z",transform:"translate(-96.743 -96.741)",fill:"#6e8d98"}),t("path",{d:"M1423.289-167.466c-.256.069-.5.118-.734.2a4.274,4.274,0,0,0-2.747,2.8,4.964,4.964,0,0,0-.149.651c-.017.087-.064.094-.133.094h-1.664c-.354,0-.707,0-1.061,0a.569.569,0,0,1-.537-.3.561.561,0,0,1,.039-.621l3.149-4.794c.257-.392.513-.785.771-1.176a.568.568,0,0,1,.78-.228.667.667,0,0,1,.216.2q1.017,1.535,2.024,3.077C1423.259-167.53,1423.271-167.5,1423.289-167.466Z",transform:"translate(0 0)",fill:"#6e8d98"})])],-1),Ja={class:"fw-bold"},Ka=k(" : "),Ya={key:2,class:"mb-0"},Qa=t("svg",{class:"me-2",xmlns:"http://www.w3.org/2000/svg",width:"13.457",height:"12.496",viewBox:"0 0 13.457 12.496"},[t("g",{transform:"translate(-2.25 -4.5)"},[t("path",{d:"M28.595,17H24.75V4.5h3.845Z",transform:"translate(-12.888)",fill:"#6e8d98"}),t("path",{d:"M17.345,22.151H13.5V13.5h3.845Z",transform:"translate(-6.444 -5.155)",fill:"#6e8d98"}),t("path",{d:"M6.095,26.017H2.25V20.25H6.095Z",transform:"translate(0 -9.021)",fill:"#6e8d98"})])],-1),Xa={class:"fw-bold"},te={key:3,class:"ps-3"},ae={class:"col col-12 col-md-12 d-flex flex-wrap"},ee={key:4},se={class:"mb-1 mt-3"},ne=t("svg",{class:"me-2",xmlns:"http://www.w3.org/2000/svg",width:"13.958",height:"13.96",viewBox:"0 0 13.958 13.96"},[t("g",{transform:"translate(379.986 -593.952)"},[t("path",{d:"M-341.541,734.217a.73.73,0,0,0,.139-.085q2.395-2.391,4.785-4.786a.378.378,0,0,1,.3-.121q2.4.006,4.793,0h.161a6.129,6.129,0,0,1-3.008,5.72A6.038,6.038,0,0,1-341.541,734.217Z",transform:"translate(-36.347 -127.89)",fill:"#6e8d98"}),t("path",{d:"M-244.618,600.518v-6.544a6.177,6.177,0,0,1,6.558,6.544Z",transform:"translate(-127.98)",fill:"#6e8d98"}),t("path",{d:"M-378.45,663.607a6.017,6.017,0,0,1,.434-8.467l4.015,4.018Z",transform:"translate(0 -57.849)",fill:"#6e8d98"}),t("path",{d:"M-327.923,624.4v5.066l-3.942-3.942A6.12,6.12,0,0,1-327.923,624.4Z",transform:"translate(-45.495 -28.779)",fill:"#6e8d98"})])],-1),le={class:"fw-bold"},oe={class:"ps-3"},ie={key:5,class:"mb-1"},ce=t("svg",{class:"me-2",xmlns:"http://www.w3.org/2000/svg",width:"12.785",height:"14.655",viewBox:"0 0 12.785 14.655"},[t("g",{transform:"translate(-7.209 -826.981)"},[t("path",{d:"M9.3,829.872c.314-.157.607-.311.907-.451a7.6,7.6,0,0,1,1.961-.64,4.989,4.989,0,0,1,2.678.281c.368.143.739.282,1.091.459a1.873,1.873,0,0,0,1.483.1c.391-.13.767-.3,1.144-.473.238-.107.461-.248.7-.357a.47.47,0,0,1,.722.464c0,.791,0,1.582,0,2.373,0,1.063,0,2.125,0,3.188a.523.523,0,0,1-.29.512,7.545,7.545,0,0,1-2.338.884,3.257,3.257,0,0,1-1.978-.342c-.314-.148-.624-.306-.947-.432a3.825,3.825,0,0,0-2.591-.02c-.543.17-1.064.407-1.6.613a.124.124,0,0,0-.09.16c.176,1.254.345,2.508.516,3.763.039.288.081.575.117.863A.709.709,0,1,1,9.392,841q-.3-2.207-.6-4.414-.294-2.15-.591-4.3c-.135-.985-.27-1.971-.4-2.957a.289.289,0,0,0-.12-.21,1.195,1.195,0,0,1,.483-2.115,1.191,1.191,0,0,1,1.131,1.969.272.272,0,0,0-.076.267C9.255,829.45,9.276,829.657,9.3,829.872Z",transform:"translate(0 0)",fill:"#6e8d98"})])],-1),re={class:"fw-bold"},me={key:6,class:"row ps-3"},de={key:0,class:"col col-12 col-md-6"},he={class:"mb-1 text-dark-gray"},ue={key:1,class:"col col-12 col-md-6"},fe={class:"mb-1 text-dark-gray"},ge={key:0,class:"carousel__item big shadow-sm"},_e={class:"d-flex carousel__item_title"},pe=t("div",{class:"flex-shrink-0"},[t("img",{src:Aa,alt:"Match working",class:"img-fluid",width:"35",height:"35"})],-1),ye={class:"flex-grow-1 d-flex align-items-center text-uppercase"},be={class:"break-spaces fw-bold"},ve={key:0,class:"fw-bold fs-6 mb-2"},ke={key:1,class:"mb-3"},we={key:2,class:"fw-bold fs-6 mb-2"},De={key:3,class:"mb-3"},$e={key:0,class:"carousel__item shadow-sm"},xe={class:"d-flex carousel__item_title"},Te=t("div",{class:"flex-shrink-0"},[t("img",{src:za,alt:"Match working",class:"img-fluid",width:"35",height:"35"})],-1),je={class:"flex-grow-1 text-uppercase"},Se={class:"break-spaces fw-bold"},Me={class:"fw-bold fs-6"},Ce={class:"break-spaces fw-light text-dark-gray"},We={key:0,class:"carousel__item shadow-sm"},qe={class:"d-flex carousel__item_title"},Ae=t("div",{class:"flex-shrink-0"},[t("img",{src:Fa,alt:"Match working",class:"img-fluid",width:"35",height:"35"})],-1),ze={class:"flex-grow-1 text-uppercase"},Fe={class:"break-spaces fw-bold"},Le={class:"fw-bold fs-6"},Be={class:"break-spaces fw-light text-dark-gray"},Ze={key:0,class:"carousel__item shadow-sm"},Pe={class:"d-flex carousel__item_title"},Ee=t("div",{class:"flex-shrink-0"},[t("img",{src:La,alt:"Match working",class:"img-fluid",width:"35",height:"35"})],-1),Ie={class:"flex-grow-1 text-uppercase"},He={class:"break-spaces fw-bold"},Re={class:"fw-bold fs-6"},Ve={class:"break-spaces fw-light text-dark-gray"},Oe=M({props:{matchData:null},setup(a){const i=a,h={options:{itemsToScroll:1,wrapAround:!1,snapAlign:"center-even",transition:2e3,autoplay:!1,breakpoints:{700:{itemsToShow:1.3,snapAlign:"center-even"},1024:{itemsToShow:2,snapAlign:"center-even"}},modelValue:0,mouseDrag:!0,touchDrag:!0,pauseAutoplayOnHover:!0}},d="en",m=q(()=>{var y,$,c,_,l;return W(W(W({},(y=i.matchData.meta.skills)==null?void 0:y.ideas),(c=($=i.matchData.meta)==null?void 0:$.skills)==null?void 0:c.people),(l=(_=i.matchData.meta)==null?void 0:_.skills)==null?void 0:l.things)});return(y,$)=>{const c=C("t");return s(),gt(f(Ct),{class:"profile-carousel",settings:h.options},{default:T(()=>[D(f(A),{key:0},{default:T(()=>{var _;return[t("div",Ba,[t("div",Za,[Pa,t("div",Ea,[e(t("span",Ia,null,512),[[c,"joboffer.training.title"]])])]),t("div",Ha,[a.matchData.meta.studiesRequired?(s(),n("p",Ra,[Va,e(t("span",Oa,null,512),[[c,"joboffer.formation.degree"]]),Na,e(t("span",null,null,512),[[c,"joboffer.studies."+a.matchData.meta.studiesRequired]])])):r("",!0),a.matchData.meta.specializations?(s(),n("p",Ga,[Ua,e(t("span",Ja,null,512),[[c,"joboffer.formation.type-study"]]),Ka,t("span",null,o(a.matchData.meta.specializations.map(l=>y.$t("joboffer.studies."+l)).join(", ")),1)])):r("",!0),a.matchData.meta.yearsOfExperienceTotal?(s(),n("p",Ya,[Qa,e(t("span",Xa,null,512),[[c,"joboffer.formation.level-exp"]]),k(" : "+o(a.matchData.meta.yearsOfExperienceTotal)+" ans ",1)])):r("",!0),a.matchData.meta.industries&&a.matchData.meta.industries.length>0?(s(),n("div",te,[t("div",ae,[(s(!0),n(x,null,j(a.matchData.meta.industries,(l,b)=>(s(),n("div",{class:"badge bg-dark-gray-20 break-spaces mb-2 mt-1 me-1 rounded-pill text-primary",key:b},[e(t("span",null,o(l.name_fr),513),[[u,d=="fr"]]),e(t("span",null,o(l.name_en),513),[[u,d=="en"]]),e(t("span",null,o(l.name_es),513),[[u,d=="es"]])]))),128))])])):r("",!0),a.matchData.meta.keyResponsability?(s(),n("div",ee,[t("p",se,[ne,e(t("span",le,null,512),[[c,"joboffer.formation.level-management"]])]),e(t("p",oe,null,512),[[c,"joboffer.formation."+((_=a.matchData.meta)==null?void 0:_.keyResponsability)]])])):r("",!0),a.matchData.meta.languages&&a.matchData.meta.languages.length>0?(s(),n("p",ie,[ce,e(t("span",re,null,512),[[c,"joboffer.formation.languages.title"]])])):r("",!0),a.matchData.meta.languages&&a.matchData.meta.languages.length>0?(s(),n("div",me,[a.matchData.meta.languages.filter(l=>l.mandatory).length>0?(s(),n("div",de,[e(t("p",he,null,512),[[c,"joboffer.formation.languages.obligatory"]]),(s(!0),n(x,null,j(a.matchData.meta.languages.filter(l=>l.mandatory),l=>{var b,g,p;return s(),n("div",{key:l,class:"list-item"},[e(t("span",null,o((b=l.language)==null?void 0:b.name_fr),513),[[u,d=="fr"]]),e(t("span",null,o((g=l.language)==null?void 0:g.name_en),513),[[u,d=="en"]]),e(t("span",null,o((p=l.language)==null?void 0:p.name_es),513),[[u,d=="es"]]),e(t("span",null," - "+o(l==null?void 0:l.level),513),[[u,l.level]])])}),128))])):r("",!0),a.matchData.meta.languages.filter(l=>!l.mandatory).length>0?(s(),n("div",ue,[e(t("p",fe,null,512),[[c,"joboffer.formation.languages.desired"]]),(s(!0),n(x,null,j(a.matchData.meta.languages.filter(l=>!l.mandatory),(l,b)=>{var g,p,w;return s(),n("div",{key:b,class:"list-item"},[e(t("span",null,o((g=l.language)==null?void 0:g.name_fr),513),[[u,d=="fr"]]),e(t("span",null,o((p=l.language)==null?void 0:p.name_en),513),[[u,d=="en"]]),e(t("span",null,o((w=l.language)==null?void 0:w.name_es),513),[[u,d=="es"]]),e(t("span",null," - "+o(l==null?void 0:l.level),513),[[u,l.level]])])}),128))])):r("",!0)])):r("",!0)])])]}),_:1}),D(f(A),{key:1},{default:T(()=>[f(m).length&&f(m).length>0&&a.matchData.meta.hardSkills&&a.matchData.meta.hardSkills.length>0?(s(),n("div",ge,[t("div",_e,[pe,t("div",ye,[e(t("span",be,null,512),[[c,"joboffer.skills.title"]])])]),a.matchData.meta.hardSkills&&a.matchData.meta.hardSkills.length>0?e((s(),n("p",ve,null,512)),[[c,"joboffer.skills.hard-skills.title"]]):r("",!0),a.matchData.meta.hardSkills&&a.matchData.meta.hardSkills.length>0?(s(),n("div",ke,[(s(!0),n(x,null,j(a.matchData.meta.hardSkills,(_,l)=>(s(),n("span",{class:"badge rounded-pill text-blue-app bg-blue-app-20 me-2 mb-2 py-2",key:"hardskill"+l},[e(t("span",null,o(_.name_fr),513),[[u,d=="fr"]]),e(t("span",null,o(_.name_en),513),[[u,d=="en"]]),e(t("span",null,o(_.name_es),513),[[u,d=="es"]])]))),128))])):r("",!0),f(m).length&&f(m).length>0?e((s(),n("p",we,null,512)),[[c,"joboffer.skills.soft-skills.title"]]):r("",!0),f(m).length&&f(m).length>0?(s(),n("div",De,[(s(!0),n(x,null,j(f(m),_=>e((s(),n("span",{class:"badge rounded-pill text-green-app bg-green-app-20 me-2 mb-2 py-2",key:"softskill"+_},null,512)),[[c,`joboffer.skills.soft-skills.${_}`]])),128))])):r("",!0)])):r("",!0)]),_:1}),D(f(A),{key:2},{default:T(()=>[a.matchData.meta.personalityStyle?(s(),n("div",$e,[t("div",xe,[Te,t("div",je,[e(t("span",Se,null,512),[[c,"joboffer.personality-style.title"]])])]),e(t("p",Me,null,512),[[c,`joboffer.personality-style.${a.matchData.meta.personalityStyle}.title`]]),e(t("p",Ce,null,512),[[c,`joboffer.personality-style.${a.matchData.meta.personalityStyle}.text`]])])):r("",!0)]),_:1}),D(f(A),{key:3},{default:T(()=>[a.matchData.meta.professionalInterest?(s(),n("div",We,[t("div",qe,[Ae,t("div",ze,[e(t("span",Fe,null,512),[[c,"joboffer.professional-character.title"]])])]),e(t("p",Le,null,512),[[c,`joboffer.professional-character.${a.matchData.meta.professionalInterest}.title`]]),e(t("p",Be,null,512),[[c,`joboffer.professional-character.${a.matchData.meta.professionalInterest}.text`]])])):r("",!0)]),_:1}),D(f(A),{key:4},{default:T(()=>[a.matchData.meta.thinkingStyle?(s(),n("div",Ze,[t("div",Pe,[Ee,t("div",Ie,[e(t("span",He,null,512),[[c,"joboffer.thinking-style.title"]])])]),e(t("p",Re,null,512),[[c,`joboffer.thinking-style.${a.matchData.meta.thinkingStyle}.title`]]),e(t("p",Ve,null,512),[[c,`joboffer.thinking-style.${a.matchData.meta.thinkingStyle}.text`]])])):r("",!0)]),_:1})]),_:1},8,["settings"])}}}),Ne={class:"col col-12 bg-white shadow-jg rounded-12 p-4 mb-3"},Ge={class:"me-4 pe-2"},Ue=t("i",{class:"fas fa-user-friends text-dark-gray me-1"},null,-1),Je=k(" : "),Ke=t("i",{class:"fas fa-birthday-cake me-1"},null,-1),Ye=k(" : "),Qe={class:"d-block"},Xe={class:"h6 mb-4 w-100"},ts={class:"d-flex"},as=t("div",{class:"h-100 d-inline-flex flex-shrink-1"},[t("img",{src:Mt,alt:"Match working",class:"img-fluid float-start me-4",width:"100"})],-1),es={class:"d-inline-flex"},ss={class:"w-100"},ns={class:"h6",style:{"line-height":"40px"}},ls=t("br",null,null,-1),os=M({props:{sizeTeam:null,rangeAge:null,leadershipWorkTeam:null},setup(a){return(i,h)=>{const d=S("i18n-t"),m=C("t");return s(),n("div",Ne,[t("p",null,[e(t("span",Ge,[Ue,e(t("strong",null,null,512),[[m,"opportunity.team.size.title"]]),Je,D(d,{keypath:"opportunity.team.size.text"},{size:T(()=>[k(o(a.sizeTeam),1)]),_:1})],512),[[u,a.sizeTeam]]),e(t("span",null,[Ke,e(t("strong",null,null,512),[[m,"opportunity.team.age.title"]]),Ye,D(d,{keypath:"opportunity.team.age.text"},{age:T(()=>[k(o(a.rangeAge),1)]),_:1})],512),[[u,a.rangeAge]])]),e(t("div",Qe,[e(t("p",Xe,null,512),[[m,"opportunity.team.management-type.title"]]),t("div",ts,[as,t("div",es,[t("p",ss,[e(t("span",ns,null,512),[[m,"opportunity.team.management-type."+a.leadershipWorkTeam+".title"]]),ls,e(t("span",null,null,512),[[m,`opportunity.team.management-type.${a.leadershipWorkTeam}.description`]])])])])],512),[[u,a.leadershipWorkTeam]])])}}});const is={class:"row gx-4 mx-0 mb-4 pb-2"},cs={class:"col-12 col-lg-12 ps-md-0 mb-4"},rs={class:"bg-white h-100 shadow rounded-12 px-4 py-3 row"},ms={class:"col-lg-6"},ds={class:"pe-5"},hs={class:"badge-flexibility-w me-2 mb-2"},us={class:"badge-flexibility-w me-2 mb-2"},fs={class:"badge-flexibility-w me-2 mb-2"},gs=["innerHTML"],_s={key:0,class:"pe-5"},ps={key:0,class:"col-lg-6 border-start"},ys={class:"pt-3 ps-3"},bs={class:"fw-bold"},vs={class:"pt-4 ps-3"},ks={class:"pe-5"},ws=M({props:{matchData:null},setup(a){const i=a,h=q(()=>{let y={};return y.when=i.matchData.company.meta.flex_when_score?"When "+Math.round(i.matchData.company.meta.flex_when_score)+"%":"",y.where=i.matchData.company.meta.flex_where_score?"When "+Math.round(i.matchData.company.meta.flex_where_score)+"%":"",y.how=i.matchData.company.meta.flex_how_score?"When "+Math.round(i.matchData.company.meta.flex_how_score)+"%":"",y});let d=window.localStorage.getItem("userLang"),m="";return d?m=d:(d=navigator.language,d.includes("es")?m="es":d.includes("fr")?m="fr":m="en"),(y,$)=>{var _,l,b;const c=C("t");return s(),n("div",is,[t("div",cs,[t("div",rs,[t("div",ms,[t("div",ds,[t("span",hs,o(f(h).where),1),t("span",us,o(f(h).when),1),t("span",fs,o(f(h).how),1)]),t("div",{class:"pe-5 pt-3",innerHTML:(_=a.matchData.meta)==null?void 0:_.otherRemotePolicyFreeText},null,8,gs),a.matchData.meta.benefitPersonal&&a.matchData.meta.benefitPersonal.length>0?(s(),n("div",_s,[(s(!0),n(x,null,j((l=a.matchData.meta)==null?void 0:l.benefitPersonal,(g,p)=>(s(),n("div",{key:"personal"+p,class:"badge-flexibility-o text-blue-app fs-14 me-2 py-2 mb-2"},[e(t("span",null,o(g.name_fr),513),[[u,f(m)=="fr"]]),e(t("span",null,o(g.name_en),513),[[u,f(m)=="en"]]),e(t("span",null,o(g.name_es),513),[[u,f(m)=="es"]])]))),128))])):r("",!0)]),a.matchData.meta.benefitPersonalExtra&&a.matchData.meta.benefitPersonalExtra.length>0?(s(),n("div",ps,[t("div",ys,[e(t("span",bs,null,512),[[c,"opportunity.flexibility.other"]])]),t("div",vs,[t("div",ks,[(s(!0),n(x,null,j((b=a.matchData.meta)==null?void 0:b.benefitPersonalExtra,(g,p)=>(s(),n("div",{key:"personal"+p,class:"badge-flexibility-o text-blue-app fs-14 me-2 py-2 mb-2"},[e(t("span",null,o(g.name_fr),513),[[u,f(m)=="fr"]]),e(t("span",null,o(g.name_en),513),[[u,f(m)=="en"]]),e(t("span",null,o(g.name_es),513),[[u,f(m)=="es"]])]))),128))])])])):r("",!0)])])])}}}),Ds=M({name:"TalentInterviews",components:{ProfileCarousel:Oe,InformationsWidget:xa,DescriptionWidget:Wa,TeamWidget:os,ScrollTopButton:Dt,FlexibilityWidget:ws},data(){return{isFavorite:!1}},computed:ht(W({},wt("talent",["matchData"])),{ProfileCarousel(){var i,h,d;let a=!1;return(this.matchData.meta.studiesRequired||this.matchData.meta.specializations&&this.matchData.meta.specializations.length>0||this.matchData.meta.yearsOfExperienceTotal||this.matchData.meta.industries&&this.matchData.meta.industries.length>0||this.matchData.meta.keyResponsability||this.matchData.meta.languages&&this.matchData.meta.languages.length>0||this.matchData.meta.hardSkills&&this.matchData.meta.hardSkills.length>0||((i=this.matchData.meta.skills)==null?void 0:i.ideas)||((h=this.matchData.meta.skills)==null?void 0:h.people)||((d=this.matchData.meta.skills)==null?void 0:d.things))&&(a=!0),a}}),updated(){this.$nextTick(()=>{$t("opportunity","submenu__nav-opportunity")})},created(){window.scrollTo(0,0),window.addEventListener("scroll",this.scrollListener)},beforeDestroy(){window.removeEventListener("scroll",this.scrollListener)},methods:{scrollListener(a){const i=document.getElementById("returnBack");window.scrollY>150?i&&(i.style.display="none"):i&&(i.style.display="block")},saveFavorite(a){console.log(a),window.localStorage.getItem("accessToken")?this.isFavorite=a:this.$router.push({name:"TalentLogin"})},goToCompany(){window.localStorage.getItem("accessToken")?this.$router.push({name:"TalentCompany",params:{id:this.matchData.company._id}}):this.$router.push({name:"TalentLogin"})}}}),$s={key:0,id:"opportunity",class:"container","data-bs-spy":"scroll","data-bs-target":"#submenu__nav-opportunity","data-bs-offset":"0"},xs={id:"information"},Ts={class:"d-flex bd-highlight"},js={class:"p-2 w-100 bd-highlight"},Ss={class:"mb-3 fs-22 fw-bold"},Ms={id:"flexibility"},Cs={class:"d-flex bd-highlight"},Ws={class:"p-2 w-100 bd-highlight"},qs={class:"mb-3 fs-22 fw-bold"},As={key:0,id:"description"},zs={class:"mb-3 fs-22 fw-bold"},Fs={key:1,id:"required-profile"},Ls={class:"mb-3 fs-22 fw-bold"},Bs={key:2,id:"team"},Zs={class:"mb-3 fs-22 fw-bold"};function Ps(a,i,h,d,m,y){const $=S("informations-widget"),c=S("Flexibility-widget"),_=S("DescriptionWidget"),l=S("profile-carousel"),b=S("TeamWidget"),g=S("ScrollTopButton"),p=C("t");return a.matchData!=={}&&a.matchData.meta?(s(),n("div",$s,[t("div",xs,[t("div",Ts,[t("div",js,[e(t("h2",Ss,null,512),[[p,"opportunity.informations.title"]])])]),D($,{matchData:a.matchData,isFavoriteTemp:a.isFavorite,onFavorite:a.saveFavorite,onGoTo:a.goToCompany},null,8,["matchData","isFavoriteTemp","onFavorite","onGoTo"])]),t("div",Ms,[t("div",Cs,[t("div",Ws,[e(t("h2",qs,null,512),[[p,"opportunity.flexibility.title"]])])]),D(c,{matchData:a.matchData},null,8,["matchData"])]),a.matchData.description?(s(),n("div",As,[e(t("h2",zs,null,512),[[p,"opportunity.description.title"]]),a.matchData.description?(s(),gt(_,{key:0,description:a.matchData.description},null,8,["description"])):r("",!0)])):r("",!0),a.ProfileCarousel?(s(),n("div",Fs,[e(t("h2",Ls,null,512),[[p,"opportunity.required-profile.title"]]),D(l,{matchData:a.matchData},null,8,["matchData"])])):r("",!0),a.matchData.meta.leadershipWorkTeam?(s(),n("div",Bs,[e(t("h2",Zs,null,512),[[p,"opportunity.team.title"]]),D(b,{sizeTeam:a.matchData.meta.sizeTeam,rangeAge:a.matchData.meta.ageRange,leadershipWorkTeam:a.matchData.meta.leadershipWorkTeam},null,8,["sizeTeam","rangeAge","leadershipWorkTeam"])])):r("",!0),D(g)])):r("",!0)}var Us=jt(Ds,[["render",Ps]]);export{Us as default};
