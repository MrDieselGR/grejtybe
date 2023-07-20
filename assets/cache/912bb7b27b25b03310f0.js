"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[86261],{786261:(e,t,r)=>{r.r(t);r.d(t,{default:()=>v});var n=r(785893),o=r(667294),a=r(489992),i=r(7046),s=r(655695),l=r(191940),u=r(629590),c=r(272729),f=r(67416),d=r(676417),h=r(461061),b=r(35236),m=r(959797),I=r(916559),p=r.n(I);const v=function(e){var t=e.guildId,r=e.submittedGuildJoinRequestsCount,I=e.onClose,v=e.transitionState,x=e.onConfirm,y=(0,c.Dt)(),C=(0,d.Z)({onSubmit:x,onClose:I}),E=C.submitting,S=C.errorMessage,N=C.onSubmit,T=o.useCallback((function(){I();i.Z.close();(0,s.uL)(h.Z5c.CHANNEL(t,b.oC.MEMBER_APPLICATIONS))}),[t,I]);return(0,n.jsxs)(f.Y0,{className:p().container,transitionState:v,"aria-labelledby":y,children:[(0,n.jsxs)(f.hz,{className:p().content,children:[(0,n.jsx)(a.X6,{variant:"heading-md/semibold",id:y,children:m.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EDIT_WARNING_TITLE.format({count:r})}),(0,n.jsx)(a.xv,{className:p().descriptionText,color:"header-secondary",
variant:"text-sm/normal",children:m.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EDIT_WARNING_DESCRIPTIONG}),(0,n.jsx)(u.Z,{className:p().actionText,onClick:T,children:(0,n.jsx)(a.xv,{variant:"text-sm/normal",color:"text-link",children:m.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPLICATIONS_TITLE})}),null!=S&&(0,n.jsx)(a.xv,{className:p().errorText,variant:"text-xs/normal",color:"text-danger",children:S})]}),(0,n.jsxs)(f.mz,{children:[(0,n.jsx)(l.Co,{className:p().actionButton,color:l.Co.Colors.BRAND,submitting:E,onClick:N,size:l.Co.Sizes.SMALL,children:(0,n.jsx)(a.xv,{variant:"text-sm/semibold",children:m.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_CONTINUE_EDITING})}),(0,n.jsx)(l.Co,{color:l.Co.Colors.PRIMARY,onClick:I,size:l.Co.Sizes.SMALL,children:(0,n.jsx)(a.xv,{variant:"text-sm/semibold",children:m.Z.Messages.CANCEL})})]})]})}},676417:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(667294),o=r(323657);function a(e,t){(null==t||t>e.length)&&(t=e.length)
;for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t,r,n,o,a,i){try{var s=e[a](i),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(n,o)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function s(e){i(a,n,o,s,l,"next",e)}function l(e){i(a,n,o,s,l,"throw",e)}s(void 0)}))}}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done);i=!0){a.push(n.value);if(t&&a.length===t)break}}catch(e){s=!0;o=e}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r)
;if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=function(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;(n=0,o)&&(a=[2&a[0],o.value]);switch(a[0]){case 0:case 1:o=a;break;case 4:i.label++;return{value:a[1],done:!1};case 5:i.label++;n=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,
o=o.length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1];o=a;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(a);break}o[2]&&i.ops.pop();i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e];n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};function c(e){var t=e.onSubmit,r=e.onClose,a=l(n.useState(!1),2),i=a[0],c=a[1],f=l(n.useState(null),2),d=f[0],h=f[1],b=n.useCallback(s((function(){var e,n;return u(this,(function(a){switch(a.label){case 0:if(i)return[2];c(!0);h(null);a.label=1;case 1:a.trys.push([1,3,,4]);return[4,t()];case 2:a.sent();r();return[3,4];case 3:e=a.sent();n=new o.Hx(e);h(n.getAnyErrorMessage());c(!1);return[3,4];case 4:return[2]}}))})),[r,t,i]);return{submitting:i,errorMessage:d,onSubmit:b}}}}]);
//# sourceMappingURL=912bb7b27b25b03310f0.js.map