"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[95846],{98728:(e,n,r)=>{r.d(n,{Z:()=>g});var t=r(785893),o=r(667294),l=r(294184),a=r.n(l),i=r(489992),c=r(191940),u=r(272729),s=r(67416),f=r(959797),d=r(998723),h=r.n(d);function p(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function y(e,n,r,t,o,l,a){try{var i=e[l](a),c=i.value}catch(e){r(e);return}i.done?n(c):Promise.resolve(c).then(t,o)}function b(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var l=e.apply(n,r);function a(e){y(l,t,o,a,i,"next",e)}function i(e){y(l,t,o,a,i,"throw",e)}a(void 0)}))}}function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,l=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(t=r.next()).done);a=!0){l.push(t.value);if(n&&l.length===n)break}}catch(e){i=!0;o=e}finally{try{
a||null==r.return||r.return()}finally{if(i)throw o}}return l}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return p(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=function(e,n){var r,t,o,l,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,t&&(o=2&l[0]?t.return:l[0]?t.throw||((o=t.return)&&o.call(t),
0):t.next)&&!(o=o.call(t,l[1])).done)return o;(t=0,o)&&(l=[2&l[0],o.value]);switch(l[0]){case 0:case 1:o=l;break;case 4:a.label++;return{value:l[1],done:!1};case 5:a.label++;t=l[1];l=[0];continue;case 7:l=a.ops.pop();a.trys.pop();continue;default:if(!(o=a.trys,o=o.length>0&&o[o.length-1])&&(6===l[0]||2===l[0])){a=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){a.label=l[1];break}if(6===l[0]&&a.label<o[1]){a.label=o[1];o=l;break}if(o&&a.label<o[2]){a.label=o[2];a.ops.push(l);break}o[2]&&a.ops.pop();a.trys.pop();continue}l=n.call(e,a)}catch(e){l=[6,e];t=0}finally{r=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}};function g(e){var n=e.errorText,r=e.title,l=e.description,d=e.transitionState,p=e.onCancel,y=e.onConfirm,g=e.children,C=(0,u.Dt)(),E=m(o.useState(!1),2),x=E[0],I=E[1],O=o.useCallback(b((function(){return v(this,(function(e){switch(e.label){case 0:I(!0);e.label=1;case 1:e.trys.push([1,3,4,5]);return[4,y()];case 2:e.sent();return[3,5];case 3:
throw e.sent();case 4:I(!1);return[7];case 5:return[2]}}))})),[y]);return(0,t.jsxs)(s.Y0,{className:h().modal,transitionState:d,"aria-labelledby":C,size:s.Cg.SMALL,children:[(0,t.jsxs)(s.hz,{className:h().modalContent,children:[(0,t.jsx)(i.X6,{variant:"heading-md/semibold",id:C,children:r}),null!=l&&""!==l?(0,t.jsx)(i.xv,{variant:"text-sm/normal",color:"header-secondary",className:h().description,children:l}):null,(0,t.jsx)("div",{className:h().body,children:g}),null!=n&&""!==n?(0,t.jsx)(i.xv,{className:h().errorText,variant:"text-xs/normal",color:"text-danger",children:n}):null]}),(0,t.jsxs)(s.mz,{children:[(0,t.jsx)(c.Co,{submitting:x,className:h().button,size:c.Co.Sizes.SMALL,color:c.Co.Colors.BRAND,onClick:O,children:f.Z.Messages.SAVE}),(0,t.jsx)(c.Co,{className:a()(h().cancelButton,h().button),size:c.Co.Sizes.SMALL,color:c.Co.Colors.PRIMARY,onClick:p,children:f.Z.Messages.CANCEL})]})]})}},595846:(e,n,r)=>{r.r(n);r.d(n,{default:()=>T})
;var t=r(785893),o=r(667294),l=r(294184),a=r.n(l),i=r(176907),c=r(698534),u=r(489992),s=r(323657),f=r(832010),d=r(191940),h=r(629590),p=r(801593),y=r(523283),b=r(58877),m=r(855550),v=r(381604),g=r(570239),C=r(98728),E=r(580946),x=r(461061),I=r(959797),O=r(998723),j=r.n(O);function w(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function S(e,n,r,t,o,l,a){try{var i=e[l](a),c=i.value}catch(e){r(e);return}i.done?n(c):Promise.resolve(c).then(t,o)}function N(e,n,r){n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r;return e}function M(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){
Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}));return e}function A(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,l=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(t=r.next()).done);a=!0){l.push(t.value);if(n&&l.length===n)break}}catch(e){i=!0;o=e}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return l}}(e,n)||_(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||_(e)||function(){
throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,n){if(e){if("string"==typeof e)return w(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);return"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,n):void 0}}var L=function(e,n){var r,t,o,l,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,t&&(o=2&l[0]?t.return:l[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,l[1])).done)return o;(t=0,o)&&(l=[2&l[0],o.value]);switch(l[0]){case 0:case 1:o=l;break;case 4:a.label++
;return{value:l[1],done:!1};case 5:a.label++;t=l[1];l=[0];continue;case 7:l=a.ops.pop();a.trys.pop();continue;default:if(!(o=a.trys,o=o.length>0&&o[o.length-1])&&(6===l[0]||2===l[0])){a=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){a.label=l[1];break}if(6===l[0]&&a.label<o[1]){a.label=o[1];o=l;break}if(o&&a.label<o[2]){a.label=o[2];a.ops.push(l);break}o[2]&&a.ops.pop();a.trys.pop();continue}l=n.call(e,a)}catch(e){l=[6,e];t=0}finally{r=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}},k="MULTIPLE_CHOICE",P=function(e){var n=e.choice,r=e.index,l=e.onChange,u=e.onClear,s=e.onReorder,f=e.isDropHovered,h=o.useRef(null),m=o.useRef(null),g=A((0,i.c)({type:k,item:{choice:n,index:r},end:function(e,n){null==e||n.didDrop()||s(e.choice,null,!0)}}),3),C=g[1],E=g[2],x=A((0,c.L)({accept:k,hover:function(e,n){var t,o=e.index,l=null===(t=h.current)||void 0===t?void 0:t.getBoundingClientRect(),a=n.getClientOffset();if(null!=l&&null!=a){var i=(l.bottom-l.top)/2,c=a.y-l.top
;o<r&&c<i||o>r&&c>i||s(e.choice,r,!1)}},drop:function(e){s(e.choice,r,!0)}}),2),O=x[1];o.useLayoutEffect((function(){C(m);E(O(h));return function(){C(null);O(null)}}),[C,O,E]);return(0,t.jsxs)("div",{ref:h,className:a()(j().draggableInputContainer,N({},j().dragging,f)),"data-dnd-name":n,children:[(0,t.jsx)("div",{className:j().radioIconEmptyContainer,children:(0,t.jsx)(v.Z,{height:20,width:20,className:j().radioIconEmpty})}),(0,t.jsxs)("div",{className:j().inputWrapper,children:[(0,t.jsx)(p.ZP,{autoFocus:!0,onChange:function(e){return l(e)},placeholder:I.Z.Messages.MEMBER_VERIFICATION_MULTIPLE_CHOICE_PLACEHOLDER.format({index:r+1}),value:n}),(0,t.jsx)(d.Co,{className:j().clearButton,onClick:u,look:d.Co.Looks.BLANK,size:d.Co.Sizes.NONE,children:(0,t.jsx)(y.Z,{className:j().clearIcon})})]}),(0,t.jsx)("div",{ref:m,className:j().dragContainer,"data-dnd-name":n,children:(0,t.jsx)(b.Z,{className:j().dragIcon})})]})};const T=function(e){
var n,r,l,a,i=e.field,c=e.onSave,d=e.onClose,y=A(o.useState(null!==(n=null==i?void 0:i.label)&&void 0!==n?n:""),2),b=y[0],v=y[1],O=A(o.useState(null!==(r=null==i?void 0:i.choices)&&void 0!==r?r:[""]),2),w=O[0],_=O[1],k=A(o.useState(null),2),T=k[0],D=k[1],Z=A(o.useState(null),2),B=Z[0],F=Z[1],U=function(e,n,r){if(null!=w){null!=T&&D(null);var t=w.indexOf(e),o=R(w);if(null!=n&&n!==t){o.splice(t,1);o.splice(n,0,e);_(o)}r?null!==n&&F(null):n!==B&&F(n)}},H=(a=(l=function(){var e,n,r,t;return L(this,(function(o){switch(o.label){case 0:null!=T&&D(null);if(""===(e=b.trim())){D(I.Z.Messages.MEMBER_VERIFICATION_FIELD_QUESTION_REQUIRED_ERROR);return[2]}if(0===w.map((function(e){return e.trim()})).filter((function(e){return""!==e})).length){D(I.Z.Messages.MEMBER_VERIFICATION_CHOICES_REQUIRED_ERROR);return[2]}n={field_type:g.QJ.MULTIPLE_CHOICE,label:e,choices:w,required:!0};o.label=1;case 1:o.trys.push([1,3,,4]);return[4,c(n)];case 2:o.sent();d();return[3,4];case 3:r=o.sent();t=new s.Hx(r)
;D(t.getAnyErrorMessage());return[3,4];case 4:return[2]}}))},function(){var e=this,n=arguments;return new Promise((function(r,t){var o=l.apply(e,n);function a(e){S(o,r,t,a,i,"next",e)}function i(e){S(o,r,t,a,i,"throw",e)}a(void 0)}))}),function(){return a.apply(this,arguments)});return(0,t.jsxs)(C.Z,M(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));t.forEach((function(n){N(e,n,r[n])}))}return e}({},e),{errorText:T,title:I.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,onConfirm:H,onCancel:d,children:[(0,t.jsx)(p.ZP,{autoFocus:!0,className:j().spacedItem,onChange:function(e){null!=T&&D(null);var n=e.replace(/(\r\n|\n|\r)/g," ");n.length>E.XN&&(n=e.slice(0,E.XN));v(n)},placeholder:I.Z.Messages.MEMBER_VERIFICATION_FIELD_QUESTION,value:b}),(0,
t.jsx)("div",{className:j().divider}),w.map((function(e,n){return(0,t.jsx)(P,{choice:e,index:n,onChange:function(e){return function(e,n){null!=T&&D(null);var r=e.replace(/(\r\n|\n|\r)/g," ");r.length>E.au&&(r=r.slice(0,E.au));var t=R(w);t[n]=r;_(t)}(e,n)},onClear:function(){return function(e){null!=T&&D(null);var n=R(w.slice(0,e)).concat(R(w.slice(e+1)));_(0===n.length?[""]:n)}(n)},onReorder:U,isDropHovered:n===B},"choice-".concat(n))})),w.length!==E.mb&&(0,t.jsxs)("div",{className:j().addItemContainer,children:[(0,t.jsx)(m.Z,{height:17,width:17,color:(0,f.Lq)(x.Ilk.LINK_500)}),(0,t.jsx)(h.Z,{className:j().addItemButton,onClick:function(){null!=T&&D(null);w.length!==E.mb&&_(R(w).concat([""]))},children:(0,t.jsx)(u.xv,{color:"text-link",variant:"text-md/normal",children:I.Z.Messages.MEMBER_VERIFICATION_MULTIPLE_CHOICE_ADD})})]})]}))}}}]);
//# sourceMappingURL=3ec41639fa8711ed4f11.js.map