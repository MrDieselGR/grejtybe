"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[51802],{696090:(e,t,r)=>{r.r(t);r.d(t,{default:()=>m});var n=r(785893),o=(r(667294),r(791462)),u=r(212218),i=r(653772),l=r(859023),c=r(272729),a=r(67416),s=r(57859),f=r(748737),p=r(655695),b=r(461061);var y=r(176822),d=r(185328),h=r(959797);function O(e,t,r,n,o,u,i){try{var l=e[u](i),c=l.value}catch(e){r(e);return}l.done?t(c):Promise.resolve(c).then(n,o)}function g(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){g(e,t,r[t])}))}return e}function w(e,t){t=null!=t?t:{}
;Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}function j(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++){r=u[n];t.indexOf(r)>=0||(o[r]=e[r])}return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++){r=u[n];t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}}return o}var P=function(e,t){var r,n,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:l(0),throw:l(1),return:l(2)},
"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function l(u){return function(l){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;(n=0,o)&&(u=[2&u[0],o.value]);switch(u[0]){case 0:case 1:o=u;break;case 4:i.label++;return{value:u[1],done:!1};case 5:i.label++;n=u[1];u=[0];continue;case 7:u=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1];o=u;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(u);break}o[2]&&i.ops.pop();i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e];n=0}finally{r=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,l])}}};const m=function(e){
var t,r,g=e.guildId,m=e.transitionState,E=j(e,["guildId","transitionState"]),Z=(0,c.Dt)(),k=(0,o.e7)([f.Z],(function(){return f.Z.getRequest(g)}),[g]),I=(0,o.e7)([i.Z],(function(){return i.Z.getGuild(g)}),[g]),S=(0,o.e7)([l.default],(function(){var e;return null===(e=l.default.getCurrentUser())||void 0===e?void 0:e.id})),x=(0,o.e7)([u.ZP],(function(){return null!=S?u.ZP.getMember(g,S):null}),[S,g]),C=(r=(t=function(){return P(this,(function(e){switch(e.label){case 0:if(!(null==I?void 0:I.hasFeature(b.oNc.PREVIEW_ENABLED)))return[3,5];e.label=1;case 1:e.trys.push([1,3,,4]);return[4,s.Z.removeGuildJoinRequest(g)];case 2:e.sent();return[3,4];case 3:throw e.sent();case 4:E.onClose();(0,y.Z)(g);return[3,6];case 5:s.Z.resetGuildJoinRequest(g);e.label=6;case 6:return[2]}}))},function(){var e=this,r=arguments;return new Promise((function(n,o){var u=t.apply(e,r);function i(e){O(u,n,o,i,l,"next",e)}function l(e){O(u,n,o,i,l,"throw",e)}i(void 0)}))}),function(){return r.apply(this,arguments)})
;return(0,n.jsx)(a.Y0,{size:a.Cg.DYNAMIC,transitionState:m,"aria-labelledby":Z,children:(0,n.jsx)(d.Z,w(v({},E),{headerId:Z,reapplyText:h.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REAPPLY,onReapply:C,confirmText:h.Z.Messages.OKAY,onConfirm:function(){E.onClose();null==x&&((e=(0,p.s1)()).length>0?e.goBack():(0,p.uL)(b.Z5c.ME));var e},rejectionReason:null==k?void 0:k.rejectionReason,guild:I}))})}}}]);
//# sourceMappingURL=5c8c4d7124179c5d2d67.js.map