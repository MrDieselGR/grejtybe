"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[36761],{936761:(e,t,r)=>{r.r(t);r.d(t,{CreateEmojiWithRolesModal:()=>K,UpdateEmojiRolesModal:()=>Q});var n=r(785893),o=r(667294),i=r(294184),a=r.n(i),l=r(496486),u=r.n(l),s=r(468811),c=r.n(s),f=r(489992),d=r(11604),h=r(55690);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(e){r(e);return}l.done?t(u):Promise.resolve(u).then(n,o)}function y(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){b(i,n,o,a,l,"next",e)}function l(e){b(i,n,o,a,l,"throw",e)}a(void 0)}))}}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0){i.push(n.value)
;if(t&&i.length===t)break}}catch(e){l=!0;o=e}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,t)||S(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||S(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);return"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}var g=function(e,t){var r,n,o,i,a={
label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;(n=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:a.label++;return{value:i[1],done:!1};case 5:a.label++;n=i[1];i=[0];continue;case 7:i=a.ops.pop();a.trys.pop();continue;default:if(!(o=a.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1];o=i;break}if(o&&a.label<o[2]){a.label=o[2];a.ops.push(i);break}o[2]&&a.ops.pop();a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e];n=0}finally{r=o=0}if(5&i[0])throw i[1];return{
value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};var O=r(521095),j=r(191940),w=r(146530),_=r(966303),E=r(276842),x=r(757987),I=r(272729),A=r(363798),L=r(226300),M=r(932847),D=r(917870),C=r(954946),R=r(791462),N=r(653772),P=r(45451),k=[];var Z=r(461061),T=r(959797),U=r(815035),G=r.n(U);function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function z(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(e){r(e);return}l.done?t(u):Promise.resolve(u).then(n,o)}function J(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){z(i,n,o,a,l,"next",e)}function l(e){z(i,n,o,a,l,"throw",e)}a(void 0)}))}}function V(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r)
;"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){V(e,t,r[t])}))}return e}function $(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}function F(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++){r=i[n];t.indexOf(r)>=0||(o[r]=e[r])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++){r=i[n]
;t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}}return o}function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0){i.push(n.value);if(t&&i.length===t)break}}catch(e){l=!0;o=e}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return B(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return B(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var W=function(e,t){var r,n,o,i,a={
label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;(n=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:a.label++;return{value:i[1],done:!1};case 5:a.label++;n=i[1];i=[0];continue;case 7:i=a.ops.pop();a.trys.pop();continue;default:if(!(o=a.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1];o=i;break}if(o&&a.label<o[2]){a.label=o[2];a.ops.push(i);break}o[2]&&a.ops.pop();a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e];n=0}finally{r=o=0}if(5&i[0])throw i[1];return{
value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},X=function(e){var t=e.className,r=e.onChange,o=e.textVariant,i=void 0===o?"text-md/normal":o,l=e.label,u=e.value,s=e.isSoftDeleted,c=void 0!==s&&s;return(0,n.jsx)(w.Z,{size:24,className:a()(G().checklistRow,t),value:u,onChange:r,type:w.Z.Types.INVERTED,children:(0,n.jsxs)("div",{className:G().checklistLabel,children:[(0,n.jsx)(f.xv,{color:"interactive-active",variant:i,children:l}),c&&(0,n.jsx)(L.IG,{text:T.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_DELETED_BADGE})]})})};function Y(e){var t=e.transitionState,r=e.onClose,i=e.initialRoleIds,a=void 0===i?[]:i,l=e.listingChoices,s=e.emojiUrl,c=e.saving,d=e.onSave,h=(0,I.Dt)(),p=H(o.useState((function(){return new Set(a)})),2),b=p[0],y=p[1],v=o.useMemo((function(){return u().isEqual(b,new Set(l.map((function(e){return e.role_id}))))}),[l,b]),m=b.size>0,S=function(){d(Array.from(b),r)};return(0,n.jsxs)(A.Y0,{transitionState:t,"aria-labelledby":h,children:[(0,n.jsxs)(A.xB,{
separator:!1,children:[(0,n.jsxs)("div",{className:G().headerContent,children:[(0,n.jsx)(_.Z,{src:s,width:40,height:40,alt:""}),(0,n.jsx)(E.Z,{size:16,horizontal:!0}),(0,n.jsxs)("div",{className:G().headerText,children:[(0,n.jsx)(f.X6,{id:h,variant:"heading-md/semibold",children:T.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_HEADER}),(0,n.jsx)(E.Z,{size:2}),(0,n.jsx)(f.xv,{variant:"text-sm/normal",color:"header-secondary",children:T.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_DESCRIPTION})]})]}),(0,n.jsx)(A.ol,{className:G().closeButton,onClick:r})]}),(0,n.jsx)("div",{className:G().seperator}),(0,n.jsx)(A.hz,{className:G().modalContent,children:(0,n.jsxs)("div",{className:G().checklistContainer,children:[(0,n.jsx)(X,{className:G().selectAllCheckbox,label:T.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_SELECT_ALL_LABEL,textVariant:"text-md/semibold",value:v,onChange:function(){y(v?new Set:new Set(l.map((function(e){return e.role_id}))))}
},"allSubscriptionRoles"),l.map((function(e,t){return(0,n.jsxs)(n.Fragment,{children:[0!==t&&(0,n.jsx)("div",{className:G().seperator}),(0,n.jsx)(X,{onChange:function(){return t=e.role_id,y((function(e){var r=new Set(e);e.has(t)?r.delete(t):r.add(t);return r}));var t},value:b.has(e.role_id),label:e.name,isSoftDeleted:e.soft_deleted},e.role_id)]})}))]})}),(0,n.jsx)(A.mz,{children:(0,n.jsx)(x.ZP,{shouldShow:!m,text:T.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_NEEDS_ONE_ROLE,children:function(e){return(0,n.jsx)(j.Co,$(q({},e),{"aria-label":T.Z.Messages.SAVE,disabled:!m,submitting:c,onClick:S,children:T.Z.Messages.SAVE}))}})})]})}function K(e){var t,r=e.guildId,i=e.data,a=e.file,l=F(e,["guildId","data","file"]),u=H(o.useState(!1),2),s=u[0],f=u[1],d=(t=J((function(e,t){var n;return W(this,(function(o){switch(o.label){case 0:o.trys.push([0,2,3,4]);f(!0);n=c().v4();M.default.track(Z.rMx.EMOJI_UPLOAD_STARTED,{guild_id:r,upload_id:n});return[4,(0,O.G)({guildId:r,uploadId:n,
data:i,file:a,roles:e})];case 1:o.sent();t();return[3,4];case 2:o.sent();return[3,4];case 3:f(!1);return[7];case 4:return[2]}}))})),function(e,r){return t.apply(this,arguments)}),h=(0,C.qi)(r,{includeSoftDeleted:!0,sortDeletedListingsLast:!0});return(0,n.jsx)(Y,q({emojiUrl:i,onSave:d,saving:s,listingChoices:h},l))}function Q(e){var t,r=e.emoji,i=e.guildId,a=F(e,["emoji","guildId"]),l=D.ZP.getEmojiURL({id:r.id,animated:r.animated,size:40}),u=H(function(e){var t=v(o.useState(!1),2),r=t[0],n=t[1],i=v(o.useState(null),2),a=i[0],l=i[1],u=o.useCallback(y((function(){var t,r,o,i,a=arguments;return g(this,(function(u){switch(u.label){case 0:for(t=a.length,r=new Array(t),o=0;o<t;o++)r[o]=a[o];u.label=1;case 1:u.trys.push([1,3,4,5]);l(null);n(!0);return[4,e.apply(void 0,m(r))];case 2:return[2,u.sent()];case 3:i=u.sent();l(new h.Z(i));return[3,5];case 4:n(!1);return[7];case 5:return[2]}}))})),[e]);return[u,{loading:r,error:a}]}(d.dv),2),s=u[0],c=u[1].loading,f=(t=J((function(e,t){
return W(this,(function(n){switch(n.label){case 0:return[4,s({guildId:i,emojiId:r.id,roles:e})];case 1:null!=n.sent()&&t();return[2]}}))})),function(e,r){return t.apply(this,arguments)}),p=(0,C.qi)(i,{includeSoftDeleted:!0});p.sort((function(e,t){return Number(e.soft_deleted)-Number(t.soft_deleted)}));var b=function(e){var t=(0,R.e7)([N.Z],(function(){return N.Z.getGuild(e)})),r=(0,R.e7)([P.Z],(function(){return P.Z.getSubscriptionRoles(e)}));return o.useMemo((function(){return null==(null==t?void 0:t.roles)?k:Object.values(t.roles).filter((function(e){return r.has(e.id)}))}),[null==t?void 0:t.roles,r])}(i),S=o.useMemo((function(){var e=new Set(b.map((function(e){return e.id})));return r.roles.filter((function(t){return e.has(t)}))}),[r.roles,b]);return(0,n.jsx)(Y,q({emojiUrl:l,onSave:f,initialRoleIds:S,saving:c,listingChoices:p},a))}}}]);
//# sourceMappingURL=38d43cb04070f3feef47.js.map