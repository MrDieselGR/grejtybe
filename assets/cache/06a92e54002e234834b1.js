"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[92623],{392623:(e,t,n)=>{n.r(t);n.d(t,{default:()=>v});var r=n(785893),a=n(667294),o=n(489992),i=n(173436);var s=n(191940),c=n(487502),E=n(138402),l=n(67416),d=n(932847),T=n(461061),u=n(959797),D=n(160409),N=n.n(D);function f(e){f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return f(e)}function _(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e,t){C=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return C(e,t)}var p,O=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{
Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var a=f(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return _(this,n)}}function m(e){switch(e){case T.QyF.INPUT:return T.aVf.INPUT;case T.QyF.OUTPUT:return T.aVf.OUTPUT;case T.QyF.INPUT_AND_OUTPUT:return T.aVf.INPUT_AND_OUTPUT;default:return null}}!function(e){e.CERTIFIED="New Audio Device Detected - Certified";e.NOT_CERTIFIED="New Audio Device Detected - Not Certified"}(p||(p={}));var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&C(e,t)}(n,e);var t=I(n);function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var r;(r=t.call(this,e)).confirm=function(){
var e=r.props,t=e.device,n=e.onClose,a=r.state.devicePreference;if(null!=a){o=t.displayName,s=a,c="New Audio Device Detected Modal",i.Z.dispatch({type:"CONNECTED_DEVICE_SET",displayName:o,connectedDevicePreference:s,location:c});var o,s,c;n()}};r.cancel=function(){var e,t=r.props,n=t.device,a=t.onClose;e=n.displayName,i.Z.dispatch({type:"CONNECTED_DEVICE_IGNORE",displayName:e});a()};r.neverShow=function(){var e=r.props,t=e.certifiedDeviceMetadata,n=e.onClose;i.Z.dispatch({type:"CONNECTED_DEVICE_NEVER_SHOW_MODAL"});n();d.default.track(T.rMx.MODAL_DISMISSED,{type:null!=t?p.CERTIFIED:p.NOT_CERTIFIED,dismiss_type:"permanent"})};r.handleConnectedDeviceType=function(e){var t=e.value;r.setState({devicePreference:t})};r.state={devicePreference:null!=e.device?m(e.device.type):null};return r}var D=n.prototype;D.track=function(){var e=this.props,t=e.certifiedDeviceMetadata,n=e.device;d.default.track(T.rMx.OPEN_MODAL,{type:null!=t?p.CERTIFIED:p.NOT_CERTIFIED,
device_name:null!=t?"".concat(t.vendor.name," ").concat(t.model.name):n.displayName})};D.componentDidMount=function(){this.track()};D.componentDidUpdate=function(e){this.props.device.displayName!==e.device.displayName&&this.track()};D.renderBody=function(){var e,t=this.props,n=t.device,o=t.certifiedDeviceMetadata,i=this.state.devicePreference;switch(n.type){case T.QyF.INPUT:e=null!=o?u.Z.Messages.CERTIFIED_DEVICE_RECOMMENDATION_AUDIO_INPUT_BODY.format({vendorName:o.vendor.name,modelName:o.model.name}):u.Z.Messages.CONNECTED_DEVICE_DETECTED_INPUT_BODY.format({name:n.displayName});break;case T.QyF.OUTPUT:e=null!=o?u.Z.Messages.CERTIFIED_DEVICE_RECOMMENDATION_AUDIO_OUTPUT_BODY.format({vendorName:o.vendor.name,modelName:o.model.name}):u.Z.Messages.CONNECTED_DEVICE_DETECTED_OUTPUT_BODY.format({name:n.displayName});break;default:e=(0,r.jsxs)(a.Fragment,{children:[null!=o?u.Z.Messages.CERTIFIED_DEVICE_RECOMMENDATION_AUDIO_INPUT_AND_OUTPUT_BODY.format({vendorName:o.vendor.name,
modelName:o.model.name}):u.Z.Messages.CONNECTED_DEVICE_DETECTED_INPUT_AND_OUTPUT_BODY.format({name:n.displayName}),(0,r.jsx)(E.ZP,{value:i,className:N().options,onChange:this.handleConnectedDeviceType,options:[{name:u.Z.Messages.CONNECTED_DEVICE_DETECTED_OPTION_INPUT_AND_OUTPUT,value:T.aVf.INPUT_AND_OUTPUT},{name:u.Z.Messages.CONNECTED_DEVICE_DETECTED_OPTION_INPUT,value:T.aVf.INPUT},{name:u.Z.Messages.CONNECTED_DEVICE_DETECTED_OPTION_OUTPUT,value:T.aVf.OUTPUT}]})]})}return(0,r.jsxs)(a.Fragment,{children:[e,(0,r.jsx)(s.Co,{className:N().neverShow,look:s.Co.Looks.LINK,color:s.Co.Colors.LINK,onClick:this.neverShow,children:u.Z.Messages.DONT_SHOW_AGAIN})]},n.displayName)};D.render=function(){var e=this.props,t=e.certifiedDeviceMetadata,n=e.transitionState,a=null!=t?u.Z.Messages.CERTIFIED_DEVICE_RECOMMENDATION_TITLE:u.Z.Messages.CONNECTED_DEVICE_DETECTED_TITLE;return(0,r.jsxs)(l.Y0,{transitionState:n,"aria-label":a,children:[(0,r.jsx)(l.xB,{separator:!1,children:(0,r.jsx)(o.X6,{
variant:"heading-lg/semibold",children:a})}),(0,r.jsx)(l.hz,{children:(0,r.jsx)(o.xv,{variant:"text-md/normal",children:this.renderBody()})}),(0,r.jsx)(l.mz,{children:(0,r.jsxs)(c.Z,{justify:c.Z.Justify.END,children:[(0,r.jsx)(s.Co,{color:s.Co.Colors.PRIMARY,onClick:this.cancel,className:N().cancelButton,children:u.Z.Messages.CONNECTED_DEVICE_DETECTED_CANCEL_BUTTON}),(0,r.jsx)(s.Co,{onClick:this.confirm,children:u.Z.Messages.CONNECTED_DEVICE_DETECTED_CONFIRM_BUTTON})]})})]})};return n}(a.Component)}}]);
//# sourceMappingURL=06a92e54002e234834b1.js.map