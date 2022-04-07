var X=Object.defineProperty,Y=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var T=(e,s,o)=>s in e?X(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,w=(e,s)=>{for(var o in s||(s={}))ee.call(s,o)&&T(e,o,s[o]);if(R)for(var o of R(s))te.call(s,o)&&T(e,o,s[o]);return e},V=(e,s)=>Y(e,Z(s));import{d as y,r as L,o as h,f as b,g,m as se,k as ae,s as re,w as B,am as F,an as oe,ao as J,ad as S,ae as k,ah as ne,ai as O,e as ie,i as a,h as d,t as U,ap as _,n as q,aq as le,ab as ce,ac as de,q as _e,p as I,ar as ue,as as he}from"./vendor.40f1fa49.js";import{P as fe,D as pe}from"./bootstrap.esm.f2db94b8.js";import{_ as M,S as P,D as me}from"./SearchableList.01ae7eb1.js";import{_ as D}from"./index.7d85ada4.js";const be=y({components:{FilterLayout:M,SearchableList:P},props:{filters_input:{type:Object},disabled:{type:Boolean}},data(){return{options:[],filtersNames:[],filters:[]}},computed:{placeholder_location(){return this.filters_input?this.filters_input.location.name:""}},async created(){if(this.axios.get("/locations/getContinents").then(e=>{let s=e.data.findIndex(l=>l.name=="Other Europe");e.data[s].name="Europe (Other)";let o=e.data[s];e.data.splice(s,1),e.data.splice(5,0,o),this.options=e.data}),this.$route.query.locations){let e=[];typeof this.$route.query.locations=="string"?e.push(this.$route.query.locations):e=this.$route.query.locations,this.filters=this.filters.concat(e)}this.filters.length>0&&await this.check_filter_obj()},methods:{save_input(){this.$emit("save_input_to_search")},async filter(e){console.log(e);let s="";e==null?s="":s=e._id;let o=Object.assign({},this.$route.query);const l=this.filters.indexOf(s.toString());l===-1?(this.filters.push(s.toString()),o.locations=this.filters.toString(),this.check_filter_obj()):(this.filters.splice(l,1),this.check_filter_obj(),this.filters.length==0?delete o.locations:o.locations=this.filters.toString()),this.$emit("updateApiQuery","locations",this.filters)},save_data(e){e.pop();let s=e[e.length-1];this.filter(s)},save_searched_data(e){this.filter(e)},async check_filter_obj(){var e;this.filters[0]==""&&(this.filters[0]=(e=this.filters_input)==null?void 0:e.location.id),await this.axios.get("/locations/by-ids",{params:{locations:this.filters}}).then(s=>{this.filtersNames=[...s.data.contients,...s.data.countries,...s.data.regions,...s.data.cities]})},getNameLocationAll(e){let s="";return e.name.includes("All countries")||e.name.includes("All location_regions")||e.name.includes("All location_cities")?e.continent?s=e.continent.name:e.country?s=e.country.name:e.region&&(s=e.region.name):s=e.name,s}}}),ge={class:"list_container searchable_list_searchbar"};function ve(e,s,o,l,r,u){const f=L("SearchableList");return h(),b("div",ge,[g(f,{options:e.options,requestLevel:["/locations/continent/:id/countries","/locations/country/:id/regions","/locations/region/:id/cities"],allItems:["Worldwide","All countries","All location_regions","All location_cities"],allItemsSelectable:!0,propertyToValidate:"_id",values:[e.filters,e.filters,e.filters,e.filters],placeholder:e.placeholder_location==""?e.$t("SearchBar.location.select"):e.placeholder_location,closeOnSaveSearched:!1,is_location:!0,disabled:e.disabled,onSelectOption:e.save_data,onSelectSearchedOption:e.save_searched_data,onUpdate_input_value:e.save_input},null,8,["options","values","placeholder","disabled","onSelectOption","onSelectSearchedOption","onUpdate_input_value"])])}var ye=D(be,[["render",ve]]);const Se=y({components:{FilterLayout:M,SearchableList:P},props:{clear:{type:Boolean,default:!1}},data(){return{options:[],filter_name:"job_reference",filterObjs:[],job_reference:[],lang:"fr",activeDevfilter:!1,popover_selected_id:""}},computed:w({},se("talent",["selected_searchable_job_reference","selected_searchable_id"])),watch:{clear:function(){this.clear&&(this.filterObjs=[],this.job_reference=[],this.$emit("clearLock"),this.$emit("activeDevelopment",!1))}},mounted(){[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function(s){return new fe(s)})},async created(){let e=window.localStorage.getItem("userLang");if(e?this.lang=window.localStorage.getItem("userLang")?window.localStorage.getItem("userLang"):"en":(e=navigator.language,e.includes("es")?this.lang="es":e.includes("fr")?this.lang="fr":this.lang="en"),this.axios.get("/job-reference/categories").then(s=>{this.options=s.data}),this.$route.query.job_reference){let s=[];typeof this.$route.query.job_reference=="string"?s.push(this.$route.query.job_reference):s=this.$route.query.job_reference,this.job_reference=this.job_reference.concat(s)}this.filterObjs.length>0&&(this.filterObjs.some(s=>s.job_reference_sub_category=="62312eb71cccbfccd84b3ced")||this.filterObjs.some(s=>s.name_en=="Development"))&&(this.activeDevfilter=!0,this.$emit("activeDevelopment",this.activeDevfilter))},methods:V(w({},ae("talent",["update_selected_value"])),{show_popover(e){this.popover_selected_id=e},hide_popover(){this.popover_selected_id=""},async filter(e){await this.check_filter_obj(e._id.toString()),await this.$emit("save_input_to_search")},clear_oid(e){let s="";return e.includes("0-")&&(s=e.split("-")[1]),s},async check_filter_obj(e){await this.axios.get("/job-reference/by-ids",{params:{job_reference:[e]}}).then(s=>{this.filterObjs=s.data;let o={type:"job_reference",value:s.data[0].name_en,id:s.data[0]._id};this.$i18n.locale=="fr"?o.value=`${s.data[0].name_fr}`:this.$i18n.locale=="es"?o.value=`${s.data[0].name_es}`:this.$i18n.locale=="en"&&(o.value=`${s.data[0].name_en}`),this.update_selected_value(o)})},show_item(e){let s=e.name_en;return this.lang=="fr"?s=e.name_fr:this.lang=="en"?s=e.name_en:this.lang=="es"&&(s=e.name_es),s}})});function $e(e,s,o,l,r,u){const f=L("SearchableList"),j=L("FilterLayout");return h(),re(j,null,{default:B(()=>[g(f,{saveObject:!0,options:e.options,values:[[],[],e.job_reference],is_job_reference:!0,requestLevel:["/job-reference/subcategory/:id/categories","/job-reference/reference/:id/subcategory"],allItems:["All categories","All subcategories","All references"],allItemsSelectable:!0,placeholder:e.selected_searchable_job_reference==""?e.$t("SearchBar.job_reference.select"):e.selected_searchable_job_reference,searchURL:"/job-reference/searchJobreference/",onSelectOption:e.filter,onSelectSearchedOption:e.filter},null,8,["options","values","placeholder","onSelectOption","onSelectSearchedOption"])]),_:1})}var je=D(Se,[["render",$e]]);const $=e=>(ue("data-v-1eab9c1e"),e=e(),he(),e),we={id:"search-bar",class:"w-100 bg-white border-0 p-3 rounded-12 fs-14"},Le={class:"row"},Be={class:"col-12 col-lg-11"},ke={class:"row mx-0"},Oe={class:"col-12 col-md-6 col-lg-4"},qe={class:"fw-medium mb-2"},Ie={class:"position-relative right-bar"},De={class:"",style:{"padding-top":"12px","padding-bottom":"12px"}},xe={class:"fs-14"},Ae={class:"mb-1"},Ce=I(),Ne=$(()=>a("br",null,null,-1)),Ee={class:"fs-10"},Re={class:"mb-1"},Te=I(),Ve=$(()=>a("br",null,null,-1)),Fe={class:"fs-10"},Je={class:"mb-1"},Ue=I(),Me=$(()=>a("br",null,null,-1)),Pe={class:"fs-10"},We={class:"col-12 col-md-6 col-lg-4"},ze={class:"fw-medium mb-2"},Qe={class:"position-relative right-bar"},Ge={class:"col-12 col-md-6 col-lg-4 offset-md-3 offset-lg-0 mt-md-2 mt-lg-0"},He={class:"fw-medium mb-2"},Ke={class:"position-relative"},Xe={key:0,class:"position-relative"},Ye={class:"dropdown-menu w-100 show","aria-labelledby":"btn_search"},Ze=["onClick"],et={class:"col-12 col-md-4 col-lg-1 offset-md-4 offset-lg-0 mt-3 mt-lg-0 px-4 px-md-3 d-flex align-items-end search_button_container"},tt={class:"d-lg-none"},st=$(()=>a("i",{class:"ms-2 ms-lg-0 fas fa-search fs-20 align-middle"},null,-1)),at=y({setup(e){const s=F();oe();const o=J();S(null);const l=S(null);let r=k({remote:"",location:{name:"",id:""},job_reference:{name:"",id:""}}),u=window.localStorage.getItem("userLang");u||(u=navigator.language,u.includes("es")||u.includes("fr")),ne(()=>{const t=document.getElementById("loading");t&&(t.style.display="none"),[].slice.call(document.querySelectorAll(".search-bar__dropdown-toggle")).map(function(n){return new pe(n)})});const f=O(()=>r.remote=="nomad"&&r.job_reference.id!=""||r.remote!=""&&r.location.id!=""&&r.job_reference.id!=""),j=O(()=>r.remote=="nomad"),W=()=>{var t;r.remote="nomad",r.location.name="Worldwide",r.location.id="",C.value="",l.value&&((t=l.value)==null||t.focus())},x=(t,i)=>{r[t].name=o.state.talent[i],r[t].id=o.state.talent.selected_searchable_id,t=="location"&&o.commit("talent/clear_selected_value")},A=t=>{var i;r.remote=t,l.value&&((i=l.value)==null||i.focus())};let C=S(""),v=k([]);const z=t=>{var i,n;t.value!="undefined"&&(((i=t.value)==null?void 0:i.length)==3?r.location.name=`${t[0].name}`:((n=t.value)==null?void 0:n.length)==4&&(r.location.name=`${t[0].name}`),r.location.id=t[0].id)},Q=(t,i)=>{var c,p,m,E;let n="";return t.region?n=`${(p=(c=t==null?void 0:t.region)==null?void 0:c.country)==null?void 0:p.name}, ${(m=t==null?void 0:t.region)==null?void 0:m.name}, ${t==null?void 0:t.name}`:t.country?n=`${(E=t==null?void 0:t.country)==null?void 0:E.name}, ${t==null?void 0:t.name}`:n=t==null?void 0:t.name,n},N=()=>{C.value="",v.splice(0)},G=(t,i)=>{var n,c,p,m;r.location.name=t.name,r.location.id=t._id,t.region?r.location.name=`${t==null?void 0:t.name}, ${(n=t==null?void 0:t.region)==null?void 0:n.name}, ${(p=(c=t==null?void 0:t.region)==null?void 0:c.country)==null?void 0:p.name}`:t.country?r.location.name=`${(m=t==null?void 0:t.country)==null?void 0:m.name}, ${t==null?void 0:t.name}`:r.location.name=t==null?void 0:t.name,N()};S("");let H=k([]);const K=()=>{if(f.value){const t={};r.remote!=""&&(t.remote=r.remote),r.job_reference.id!=""&&(t.jobReferences=r.job_reference.id),r.location.id!=""&&(t.locations=r.location.id),t.refresh=!0,s.push({name:"TalentOpportunities",query:t})}};return(t,i)=>{const n=ie("t");return h(),b("div",we,[a("div",Le,[a("div",Be,[a("div",ke,[a("div",Oe,[d(a("p",qe,null,512),[[n,"SearchBar.remote.title"]]),a("div",Ie,[g(me,null,{dropdown_btn:B(()=>[a("div",De,[a("span",xe,U(_(r).remote==""?t.$t("SearchBar.remote.select"):t.$t(`SearchBar.remote.${_(r).remote}_title`)),1)])]),dropdown_li:B(()=>[a("ul",null,[a("li",{class:"my-2 py-2 clickable break-spaces dropdown-item fs-14 rounded",onClick:i[0]||(i[0]=c=>A("full_remote"))},[d(a("span",Ae,null,512),[[n,"SearchBar.remote.full_remote_title"]]),Ce,Ne,d(a("span",Ee,null,512),[[n,"SearchBar.remote.full_remote_sub-title"]])]),a("li",{class:"py-2 mb-2 clickable break-spaces dropdown-item fs-14 rounded",onClick:i[1]||(i[1]=c=>A("hybrid"))},[d(a("span",Re,null,512),[[n,"SearchBar.remote.hybrid_title"]]),Te,Ve,d(a("span",Fe,null,512),[[n,"SearchBar.remote.hybrid_sub-title"]])]),a("li",{class:"mb-2 py-2 clickable break-spaces dropdown-item fs-14 rounded",onClick:W},[d(a("span",Je,null,512),[[n,"SearchBar.remote.nomad_title"]]),Ue,Me,d(a("span",Pe,null,512),[[n,"SearchBar.remote.nomad_sub-title"]])])])]),_:1})])]),a("div",We,[d(a("p",ze,null,512),[[n,"SearchBar.job_reference.title"]]),a("div",Qe,[g(je,{onSave_input_to_search:i[2]||(i[2]=c=>x("job_reference","selected_searchable_job_reference"))}),a("div",{class:q(["position-absolute custom-scroll w-100",{h_0:_(H).length<=0}])},null,2)])]),a("div",Ge,[d(a("p",He,null,512),[[n,"SearchBar.location.title"]]),a("div",Ke,[g(ye,{disabled:_(j),filters_input:_(r),onSelect_location:z,onSave_input_to_search:i[3]||(i[3]=c=>x("location","selected_searchable_location"))},null,8,["disabled","filters_input"]),a("div",{class:q(["position-absolute custom-scroll w-100",{h_0:_(v).length<=0}])},[_(v).length>0?d((h(),b("div",Xe,[a("ul",Ye,[(h(!0),b(ce,null,de(_(v),(c,p)=>(h(),b("li",{class:"clickable break-spaces dropdown-item fs-14",onClick:m=>G(c)},[a("span",null,U(Q(c)),1)],8,Ze))),256))])],512)),[[_(le.exports.directive),N]]):_e("",!0)],2)])])])]),a("div",et,[a("button",{type:"button",class:q(["btn text-white bg-green-app w-100 px-2 py-2 search-bar-button",{disabled:!_(f)}]),style:{height:"47px"},onClick:K},[d(a("span",tt,null,512),[[n,"SearchBar.search_button"]]),st],2)])])])}}});var rt=D(at,[["__scopeId","data-v-1eab9c1e"]]);const ot={id:"searh_bar_page",class:"container"},nt={class:"row"},it={class:"col-12 col-md-12 col-xl-10 offset-xl-1"},ht=y({setup(e){const s=J(),o=F();s.commit("setLayout","BaseLayout");const l=O(()=>s.state.auth.userData);return l.value.filters&&l.value.filters.length>0&&o.push({name:"TalentOpportunities"}),(r,u)=>(h(),b("div",ot,[a("div",nt,[a("div",it,[g(rt)])])]))}});export{ht as default};
