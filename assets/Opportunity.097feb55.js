var mt=Object.defineProperty,dt=Object.defineProperties;var ht=Object.getOwnPropertyDescriptors;var lt=Object.getOwnPropertySymbols;var ut=Object.prototype.hasOwnProperty,ft=Object.prototype.propertyIsEnumerable;var ot=(a,i,u)=>i in a?mt(a,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):a[i]=u,q=(a,i)=>{for(var u in i||(i={}))ut.call(i,u)&&ot(a,u,i[u]);if(lt)for(var u of lt(i))ft.call(i,u)&&ot(a,u,i[u]);return a},it=(a,i)=>dt(a,ht(i));import{d as S,au as gt,ah as ct,ai as M,e as C,o as s,f as n,i as t,t as o,aa as _t,h as e,q as c,p as v,ao as f,ab as $,s as rt,w as x,g as k,ac as j,l as g,r as T,m as pt}from"./vendor.e144c39d.js";import{_ as yt,a as bt,S as vt}from"./management-type.257deb1f.js";import{s as kt}from"./utils.1fce72cf.js";import{b as wt}from"./bootstrap.bundle.min.6348bf06.js";import{S as A,C as Dt}from"./carousel.es.dc73aeda.js";import $t from"./SubMenuHeaderOpportunity.c8fee06c.js";import{_ as xt}from"./index.27056029.js";import"./moment.08a7f518.js";import"./bootstrap.esm.f2db94b8.js";const jt={class:"row gx-4 mx-0 mb-4 pb-2",id:"information-location"},Tt={class:"col-12 col-md-6 ps-md-0 mb-4"},St={class:"bg-white h-100 shadow rounded-12 px-4 py-3"},Mt={class:"d-flex h-100 align-items-center"},Ct={class:"p-2 w-100"},Wt={class:"d-flex bd-highlight"},qt={class:"p-2 w-100 bd-highlight"},At={class:"p-2 flex-shrink-1 bd-highlight clickable"},zt=t("em",{class:"far fa-heart ms-3 fs-20 mb-n1"},null,-1),Ft=[zt],Zt={class:"mb-1 ps-2"},Bt={key:0,class:"me-4"},Lt=t("i",{class:"fas fa-file-alt text-dark-gray me-1"},null,-1),Pt={class:"ms-1"},Et={key:1,class:"me-4"},Ht={key:0,class:"fas fa-dollar-sign text-dark-gray me-1"},It={key:1,class:"fas fa-euro-sign text-dark-gray me-1"},Ot={key:2},Rt={key:3},Vt={key:2},Nt={key:0},Gt={key:1},Ut={key:0,class:"mb-1 ps-2"},Jt=t("i",{class:"fas fa-map-marker-alt text-dark-gray me-1"},null,-1),Kt=["data-bs-content"],Yt={key:1,class:"ms-1"},Qt={class:"mb-1 ps-2"},Xt={key:0,class:"me-4"},ta=t("i",{class:"fas fa-home-lg-alt text-dark-gray",style:{"font-size":"12px"}},null,-1),aa={class:"ms-1 me-1"},ea={key:1},sa=t("i",{class:"fas fa-plane text-dark-gray me-1"},null,-1),na=v(),la={key:0,class:"col-12 col-md-6 pe-md-0 mb-4"},oa={class:"bg-white h-100 shadow rounded-12 px-4 py-0"},ia={class:"d-flex h-100 align-items-center"},ca=["src"],ra=t("div",{class:"vertical-hr"},null,-1),ma={class:"px-2 w-100"},da={class:"mb-0"},ha={class:"mb-2"},ua=t("i",{class:"fas fa-user-friends text-dark-gray"},null,-1),fa={class:"ps-1 d-flex align-items-center"},ga=t("i",{class:"fas fa-map-marker-alt text-dark-gray me-1"},null,-1),_a=v(),pa=t("i",{class:"fas fa-chevron-right"},null,-1),ya=S({props:{matchData:null},emits:["favorite","goTo"],setup(a,{emit:i}){const u=a,r=gt();ct(()=>{Array.from(document.querySelectorAll('#information-location [data-bs-toggle="popover"]')).forEach(l=>new wt.exports.Popover(l))}),M(()=>r.state.auth.userData.favorites?r.state.auth.userData.favorites:[]),M(()=>r.state.auth.userData._id);let d=M(()=>r.state.auth.accessToken!=null),b=M(()=>{var y,h;let l="";return u.matchData.company.meta.industry&&(l=((y=u.matchData.company.meta.industry)==null?void 0:y.name_fr)+"-",l=((h=u.matchData.company.meta.industry)==null?void 0:h.name_en)+"-"),l});ct(()=>{if(d)return r.dispatch("auth/getCurrentUser")});function w(l){return Number(l)/1e3}function m(){i("goTo")}function _(){location.replace("https://dev.jobgether.com/talent/login")}return(l,y)=>{var p,W,z,F,Z,B,L,P,E,H,I,O,R,V,N,G,U,J,K,Y,Q,X,tt,at,et,st,nt;const h=C("t");return s(),n("div",jt,[t("div",Tt,[t("div",St,[t("div",Mt,[t("div",Ct,[t("div",Wt,[t("h5",qt,o(a.matchData.title),1),t("span",At,[t("div",null,[t("div",null,[t("div",{class:"fav_icon",onClick:y[0]||(y[0]=_t(D=>_(),["stop"]))},Ft)])])])]),t("p",Zt,[a.matchData.meta.contractType?(s(),n("span",Bt,[Lt,e(t("span",Pt,null,512),[[h,`opportunity.informations.contractType.${(p=a.matchData.meta)==null?void 0:p.contractType}`]])])):c("",!0),((z=(W=a.matchData.meta)==null?void 0:W.salary)==null?void 0:z.min)&&((Z=(F=a.matchData.meta)==null?void 0:F.salary)==null?void 0:Z.max)?(s(),n("span",Et,[(a.matchData.meta.currency="USD")?(s(),n("em",Ht)):(s(),n("em",It)),((L=(B=a.matchData.meta)==null?void 0:B.salary)==null?void 0:L.min)&&((E=(P=a.matchData.meta)==null?void 0:P.salary)==null?void 0:E.max)?(s(),n("span",Ot,o(w((I=(H=a.matchData.meta)==null?void 0:H.salary)==null?void 0:I.min))+" - "+o(w((R=(O=a.matchData.meta)==null?void 0:O.salary)==null?void 0:R.max)),1)):(s(),n("span",Rt," 0")),e(t("span",null,null,512),[[h,"global.kAnnuel"]])])):c("",!0),((N=(V=a.matchData.meta)==null?void 0:V.remmuneration)==null?void 0:N.min)&&((U=(G=a.matchData.meta)==null?void 0:G.remmuneration)==null?void 0:U.max)?(s(),n("span",Vt,[e(t("span",null,null,512),[[h,"global.variable"]]),((K=(J=a.matchData.meta)==null?void 0:J.remmuneration)==null?void 0:K.min)&&((Q=(Y=a.matchData.meta)==null?void 0:Y.remmuneration)==null?void 0:Q.max)?(s(),n("span",Nt,o(w((tt=(X=a.matchData.meta)==null?void 0:X.remmuneration)==null?void 0:tt.min))+" - "+o(w((et=(at=a.matchData.meta)==null?void 0:at.remmuneration)==null?void 0:et.max)),1)):(s(),n("span",Gt," 0")),e(t("span",null,null,512),[[h,"global.kAnnuel"]])])):c("",!0)]),a.matchData.meta.locations&&a.matchData.meta.locations.length>0?(s(),n("p",Ut,[Jt,a.matchData.meta.locations.length>3?(s(),n("span",{key:0,class:"ms-1","data-bs-toggle":"popover","data-bs-trigger":"hover","data-bs-placement":"bottom","data-bs-content":a.matchData.meta.locations.map(D=>D.name).join(", ")},o(a.matchData.meta.locations.map(D=>D.name).slice(0,3).join(", "))+"... ",9,Kt)):(s(),n("span",Yt,o(a.matchData.meta.locations.map(D=>D.name).join(", ")),1))])):c("",!0),t("p",Qt,[a.matchData.meta.remote.length>0?(s(),n("span",Xt,[ta,e(t("strong",aa,null,512),[[h,"opportunity.informations.homeworking.title"]]),v(" "+o(a.matchData.meta.remote.map(D=>l.$t(`widget.matchOfferCard.${D}`)).join(", ")),1)])):c("",!0),a.matchData.meta.travel?(s(),n("span",ea,[sa,e(t("strong",null,null,512),[[h,"opportunity.informations.travel.title"]]),na,e(t("span",null,null,512),[[h,`opportunity.informations.travel.${a.matchData.meta.travel}`]])])):c("",!0)])])])])]),a.matchData.company?(s(),n("div",la,[t("div",oa,[t("div",ia,[t("div",null,[t("img",{src:(nt=(st=a.matchData.company)==null?void 0:st.meta)==null?void 0:nt.picture,alt:"Match working",class:"img-fluid ms-2",width:"200"},null,8,ca)]),ra,t("div",ma,[t("h5",da,o(a.matchData.company.name),1),t("p",null,[t("span",null,o(f(b)),1),v(" "+o(a.matchData.company.meta.organization_type),1)]),t("p",ha,[ua,v(" "+o(a.matchData.company.meta.employees)+" ",1),e(t("span",null,null,512),[[h,"global.employees"]])]),t("p",fa,[a.matchData.company.meta.presence?(s(),n($,{key:0},[ga,v(" "+o(a.matchData.company.meta.presence.slice(0,2).join(", ")+"..."),1)],64)):c("",!0),f(d)?(s(),n("strong",{key:1,class:"ms-auto clickable",onClick:m},[e(t("span",null,null,512),[[h,"opportunity.informations.seeCompany"]]),_a,pa])):c("",!0),f(d)?c("",!0):(s(),n("button",{key:2,class:"ms-auto btn btn-outline-primary fs-14 fw-bold",onClick:m}," S\u2019inscrire "))])])])])])):c("",!0)])}}}),ba={class:"col col-12 bg-white shadow-jg rounded-12 px-4 py-3 mb-3"},va=t("img",{class:"ms-n10 me-2 mb-1",src:yt,alt:"Logo Jobgether"},null,-1),ka={class:"d-inline-flex ms-1 h6 fw-bold text-uppercase"},wa={class:"description__container fw-light pt-2"},Da=["innerHTML"],$a=S({props:{description:null},setup(a){return(i,u)=>{const r=C("t");return s(),n("div",ba,[va,e(t("p",ka,null,512),[[r,"opportunity.description.subtitle"]]),t("div",wa,[t("div",{class:"temp",innerHTML:a.description},null,8,Da)])])}}});var xa="https://cdn.jsdelivr.net/gh/carlospjobgether/dist-frontend/assets/img/icons/training-icon.png",ja="https://cdn.jsdelivr.net/gh/carlospjobgether/dist-frontend/assets/img/icons/skills-icon.png",Ta="https://cdn.jsdelivr.net/gh/carlospjobgether/dist-frontend/assets/img/icons/personality-style-icon.png",Sa="https://cdn.jsdelivr.net/gh/carlospjobgether/dist-frontend/assets/img/icons/professional-character-icon.png",Ma="https://cdn.jsdelivr.net/gh/carlospjobgether/dist-frontend/assets/img/icons/thinking-style-icon.png";const Ca={class:"carousel__item big shadow-sm"},Wa={class:"d-flex carousel__item_title"},qa=t("div",{class:"flex-shrink-0"},[t("img",{src:xa,alt:"Match working",class:"img-fluid",width:"35",height:"35"})],-1),Aa={class:"flex-grow-1 d-flex align-items-center text-uppercase"},za={class:"break-spaces fw-bold"},Fa={class:"ps-2"},Za={key:0},Ba=t("svg",{class:"me-2",xmlns:"http://www.w3.org/2000/svg",width:"13.83",height:"10.562",viewBox:"0 0 13.83 10.562"},[t("g",{transform:"translate(-1855.624 140.847)"},[t("path",{d:"M1911.689-130.779c-.021-.019-.043-.036-.063-.056a5.063,5.063,0,0,0-2.087-1.225,6.947,6.947,0,0,0-1.629-.3c-.187-.013-.374-.021-.562-.026a.51.51,0,0,1-.548-.558q0-3.655,0-7.31a.494.494,0,0,1,.329-.514.628.628,0,0,1,.21-.03,7.21,7.21,0,0,1,1.553.178,4.654,4.654,0,0,1,2.017.99,3.872,3.872,0,0,1,.718.839.625.625,0,0,1,.085.348q0,3,0,6v1.653Z",transform:"translate(-49.552 -0.046)",fill:"#6e8d98"}),t("path",{d:"M2085.75-130.813c0-.045,0-.073,0-.1q0-3.794,0-7.588a.7.7,0,0,1,.126-.4,3.893,3.893,0,0,1,1.149-1.129,4.776,4.776,0,0,1,1.161-.531,6.962,6.962,0,0,1,1.951-.285.5.5,0,0,1,.525.536q0,1.9,0,3.794,0,1.77,0,3.541a.492.492,0,0,1-.273.48.707.707,0,0,1-.259.06c-.318.024-.639.024-.956.063a5.85,5.85,0,0,0-2.879,1.091c-.162.122-.307.266-.459.4Z",transform:"translate(-222.824 0)",fill:"#6e8d98"}),t("path",{d:"M1861.446-78.163c-.116-.024-.209-.047-.3-.063-.268-.044-.535-.1-.8-.124a11.026,11.026,0,0,0-1.8-.035,13.446,13.446,0,0,0-1.711.211c-.215.041-.429.089-.645.121a.488.488,0,0,1-.554-.465c0-.018,0-.037,0-.055q0-3.9,0-7.793a.492.492,0,0,1,.28-.476.48.48,0,0,1,.173-.048c.1-.008.206,0,.308-.007.079-.005.1.027.1.1a.633.633,0,0,0,0,.079v5.94a1.356,1.356,0,0,0,.166.7,1.2,1.2,0,0,0,.726.583,1.806,1.806,0,0,0,.42.062,8.268,8.268,0,0,1,1.29.132,4.983,4.983,0,0,1,1.9.758c.142.1.274.214.41.322A.567.567,0,0,1,1861.446-78.163Z",transform:"translate(0 -52.239)",fill:"#6e8d98"}),t("path",{d:"M2108.532-78.129c.062-.055.121-.113.186-.165a4.541,4.541,0,0,1,1.445-.766,6.961,6.961,0,0,1,2.017-.316,1.343,1.343,0,0,0,.688-.181,1.181,1.181,0,0,0,.552-.7,1.774,1.774,0,0,0,.066-.475q.007-2.994,0-5.988c0-.125,0-.129.124-.124a2,2,0,0,1,.392.03.464.464,0,0,1,.338.439q0,.028,0,.055,0,3.9,0,7.794a.5.5,0,0,1-.262.472.552.552,0,0,1-.392.04c-.347-.065-.693-.141-1.042-.193a11.257,11.257,0,0,0-2.281-.137c-.379.02-.758.054-1.135.1-.209.023-.414.077-.621.117l-.068.013Z",transform:"translate(-244.888 -52.294)",fill:"#6e8d98"})])],-1),La={class:"fw-bold"},Pa=v(" : "),Ea={key:1},Ha=t("svg",{class:"me-2",xmlns:"http://www.w3.org/2000/svg",width:"15.509",height:"10.973",viewBox:"0 0 15.509 10.973"},[t("g",{transform:"translate(-1416.187 170.913)"},[t("path",{d:"M1589.433-146.023c.016-.117.031-.226.047-.334a4.169,4.169,0,0,0-.017-1.345,4.268,4.268,0,0,0-1.329-2.446,4.215,4.215,0,0,0-2.221-1.093,7.214,7.214,0,0,0-.79-.059c-.119-.007-.13-.008-.13-.125,0-.644,0-1.288,0-1.933a.57.57,0,0,1,.613-.6q3.358,0,6.716,0a.582.582,0,0,1,.621.623q0,3.351,0,6.7a.586.586,0,0,1-.614.622c-.927,0-1.855,0-2.783,0C1589.516-146.014,1589.483-146.019,1589.433-146.023Z",transform:"translate(-161.251 -16.192)",fill:"#6e8d98"}),t("path",{d:"M1520.691-69.639a3.23,3.23,0,0,1,3.214,3.227,3.234,3.234,0,0,1-3.229,3.214,3.233,3.233,0,0,1-3.213-3.24A3.229,3.229,0,0,1,1520.691-69.639Z",transform:"translate(-96.743 -96.741)",fill:"#6e8d98"}),t("path",{d:"M1423.289-167.466c-.256.069-.5.118-.734.2a4.274,4.274,0,0,0-2.747,2.8,4.964,4.964,0,0,0-.149.651c-.017.087-.064.094-.133.094h-1.664c-.354,0-.707,0-1.061,0a.569.569,0,0,1-.537-.3.561.561,0,0,1,.039-.621l3.149-4.794c.257-.392.513-.785.771-1.176a.568.568,0,0,1,.78-.228.667.667,0,0,1,.216.2q1.017,1.535,2.024,3.077C1423.259-167.53,1423.271-167.5,1423.289-167.466Z",transform:"translate(0 0)",fill:"#6e8d98"})])],-1),Ia={class:"fw-bold"},Oa=v(" : "),Ra={key:2,class:"mb-0"},Va=t("svg",{class:"me-2",xmlns:"http://www.w3.org/2000/svg",width:"13.457",height:"12.496",viewBox:"0 0 13.457 12.496"},[t("g",{transform:"translate(-2.25 -4.5)"},[t("path",{d:"M28.595,17H24.75V4.5h3.845Z",transform:"translate(-12.888)",fill:"#6e8d98"}),t("path",{d:"M17.345,22.151H13.5V13.5h3.845Z",transform:"translate(-6.444 -5.155)",fill:"#6e8d98"}),t("path",{d:"M6.095,26.017H2.25V20.25H6.095Z",transform:"translate(0 -9.021)",fill:"#6e8d98"})])],-1),Na={class:"fw-bold"},Ga={key:3,class:"ps-3"},Ua={class:"col col-12 col-md-12 d-flex flex-wrap"},Ja={key:4},Ka={class:"mb-1 mt-3"},Ya=t("svg",{class:"me-2",xmlns:"http://www.w3.org/2000/svg",width:"13.958",height:"13.96",viewBox:"0 0 13.958 13.96"},[t("g",{transform:"translate(379.986 -593.952)"},[t("path",{d:"M-341.541,734.217a.73.73,0,0,0,.139-.085q2.395-2.391,4.785-4.786a.378.378,0,0,1,.3-.121q2.4.006,4.793,0h.161a6.129,6.129,0,0,1-3.008,5.72A6.038,6.038,0,0,1-341.541,734.217Z",transform:"translate(-36.347 -127.89)",fill:"#6e8d98"}),t("path",{d:"M-244.618,600.518v-6.544a6.177,6.177,0,0,1,6.558,6.544Z",transform:"translate(-127.98)",fill:"#6e8d98"}),t("path",{d:"M-378.45,663.607a6.017,6.017,0,0,1,.434-8.467l4.015,4.018Z",transform:"translate(0 -57.849)",fill:"#6e8d98"}),t("path",{d:"M-327.923,624.4v5.066l-3.942-3.942A6.12,6.12,0,0,1-327.923,624.4Z",transform:"translate(-45.495 -28.779)",fill:"#6e8d98"})])],-1),Qa={class:"fw-bold"},Xa={class:"ps-3"},te={key:5,class:"mb-1"},ae=t("svg",{class:"me-2",xmlns:"http://www.w3.org/2000/svg",width:"12.785",height:"14.655",viewBox:"0 0 12.785 14.655"},[t("g",{transform:"translate(-7.209 -826.981)"},[t("path",{d:"M9.3,829.872c.314-.157.607-.311.907-.451a7.6,7.6,0,0,1,1.961-.64,4.989,4.989,0,0,1,2.678.281c.368.143.739.282,1.091.459a1.873,1.873,0,0,0,1.483.1c.391-.13.767-.3,1.144-.473.238-.107.461-.248.7-.357a.47.47,0,0,1,.722.464c0,.791,0,1.582,0,2.373,0,1.063,0,2.125,0,3.188a.523.523,0,0,1-.29.512,7.545,7.545,0,0,1-2.338.884,3.257,3.257,0,0,1-1.978-.342c-.314-.148-.624-.306-.947-.432a3.825,3.825,0,0,0-2.591-.02c-.543.17-1.064.407-1.6.613a.124.124,0,0,0-.09.16c.176,1.254.345,2.508.516,3.763.039.288.081.575.117.863A.709.709,0,1,1,9.392,841q-.3-2.207-.6-4.414-.294-2.15-.591-4.3c-.135-.985-.27-1.971-.4-2.957a.289.289,0,0,0-.12-.21,1.195,1.195,0,0,1,.483-2.115,1.191,1.191,0,0,1,1.131,1.969.272.272,0,0,0-.076.267C9.255,829.45,9.276,829.657,9.3,829.872Z",transform:"translate(0 0)",fill:"#6e8d98"})])],-1),ee={class:"fw-bold"},se={key:6,class:"row ps-3"},ne={key:0,class:"col col-12 col-md-6"},le={class:"mb-1 text-dark-gray"},oe={key:1,class:"col col-12 col-md-6"},ie={class:"mb-1 text-dark-gray"},ce={key:0,class:"carousel__item big shadow-sm"},re={class:"d-flex carousel__item_title"},me=t("div",{class:"flex-shrink-0"},[t("img",{src:ja,alt:"Match working",class:"img-fluid",width:"35",height:"35"})],-1),de={class:"flex-grow-1 d-flex align-items-center text-uppercase"},he={class:"break-spaces fw-bold"},ue={key:0,class:"fw-bold fs-6 mb-2"},fe={key:1,class:"mb-3"},ge={key:2,class:"fw-bold fs-6 mb-2"},_e={key:3,class:"mb-3"},pe={key:0,class:"carousel__item shadow-sm"},ye={class:"d-flex carousel__item_title"},be=t("div",{class:"flex-shrink-0"},[t("img",{src:Ta,alt:"Match working",class:"img-fluid",width:"35",height:"35"})],-1),ve={class:"flex-grow-1 text-uppercase"},ke={class:"break-spaces fw-bold"},we={class:"fw-bold fs-6"},De={class:"break-spaces fw-light text-dark-gray"},$e={key:0,class:"carousel__item shadow-sm"},xe={class:"d-flex carousel__item_title"},je=t("div",{class:"flex-shrink-0"},[t("img",{src:Sa,alt:"Match working",class:"img-fluid",width:"35",height:"35"})],-1),Te={class:"flex-grow-1 text-uppercase"},Se={class:"break-spaces fw-bold"},Me={class:"fw-bold fs-6"},Ce={class:"break-spaces fw-light text-dark-gray"},We={key:0,class:"carousel__item shadow-sm"},qe={class:"d-flex carousel__item_title"},Ae=t("div",{class:"flex-shrink-0"},[t("img",{src:Ma,alt:"Match working",class:"img-fluid",width:"35",height:"35"})],-1),ze={class:"flex-grow-1 text-uppercase"},Fe={class:"break-spaces fw-bold"},Ze={class:"fw-bold fs-6"},Be={class:"break-spaces fw-light text-dark-gray"},Le=S({props:{matchData:null},setup(a){const i=a,u={options:{itemsToScroll:1,wrapAround:!1,snapAlign:"center-even",transition:2e3,autoplay:!1,breakpoints:{700:{itemsToShow:1.3,snapAlign:"center-even"},1024:{itemsToShow:2,snapAlign:"center-even"}},modelValue:0,mouseDrag:!0,touchDrag:!0,pauseAutoplayOnHover:!0}},r="en",d=M(()=>{var b,w,m,_,l;return q(q(q({},(b=i.matchData.meta.skills)==null?void 0:b.ideas),(m=(w=i.matchData.meta)==null?void 0:w.skills)==null?void 0:m.people),(l=(_=i.matchData.meta)==null?void 0:_.skills)==null?void 0:l.things)});return(b,w)=>{const m=C("t");return s(),rt(f(Dt),{class:"profile-carousel",settings:u.options},{default:x(()=>[k(f(A),{key:0},{default:x(()=>{var _;return[t("div",Ca,[t("div",Wa,[qa,t("div",Aa,[e(t("span",za,null,512),[[m,"joboffer.training.title"]])])]),t("div",Fa,[a.matchData.meta.studiesRequired?(s(),n("p",Za,[Ba,e(t("span",La,null,512),[[m,"joboffer.formation.degree"]]),Pa,e(t("span",null,null,512),[[m,"joboffer.studies."+a.matchData.meta.studiesRequired]])])):c("",!0),a.matchData.meta.specializations?(s(),n("p",Ea,[Ha,e(t("span",Ia,null,512),[[m,"joboffer.formation.type-study"]]),Oa,t("span",null,o(a.matchData.meta.specializations.map(l=>b.$t("joboffer.studies."+l)).join(", ")),1)])):c("",!0),a.matchData.meta.yearsOfExperienceTotal?(s(),n("p",Ra,[Va,e(t("span",Na,null,512),[[m,"joboffer.formation.level-exp"]]),v(" : "+o(a.matchData.meta.yearsOfExperienceTotal)+" ans ",1)])):c("",!0),a.matchData.meta.industries&&a.matchData.meta.industries.length>0?(s(),n("div",Ga,[t("div",Ua,[(s(!0),n($,null,j(a.matchData.meta.industries,(l,y)=>(s(),n("div",{class:"badge bg-dark-gray-20 break-spaces mb-2 mt-1 me-1 rounded-pill text-primary",key:y},[e(t("span",null,o(l.industry.name_fr),513),[[g,r=="fr"]]),e(t("span",null,o(l.industry.name_en),513),[[g,r=="en"]]),e(t("span",null,o(l.industry.name_es),513),[[g,r=="es"]])]))),128))])])):c("",!0),a.matchData.meta.keyResponsability?(s(),n("div",Ja,[t("p",Ka,[Ya,e(t("span",Qa,null,512),[[m,"joboffer.formation.level-management"]])]),e(t("p",Xa,null,512),[[m,"joboffer.formation."+((_=a.matchData.meta)==null?void 0:_.keyResponsability)]])])):c("",!0),a.matchData.meta.languages&&a.matchData.meta.languages.length>0?(s(),n("p",te,[ae,e(t("span",ee,null,512),[[m,"joboffer.formation.languages.title"]])])):c("",!0),a.matchData.meta.languages&&a.matchData.meta.languages.length>0?(s(),n("div",se,[a.matchData.meta.languages.filter(l=>l.mandatory).length>0?(s(),n("div",ne,[e(t("p",le,null,512),[[m,"joboffer.formation.languages.obligatory"]]),(s(!0),n($,null,j(a.matchData.meta.languages.filter(l=>l.mandatory),l=>{var y,h,p;return s(),n("div",{key:l,class:"list-item"},[e(t("span",null,o((y=l.language)==null?void 0:y.name_fr),513),[[g,r=="fr"]]),e(t("span",null,o((h=l.language)==null?void 0:h.name_en),513),[[g,r=="en"]]),e(t("span",null,o((p=l.language)==null?void 0:p.name_es),513),[[g,r=="es"]]),e(t("span",null," - "+o(l==null?void 0:l.level),513),[[g,l.level]])])}),128))])):c("",!0),a.matchData.meta.languages.filter(l=>!l.mandatory).length>0?(s(),n("div",oe,[e(t("p",ie,null,512),[[m,"joboffer.formation.languages.desired"]]),(s(!0),n($,null,j(a.matchData.meta.languages.filter(l=>!l.mandatory),(l,y)=>{var h,p,W;return s(),n("div",{key:y,class:"list-item"},[e(t("span",null,o((h=l.language)==null?void 0:h.name_fr),513),[[g,r=="fr"]]),e(t("span",null,o((p=l.language)==null?void 0:p.name_en),513),[[g,r=="en"]]),e(t("span",null,o((W=l.language)==null?void 0:W.name_es),513),[[g,r=="es"]]),e(t("span",null," - "+o(l==null?void 0:l.level),513),[[g,l.level]])])}),128))])):c("",!0)])):c("",!0)])])]}),_:1}),k(f(A),{key:1},{default:x(()=>[f(d).length&&f(d).length>0&&a.matchData.meta.hardSkills&&a.matchData.meta.hardSkills.length>0?(s(),n("div",ce,[t("div",re,[me,t("div",de,[e(t("span",he,null,512),[[m,"joboffer.skills.title"]])])]),a.matchData.meta.hardSkills&&a.matchData.meta.hardSkills.length>0?e((s(),n("p",ue,null,512)),[[m,"joboffer.skills.hard-skills.title"]]):c("",!0),a.matchData.meta.hardSkills&&a.matchData.meta.hardSkills.length>0?(s(),n("div",fe,[(s(!0),n($,null,j(a.matchData.meta.hardSkills,(_,l)=>(s(),n("span",{class:"badge rounded-pill text-blue-app bg-blue-app-20 me-2 mb-2 py-2",key:"hardskill"+l},[e(t("span",null,o(_.name_fr),513),[[g,r=="fr"]]),e(t("span",null,o(_.name_en),513),[[g,r=="en"]]),e(t("span",null,o(_.name_es),513),[[g,r=="es"]])]))),128))])):c("",!0),f(d).length&&f(d).length>0?e((s(),n("p",ge,null,512)),[[m,"joboffer.skills.soft-skills.title"]]):c("",!0),f(d).length&&f(d).length>0?(s(),n("div",_e,[(s(!0),n($,null,j(f(d),_=>e((s(),n("span",{class:"badge rounded-pill text-green-app bg-green-app-20 me-2 mb-2 py-2",key:"softskill"+_},null,512)),[[m,`joboffer.skills.soft-skills.${_}`]])),128))])):c("",!0)])):c("",!0)]),_:1}),k(f(A),{key:2},{default:x(()=>[a.matchData.meta.personalityStyle?(s(),n("div",pe,[t("div",ye,[be,t("div",ve,[e(t("span",ke,null,512),[[m,"joboffer.personality-style.title"]])])]),e(t("p",we,null,512),[[m,`joboffer.personality-style.${a.matchData.meta.personalityStyle}.title`]]),e(t("p",De,null,512),[[m,`joboffer.personality-style.${a.matchData.meta.personalityStyle}.text`]])])):c("",!0)]),_:1}),k(f(A),{key:3},{default:x(()=>[a.matchData.meta.professionalInterest?(s(),n("div",$e,[t("div",xe,[je,t("div",Te,[e(t("span",Se,null,512),[[m,"joboffer.professional-character.title"]])])]),e(t("p",Me,null,512),[[m,`joboffer.professional-character.${a.matchData.meta.professionalInterest}.title`]]),e(t("p",Ce,null,512),[[m,`joboffer.professional-character.${a.matchData.meta.professionalInterest}.text`]])])):c("",!0)]),_:1}),k(f(A),{key:4},{default:x(()=>[a.matchData.meta.thinkingStyle?(s(),n("div",We,[t("div",qe,[Ae,t("div",ze,[e(t("span",Fe,null,512),[[m,"joboffer.thinking-style.title"]])])]),e(t("p",Ze,null,512),[[m,`joboffer.thinking-style.${a.matchData.meta.thinkingStyle}.title`]]),e(t("p",Be,null,512),[[m,`joboffer.thinking-style.${a.matchData.meta.thinkingStyle}.text`]])])):c("",!0)]),_:1})]),_:1},8,["settings"])}}}),Pe={class:"col col-12 bg-white shadow-jg rounded-12 p-4 mb-3"},Ee={class:"me-4 pe-2"},He=t("i",{class:"fas fa-user-friends text-dark-gray me-1"},null,-1),Ie=v(" : "),Oe=t("i",{class:"fas fa-birthday-cake me-1"},null,-1),Re=v(" : "),Ve={class:"d-block"},Ne={class:"h6 mb-4 w-100"},Ge={class:"d-flex"},Ue=t("div",{class:"h-100 d-inline-flex flex-shrink-1"},[t("img",{src:bt,alt:"Match working",class:"img-fluid float-start me-4",width:"100"})],-1),Je={class:"d-inline-flex"},Ke={class:"w-100"},Ye={class:"h6",style:{"line-height":"40px"}},Qe=t("br",null,null,-1),Xe=S({props:{sizeTeam:null,rangeAge:null,leadershipWorkTeam:null},setup(a){return(i,u)=>{const r=T("i18n-t"),d=C("t");return s(),n("div",Pe,[t("p",null,[e(t("span",Ee,[He,e(t("strong",null,null,512),[[d,"opportunity.team.size.title"]]),Ie,k(r,{keypath:"opportunity.team.size.text"},{size:x(()=>[v(o(a.sizeTeam),1)]),_:1})],512),[[g,a.sizeTeam]]),e(t("span",null,[Oe,e(t("strong",null,null,512),[[d,"opportunity.team.age.title"]]),Re,k(r,{keypath:"opportunity.team.age.text"},{age:x(()=>[v(o(a.rangeAge),1)]),_:1})],512),[[g,a.rangeAge]])]),e(t("div",Ve,[e(t("p",Ne,null,512),[[d,"opportunity.team.management-type.title"]]),t("div",Ge,[Ue,t("div",Je,[t("p",Ke,[e(t("span",Ye,null,512),[[d,"opportunity.team.management-type."+a.leadershipWorkTeam+".title"]]),Qe,e(t("span",null,null,512),[[d,`opportunity.team.management-type.${a.leadershipWorkTeam}.description`]])])])])],512),[[g,a.leadershipWorkTeam]])])}}});const ts={class:"row gx-4 mx-0 mb-4 pb-2"},as={class:"col-12 col-lg-12 ps-md-0 mb-4"},es={class:"bg-white h-100 shadow rounded-12 px-4 py-3 row"},ss={class:"col-lg-6"},ns={class:"pe-5"},ls={class:"badge-flexibility-w me-2 mb-2"},os={class:"badge-flexibility-w me-2 mb-2"},is={class:"badge-flexibility-w me-2 mb-2"},cs=["innerHTML"],rs={key:0,class:"pe-5"},ms={key:0,class:"col-lg-6 border-start"},ds={class:"pt-3 ps-3"},hs={class:"fw-bold"},us={class:"pt-4 ps-3"},fs={class:"pe-5"},gs=S({props:{matchData:null},setup(a){const i=a,u=M(()=>{let b={};return b.when=i.matchData.company.meta.flex_when_score?"When "+Math.round(i.matchData.company.meta.flex_when_score)+"%":"",b.where=i.matchData.company.meta.flex_where_score?"When "+Math.round(i.matchData.company.meta.flex_where_score)+"%":"",b.how=i.matchData.company.meta.flex_how_score?"When "+Math.round(i.matchData.company.meta.flex_how_score)+"%":"",b});let r=window.localStorage.getItem("userLang"),d="";return r?d=r:(r=navigator.language,r.includes("es")?d="es":r.includes("fr")?d="fr":d="en"),(b,w)=>{var _,l,y;const m=C("t");return s(),n("div",ts,[t("div",as,[t("div",es,[t("div",ss,[t("div",ns,[t("span",ls,o(f(u).where),1),t("span",os,o(f(u).when),1),t("span",is,o(f(u).how),1)]),t("div",{class:"pe-5 pt-3",innerHTML:(_=a.matchData.meta)==null?void 0:_.otherRemotePolicyFreeText},null,8,cs),a.matchData.meta.benefitPersonal&&a.matchData.meta.benefitPersonal.length>0?(s(),n("div",rs,[(s(!0),n($,null,j((l=a.matchData.meta)==null?void 0:l.benefitPersonal,(h,p)=>(s(),n("div",{key:"personal"+p,class:"badge-flexibility-o text-blue-app fs-14 me-2 py-2 mb-2"},[e(t("span",null,o(h.name_fr),513),[[g,f(d)=="fr"]]),e(t("span",null,o(h.name_en),513),[[g,f(d)=="en"]]),e(t("span",null,o(h.name_es),513),[[g,f(d)=="es"]])]))),128))])):c("",!0)]),a.matchData.meta.benefitPersonalExtra&&a.matchData.meta.benefitPersonalExtra.length>0?(s(),n("div",ms,[t("div",ds,[e(t("span",hs,null,512),[[m,"opportunity.flexibility.other"]])]),t("div",us,[t("div",fs,[(s(!0),n($,null,j((y=a.matchData.meta)==null?void 0:y.benefitPersonalExtra,(h,p)=>(s(),n("div",{key:"personal"+p,class:"badge-flexibility-o text-blue-app fs-14 me-2 py-2 mb-2"},[e(t("span",null,o(h.name_fr),513),[[g,f(d)=="fr"]]),e(t("span",null,o(h.name_en),513),[[g,f(d)=="en"]]),e(t("span",null,o(h.name_es),513),[[g,f(d)=="es"]])]))),128))])])])):c("",!0)])])])}}}),_s=S({name:"TalentInterviews",components:{ProfileCarousel:Le,InformationsWidget:ya,DescriptionWidget:$a,TeamWidget:Xe,ScrollTopButton:vt,FlexibilityWidget:gs,SubMenuHeaderOpportunity:$t},data(){return{isFavorite:!1}},computed:it(q({},pt("talent",["matchData"])),{ProfileCarousel(){var i,u,r;let a=!1;return(this.matchData.meta.studiesRequired||this.matchData.meta.specializations&&this.matchData.meta.specializations.length>0||this.matchData.meta.yearsOfExperienceTotal||this.matchData.meta.industries&&this.matchData.meta.industries.length>0||this.matchData.meta.keyResponsability||this.matchData.meta.languages&&this.matchData.meta.languages.length>0||this.matchData.meta.hardSkills&&this.matchData.meta.hardSkills.length>0||((i=this.matchData.meta.skills)==null?void 0:i.ideas)||((u=this.matchData.meta.skills)==null?void 0:u.people)||((r=this.matchData.meta.skills)==null?void 0:r.things))&&(a=!0),a}}),updated(){this.$nextTick(()=>{console.log("menu sticky"),kt("opportunity","submenu__nav-opportunity")})},created(){window.scrollTo(0,0),window.addEventListener("scroll",this.scrollListener)},beforeDestroy(){window.removeEventListener("scroll",this.scrollListener)},methods:{scrollListener(a){const i=document.getElementById("returnBack");window.scrollY>150?(console.log("150"),i&&(i.style.display="none")):i&&(i.style.display="block")},saveFavorite(a){location.replace("https://dev.jobgether.com/talent/login")},goToCompany(){location.replace("https://dev.jobgether.com/talent/login")}}}),ps={key:0,id:"opportunity",class:"container","data-bs-spy":"scroll","data-bs-target":"#submenu__nav-opportunity","data-bs-offset":"0"},ys={id:"information"},bs={class:"d-flex bd-highlight"},vs={class:"p-2 w-100 bd-highlight"},ks={class:"mb-3 fs-22 fw-bold"},ws={id:"flexibility"},Ds={class:"d-flex bd-highlight"},$s={class:"p-2 w-100 bd-highlight"},xs={class:"mb-3 fs-22 fw-bold"},js={key:0,id:"description"},Ts={class:"mb-3 fs-22 fw-bold"},Ss={key:1,id:"required-profile"},Ms={class:"mb-3 fs-22 fw-bold"},Cs={key:2,id:"team"},Ws={class:"mb-3 fs-22 fw-bold"};function qs(a,i,u,r,d,b){const w=T("informations-widget"),m=T("Flexibility-widget"),_=T("DescriptionWidget"),l=T("profile-carousel"),y=T("TeamWidget"),h=T("ScrollTopButton"),p=C("t");return a.matchData!=={}&&a.matchData.meta?(s(),n("div",ps,[t("div",ys,[t("div",bs,[t("div",vs,[e(t("h2",ks,null,512),[[p,"opportunity.informations.title"]])])]),k(w,{matchData:a.matchData,isFavoriteTemp:a.isFavorite,onFavorite:a.saveFavorite,onGoTo:a.goToCompany},null,8,["matchData","isFavoriteTemp","onFavorite","onGoTo"])]),t("div",ws,[t("div",Ds,[t("div",$s,[e(t("h2",xs,null,512),[[p,"opportunity.flexibility.title"]])])]),k(m,{matchData:a.matchData},null,8,["matchData"])]),a.matchData.description?(s(),n("div",js,[e(t("h2",Ts,null,512),[[p,"opportunity.description.title"]]),a.matchData.description?(s(),rt(_,{key:0,description:a.matchData.description},null,8,["description"])):c("",!0)])):c("",!0),a.ProfileCarousel?(s(),n("div",Ss,[e(t("h2",Ms,null,512),[[p,"opportunity.required-profile.title"]]),k(l,{matchData:a.matchData},null,8,["matchData"])])):c("",!0),a.matchData.meta.leadershipWorkTeam?(s(),n("div",Cs,[e(t("h2",Ws,null,512),[[p,"opportunity.team.title"]]),k(y,{sizeTeam:a.matchData.meta.sizeTeam,rangeAge:a.matchData.meta.ageRange,leadershipWorkTeam:a.matchData.meta.leadershipWorkTeam},null,8,["sizeTeam","rangeAge","leadershipWorkTeam"])])):c("",!0),k(h)])):c("",!0)}var Os=xt(_s,[["render",qs]]);export{Os as default};
