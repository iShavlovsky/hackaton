import{S as de,C as ue,F as pe,L as K,a as W,b as _e,c as me,d as he,e as ge,A as ye}from"./@vicons-D7ptmEij.js";import{e as U,a4 as fe,f as i,g as c,j as e,a3 as n,a2 as t,a1 as r,s as h,Q as M,u as a,a5 as k,r as C,c as ve,q as ee,w as X,F as I,Y as L,a0 as N,a6 as Z,b as be,a7 as ke}from"./@vue-CA14Bhfh.js";import{f as Q,e as Y,N as H,u as te,l as xe,m as se,g as we,a as Be,o as Ae,p as $e,q as De,r as Ce}from"./naive-ui-ZfQSKBF9.js";import{u as je}from"./index-B_DPZa-8.js";import{a as Pe}from"./@vueuse-DDe9a6K5.js";import{a as ne}from"./abi-Bp99HW0C.js";import{a as ae,e as qe,f as ze}from"./@wagmi-Mrh7Gowl.js";import{R as Te}from"./vue-router-Ckoesiwk.js";import"./seemly-D2wyWRjj.js";import"./vooks-5LbGPu-y.js";import"./evtd-CI_DDEu_.js";import"./lodash-es-D1IKaXUS.js";import"./vueuc-DvhC_adR.js";import"./@css-render-DNgWC2BO.js";import"./vdirs-Bxp-63WN.js";import"./@juggle-C8OzoCMD.js";import"./@emotion-WldOFDRm.js";import"./treemate-BD4Oer00.js";import"./date-fns-ByyCCKXE.js";import"./@babel-B0IGr_Mv.js";import"./date-fns-tz-D_KSBUZx.js";import"./async-validator-DKvM95Vc.js";import"./pinia-CGNOT0MH.js";import"./@tanstack-Dj03aQiD.js";import"./viem-L8n_iVy8.js";import"./zustand-23CcGmLH.js";import"./eventemitter3-BYCAYZDL.js";import"./mipd-CIcDX0W7.js";const Se={style:{"text-align":"center","vertical-align":"middle"}},Ee={style:{"vertical-align":"middle"}},Ne={class:"display-flex gap-16 align-items-center",style:{display:"flex","align-items":"center"}},Ie={class:"display-flex flex-column gap-2"},Le={class:"max-w-360 op-06"},Je={style:{"vertical-align":"middle"}},Fe={class:"display-flex gap-8",style:{display:"flex","align-items":"center"}},Oe={style:{"vertical-align":"middle"}},Re={style:{"vertical-align":"middle"}},Ve={class:"display-flex flex-column"},Ge={style:{"vertical-align":"middle"}},Me={class:"display-flex flex-column"},Ue={style:{"vertical-align":"middle"}},Qe={class:"display-flex gap-8 width-full justify-end"},Ye={key:0,class:"main-custom-btn small-btn"},He=e("span",null,"Invite",-1),Ke={class:"display-flex"},We=U({__name:"PartiesTableElement",props:{index:{},party:{},owner:{},people:{},yourTokens:{},yourTokensPercentage:{},totalDistributed:{},totalDistributedPercentage:{}},setup(J){return(l,z)=>{const u=Q,x=Y,f=H,j=fe("RouterLink");return i(),c("tr",null,[e("td",Se,n(l.index),1),e("td",Ee,[e("div",Ne,[t(u,{size:64,src:l.party.avatar,bordered:"",class:"min-width-64"},null,8,["src"]),e("div",Ie,[e("h2",null,n(l.party.name),1),e("p",Le,[t(x,{"line-clamp":"1"},{default:r(()=>[h(n(l.party.description),1)]),_:1})])])])]),e("td",Je,[e("div",Fe,[t(u,{size:28,src:l.owner.avatar,bordered:"",round:""},null,8,["src"]),e("span",null,n(l.owner.name),1)])]),e("td",Oe,n(l.people),1),e("td",Re,[e("div",Ve,[e("span",null,n(l.yourTokens),1),e("span",{style:M({color:l.yourTokensPercentage<0?"#fe7589":"#92fe75"})},n(l.yourTokensPercentage)+"% ",5)])]),e("td",Ge,[e("div",Me,[e("span",null,n(l.totalDistributed),1),e("span",{style:M({color:l.totalDistributedPercentage<0?"#fe7589":"#92fe75"})},n(l.totalDistributedPercentage)+"% ",5)])]),e("td",Ue,[e("div",Qe,[l.owner.owner?(i(),c("button",Ye,[e("span",null,[t(f,{component:a(de),size:16,color:"currentColor"},null,8,["component"])]),He])):k("",!0),t(j,{class:"main-custom-btn gray-btn",to:"/party-page"},{default:r(()=>[e("span",Ke,[t(f,{component:a(ue),size:16,color:"currentColor"},null,8,["component"])])]),_:1})])])])}}}),Xe={class:"quests-card__header display-flex flex-column height-full justify-between"},Ze={class:"quests-card__title display-flex flex-column gap-2"},et={class:"op-06"},tt={class:"display-flex align-items-center justify-between mt-16"},st={class:"display-flex gap-4 align-items-center"},nt={class:"round-ico-w"},at={class:"text-12px"},ot={class:"display-flex align-items-center gap-8"},lt={class:"text-12px"},it={class:""},rt=e("div",null,null,-1),ct={class:"quests-card-modal-content"},dt={class:"quests-card-modal-head display-flex gap-40 align-items-center"},ut={class:"quests-card__header display-flex flex-column gap-6"},pt={class:"op-06"},_t={class:"display-flex gap-8"},mt={class:""},ht={class:"steps-all-w display-flex gap-20"},gt={class:"steps-sidebar-w display-flex flex-column gap-8"},yt={class:"reward-count-w display-flex flex-row justify-between"},ft={class:"display-grid align-self-center"},vt=e("p",null,"Reward",-1),bt={class:""},kt=e("div",{class:"padding-tb-8px"},[e("h3",null,"Finish all steps")],-1),xt={class:"steps-btns-wrapper display-grid gap-8"},wt=["disabled","onClick"],Bt={class:"display-flex align-items-center gap-8"},At={class:"step-ico display-flex align-items-center justify-center"},$t={class:"step-title"},Dt={class:"ico-w-28"},Ct={key:0,class:"step-lock"},jt={key:1,class:"step-check"},Pt={class:"display-flex align-items-center gap-8"},qt={class:"step-ico display-flex align-items-center justify-center"},zt=e("span",{class:"step-title text-color-brand-aviation"},"Claim rewards",-1),Tt={class:"ico-w-28"},St={key:0,class:"step-lock"},Et={key:1,class:"step-check"},Nt={class:"quests-modal-step-info width-full display-flex flex-column justify-end"},It={class:"text-center mb-92"},Lt=U({__name:"QuestCard",props:{card:{},lastParty:{}},emits:["setEvent"],setup(J,{emit:l}){const z="0x3aE5995509df0Bd125bA20593aA8A945E520e714",u=C(!1),x=te(),{address:f,chainId:j}=ae(),s=J,F=l,g=C(0),P=ve(()=>s.card.events[g.value]),p=C(!1),w=C(""),T=C("claim"),B=C([]),{data:q,error:O,isPending:S,isSuccess:A,isError:$,writeContract:D}=qe(),_=()=>{D({abi:ne,chainId:j.value,address:z,account:f.value,functionName:T.value,...B.value&&B.value.length?{args:B.value}:{}})},v=m=>{w.value=m.description},R=async(m,y)=>{T.value="claim",B.value=[m,y,"secret"],_()},V=async()=>{p.value&&await R(s.lastParty,"sd"),P.value&&(F("setEvent",{cardId:s.card.id,eventTitle:P.value.title}),P.value.status=!0,g.value<s.card.events.length-1?(g.value++,v(s.card.events[g.value])):p.value=!0)};return ee(()=>{v(s.card.events[0])}),X(()=>A.value,()=>{x.success(`Done ${q.value}`)}),X(()=>$.value,()=>{var m;x.error(`Error ${(m=O.value)==null?void 0:m.message}`)}),(m,y)=>{const o=Q,E=xe,oe=se,le=Y,b=H,ie=we,re=Be,ce=Ae;return i(),c("div",{class:"quests-card display-flex flex-column pointer",onClick:y[1]||(y[1]=d=>u.value=!0)},[t(o,{size:300,src:s.card.imageSrc,bordered:"",class:"quest-avatar-img pointer"},null,8,["src"]),t(oe,{class:"quests-card-tag-w"},{default:r(()=>[(i(!0),c(I,null,L(s.card.tags,d=>(i(),N(E,{key:d,bordered:!1,type:"info"},{default:r(()=>[h(n(d),1)]),_:2},1024))),128))]),_:1}),e("div",Xe,[e("div",Ze,[e("h2",null,n(s.card.title),1),e("p",et,[t(le,{"line-clamp":"1"},{default:r(()=>[h(n(s.card.description),1)]),_:1})])]),e("div",tt,[e("div",st,[e("div",nt,[t(b,{component:a(pe),size:16,class:"reward-ico",color:"#fff"},null,8,["component"])]),e("p",at,n(s.card.questSteps)+" steps",1)]),e("div",ot,[e("p",lt,[e("span",null,n(s.card.totalUsers),1),h(" users ")]),e("div",it,[t(o,{size:28,src:s.card.user1,bordered:"",class:"users-quest-avatar",round:""},null,8,["src"]),t(o,{size:28,src:s.card.user2,bordered:"",class:"users-quest-avatar",round:""},null,8,["src"]),t(o,{size:28,src:s.card.user3,bordered:"",class:"users-quest-avatar",round:""},null,8,["src"])])])])]),t(ce,{show:u.value,"onUpdate:show":y[0]||(y[0]=d=>u.value=d),class:"quest-custom-modal",preset:"dialog",title:"Dialog"},{header:r(()=>[rt]),default:r(()=>[t(re,{show:a(S)},{default:r(()=>[e("div",ct,[e("div",dt,[t(o,{size:120,src:s.card.imageSrc,bordered:""},null,8,["src"]),e("div",ut,[e("h2",null,n(s.card.title),1),e("p",pt,n(s.card.description),1),e("div",_t,[e("p",null,[e("span",null,n(s.card.totalUsers),1),h(" users ")]),e("div",mt,[t(o,{size:28,src:s.card.user1,bordered:"",class:"users-quest-avatar",round:""},null,8,["src"]),t(o,{size:28,src:s.card.user2,bordered:"",class:"users-quest-avatar",round:""},null,8,["src"]),t(o,{size:28,src:s.card.user3,bordered:"",class:"users-quest-avatar",round:""},null,8,["src"])])])])]),e("div",ht,[e("div",gt,[e("div",yt,[e("div",ft,[vt,e("h2",null,n(s.card.reward),1)]),e("div",bt,[t(ie,{alt:"You are the King",class:"reward-ico",src:"./images/korona.png"})])]),kt,e("div",xt,[(i(!0),c(I,null,L(s.card.events,(d,G)=>(i(),c("button",{key:d.title,class:Z(["quest-modal-step-btn display-flex flex-row align-items-center justify-between",{"active-step":g.value===G,"done-step":d.status}]),disabled:!d.status,onClick:Xt=>v(d)},[e("span",Bt,[e("span",At,n(G+1),1),e("span",$t,n(d.title),1)]),e("span",Dt,[g.value!=G&&!d.status?(i(),c("span",Ct,[t(b,{component:a(K),depth:1,size:16,color:"#fff"},null,8,["component"])])):k("",!0),d.status&&g.value?(i(),c("span",jt,[t(b,{component:a(W),depth:1,size:28,color:"#fff"},null,8,["component"])])):k("",!0)])],10,wt))),128)),e("button",{class:Z(["quest-modal-step-btn display-flex flex-row align-items-center justify-between",{"active-step":p.value,"done-step":p.value}])},[e("span",Pt,[e("span",qt,[t(b,{component:a(_e),depth:1,size:16,color:"#8F75FE"},null,8,["component"])]),zt]),e("span",Tt,[p.value?k("",!0):(i(),c("span",St,[t(b,{component:a(K),depth:1,size:16,color:"#fff"},null,8,["component"])])),p.value?(i(),c("span",Et,[t(b,{component:a(W),depth:1,size:28,color:"#fff"},null,8,["component"])])):k("",!0)])],2)])]),e("div",Nt,[e("h1",It,n(w.value),1),e("button",{style:M({backgroundColor:p.value?"#8f75fe":"#92FE75"}),class:"main-custom-btn",onClick:V},[e("span",null,[t(b,{component:a(me),depth:1,size:16,color:"currentColor"},null,8,["component"])]),e("span",null,n(p.value?"CLAIM!!!!":"Done"),1)],4)])])])]),_:1},8,["show"])]),_:1},8,["show"])])}}}),Jt={class:"container main-container-padding"},Ft={class:"home-hero-w display-flex flex-row gap-40 align-items-center p-tb-24px"},Ot={class:"display-flex flex-column gap-8"},Rt={class:"display-flex flex-row gap-8 align-items-center"},Vt=e("h1",null,"malamuth",-1),Gt={class:"tech-btn"},Mt={class:"display-flex flex-row gap-8 align-items-center op-06"},Ut=e("span",null,"RSC:",-1),Qt=e("thead",null,[e("tr",null,[e("th",{style:{"vertical-align":"top"}},"#"),e("th",{style:{"vertical-align":"top"}},"Party"),e("th",{style:{"vertical-align":"top"}},"Owner"),e("th",{style:{"vertical-align":"top"}},"People"),e("th",{style:{"vertical-align":"top"}},[h(" Your tokens "),e("br"),h(" 1D ")]),e("th",{style:{"vertical-align":"top"}},[h(" Total distributed "),e("br"),h(" 1D ")]),e("th")])],-1),Yt=e("div",{class:"px16-divider"},null,-1),Ht={class:"display-flex"},Kt=e("p",null,"Create party",-1),Wt={class:"quest-cards-list-w display-flex gap-8"},Ds=U({__name:"HomeView",setup(J){const l=je(),{isConnected:z,address:u,chainId:x}=ae(),f=te(),{text:j,copy:s,copied:F,isSupported:g}=Pe(),P=A=>{u.value&&s(A).then(()=>{F&&f.success(j.value)})},p="0x3aE5995509df0Bd125bA20593aA8A945E520e714",{data:w,refetch:T}=ze({abi:ne,chainId:x.value,address:p,account:u.value,functionName:"lastPartyId",query:{enabled:!0}}),B=async()=>{await T(),f.info(`last Party Id: ${w.value}`),console.log("last Party Id:",w.value)};ee(()=>{B()});const q=be([{id:2,imageSrc:"./images/apebol.jpg",title:"Buying Bonds on Linea with ApeBond",description:"Celebrate ApeBond's recent launch on the Linea Mainnet",tags:["NFT marketplace"],totalUsers:"4k",reward:"15 TBA",user1:"./images/user1.jpg",user2:"./images/user2.jpg",user3:"./images/user3.jpg",questSteps:4,events:[{title:"Intro to Ape Bond Value",description:"Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds",status:!1},{title:"Read Announcement",description:"Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds",status:!1},{title:"Join ApeBond on TG",description:"Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds",status:!1},{title:"Purchase a Bond via ApeBond",description:"Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds",status:!1}]},{id:4,imageSrc:"./images/linea.jpg",title:"Swapping on Linea",description:`Explore the Linea ecosystem and its top DEXes.
`,tags:["DeFi"],totalUsers:"435",reward:"15 TBA",user1:"./images/user4.jpg",user2:"./images/user5.jpg",user3:"./images/user5-1.jpg",questSteps:5,events:[{title:"Intro to Ape Bond Value",description:"Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds",status:!0},{title:"Read Announcement",description:"Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds",status:!1},{title:"Join ApeBond on Discord",description:"Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds",status:!1},{title:"Join ApeBond on TG",description:"Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds",status:!1},{title:"Purchase a Bond via ApeBond",description:"Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds",status:!1}]}]),O=({cardId:A,eventTitle:$})=>{const D=q.find(_=>_.id===A);if(D){const _=D.events.find(v=>v.title===$);_&&(_.status=!0)}},S=[{index:1,party:{avatar:"./images/party1.jpg",name:"Glitch & Glam",description:"It's time for a game party focused on Linea token quests! Join forces with other gamers, tackle challenges, and earn tokens together. Let's m"},owner:{avatar:"./images/user7.jpg",name:"@meuw",owner:!1},people:28,yourTokens:3069,yourTokensPercentage:-4,totalDistributed:15069,totalDistributedPercentage:34},{index:2,party:{avatar:"./images/party2.jpg",name:"Glitch & Glam",description:"Join us for a game party where gamers unite to complete quests and earn Linea tokens. Team up, strategize, and conquer challenges together. Let's embark on this adventure and collect those tokens!"},owner:{avatar:"./images/avatar-main.jpg",name:"@malamuth (you)",owner:!0},people:46,yourTokens:738,yourTokensPercentage:20,totalDistributed:2069,totalDistributedPercentage:7}];return(A,$)=>{const D=Q,_=H,v=Y,R=De,V=se,m=Ce,y=$e;return i(),c("section",null,[e("div",Jt,[e("div",Ft,[t(D,{size:120,round:"",src:"./images/avatar-main.jpg"}),e("div",Ot,[e("div",Rt,[Vt,e("button",Gt,[e("span",null,[t(_,{component:a(he),depth:1,size:24,color:"#fff"},null,8,["component"])])])]),e("div",Mt,[e("p",null,[Ut,a(z)?(i(),N(v,{key:0,tooltip:!0},{default:r(()=>[h(n(a(l).shortenAddress(a(u))),1)]),_:1})):k("",!0)]),a(g)&&a(u)?(i(),c("button",{key:0,class:"tech-btn",onClick:$[0]||($[0]=o=>P(a(u)))},[e("span",null,[t(_,{component:a(ge),depth:1,size:24,color:"#fff"},null,8,["component"])])])):k("",!0)])])]),e("div",null,[t(y,{animated:"",class:"card-tabs","default-value":"parties","pane-style":"padding-left: 4px; padding-right: 4px; box-sizing: border-box;","pane-wrapper-style":"margin: 0 -4px",size:"large",type:"line"},{default:r(()=>[t(m,{tab:`Parties ${S.length}`,name:"parties"},{default:r(()=>[t(V,{class:"table-w",vertical:""},{default:r(()=>[t(R,{class:"table-holder",striped:""},{default:r(()=>[Qt,e("tbody",null,[(i(),c(I,null,L(S,(o,E)=>t(We,{key:E,index:E+1,owner:o.owner,party:o.party,people:o.people,totalDistributed:o.totalDistributed,totalDistributedPercentage:o.totalDistributedPercentage,yourTokens:o.yourTokens,yourTokensPercentage:o.yourTokensPercentage},null,8,["index","owner","party","people","totalDistributed","totalDistributedPercentage","yourTokens","yourTokensPercentage"])),64))])]),_:1})]),_:1}),Yt,t(a(Te),{class:"main-custom-btn width-full",to:"/create-party"},{default:r(()=>[e("span",Ht,[t(_,{component:a(ye),depth:1,size:24,color:"currentColor"},null,8,["component"])]),Kt]),_:1})]),_:1},8,["tab"]),t(m,{tab:`Quests ${q.length}`,name:"quests"},{default:r(()=>[e("div",Wt,[(i(),N(ke,null,[(i(!0),c(I,null,L(q,o=>(i(),N(Lt,{key:o.id,card:o,lastParty:a(w),onSetEvent:O},null,8,["card","lastParty"]))),128))],1024))])]),_:1},8,["tab"])]),_:1})])])])}}});export{Ds as default};