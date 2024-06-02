import{d as p}from"./destr-CVtkxrq9.js";function S(i){return!i||typeof i.then!="function"?Promise.resolve(i):i}function u(i,...n){try{return S(i(...n))}catch(c){return Promise.reject(c)}}function $(i){const n=typeof i;return i===null||n!=="object"&&n!=="function"}function E(i){const n=Object.getPrototypeOf(i);return!n||n.isPrototypeOf(Object)}function d(i){if($(i))return String(i);if(E(i)||Array.isArray(i))return JSON.stringify(i);if(typeof i.toJSON=="function")return d(i.toJSON());throw new Error("[unstorage] Cannot stringify value!")}function O(){if(typeof Buffer===void 0)throw new TypeError("[unstorage] Buffer is not supported!")}const K="base64:";function L(i){if(typeof i=="string")return i;O();const n=Buffer.from(i).toString("base64");return K+n}function A(i){return typeof i!="string"||!i.startsWith(K)?i:(O(),Buffer.from(i.slice(K.length),"base64"))}function f(i){return i?i.split("?")[0].replace(/[/\\]/g,":").replace(/:+/g,":").replace(/^:|:$/g,""):""}function z(...i){return f(i.join(":"))}function y(i){return i=f(i),i?i+":":""}const D="memory",N=()=>{const i=new Map;return{name:D,options:{},hasItem(n){return i.has(n)},getItem(n){return i.get(n)??null},getItemRaw(n){return i.get(n)??null},setItem(n,c){i.set(n,c)},setItemRaw(n,c){i.set(n,c)},removeItem(n){i.delete(n)},getKeys(){return Array.from(i.keys())},clear(){i.clear()},dispose(){i.clear()}}};function J(i={}){const n={mounts:{"":i.driver||N()},mountpoints:[""],watching:!1,watchListeners:[],unwatch:{}},c=t=>{for(const e of n.mountpoints)if(t.startsWith(e))return{base:e,relativeKey:t.slice(e.length),driver:n.mounts[e]};return{base:"",relativeKey:t,driver:n.mounts[""]}},h=(t,e)=>n.mountpoints.filter(r=>r.startsWith(t)||e&&t.startsWith(r)).map(r=>({relativeBase:t.length>r.length?t.slice(r.length):void 0,mountpoint:r,driver:n.mounts[r]})),l=(t,e)=>{if(n.watching){e=f(e);for(const r of n.watchListeners)r(t,e)}},W=async()=>{if(!n.watching){n.watching=!0;for(const t in n.mounts)n.unwatch[t]=await R(n.mounts[t],l,t)}},M=async()=>{if(n.watching){for(const t in n.unwatch)await n.unwatch[t]();n.unwatch={},n.watching=!1}},P=(t,e,r)=>{const s=new Map,a=o=>{let m=s.get(o.base);return m||(m={driver:o.driver,base:o.base,items:[]},s.set(o.base,m)),m};for(const o of t){const m=typeof o=="string",v=f(m?o:o.key),w=m?void 0:o.value,I=m||!o.options?e:{...e,...o.options},B=c(v);a(B).items.push({key:v,value:w,relativeKey:B.relativeKey,options:I})}return Promise.all([...s.values()].map(o=>r(o))).then(o=>o.flat())},g={hasItem(t,e={}){t=f(t);const{relativeKey:r,driver:s}=c(t);return u(s.hasItem,r,e)},getItem(t,e={}){t=f(t);const{relativeKey:r,driver:s}=c(t);return u(s.getItem,r,e).then(a=>p(a))},getItems(t,e){return P(t,e,r=>r.driver.getItems?u(r.driver.getItems,r.items.map(s=>({key:s.relativeKey,options:s.options})),e).then(s=>s.map(a=>({key:z(r.base,a.key),value:p(a.value)}))):Promise.all(r.items.map(s=>u(r.driver.getItem,s.relativeKey,s.options).then(a=>({key:s.key,value:p(a)})))))},getItemRaw(t,e={}){t=f(t);const{relativeKey:r,driver:s}=c(t);return s.getItemRaw?u(s.getItemRaw,r,e):u(s.getItem,r,e).then(a=>A(a))},async setItem(t,e,r={}){if(e===void 0)return g.removeItem(t);t=f(t);const{relativeKey:s,driver:a}=c(t);a.setItem&&(await u(a.setItem,s,d(e),r),a.watch||l("update",t))},async setItems(t,e){await P(t,e,async r=>{if(r.driver.setItems)return u(r.driver.setItems,r.items.map(s=>({key:s.relativeKey,value:d(s.value),options:s.options})),e);r.driver.setItem&&await Promise.all(r.items.map(s=>u(r.driver.setItem,s.relativeKey,d(s.value),s.options)))})},async setItemRaw(t,e,r={}){if(e===void 0)return g.removeItem(t,r);t=f(t);const{relativeKey:s,driver:a}=c(t);if(a.setItemRaw)await u(a.setItemRaw,s,e,r);else if(a.setItem)await u(a.setItem,s,L(e),r);else return;a.watch||l("update",t)},async removeItem(t,e={}){typeof e=="boolean"&&(e={removeMeta:e}),t=f(t);const{relativeKey:r,driver:s}=c(t);s.removeItem&&(await u(s.removeItem,r,e),(e.removeMeta||e.removeMata)&&await u(s.removeItem,r+"$",e),s.watch||l("remove",t))},async getMeta(t,e={}){typeof e=="boolean"&&(e={nativeOnly:e}),t=f(t);const{relativeKey:r,driver:s}=c(t),a=Object.create(null);if(s.getMeta&&Object.assign(a,await u(s.getMeta,r,e)),!e.nativeOnly){const o=await u(s.getItem,r+"$",e).then(m=>p(m));o&&typeof o=="object"&&(typeof o.atime=="string"&&(o.atime=new Date(o.atime)),typeof o.mtime=="string"&&(o.mtime=new Date(o.mtime)),Object.assign(a,o))}return a},setMeta(t,e,r={}){return this.setItem(t+"$",e,r)},removeMeta(t,e={}){return this.removeItem(t+"$",e)},async getKeys(t,e={}){t=y(t);const r=h(t,!0);let s=[];const a=[];for(const o of r){const v=(await u(o.driver.getKeys,o.relativeBase,e)).map(w=>o.mountpoint+f(w)).filter(w=>!s.some(I=>w.startsWith(I)));a.push(...v),s=[o.mountpoint,...s.filter(w=>!w.startsWith(o.mountpoint))]}return t?a.filter(o=>o.startsWith(t)&&!o.endsWith("$")):a.filter(o=>!o.endsWith("$"))},async clear(t,e={}){t=y(t),await Promise.all(h(t,!1).map(async r=>{if(r.driver.clear)return u(r.driver.clear,r.relativeBase,e);if(r.driver.removeItem){const s=await r.driver.getKeys(r.relativeBase||"",e);return Promise.all(s.map(a=>r.driver.removeItem(a,e)))}}))},async dispose(){await Promise.all(Object.values(n.mounts).map(t=>j(t)))},async watch(t){return await W(),n.watchListeners.push(t),async()=>{n.watchListeners=n.watchListeners.filter(e=>e!==t),n.watchListeners.length===0&&await M()}},async unwatch(){n.watchListeners=[],await M()},mount(t,e){if(t=y(t),t&&n.mounts[t])throw new Error(`already mounted at ${t}`);return t&&(n.mountpoints.push(t),n.mountpoints.sort((r,s)=>s.length-r.length)),n.mounts[t]=e,n.watching&&Promise.resolve(R(e,l,t)).then(r=>{n.unwatch[t]=r}).catch(console.error),g},async unmount(t,e=!0){t=y(t),!(!t||!n.mounts[t])&&(n.watching&&t in n.unwatch&&(n.unwatch[t](),delete n.unwatch[t]),e&&await j(n.mounts[t]),n.mountpoints=n.mountpoints.filter(r=>r!==t),delete n.mounts[t])},getMount(t=""){t=f(t)+":";const e=c(t);return{driver:e.driver,base:e.base}},getMounts(t="",e={}){return t=f(t),h(t,e.parents).map(s=>({driver:s.driver,base:s.mountpoint}))}};return g}function R(i,n,c){return i.watch?i.watch((h,l)=>n(h,c+l)):()=>{}}async function j(i){typeof i.dispose=="function"&&await u(i.dispose)}export{J as c};