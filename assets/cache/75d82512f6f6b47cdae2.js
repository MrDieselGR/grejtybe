"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[30241],{830241:(e,r,n)=>{n.r(r);n.d(r,{createModeratorOverwrite:()=>M,default:()=>I});var t=n(785893),a=n(667294),o=n(791462),i=n(489992),l=n(289965),u=n(323657),s=n(780921),c=n(87310),d=n(356004),f=n(653772),h=n(191940),p=n(487502),y=n(272729),b=n(806008),v=n(67416),m=n(108580),g=n(531648),w=n(862045),x=n(959797),C=n(102437),S=n.n(C);function A(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function E(e,r,n,t,a,o,i){try{var l=e[o](i),u=l.value}catch(e){n(e);return}l.done?r(u):Promise.resolve(u).then(t,a)}function N(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(t=n.next()).done);i=!0){o.push(t.value);if(r&&o.length===r)break}}catch(e){l=!0;a=e}finally{try{i||null==n.return||n.return()
}finally{if(l)throw a}}return o}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return A(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j=function(e,r){var n,t,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,t&&(a=2&o[0]?t.return:o[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,o[1])).done)return a;(t=0,
a)&&(o=[2&o[0],a.value]);switch(o[0]){case 0:case 1:a=o;break;case 4:i.label++;return{value:o[1],done:!1};case 5:i.label++;t=o[1];o=[0];continue;case 7:o=i.ops.pop();i.trys.pop();continue;default:if(!(a=i.trys,a=a.length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1];a=o;break}if(a&&i.label<a[2]){i.label=a[2];i.ops.push(o);break}a[2]&&i.ops.pop();i.trys.pop();continue}o=r.call(e,i)}catch(e){o=[6,e];t=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};function M(e,r){return{id:e,type:r,deny:m.ZP.NONE,allow:g.yP}}function k(e,r){var n=Object.values(r).filter((function(e){return null!=e.row.id})).map((function(e){var r=e.row;return r.rowType===w.aC.ROLE?M(r.id,s.BN.ROLE):M(r.id,s.BN.MEMBER)}));return(0,l.hw)(e.id,n,!0)}function I(e){var r=e.transitionState,n=e.onClose,l=e.channelId,s=(0,y.Dt)(),m=(0,o.e7)([d.Z],(function(){return d.Z.getChannel(l)
})),w=(0,o.e7)([f.Z],(function(){return f.Z.getGuild(null==m?void 0:m.getGuildId())})),C=N(a.useState({}),2),A=C[0],M=C[1],I=N(a.useState(!1),2),Z=I[0],L=I[1],R=N(a.useState(null),2),O=R[0],P=R[1];if(null==m||null==w)return null;var T,B,D=(B=(T=function(){var e,r;return j(this,(function(t){switch(t.label){case 0:L(!0);t.label=1;case 1:t.trys.push([1,3,,4]);return[4,k(m,A)];case 2:t.sent();n();return[3,4];case 3:e=t.sent();r=new u.Hx(e);L(!1);P(r);return[3,4];case 4:return[2]}}))},function(){var e=this,r=arguments;return new Promise((function(n,t){var a=T.apply(e,r);function o(e){E(a,n,t,o,i,"next",e)}function i(e){E(a,n,t,o,i,"throw",e)}o(void 0)}))}),function(){return B.apply(this,arguments)});return(0,t.jsxs)(v.Y0,{transitionState:r,"aria-labelledby":s,size:v.Cg.SMALL,className:S().modalRoot,children:[(0,t.jsxs)(v.xB,{separator:!1,direction:p.Z.Direction.VERTICAL,align:p.Z.Align.CENTER,className:S().header,children:[(0,t.jsx)(i.X6,{variant:"heading-xl/semibold",
children:x.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE}),(0,t.jsxs)(i.xv,{variant:"text-md/normal",color:"header-secondary",className:S().headerSubtitle,children:[(0,t.jsx)(b.Z,{height:16,width:16,className:S().headerSubtitleIcon}),m.name]})]}),(0,t.jsx)(c.AddMembersBody,{guild:w,channel:m,permission:g.yP,pendingAdditions:A,setPendingAdditions:M}),null!=O?(0,t.jsx)(i.xv,{className:S().error,variant:"text-xs/normal",color:"text-danger",children:O.getAnyErrorMessage()}):null,(0,t.jsxs)(v.mz,{children:[(0,t.jsx)(h.Co,{onClick:D,submitting:Z,children:x.Z.Messages.ADD}),(0,t.jsx)(h.Co,{look:h.Co.Looks.LINK,color:h.Co.Colors.PRIMARY,onClick:n,children:x.Z.Messages.CANCEL})]})]})}}}]);
//# sourceMappingURL=75d82512f6f6b47cdae2.js.map