"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[32557],{932557:(e,n,t)=>{t.r(n);t.d(n,{default:()=>I});var r=t(785893),o=(t(667294),t(791462)),l=t(600341),c=t(281081),u=t(804626),a=t(370442),s=t(239396),i=t(829038),d=t(110553),f=t(674606),g=t(430923),O=t(769672),b=t(133124),Z=t(18416),p=t(356004),S=t(934714),h=t(859023),M=t(997163),j=t(461061),E=t(866452),v=t(959797);function y(e){return(0,o.e7)([Z.Z],(function(){var n=Z.Z.getActiveStreamForUser(e.ownerId);return null!=n&&(0,M.V9)(n)===(0,M.V9)(e)}))}function I(e){var n=e.stream,t=e.analyticsContext,Z=e.appContext,I=e.exitFullscreen,w=e.onSelect,T=y(n),A=function(e){var n=y(e),t=(0,b.Z)(e.ownerId,E.Yn.STREAM);return n?t:null}(n),m=function(e){var n,t=(0,o.e7)([g.Z],(function(){return null!=g.Z.getRemoteSessionId()})),l=(0,o.e7)([p.Z],(function(){return p.Z.getChannel(e.channelId)}),[e.channelId]),c=y(e),s=h.default.getCurrentUser(),i=null!=s&&e.ownerId===s.id
;n=i?v.Z.Messages.STOP_STREAMING:c?v.Z.Messages.STOP_WATCHING:v.Z.Messages.WATCH_STREAM;return t||!i&&c&&(null==l?void 0:l.isGuildStageVoice())?null:(0,r.jsx)(O.sN,{id:"watch",label:n,action:c?function(){(0,a.g)((0,M.V9)(e))}:function(){u.default.selectVoiceChannel(e.channelId);(0,a.rn)(e)}})}(n),C=function(e){var n=y(e),t=(0,o.e7)([S.Z],(function(){return S.Z.isLocalMute(e.ownerId,E.Yn.STREAM)})),c=h.default.getCurrentUser(),u=null!=c&&e.ownerId===c.id;return!n||u?null:(0,r.jsx)(O.S8,{id:"mute",label:v.Z.Messages.SOUND_MUTE,action:function(){l.Z.toggleLocalMute(e.ownerId,E.Yn.STREAM)},checked:t})}(n),P=(0,f.Z)(n,Z,I),x=(0,d.Z)(n.channelId,n.ownerId),U=(0,i.Z)(n.channelId),_=(0,o.e7)([p.Z],(function(){return p.Z.getChannel(n.channelId)}),[n.channelId]);return(0,r.jsx)(s.Z,{context:t,object:j.qAy.CONTEXT_MENU,children:(0,r.jsxs)(O.ZP,{navId:"stream-context",onClose:c.Zy,"aria-label":v.Z.Messages.STREAM_ACTIONS_MENU_LABEL,onSelect:w,children:[(0,r.jsxs)(O.kS,{children:[m,C]}),(0,
r.jsx)(O.kS,{children:A}),(0,r.jsxs)(O.kS,{children:[(null==_?void 0:_.isGuildStageVoice())?null:U,x,T&&P]})]})})}},133124:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(785893),o=(t(667294),t(791462)),l=t(600341),c=t(769672),u=t(42944),a=t(934714),s=t(859023),i=t(405959),d=t(742269),f=t(866452),g=t(959797);function O(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){O(e,n,t[n])}))}return e}function Z(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
;n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}function p(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f.Yn.DEFAULT,O=(0,o.e7)([a.Z],(function(){return a.Z.getLocalVolume(e,t)}),[e,t]),p=e===(null===(n=s.default.getCurrentUser())||void 0===n?void 0:n.id),S=t===f.Yn.STREAM;return p?null:(0,r.jsx)(c.II,{id:"user-volume",label:S?g.Z.Messages.STREAM_VOLUME:g.Z.Messages.USER_VOLUME,control:function(n,o){return(0,r.jsx)(u.Z,Z(b({},n),{ref:o,value:(0,i.P)(O),maxValue:d.FB?200:100,onChange:function(n){return l.Z.setLocalVolume(e,(0,i.A)(n),t)},"aria-label":S?g.Z.Messages.STREAM_VOLUME:g.Z.Messages.USER_VOLUME}))}})}}}]);
//# sourceMappingURL=55ecb401d4f60a5904ff.js.map