var x=Object.defineProperty,I=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var M=(t,e,s)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,p=(t,e)=>{for(var s in e||(e={}))W.call(e,s)&&M(t,s,e[s]);if(L)for(var s of L(e))z.call(e,s)&&M(t,s,e[s]);return t},v=(t,e)=>I(t,N(e));import{d as j,m as T,_ as U,$ as k,a0 as B,o as l,b as r,h as a,a1 as o,a2 as c,a3 as A,a4 as E,a5 as P,a6 as V,r as q,e as h}from"./vendor.ddc236c0.js";import{h as R}from"./moment.08a7f518.js";import{M as Y}from"./bootstrap.esm.f2db94b8.js";import{_ as O}from"./index.323890eb.js";const F=j({name:"SubmenuWidget",props:{matchData:{type:Object,required:!0},reasons:{type:Object,default:["enterprise","sector","contract","mission","location","salary","homework","other"]}},data(){return{modalType:"",reasonSelect:[],userStatus:{}}},computed:p({},T("auth",["userData","accessToken"])),created(){this.checkStatusUser(),this.getCurrentUser()},methods:v(p(p(p(p({},U("auth",["update_user_data_array"])),U("talent",["updateUserMeta"])),k("auth",["getCurrentUser"])),k("talent",["update_profile_archived_offers"])),{formatDate(t){return R(t).format("L")},checkStatusUser(){this.userStatus={loggedout:!0,loggedin:!1},window.localStorage.getItem("accessToken")&&(this.userStatus={loggedout:!1,loggedin:!0})},openUrl(t){window.open(t,"_blank")},modal_(t){this.modalType=t,new Y(document.getElementById("modalValidate")).show()},change_archived_offers(){if(this.accessToken){let t={id:this.userData._id,type:"archived_offers",value:this.matchData._id};this.update_user_data_array(t),this.update_profile_archived_offers(t)}else this.$router.push({name:"TalentLogin"})}})}),H={class:"modal fade",id:"modalValidate",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},G={class:"modal-dialog modal-dialog-centered"},J={class:"modal-content rounded-12 border-0"},K=a("div",{class:"modal-header"},[a("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Q={key:0,class:"modal-body"},X={class:"text-center pb-4"},Z={key:0,class:"d-flex justify-content-center px-4 py-1"},tt={key:1,class:"d-flex justify-content-center px-4 py-2"},et={key:2,class:"d-flex justify-content-center px-4 py-2"},at={key:0,id:"match-card-neutral",class:"d-block d-md-flex mb-3 align-items-center bg-white py-3 px-4 rounded-12 submenu__intro text-center text-md-start"},st={class:"me-auto"},ot={class:"mb-1"},nt={key:0,class:"m-0"},it={key:0,class:"ms-3 me-1 d-inline"},lt={class:"ms-3 me-1 d-inline"};function rt(t,e,s,b,y,f){var d,i,m;const n=B("t");return l(),r(V,null,[a("div",H,[a("div",G,[a("div",J,[K,t.modalType=="APPLY"?(l(),r("div",Q,[o(a("h4",X,null,512),[[n,"opportunity.submenu.modal.valider.title"]]),t.matchData.meta.applyLinkLinkedin?(l(),r("div",Z,[a("button",{class:"btn btn-primary rounded-12 py-1 w-50",onClick:e[0]||(e[0]=u=>t.openUrl(t.matchData.meta.applyLinkLinkedin))},[o(a("span",null,null,512),[[n,"opportunity.submenu.modal.valider.via.linkedin"]])])])):c("",!0),t.matchData.meta.applyLinkIndeed?(l(),r("div",tt,[a("button",{class:"btn btn-primary rounded-12 py-1 w-50",onClick:e[1]||(e[1]=u=>t.openUrl(t.matchData.meta.applyLinkIndeed))},[o(a("span",null,null,512),[[n,"opportunity.submenu.modal.valider.via.indeed"]])])])):c("",!0),t.matchData.meta.applyLinkCareerSite?(l(),r("div",et,[a("button",{class:"btn btn-primary rounded-12 py-1 w-50",onClick:e[2]||(e[2]=u=>t.openUrl(t.matchData.meta.applyLinkCareerSite))},[o(a("span",null,null,512),[[n,"opportunity.submenu.modal.valider.via.carrerSite"]])])])):c("",!0)])):c("",!0)])])]),((i=(d=t.userData)==null?void 0:d.archived_offers)==null?void 0:i.includes(t.matchData._id))?c("",!0):(l(),r("div",at,[a("div",st,[o(a("h4",ot,null,512),[[n,"opportunity.submenu.title"]]),((m=t.matchData)==null?void 0:m.updated_at)?(l(),r("p",nt,[o(a("span",null,null,512),[[n,"opportunity.submenu.date"]]),A(" "+E(t.formatDate(t.matchData.updated_at)),1)])):c("",!0)]),t.userStatus.loggedin?(l(),r("div",it,[o(a("button",{class:"btn btn-outline-secondary fw-medium px-4",onClick:e[3]||(e[3]=P(u=>t.change_archived_offers(),["stop"]))},null,512),[[n,"decline"]])])):c("",!0),a("div",lt,[o(a("button",{class:"btn btn-primary",onClick:e[4]||(e[4]=P(u=>t.modal_("APPLY"),["stop"]))},null,512),[[n,"global.postulate"]])])]))],64)}var dt=O(F,[["render",rt]]);const ut=j({components:{SubmenuWidget:dt},computed:v(p({},T("talent",["matchData"])),{ProfileCarousel(){var e,s,b,y,f,n,d,i,m,u,_,g,D,$,S,w,C;let t=!1;return(((e=this.matchData.meta)==null?void 0:e.studiesRequired)||((s=this.matchData.meta)==null?void 0:s.specializations)&&((b=this.matchData.meta)==null?void 0:b.specializations.length)>0||((y=this.matchData.meta)==null?void 0:y.yearsOfExperienceTotal)||((f=this.matchData.meta)==null?void 0:f.industries)&&((n=this.matchData.meta)==null?void 0:n.industries.length)>0||((d=this.matchData.meta)==null?void 0:d.keyResponsability)||((i=this.matchData.meta)==null?void 0:i.languages)&&((m=this.matchData.meta)==null?void 0:m.languages.length)>0||((u=this.matchData.meta)==null?void 0:u.hardSkills)&&((_=this.matchData.meta)==null?void 0:_.hardSkills.length)>0||((D=(g=this.matchData.meta)==null?void 0:g.skills)==null?void 0:D.ideas)||((S=($=this.matchData.meta)==null?void 0:$.skills)==null?void 0:S.people)||((C=(w=this.matchData.meta)==null?void 0:w.skills)==null?void 0:C.things))&&(t=!0),t}}),created(){let t=Object.assign({},this.$route.query);this.getMatchData(t.id)},methods:p({},k("talent",["getMatchData"]))}),ct={class:"container pb-2",id:"returnBack"},mt={class:"fs-14 text-white text-start mt-2 mb-0 me-3"},pt=a("em",{class:"fas fa-chevron-left"},null,-1),ht={class:"ms-2"},_t={class:"submenu"},bt={class:"container"},yt={id:"submenu__nav-opportunity",class:"list-group list-group-horizontal submenu__nav d-inline-flex"},ft={class:"list-group-item"},gt={class:"list-group-item"},vt={key:0,class:"list-group-item"},kt={key:1,class:"list-group-item"},Dt={key:2,class:"list-group-item"};function $t(t,e,s,b,y,f){var m,u,_;const n=q("submenu-widget"),d=q("router-link"),i=B("t");return l(),r(V,null,[a("div",ct,[a("a",{class:"clickable",onClick:e[0]||(e[0]=g=>t.$router.go(-1))},[a("div",mt,[pt,o(a("span",ht,null,512),[[i,"global.returnbBack"]])])])]),a("div",_t,[a("div",bt,[h(n,{matchData:t.matchData},null,8,["matchData"]),a("ul",yt,[a("li",ft,[o(h(d,{to:"#information",class:"btn active","aria-current":"page"},null,512),[[i,"opportunity.header.informations"]])]),a("li",gt,[o(h(d,{to:"#flexibility",class:"btn"},null,512),[[i,"opportunity.header.flexibility"]])]),((m=t.matchData)==null?void 0:m.description)?(l(),r("li",vt,[o(h(d,{to:"#description",class:"btn"},null,512),[[i,"opportunity.header.description"]])])):c("",!0),t.ProfileCarousel?(l(),r("li",kt,[o(h(d,{to:"#required-profile",class:"btn"},null,512),[[i,"opportunity.header.profilSearch"]])])):c("",!0),((_=(u=t.matchData)==null?void 0:u.meta)==null?void 0:_.leadershipWorkTeam)?(l(),r("li",Dt,[o(h(d,{to:"#team",class:"btn"},null,512),[[i,"opportunity.header.team"]])])):c("",!0)])])])],64)}var jt=O(ut,[["render",$t]]);export{jt as default};
