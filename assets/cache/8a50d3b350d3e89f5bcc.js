"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[15434],{366036:(t,n,e)=>{e.r(n);e.d(n,{default:()=>m});var r=e(785893),o=e(667294),a=e(294184),i=e.n(a),l=e(817673),c=e(28e3),u=e.n(c),s=e(489992),f=e(82961),d=e(95795),p=e.n(d);function h(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function y(t,n,e){n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e;return t}function b(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,a=[],i=!0,l=!1;try{for(e=e.call(t);!(i=(r=e.next()).done);i=!0){a.push(r.value);if(n&&a.length===n)break}}catch(t){l=!0;o=t}finally{try{i||null==e.return||e.return()}finally{if(l)throw o}}return a}}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return h(t,n);var e=Object.prototype.toString.call(t).slice(8,-1)
;"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return h(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(){var t=b(o.useState(!1),2),n=t[0],e=t[1];o.useEffect((function(){var t,n,r,o=l.parse("".substr(1));new(u())("".concat(window.location.protocol,"//").concat(null!==(t=o.sockHost)&&void 0!==t?t:window.location.hostname,":").concat(null!==(n=o.sockPort)&&void 0!==n?n:window.location.port).concat(null!==(r=o.sockPath)&&void 0!==r?r:"/sockjs-node")).onmessage=function(t){if(null!=t.data){switch(JSON.parse(t.data).type){case"invalid":e(!0);break;case"hot":case"liveReload":break;default:e(!1)}}}}),[]);return(0,r.jsxs)("div",{className:i()("theme-light",p().container,y({},p().visible,n)),children:[(0,r.jsx)(f.Z,{
type:f.Z.Type.SPINNING_CIRCLE,className:p().spinner}),(0,r.jsx)(s.xv,{variant:"text-sm/medium",children:"Compiling..."})]})}}}]);
//# sourceMappingURL=8a50d3b350d3e89f5bcc.js.map