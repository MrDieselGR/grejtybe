"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[45991,30741],{745991:(e,n,t)=>{t.r(n);t.d(n,{default:()=>O});var r=t(785893),o=(t(667294),t(489992)),c=t(804626),l=t(191940),i=t(272729),a=t(897245),u=t(30741),s=t(655432),f=t(422877),b=t(959797),d=t(314142),p=t.n(d);function h(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function y(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}function m(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e)
;for(r=0;r<c.length;r++){t=c[r];n.indexOf(t)>=0||(o[t]=e[t])}return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++){t=c[r];n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}}return o}const O=function(e){var n=e.channel,t=m(e,["channel"]),d=(0,i.Dt)();return(0,r.jsxs)(u.default,y(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){h(e,n,t[n])}))}return e}({confirmText:b.Z.Messages.END_STAGE,cancelText:b.Z.Messages.CANCEL,onConfirm:function(){(0,s.NZ)(n);c.default.disconnect()},confirmButtonColor:l.Co.Colors.RED,bodyClassName:p().body},t),{children:[(0,r.jsx)(f.Z,{className:p().headerIconContainer,children:(0,r.jsx)("div",{className:p().iconBackground,
children:(0,r.jsx)(a.Z,{width:40,height:40,className:p().headerIcon})})}),(0,r.jsx)(o.X6,{id:d,variant:"heading-xl/semibold",color:"header-primary",className:p().title,children:b.Z.Messages.END_EVENT_STAGE_CONFIRMATION_TITLE}),(0,r.jsx)(o.xv,{variant:"text-md/normal",color:"header-secondary",className:p().subtitle,children:b.Z.Messages.END_EVENT_STAGE_CONFIRMATION_SUBTITLE})]}))}},30741:(e,n,t)=>{t.r(n);t.d(n,{default:()=>y,DeclarativeConfirmModal:()=>m});var r=t(785893),o=t(667294),c=t(294184),l=t.n(c),i=t(489992),a=t(191940),u=t(67416),s=t(597126),f=t.n(s);function b(e,n,t,r,o,c,l){try{var i=e[c](l),a=i.value}catch(e){t(e);return}i.done?n(a):Promise.resolve(a).then(r,o)}function d(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var c=e.apply(n,t);function l(e){b(c,r,o,l,i,"next",e)}function i(e){b(c,r,o,l,i,"throw",e)}l(void 0)}))}}function p(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}
var h=function(e,n){var t,r,o,c,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;(r=0,o)&&(c=[2&c[0],o.value]);switch(c[0]){case 0:case 1:o=c;break;case 4:l.label++;return{value:c[1],done:!1};case 5:l.label++;r=c[1];c=[0];continue;case 7:c=l.ops.pop();l.trys.pop();continue;default:if(!(o=l.trys,o=o.length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){l=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){l.label=c[1];break}if(6===c[0]&&l.label<o[1]){l.label=o[1];o=c;break}if(o&&l.label<o[2]){l.label=o[2];l.ops.push(c);break}o[2]&&l.ops.pop();l.trys.pop();continue}c=n.call(e,l)}catch(e){c=[6,e];r=0}finally{t=o=0}
if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}};function y(e){var n,t,c=e.header,s=e.children,b=e.confirmText,p=e.cancelText,y=e.className,m=e.onConfirm,O=e.onCancel,v=e.onClose,j=e.onCloseCallback,g=e.bodyClassName,C=e.transitionState,w=e.loading,x=void 0!==w&&w,E=e.confirmButtonColor,N=void 0===E?a.Co.Colors.RED:E,P=e.focusCancel,k=void 0!==P&&P,T=o.useRef(null);o.useEffect((function(){k||setTimeout((function(){var e;return null===(e=T.current)||void 0===e?void 0:e.focus()}),0)}),[k]);o.useLayoutEffect((function(){return function(){return null==j?void 0:j()}}));null!=p&&(n=(0,r.jsx)(a.Co,{type:"button",look:a.Co.Looks.LINK,color:a.Co.Colors.PRIMARY,disabled:x,onClick:function(){null==O||O();v()},autoFocus:k,children:p}));null!=b&&(t=(0,r.jsx)(a.Co,{buttonRef:T,type:"submit",color:N,submitting:x,onClick:d((function(){return h(this,(function(e){switch(e.label){case 0:e.trys.push([0,2,,3]);return[4,null==m?void 0:m()];case 1:e.sent();v();return[3,3];case 2:
throw e.sent();case 3:return[2]}}))})),autoFocus:!k,children:b}));return(0,r.jsxs)(u.Y0,{className:y,transitionState:C,children:[null!=c?(0,r.jsx)(u.xB,{separator:!1,children:(0,r.jsx)(i.X6,{variant:"heading-lg/semibold",children:c})}):null,(0,r.jsx)(u.hz,{className:l()(f().content,g),children:s}),(0,r.jsxs)(u.mz,{children:[t,n]})]})}function m(e){return(0,r.jsx)(u.ZP,{onCloseRequest:e.dismissable?e.onCancel:null,renderModal:function(n){return(0,r.jsx)(y,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){p(e,n,t[n])}))}return e}({},n,e))}})}}}]);
//# sourceMappingURL=cd55db9b456a1f6b30d7.js.map