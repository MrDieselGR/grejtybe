"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[72552],{402232:(e,r,t)=>{t.d(r,{M:()=>i,Z:()=>l});var n=t(785893),o=(t(667294),t(751615)),a=t(705654),u=t(461061),c=t(32733);function i(){var e=location.pathname+location.search;return c.a?u.Z5c.REGISTER:(0,a.U)(e,!1)}const l=function(){return(0,n.jsx)(o.l_,{to:i()})}},893052:(e,r,t)=>{t.d(r,{e:()=>s});var n=t(785893),o=(t(667294),t(631134)),a=t(743221),u=t(402232),c=t(461061);function i(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t;return e}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));n.forEach((function(r){i(e,r,t[r])}))}return e}function s(e,r){var t,i,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{
passProps:!0},p=function(t){return!(0,a.$8)()&&o.default.getLoginStatus()!==c.u34.LOGGING_IN&&o.default.allowLogoutRedirect()?null!=r?(0,n.jsx)(r,{renderRedirect:(0,n.jsx)(u.Z,{})}):(0,n.jsx)(u.Z,{}):(0,n.jsx)(e,l({},s.passProps?t:null))};p.displayName="Authenticated(".concat(null!==(i=null!==(t=e.displayName)&&void 0!==t?t:e.name)&&void 0!==i?i:"<Unknown>",")");return p}},170155:(e,r,t)=>{t.r(r);t.d(r,{default:()=>_});var n,o=t(785893),a=(t(667294),t(441143)),u=t.n(a),c=t(517563);!function(e){e.OAUTH_REDIRECT="oauth_redirect"}(n||(n={}));var i=t(222295),l=t(817178),s=t(690217),p=t(893052),f=t(144857),d=t(832691),h=t(47967),b=t(959629),y=t(461061);function w(e,r,t,n,o,a,u){try{var c=e[a](u),i=c.value}catch(e){t(e);return}c.done?r(i):Promise.resolve(i).then(n,o)}function O(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function u(e){w(a,n,o,u,c,"next",e)}function c(e){w(a,n,o,u,c,"throw",e)}u(void 0)}))}}function v(e,r,t){
r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t;return e}function P(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));n.forEach((function(r){v(e,r,t[r])}))}return e}function A(e,r){r=null!=r?r:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})));t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}));return e}var m=function(e,r){var t,n,o,a,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]}
;return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;(n=0,o)&&(a=[2&a[0],o.value]);switch(a[0]){case 0:case 1:o=a;break;case 4:u.label++;return{value:a[1],done:!1};case 5:u.label++;n=a[1];a=[0];continue;case 7:a=u.ops.pop();u.trys.pop();continue;default:if(!(o=u.trys,o=o.length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1];o=a;break}if(o&&u.label<o[2]){u.label=o[2];u.ops.push(a);break}o[2]&&u.ops.pop();u.trys.pop();continue}a=r.call(e,u)}catch(e){a=[6,e];n=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},g=new d.Z("LinkAuthorize")
;function T(e,r,t,n){return I.apply(this,arguments)}function I(){return(I=O((function(e,r,t,n){var o,a,c,i,p,d,h,b,y,w,O,v;return m(this,(function(P){switch(P.label){case 0:o=null;P.label=1;case 1:P.trys.push([1,3,,4]);return[4,s.Z.authorize(n,{twoWayLinkType:l.g.WEB})];case 2:a=P.sent().body;o=a.url;return[3,4];case 3:c=P.sent();throw new Error("error at authorize with code ".concat(null!==(p=null==c||null===(i=c.body)||void 0===i?void 0:i.code)&&void 0!==p?p:0));case 4:d=null;try{u()(null!=o,"No URL in authorize response");h=(0,f.xp)(o).state;u()(null!=h,"Authorize URL state query parameter must be present");d=h}catch(e){throw new Error("error at authorize parsing callback params")}P.label=5;case 5:P.trys.push([5,7,,8]);return[4,s.Z.completeTwoWayLink(n,e,r,d,t)];case 6:return[2,null==(y=P.sent())||null===(b=y.body)||void 0===b?void 0:b.redirect];case 7:w=P.sent()
;throw new Error("error at callback with code ".concat(null!==(v=null==w||null===(O=w.body)||void 0===O?void 0:O.code)&&void 0!==v?v:0));case 8:return[2]}}))}))).apply(this,arguments)}function j(e){var r,t=e.platformType,a=(0,h.parseOAuth2AuthorizeProps)(window.location.search),u=c.parse(window.location.search),i=u.code,l=u.token_redirect_uri,s=(r=O((function(e){var r,o,a,u,s;return m(this,(function(p){switch(p.label){case 0:if(null==e)return[2];r=c.parse(e).error;o=null;if(null!=r||null==i)return[3,4];p.label=1;case 1:p.trys.push([1,3,,4]);return[4,T(e,i,l,t)];case 2:o=p.sent();return[3,4];case 3:a=p.sent();g.error("Error Creating GreekTube link",null==a?void 0:a.message);(u=new URL(e)).searchParams.delete("code");u.searchParams.set("error","two_way_link_error");u.searchParams.set("error_description",null!==(s=null==a?void 0:a.message)&&void 0!==s?s:"unknown_error");e=u.toString();return[3,4];case 4:window.location=null==o||o===n.OAUTH_REDIRECT?e:o;return[2]}}))})),function(e){
return r.apply(this,arguments)});return(0,o.jsx)(b.G,{children:(0,o.jsx)(h.OAuth2Authorize,A(P({},a),{showLogout:!0,callback:s}))})}const _=(0,p.e)((function(e){var r=e.match.params.type,t=c.parse(window.location.search).client_id,n=void 0===t?"":t,a=r===y.ABu.PLAYSTATION&&n===i.t.PLAYSTATION_APPLICATION_ID,u=r===y.ABu.PLAYSTATION_STAGING&&n===i.t.PLAYSTATION_STAGING_APPLICATION_ID;return a||u?(0,o.jsx)(j,{platformType:r}):null}))},222295:(e,r,t)=>{t.d(r,{t:()=>n});var n;!function(e){e.XBOX_APPLICATION_ID="622174530214821906";e.PLAYSTATION_APPLICATION_ID="1008890872156405890";e.PLAYSTATION_STAGING_APPLICATION_ID="984193235868065795"}(n||(n={}));new Set(["984193235868065795","1008890872156405890"]),new Set(["622174530214821906","984193235868065795","1008890872156405890"])}}]);
//# sourceMappingURL=35a1b90e3f26d776b3d2.js.map