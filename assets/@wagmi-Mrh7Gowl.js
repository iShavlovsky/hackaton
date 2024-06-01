import{c as H,s as kt,p as $t}from"./zustand-23CcGmLH.js";import{g as N,U as j,R as Q,w as Wt,a as Nt,S as it,n as at,c as pt,p as Rt,b as xt,d as Bt,m as Ut,r as Dt,C as mt,h as Ft,t as Tt,f as gt,e as Kt,s as Lt,i as zt}from"./viem-L8n_iVy8.js";import{E as Ht}from"./eventemitter3-BYCAYZDL.js";import{c as Qt}from"./mipd-CIcDX0W7.js";import{u as K,h as Vt,i as Jt,b as Gt,t as Zt,d as tt,o as R,a as yt,c as $,r as et}from"./@vue-CA14Bhfh.js";import{r as Xt,u as Yt,a as nt}from"./@tanstack-Dj03aQiD.js";const te="modulepreload",ee=function(t){return"/hackaton/"+t},ut={},on=function(n,e,r){let o=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),i=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));o=Promise.all(e.map(u=>{if(u=ee(u),u in ut)return;ut[u]=!0;const a=u.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${s}`))return;const f=document.createElement("link");if(f.rel=a?"stylesheet":te,a||(f.as="script",f.crossOrigin=""),f.href=u,i&&f.setAttribute("nonce",i),document.head.appendChild(f),a)return new Promise((d,m)=>{f.addEventListener("load",d),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}return o.then(()=>n()).catch(c=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=c,window.dispatchEvent(i),!i.defaultPrevented)throw c})};class ne{constructor(n){Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(this,"_emitter",{enumerable:!0,configurable:!0,writable:!0,value:new Ht})}on(n,e){this._emitter.on(n,e)}once(n,e){this._emitter.once(n,e)}off(n,e){this._emitter.off(n,e)}emit(n,...e){const r=e[0];this._emitter.emit(n,{uid:this.uid,...r})}listenerCount(n){return this._emitter.listenerCount(n)}}function re(t){return new ne(t)}function oe(t,n){return JSON.parse(t,(e,r)=>{let o=r;return(o==null?void 0:o.__type)==="bigint"&&(o=BigInt(o.value)),(o==null?void 0:o.__type)==="Map"&&(o=new Map(o.value)),(n==null?void 0:n(e,o))??o})}function lt(t,n){return t.slice(0,n).join(".")||"."}function dt(t,n){const{length:e}=t;for(let r=0;r<e;++r)if(t[r]===n)return r+1;return 0}function ce(t,n){const e=typeof t=="function",r=typeof n=="function",o=[],c=[];return function(u,a){if(typeof a=="object")if(o.length){const s=dt(o,this);s===0?o[o.length]=this:(o.splice(s),c.splice(s)),c[c.length]=u;const f=dt(o,a);if(f!==0)return r?n.call(this,u,a,lt(c,f)):`[ref=${lt(c,f)}]`}else o[0]=a,c[0]=u;return e?t.call(this,u,a):a}}function se(t,n,e,r){return JSON.stringify(t,ce((o,c)=>{let i=c;return typeof i=="bigint"&&(i={__type:"bigint",value:c.toString()}),i instanceof Map&&(i={__type:"Map",value:Array.from(c.entries())}),(n==null?void 0:n(o,i))??i},r),e??void 0)}function ie(t){const{deserialize:n=oe,key:e="wagmi",serialize:r=se,storage:o=bt}=t;function c(i){return i instanceof Promise?i.then(u=>u).catch(()=>null):i}return{...o,key:e,async getItem(i,u){const a=o.getItem(`${e}.${i}`),s=await c(a);return s?n(s)??null:u??null},async setItem(i,u){const a=`${e}.${i}`;u===null?await c(o.removeItem(a)):await c(o.setItem(a,r(u)))},async removeItem(i){await c(o.removeItem(`${e}.${i}`))}}}const bt={getItem:()=>null,setItem:()=>{},removeItem:()=>{}};const F="2.10.4",ae=()=>`@wagmi/core@${F}`;var wt=function(t,n,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof n=="function"?t!==n||!r:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(t):r?r.value:n.get(t)},L,Ct;let W=class G extends Error{get docsBaseUrl(){return"https://wagmi.sh/core"}get version(){return ae()}constructor(n,e={}){var c;super(),L.add(this),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiCoreError"});const r=e.cause instanceof G?e.cause.details:(c=e.cause)!=null&&c.message?e.cause.message:e.details,o=e.cause instanceof G&&e.cause.docsPath||e.docsPath;this.message=[n||"An error occurred.","",...e.metaMessages?[...e.metaMessages,""]:[],...o?[`Docs: ${this.docsBaseUrl}${o}.html${e.docsSlug?`#${e.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join(`
`),e.cause&&(this.cause=e.cause),this.details=r,this.docsPath=o,this.metaMessages=e.metaMessages,this.shortMessage=n}walk(n){return wt(this,L,"m",Ct).call(this,this,n)}};L=new WeakSet,Ct=function t(n,e){return e!=null&&e(n)?n:n.cause?wt(this,L,"m",t).call(this,n.cause,e):n};class Z extends W{constructor(){super("Chain not configured."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotConfiguredError"})}}class ue extends W{constructor(){super("Connector already connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAlreadyConnectedError"})}}class le extends W{constructor(){super("Connector not connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorNotConnectedError"})}}class de extends W{constructor({address:n,connector:e}){super(`Account "${n}" not found for connector "${e.name}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAccountNotFoundError"})}}class k extends W{constructor(){super("Provider not found."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderNotFoundError"})}}const fe=/(rabby|trustwallet)/,he={coinbaseWallet:{id:"coinbaseWallet",name:"Coinbase Wallet",provider(t){return t!=null&&t.coinbaseWalletExtension?t.coinbaseWalletExtension:T(t,"isCoinbaseWallet")}},metaMask:{id:"metaMask",name:"MetaMask",provider(t){return T(t,n=>{if(!n.isMetaMask||n.isBraveWallet&&!n._events&&!n._state)return!1;const e=["isApexWallet","isAvalanche","isBitKeep","isBlockWallet","isKuCoinWallet","isMathWallet","isOkxWallet","isOKExWallet","isOneInchIOSWallet","isOneInchAndroidWallet","isOpera","isPortal","isRabby","isTokenPocket","isTokenary","isZerion"];for(const r of e)if(n[r])return!1;return!0})}},phantom:{id:"phantom",name:"Phantom",provider(t){var n,e;return(n=t==null?void 0:t.phantom)!=null&&n.ethereum?(e=t.phantom)==null?void 0:e.ethereum:T(t,"isPhantom")}}};rt.type="injected";function rt(t={}){const{shimDisconnect:n=!0,unstable_shimAsyncInject:e}=t;function r(){const a=t.target;if(typeof a=="function"){const s=a();if(s)return s}return typeof a=="object"?a:typeof a=="string"?{...he[a]??{id:a,name:`${a[0].toUpperCase()}${a.slice(1)}`,provider:`is${a[0].toUpperCase()}${a.slice(1)}`}}:{id:"injected",name:"Injected",provider(s){return s==null?void 0:s.ethereum}}}let o,c,i,u;return a=>({get icon(){return r().icon},get id(){return r().id},get name(){return r().name},get supportsSimulation(){return fe.test(this.id.toLowerCase())},type:rt.type,async setup(){const s=await this.getProvider();s&&t.target&&(i||(i=this.onConnect.bind(this),s.on("connect",i)),o||(o=this.onAccountsChanged.bind(this),s.on("accountsChanged",o)))},async connect({chainId:s,isReconnecting:f}={}){var C,g,S,y,v,O;const d=await this.getProvider();if(!d)throw new k;let m=[];if(f)m=await this.getAccounts().catch(()=>[]);else if(n)try{m=(y=(S=(g=(C=(await d.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]}))[0])==null?void 0:C.caveats)==null?void 0:g[0])==null?void 0:S.value)==null?void 0:y.map(l=>N(l))}catch(I){const l=I;if(l.code===j.code)throw new j(l);if(l.code===Q.code)throw l}try{!(m!=null&&m.length)&&!f&&(m=(await d.request({method:"eth_requestAccounts"})).map(p=>N(p))),i&&(d.removeListener("connect",i),i=void 0),o||(o=this.onAccountsChanged.bind(this),d.on("accountsChanged",o)),c||(c=this.onChainChanged.bind(this),d.on("chainChanged",c)),u||(u=this.onDisconnect.bind(this),d.on("disconnect",u));let I=await this.getChainId();if(s&&I!==s){const l=await this.switchChain({chainId:s}).catch(p=>{if(p.code===j.code)throw p;return{id:I}});I=(l==null?void 0:l.id)??I}return n&&await((v=a.storage)==null?void 0:v.removeItem(`${this.id}.disconnected`)),t.target||await((O=a.storage)==null?void 0:O.setItem("injected.connected",!0)),{accounts:m,chainId:I}}catch(I){const l=I;throw l.code===j.code?new j(l):l.code===Q.code?new Q(l):l}},async disconnect(){var f,d;const s=await this.getProvider();if(!s)throw new k;c&&(s.removeListener("chainChanged",c),c=void 0),u&&(s.removeListener("disconnect",u),u=void 0),i||(i=this.onConnect.bind(this),s.on("connect",i));try{await s.request({method:"wallet_revokePermissions",params:[{eth_accounts:{}}]})}catch{}n&&await((f=a.storage)==null?void 0:f.setItem(`${this.id}.disconnected`,!0)),t.target||await((d=a.storage)==null?void 0:d.removeItem("injected.connected"))},async getAccounts(){const s=await this.getProvider();if(!s)throw new k;return(await s.request({method:"eth_accounts"})).map(d=>N(d))},async getChainId(){const s=await this.getProvider();if(!s)throw new k;const f=await s.request({method:"eth_chainId"});return Number(f)},async getProvider(){if(typeof window>"u")return;let s;const f=r();return typeof f.provider=="function"?s=f.provider(window):typeof f.provider=="string"?s=T(window,f.provider):s=f.provider,s&&!s.removeListener&&("off"in s&&typeof s.off=="function"?s.removeListener=s.off:s.removeListener=()=>{}),s},async isAuthorized(){var s,f;try{if(n&&await((s=a.storage)==null?void 0:s.getItem(`${this.id}.disconnected`))||!t.target&&!await((f=a.storage)==null?void 0:f.getItem("injected.connected")))return!1;if(!await this.getProvider()){if(e!==void 0&&e!==!1){const g=async()=>(typeof window<"u"&&window.removeEventListener("ethereum#initialized",g),!!await this.getProvider()),S=typeof e=="number"?e:1e3;if(await Promise.race([...typeof window<"u"?[new Promise(v=>window.addEventListener("ethereum#initialized",()=>v(g()),{once:!0}))]:[],new Promise(v=>setTimeout(()=>v(g()),S))]))return!0}throw new k}return!!(await Wt(()=>Nt(()=>this.getAccounts(),{timeout:100}))).length}catch{return!1}},async switchChain({addEthereumChainParameter:s,chainId:f}){var C,g,S,y;const d=await this.getProvider();if(!d)throw new k;const m=a.chains.find(v=>v.id===f);if(!m)throw new it(new Z);try{return await Promise.all([d.request({method:"wallet_switchEthereumChain",params:[{chainId:at(f)}]}).then(async()=>{await this.getChainId()===f&&a.emitter.emit("change",{chainId:f})}),new Promise(v=>a.emitter.once("change",({chainId:O})=>{O===f&&v()}))]),m}catch(v){const O=v;if(O.code===4902||((g=(C=O==null?void 0:O.data)==null?void 0:C.originalError)==null?void 0:g.code)===4902)try{const{default:I,...l}=m.blockExplorers??{};let p;s!=null&&s.blockExplorerUrls?p=s.blockExplorerUrls:I&&(p=[I.url,...Object.values(l).map(E=>E.url)]);let h;(S=s==null?void 0:s.rpcUrls)!=null&&S.length?h=s.rpcUrls:h=[((y=m.rpcUrls.default)==null?void 0:y.http[0])??""];const b={blockExplorerUrls:p,chainId:at(f),chainName:(s==null?void 0:s.chainName)??m.name,iconUrls:s==null?void 0:s.iconUrls,nativeCurrency:(s==null?void 0:s.nativeCurrency)??m.nativeCurrency,rpcUrls:h};if(await d.request({method:"wallet_addEthereumChain",params:[b]}),await this.getChainId()!==f)throw new j(new Error("User rejected switch after adding network."));return m}catch(I){throw new j(I)}throw O.code===j.code?new j(O):new it(O)}},async onAccountsChanged(s){var f;if(s.length===0)this.onDisconnect();else if(a.emitter.listenerCount("connect")){const d=(await this.getChainId()).toString();this.onConnect({chainId:d}),n&&await((f=a.storage)==null?void 0:f.removeItem(`${this.id}.disconnected`))}else a.emitter.emit("change",{accounts:s.map(d=>N(d))})},onChainChanged(s){const f=Number(s);a.emitter.emit("change",{chainId:f})},async onConnect(s){const f=await this.getAccounts();if(f.length===0)return;const d=Number(s.chainId);a.emitter.emit("connect",{accounts:f,chainId:d});const m=await this.getProvider();m&&(i&&(m.removeListener("connect",i),i=void 0),o||(o=this.onAccountsChanged.bind(this),m.on("accountsChanged",o)),c||(c=this.onChainChanged.bind(this),m.on("chainChanged",c)),u||(u=this.onDisconnect.bind(this),m.on("disconnect",u)))},async onDisconnect(s){const f=await this.getProvider();s&&s.code===1013&&f&&(await this.getAccounts()).length||(a.emitter.emit("disconnect"),f&&(c&&(f.removeListener("chainChanged",c),c=void 0),u&&(f.removeListener("disconnect",u),u=void 0),i||(i=this.onConnect.bind(this),f.on("connect",i))))}})}function T(t,n){function e(o){return typeof n=="function"?n(o):typeof n=="string"?o[n]:!0}const r=t.ethereum;if(r!=null&&r.providers)return r.providers.find(o=>e(o));if(r&&e(r))return r}const X=256;let B=X,U;function pe(t=11){if(!U||B+t>X*2){U="",B=0;for(let n=0;n<X;n++)U+=(256+Math.random()*256|0).toString(16).substring(1)}return U.substring(B,B+++t)}function cn(t){const{multiInjectedProviderDiscovery:n=!0,storage:e=ie({storage:typeof window<"u"&&window.localStorage?window.localStorage:bt}),syncConnectedChain:r=!0,ssr:o,...c}=t,i=typeof window<"u"&&n?Qt():void 0,u=H(()=>c.chains),a=H(()=>[...c.connectors??[],...o?[]:(i==null?void 0:i.getProviders().map(f))??[]].map(s));function s(l){var b;const p=re(pe()),h={...l({emitter:p,chains:u.getState(),storage:e}),emitter:p,uid:p.uid};return p.on("connect",O),(b=h.setup)==null||b.call(h),h}function f(l){const{info:p}=l,h=l.provider;return rt({target:{...p,id:p.rdns,provider:h}})}const d=new Map;function m(l={}){const p=l.chainId??y.getState().chainId,h=u.getState().find(w=>w.id===p);if(l.chainId&&!h)throw new Z;{const w=d.get(y.getState().chainId);if(w&&!h)return w;if(!h)throw new Z}{const w=d.get(p);if(w)return w}let b;if(c.client)b=c.client({chain:h});else{const w=h.id,E=u.getState().map(_=>_.id),A={},z=Object.entries(c);for(const[_,M]of z)if(!(_==="chains"||_==="client"||_==="connectors"||_==="transports"))if(typeof M=="object")if(w in M)A[_]=M[w];else{if(E.some(st=>st in M))continue;A[_]=M}else A[_]=M;b=pt({...A,chain:h,batch:A.batch??{multicall:!0},transport:_=>c.transports[w]({..._,connectors:a})})}return d.set(p,b),b}function C(){return{chainId:u.getState()[0].id,connections:new Map,current:null,status:"disconnected"}}let g;const S="0.0.0-canary-";F.startsWith(S)?g=parseInt(F.replace(S,"")):g=parseInt(F.split(".")[0]??"0");const y=H(kt(e?$t(C,{migrate(l,p){if(p===g)return l;const h=C(),b=l&&typeof l=="object"&&"chainId"in l&&typeof l.chainId=="number"?l.chainId:h.chainId;return{...h,chainId:b}},name:"store",partialize(l){return{connections:{__type:"Map",value:Array.from(l.connections.entries()).map(([p,h])=>{const{id:b,name:w,type:E,uid:A}=h.connector;return[p,{...h,connector:{id:b,name:w,type:E,uid:A}}]})},chainId:l.chainId,current:l.current}},skipHydration:o,storage:e,version:g}):C));r&&y.subscribe(({connections:l,current:p})=>{var h;return p?(h=l.get(p))==null?void 0:h.chainId:void 0},l=>{if(u.getState().some(h=>h.id===l))return y.setState(h=>({...h,chainId:l??h.chainId}))}),i==null||i.subscribe(l=>{const p=new Map;for(const b of a.getState())p.set(b.id,!0);const h=[];for(const b of l){const w=s(f(b));p.has(w.id)||h.push(w)}e&&!y.persist.hasHydrated()||a.setState(b=>[...b,...h],!0)});function v(l){y.setState(p=>{const h=p.connections.get(l.uid);return h?{...p,connections:new Map(p.connections).set(l.uid,{accounts:l.accounts??h.accounts,chainId:l.chainId??h.chainId,connector:h.connector})}:p})}function O(l){y.getState().status==="connecting"||y.getState().status==="reconnecting"||y.setState(p=>{const h=a.getState().find(b=>b.uid===l.uid);return h?(h.emitter.listenerCount("connect")&&h.emitter.off("connect",v),h.emitter.listenerCount("change")||h.emitter.on("change",v),h.emitter.listenerCount("disconnect")||h.emitter.on("disconnect",I),{...p,connections:new Map(p.connections).set(l.uid,{accounts:l.accounts,chainId:l.chainId,connector:h}),current:l.uid,status:"connected"}):p})}function I(l){y.setState(p=>{const h=p.connections.get(l.uid);if(h){const w=h.connector;w.emitter.listenerCount("change")&&h.connector.emitter.off("change",v),w.emitter.listenerCount("disconnect")&&h.connector.emitter.off("disconnect",I),w.emitter.listenerCount("connect")||h.connector.emitter.on("connect",O)}if(p.connections.delete(l.uid),p.connections.size===0)return{...p,connections:new Map,current:null,status:"disconnected"};const b=p.connections.values().next().value;return{...p,connections:new Map(p.connections),current:b.connector.uid}})}return{get chains(){return u.getState()},get connectors(){return a.getState()},storage:e,getClient:m,get state(){return y.getState()},setState(l){let p;typeof l=="function"?p=l(y.getState()):p=l;const h=C();typeof p!="object"&&(p=h),Object.keys(h).some(w=>!(w in p))&&(p=h),y.setState(p,!0)},subscribe(l,p,h){return y.subscribe(l,p,h?{...h,fireImmediately:h.emitImmediately}:void 0)},_internal:{mipd:i,store:y,ssr:!!o,syncConnectedChain:r,transports:c.transports,chains:{setState(l){const p=typeof l=="function"?l(u.getState()):l;if(p.length!==0)return u.setState(p,!0)},subscribe(l){return u.subscribe(l)}},connectors:{providerDetailToConnector:f,setup:s,setState(l){return a.setState(typeof l=="function"?l(a.getState()):l,!0)},subscribe(l){return a.subscribe(l)}},events:{change:v,connect:O,disconnect:I}}}}function x(t,n,e){const r=t[n.name];if(typeof r=="function")return r;const o=t[e];return typeof o=="function"?o:c=>n(t,c)}async function me(t,n){var r;let e;if(typeof n.connector=="function"?e=t._internal.connectors.setup(n.connector):e=n.connector,e.uid===t.state.current)throw new ue;try{t.setState(i=>({...i,status:"connecting"})),e.emitter.emit("message",{type:"connecting"});const o=await e.connect({chainId:n.chainId}),c=o.accounts;return e.emitter.off("connect",t._internal.events.connect),e.emitter.on("change",t._internal.events.change),e.emitter.on("disconnect",t._internal.events.disconnect),await((r=t.storage)==null?void 0:r.setItem("recentConnectorId",e.id)),t.setState(i=>({...i,connections:new Map(i.connections).set(e.uid,{accounts:c,chainId:o.chainId,connector:e}),current:e.uid,status:"connected"})),{accounts:c,chainId:o.chainId}}catch(o){throw t.setState(c=>({...c,status:c.current?"connected":"disconnected"})),o}}async function ge(t,n={}){var o,c;let e;if(n.connector)e=n.connector;else{const{connections:i,current:u}=t.state,a=i.get(u);e=a==null?void 0:a.connector}const r=t.state.connections;e&&(await e.disconnect(),e.emitter.off("change",t._internal.events.change),e.emitter.off("disconnect",t._internal.events.disconnect),e.emitter.on("connect",t._internal.events.connect),r.delete(e.uid)),t.setState(i=>{if(r.size===0)return{...i,connections:new Map,current:null,status:"disconnected"};const u=r.values().next().value;return{...i,connections:new Map(r),current:u.connector.uid}});{const i=t.state.current;if(!i)return;const u=(o=t.state.connections.get(i))==null?void 0:o.connector;if(!u)return;await((c=t.storage)==null?void 0:c.setItem("recentConnectorId",u.id))}}async function vt(t,n={}){let e;if(n.connector){const{connector:a}=n,[s,f]=await Promise.all([a.getAccounts(),a.getChainId()]);e={accounts:s,chainId:f,connector:a}}else e=t.state.connections.get(t.state.current);if(!e)throw new le;const r=n.chainId??e.chainId,o=e.connector;if(o.getClient)return o.getClient({chainId:r});const c=Rt(n.account??e.accounts[0]);c.address=N(c.address);const i=t.chains.find(a=>a.id===r),u=await e.connector.getProvider({chainId:r});if(n.account&&!e.accounts.some(a=>a.toLowerCase()===c.address.toLowerCase()))throw new de({address:c.address,connector:o});return pt({account:c,chain:i,name:"Connector Client",transport:a=>xt(u)({...a,retryCount:0})})}function It(t){return typeof t=="number"?t:t==="wei"?0:Math.abs(Bt[t])}function ot(t){const n=t.state.current,e=t.state.connections.get(n),r=e==null?void 0:e.accounts,o=r==null?void 0:r[0],c=t.chains.find(u=>u.id===(e==null?void 0:e.chainId)),i=t.state.status;switch(i){case"connected":return{address:o,addresses:r,chain:c,chainId:e==null?void 0:e.chainId,connector:e==null?void 0:e.connector,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:i};case"reconnecting":return{address:o,addresses:r,chain:c,chainId:e==null?void 0:e.chainId,connector:e==null?void 0:e.connector,isConnected:!!o,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:i};case"connecting":return{address:o,addresses:r,chain:c,chainId:e==null?void 0:e.chainId,connector:e==null?void 0:e.connector,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:i};case"disconnected":return{address:void 0,addresses:void 0,chain:void 0,chainId:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:i}}}async function ye(t,n){const{allowFailure:e=!0,chainId:r,contracts:o,...c}=n,i=t.getClient({chainId:r});return x(i,Ut,"multicall")({allowFailure:e,contracts:o,...c})}function St(t,n){const{chainId:e,...r}=n,o=t.getClient({chainId:e});return x(o,Dt,"readContract")(r)}async function be(t,n){const{allowFailure:e=!0,blockNumber:r,blockTag:o,...c}=n,i=n.contracts;try{const u=i.reduce((d,m,C)=>{const g=m.chainId??t.state.chainId;return{...d,[g]:[...d[g]||[],{contract:m,index:C}]}},{}),a=()=>Object.entries(u).map(([d,m])=>ye(t,{...c,allowFailure:e,blockNumber:r,blockTag:o,chainId:parseInt(d),contracts:m.map(({contract:C})=>C)})),s=(await Promise.all(a())).flat(),f=Object.values(u).flatMap(d=>d.map(({index:m})=>m));return s.reduce((d,m,C)=>(d&&(d[f[C]]=m),d),[])}catch(u){if(u instanceof mt)throw u;const a=()=>i.map(s=>St(t,{...s,blockNumber:r,blockTag:o}));return e?(await Promise.allSettled(a())).map(s=>s.status==="fulfilled"?{result:s.value,status:"success"}:{error:s.reason,result:void 0,status:"failure"}):await Promise.all(a())}}async function we(t,n){const{address:e,blockNumber:r,blockTag:o,chainId:c,token:i,unit:u="ether"}=n;if(i)try{return ft(t,{balanceAddress:e,chainId:c,symbolType:"string",tokenAddress:i})}catch(m){if(m instanceof mt){const C=await ft(t,{balanceAddress:e,chainId:c,symbolType:"bytes32",tokenAddress:i}),g=Ft(Tt(C.symbol,{dir:"right"}));return{...C,symbol:g}}throw m}const a=t.getClient({chainId:c}),f=await x(a,Kt,"getBalance")(r?{address:e,blockNumber:r}:{address:e,blockTag:o}),d=t.chains.find(m=>m.id===c)??a.chain;return{decimals:d.nativeCurrency.decimals,formatted:gt(f,It(u)),symbol:d.nativeCurrency.symbol,value:f}}async function ft(t,n){const{balanceAddress:e,chainId:r,symbolType:o,tokenAddress:c,unit:i}=n,u={abi:[{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:o}]}],address:c},[a,s,f]=await be(t,{allowFailure:!1,contracts:[{...u,functionName:"balanceOf",args:[e],chainId:r},{...u,functionName:"decimals",chainId:r},{...u,functionName:"symbol",chainId:r}]}),d=gt(a??"0",It(i??s));return{decimals:s,formatted:d,symbol:f,value:a}}function Ce(t){return t.state.chainId}function q(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){if(t.constructor!==n.constructor)return!1;let e,r;if(Array.isArray(t)&&Array.isArray(n)){if(e=t.length,e!==n.length)return!1;for(r=e;r--!==0;)if(!q(t[r],n[r]))return!1;return!0}if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();const o=Object.keys(t);if(e=o.length,e!==Object.keys(n).length)return!1;for(r=e;r--!==0;)if(!Object.prototype.hasOwnProperty.call(n,o[r]))return!1;for(r=e;r--!==0;){const c=o[r];if(c&&!q(t[c],n[c]))return!1}return!0}return t!==t&&n!==n}let D=[];function Ot(t){const n=[...t.state.connections.values()];return t.state.status==="reconnecting"||q(D,n)?D:(D=n,n)}let V=[];function ve(t){const n=t.connectors;return q(V,n)?V:(V=n,n)}let J=!1;async function Ie(t,n={}){var s,f;if(J)return[];J=!0,t.setState(d=>({...d,status:d.current?"reconnecting":"connecting"}));const e=[];if((s=n.connectors)!=null&&s.length)for(const d of n.connectors){let m;typeof d=="function"?m=t._internal.connectors.setup(d):m=d,e.push(m)}else e.push(...t.connectors);let r;try{r=await((f=t.storage)==null?void 0:f.getItem("recentConnectorId"))}catch{}const o={};for(const[,d]of t.state.connections)o[d.connector.id]=1;r&&(o[r]=0);const c=Object.keys(o).length>0?[...e].sort((d,m)=>(o[d.id]??10)-(o[m.id]??10)):e;let i=!1;const u=[],a=[];for(const d of c){const m=await d.getProvider().catch(()=>{});if(!m||a.some(S=>S===m)||!await d.isAuthorized())continue;const g=await d.connect({isReconnecting:!0}).catch(()=>null);g&&(d.emitter.off("connect",t._internal.events.connect),d.emitter.on("change",t._internal.events.change),d.emitter.on("disconnect",t._internal.events.disconnect),t.setState(S=>{const y=new Map(i?S.connections:new Map).set(d.uid,{accounts:g.accounts,chainId:g.chainId,connector:d});return{...S,current:i?S.current:d.uid,connections:y}}),u.push({accounts:g.accounts,chainId:g.chainId,connector:d}),a.push(m),i=!0)}return(t.state.status==="reconnecting"||t.state.status==="connecting")&&(i?t.setState(d=>({...d,status:"connected"})):t.setState(d=>({...d,connections:new Map,current:null,status:"disconnected"}))),J=!1,u}async function Se(t,n){const{abi:e,chainId:r,connector:o,...c}=n;let i;n.account?i=n.account:i=(await vt(t,{chainId:r,connector:o})).account;const u=t.getClient({chainId:r}),a=x(u,Lt,"simulateContract"),{result:s,request:f}=await a({...c,abi:e,account:i});return{chainId:u.chain.id,result:s,request:{__mode:"prepared",...f,chainId:r}}}function Oe(t,n){const{onChange:e}=n;return t.subscribe(()=>ot(t),e,{equalityFn(r,o){const{connector:c,...i}=r,{connector:u,...a}=o;return q(i,a)&&(c==null?void 0:c.id)===(u==null?void 0:u.id)&&(c==null?void 0:c.uid)===(u==null?void 0:u.uid)}})}function _e(t,n){const{onChange:e}=n;return t.subscribe(r=>r.chainId,e)}function je(t,n){const{onChange:e}=n;return t.subscribe(()=>Ot(t),e,{equalityFn:q})}function Pe(t,n){const{onChange:e}=n;return t._internal.connectors.subscribe((r,o)=>{e(Object.values(r),o)})}async function Ae(t,n){const{account:e,chainId:r,connector:o,__mode:c,...i}=n;let u;typeof e=="object"&&e.type==="local"?u=t.getClient({chainId:r}):u=await vt(t,{account:e,chainId:r,connector:o});const{connector:a}=ot(t);let s;if(c==="prepared"||a!=null&&a.supportsSimulation)s=i;else{const{request:m}=await Se(t,{...i,account:e,chainId:r});s=m}return await x(u,zt,"writeContract")({...s,...e?{account:e}:{},chain:r?{id:r}:null})}function Me(t,n){const{initialState:e,reconnectOnMount:r}=n;return e&&!t._internal.store.persist.hasHydrated()&&t.setState({...e,connections:r?e.connections:new Map,status:r?"reconnecting":"disconnected"}),{async onMount(){var o;if(t._internal.ssr){await t._internal.store.persist.rehydrate();const c=(o=t._internal.mipd)==null?void 0:o.getProviders().map(t._internal.connectors.providerDetailToConnector).map(t._internal.connectors.setup);t._internal.connectors.setState(i=>[...i,...c??[]])}r?Ie(t):t.storage&&t.setState(c=>({...c,connections:new Map}))}}}const _t=Symbol(),sn={install(t,n){const{config:e,reconnectOnMount:r=!0}=n;t.provide(_t,e);const{onMount:o}=Me(e,{...n,reconnectOnMount:r});o()}},qe="0.0.10",Ee=()=>`@wagmi/vue@${qe}`;class jt extends W{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiError"})}get docsBaseUrl(){return"https://wagmi.sh/vue"}get version(){return Ee()}}class ke extends jt{constructor(){super("No `config` found in Vue context, use `WagmiPlugin` to properly initialize the library.",{docsPath:"/api/TODO"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiPluginNotFoundError"})}}class $e extends jt{constructor(){super("Wagmi composables can only be used inside `setup()` function or functions that support injection context.",{docsPath:"/api/TODO"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiInjectionContextError"})}}function We(t,n){Object.keys(t).forEach(e=>{t[e]=n[e]})}function P(t={}){const n=K(t);if(n.config)return n.config;if(!Vt())throw new $e;const e=Jt(_t);if(!e)throw new ke;return e}function an(t={}){const n=P(t),e=Gt(ot(n)),r=Oe(n,{onChange(o){We(e,o)}});return R(()=>r()),Zt(tt(e))}function Y(t,n){if(n){const e=n(t);if(e===void 0&&yt(t)||e!==void 0)return e}if(Array.isArray(t))return t.map(e=>Y(e,n));if(typeof t=="object"&&Ne(t)){const e=Object.entries(t).map(([r,o])=>[r,Y(o,n)]);return Object.fromEntries(e)}return t}function ct(t){return Y(t,n=>{if(yt(n))return ct(K(n))})}function Ne(t){if(Object.prototype.toString.call(t)!=="[object Object]")return!1;const n=Object.getPrototypeOf(t);return n===null||n===Object.prototype}function Re(t,n){return q(t,n)?t:Xt(t,n)}function xe(t){return JSON.stringify(t,(n,e)=>Be(e)?Object.keys(e).sort().reduce((r,o)=>(r[o]=e[o],r),{}):typeof e=="bigint"?e.toString():e)}function Be(t){if(!ht(t))return!1;const n=t.constructor;if(typeof n>"u")return!0;const e=n.prototype;return!(!ht(e)||!e.hasOwnProperty("isPrototypeOf"))}function ht(t){return Object.prototype.toString.call(t)==="[object Object]"}function Pt(t){const{_defaulted:n,behavior:e,gcTime:r,initialData:o,initialDataUpdatedAt:c,maxPages:i,meta:u,networkMode:a,queryFn:s,queryHash:f,queryKey:d,queryKeyHashFn:m,retry:C,retryDelay:g,structuralSharing:S,getPreviousPageParam:y,getNextPageParam:v,initialPageParam:O,_optimisticResults:I,enabled:l,notifyOnChangeProps:p,placeholderData:h,refetchInterval:b,refetchIntervalInBackground:w,refetchOnMount:E,refetchOnReconnect:A,refetchOnWindowFocus:z,retryOnMount:_,select:M,staleTime:qt,suspense:st,throwOnError:Ve,config:Je,connector:Ge,query:Ze,...Et}=t;return Et}function Ue(t){return{mutationFn(n){return me(t,n)},mutationKey:["connect"]}}function De(t){return{mutationFn(n){return ge(t,n)},mutationKey:["disconnect"]}}function Fe(t,n={}){return{async queryFn({queryKey:e}){const{address:r,scopeKey:o,...c}=e[1];if(!r)throw new Error("address is required");return await we(t,{...c,address:r})??null},queryKey:Te(n)}}function Te(t={}){return["balance",Pt(t)]}function Ke(t,n={}){return{async queryFn({queryKey:e}){const r=n.abi;if(!r)throw new Error("abi is required");const{address:o,functionName:c,scopeKey:i,...u}=e[1];if(!o)throw new Error("address is required");if(!c)throw new Error("functionName is required");const a=u.args;return St(t,{abi:r,address:o,functionName:c,args:a,...u})},queryKey:Le(n)}}function Le(t={}){const{abi:n,...e}=t;return["readContract",Pt(e)]}function ze(t){return{mutationFn(n){return Ae(t,n)},mutationKey:["writeContract"]}}function At(t){const n=$(()=>({...K(t),queryKeyHashFn:xe})),e=Yt(n);return e.queryKey=K(n).queryKey,e}function Mt(t={}){const n=P(t),e=et(Ce(n)),r=_e(n,{onChange(o){e.value=o}});return R(()=>r()),tt(e)}function un(t={}){const n=$(()=>ct(t)),e=P(n),r=Mt({config:e}),o=$(()=>{const{address:c,chainId:i=r.value,query:u={}}=n.value,a=Fe(e,{...n.value,chainId:i}),s=!!(c&&(u.enabled??!0));return{...u,...a,enabled:s}});return At(o)}function He(t={}){const n=P(t),e=et(ve(n)),r=Pe(n,{onChange(o){e.value=o}});return R(()=>r()),e}function ln(t={}){const{mutation:n}=t,e=P(t),r=Ue(e),{mutate:o,mutateAsync:c,...i}=nt({...n,...r}),u=e.subscribe(({status:a})=>a,(a,s)=>{s==="connected"&&a==="disconnected"&&i.reset()});return R(()=>u()),{...i,connect:o,connectAsync:c,connectors:He({config:e}).value}}function Qe(t={}){const n=P(t),e=et(Ot(n)),r=je(n,{onChange(o){e.value=o}});return R(()=>r()),tt(e)}function dn(t={}){const{mutation:n}=t,e=P(t),r=Qe({config:e}),o=De(e),{mutate:c,mutateAsync:i,...u}=nt({...n,...o});return{...u,connectors:$(()=>r.value.map(a=>a.connector)),disconnect:c,disconnectAsync:i}}function fn(t={}){const n=$(()=>ct(t)),e=P(n),r=Mt({config:e}),o=$(()=>{const{abi:c,address:i,chainId:u=r.value,functionName:a,query:s={}}=n.value,f=Ke(e,{...n.value,chainId:u}),d=!!(i&&c&&a&&(s.enabled??!0));return{...s,...f,enabled:d,structuralSharing:s.structuralSharing??Re}});return At(o)}function hn(t={}){const{mutation:n}=t,e=P(t),r=ze(e),{mutate:o,mutateAsync:c,...i}=nt({...n,...r});return{...i,writeContract:o,writeContractAsync:c}}export{sn as W,on as _,an as a,ln as b,dn as c,cn as d,hn as e,fn as f,rt as i,un as u};