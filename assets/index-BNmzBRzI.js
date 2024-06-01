const __vite__fileDeps=["assets/HomeView-CRPheSMi.js","assets/@vicons-CQyrKpPr.js","assets/@vue-CyX75HH2.js","assets/naive-ui-KFCgUZf6.js","assets/seemly-D2wyWRjj.js","assets/vooks-e9-YowDj.js","assets/evtd-CI_DDEu_.js","assets/lodash-es-D1IKaXUS.js","assets/vueuc-DEvtCtA4.js","assets/@css-render-CT4uy2oC.js","assets/vdirs-Bxp-63WN.js","assets/@juggle-C8OzoCMD.js","assets/@emotion-WldOFDRm.js","assets/treemate-BD4Oer00.js","assets/date-fns-ByyCCKXE.js","assets/@babel-B0IGr_Mv.js","assets/date-fns-tz-D_KSBUZx.js","assets/async-validator-DKvM95Vc.js","assets/@vueuse-j7LIZsgf.js","assets/abi-Bp99HW0C.js","assets/@wagmi-BZSUIKUR.js","assets/zustand-23CcGmLH.js","assets/viem-JszMgIpC.js","assets/eventemitter3-BYCAYZDL.js","assets/mipd-CIcDX0W7.js","assets/@tanstack-Y25bY9CG.js","assets/vue-router-BVu52AFp.js","assets/pinia-D4LGdsiM.js","assets/HomeView-DHt1taha.css","assets/CreatePartyView-Cl-6P1CD.js","assets/CreatePartyView-BzZjBEEZ.css","assets/PartyPageView-SjbGQKwR.js","assets/PartyPageView-B0INc7uF.css","assets/NotFoundPage-DV7JbPdT.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{e as T,f as m,a0 as _,a1 as d,a2 as u,x as y,a3 as B,u as a,r as j,b as R,w as X,c as Z,a4 as V,g as M,j as o,a5 as C,H as E,Z as K}from"./@vue-CyX75HH2.js";import{d as F,c as Y}from"./pinia-D4LGdsiM.js";import{Q as ee,V as te}from"./@tanstack-Y25bY9CG.js";import{u as oe,a as ne}from"./@vueuse-j7LIZsgf.js";import{u as se,a as re,b as ae,c as ie,_ as x,d as ce,i as le,W as ue}from"./@wagmi-BZSUIKUR.js";import{_ as q,a as de,b as pe,u as me,N as D,c as _e,d as ge,e as fe,f as he,g as ye,h as ve,i as be,j as xe,k as Be,n as we}from"./naive-ui-KFCgUZf6.js";import{U as Ae,W as S}from"./@vicons-CQyrKpPr.js";import{c as ke,a as Ce}from"./vue-router-BVu52AFp.js";import{j as P,k as N,l as O,o as $,q as J,u as I,v as g}from"./viem-JszMgIpC.js";import"./zustand-23CcGmLH.js";import"./eventemitter3-BYCAYZDL.js";import"./@babel-B0IGr_Mv.js";import"./mipd-CIcDX0W7.js";import"./seemly-D2wyWRjj.js";import"./vooks-e9-YowDj.js";import"./evtd-CI_DDEu_.js";import"./lodash-es-D1IKaXUS.js";import"./vueuc-DEvtCtA4.js";import"./@css-render-CT4uy2oC.js";import"./vdirs-Bxp-63WN.js";import"./@juggle-C8OzoCMD.js";import"./@emotion-WldOFDRm.js";import"./treemate-BD4Oer00.js";import"./date-fns-ByyCCKXE.js";import"./date-fns-tz-D_KSBUZx.js";import"./async-validator-DKvM95Vc.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const De=T({__name:"Balance",props:{address:{}},setup(i){const s=i,{data:n,isPending:r}=se({address:s.address,scopeKey:"use-balance"});return(e,t)=>{const c=q,l=de,w=pe;return m(),_(w,null,{default:d(()=>[u(l,{show:a(r)},{default:d(()=>[u(c,{type:"success"},{default:d(()=>{var v,b;return[y("Balance: "+B((v=a(n))==null?void 0:v.symbol)+" "+B((b=a(n))==null?void 0:b.value),1)]}),_:1})]),_:1},8,["show"])]),_:1})}}}),Te=F("main",()=>{const i=j(void 0),s=j(void 0),n=()=>{const{isConnected:e,address:t,chain:c}=re();return i.value=t.value,s.value=c.value,{isConnected:e,address:t,chain:c}};function r(e){return e?`${e.substring(0,6)}...${e.substring(e.length-4)}`:""}return{addressUser:i,chainUser:s,getAccount:n,shortenAddress:r}}),Ct=F("party",()=>{const i=[{index:1,party:{avatar:"./images/party1.jpg",name:"Glitch & Glam",description:"It's time for a game party focused on Linea token quests! Join forces with other gamers, tackle challenges, and earn tokens together. Let's m"},owner:{avatar:"./images/user7.jpg",name:"@meuw",owner:!1},share:null,partyMembers:[{id:"asdad",name:"Telegram members",description:"Those who joined party via TG",revenue:15}],people:28,yourTokens:3069,yourTokensPercentage:-4,totalDistributed:15069,totalDistributedPercentage:34},{index:1,party:{avatar:"./images/party2.jpg",name:"Glitch & Glam",description:"Join us for a game party where gamers unite to complete quests and earn Linea tokens. Team up, strategize, and conquer challenges together. Let's embark on this adventure and collect those tokens!"},owner:{avatar:"./images/avatar-main.jpg",name:"@malamuth (you)",owner:!0},share:null,partyMembers:[{id:"asdad",name:"Telegram members",description:"Those who joined party via TG",revenue:15}],people:46,yourTokens:738,yourTokensPercentage:20,totalDistributed:2069,totalDistributedPercentage:7}],s={read:t=>t?JSON.parse(t,(c,l)=>typeof l=="string"&&/^\d+n$/.test(l)?BigInt(l.slice(0,-1)):l):null,write:t=>JSON.stringify(t,(c,l)=>typeof l=="bigint"?`${l}n`:l)},n=oe("party",i,localStorage,{serializer:s,mergeDefaults:!0}),r=R(n.value||i);return X(()=>r,t=>{n.value=t},{deep:!0,immediate:!0}),{party:r,clearLocalStorage:()=>{localStorage.clear(),r.length=0,i.forEach(t=>r.push(t))}}}),Dt=F("quests",()=>{const i=R([{id:2,imageSrc:"./images/apebol.jpg",title:"Buying Bonds on Linea with ApeBond",description:"Celebrate ApeBond's recent launch on the Linea Mainnet",tags:["NFT marketplace"],totalUsers:"4k",reward:"15 TBA",user1:"./images/user1.jpg",user2:"./images/user2.jpg",user3:"./images/user3.jpg",questSteps:4,events:[{title:"Intro to Ape Bond Value",description:"Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds",status:!1},{title:"Read Announcement",description:"Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds",status:!1},{title:"Join ApeBond on TG",description:"Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds",status:!1},{title:"Purchase a Bond via ApeBond",description:"Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds",status:!1}]},{id:4,imageSrc:"./images/linea.jpg",title:"Swapping on Linea",description:`Explore the Linea ecosystem and its top DEXes.
`,tags:["DeFi"],totalUsers:"435",reward:"15 TBA",user1:"./images/user4.jpg",user2:"./images/user5.jpg",user3:"./images/user5-1.jpg",questSteps:5,events:[{title:"Intro to Ape Bond Value",description:"Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds",status:!0},{title:"Read Announcement",description:"Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds",status:!1},{title:"Join ApeBond on Discord",description:"Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds",status:!1},{title:"Join ApeBond on TG",description:"Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds",status:!1},{title:"Purchase a Bond via ApeBond",description:"Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds",status:!1}]}]);return{questCards:i,handleSetEvent:({cardId:n,eventTitle:r})=>{const e=i.find(t=>t.id===n);if(e){const t=e.events.find(c=>c.title===r);t&&(t.status=!0)}}}}),Fe={class:"nav-bar"},Le={class:"container display-flex flex-row justify-between align-items-center"},je=o("span",null,[o("svg",{fill:"none",height:"44",width:"91",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M49.6 16.5c0-2.85 0-4.8.13-6.32a7.5 7.5 0 0 1 .63-2.86 7 7 0 0 1 3.06-3.06L52.06 1.6l1.36 2.67a7.5 7.5 0 0 1 2.86-.63c1.51-.13 3.47-.13 6.32-.13h12c2.85 0 4.8 0 6.32.13a7.5 7.5 0 0 1 2.86.63l1.36-2.67-1.36 2.67a7 7 0 0 1 3.06 3.06c.3.58.51 1.37.63 2.86.13 1.51.13 3.47.13 6.32v11c0 2.85 0 4.8-.13 6.32a7.5 7.5 0 0 1-.63 2.86 7 7 0 0 1-3.06 3.06 7.5 7.5 0 0 1-2.86.63c-1.51.13-3.47.13-6.32.13h-12c-2.85 0-4.8 0-6.32-.13a7.5 7.5 0 0 1-2.86-.63 7 7 0 0 1-3.06-3.06 7.5 7.5 0 0 1-.63-2.86 86.38 86.38 0 0 1-.13-6.32v-11Zm-46-8a5 5 0 1 1 10 0v27a5 5 0 0 1-10 0v-27Zm19 4c0-1.97 0-2.61.09-3.1a7 7 0 0 1 5.81-5.8 22.5 22.5 0 0 1 3.09-.09c1.97 0 2.61 0 3.1.09a7 7 0 0 1 5.81 5.8c.08.49.09 1.13.09 3.1v19c0 1.97 0 2.61-.09 3.1a7 7 0 0 1-5.81 5.81c-.49.08-1.13.09-3.1.09-1.97 0-2.61 0-3.1-.09a7 7 0 0 1-5.81-5.81c-.08-.49-.09-1.13-.09-3.1v-19Z",stroke:"#92FE75","stroke-width":"6"})])],-1),Ee={class:"nav-bar-wallet-btn-w display-flex flex-row align-items-center gap-16"},Se={class:"display-flex flex-column"},Pe={class:"display-flex gap-8"},Ne=T({__name:"NavBar",setup(i){const s=Te(),{connect:n,connectors:r,isPending:e}=ae(),{disconnect:t}=ie(),{isConnected:c,address:l,chain:w}=s.getAccount(),v=me(),b=p=>p?()=>E(he,{size:"small",color:"#151518",round:!0,style:"margin: 4px; width: 24px; height: 24px;",src:p}):()=>E(D,{component:S}),G=Z(()=>r.map(p=>({label:p.name,key:p.name,icon:b(p.icon)}))),z=p=>{const h=r.find(A=>A.name===p);h?n({connector:h}):v.warning("Failed connection attempt!")};return(p,h)=>{const A=V("RouterLink"),L=_e,H=ge,U=q,Q=fe;return m(),M("header",Fe,[o("nav",Le,[u(A,{class:"brand-logo",to:"/"},{default:d(()=>[je]),_:1}),o("div",null,[o("div",Ee,[a(c)?(m(),_(L,{key:0,loading:a(e),onClick:h[0]||(h[0]=k=>a(t)())},{icon:d(()=>[u(a(D),{component:a(Ae),depth:1,color:"#92FE75"},null,8,["component"])]),default:d(()=>[y(" Disconnect Wallet ")]),_:1},8,["loading"])):(m(),_(H,{key:1,options:G.value,"show-arrow":!0,size:"large",trigger:"click",onSelect:z},{default:d(()=>[u(L,{loading:a(e),round:""},{icon:d(()=>[u(a(D),{component:a(S),depth:1,color:"#92FE75"},null,8,["component"])]),default:d(()=>[y(" Connect Wallet ")]),_:1},8,["loading"])]),_:1},8,["options"])),o("div",Se,[a(c)?(m(),_(U,{key:0,style:{color:"#92fe75"},type:"success"},{default:d(()=>{var k;return[y(" Chain: "+B((k=a(w))==null?void 0:k.name),1)]}),_:1})):C("",!0),o("div",Pe,[a(c)?(m(),_(Q,{key:0,tooltip:!0,style:{"max-width":"100px",color:"white"}},{default:d(()=>[y(B(a(s).shortenAddress(a(l))),1)]),_:1})):C("",!0),a(l)?(m(),_(De,{key:1,address:a(l)},null,8,["address"])):C("",!0)])])])])])])}}}),W=(i,s)=>{const n=i.__vccOpts||i;for(const[r,e]of s)n[r]=e;return n},Oe={},$e={class:"footer-w display-flex align-items-center"},Je={class:"container display-grid grid-cols-3 align-items-center"},Ie=o("p",null,"© revshareparty",-1),Re=o("nav",{class:"footer-nav-w justify-center"},[o("ul",{class:"footer-nav-holder display-flex flex-row gap-40 width-full justify-center"},[o("li",null,[o("a",null,"Newsletter")]),o("li",null,[o("a",null,"Whitepaper")]),o("li",null,[o("a",null,"Terms")]),o("li",null,[o("a",null,"Privacy")])])],-1),Ve={class:"display-flex flex-row gap-4 justify-end"},Me={class:"social-footer pointer",title:"Join our community in X"},qe={class:"social-footer pointer",title:"Follow the news in our Telegram channel"},We={class:"social-footer pointer",title:"Join our Discord community"},Ge={class:"social-footer pointer",title:"Lets go check our videos"};function ze(i,s){const n=ye;return m(),M("footer",$e,[o("div",Je,[Ie,Re,o("ul",Ve,[o("li",null,[o("a",Me,[u(n,{alt:"X",src:"./images/LogoX.svg"})])]),o("li",null,[o("a",qe,[u(n,{alt:"Telegram",src:"./images/LogoTelegram.svg"})])]),o("li",null,[o("a",We,[u(n,{alt:"Discord",src:"./images/LogoDiscord.svg"})])]),o("li",null,[o("a",Ge,[u(n,{alt:"Youtube",src:"./images/LogoYoutube.svg"})])])])])])}const He=W(Oe,[["render",ze]]),Ue={class:"main-content"},Qe=T({__name:"App",setup(i){ne("Rev Share Party");const s={common:{baseColor:"#fff",primaryColor:"#92FE75",primaryColorHover:"#92FE75",bodyColor:"#0F0F0F",borderColor:"#92FE75",textColor1:"#fff",textColor2:"#fff",textColor3:"#fff"},Button:{color:"#151518",textColor:"#92FE75",borderHover:"#8F75FE",borderFocus:"#8F75FE"},Dropdown:{color:"#151518",optionTextColor:"#FFF",optionColorHover:"#92FE75"},Tabs:{tabTextColorHoverSegment:"#fff",tabTextColorActiveBar:"#fff",tabTextColorLine:"rgba(255, 255, 255, 0.6)",tabFontSizeLarge:"16px",tabTextColorActiveLine:"#fff",barColor:"#fff",tabBorderColor:"rgba(233, 234, 236, 0.2)"},Table:{tdColor:"#0F0F0F",tdColorModal:"#C41E1EFF",tdColorPopover:"#fff",tdColorStriped:"#151518",thColor:"#151518",borderColor:"transparent"},Avatar:{borderRadius:"12px",border:"1px solid rgba(255, 255, 255, 0.2)"},Tag:{colorInfo:"rgba(233, 234, 236, 0.1)",textColorInfo:"#fff",borderRadius:"8px"},Modal:{color:"#151518"},Message:{color:"#151518",colorInfo:"#3D3D41",colorSuccess:"#3D3D41",colorLoading:"#3D3D41",iconColorSuccess:"#92FE75",colorError:"#3D3D41",colorWarning:"#3D3D41",textColor:"#fff",borderRadius:"12px",fontSize:"16px"},Input:{border:"1px solid #404042",placeholderColor:"#A1A1A3",textColor:"#92FE75",color:"#151518",colorFocus:"#151518",borderRadius:"12px",heightLarge:"52px"}};return(n,r)=>{const e=V("RouterView"),t=be,c=xe,l=Be;return m(),_(a(ve),null,{default:d(()=>[u(l,{"theme-overrides":s},{default:d(()=>[u(c,null,{default:d(()=>[u(Ne),o("main",Ue,[u(e)]),u(He),u(t)]),_:1})]),_:1})]),_:1})}}}),Xe=W(Qe,[["__scopeId","data-v-355e73c5"]]),Ze=ke({history:Ce("/hackaton/"),routes:[{path:"/",name:"home",component:()=>x(()=>import("./HomeView-CRPheSMi.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]))},{path:"/create-party",name:"createPartyView",component:()=>x(()=>import("./CreatePartyView-Cl-6P1CD.js"),__vite__mapDeps([29,26,2,19,18,20,21,22,23,15,24,25,1,3,4,5,6,7,8,9,10,11,12,13,14,16,17,27,30]))},{path:"/party-page/:id?",name:"partyPageView",component:()=>x(()=>import("./PartyPageView-SjbGQKwR.js"),__vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,26,32]))},{path:"/:pathMatch(.*)*",name:"404",component:()=>x(()=>import("./NotFoundPage-DV7JbPdT.js"),__vite__mapDeps([33,2]))}]}),Ke=ce({chains:[P,N,O,$,J,I],connectors:[le()],transports:{[P.id]:g(),[N.id]:g(),[O.id]:g(),[$.id]:g(),[J.id]:g(),[I.id]:g()}}),Ye=new ee,f=K(Xe);f.use(ue,{config:Ke});f.use(te,{queryClient:Ye});f.use(Y());f.use(Ze);f.use(we);f.mount("#app");export{Ct as a,Dt as b,Te as u};