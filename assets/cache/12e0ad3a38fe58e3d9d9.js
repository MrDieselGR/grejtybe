"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[79632,96378],{797776:(t,e,n)=>{n.d(e,{Z:()=>d});var r=n(785893),i=(n(667294),n(294184)),a=n.n(i),o=n(468811),s=n.n(o),c=n(349480),l=n.n(c);function u(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}var h=s().v4();const d=function(t){var e,n=t.open,i=t.className,o=t.withHighlight,s=void 0!==o&&o;return(0,r.jsxs)("svg",{width:"18",height:"18",className:a()(l().button,i,(e={},u(e,l().open,n),u(e,l().withHighlight,s),e)),children:[s&&(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:h,x1:"0",y1:"0",x2:"0",y2:"18",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{offset:"0",stopColor:"#B473F5"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#E292AA"})]})}),(0,r.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,r.jsx)("path",{d:"M0 0h18v18H0"}),(0,r.jsx)("path",{stroke:s?"url(#".concat(h,")"):"currentColor",d:"M4.5 4.5l9 9",
strokeLinecap:"round"}),(0,r.jsx)("path",{stroke:s?"url(#".concat(h,")"):"currentColor",d:"M13.5 4.5l-9 9",strokeLinecap:"round"})]})]})}},191840:(t,e,n)=>{n.d(e,{c:()=>E});var r=n(785893),i=(n(667294),n(489992)),a=n(797776),o=n(387736),s=n(75141),c=n(714523),l=n(830504),u=n(461061),h=n(959797),d=n(562275),p=n.n(d);function g(t){var e=t.guild,n=t.banner;return(0,r.jsx)("div",{className:p().guildBanner,style:{backgroundImage:"url(".concat(n)},children:(0,r.jsxs)("div",{className:p().guildHeader,children:[(0,r.jsx)(o.Z,{guild:e,isBannerVisible:!0}),(0,r.jsx)(i.X6,{className:p().guildName,variant:"heading-md/semibold",children:e.toString()}),(0,r.jsx)(a.Z,{className:p().dropdown,open:!1})]})})}function f(t,e){var n=(0,s.nW)(t);return e?h.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format({targetLevelOrPlan:n}):h.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format({targetLevelOrPlan:n})}function E(t){
var e=t.analyticsLocations,n=t.analyticsLocation,i=t.guild,a=t.isGIF,o=t.banner,d=a?(0,s.yw)(u.oNc.ANIMATED_BANNER):(0,s.yw)(u.oNc.BANNER);null!=d&&(0,c.Z)({analyticsLocations:e,analyticsSourceLocation:n,guild:i,headerProps:{title:h.Z.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,subtitle:f(d,a),image:(0,r.jsx)(g,{guild:i,banner:o})},perkIntro:h.Z.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,perks:a?(0,l.zC)():(0,l.XO)()})}},204660:(t,e,n)=>{n.d(e,{$p:()=>u,PT:()=>d,U$:()=>p,Es:()=>f,kH:()=>E,AK:()=>v,Ae:()=>N});var r=n(496486),i=n(476154);function a(t,e,n,r,i,a,o){try{var s=t[a](o),c=s.value}catch(t){n(t);return}s.done?e(c):Promise.resolve(c).then(r,i)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function s(t){a(o,r,i,s,c,"next",t)}function c(t){a(o,r,i,s,c,"throw",t)}s(void 0)}))}}var s=function(t,e){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),
return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;(r=0,i)&&(a=[2&a[0],i.value]);switch(a[0]){case 0:case 1:i=a;break;case 4:o.label++;return{value:a[1],done:!1};case 5:o.label++;r=a[1];a=[0];continue;case 7:a=o.ops.pop();o.trys.pop();continue;default:if(!(i=o.trys,i=i.length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1];i=a;break}if(i&&o.label<i[2]){o.label=i[2];o.ops.push(a);break}i[2]&&o.ops.pop();o.trys.pop();continue}a=e.call(t,o)}catch(t){a=[6,t];r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};function c(t){return new Promise((function(e){var n=new FileReader
;n.onload=function(t){var n,r=null===(n=t.target)||void 0===n?void 0:n.result;e("string"==typeof r?r:"")};n.readAsDataURL(t)}))}function l(t,e,n,r){var i=t.naturalWidth/t.width,a=e.width/2,o=e.height/2,s=(t.width/2-a-n.x)*i,c=(t.height/2-o-n.y)*i,l=e.width*i,u=e.height*i;return{x:s,y:c,scaledCropWidth:l,scaledCropHeight:u,canvasWidth:Math.min(l,r.width),canvasHeight:Math.min(u,r.height)}}function u(t,e,n,r,i){return h.apply(this,arguments)}function h(){return(h=o((function(t,e,r,a,o){var u,h,d,p,g,f,E,v;return s(this,(function(s){switch(s.label){case 0:u=l(e,r,a,o),h=u.x,d=u.y,p=u.scaledCropWidth,g=u.scaledCropHeight;return[4,t.arrayBuffer()];case 1:f=s.sent();E=new Worker(new URL(n.p+n.u(44499),n.b));v=new Promise((function(t,e){E.onmessage=function(n){var r=n.data;if(r.type===i.u.CROP_GIF_COMPLETE){t(c(new Blob([r.result])));E.terminate()}else if(r.type===i.u.CROP_GIF_ERROR){e(new Error("Error cropping GIF"));E.terminate()}}}));E.postMessage({type:i.u.CROP_GIF_START,
gif:new Uint8Array(f),x:0|h,y:0|d,width:0|p,height:0|g});return[2,{result:v,cancelFn:function(){return E.terminate()}}]}}))}))).apply(this,arguments)}function d(t,e,n,r){var i=l(t,e,n,r),a=i.x,o=i.y,s=i.scaledCropWidth,c=i.scaledCropHeight,u=i.canvasWidth,h=i.canvasHeight,d=document.createElement("canvas");d.width=u;d.height=h;var p=d.getContext("2d");null!=p&&p.drawImage(t,a,o,s,c,0,0,d.width,d.height);return d.toDataURL("image/png")}function p(t,e,n){return{x:(0,r.clamp)(t,n.left,n.right),y:(0,r.clamp)(e,n.bottom,n.top)}}function g(t,e,n,r){var a=n,o=r;if(n>i.vJ){a=i.vJ;o=r*(i.vJ/n)}return n/r<t?{width:a,height:o}:{width:a*(e/o),height:e}}function f(t,e,n){switch(t){case i.pC.AVATAR:return{width:e,height:n};case i.pC.BANNER:return g(i.MY,i.qj,e,n);case i.pC.BANNER_V2:return g(i.U9,i.qj,e,n);case i.pC.GUILD_BANNER:return g(i.Ij,i.C5,e,n);case i.pC.VIDEO_BACKGROUND:return g(i.Ff,i.PB,e,n);case i.pC.SCHEDULED_EVENT_IMAGE:return g(i.ut,i.WV,e,n);case i.pC.HOME_HEADER:
return g(i.sX,i.SW,e,n)}}function E(t,e,n){var r={top:0,bottom:0,left:0,right:0},i=t-n.width,a=e-n.height;if(0!==i){r.left=-Math.abs(i/2);r.right=i/2}if(0!==a){r.bottom=-Math.abs(a/2);r.top=a/2}return r}function v(t,e,n,r){switch(t){case i.pC.AVATAR:var a=Math.min(e,n);return{width:a,height:a};case i.pC.BANNER:var o=Math.min(e,i.vJ);return{width:o,height:o*(1/i.MY)};case i.pC.BANNER_V2:var s=Math.min(e,i.vJ);return{width:s,height:s*(1/i.U9)};case i.pC.GUILD_BANNER:var c=Math.min(e,i.vJ);return{width:c,height:Math.min(c*(9/16),r)};case i.pC.VIDEO_BACKGROUND:var l=Math.min(e,i.vJ);return{width:l,height:l*(9/16)};case i.pC.SCHEDULED_EVENT_IMAGE:var u=Math.min(e,i.vJ);return{width:u,height:.4*u};case i.pC.HOME_HEADER:var h=Math.min(e,i.vJ);return{width:h,height:h*(1/i.sX)}}}function N(t,e,n){var r=t.naturalWidth/t.naturalHeight,i=e,a=n;t.naturalWidth>t.naturalHeight?i/=r:a*=r;var o={height:i,width:a};return d(t,{width:t.width,height:t.height},{x:0,y:0},o)}},896378:(t,e,n)=>{n.d(e,{Z:()=>Z
});var r=n(785893),i=n(667294),a=n(791462),o=n(489992),s=n(64833),c=n(191840),l=n(714523),u=n(653772),h=n(971738),d=n(191940),p=n(106027),g=n(461061),f=n(830504),E=n(959797),v=n(460590),N=n.n(v);function A(t){var e=t.analyticsSection,n=t.analyticsPage,i=t.isGIF,v=t.banner,A=(0,a.e7)([h.Z],(function(){return h.Z.getGuildId()})),R=(0,a.e7)([u.Z],(function(){return u.Z.getGuild(A)})),_=(0,s.Z)().analyticsLocations;if(null==R||R.hasFeature(g.oNc.ANIMATED_BANNER)||!i&&R.hasFeature(g.oNc.BANNER))return null;return(0,r.jsxs)("div",{className:N().container,children:[(0,r.jsx)(p.Z,{className:N().guildBoostingIcon}),(0,r.jsx)(o.xv,{color:"header-primary",variant:"text-sm/semibold",children:E.Z.Messages.PREMIUM_GUILD_PREVIEW}),(0,r.jsx)(d.Co,{look:d.Co.Looks.LINK,color:d.Co.Colors.LINK,className:N().subscribeButton,onClick:function(){if(null!=R){var t={section:e,page:n,object:g.qAy.UPSELL_HEADER};null!=v?(0,c.c)({analyticsLocations:_,analyticsLocation:t,guild:R,isGIF:i,banner:v}):(0,l.Z)({
analyticsLocations:_,analyticsSourceLocation:t,guild:R,perks:i?(0,f.zC)():(0,f.XO)()})}},children:E.Z.Messages.PREMIUM_GUILD_BOOST_SERVER})]})}var R=n(859169),_=n(294184),m=n.n(_),C=n(420202),L=n(732031),y=n(462428),I=n(477002),M=n.n(I);function w(t){var e=t.text,n=t.textSize,i=void 0===n?y.Z.Sizes.SIZE_12:n,a=t.textColor,o=void 0===a?y.Z.Colors.STANDARD:a,s=t.className,c=t.button,l=t.reducedRightPadding,u=void 0!==l&&l;return(0,r.jsxs)("div",{className:m()(u?M().noticeWithoutRightPadding:M().noticeWithRightPadding,s),children:[(0,r.jsxs)("div",{className:M().noticeLeft,children:[(0,r.jsx)(L.Z,{className:M().icon,color:C.JX.PREMIUM_TIER_2}),(0,r.jsx)(y.Z,{className:M().text,size:i,color:o,children:e})]}),c]})}var x=n(716421),b=n(859023),P=n(932847),U=n(590483),S=n(476154),D=n(298716),T=n(167633),j=n.n(T);function B(t){var e=t.analyticsSection,n=t.type,o=(0,a.e7)([b.default],(function(){return b.default.getCurrentUser()
})),c=U.ZP.canUseAnimatedAvatar(o),l=U.ZP.canUsePremiumProfileCustomization(o),u=n===S.pC.BANNER&&l||n===S.pC.BANNER_V2&&l||n===S.pC.AVATAR&&c,h=(0,s.Z)(R.Z.PREMIUM_PREVIEW_UPSELL_HEADER).sourceAnalyticsLocations;i.useEffect((function(){u||P.default.track(g.rMx.PREMIUM_UPSELL_VIEWED,{type:e,location_stack:h})}),[u,e,h]);if(u)return null;var p=(0,r.jsx)(x.Z,{className:j().getNitroLink,size:d.Co.Sizes.SMALL,look:d.Co.Looks.LINK,color:d.Co.Colors.LINK,subscriptionTier:D.Si.TIER_2,buttonText:E.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),showIcon:!1,premiumModalAnalyticsLocation:{section:e,object:g.qAy.BUTTON_CTA},disableShine:!0});return(0,r.jsx)(w,{reducedRightPadding:!0,className:j().nitroPreviewUpsell,text:E.Z.Messages.PREMIUM_PREVIEW.format(),textSize:y.Z.Sizes.SIZE_14,textColor:y.Z.Colors.HEADER_PRIMARY,button:p})}function Z(t){var e=t.type,n=t.analyticsPage,i=t.analyticsSection,a=t.isGIF,o=t.banner;return[S.pC.BANNER,S.pC.BANNER_V2,S.pC.AVATAR].includes(e)&&a?(0,r.jsx)(B,{
analyticsSection:i,type:e}):e===S.pC.GUILD_BANNER?(0,r.jsx)(A,{analyticsSection:i,analyticsPage:n,isGIF:a,banner:o}):null}}}]);
//# sourceMappingURL=12e0ad3a38fe58e3d9d9.js.map