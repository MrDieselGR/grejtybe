"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[42341],{630206:(e,t,r)=>{r.d(t,{Z:()=>_});var n=r(791462),o=r(173436);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function u(e){u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return u(e)}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){c(e,t,r[t])}))}return e}function s(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){
if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e,t){a=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return a(e,t)}var l=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}var b=864e5,d=!1,y=Object.freeze({userAffinties:[],inverseUserAffinties:[],lastFetched:0}),h=f({},y),v=function(){h=f({},y)};v();var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
;e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&a(e,t)}(r,e);var t=p(r);function r(){i(this,r);return t.apply(this,arguments)}var n=r.prototype;n.initialize=function(e){null!=e&&(h=e)};n.needsRefresh=function(){return Date.now()-h.lastFetched>b};n.getFetching=function(){return d};n.getState=function(){return h};n.getUserAffinities=function(){return h.userAffinties};n.getUserAffinitiesUserIds=function(){var e,t=new Set;null===(e=h.userAffinties)||void 0===e||e.forEach((function(e){t.add(e.user_id)}));return t};n.getInverseUserAffinities=function(){return h.inverseUserAffinties};n.getInverseUserAffinitiesUserIds=function(){var e,t=new Set;null===(e=h.inverseUserAffinties)||void 0===e||e.forEach((function(e){t.add(e.user_id)}));return t};n.__getLocalVars=function(){return{USER_AFFINITY_TTL:b,fetching:d,DEFAULT_AFINITY_STORE_STATE:y,state:h,setDefaultState:v}};return r}(n.ZP.PersistedStore);m.displayName="UserAffinitiesStore"
;m.persistKey="UserAffinitiesStore";const _=new m(o.Z,{LOAD_USER_AFFINITIES_SUCCESS:function(e){var t,r,n=e.affinities;h.userAffinties=null!==(t=n.user_affinities)&&void 0!==t?t:[];h.inverseUserAffinties=null!==(r=n.inverse_user_affinities)&&void 0!==r?r:[];h.lastFetched=Date.now();d=!1},LOAD_USER_AFFINITIES:function(){d=!0},LOAD_USER_AFFINITIES_FAILURE:function(){d=!1},LOGOUT:function(){v()}})},842256:(e,t,r)=>{r.d(t,{Z:()=>_});var n=r(785893),o=r(667294),i=r(294184),c=r.n(i),u=r(629590),f=r(487502),s=r(414597),a=r(70821),l=r.n(a);function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function d(e){d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return d(e)}function y(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){
if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e,t){h=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return h(e,t)}var v=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var r,n=d(e);if(t){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return y(this,r)}}const _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&h(e,t)}(r,e);var t=m(r)
;function r(){p(this,r);var e;(e=t.apply(this,arguments)).renderBreadcrumb=function(t,r){var o,i=e.props,f=i.activeId,a=i.onBreadcrumbClick,p=i.breadcrumbs,d=i.renderCustomBreadcrumb,y=i.separatorClassName,h=t.id===f,v=r===p.length-1,m=null!=d?d(t,h):(0,n.jsx)("span",{className:c()(l().breadcrumb,(o={},b(o,l().activeBreadcrumb,h),b(o,l().interactiveBreadcrumb,null!=a),o)),children:t.label});return(0,n.jsxs)("div",{className:c()(l().breadcrumbWrapper,b({},l().breadcrumbFinalWrapper,v)),children:[null!=a?(0,n.jsx)(u.Z,{tag:"span",onClick:function(){return e.handleClick(t)},className:l().breadcrumbClickWrapper,children:m}):m,v?null:(0,n.jsx)(s.Z,{className:c()(l().breadcrumbArrow,y),direction:s.Z.Directions.RIGHT})]},t.id)};return e}var o=r.prototype;o.handleClick=function(e){var t=this.props.onBreadcrumbClick;null!=t&&t(e)};o.render=function(){var e=this.props,t=e.breadcrumbs,r=e.className,o=t.map(this.renderBreadcrumb);return(0,n.jsx)(f.Z,{justify:f.Z.Justify.START,
className:c()(l().breadcrumbs,r),children:o})};return r}(o.PureComponent)}}]);
//# sourceMappingURL=9e64363f6066f4db9340.js.map