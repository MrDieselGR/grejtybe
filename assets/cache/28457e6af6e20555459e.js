"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[65220],{205014:(e,n,r)=>{r.d(n,{K:()=>h,f:()=>p});var t=r(23816),o=r(7046),a=r(932847),l=r(461061);function i(e,n,r,t,o,a,l){try{var i=e[a](l),u=i.value}catch(e){r(e);return}i.done?n(u):Promise.resolve(u).then(t,o)}function u(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var a=e.apply(n,r);function l(e){i(a,t,o,l,u,"next",e)}function u(e){i(a,t,o,l,u,"throw",e)}l(void 0)}))}}function c(e,n,r){n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r;return e}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));t.forEach((function(n){c(e,n,r[n])}))}return e}function f(e,n){n=null!=n?n:{}
;Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}));return e}var d=function(e,n){var r,t,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,t&&(o=2&a[0]?t.return:a[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,a[1])).done)return o;(t=0,o)&&(a=[2&a[0],o.value]);switch(a[0]){case 0:case 1:o=a;break;case 4:l.label++;return{value:a[1],done:!1
};case 5:l.label++;t=a[1];a=[0];continue;case 7:a=l.ops.pop();l.trys.pop();continue;default:if(!(o=l.trys,o=o.length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){l=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){l.label=a[1];break}if(6===a[0]&&l.label<o[1]){l.label=o[1];o=a;break}if(o&&l.label<o[2]){l.label=o[2];l.ops.push(a);break}o[2]&&l.ops.pop();l.trys.pop();continue}a=n.call(e,l)}catch(e){a=[6,e];t=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}};function h(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];0!==n.length&&a.default.track(l.rMx.GUILD_RAID_REPORTED,f(s({},(0,t.hH)(e)),{guild_id:e,raid_types:n}))}function p(e,n){return b.apply(this,arguments)}function b(){return(b=u((function(e,n){var r;return d(this,(function(t){switch(t.label){case 0:if(e.hasFeature(l.oNc.RAID_ALERTS_ENABLED)===n)return[2];r=new Set(e.features);n?r.add(l.oNc.RAID_ALERTS_ENABLED):r.delete(l.oNc.RAID_ALERTS_ENABLED);return[4,o.Z.saveGuild(e.id,{
features:r},{throwErr:!0})];case 1:t.sent();return[2]}}))}))).apply(this,arguments)}},956922:(e,n,r)=>{r.d(n,{N8:()=>u,BT:()=>c,MR:()=>s});var t=r(667294),o=r(791462),a=r(940712),l=r(808433),i=r(461061);function u(e){var n,r=null!==(n=null==e?void 0:e.id)&&void 0!==n?n:"",u=l.r.useExperiment({guildId:r}).enableRaidReporting,c=(0,o.e7)([a.Z],(function(){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.Z;return n.can(i.Plq.BAN_MEMBERS,e)||n.can(i.Plq.KICK_MEMBERS,e)||n.can(i.Plq.MANAGE_GUILD,e)}(e,a.Z)}),[e]);t.useEffect((function(){c&&l.r.trackExposure({guildId:r})}),[c,r]);return c&&u}function c(e){var n,r=null!==(n=null==e?void 0:e.id)&&void 0!==n?n:"",t=(0,o.e7)([a.Z],(function(){return function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.Z).can(i.Plq.MANAGE_GUILD,e)}(e,a.Z)}),[e]),u=l.l.useExperiment({guildId:r},{autoTrackExposure:t}).enableRaidAlerts;return t&&u}function s(e){
var n=c(e),r=!1===(null==e?void 0:e.hasFeature(i.oNc.RAID_ALERTS_ENABLED));return n&&r}},765220:(e,n,r)=>{r.r(n);r.d(n,{default:()=>M});var t=r(785893),o=r(667294),a=r(777087),l=r(791462),i=r(489992),u=r(23816),c=r(53211),s=r(421919),f=r(7046),d=r(1812),h=r(653772),p=r(105405),b=r(859023),A=r(191940),y=r(146530),E=r(629590),v=r(363798),_=r(521495),I=r(112712),m=r(911324),N=r(205014),D=r(956922),L=r(461061),S=r(441640),R=r(959797),g=r(433924),T=r.n(g);function x(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function w(e,n,r,t,o,a,l){try{var i=e[a](l),u=i.value}catch(e){r(e);return}i.done?n(u):Promise.resolve(u).then(t,o)}function O(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(t=r.next()).done);l=!0){a.push(t.value);if(n&&a.length===n)break}}catch(e){i=!0;o=e}finally{try{
l||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,n)||j(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||j(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,n){if(e){if("string"==typeof e)return x(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);return"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(e,n):void 0}}var P=function(e,n){var r,t,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},
trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,t&&(o=2&a[0]?t.return:a[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,a[1])).done)return o;(t=0,o)&&(a=[2&a[0],o.value]);switch(a[0]){case 0:case 1:o=a;break;case 4:l.label++;return{value:a[1],done:!1};case 5:l.label++;t=a[1];a=[0];continue;case 7:a=l.ops.pop();l.trys.pop();continue;default:if(!(o=l.trys,o=o.length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){l=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){l.label=a[1];break}if(6===a[0]&&l.label<o[1]){l.label=o[1];o=a;break}if(o&&l.label<o[2]){l.label=o[2];l.ops.push(a);break}o[2]&&l.ops.pop();l.trys.pop();continue}a=n.call(e,l)}catch(e){a=[6,e];t=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}};function M(e){
var n,r,g,x=e.guildId,j=e.transitionState,M=e.onClose,Z=(0,l.e7)([h.Z],(function(){return h.Z.getGuild(x)}),[x]),k=null!==(n=null==Z?void 0:Z.safetyAlertsChannelId)&&void 0!==n?n:null,U=O(o.useState(!!(null==Z?void 0:Z.hasFeature(L.oNc.RAID_ALERTS_ENABLED))),2),G=U[0],F=U[1],B=(0,D.BT)(Z),Y=O(o.useState(k),2),H=Y[0],z=Y[1],q=O(o.useState(!1),2),K=q[0],W=q[1],J=(0,l.Wu)([d.ZP,b.default,p.Z],(function(){var e=d.ZP.getChannels(x)[d.sH].filter((function(e){return e.channel.type===a.d.GUILD_TEXT})).map((function(e){var n=e.channel;return{value:n.id,label:(0,c.F)(n,b.default,p.Z,!0)}}));return null!=k?e:C(e)}),[x,k]),V=(g=(r=function(){var e,n;return P(this,(function(r){switch(r.label){case 0:if(null==Z){(0,m.CF)((0,I.Yz)(R.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR,S.pC.FAILURE));return[2]}r.label=1;case 1:r.trys.push([1,6,7,8]);W(!0);return G===Z.hasFeature(L.oNc.RAID_ALERTS_ENABLED)?[3,3]:[4,(0,N.f)(Z,G)];case 2:r.sent();r.label=3;case 3:return H==k?[3,5]:[4,f.Z.saveGuild(x,{
safetyAlertsChannelId:H},{throwErr:!0})];case 4:r.sent();f.Z.updateGuild({safetyAlertsChannelId:H});r.label=5;case 5:if(null!=(e=null!=H?H:k)){n={raid_alert_type:s.wR.JOIN_RAID,enabled:G,raid_alert_channel_id:e,guild_id:x,channel_id:e};(0,u.yw)(L.rMx.GUILD_RAID_ALERTS_SETUP,n)}M();return[3,8];case 6:r.sent();(0,m.CF)((0,I.Yz)(R.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR,S.pC.FAILURE));return[3,8];case 7:W(!1);return[7];case 8:return[2]}}))},function(){var e=this,n=arguments;return new Promise((function(t,o){var a=r.apply(e,n);function l(e){w(a,t,o,l,i,"next",e)}function i(e){w(a,t,o,l,i,"throw",e)}l(void 0)}))}),function(){return g.apply(this,arguments)});return(0,t.jsxs)(v.Y0,{transitionState:j,size:v.Cg.SMALL,children:[(0,t.jsx)(v.xB,{separator:!1,children:(0,t.jsx)(i.X6,{color:"header-primary",variant:"heading-md/semibold",children:R.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_TITLE})}),(0,t.jsxs)(v.hz,{children:[(0,t.jsx)(i.xv,{variant:"text-sm/normal",
color:"header-secondary",children:R.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_DESCRIPTION}),(0,t.jsx)("div",{className:T().mainChannelContainer,children:(0,t.jsxs)(E.Z,{className:T().enableAlertsContainer,onClick:function(){B&&F(!G)},children:[(0,t.jsx)(i.xv,{variant:"text-md/medium",color:"text-normal",children:R.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_ENABLE_ALERTS}),(0,t.jsx)(y.Z,{value:G,className:T().enabledAlertsCheckbox,type:y.Z.Types.INVERTED,disabled:!B})]})}),(0,t.jsxs)("div",{className:T().mainChannelContainer,children:[(0,t.jsx)(i.xv,{variant:"eyebrow",color:"text-muted",children:R.Z.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE}),(0,t.jsx)(_.Z,{options:J,onChange:function(e){z(e)},value:H,className:T().channelSelect,maxVisibleItems:4}),(0,t.jsx)(i.xv,{variant:"text-xs/normal",color:"text-muted",children:R.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_CHANNEL_PERMISSIONS_NOTICE})]})]}),(0,t.jsxs)(v.mz,{children:[(0,t.jsx)(A.Co,{onClick:V,
color:A.Co.Colors.BRAND_NEW,look:A.Co.Looks.FILLED,submitting:K,children:R.Z.Messages.SAVE}),(0,t.jsx)(A.Co,{onClick:M,color:A.Co.Colors.PRIMARY,look:A.Co.Looks.LINK,disabled:K,children:R.Z.Messages.CANCEL})]})]})}},421919:(e,n,r)=>{r.d(n,{x2:()=>t,wR:()=>o});var t,o;r(959797);!function(e){e.BUG="BUG";e.ALLOWED="ALLOWED"}(t||(t={}));!function(e){e.JOIN_RAID="JOIN_RAID";e.MENTION_RAID="MENTION_RAID"}(o||(o={}))}}]);
//# sourceMappingURL=28457e6af6e20555459e.js.map