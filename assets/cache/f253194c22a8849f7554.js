"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[89341],{89341:(e,t,n)=>{n.r(t);n.d(t,{default:()=>C});var r=n(785893),o=n(667294),a=n(489992),s=n(395951),i=n(859169),l=n(64833),c=n(716421),u=n(429244),A=n(191940),f=n(562181),d=n(67416),h=n(766936),p=n(932847),m=n(461061),M=n(298716),v=n(959797),y=n(289112),E=n.n(y);function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function L(e,t,n,r,o,a,s){try{var i=e[a](s),l=i.value}catch(e){n(e);return}i.done?t(l):Promise.resolve(l).then(r,o)}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],s=!0,i=!1;try{for(n=n.call(e);!(s=(r=n.next()).done);s=!0){a.push(r.value);if(t&&a.length===t)break}}catch(e){i=!0;o=e}finally{try{s||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return
;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var x=function(e,t){var n,r,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;(r=0,o)&&(a=[2&a[0],o.value]);switch(a[0]){case 0:case 1:o=a;break;case 4:
s.label++;return{value:a[1],done:!1};case 5:s.label++;r=a[1];a=[0];continue;case 7:a=s.ops.pop();s.trys.pop();continue;default:if(!(o=s.trys,o=o.length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1];o=a;break}if(o&&s.label<o[2]){s.label=o[2];s.ops.push(a);break}o[2]&&s.ops.pop();s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e];r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}};const C=function(e){var t,n,y=e.imgURI,b=e.transitionState,C=e.onClose,S=e.onChangeAvatar,I=_(o.useState(!1),2),g=I[0],R=I[1],T=_(o.useState(!1),2),P=T[0],j=T[1],k=(0,l.Z)(i.Z.PREMIUM_UPSELL),N=k.AnalyticsLocationProvider,U=k.sourceAnalyticsLocations,w=(n=(t=function(){var e,t;return x(this,(function(n){switch(n.label){case 0:R(!0);return[4,(0,s.Mn)({avatar:y})];case 1:(null==(e=n.sent())?void 0:e.ok)?(0,
s.I5)(void 0):null!=(null==e||null===(t=e.body)||void 0===t?void 0:t.username)&&(0,u.P)();R(!1);C();return[2]}}))},function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function s(e){L(a,r,o,s,i,"next",e)}function i(e){L(a,r,o,s,i,"throw",e)}s(void 0)}))}),function(){return n.apply(this,arguments)});o.useEffect((function(){p.default.track(m.rMx.PREMIUM_UPSELL_VIEWED,{type:M.cd.ANIMATED_USER_AVATAR_MODAL,location_stack:U})}),[U]);return(0,r.jsx)(N,{children:(0,r.jsxs)(d.Y0,{transitionState:b,size:d.Cg.SMALL,"aria-label":v.Z.Messages.IMAGE,children:[(0,r.jsxs)(d.hz,{className:E().modalContent,paddingFix:!1,orientation:"horizontal",children:[(0,r.jsx)(d.xB,{separator:!1,className:E().header,children:(0,r.jsx)(f.vw,{tag:f.RB.H1,children:v.Z.Messages.PREMIUM_UPSELL_ANIMATED_AVATAR})}),(0,r.jsx)(a.xv,{color:"text-normal",variant:"text-md/normal",children:v.Z.Messages.PREMIUM_UPSELL_ANIMATED_AVATAR_SUBTITLE}),(0,r.jsxs)("div",{className:E().promo,children:[(0,
r.jsx)(a.xv,{color:"text-normal",variant:"text-sm/semibold",className:E().promoText,children:v.Z.Messages.PREMIUM_UPSELL_ANIMATED_AVATAR_TEXT}),(0,r.jsx)(c.Z,{submitting:P,premiumModalAnalyticsLocation:{section:m.jXE.AVATAR_UPSELL_MODAL,object:m.qAy.BUTTON_CTA},size:A.Co.Sizes.SMALL,color:A.Co.Colors.GREEN,onClick:function(){j(!0)},onSubscribeModalClose:function(e){j(!1);if(e){w();C()}},buttonText:v.Z.Messages.PREMIUM_REQUIRED_GET_NITRO})]})]}),(0,r.jsxs)(d.mz,{className:E().modalFooter,children:[(0,r.jsx)(A.Co,{look:A.Co.Looks.LINK,color:A.Co.Colors.PRIMARY,size:A.Ph.SMALL,onClick:S,children:v.Z.Messages.CHANGE_AVATAR_A11Y_LABEL}),(0,r.jsxs)("div",{className:E().modalFooterActions,children:[(0,r.jsx)(A.Co,{className:E().cancelButton,look:A.Co.Looks.LINK,color:A.Co.Colors.PRIMARY,size:A.Ph.SMALL,onClick:C,children:v.Z.Messages.AVATAR_UPLOAD_CANCEL}),(0,r.jsx)(A.Co,{size:A.Ph.SMALL,onClick:w,submitting:g,children:v.Z.Messages.SAVE_CHANGES})]})]}),(0,r.jsx)(h.ZP,{src:y,"aria-hidden":!0,
className:E().avatar,size:h.u8.SIZE_120})]})})}}}]);
//# sourceMappingURL=f253194c22a8849f7554.js.map