import{_ as F,r as V,S as H,i as Y,w as Z,b as G,a as O,R as J,W as $,h as A,n as T,o as tt,J as et,t as st,c as nt}from"./@vue-93dQ2Mcc.js";var ot=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let B;const E=t=>B=t,D=Symbol();function R(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var C;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(C||(C={}));function ht(){const t=F(!0),o=t.run(()=>V({}));let s=[],e=[];const r=H({install(u){E(r),r._a=u,u.provide(D,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!ot?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:o});return r}const N=()=>{};function W(t,o,s,e=N){t.push(o);const r=()=>{const u=t.indexOf(o);u>-1&&(t.splice(u,1),e())};return!s&&T()&&tt(r),r}function P(t,...o){t.slice().forEach(s=>{s(...o)})}const ct=t=>t();function k(t,o){t instanceof Map&&o instanceof Map&&o.forEach((s,e)=>t.set(e,s)),t instanceof Set&&o instanceof Set&&o.forEach(t.add,t);for(const s in o){if(!o.hasOwnProperty(s))continue;const e=o[s],r=t[s];R(r)&&R(e)&&t.hasOwnProperty(s)&&!O(e)&&!J(e)?t[s]=k(r,e):t[s]=e}return t}const rt=Symbol();function ut(t){return!R(t)||!t.hasOwnProperty(rt)}const{assign:v}=Object;function at(t){return!!(O(t)&&t.effect)}function ft(t,o,s,e){const{state:r,actions:u,getters:f}=o,a=s.state.value[t];let w;function b(){a||(s.state.value[t]=r?r():{});const S=st(s.state.value[t]);return v(S,u,Object.keys(f||{}).reduce((d,_)=>(d[_]=H(nt(()=>{E(s);const m=s._s.get(t);return f[_].call(m,m)})),d),{}))}return w=q(t,b,o,s,e,!0),w}function q(t,o,s={},e,r,u){let f;const a=v({actions:{}},s),w={deep:!0};let b,S,d=[],_=[],m;const j=e.state.value[t];!u&&!j&&(e.state.value[t]={}),V({});let I;function L(c){let n;b=S=!1,typeof c=="function"?(c(e.state.value[t]),n={type:C.patchFunction,storeId:t,events:m}):(k(e.state.value[t],c),n={type:C.patchObject,payload:c,storeId:t,events:m});const h=I=Symbol();et().then(()=>{I===h&&(b=!0)}),S=!0,P(d,n,e.state.value[t])}const z=u?function(){const{state:n}=s,h=n?n():{};this.$patch(y=>{v(y,h)})}:N;function K(){f.stop(),d=[],_=[],e._s.delete(t)}function M(c,n){return function(){E(e);const h=Array.from(arguments),y=[],p=[];function U(i){y.push(i)}function X(i){p.push(i)}P(_,{args:h,name:c,store:l,after:U,onError:X});let x;try{x=n.apply(this&&this.$id===t?this:l,h)}catch(i){throw P(p,i),i}return x instanceof Promise?x.then(i=>(P(y,i),i)).catch(i=>(P(p,i),Promise.reject(i))):(P(y,x),x)}}const Q={_p:e,$id:t,$onAction:W.bind(null,_),$patch:L,$reset:z,$subscribe(c,n={}){const h=W(d,c,n.detached,()=>y()),y=f.run(()=>Z(()=>e.state.value[t],p=>{(n.flush==="sync"?S:b)&&c({storeId:t,type:C.direct,events:m},p)},v({},w,n)));return h},$dispose:K},l=G(Q);e._s.set(t,l);const g=(e._a&&e._a.runWithContext||ct)(()=>e._e.run(()=>(f=F()).run(o)));for(const c in g){const n=g[c];if(O(n)&&!at(n)||J(n))u||(j&&ut(n)&&(O(n)?n.value=j[c]:k(n,j[c])),e.state.value[t][c]=n);else if(typeof n=="function"){const h=M(c,n);g[c]=h,a.actions[c]=n}}return v(l,g),v($(l),g),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:c=>{L(n=>{v(n,c)})}}),e._p.forEach(c=>{v(l,f.run(()=>c({store:l,app:e._a,pinia:e,options:a})))}),j&&u&&s.hydrate&&s.hydrate(l.$state,j),b=!0,S=!0,l}function bt(t,o,s){let e,r;const u=typeof o=="function";e=t,r=u?s:o;function f(a,w){const b=A();return a=a||(b?Y(D,null):null),a&&E(a),a=B,a._s.has(e)||(u?q(e,o,r,a):ft(e,r,a)),a._s.get(e)}return f.$id=e,f}export{ht as c,bt as d};