"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[48657,38568],{156465:(e,n,t)=>{t.d(n,{wg:()=>b,so:()=>E,ZP:()=>y});var r=t(791462),i=t(64914),o=t(756328),l=t(356004),a=t(1812),c=t(653772),u=t(940712),s=t(108580),d=t(613258),f=t(998689),p=t(461061);function v(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function h(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],l=!0,a=!1;try{for(t=t.call(e);!(l=(r=t.next()).done);l=!0){o.push(r.value);if(n&&o.length===n)break}}catch(e){a=!0;i=e}finally{try{l||null==t.return||t.return()}finally{if(a)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return v(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t)
;if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e){return"entity_type"in e?{entityType:e.entity_type,channelId:e.channel_id}:e}function b(e){var n=h(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[l.Z],1),t=n[0],r=g(e),i=r.entityType,o=r.channelId,a=i===f.WX.EXTERNAL;if(a)return!0;var c=t.getChannel(o);return null!=c&&s.ZP.canEveryoneRole(p.Plq.VIEW_CHANNEL,c)}function E(e){var n=h(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[a.ZP,l.Z,c.Z,o.Z],4),t=n[0],r=n[1],s=n[2],p=n[3];if((0,d.Z2)(e))return!1;var v=e.guild_id,g=e.channel_id,E=e.entity_type===f.WX.EXTERNAL,y=E?t.getDefaultChannel(e.guild_id):r.getChannel(g),m=s.getGuild(v),Z=p.getStageInstanceByChannel(g);return!!(0,i.b)(u.Z,m,y,Z)&&(null!=y&&b(e,[r]))}function y(e){return(0,
r.e7)([a.ZP,l.Z,c.Z,o.Z],(function(){return E(e,[a.ZP,l.Z,c.Z,o.Z])}),[e])}},964587:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(791462),i=t(992054),o=t(653772);function l(e,n){return(0,r.cj)([o.Z,i.Z],(function(){var t=o.Z.getGuild(e),r=null!=t;null==t&&null!=n&&(t=i.Z.getCachedGuildByEventId(n));return{isMember:r,guild:t}}),[e,n])}},204292:(e,n,t)=>{t.d(n,{Q:()=>I,Z:()=>L});var r=t(785893),i=t(667294),o=t(294184),l=t.n(o),a=t(791462),c=t(489992),u=t(485923),s=t(394803),d=t(940712),f=t(629590),p=t(969225),v=t(757987),h=t(655686),g=t(194266),b=t(989982),E=t(532390),y=t(99912),m=t(666872),Z=t(431707),j=t(792193),O=t(998689),C=t(461061),N=t(959797),x=t(919569),P=t.n(x);function _(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t)
;"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){_(e,n,t[n])}))}return e}function w(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}var I;!function(e){e[e.BANNER=0]="BANNER";e[e.THUMBNAIL=1]="THUMBNAIL"}(I||(I={}));function T(e){var n=e.channel,t=e.onClick,o=(0,a.e7)([d.Z],(function(){return d.Z.can(C.Plq.MANAGE_EVENTS,n)}),[n]),p=(0,a.e7)([d.Z],(function(){return!n.isGuildVocal()||d.Z.can(C.Plq.CONNECT,n)}),[n]),h=i.useMemo((function(){return(0,
u.Z)(n)}),[n]),g=(0,s.KS)(n);return(0,r.jsx)(v.ZP,{text:N.Z.Messages.GUILD_EVENT_CANNOT_CONNECT,shouldShow:!p&&null!=t,children:function(e){var i;return(0,r.jsxs)(f.Z,w(k({},e),{className:l()(P().inline,P().channelContainer,(i={},_(i,P().channelContainerEnabled,p&&null!=t),_(i,P().channelContainerDisabled,!p&&null!=t),i)),onClick:t,children:[(0,r.jsx)(v.ZP,{text:N.Z.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,shouldShow:o&&h&&p&&null!=t,children:function(e){return null!=g?(0,r.jsx)(g,w(k({},e),{width:20,height:20,className:P().icon})):null}}),(0,r.jsx)(c.xv,{variant:"text-sm/normal",color:"none",className:P().channelLocation,children:n.name})]}))}})}function S(e){var n=e.guild,t=e.channel,i=e.onJoinClick,o=e.handleLocationClick,a=e.location,u=e.isExternal;return e.isHub?null==n?(0,r.jsx)("div",{}):(0,r.jsxs)("div",{className:P().inline,children:[(0,r.jsx)(p.Z,{className:P().guildIcon,size:p.Z.Sizes.MINI,active:!0,guild:n}),(0,r.jsx)(c.xv,{variant:"text-sm/normal",
color:"header-secondary",children:null==n?void 0:n.name})]}):null!=t?(0,r.jsx)(T,{channel:t,onClick:i}):(0,r.jsxs)(f.Z,{className:P().inline,onClick:o,children:[(0,r.jsx)(h.Z,{height:20,width:20,className:l()(P().channelContainer,P().icon)}),(0,r.jsx)(c.xv,{className:u?P().externalLocation:P().channelLocation,variant:"text-sm/normal",children:(0,g.m)(a,!0)})]})}function L(e){var n,t=e.className,i=e.guild,o=e.channel,a=e.creator,c=e.userCount,u=e.name,s=e.entityType,d=e.description,p=e.startTime,v=e.imageLocation,h=void 0===v?I.BANNER:v,g=e.imageSource,C=e.isActive,N=e.isUserLurking,x=e.isEnded,k=e.isJoined,w=void 0!==k&&k,T=e.isMember,L=void 0!==T&&T,D=e.isHub,M=void 0!==D&&D,G=e.speakers,A=e.speakerCount,U=e.rsvped,R=e.canInvite,V=e.location,H=e.truncate,B=e.onContextMenu,J=e.onJoinClick,X=e.onJoinGuildClick,F=e.onGoToGuildClick,W=e.onRsvpClick,q=e.onStartClick,z=e.onInviteClick,Y=e.onEndClick,K=e.onClick,Q=e.isNew,$=(0,b.Q)(o,s),ee=s===O.WX.EXTERNAL,ne=ee?function(e){
return e.stopPropagation()}:void 0;return(0,r.jsxs)(f.Z,{onClick:K,onContextMenu:B,className:l()(P().card,(n={},_(n,P().joined,w),_(n,P().lurking,N),n),t),children:[h===I.BANNER&&(0,r.jsx)(y.Z,{source:g}),(0,r.jsx)(m.ZP,{userCount:c,creator:a,name:u,description:d,startTime:p,imageSource:h===I.THUMBNAIL?g:null,isActive:C,isEnded:x,truncate:H,guildId:null==i?void 0:i.id,eventType:s,isHub:M,isNew:Q}),C&&null!=i&&null!=G&&A>0&&(0,r.jsx)(j.Z,{guild:i,speakers:G,speakerCount:A,className:P().spacing}),(0,r.jsx)("hr",{className:P().divider}),(0,r.jsxs)("div",{className:l()(P().inline,P().footer),children:[(0,r.jsx)(S,{guild:i,channel:o,onJoinClick:J,handleLocationClick:ne,location:V,isExternal:ee,isHub:M}),M?(0,r.jsx)(Z.Z,{isActive:C,isUserLurking:N,isMember:L,rsvped:U,onRsvpClick:W,onJoinGuildClick:X,onGoToGuildClick:F,guildName:null==i?void 0:i.name,canInvite:R,isChannelPublic:$,onInviteClick:z}):(0,r.jsx)(E.ZP,{entityType:s,isJoined:w,isActive:C,isUserLurking:N,rsvped:U,canInvite:R,
isChannelPublic:$,onContextMenu:B,onJoinClick:J,onRsvpClick:W,onStartClick:q,onInviteClick:z,onEndClick:Y})]})]})}},248657:(e,n,t)=>{t.r(n);t.d(n,{default:()=>fe});var r=t(785893),i=t(667294),o=t(496486),l=t.n(o),a=t(277563),c=t(489992),u=t(320646),s=t(9523),d=t(825816),f=t(1812),p=t(210854),v=t(653772),h=t(718375),g=t(191940),b=t(629590),E=t(272729),y=t(695756),m=t(719455),Z=t(67416),j=t(897576),O=t(932847),C=t(90816),N=t(368750),x=t(498814),P=t(217891),_=t(791462),k=t(218024),w=t(630695),I=t(312855),T=t(756328),S=t(356004),L=t(940712),D=t(733285),M=t(859023),G=t(455040),A=t(613258),U=t(156465),R=t(594743);var V=t(964587),H=t(87328),B=t(275352),J=t(204292),X=t(952580),F=t(461061);function W(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function q(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e)
;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}function z(e){var n,t=e.guildEvent,i=e.guildId,o=e.truncate,l=e.onActionTaken,a=e.className,c=e.isNew,u=t.id,s=t.guild_id,d=t.channel_id,f=t.creator_id,p=t.name,h=t.description,g=t.scheduled_start_time,b=t.user_count,E=t.entity_type,y=t.image,m=(0,_.e7)([A.ZP],(function(){return A.ZP.hasRsvp(u,s)}),[u,s]),Z=(0,_.e7)([w.Z],(function(){return w.Z.isLurking(s)}),[s]),j=(0,_.e7)([T.Z],(function(){return T.Z.getStageInstanceByChannel(d)}),[d]),O=(0,_.e7)([S.Z],(function(){return S.Z.getChannel(d)}),[d]),C=(0,_.e7)([M.default],(function(){return M.default.getUser(f)}),[f]),N=function(e){var n=e.id,t=e.data,r=t.guild,i=t.instance,o=t.speakers,l=t.participantCount,a=e.context,c=(0,
_.e7)([v.Z,S.Z],(function(){var e;return v.Z.getGuild(null===(e=S.Z.getChannel(n))||void 0===e?void 0:e.getGuildId())}),[n]),u=(0,_.e7)([T.Z],(function(){return T.Z.getStageInstanceByChannel(n)}),[n]),s=(0,R.w8)(n,I.pV.SPEAKER),d=(0,R.Rk)(n),f=null!=c?c:r,p=null!=u?u:i,h=null!=u?s:o,g=(null!=u?d:l)-h.length;return{channelId:n,guild:f,stage:p,speakers:h,audienceCount:g,context:a}}({id:d,data:{guild:null,instance:j,speakers:[],participantCount:0},context:{guildId:s,instance:j}}).speakers,x=(0,_.e7)([D.Z],(function(){return D.Z.getChannelId()})),P=(0,A.xt)(t),z=(0,A.Z2)(t),Y=x===d&&null!=x&&P,K=N.filter((function(e){return e.type===I.Ui.VOICE})),Q=K.length,$=(0,_.e7)([L.Z],(function(){return L.Z.can(F.Plq.CONNECT,O)}),[O]),ee=(0,U.ZP)(t),ne=(0,V.Z)(s,u),te=ne.isMember,re=ne.guild,ie=(0,X.Z)({guild:re,channel:O,guildScheduledEvent:t,isActive:P,rsvped:m,onActionTaken:l}),oe=(0,k.Z)(i),le=Z?void 0:function(){return(0,G.bO)({eventId:u,parentGuildId:i})};return(0,r.jsx)(J.Z,q(function(e){
for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){W(e,n,t[n])}))}return e}({guild:re,channel:O,creator:C,userCount:b,name:p,entityType:E,description:null!=h?h:void 0,location:null!==(n=(0,H.cS)(t))&&void 0!==n?n:void 0,startTime:g,imageSource:null!=y?(0,B.Z)(t):void 0,imageLocation:J.Q.THUMBNAIL,isActive:P,isUserLurking:Z,isEnded:z,isJoined:Y,isMember:te,isHub:oe,speakers:K,canConnect:$,speakerCount:Q,rsvped:m,canInvite:ee},ie),{className:a,onClick:le,truncate:o,isNew:c}))}var Y=t(7046),K=t(422877),Q=t(959797),$=t(596113),ee=t.n($);function ne(e){var n=e.guildId,t=e.onClose,i=d.Z.useExperiment({guildId:n}).showHubEventsList,o=(0,_.e7)([v.Z,L.Z],(function(){var e=v.Z.getGuild(n);return L.Z.can(F.Plq.MANAGE_ROLES,e)}),[n]),l=(0,_.e7)([v.Z],(function(){
var e=v.Z.getGuild(n);return i&&(null==e?void 0:e.hasFeature(F.oNc.HUB))}),[n,i]);return(0,r.jsxs)("div",{className:ee().container,children:[(0,r.jsx)(K.Z,{children:(0,r.jsx)("div",{className:ee().circle,children:(0,r.jsx)(y.Z,{height:40,width:40,className:ee().icon})})}),(0,r.jsx)(c.X6,{color:"header-primary",variant:"heading-xl/semibold",className:ee().title,children:l?Q.Z.Messages.HUB_EVENTS_HEADER_TITLE:Q.Z.Messages.GUILD_EVENT_MODAL_EMPTY_TITLE}),(0,r.jsx)(c.xv,{color:"header-secondary",variant:"text-sm/normal",className:ee().subtitle,children:l?Q.Z.Messages.HUB_EVENTS_HEADER_DESCRIPTION:Q.Z.Messages.GUILD_EVENT_MODAL_EMPTY_SUBTITLE}),o&&(0,r.jsx)(c.xv,{color:"header-secondary",variant:"text-sm/normal",className:ee().roleTip,children:Q.Z.Messages.GUILD_EVENT_ROLE_TIP.format({onClick:function(){Y.Z.open(n,F.pNK.ROLES);t()}})})]})}var te=t(143074),re=t(998689),ie=t(977898),oe=t(555175),le=t.n(oe);function ae(e,n,t,r,i,o,l){try{var a=e[o](l),c=a.value}catch(e){t(e);return}
a.done?n(c):Promise.resolve(c).then(r,i)}function ce(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function l(e){ae(o,r,i,l,a,"next",e)}function a(e){ae(o,r,i,l,a,"throw",e)}l(void 0)}))}}function ue(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function se(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}var de=function(e,n){var t,r,i,o,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},
"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;(r=0,i)&&(o=[2&o[0],i.value]);switch(o[0]){case 0:case 1:i=o;break;case 4:l.label++;return{value:o[1],done:!1};case 5:l.label++;r=o[1];o=[0];continue;case 7:o=l.ops.pop();l.trys.pop();continue;default:if(!(i=l.trys,i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){l.label=o[1];break}if(6===o[0]&&l.label<i[1]){l.label=i[1];i=o;break}if(i&&l.label<i[2]){l.label=i[2];l.ops.push(o);break}i[2]&&l.ops.pop();l.trys.pop();continue}o=n.call(e,l)}catch(e){o=[6,e];r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};function fe(e){var n=e.transitionState,o=e.onClose,_=e.guildId,k=(0,E.Dt)(),w=(0,
x.Z)(_),I=(0,P.ZP)(_),T=i.useRef(h.ZP.ackMessageId(_,ie.W.GUILD_EVENT)),S=(0,te.Z)();i.useEffect((function(){N.Z.getGuildEventUserCounts(_);N.Z.getGuildEventsForCurrentUser(_)}),[_]);i.useEffect((function(){var e=v.Z.getGuild(_);if(null==e?void 0:e.hasFeature(F.oNc.HUB)){if(d.Z.getCurrentConfig({guildId:_}).showHubEventsList){var n=f.ZP.getDefaultChannel(_);null!=n&&s.c(n.id)}}}),[_]);i.useEffect((function(){O.default.track(F.rMx.OPEN_MODAL,{type:re.zw,guild_id:_,guild_events_count:I.length})}),[]);i.useEffect((function(){l()(I).map((function(e){return e.creator_id})).filter(C.lm).uniq().forEach((function(e){p.Z.requestMember(_,e)}))}),[_,I]);i.useEffect((function(){null!=_&&(0,u.Ju)(_,ie.W.GUILD_EVENT)}),[_]);return(0,r.jsxs)(Z.Y0,{size:Z.Cg.MEDIUM,transitionState:n,"aria-labelledby":k,children:[(0,r.jsxs)(Z.xB,{className:le().header,children:[(0,r.jsx)(y.Z,{className:le().icon}),(0,r.jsx)(c.X6,{id:k,variant:"heading-md/semibold",
children:I.length>0?Q.Z.Messages.GUILD_EVENTS_PLURAL.format({number:I.length}):Q.Z.Messages.GUILD_EVENTS}),w&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:le().divider,children:"|"}),(0,r.jsx)(g.Co,{size:g.Co.Sizes.MIN,onClick:function(){(0,j.ZD)(ce((function(){var e,n;return de(this,(function(i){switch(i.label){case 0:return[4,Promise.all([t.e(40532),t.e(15793),t.e(30504),t.e(42348),t.e(20856),t.e(91147),t.e(42726),t.e(19758),t.e(77588)]).then(t.bind(t,988732))];case 1:e=i.sent(),n=e.default;return[2,function(e){return(0,r.jsx)(n,se(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){ue(e,n,t[n])}))}return e}({},e),{guildId:_}))}]}}))})),S)},innerClassName:le().button,children:Q.Z.Messages.SCHEDULE_EVENT})]}),(0,r.jsx)(b.Z,{
onClick:o,className:le().iconButton,"aria-label":Q.Z.Messages.CLOSE,children:(0,r.jsx)(m.Z,{className:le().icon})})]}),(0,r.jsx)(Z.hz,{className:le().content,children:I.length>0?I.map((function(e){return(0,r.jsx)(z,{guildEvent:e,guildId:_,onActionTaken:o,className:le().eventCard,isNew:null!=T.current&&a.default.compare(e.id,T.current)>0},e.id)})):(0,r.jsx)(ne,{guildId:_,onClose:o})})]})}},792193:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(785893),i=(t(667294),t(294184)),o=t.n(i),l=t(489992),a=t(993167),c=t(766936),u=t(959797),s=t(811948),d=t.n(s);function f(e){var n=e.guild,t=e.speakers,i=e.speakerCount,s=e.className,f=t.slice(0,5),p=f.map((function(e){var t,i;return(0,r.jsxs)("div",{className:d().speakerContainer,children:[(0,r.jsx)(c.ZP,{src:null==e||null===(t=e.user)||void 0===t?void 0:t.getAvatarURL(n.id,20),size:c.ZP.Sizes.SIZE_20,className:d().avatar,"aria-label":"".concat(null==e?void 0:e.userNick,"-avatar")}),(0,r.jsx)("div",{className:d().textInGridContainer,children:(0,r.jsx)(l.xv,{
color:"header-secondary",variant:"text-sm/normal",className:d().textInGrid,children:null==e?void 0:e.userNick})})]},null==e||null===(i=e.user)||void 0===i?void 0:i.id)})),v=i-f.length;return(0,r.jsxs)("div",{className:o()(d().grid,s),children:[p,v>0&&(0,r.jsxs)("div",{className:d().speakerContainer,children:[(0,r.jsx)("div",{className:d().iconMicrophone,children:(0,r.jsx)(a.Z,{height:12})}),(0,r.jsx)(l.xv,{color:"header-secondary",variant:"text-sm/normal",className:d().textInGrid,children:u.Z.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({count:v})})]})]})}},952580:(e,n,t)=>{t.d(n,{Z:()=>S});var r=t(785893),i=(t(667294),t(791462)),o=t(489992),l=t(281081),a=t(354290),c=t(345209),u=t(176822),s=t(655695),d=t(338588),f=t(1812),p=t(653772),v=t(940712),h=t(30741),g=t(897576),b=t(932847),E=t(726283),y=t(427809),m=t(875684),Z=t(156465),j=t(989982),O=t(694470),C=t(998689),N=t(461061),x=t(959797);function P(e,n,t,r,i,o,l){try{var a=e[o](l),c=a.value}catch(e){t(e)
;return}a.done?n(c):Promise.resolve(c).then(r,i)}function _(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function l(e){P(o,r,i,l,a,"next",e)}function a(e){P(o,r,i,l,a,"throw",e)}l(void 0)}))}}function k(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){k(e,n,t[n])}))}return e}function I(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){
return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}var T=function(e,n){var t,r,i,o,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;(r=0,i)&&(o=[2&o[0],i.value]);switch(o[0]){case 0:case 1:i=o;break;case 4:l.label++;return{value:o[1],done:!1};case 5:l.label++;r=o[1];o=[0];continue;case 7:o=l.ops.pop();l.trys.pop();continue;default:if(!(i=l.trys,i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){l.label=o[1];break}
if(6===o[0]&&l.label<i[1]){l.label=i[1];i=o;break}if(i&&l.label<i[2]){l.label=i[2];l.ops.push(o);break}i[2]&&l.ops.pop();l.trys.pop();continue}o=n.call(e,l)}catch(e){o=[6,e];r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};function S(e){var n=e.guild,P=e.channel,k=e.guildScheduledEvent,S=e.isActive,L=e.rsvped,D=e.onActionTaken,M=function(e){e.stopPropagation();L?y.Z.deleteRsvpForGuildEvent(U,V):y.Z.createRsvpForGuildEvent(U,V)},G=function(e){e.stopPropagation();var n=f.ZP.getDefaultChannel(V);(0,g.pT)();(0,s.XU)(V,null==n?void 0:n.id)},A=k.scheduled_start_time,U=k.id,R=k.entity_type,V=k.guild_id,H=(0,m.o)(null==n?void 0:n.id,P),B=(0,Z.ZP)(k),J=(0,j.T)(null==P?void 0:P.id,k.id),X=(0,O.ub)(A).withinStartWindow,F=(0,i.e7)([v.Z],(function(){return!(null==P?void 0:P.isGuildVocal())||v.Z.can(N.Plq.CONNECT,P)}),[P]),W=(0,c.J)(V);function q(){return(q=_((function(e){return T(this,(function(n){switch(n.label){case 0:e.stopPropagation()
;return[4,a.Z.joinGuild(V)];case 1:n.sent();p.Z.addConditionalChangeListener((function(){if(null==p.Z.getGuild(V))return!0;S||M(e);G(e);return!1}));return[2]}}))}))).apply(this,arguments)}return{onDeleteClick:H?function(e){e.stopPropagation();H&&!S&&(0,g.h7)((function(e){return(0,r.jsx)(h.default,I(w({},e),{header:x.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,confirmText:x.Z.Messages.DELETE,cancelText:x.Z.Messages.CANCEL,onConfirm:function(){return y.Z.deleteGuildEvent(U,V)},children:(0,r.jsx)(o.xv,{variant:"text-md/normal",children:x.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY})}))}))}:void 0,onContextMenu:function(e){e.stopPropagation();null!=n&&(0,l.jW)(e,_((function(){var e,i;return T(this,(function(o){switch(o.label){case 0:return[4,Promise.all([t.e(40532),t.e(19887),t.e(20914),t.e(55432),t.e(92072),t.e(66722),t.e(49832),t.e(87997),t.e(67939)]).then(t.bind(t,157365))];case 1:e=o.sent(),i=e.default;return[2,function(e){return(0,r.jsx)(i,w({guildEventId:U,channel:P,guildId:n.id},e))
}]}}))})))},onJoinClick:F||W?function(e){e.stopPropagation();if(W){null==D||D();(0,u.Z)(V)}else if(null==P?void 0:P.isGuildStageVoice()){(0,d.Cq)(P);null==D||D()}else if(null==P?void 0:P.isGuildVoice()){y.Z.joinVoiceEvent(P.guild_id,P.id);null==D||D()}}:void 0,onRsvpClick:M,onStartClick:H&&X?function(e){e.stopPropagation();(0,g.ZD)(_((function(){var e,n;return T(this,(function(i){switch(i.label){case 0:return[4,Promise.all([t.e(40532),t.e(55432),t.e(27903),t.e(14088)]).then(t.bind(t,527903))];case 1:e=i.sent(),n=e.default;return[2,function(e){return(0,r.jsx)(n,I(w({},e),{event:k,onSuccess:D}))}]}}))})))}:void 0,onInviteClick:function(e){e.stopPropagation();if(null!=n)if(B&&J)(0,g.ZD)(_((function(){var e,i;return T(this,(function(o){switch(o.label){case 0:return[4,Promise.all([t.e(40532),t.e(15793),t.e(32895),t.e(30504),t.e(42348),t.e(20856),t.e(74581),t.e(99591)]).then(t.bind(t,715793))];case 1:e=o.sent(),i=e.default;return[2,function(e){return(0,r.jsx)(i,I(w({},e),{guild:n,channel:P,
guildScheduledEvent:k,source:N.t4x.GUILD_EVENTS}))}]}}))})));else{var i=function(e){var n=e.guildId,t=e.guildEventId;return"https://discord.com/events/".concat(n,"/").concat(t)}({guildId:V,guildEventId:U});(0,E.JG)(i);b.default.track(N.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED,{guild_id:V,guild_scheduled_event_id:U})}},onEndClick:H&&R===C.WX.EXTERNAL&&S?function(e){e.stopPropagation();if(H){var n=function(){y.Z.endEvent(U,V);(0,g.pT)()};(0,g.h7)((function(e){return(0,r.jsx)(h.default,I(w({},e),{header:x.Z.Messages.END_EVENT,confirmText:x.Z.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,cancelText:x.Z.Messages.CANCEL,onConfirm:n,children:(0,r.jsx)(o.xv,{variant:"text-md/normal",children:x.Z.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE})}))}))}}:void 0,onJoinGuildClick:function(e){return q.apply(this,arguments)},onGoToGuildClick:G}}}}]);
//# sourceMappingURL=48e5c5d5fb3de36bb021.js.map