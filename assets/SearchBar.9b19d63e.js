import{d as c,y as i,x as n,z as l,b as d,e as u,h as e,g as o,f as _,o as p}from"./vendor.ed4525a9.js";import{S as h}from"./SearchBar.8265429c.js";import"./simplebar.85a52192.js";import"./index.24564085.js";import"./DropdownVanilla.7e19f57b.js";const f={id:"searh_bar_page",class:"container my-auto"},m={class:"row"},x={class:"text-center text-white pb-1 ff-nexa-bold fs-48"},v={class:"text-center text-white pb-2 mb-5 ff-nexa fs-20"},b={class:"col-10 col-md-12 col-xl-10 offset-xl-1"},V=c({setup(B){const t=i(),r=n();t.commit("setLayout","BaseLayout");const s=l(()=>t.state.auth.userData);return s.value.filters&&s.value.filters.length>0&&r.push({name:"TalentOpportunities"}),(g,j)=>{const a=d("t");return p(),u("div",f,[e("div",m,[o(e("h2",x,null,512),[[a,"searchEngine.title"]]),o(e("p",v,null,512),[[a,"searchEngine.sub_title"]]),e("div",b,[_(h)])])])}}});export{V as default};
