var U=Object.defineProperty,B=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var T=(e,a,s)=>a in e?U(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,p=(e,a)=>{for(var s in a||(a={}))q.call(a,s)&&T(e,s,a[s]);if(P)for(var s of P(a))W.call(a,s)&&T(e,s,a[s]);return e},$=(e,a)=>B(e,O(a));import{d as x,m as w,e as S,o as r,f as d,i as t,h as l,j as _,F as A,l as M,b as j,r as C,g as y}from"./vendor.c2063c2f.js";import{h as E}from"./moment.08a7f518.js";import{M as N}from"./bootstrap.esm.29a9ab19.js";import{_ as L}from"./index.6095c6b1.js";const V=x({name:"modalAction",props:{applyLink:{type:Object}},data(){return{type:""}},computed:p({},w("talent",["matchData"])),methods:{goLogin(){location.replace("https://dev.jobgether.com/talent/login?next=true")},openUrl(e){window.open(e,"_blank")}}}),F={class:"modal fade",id:"modalLogin",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},I={class:"modal-dialog modal-dialog-centered"},z={class:"modal-content rounded-12 border-0"},H=t("div",{class:"modal-header"},[t("button",{type:"button",class:"btn-close fs-14","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Y={class:"modal-body px-5"},G={class:"fs-20 fw-bold transition text-center mb-4"},J={class:"px-4 mb-4 pb-3"},K={class:"me-2"},Q=t("i",{class:"far fa-sign-in-alt fs-20"},null,-1),R={class:"modal fade",id:"modalApply",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},X={class:"modal-dialog modal-dialog-centered"},Z={class:"modal-content rounded-12 border-0"},ee=t("div",{class:"modal-header"},[t("button",{type:"button",class:"btn-close fs-14","data-bs-dismiss":"modal","aria-label":"Close"})],-1),te={key:0,class:"modal-body px-5"},ae={class:"text-center pb-4"},se={key:0,class:"d-flex justify-content-center px-4 py-1"},oe={key:1,class:"d-flex justify-content-center px-4 py-2"},ne={key:2,class:"d-flex justify-content-center px-4 py-2"};function le(e,a,s,h,D,k){var n,o,c,m,f,b;const i=S("t");return r(),d(A,null,[t("div",F,[t("div",I,[t("div",z,[H,t("div",Y,[l(t("h2",G,null,512),[[i,"auth.redirection"]]),t("p",J,[t("button",{class:"btn btn-primary w-100 bg-google-color border-0",type:"button",onClick:a[0]||(a[0]=(...g)=>e.goLogin&&e.goLogin(...g))},[l(t("span",K,null,512),[[i,"auth.login.btn_submit"]]),Q])])])])])]),t("div",R,[t("div",X,[t("div",Z,[ee,((o=(n=e.matchData)==null?void 0:n.meta)==null?void 0:o.apply_url)?(r(),d("div",te,[l(t("h4",ae,null,512),[[i,"offerPage.submenu.modal.valider.title"]]),((m=(c=e.matchData)==null?void 0:c.meta)==null?void 0:m.apply_url.includes("linkedin"))?(r(),d("div",se,[t("button",{class:"btn btn-primary rounded-12 py-1 w-80",onClick:a[1]||(a[1]=g=>{var u,v;return e.openUrl((v=(u=e.matchData)==null?void 0:u.meta)==null?void 0:v.apply_url)})},[l(t("span",null,null,512),[[i,"offerPage.submenu.modal.valider.via.linkedin"]])])])):((b=(f=e.matchData)==null?void 0:f.meta)==null?void 0:b.apply_url.includes("indeed"))?(r(),d("div",oe,[t("button",{class:"btn btn-primary rounded-12 py-1 w-80",onClick:a[2]||(a[2]=g=>{var u,v;return e.openUrl((v=(u=e.matchData)==null?void 0:u.meta)==null?void 0:v.apply_url)})},[l(t("span",null,null,512),[[i,"offerPage.submenu.modal.valider.via.indeed"]])])])):(r(),d("div",ne,[t("button",{class:"btn btn-primary rounded-12 py-1 w-80",onClick:a[3]||(a[3]=g=>{var u,v;return e.openUrl((v=(u=e.matchData)==null?void 0:u.meta)==null?void 0:v.apply_url)})},[l(t("span",null,null,512),[[i,"offerPage.submenu.modal.valider.via.carrerSite"]])])]))])):_("v-if",!0)])])])],64)}var ie=L(V,[["render",le]]);const re=x({name:"SubmenuWidget",components:{ModalAction:ie},props:{matchData:{type:Object,required:!0},reasons:{type:Object,default:["enterprise","sector","contract","mission","location","salary","homework","other"]}},data(){return{modalType:"",reasonSelect:[],userStatus:{}}},computed:p({},w("auth",["userData","accessToken"])),created(){this.checkStatusUser()},methods:$(p(p(p(p({},M("auth",["update_user_data_array"])),M("talent",["updateUserMeta"])),j("auth",["getCurrentUser"])),j("talent",["update_profile_archived_offers"])),{formatDate(e){return E(e).format("L")},checkStatusUser(){this.userStatus={loggedout:!0,loggedin:!1},window.localStorage.getItem("accessToken")&&(this.userStatus={loggedout:!1,loggedin:!0})},modal_(e){window.scrollTo(0,0),this.modalType=e,new N(document.getElementById("modalApply")).show()},change_archived_offers(){this.$router.push({name:"TalentLogin"})}})}),de={key:0,id:"match-card-neutral",class:"d-none mb-3 align-items-center bg-white py-3 px-4 rounded-12 submenu__intro text-center text-md-start"},ce={class:"me-auto"},me={class:"mb-1"},ue={key:0,class:"m-0"},pe={class:"ms-3 me-1 d-inline"};function he(e,a,s,h,D,k){var o,c,m;const i=C("ModalAction"),n=S("t");return r(),d(A,null,[y(i),_("End Modal "),((c=(o=e.userData)==null?void 0:o.archived_offers)==null?void 0:c.includes(e.matchData._id))?_("v-if",!0):(r(),d("div",de,[t("div",ce,[l(t("h4",me,null,512),[[n,"offerPage.submenu.title"]]),((m=e.matchData)==null?void 0:m.updated_at)?(r(),d("p",ue,[_(` <span v-t="'opportunity.submenu.date'"></span> {{ formatDate(matchData.updated_at) }} `)])):_("v-if",!0)]),t("div",pe,[l(t("button",{class:"btn btn-primary py-2",onClick:a[0]||(a[0]=f=>e.modal_("APPLY"))},null,512),[[n,"global.postulate"]])])]))],64)}var fe=L(re,[["render",he]]);const _e=x({components:{SubmenuWidget:fe},computed:$(p({},w("talent",["matchData"])),{ProfileCarousel(){var a,s,h,D,k,i,n,o,c,m,f,b,g,u;let e=!1;return(((a=this.matchData.meta)==null?void 0:a.studiesLevel)||((s=this.matchData.meta)==null?void 0:s.studiesType)&&((h=this.matchData.meta)==null?void 0:h.studiesType.length)>0||((D=this.matchData.meta)==null?void 0:D.managementLevel)||((k=this.matchData.meta)==null?void 0:k.industries)&&((i=this.matchData.meta)==null?void 0:i.industries.length)>0||((n=this.matchData.meta)==null?void 0:n.managementLevel)||((o=this.matchData.meta)==null?void 0:o.languages)&&((c=this.matchData.meta)==null?void 0:c.languages.length)>0||((m=this.matchData.meta)==null?void 0:m.hardSkills)&&((f=this.matchData.meta)==null?void 0:f.hardSkills.length)>0||((b=this.matchData.meta)==null?void 0:b.softSkills)&&((g=this.matchData.meta)==null?void 0:g.softSkills.length)>0||((u=this.matchData.meta)==null?void 0:u.experience))&&(e=!0),e},perks(){var e,a,s;return((e=this.matchData.meta)==null?void 0:e.perks)&&((s=(a=this.matchData.meta)==null?void 0:a.perks)==null?void 0:s.length)>0&&this.matchData.meta.perks.some(h=>h.enabled)?this.matchData.meta.perks.filter(h=>h.enabled):[]}}),created(){let e=Object.assign({},this.$route.query);(e||e.id)&&this.getMatchData(e.id)},methods:p(p({},j("talent",["getMatchData","getCompanyLogo"])),M("talent",["setMatchData"]))}),be={class:"container pb-2 d-flex justify-content-between",id:"returnBack"},ge={class:"fs-14 text-start mt-2 mb-0 me-3"},ve=t("em",{class:"fas fa-chevron-left"},null,-1),ye={class:"ms-2"},De={class:"submenu pb-0 pt-2"},ke={class:"container col-xs-12"},$e={id:"submenu__nav-opportunity",class:"d-none flex-nowrap list-group list-group-horizontal submenu__nav"},xe={class:"list-group-item d-flex"},we={key:0,class:"list-group-item d-flex"},Se={key:1,class:"list-group-item d-flex"},Me={key:2,class:"list-group-item d-flex"},je={key:3,class:"list-group-item d-flex"};function Ce(e,a,s,h,D,k){var c,m,f,b;const i=C("submenu-widget"),n=C("router-link"),o=S("t");return r(),d("div",be,[t("a",{class:"clickable d-none",onClick:a[0]||(a[0]=g=>e.$router.go(-1))},[t("div",ge,[ve,l(t("span",ye,null,512),[[o,"global.returnbBack"]])])]),t("div",De,[t("div",ke,[y(i,{matchData:e.matchData},null,8,["matchData"]),t("ul",$e,[t("li",xe,[l(y(n,{to:"#information",class:"d-flex align-items-center btn active","aria-current":"page",replace:""},null,512),[[o,"offerPage.header.informations"]])]),e.perks.length>0?(r(),d("li",we,[l(y(n,{to:"#flexibility",class:"d-flex align-items-center btn",replace:""},null,512),[[o,"offerPage.header.flexibility"]])])):_("v-if",!0),((m=(c=e.matchData)==null?void 0:c.meta)==null?void 0:m.jobOfferDescription)?(r(),d("li",Se,[l(y(n,{to:"#description",class:"d-flex align-items-center btn",replace:""},null,512),[[o,"offerPage.header.description"]])])):_("v-if",!0),e.ProfileCarousel?(r(),d("li",Me,[l(y(n,{to:"#required-profile",class:"d-flex align-items-center btn",replace:""},null,512),[[o,"offerPage.header.profilSearch"]])])):_("v-if",!0),((b=(f=e.matchData)==null?void 0:f.meta)==null?void 0:b.leadershipWorkTeam)?(r(),d("li",je,[l(y(n,{to:"#team",class:"d-flex align-items-center btn",replace:""},null,512),[[o,"offerPage.header.team"]])])):_("v-if",!0)])])])])}var Be=L(_e,[["render",Ce]]);export{Be as default};
