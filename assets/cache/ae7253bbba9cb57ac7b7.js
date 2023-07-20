"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[98418],{665232:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(667294);function o(e){var r=(0,n.useRef)(null),t=(0,n.useRef)(null);if(!Object.is(e,t.current)){r.current=t.current;t.current=e}return r.current}},598418:(e,r,t)=>{t.r(r);t.d(r,{default:()=>x});var n=t(785893),o=t(667294),l=t(791462),i=t(489992),a=t(53211),u=t(356004),s=t(191940),c=t(487502),f=t(801593),p=t(272729),d=t(562181),h=t(67416),y=t(987762),b=t(620700),g=t(959797),m=t(929909),v=t.n(m);function O(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function j(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,l=[],i=!0,a=!1;try{for(t=t.call(e);!(i=(n=t.next()).done);i=!0){l.push(n.value);if(r&&l.length===r)break}}catch(e){a=!0;o=e}finally{try{i||null==t.return||t.return()}finally{
if(a)throw o}}return l}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return O(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return O(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e){var r=e.channelId,t=e.onClose,m=e.transitionState,O=(0,p.Dt)(),x=(0,l.e7)([u.Z],(function(){return u.Z.getChannel(r)})),C=(0,a.Z)(x),E=y.Z.getNickname(r),N=j(o.useState(null!=E?E:""),2),w=N[0],P=N[1];return(0,n.jsx)("form",{onSubmit:function(e){e.preventDefault();(0,b.UT)(r,w);t()},children:(0,n.jsxs)(h.Y0,{transitionState:m,"aria-labelledby":O,children:[(0,n.jsxs)(h.xB,{separator:!0,justify:c.Z.Justify.BETWEEN,children:[(0,n.jsx)(i.X6,{id:O,
variant:"heading-lg/semibold",children:g.Z.Messages.CHANGE_NICKNAME}),(0,n.jsx)(h.ol,{onClick:t})]}),(0,n.jsxs)(h.hz,{children:[(0,n.jsx)(d.xJ,{className:v().name,title:g.Z.Messages.NICKNAME,children:(0,n.jsx)(f.ZP,{value:w,onChange:P,placeholder:null!=C?C:void 0,maxLength:100,autoFocus:!0})}),null!=E?(0,n.jsx)(s.Co,{look:s.Co.Looks.LINK,color:s.Co.Colors.LINK,size:s.Co.Sizes.NONE,onClick:function(){(0,b.UT)(r,null);t()},className:v().reset,children:g.Z.Messages.RESET_NICKNAME}):null,(0,n.jsx)(i.xv,{className:v().description,variant:"text-sm/normal",color:"header-secondary",children:g.Z.Messages.FAVORITES_SET_NICKNAME_DESCRIPTION})]}),(0,n.jsxs)(h.mz,{children:[(0,n.jsx)(s.Co,{type:"submit",children:g.Z.Messages.CHANGE_NICKNAME}),(0,n.jsx)(s.Co,{onClick:t,look:s.Co.Looks.LINK,color:s.Co.Colors.PRIMARY,children:g.Z.Messages.CANCEL})]})]})})}},801593:(e,r,t)=>{t.d(r,{jj:()=>w,ZP:()=>I})
;var n=t(785893),o=t(667294),l=t(294184),i=t.n(l),a=t(647446),u=t(248088),s=t(489992),c=t(665232),f=t(511716),p=t(881186),d=t(959797),h=t(641501),y=t.n(h);function b(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t;return e}function g(e){g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return g(e)}function m(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));n.forEach((function(r){b(e,r,t[r])}))}return e}function v(e,r){r=null!=r?r:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){
return Object.getOwnPropertyDescriptor(e,r).enumerable})));t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}));return e}function O(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++){t=l[n];r.indexOf(t)>=0||(o[t]=e[t])}return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++){t=l[n];r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}}return o}function j(e,r){return!r||"object"!==C(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function x(e,r){x=Object.setPrototypeOf||function(e,r){e.__proto__=r;return e};return x(e,r)}var C=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function E(e){var r=function(){
if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var t,n=g(e);if(r){var o=g(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return j(this,t)}}var N={DEFAULT:"default",MINI:"mini"};function w(e){var r=e.error,t=(0,u.useTransition)(r,{config:{tension:250,clamp:!0},from:{marginTop:0,height:0,opacity:0,transform:"translate3d(0, -100%, 0)"},enter:{marginTop:4,height:"auto",opacity:1,transform:"translate3d(0, -0px, 0)"},leave:{marginTop:0,height:0,opacity:0,transform:"translate3d(0, -100%, 0)"}}),o=(0,c.Z)(r);return(0,n.jsx)(n.Fragment,{children:t((function(e,t,l){var i=l.key,a=e.transform,c=O(e,["transform"]);return null!=t&&""!==t?(0,n.jsx)(u.animated.div,{style:v(m({},c),{overflow:"hidden"}),children:(0,n.jsx)(u.animated.div,{style:{transform:a
},children:(0,n.jsx)(s.xv,{color:"text-danger",variant:"text-xs/normal",children:null!=r&&""!==r?r:o})})},i):null}))})}var P=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}});r&&x(e,r)}(t,e);var r=E(t);function t(e){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t);var n,o;(n=r.call(this,e)).hasError=function(){return null!=n.props.error&&n.props.error.length>0||!1!==n.state.dirty&&(n.getIsUnderFlowing()||n.getIsOverFlowing())};n.getError=function(){var e=n.props,r=e.error,t=e.minLength,o=e.maxLength,l=n.getIsUnderFlowing()?d.Z.Messages.MINIMUM_LENGTH_ERROR.format({minLength:t}):null,i=n.getIsOverFlowing()?d.Z.Messages.MAXIMUM_LENGTH_ERROR.format({maxLength:o}):null;return null!=r&&r.length<1||null===r?null:null!=r?r:!1===n.state.dirty?null:null!=l?l:i}
;n.getIsUnderFlowing=function(){var e,r=n.props,t=r.value,o=r.minLength;return null!=o&&(null!==(e=null==t?void 0:t.length)&&void 0!==e?e:0)<o};n.getIsOverFlowing=function(){var e,r=n.props,t=r.value,o=r.maxLength;return null!=o&&(null!==(e=null==t?void 0:t.length)&&void 0!==e?e:0)>o};n.onChange=function(e){var r,t;null===(t=(r=n.props).onChange)||void 0===t||t.call(r,e.currentTarget.value,n.props.name);n.setState({dirty:!0})};n.onFocus=function(e){var r,t;null===(t=(r=n.props).onFocus)||void 0===t||t.call(r,e,n.props.name)};n.onBlur=function(e){var r,t;null===(t=(r=n.props).onBlur)||void 0===t||t.call(r,e,n.props.name)};n.state={dirty:null!==(o=e.defaultDirty)&&void 0!==o&&o};return n}t.prototype.render=function(){
var e,r,t,o=this.props,l=o.className,u=o.inputClassName,s=o.inputPrefix,c=o.disabled,p=o.size,d=o.editable,h=o.inputRef,g=o.prefixElement,j=o.focusProps,x=O(o,["className","inputClassName","inputPrefix","disabled","size","editable","inputRef","prefixElement","focusProps"]),C=null!==(r=x["aria-labelledby"])&&void 0!==r?r:null===(e=this.context)||void 0===e?void 0:e.titleId;return(0,n.jsxs)("div",{className:i()(y().inputWrapper,l),children:[null!=g&&g,null!=s?(0,n.jsx)("span",{className:y().inputPrefix,children:s}):null,(0,n.jsx)(a.tE,v(m({},j),{children:(0,n.jsx)("input",v(m({className:i()((0,f.l)(y(),"input",p),u,(t={},b(t,y().error,this.hasError()),b(t,y().disabled,c),b(t,y().editable,d),t)),disabled:c,readOnly:!1===d||void 0},x),{"aria-labelledby":C,onChange:this.onChange,onBlur:this.onBlur,onFocus:this.onFocus,ref:h}))})),(0,n.jsx)(w,{error:this.getError()})]})};return t}(o.Component);P.Sizes=N;P.contextType=p.q3;P.defaultProps={name:"",size:N.DEFAULT,disabled:!1,type:"text",
placeholder:"",autoFocus:!1,maxLength:999};const I=P},881186:(e,r,t)=>{t.d(r,{q3:()=>i,Gc:()=>a,ol:()=>u});var n=t(785893),o=t(667294);function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++){t=l[n];r.indexOf(t)>=0||(o[t]=e[t])}return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++){t=l[n];r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}}return o}var i=o.createContext({titleId:void 0});function a(){return o.useContext(i)}function u(e){var r=e.children,t=l(e,["children"]);return(0,n.jsx)(i.Provider,{value:t,children:r})}}}]);
//# sourceMappingURL=ae7253bbba9cb57ac7b7.js.map