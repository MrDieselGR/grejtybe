"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[363],{100363:(e,r,t)=>{t.r(r);t.d(r,{default:()=>p});var n=t(785893),o=(t(667294),t(791462)),a=t(489992),i=t(191940),s=t(272729),l=t(67416),u=t(448536),c=t(830426),f=t(676417),d=t(959797),h=t(916559),b=t.n(h);const p=function(e){var r=e.guildId,t=e.onSubmit,h=e.onClose,p=e.transitionState,m=(0,s.Dt)(),y=(0,f.Z)({onSubmit:t,onClose:h}),S=y.submitting,v=y.errorMessage,g=y.onSubmit,C=(0,o.e7)([u.Z],(function(){var e=u.Z.get(r),t=null==e?void 0:e.formFields;return null!=t&&t.filter(c._C).length>0}),[r])?d.Z.Messages.GUILD_SETTINGS_KICK_STARTED_APPLICATIONS_DESCRIPTION:d.Z.Messages.GUILD_SETTINGS_KEEP_STARTED_APPLICATIONS_DESCRIPTION;return(0,n.jsxs)(l.Y0,{className:b().container,transitionState:p,"aria-labelledby":m,children:[(0,n.jsxs)(l.hz,{className:b().content,children:[(0,n.jsx)(a.X6,{variant:"heading-md/semibold",id:m,children:d.Z.Messages.GUILD_SETTINGS_DISABLE_MEMBER_VERIFICATION_TITLE}),(0,
n.jsx)(a.xv,{className:b().descriptionText,color:"header-secondary",variant:"text-sm/normal",children:C}),null!=v&&(0,n.jsx)(a.xv,{className:b().errorText,variant:"text-xs/normal",color:"text-danger",children:v})]}),(0,n.jsxs)(l.mz,{children:[(0,n.jsx)(i.Co,{className:b().actionButton,color:i.Co.Colors.RED,submitting:S,onClick:g,size:i.Co.Sizes.SMALL,children:d.Z.Messages.DISABLE}),(0,n.jsx)(i.Co,{color:i.Co.Colors.PRIMARY,onClick:h,size:i.Co.Sizes.SMALL,children:d.Z.Messages.CANCEL})]})]})}},676417:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(667294),o=t(323657);function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function i(e,r,t,n,o,a,i){try{var s=e[a](i),l=s.value}catch(e){t(e);return}s.done?r(l):Promise.resolve(l).then(n,o)}function s(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function s(e){i(a,n,o,s,l,"next",e)}function l(e){i(a,n,o,s,l,"throw",e)}s(void 0)}))}}function l(e,r){
return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,s=!1;try{for(t=t.call(e);!(i=(n=t.next()).done);i=!0){a.push(n.value);if(r&&a.length===r)break}}catch(e){s=!0;o=e}finally{try{i||null==t.return||t.return()}finally{if(s)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=function(e,r){var t,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),
return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;(n=0,o)&&(a=[2&a[0],o.value]);switch(a[0]){case 0:case 1:o=a;break;case 4:i.label++;return{value:a[1],done:!1};case 5:i.label++;n=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1];o=a;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(a);break}o[2]&&i.ops.pop();i.trys.pop();continue}a=r.call(e,i)}catch(e){a=[6,e];n=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};function c(e){
var r=e.onSubmit,t=e.onClose,a=l(n.useState(!1),2),i=a[0],c=a[1],f=l(n.useState(null),2),d=f[0],h=f[1],b=n.useCallback(s((function(){var e,n;return u(this,(function(a){switch(a.label){case 0:if(i)return[2];c(!0);h(null);a.label=1;case 1:a.trys.push([1,3,,4]);return[4,r()];case 2:a.sent();t();return[3,4];case 3:e=a.sent();n=new o.Hx(e);h(n.getAnyErrorMessage());c(!1);return[3,4];case 4:return[2]}}))})),[t,r,i]);return{submitting:i,errorMessage:d,onSubmit:b}}}}]);
//# sourceMappingURL=e385e5f48cb40fa89813.js.map