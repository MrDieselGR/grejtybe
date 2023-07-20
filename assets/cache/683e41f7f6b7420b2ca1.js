"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[66767],{366767:(e,t,n)=>{n.r(t);n.d(t,{default:()=>$});var r=n(785893),o=n(667294),a=n(441143),s=n.n(a),l=n(791462),i=n(489992),u=n(152163),c=n(239396),f=n(536989),S=n(409271),p=n(651972),m=n(859023),d=n(191940),h=n(629858),O=n(761434),T=n(801593),j=n(15063),g=n(880680),y=n(523283),C=n(67416),v=n(632895),b=n(71531),_=n(932847),A=n(761222),x=n(730381),M=n.n(x),U=36e5,N=Object.freeze({MINUTES_30:18e5,HOURS_1:1*U,HOURS_4:4*U,TODAY:"TODAY"});function k(e){if(e===N.TODAY){var t=new Date;return new Date(t.getFullYear(),t.getMonth(),t.getDate()+1).getTime()-t.getTime()}s()("number"==typeof e,"Invalid custom status clear timeout");return e}var E=n(461061);function P(e){return null==e?null:null!=e.id?"custom":"unicode"}function I(e,t,n,r){var o=e.trim();if(o.length>0||null!=t){S.Ok.updateSetting({text:o.length>0?o:"",expiresAtMs:null!=n?String(M()().add(k(n),"ms").toDate().getTime()):"0",
emojiId:null!=t&&null!=t.id?t.id:"0",emojiName:null!=t?t.name:""});_.default.track(E.rMx.CUSTOM_STATUS_UPDATED,{location:null!=r?r.location:null,emoji_type:P(t),text_len:o.length,clear_after:null!=n?"".concat(n):null})}else S.Ok.updateSetting(void 0)}var D=n(959797),Z=n(739788),L=n.n(Z);function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1;r.configurable=!0;"value"in r&&(r.writable=!0);Object.defineProperty(e,r.key,r)}}function B(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function Y(e){Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return Y(e)}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n)
;"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){B(e,t,n[t])}))}return e}function z(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function F(e,t){return!t||"object"!==V(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function K(e,t){K=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return K(e,t)}var V=function(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=Y(e);if(t){var o=Y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return F(this,n)}}function G(){var e=S.Ok.getSetting();return null!=e&&"0"!==e.expiresAtMs?null:N.TODAY}function X(e){return(0,r.jsxs)("div",{className:L().statusOptionItem,children:[(0,r.jsx)(b.qb,{status:e.value,size:10,className:L().statusIcon}),e.label]})}var J=[{key:1,value:b.Sk.ONLINE,label:(0,A.u5)(b.Sk.ONLINE)},{key:2,value:b.Sk.IDLE,label:(0,A.u5)(b.Sk.IDLE)},{key:3,value:b.Sk.DND,label:(0,A.u5)(b.Sk.DND)},{key:4,value:b.Sk.INVISIBLE,label:(0,A.u5)(b.Sk.INVISIBLE)}];function Q(){var e=S.co.getSetting()
;return J.some((function(t){return t.value===e}))?e:b.Sk.ONLINE}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&K(e,t)}(n,e);var t=q(n);function n(){w(this,n);var e;(e=t.apply(this,arguments)).state={emojiInfo:null!=e.props.customStatus?e.props.customStatus.emoji:null,text:null!=e.props.customStatus&&null!=e.props.customStatus.state?e.props.customStatus.state:"",clearAfter:G(),status:Q()};e.handleClearStatus=function(){e.setState({emojiInfo:null,text:""})};e.handleSubmit=function(t){t.preventDefault();e.handleSaveStatus()};e.handleStatusChange=function(t){e.setState({text:t})};e.handleEmojiChange=function(t){if(null!=t){var n=null!=t.id?{id:t.id,name:t.name,animated:t.animated}:{id:null,name:t.optionallyDiverseSequence,animated:!1};e.setState({emojiInfo:n})}};e.handleChangeClearAfter=function(t){
e.setState({clearAfter:t})};e.handleChangeStatus=function(t){e.setState({status:t})};e.handleSaveStatus=function(){var t=e.props,n=t.sourceAnalyticsContext,r=t.onClose,o=e.state,a=o.emojiInfo,s=o.text,l=o.clearAfter,i=o.status;S.co.updateSetting(i);I(s,a,l,n);r()};e.handleKeyPress=function(t){t.which===E.yXg.ENTER&&e.handleSaveStatus()};e.renderEmojiPicker=function(t){var n=t.closePopout,o=e.props.onClose;return(0,r.jsx)(f.Z,{closePopout:n,onSelectEmoji:function(t,r){e.handleEmojiChange(t);r&&n()},pickerIntention:E.HzX.STATUS,onNavigateAway:o})};return e}var o=n.prototype;o.componentDidMount=function(){var e=this.props.sourceAnalyticsContext;_.default.track(E.rMx.OPEN_MODAL,{source:e.location,type:E.jXE.CUSTOM_STATUS_MODAL,load_id:e.loadId})};o.getEmojiButtonRenderer=function(){var e=this.state.emojiInfo;return null==e?null:function(){return(0,r.jsx)(u.Z,{className:L().emoji,emojiId:e.id,emojiName:e.name,animated:Boolean(e.animated)})}};o.renderCustomStatusInput=function(){
var e=this,t=this.props.user,n=this.state,o=n.text,a=n.emojiInfo;return(0,r.jsx)(g.Z,{className:L().formGroup,title:D.Z.Messages.CUSTOM_STATUS_MODAL_BODY.format({username:t.username}),children:(0,r.jsxs)("div",{className:L().inputContainer,children:[(0,r.jsx)("div",{className:L().emojiButtonContainer,children:(0,r.jsx)(O.ZP,{renderPopout:this.renderEmojiPicker,position:O.ZP.Positions.LEFT,animation:O.ZP.Animation.NONE,align:O.ZP.Align.BOTTOM,children:function(t,n){var o=n.isShown;return(0,r.jsx)(h.Z,z(H({},t),{active:o,className:L().emojiButton,tabIndex:0,renderButtonContents:e.getEmojiButtonRenderer()}))}})}),(0,r.jsx)(T.ZP,{maxLength:128,value:o,inputClassName:L().input,placeholder:D.Z.Messages.CUSTOM_STATUS_MODAL_PLACEHOLDER,onChange:this.handleStatusChange,onKeyPress:this.handleKeyPress,autoFocus:!0}),o.length>0||null!=a?(0,r.jsx)(d.Co,{focusProps:{offset:{top:8,bottom:8,left:-2,right:-2}},className:L().clearButton,onClick:this.handleClearStatus,look:d.Co.Looks.BLANK,
size:d.Co.Sizes.NONE,children:(0,r.jsx)(y.Z,{className:L().clearIcon})}):null]})})};o.renderClearAfter=function(){var e=this.state.clearAfter;return(0,r.jsx)(g.Z,{className:L().formGroup,title:D.Z.Messages.CUSTOM_STATUS_CLEAR_AFTER,children:(0,r.jsx)(v.q4,{placeholder:D.Z.Messages.CUSTOM_STATUS_CLEAR_AFTER,maxVisibleItems:5,value:e,options:this.clearAfterOptions,onChange:this.handleChangeClearAfter})})};o.renderStatusInput=function(){var e=this.state.status;return(0,r.jsx)(g.Z,{className:L().formGroup,title:D.Z.Messages.CUSTOM_STATUS_STATUS_TITLE,children:(0,r.jsx)(v.q4,{maxVisibleItems:4,value:e,options:J,onChange:this.handleChangeStatus,renderOptionLabel:X})})};o.render=function(){var e=this.props,t=e.transitionState,n=e.onClose;return(0,r.jsx)(c.Z,z(H({},this.analyticsLocation),{children:(0,r.jsxs)(C.Y0,{transitionState:t,className:L().modalRoot,"aria-label":D.Z.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS,children:[(0,r.jsxs)(C.xB,{separator:!1,className:L().headerContainer,
children:[(0,r.jsx)("div",{className:L().art}),(0,r.jsx)("div",{className:L().header,children:(0,r.jsx)(i.H,{className:L().headerText,children:D.Z.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS})}),(0,r.jsx)(C.ol,{onClick:n,className:L().modalCloseButton})]}),(0,r.jsxs)(C.hz,{children:[this.renderCustomStatusInput(),this.renderClearAfter(),(0,r.jsx)(j.Z,{className:L().formDivider}),this.renderStatusInput()]}),(0,r.jsxs)(C.mz,{children:[(0,r.jsx)(d.Co,{onClick:this.handleSubmit,children:D.Z.Messages.SAVE}),(0,r.jsx)(d.Co,{onClick:n,look:d.Co.Looks.LINK,color:L().cancelButton,children:D.Z.Messages.CANCEL})]})]})}))};!function(e,t,n){t&&R(e.prototype,t);n&&R(e,n)}(n,[{key:"clearAfterOptions",get:function(){return[{key:1,value:N.TODAY,label:D.Z.Messages.CUSTOM_STATUS_TODAY},{key:2,value:N.HOURS_4,label:D.Z.Messages.CUSTOM_STATUS_HOURS.format({hours:4})},{key:3,value:N.HOURS_1,label:D.Z.Messages.CUSTOM_STATUS_HOURS.format({hours:1})},{key:4,value:N.MINUTES_30,
label:D.Z.Messages.CUSTOM_STATUS_MINUTES.format({minutes:30})},{key:5,value:null,label:D.Z.Messages.CUSTOM_STATUS_DONT_CLEAR}]}},{key:"analyticsLocation",get:function(){return{page:E.ZY5.CUSTOM_STATUS_MODAL}}}]);return n}(o.PureComponent);const $=l.ZP.connectStores([p.Z,m.default],(function(){var e=m.default.getCurrentUser();s()(null!=e,"CustomStatusModal: user cannot be null");return{customStatus:p.Z.getCustomStatusActivity(),user:e}}),{forwardRef:!0})(W)}}]);
//# sourceMappingURL=683e41f7f6b7420b2ca1.js.map