const __vite__fileDeps=["assets/HomeView-hKocgKXn.js","assets/@vicons-D7ptmEij.js","assets/@vue-CA14Bhfh.js","assets/naive-ui-ZfQSKBF9.js","assets/seemly-D2wyWRjj.js","assets/vooks-5LbGPu-y.js","assets/evtd-CI_DDEu_.js","assets/lodash-es-D1IKaXUS.js","assets/vueuc-DvhC_adR.js","assets/@css-render-DNgWC2BO.js","assets/vdirs-Bxp-63WN.js","assets/@juggle-C8OzoCMD.js","assets/@emotion-WldOFDRm.js","assets/treemate-BD4Oer00.js","assets/date-fns-ByyCCKXE.js","assets/@babel-B0IGr_Mv.js","assets/date-fns-tz-D_KSBUZx.js","assets/async-validator-DKvM95Vc.js","assets/@vueuse-DDe9a6K5.js","assets/abi-Bp99HW0C.js","assets/@wagmi-Mrh7Gowl.js","assets/zustand-23CcGmLH.js","assets/viem-L8n_iVy8.js","assets/eventemitter3-BYCAYZDL.js","assets/mipd-CIcDX0W7.js","assets/@tanstack-Dj03aQiD.js","assets/vue-router-Ckoesiwk.js","assets/pinia-CGNOT0MH.js","assets/HomeView-DHt1taha.css","assets/CreatePartyView-BXIS2Mc2.js","assets/CreatePartyView-BzZjBEEZ.css","assets/PartyPageView-COlVJ-rk.js","assets/PartyPageView-B0INc7uF.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{e as k,f as _,a0 as m,a1 as i,a2 as a,s as v,a3 as b,u as n,r as P,b as Z,c as J,a4 as V,g as j,j as e,a5 as E,G as A,Z as Q}from"./@vue-CA14Bhfh.js";import{d as X,c as K}from"./pinia-CGNOT0MH.js";import{Q as Y,V as ee}from"./@tanstack-Dj03aQiD.js";import{u as oe}from"./@vueuse-DDe9a6K5.js";import{u as te,a as ne,b as re,c as se,_ as L,d as ae,i as ce,W as ie}from"./@wagmi-Mrh7Gowl.js";import{_ as W,a as le,b as ue,u as pe,N as T,c as de,d as _e,e as me,f as fe,g as ge,h as he,i as ve,j as ye,k as xe,n as be}from"./naive-ui-ZfQSKBF9.js";import{U as Ce,W as $}from"./@vicons-D7ptmEij.js";import{c as we,a as Fe}from"./vue-router-Ckoesiwk.js";import{j as S,k as R,l as I,o as N,q as O,u as B,v as f}from"./viem-L8n_iVy8.js";import"./zustand-23CcGmLH.js";import"./eventemitter3-BYCAYZDL.js";import"./@babel-B0IGr_Mv.js";import"./mipd-CIcDX0W7.js";import"./seemly-D2wyWRjj.js";import"./vooks-5LbGPu-y.js";import"./evtd-CI_DDEu_.js";import"./lodash-es-D1IKaXUS.js";import"./vueuc-DvhC_adR.js";import"./@css-render-DNgWC2BO.js";import"./vdirs-Bxp-63WN.js";import"./@juggle-C8OzoCMD.js";import"./@emotion-WldOFDRm.js";import"./treemate-BD4Oer00.js";import"./date-fns-ByyCCKXE.js";import"./date-fns-tz-D_KSBUZx.js";import"./async-validator-DKvM95Vc.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(o){if(o.ep)return;o.ep=!0;const t=r(o);fetch(o.href,t)}})();const Ee=k({__name:"Balance",props:{address:{}},setup(u){const s=u,{data:r,isPending:l}=te({address:s.address,scopeKey:"use-balance"});return(o,t)=>{const c=W,p=le,C=ue;return _(),m(C,null,{default:i(()=>[a(p,{show:n(l)},{default:i(()=>[a(c,{type:"success"},{default:i(()=>{var y,x;return[v("Balance: "+b((y=n(r))==null?void 0:y.symbol)+" "+b((x=n(r))==null?void 0:x.value),1)]}),_:1})]),_:1},8,["show"])]),_:1})}}}),Le=X("main",()=>{const u=P(void 0),s=P(void 0),r=Z({name:"Glitch & Glam",description:"It's time for a game party focused on Linea token quests! Join forces with other gamers, tackle challenges, and earn tokens together. Let's make this a night of shared achievements",owner:"malamuth",share:null,partyMembers:[{id:"asdad",name:"Telegram members",description:"Those who joined party via TG",revenue:15}]}),l=()=>{const{isConnected:t,address:c,chain:p}=ne();return u.value=c.value,s.value=p.value,{isConnected:t,address:c,chain:p}};function o(t){return t?`${t.substring(0,6)}...${t.substring(t.length-4)}`:""}return{addressUser:u,chainUser:s,party:r,getAccount:l,shortenAddress:o}}),Te={class:"nav-bar"},ke={class:"container display-flex flex-row justify-between align-items-center"},De=e("span",null,[e("svg",{fill:"none",height:"44",width:"91",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M49.6 16.5c0-2.85 0-4.8.13-6.32a7.5 7.5 0 0 1 .63-2.86 7 7 0 0 1 3.06-3.06L52.06 1.6l1.36 2.67a7.5 7.5 0 0 1 2.86-.63c1.51-.13 3.47-.13 6.32-.13h12c2.85 0 4.8 0 6.32.13a7.5 7.5 0 0 1 2.86.63l1.36-2.67-1.36 2.67a7 7 0 0 1 3.06 3.06c.3.58.51 1.37.63 2.86.13 1.51.13 3.47.13 6.32v11c0 2.85 0 4.8-.13 6.32a7.5 7.5 0 0 1-.63 2.86 7 7 0 0 1-3.06 3.06 7.5 7.5 0 0 1-2.86.63c-1.51.13-3.47.13-6.32.13h-12c-2.85 0-4.8 0-6.32-.13a7.5 7.5 0 0 1-2.86-.63 7 7 0 0 1-3.06-3.06 7.5 7.5 0 0 1-.63-2.86 86.38 86.38 0 0 1-.13-6.32v-11Zm-46-8a5 5 0 1 1 10 0v27a5 5 0 0 1-10 0v-27Zm19 4c0-1.97 0-2.61.09-3.1a7 7 0 0 1 5.81-5.8 22.5 22.5 0 0 1 3.09-.09c1.97 0 2.61 0 3.1.09a7 7 0 0 1 5.81 5.8c.08.49.09 1.13.09 3.1v19c0 1.97 0 2.61-.09 3.1a7 7 0 0 1-5.81 5.81c-.49.08-1.13.09-3.1.09-1.97 0-2.61 0-3.1-.09a7 7 0 0 1-5.81-5.81c-.08-.49-.09-1.13-.09-3.1v-19Z",stroke:"#92FE75","stroke-width":"6"})])],-1),Pe={class:"nav-bar-wallet-btn-w display-flex flex-row align-items-center gap-16"},Ae={class:"display-flex flex-column"},$e={class:"display-flex gap-8"},Se=k({__name:"NavBar",setup(u){const s=Le(),{connect:r,connectors:l,isPending:o}=re(),{disconnect:t}=se(),{isConnected:c,address:p,chain:C}=s.getAccount(),y=pe(),x=d=>d?()=>A(fe,{size:"small",color:"#151518",round:!0,style:"margin: 4px; width: 24px; height: 24px;",src:d}):()=>A(T,{component:$}),H=J(()=>l.map(d=>({label:d.name,key:d.name,icon:x(d.icon)}))),q=d=>{const h=l.find(w=>w.name===d);h?r({connector:h}):y.warning("Failed connection attempt!")};return(d,h)=>{const w=V("RouterLink"),D=de,z=_e,G=W,U=me;return _(),j("header",Te,[e("nav",ke,[a(w,{class:"brand-logo",to:"/"},{default:i(()=>[De]),_:1}),e("div",null,[e("div",Pe,[n(c)?(_(),m(D,{key:0,loading:n(o),onClick:h[0]||(h[0]=F=>n(t)())},{icon:i(()=>[a(n(T),{component:n(Ce),depth:1,color:"#92FE75"},null,8,["component"])]),default:i(()=>[v(" Disconnect Wallet ")]),_:1},8,["loading"])):(_(),m(z,{key:1,options:H.value,"show-arrow":!0,size:"large",trigger:"click",onSelect:q},{default:i(()=>[a(D,{loading:n(o),round:""},{icon:i(()=>[a(n(T),{component:n($),depth:1,color:"#92FE75"},null,8,["component"])]),default:i(()=>[v(" Connect Wallet ")]),_:1},8,["loading"])]),_:1},8,["options"])),e("div",Ae,[n(c)?(_(),m(G,{key:0,style:{color:"#92fe75"},type:"success"},{default:i(()=>{var F;return[v(" Chain: "+b((F=n(C))==null?void 0:F.name),1)]}),_:1})):E("",!0),e("div",$e,[n(c)?(_(),m(U,{key:0,tooltip:!0,style:{"max-width":"100px",color:"white"}},{default:i(()=>[v(b(n(s).shortenAddress(n(p))),1)]),_:1})):E("",!0),n(p)?(_(),m(Ee,{key:1,address:n(p)},null,8,["address"])):E("",!0)])])])])])])}}}),M=(u,s)=>{const r=u.__vccOpts||u;for(const[l,o]of s)r[l]=o;return r},Re={},Ie={class:"footer-w display-flex align-items-center"},Ne={class:"container display-grid grid-cols-3 align-items-center"},Oe=e("p",null,"© revshareparty",-1),Be=e("nav",{class:"footer-nav-w justify-center"},[e("ul",{class:"footer-nav-holder display-flex flex-row gap-40 width-full justify-center"},[e("li",null,[e("a",null,"Newsletter")]),e("li",null,[e("a",null,"Whitepaper")]),e("li",null,[e("a",null,"Terms")]),e("li",null,[e("a",null,"Privacy")])])],-1),Ve={class:"display-flex flex-row gap-4 justify-end"},je={class:"social-footer pointer",title:"Join our community in X"},We={class:"social-footer pointer",title:"Follow the news in our Telegram channel"},Me={class:"social-footer pointer",title:"Join our Discord community"},He={class:"social-footer pointer",title:"Lets go check our videos"};function qe(u,s){const r=ge;return _(),j("footer",Ie,[e("div",Ne,[Oe,Be,e("ul",Ve,[e("li",null,[e("a",je,[a(r,{alt:"X",src:"./images/LogoX.svg"})])]),e("li",null,[e("a",We,[a(r,{alt:"Telegram",src:"./images/LogoTelegram.svg"})])]),e("li",null,[e("a",Me,[a(r,{alt:"Discord",src:"./images/LogoDiscord.svg"})])]),e("li",null,[e("a",He,[a(r,{alt:"Youtube",src:"./images/LogoYoutube.svg"})])])])])])}const ze=M(Re,[["render",qe]]),Ge={class:"main-content"},Ue=k({__name:"App",setup(u){oe("Rev Share Party");const s={common:{baseColor:"#fff",primaryColor:"#92FE75",primaryColorHover:"#92FE75",bodyColor:"#0F0F0F",borderColor:"#92FE75",textColor1:"#fff",textColor2:"#fff",textColor3:"#fff"},Button:{color:"#151518",textColor:"#92FE75",borderHover:"#8F75FE",borderFocus:"#8F75FE"},Dropdown:{color:"#151518",optionTextColor:"#FFF",optionColorHover:"#92FE75"},Tabs:{tabTextColorHoverSegment:"#fff",tabTextColorActiveBar:"#fff",tabTextColorLine:"rgba(255, 255, 255, 0.6)",tabFontSizeLarge:"16px",tabTextColorActiveLine:"#fff",barColor:"#fff",tabBorderColor:"rgba(233, 234, 236, 0.2)"},Table:{tdColor:"#0F0F0F",tdColorModal:"#C41E1EFF",tdColorPopover:"#fff",tdColorStriped:"#151518",thColor:"#151518",borderColor:"transparent"},Avatar:{borderRadius:"12px",border:"1px solid rgba(255, 255, 255, 0.2)"},Tag:{colorInfo:"rgba(233, 234, 236, 0.1)",textColorInfo:"#fff",borderRadius:"8px"},Modal:{color:"#151518"},Message:{color:"#151518",colorInfo:"#3D3D41",colorSuccess:"#3D3D41",colorLoading:"#3D3D41",iconColorSuccess:"#92FE75",colorError:"#3D3D41",colorWarning:"#3D3D41",textColor:"#fff",borderRadius:"12px",fontSize:"16px"},Input:{border:"1px solid #404042",placeholderColor:"#A1A1A3",textColor:"#92FE75",color:"#151518",colorFocus:"#151518",borderRadius:"12px",heightLarge:"52px"}};return(r,l)=>{const o=V("RouterView"),t=ve,c=ye,p=xe;return _(),m(n(he),null,{default:i(()=>[a(p,{"theme-overrides":s},{default:i(()=>[a(c,null,{default:i(()=>[a(Se),e("main",Ge,[a(o)]),a(ze),a(t)]),_:1})]),_:1})]),_:1})}}}),Ze=M(Ue,[["__scopeId","data-v-908c3264"]]),Je=we({history:Fe("/hackaton/"),routes:[{path:"/",name:"home",component:()=>L(()=>import("./HomeView-hKocgKXn.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]))},{path:"/create-party",name:"CreateParty",component:()=>L(()=>import("./CreatePartyView-BXIS2Mc2.js"),__vite__mapDeps([29,26,2,19,18,20,21,22,23,15,24,25,1,3,4,5,6,7,8,9,10,11,12,13,14,16,17,30]))},{path:"/party-page",name:"PartyPage",component:()=>L(()=>import("./PartyPageView-COlVJ-rk.js"),__vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,32]))}]}),Qe=ae({chains:[S,R,I,N,O,B],connectors:[ce()],transports:{[S.id]:f(),[R.id]:f(),[I.id]:f(),[N.id]:f(),[O.id]:f(),[B.id]:f()}}),Xe=new Y,g=Q(Ze);g.use(ie,{config:Qe});g.use(ee,{queryClient:Xe});g.use(K());g.use(Je);g.use(be);g.mount("#app");export{Le as u};