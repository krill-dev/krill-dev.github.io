import"./index.Cs678WvR.js";var x={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m;function p(){if(m)return i;m=1;var a=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function s(l,r,t){var d=null;if(t!==void 0&&(d=""+t),r.key!==void 0&&(d=""+r.key),"key"in r){t={};for(var u in r)u!=="key"&&(t[u]=r[u])}else t=r;return r=t.ref,{$$typeof:a,type:l,key:d,ref:r!==void 0?r:null,props:t}}return i.Fragment=o,i.jsx=s,i.jsxs=s,i}var c;function h(){return c||(c=1,x.exports=p()),x.exports}var e=h();function v({name:a,role:o,intro:s,links:l}){return e.jsxs("section",{style:n.card,children:[e.jsx("p",{style:n.kicker,children:"About me"}),e.jsx("h1",{style:n.name,children:a}),e.jsx("p",{style:n.role,children:o}),e.jsx("p",{style:n.intro,children:s}),e.jsx("ul",{style:n.links,children:l.map(r=>e.jsx("li",{children:e.jsx("a",{href:r.href,target:"_blank",rel:"noreferrer",children:r.label})},r.href))})]})}const n={card:{width:"100%",maxWidth:700,background:"var(--card)",border:"1px solid var(--line)",borderRadius:16,padding:"2rem",boxShadow:"0 10px 30px rgba(0,0,0,0.35)"},kicker:{margin:"0 0 .75rem",color:"var(--muted)",letterSpacing:".08em",textTransform:"uppercase",fontSize:".75rem"},name:{margin:0,fontSize:"2rem"},role:{margin:".4rem 0 1rem",color:"var(--muted)"},intro:{margin:"0 0 1.25rem",lineHeight:1.7},links:{margin:0,paddingLeft:"1rem",display:"grid",gap:".4rem"}};export{v as default};
