"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[32646],{688417:(e,n,t)=>{t.d(n,{Z:()=>g});var r=t(730381),o=t.n(r),i=t(173436),u=t(838478),l=t(183279),a=t(390504),c=t(203271),s=t(228031),f=t(959797);function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function p(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function h(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],u=!0,l=!1;try{for(t=t.call(e);!(u=(r=t.next()).done);u=!0){i.push(r.value);if(n&&i.length===n)break}}catch(e){l=!0;o=e}finally{try{u||null==t.return||t.return()}finally{if(l)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return d(e,n);var t=Object.prototype.toString.call(e).slice(8,-1)
;"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const g={open:function(e){i.Z.dispatch({type:"NOTIFICATION_SETTINGS_MODAL_OPEN",guildId:e})},close:function(){i.Z.dispatch({type:"NOTIFICATION_SETTINGS_MODAL_CLOSE"})},updateGuildNotificationSettings:function(e,n,t){var r=(0,c.GA)(e);l.Z.saveUserGuildSettings(e,n);i.Z.dispatch({type:"USER_GUILD_SETTINGS_GUILD_UPDATE",guildId:e,settings:n});(0,c.Wq)(e,n,r,t)},updateGuildAndChannelNotificationSettings:function(e,n,t){var r=Object.keys(n.channel_overrides),o=(0,c.GA)(e),u=(0,c.wK)(e,r);l.Z.saveUserGuildSettings(e,n);i.Z.dispatch({type:"USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",guildId:e,settings:n});(0,c.Wq)(e,n,o,t)
;Object.keys(n.channel_overrides).forEach((function(r){var o=u.get(r);(0,c.jz)(e,r,n.channel_overrides[r],o,t)}))},updateGuildNotificationSettingsBulk:function(e,n){var t=Object.keys(e),r=(0,c.rU)(t);l.Z.saveUserGuildSettingsBulk(e);Object.entries(e).forEach((function(e){var t=h(e,2),o=t[0],u=t[1],l=r.get(o);i.Z.dispatch({type:"USER_GUILD_SETTINGS_GUILD_UPDATE",guildId:o,settings:u});(0,c.Wq)(o,u,l,n)}))},updateChannelOverrideSettings:function(e,n,t,r){var o=(0,c.I)(e,n),a={channel_overrides:p({},n,t)};l.Z.saveUserGuildSettings(e,a);i.Z.dispatch({type:"USER_GUILD_SETTINGS_CHANNEL_UPDATE",guildId:e,channelId:n,settings:t});u.Z.announce(f.Z.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED);(0,c.jz)(e,n,t,o,r)},updateChannelOverrideSettingsBulk:function(e,n,t){var r=Object.keys(n),o={channel_overrides:n},u=(0,c.wK)(e,r);l.Z.saveUserGuildSettings(e,o);i.Z.dispatch({type:"USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",guildId:e,overrides:n});Object.keys(n).forEach((function(r){return(0,
c.jz)(e,r,n[r],u.get(r),t)}))},setForumThreadsCreated:function(e,n){var t=n?s.ic.NEW_FORUM_THREADS_ON:s.ic.NEW_FORUM_THREADS_OFF,r=n?s.ic.NEW_FORUM_THREADS_OFF:s.ic.NEW_FORUM_THREADS_ON,o=a.Z.getChannelFlags(e)&~r|t;this.updateChannelOverrideSettings(e.guild_id,e.id,{flags:o})},handleCheckboxChange:function(e,n,t,r){i.Z.dispatch({type:"GUILD_UPDATE_NOTIFICATION_PROFILE",guildId:r.id,profile:e,updatedSettings:p({},n,t),handleUpdate:this.updateGuildNotificationSettings})},handleSelectChange:function(e,n,t,r){i.Z.dispatch({type:"GUILD_UPDATE_NOTIFICATION_PROFILE",guildId:r.id,profile:e,updatedSettings:p({},n,t),handleUpdate:this.updateGuildNotificationSettings})},handleMuteConfigChange:function(e,n,t){var r={selected_time_window:n,end_time:n>0?o()().add(n,"second").toISOString():null};i.Z.dispatch({type:"GUILD_UPDATE_NOTIFICATION_PROFILE",guildId:t.id,profile:"MUTED",updatedSettings:p({},e,r),handleUpdate:this.updateGuildNotificationSettings})},handleHighlightsChange:function(e,n,t){
i.Z.dispatch({type:"GUILD_UPDATE_NOTIFICATION_PROFILE",guildId:t.id,profile:e,updatedSettings:{notifyHighlights:n},handleUpdate:this.updateGuildNotificationSettings})},handleProfileChange:function(e,n){i.Z.dispatch({type:"GUILD_SET_NOTIFICATION_PROFILE",guildId:n.id,profile:e.value,handleUpdate:this.updateGuildNotificationSettings})}}},97638:(e,n,t)=>{t.d(n,{Fj:()=>Z,BK:()=>w,ZP:()=>j});var r=t(785893),o=t(667294),i=t(294184),u=t.n(i),l=t(213192),a=t.n(l),c=t(647446),s=t(892472),f=t(629590),d=t(719455),p=t(469282),h=t(766936),g=t(725002),y=t(170729),v=t(461061),m=t(959797),b=t(544064),_=t.n(b);function E(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function O(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function S(e){S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return S(e)}function I(e){for(var n=1;n<arguments.length;n++){
var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){O(e,n,t[n])}))}return e}function T(e,n){return!n||"object"!==A(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function R(e,n){R=Object.setPrototypeOf||function(e,n){e.__proto__=n;return e};return R(e,n)}var A=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function P(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var t,r=S(e);if(n){var o=S(this).constructor
;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return T(this,t)}}var C=Object.freeze({SMALL:_().small,MEDIUM:_().medium,LARGE:_().large}),Z=a()({MEMBER:null,ROLE:null,CHANNEL:null}),w=function(e){var n,t,o=e.hasContent,i=e.onClear,l=e.className,a=e.themeOverride,c=e.size,s=void 0===c?C.SMALL:c;return(0,r.jsx)(f.Z,{className:u()(l,_().iconLayout,s,(0,y.Q)(a),O({},_().clear,o)),onClick:function(e){e.stopPropagation();null!=i&&i(e)},onMouseDown:function(e){e.preventDefault();e.stopPropagation()},tabIndex:o?0:-1,"aria-hidden":!o,"aria-label":m.Z.Messages.SEARCH_CLEAR,focusProps:{offset:4},children:(0,r.jsxs)("div",{className:_().iconContainer,children:[(0,r.jsx)(p.Z,{className:u()((n={},O(n,_().icon,!0),O(n,_().visible,!o),n))}),(0,r.jsx)(d.Z,{className:u()((t={},O(t,_().icon,!0),O(t,_().visible,o),t))})]})})},N=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function")
;e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}});n&&R(e,n)}(t,e);var n=P(t);function t(){E(this,t);var e;(e=n.apply(this,arguments)).defaultInputProps={role:"combobox","aria-haspopup":"listbox","aria-autocomplete":"list"};e.ref=o.createRef();e.containerRef=o.createRef();e.handleKeyDown=function(n){var t=e.props,r=t.onActivate,o=t.onKeyDown,i=t.onQueryChange,u=t.useKeyboardNavigation;null!=o&&o(n);var l=e.ref.current;if(null!=l&&null==r)if(n.keyCode===v.yXg.ESCAPE&&null!=l.value&&""!==l.value&&l.value.length>0){l.value="";null!=i&&i("")}else u&&(e.props.gridResults?e.handleKeyDownGrid(n):e.handleKeyDownList(n));else n.keyCode!==v.yXg.TAB&&null!=r&&r(n)};e.handleChange=function(n){var t=e.props.onQueryChange;null!=t&&t(n.currentTarget.value)};e.handleFocus=function(n){var t=e.props.onFocus;null!=t&&t(n)};e.handleClear=function(){var n=e.props.onClear,t=e.ref.current;null!=n&&n();null!=t&&t.focus()};e.handleRemoveTag=function(n){
var t=e.props.onRemoveTag;null==t||t(n)};e.focus=function(){var n=e.ref.current;null!=n&&n.focus()};return e}var i=t.prototype;i.componentDidUpdate=function(e){var n=this.props,t=n.focusAfterReady,r=n.isReady;t&&!e.isReady&&r&&this.focus()};i.handleKeyDownGrid=function(e){var n=this.props,t=n.selectedRow,r=n.selectedColumn,o=n.sections,i=n.query,u=n.tags,l=n.onSelectionChange,a=n.onSelect,c=n.onRemoveTag,s=n.preventEscapePropagation;if(0!==o.length){switch(e.keyCode){case v.yXg.BACKSPACE:if((null==i||0===i.length)&&null!=u&&u.length>0){e.preventDefault();e.stopPropagation();null==c||c(u.length-1)}break;case v.yXg.ARROW_DOWN:e.preventDefault();e.stopPropagation();if(-1===t){t=0;r=0}else{(t+=1)>=o.length&&(t=o.length-1);r>=o[t]&&(r=o[t]-1)}break;case v.yXg.ARROW_UP:e.preventDefault();e.stopPropagation();if((t-=1)<0){t=0;r=0}else r>=o[t]&&(r=o[t]-1);break;case v.yXg.ARROW_LEFT:e.preventDefault();e.stopPropagation();-1===t&&(t=0);if((r-=1)<0)if((t-=1)>=0)r=o[t]-1;else if(t<0){t=0;r=0}break
;case v.yXg.ARROW_RIGHT:e.preventDefault();e.stopPropagation();-1===t&&(t=0);if((r+=1)>=o[t]){r=0;(t+=1)>=o.length&&(r=o[t=o.length-1]-1)}break;case v.yXg.ENTER:e.preventDefault();e.stopPropagation();-1===t&&(t=0);-1===r&&(r=0);if(t>=o.length||r>=o[t])return;null!=a&&a(t,r,e);return;case v.yXg.ESCAPE:e.preventDefault();s&&e.stopPropagation();null!=a&&a(null,null,e);return;default:return}null!=l&&l(t,r)}};i.handleKeyDownList=function(e){var n=this.props,t=n.sections,r=n.selectedSection,o=n.selectedRow,i=n.onSelect,u=n.onSelectionChange,l=n.query,a=n.tags,c=n.preventEscapePropagation,s=this.ref.current;if(null!=s)switch(e.keyCode){case v.yXg.BACKSPACE:if((null==l||0===l.length)&&null!=a&&a.length>0){var f,d;e.preventDefault();e.stopPropagation();null===(d=(f=this.props).onRemoveTag)||void 0===d||d.call(f,a.length-1)}break;case v.yXg.ARROW_DOWN:e.preventDefault();e.stopPropagation();if(t.length>r&&++o>=t[r]){++r>=t.length&&(r=0);o=0}null==u||u(r,o);break;case v.yXg.ARROW_UP:
e.preventDefault();e.stopPropagation();if(--o<0){--r<0&&(r=t.length-1);o=t[r]-1}null==u||u(r,o);break;case v.yXg.ENTER:e.preventDefault();e.stopPropagation();t.length>r&&t[r]>o&&(null==i||i(r,o,e));break;case v.yXg.ESCAPE:e.preventDefault();c&&e.stopPropagation();null==i||i(null,null,e);s.blur()}};i.render=function(){var e=this,n=this.props,t=n.autoFocus,o=n.query,i=n.placeholder,l=void 0===i?m.Z.Messages.DM_SEARCH_PLACEHOLDER:i,a=n.themeOverride,f=n.disabled,p=n.onClear,v=n.size,b=n.maxHeight,E=n.tags,S=n.onActivate,T=n.className,R=n.inputProps,A=n.focusAfterReady,P=null!=o&&o.length>0,C=!1,N=[];if(null!=E&&E.length>0)if("string"==typeof E[0]){E.forEach((function(n,t){return N.push((0,r.jsxs)(s.Z,{focusProps:{offset:4},className:_().tag,onClick:e.handleRemoveTag.bind(e,t),children:[n,(0,r.jsx)(d.Z,{className:_().close,"aria-label":m.Z.Messages.REMOVE})]},t))}))}else{C=!0;E.forEach((function(n,t){return N.push((0,r.jsxs)(s.Z,{className:u()(_().tag,_().richTag),
onClick:e.handleRemoveTag.bind(e,t),children:[n.type===Z.MEMBER&&n.avatar&&(0,r.jsx)(h.ZP,{src:n.avatar,"aria-hidden":!0,size:h.ZP.Sizes.SIZE_16}),n.type===Z.ROLE&&n.color&&(0,r.jsx)("span",{className:_().tagRoleColor,style:{backgroundColor:n.color}}),(0,r.jsx)("span",{className:_().tagLabel,children:n.label}),(0,r.jsx)(d.Z,{className:_().close,"aria-label":m.Z.Messages.REMOVE})]},t))}))}return(0,r.jsx)(c.tE,{focusTarget:this.ref,ringTarget:this.containerRef,children:(0,r.jsx)("div",{ref:this.containerRef,className:u()(T,_().container,v,(0,y.Q)(a),O({},_().disabled,f)),children:(0,r.jsxs)(g.ZP,{className:_().inner,style:{maxHeight:b},children:[N,(0,r.jsx)("input",I({className:u()(_().input,O({},_().richTagInput,C)),type:"text",ref:this.ref,spellCheck:"false",placeholder:l,value:o,onChange:this.handleChange,onKeyDown:this.handleKeyDown,onFocus:this.handleFocus,disabled:f,"aria-disabled":f,autoFocus:!A&&t,onMouseDown:S},this.defaultInputProps,R)),null!=p?(0,r.jsx)(w,{size:v,
themeOverride:a,hasContent:P,onClear:this.handleClear}):null]})})})};return t}(o.Component);N.Sizes=C;N.defaultProps={size:C.SMALL,query:"",sections:[],selectedSection:0,selectedRow:-1,selectedColumn:-1,gridResults:!1,disabled:!1,autoFocus:!1,preventEscapePropagation:!0,useKeyboardNavigation:!0};const j=N},526061:(e,n,t)=>{t.d(n,{O2:()=>Y,Eg:()=>Q,eV:()=>re,ku:()=>Ee,W3:()=>$,r_:()=>pe,jR:()=>me,eZ:()=>be,ql:()=>ye,Bs:()=>ae,kF:()=>ee,iM:()=>ie,vP:()=>Oe,pG:()=>se,n6:()=>de,J$:()=>ge,XZ:()=>_e,M1:()=>Se,xw:()=>ue,ES:()=>J,nP:()=>ce,IN:()=>le,ur:()=>oe,Q:()=>fe,Vm:()=>ve});var r=t(667294),o=t(496486),i=t.n(o),u=t(123042),l=t(451964),a=t(277563),c=t(791462),s=t(820028),f=t(173436),d=t(320646);(0,t(553494).B)({kind:"user",id:"2022-12_forum_activity",label:"Increased activity view for Forums",defaultConfig:{enabled:!1,version:0},treatments:[{id:1,label:"Enabled (Version 1)",config:{enabled:!0,version:1}},{id:2,label:"Enabled (Version 2)",config:{enabled:!0,version:2}}]})
;var p=t(635940),h=t(536419),g=t(978571),y=t(60890),v=(t(577028),t(973381)),m=t(328378),b=t(3056),_=t(437803),E=t(356004),O=t(392115),S=t(210854),I=t(653772),T=t(940712),R=t(718375),A=t(105405),P=t(475823),C=t(859023),Z=t(90816),w=t(103686),N=t(941361),j=t(674455),U=t(829568),D=t(9080),M=t(215219),L=t(232779),G=t(809633),F=t(461061),k=t(35236),x=t(504003);function H(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function W(e,n,t,r,o,i,u){try{var l=e[i](u),a=l.value}catch(e){t(e);return}l.done?n(a):Promise.resolve(a).then(r,o)}function B(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function u(e){W(i,r,o,u,l,"next",e)}function l(e){W(i,r,o,u,l,"throw",e)}u(void 0)}))}}function V(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function X(e,n){n=null!=n?n:{}
;Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}function z(e){return function(e){if(Array.isArray(e))return H(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return H(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return H(e,n)}(e)||function(){
throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var K=function(e,n){var t,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:u.label++;return{value:i[1],done:!1};case 5:u.label++;r=i[1];i=[0];continue;case 7:i=u.ops.pop();u.trys.pop();continue;default:if(!(o=u.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){
u.label=o[1];o=i;break}if(o&&u.label<o[2]){u.label=o[2];u.ops.push(i);break}o[2]&&u.ops.pop();u.trys.pop();continue}i=n.call(e,u)}catch(e){i=[6,e];r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},Y=(0,h.Z)({id:"2021-07_threads_only_channel",label:"Threads only channel",kind:"guild",defaultConfig:{enabled:!1},treatments:[{id:1,label:"On",config:{enabled:!0}},{id:2,label:"On",config:{enabled:!0}}]});function q(e){return Y.useExperiment({guildId:e}).enabled}function Q(e){return Y.getCurrentConfig({guildId:e}).enabled}function $(e){return q(e)}function J(e,n,t){var o=(0,c.e7)([v.Z],(function(){return v.Z.hasLoaded(e.guild_id)}));r.useEffect((function(){if(o){var r=N.Z.getThreadIds(e.id,n,t),i=D.Z.getThreadIdsMissingCounts(e.guild_id,r).filter((function(e){return(0,L.nU)(e,[R.ZP])})).slice(0,180).map((function(e){return{threadId:e,ackMessageId:R.ZP.getTrackedAckMessageId(e)}}));i.length>0&&f.Z.dispatch({type:"REQUEST_FORUM_UNREADS",guildId:e.guild_id,
channelId:e.id,threads:i})}}),[e.id,e.guild_id,o,t,n])}function ee(e){return(0,c.e7)([v.Z,E.Z],(function(){var n=i()(v.Z.getThreadsForParent(e.guild_id,e.parent_id)).keys().filter((function(e){var n;return!0===(null===(n=E.Z.getChannel(e))||void 0===n?void 0:n.hasFlag(k.zZ.PINNED))})).head();return E.Z.getChannel(n)}))}function ne(e){var n=null==e?void 0:e.parent_id;return(0,c.cj)([E.Z],(function(){var e,t=E.Z.getChannel(n);return(null!==(e=null==t?void 0:t.availableTags)&&void 0!==e?e:[]).reduce((function(e,n){return X(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){V(e,n,t[n])}))}return e}({},e),V({},n.id,n))}),{})}),[n])}var te=[];function re(e){var n=ne(e);return r.useMemo((function(){var t,r,o
;return null!==(o=null===(r=null==e||null===(t=e.appliedTags)||void 0===t?void 0:t.map((function(e){return n[e]})))||void 0===r?void 0:r.filter(Z.lm))&&void 0!==o?o:te}),[n,null==e?void 0:e.appliedTags])}function oe(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=re(e);return r.useMemo((function(){return[t.slice(0,n),Math.max(0,t.length-n)]}),[t,n])}function ie(e,n){var t=(0,c.Wu)([C.default],(function(){return n.map((function(e){return C.default.getUser(e)}))}));r.useEffect((function(){n.filter((function(e,n){return null==t[n]})).forEach((function(n){S.Z.requestMember(e.guild_id,n)}))}),[]);return t}function ue(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:G.R6.DURATION_AGO,o=r.useMemo((function(){return a.default.extractTimestamp(e.id)}),[e.id]),i=a.default.extractTimestamp((0,c.e7)([R.ZP],(function(){return R.ZP.lastMessageId(e.id)}))),u=r.useMemo((function(){return(0,L.Uw)(n,t)}),[n,t]);return r.useMemo((function(){
return n===l.z.CREATION_DATE?(0,_.Ye)(o,u):(0,_.Ye)(i,u)}),[i,n,o,u])}function le(e){var n;return r.useMemo((function(){return i().maxBy(null!==(n=null==e?void 0:e.reactions)&&void 0!==n?n:[],(function(e){return Math.max(e.burst_count,e.count)}))}),[null==e?void 0:e.reactions])}function ae(e){var n=null==e?void 0:e.defaultReactionEmoji,t=(0,c.e7)([O.Z],(function(){return null!=(null==n?void 0:n.emojiId)?O.Z.getUsableCustomEmojiById(n.emojiId):null}));return null==n?null:null!=n.emojiId&&null!=t?{id:n.emojiId,name:t.name,animated:t.animated}:null!=n.emojiName?{id:n.emojiId,name:n.emojiName,animated:!1}:null}function ce(e){var n,t=(0,c.e7)([b.Z],(function(){return null!==(n=b.Z.getCount(e.id))&&void 0!==n?n:0})),r=(0,m.Ws)(t,e.id),o=(0,c.e7)([R.ZP],(function(){return(0,L.nU)(e.id,[R.ZP])}));return{messageCount:r,unreadCount:(0,c.e7)([D.Z],(function(){if(!o)return null;var n=D.Z.getCount(e.id);return null!=n&&n>0?n>=x.dg?"".concat(x.dg,"+"):n:"1+"}))}}function se(e){var n=(0,
c.e7)([C.default],(function(){return C.default.getUser(e.ownerId)})),t=(0,y.Sw)(n,e);r.useEffect((function(){null!=e.ownerId&&S.Z.requestMember(e.guild_id,e.ownerId)}),[e.guild_id,e.ownerId]);return{user:n,author:t}}function fe(e){return(0,c.Wu)([P.Z,C.default,A.Z],(function(){var n=C.default.getCurrentUser();return i()(P.Z.getTypingUsers(e.id)).keys().filter((function(e){return e!==(null==n?void 0:n.id)})).reject(A.Z.isBlocked).map((function(e){return C.default.getUser(e)})).filter(Z.lm).map((function(e){return e.id})).value()}))}function de(e){var n=e.firstMessage,t=e.formatInline,o=void 0===t||t,i=e.noStyleAndInteraction,u=void 0===i||i,l=r.useMemo((function(){return null!=(null==n?void 0:n.content)&&""!==n.content?(0,g.ZP)(n,{formatInline:o,noStyleAndInteraction:u,allowHeading:!0,allowList:!0}):{hasSpoilerEmbeds:!1,content:null}}),[n,o,u]),a=l.hasSpoilerEmbeds;return{hasSpoilerEmbeds:a,content:l.content,firstMedia:(0,j.eL)(n,a)}}function pe(e){return(0,c.e7)([T.Z],(function(){
return T.Z.can(F.Plq.MANAGE_CHANNELS,e)}))}var he={isNew:!1,hasUnreads:!1};function ge(e){return(0,c.cj)([I.Z,R.ZP],(function(){var n,t=I.Z.getGuild(null!==(n=e.getGuildId())&&void 0!==n?n:"");return null==t?he:(0,L.FS)(e,t,[R.ZP])}))}function ye(e){return r.useMemo((function(){return null==e||null==e.template?"":e.template.trim()}),[e])}function ve(e){var n=(0,c.e7)([T.Z],(function(){return T.Z.can(F.Plq.MANAGE_THREADS,e)}));return r.useMemo((function(){var t,r=z(null!==(t=e.availableTags)&&void 0!==t?t:[]);n||(r=r.filter((function(e){return!e.moderated})));return r}),[n,e.availableTags])}function me(e){return(0,c.e7)([T.Z],(function(){return T.Z.can(F.Plq.READ_MESSAGE_HISTORY,e)}))}function be(e){return(0,c.e7)([T.Z],(function(){return T.Z.can(F.Plq.READ_MESSAGE_HISTORY,e)}))}function _e(e){var n=e.channelId;return(0,c.cj)([M.Z],(function(){return{isSearchLoading:M.Z.getSearchLoading(n),searchQuery:M.Z.getSearchQuery(n),searchResults:M.Z.getSearchResults(n)}}))}function Ee(e,n){
var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=_e({channelId:e.id}),i=o.isSearchLoading,u=o.searchQuery,l=me(e),a=r.useRef(null),c=r.useRef(new Set);r.useEffect((function(){if(null!=u||null==a.current){if(null!=u&&0!==u.length&&!t)if(l){if((a.current!==u||c.current!==n)&&!i){var r=setTimeout(B((function(){return K(this,(function(t){switch(t.label){case 0:a.current=u;c.current=n;t.label=1;case 1:t.trys.push([1,3,,4]);return[4,w.Z.searchForumPosts(e.guild_id,e.id,u,n)];case 2:t.sent();return[3,4];case 3:t.sent();return[3,4];case 4:return[2]}}))})),350);return function(){return clearTimeout(r)}}}else w.Z.clearForumSearch(e.id)}else{w.Z.clearForumSearch(e.id);a.current=null}}),[l,e.guild_id,e.id,t,i,u,n])}function Oe(e){var n=e.channel,t=e.sortOrder,o=e.tagFilter,i=e.shouldAutomaticallyAck,u=(0,c.Wu)([N.Z],(function(){return N.Z.getThreadIds(n.id,t,o)})),l=(0,c.e7)([N.Z],(function(){return i&&N.Z.getCanAckThreads()}),[i]);r.useEffect((function(){l&&(0,d.U6)(n)}),[n,l])
;return u}function Se(e){var n=pe(e),t=(0,p.un)(s.z$.FORUM_CHANNEL_GRID_VIEW_UPSELL),o=q(e.guild_id),i=r.useRef(e.defaultForumLayout===u.X.DEFAULT||null==e.defaultForumLayout),l=(0,c.cj)([v.Z,U.Z,N.Z],(function(){var n=e.getGuildId();if(null==n)return{meetsThreshold:!1,loading:!0};if(!v.Z.hasLoaded(n))return{meetsThreshold:!1,loading:!0};var t=N.Z.getCurrentThreadIds();if(0===t.length)return{meetsThreshold:!1,loading:!0};var r=t.map((function(e){return U.Z.getMessage(e)})),o=!r.some((function(e){return e.loaded}));if(o)return{meetsThreshold:!1,loading:!0};var i=r.map((function(e){return e.firstMessage})).filter(Z.lm);return 0===i.length?{meetsThreshold:!1,loading:!1}:{meetsThreshold:i.filter((function(e){return e.attachments.some(j.As)})).length/i.length>.7,loading:o}})),a=l.loading,f=l.meetsThreshold,d=!t&&n&&o&&i.current;return{showGridViewUpsell:d,shouldAutoEnableGridView:f&&d,gridViewUpsellLoading:a&&d}}},674455:(e,n,t)=>{t.d(n,{As:()=>h,zy:()=>m,eL:()=>b,CB:()=>_,cp:()=>E})
;var r=t(3056),o=t(409271),i=t(356004),u=t(171447),l=t(859023),a=t(90816),c=t(6349);function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function f(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e){if(null==e)return!1;var n=e.filename,t=e.height,r=e.width;return c.IQ.test(n)&&null!=t&&t>0&&null!=r&&r>0}function p(e){
return null!=e&&(null!=e&&c.XH.test(e.filename)&&null!=e.proxy_url)}function h(e){return d(e)||p(e)}function g(e){return c.XH.test(e)}function y(e){return function(e){if(!(arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.x4.getSetting()))return[];var n=null==e?void 0:e.attachments;return null==e||null==n?[]:n.filter(h).map((function(e){var n=e.proxy_url,t=e.url,r=e.description,o=e.spoiler,i=e.width,u=e.height,l=e.filename;if(null==i||null==u)return null;var a=g(l);return{src:a?"".concat(n,"?format=jpeg"):null!=n?n:t,width:i,height:u,spoiler:null!=o&&o,alt:r,isVideo:a}})).filter(a.lm)}(e,o.x4.useSetting())}function v(e,n){var t=o.RS.useSetting(),r=o.NA.useSetting();if(null==e)return[];var i=e.embeds;return t&&r&&null!=i?i.map((function(e){var t,r=null!==(t=e.image)&&void 0!==t?t:e.thumbnail;null==r&&null!=e.images&&(r=e.images[0]);if(null!=r&&null!=r.url){var o=r.height,i=r.proxyURL,u=r.url,l=r.width,a=null!=i&&c.XH.test(i);return{src:null!=i&&""!==i?i:u,height:o,width:l,
spoiler:n,isVideo:a}}})).filter(a.lm):[]}function m(e,n){var t=y(e),r=v(e,n);return f(t).concat(f(r))}function b(e,n){var t,r,o=y(e),i=v(e,n);return null!==(r=null!==(t=o[0])&&void 0!==t?t:i[0])&&void 0!==r?r:null}function _(e,n){var t,o=i.Z.getChannel(n);if(null==o)return!1;var a=u.Z.getMessage(o.id,o.id);return null!=a&&(e.length>0&&null!=e.find((function(e){return e.isImage||e.isVideo}))&&o.isForumPost()&&o.ownerId===(null===(t=l.default.getCurrentUser())||void 0===t?void 0:t.id)&&0===r.Z.getCount(o.id)&&(0===a.attachments.length||null==a.attachments.find((function(e){return d(e)||p(e)}))))}function E(e){return e.reduce((function(e,n){return{containsVideo:e.containsVideo||n.isVideo,containsGif:e.containsGif||c.LR.test(n.src)}}),{containsVideo:!1,containsGif:!1})}},9080:(e,n,t)=>{t.d(n,{Z:()=>b});var r=t(441143),o=t.n(r),i=t(791462),u=t(173436),l=t(973381),a=t(356004),c=t(718375);function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}
function f(e){f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return f(e)}function d(e,n){return!n||"object"!==h(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function p(e,n){p=Object.setPrototypeOf||function(e,n){e.__proto__=n;return e};return p(e,n)}var h=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function g(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var t,r=f(e);if(n){var o=f(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return d(this,t)}}var y={},v=new Set;var m=function(e){!function(e,n){
if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}});n&&p(e,n)}(t,e);var n=g(t);function t(){s(this,t);return n.apply(this,arguments)}var r=t.prototype;r.initialize=function(){this.waitFor(l.Z,a.Z,c.ZP)};r.getCount=function(e){return y[e]};r.getThreadIdsMissingCounts=function(e,n){o()(l.Z.hasLoaded(e),"must wait for THREAD_LIST_SYNC before calling this");return n.filter((function(e){return!(e in y)&&!v.has(e)}))};r.__getLocalVars=function(){return{counts:y,loadingThreadIds:v}};return t}(i.ZP.Store);m.displayName="ForumPostUnreadCountStore";const b=new m(u.Z,{CONNECTION_OPEN:function(){y={};v=new Set},THREAD_CREATE:function(e){var n=e.channel;if(!e.isNewlyCreated)return!1;if(!l.Z.hasLoaded(n.guild_id))return!1;y[n.id]=0},MESSAGE_CREATE:function(e){var n=e.channelId,t=e.optimistic,r=e.isPushNotification;if(t||r)return!1;if(!(n in y))return!1
;y[n]++},FORUM_UNREADS:function(e){e.threads.forEach((function(e){null!=e.count&&(y[e.threadId]=e.count)}))},MESSAGE_ACK:function(e){var n=e.channelId;if(!(n in y)){var t=a.Z.getChannel(n),r=a.Z.getChannel(null==t?void 0:t.parent_id);if(!(null==r?void 0:r.isForumChannel()))return!1}y[n]=c.ZP.getUnreadCount(n)},REQUEST_FORUM_UNREADS:function(e){e.threads.forEach((function(e){var n=e.threadId;return v.add(n)}))}})},215219:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(791462),o=t(173436);function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function u(e){u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return u(e)}function l(e,n){return!n||"object"!==c(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function a(e,n){a=Object.setPrototypeOf||function(e,n){e.__proto__=n;return e};return a(e,n)}
var c=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function s(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var t,r=u(e);if(n){var o=u(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return l(this,t)}}var f=null,d=!1,p=null,h=null;function g(){f=null;p=null;d=!1;h=null}function y(e){if(h!==e){h=e;g()}}var v=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}});n&&a(e,n)}(t,e);var n=s(t);function t(){i(this,t);return n.apply(this,arguments)}var r=t.prototype;r.getSearchQuery=function(e){y(e);return f}
;r.getSearchLoading=function(e){y(e);return d};r.getSearchResults=function(e){y(e);return p};r.getHasSearchResults=function(){return null!=p&&0!==p.length};r.__getLocalVars=function(){return{searchQuery:f,searchLoading:d,searchResults:p,selectedChannelId:h}};return t}(r.ZP.Store);v.displayName="ForumSearchStore";const m=new v(o.Z,{CONNECTION_OPEN:g,FORUM_SEARCH_QUERY_UPDATED:function(e){var n=e.channelId,t=e.query;y(n);f=t;h=n;null!=t&&""!=t||(p=null)},FORUM_SEARCH_START:function(e){e.channelId===h&&(d=!0)},FORUM_SEARCH_SUCCESS:function(e){var n=e.channelId,t=e.threadIds;if(n===h){d=!1;p=t}},FORUM_SEARCH_FAILURE:function(e){if(e.channelId===h){d=!1;p=[]}},FORUM_SEARCH_CLEAR:function(e){if(e.channelId===h){p=null;f=null;d=!1}}})},328378:(e,n,t)=>{t.d(n,{Ws:()=>u,WE:()=>a});var r=t(346529),o=t(504003),i=t(959797),u=function(e,n){if(null==e||e<0)return"0";var t=function(e){return r.Z.compare("992549565104128000",e)>-1}(n);return(null==n||t)&&e>=o.vw?"50+":e>=o.M3?"100k+":"".concat(e)
},l=function(e,n,t){var r=u(e,t);return"0"===r?i.Z.Messages.SEE_THREAD:n.format({count:r})},a=function(e,n){return l(e,i.Z.Messages.THREAD_MESSAGE_COUNT,n)}},475823:(e,n,t)=>{t.d(n,{Z:()=>T});var r=t(791462),o=t(675860),i=t(173436),u=t(631134),l=t(429753),a=t(461061);function c(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function s(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function f(e){f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return f(e)}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){s(e,n,t[n])}))}return e}function p(e,n){
return!n||"object"!==g(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function h(e,n){h=Object.setPrototypeOf||function(e,n){e.__proto__=n;return e};return h(e,n)}var g=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function y(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var t,r=f(e);if(n){var o=f(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return p(this,t)}}var v,m={},b=Object.freeze({});function _(e){var n;return null!==(n=m[e])&&void 0!==n?n:b}function E(e){var n=e.channelId,t=e.userId,r=d({},_(n));clearTimeout(r[t]);r[t]=function(e,n){
return setTimeout((function(){i.Z.dispatch({type:"TYPING_STOP",channelId:e,userId:n})}),a.I2i)}(n,t);m[n]=r}function O(e){var n=e.channelId,t=e.userId,r=m[n];if(null==r||null==r[t])return!1;var o=d({},r);clearTimeout(o[t]);delete o[t];m[n]=o}function S(){m={}}var I=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}});n&&h(e,n)}(t,e);var n=y(t);function t(){c(this,t);return n.apply(this,arguments)}var r=t.prototype;r.getTypingUsers=function(e){return _(e)};r.isTyping=function(e,n){return null!=_(e)[n]};r.__getLocalVars=function(){return{typingUsersByChannel:m,localTypingDelay:v,EMPTY_TYPING:b}};return t}(r.ZP.Store);I.displayName="TypingStore";const T=new I(i.Z,{TYPING_START:E,TYPING_STOP:O,TYPING_START_LOCAL:function(e){var n=e.channelId,t=u.default.getId();if(null==t)return!1;if(null!=v&&v.channelId!==n){
null!=v.timeout&&clearTimeout(v.timeout);v=null}var r=Date.now(),c=.8*a.I2i;if(null!=v&&(null!=v.timeout||v.prevSend+c>r))return!1;var s=null==v||v.prevSend>r-2*c?a.WQ8:0,f=setTimeout((function(){if(null!=v&&v.channelId===n&&t===u.default.getId()&&null!=v.timeout){v.timeout=null;(function(e){var n=_(e);return n===b?0:Object.keys(n).length})(n)>a.WiX||o.Z.post({url:a.ANM.TYPING(n),oldFormErrors:!0}).then((function(e){if(200===e.status){var t,r,o=null!==(t=e.body.message_send_cooldown_ms)&&void 0!==t?t:0,u=null!==(r=e.body.thread_create_cooldown_ms)&&void 0!==r?r:0;o>0&&i.Z.dispatch({type:"SLOWMODE_SET_COOLDOWN",channelId:n,slowmodeType:l.S.SendMessage,cooldownMs:o});u>0&&i.Z.dispatch({type:"SLOWMODE_SET_COOLDOWN",channelId:n,slowmodeType:l.S.CreateThread,cooldownMs:u})}}))}}),s);v={channelId:n,timeout:f,prevSend:r};return E({channelId:n,userId:t})},TYPING_STOP_LOCAL:function(e){var n=e.channelId,t=u.default.getId();if(null==t)return!1;if(null!=v&&v.channelId===n&&null!=v.timeout){
clearTimeout(v.timeout);v=null;return O({channelId:n,userId:t})}return!1},CONNECTION_OPEN:S,OVERLAY_INITIALIZE:S,MESSAGE_CREATE:function(e){var n=e.channelId,t=e.message.author;e.optimistic&&function(e){if(null==v||v.channelId!==e)return!1;null!=v.timeout&&clearTimeout(v.timeout);v=null}(n);return O({channelId:n,userId:t.id})}})}}]);
//# sourceMappingURL=73ba354939c93ca3849a.js.map