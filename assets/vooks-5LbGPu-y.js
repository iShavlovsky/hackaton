import{r as l,d,w as C,c as v,p as S,q as L,m as b,y as T,b as j}from"./@vue-CA14Bhfh.js";import{o as m,a as p}from"./evtd-CI_DDEu_.js";function Y(e){const t=l(!!e.value);if(t.value)return d(t);const n=C(e,i=>{i&&(t.value=!0,n())});return d(t)}function K(e){const t=v(e),n=l(t.value);return C(t,i=>{n.value=i}),typeof e=="function"?n:{__v_isRef:!0,get value(){return n.value},set value(i){e.set(i)}}}function B(){return S()!==null}const E=typeof window<"u";let w,y;const D=()=>{var e,t;w=E?(t=(e=document)===null||e===void 0?void 0:e.fonts)===null||t===void 0?void 0:t.ready:void 0,y=!1,w!==void 0?w.then(()=>{y=!0}):y=!0};D();function Q(e){if(y)return;let t=!1;L(()=>{y||w==null||w.then(()=>{t||e()})}),b(()=>{t=!0})}const h=l(null);function I(e){if(e.clientX>0||e.clientY>0)h.value={x:e.clientX,y:e.clientY};else{const{target:t}=e;if(t instanceof Element){const{left:n,top:i,width:o,height:a}=t.getBoundingClientRect();n>0||i>0?h.value={x:n+o/2,y:i+a/2}:h.value={x:0,y:0}}else h.value=null}}let g=0,_=!0;function z(){if(!E)return d(l(null));g===0&&m("click",document,I,!0);const e=()=>{g+=1};return _&&(_=B())?(T(e),b(()=>{g-=1,g===0&&p("click",document,I,!0)})):e(),d(h)}const F=l(void 0);let M=0;function q(){F.value=Date.now()}let H=!0;function A(e){if(!E)return d(l(!1));const t=l(!1);let n=null;function i(){n!==null&&window.clearTimeout(n)}function o(){i(),t.value=!0,n=window.setTimeout(()=>{t.value=!1},e)}M===0&&m("click",window,q,!0);const a=()=>{M+=1,m("click",window,o,!0)};return H&&(H=B())?(T(a),b(()=>{M-=1,M===0&&p("click",window,q,!0),p("click",window,o,!0),i()})):a(),d(t)}function G(e,t){return C(e,n=>{n!==void 0&&(t.value=n)}),v(()=>e.value===void 0?t.value:e.value)}function J(){const e=l(!1);return L(()=>{e.value=!0}),d(e)}function O(e,t){return v(()=>{for(const n of t)if(e[n]!==void 0)return e[n];return e[t[t.length-1]]})}const R=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function W(){return R}const $={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function U(e){return`(min-width: ${e}px)`}const k={};function Z(e=$){if(!E)return v(()=>[]);if(typeof window.matchMedia!="function")return v(()=>[]);const t=l({}),n=Object.keys(e),i=(o,a)=>{o.matches?t.value[a]=!0:t.value[a]=!1};return n.forEach(o=>{const a=e[o];let s,r;k[a]===void 0?(s=window.matchMedia(U(a)),s.addEventListener?s.addEventListener("change",u=>{r.forEach(f=>{f(u,o)})}):s.addListener&&s.addListener(u=>{r.forEach(f=>{f(u,o)})}),r=new Set,k[a]={mql:s,cbs:r}):(s=k[a].mql,r=k[a].cbs),r.add(i),s.matches&&r.forEach(u=>{u(s,o)})}),b(()=>{n.forEach(o=>{const{cbs:a}=k[e[o]];a.has(i)&&a.delete(i)})}),v(()=>{const{value:o}=t;return n.filter(a=>o[a])})}function N(e={},t){const n=j({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:i,keyup:o}=e,a=u=>{switch(u.key){case"Control":n.ctrl=!0;break;case"Meta":n.command=!0,n.win=!0;break;case"Shift":n.shift=!0;break;case"Tab":n.tab=!0;break}i!==void 0&&Object.keys(i).forEach(f=>{if(f!==u.key)return;const c=i[f];if(typeof c=="function")c(u);else{const{stop:x=!1,prevent:P=!1}=c;x&&u.stopPropagation(),P&&u.preventDefault(),c.handler(u)}})},s=u=>{switch(u.key){case"Control":n.ctrl=!1;break;case"Meta":n.command=!1,n.win=!1;break;case"Shift":n.shift=!1;break;case"Tab":n.tab=!1;break}o!==void 0&&Object.keys(o).forEach(f=>{if(f!==u.key)return;const c=o[f];if(typeof c=="function")c(u);else{const{stop:x=!1,prevent:P=!1}=c;x&&u.stopPropagation(),P&&u.preventDefault(),c.handler(u)}})},r=()=>{(t===void 0||t.value)&&(m("keydown",document,a),m("keyup",document,s)),t!==void 0&&C(t,u=>{u?(m("keydown",document,a),m("keyup",document,s)):(p("keydown",document,a),p("keyup",document,s))})};return B()?(T(r),b(()=>{(t===void 0||t.value)&&(p("keydown",document,a),p("keyup",document,s))})):r(),d(n)}export{W as a,G as b,O as c,Y as d,N as e,A as f,z as g,Z as h,J as i,Q as o,K as u};