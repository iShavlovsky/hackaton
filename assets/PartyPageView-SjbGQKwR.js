import{e as C,S as b,h as w}from"./@vicons-CQyrKpPr.js";import{e as _,f as p,g as d,j as e,a3 as n,a2 as t,u as c,Q as g,c as $,r as j,a1 as r,a8 as S,F as z,Y as q}from"./@vue-CyX75HH2.js";import{f as h,N as v,m as A,o as N,q as Q}from"./naive-ui-KFCgUZf6.js";import{u as V}from"./vue-router-BVu52AFp.js";import"./seemly-D2wyWRjj.js";import"./vooks-e9-YowDj.js";import"./evtd-CI_DDEu_.js";import"./lodash-es-D1IKaXUS.js";import"./vueuc-DEvtCtA4.js";import"./@css-render-CT4uy2oC.js";import"./vdirs-Bxp-63WN.js";import"./@juggle-C8OzoCMD.js";import"./@emotion-WldOFDRm.js";import"./treemate-BD4Oer00.js";import"./date-fns-ByyCCKXE.js";import"./@babel-B0IGr_Mv.js";import"./date-fns-tz-D_KSBUZx.js";import"./async-validator-DKvM95Vc.js";const G={style:{"text-align":"center","vertical-align":"middle"}},I={style:{"vertical-align":"middle"}},L={class:"display-flex gap-16 align-items-center",style:{display:"flex","align-items":"center"}},P={class:"min-w-360px"},B={style:{"vertical-align":"middle"}},E={style:{"vertical-align":"middle"}},F={class:"display-flex gap-12 align-items-center"},J={type:"button"},M={class:"display-flex"},O={style:{"vertical-align":"middle"}},U={style:{"vertical-align":"middle"}},Y={class:"display-flex flex-column"},R={style:{"vertical-align":"middle"}},H={class:"display-flex flex-column gap-2"},K=_({__name:"ComradeTableElement",props:{index:{},party:{},username:{},type:{},address:{},share:{},yourTokens:{},yourTokensChange:{},oneDayTokens:{},oneDayTokensChange:{}},setup(k){return(s,l)=>{const i=h,m=v;return p(),d("tr",null,[e("td",G,n(s.index),1),e("td",I,[e("div",L,[t(i,{size:36,src:s.party.avatar,bordered:"",round:""},null,8,["src"]),e("p",P,n(s.username),1)])]),e("td",B,n(s.type),1),e("td",E,[e("div",F,[e("span",null,n(s.address),1),e("button",J,[e("span",M,[t(m,{component:c(C),depth:1,size:12,color:"#fff"},null,8,["component"])])])])]),e("td",O,n(s.share),1),e("td",U,[e("div",Y,[e("span",null,n(s.yourTokens),1),e("span",{style:g({color:s.yourTokensChange<0?"#fe7589":"#92fe75"})},n(s.yourTokensChange)+"%",5)])]),e("td",R,[e("div",H,[e("span",null,n(s.oneDayTokens),1),e("span",{style:g({color:s.oneDayTokensChange<0?"#fe7589":"#92fe75"})},n(s.oneDayTokensChange)+"% ",5)])])])}}}),W={class:"container main-container-padding"},X={class:"party-page-header-w display-flex justify-between p-tb-24px"},Z={class:"party-page-title-w max-w-840 display-flex gap-40"},ee=e("div",{class:"display-grid gap-8"},[e("h1",null,"Quantum Quest"),e("p",{class:"op-06"}," Join us for a game party where gamers unite to complete quests and earn Linea tokens. Team up, strategize, and conquer challenges together. Let's embark on this adventure and collect those tokens! ")],-1),se={class:"volume-party-w display-flex gap-8 align-self-end"},ae=S('<div class="display-grid grid-cols-3 gap-4"><div class="party-date-w display-grid gap-4"><p class="text-14px op-06">1D Volume</p><p>8 580</p></div><div class="party-date-w display-grid gap-4"><p class="text-14px op-06">Total earned</p><p>8 580</p></div><div class="party-date-w display-grid gap-4"><p class="text-14px op-06">People</p><p>8 580</p></div></div>',1),ne=e("span",{class:"text-16px"},"Invite",-1),te=e("thead",null,[e("tr",null,[e("th",{style:{"vertical-align":"top"}},"#"),e("th",{style:{"vertical-align":"top"}},"Username"),e("th",{style:{"vertical-align":"top"}},"Type"),e("th",{style:{"vertical-align":"top"}},"Address"),e("th",{style:{"vertical-align":"top"}},"Share"),e("th",{style:{"vertical-align":"top"}},"Your tokens"),e("th",{style:{"vertical-align":"top"}},"1D")])],-1),oe=e("div",null,null,-1),le={class:"quests-card-modal-content p-tb-24px mt-40"},re=e("div",{class:"display-grid gap-16"},[e("h1",{class:"text-center"},"Invite"),e("p",{class:"op-06 text-center"},"Each member type has its own invitation link. Don’t mix up!")],-1),ie={class:"display-grid gap-8 mt-40"},pe={class:"add-member display-flex justify-between align-items-center"},de=e("div",{class:"display-flex gap-16"},[e("div",{class:"member-revenue-w"},[e("p",{class:"op-06"},"15%")]),e("div",{class:"display-grid gap-2"},[e("p",null,"Telegram members"),e("p",{class:"text-16px op-06"},"Those who joined party via TG")])],-1),ce={class:"display-flex"},me=e("span",{class:"text-12px"},"Invite",-1),qe=_({__name:"PartyPageView",setup(k){const s=V();$(()=>s.params.slug);const l=j(!1),i=[{index:1,party:{avatar:"./images/avatar-main.jpg"},username:"@malamuth (you)",type:"Owner",address:"0x70AD...1D7af9",share:"20%",yourTokens:3069,yourTokensChange:-4,oneDayTokens:512,oneDayTokensChange:34},{index:2,party:{avatar:"./images/user5-1.jpg"},username:"@mitch",type:"Telegram members",address:"0x40AD...1hJaf4",share:"0.5%",yourTokens:234,yourTokensChange:8,oneDayTokens:12,oneDayTokensChange:6},{index:3,party:{avatar:"./images/user5.jpg"},username:"@Monster",type:"Telegram members",address:"0x90Ah...6D70bG",share:"0.5%",yourTokens:1234,yourTokensChange:18,oneDayTokens:212,oneDayTokensChange:7},{index:4,party:{avatar:"./images/user7.jpg"},username:"@Graydrak",type:"Telegram members",address:"0x70bG...7j7ak4",share:"0.5%",yourTokens:1376,yourTokensChange:-8,oneDayTokens:32,oneDayTokensChange:-2},{index:5,party:{avatar:"./images/user4.jpg"},username:"@rinaxdc",type:"Telegram members",address:"0x70AD...1D7af9",share:"0.5%",yourTokens:123,yourTokensChange:5,oneDayTokens:98,oneDayTokensChange:-1}];return(m,o)=>{const T=h,u=v,f=Q,x=A,D=N;return p(),d("section",null,[e("div",W,[e("div",X,[e("div",Z,[t(T,{size:120,bordered:"",class:"min-w-120px",src:"/images/QuantumQuestParty.jpg"}),ee]),e("div",se,[ae,e("button",{class:"main-custom-btn",onClick:o[0]||(o[0]=a=>l.value=!0)},[e("span",null,[t(u,{component:c(b),size:24,color:"currentColor"},null,8,["component"])]),ne])])]),t(x,{class:"table-w mt-40",vertical:""},{default:r(()=>[t(f,{class:"table-holder-party-page",striped:""},{default:r(()=>[te,e("tbody",null,[(p(),d(z,null,q(i,(a,y)=>t(K,{key:y,address:a.address,index:y+1,oneDayTokens:a.oneDayTokens,oneDayTokensChange:a.oneDayTokensChange,party:a.party,share:a.share,type:a.type,username:a.username,yourTokens:a.yourTokens,yourTokensChange:a.yourTokensChange},null,8,["address","index","oneDayTokens","oneDayTokensChange","party","share","type","username","yourTokens","yourTokensChange"])),64))])]),_:1})]),_:1})]),t(D,{show:l.value,"onUpdate:show":o[2]||(o[2]=a=>l.value=a),class:"quest-custom-modal modal-min-w-648",preset:"dialog",title:"Dialog"},{header:r(()=>[oe]),default:r(()=>[e("div",le,[re,e("div",ie,[e("div",pe,[de,e("div",null,[e("button",{class:"main-custom-btn small-btn",onClick:o[1]||(o[1]=a=>l.value=!0)},[e("span",ce,[t(u,{component:c(w),size:16,color:"currentColor"},null,8,["component"])]),me])])])])])]),_:1},8,["show"])])}}});export{qe as default};