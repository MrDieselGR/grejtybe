"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[11860],{909844:(n,r,t)=>{t.r(r);t.d(r,{default:()=>v});var e=t(577869),a=t.n(e),o=t(496486),i=t.n(o);function l(n,r){(null==r||r>n.length)&&(r=n.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t];return e}function u(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var e,a,o=[],i=!0,l=!1;try{for(t=t.call(n);!(i=(e=t.next()).done);i=!0){o.push(e.value);if(r&&o.length===r)break}}catch(n){l=!0;a=n}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(n,r)||s(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(n){return function(n){if(Array.isArray(n))return l(n)}(n)||function(n){
if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||s(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(n,r){if(n){if("string"==typeof n)return l(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);return"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(n,r):void 0}}var f={1:"bold",4:"underline"},d={30:"black",31:"red",32:"green",33:"yellow",34:"blue",35:"magenta",36:"cyan",37:"white"},y={40:"black",41:"red",42:"green",43:"yellow",44:"blue",45:"magenta",46:"cyan",47:"white"},h=/\x1B\[(\d+(?:[:;]\d+)*)m/,g=new RegExp("(?=".concat(h.source,")"));function b(n,r,t,e){var a=["0"].concat(c(t));if(e){var o;(o=a).push.apply(o,c(Object.keys(r)))}return Object.entries(r).map((function(r){
var t=u(r,2),e=t[0],o=t[1];return function(n,r,t,e){return{className:"ansi-".concat(n,"-").concat(r),endsParent:!0,begin:g,"on:begin":function(n,r){var a=n[1].split(";");void 0===r.data.isOn&&(r.data.isOn=!1);var o=!0,i=!1,l=void 0;try{for(var u,c=a[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var s=u.value;s===t?r.data.isOn=!0:e.includes(s)&&(r.data.isOn=!1)}}catch(n){i=!0;l=n}finally{try{o||null==c.return||c.return()}finally{if(i)throw l}}r.data.isOn||r.ignoreMatch()}}}(n,o,e,a)}))}a().registerLanguage("ansi",(function(){var n={className:"ansi-control-sequence",begin:h,starts:{end:g,endsParent:!0}},r=c(b("foreground",d,["38","39"],!0)).concat(c(b("background",y,["48","49"],!0)),c(b("style",f,[],!1)),[n]);!function(n){for(var r=0;r<n.length;r++)n[r].contains=n.slice(r+1)}(r);return{contains:[{begin:g,contains:r}]}}));const v={highlight:function(n,r,t){if(!function(n){if(n.indexOf(m)>=0)return!1;var r=0,t=n.split("\n"),e=!0,a=!1,o=void 0;try{
for(var i,l=t[Symbol.iterator]();!(e=(i=l.next()).done);e=!0){var u=i.value;if(u.length>1e3)return!1;null==u.match(/^\s*[/][/]/)&&null!=u.match(/[^/]/)&&(r=0);var c=u.match(/[/]/g);if(null!=c&&(r+=c.length)>30)return!1}}catch(n){a=!0;o=n}finally{try{e||null==l.return||l.return()}finally{if(a)throw o}}return!0}(r))return null;var e=Date.now(),o=a().highlight(n,r,t);Date.now();0;return o},hasLanguage:function(n){return null!=a().getLanguage(n)}};var m=i().repeat("/",15)}}]);
//# sourceMappingURL=d125458fa27d00d6ef5a.js.map