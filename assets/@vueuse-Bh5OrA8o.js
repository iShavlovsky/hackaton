import{k as h,d as S,r as v,l as M,m as O,o as R,u as k,n as T,p as y,w,c as b,q as C}from"./@vue-CdJJkxHS.js";function W(e){return O()?(R(e),!0):!1}function m(e){return typeof e=="function"?e():k(e)}const g=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const _=e=>e!=null,B=()=>{};function D(e){return y()}function U(...e){if(e.length!==1)return h(...e);const t=e[0];return typeof t=="function"?S(T(()=>({get:t,set:B}))):v(t)}function q(e,t){D()&&M(e,t)}function A(e){var t;const i=m(e);return(t=i==null?void 0:i.$el)!=null?t:i}const E=g?window:void 0,G=g?window.document:void 0;function L(){const e=v(!1),t=y();return t&&C(()=>{e.value=!0},t),e}function $(e){const t=L();return b(()=>(t.value,!!e()))}function x(e,t,i={}){const{window:l=E,...c}=i;let n;const s=$(()=>l&&"MutationObserver"in l),a=()=>{n&&(n.disconnect(),n=void 0)},r=b(()=>{const u=m(e),p=(Array.isArray(u)?u:[u]).map(A).filter(_);return new Set(p)}),d=w(()=>r.value,u=>{a(),s.value&&u.size&&(n=new MutationObserver(t),u.forEach(p=>n.observe(p,c)))},{immediate:!0,flush:"post"}),f=()=>n==null?void 0:n.takeRecords(),o=()=>{a(),d()};return W(o),{isSupported:s,stop:o,takeRecords:f}}function I(e=null,t={}){var i,l,c;const{document:n=G,restoreOnUnmount:s=o=>o}=t,a=(i=n==null?void 0:n.title)!=null?i:"",r=U((l=e??(n==null?void 0:n.title))!=null?l:null),d=e&&typeof e=="function";function f(o){if(!("titleTemplate"in t))return o;const u=t.titleTemplate||"%s";return typeof u=="function"?u(o):m(u).replace(/%s/g,o)}return w(r,(o,u)=>{o!==u&&n&&(n.title=f(typeof o=="string"?o:""))},{immediate:!0}),t.observe&&!t.titleTemplate&&n&&!d&&x((c=n.head)==null?void 0:c.querySelector("title"),()=>{n&&n.title!==r.value&&(r.value=f(n.title))},{childList:!0}),q(()=>{if(s){const o=s(a,r.value||"");o!=null&&n&&(n.title=o)}}),r}export{I as u};
