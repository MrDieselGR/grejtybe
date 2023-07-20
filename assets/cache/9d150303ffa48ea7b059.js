"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[75320],{103720:(e,t,n)=>{n.d(t,{t:()=>c});var r=n(477353),o=n(585109),i=n(234743),c=(0,r.Xz)({id:o.Z.IN_APP_REPORTING,title:"2020-29 Exp: Report TOS violating messages in-app via new modal",description:["An experiment that tests if in-app reporting is useful for Trust & Safety","Control: No changes","Treatment 1: Add menu options to report message"],buckets:[i.N.CONTROL,i.N.TREATMENT_1]})},864779:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(791462),o=n(173436);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e){c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return c(e)}function u(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e,t){
a=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return a(e,t)}var s=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var f={};var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&a(e,t)}(n,e);var t=l(n);function n(){i(this,n);return t.apply(this,arguments)}var r=n.prototype;r.getOptions=function(e){return f[e]}
;r.__getLocalVars=function(){return{options:f}};return n}(r.ZP.Store);p.displayName="SendMessageOptionsStore";const d=new p(o.Z,{MESSAGE_CREATE:function(e){var t=e.message,n=e.sendMessageOptions;null!=n&&(f[t.id]=n);null!=t.nonce&&t.nonce in f&&delete f[t.nonce]}})},96048:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(551821),o=n(719911),i=n(461061);function c(e,t,n){return!t.isSystemDM()&&!(0,o.Z)(e)&&(n||t.isPrivate())&&(0,r.RG)(t)&&t.type!==i.d4z.GUILD_VOICE&&t.type!==i.d4z.GUILD_STAGE_VOICE}},623038:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(549425),o=n(448450);function i(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){i(e,t,n[t])}))}return e}
function u(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};r.Z.deleteMessage(e.id,t.id,!0);if(t.isCommandType())null!=t.interactionData&&i.applicationId&&(0,o.d)(t,e,i.applicationId);else{var u=t.content,a=t.tts,s=t.nonce;r.Z.sendMessage(e.id,{content:u,tts:a,invalidEmojis:[],validNonShortcutEmojis:[]},void 0,c({nonce:s},i))}}},332666:(e,t,n)=>{n.d(t,{zW:()=>M,F4:()=>R,fB:()=>T,$Z:()=>D,Hd:()=>A,B8:()=>C,rY:()=>Z,Xl:()=>x,mG:()=>k,LF:()=>G,op:()=>N,HH:()=>L,gK:()=>U,Db:()=>K,JS:()=>V,sT:()=>F});var r=n(785893),o=(n(667294),n(692454)),i=n(549425),c=n(961713),u=n(855710),a=n(7046),s=n(849832),l=n(572384),f=n(302561),p=n(665357),d=n(631134),y=n(356004),b=n(897576),h=n(268333),g=n(726283),O=n(882699),E=n(864779),_=n(836781),v=n(623038),S=n(461061);function m(e,t,n,r,o,i,c){try{var u=e[i](c),a=u.value}catch(e){n(e);return}u.done?t(a):Promise.resolve(a).then(r,o)}function P(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n)
;function c(e){m(i,r,o,c,u,"next",e)}function u(e){m(i,r,o,c,u,"throw",e)}c(void 0)}))}}function w(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function j(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}var I=function(e,t){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){
if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:c.label++;return{value:i[1],done:!1};case 5:c.label++;r=i[1];i=[0];continue;case 7:i=c.ops.pop();c.trys.pop();continue;default:if(!(o=c.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1];o=i;break}if(o&&c.label<o[2]){c.label=o[2];c.ops.push(i);break}o[2]&&c.ops.pop();c.trys.pop();continue}i=t.call(e,c)}catch(e){i=[6,e];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};function M(e){var t=e.getGuildId();null!=t&&a.Z.open(t,S.pNK.OVERVIEW)}function R(e,t,n){(0,g.JG)(n.shiftKey?"".concat(t.channel_id,"-").concat(t.id):t.id)}function T(e,t){(0,g.JG)((0,
h.wR)(e.guild_id,e.id,t.id))}function D(e,t,n){t.state===S.yb.SEND_FAILED||n.shiftKey?i.Z.deleteMessage(e.id,t.id,t.state===S.yb.SEND_FAILED):c.Z.confirmDelete(e,t)}function A(e,t){i.Z.startEditMessage(e.id,t.id,t.content)}function C(e,t){(0,_.Z)(e.id,t.id)}function Z(e,t,n){!1!==t.pinned?n.shiftKey?o.Z.unpinMessage(e,t.id):c.Z.confirmUnpin(e,t):n.shiftKey?o.Z.pinMessage(e,t.id):c.Z.confirmPin(e,t)}function x(e,t){(0,u.Z)(e.id,t.id)}function k(e,t){(0,v.Z)(e,t,void 0,E.Z.getOptions(t.id))}function G(e){(0,s.ak)(e)}function N(e,t,o){(0,b.ZD)(P((function(){var e,i;return I(this,(function(c){switch(c.label){case 0:return[4,Promise.resolve().then(n.bind(n,87194))];case 1:e=c.sent(),i=e.default;return[2,function(e){return(0,r.jsx)(i,j(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){
return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){w(e,t,n[t])}))}return e}({},e),{message:t,selectedReaction:o}))}]}}))})))}function L(e,t,n){var r=e.isPrivate(),o=null!=t.webhookId,i=t.author.id===d.default.getId();(0,f.fE)({channel:e,message:t,shouldMention:!n.shiftKey&&!o&&!i,showMentionToggle:!r&&!o&&!i});O.S.dispatchToLastSubscribed(S.CkL.TEXTAREA_FOCUS)}function U(e,t){(0,p.R6)(e,t,"Message")}function K(e,t){var n=y.Z.getChannel(t.id);null!=n&&(0,p.ok)(n)}function V(e,t){(0,l.Ck)(t)}function F(e,t){(0,l.p3)(t,!0,!0)}},28996:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(785893),o=(n(667294),n(124522)),i=n(791462),c=n(707031),u=n(897193),a=n(14563),s=n(769672),l=n(897576),f=n(368365),p=n(449024),d=n(940712),y=n(461061),b=f.Z.combine(y.Plq.VIEW_CHANNEL,y.Plq.MANAGE_MESSAGES,y.Plq.READ_MESSAGE_HISTORY);var h=n(959797);function g(e,t,n,r,o,i,c){try{var u=e[i](c),a=u.value}catch(e){n(e);return}u.done?t(a):Promise.resolve(a).then(r,o)}function O(e){
return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){g(i,r,o,c,u,"next",e)}function u(e){g(i,r,o,c,u,"throw",e)}c(void 0)}))}}function E(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){E(e,t,n[t])}))}return e}function v(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n
}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}var S=function(e,t){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:c.label++;return{value:i[1],done:!1};case 5:c.label++;r=i[1];i=[0];continue;case 7:i=c.ops.pop();c.trys.pop();continue;default:if(!(o=c.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1];o=i;break}if(o&&c.label<o[2]){c.label=o[2]
;c.ops.push(i);break}o[2]&&c.ops.pop();c.trys.pop();continue}i=t.call(e,c)}catch(e){i=[6,e];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};function m(e,t,f){var g=t.getGuildId(),E=(0,i.e7)([u.ZP],(function(){return null!==g&&u.ZP.getIsItemFeatured({guildId:g,entity:e,entityType:o.w.MESSAGE})}),[e,g]),m=(0,c.Z)(t,f);if(e.isFirstMessageInForumPost(t))return m;var P=function(e,t){var n=e.getGuildId();return!!(null!==n&&(0,p.YM)(n)&&y.TPd.GUILD_FEED_FEATURABLE_MESSAGES.has(e.type)&&(0,a.fx)(e)&&(0,a.XY)(t)&&d.Z.can(b,e))}(t,e);return P?E?(0,r.jsx)(s.sN,{id:"guild-feed-unfeature",label:h.Z.Messages.GUILD_FEED_UNFEATURE_MESSAGE,action:function(){return null==g?null:(0,l.ZD)(O((function(){var t;return S(this,(function(i){switch(i.label){case 0:return[4,Promise.all([n.e(40532),n.e(19375)]).then(n.bind(n,619375))];case 1:t=i.sent().UnfeatureItemConfirmationModal;return[2,function(n){return(0,r.jsx)(t,v(_({},n),{featureableItem:{guildId:g,entity:e,
entityType:o.w.MESSAGE},header:h.Z.Messages.GUILD_FEED_UNFEATURED_MESSAGE_MODAL_HEADER,body:h.Z.Messages.GUILD_FEED_UNFEATURED_MESSAGE_MODAL_BODY}))}]}}))})))}}):(0,r.jsx)(s.sN,{id:"guild-feed-feature",label:h.Z.Messages.GUILD_FEED_FEATURE_MESSAGE,children:(0,a.DE)().map((function(o){var i=o.value,c=o.timePeriod;return(0,r.jsx)(s.sN,{id:"".concat(i),label:(0,a.Vm)(c),action:function(){return null==g?null:(0,l.ZD)(O((function(){var o;return S(this,(function(u){switch(u.label){case 0:return[4,Promise.all([n.e(40532),n.e(19375)]).then(n.bind(n,619375))];case 1:o=u.sent().FeatureMessageConfirmationModal;return[2,function(n){return(0,r.jsx)(o,v(_({},n),{message:e,channel:t,guildId:g,expiresSeconds:i,timePeriod:c,options:f}))}]}}))})))}},i)}))}):null}},412323:(e,t,n)=>{n.d(t,{o:()=>f,U:()=>p});var r=n(791462),o=n(113204),i=n(719911),c=n(551821),u=n(940712),a=n(609993);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){
return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(r=n.next()).done);c=!0){i.push(r.value);if(t&&i.length===t)break}}catch(e){u=!0;o=e}finally{try{c||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t,n){return(e.isPrivate()?!e.isSystemDM():n.can(a.Pl.SEND_MESSAGES,e)&&n.can(a.Pl.READ_MESSAGE_HISTORY,e))&&!(0,i.Z)(t)}
function p(e,t){var n,i=(0,c.tc)(e),a=(0,r.e7)([u.Z],(function(){return f(e,t,u.Z)})),s=l((0,o.A)(null!==(n=e.getGuildId())&&void 0!==n?n:void 0),2)[1],p=!e.isArchivedThread()||i;return a&&!s&&p}},214012:(e,t,n)=>{n.d(t,{ev:()=>s,cQ:()=>l,n8:()=>f,m1:()=>p,Yk:()=>d,On:()=>y,Iw:()=>b});var r=n(23816),o=n(932847),i=n(893264),c=n(461061),u=n(706594),a=n(298716),s=function(e){var t=e.containerWidth,n=e.favoriteStickers,o=e.frequentlyUsedStickers,a=e.guildStickers,s=e.stickersTotal;r.ZP.trackWithMetadata(c.rMx.EXPRESSION_PICKER_OPENED,{width:t,tab:u.X1.STICKER,badged:!1,num_expressions_favorites:n.length,num_animated_expressions_favorites:n.filter((function(e){return(0,i.aQ)(e.format_type)})).length,num_custom_expressions_favorites:n.filter((function(e){return(0,i.z)(e.type)})).length,num_standard_expressions_favorites:n.filter((function(e){return!(0,i.z)(e.type)})).length,num_expressions_frecent:o.length,num_custom_expressions_frecent:o.filter((function(e){return(0,i.z)(e.type)})).length,
num_animated_expressions_frecent:o.filter((function(e){return(0,i.aQ)(e.format_type)})).length,num_standard_expressions_frecent:o.filter((function(e){return!(0,i.z)(e.type)})).length,num_current_guild_expressions:a.length,num_custom_expressions_total:s})},l=function(e){var t,n=e.sticker,o=e.location;n.type===i.n0.GUILD&&(t=n.guild_id);r.ZP.trackWithMetadata(c.rMx.EXPRESSION_FAVORITED,{location:o,expression_type:u.X1.STICKER,expression_id:n.id,expression_name:n.name,expression_guild_id:t,is_animated:(0,i.aQ)(n.format_type),is_custom:(0,i.z)(n.type)})},f=function(){o.default.track(c.rMx.SEARCH_STARTED,{search_type:c.aib.STICKER})},p=function(e,t,n){r.ZP.trackWithMetadata(c.rMx.SEARCH_RESULT_VIEWED,{search_type:c.aib.STICKER,total_results:t,query:e,is_suggestion:n})},d=function(e,t,n){var o,u=e.sticker;u.type===i.n0.GUILD&&(o=u.guild_id);r.ZP.trackWithMetadata(c.rMx.SEARCH_RESULT_SELECTED,{load_id:u.id,search_type:c.aib.STICKER,source_object:"Sticker Picker",total_results:n,
expression_guild_id:o,sticker_id:u.id,query:t})},y=function(e){var t,n=e.sticker,o=e.category;n.type===i.n0.GUILD&&(t=n.guild_id);r.ZP.trackWithMetadata(c.rMx.EXPRESSION_PICKER_EXPRESSION_SELECTED,{type:a.cd.EMOJI_PICKER_STICKER_CLICKED,expression_id:n.id,expression_name:n.name,expression_picker_section:o,expression_guild_id:t,is_animated:(0,i.aQ)(n.format_type),is_custom:(0,i.z)(n.type)})},b=function(e){null!=e&&""!==e&&r.ZP.trackWithMetadata(c.rMx.SEARCH_RESULT_EMPTY,{query:e,search_type:c.aib.STICKER,source_object:"Sticker Picker"})}},723927:(e,t,n)=>{n.d(t,{cP:()=>o,LA:()=>i,Bo:()=>c,NB:()=>u,Ct:()=>a});var r=n(173436);function o(e,t,n,o,i){r.Z.dispatch({type:"SPEAK_TEXT",text:e,interrupt:t,maxLength:n,onStart:o,onEnd:i})}function i(e,t){r.Z.dispatch({type:"SPEAK_MESSAGE",channel:e,message:t})}function c(e,t){r.Z.dispatch({type:"SPEAKING_MESSAGE",channelId:e,messageId:t})}function u(){r.Z.dispatch({type:"STOP_SPEAKING"})}function a(e){r.Z.dispatch({type:"SET_TTS_SPEECH_RATE",
speechRate:e})}},641645:(e,t,n)=>{n.d(t,{Z:()=>O});var r=n(791462),o=n(173436);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1;r.configurable=!0;"value"in r&&(r.writable=!0);Object.defineProperty(e,r.key,r)}}function u(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function a(e){a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return a(e)}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){u(e,t,n[t])}))}return e}function l(e,t){t=null!=t?t:{}
;Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function f(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t){p=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return p(e,t)}var d=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{
Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}var b={speechRate:1,currentMessage:null},h=b;var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&p(e,t)}(n,e);var t=y(n);function n(){i(this,n);return t.apply(this,arguments)}var r=n.prototype;r.initialize=function(e){h=s({},b,null!=e?e:null)};r.isSpeakingMessage=function(e,t){var n=h.currentMessage;return null!==n&&n.channelId===e&&n.messageId===t};r.getUserAgnosticState=function(){return h};r.__getLocalVars=function(){return{initialState:b,state:h}};!function(e,t,n){t&&c(e.prototype,t);n&&c(e,n)}(n,[{key:"currentMessage",get:function(){
return h.currentMessage}},{key:"speechRate",get:function(){return h.speechRate}}]);return n}(r.ZP.DeviceSettingsStore);g.displayName="TTSStore";g.persistKey="TTSStore";g.migrations=[];const O=new g(o.Z,__OVERLAY__?{}:{SPEAKING_MESSAGE:function(e){var t=e.messageId,n=e.channelId;h=l(s({},h),{currentMessage:{messageId:t,channelId:n}})},STOP_SPEAKING:function(){h=l(s({},h),{currentMessage:null})},SET_TTS_SPEECH_RATE:function(e){h=l(s({},h),{speechRate:e.speechRate})}})},782634:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(785893);n(667294);function o(e){var t=e.width,n=void 0===t?24:t,o=e.height,i=void 0===o?24:o,c=e.color,u=void 0===c?"currentColor":c,a=e.className,s=e.foreground;return(0,r.jsx)("svg",{className:a,width:n,height:i,viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M10 8.26667V4L3 11.4667L10 18.9333V14.56C15 14.56 18.5 16.2667 21 20C20 14.6667 17 9.33333 10 8.26667Z",className:s,fill:u})})}},961635:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(785893),o=(n(667294),n(240243));function i(e,t,n){
t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function c(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}}return o}function a(e){
var t=e.width,n=void 0===t?24:t,a=e.height,s=void 0===a?24:a,l=e.color,f=void 0===l?"currentColor":l,p=e.foreground,d=u(e,["width","height","color","foreground"]);return(0,r.jsx)("svg",c(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){i(e,t,n[t])}))}return e}({},(0,o.Z)(d)),{width:n,height:s,viewBox:"0 0 24 24",children:(0,r.jsx)("path",{className:p,fill:f,fillRule:"evenodd",clipRule:"evenodd",
d:"M2.99805 4.8C2.99805 3.8055 3.80445 3 4.79805 3H19.198C20.1925 3 20.998 3.8055 20.998 4.8V15.6C20.998 16.5936 20.1925 17.4 19.198 17.4H11.098L7.49805 21V17.4H4.79805C3.80445 17.4 2.99805 16.5936 2.99805 15.6V4.8ZM11.5737 5.16264C11.7336 5.00375 11.9739 4.95652 12.183 5.04208C12.3921 5.12708 12.5279 5.33098 12.5279 5.55487V14.444C12.5279 14.669 12.3921 14.8718 12.183 14.9579C11.9739 15.0435 11.7336 14.9963 11.5737 14.8374L9.1739 12.2217H7.4969C7.18945 12.2217 6.9379 11.9717 6.9379 11.6662V8.33273C6.9379 8.02772 7.18945 7.77716 7.4969 7.77716H9.1739L11.5737 5.16264ZM13.6459 7.22159V6.11044C15.8037 6.11044 17.5589 7.85549 17.5589 9.99944C17.5589 12.1445 15.8037 13.8884 13.6459 13.8884V12.7773C15.1871 12.7773 16.4409 11.5312 16.4409 9.99944C16.4409 8.46829 15.1871 7.22159 13.6459 7.22159ZM15.3229 9.99944C15.3229 9.08108 14.5705 8.33273 13.6459 8.33273V9.44387C13.9539 9.44387 14.2049 9.69332 14.2049 9.99944C14.2049 10.3056 13.9539 10.555 13.6459 10.555V11.6662C14.5705 11.6662 15.3229 10.9189 15.3229 9.99944Z"
})}))}}}]);
//# sourceMappingURL=9d150303ffa48ea7b059.js.map