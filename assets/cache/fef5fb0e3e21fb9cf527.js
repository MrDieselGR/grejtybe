"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[15798,18716,67895],{678081:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(785893),o=r(667294),i=r(193197),l=r(891153),c=r(337823),a=r(742269),u=r(561388);function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function p(e){p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return p(e)}function d(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?s(e):t}function b(e,t){b=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return b(e,t)}var y=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1
;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var r,n=p(e);if(t){var o=p(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return d(this,r)}}function h(e){var t=["openFile"];e.multiple&&t.push("multiSelections");var r=e.filters;l.Z.fileManager.openFiles({properties:t,filters:r},u.zz).then((function(t){var r=t.map((function(e){return c.qF(e)}));null!=r&&e.onChange({stopPropagation:function(){return null},preventDefault:function(){return null},currentTarget:{files:r}})})).catch((function(t){e.onChange({stopPropagation:function(){return null},preventDefault:function(){return null},currentTarget:{files:null,err:t}})}))}const v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,
configurable:!0}});t&&b(e,t)}(r,e);var t=O(r);function r(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var n;(n=t.call(this,e))._ref=o.createRef();n.setRef=n.setRef.bind(s(n));return n}var l=r.prototype;l.activateUploadDialogue=function(){if(null!=this._ref)return this._ref.activateUploadDialogue()};l.setRef=function(e){this._ref=e};l.render=function(){return(0,n.jsx)(i.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){f(e,t,r[t])}))}return e}({ref:this.setRef,handleNativeClick:h,embedded:(0,a.nI)()},this.props))};return r}(o.Component)},853279:(e,t,r)=>{r.d(t,{Z:()=>O});var n=r(785893),o=(r(667294),
r(294184)),i=r.n(o),l=r(489992),c=r(629590),a=r(757987),u=r(106027),s=r(75141),f=r(959797),p=r(377417),d=r.n(p);function b(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function y(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}const O=function(e){var t,r,o,p=e.guildFeature,O=e.guild,h=e.className,v=e.hideTooltip,g=void 0!==v&&v,j=e.tooltipPosition,m=void 0===j?a.ZP.Positions.LEFT:j,P=e.onClick,w=O.hasFeature(p),E=(0,s.yw)(p);if(w){null!=E&&(o=f.Z.Messages.PREMIUM_GUILD_INCLUDED);t=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.Z,{
className:d().unlockedIcon}),(0,n.jsx)(l.X6,{variant:"eyebrow",className:d().description,children:f.Z.Messages.PREMIUM_GUILD_TIER_UNLOCKED})]})}else{null!=E&&(o=f.Z.Messages.CLICK_TO_LEARN_MORE);t=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.Z,{className:d().icon}),(0,n.jsx)(l.X6,{variant:"eyebrow",className:d().description,children:null!=E&&(0,s.e9)(E)})]})}r=g||null==o?(0,n.jsx)("div",{className:i()(d().availabilityIndicator,h),children:t}):(0,n.jsx)(a.ZP,{position:m,text:o,children:function(e){return(0,n.jsx)("div",y(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){b(e,t,r[t])}))}return e}({},e),{className:i()(d().availabilityIndicator,h),children:t}))}});return null==P||w?r:(0,n.jsx)(c.Z,{onClick:P,className:d().clickable,children:r
})}},529536:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(212271),o=r(337823),i=r(959797);function l(e){(0,n.xT)({title:i.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,help:i.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({maxSize:(0,o.Ng)(e)})})}},910866:(e,t,r)=>{r.d(t,{m:()=>n});var n;!function(e){e.MP4="video/mp4"}(n||(n={}))},567895:(e,t,r)=>{r.d(t,{Zj:()=>y,Fq:()=>O,ZP:()=>v});var n=r(785893),o=r(667294),i=r(678081),l=r(212271),c=r(910866),a=r(959797);function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e){s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return s(e)}function f(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t){p=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return p(e,t)}var d=function(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}function y(){return[{name:a.Z.Messages.IMAGES,extensions:["jpg","jpeg","png","gif"]}]}function O(e,t,r){!function(e,t){if(null!=e){var r=new FileReader;r.onload=function(r){var n;"string"==typeof(null===(n=r.target)||void 0===n?void 0:n.result)&&t(r.target.result,e)};r.readAsDataURL(e)}}(e,(function(n){if(e.type===c.m.MP4)return t(n,e);var o=new Image;o.src=n;o.onload=function(){t(n,e)};o.onerror=function(){r()}}))}var h=function(e){!function(e,t){
if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&p(e,t)}(r,e);var t=b(r);function r(){u(this,r);var e;(e=t.apply(this,arguments))._ref=o.createRef();e._isMounted=!1;e.handleFileChange=function(t){var r=e.props,n=r.onFileSizeError,o=r.maxFileSizeBytes;t.stopPropagation();t.preventDefault();if(null!=t.currentTarget.files)for(var i=0;i<t.currentTarget.files.length;i++){var l=t.currentTarget.files[i];l.size>o?null==n||n(o,l.size):O(l,e.handleFileRead,e.handleFileError)}};e.handleFileRead=function(t,r){var n=e.props.onChange;e._isMounted&&n(t,r)};e.handleFileError=function(){(0,l.xT)({title:a.Z.Messages.PREMIUM_ALERT_ERROR_TITLE,help:a.Z.Messages.UNABLE_TO_PROCESS_IMAGE})};return e}var c=r.prototype;c.componentDidMount=function(){this._isMounted=!0};c.activateUploadDialogue=function(){var e
;null===(e=this._ref.current)||void 0===e||e.activateUploadDialogue()};c.render=function(){var e=this.props,t=e.multiple,r=e.disabled,o=e.className,l=e.tabIndex,c=e["aria-label"],a=e.filters;return(0,n.jsx)(i.Z,{ref:this._ref,onChange:this.handleFileChange,filters:null!=a?a:y(),multiple:t,disabled:r,className:o,tabIndex:l,"aria-label":c})};return r}(o.PureComponent);h.defaultProps={multiple:!0,tabIndex:-1,maxFileSizeBytes:1/0};const v=h},15063:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(785893),o=(r(667294),r(294184)),i=r.n(o),l=r(416983),c=r.n(l);function a(e){var t=e.className,r=e.style;return(0,n.jsx)("div",{className:i()(c().divider,t),style:r})}},941460:(e,t,r)=>{r.d(t,{Yk:()=>y,HI:()=>O,ZP:()=>v});var n=r(785893),o=(r(667294),r(294184)),i=r.n(o),l=r(624387),c=r(487502),a=r(604175),u=r(962271),s=r(259957),f=r.n(s);function p(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function d(e){for(var t=1;t<arguments.length;t++){
var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){p(e,t,r[t])}))}return e}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++){r=i[n];t.indexOf(r)>=0||(o[r]=e[r])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++){r=i[n];t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}}return o}var y=l.Z.Types,O={LEFT:"left",RIGHT:"right"},h=function(e){var t,r,o=e.type,s=void 0===o?l.Z.Types.DANGER:o,y=e.imageData,h=e.button,v=e.className,g=e.iconClassName,j=e.title,m=e.body,P=e.style,w=e.align,E=void 0===w?c.Z.Align.START:w,S=c.Z.Direction.HORIZONTAL;if(null!=y){var _=y.position,R=b(y,["position"]);t=(0,n.jsx)(c.Z.Child,{grow:0,
shrink:0,children:(0,n.jsx)("img",d({alt:"",className:i()(f().icon,g)},R))});_===O.RIGHT&&(S=c.Z.Direction.HORIZONTAL_REVERSE)}else null!=h&&(r=h);var D=!0;s===l.Z.Types.PRIMARY&&(D=!1);return(0,n.jsx)(l.Z,{className:i()(f().formNotice,v),type:s,style:P,children:(0,n.jsxs)(c.Z,{direction:S,align:E,children:[t,(0,n.jsxs)(c.Z.Child,{children:[null!=j&&""!==j?(0,n.jsx)(u.Z,{tag:u.$.H5,className:i()(f().formNoticeTitle,p({},f().whiteText,D)),faded:!0,children:j}):null,(0,n.jsx)(a.Z,{className:i()(f().formNoticeBody,p({},f().whiteText,D)),children:m}),r]})]})})};h.Types=l.Z.Types;const v=h},880680:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(785893),o=(r(667294),r(489992)),i=r(272729),l=r(881186),c=r(962271),a=r(671351),u=r.n(a);function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++){r=i[n];t.indexOf(r)>=0||(o[r]=e[r])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
;for(n=0;n<i.length;n++){r=i[n];t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}}return o}const f=function(e){var t,r=e.children,a=e.className,f=e.titleClassName,p=e.title,d=e.icon,b=e.disabled,y=e.htmlFor,O=e.tag,h=void 0===O?"h5":O,v=s(e,["children","className","titleClassName","title","icon","disabled","htmlFor","tag"]),g=(0,i.Dt)(),j=null!==(t=v.titleId)&&void 0!==t?t:g;return null!=p?(0,n.jsx)("div",{className:a,children:(0,n.jsx)(o.y5,{component:(0,n.jsxs)("div",{className:u().sectionTitle,children:[d,null!=p?(0,n.jsx)(c.Z,{tag:h,id:j,htmlFor:y,disabled:b,className:f,children:p}):null]}),children:(0,n.jsx)("div",{className:u().children,children:(0,n.jsx)(l.ol,{titleId:j,children:r})})})}):(0,n.jsx)("div",{className:a,children:r})}},604175:(e,t,r)=>{r.d(t,{Y:()=>p,Z:()=>h});var n=r(785893),o=(r(667294),r(294184)),i=r.n(o),l=r(462428),c=r(638803),a=r.n(c);function u(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,
writable:!0}):e[t]=r;return e}function s(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++){r=i[n];t.indexOf(r)>=0||(o[r]=e[r])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++){r=i[n];t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}}return o}var p={DEFAULT:"default",INPUT_PLACEHOLDER:"placeholder",DESCRIPTION:"description",LABEL_BOLD:"labelBold",LABEL_SELECTED:"labelSelected",
LABEL_DESCRIPTOR:"labelDescriptor",ERROR:"error",SUCCESS:"success"},d="modeDefault",b="modeDisabled",y="modeSelectable",O=function(e){var t=e.type,r=void 0===t?p.DEFAULT:t,o=e.className,c=e.disabled,O=e.selectable,h=e.children,v=e.style,g=f(e,["type","className","disabled","selectable","children","style"]),j=d;c?j=b:O&&(j=y);return(0,n.jsx)(l.Z,s(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){u(e,t,r[t])}))}return e}({className:i()(a()[r],o,a()[j]),style:v},g),{children:h}))};O.Types=p;const h=O},562181:(e,t,r)=>{r.d(t,{$i:()=>n.Z,xJ:()=>o.Z,To:()=>i.ZP,Sw:()=>i.HI,Dd:()=>i.Yk,hj:()=>l.Z,R9:()=>c.Z,ge:()=>c.Y,vw:()=>a.Z,RB:()=>a.$});var n=r(15063),o=r(983319);r(785893),r(667294),r(294184),r(747465),r(462428),r(959797),r(714706)
;var i=r(941460),l=r(880680),c=r(604175),a=r(962271)},760654:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(785893),o=(r(667294),r(240243));function i(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function l(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++){r=i[n];t.indexOf(r)>=0||(o[r]=e[r])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++){r=i[n]
;t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}}return o}function a(e){var t=e.width,r=void 0===t?24:t,a=e.height,u=void 0===a?24:a,s=e.color,f=void 0===s?"currentColor":s,p=c(e,["width","height","color"]);return(0,n.jsxs)("svg",l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){i(e,t,r[t])}))}return e}({},(0,o.Z)(p)),{width:r,height:u,viewBox:"0 0 24 24",fill:"none",children:[(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",
d:"M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",fill:f}),(0,n.jsx)("path",{d:"M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",fill:f})]}))}},462428:(e,t,r)=>{r.d(t,{Z:()=>O});var n=r(785893),o=(r(667294),r(294184)),i=r.n(o),l=r(588772),c=r.n(l),a=r(932629),u=r.n(a);function s(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function f(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))
;r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++){r=i[n];t.indexOf(r)>=0||(o[r]=e[r])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++){r=i[n];t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}}return o}var d=Object.freeze({STANDARD:c().colorStandard,MUTED:c().colorMuted,ERROR:c().colorError,BRAND:c().colorBrand,LINK:c().colorLink,HEADER_PRIMARY:c().colorHeaderPrimary,HEADER_SECONDARY:c().colorHeaderSecondary,STATUS_YELLOW:c().colorStatusYellow,STATUS_GREEN:c().colorStatusGreen,STATUS_RED:c().colorStatusRed,INTERACTIVE_ACTIVE:c().colorInteractiveActive,INTERACTIVE_NORMAL:c().colorInteractiveNormal,ALWAYS_WHITE:c().colorWhite,CUSTOM:null}),b=Object.freeze({SIZE_10:u().size10,
SIZE_12:u().size12,SIZE_14:u().size14,SIZE_16:u().size16,SIZE_20:u().size20,SIZE_24:u().size24,SIZE_32:u().size32}),y=function(e){var t,r=e.className,o=e.color,l=void 0===o?d.STANDARD:o,a=e.size,u=void 0===a?b.SIZE_14:a,y=e.tag,O=void 0===y?"div":y,h=e.selectable,v=void 0!==h&&h,g=e.strong,j=void 0!==g&&g,m=e.children,P=e.style,w=e["aria-label"],E=p(e,["className","color","size","tag","selectable","strong","children","style","aria-label"]);return(0,n.jsx)(O,f(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){s(e,t,r[t])}))}return e}({"aria-label":w,className:i()(l,u,r,(t={},s(t,c().selectable,v),s(t,c().strong,j),t)),style:P},E),{children:m}))};y.Colors=d;y.Sizes=b;const O=y},193197:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(785893),o=r(667294)
;function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e){l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return l(e)}function c(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e,t){a=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return a(e,t)}var u=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)
}else r=n.apply(this,arguments);return c(this,r)}}var f="file-input",p=function(e){return{position:"absolute",top:0,left:0,width:"100%",height:"100%",opacity:0,cursor:e?"not-allowed":"pointer",fontSize:0}},d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&a(e,t)}(r,e);var t=s(r);function r(){i(this,r);var e;(e=t.apply(this,arguments))._input=null;e.activateUploadDialogue=function(){e.props.embedded?e.handleNativeClick():e._input&&e._input.click()};e.handleNativeClick=function(){e.props.handleNativeClick&&e.props.handleNativeClick(e.props)};e.handleNativeKeyDown=function(t){" "!==t.key&&"Enter"!==t.key||e.handleNativeClick()};e.handleBrowserInputMouseDown=function(e){e.currentTarget.value=null};return e}r.prototype.render=function(){
var e=this,t=this.props,r=t.disabled,o=t.tabIndex,i=t.className,l=t.name,c=t["aria-label"],a=t["aria-hidden"];if(this.props.embedded)return(0,n.jsx)("div",{role:"button",style:p(r),className:i||f,tabIndex:o,onKeyDown:r?void 0:this.handleNativeKeyDown,onClick:r?void 0:this.handleNativeClick,"aria-disabled":r,"aria-label":c,"aria-hidden":a||void 0});var u="";this.props.filters&&(u=this.props.filters.map((function(e){return e.extensions.map((function(e){return".".concat(e)})).join(",")})).join(","));return(0,n.jsx)("input",{style:p(r),className:i||f,disabled:r,type:"file",tabIndex:o,onMouseDown:this.handleBrowserInputMouseDown,onChange:this.props.onChange,multiple:this.props.multiple,accept:u,name:l,"aria-label":c,"aria-hidden":a||void 0,ref:function(t){return e._input=t}})};return r}(o.Component);d.defaultProps={multiple:!1,disabled:!1,tabIndex:0};const b=d}}]);
//# sourceMappingURL=fef5fb0e3e21fb9cf527.js.map