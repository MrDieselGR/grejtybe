(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[91352],{698242:(e,r,n)=>{e.exports=n.p+"f3767d455e70dcdd1c8a3102e42c6d34.svg"},634737:(e,r,n)=>{e.exports=n.p+"8d224aa39e763dff664f330fdadeda3e.svg"},395951:(e,r,n)=>{"use strict";n.d(r,{FD:()=>v,Zy:()=>_,ss:()=>b,S2:()=>y,Mn:()=>A,ol:()=>g,V3:()=>N,I5:()=>C,cV:()=>T,b9:()=>R,si:()=>j,W3:()=>S,P6:()=>x,_V:()=>F});var t=n(675860),o=n(444450),i=n(173436),s=n(838478),a=n(655695),l=n(932847),u=n(917870),c=n(283273),d=n(742269),f=n(461061),I=n(959797);function p(e,r,n,t,o,i,s){try{var a=e[i](s),l=a.value}catch(e){n(e);return}a.done?r(l):Promise.resolve(l).then(t,o)}function E(e){return function(){var r=this,n=arguments;return new Promise((function(t,o){var i=e.apply(r,n);function s(e){p(i,t,o,s,a,"next",e)}function a(e){p(i,t,o,s,a,"throw",e)}s(void 0)}))}}function m(e,r,n){r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n;return e}function O(e){
for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));t.forEach((function(r){m(e,r,n[r])}))}return e}var h=function(e,r){var n,t,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,t&&(o=2&i[0]?t.return:i[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,i[1])).done)return o;(t=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:s.label++;return{value:i[1],done:!1};case 5:s.label++;t=i[1];i=[0];continue;case 7:i=s.ops.pop();s.trys.pop();continue;default:if(!(o=s.trys,
o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1];o=i;break}if(o&&s.label<o[2]){s.label=o[2];s.ops.push(i);break}o[2]&&s.ops.pop();s.trys.pop();continue}i=r.call(e,s)}catch(e){i=[6,e];t=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};function v(){i.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_INIT"})}function _(){i.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_CLOSE"})}function b(e,r){var n=r?I.Z.Messages.DELETE_ACCOUNT:I.Z.Messages.DISABLE_ACCOUNT,o=r?f.ANM.DELETE_ACCOUNT:f.ANM.DISABLE_ACCOUNT;return(0,c.Z)((function(r){return t.Z.post({url:o,body:O({password:e},r),oldFormErrors:!0})}),{modalProps:{title:n},checkEnabled:!1}).then((function(){i.Z.dispatch({type:"LOGOUT"});(0,a.uL)(f.Z5c.DEFAULT_LOGGED_OUT)}))}function y(e){return M.apply(this,arguments)}function M(){return(M=E((function(e){var r,n,o;return h(this,(function(s){switch(s.label){
case 0:return[4,t.Z.patch({url:f.ANM.ME,body:e,oldFormErrors:!0})];case 1:r=s.sent();if((n=r.body).token){o=n.token;delete n.token;i.Z.dispatch({type:"UPDATE_TOKEN",token:o,userId:n.id});null!=(null==e?void 0:e.password)&&null!=(null==e?void 0:e.new_password)&&i.Z.dispatch({type:"PASSWORD_UPDATED",userId:n.id})}i.Z.dispatch({type:"CURRENT_USER_UPDATE",user:n});return[2,r]}}))}))).apply(this,arguments)}function A(e){var r=e.username,n=e.discriminator,t=e.email,s=e.emailToken,a=e.password,p=e.avatar,E=e.avatarDecoration,m=e.newPassword;i.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_SUBMIT"});return(0,c.Z)((function(e){var i=O({username:r,email:t,email_token:s,password:a,avatar:p,discriminator:n,new_password:m},e);void 0!==E&&(null==E?i.avatar_decoration_preset=null:E.isCustom?i.avatar_decoration=E.data:i.avatar_decoration_preset=E.name);var l=o.Z.get(f.JkL),u=(0,d.xJ)();if(null!=u&&null!=l){i.push_provider=u;i.push_token=l}var c=o.Z.get(f.scU);if(null!=f.mvA&&null!=c){
i.push_voip_provider=f.mvA;i.push_voip_token=c}return y(i)}),{checkEnabled:!1,modalProps:{title:I.Z.Messages.TWO_FA_CHANGE_ACCOUNT},hooks:{onEarlyClose:function(){return i.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",errors:{}})}}}).then((function(e){var r=e.body;l.default.track(f.rMx.USER_AVATAR_UPDATED,{animated:(0,u.xR)(r.avatar)});i.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"});return e}),(function(e){i.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",errors:e.body});return e}))}function g(){return t.Z.get({url:f.ANM.USER_HARVEST,oldFormErrors:!0})}function N(){return t.Z.post({url:f.ANM.USER_HARVEST,oldFormErrors:!0})}function C(e){i.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",avatar:e});null==e?s.Z.announce(I.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE):s.Z.announce(I.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)}function T(e){i.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",avatarDecoration:e})}function R(){
i.Z.dispatch({type:"USER_SETTINGS_CLEAR_ERRORS"})}function j(){i.Z.dispatch({type:"USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"})}function S(){i.Z.dispatch({type:"USER_SETTINGS_RESET_ALL_PENDING"})}function x(){i.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"})}function F(e){i.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",disable:e})}},291352:(e,r,n)=>{"use strict";n.d(r,{Z:()=>Qe});var t=n(785893),o=n(667294),i=n(294184),s=n.n(i),a=n(791462),l=n(489992),u=n(822567),c=n(395951),d=n(730189),f=n(40188),I=n(989232),p=n(392115),E=n(95350),m=n(212218),O=n(653772),h=n(859023),v=n(191940),_=n(487502),b=n(969225),y=n(304546),M=n(801593),A=n(757987),g=n(562181),N=n(962271),C=n(67416),T=n(932847),R=n(917870),j=n(377305),S=n(448536),x=n(124264),F=n(570239),w=n(830426),Z=n(123113),P=n(461061);function L(e){var r=e.guildId,n=(0,a.e7)([S.Z],(function(){return S.Z.get(r)})),t=null==n?void 0:n.guild;return(0,a.e7)([O.Z],(function(){
var e,n=null===(e=O.Z.getGuild(r))||void 0===e?void 0:e.verificationLevel,o=null==t?void 0:t.verification_level;return(null!=n?n:o)===P.sFg.VERY_HIGH}),[r,t])}var U=n(855209),V=n(847072),D=n(959797),k=n(732231),B=n.n(k);function G(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function H(e,r,n,t,o,i,s){try{var a=e[i](s),l=a.value}catch(e){n(e);return}a.done?r(l):Promise.resolve(l).then(t,o)}function z(e,r,n){r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n;return e}function Y(e,r){r=null!=r?r:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})));n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){
Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}));return e}function J(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,i=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(t=n.next()).done);s=!0){i.push(t.value);if(r&&i.length===r)break}}catch(e){a=!0;o=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return G(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return G(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var X=function(e,r){var n,t,o,i,s={label:0,
sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,t&&(o=2&i[0]?t.return:i[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,i[1])).done)return o;(t=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:s.label++;return{value:i[1],done:!1};case 5:s.label++;t=i[1];i=[0];continue;case 7:i=s.ops.pop();s.trys.pop();continue;default:if(!(o=s.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1];o=i;break}if(o&&s.label<o[2]){s.label=o[2];s.ops.push(i);break}o[2]&&s.ops.pop();s.trys.pop();continue}i=r.call(e,s)}catch(e){i=[6,e];t=0}finally{n=o=0}if(5&i[0])throw i[1];return{
value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};function Q(){var e=J(o.useState(!1),2),r=e[0],n=e[1],i=J(o.useState(!1),2),s=i[0],a=i[1],c=J(o.useState(!1),2),d=c[0],f=c[1];o.useEffect((function(){var e;s&&(e=setTimeout((function(){a(!1)}),2e3));return function(){null!=e&&clearTimeout(e)}}),[s]);var I,p,E=(p=(I=function(){return X(this,(function(e){switch(e.label){case 0:if(r)return[2];n(!0);e.label=1;case 1:e.trys.push([1,3,4,5]);return[4,u.Z.verifyResend()];case 2:e.sent();a(!0);f(!0);return[3,5];case 3:e.sent();return[3,5];case 4:n(!1);return[7];case 5:return[2]}}))},function(){var e=this,r=arguments;return new Promise((function(n,t){var o=I.apply(e,r);function i(e){H(o,n,t,i,s,"next",e)}function s(e){H(o,n,t,i,s,"throw",e)}i(void 0)}))}),function(){return p.apply(this,arguments)});return s?(0,t.jsx)(l.xv,{className:B().verifyConfirmText,variant:"text-sm/normal",color:"text-positive",children:D.Z.Messages.MEMBER_VERIFICATION_EMAIL_VERIFICATION_EMAIL_SENT}):(0,t.jsx)(v.Co,{
size:v.Co.Sizes.SMALL,submitting:r,onClick:E,children:d?D.Z.Messages.RESEND_EMAIL_SHORT:D.Z.Messages.VERIFY})}function W(){return(0,t.jsx)(V.PU,{icon:U.Z,text:D.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_LABEL,footnote:D.Z.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,meetsRequirement:!1,children:(0,t.jsx)(A.ZP,{text:D.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_FIELD_SETTINGS_TOOLTIP,children:function(e){return(0,t.jsx)(v.Co,Y(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));t.forEach((function(r){z(e,r,n[r])}))}return e}({},e),{size:v.Co.Sizes.SMALL,disabled:!0,children:D.Z.Messages.VERIFY}))}})})}function q(e){
var r=e.isUserVerified,n=r?D.Z.Messages.MEMBER_VERIFICATION_EMAIL_VERIFIED:D.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_LABEL;return(0,t.jsx)(V.PU,{icon:U.Z,text:n,footnote:D.Z.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,meetsRequirement:r,children:(0,t.jsx)(Q,{})})}var K=n(464497),$=n(928575),ee=n(99918),re=n(526066),ne=n(897576),te=n(330665);function oe(e,r,n,t,o,i,s){try{var a=e[i](s),l=a.value}catch(e){n(e);return}a.done?r(l):Promise.resolve(l).then(t,o)}function ie(e){return function(){var r=this,n=arguments;return new Promise((function(t,o){var i=e.apply(r,n);function s(e){oe(i,t,o,s,a,"next",e)}function a(e){oe(i,t,o,s,a,"throw",e)}s(void 0)}))}}function se(e,r,n){r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n;return e}function ae(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n)
;"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));t.forEach((function(r){se(e,r,n[r])}))}return e}function le(e,r){r=null!=r?r:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})));n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}));return e}var ue=function(e,r){var n,t,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){
if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,t&&(o=2&i[0]?t.return:i[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,i[1])).done)return o;(t=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:s.label++;return{value:i[1],done:!1};case 5:s.label++;t=i[1];i=[0];continue;case 7:i=s.ops.pop();s.trys.pop();continue;default:if(!(o=s.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1];o=i;break}if(o&&s.label<o[2]){s.label=o[2];s.ops.push(i);break}o[2]&&s.ops.pop();s.trys.pop();continue}i=r.call(e,s)}catch(e){i=[6,e];t=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};function ce(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(V.PU,{icon:re.Z,text:D.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_LABEL,
footnote:D.Z.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,meetsRequirement:!1,children:(0,t.jsx)(A.ZP,{text:D.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_FIELD_SETTINGS_TOOLTIP,children:function(e){return(0,t.jsx)(v.Co,le(ae({},e),{size:v.Co.Sizes.SMALL,disabled:!0,children:D.Z.Messages.VERIFY}))}})})})}function de(e){var r=e.isUserVerified,o=r?D.Z.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED:D.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_LABEL;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(V.PU,{icon:re.Z,text:o,footnote:D.Z.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,meetsRequirement:r,children:(0,t.jsx)(v.Co,{size:v.Co.Sizes.SMALL,onClick:function(){(0,ne.ZD)(ie((function(){var e,r;return ue(this,(function(o){switch(o.label){case 0:return[4,Promise.all([n.e(40532),n.e(71784),n.e(45692),n.e(97846),n.e(11228)]).then(n.bind(n,997846))];case 1:e=o.sent(),r=e.default;return[2,function(e){return(0,t.jsx)(r,ae({reason:ee.L.GUILD_PHONE_REQUIRED},e))}]}}))
})),{modalKey:te.M})},children:D.Z.Messages.VERIFY})})})}var fe=n(678050),Ie=n(404102);function pe(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function Ee(e,r,n){r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n;return e}function me(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));t.forEach((function(r){Ee(e,r,n[r])}))}return e}function Oe(e,r){r=null!=r?r:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})));n.push.apply(n,t)}return n
}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}));return e}function he(e){return function(e){if(Array.isArray(e))return pe(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return pe(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pe(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ve(e){var r=e.guildId,n=e.formFields,o=e.updateFormFields,i=(0,a.e7)([O.Z],(function(){var e;return null===(e=O.Z.getGuild(r))||void 0===e?void 0:e.rulesChannelId})),s=function(e,r){var t=n[e]
;o(he(n.slice(0,e)).concat([Oe(me({},t),{response:r})],he(n.slice(e+1))))},l=function(e,r){switch(e.field_type){case F.QJ.TERMS:return(0,t.jsx)(fe.dd,{channelId:i,formField:e,onChange:function(e,t){return function(e,r){var t=n[e];o(he(n.slice(0,e)).concat([Oe(me({},t),{response:r})],he(n.slice(e+1))))}(r,t)}},r);case F.QJ.TEXT_INPUT:return(0,t.jsx)(Ie.zY,{formField:e,onChange:function(e){return s(r,e)}},r);case F.QJ.PARAGRAPH:return(0,t.jsx)($.lX,{formField:e,onChange:function(e){return s(r,e)}},r);case F.QJ.MULTIPLE_CHOICE:return(0,t.jsx)(K.sp,{formField:e,onChange:function(e){return function(e,r){var t=r.value,i=n[e];o(he(n.slice(0,e)).concat([Oe(me({},i),{response:t})],he(n.slice(e+1))))}(r,e)}},r)}};return(0,t.jsx)(t.Fragment,{children:n.map((function(e,r){return l(e,r)}))})}function _e(e){var r=e.guildId,n=e.formFields,o=e.updateFormFields,i=(0,a.e7)([h.default],(function(){return h.default.getCurrentUser()})),s=L({guildId:r})?ce:W;return null==i?null:(0,t.jsxs)(t.Fragment,{
children:[(0,t.jsx)(s,{}),(0,t.jsx)(ve,{guildId:r,formFields:n,updateFormFields:o})]})}function be(e){var r=e.guildId,n=e.formFields,i=e.updateFormFields,s=(0,a.e7)([h.default],(function(){return h.default.getCurrentUser()})),l=function(e){var r=e.guildId,n=(0,a.e7)([h.default],(function(){return h.default.getCurrentUser()})),t=L({guildId:r}),o=(null==n?void 0:n.isPhoneVerified())||(null==n?void 0:n.isStaff()),i=(null==n?void 0:n.verified)||o;return{isPhoneVerificationLevel:t,isCurrentUserVerified:!!(t?o:i)}}({guildId:r}),u=l.isPhoneVerificationLevel,c=l.isCurrentUserVerified,d=o.useRef(c),f=u?de:q;return null==s?null:(0,t.jsxs)(t.Fragment,{children:[!d.current&&(0,t.jsx)(f,{isUserVerified:c}),(0,t.jsx)(ve,{guildId:r,formFields:n,updateFormFields:i})]})}var ye=n(580946),Me=n(133766),Ae=n.n(Me),ge=n(698242),Ne=n.n(ge),Ce=n(483683),Te=n.n(Ce),Re=n(63685),je=n.n(Re),Se=n(634737),xe=n.n(Se);function Fe(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n]
;return t}function we(e,r,n,t,o,i,s){try{var a=e[i](s),l=a.value}catch(e){n(e);return}a.done?r(l):Promise.resolve(l).then(t,o)}function Ze(e){return function(){var r=this,n=arguments;return new Promise((function(t,o){var i=e.apply(r,n);function s(e){we(i,t,o,s,a,"next",e)}function a(e){we(i,t,o,s,a,"throw",e)}s(void 0)}))}}function Pe(e,r,n){r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n;return e}function Le(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));t.forEach((function(r){Pe(e,r,n[r])}))}return e}function Ue(e,r){r=null!=r?r:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){
var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})));n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}));return e}function Ve(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,i=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(t=n.next()).done);s=!0){i.push(t.value);if(r&&i.length===r)break}}catch(e){a=!0;o=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,r)||ke(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function De(e){return function(e){if(Array.isArray(e))return Fe(e)}(e)||function(e){
if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ke(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ke(e,r){if(e){if("string"==typeof e)return Fe(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);return"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Fe(e,r):void 0}}var Be,Ge=function(e,r){var n,t,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,t&&(o=2&i[0]?t.return:i[0]?t.throw||((o=t.return)&&o.call(t),
0):t.next)&&!(o=o.call(t,i[1])).done)return o;(t=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:s.label++;return{value:i[1],done:!1};case 5:s.label++;t=i[1];i=[0];continue;case 7:i=s.ops.pop();s.trys.pop();continue;default:if(!(o=s.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1];o=i;break}if(o&&s.label<o[2]){s.label=o[2];s.ops.push(i);break}o[2]&&s.ops.pop();s.trys.pop();continue}i=r.call(e,s)}catch(e){i=[6,e];t=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};!function(e){e[e.CLAIM_ACCOUNT=0]="CLAIM_ACCOUNT";e[e.EMAIL_CONFIRMATION=1]="EMAIL_CONFIRMATION";e[e.VERIFICATION_FORM=2]="VERIFICATION_FORM"}(Be||(Be={}));var He=function(e){var r=e.headerId,n=e.email,o=e.password,i=e.setEmail,s=e.setPassword,a=e.emailError,u=e.passwordError;return(0,t.jsxs)("div",{className:Ae().content,children:[(0,t.jsx)("img",{
alt:D.Z.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_ICON,src:Ne(),className:Ae().applicationIcon}),(0,t.jsx)(l.X6,{id:r,variant:"heading-xl/semibold",className:Ae().header,children:D.Z.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_TITLE}),(0,t.jsx)(l.xv,{variant:"text-sm/normal",color:"header-secondary",children:D.Z.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_SUBTITLE}),(0,t.jsx)("hr",{className:Ae().divider}),(0,t.jsx)(g.xJ,{title:D.Z.Messages.FORM_LABEL_EMAIL,className:Ae().formItem,children:(0,t.jsx)(M.ZP,{value:n,error:a,onChange:i,autoFocus:!0})}),(0,t.jsx)(g.xJ,{title:D.Z.Messages.FORM_LABEL_PASSWORD,className:Ae().formItem,children:(0,t.jsx)(M.ZP,{type:"password",value:o,error:u,onChange:s})})]})},ze=function(e){var r=e.headerId,n=e.email;return(0,t.jsxs)("div",{className:Ae().content,children:[(0,t.jsx)("img",{alt:D.Z.Messages.MEMBER_VERIFICATION_VERIFY_EMAIL_ICON,src:xe(),className:Ae().applicationIcon}),(0,t.jsx)(l.X6,{id:r,variant:"heading-xl/semibold",className:Ae().header,
children:D.Z.Messages.MEMBER_VERIFICATION_EMAIL_CONFIRMATION_TITLE.format({email:n})}),(0,t.jsx)(l.xv,{variant:"text-sm/normal",color:"header-secondary",children:D.Z.Messages.MEMBER_VERIFICATION_EMAIL_CONFIRMATION_SUBTITLE}),(0,t.jsx)(v.Co,{className:Ae().resendButton,size:v.Co.Sizes.NONE,look:v.Co.Looks.LINK,onClick:function(){return u.Z.verifyResend()},children:D.Z.Messages.MEMBER_VERIFICATION_EMAIL_RESEND})]})},Ye=function(e){var r,n=e.guildId,o=e.formState,i=e.updateFormState,s=e.isPreview,l=void 0!==s&&s,u=(0,a.e7)([S.Z],(function(){return S.Z.get(n)}));if(null==u)return null;var c=null!==(r=null!=o?o:null==u?void 0:u.formFields)&&void 0!==r?r:[],d=l?_e:be;return(0,t.jsx)(d,{guildId:n,formFields:c,updateFormFields:i})},Je=function(){return n.e(61029).then(n.t.bind(n,640002,19)).then((function(e){return e.default}))},Xe=function(e){var r=e.headerId,n=e.guildId,o=e.formState,i=e.updateFormState,a=e.useReducedMotion,u=e.isPreview,c=void 0!==u&&u;return(0,t.jsxs)("div",{
className:Ae().content,children:[(0,t.jsxs)("div",{className:Ae().animationAndSparklesContainer,children:[(0,t.jsx)("img",{alt:D.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,src:je(),className:s()(Ae().sparkleIcon,Ae().sparkleBottom)}),(0,t.jsx)(y.Z,{importData:Je,shouldAnimate:!a,className:Ae().animation}),(0,t.jsx)("img",{alt:D.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,src:Te(),className:s()(Ae().sparkleIcon,Ae().sparkleTop)})]}),(0,t.jsx)(l.X6,{id:r,variant:"heading-xl/semibold",className:Ae().header,children:D.Z.Messages.MEMBER_VERIFICATION_MODAL_TITLE}),(0,t.jsx)(l.xv,{variant:"text-sm/normal",color:"header-secondary",className:Ae().subheader,children:D.Z.Messages.MEMBER_VERIFICATION_MODAL_SUBTITLE}),(0,t.jsx)("hr",{className:Ae().divider}),(0,t.jsx)(Ye,{guildId:n,formState:o,updateFormState:i,isPreview:c})]})};const Qe=function(e){var r,n=e.headerId,i=e.guildId,u=e.onClose,y=e.onComplete,M=e.inviteCode,g=e.isPreview,L=void 0!==g&&g,U=(0,Z.rb)((function(e){
return e.hasUnsubmittedChanges})),V=(0,a.e7)([O.Z],(function(){return O.Z.getGuild(i)})),k=(0,a.e7)([S.Z],(function(){return S.Z.get(i)})),B=(0,a.e7)([h.default],(function(){return h.default.getCurrentUser()})),G=!(null==B?void 0:B.isClaimed()),H=null==B?void 0:B.verified,z=null==B?void 0:B.isPhoneVerified(),Y=(0,a.e7)([p.Z],(function(){return p.Z.getGuildEmoji(i)})),J=(0,a.cj)([E.Z],(function(){return{storeMemberCount:E.Z.getMemberCount(i),storeOnlineCount:E.Z.getOnlineCount(i)}})),X=J.storeMemberCount,Q=J.storeOnlineCount,W=Ve(o.useState(null!==(r=null==k?void 0:k.formFields)&&void 0!==r?r:[]),2),q=W[0],K=W[1],$=Ve(o.useState(!1),2),ee=$[0],re=$[1],ne=Ve(o.useState(null),2),te=ne[0],oe=ne[1],ie=Ve(o.useState(G?Be.CLAIM_ACCOUNT:Be.VERIFICATION_FORM),2),se=ie[0],ae=ie[1],le=Ve(o.useState(""),2),ue=le[0],ce=le[1],de=Ve(o.useState(""),2),fe=de[0],Ie=de[1],pe=Ve(o.useState(null),2),Ee=pe[0],me=pe[1],Oe=Ve(o.useState(null),2),he=Oe[0],ve=Oe[1],_e=(0,
x.e)(i),be=null==k?void 0:k.guild,Me=o.useMemo((function(){return null!=V?V:null!=be?new I.Z(be):null}),[V,be]),ge=o.useMemo((function(){var e,r=De(null!==(e=0===Y.length?null==be?void 0:be.emojis:Y)&&void 0!==e?e:[]).reverse(),n=0,t=r.length;if(t>12&&null!=r){r=r.slice(0,11);n=Math.min(t-r.length,99)}return{emojisToRender:r,remainingEmojis:n,numGuildEmoji:t}}),[be,Y]),Ne=ge.emojisToRender,Ce=ge.remainingEmojis,Te=ge.numGuildEmoji,Re=null!=X?X:null==be?void 0:be.approximate_member_count,je=null!=Q?Q:null==be?void 0:be.approximate_presence_count;o.useEffect((function(){(0,Z.a5)(!1);return function(){(0,Z.a5)(!1)}}),[]);o.useEffect((function(){j.Z.fetchVerificationForm(i,M)}),[i,M]);o.useEffect((function(){null!=k&&K(k.formFields)}),[k]);o.useEffect((function(){null!=B&&B.isClaimed()&&ae(Be.VERIFICATION_FORM)}),[B]);o.useEffect((function(){se===Be.EMAIL_CONFIRMATION&&H&&ae(Be.VERIFICATION_FORM)}),[se,H]);o.useEffect((function(){null!=i&&T.default.track(P.rMx.OPEN_MODAL,{type:ye.N4,
guild_id:i})}),[i]);o.useEffect((function(){var e=q.some((function(e){return e.field_type!==F.QJ.TERMS&&(0,w.OA)(e)}));e&&!U?(0,Z.a5)(!0):!e&&U&&(0,Z.a5)(!1)}),[q,U]);var Se=o.useMemo((function(){return!(((null==Me?void 0:Me.verificationLevel)!==P.sFg.VERY_HIGH||(null==B?void 0:B.isStaff()))&&H||z)||q.some((function(e){return!(0,w.OA)(e)}))}),[q,Me,z,H,B]),xe=(0,a.e7)([d.Z],(function(){return d.Z.useReducedMotion}));if(null==Me)return null;var Fe,we=(Fe=Ze((function(){var e,r,n;return Ge(this,(function(t){switch(t.label){case 0:re(!0);me(null);ve(null);t.label=1;case 1:t.trys.push([1,3,4,5]);return[4,(0,c.S2)({email:ue,password:fe})];case 2:t.sent();re(!1);ae(Be.EMAIL_CONFIRMATION);return[3,5];case 3:e=t.sent();me(null==e||null===(r=e.body)||void 0===r?void 0:r.email);ve(null==e||null===(n=e.body)||void 0===n?void 0:n.password);return[3,5];case 4:re(!1);return[7];case 5:return[2]}}))})),function(){return Fe.apply(this,arguments)}),ke=function(){var e=Ze((function(){var e,r,n,t,o
;return Ge(this,(function(s){switch(s.label){case 0:re(!0);oe(null);if(null!=(e=null!=B?m.ZP.getMember(i,B.id):null)&&!e.isPending){null==u||u(!0);return[2]}s.label=1;case 1:s.trys.push([1,3,,4]);return[4,null==y?void 0:y(Ue(Le({},null!=k?k:S.t),{formFields:q}))];case 2:s.sent();null==u||u(!0);return[3,4];case 3:r=s.sent();null!=(null==(o=null==r?void 0:r.body)||null===(n=o.errors)||void 0===n?void 0:n.version)||null!=(null==o||null===(t=o.errors)||void 0===t?void 0:t.form_fields)?oe(D.Z.Messages.MEMBER_VERIFICATION_VERSION_MISMATCH_ERROR):oe(null==o?void 0:o.message);re(!1);return[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(_.Z,{direction:_.Z.Direction.VERTICAL,justify:_.Z.Justify.BETWEEN,className:Ae().guildSidebar,shrink:0,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(b.Z,{guild:Me,active:!0,className:s()(Ae().guildIcon,Pe({},Ae().guildIconNoIcon,null==Me.icon))}),(0,t.jsx)(l.X6,{
variant:"heading-lg/semibold",className:Ae().guildName,children:null==Me?void 0:Me.name}),(0,t.jsx)(l.xv,{className:Ae().guildDescription,variant:"text-sm/normal",color:"header-secondary",children:null==k?void 0:k.description}),null!=Ne&&Ne.length>0?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("hr",{className:Ae().divider}),(0,t.jsx)(N.Z,{children:D.Z.Messages.MEMBER_VERIFICATION_NUM_EMOJIS.format({emojis:Te})}),(0,t.jsxs)("div",{className:Ae().emojisContainer,children:[Ne.map((function(e){var r=R.ZP.getEmojiURL({id:e.id,animated:!1,size:24});return(0,t.jsx)(A.ZP,{text:":".concat(e.name,":"),children:function(e){return(0,t.jsx)("img",Ue(Le({},e),{width:24,height:24,src:r,className:Ae().emoji,alt:""}))}},e.id)})),null!=Ce&&Ce>0?(0,t.jsx)(l.X6,{variant:"heading-deprecated-12/semibold",className:Ae().emoji,color:"header-secondary",children:"+".concat(Ce)}):null]})]}):null]}),(0,t.jsxs)("div",{children:[null!=je&&(0,t.jsxs)(_.Z,{align:_.Z.Align.CENTER,className:Ae().onlineCount,children:[(0,
t.jsx)("div",{className:Ae().dotOnline}),(0,t.jsx)(l.xv,{variant:"text-sm/normal",children:D.Z.Messages.MEMBER_VERIFICATION_NUM_ONLINE.format({membersOnline:je})})]}),null!=Re&&(0,t.jsxs)(_.Z,{align:_.Z.Align.CENTER,children:[(0,t.jsx)("div",{className:Ae().dotMembers}),(0,t.jsx)(l.xv,{variant:"text-sm/normal",children:D.Z.Messages.MEMBER_VERIFICATION_NUM_MEMBERS.format({members:Re})})]})]})]}),(0,t.jsxs)("div",{className:Ae().modal,children:[(0,t.jsx)(C.hz,{className:Ae().modalContent,children:(0,t.jsx)(f.Z,{className:s()(Ae().sequencer,Pe({},Ae().centerContent,se!==Be.VERIFICATION_FORM)),steps:[Be.CLAIM_ACCOUNT,Be.EMAIL_CONFIRMATION,Be.VERIFICATION_FORM],step:se,children:function(){switch(se){case Be.CLAIM_ACCOUNT:return(0,t.jsx)(He,{headerId:n,email:ue,password:fe,setEmail:ce,setPassword:Ie,emailError:Ee,passwordError:he});case Be.EMAIL_CONFIRMATION:return(0,t.jsx)(ze,{headerId:n,email:ue});case Be.VERIFICATION_FORM:return(0,t.jsx)(Xe,{headerId:n,guildId:i,formState:q,
updateFormState:K,isPreview:L,useReducedMotion:xe})}}()})}),function(){switch(se){case Be.CLAIM_ACCOUNT:return(0,t.jsxs)(C.mz,{className:Ae().footer,children:[(0,t.jsx)(v.Co,{className:Ae().submitButton,type:"submit",submitting:ee,onClick:we,disabled:0===ue.length||0===fe.length,children:D.Z.Messages.NEXT}),(0,t.jsx)(l.xv,{variant:"text-xs/normal",color:"header-secondary",children:D.Z.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_INFO})]});case Be.EMAIL_CONFIRMATION:return null;case Be.VERIFICATION_FORM:return(0,t.jsxs)(C.mz,{className:Ae().footer,children:[(0,t.jsx)(v.Co,{className:Ae().submitButton,type:"submit",submitting:ee,onClick:ke,color:v.Co.Colors.GREEN,disabled:null==y||Se,children:D.Z.Messages.SUBMIT}),null!=te&&(0,t.jsx)(l.xv,{variant:"text-xs/normal",color:"text-danger",children:te}),null==te&&_e&&(0,t.jsx)(l.xv,{color:"header-secondary",variant:"text-xs/normal",children:D.Z.Messages.MEMBER_VERIFICATION_WARNING})]})}}()]})]})}}}]);
//# sourceMappingURL=42c5d6ed79553eacfa2e.js.map