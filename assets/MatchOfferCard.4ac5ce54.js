import{d as ee,x as te,y as h,z as ae,r as se,f as oe,o as m,b as d,h as r,aC as z,s as b,t as _,av as i,g as w,q as F,ak as C,j as p,e as R,al as re,n as ne}from"./vendor.3251509c.js";import{b as le}from"./bootstrap.bundle.min.719ade9c.js";import{h as ie}from"./moment.08a7f518.js";import{r as I}from"./index.0ac40626.js";import{g as M}from"./utils.1fce72cf.js";var D;(function(e){e[e.Opportunity=0]="Opportunity",e[e.Interview=1]="Interview",e[e.Archived=2]="Archived"})(D||(D={}));var P;(function(e){e[e.DECLINED_BY_JOBGETHER=-2]="DECLINED_BY_JOBGETHER",e[e.DECLINE=-1]="DECLINE",e[e.NEUTRAL=0]="NEUTRAL",e[e.ACCEPT=1]="ACCEPT",e[e.SENT=3]="SENT"})(P||(P={}));var $;(function(e){e[e.REJECTED=-2]="REJECTED",e[e.REJECTED_BY_QA=-1]="REJECTED_BY_QA",e[e.NEUTRAL=0]="NEUTRAL",e[e.INTERESTED=1]="INTERESTED"})($||($={}));var j;(function(e){e[e.NEUTRAL=0]="NEUTRAL",e[e.INTERESTED=1]="INTERESTED",e[e.NOT_INTERESTED=2]="NOT_INTERESTED"})(j||(j={}));const ce={additional_parental_leave:!1,child_care_assistance:!1,daily_lunch_meal_card:!1,digital_coaching:!1,extra_holidays:!1,four_day_week:!1,full_remote:!1,gym_reimbursement:!1,international_insurance:!1,long_remote_period:!1,mentorship_programs:!1,mobility_allowance:!1,open_to_long_term_freelancing:!1,open_to_part_time:!1,open_to_slashing:!1,parental_perks:!1,pet_friendly:!1,private_health_insurance:!1,private_pension:!1,remote_allowance:!1,seasonal_social_events:!1,time_to_work_on_a_side_project:!1,tuition_reimbursement:!1,unlimited_holidays:!1,wellness_program:!1};const fe=["id"],me={class:"row mx-0"},de={class:"col-9 pt-3 pb-2"},he={class:"d-flex px-2 flex-column-reverse flex-md-row"},_e={class:"flex-grow-1 pb-2"},ue={class:"mb-1 fs-20 d-flex flex-column flex-md-row align-items-start"},pe={class:"ms-md-2 me-1 p-1 mt-1 mt-md-0 bg-light-yellow rounded-8 fs-14"},ge={class:"d-flex align-items-center mb-0 justify-content-between"},be={class:"fs-12"},ve={key:0,class:"fav_group_icon"},Ee=r("em",{class:"fas fa-heart ms-3 fs-20 mb-n1 text-blue-app"},null,-1),ye=[Ee],Oe=r("em",{class:"far fa-heart ms-3 fs-20 mb-n1"},null,-1),xe=[Oe],ke={key:1,class:"archived_group_icon"},we=["data-bs-content"],De={class:"px-2"},Te={class:"mb-1 fw-light"},Ne={key:0,class:"bg-blue-app-20 me-2 ms-3 px-2 py-1 rounded-8 fs-14 fw-500"},Ce=r("em",{class:"fas fa-star"},null,-1),Re=b(" Top flex "),$e=[Ce,Re],Ae={class:"d-flex px-2 mb-1 flex-column flex-md-row"},je={class:"flex-grow-1 offer-content pt-1 mb-2 mb-md-0"},Le={key:0,"data-bs-toggle":"popover","data-bs-trigger":"hover","data-bs-placement":"bottom"},Be=["data-bs-content"],Se={key:1,class:"ms-1"},Ye=["data-bs-content"],qe={key:2},Je={class:"mt-n1 d-flex align-items-center"},Ue=["data-bs-content"],Ve={key:1,class:"badge rounded-pill border border-2 me-2 py-2 text-blue-app fw-500"},ze=["data-bs-content"],Fe={key:3,class:"badge rounded-pill border border-2 me-2 py-2 text-blue-app fw-500"},Ie={class:"matching d-none"},Me={class:"me-2 matching__text d-none d-sm-inline"},Pe=["data-bs-content"],Qe={key:1,class:"fas fa-lock"},Ge=b(" % "),et=ee({props:{matchOffer:null,matchOfferType:null,user:null,is_archived_view:null,query_api:null},emits:["click","validate","archive","unarchive","acceptInterview","favorite","goTo"],setup(e,{emit:Q}){const a=e,u=te();let L=h(()=>u.state.auth.userData.favorites?u.state.auth.userData.favorites:[]),B=h(()=>u.state.auth.userData._id),S=h(()=>u.state.auth.accessToken!=null),G=h(()=>{var t,s,o,l,n,f;return((o=(s=(t=a.matchOffer)==null?void 0:t.company)==null?void 0:s.meta)==null?void 0:o.flex_score)?(f=(n=(l=a.matchOffer)==null?void 0:l.company)==null?void 0:n.meta)==null?void 0:f.flex_score:0}),T=h(()=>{var s;let t=[];if(((s=a.query_api)==null?void 0:s.flexibility)&&(t=a.query_api.flexibility.filter(o=>{var l,n;return(n=(l=a.matchOffer)==null?void 0:l.company)==null?void 0:n.meta[o]})),t.length==0){let o=Object.keys(ce).filter(l=>{var n,f;return(f=(n=a.matchOffer)==null?void 0:n.company)==null?void 0:f.meta[l]});if(o.length>0){let l=M(0,o.length-1);t=[o[l-1]]}}return t}),N=h(()=>{var s,o,l;let t=[];if(((s=a.query_api)==null?void 0:s.remote)&&(t=a.query_api.remote.filter(n=>{var f;return(f=a.matchOffer)==null?void 0:f.meta.remote.some(g=>g==n)})),t.length==0){let n=(l=(o=a.matchOffer)==null?void 0:o.meta)==null?void 0:l.remote;if(n.length>0){let f=M(0,n.length-1);t=[n[f-1]]}}return t});ae(()=>{Array.from(document.querySelectorAll(`#match-offer-card-${a.matchOffer._id} [data-bs-toggle="popover"]`)).forEach(s=>new le.exports.Popover(s));let t=document.getElementById("myPopover");t==null||t.addEventListener("hidden.bs.popover",function(){})});const H=h(()=>{var s,o;let t="";switch((o=(s=a.matchOffer)==null?void 0:s.meta)==null?void 0:o.currency){case"EUR":t="euro-sign";break;case"USD":t="dollar-sign";break;default:t="question"}return t}),A=h(()=>{var t,s,o;return((s=(t=a.matchOffer)==null?void 0:t.meta)==null?void 0:s.contractType)?(o=a.matchOffer.meta)==null?void 0:o.contractType:""}),Y=h(()=>{var s,o,l,n,f,g,v,E,y,O,x,k;let t="";return((o=(s=a.matchOffer)==null?void 0:s.meta)==null?void 0:o.salary)&&((f=(n=(l=a.matchOffer)==null?void 0:l.meta)==null?void 0:n.salary)==null?void 0:f.min)&&((E=(v=(g=a.matchOffer)==null?void 0:g.meta)==null?void 0:v.salary)==null?void 0:E.max)&&(t=`${((O=(y=a.matchOffer.meta)==null?void 0:y.salary)==null?void 0:O.min)/1e3} - ${((k=(x=a.matchOffer.meta)==null?void 0:x.salary)==null?void 0:k.max)/1e3}K`),t}),K=h(()=>{let t=!1;return a.matchOfferType==D.Opportunity&&(t=a.matchOffer.companyInterest==$.REJECTED||a.matchOffer.companyInterest==$.REJECTED_BY_QA||a.matchOffer.userInterest==j.NOT_INTERESTED||a.matchOffer.archived==!0),a.matchOfferType==D.Interview&&(t=!1),a.matchOfferType==D.Archived&&(t=a.matchOffer.archived==!0),t}),W=h(()=>`opacity: ${a.matchOffer.percentage}%`);h(()=>{var s,o,l,n;let t="";return a.matchOffer.meta.locations&&((s=a.matchOffer.meta.locations)==null?void 0:s.length)!=0?(t=(n=(l=(o=a.matchOffer)==null?void 0:o.meta)==null?void 0:l.locations)==null?void 0:n.map(f=>f.name).join(", "),t):"N/A"});function X(){Q("click",a.matchOffer)}function q(){if(S)I.push({name:"TalentLogin"});else{let t={id:B.value,type:"favorites",value:a.matchOffer._id};u.commit("auth/update_user_data_array",t),u.dispatch("talent/update_profile_favorites",t)}}function Z(){if(S){let t={id:B.value,type:"archived_offers",value:a.matchOffer._id};u.commit("auth/update_user_data_array",t),u.dispatch("talent/update_profile_archived_offers",t)}else I.push({name:"TalentLogin"})}return(t,s)=>{var n,f,g,v,E,y,O,x,k,J,U,V;const o=se("font-awesome-icon"),l=oe("t");return m(),d("div",{class:ne(["card match-card shadow-sm w-100 clickable p-0",{disabled:i(K)}]),onClick:s[4]||(s[4]=c=>X()),id:`match-offer-card-${a.matchOffer._id}`},[r("div",me,[r("div",{class:"col-3 border-end p-4 card-image",style:z({"background-image":((g=(f=(n=e.matchOffer)==null?void 0:n.company)==null?void 0:f.meta)==null?void 0:g.picture)?`url(${(y=(E=(v=e.matchOffer)==null?void 0:v.company)==null?void 0:E.meta)==null?void 0:y.picture})`:""})},null,4),r("div",de,[r("div",he,[r("div",_e,[r("h4",ue,[b(_(e.matchOffer.title)+" ",1),r("span",pe,_(((x=(O=e.matchOffer.company)==null?void 0:O.meta)==null?void 0:x.flex_score)?(J=(k=e.matchOffer.company)==null?void 0:k.meta)==null?void 0:J.flex_score:0)+"% Flex ",1)])]),r("div",null,[r("p",ge,[r("span",be,_(i(ie)(e.matchOffer.updated_at).format("DD/MM/YYYY")),1),e.is_archived_view?p("",!0):(m(),d("div",ve,[w(r("div",{class:"fav_icon",onClick:s[0]||(s[0]=C(c=>q(),["stop"]))},ye,512),[[F,i(L).some(c=>c==a.matchOffer._id)]]),w(r("div",{class:"fav_icon",onClick:s[1]||(s[1]=C(c=>q(),["stop"]))},xe,512),[[F,!i(L).some(c=>c==a.matchOffer._id)]])])),e.is_archived_view?(m(),d("div",ke,[r("span",{class:"ms-2 py-1 badge bg-light-blue clickable undo_archive","data-bs-toggle":"popover","data-bs-trigger":"hover","data-bs-placement":"top","data-bs-content":t.$t("widget.matchOfferCard.unarchive"),onClick:s[2]||(s[2]=C(c=>Z(),["stop"]))},[R(o,{icon:"undo",class:"mr-1 text-primary"})],8,we)])):p("",!0)])])]),r("div",De,[r("p",Te,[b(_((V=(U=e.matchOffer)==null?void 0:U.company)==null?void 0:V.name)+" ",1),i(G)>=90?(m(),d("span",Ne,$e)):p("",!0)])]),r("div",Ae,[r("div",je,[r("ul",{class:"icon-list mt-0",onClick:s[3]||(s[3]=C(()=>{},["stop"]))},[e.matchOffer.meta.locations&&e.matchOffer.meta.locations.length>0?(m(),d("li",Le,[R(o,{icon:"map-marker-alt",class:"text-dark-gray"}),e.matchOffer.meta.locations.length>3?(m(),d("span",{key:0,class:"ms-1","data-bs-toggle":"popover","data-bs-trigger":"hover","data-bs-placement":"bottom","data-bs-content":e.matchOffer.meta.locations.map(c=>c.name).join(", ")},_(e.matchOffer.meta.locations.map(c=>c.name).slice(0,3).join(", "))+"... ",9,Be)):(m(),d("span",Se,_(e.matchOffer.meta.locations.map(c=>c.name).join(", ")),1))])):p("",!0),i(A)!=""?(m(),d("li",{key:1,"data-bs-toggle":"popover","data-bs-trigger":"hover","data-bs-placement":"bottom","data-bs-content":t.$t(`dashboard.opportunities.contractType.${i(A)}`)},[R(o,{icon:"file-alt",class:"text-dark-gray"}),r("span",null,_(t.$t(`dashboard.opportunities.contractType.${i(A)}`).split(" ").map(c=>c.charAt(0).toUpperCase()).join("")),1)],8,Ye)):p("",!0),i(Y)!=""?(m(),d("li",qe,[R(o,{icon:i(H),class:"text-dark-gray"},null,8,["icon"]),b(" "+_(i(Y)),1)])):p("",!0)])]),r("div",Je,[i(N).length>1?(m(),d("span",{key:0,"data-bs-toggle":"popover","data-bs-trigger":"hover","data-bs-placement":"bottom","data-bs-content":i(N).map(c=>t.$t(`searchEngine.filters.remote.${c}`)),class:"badge rounded-pill border border-2 me-2 py-2 text-blue-app fw-500"},"+2",8,Ue)):i(N).length==1?w((m(),d("span",Ve,null,512)),[[l,`searchEngine.filters.remote.${i(N)[0]}`]]):p("",!0),i(T).length>1?(m(),d("span",{key:2,"data-bs-toggle":"popover","data-bs-trigger":"hover","data-bs-placement":"bottom","data-bs-content":i(T).map(c=>t.$t(`searchEngine.filters.flexibility.${c}`)),class:"badge rounded-pill border border-2 me-2 py-2 text-blue-app fw-500"},"+2",8,ze)):i(T).length==1?w((m(),d("span",Fe,null,512)),[[l,`searchEngine.filters.flexibility.${i(T)[0]}`]]):p("",!0),r("div",Ie,[w(r("span",Me,null,512),[[l,"widget.matchOfferCard.matching"]]),r("span",{class:"matching__percent-4","data-bs-toggle":"popover","data-bs-trigger":"hover","data-bs-placement":"bottom","data-bs-content":t.$t("widget.matchOfferCard.matching-popover"),style:z(i(W))},[e.user?(m(),d(re,{key:0},[b(_(e.matchOffer.percentage),1)],64)):(m(),d("i",Qe)),Ge],12,Pe)])])])])])],10,fe)}}});export{ce as M,et as _,D as a};
