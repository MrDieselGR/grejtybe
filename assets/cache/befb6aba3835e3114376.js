(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[22853],{182765:(e,t,r)=>{e.exports=r.p+"092b071c3b3141a58787415450c27857.png"},401246:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(785893),o=r(667294),c=r(163585),s=r.n(c);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function u(e){u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return u(e)}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&h(e,t)}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r)
;"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){i(e,t,r[t])}))}return e}function d(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}function p(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e,t){h=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return h(e,t)}var m=function(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}var O=r(182765),b=function(e){l(c,e);var t=v(c);function c(){a(this,c);var e;(e=t.apply(this,arguments)).QRRef=o.createRef();return e}var s=c.prototype;s.componentDidMount=function(){var e=this;r.e(95951).then(r.t.bind(r,295951,23)).then((function(t){var r=t.default;new r(e.QRRef.current,d(f({},e.props),{correctLevel:r.CorrectLevel.M}))}))};s.componentDidUpdate=function(){var e=this;r.e(95951).then(r.t.bind(r,295951,23)).then((function(t){var r=t.default;new r(e.QRRef.current,d(f({},e.props),{
correctLevel:r.CorrectLevel.M}))}))};s.render=function(){var e=this.props,t=e.colorLight,r=e.className;return(0,n.jsx)("div",{ref:this.QRRef,style:{padding:8,borderRadius:4,background:t},className:r})};return c}(o.PureComponent);b.defaultProps={width:128,height:128,colorLight:"#ffffff",colorDark:"#000000"};(function(e){l(r,e);var t=v(r);function r(){a(this,r);return t.apply(this,arguments)}r.prototype.render=function(){return(0,n.jsxs)("div",{className:s().qrCodeContainer,children:[(0,n.jsx)(b,f({},this.props)),(0,n.jsx)("div",{className:s().qrCodeOverlay,children:(0,n.jsx)("img",{src:O,alt:""})})]})};return r}(o.PureComponent)).defaultProps={width:144,height:144,colorLight:"#ffffff",colorDark:"#000000"};const y=b},522853:(e,t,r)=>{"use strict";r.r(t);r.d(t,{default:()=>_})
;var n=r(785893),o=r(667294),c=r(791462),s=r(489992),a=r(401246),i=r(892472),u=r(936584),l=r(363798),f=r(95467),d=r(430923),p=r(675860),h=r(53211),m=r(653772),v=r(934714),O=r(105405),b=r(859023),y=r(259849),j=r(461061),g=r(959797);var x=r(279230),N=r(867517),P=r.n(N);function R(e){var t=e.step,r=e.instructions;return(0,n.jsxs)("div",{className:P().cardRow,children:[(0,n.jsx)("div",{className:P().stepNumberContainer,children:(0,n.jsx)(s.xv,{variant:"text-sm/semibold",className:P().stepNumber,children:t})}),(0,n.jsx)(s.xv,{variant:"text-sm/normal",color:"header-primary",className:P().instructions,children:r})]})}function _(e){var t=e.channel,r=e.transitionState,N=e.onClose,_=(0,c.e7)([d.Z],(function(){return null!=d.Z.getRemoteSessionId()})),w=function(e,t){var r,n=t.nonce,o=t.forQRCode,c=e.getGuildId(),s=m.Z.getGuild(c),a=(0,y.Lc)({guildId:null!=c?c:"0",channelId:e.id,channelName:(0,h.F)(e,b.default,O.Z),guildName:null!==(r=null==s?void 0:s.name)&&void 0!==r?r:g.Z.Messages.UNNAMED,
muted:v.Z.isSelfMute(),deafened:v.Z.isSelfDeaf(),nonce:n});return o?"".concat(p.Z.getAPIBaseURL()).concat(j.ANM.XBOX_HANDOFF,"?").concat(a.toString()):"".concat(y.bJ,"?").concat(a.toString())}(t,{forQRCode:!0});o.useEffect((function(){_&&N()}),[_,N]);o.useEffect((function(){(0,x.Z)(t.id,y.YE.XBOX)}),[t.id]);return(0,n.jsxs)(l.Y0,{size:l.Cg.DYNAMIC,className:P().modalRoot,transitionState:r,children:[(0,n.jsxs)(l.xB,{separator:!1,className:P().modalHeaderContainer,children:[(0,n.jsx)(s.X6,{className:P().modalHeader,variant:"heading-xl/extrabold",children:g.Z.Messages.TRANSFER_VOICE_TO_XBOX}),(0,n.jsx)(s.xv,{variant:"text-md/medium",color:"header-secondary",children:g.Z.Messages.XBOX_APP_REQUIRED_SUBHEADER})]}),(0,n.jsx)(l.hz,{className:P().content,children:(0,n.jsxs)("div",{className:P().card,children:[(0,n.jsxs)("div",{className:P().cardText,children:[(0,n.jsxs)(s.xv,{variant:"text-lg/semibold",color:"header-primary",className:P().cardRow,children:[(0,n.jsx)(u.Z,{
className:P().cardHeaderIcon}),g.Z.Messages.XBOX_APP_FOR_MOBILE]}),(0,n.jsx)(R,{step:1,instructions:g.Z.Messages.XBOX_APP_STEP_ONE}),(0,n.jsx)(R,{step:2,instructions:g.Z.Messages.XBOX_APP_STEP_TWO}),(0,n.jsx)(s.xv,{variant:"text-sm/medium",children:(0,n.jsx)(i.Z,{className:P().learnMore,href:f.Z.getArticleURL(j.BhN.XBOX_CONNECTION),children:g.Z.Messages.LEARN_MORE})})]}),(0,n.jsx)(a.Z,{className:P().qrCode,width:120,height:120,text:w})]})}),(0,n.jsx)(l.ol,{className:P().closeButton,onClick:N})]})}}}]);
//# sourceMappingURL=befb6aba3835e3114376.js.map