(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81],{711:function(e,t,l){Promise.resolve().then(l.bind(l,8785))},8785:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return page}});var a=l(7437),i=l(717),o=l(4033),s=l(9691);l(3693);var n=l(1043),r=l(1723),c=l(8368),d=l(933);l(1093);var h=l(4951),intro_HeroIcon=e=>(0,a.jsxs)("a",{href:"/heroes/".concat(e.hero.id),className:"text-link hero-icon-container",children:[(0,a.jsx)(h.Z,{src:e.hero.icon?e.hero.icon:"/heroes/intro/icons/Unit_Unknown.webp",alt:"",inline:!1,maxWidth:"100px"}),(0,a.jsx)("span",{children:e.hero.name})]},e.hero.id),u=l(2265),p=l(4333),m=l(7378);let dot=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transparent";return{alignItems:"center",display:"flex",":before":{backgroundColor:e,borderRadius:10,content:'" "',display:"block",marginRight:8,height:10,width:10}}},Option=e=>(0,a.jsxs)(p.c.Option,{...e,className:"country-option",children:[e.data.image&&(0,a.jsx)("img",{src:e.data.image,alt:"logo",className:"option-icon",style:{maxWidth:"20px",maxHeight:"20px",marginRight:"5px"}}),(0,a.jsx)("span",{className:"option-label",children:e.data.label})]}),MultiValue=e=>(0,a.jsx)(p.c.MultiValue,{...e,children:e.data.image?(0,a.jsx)("img",{src:e.data.image,alt:"m-logo",className:"multi-selected-icon",style:{maxWidth:"20px",maxHeight:"20px",marginRight:"5px"}}):(0,a.jsx)("span",{className:"multi-selected-label",children:e.children})});var multi_select_box_MultiSelectBox=e=>{let{options:t,width:l,mobileWidth:i,color:o,selectedOptions:s,onOptionsChange:n,placeholder:r,style:c}=e,[d,h]=(0,u.useState)(!1);(0,u.useEffect)(()=>{let handleResize=()=>{h(window.innerWidth<=768)};return window.addEventListener("resize",handleResize),handleResize(),()=>{window.removeEventListener("resize",handleResize)}},[]);let[p,g]=(0,u.useState)("auto");return(0,a.jsx)("div",{id:"multi-select-container",style:c,children:(0,a.jsx)(m.ZP,{isMulti:!0,value:s,options:t,onChange:e=>{n(e)},styles:{control:e=>({...e,width:d?i:l,margin:"0 auto",backgroundColor:o,height:p,fontSize:d?"12px":"14px"}),valueContainer:e=>({...e,height:"100%",padding:"0 6px"}),input:(e,t)=>({...e,margin:"0px"}),indicatorsContainer:(e,t)=>({...e,height:"100%"}),menu:e=>({...e,width:d?i:l,margin:"auto",left:0,right:0,backgroundColor:o}),option:(e,t)=>{let{data:l}=t;return{...e,padding:"5px",...l.dotColor?dot(l.dotColor):{},fontSize:d?"12px":"14px"}},multiValueRemove:(e,t)=>({...e,":hover":{backgroundColor:"#558BB7",color:"white"}}),clearIndicator:(e,t)=>({...e,":hover":{color:"#558BB7"}})},components:{Option,MultiValue},placeholder:r})})},g=l(9447),intro_Intro=e=>{let t;let[l,i]=(0,u.useState)(!1),o=d.TH.slice().sort((e,t)=>e.name.localeCompare(t.name)),s=[...new Set(d.TH.map(e=>e.heroClass).filter(e=>e))].map(e=>({value:e,label:d.j9[e]})),h=[...new Set(d.TH.map(e=>e.unit).filter(e=>e))].map(e=>({value:e,label:d.tL[e]})),p=[...new Set(d.TH.flatMap(e=>e.ascension?Object.values(e.ascension).flatMap(e=>e.flatMap(e=>g.Z.find(t=>t.id===e.resource&&"crests_colors"===t.category)?e.resource:[])):[]))].map(e=>({value:e,label:g.Z.find(t=>t.id===e).name,image:g.Z.find(t=>t.id===e).img})),m=[...new Set(d.TH.flatMap(e=>e.ascension?Object.values(e.ascension).flatMap(e=>e.flatMap(e=>g.Z.find(t=>t.id===e.resource&&"crests_factions"===t.category)?e.resource:[])):[]))].map(e=>({value:e,label:g.Z.find(t=>t.id===e).name})),x=[...new Set(d.TH.map(e=>e.color).filter(e=>e))].map(e=>({value:e,label:d.Yf[e]})),f=[...new Set(d.TH.flatMap(e=>e.ascension?Object.values(e.ascension).flatMap(e=>e.flatMap(e=>g.Z.find(t=>t.id===e.resource&&"ascension_materials"===t.category)?e.resource:[])):[]))].map(e=>({value:e,label:g.Z.find(t=>t.id===e).name,image:g.Z.find(t=>t.id===e).img})),v=[...new Set(d.TH.map(e=>e.position).filter(e=>e))].map(e=>({value:e,label:d.pm[e]})),b=[...new Set(d.TH.flatMap(e=>e.damageType).filter(e=>e))].map(e=>({value:e,label:d.D7[e]})),j=[...new Set(d.TH.flatMap(e=>e.tacticalType).filter(e=>e))].map(e=>({value:e,label:d.FZ[e]})),[y,w]=(0,u.useState)([]),[_,S]=(0,u.useState)([]),[M,C]=(0,u.useState)([]),[T,B]=(0,u.useState)([]),[N,O]=(0,u.useState)([]),[E,Z]=(0,u.useState)([]),[H,F]=(0,u.useState)([]),[k,P]=(0,u.useState)([]),[A,U]=(0,u.useState)([]),[R,I]=(0,u.useState)(""),updateUrlParams=(e,t,l,a,i,o,s,n,r)=>{let c=new URLSearchParams;null==e||e.forEach(e=>{c.append("class",e.value)}),null==t||t.forEach(e=>{c.append("unit",e.value)}),null==l||l.forEach(e=>{c.append("crestColor",e.value)}),null==a||a.forEach(e=>{c.append("crestFaction",e.value)}),null==i||i.forEach(e=>{c.append("color",e.value)}),null==o||o.forEach(e=>{c.append("ascensionMaterial",e.value)}),null==s||s.forEach(e=>{c.append("position",e.value)}),null==n||n.forEach(e=>{c.append("damageType",e.value)}),null==r||r.forEach(e=>{c.append("tacticalType",e.value)});let d=(null==e?void 0:e.length)>0||(null==t?void 0:t.length)>0||(null==l?void 0:l.length)>0||(null==a?void 0:a.length)>0||(null==i?void 0:i.length)>0||(null==o?void 0:o.length)>0||(null==s?void 0:s.length)>0||(null==n?void 0:n.length)>0||(null==r?void 0:r.length)>0,h=d?"".concat(window.location.hash.split("?")[0],"?").concat(c.toString()):window.location.hash.split("?")[0];window.history.pushState({path:h},"",h)};(0,u.useEffect)(()=>{let e=new URLSearchParams(window.location.search||""),t=e.getAll("class"),l=e.getAll("unit"),a=e.getAll("crestColor"),i=e.getAll("crestFaction"),o=e.getAll("color"),n=e.getAll("ascensionMaterial"),r=e.getAll("position"),c=e.getAll("damageType"),d=e.getAll("tacticalType"),u=s.filter(e=>t.includes(e.value));w(u);let g=h.filter(e=>l.includes(e.value));S(g);let y=p.filter(e=>a.includes(e.value));C(y);let _=m.filter(e=>i.includes(e.value));B(_);let M=x.filter(e=>o.includes(e.value));O(M);let T=f.filter(e=>n.includes(e.value));Z(T);let N=v.filter(e=>r.includes(e.value));F(N);let E=b.filter(e=>c.includes(e.value));P(E);let H=j.filter(e=>d.includes(e.value));U(H)},[]);let W=(t=o,y.length>0&&(t=t.filter(e=>y.some(t=>t.value===e.heroClass))),_.length>0&&(t=t.filter(e=>_.some(t=>t.value===e.unit))),M.length>0&&(t=t.filter(e=>e.ascension&&Object.values(e.ascension).flatMap(e=>e).some(e=>M.some(t=>t.value===e.resource)))),T.length>0&&(t=t.filter(e=>e.ascension&&Object.values(e.ascension).flatMap(e=>e).some(e=>T.some(t=>t.value===e.resource)))),N.length>0&&(t=t.filter(e=>N.some(t=>t.value===e.color))),E.length>0&&(t=t.filter(e=>e.ascension&&Object.values(e.ascension).flatMap(e=>e).some(e=>E.some(t=>t.value===e.resource)))),H.length>0&&(t=t.filter(e=>H.some(t=>t.value===e.position))),k.length>0&&(t=t.filter(e=>e.damageType&&Array.isArray(e.damageType)&&k.some(t=>e.damageType.includes(t.value)))),A.length>0&&(t=t.filter(e=>e.tacticalType&&Array.isArray(e.tacticalType)&&A.some(t=>e.tacticalType.includes(t.value)))),t=t.filter(e=>e.name.toLowerCase().includes(R.toLowerCase())));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Z,{imageSrc:"/heroes/intro/tutorial-host-cleopatra.webp",alt:"Event",maxHeight:"65px",children:"Use the filters to refine your search and find heroes that match your preferred criteria. Whether you seek valiant defenders, powerful tanks, smart mages, or wise thinkers, you'll find them all here. Filter by hero class, unit type, crest colors, and various tactical types to tailor your fights to your liking."}),(0,a.jsx)(r.Z,{}),(0,a.jsxs)("div",{className:"select-boxes-container",children:[(0,a.jsxs)("div",{className:"select-box-column",children:[(0,a.jsx)(c.Z,{center:!0,children:"Types"}),(0,a.jsx)(multi_select_box_MultiSelectBox,{options:s,width:"80%",mobileWidth:"100%",height:"40px",color:"#F6F3EB",selectedOptions:y,onOptionsChange:e=>{w(e),updateUrlParams(e,_,M,T,N,E,H,k)},placeholder:"Hero Class",style:{marginBottom:"10px"}}),(0,a.jsx)(multi_select_box_MultiSelectBox,{options:x,width:"80%",mobileWidth:"100%",height:"40px",color:"#F6F3EB",selectedOptions:N,onOptionsChange:e=>{O(e),updateUrlParams(y,_,M,T,e,E,H,k,A)},placeholder:"Color Type",style:{marginBottom:"10px"}})]}),(0,a.jsxs)("div",{className:"select-box-column",children:[(0,a.jsx)(c.Z,{center:!0,children:"Materials"}),(0,a.jsx)(multi_select_box_MultiSelectBox,{options:p,width:"80%",mobileWidth:"100%",height:"40px",color:"#F6F3EB",selectedOptions:M,onOptionsChange:e=>{C(e),updateUrlParams(y,_,e,T,N,E,H,k,A)},placeholder:"Crest Colors",style:{marginBottom:"10px"}}),(0,a.jsx)(multi_select_box_MultiSelectBox,{options:f,width:"80%",mobileWidth:"100%",height:"40px",color:"#F6F3EB",selectedOptions:E,onOptionsChange:e=>{Z(e),updateUrlParams(y,_,M,T,N,e,H,k,A)},placeholder:"Ascension Materials",style:{marginBottom:"10px"}})]})]}),(0,a.jsx)("div",{className:"btn-container",children:(0,a.jsx)("button",{onClick:()=>{i(!l)},className:"btn",children:l?"Hide More Filters":"Show More Filters"})}),l&&(0,a.jsxs)("div",{className:"select-boxes-container",children:[(0,a.jsxs)("div",{className:"select-box-column",children:[(0,a.jsx)(multi_select_box_MultiSelectBox,{options:v,width:"80%",mobileWidth:"100%",height:"40px",color:"#F6F3EB",selectedOptions:H,onOptionsChange:e=>{F(e),updateUrlParams(y,_,M,T,N,E,e,k,A)},placeholder:"Recommended Position",style:{marginBottom:"10px"}}),(0,a.jsx)(multi_select_box_MultiSelectBox,{options:j,width:"80%",mobileWidth:"100%",height:"40px",color:"#F6F3EB",selectedOptions:A,onOptionsChange:e=>{U(e),updateUrlParams(y,_,M,T,N,E,H,k,e)},placeholder:"Tactical Type",style:{marginBottom:"10px"}})]}),(0,a.jsxs)("div",{className:"select-box-column",children:[(0,a.jsx)(multi_select_box_MultiSelectBox,{options:b,width:"80%",mobileWidth:"100%",height:"40px",color:"#F6F3EB",selectedOptions:k,onOptionsChange:e=>{P(e),updateUrlParams(y,_,M,T,N,E,H,e,A)},placeholder:"Attack Type",style:{marginBottom:"10px"}}),(0,a.jsx)(multi_select_box_MultiSelectBox,{options:h,width:"80%",mobileWidth:"100%",height:"40px",color:"#F6F3EB",selectedOptions:_,onOptionsChange:e=>{S(e),updateUrlParams(y,e,M,T,N,E,H,k,A)},placeholder:"Unit Type",style:{marginBottom:"10px"}})]})]}),(0,a.jsx)(r.Z,{}),(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"15px",marginBottom:"15px"}}),(0,a.jsxs)("div",{className:"hero-category",children:[(0,a.jsx)(c.Z,{center:!0,children:"5-star heroes"}),(0,a.jsx)("div",{className:"hero-grid",children:W.filter(e=>5===e.stars).map(t=>(0,a.jsx)(intro_HeroIcon,{tab:e.tab,hero:t},t.id))})]}),(0,a.jsxs)("div",{className:"hero-category",children:[(0,a.jsx)(c.Z,{center:!0,children:"4-star heroes"}),(0,a.jsx)("div",{className:"hero-grid",children:W.filter(e=>4===e.stars).map(t=>(0,a.jsx)(intro_HeroIcon,{tab:e.tab,hero:t},t.id))})]}),(0,a.jsxs)("div",{className:"hero-category",children:[(0,a.jsx)(c.Z,{center:!0,children:"3-star heroes"}),(0,a.jsx)("div",{className:"hero-grid",children:W.filter(e=>3===e.stars).map(t=>(0,a.jsx)(intro_HeroIcon,{tab:e.tab,hero:t},t.id))})]}),(0,a.jsxs)("div",{className:"hero-category",children:[(0,a.jsx)(c.Z,{center:!0,children:"2-star heroes"}),(0,a.jsx)("div",{className:"hero-grid",children:W.filter(e=>2===e.stars).map(t=>(0,a.jsx)(intro_HeroIcon,{tab:e.tab,hero:t},t.id))})]})]})},x=l(7699),page=()=>{let e="heroes",t=(0,x.J)(s.Z),l=(0,o.useRouter)(),n=l.query,r=d.TH.find(e=>e.id==n),c=r?r.name:"",h=c?(0,a.jsxs)("span",{children:[(0,a.jsx)("a",{href:"/".concat(e),className:"text-link-white",children:"Heroes"})," > ",c]}):"Heroes";return(0,a.jsx)(i.Z,{basePath:e,tabs:s.Z.tabs,selectedTab:t,pageName:h,children:(t.url,(0,a.jsx)(intro_Intro,{}))})}},9691:function(e,t){"use strict";t.Z={page:"heroes",tabs:[{id:1,url:"",name:"Intro",img:"/heroes/intro/tutorial-host-cleopatra.webp",show:!1,dynamicSegments:[":heroId"]},{id:2,url:"guide",name:"Info",img:"https://i.ibb.co/nRvy33n/event-widget-backer-time-Paradox-2021.png",show:!1,dynamicSegments:[]}]}},1043:function(e,t,l){"use strict";var a=l(7437);l(2265),l(7011),t.Z=e=>{let{imageSrc:t,alt:l,maxHeight:i,children:o}=e;return(0,a.jsxs)("div",{className:"prologue-container",children:[(0,a.jsx)("div",{className:"prologue-image",children:(0,a.jsx)("img",{src:t,alt:l,style:{maxHeight:i}})}),(0,a.jsx)("div",{className:"prologue-content",children:o})]})}},1093:function(){},3693:function(){},7011:function(){},4033:function(e,t,l){e.exports=l(94)}},function(e){e.O(0,[685,586,550,971,472,744],function(){return e(e.s=711)}),_N_E=e.O()}]);