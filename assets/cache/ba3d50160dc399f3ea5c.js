"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[65103],{987928:(e,n,t)=>{t.d(n,{Z:()=>S});var r=t(226135),a=t(206321),o=t(531243),s=t(976703),i=t(733399),l=t(38415),u=t(932291),c=t(301818),d=t(365063),f=t(888312),h=t(555784),m=t(178517),v=t(556933),g=t(835105),Z=t(605390),p=t(110042),b=t(915306),y=t(806499),E=t(806008),x=t(151843),j=t(485923),T=t(461061);function S(e,n){switch(e.type){case T.d4z.DM:return r.Z;case T.d4z.GROUP_DM:return Z.Z;case T.d4z.GUILD_ANNOUNCEMENT:return e.isNSFW()?v.Z:(0,j.Z)(e)?m.Z:h.Z;case T.d4z.GUILD_TEXT:return e.id===(null==n?void 0:n.rulesChannelId)?o.Z:e.isNSFW()?l.Z:(0,j.Z)(e)?i.Z:s.Z;case T.d4z.GUILD_FORUM:return e.isNSFW()?d.Z:(0,j.Z)(e)?c.Z:u.Z;case T.d4z.GUILD_STAGE_VOICE:return E.Z;case T.d4z.GUILD_VOICE:return(0,j.Z)(e)?y.Z:b.Z;case T.d4z.ANNOUNCEMENT_THREAD:case T.d4z.PUBLIC_THREAD:return e.isNSFW()?g.Z:e.isForumPost()?f.Z:x.Z;case T.d4z.PRIVATE_THREAD:return e.isNSFW()?g.Z:p.Z;case T.d4z.GUILD_DIRECTORY:
return a.Z;default:return null}}},28633:(e,n,t)=>{t.d(n,{r7:()=>E,FO:()=>x,nA:()=>j,qQ:()=>T});var r=t(667294),a=t(496486),o=t.n(a),s=t(791462),i=t(103686),l=t(356004),u=t(940712),c=t(718375),d=t(90816),f=t(346529),h=t(973381),m=t(882154),v=t(668479),g=t(682684),Z=t(437803),p=t(609993);function b(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function y(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],s=!0,i=!1;try{for(t=t.call(e);!(s=(r=t.next()).done);s=!0){o.push(r.value);if(n&&o.length===n)break}}catch(e){i=!0;a=e}finally{try{s||null==t.return||t.return()}finally{if(i)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return b(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t)
;if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(){r.useEffect((function(){(0,Z.A_)()}),[])}function x(e){var n=function(e){var n=(0,s.Wu)([u.Z,h.Z,l.Z],(function(){return o()(h.Z.getThreadsForParent(e.guild_id,e.id)).values().map((function(e){var n=e.id;return l.Z.getChannel(n)})).filter(d.lm).filter((function(e){return u.Z.can(p.Pl.VIEW_CHANNEL,e)})).map((function(e){return e.id})).value()}),[]);return r.useMemo((function(){return o()(n).sort((function(e,n){return f.Z.compare(c.ZP.lastMessageId(e),c.ZP.lastMessageId(n))})).reverse().value()}),[n])}(e),t=y((0,s.e7)([v.Z],(function(){return o().partition(n,(function(e){return v.Z.hasJoined(e)}))}),[n],s.pF),2);return{joinedThreadIds:t[0],unjoinedThreadIds:t[1]}}function j(e){var n=(0,
s.Wu)([u.Z,h.Z,l.Z],(function(){return o()(h.Z.getThreadsForGuild(e)).values().map((function(e){return o().values(e)})).flatten().map((function(e){var n=e.id;return l.Z.getChannel(n)})).filter(d.lm).filter((function(e){return u.Z.can(p.Pl.VIEW_CHANNEL,e)})).map((function(e){return e.id})).value()}),[]);return r.useMemo((function(){return o()(n).sort((function(e,n){return f.Z.compare(c.ZP.lastMessageId(e),c.ZP.lastMessageId(n))})).reverse().value()}),[n])}function T(e,n,t){var a=(0,s.cj)([m.Z],(function(){return{loading:m.Z.isLoading(e.id,n,t),isInitialLoad:m.Z.isInitialLoad,canLoadMore:m.Z.canLoadMore,nextOffset:m.Z.nextOffset}})),c=a.canLoadMore,d=a.loading,f=a.nextOffset,h=a.isInitialLoad,v=r.useCallback((function(){u.Z.can(p.Pl.READ_MESSAGE_HISTORY,e)&&g.Z.loadArchivedThreads(e.guild_id,e.id,n,t,f)}),[e,n,t,f]);r.useEffect((function(){h&&v()}),[e.id,n,t,h]);r.useEffect((function(){i.Z.resort(e.id)}),[e.id]);return{threadIds:(0,s.Wu)([m.Z,l.Z,u.Z],(function(){
return o()(m.Z.getThreads(e.id,n,t)).filter((function(e){var n=l.Z.getChannel(e);return null!=n&&u.Z.can(p.Pl.VIEW_CHANNEL,n)})).value()})),canLoadMore:c,loading:d||h,loadMore:v}}},365103:(e,n,t)=>{t.d(n,{Z:()=>G});var r=t(785893),a=t(667294),o=t(294184),s=t.n(o),i=t(791462),l=t(489992),u=t(940712),c=t(191940),d=t(629590),f=t(31165),h=t(719455),m=t(151843),v=t(682684),g=t(551821),Z=t(437803),p=t(880068),b=t(357409),y=t(959797),E=t(170471),x=t.n(E);function j(e){var n=e.channel,t=e.header,a=e.startThread,o=(0,g.NE)(n),s=(0,g.Xu)(n);return(0,r.jsxs)("div",{className:x().container,children:[(0,r.jsxs)("div",{className:x().iconContainer,children:[(0,r.jsx)("div",{className:x().icon,children:(0,r.jsx)(m.Z,{width:36,height:36})}),(0,r.jsx)(b.Z,{className:x().stars})]}),(0,r.jsx)(l.X6,{className:x().header,variant:"heading-xl/semibold",children:t}),(0,r.jsx)(l.xv,{color:"header-secondary",variant:"text-md/normal",children:y.Z.Messages.THREAD_BROWSER_EMPTY_STATE_SUBTEXT}),o||s?(0,r.jsx)(c.Co,{
className:x().cta,onClick:a,children:y.Z.Messages.CREATE_THREAD}):null]})}var T=t(258501),S=t(610687),_=t.n(S);function w(e){var n=e.channel,t=e.threadIds,o=e.startThread,i=e.gotoThread,l=a.useCallback((function(e){return(0,r.jsx)(T.Z,{threadId:t[e.row],gotoThread:i},"".concat(e.section,"-").concat(e.row))}),[t,i]);return 0===t.length?(0,r.jsx)(j,{channel:n,header:y.Z.Messages.THREAD_BROWSER_EMPTY_STATE_HEADER,startThread:o}):(0,r.jsx)(p.ZP,{className:s()(_().list,_().activeThreadsList),fade:!0,sections:[t.length],sectionHeight:0,rowHeight:80,renderRow:l,renderSection:function(){return null},chunkSize:20})}var N=t(451964),O=t(82961),R=t(28633),I=new Set;function A(e){var n=e.channel,t=e.startThread,o=e.gotoThread,s=(0,R.FO)(n),i=s.joinedThreadIds,l=s.unjoinedThreadIds,u=(0,R.qQ)(n,N.z.LATEST_ACTIVITY,I),c=u.threadIds,d=u.canLoadMore,f=u.loading,h=u.loadMore,m=a.useRef(null);(0,R.r7)();var v=a.useCallback((function(e){var n=0===e.section?i:1===e.section?l:c;return(0,r.jsx)(T.Z,{
threadId:n[e.row],gotoThread:o},"".concat(e.section,"-").concat(e.row))}),[c,i,l,o]),g=a.useCallback((function(e){return 0===e.section?(0,r.jsx)(M,{text:y.Z.Messages.THREAD_BROWSER_JOINED_HEADER.format({count:i.length})},e.section):1===e.section?(0,r.jsx)(M,{text:y.Z.Messages.THREAD_BROWSER_OTHER_HEADER.format({count:l.length})},e.section):(0,r.jsx)(M,{text:y.Z.Messages.THREAD_BROWSER_ARCHIVED_HEADER},e.section)}),[i.length,l.length]),Z=a.useCallback((function(e){return 1===e&&i.length>0||2===e&&(i.length>0||l.length>0)?64:32}),[i.length,l.length]),b=a.useCallback((function(){var e,n=null===(e=m.current)||void 0===e?void 0:e.getScrollerState();if(null!=n){var t=n.scrollTop+n.offsetHeight;n.scrollHeight-t<200&&h()}}),[h]);return 0===i.length&&0===l.length&&0===c.length?f?(0,r.jsx)("div",{className:_().list,children:(0,r.jsx)(O.Z,{className:_().spinner})}):(0,r.jsx)("div",{className:_().list,children:(0,r.jsx)(j,{channel:n,header:y.Z.Messages.THREAD_BROWSER_EMPTY_STATE_HEADER,
startThread:t})}):(0,r.jsx)(p.ZP,{ref:m,className:_().list,fade:!0,sections:[i.length,l.length,c.length],sectionHeight:Z,rowHeight:80,renderRow:v,renderSection:g,chunkSize:20,onScroll:d?b:void 0})}function M(e){var n=e.text;return(0,r.jsx)(l.xv,{color:"header-secondary",variant:"text-xs/bold",className:_().sectionHeader,children:n})}var C=t(665357),P=t(504003),D=t(461061),k=t(386545),H=t.n(k);function L(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function W(e,n,t,r,a,o,s){try{var i=e[o](s),l=i.value}catch(e){t(e);return}i.done?n(l):Promise.resolve(l).then(r,a)}function B(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){
return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){B(e,n,t[n])}))}return e}function F(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],s=!0,i=!1;try{for(t=t.call(e);!(s=(r=t.next()).done);s=!0){o.push(r.value);if(n&&o.length===n)break}}catch(e){i=!0;a=e}finally{try{s||null==t.return||t.return()}finally{if(i)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return L(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return L(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var U=function(e,n){
var t,r,a,o,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;(r=0,a)&&(o=[2&o[0],a.value]);switch(o[0]){case 0:case 1:a=o;break;case 4:s.label++;return{value:o[1],done:!1};case 5:s.label++;r=o[1];o=[0];continue;case 7:o=s.ops.pop();s.trys.pop();continue;default:if(!(a=s.trys,a=a.length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){s.label=o[1];break}if(6===o[0]&&s.label<a[1]){s.label=a[1];a=o;break}if(a&&s.label<a[2]){s.label=a[2];s.ops.push(o);break}a[2]&&s.ops.pop();s.trys.pop();continue}o=n.call(e,s)}catch(e){o=[6,e];r=0}finally{t=a=0}if(5&o[0])throw o[1]
;return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}};function G(e){var n,t,o,f,p,b,E,x,j,T,S,_,N,O,R,I,M,k,L=e.channel,B=e.className,G=e.onClose,V=(0,i.e7)([u.Z],(function(){return u.Z.can(D.Plq.READ_MESSAGE_HISTORY,L)})),q=(0,g.cD)(L),X=function(){G();(0,C.R6)(L,void 0,"Thread Browser Empty State")},Q=a.useCallback((function(e,n){G();(0,C.ok)(e,!n,P.on.BROWSER)}),[G]),$=(n=L.guild_id,t=L.id,o=F(a.useState(""),2),f=o[0],p=o[1],b=F(a.useState(!1),2),E=b[0],x=b[1],j=F(a.useState(!1),2),T=j[0],S=j[1],_=F(a.useState([]),2),N=_[0],O=_[1],R=(k=(M=function(){var e;return U(this,(function(r){switch(r.label){case 0:if(null==f||""===f)return[2];if(E)return[2];x(!0);r.label=1;case 1:r.trys.push([1,,3,4]);return[4,v.Z.searchThreads(n,t,f)];case 2:e=r.sent();S(!0);O(e);return[3,4];case 3:x(!1);return[7];case 4:return[2]}}))},function(){var e=this,n=arguments;return new Promise((function(t,r){var a=M.apply(e,n);function o(e){W(a,t,r,o,s,"next",e)}function s(e){W(a,t,r,o,s,"throw",e)}o(void 0)}))}),
function(){return k.apply(this,arguments)}),I=function(e){p(e);0===e.length&&S(!1)},{query:f,setQuery:I,isLoading:E,hasResults:T,submit:R,results:N});a.useEffect((function(){(0,Z.A_)()}),[]);return(0,r.jsx)("div",{className:s()(B,H().container),children:(0,r.jsx)(l.y5,{component:(0,r.jsxs)("div",{className:H().header,children:[(0,r.jsx)(m.Z,{className:H().threadIcon}),(0,r.jsx)(l.X6,{variant:"heading-md/semibold",className:H().title,children:y.Z.Messages.THREAD_BROWSER_TITLE}),V?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:H().divider}),(0,r.jsx)(Y,z({},$))]}):null,(0,r.jsx)("div",{className:H().spacer}),q?(0,r.jsx)(c.Co,{size:c.Co.Sizes.MIN,className:H().createButton,onClick:function(){G();(0,C.R6)(L,void 0,"Thread Browser Toolbar")},children:y.Z.Messages.CREATE}):null,(0,r.jsx)(d.Z,{className:H().closeIcon,onClick:G,"aria-label":y.Z.Messages.CLOSE,children:(0,r.jsx)(h.Z,{})})]}),children:$.hasResults?(0,r.jsx)(w,{channel:L,startThread:X,gotoThread:Q,threadIds:$.results
}):(0,r.jsx)(A,{channel:L,startThread:X,gotoThread:Q})})})}function Y(e){var n=e.query,t=e.setQuery,a=e.submit,o=e.isLoading;return(0,r.jsx)(f.Z,{autoFocus:!0,className:H().searchBox,query:n,isLoading:o,onChange:function(e){return t(e)},onClear:function(){return t("")},onKeyDown:function(e){return"Enter"===e.key&&a()}})}},258501:(e,n,t)=>{t.d(n,{Z:()=>F});var r=t(785893),a=t(667294),o=t(791462),s=t(489992),i=t(281081),l=t(356004),u=t(210854),c=t(859023),d=t(629590),f=t(436053),h=t(320489),m=t(688087),v=t(481542),g=t(987928),Z=t(978571),p=t(60890),b=t(212218),y=t(718375),E=t(105405),x=t(220033),j=t(151843),T=t(352297),S=t(346529),_=t(3056),w=t(437803),N=t(959797),O=t(259869),R=t.n(O);function I(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function A(e){return e.isActiveThread()?(0,r.jsx)(M,{channel:e}):(0,r.jsx)(D,{channel:e})}function M(e){var n=e.channel,t=(0,o.e7)([_.Z],(function(){return _.Z.getMostRecentMessage(n.id)
}));return null==t?(0,r.jsx)(C,{channel:n}):(0,r.jsx)(P,{channel:n,message:t})}function C(e){var n=e.channel,t=(0,o.e7)([y.ZP],(function(){return y.ZP.lastMessageId(n.id)}));return(0,r.jsxs)(s.xv,{className:R().subtext,variant:"text-sm/normal",color:"header-secondary",children:[N.Z.Messages.THREAD_BROWSER_NO_RECENT_MESSAGES,"  •  ",(0,w.Ye)(S.Z.extractTimestamp(t))]})}function P(e){var n,t=e.channel,i=e.message;(0,v.$)(I({},t.guild_id,[i.author.id]));var l=(0,o.e7)([c.default],(function(){return null!==(n=c.default.getUser(i.author.id))&&void 0!==n?n:i.author})),u=(0,p.ZP)(i),d=u.nick,f=u.colorString,h=(0,o.e7)([E.Z],(function(){return E.Z.isBlocked(i.author.id)})),g=a.useMemo((function(){var e=null!=i.content&&""!==i.content?(0,Z.ZP)(i,{formatInline:!0}).content:null,n=(0,T.f)(i,e,h,R().messageContent,R().messageContentIcon),t=n.contentPlaceholder,a=n.renderedContent,o=n.icon;return(0,r.jsxs)(r.Fragment,{children:[null!=a?a:(0,r.jsx)("span",{children:t}),o]})}),[i,h]);return(0,
r.jsxs)(s.xv,{className:R().subtext,variant:"text-sm/normal",color:"header-secondary",children:[(0,r.jsx)(m.Z,{className:R().avatar,user:l,size:m.u.SIZE_16}),(0,r.jsxs)("span",{className:R().authorName,style:{color:f},children:[d,":"]})," ",g,"  •  ",(0,w.Ye)(S.Z.extractTimestamp(i.id))]})}function D(e){var n,t,a=e.channel,i=(0,o.e7)([y.ZP],(function(){return y.ZP.lastMessageId(a.id)})),l=null==i?new Date(null!==(t=null===(n=a.threadMetadata)||void 0===n?void 0:n.archiveTimestamp)&&void 0!==t?t:Date.now()).getTime():S.Z.extractTimestamp(i);(0,v.$)(I({},a.guild_id,[a.ownerId]));var u,d=(0,o.e7)([c.default],(function(){return c.default.getUser(a.ownerId)})),f=(0,o.e7)([b.ZP],(function(){return b.ZP.getMember(a.guild_id,a.ownerId)})),h=null!==(u=(0,g.Z)(a))&&void 0!==u?u:j.Z;return(0,r.jsx)(s.xv,{className:R().subtext,variant:"text-sm/normal",color:"header-secondary",children:null==d?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:R().noAvatarIcon,children:(0,r.jsx)(h,{
width:10,height:10})}),N.Z.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({time:(0,w.Ye)(l)})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.Z,{className:R().avatar,user:d,size:m.u.SIZE_16}),N.Z.Messages.THREAD_BROWSER_STARTED_BY.format({authorHook:function(e,n){var t,a;return(0,r.jsx)(x.Z,{className:R().startedByName,color:null!==(t=null==f?void 0:f.colorString)&&void 0!==t?t:void 0,name:null!==(a=null==f?void 0:f.nick)&&void 0!==a?a:d.username},n)}}),(0,r.jsx)("span",{className:R().bullet,children:"•"}),N.Z.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({time:(0,w.Ye)(l)})]})})}var k=t(504003);function H(e,n,t,r,a,o,s){try{var i=e[o](s),l=i.value}catch(e){t(e);return}i.done?n(l):Promise.resolve(l).then(r,a)}function L(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function s(e){H(o,r,a,s,i,"next",e)}function i(e){H(o,r,a,s,i,"throw",e)}s(void 0)}))}}function W(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,
configurable:!0,writable:!0}):e[n]=t;return e}function B(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}var z=function(e,n){var t,r,a,o,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;(r=0,a)&&(o=[2&o[0],a.value])
;switch(o[0]){case 0:case 1:a=o;break;case 4:s.label++;return{value:o[1],done:!1};case 5:s.label++;r=o[1];o=[0];continue;case 7:o=s.ops.pop();s.trys.pop();continue;default:if(!(a=s.trys,a=a.length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){s.label=o[1];break}if(6===o[0]&&s.label<a[1]){s.label=a[1];a=o;break}if(a&&s.label<a[2]){s.label=a[2];s.ops.push(o);break}a[2]&&s.ops.pop();s.trys.pop();continue}o=n.call(e,s)}catch(e){o=[6,e];r=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}};const F=a.memo((function(e){var n=e.threadId,a=e.gotoThread,u=e.showChannelName,c=(0,o.e7)([l.Z],(function(){return l.Z.getChannel(n)})),f=(0,o.e7)([l.Z],(function(){return l.Z.getChannel(c.parent_id)}));return(0,r.jsxs)(d.Z,{className:R().container,onClick:function(e){return a(c,e.shiftKey)},onContextMenu:function(e){return(0,i.jW)(e,L((function(){var e,n;return z(this,(function(a){switch(a.label){case 0:
return[4,Promise.all([t.e(40532),t.e(73185),t.e(98412)]).then(t.bind(t,669102))];case 1:e=a.sent(),n=e.default;return[2,function(e){return(0,r.jsx)(n,B(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){W(e,n,t[n])}))}return e}({},e),{channel:c}))}]}}))})))},children:[(0,r.jsxs)("div",{className:R().left,children:[(0,r.jsxs)(s.X6,{className:R().threadNameLine,variant:"heading-md/semibold",children:[(0,r.jsx)("span",{className:R().threadName,children:c.name}),u&&null!=f?(0,r.jsx)("span",{className:R().parentName,children:"#".concat(f.name)}):null]}),A(c)]}),(0,r.jsx)(U,{channel:c})]})}));function U(e){var n,t,s=e.channel,i=(0,o.e7)([h.Z],(function(){return null!==(n=h.Z.getMemberIdsPreview(s.id))&&void 0!==n?n:[]})),l=(0,
o.e7)([h.Z],(function(){return null!==(t=h.Z.getMemberCount(s.id))&&void 0!==t?t:0})),d=(0,o.Wu)([c.default],(function(){return i.map((function(e){return c.default.getUser(e)}))}));a.useEffect((function(){i.filter((function(e,n){return null==d[n]})).forEach((function(e){u.Z.requestMember(s.guild_id,e)}))}),[]);return 0===i.length?null:(0,r.jsx)(f.Z,{className:R().facepile,showDefaultAvatarsForNullUsers:!0,guildId:s.guild_id,users:d,count:l,max:k.yX})}}}]);
//# sourceMappingURL=ba3d50160dc399f3ea5c.js.map