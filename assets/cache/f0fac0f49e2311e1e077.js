"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[50205],{150205:(e,n,t)=>{t.r(n);t.d(n,{default:()=>Z});var o=t(785893),r=t(667294),l=t(791462),i=t(489992),a=t(152163),u=t(536989),s=t(392115),c=t(1812),d=t(191940),m=t(146530),f=t(629858),j=t(761434),p=t(801593),v=t(272729),h=t(523283),b=t(67416),g=t(103686),y=t(461061),O=t(959797),C=t(463248),E=t.n(C);function x(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function N(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function T(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,o)}return t}(Object(n)).forEach((function(t){
Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}function A(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var o,r,l=[],i=!0,a=!1;try{for(t=t.call(e);!(i=(o=t.next()).done);i=!0){l.push(o.value);if(n&&l.length===n)break}}catch(e){a=!0;r=e}finally{try{i||null==t.return||t.return()}finally{if(a)throw r}}return l}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return x(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return x(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e){
var n,t=e.transitionState,C=e.onClose,x=e.channelId,Z=e.guildId,P=e.tag,I=(0,v.Dt)(),M=null!=P,R=A(r.useState(null!==(n=null==P?void 0:P.name)&&void 0!==n?n:""),2),_=R[0],k=R[1],S=A(r.useState(null!=P?{id:P.emojiId,name:P.emojiName}:null),2),w=S[0],D=S[1],F=A(r.useState(null==P?void 0:P.moderated),2),B=F[0],L=F[1],U=(0,l.e7)([s.Z],(function(){return null!=(null==w?void 0:w.id)?s.Z.getUsableCustomEmojiById(w.id):null})),G=(null==P?void 0:P.name)!==_||(null==P?void 0:P.emojiId)!==(null==w?void 0:w.id)||(null==P?void 0:P.emojiName)!==(null==w?void 0:w.name)||B!==(null==P?void 0:P.moderated),z=function(){if(null!=_&&G)if(M){g.Z.updateForumTag({id:P.id,name:_,emojiId:null==w?void 0:w.id,emojiName:null==w?void 0:w.name,moderated:B},x);C()}else{g.Z.createForumTag({name:_,emojiId:null==w?void 0:w.id,emojiName:null==w?void 0:w.name,moderated:B},x);C()}},K=r.useCallback((function(e){return k(e)}),[]),X=r.createRef();r.useEffect((function(){null!=X.current&&X.current.focus()}),[]);return(0,
o.jsxs)(b.Y0,{transitionState:t,"aria-labelledby":I,children:[(0,o.jsx)(b.xB,{separator:!1,children:(0,o.jsx)(i.X6,{variant:"heading-md/semibold",children:M?O.Z.Messages.FORUM_TAG_EDIT:O.Z.Messages.FORUM_TAG_CREATE})}),(0,o.jsxs)("div",{className:E().content,children:[(0,o.jsx)(i.xv,{variant:"text-sm/normal",children:O.Z.Messages.FORUM_TAG_CREATE_DESCRIPTION}),(0,o.jsxs)("div",{className:E().inputContainer,children:[(0,o.jsx)("div",{className:E().emojiButtonContainer,children:(0,o.jsx)(j.ZP,{renderPopout:function(e){var n=e.closePopout,t=c.ZP.getDefaultChannel(Z);return(0,o.jsx)(u.Z,{guildId:Z,closePopout:n,onSelectEmoji:function(e,t){!function(e){null!=e&&D(null!=e.id?{id:e.id,name:e.name}:{id:void 0,name:e.optionallyDiverseSequence})}(e);t&&n()},pickerIntention:y.HzX.COMMUNITY_CONTENT,onNavigateAway:C,channel:t})},position:j.ZP.Positions.LEFT,animation:j.ZP.Animation.NONE,align:j.ZP.Align.BOTTOM,children:function(e,n){var t=n.isShown;return(0,o.jsx)(f.Z,T(function(e){
for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));o.forEach((function(n){N(e,n,t[n])}))}return e}({},e),{onClick:function(n){var t;null===(t=e.onClick)||void 0===t||t.call(e,n)},active:t,className:E().emojiButton,tabIndex:0,renderButtonContents:null==w||null==w.id&&null==w.name?null:function(){return(0,o.jsx)(a.Z,{className:E().emoji,emojiId:w.id,emojiName:w.name,animated:Boolean(null==U?void 0:U.animated)})}}))}})}),(0,o.jsx)(p.ZP,{inputRef:X,maxLength:20,value:_,inputClassName:E().input,placeholder:O.Z.Messages.FORUM_TAG_CREATE_PLACEHOLDER,onChange:K,autoFocus:!0,onKeyDown:function(e){if(e.keyCode===y.yXg.ENTER&&_.length>0){_.length>0&&z();e.preventDefault()}}}),_.length>0||null!=w?(0,o.jsx)(d.Co,{"aria-label":O.Z.Messages.FORUM_TAG_EDIT_RESET_LABEL,
className:E().clearButton,onClick:function(){k("");D(null)},look:d.Co.Looks.BLANK,size:d.Co.Sizes.NONE,children:(0,o.jsx)(h.Z,{className:E().clearIcon})}):null]})]}),(0,o.jsx)(m.Z,{type:m.Z.Types.INVERTED,size:18,value:null!=B&&B,onChange:function(e,n){return L(n||null==(null==P?void 0:P.moderated)&&void 0)},className:E().moderatedCheckbox,children:(0,o.jsx)(i.xv,{variant:"text-sm/normal",children:O.Z.Messages.FORUM_MODERATED_TAG_CHECKBOX})}),(0,o.jsxs)(b.mz,{className:E().footer,children:[(0,o.jsxs)("div",{className:E().buttons,children:[(0,o.jsx)(d.Co,{color:d.Co.Colors.PRIMARY,onClick:function(){C()},children:O.Z.Messages.CANCEL}),(0,o.jsx)(d.Co,{onClick:z,disabled:0===_.length||!G,autoFocus:!0,children:O.Z.Messages.SAVE})]}),M&&(0,o.jsx)(d.Co,{color:d.Co.Colors.RED,look:d.Co.Looks.LINK,onClick:function(){if(M){g.Z.deleteForumTag(x,P.id);C()}},children:O.Z.Messages.FORUM_TAG_REMOVE})]})]})}}}]);
//# sourceMappingURL=f0fac0f49e2311e1e077.js.map