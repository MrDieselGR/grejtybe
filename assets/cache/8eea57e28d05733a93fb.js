"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[62322,23647,84976,20435],{662322:(e,t,n)=>{n.d(t,{W:()=>u});var r=n(675860),i=n(173436),o=n(630206),f=n(461061);function u(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(o.Z.needsRefresh()){i.Z.dispatch({type:"LOAD_USER_AFFINITIES"});return r.Z.get({url:f.ANM.USER_AFFINITIES,retries:e?3:0,oldFormErrors:!0}).then((function(e){var t=e.body;i.Z.dispatch({type:"LOAD_USER_AFFINITIES_SUCCESS",affinities:t})}),(function(){i.Z.dispatch({type:"LOAD_USER_AFFINITIES_FAILURE"})}))}return Promise.resolve()}},630206:(e,t,n)=>{n.d(t,{Z:()=>A});var r=n(791462),i=n(173436);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function u(e){u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)
};return u(e)}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){f(e,t,n[t])}))}return e}function c(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e,t){a=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return a(e,t)}var l=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}()
;return function(){var n,r=u(e);if(t){var i=u(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c(this,n)}}var d=864e5,_=!1,y=Object.freeze({userAffinties:[],inverseUserAffinties:[],lastFetched:0}),h=s({},y),S=function(){h=s({},y)};S();var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&a(e,t)}(n,e);var t=p(n);function n(){o(this,n);return t.apply(this,arguments)}var r=n.prototype;r.initialize=function(e){null!=e&&(h=e)};r.needsRefresh=function(){return Date.now()-h.lastFetched>d};r.getFetching=function(){return _};r.getState=function(){return h};r.getUserAffinities=function(){return h.userAffinties};r.getUserAffinitiesUserIds=function(){var e,t=new Set;null===(e=h.userAffinties)||void 0===e||e.forEach((function(e){t.add(e.user_id)}));return t}
;r.getInverseUserAffinities=function(){return h.inverseUserAffinties};r.getInverseUserAffinitiesUserIds=function(){var e,t=new Set;null===(e=h.inverseUserAffinties)||void 0===e||e.forEach((function(e){t.add(e.user_id)}));return t};r.__getLocalVars=function(){return{USER_AFFINITY_TTL:d,fetching:_,DEFAULT_AFINITY_STORE_STATE:y,state:h,setDefaultState:S}};return n}(r.ZP.PersistedStore);v.displayName="UserAffinitiesStore";v.persistKey="UserAffinitiesStore";const A=new v(i.Z,{LOAD_USER_AFFINITIES_SUCCESS:function(e){var t,n,r=e.affinities;h.userAffinties=null!==(t=r.user_affinities)&&void 0!==t?t:[];h.inverseUserAffinties=null!==(n=r.inverse_user_affinities)&&void 0!==n?n:[];h.lastFetched=Date.now();_=!1},LOAD_USER_AFFINITIES:function(){_=!0},LOAD_USER_AFFINITIES_FAILURE:function(){_=!1},LOGOUT:function(){S()}})}}]);
//# sourceMappingURL=8eea57e28d05733a93fb.js.map