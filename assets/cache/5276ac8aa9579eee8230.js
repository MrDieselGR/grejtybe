"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[69102,98412],{454313:(n,e,r)=>{r.d(e,{Z:()=>s});var t=r(785893),i=(r(667294),r(64833));function a(n,e,r){e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r;return n}function o(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))));t.forEach((function(e){a(n,e,r[e])}))}return n}function s(n,e){return function(r){var a=(0,i.Z)(e).AnalyticsLocationProvider;return(0,t.jsx)(a,{children:(0,t.jsx)(n,o({},r))})}}},669102:(n,e,r)=>{r.r(e);r.d(e,{default:()=>k});var t=r(785893),i=(r(667294),
r(281081)),a=r(454313),o=r(859169),s=r(41225),c=r(769672),d=r(850202),u=r(636394),l=r(539404),Z=r(753717),f=r(707031),h=r(150680),p=r(275298),v=r(555448),b=r(532835),j=r(592587),E=r(413198),P=r(677893),_=r(366295),g=r(959797);const k=(0,a.Z)((function(n){var e=n.channel,r=n.onSelect,a=(0,u.Z)(e),o=(0,Z.Z)(e),k=(0,E.Z)(e),m=(0,d.Z)(e),y=(0,l.Z)(e),O=(0,s.Z)(e.id),S=(0,h.Z)(e,"Context Menu"),x=(0,v.Z)(e),N=(0,P.Z)(e),C=(0,b.Z)(e),A=(0,j.Z)(e.id),M=(0,p.Z)(e),T=(0,_.Z)(e),U=(0,f.Z)(e,{hoist:!0});return(0,t.jsxs)(c.ZP,{navId:"thread-context",onClose:i.Zy,"aria-label":g.Z.Messages.THREAD_ACTIONS_MENU_LABEL,onSelect:r,children:[(0,t.jsx)(c.kS,{children:o},"mark-as-read"),(0,t.jsxs)(c.kS,{children:[S,M,m,C,A,a]},"thread-actions"),(0,t.jsxs)(c.kS,{children:[k,N]},"notifications"),(0,t.jsxs)(c.kS,{children:[T,U,x,y]},"admin-actions"),(0,t.jsx)(c.kS,{children:O},"developer-actions")]})}),[o.Z.CONTEXT_MENU,o.Z.CHANNEL_LIST_THREAD_MENU])},636394:(n,e,r)=>{r.d(e,{Z:()=>u})
;var t=r(785893),i=(r(667294),r(776319)),a=r(426466),o=r(769672),s=r(268333),c=r(461061),d=r(959797);function u(n){var e=n.getGuildId();return(0,t.jsx)(o.sN,{id:"channel-copy-link",label:d.Z.Messages.COPY_LINK,action:function(){n.isForumPost()&&(0,a.B)({postId:n.id,location:{section:c.jXE.CONTEXT_MENU}});(0,i.J)((0,s.wR)(e,n.id))}})}},753717:(n,e,r)=>{r.d(e,{Z:()=>h});var t=r(785893),i=(r(667294),r(791462)),a=r(320646),o=r(769672),s=r(973381),c=r(668479),d=r(53551),u=r(384995),l=r(718375),Z=r(461061),f=r(959797);function h(n){var e=function(n){return(0,i.e7)([l.ZP,u.Z,s.Z,c.Z],(function(){if(n.isForumPost())return l.ZP.isForumPostUnread(n.id);if(n.type===Z.d4z.GUILD_CATEGORY){var e=u.Z.getCategories(n.getGuildId());if(null==e[n.id])return!1;if(e[n.id].some((function(n){var e=n.channel;return(0,d.Em)(e.type)&&l.ZP.hasUnread(e.id)})))return!0;var r=new Set(e[n.id].map((function(n){return n.channel.id}))),t=s.Z.getThreadsForGuild(n.guild_id)
;for(var i in t)if(r.has(i))for(var a in t[i])if(c.Z.hasJoined(a)&&!c.Z.isMuted(a)&&l.ZP.hasUnread(a))return!0;return!1}return l.ZP.hasUnread(n.id)}),[n])}(n);return(0,t.jsx)(o.sN,{id:"mark-channel-read",label:f.Z.Messages.MARK_AS_READ,action:function(){(0,a.U6)(n)},disabled:!e})}}}]);
//# sourceMappingURL=5276ac8aa9579eee8230.js.map