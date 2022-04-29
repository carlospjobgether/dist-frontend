var Y=Object.defineProperty,Z=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var V=(e,s,l)=>s in e?Y(e,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[s]=l,j=(e,s)=>{for(var l in s||(s={}))te.call(s,l)&&V(e,l,s[l]);if(R)for(var l of R(s))se.call(s,l)&&V(e,l,s[l]);return e},S=(e,s)=>Z(e,ee(s));import{d as $,k as F,r as k,o as h,f as b,g,m as ae,s as re,w as L,al as J,am as le,an as U,ac as w,ad as x,ag as ne,ah as D,e as oe,i as a,h as _,n as v,ao as c,t as z,ap as ie,aa as ce,ab as de,q as _e,p as E,aq as ue,ar as he}from"./vendor.aec0b27f.js";import{P as fe,D as me}from"./bootstrap.esm.0ba1a913.js";import{_ as M,S as P,D as pe}from"./SearchableList.5f261a23.js";import{_ as I}from"./index.cbd1b533.js";const be=$({components:{FilterLayout:M,SearchableList:P},props:{filters_input:{type:Object},disabled:{type:Boolean}},data(){return{options:[],filtersNames:[],filters:[]}},computed:{placeholder_location(){return this.filters_input?this.filters_input.location.name:""},location_selected(){return this.filters_input.location.id?[this.filters_input.location.id]:[]}},async created(){this.axios.get("/locations/getContinents").then(e=>{let s=e.data.findIndex(i=>i.name=="Other Europe");e.data[s].name="Europe (Other)";let l=e.data[s];e.data.splice(s,1),e.data.splice(5,0,l),this.options=e.data})},methods:S(j({},F("talent",["update_selected_value"])),{save_input(){this.$emit("save_input_to_search")},async filter(e){await this.check_filter_obj(e._id.toString()),await this.$emit("save_input_to_search")},save_data(e){this.filter(e)},save_searched_data(e){this.filter(e)},async check_filter_obj(e){await this.axios.get("/locations/by-ids",{params:{locations:[e]}}).then(s=>{let l=[...s.data.contients,...s.data.countries,...s.data.regions,...s.data.cities];if(l.length>0){let i={type:"selected_searchable_location",value:l[0].name,id:l[0]._id};this.update_selected_value(i)}})}})}),ge={class:"list_container searchable_list_searchbar"};function ve(e,s,l,i,r,u){const f=k("SearchableList");return h(),b("div",ge,[g(f,{options:e.options,requestLevel:["/locations/continent/:id/countries","/locations/country/:id/regions","/locations/region/:id/cities"],allItems:["Worldwide","All countries","All location_regions","All location_cities"],allItemsSelectable:!0,propertyToValidate:"_id",values:[e.location_selected,e.location_selected,e.location_selected,e.location_selected],placeholder:e.placeholder_location==""?e.$t("SearchBar.location.select"):e.placeholder_location,closeOnSaveSearched:!1,is_location:!0,is_job_reference:!0,is_location_search_engine:!0,saveObject:!0,disabled:e.disabled,onSelectOption:e.save_data,onSelectSearchedOption:e.save_searched_data,onUpdate_input_value:e.save_input},null,8,["options","values","placeholder","disabled","onSelectOption","onSelectSearchedOption","onUpdate_input_value"])])}var ye=I(be,[["render",ve]]);const je=$({components:{FilterLayout:M,SearchableList:P},props:{clear:{type:Boolean,default:!1},select_item:{type:Object}},data(){return{options:[],filter_name:"job_reference",filterObjs:[],job_reference:[],lang:"fr",activeDevfilter:!1,popover_selected_id:""}},computed:S(j({},ae("talent",["selected_searchable_job_reference","selected_searchable_id"])),{translate_all_categories(){return this.lang=="fr"?"Toutes cat\xE9gories":this.lang=="es"?"Todas las categor\xEDas":"All categories"},translate_all_subcategories(){return this.lang=="fr"?"Toutes les sous-cat\xE9gories":this.lang=="es"?"Todas las subcategor\xEDas":"All subcategories"},translate_all_references(){return this.lang=="fr"?"Toutes les r\xE9f\xE9rences":this.lang=="es"?"Todas las referencias":"All references"},jobreference_selected(){return this.select_item.id?[this.select_item.id]:[]}}),watch:{clear:function(){this.clear&&(this.filterObjs=[],this.job_reference=[],this.$emit("clearLock"),this.$emit("activeDevelopment",!1))}},mounted(){[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function(s){return new fe(s)})},async created(){let e=document.documentElement.lang;if(e?this.lang=document.documentElement.lang?document.documentElement.lang:"en":(e=navigator.language,e.includes("es")?this.lang="es":e.includes("fr")?this.lang="fr":this.lang="en"),this.axios.get("/job-reference/categories").then(s=>{this.options=s.data}),this.$route.query.job_reference){let s=[];typeof this.$route.query.job_reference=="string"?s.push(this.$route.query.job_reference):s=this.$route.query.job_reference,this.job_reference=this.job_reference.concat(s)}this.filterObjs.length>0&&(this.filterObjs.some(s=>s.job_reference_sub_category=="62312eb71cccbfccd84b3ced")||this.filterObjs.some(s=>s.name_en=="Development"))&&(this.activeDevfilter=!0,this.$emit("activeDevelopment",this.activeDevfilter))},methods:S(j({},F("talent",["update_selected_value"])),{show_popover(e){this.popover_selected_id=e},hide_popover(){this.popover_selected_id=""},async filter(e){e.name_en.includes("All subcategories")?e._id=e.job_reference_category:e.name_en.includes("All references")&&(e._id=e.job_reference_sub_category),await this.check_filter_obj(e._id.toString()),await this.$emit("save_input_to_search")},clear_oid(e){let s="";return e.includes("0-")&&(s=e.split("-")[1]),s},async check_filter_obj(e){await this.axios.get("/job-reference/by-ids",{params:{job_reference:[e]}}).then(s=>{if(this.filterObjs=s.data,this.filterObjs.length>0){let l={type:"selected_searchable_job_reference",value:this.filterObjs[0].name_en,id:this.filterObjs[0]._id};this.$i18n.locale=="fr"?l.value=s.data[0].name_fr:this.$i18n.locale=="es"?l.value=s.data[0].name_es:this.$i18n.locale=="en"&&(l.value=s.data[0].name_en),this.update_selected_value(l)}})},show_item(e){let s=e.name_en;return this.lang=="fr"?s=e.name_fr:this.lang=="en"?s=e.name_en:this.lang=="es"&&(s=e.name_es),s}})});function Se(e,s,l,i,r,u){const f=k("SearchableList"),O=k("FilterLayout");return h(),re(O,null,{default:L(()=>[g(f,{saveObject:!0,options:e.options,values:[e.jobreference_selected,e.jobreference_selected,e.jobreference_selected],is_job_reference:!0,requestLevel:["/job-reference/subcategory/:id/categories","/job-reference/reference/:id/subcategory"],allItems:[e.translate_all_categories,e.translate_all_subcategories,e.translate_all_references],allItemsSelectable:!0,placeholder:e.selected_searchable_job_reference==""?e.$t("SearchBar.job_reference.select"):e.selected_searchable_job_reference,searchURL:"/job-reference/searchJobreference/",onSelectOption:e.filter,onSelectSearchedOption:e.filter},null,8,["options","values","allItems","placeholder","onSelectOption","onSelectSearchedOption"])]),_:1})}var $e=I(je,[["render",Se]]);const B=e=>(ue("data-v-08edb4eb"),e=e(),he(),e),we={id:"search-bar",class:"w-100 bg-white border-0 p-3 rounded-12 fs-14"},Be={class:"row"},Oe={class:"col-12 col-lg-11"},ke={class:"row mx-0"},Le={class:"col-12 col-md-6 col-lg-4 mb-3 mb-lg-0"},xe={class:"fw-medium mb-2 text-primary"},De={class:"position-relative right-bar"},Ee={class:"",style:{"padding-top":"12px","padding-bottom":"12px"}},Ie={class:"mb-1"},Ce=E(),Te=B(()=>a("br",null,null,-1)),qe={class:"fs-10"},Ae={class:"mb-1"},Ne=E(),Re=B(()=>a("br",null,null,-1)),Ve={class:"fs-10"},Fe={class:"mb-1"},Je=E(),Ue=B(()=>a("br",null,null,-1)),ze={class:"fs-10"},Me={class:"col-12 col-md-6 col-lg-4 mb-3 mb-lg-0 z-index-2"},Pe={class:"fw-medium mb-2 text-primary"},We={class:"position-relative right-bar"},Ge={class:"col-12 col-md-6 col-lg-4 offset-md-3 offset-lg-0 mt-md-2 mt-lg-0"},He={class:"fw-medium mb-2 text-primary"},Ke={class:"position-relative right-bar"},Qe={key:0,class:"position-relative"},Xe={class:"dropdown-menu w-100 show","aria-labelledby":"btn_search"},Ye=["onClick"],Ze={class:"col-12 col-md-4 col-lg-1 offset-md-4 offset-lg-0 mt-5 pt-4 mt-lg-0 px-4 px-md-3 d-flex align-items-center search_button_container"},et={class:"d-lg-none"},tt=B(()=>a("i",{class:"ms-2 ms-lg-0 fas fa-search fs-20 align-middle"},null,-1)),st=$({setup(e){const s=J();le();const l=U();w(null);const i=w(null);let r=x({remote:"",location:{name:"",id:""},job_reference:{name:"",id:""}}),u=document.documentElement.lang;u||(u=navigator.language,u.includes("es")||u.includes("fr")),ne(()=>{const t=document.getElementById("loading");t&&(t.style.display="none"),[].slice.call(document.querySelectorAll(".search-bar__dropdown-toggle")).map(function(n){return new me(n)})});const f=D(()=>r.remote=="nomad"&&r.job_reference.id!=""||r.remote!=""&&r.location.id!=""&&r.job_reference.id!=""),O=D(()=>r.remote=="nomad"),W=()=>{var t;r.remote="nomad",r.location.name="Worldwide",r.location.id="",q.value="",i.value&&((t=i.value)==null||t.focus())},C=(t,o)=>{r[t].name=l.state.talent[o],r[t].id=l.state.talent.selected_searchable_id,t=="location"&&l.commit("talent/clear_selected_value")},T=t=>{var o;r.remote=t,i.value&&((o=i.value)==null||o.focus())};let q=w(""),y=x([]);const G=t=>{var o,n;t.value!="undefined"&&(((o=t.value)==null?void 0:o.length)==3?r.location.name=`${t[0].name}`:((n=t.value)==null?void 0:n.length)==4&&(r.location.name=`${t[0].name}`),r.location.id=t[0].id)},H=(t,o)=>{var d,m,p,N;let n="";return t.region?n=`${(m=(d=t==null?void 0:t.region)==null?void 0:d.country)==null?void 0:m.name}, ${(p=t==null?void 0:t.region)==null?void 0:p.name}, ${t==null?void 0:t.name}`:t.country?n=`${(N=t==null?void 0:t.country)==null?void 0:N.name}, ${t==null?void 0:t.name}`:n=t==null?void 0:t.name,n},A=()=>{q.value="",y.splice(0)},K=(t,o)=>{var n,d,m,p;r.location.name=t.name,r.location.id=t._id,t.region?r.location.name=`${t==null?void 0:t.name}, ${(n=t==null?void 0:t.region)==null?void 0:n.name}, ${(m=(d=t==null?void 0:t.region)==null?void 0:d.country)==null?void 0:m.name}`:t.country?r.location.name=`${(p=t==null?void 0:t.country)==null?void 0:p.name}, ${t==null?void 0:t.name}`:r.location.name=t==null?void 0:t.name,A()};w("");let Q=x([]);const X=()=>{if(f.value){const t={};r.remote!=""&&(t.remote=r.remote),r.job_reference.id!=""&&(t.jobReferences=r.job_reference.id),r.location.id!=""&&(t.locations=r.location.id),r.remote=="nomad"&&(t.locations="622a659af0bac38678ed1388"),t.refresh=!0,s.push({name:"TalentOpportunities",query:t})}};return(t,o)=>{const n=oe("t");return h(),b("div",we,[a("div",Be,[a("div",Oe,[a("div",ke,[a("div",Le,[_(a("p",xe,null,512),[[n,"SearchBar.remote.title"]]),a("div",De,[g(pe,{id:"remote",class:v({no_dropdown_arrow:c(r).remote!=""})},{dropdown_btn:L(()=>[a("div",Ee,[a("span",{class:v(["fs-14 text-gray",{"text-select":c(r).remote!=""}])},z(c(r).remote==""?t.$t("SearchBar.remote.select"):t.$t(`SearchBar.remote.${c(r).remote}_title`)),3)])]),dropdown_li:L(()=>[a("ul",null,[a("li",{class:"my-2 py-2 clickable break-spaces dropdown-item fs-14 rounded",onClick:o[0]||(o[0]=d=>T("full_remote"))},[_(a("span",Ie,null,512),[[n,"SearchBar.remote.full_remote_title"]]),Ce,Te,_(a("span",qe,null,512),[[n,"SearchBar.remote.full_remote_sub-title"]])]),a("li",{class:"py-2 mb-2 clickable break-spaces dropdown-item fs-14 rounded",onClick:o[1]||(o[1]=d=>T("hybrid"))},[_(a("span",Ae,null,512),[[n,"SearchBar.remote.hybrid_title"]]),Ne,Re,_(a("span",Ve,null,512),[[n,"SearchBar.remote.hybrid_sub-title"]])]),a("li",{class:"mb-2 py-2 clickable break-spaces dropdown-item fs-14 rounded",onClick:W},[_(a("span",Fe,null,512),[[n,"SearchBar.remote.nomad_title"]]),Je,Ue,_(a("span",ze,null,512),[[n,"SearchBar.remote.nomad_sub-title"]])])])]),_:1},8,["class"])])]),a("div",Me,[_(a("p",Pe,null,512),[[n,"SearchBar.job_reference.title"]]),a("div",We,[g($e,{class:"text-select",select_item:c(r).job_reference,onSave_input_to_search:o[2]||(o[2]=d=>C("job_reference","selected_searchable_job_reference"))},null,8,["select_item"]),a("div",{class:v(["position-absolute custom-scroll w-100",{h_0:c(Q).length<=0}])},null,2)])]),a("div",Ge,[_(a("p",He,null,512),[[n,"SearchBar.location.title"]]),a("div",Ke,[g(ye,{disabled:c(O),filters_input:c(r),onSelect_location:G,onSave_input_to_search:o[3]||(o[3]=d=>C("location","selected_searchable_location"))},null,8,["disabled","filters_input"]),a("div",{class:v(["position-absolute custom-scroll w-100",{h_0:c(y).length<=0}])},[c(y).length>0?_((h(),b("div",Qe,[a("ul",Xe,[(h(!0),b(ce,null,de(c(y),(d,m)=>(h(),b("li",{class:"clickable break-spaces dropdown-item fs-14",onClick:p=>K(d)},[a("span",null,z(H(d)),1)],8,Ye))),256))])],512)),[[c(ie.exports.directive),A]]):_e("",!0)],2)])])])]),a("div",Ze,[a("button",{type:"button",class:v(["btn text-white bg-green-app w-100 px-2 py-2 search-bar-button",{disabled:!c(f)}]),style:{height:"47px"},onClick:X},[_(a("span",et,null,512),[[n,"SearchBar.search_button"]]),tt],2)])])])}}});var at=I(st,[["__scopeId","data-v-08edb4eb"]]);const rt={id:"searh_bar_page",class:"container"},lt={class:"row"},nt={class:"col-12 col-md-12 col-xl-12 ms-md-auto me-md-auto ms-auto me-auto"},ut=$({setup(e){const s=U(),l=J();s.commit("setLayout","BaseLayout");const i=D(()=>s.state.auth.userData);return i.value.filters&&i.value.filters.length>0&&l.push({name:"TalentOpportunities"}),(r,u)=>(h(),b("div",rt,[a("div",lt,[a("div",nt,[g(at)])])]))}});export{ut as default};
