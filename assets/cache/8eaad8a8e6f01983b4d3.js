"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[66936],{766936:(t,e,r)=>{r.d(e,{u8:()=>h.u8,ZP:()=>L,Xo:()=>Y});var n=r(785893),i=r(667294),u=r(294184),a=r.n(u),o=r(248088),s=r(468811),c=r.n(s),l=r(832010),S=r(629590),f=r(757987),d=r(761222),A=r(122768),T=r(440455),_=r(71531),h=r(366236),g=r(461061),O=r(249350),y=r(959797),b=r(246617),p=r.n(b);function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function I(t,e,r){e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r;return t}function E(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))));n.forEach((function(e){I(t,e,r[e])}))}return t}function m(t,e){e=null!=e?e:{}
;Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})));r.push.apply(r,n)}return r}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}));return t}function N(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},u=Object.keys(t);for(n=0;n<u.length;n++){r=u[n];e.indexOf(r)>=0||(i[r]=t[r])}return i}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++){r=u[n];e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}}return i}function R(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){
var n,i,u=[],a=!0,o=!1;try{for(r=r.call(t);!(a=(n=r.next()).done);a=!0){u.push(n.value);if(e&&u.length===e)break}}catch(t){o=!0;i=t}finally{try{a||null==r.return||r.return()}finally{if(o)throw i}}return u}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var k={tension:1200,friction:70};function j(t){var e=t.size,r=t.isMobile,i=t.isTyping,u=N(t,["size","isMobile","isTyping"]),a=(0,h.UC)(e),o=a.status*(r&&!i?h.EW:1),s=a.status*(i?h.D6:1),c=i?(a.status*h.D6-a.status)/2:0,l=a.size-a.status-c-a.offset,S=a.size-o-a.offset;return(0,n.jsx)("rect",E({x:l,y:S,
width:s,height:o,fill:"transparent","aria-hidden":!0},u))}function w(t,e,r,n){if(null==t)return"";if(n)switch(e){case h.u8.SIZE_16:return T.QS.AVATAR_DECORATION_STATUS_TYPING_16;case h.u8.SIZE_20:return T.QS.AVATAR_DECORATION_STATUS_TYPING_20;case h.u8.SIZE_24:return T.QS.AVATAR_DECORATION_STATUS_TYPING_24;case h.u8.SIZE_32:return T.QS.AVATAR_DECORATION_STATUS_TYPING_32;case h.u8.SIZE_40:return T.QS.AVATAR_DECORATION_STATUS_TYPING_40;case h.u8.SIZE_56:return T.QS.AVATAR_DECORATION_STATUS_TYPING_56;case h.u8.SIZE_80:return T.QS.AVATAR_DECORATION_STATUS_TYPING_80;case h.u8.SIZE_120:return T.QS.AVATAR_DECORATION_STATUS_TYPING_120}if(r)switch(e){case h.u8.SIZE_16:return T.QS.AVATAR_DECORATION_STATUS_MOBILE_16;case h.u8.SIZE_20:return T.QS.AVATAR_DECORATION_STATUS_MOBILE_20;case h.u8.SIZE_24:return T.QS.AVATAR_DECORATION_STATUS_MOBILE_24;case h.u8.SIZE_32:return T.QS.AVATAR_DECORATION_STATUS_MOBILE_32;case h.u8.SIZE_40:return T.QS.AVATAR_DECORATION_STATUS_MOBILE_40;case h.u8.SIZE_56:
return T.QS.AVATAR_DECORATION_STATUS_MOBILE_56;case h.u8.SIZE_80:return T.QS.AVATAR_DECORATION_STATUS_MOBILE_80;case h.u8.SIZE_120:return T.QS.AVATAR_DECORATION_STATUS_MOBILE_120}switch(e){case h.u8.SIZE_16:return T.QS.AVATAR_DECORATION_STATUS_ROUND_16;case h.u8.SIZE_20:return T.QS.AVATAR_DECORATION_STATUS_ROUND_20;case h.u8.SIZE_24:return T.QS.AVATAR_DECORATION_STATUS_ROUND_24;case h.u8.SIZE_32:return T.QS.AVATAR_DECORATION_STATUS_ROUND_32;case h.u8.SIZE_40:return T.QS.AVATAR_DECORATION_STATUS_ROUND_40;case h.u8.SIZE_56:return T.QS.AVATAR_DECORATION_STATUS_ROUND_56;case h.u8.SIZE_80:return T.QS.AVATAR_DECORATION_STATUS_ROUND_80;case h.u8.SIZE_120:return T.QS.AVATAR_DECORATION_STATUS_ROUND_120}}function x(t,e,r,n){if(null==t)return T.QS.AVATAR_DEFAULT;if(n)switch(e){case h.u8.SIZE_16:return T.QS.AVATAR_STATUS_TYPING_16;case h.u8.SIZE_20:return T.QS.AVATAR_STATUS_TYPING_20;case h.u8.SIZE_24:return T.QS.AVATAR_STATUS_TYPING_24;case h.u8.SIZE_32:return T.QS.AVATAR_STATUS_TYPING_32
;case h.u8.SIZE_40:return T.QS.AVATAR_STATUS_TYPING_40;case h.u8.SIZE_56:return T.QS.AVATAR_STATUS_TYPING_56;case h.u8.SIZE_80:return T.QS.AVATAR_STATUS_TYPING_80;case h.u8.SIZE_120:return T.QS.AVATAR_STATUS_TYPING_120}if(t===g.Skl.ONLINE&&r)switch(e){case h.u8.SIZE_16:return T.QS.AVATAR_STATUS_MOBILE_16;case h.u8.SIZE_20:return T.QS.AVATAR_STATUS_MOBILE_20;case h.u8.SIZE_24:return T.QS.AVATAR_STATUS_MOBILE_24;case h.u8.SIZE_32:return T.QS.AVATAR_STATUS_MOBILE_32;case h.u8.SIZE_40:return T.QS.AVATAR_STATUS_MOBILE_40;case h.u8.SIZE_56:return T.QS.AVATAR_STATUS_MOBILE_56;case h.u8.SIZE_80:return T.QS.AVATAR_STATUS_MOBILE_80;case h.u8.SIZE_120:return T.QS.AVATAR_STATUS_MOBILE_120}switch(e){case h.u8.SIZE_16:return T.QS.AVATAR_STATUS_ROUND_16;case h.u8.SIZE_20:return T.QS.AVATAR_STATUS_ROUND_20;case h.u8.SIZE_24:return T.QS.AVATAR_STATUS_ROUND_24;case h.u8.SIZE_32:return T.QS.AVATAR_STATUS_ROUND_32;case h.u8.SIZE_40:return T.QS.AVATAR_STATUS_ROUND_40;case h.u8.SIZE_56:
return T.QS.AVATAR_STATUS_ROUND_56;case h.u8.SIZE_80:return T.QS.AVATAR_STATUS_ROUND_80;case h.u8.SIZE_120:return T.QS.AVATAR_STATUS_ROUND_120}throw new Error("getMaskId(): Unsupported type, size: ".concat(e,", status: ").concat(t,", isMobile: ").concat(r?"true":"false"))}function D(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=(0,_.W5)(t.status,e,r,n),u=(n?t.size-(i.width/2+t.status/2):t.size-i.width)-t.offset;return m(E({},i),{x:u,y:t.size-i.height-t.offset})}function U(t,e,r,i){var u=D(r,i,e,!1),a=(0,_.lm)(i,t);if(!e){var o=u.height/2+r.stroke,s=u.x+r.status/2;return(0,n.jsx)("circle",{style:{opacity:a},fill:t,r:o,cx:s,cy:s})}var c=u.height+2*r.stroke,l=u.width+2*r.stroke,S=u.x-r.stroke,f=u.y-r.stroke;return(0,n.jsx)("rect",{fill:t,height:c,width:l,style:{opacity:a},x:S,y:f,rx:r.stroke})}function P(t){var e=t.status,r=t.isMobile,n=t.isTyping,i=t.size,u=r&&!n&&e===g.Skl.ONLINE,a=(0,h.UC)(i);return E({},function(t,e,r){
var n=t.size,i=t.status,u=t.stroke,a=t.offset,o=r?i*h.D6:i,s=(o-i)/2,c=e?i*h.EW:i;return{avatarCutoutX:n-o+s-u-a,avatarCutoutY:n-c-u-a,avatarCutoutWidth:o+2*u,avatarCutoutHeight:c+2*u,avatarCutoutRadius:e?(c+2*u)*h.ZC:(i+2*u)/2}}(a,u,n),(0,_.Dk)({status:e,size:a.status,isMobile:u,isTyping:n,topOffset:2,leftOffset:6}))}function M(t){var e=t.children,r=t.size,i=t.onClick,u=t.onMouseDown,o=t.onKeyDown,s=t.onContextMenu,c=t.onMouseEnter,l=t.onMouseLeave,f=t.className,A=t.tabIndex,T=t.ariaLabel,_=t.ariaHidden,g=t.status,b=t.isMobile,v=void 0!==b&&b,I=t.isTyping,E=void 0!==I&&I,m=t.avatarDecoration,N=t.typingOffset,R=t.specs,k={width:(0,h.px)(r),height:(0,h.px)(r)},j=null==T||_?void 0:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return null!=e?y.Z.Messages.LABEL_WITH_ONLINE_STATUS.format({label:t,status:(0,d.u5)(e,r)}):t}(T,g,v),x=R.size*O.hs,D=null!=m&&(0,n.jsx)("svg",{width:x+N,height:x,viewBox:"0 0 ".concat(x+N," ").concat(x),className:p().avatarDecoration,
"aria-hidden":!0,children:(0,n.jsx)("foreignObject",{x:0,y:0,width:x,height:x,mask:"url(#".concat(w(g,r,v,E),")"),children:(0,n.jsx)("div",{className:p().avatarStack,children:(0,n.jsx)("img",{className:p().avatar,src:m,alt:" ","aria-hidden":!0})})})});return null!=i||null!=u?(0,n.jsxs)(S.Z,{className:a()(p().wrapper,p().pointer,f),style:k,onClick:i,tabIndex:A,onContextMenu:s,onMouseDown:u,onKeyDown:o,onMouseEnter:null!=c?c:void 0,onMouseLeave:null!=l?l:void 0,"aria-label":j,"aria-hidden":_,children:[e,D]}):(0,n.jsxs)("div",{className:a()(p().wrapper,f),style:k,onContextMenu:null!=s?s:void 0,onMouseEnter:null!=c?c:void 0,onMouseLeave:null!=l?l:void 0,role:"img","aria-label":j,"aria-hidden":_,children:[e,D]})}var Z=function(t){var e=t.src,r=t.isSpeaking;return(0,n.jsxs)("div",{className:p().avatarStack,children:[(0,n.jsx)("img",{src:null!=e?e:void 0,alt:" ",className:p().avatar,"aria-hidden":!0}),r&&(0,n.jsx)("div",{className:p().avatarSpeaking})]})},C=function(t){
var e=t.src,r=t.status,i=t.size,u=t.statusColor,o=t.isMobile,s=void 0!==o&&o,c=t.isTyping,S=void 0!==c&&c,T=t.typingIndicatorRef,O=t.isSpeaking,y=void 0!==O&&O,b=t.statusTooltip,v=void 0!==b&&b,I=t.statusBackdropColor,N=t["aria-hidden"],R=void 0!==N&&N,k=t["aria-label"],j=r!==g.Skl.UNKNOWN?r:null;0;var w=(0,h.UC)(i),P=null!=j?Math.ceil((w.status*h.D6-w.status)/2):0,C=w.size+P,L=(0,l.Sl)((0,_.z2)(j)).hex;return(0,n.jsx)(M,m(E({},t),{ariaLabel:k,ariaHidden:R,status:j,specs:w,typingOffset:P,children:(0,n.jsxs)("svg",{width:C,height:C,viewBox:"0 0 ".concat(C," ").concat(C),className:a()(p().mask,p().svg),"aria-hidden":!0,children:[(0,n.jsx)("foreignObject",{x:0,y:0,width:w.size,height:w.size,mask:"url(#".concat(x(j,i,s,S),")"),children:(0,n.jsx)(Z,{src:e,isSpeaking:y})}),null!=j?(0,n.jsx)(f.ZP,{text:v?(0,d.u5)(j):null,"aria-label":!1,position:f.ZP.Positions.TOP,spacing:5+1.5*w.stroke,children:function(t){return(0,n.jsxs)(n.Fragment,{children:[null!=I&&U(I,s,w,j),(0,
n.jsx)("rect",m(E({},t,D(w,j,s,S)),{fill:null!=u?u:L,mask:"url(#".concat((0,_.rs)(j,s,S),")"),className:p().pointerEvents})),S?(0,n.jsx)(A.Z,{ref:T,dotRadius:w.status/4,x:w.size-1.375*w.status-w.offset,y:w.size-w.status/1.333-w.offset}):null]})}}):null]})}))};C.Sizes=h.u8;const L=C;function V(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=r&&!n?0:.5*t;return 5-i+1.5*e}var Q=function(t){var e=t.fromIsMobile,r=void 0===e||e,u=t.fromStatus,s=t.fromColor,S=t.isMobile,T=void 0!==S&&S,g=t.isTyping,O=void 0!==g&&g,y=t.typingIndicatorRef,b=t.isSpeaking,v=void 0!==b&&b,I=t.size,w=t.src,x=t.status,D=t.statusColor,C=t.statusTooltip,L=void 0!==C&&C,Q=t.statusBackdropColor,Y=t["aria-hidden"],W=void 0!==Y&&Y,z=t["aria-label"];0;var B=(0,l.Sl)((0,_.z2)(x)).hex,H=null==D?B:D,X=R(i.useState((function(){return{avatarMask:c().v4(),statusIconMask:c().v4(),fromSpecs:E({fill:s},P({size:I,status:u,isMobile:r,isTyping:!1}))}
})),1)[0],G=X.avatarMask,F=X.statusIconMask,K=X.fromSpecs,q=i.useMemo((function(){return E({fill:H},P({size:I,status:x,isMobile:T,isTyping:O}))}),[H,I,x,T,O]),$=(0,o.useSpring)({immediate:!document.hasFocus(),config:k,from:K,to:q}),J=$.avatarCutoutX,tt=$.avatarCutoutY,et=$.avatarCutoutWidth,rt=$.avatarCutoutHeight,nt=$.avatarCutoutRadius,it=$.fill,ut=N($,["avatarCutoutX","avatarCutoutY","avatarCutoutWidth","avatarCutoutHeight","avatarCutoutRadius","fill"]),at=(0,h.px)(I),ot=(0,h.UC)(I),st=ot.status*h.D6,ct=ot.status*h.EW,lt=null!=x?(ot.status*h.D6-ot.status)/2:0,St=ot.size-ot.status-lt-ot.offset,ft=ot.size-ct-ot.offset,dt=ot.size+Math.ceil(lt);return(0,n.jsx)(M,m(E({},t),{ariaLabel:z,ariaHidden:W,typingOffset:lt,specs:ot,children:(0,n.jsxs)("svg",{width:dt,height:dt,viewBox:"0 0 ".concat(dt," ").concat(dt),className:a()(p().mask,p().svg),"aria-hidden":!0,children:[(0,n.jsxs)("mask",{id:G,width:at,height:at,children:[(0,n.jsx)("circle",{cx:at/2,cy:at/2,r:at/2,fill:"white"}),(0,
n.jsx)(o.animated.rect,{color:"black",x:J,y:tt,width:et,height:rt,rx:nt,ry:nt})]}),(0,n.jsx)("foreignObject",{className:p().foreignObject,x:0,y:0,width:at,height:at,mask:"url(#".concat(G,")"),children:(0,n.jsx)(Z,{src:w,isSpeaking:v})}),(0,n.jsx)(f.ZP,{text:L?(0,d.u5)(x):null,"aria-label":!1,position:f.ZP.Positions.TOP,spacing:V(ot.status,ot.stroke,T,O),children:function(t){return(0,n.jsxs)(n.Fragment,{children:[null!=Q&&U(Q,T,ot,x),(0,n.jsxs)("svg",{x:St,y:ft,width:st,height:ct,viewBox:"0 0 ".concat(st," ").concat(ct),className:L?p().cursorDefault:void 0,children:[(0,_.vP)(ut,ot.status,F),(0,n.jsx)(o.animated.rect,{fill:it,width:st,height:ct,mask:"url(#".concat(F,")")}),(0,n.jsx)(A.Z,{ref:y,dotRadius:ot.status/4,x:.15*st,y:.5*ct,hide:!O})]}),(0,n.jsx)(j,E({size:I,isMobile:T,isTyping:O,className:p().pointerEvents},t))]})}})]})}))};var Y=i.memo((function(t){
var e=t.statusColor,r=t.status,u=N(t,["statusColor","status"]),a=u.isMobile,o=void 0!==a&&a,s=u.isTyping,c=void 0!==s&&s,S=i.useRef(r),f=i.useRef(o),d=(0,l.Sl)((0,_.z2)(r)).hex,A=null==e?d:e,T=i.useRef(A),h=i.useRef(!1),O=h.current||function(t,e,r,n,i){return null!=r&&null!=e&&!!(t||e!==r||e===g.Skl.ONLINE&&n!==i)}(c,r,S.current,o,f.current);i.useLayoutEffect((function(){h.current=O;S.current=r;f.current=o;T.current=A}),[r,o,A,O]);return null!=r&&null!=S.current&&O?(0,n.jsx)(Q,m(E({},u),{status:r,statusColor:A,fromStatus:S.current,fromIsMobile:f.current,fromColor:T.current})):(0,n.jsx)(C,m(E({},u),{status:r,statusColor:A}))}))},122768:(t,e,r)=>{r.d(e,{I:()=>p,Z:()=>I});var n=r(785893),i=r(667294),u=r(294184),a=r.n(u),o=r(248088),s=r(283277),c=r.n(s);function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function S(t,e,r,n,i,u,a){try{var o=t[u](a),s=o.value}catch(t){r(t);return}o.done?e(s):Promise.resolve(s).then(n,i)}function f(t,e,r){
e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r;return t}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))));n.forEach((function(e){f(t,e,r[e])}))}return t}function A(t,e){e=null!=e?e:{};Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})));r.push.apply(r,n)}return r}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}));return t}function T(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){
var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,u=[],a=!0,o=!1;try{for(r=r.call(t);!(a=(n=r.next()).done);a=!0){u.push(n.value);if(e&&u.length===e)break}}catch(t){o=!0;i=t}finally{try{a||null==r.return||r.return()}finally{if(o)throw i}}return u}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _=function(t,e){var r,n,i,u,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return u={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){
return this}),u;function o(u){return function(o){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&u[0]?n.return:u[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,u[1])).done)return i;(n=0,i)&&(u=[2&u[0],i.value]);switch(u[0]){case 0:case 1:i=u;break;case 4:a.label++;return{value:u[1],done:!1};case 5:a.label++;n=u[1];u=[0];continue;case 7:u=a.ops.pop();a.trys.pop();continue;default:if(!(i=a.trys,i=i.length>0&&i[i.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){a.label=u[1];break}if(6===u[0]&&a.label<i[1]){a.label=i[1];i=u;break}if(i&&a.label<i[2]){a.label=i[2];a.ops.push(u);break}i[2]&&a.ops.pop();a.trys.pop();continue}u=e.call(t,a)}catch(t){u=[6,t];n=0}finally{r=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,o])}}};function h(){return document.hasFocus()}var g=2.8,O={config:{friction:50,tension:900,mass:1},unique:!0,initial:{dotPosition:1},from:{
dotPosition:0},enter:{dotPosition:1},leave:{dotPosition:0}},y={config:{duration:2400},from:{dotCycle:g},reset:!0};function b(t){var e=t%2;return e>1?1-(e-1):e}var p=i.memo((function(t){var e=t.dotRadius,r=t.dotPosition,u=t.fill,a=void 0===u?"currentColor":u,s=t.spacing,c=void 0===s?2.5:s,l=i.useRef(h()),f=i.useRef(!0);i.useEffect((function(){return function(){f.current=!1}}),[]);var O=T((0,o.useSpring)((function(){return A(d({},y),{to:(e=(t=function(t){var e;return _(this,(function(r){switch(r.label){case 0:e=g;r.label=1;case 1:if(!f.current)return[3,9];l.current=h();return l.current?[3,6]:e===g?[3,3]:[4,t({dotCycle:e=g,immediate:!0})];case 2:r.sent();return[3,5];case 3:return[4,new Promise((function(t){return setTimeout(t,1e3)}))];case 4:r.sent();r.label=5;case 5:return[3,8];case 6:return[4,t({dotCycle:e+=4,immediate:!1})];case 7:r.sent();r.label=8;case 8:return[3,1];case 9:return[2]}}))},function(){var e=this,r=arguments;return new Promise((function(n,i){var u=t.apply(e,r)
;function a(t){S(u,n,i,a,o,"next",t)}function o(t){S(u,n,i,a,o,"throw",t)}a(void 0)}))}),function(t){return e.apply(this,arguments)})});var t,e})),1),p=O[0],v=(2*e*3+e/4*2)/2;return[0,1,2].map((function(t){var i=.25*t,u=e+t*(e*c);return(0,n.jsx)(o.animated.circle,{cx:r?r.to([0,1],[v,u]):u,cy:e,r:p.dotCycle.to((function(t){return b(t-i)})).to([0,.4,.8,1],[.8*e,.8*e,e,e]).to((function(t){return l.current?t:e})),fill:a,style:{opacity:p.dotCycle.to((function(t){return b(t-i)})).to([0,.4,.8,1],[.3,.3,1,1]).to((function(t){return l.current?t:1}))}},t)}))}));function v(t,e){var r=t.dotRadius,i=t.x,u=t.y,s=t.hide,l=void 0!==s&&s,S=t.themed,f=void 0!==S&&S,T=t.className;return(0,o.useTransition)(l,A(d({},O),{key:function(t){return t?"true":"false"},immediate:!h()}))((function(t,s,l){var S=t.dotPosition,d=l.key;return s?null:(0,n.jsx)("svg",{ref:e,x:i,y:u,width:2*r*3+r/2*2,height:2*r,className:a()(T,c().dots,f?c().themed:null),children:(0,n.jsx)(o.animated.g,{style:{opacity:S.to((function(t){
return Math.min(1,Math.max(t,0))}))},children:(0,n.jsx)(p,{dotRadius:r,dotPosition:S})})},d)}))}const I=i.memo(i.forwardRef(v))},71531:(t,e,r)=>{r.d(e,{Sk:()=>A.Skl,z2:()=>p,lm:()=>v,QF:()=>I,Dk:()=>N,vP:()=>k,P5:()=>j,rs:()=>w,W5:()=>x,qb:()=>D});var n=r(785893),i=r(667294),u=r(294184),a=r.n(u),o=r(126136),s=r(248088),c=r(468811),l=r.n(c),S=r(832010),f=r(440455),d=r(366236),A=r(461061),T=r(862751),_=r.n(T);function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function g(t,e,r){e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r;return t}function O(t,e){e=null!=e?e:{};Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})));r.push.apply(r,n)}return r
}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}));return t}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,u=[],a=!0,o=!1;try{for(r=r.call(t);!(a=(n=r.next()).done);a=!0){u.push(n.value);if(e&&u.length===e)break}}catch(t){o=!0;i=t}finally{try{a||null==r.return||r.return()}finally{if(o)throw i}}return u}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b={tension:600,
friction:70};function p(t){switch(t){case A.Skl.ONLINE:return A.Ilk.STATUS_GREEN_600;case A.Skl.IDLE:return A.Ilk.STATUS_YELLOW_500;case A.Skl.DND:return A.Ilk.STATUS_RED_500;case A.Skl.STREAMING:return A.Ilk.TWITCH;case A.Skl.INVISIBLE:case A.Skl.UNKNOWN:case A.Skl.OFFLINE:default:return A.Ilk.STATUS_GREY_500}}function v(t,e){return e===d.VZ.WHITE&&t===A.Skl.IDLE?d.d_.HIGH:d.d_.LOW}function I(t){return t===A.BRd.DARK?d.VZ.BLACK:d.VZ.WHITE}function E(t,e,r,n){return"scale(".concat(e,") translate(").concat(.5625*t+n," ").concat(.75*t+r,")")}function m(t,e,r){return"".concat(.5625*t+r,"px ").concat(.75*t+e,"px")}function N(t){var e=t.size,r=t.status,n=t.isMobile,i=t.isTyping,u=t.topOffset,a=void 0===u?0:u,o=t.leftOffset,s=a/8*e,c=(void 0===o?0:o)/8*e;if(i)return{bgRadius:.5*e,bgY:.25*e+s,bgX:0,bgHeight:e,bgWidth:e*d.D6,cutoutX:.5*e+c,cutoutY:.75*e+s,cutoutWidth:0,cutoutHeight:0,cutoutRadius:0,polygonScale:E(e,0,s,c),polygonOrigin:m(e,s,c),dotY:.75*e+s,dotX:.5*e+c,dotRadius:0};switch(r){
case A.Skl.ONLINE:return n?{bgRadius:e*d.EW*d.e7,bgY:0,bgX:c,bgHeight:e*d.EW,bgWidth:e,cutoutX:.125*e+c,cutoutY:.25*e,cutoutWidth:.75*e,cutoutHeight:.75*e,cutoutRadius:0,polygonScale:E(e,0,s,c),polygonOrigin:m(e,s,c),dotY:1.25*e,dotX:.5*e+c,dotRadius:.125*e}:{bgRadius:.5*e,bgY:.25*e+s,bgX:c,bgHeight:e,bgWidth:e,cutoutX:.5*e+c,cutoutY:.75*e+s,cutoutWidth:0,cutoutHeight:0,cutoutRadius:0,polygonScale:E(e,0,s,c),polygonOrigin:m(e,s,c),dotY:.75*e+s,dotX:.5*e+c,dotRadius:0};case A.Skl.IDLE:return{bgRadius:.5*e,bgY:.25*e+s,bgX:c,bgHeight:e,bgWidth:e,cutoutX:-.125*e+c,cutoutY:.125*e+s,cutoutWidth:.75*e,cutoutHeight:.75*e,cutoutRadius:.375*e,polygonScale:E(e,0,s,c),polygonOrigin:m(e,s,c),dotY:.75*e+s,dotX:.5*e+c,dotRadius:0};case A.Skl.DND:return{bgRadius:.5*e,bgY:.25*e+s,bgX:c,bgHeight:e,bgWidth:e,cutoutX:.125*e+c,cutoutY:.625*e+s,cutoutWidth:.75*e,cutoutHeight:.25*e,cutoutRadius:.125*e,polygonScale:E(e,0,s,c),polygonOrigin:m(e,s,c),dotY:.75*e+s,dotX:.5*e+c,dotRadius:0};case A.Skl.STREAMING:
return{bgRadius:.5*e,bgY:.25*e+s,bgX:c,bgHeight:e,bgWidth:e,cutoutX:.5*e+c,cutoutY:.75*e+s,cutoutWidth:0,cutoutHeight:0,cutoutRadius:.25*e,polygonScale:E(e,1,s,c),polygonOrigin:m(e,s,c),dotY:.75*e+s,dotX:.5*e+c,dotRadius:0};case A.Skl.INVISIBLE:case A.Skl.UNKNOWN:case A.Skl.OFFLINE:default:return{bgRadius:.5*e,bgY:.25*e+s,bgX:c,bgHeight:e,bgWidth:e,cutoutX:.25*e+c,cutoutY:.5*e+s,cutoutWidth:.5*e,cutoutHeight:.5*e,cutoutRadius:.25*e,polygonScale:E(e,0,s,c),polygonOrigin:m(e,s,c),dotY:.75*e+s,dotX:.5*e+c,dotRadius:0}}}function R(t){return"-".concat(.216506*t,",-").concat(.25*t," ").concat(.216506*t,",0 -").concat(.216506*t,",").concat(.25*t)}function k(t,e,r){var i=t.bgRadius,u=t.bgY,a=t.bgX,o=t.bgHeight,c=t.bgWidth,l=t.cutoutX,S=t.cutoutY,f=t.cutoutWidth,d=t.cutoutHeight,A=t.cutoutRadius,T=t.polygonScale,_=t.polygonOrigin,h=t.dotY,g=t.dotX,O=t.dotRadius;return(0,n.jsxs)("mask",{id:r,children:[(0,n.jsx)(s.animated.rect,{x:a,y:u,width:c,height:o,rx:i,ry:i,fill:"white"}),(0,
n.jsx)(s.animated.rect,{x:l,y:S,width:f,height:d,rx:A,ry:A,fill:"black"}),(0,n.jsx)(s.animated.polygon,{points:R(e),fill:"black",transform:T,style:{transformOrigin:_}}),(0,n.jsx)(s.animated.circle,{fill:"black",cx:g,cy:h,r:O})]})}var j=function(t){var e=t.status,r=t.isMobile,u=void 0!==r&&r,c=t.size,f=void 0===c?8:c,T=t.color,h=t.className,g=t.style,O=(0,o.Z)((function(){return l().v4()})),v=e===A.Skl.ONLINE&&u,I=i.useMemo((function(){return N({size:f,status:e,isMobile:v})}),[f,e,v]),E=(0,s.useSpring)({config:b,to:I}),m=(0,S.Sl)(p(e)).hex,R=null==T?m:T,j=y((0,s.useSpring)({config:b,fill:R},[R]),1)[0].fill,w=f,x=Math.ceil(f*d.EW);return(0,n.jsxs)("svg",{width:w,height:x,viewBox:"0 0 ".concat(w," ").concat(x),className:a()(_().mask,h),style:g,children:[k(E,f,O),(0,n.jsx)(s.animated.rect,{x:0,y:0,width:w,height:x,fill:j,mask:"url(#".concat(O,")")})]})};function w(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(r)return f.ZP.Masks.STATUS_TYPING;switch(t){
case A.Skl.IDLE:return f.ZP.Masks.STATUS_IDLE;case A.Skl.DND:return f.ZP.Masks.STATUS_DND;case A.Skl.STREAMING:return f.ZP.Masks.STATUS_STREAMING;case A.Skl.INVISIBLE:case A.Skl.UNKNOWN:case A.Skl.OFFLINE:return f.ZP.Masks.STATUS_OFFLINE;case A.Skl.ONLINE:default:return e?f.ZP.Masks.STATUS_ONLINE_MOBILE:f.ZP.Masks.STATUS_ONLINE}}function x(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e===A.Skl.ONLINE&&r&&!n?{width:t,height:t*d.EW}:{width:n?t*d.D6:t,height:t}}var D=function(t){var e=t.status,r=t.isMobile,i=void 0!==r&&r,u=t.size,o=void 0===u?8:u,s=t.className,c=t.style,l=t.color,d=e===A.Skl.ONLINE&&i;return(0,n.jsx)(f.ZP,O(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))));n.forEach((function(e){g(t,e,r[e])}))}return t}({
mask:w(e,d),className:a()(_().mask,s),style:c},x(o,e,d)),{children:(0,n.jsx)("div",{style:{backgroundColor:null==l?(0,S.Lq)(p(e)):l},className:_().status})}))}},761222:(t,e,r)=>{r.d(e,{u5:()=>a,v5:()=>o,EO:()=>s});var n=r(461061),i=r(959797),u=864e5;function a(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];switch(t){case n.Skl.ONLINE:return e?i.Z.Messages.STATUS_ONLINE_MOBILE:i.Z.Messages.STATUS_ONLINE;case n.Skl.OFFLINE:return i.Z.Messages.STATUS_OFFLINE;case n.Skl.IDLE:return i.Z.Messages.STATUS_IDLE;case n.Skl.DND:return i.Z.Messages.STATUS_DND;case n.Skl.INVISIBLE:return i.Z.Messages.STATUS_INVISIBLE;case n.Skl.STREAMING:return i.Z.Messages.STATUS_STREAMING;case n.Skl.UNKNOWN:default:return null}}function o(t,e){var r=e.maxDaysOld,n=e.minDaysOld,i=void 0===n?0:n;if(null==t)return!1;0;var a=Date.now()-t.createdAt.getTime();return!!((null==r||a<=u*r)&&a>=u*i)}function s(t){return o(t,{maxDaysOld:7,minDaysOld:0})}}}]);
//# sourceMappingURL=8eaad8a8e6f01983b4d3.js.map