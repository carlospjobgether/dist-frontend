var A=Object.defineProperty,U=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var O=(e,t,s)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,h=(e,t)=>{for(var s in t||(t={}))B.call(t,s)&&O(e,s,t[s]);if(P)for(var s of P(t))W.call(t,s)&&O(e,s,t[s]);return e},$=(e,t)=>U(e,q(t));import{d as x,m as w,e as S,o as r,f as d,i as a,h as i,j as b,F as T,l as L,b as j,r as M,g as k}from"./vendor.eb004e66.js";import{h as z,l as E}from"./index.4287b73b.js";import{M as F}from"./bootstrap.esm.29a9ab19.js";import{_ as C}from"./index.df45ddc4.js";const N=x({name:"modalAction",props:{applyLink:{type:Object}},data(){return{type:""}},computed:h({},w("talent",["matchData"])),methods:{goLogin(){location.replace("https://staging.jobgether.com/talent/login?next=true")},openUrl(e){window.open(e,"_blank")}}}),V={class:"modal fade",id:"modalLogin",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},I={class:"modal-dialog modal-dialog-centered"},H={class:"modal-content rounded-12 border-0"},R=a("div",{class:"modal-header"},[a("button",{type:"button",class:"btn-close fs-14","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Y={class:"modal-body px-5"},G={class:"fs-20 fw-bold transition text-center mb-4"},J={class:"px-4 mb-4 pb-3"},K={class:"me-2"},Q=a("i",{class:"far fa-sign-in-alt fs-20"},null,-1),X={class:"modal fade",id:"modalApply",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Z={class:"modal-dialog modal-dialog-centered"},ee={class:"modal-content rounded-12 border-0"},te=a("div",{class:"modal-header"},[a("button",{type:"button",class:"btn-close fs-14","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ae={key:0,class:"modal-body px-5"},se={class:"text-center pb-4"},oe={key:0,class:"d-flex justify-content-center px-4 py-1"},ne={key:1,class:"d-flex justify-content-center px-4 py-2"},ie={key:2,class:"d-flex justify-content-center px-4 py-2"};function le(e,t,s,c,f,D){var n,o,m,u,_,g;const l=S("t");return r(),d(T,null,[a("div",V,[a("div",I,[a("div",H,[R,a("div",Y,[i(a("h2",G,null,512),[[l,"auth.redirection"]]),a("p",J,[a("button",{class:"btn btn-primary w-100 bg-google-color border-0",type:"button",onClick:t[0]||(t[0]=(...y)=>e.goLogin&&e.goLogin(...y))},[i(a("span",K,null,512),[[l,"auth.login.btn_submit"]]),Q])])])])])]),a("div",X,[a("div",Z,[a("div",ee,[te,((o=(n=e.matchData)==null?void 0:n.meta)==null?void 0:o.apply_url)?(r(),d("div",ae,[i(a("h4",se,null,512),[[l,"offerPage.submenu.modal.valider.title"]]),((u=(m=e.matchData)==null?void 0:m.meta)==null?void 0:u.apply_url.includes("linkedin"))?(r(),d("div",oe,[a("button",{class:"btn btn-primary rounded-12 py-1 w-80",onClick:t[1]||(t[1]=y=>{var p,v;return e.openUrl((v=(p=e.matchData)==null?void 0:p.meta)==null?void 0:v.apply_url)})},[i(a("span",null,null,512),[[l,"offerPage.submenu.modal.valider.via.linkedin"]])])])):((g=(_=e.matchData)==null?void 0:_.meta)==null?void 0:g.apply_url.includes("indeed"))?(r(),d("div",ne,[a("button",{class:"btn btn-primary rounded-12 py-1 w-80",onClick:t[2]||(t[2]=y=>{var p,v;return e.openUrl((v=(p=e.matchData)==null?void 0:p.meta)==null?void 0:v.apply_url)})},[i(a("span",null,null,512),[[l,"offerPage.submenu.modal.valider.via.indeed"]])])])):(r(),d("div",ie,[a("button",{class:"btn btn-primary rounded-12 py-1 w-80",onClick:t[3]||(t[3]=y=>{var p,v;return e.openUrl((v=(p=e.matchData)==null?void 0:p.meta)==null?void 0:v.apply_url)})},[i(a("span",null,null,512),[[l,"offerPage.submenu.modal.valider.via.carrerSite"]])])]))])):b("v-if",!0)])])])],64)}var re=C(N,[["render",le]]);const de=x({name:"SubmenuWidget",components:{ModalAction:re},props:{matchData:{type:Object,required:!0},reasons:{type:Object,default:["enterprise","sector","contract","mission","location","salary","homework","other"]}},data(){return{modalType:"",reasonSelect:[],userStatus:{}}},computed:h({},w("auth",["userData","accessToken"])),created(){this.checkStatusUser()},methods:$(h(h(h(h({},L("auth",["update_user_data_array"])),L("talent",["updateUserMeta"])),j("auth",["getCurrentUser"])),j("talent",["update_profile_archived_offers"])),{formatDate(e){return z(e).format("L")},checkStatusUser(){this.userStatus={loggedout:!0,loggedin:!1},window.localStorage.getItem("accessToken")&&(this.userStatus={loggedout:!1,loggedin:!0})},modal_(e){window.scrollTo(0,0),this.modalType=e,new F(document.getElementById("modalApply")).show()},change_archived_offers(){this.$router.push({name:"TalentLogin"})}})}),ce={key:0,id:"match-card-neutral",class:"d-none mb-3 align-items-center bg-white py-3 px-4 rounded-12 submenu__intro text-center text-md-start"},me={class:"me-auto"},ue={class:"mb-1"},pe={key:0,class:"m-0"},he={class:"ms-3 me-1 d-inline"};function fe(e,t,s,c,f,D){var o,m,u;const l=M("ModalAction"),n=S("t");return r(),d(T,null,[k(l),b("End Modal "),((m=(o=e.userData)==null?void 0:o.archived_offers)==null?void 0:m.includes(e.matchData._id))?b("v-if",!0):(r(),d("div",ce,[a("div",me,[i(a("h4",ue,null,512),[[n,"offerPage.submenu.title"]]),((u=e.matchData)==null?void 0:u.updated_at)?(r(),d("p",pe,[b(` <span v-t="'opportunity.submenu.date'"></span> {{ formatDate(matchData.updated_at) }} `)])):b("v-if",!0)]),a("div",he,[i(a("button",{class:"btn btn-primary py-2",onClick:t[0]||(t[0]=_=>e.modal_("APPLY"))},null,512),[[n,"global.postulate"]])])]))],64)}var _e=C(de,[["render",fe]]);const be=x({components:{SubmenuWidget:_e},computed:$(h({},w("talent",["matchData"])),{ProfileCarousel(){var t,s,c,f,D,l,n,o,m,u,_,g,y,p;let e=!1;return(((t=this.matchData.meta)==null?void 0:t.studiesLevel)||((s=this.matchData.meta)==null?void 0:s.studiesType)&&((c=this.matchData.meta)==null?void 0:c.studiesType.length)>0||((f=this.matchData.meta)==null?void 0:f.managementLevel)||((D=this.matchData.meta)==null?void 0:D.industries)&&((l=this.matchData.meta)==null?void 0:l.industries.length)>0||((n=this.matchData.meta)==null?void 0:n.managementLevel)||((o=this.matchData.meta)==null?void 0:o.languages)&&((m=this.matchData.meta)==null?void 0:m.languages.length)>0||((u=this.matchData.meta)==null?void 0:u.hardSkills)&&((_=this.matchData.meta)==null?void 0:_.hardSkills.length)>0||((g=this.matchData.meta)==null?void 0:g.softSkills)&&((y=this.matchData.meta)==null?void 0:y.softSkills.length)>0||((p=this.matchData.meta)==null?void 0:p.experience))&&(e=!0),e},perks(){var e,t,s;return((e=this.matchData.meta)==null?void 0:e.perks)&&((s=(t=this.matchData.meta)==null?void 0:t.perks)==null?void 0:s.length)>0&&this.matchData.meta.perks.some(c=>c.enabled)?this.matchData.meta.perks.filter(c=>c.enabled):[]}}),created(){const e=this;let t=Object.assign({},this.$route.query);if(t||t.id){let s=[];s._id=t.id;let c=$(h({},s),{$populate:[{path:"meta.continents",select:"name"},"meta.countries","meta.regions","meta.cities","meta.studiesArea","meta.languages","meta.hardSkills","meta.industries",{path:"company",select:"name meta.logo meta.industry meta.companyType meta.employees meta.mainOfficeLocation meta.subOfficeLocation",populate:["meta.industry","meta.mainOfficeLocation","meta.subOfficeLocation"]}]});e.axios({method:"get",url:"/api/offer",baseURL:"https://jobgether-filter-dev.azurewebsites.net",params:c,paramsSerializer:f=>E.stringify(f,{arrayFormat:"indices"})}).then(f=>{console.log(f);const D=f.data.data[0];this.setMatchData(D)})}},methods:h(h({},j("talent",["getMatchData","getCompanyLogo"])),L("talent",["setMatchData"]))}),ge={class:"container pb-2 d-flex justify-content-between",id:"returnBack"},ye={class:"fs-14 text-start mt-2 mb-0 me-3"},ve=a("em",{class:"fas fa-chevron-left"},null,-1),De={class:"ms-2"},ke={class:"submenu pb-0 pt-2"},$e={class:"container col-xs-12"},xe={id:"submenu__nav-opportunity",class:"d-none flex-nowrap list-group list-group-horizontal submenu__nav"},we={class:"list-group-item d-flex"},Se={key:0,class:"list-group-item d-flex"},Le={key:1,class:"list-group-item d-flex"},je={key:2,class:"list-group-item d-flex"},Me={key:3,class:"list-group-item d-flex"};function Ce(e,t,s,c,f,D){var m,u,_,g;const l=M("submenu-widget"),n=M("router-link"),o=S("t");return r(),d("div",ge,[a("a",{class:"clickable d-none",onClick:t[0]||(t[0]=y=>e.$router.go(-1))},[a("div",ye,[ve,i(a("span",De,null,512),[[o,"global.returnbBack"]])])]),a("div",ke,[a("div",$e,[k(l,{matchData:e.matchData},null,8,["matchData"]),a("ul",xe,[a("li",we,[i(k(n,{to:"#information",class:"d-flex align-items-center btn active","aria-current":"page",replace:""},null,512),[[o,"offerPage.header.informations"]])]),e.perks.length>0?(r(),d("li",Se,[i(k(n,{to:"#flexibility",class:"d-flex align-items-center btn",replace:""},null,512),[[o,"offerPage.header.flexibility"]])])):b("v-if",!0),((u=(m=e.matchData)==null?void 0:m.meta)==null?void 0:u.jobOfferDescription)?(r(),d("li",Le,[i(k(n,{to:"#description",class:"d-flex align-items-center btn",replace:""},null,512),[[o,"offerPage.header.description"]])])):b("v-if",!0),e.ProfileCarousel?(r(),d("li",je,[i(k(n,{to:"#required-profile",class:"d-flex align-items-center btn",replace:""},null,512),[[o,"offerPage.header.profilSearch"]])])):b("v-if",!0),((g=(_=e.matchData)==null?void 0:_.meta)==null?void 0:g.leadershipWorkTeam)?(r(),d("li",Me,[i(k(n,{to:"#team",class:"d-flex align-items-center btn",replace:""},null,512),[[o,"offerPage.header.team"]])])):b("v-if",!0)])])])])}var qe=C(be,[["render",Ce]]);export{qe as default};
