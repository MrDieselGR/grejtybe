"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[63115],{463115:(n,e,t)=>{t.r(e);t.d(e,{default:()=>N});var l=t(785893),i=(t(667294),t(388721)),r=t(281081),o=t(41225),a=t(769672),c=t(344579),u=t(636640),s=t(870798),d=t(282881),f=t(140039),E=t(327940),Z=t(106457),h=t(959797);function N(n){var e,t,N,g,S=n.channel,_=n.message,M=n.target,p=n.attachment,v=n.onSelect,b=M;if(null!=p)N=t=p.url;else for(;(0,i.k)(b);){(0,i.k)(b,HTMLImageElement)&&null!=b.src&&(N=b.src);if((0,i.k)(b,HTMLAnchorElement)&&null!=b.href){t=b.href;g=b.textContent}b=b.parentNode}var k=null===(e=document.getSelection())||void 0===e?void 0:e.toString(),y=(0,c.Z)(k),A=(0,s.Z)(k),C=(0,Z.Z)(_,S),I=(0,E.Z)(_,S),O=(0,d.Z)(_,S),j=(0,f.Z)(_,S),x=(0,u.Z)(null!=t?t:N,g),m=(0,o.Z)(_.id,"".concat(_.channel_id,"-").concat(_.id));return(0,l.jsxs)(a.ZP,{navId:"message",onClose:r.Zy,"aria-label":h.Z.Messages.MESSAGE_ACTIONS_MENU_LABEL,onSelect:v,children:[(0,l.jsx)(a.kS,{children:y}),(0,l.jsx)(a.kS,{
children:A}),(0,l.jsxs)(a.kS,{children:[C,I,O,j]}),(0,l.jsx)(a.kS,{children:x}),(0,l.jsx)(a.kS,{children:m})]})}},282881:(n,e,t)=>{t.d(e,{Z:()=>s});var l=t(785893),i=(t(667294),t(776319)),r=t(769672),o=t(771795),a=t(726283),c=t(461061),u=t(959797);function s(n,e){return a.wS&&n.type!==c.uaV.GUILD_INVITE_REMINDER?(0,l.jsx)(r.sN,{id:"copy-link",label:u.Z.Messages.COPY_MESSAGE_LINK,icon:o.Z,action:function(){return(0,i.J)("".concat(location.protocol,"//").concat(location.host).concat(c.Z5c.CHANNEL(e.guild_id,e.id,n.id)))}}):null}},140039:(n,e,t)=>{t.d(e,{Z:()=>Z});var l=t(785893),i=(t(667294),t(791462)),r=t(549425),o=t(961713),a=t(769672),c=t(551821),u=t(940712),s=t(859023),d=t(770212),f=t(461061),E=t(959797);function Z(n,e){var t=(0,i.e7)([s.default],(function(){return s.default.getCurrentUser()})),Z=(0,c.$R)(e),h=(0,i.e7)([u.Z],(function(){return u.Z.can(f.Plq.MANAGE_MESSAGES,e)}),[e]);return n.state===f.yb.SENDING?null:(n.author.id===(null==t?void 0:t.id)||h)&&n.type in f.HfH&&Z?(0,
l.jsx)(a.sN,{id:"delete",label:E.Z.Messages.DELETE_MESSAGE,action:function(t){n.state===f.yb.SEND_FAILED?r.Z.deleteMessage(e.id,n.id,!0):t.shiftKey?r.Z.deleteMessage(e.id,n.id):o.Z.confirmDelete(e,n,!0)},color:"danger",icon:d.Z}):null}},327940:(n,e,t)=>{t.d(e,{Z:()=>u});var l=t(785893),i=(t(667294),t(769672)),r=t(551821),o=t(428142),a=t(836781),c=t(959797);function u(n,e){return(0,r.$R)(e)?(0,l.jsx)(i.sN,{id:"mark-unread",label:c.Z.Messages.MARK_UNREAD,action:function(){return(0,a.Z)(e.id,n.id)},icon:o.Z}):null}},106457:(n,e,t)=>{t.d(e,{Z:()=>E});var l=t(785893),i=(t(667294),t(791462)),r=t(692454),o=t(961713),a=t(769672),c=t(940712),u=t(823584),s=t(96048),d=t(461061),f=t(959797);function E(n,e){var t=(0,i.e7)([c.Z],(function(){return c.Z.can(d.Plq.MANAGE_MESSAGES,e)}),[e]);return n.state===d.yb.SEND_FAILED?null:(0,s.Z)(n,e,t)?!1===n.pinned?(0,l.jsx)(a.sN,{id:"pin",action:function(t){t.shiftKey?r.Z.pinMessage(e,n.id):o.Z.confirmPin(e,n)},label:f.Z.Messages.PIN_MESSAGE,icon:u.Z}):(0,
l.jsx)(a.sN,{id:"unpin",action:function(t){t.shiftKey?r.Z.unpinMessage(e,n.id):o.Z.confirmUnpin(e,n)},label:f.Z.Messages.UNPIN_MESSAGE,icon:u.Z}):null}},670512:(n,e,t)=>{t.d(e,{v:()=>r});var l=t(379822),i=t(35236);function r(){var n,e=null!==(n=l.Z.getCurrentlySelectedChannelId())&&void 0!==n?n:void 0;return null!=e&&(0,i.AB)(e)?{channel_static_route:e}:{channel_id:e}}},344579:(n,e,t)=>{t.d(e,{Z:()=>c});var l=t(785893),i=(t(667294),t(769672)),r=t(742269),o=t(588641),a=t(959797);function c(n,e){return r.FB&&0!==(null==n?void 0:n.length)?(0,l.jsx)(i.sN,{id:"copy",label:a.Z.Messages.COPY,hint:(0,r.id)()?"⌘C":"Ctrl+C",action:function(){o.default.copy(n);null==e||e.focus()}}):null}},636640:(n,e,t)=>{t.d(e,{Z:()=>N});var l=t(785893),i=(t(667294),t(323523)),r=t(769672),o=t(673973),a=t(932847),c=t(850622),u=t(742269),s=t(588641),d=t(670512),f=t(461061),E=t(959797);function Z(n,e,t){e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t;return n}
function h(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},l=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))));l.forEach((function(e){Z(n,e,t[e])}))}return n}function N(n,e){if(!u.FB||null==n||""===n)return null;if(null!=n&&null!=(0,o.B0)(n))return null;if(null!=n&&(0,i.zt)(n))return null;return[(0,l.jsx)(r.sN,{id:"copy-native-link",label:E.Z.Messages.COPY_LINK,action:function(){a.default.track(f.rMx.CONTEXT_MENU_LINK_COPIED,h({href:n},(0,d.v)()));s.default.copy(n)}},"copy-native-link"),(0,l.jsx)(r.sN,{id:"open-native-link",label:E.Z.Messages.OPEN_LINK,action:function(t){return function(t){a.default.track(f.rMx.CONTEXT_MENU_LINK_OPENED,h({href:n},(0,d.v)()));(0,c.q)({href:n,trusted:(0,c.r)(n,e),shouldConfirm:!0},t)}(t)}},"open-native-link")]}},870798:(n,e,t)=>{t.d(e,{Z:()=>f})
;var l=t(785893),i=t(667294),r=t(441143),o=t.n(r),a=t(769672),c=t(932847),u=t(742269),s=t(461061),d=t(959797);function f(n){var e=i.useCallback((function(){o()(null!=n,"text cannot be null");c.default.track(s.rMx.MESSAGE_MENU_GOOGLE_SEARCHED);window.open("https://www.google.com/search?q=".concat(encodeURIComponent(n)),"_blank")}),[n]);return u.FB&&null!=n&&0!==(null==n?void 0:n.length)?[(0,l.jsx)(a.sN,{id:"search-google",label:d.Z.Messages.SEARCH_WITH_GOOGLE,action:e},"search-google")]:null}}}]);
//# sourceMappingURL=ecd3eb2deb31f05507f3.js.map