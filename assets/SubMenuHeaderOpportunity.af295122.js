var q=Object.defineProperty,I=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var T=(t,e,n)=>e in t?q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))W.call(e,n)&&T(t,n,e[n]);if(L)for(var n of L(e))z.call(e,n)&&T(t,n,e[n]);return t},g=(t,e)=>I(t,N(e));import{d as j,m as M,q as U,p as v,aj as A,b as x,o as l,e as r,h as a,g as i,j as u,u as E,t as R,ak as B,al as P,r as V,f as h,w as Y}from"./vendor.615098c7.js";import{h as F}from"./moment.08a7f518.js";import{a as O}from"./index.5015cbe4.js";const H=j({name:"SubmenuWidget",props:{matchData:{type:Object,required:!0},reasons:{type:Object,default:["enterprise","sector","contract","mission","location","salary","homework","other"]}},data(){return{modalType:"",reasonSelect:[],userStatus:{}}},computed:m({},M("auth",["userData","accessToken"])),created(){this.checkStatusUser(),this.getCurrentUser()},methods:g(m(m(m(m({},U("auth",["update_user_data_array"])),U("talent",["updateUserMeta"])),v("auth",["getCurrentUser"])),v("talent",["update_profile_archived_offers"])),{formatDate(t){return F(t).format("L")},checkStatusUser(){this.userStatus={loggedout:!0,loggedin:!1},window.localStorage.getItem("accessToken")&&(this.userStatus={loggedout:!1,loggedin:!0})},openUrl(t){window.open(t,"_blank")},modal_(t){this.modalType=t,new A(document.getElementById("modalValidate")).show()},change_archived_offers(){if(this.accessToken){let t={id:this.userData._id,type:"archived_offers",value:this.matchData._id};this.update_user_data_array(t),this.update_profile_archived_offers(t)}else this.$router.push({name:"TalentLogin"})}})}),G={class:"modal fade",id:"modalValidate",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},J={class:"modal-dialog modal-dialog-centered"},K={class:"modal-content rounded-12 border-0"},Q=a("div",{class:"modal-header"},[a("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),X={key:0,class:"modal-body"},Z={class:"text-center pb-4"},tt={key:0,class:"d-flex justify-content-center px-4 py-1"},et={key:1,class:"d-flex justify-content-center px-4 py-2"},at={key:2,class:"d-flex justify-content-center px-4 py-2"},st={key:0,id:"match-card-neutral",class:"d-block d-md-flex mb-3 align-items-center bg-white py-3 px-4 rounded-12 submenu__intro text-center text-md-start"},nt={class:"me-auto"},it={class:"mb-1"},ot={key:0,class:"m-0"},lt={key:0,class:"ms-3 me-1 d-inline"},rt={class:"ms-3 me-1 d-inline"};function dt(t,e,n,y,b,f){var p,o,c;const s=x("t");return l(),r(P,null,[a("div",G,[a("div",J,[a("div",K,[Q,t.modalType=="APPLY"?(l(),r("div",X,[i(a("h4",Z,null,512),[[s,"opportunity.submenu.modal.valider.title"]]),t.matchData.meta.applyLinkLinkedin?(l(),r("div",tt,[a("button",{class:"btn btn-primary rounded-12 py-1 w-50",onClick:e[0]||(e[0]=d=>t.openUrl(t.matchData.meta.applyLinkLinkedin))},[i(a("span",null,null,512),[[s,"opportunity.submenu.modal.valider.via.linkedin"]])])])):u("",!0),t.matchData.meta.applyLinkIndeed?(l(),r("div",et,[a("button",{class:"btn btn-primary rounded-12 py-1 w-50",onClick:e[1]||(e[1]=d=>t.openUrl(t.matchData.meta.applyLinkIndeed))},[i(a("span",null,null,512),[[s,"opportunity.submenu.modal.valider.via.indeed"]])])])):u("",!0),t.matchData.meta.applyLinkCareerSite?(l(),r("div",at,[a("button",{class:"btn btn-primary rounded-12 py-1 w-50",onClick:e[2]||(e[2]=d=>t.openUrl(t.matchData.meta.applyLinkCareerSite))},[i(a("span",null,null,512),[[s,"opportunity.submenu.modal.valider.via.carrerSite"]])])])):u("",!0)])):u("",!0)])])]),((o=(p=t.userData)==null?void 0:p.archived_offers)==null?void 0:o.includes(t.matchData._id))?u("",!0):(l(),r("div",st,[a("div",nt,[i(a("h4",it,null,512),[[s,"opportunity.submenu.title"]]),((c=t.matchData)==null?void 0:c.updated_at)?(l(),r("p",ot,[i(a("span",null,null,512),[[s,"opportunity.submenu.date"]]),E(" "+R(t.formatDate(t.matchData.updated_at)),1)])):u("",!0)]),t.userStatus.loggedin?(l(),r("div",lt,[i(a("button",{class:"btn btn-outline-secondary fw-medium px-4",onClick:e[3]||(e[3]=B(d=>t.change_archived_offers(),["stop"]))},null,512),[[s,"decline"]])])):u("",!0),a("div",rt,[i(a("button",{class:"btn btn-primary",onClick:e[4]||(e[4]=B(d=>t.modal_("APPLY"),["stop"]))},null,512),[[s,"global.postulate"]])])]))],64)}var ut=O(H,[["render",dt]]);const ct=j({components:{SubmenuWidget:ut},computed:g(m({},M("talent",["matchData"])),{ProfileCarousel(){var e,n,y,b,f,s,p,o,c,d,_,k,D,$,S,w,C;let t=!1;return(((e=this.matchData.meta)==null?void 0:e.studiesRequired)||((n=this.matchData.meta)==null?void 0:n.specializations)&&((y=this.matchData.meta)==null?void 0:y.specializations.length)>0||((b=this.matchData.meta)==null?void 0:b.yearsOfExperienceTotal)||((f=this.matchData.meta)==null?void 0:f.industries)&&((s=this.matchData.meta)==null?void 0:s.industries.length)>0||((p=this.matchData.meta)==null?void 0:p.keyResponsability)||((o=this.matchData.meta)==null?void 0:o.languages)&&((c=this.matchData.meta)==null?void 0:c.languages.length)>0||((d=this.matchData.meta)==null?void 0:d.hardSkills)&&((_=this.matchData.meta)==null?void 0:_.hardSkills.length)>0||((D=(k=this.matchData.meta)==null?void 0:k.skills)==null?void 0:D.ideas)||((S=($=this.matchData.meta)==null?void 0:$.skills)==null?void 0:S.people)||((C=(w=this.matchData.meta)==null?void 0:w.skills)==null?void 0:C.things))&&(t=!0),t}}),created(){this.getMatchData(this.$route.params.id)},methods:m({},v("talent",["getMatchData"]))}),mt={class:"container pb-2",id:"returnBack"},pt={class:"fs-14 text-white text-start mt-2 mb-0 me-3"},ht=a("em",{class:"fas fa-chevron-left"},null,-1),_t={class:"ms-2"},yt={class:"submenu"},bt={class:"container"},ft={id:"submenu__nav-opportunity",class:"list-group list-group-horizontal submenu__nav d-inline-flex"},gt={class:"list-group-item"},vt={class:"list-group-item"},kt={key:0,class:"list-group-item"},Dt={key:1,class:"list-group-item"},$t={key:2,class:"list-group-item"};function St(t,e,n,y,b,f){var c,d,_;const s=V("router-link"),p=V("submenu-widget"),o=x("t");return l(),r(P,null,[a("div",mt,[h(s,{to:{name:"TalentOpportunities"}},{default:Y(()=>[a("div",pt,[ht,i(a("span",_t,null,512),[[o,"global.returnbBack"]])])]),_:1})]),a("div",yt,[a("div",bt,[h(p,{matchData:t.matchData},null,8,["matchData"]),a("ul",ft,[a("li",gt,[i(h(s,{to:"#information",class:"btn active","aria-current":"page"},null,512),[[o,"opportunity.header.informations"]])]),a("li",vt,[i(h(s,{to:"#flexibility",class:"btn"},null,512),[[o,"opportunity.header.flexibility"]])]),((c=t.matchData)==null?void 0:c.description)?(l(),r("li",kt,[i(h(s,{to:"#description",class:"btn"},null,512),[[o,"opportunity.header.description"]])])):u("",!0),t.ProfileCarousel?(l(),r("li",Dt,[i(h(s,{to:"#required-profile",class:"btn"},null,512),[[o,"opportunity.header.profilSearch"]])])):u("",!0),((_=(d=t.matchData)==null?void 0:d.meta)==null?void 0:_.leadershipWorkTeam)?(l(),r("li",$t,[i(h(s,{to:"#team",class:"btn"},null,512),[[o,"opportunity.header.team"]])])):u("",!0)])])])],64)}var jt=O(ct,[["render",St]]);export{jt as default};
