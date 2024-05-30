import{c as V,s as Ae,p as Me}from"./zustand-D8op8QDx.js";import{g as D,U as _,R as Q,w as ke,a as $e,S as ie,n as ae,c as Ee,b as qe,m as We,r as Ue,C as pe,h as Be,t as De,f as ge,d as Re}from"./viem-ZbYiCKjV.js";import{E as xe}from"./eventemitter3-BYCAYZDL.js";import{c as Te}from"./mipd-CIcDX0W7.js";import{u as K,h as Fe,i as Ne,b as Ke,t as Le,d as U,o as $,a as me,c as W,r as B,v as ze}from"./@vue-DBQfeSov.js";import{u as He,a as ye}from"./@tanstack-C5HAI1j_.js";const Ve="modulepreload",Qe=function(e){return"/hackaton/"+e},ue={},Gt=function(n,t,r){let c=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),i=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));c=Promise.all(t.map(a=>{if(a=Qe(a),a in ue)return;ue[a]=!0;const u=a.endsWith(".css"),s=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${s}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Ve,u||(f.as="script",f.crossOrigin=""),f.href=a,i&&f.setAttribute("nonce",i),document.head.appendChild(f),u)return new Promise((d,g)=>{f.addEventListener("load",d),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})}))}return c.then(()=>n()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})};class Je{constructor(n){Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(this,"_emitter",{enumerable:!0,configurable:!0,writable:!0,value:new xe})}on(n,t){this._emitter.on(n,t)}once(n,t){this._emitter.once(n,t)}off(n,t){this._emitter.off(n,t)}emit(n,...t){const r=t[0];this._emitter.emit(n,{uid:this.uid,...r})}listenerCount(n){return this._emitter.listenerCount(n)}}function Ge(e){return new Je(e)}function Ze(e,n){return JSON.parse(e,(t,r)=>{let c=r;return(c==null?void 0:c.__type)==="bigint"&&(c=BigInt(c.value)),(c==null?void 0:c.__type)==="Map"&&(c=new Map(c.value)),(n==null?void 0:n(t,c))??c})}function le(e,n){return e.slice(0,n).join(".")||"."}function de(e,n){const{length:t}=e;for(let r=0;r<t;++r)if(e[r]===n)return r+1;return 0}function Xe(e,n){const t=typeof e=="function",r=typeof n=="function",c=[],o=[];return function(a,u){if(typeof u=="object")if(c.length){const s=de(c,this);s===0?c[c.length]=this:(c.splice(s),o.splice(s)),o[o.length]=a;const f=de(c,u);if(f!==0)return r?n.call(this,a,u,le(o,f)):`[ref=${le(o,f)}]`}else c[0]=u,o[0]=a;return t?e.call(this,a,u):u}}function Ye(e,n,t,r){return JSON.stringify(e,Xe((c,o)=>{let i=o;return typeof i=="bigint"&&(i={__type:"bigint",value:o.toString()}),i instanceof Map&&(i={__type:"Map",value:Array.from(o.entries())}),(n==null?void 0:n(c,i))??i},r),t??void 0)}function et(e){const{deserialize:n=Ze,key:t="wagmi",serialize:r=Ye,storage:c=be}=e;function o(i){return i instanceof Promise?i.then(a=>a).catch(()=>null):i}return{...c,key:t,async getItem(i,a){const u=c.getItem(`${t}.${i}`),s=await o(u);return s?n(s)??null:a??null},async setItem(i,a){const u=`${t}.${i}`;a===null?await o(c.removeItem(u)):await o(c.setItem(u,r(a)))},async removeItem(i){await o(c.removeItem(`${t}.${i}`))}}}const be={getItem:()=>null,setItem:()=>{},removeItem:()=>{}};const F="2.10.4",tt=()=>`@wagmi/core@${F}`;var we=function(e,n,t,r){if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof n=="function"?e!==n||!r:!n.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?r:t==="a"?r.call(e):r?r.value:n.get(e)},L,ve;let z=class X extends Error{get docsBaseUrl(){return"https://wagmi.sh/core"}get version(){return tt()}constructor(n,t={}){var o;super(),L.add(this),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiCoreError"});const r=t.cause instanceof X?t.cause.details:(o=t.cause)!=null&&o.message?t.cause.message:t.details,c=t.cause instanceof X&&t.cause.docsPath||t.docsPath;this.message=[n||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...c?[`Docs: ${this.docsBaseUrl}${c}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join(`
`),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=c,this.metaMessages=t.metaMessages,this.shortMessage=n}walk(n){return we(this,L,"m",ve).call(this,this,n)}};L=new WeakSet,ve=function e(n,t){return t!=null&&t(n)?n:n.cause?we(this,L,"m",e).call(this,n.cause,t):n};class Y extends z{constructor(){super("Chain not configured."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotConfiguredError"})}}class nt extends z{constructor(){super("Connector already connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAlreadyConnectedError"})}}class q extends z{constructor(){super("Provider not found."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderNotFoundError"})}}const rt=/(rabby|trustwallet)/,ct={coinbaseWallet:{id:"coinbaseWallet",name:"Coinbase Wallet",provider(e){return e!=null&&e.coinbaseWalletExtension?e.coinbaseWalletExtension:N(e,"isCoinbaseWallet")}},metaMask:{id:"metaMask",name:"MetaMask",provider(e){return N(e,n=>{if(!n.isMetaMask||n.isBraveWallet&&!n._events&&!n._state)return!1;const t=["isApexWallet","isAvalanche","isBitKeep","isBlockWallet","isKuCoinWallet","isMathWallet","isOkxWallet","isOKExWallet","isOneInchIOSWallet","isOneInchAndroidWallet","isOpera","isPortal","isRabby","isTokenPocket","isTokenary","isZerion"];for(const r of t)if(n[r])return!1;return!0})}},phantom:{id:"phantom",name:"Phantom",provider(e){var n,t;return(n=e==null?void 0:e.phantom)!=null&&n.ethereum?(t=e.phantom)==null?void 0:t.ethereum:N(e,"isPhantom")}}};re.type="injected";function re(e={}){const{shimDisconnect:n=!0,unstable_shimAsyncInject:t}=e;function r(){const u=e.target;if(typeof u=="function"){const s=u();if(s)return s}return typeof u=="object"?u:typeof u=="string"?{...ct[u]??{id:u,name:`${u[0].toUpperCase()}${u.slice(1)}`,provider:`is${u[0].toUpperCase()}${u.slice(1)}`}}:{id:"injected",name:"Injected",provider(s){return s==null?void 0:s.ethereum}}}let c,o,i,a;return u=>({get icon(){return r().icon},get id(){return r().id},get name(){return r().name},get supportsSimulation(){return rt.test(this.id.toLowerCase())},type:re.type,async setup(){const s=await this.getProvider();s&&e.target&&(i||(i=this.onConnect.bind(this),s.on("connect",i)),c||(c=this.onAccountsChanged.bind(this),s.on("accountsChanged",c)))},async connect({chainId:s,isReconnecting:f}={}){var v,m,S,y,C,O;const d=await this.getProvider();if(!d)throw new q;let g=[];if(f)g=await this.getAccounts().catch(()=>[]);else if(n)try{g=(y=(S=(m=(v=(await d.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]}))[0])==null?void 0:v.caveats)==null?void 0:m[0])==null?void 0:S.value)==null?void 0:y.map(l=>D(l))}catch(I){const l=I;if(l.code===_.code)throw new _(l);if(l.code===Q.code)throw l}try{!(g!=null&&g.length)&&!f&&(g=(await d.request({method:"eth_requestAccounts"})).map(p=>D(p))),i&&(d.removeListener("connect",i),i=void 0),c||(c=this.onAccountsChanged.bind(this),d.on("accountsChanged",c)),o||(o=this.onChainChanged.bind(this),d.on("chainChanged",o)),a||(a=this.onDisconnect.bind(this),d.on("disconnect",a));let I=await this.getChainId();if(s&&I!==s){const l=await this.switchChain({chainId:s}).catch(p=>{if(p.code===_.code)throw p;return{id:I}});I=(l==null?void 0:l.id)??I}return n&&await((C=u.storage)==null?void 0:C.removeItem(`${this.id}.disconnected`)),e.target||await((O=u.storage)==null?void 0:O.setItem("injected.connected",!0)),{accounts:g,chainId:I}}catch(I){const l=I;throw l.code===_.code?new _(l):l.code===Q.code?new Q(l):l}},async disconnect(){var f,d;const s=await this.getProvider();if(!s)throw new q;o&&(s.removeListener("chainChanged",o),o=void 0),a&&(s.removeListener("disconnect",a),a=void 0),i||(i=this.onConnect.bind(this),s.on("connect",i));try{await s.request({method:"wallet_revokePermissions",params:[{eth_accounts:{}}]})}catch{}n&&await((f=u.storage)==null?void 0:f.setItem(`${this.id}.disconnected`,!0)),e.target||await((d=u.storage)==null?void 0:d.removeItem("injected.connected"))},async getAccounts(){const s=await this.getProvider();if(!s)throw new q;return(await s.request({method:"eth_accounts"})).map(d=>D(d))},async getChainId(){const s=await this.getProvider();if(!s)throw new q;const f=await s.request({method:"eth_chainId"});return Number(f)},async getProvider(){if(typeof window>"u")return;let s;const f=r();return typeof f.provider=="function"?s=f.provider(window):typeof f.provider=="string"?s=N(window,f.provider):s=f.provider,s&&!s.removeListener&&("off"in s&&typeof s.off=="function"?s.removeListener=s.off:s.removeListener=()=>{}),s},async isAuthorized(){var s,f;try{if(n&&await((s=u.storage)==null?void 0:s.getItem(`${this.id}.disconnected`))||!e.target&&!await((f=u.storage)==null?void 0:f.getItem("injected.connected")))return!1;if(!await this.getProvider()){if(t!==void 0&&t!==!1){const m=async()=>(typeof window<"u"&&window.removeEventListener("ethereum#initialized",m),!!await this.getProvider()),S=typeof t=="number"?t:1e3;if(await Promise.race([...typeof window<"u"?[new Promise(C=>window.addEventListener("ethereum#initialized",()=>C(m()),{once:!0}))]:[],new Promise(C=>setTimeout(()=>C(m()),S))]))return!0}throw new q}return!!(await ke(()=>$e(()=>this.getAccounts(),{timeout:100}))).length}catch{return!1}},async switchChain({addEthereumChainParameter:s,chainId:f}){var v,m,S,y;const d=await this.getProvider();if(!d)throw new q;const g=u.chains.find(C=>C.id===f);if(!g)throw new ie(new Y);try{return await Promise.all([d.request({method:"wallet_switchEthereumChain",params:[{chainId:ae(f)}]}).then(async()=>{await this.getChainId()===f&&u.emitter.emit("change",{chainId:f})}),new Promise(C=>u.emitter.once("change",({chainId:O})=>{O===f&&C()}))]),g}catch(C){const O=C;if(O.code===4902||((m=(v=O==null?void 0:O.data)==null?void 0:v.originalError)==null?void 0:m.code)===4902)try{const{default:I,...l}=g.blockExplorers??{};let p;s!=null&&s.blockExplorerUrls?p=s.blockExplorerUrls:I&&(p=[I.url,...Object.values(l).map(E=>E.url)]);let h;(S=s==null?void 0:s.rpcUrls)!=null&&S.length?h=s.rpcUrls:h=[((y=g.rpcUrls.default)==null?void 0:y.http[0])??""];const b={blockExplorerUrls:p,chainId:ae(f),chainName:(s==null?void 0:s.chainName)??g.name,iconUrls:s==null?void 0:s.iconUrls,nativeCurrency:(s==null?void 0:s.nativeCurrency)??g.nativeCurrency,rpcUrls:h};if(await d.request({method:"wallet_addEthereumChain",params:[b]}),await this.getChainId()!==f)throw new _(new Error("User rejected switch after adding network."));return g}catch(I){throw new _(I)}throw O.code===_.code?new _(O):new ie(O)}},async onAccountsChanged(s){var f;if(s.length===0)this.onDisconnect();else if(u.emitter.listenerCount("connect")){const d=(await this.getChainId()).toString();this.onConnect({chainId:d}),n&&await((f=u.storage)==null?void 0:f.removeItem(`${this.id}.disconnected`))}else u.emitter.emit("change",{accounts:s.map(d=>D(d))})},onChainChanged(s){const f=Number(s);u.emitter.emit("change",{chainId:f})},async onConnect(s){const f=await this.getAccounts();if(f.length===0)return;const d=Number(s.chainId);u.emitter.emit("connect",{accounts:f,chainId:d});const g=await this.getProvider();g&&(i&&(g.removeListener("connect",i),i=void 0),c||(c=this.onAccountsChanged.bind(this),g.on("accountsChanged",c)),o||(o=this.onChainChanged.bind(this),g.on("chainChanged",o)),a||(a=this.onDisconnect.bind(this),g.on("disconnect",a)))},async onDisconnect(s){const f=await this.getProvider();s&&s.code===1013&&f&&(await this.getAccounts()).length||(u.emitter.emit("disconnect"),f&&(o&&(f.removeListener("chainChanged",o),o=void 0),a&&(f.removeListener("disconnect",a),a=void 0),i||(i=this.onConnect.bind(this),f.on("connect",i))))}})}function N(e,n){function t(c){return typeof n=="function"?n(c):typeof n=="string"?c[n]:!0}const r=e.ethereum;if(r!=null&&r.providers)return r.providers.find(c=>t(c));if(r&&t(r))return r}const ee=256;let R=ee,x;function ot(e=11){if(!x||R+e>ee*2){x="",R=0;for(let n=0;n<ee;n++)x+=(256+Math.random()*256|0).toString(16).substring(1)}return x.substring(R,R+++e)}function Zt(e){const{multiInjectedProviderDiscovery:n=!0,storage:t=et({storage:typeof window<"u"&&window.localStorage?window.localStorage:be}),syncConnectedChain:r=!0,ssr:c,...o}=e,i=typeof window<"u"&&n?Te():void 0,a=V(()=>o.chains),u=V(()=>[...o.connectors??[],...c?[]:(i==null?void 0:i.getProviders().map(f))??[]].map(s));function s(l){var b;const p=Ge(ot()),h={...l({emitter:p,chains:a.getState(),storage:t}),emitter:p,uid:p.uid};return p.on("connect",O),(b=h.setup)==null||b.call(h),h}function f(l){const{info:p}=l,h=l.provider;return re({target:{...p,id:p.rdns,provider:h}})}const d=new Map;function g(l={}){const p=l.chainId??y.getState().chainId,h=a.getState().find(w=>w.id===p);if(l.chainId&&!h)throw new Y;{const w=d.get(y.getState().chainId);if(w&&!h)return w;if(!h)throw new Y}{const w=d.get(p);if(w)return w}let b;if(o.client)b=o.client({chain:h});else{const w=h.id,E=a.getState().map(j=>j.id),A={},H=Object.entries(o);for(const[j,M]of H)if(!(j==="chains"||j==="client"||j==="connectors"||j==="transports"))if(typeof M=="object")if(w in M)A[j]=M[w];else{if(E.some(se=>se in M))continue;A[j]=M}else A[j]=M;b=Ee({...A,chain:h,batch:A.batch??{multicall:!0},transport:j=>o.transports[w]({...j,connectors:u})})}return d.set(p,b),b}function v(){return{chainId:a.getState()[0].id,connections:new Map,current:null,status:"disconnected"}}let m;const S="0.0.0-canary-";F.startsWith(S)?m=parseInt(F.replace(S,"")):m=parseInt(F.split(".")[0]??"0");const y=V(Ae(t?Me(v,{migrate(l,p){if(p===m)return l;const h=v(),b=l&&typeof l=="object"&&"chainId"in l&&typeof l.chainId=="number"?l.chainId:h.chainId;return{...h,chainId:b}},name:"store",partialize(l){return{connections:{__type:"Map",value:Array.from(l.connections.entries()).map(([p,h])=>{const{id:b,name:w,type:E,uid:A}=h.connector;return[p,{...h,connector:{id:b,name:w,type:E,uid:A}}]})},chainId:l.chainId,current:l.current}},skipHydration:c,storage:t,version:m}):v));r&&y.subscribe(({connections:l,current:p})=>{var h;return p?(h=l.get(p))==null?void 0:h.chainId:void 0},l=>{if(a.getState().some(h=>h.id===l))return y.setState(h=>({...h,chainId:l??h.chainId}))}),i==null||i.subscribe(l=>{const p=new Map;for(const b of u.getState())p.set(b.id,!0);const h=[];for(const b of l){const w=s(f(b));p.has(w.id)||h.push(w)}t&&!y.persist.hasHydrated()||u.setState(b=>[...b,...h],!0)});function C(l){y.setState(p=>{const h=p.connections.get(l.uid);return h?{...p,connections:new Map(p.connections).set(l.uid,{accounts:l.accounts??h.accounts,chainId:l.chainId??h.chainId,connector:h.connector})}:p})}function O(l){y.getState().status==="connecting"||y.getState().status==="reconnecting"||y.setState(p=>{const h=u.getState().find(b=>b.uid===l.uid);return h?(h.emitter.listenerCount("connect")&&h.emitter.off("connect",C),h.emitter.listenerCount("change")||h.emitter.on("change",C),h.emitter.listenerCount("disconnect")||h.emitter.on("disconnect",I),{...p,connections:new Map(p.connections).set(l.uid,{accounts:l.accounts,chainId:l.chainId,connector:h}),current:l.uid,status:"connected"}):p})}function I(l){y.setState(p=>{const h=p.connections.get(l.uid);if(h){const w=h.connector;w.emitter.listenerCount("change")&&h.connector.emitter.off("change",C),w.emitter.listenerCount("disconnect")&&h.connector.emitter.off("disconnect",I),w.emitter.listenerCount("connect")||h.connector.emitter.on("connect",O)}if(p.connections.delete(l.uid),p.connections.size===0)return{...p,connections:new Map,current:null,status:"disconnected"};const b=p.connections.values().next().value;return{...p,connections:new Map(p.connections),current:b.connector.uid}})}return{get chains(){return a.getState()},get connectors(){return u.getState()},storage:t,getClient:g,get state(){return y.getState()},setState(l){let p;typeof l=="function"?p=l(y.getState()):p=l;const h=v();typeof p!="object"&&(p=h),Object.keys(h).some(w=>!(w in p))&&(p=h),y.setState(p,!0)},subscribe(l,p,h){return y.subscribe(l,p,h?{...h,fireImmediately:h.emitImmediately}:void 0)},_internal:{mipd:i,store:y,ssr:!!c,syncConnectedChain:r,transports:o.transports,chains:{setState(l){const p=typeof l=="function"?l(a.getState()):l;if(p.length!==0)return a.setState(p,!0)},subscribe(l){return a.subscribe(l)}},connectors:{providerDetailToConnector:f,setup:s,setState(l){return u.setState(typeof l=="function"?l(u.getState()):l,!0)},subscribe(l){return u.subscribe(l)}},events:{change:C,connect:O,disconnect:I}}}}function ce(e,n,t){const r=e[n.name];if(typeof r=="function")return r;const c=e[t];return typeof c=="function"?c:o=>n(e,o)}async function st(e,n){var r;let t;if(typeof n.connector=="function"?t=e._internal.connectors.setup(n.connector):t=n.connector,t.uid===e.state.current)throw new nt;try{e.setState(i=>({...i,status:"connecting"})),t.emitter.emit("message",{type:"connecting"});const c=await t.connect({chainId:n.chainId}),o=c.accounts;return t.emitter.off("connect",e._internal.events.connect),t.emitter.on("change",e._internal.events.change),t.emitter.on("disconnect",e._internal.events.disconnect),await((r=e.storage)==null?void 0:r.setItem("recentConnectorId",t.id)),e.setState(i=>({...i,connections:new Map(i.connections).set(t.uid,{accounts:o,chainId:c.chainId,connector:t}),current:t.uid,status:"connected"})),{accounts:o,chainId:c.chainId}}catch(c){throw e.setState(o=>({...o,status:o.current?"connected":"disconnected"})),c}}async function it(e,n={}){var c,o;let t;if(n.connector)t=n.connector;else{const{connections:i,current:a}=e.state,u=i.get(a);t=u==null?void 0:u.connector}const r=e.state.connections;t&&(await t.disconnect(),t.emitter.off("change",e._internal.events.change),t.emitter.off("disconnect",e._internal.events.disconnect),t.emitter.on("connect",e._internal.events.connect),r.delete(t.uid)),e.setState(i=>{if(r.size===0)return{...i,connections:new Map,current:null,status:"disconnected"};const a=r.values().next().value;return{...i,connections:new Map(r),current:a.connector.uid}});{const i=e.state.current;if(!i)return;const a=(c=e.state.connections.get(i))==null?void 0:c.connector;if(!a)return;await((o=e.storage)==null?void 0:o.setItem("recentConnectorId",a.id))}}function Ce(e){return typeof e=="number"?e:e==="wei"?0:Math.abs(qe[e])}function Ie(e){const n=e.state.current,t=e.state.connections.get(n),r=t==null?void 0:t.accounts,c=r==null?void 0:r[0],o=e.chains.find(a=>a.id===(t==null?void 0:t.chainId)),i=e.state.status;switch(i){case"connected":return{address:c,addresses:r,chain:o,chainId:t==null?void 0:t.chainId,connector:t==null?void 0:t.connector,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:i};case"reconnecting":return{address:c,addresses:r,chain:o,chainId:t==null?void 0:t.chainId,connector:t==null?void 0:t.connector,isConnected:!!c,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:i};case"connecting":return{address:c,addresses:r,chain:o,chainId:t==null?void 0:t.chainId,connector:t==null?void 0:t.connector,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:i};case"disconnected":return{address:void 0,addresses:void 0,chain:void 0,chainId:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:i}}}async function at(e,n){const{allowFailure:t=!0,chainId:r,contracts:c,...o}=n,i=e.getClient({chainId:r});return ce(i,We,"multicall")({allowFailure:t,contracts:c,...o})}function ut(e,n){const{chainId:t,...r}=n,c=e.getClient({chainId:t});return ce(c,Ue,"readContract")(r)}async function lt(e,n){const{allowFailure:t=!0,blockNumber:r,blockTag:c,...o}=n,i=n.contracts;try{const a=i.reduce((d,g,v)=>{const m=g.chainId??e.state.chainId;return{...d,[m]:[...d[m]||[],{contract:g,index:v}]}},{}),u=()=>Object.entries(a).map(([d,g])=>at(e,{...o,allowFailure:t,blockNumber:r,blockTag:c,chainId:parseInt(d),contracts:g.map(({contract:v})=>v)})),s=(await Promise.all(u())).flat(),f=Object.values(a).flatMap(d=>d.map(({index:g})=>g));return s.reduce((d,g,v)=>(d&&(d[f[v]]=g),d),[])}catch(a){if(a instanceof pe)throw a;const u=()=>i.map(s=>ut(e,{...s,blockNumber:r,blockTag:c}));return t?(await Promise.allSettled(u())).map(s=>s.status==="fulfilled"?{result:s.value,status:"success"}:{error:s.reason,result:void 0,status:"failure"}):await Promise.all(u())}}async function dt(e,n){const{address:t,blockNumber:r,blockTag:c,chainId:o,token:i,unit:a="ether"}=n;if(i)try{return fe(e,{balanceAddress:t,chainId:o,symbolType:"string",tokenAddress:i})}catch(g){if(g instanceof pe){const v=await fe(e,{balanceAddress:t,chainId:o,symbolType:"bytes32",tokenAddress:i}),m=Be(De(v.symbol,{dir:"right"}));return{...v,symbol:m}}throw g}const u=e.getClient({chainId:o}),f=await ce(u,Re,"getBalance")(r?{address:t,blockNumber:r}:{address:t,blockTag:c}),d=e.chains.find(g=>g.id===o)??u.chain;return{decimals:d.nativeCurrency.decimals,formatted:ge(f,Ce(a)),symbol:d.nativeCurrency.symbol,value:f}}async function fe(e,n){const{balanceAddress:t,chainId:r,symbolType:c,tokenAddress:o,unit:i}=n,a={abi:[{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:c}]}],address:o},[u,s,f]=await lt(e,{allowFailure:!1,contracts:[{...a,functionName:"balanceOf",args:[t],chainId:r},{...a,functionName:"decimals",chainId:r},{...a,functionName:"symbol",chainId:r}]}),d=ge(u??"0",Ce(i??s));return{decimals:s,formatted:d,symbol:f,value:u}}function ft(e){return e.state.chainId}function k(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;let t,r;if(Array.isArray(e)&&Array.isArray(n)){if(t=e.length,t!==n.length)return!1;for(r=t;r--!==0;)if(!k(e[r],n[r]))return!1;return!0}if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();const c=Object.keys(e);if(t=c.length,t!==Object.keys(n).length)return!1;for(r=t;r--!==0;)if(!Object.prototype.hasOwnProperty.call(n,c[r]))return!1;for(r=t;r--!==0;){const o=c[r];if(o&&!k(e[o],n[o]))return!1}return!0}return e!==e&&n!==n}let J=[];function ht(e){const n=e.chains;return k(J,n)?J:(J=n,n)}function te(e,n={}){let t;try{t=e.getClient(n)}catch{}return t}let T=[];function Se(e){const n=[...e.state.connections.values()];return e.state.status==="reconnecting"||k(T,n)?T:(T=n,n)}let G=[];function pt(e){const n=e.connectors;return k(G,n)?G:(G=n,n)}let Z=!1;async function gt(e,n={}){var s,f;if(Z)return[];Z=!0,e.setState(d=>({...d,status:d.current?"reconnecting":"connecting"}));const t=[];if((s=n.connectors)!=null&&s.length)for(const d of n.connectors){let g;typeof d=="function"?g=e._internal.connectors.setup(d):g=d,t.push(g)}else t.push(...e.connectors);let r;try{r=await((f=e.storage)==null?void 0:f.getItem("recentConnectorId"))}catch{}const c={};for(const[,d]of e.state.connections)c[d.connector.id]=1;r&&(c[r]=0);const o=Object.keys(c).length>0?[...t].sort((d,g)=>(c[d.id]??10)-(c[g.id]??10)):t;let i=!1;const a=[],u=[];for(const d of o){const g=await d.getProvider().catch(()=>{});if(!g||u.some(S=>S===g)||!await d.isAuthorized())continue;const m=await d.connect({isReconnecting:!0}).catch(()=>null);m&&(d.emitter.off("connect",e._internal.events.connect),d.emitter.on("change",e._internal.events.change),d.emitter.on("disconnect",e._internal.events.disconnect),e.setState(S=>{const y=new Map(i?S.connections:new Map).set(d.uid,{accounts:m.accounts,chainId:m.chainId,connector:d});return{...S,current:i?S.current:d.uid,connections:y}}),a.push({accounts:m.accounts,chainId:m.chainId,connector:d}),u.push(g),i=!0)}return(e.state.status==="reconnecting"||e.state.status==="connecting")&&(i?e.setState(d=>({...d,status:"connected"})):e.setState(d=>({...d,connections:new Map,current:null,status:"disconnected"}))),Z=!1,a}function mt(e,n){const{onChange:t}=n;return e.subscribe(()=>Ie(e),t,{equalityFn(r,c){const{connector:o,...i}=r,{connector:a,...u}=c;return k(i,u)&&(o==null?void 0:o.id)===(a==null?void 0:a.id)&&(o==null?void 0:o.uid)===(a==null?void 0:a.uid)}})}function yt(e,n){const{onChange:t}=n;return e.subscribe(r=>r.chainId,t)}function bt(e,n){const{onChange:t}=n;return e.subscribe(()=>te(e),t,{equalityFn(r,c){return(r==null?void 0:r.uid)===(c==null?void 0:c.uid)}})}function wt(e,n){const{onChange:t}=n;return e.subscribe(()=>Se(e),t,{equalityFn:k})}function vt(e,n){const{onChange:t}=n;return e._internal.connectors.subscribe((r,c)=>{t(Object.values(r),c)})}function Ct(e,n){const{initialState:t,reconnectOnMount:r}=n;return t&&!e._internal.store.persist.hasHydrated()&&e.setState({...t,connections:r?t.connections:new Map,status:r?"reconnecting":"disconnected"}),{async onMount(){var c;if(e._internal.ssr){await e._internal.store.persist.rehydrate();const o=(c=e._internal.mipd)==null?void 0:c.getProviders().map(e._internal.connectors.providerDetailToConnector).map(e._internal.connectors.setup);e._internal.connectors.setState(i=>[...i,...o??[]])}r?gt(e):e.storage&&e.setState(o=>({...o,connections:new Map}))}}}const Oe=Symbol(),Xt={install(e,n){const{config:t,reconnectOnMount:r=!0}=n;e.provide(Oe,t);const{onMount:c}=Ct(t,{...n,reconnectOnMount:r});c()}},It="0.0.10",St=()=>`@wagmi/vue@${It}`;class je extends z{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiError"})}get docsBaseUrl(){return"https://wagmi.sh/vue"}get version(){return St()}}class Ot extends je{constructor(){super("No `config` found in Vue context, use `WagmiPlugin` to properly initialize the library.",{docsPath:"/api/TODO"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiPluginNotFoundError"})}}class jt extends je{constructor(){super("Wagmi composables can only be used inside `setup()` function or functions that support injection context.",{docsPath:"/api/TODO"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiInjectionContextError"})}}function _t(e,n){Object.keys(e).forEach(t=>{e[t]=n[t]})}function P(e={}){const n=K(e);if(n.config)return n.config;if(!Fe())throw new jt;const t=Ne(Oe);if(!t)throw new Ot;return t}function Yt(e={}){const n=P(e),t=Ke(Ie(n)),r=mt(n,{onChange(c){_t(t,c)}});return $(()=>r()),Le(U(t))}function ne(e,n){if(n){const t=n(e);if(t===void 0&&me(e)||t!==void 0)return t}if(Array.isArray(e))return e.map(t=>ne(t,n));if(typeof e=="object"&&Pt(e)){const t=Object.entries(e).map(([r,c])=>[r,ne(c,n)]);return Object.fromEntries(t)}return e}function oe(e){return ne(e,n=>{if(me(n))return oe(K(n))})}function Pt(e){if(Object.prototype.toString.call(e)!=="[object Object]")return!1;const n=Object.getPrototypeOf(e);return n===null||n===Object.prototype}function At(e){return JSON.stringify(e,(n,t)=>Mt(t)?Object.keys(t).sort().reduce((r,c)=>(r[c]=t[c],r),{}):typeof t=="bigint"?t.toString():t)}function Mt(e){if(!he(e))return!1;const n=e.constructor;if(typeof n>"u")return!0;const t=n.prototype;return!(!he(t)||!t.hasOwnProperty("isPrototypeOf"))}function he(e){return Object.prototype.toString.call(e)==="[object Object]"}function kt(e){const{_defaulted:n,behavior:t,gcTime:r,initialData:c,initialDataUpdatedAt:o,maxPages:i,meta:a,networkMode:u,queryFn:s,queryHash:f,queryKey:d,queryKeyHashFn:g,retry:v,retryDelay:m,structuralSharing:S,getPreviousPageParam:y,getNextPageParam:C,initialPageParam:O,_optimisticResults:I,enabled:l,notifyOnChangeProps:p,placeholderData:h,refetchInterval:b,refetchIntervalInBackground:w,refetchOnMount:E,refetchOnReconnect:A,refetchOnWindowFocus:H,retryOnMount:j,select:M,staleTime:_e,suspense:se,throwOnError:Tt,config:Ft,connector:Nt,query:Kt,...Pe}=e;return Pe}function $t(e){return{mutationFn(n){return st(e,n)},mutationKey:["connect"]}}function Et(e){return{mutationFn(n){return it(e,n)},mutationKey:["disconnect"]}}function qt(e,n={}){return{async queryFn({queryKey:t}){const{address:r,scopeKey:c,...o}=t[1];if(!r)throw new Error("address is required");return await dt(e,{...o,address:r})??null},queryKey:Wt(n)}}function Wt(e={}){return["balance",kt(e)]}function Ut(e,n){const{onChange:t}=n;return e._internal.chains.subscribe((r,c)=>{t(r,c)})}function Bt(e){const n=W(()=>({...K(e),queryKeyHashFn:At})),t=He(n);return t.queryKey=K(n).queryKey,t}function Dt(e={}){const n=P(e),t=B(ft(n)),r=yt(n,{onChange(c){t.value=c}});return $(()=>r()),U(t)}function en(e={}){const n=W(()=>oe(e)),t=P(n),r=Dt({config:t}),c=W(()=>{const{address:o,chainId:i=r.value,query:a={}}=n.value,u=qt(t,{...n.value,chainId:i}),s=!!(o&&(a.enabled??!0));return{...a,...u,enabled:s}});return Bt(c)}function tn(e={}){const n=W(()=>oe(e)),t=P(n),r=B(te(t,n.value));ze(()=>{r.value=te(t,n.value)});const c=bt(t,{onChange(o){var i;((i=r.value)==null?void 0:i.uid)!==(o==null?void 0:o.uid)&&(r.value=o)}});return $(()=>c()),U(r)}function nn(e={}){const n=P(e),t=B(ht(n)),r=Ut(n,{onChange(c){t.value=c}});return $(()=>r()),U(t)}function Rt(e={}){const n=P(e),t=B(pt(n)),r=vt(n,{onChange(c){t.value=c}});return $(()=>r()),t}function rn(e={}){const{mutation:n}=e,t=P(e),r=$t(t),{mutate:c,mutateAsync:o,...i}=ye({...n,...r}),a=t.subscribe(({status:u})=>u,(u,s)=>{s==="connected"&&u==="disconnected"&&i.reset()});return $(()=>a()),{...i,connect:c,connectAsync:o,connectors:Rt({config:t}).value}}function xt(e={}){const n=P(e),t=B(Se(n)),r=wt(n,{onChange(c){t.value=c}});return $(()=>r()),U(t)}function cn(e={}){const{mutation:n}=e,t=P(e),r=xt({config:t}),c=Et(t),{mutate:o,mutateAsync:i,...a}=ye({...n,...c});return{...a,connectors:W(()=>r.value.map(u=>u.connector)),disconnect:o,disconnectAsync:i}}export{Xt as W,Gt as _,Yt as a,nn as b,Zt as c,Dt as d,tn as e,rn as f,cn as g,re as i,en as u};
