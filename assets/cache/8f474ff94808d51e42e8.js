"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[96378],{896378:(e,t,i)=>{i.d(t,{Z:()=>D});var n=i(785893),s=i(667294),a=i(791462),o=i(489992),c=i(64833),r=i(191840),l=i(714523),u=i(653772),d=i(971738),E=i(191940),N=i(106027),R=i(461061),I=i(830504),A=i(959797),_=i(460590),P=i.n(_);function C(e){var t=e.analyticsSection,i=e.analyticsPage,s=e.isGIF,_=e.banner,C=(0,a.e7)([d.Z],(function(){return d.Z.getGuildId()})),L=(0,a.e7)([u.Z],(function(){return u.Z.getGuild(C)})),Z=(0,c.Z)().analyticsLocations;if(null==L||L.hasFeature(R.oNc.ANIMATED_BANNER)||!s&&L.hasFeature(R.oNc.BANNER))return null;return(0,n.jsxs)("div",{className:P().container,children:[(0,n.jsx)(N.Z,{className:P().guildBoostingIcon}),(0,n.jsx)(o.xv,{color:"header-primary",variant:"text-sm/semibold",children:A.Z.Messages.PREMIUM_GUILD_PREVIEW}),(0,n.jsx)(E.Co,{look:E.Co.Looks.LINK,color:E.Co.Colors.LINK,className:P().subscribeButton,onClick:function(){if(null!=L){var e={section:t,page:i,
object:R.qAy.UPSELL_HEADER};null!=_?(0,r.c)({analyticsLocations:Z,analyticsLocation:e,guild:L,isGIF:s,banner:_}):(0,l.Z)({analyticsLocations:Z,analyticsSourceLocation:e,guild:L,perks:s?(0,I.zC)():(0,I.XO)()})}},children:A.Z.Messages.PREMIUM_GUILD_BOOST_SERVER})]})}var L=i(859169),Z=i(294184),g=i.n(Z),p=i(420202),x=i(732031),M=i(462428),h=i(477002),y=i.n(h);function S(e){var t=e.text,i=e.textSize,s=void 0===i?M.Z.Sizes.SIZE_12:i,a=e.textColor,o=void 0===a?M.Z.Colors.STANDARD:a,c=e.className,r=e.button,l=e.reducedRightPadding,u=void 0!==l&&l;return(0,n.jsxs)("div",{className:g()(u?y().noticeWithoutRightPadding:y().noticeWithRightPadding,c),children:[(0,n.jsxs)("div",{className:y().noticeLeft,children:[(0,n.jsx)(x.Z,{className:y().icon,color:p.JX.PREMIUM_TIER_2}),(0,n.jsx)(M.Z,{className:y().text,size:s,color:o,children:t})]}),r]})}var f=i(716421),m=i(859023),v=i(932847),U=i(590483),b=i(476154),j=i(298716),T=i(167633),k=i.n(T);function B(e){var t=e.analyticsSection,i=e.type,o=(0,
a.e7)([m.default],(function(){return m.default.getCurrentUser()})),r=U.ZP.canUseAnimatedAvatar(o),l=U.ZP.canUsePremiumProfileCustomization(o),u=i===b.pC.BANNER&&l||i===b.pC.BANNER_V2&&l||i===b.pC.AVATAR&&r,d=(0,c.Z)(L.Z.PREMIUM_PREVIEW_UPSELL_HEADER).sourceAnalyticsLocations;s.useEffect((function(){u||v.default.track(R.rMx.PREMIUM_UPSELL_VIEWED,{type:t,location_stack:d})}),[u,t,d]);if(u)return null;var N=(0,n.jsx)(f.Z,{className:k().getNitroLink,size:E.Co.Sizes.SMALL,look:E.Co.Looks.LINK,color:E.Co.Colors.LINK,subscriptionTier:j.Si.TIER_2,buttonText:A.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),showIcon:!1,premiumModalAnalyticsLocation:{section:t,object:R.qAy.BUTTON_CTA},disableShine:!0});return(0,n.jsx)(S,{reducedRightPadding:!0,className:k().nitroPreviewUpsell,text:A.Z.Messages.PREMIUM_PREVIEW.format(),textSize:M.Z.Sizes.SIZE_14,textColor:M.Z.Colors.HEADER_PRIMARY,button:N})}function D(e){var t=e.type,i=e.analyticsPage,s=e.analyticsSection,a=e.isGIF,o=e.banner
;return[b.pC.BANNER,b.pC.BANNER_V2,b.pC.AVATAR].includes(t)&&a?(0,n.jsx)(B,{analyticsSection:s,type:t}):t===b.pC.GUILD_BANNER?(0,n.jsx)(C,{analyticsSection:s,analyticsPage:i,isGIF:a,banner:o}):null}}}]);
//# sourceMappingURL=8f474ff94808d51e42e8.js.map