"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[11499],{411499:(e,n,t)=>{t.r(n);t.d(n,{default:()=>G});var r=t(785893),o=t(667294),i=t(642400),a=t(281081),u=t(230931),c=t(454313),l=t(251032),s=t(859169),f=t(41225),p=t(603130),b=t(386704),d=t(769672),h=t(567895),y=t(897576);function v(e,n,t,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){t(e);return}u.done?n(c):Promise.resolve(c).then(r,o)}function O(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){v(i,r,o,a,u,"next",e)}function u(e){v(i,r,o,a,u,"throw",e)}a(void 0)}))}}function g(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){
return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){g(e,n,t[n])}))}return e}function m(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}var P=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),
0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:a.label++;return{value:i[1],done:!1};case 5:a.label++;r=i[1];i=[0];continue;case 7:i=a.ops.pop();a.trys.pop();continue;default:if(!(o=a.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1];o=i;break}if(o&&a.label<o[2]){a.label=o[2];a.ops.push(i);break}o[2]&&a.ops.pop();a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e];r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};const w=o.forwardRef((function(e,n){var i=o.useRef(null);o.useImperativeHandle(n,(function(){return{focus:function(){return null},activate:function(){var e;null===(e=i.current)||void 0===e||e.activateUploadDialogue();return!1}}}),[]);return(0,r.jsx)("div",{style:{position:"relative"},children:(0,r.jsx)(h.ZP,m(j({},e),{ref:i,onChange:function(n,o){
(0,y.ZD)(O((function(){var i,a;return P(this,(function(u){switch(u.label){case 0:return[4,Promise.all([t.e(40532),t.e(22852),t.e(79632)]).then(t.bind(t,122852))];case 1:i=u.sent(),a=i.default;return[2,function(t){return(0,r.jsx)(a,j({imgURI:n,file:o,onCrop:e.onChange},t))}]}}))})))}}))})}));var _=t(631134),E=t(638915),Z=t(53211),M=t(959797);function x(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function D(e,n){var t=(0,Z.Z)(e),a=o.useCallback((function(){var o=M.Z.Messages.LEAVE_GROUP_DM_TITLE.format({name:t}),a=M.Z.Messages.LEAVE_GROUP_DM_BODY.format({name:t});if(e.isManaged()){o=M.Z.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({name:t});a=M.Z.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({name:t})}var u=function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];i.Z.closePrivateChannel(e.id,n,r)};(0,y.h7)((function(e){return(0,r.jsx)(E.Z,function(e){for(var n=1;n<arguments.length;n++){
var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){x(e,n,t[n])}))}return e}({header:o,body:a,onSubmit:u},e))}))}),[e,t,n]);return(0,r.jsx)(d.sN,{id:"leave-channel",label:M.Z.Messages.LEAVE_GROUP_DM,action:a,color:"danger"})}var S=t(753717),N=t(592079),I=t(461061);function R(e,n,t,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){t(e);return}u.done?n(c):Promise.resolve(c).then(r,o)}function A(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){R(i,r,o,a,u,"next",e)}function u(e){R(i,r,o,a,u,"throw",e)}a(void 0)}))}}function C(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function k(e){for(var n=1;n<arguments.length;n++){
var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){C(e,n,t[n])}))}return e}function T(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}var U=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){
return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:a.label++;return{value:i[1],done:!1};case 5:a.label++;r=i[1];i=[0];continue;case 7:i=a.ops.pop();a.trys.pop();continue;default:if(!(o=a.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1];o=i;break}if(o&&a.label<o[2]){a.label=o[2];a.ops.push(i);break}o[2]&&a.ops.pop();a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e];r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};const G=(0,c.Z)((0,u.Z)((function(e){var n=e.channel,o=e.selected,u=e.onSelect,c=n.isOwner(_.default.getId()),s=(0,S.Z)(n),h=(0,N.ZP)(n),v=D(n,o),O=(0,f.Z)(n.id),g=(0,l.Z)(n),j=(0,
p.Z)(n),m=(0,b.Z)(n);return null==n||n.isManaged()?null:(0,r.jsxs)(d.ZP,{navId:"gdm-context","aria-label":M.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,onClose:a.Zy,onSelect:u,children:[(0,r.jsx)(d.kS,{children:s}),(0,r.jsxs)(d.kS,{children:[j,m]}),(0,r.jsxs)(d.kS,{children:[c?(0,r.jsx)(d.sN,{id:"instant-invites",label:M.Z.Messages.INSTANT_INVITES,action:function(){return(0,y.ZD)(A((function(){var e,o;return U(this,(function(i){switch(i.label){case 0:return[4,Promise.all([t.e(40532),t.e(272)]).then(t.bind(t,272))];case 1:e=i.sent(),o=e.default;return[2,function(e){return(0,r.jsx)(o,k({channelId:n.id},e))}]}}))})))}}):null,(0,r.jsx)(d.II,{id:"change-icon",showDefaultFocus:!0,control:function(e,t){return(0,r.jsx)(w,T(k({onChange:function(t){var r;i.Z.setIcon(n.id,t);null===(r=e.onClose)||void 0===r||r.call(e)},multiple:!1,"aria-label":M.Z.Messages.CHANGE_ICON},e),{ref:t}))},label:M.Z.Messages.CHANGE_ICON}),null!=n.icon?(0,r.jsx)(d.sN,{id:"remove-icon",label:M.Z.Messages.REMOVE_ICON,
action:function(){return i.Z.setIcon(n.id,null)}}):null]}),(0,r.jsx)(d.kS,{children:g}),(0,r.jsx)(d.kS,{children:h}),(0,r.jsx)(d.kS,{children:v}),(0,r.jsx)(d.kS,{children:O})]})}),{object:I.qAy.CONTEXT_MENU}),[s.Z.CONTEXT_MENU,s.Z.GROUP_DM_MENU])},753717:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(785893),o=(t(667294),t(791462)),i=t(320646),a=t(769672),u=t(973381),c=t(668479),l=t(53551),s=t(384995),f=t(718375),p=t(461061),b=t(959797);function d(e){var n=function(e){return(0,o.e7)([f.ZP,s.Z,u.Z,c.Z],(function(){if(e.isForumPost())return f.ZP.isForumPostUnread(e.id);if(e.type===p.d4z.GUILD_CATEGORY){var n=s.Z.getCategories(e.getGuildId());if(null==n[e.id])return!1;if(n[e.id].some((function(e){var n=e.channel;return(0,l.Em)(n.type)&&f.ZP.hasUnread(n.id)})))return!0;var t=new Set(n[e.id].map((function(e){return e.channel.id}))),r=u.Z.getThreadsForGuild(e.guild_id);for(var o in r)if(t.has(o))for(var i in r[o])if(c.Z.hasJoined(i)&&!c.Z.isMuted(i)&&f.ZP.hasUnread(i))return!0;return!1}
return f.ZP.hasUnread(e.id)}),[e])}(e);return(0,r.jsx)(a.sN,{id:"mark-channel-read",label:b.Z.Messages.MARK_AS_READ,action:function(){(0,i.U6)(e)},disabled:!n})}},603130:(e,n,t)=>{t.d(n,{Z:()=>b});var r=t(785893),o=(t(667294),t(791462)),i=t(769672),a=t(1812),u=t(987762),c=t(620700),l=t(576296),s=t(461061),f=t(959797);function p(e,n){return e.type===s.d4z.GROUP_DM?n?f.Z.Messages.UNFAVORITE_GDM:f.Z.Messages.FAVORITE_GDM:e.type===s.d4z.DM?n?f.Z.Messages.UNFAVORITE_DM:f.Z.Messages.FAVORITE_DM:n?f.Z.Messages.UNFAVORITE_CHANNEL:f.Z.Messages.FAVORITE_CHANNEL}function b(e){var n=(0,o.e7)([u.Z],(function(){return u.Z.isFavorite(e.id)})),t=function(e){var n=function(n){(0,c.kj)(e.id,n)},t=(0,o.e7)([a.ZP],(function(){return a.ZP.getChannels(s.I_8)}))[s.d4z.GUILD_CATEGORY].filter((function(e){return"null"!==e.channel.id}));return l.Z.useExperiment({}).favoritesEnabled?0===t.length?(0,r.jsx)(i.sN,{id:"favorite-channel",label:p(e,!1),action:function(){return n(null)}}):(0,r.jsx)(i.sN,{
id:"favorite-channel",label:p(e,!1),action:function(){return n(null)},children:t.map((function(e){return(0,r.jsx)(i.sN,{id:"favorite-".concat(e.channel.id),label:e.channel.name,action:function(){return n(e.channel.id)}},e.channel.id)}))}):null}(e),f=function(e){return(0,r.jsx)(i.sN,{id:"favorite-channel",label:p(e,!0),action:function(){(0,c.oC)(e.id)}})}(e);return __OVERLAY__?null:n?f:t}},386704:(e,n,t)=>{t.d(n,{Z:()=>h});var r=t(785893),o=(t(667294),t(791462)),i=t(769672),a=t(971738),u=t(897576),c=t(461061),l=t(959797);function s(e,n,t,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){t(e);return}u.done?n(c):Promise.resolve(c).then(r,o)}function f(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){s(i,r,o,a,u,"next",e)}function u(e){s(i,r,o,a,u,"throw",e)}a(void 0)}))}}function p(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function b(e,n){n=null!=n?n:{}
;Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}var d=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:a.label++;return{value:i[1],done:!1
};case 5:a.label++;r=i[1];i=[0];continue;case 7:i=a.ops.pop();a.trys.pop();continue;default:if(!(o=a.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1];o=i;break}if(o&&a.label<o[2]){a.label=o[2];a.ops.push(i);break}o[2]&&a.ops.pop();a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e];r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};function h(e){var n=(0,o.e7)([a.Z],(function(){return a.Z.getGuildId()}));return __OVERLAY__||n!==c.I_8?null:(0,r.jsx)(i.sN,{id:"set-channel-nickname",label:l.Z.Messages.CHANGE_NICKNAME,action:function(){(0,u.ZD)(f((function(){var n,o;return d(this,(function(i){switch(i.label){case 0:return[4,Promise.all([t.e(40532),t.e(35666),t.e(29585),t.e(65296),t.e(5387),t.e(98674),t.e(42311),t.e(80911),t.e(39052),t.e(81550),t.e(51796),t.e(98418)]).then(t.bind(t,598418))];case 1:n=i.sent(),o=n.default
;return[2,function(n){return(0,r.jsx)(o,b(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){p(e,n,t[n])}))}return e}({},n),{channelId:e.id}))}]}}))})))}})}},910866:(e,n,t)=>{t.d(n,{m:()=>r});var r;!function(e){e.MP4="video/mp4"}(r||(r={}))},567895:(e,n,t)=>{t.d(n,{Zj:()=>h,Fq:()=>y,ZP:()=>O});var r=t(785893),o=t(667294),i=t(678081),a=t(212271),u=t(910866),c=t(959797);function l(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function s(e){s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return s(e)}function f(e,n){return!n||"object"!==b(n)&&"function"!=typeof n?function(e){
if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function p(e,n){p=Object.setPrototypeOf||function(e,n){e.__proto__=n;return e};return p(e,n)}var b=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function d(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var t,r=s(e);if(n){var o=s(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return f(this,t)}}function h(){return[{name:c.Z.Messages.IMAGES,extensions:["jpg","jpeg","png","gif"]}]}function y(e,n,t){!function(e,n){if(null!=e){var t=new FileReader;t.onload=function(t){var r;"string"==typeof(null===(r=t.target)||void 0===r?void 0:r.result)&&n(t.target.result,e)}
;t.readAsDataURL(e)}}(e,(function(r){if(e.type===u.m.MP4)return n(r,e);var o=new Image;o.src=r;o.onload=function(){n(r,e)};o.onerror=function(){t()}}))}var v=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}});n&&p(e,n)}(t,e);var n=d(t);function t(){l(this,t);var e;(e=n.apply(this,arguments))._ref=o.createRef();e._isMounted=!1;e.handleFileChange=function(n){var t=e.props,r=t.onFileSizeError,o=t.maxFileSizeBytes;n.stopPropagation();n.preventDefault();if(null!=n.currentTarget.files)for(var i=0;i<n.currentTarget.files.length;i++){var a=n.currentTarget.files[i];a.size>o?null==r||r(o,a.size):y(a,e.handleFileRead,e.handleFileError)}};e.handleFileRead=function(n,t){var r=e.props.onChange;e._isMounted&&r(n,t)};e.handleFileError=function(){(0,a.xT)({title:c.Z.Messages.PREMIUM_ALERT_ERROR_TITLE,
help:c.Z.Messages.UNABLE_TO_PROCESS_IMAGE})};return e}var u=t.prototype;u.componentDidMount=function(){this._isMounted=!0};u.activateUploadDialogue=function(){var e;null===(e=this._ref.current)||void 0===e||e.activateUploadDialogue()};u.render=function(){var e=this.props,n=e.multiple,t=e.disabled,o=e.className,a=e.tabIndex,u=e["aria-label"],c=e.filters;return(0,r.jsx)(i.Z,{ref:this._ref,onChange:this.handleFileChange,filters:null!=c?c:h(),multiple:n,disabled:t,className:o,tabIndex:a,"aria-label":u})};return t}(o.PureComponent);v.defaultProps={multiple:!0,tabIndex:-1,maxFileSizeBytes:1/0};const O=v}}]);
//# sourceMappingURL=4c1dbefa2d40d1ef6ac5.js.map