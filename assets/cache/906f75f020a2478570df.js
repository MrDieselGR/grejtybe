"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[59983],{98728:(e,r,t)=>{t.d(r,{Z:()=>g});var n=t(785893),o=t(667294),a=t(294184),i=t.n(a),l=t(489992),u=t(191940),c=t(272729),s=t(67416),f=t(959797),b=t(998723),p=t.n(b);function y(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function h(e,r,t,n,o,a,i){try{var l=e[a](i),u=l.value}catch(e){t(e);return}l.done?r(u):Promise.resolve(u).then(n,o)}function d(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function i(e){h(a,n,o,i,l,"next",e)}function l(e){h(a,n,o,i,l,"throw",e)}i(void 0)}))}}function v(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(n=t.next()).done);i=!0){a.push(n.value);if(r&&a.length===r)break}}catch(e){l=!0;o=e}finally{try{
i||null==t.return||t.return()}finally{if(l)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return y(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return y(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=function(e,r){var t,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),
0):n.next)&&!(o=o.call(n,a[1])).done)return o;(n=0,o)&&(a=[2&a[0],o.value]);switch(a[0]){case 0:case 1:o=a;break;case 4:i.label++;return{value:a[1],done:!1};case 5:i.label++;n=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1];o=a;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(a);break}o[2]&&i.ops.pop();i.trys.pop();continue}a=r.call(e,i)}catch(e){a=[6,e];n=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};function g(e){var r=e.errorText,t=e.title,a=e.description,b=e.transitionState,y=e.onCancel,h=e.onConfirm,g=e.children,w=(0,c.Dt)(),j=v(o.useState(!1),2),O=j[0],x=j[1],C=o.useCallback(d((function(){return m(this,(function(e){switch(e.label){case 0:x(!0);e.label=1;case 1:e.trys.push([1,3,4,5]);return[4,h()];case 2:e.sent();return[3,5];case 3:
throw e.sent();case 4:x(!1);return[7];case 5:return[2]}}))})),[h]);return(0,n.jsxs)(s.Y0,{className:p().modal,transitionState:b,"aria-labelledby":w,size:s.Cg.SMALL,children:[(0,n.jsxs)(s.hz,{className:p().modalContent,children:[(0,n.jsx)(l.X6,{variant:"heading-md/semibold",id:w,children:t}),null!=a&&""!==a?(0,n.jsx)(l.xv,{variant:"text-sm/normal",color:"header-secondary",className:p().description,children:a}):null,(0,n.jsx)("div",{className:p().body,children:g}),null!=r&&""!==r?(0,n.jsx)(l.xv,{className:p().errorText,variant:"text-xs/normal",color:"text-danger",children:r}):null]}),(0,n.jsxs)(s.mz,{children:[(0,n.jsx)(u.Co,{submitting:O,className:p().button,size:u.Co.Sizes.SMALL,color:u.Co.Colors.BRAND,onClick:C,children:f.Z.Messages.SAVE}),(0,n.jsx)(u.Co,{className:i()(p().cancelButton,p().button),size:u.Co.Sizes.SMALL,color:u.Co.Colors.PRIMARY,onClick:y,children:f.Z.Messages.CANCEL})]})]})}},359983:(e,r,t)=>{t.r(r);t.d(r,{default:()=>x})
;var n=t(785893),o=t(667294),a=t(323657),i=t(7046),l=t(138402),u=t(562181),c=t(604175),s=t(710063),f=t(98728),b=t(461061),p=t(959797),y=t(380203),h=t.n(y);function d(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function v(e,r,t,n,o,a,i){try{var l=e[a](i),u=l.value}catch(e){t(e);return}l.done?r(u):Promise.resolve(u).then(n,o)}function m(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function i(e){v(a,n,o,i,l,"next",e)}function l(e){v(a,n,o,i,l,"throw",e)}i(void 0)}))}}function g(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t;return e}function w(e,r){r=null!=r?r:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){
return Object.getOwnPropertyDescriptor(e,r).enumerable})));t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}));return e}function j(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(n=t.next()).done);i=!0){a.push(n.value);if(r&&a.length===r)break}}catch(e){l=!0;o=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return d(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(e,r)}(e,r)||function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var O=function(e,r){var t,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;(n=0,o)&&(a=[2&a[0],o.value]);switch(a[0]){case 0:case 1:o=a;break;case 4:i.label++;return{value:a[1],done:!1};case 5:i.label++;n=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){
i.label=o[1];o=a;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(a);break}o[2]&&i.ops.pop();i.trys.pop();continue}a=r.call(e,i)}catch(e){a=[6,e];n=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};function x(e){var r=e.guild,t=e.onClose,y=j(o.useState(r.verificationLevel),2),d=y[0],v=y[1],x=j(o.useState(null),2),C=x[0],S=x[1],A=r.hasFeature(b.oNc.COMMUNITY),k=(0,s.IF)(A).filter((function(e){return!e.disabled})),P=o.useCallback(m((function(){var e,n;return O(this,(function(o){switch(o.label){case 0:null!=C&&S(null);o.label=1;case 1:o.trys.push([1,3,,4]);return[4,i.Z.saveGuild(r.id,{verificationLevel:d})];case 2:o.sent();i.Z.updateGuild({verificationLevel:d});t();return[3,4];case 3:e=o.sent();n=new a.Hx(e);S(n.getAnyErrorMessage());return[3,4];case 4:return[2]}}))})),[C,r.id,d,t]);return(0,n.jsx)(f.Z,w(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t)
;"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));n.forEach((function(r){g(e,r,t[r])}))}return e}({},e),{title:p.Z.Messages.FORM_LABEL_VERIFICATION_LEVEL,errorText:C,onConfirm:P,onCancel:t,children:(0,n.jsxs)(u.hj,{children:[(0,n.jsx)(c.Z,{type:c.Z.Types.DESCRIPTION,className:h().marginBottom20,children:p.Z.Messages.FORM_HELP_VERIFICATION_LEVEL.format()}),(0,n.jsx)(l.ZP,{value:d,options:k,onChange:function(e){return v(e.value)}})]})}))}}}]);
//# sourceMappingURL=906f75f020a2478570df.js.map