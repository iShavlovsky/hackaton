import{h as g,y as Y}from"./proxy-compare-DDw08AJZ.js";var j={VITE_BASE_URL:"/",VITE_API_URL:"/api",VITE_MORALIS_API_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6Ijg4OGE4MTU1LWZhMTItNDc4OC1hYThjLTJjOGQwZjFlYTJiMiIsIm9yZ0lkIjoiMzk0MzM4IiwidXNlcklkIjoiNDA1MjA3IiwidHlwZUlkIjoiYTlkY2VlMzgtZTBiOS00NWVkLWEyMWYtODQxN2RjNDRmNDQ3IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTcwNzgxMjMsImV4cCI6NDg3MjgzODEyM30.QGIu4oGWoYQHfUsl9AMzV-xhDk5UY8aROh3pPTscciM",VITE_MORALIS_NODE_API_KEY:"00c07ed2c40848859da962b75e0c5964",VITE_MORALIS_TESTNET_NODE_API_KEY:"79cd3e75fca543fc8f859913676305ea",VITE_MORALIS_NODES_LINEA_SITE_1:"https://site1.moralis-nodes.com/linea/",VITE_MORALIS_NODES_LINEA_SITE_2:"https://site2.moralis-nodes.com/linea/",VITE_MORALIS_NODES_TESTNET_LINEA_SITE_1:"https://site1.moralis-nodes.com/linea-sepolia/",VITE_MORALIS_NODES_TESTNET_LINEA_SITE_2:"https://site2.moralis-nodes.com/linea-sepolia/",VITE_ID_WALLET_CONNECT:"553d8e8b222514da1d305c7f5bd0a99e",VITE_ID_CONTRACT_ADDRESS_1:"0xDC03D5E7689055bAa2E499f048094d5e7DaeA5F4",VITE_ID_CONTRACT_ADDRESS_2:"0x66B3034910f5C1C7d2D6F9666210Ff568391e7c4",BASE_URL:"/hackaton/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const V=r=>typeof r=="object"&&r!==null,T=new WeakMap,N=new WeakSet,k=(r=Object.is,h=(t,d)=>new Proxy(t,d),D=t=>V(t)&&!N.has(t)&&(Array.isArray(t)||!(Symbol.iterator in t))&&!(t instanceof WeakMap)&&!(t instanceof WeakSet)&&!(t instanceof Error)&&!(t instanceof Number)&&!(t instanceof Date)&&!(t instanceof String)&&!(t instanceof RegExp)&&!(t instanceof ArrayBuffer),S=t=>{switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:throw t}},a=new WeakMap,I=(t,d,_=S)=>{const i=a.get(t);if((i==null?void 0:i[0])===d)return i[1];const f=Array.isArray(t)?[]:Object.create(Object.getPrototypeOf(t));return g(f,!0),a.set(t,[d,f]),Reflect.ownKeys(t).forEach(w=>{if(Object.getOwnPropertyDescriptor(f,w))return;const E=Reflect.get(t,w),A={value:E,enumerable:!0,configurable:!0};if(N.has(E))g(E,!1);else if(E instanceof Promise)delete A.value,A.get=()=>_(E);else if(T.has(E)){const[c,m]=T.get(E);A.value=I(c,m(),_)}Object.defineProperty(f,w,A)}),Object.preventExtensions(f)},O=new WeakMap,l=[1,1],b=t=>{if(!V(t))throw new Error("object required");const d=O.get(t);if(d)return d;let _=l[0];const i=new Set,f=(n,s=++l[0])=>{_!==s&&(_=s,i.forEach(e=>e(n,s)))};let w=l[1];const E=(n=++l[1])=>(w!==n&&!i.size&&(w=n,c.forEach(([s])=>{const e=s[1](n);e>_&&(_=e)})),_),A=n=>(s,e)=>{const o=[...s];o[1]=[n,...o[1]],f(o,e)},c=new Map,m=(n,s)=>{if((j?"production":void 0)!=="production"&&c.has(n))throw new Error("prop listener already exists");if(i.size){const e=s[3](A(n));c.set(n,[s,e])}else c.set(n,[s])},P=n=>{var s;const e=c.get(n);e&&(c.delete(n),(s=e[1])==null||s.call(e))},W=n=>(i.add(n),i.size===1&&c.forEach(([e,o],M)=>{if((j?"production":void 0)!=="production"&&o)throw new Error("remove already exists");const y=e[3](A(M));c.set(M,[e,y])}),()=>{i.delete(n),i.size===0&&c.forEach(([e,o],M)=>{o&&(o(),c.set(M,[e]))})}),p=Array.isArray(t)?[]:Object.create(Object.getPrototypeOf(t)),L=h(p,{deleteProperty(n,s){const e=Reflect.get(n,s);P(s);const o=Reflect.deleteProperty(n,s);return o&&f(["delete",[s],e]),o},set(n,s,e,o){const M=Reflect.has(n,s),y=Reflect.get(n,s,o);if(M&&(r(y,e)||O.has(e)&&r(y,O.get(e))))return!0;P(s),V(e)&&(e=Y(e)||e);let R=e;if(e instanceof Promise)e.then(u=>{e.status="fulfilled",e.value=u,f(["resolve",[s],u])}).catch(u=>{e.status="rejected",e.reason=u,f(["reject",[s],u])});else{!T.has(e)&&D(e)&&(R=b(e));const u=!N.has(R)&&T.get(R);u&&m(s,u)}return Reflect.set(n,s,R,o),f(["set",[s],e,y]),!0}});O.set(t,L);const z=[p,E,I,W];return T.set(L,z),Reflect.ownKeys(t).forEach(n=>{const s=Object.getOwnPropertyDescriptor(t,n);"value"in s&&(L[n]=t[n],delete s.value,delete s.writable),Object.defineProperty(p,n,s)}),L})=>[b,T,N,r,h,D,S,a,I,O,l],[U]=k();function J(r={}){return U(r)}function Z(r,h,D){const S=T.get(r);(j?"production":void 0)!=="production"&&!S&&console.warn("Please use proxy object");let a;const I=[],O=S[3];let l=!1;const t=O(d=>{I.push(d),a||(a=Promise.resolve().then(()=>{a=void 0,l&&h(I.splice(0))}))});return l=!0,()=>{l=!1,t()}}function B(r,h){const D=T.get(r);(j?"production":void 0)!=="production"&&!D&&console.warn("Please use proxy object");const[S,a,I]=D;return I(S,a(),h)}export{B as a,J as p,Z as s};