function c(n,t){const e=n.exec(t);return e==null?void 0:e.groups}const p=/^tuple(?<array>(\[(\d*)\])*)$/;function s(n){let t=n.type;if(p.test(n.type)&&"components"in n){t="(";const e=n.components.length;for(let u=0;u<e;u++){const l=n.components[u];t+=s(l),u<e-1&&(t+=", ")}const o=c(p,n.type);return t+=`)${(o==null?void 0:o.array)??""}`,s({...n,type:t})}return"indexed"in n&&n.indexed&&(t=`${t} indexed`),n.name?`${t} ${n.name}`:t}function r(n){let t="";const e=n.length;for(let o=0;o<e;o++){const u=n[o];t+=s(u),o!==e-1&&(t+=", ")}return t}function f(n){return n.type==="function"?`function ${n.name}(${r(n.inputs)})${n.stateMutability&&n.stateMutability!=="nonpayable"?` ${n.stateMutability}`:""}${n.outputs.length?` returns (${r(n.outputs)})`:""}`:n.type==="event"?`event ${n.name}(${r(n.inputs)})`:n.type==="error"?`error ${n.name}(${r(n.inputs)})`:n.type==="constructor"?`constructor(${r(n.inputs)})${n.stateMutability==="payable"?" payable":""}`:n.type==="fallback"?"fallback()":"receive() external payable"}export{f};