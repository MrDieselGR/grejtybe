(()=>{"use strict";var e,t,r,n,o,a,i,c={244499:(e,t,r)=>{async function n(e,t,n,o,a){return(await r.e(5522).then(r.bind(r,305522))).crop_gif(e,t,n,o,a)}var o,a;r(535666);function i(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function c(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}!function(e){e[e.BACKGROUND=0]="BACKGROUND"}(o||(o={}));!function(e){e[e.OPTION_1=0]="OPTION_1";e[e.OPTION_2=1]="OPTION_2";e[e.OPTION_3=2]="OPTION_3";e[e.OPTION_4=3]="OPTION_4";e[e.OPTION_7=7]="OPTION_7";e[e.OPTION_8=8]="OPTION_8"
;e[e.OPTION_9=9]="OPTION_9";e[e.OPTION_10=10]="OPTION_10";e[e.BIRTHDAY_OPTION_1=11]="BIRTHDAY_OPTION_1"}(a||(a={}));var O;a.OPTION_7,a.OPTION_8,a.OPTION_9,a.OPTION_10,[a.BIRTHDAY_OPTION_1,a.OPTION_7,a.OPTION_8,a.OPTION_9,a.OPTION_10,a.OPTION_1,a.OPTION_2,a.OPTION_3,a.OPTION_4].reduce((function(e,t,r){return c(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){i(e,t,r[t])}))}return e}({},e),i({},t,r))}),{});!function(e){e[e.AVATAR=0]="AVATAR";e[e.BANNER=1]="BANNER";e[e.BANNER_V2=2]="BANNER_V2";e[e.GUILD_BANNER=3]="GUILD_BANNER";e[e.VIDEO_BACKGROUND=4]="VIDEO_BACKGROUND";e[e.SCHEDULED_EVENT_IMAGE=5]="SCHEDULED_EVENT_IMAGE";e[e.HOME_HEADER=6]="HOME_HEADER"}(O||(O={}));var s;!function(e){e[e.CROP_GIF_START=0]="CROP_GIF_START"
;e[e.CROP_GIF_COMPLETE=1]="CROP_GIF_COMPLETE";e[e.CROP_GIF_ERROR=2]="CROP_GIF_ERROR"}(s||(s={}));function u(e,t,r,n,o,a,i){try{var c=e[a](i),O=c.value}catch(e){r(e);return}c.done?t(O):Promise.resolve(O).then(n,o)}function f(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){u(a,n,o,i,c,"next",e)}function c(e){u(a,n,o,i,c,"throw",e)}i(void 0)}))}}var p=function(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;(n=0,o)&&(a=[2&a[0],o.value]);switch(a[0]){case 0:case 1:o=a;break;case 4:i.label++;return{value:a[1],done:!1};case 5:i.label++
;n=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1];o=a;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(a);break}o[2]&&i.ops.pop();i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e];n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};function l(){return(l=f((function(e,t,r,o,a){var i;return p(this,(function(c){switch(c.label){case 0:c.trys.push([0,2,,3]);return[4,n(e,t,r,o,a)];case 1:i=c.sent();self.postMessage({type:s.CROP_GIF_COMPLETE,result:i});return[3,3];case 2:c.sent();self.postMessage({type:s.CROP_GIF_ERROR});return[3,3];case 3:return[2]}}))}))).apply(this,arguments)}self.addEventListener("message",(function(e){var t=e.data;if(t.type===s.CROP_GIF_START){!function(e,t,r,n,o){l.apply(this,arguments)}(t.gif,t.x,t.y,t.width,t.height)}}))}},O={}
;function s(e){var t=O[e];if(void 0!==t)return t.exports;var r=O[e]={id:e,loaded:!1,exports:{}};c[e](r,r.exports,s);r.loaded=!0;return r.exports}s.m=c;s.x=()=>{var e=s.O(void 0,[35666],(()=>s(244499)));return e=s.O(e)};e="function"==typeof Symbol?Symbol("webpack then"):"__webpack_then__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r=e=>{if(e){e.forEach((e=>e.r--));e.forEach((e=>e.r--?e.r++:e()))}},n=e=>!--e.r&&e(),o=(e,t)=>e?e.push(t):n(t),s.a=(a,i,c)=>{var O,s,u,f=c&&[],p=a.exports,l=!0,_=!1,b=(t,r,n)=>{if(!_){_=!0;r.r+=t.length;t.map(((t,o)=>t[e](r,n)));_=!1}},y=new Promise(((e,t)=>{u=t;s=()=>(e(p),r(f),f=0)}));y[t]=p;y[e]=(e,t)=>{if(l)return n(e);O&&b(O,e,t);o(f,e);y.catch(t)};a.exports=y;i((a=>{if(!a)return s();O=(a=>a.map((a=>{if(null!==a&&"object"==typeof a){if(a[e])return a;if(a.then){var i=[];a.then((e=>{c[t]=e;r(i);i=0}));var c={};c[e]=(e,t)=>(o(i,e),a.catch(t));return c}}var O={};O[e]=e=>n(e);O[t]=a;return O})))(a)
;var i,c,u=new Promise(((e,r)=>{(i=()=>e(c=O.map((e=>e[t])))).r=0;b(O,i,r)}));return i.r?u:c})).then(s,u);l=!1};a=[],s.O=(e,t,r,n)=>{if(!t){var o=1/0;for(u=0;u<a.length;u++){for(var[t,r,n]=a[u],i=!0,c=0;c<t.length;c++)if((!1&n||o>=n)&&Object.keys(s.O).every((e=>s.O[e](t[c]))))t.splice(c--,1);else{i=!1;n<o&&(o=n)}if(i){a.splice(u--,1);var O=r();void 0!==O&&(e=O)}}return e}n=n||0;for(var u=a.length;u>0&&a[u-1][2]>n;u--)a[u]=a[u-1];a[u]=[t,r,n]};s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})};(()=>{s.f={};s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,r)=>{s.f[r](e,t);return t}),[]))})();s.u=e=>({5522:"ad028cfa01b59bce2f07",35666:"0bdf00f7455c1ac54422"}[e]+".js");s.hmd=e=>{(e=Object.create(e)).children||(e.children=[]);Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}});return e}
;s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});Object.defineProperty(e,"__esModule",{value:!0})};s.v=(e,t,r,n)=>{var o=fetch(s.p+""+r+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(o,n).then((t=>Object.assign(e,t.instance.exports))):o.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,n))).then((t=>Object.assign(e,t.instance.exports)))};s.p="/assets/";(()=>{var e={44499:1};s.f.i=(t,r)=>{e[t]||importScripts(s.p+s.u(t))};var t=this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[],r=t.push.bind(t);t.push=t=>{var[n,o,a]=t;for(var i in o)s.o(o,i)&&(s.m[i]=o[i]);a&&a(s);for(;n.length;)e[n.pop()]=1;r(t)}})();i=s.x,s.x=()=>s.e(35666).then(i);s.x()})();
//# sourceMappingURL=4f6cad1c2d34b97d57ba.js.map