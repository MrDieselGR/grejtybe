"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[93864],{454313:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(785893),o=(t(667294),t(64833));function i(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t;return e}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));n.forEach((function(r){i(e,r,t[r])}))}return e}function c(e,r){return function(t){var i=(0,o.Z)(r).AnalyticsLocationProvider;return(0,n.jsx)(i,{children:(0,n.jsx)(e,u({},t))})}}},793864:(e,r,t)=>{t.r(r);t.d(r,{default:()=>de});var n=t(785893),o=t(667294),i=t(281081),u=t(956345),c=t(377018),a=t(454313),l=t(859169),s=t(64833),f=t(404901),p=t(769672),d=t(422766),b=t(791462),y=t(733436),m=t(730189),S=t(761797),h=t(42944),O=t(959797)
;function g(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t;return e}function E(e,r){r=null!=r?r:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})));t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}));return e}function v(){var e=(0,b.cj)([m.Z],(function(){return{saturation:m.Z.saturation,useReducedMotion:m.Z.useReducedMotion,roleStyle:m.Z.roleStyle}})),r=e.saturation,t=e.useReducedMotion,o=e.roleStyle,i=S.Z.useExperiment({},{autoTrackExposure:!0}).allowRoleStyles,u=[{name:O.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_USERNAME_LABEL,value:"username"},{name:O.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_DOT_LABEL,value:"dot"
},{name:O.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_HIDDEN_LABEL,value:"hidden"}];return[(0,n.jsx)(p.kS,{children:(0,n.jsx)(p.S8,{id:"reduced-motion",label:O.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_ENABLE,checked:t,action:function(){return(0,y.Zt)(t?"no-preference":"reduce")}})},"reduced-motion"),(0,n.jsx)(p.kS,{children:(0,n.jsx)(p.II,{id:"input",label:O.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE,control:function(e,t){return(0,n.jsx)(h.Z,E(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));n.forEach((function(r){g(e,r,t[r])}))}return e}({},e),{ref:t,value:100*r,onChange:function(e){return(0,y.o2)(e/100)},"aria-label":O.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE}))}})},"input"),i?(0,n.jsx)(p.kS,{children:(0,n.jsx)(p.sN,{
id:"role-colors",label:O.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE,children:u.map((function(e){var r=e.name,t=e.value;return(0,n.jsx)(p.k5,{id:t,group:"role-colors",checked:t===o,label:r,action:function(){return(0,y.u1)(t)}},t)}))})},"role-colors"):null]}var j=t(830395),T=t(80635),I=t(661623),Z=t(409271),w=t(895469),A=t(461061);var P=t(110251),_=t.n(P),C=t(824390),x=t.n(C),M=t(477353),k=t(222419),N=t(294184),R=t.n(N),D=t(647446),L=t(629590),B=t(82961),U=t(719455),G=t(469282),Y=t(214965),H=t.n(Y);const W=o.forwardRef((function(e,r){var t=e.query,i=e.onChange,u=e.loading,c=void 0!==u&&u,a=e.disabled,l=void 0!==a&&a,s=e.placeholder,f=void 0===s?O.Z.Messages.SEARCH:s,p=e["aria-label"],d=o.useRef(null),b=o.useRef(null);o.useImperativeHandle(r,(function(){return{focus:function(){var e;return null===(e=b.current)||void 0===e?void 0:e.focus()},blur:function(){var e;return null===(e=b.current)||void 0===e?void 0:e.blur()},activate:function(){return!1}}}),[]);var y=function(e,r,t){
return r?(0,n.jsx)("div",{className:H().iconContainer,children:(0,n.jsx)(B.Z,{type:B.Z.Type.SPINNING_CIRCLE,className:R()(H().icon)})}):e.length>0?(0,n.jsx)(L.Z,{"aria-label":O.Z.Messages.SEARCH_CLEAR,className:R()(H().iconContainer,H().iconClickable),onClick:function(e){e.stopPropagation();t("")},onMouseDown:function(e){e.preventDefault();e.stopPropagation()},focusProps:{offset:{top:-3,right:-3,bottom:-3,left:-3}},children:(0,n.jsx)(U.Z,{width:18,height:18,className:H().icon,"aria-label":O.Z.Messages.CLOSE})}):(0,n.jsx)("div",{className:H().iconContainer,children:(0,n.jsx)(G.Z,{width:18,height:18,className:H().icon,"aria-label":O.Z.Messages.SEARCH})})}(t,c,i);return(0,n.jsx)(D.tE,{focusTarget:b,ringTarget:d,offset:{top:2,bottom:2,left:4,right:4},children:(0,n.jsxs)("div",{className:H().container,ref:d,children:[(0,n.jsx)("input",{role:"searchbox","aria-busy":c,ref:b,className:H().input,value:t,onChange:function(e){return i(e.currentTarget.value)},"aria-label":p,placeholder:f,
disabled:l}),y]})})}));var X=t(202552),F=t(770212),K=t(187936);function V(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function $(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t;return e}function q(e,r){r=null!=r?r:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})));t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}));return e}function z(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i=[],u=!0,c=!1;try{for(t=t.call(e);!(u=(n=t.next()).done);u=!0){
i.push(n.value);if(r&&i.length===r)break}}catch(e){c=!0;o=e}finally{try{u||null==t.return||t.return()}finally{if(c)throw o}}return i}}(e,r)||Q(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e){return function(e){if(Array.isArray(e))return V(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Q(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,r){if(e){if("string"==typeof e)return V(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);return"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?V(e,r):void 0}}function ee(e){
var r=e.id,t=e.experiment,o=e.currentBucket;return(0,n.jsxs)(p.sN,{id:r,label:t.title,action:function(){return(0,M.rX)(r,null)},children:[t.buckets.map((function(e){return(0,n.jsx)(p.S8,{id:"".concat(e),label:K.Z.getExperimentBucketName(e),checked:e===o,action:function(){return(0,M.rX)(r,e)}},"".concat(e))})),(0,n.jsx)(p.kS,{children:-1!==o&&(0,n.jsx)(p.sN,{id:"clear-override",label:"Clear Override",color:"danger",icon:F.Z,action:function(){return(0,M.rX)(r,null)}})})]},r)}function re(){var e=(0,b.e7)([k.Z,X.Z],(function(){var e=X.Z.getRegisteredExperiments();return Object.keys(e).map((function(r){var t=e[r],n=k.Z.getExperimentOverrideDescriptor(r);return{id:r,experiment:t,currentBucket:null!=n?n.bucket:-1}}))}),[],_()),r=z(o.useState(""),2),t=r[0],i=r[1],u=z(o.useState([]),2),c=u[0],a=u[1];o.useEffect((function(){0!==t.trim().length?a(e.filter((function(e){return x()(t,e.experiment.title.toLowerCase())}))):a(e)}),[e,t]);var l=o.useMemo((function(){return c.filter((function(e){
return-1!==e.currentBucket}))}),[c]),s=o.useMemo((function(){return c.filter((function(e){return-1===e.currentBucket}))}),[c]),f=o.useMemo((function(){return l.map(ee)}),[l]),d=o.useMemo((function(){return s.map(ee)}),[s]),y=(0,n.jsx)(p.II,{id:"experiments-search",control:function(e,r){return(0,n.jsx)(W,q(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));n.forEach((function(r){$(e,r,t[r])}))}return e}({},e),{query:t,onChange:i,ref:r,placeholder:O.Z.Messages.SEARCH}))}},"experiments-search");return[y,(0,n.jsx)(p.Cl,{},"separator")].concat(J(f),[f.length>0?(0,n.jsx)(p.Cl,{},"separator-2"):null],J(d))}var te=t(241490),ne=t(893321);var oe=t(932847);var ie=t(767202);function ue(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t]
;return n}function ce(e,r,t,n,o,i,u){try{var c=e[i](u),a=c.value}catch(e){t(e);return}c.done?r(a):Promise.resolve(a).then(n,o)}function ae(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var i=e.apply(r,t);function u(e){ce(i,n,o,u,c,"next",e)}function c(e){ce(i,n,o,u,c,"throw",e)}u(void 0)}))}}function le(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t;return e}function se(e,r){r=null!=r?r:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})));t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}));return e}function fe(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){
var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i=[],u=!0,c=!1;try{for(t=t.call(e);!(u=(n=t.next()).done);u=!0){i.push(n.value);if(r&&i.length===r)break}}catch(e){c=!0;o=e}finally{try{u||null==t.return||t.return()}finally{if(c)throw o}}return i}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return ue(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ue(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var pe=function(e,r){var t,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},
"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;(n=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:u.label++;return{value:i[1],done:!1};case 5:u.label++;n=i[1];i=[0];continue;case 7:i=u.ops.pop();u.trys.pop();continue;default:if(!(o=u.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1];o=i;break}if(o&&u.label<o[2]){u.label=o[2];u.ops.push(i);break}o[2]&&u.ops.pop();u.trys.pop();continue}i=r.call(e,u)}catch(e){i=[6,e];n=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};const de=(0,a.Z)((function(e){
var r,t,a,l=e.webBuildOverride,S=e.onSelect,h=fe(o.useState(!1),2),g=h[0],E=h[1],P=(r=(0,b.e7)([ne.Z],(function(){return ne.Z.enabled}),[]),(0,n.jsx)(p.S8,{id:"streamer-mode-toggle",label:O.Z.Messages.ENABLE_STREAMER_MODE_LABEL,action:function(){te.Z.setEnabled(!r)},checked:r})),_=function(){var e=Z.jU.useSetting(),r=(0,b.cj)([T.Z,I.ZP,m.Z],(function(){return{theme:T.Z.theme,useSystemTheme:I.ZP.useSystemTheme,useForcedColors:m.Z.useForcedColors}})),t=r.theme,o=r.useSystemTheme,i=r.useForcedColors,u=function(e,r){return(0,n.jsx)(p.k5,{id:e,group:"input-modes",label:r,disabled:i,checked:o===w.K.ON?"system"===e:e===t,action:function(){"system"!==e&&j.Z.updateTheme(e);j.Z.updatedUnsyncedSettings({useSystemTheme:"system"===e?w.K.ON:w.K.OFF})}})};return[(0,n.jsxs)(p.kS,{children:[u(A.BRd.DARK,O.Z.Messages.THEME_DARK),u(A.BRd.LIGHT,O.Z.Messages.THEME_LIGHT),u("system",O.Z.Messages.THEME_SYSTEM)]},"theme-items"),(0,n.jsx)(p.kS,{children:(0,n.jsx)(p.sN,{id:"compact-mode",
label:e?O.Z.Messages.SWITCH_TO_COZY_MODE:O.Z.Messages.SWITCH_TO_COMPACT_MODE,action:function(){Z.jU.updateSetting(!e);(0,y.ZZ)()}})},"compact-mode")]}(),C=v(),x=(0,ie.Z)(),M=(t=Z.dN.useSetting(),a=Z.R$.useSetting(),t?null:(0,n.jsx)(p.S8,{id:"preview-markdown-toggle",label:O.Z.Messages.PREVIEW_MARKDOWN,action:function(){var e=!a;oe.default.track(A.rMx.PREVIEW_MARKDOWN_TOGGLED,{enabled:e,location:{section:A.jXE.SETTINGS_CONTEXT_MENU}});Z.R$.updateSetting(e)},checked:a})),k=re(),N=(0,s.Z)(),R=N.AnalyticsLocationProvider,D=N.analyticsLocations;function L(){return(L=ae((function(){return pe(this,(function(e){switch(e.label){case 0:e.trys.push([0,2,,3]);E(!0);return[4,(0,f.bF)()];case 1:e.sent();window.location.reload(!0);return[3,3];case 2:e.sent();E(!1);return[3,3];case 3:return[2]}}))}))).apply(this,arguments)}var B=function(e){switch(e){case A.oAB.STREAMER_MODE:return P;case A.oAB.APPEARANCE:return _;case A.oAB.ACCESSIBILITY:return C;case A.oAB.VOICE:return x;case A.oAB.TEXT:return M
;case A.oAB.EXPERIMENTS:return k;default:return null}},U=(0,d.Z)().filter((function(e){var r=e.section;return r!==c.ID.HEADER&&r!==c.ID.CUSTOM&&r!==c.ID.DIVIDER&&"logout"!==r})).filter((function(e){return null==e.predicate||e.predicate()}));return(0,n.jsx)(R,{children:(0,n.jsxs)(p.ZP,{navId:"user-settings-cog",onClose:i.Zy,"aria-label":O.Z.Messages.USER_SETTINGS_ACTIONS_MENU_LABEL,onSelect:S,children:[U.map((function(e){var r=e.section,t=e.label,o=e.onClick,i={label:t,action:function(){return null!=o?o():function(e,r){var t=Object.values(A.oAB).filter((function(r){return r===e}))[0];null!=t&&u.Z.open(t,void 0,{analyticsLocations:r})}(r,D)}},c=r.replace(/\W/gi,"_");return(0,n.jsx)(p.sN,se(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));n.forEach((function(r){
le(e,r,t[r])}))}return e}({id:c},i),{children:B(r)}),c)})),null!=l?(0,n.jsx)(p.kS,{children:(0,n.jsx)(p.sN,{id:"clear-build-override",disabled:g,label:O.Z.Messages.CLEAR_BUILD_OVERRIDE,action:function(){return L.apply(this,arguments)},color:"danger"})}):null]})})}),[l.Z.CONTEXT_MENU,l.Z.USER_SETTINGS_MENU])},767202:(e,r,t)=>{t.d(r,{Z:()=>a});var n=t(785893),o=(t(667294),t(769672)),i=t(749469),u=t(488455),c=t(557893);function a(){return[(0,n.jsx)(o.kS,{children:(0,u.Z)()},"input-mode-items"),(0,n.jsxs)(o.kS,{children:[(0,i.Z)(),(0,c.Z)()]},"input-output")]}},422766:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(791462),o=t(823569),i=t(229629),u=t(194503),c=t(485947),a=t(381807),l=t(969246);function s(){var e=(0,c.Y)().length,r=(0,u.U)(),t=(0,o.U)().canUseAvatarDecorations,s=(0,i.G)(),f=(0,n.e7)([a.Z],(function(){return a.Z.getProps().impressionSource}));return(0,l.Z)({unseenGiftCount:e,clipsEnabled:s,showPrepaidPaymentPastDueWarning:r,canUseAvatarDecorations:t,impressionSource:f})}}}]);
//# sourceMappingURL=cb42442884e4ed18f72e.js.map