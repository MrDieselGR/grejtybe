"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[67895],{678081:(t,e,n)=>{n.d(e,{Z:()=>m});var r=n(785893),o=n(667294),i=n(193197),u=n(891153),a=n(337823),c=n(742269),l=n(561388);function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}function p(t){p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)};return p(t)}function d(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?f(t):e}function h(t,e){h=Object.setPrototypeOf||function(t,e){t.__proto__=e;return t};return h(t,e)}var y=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1
;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(t){return!1}}();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function v(t){var e=["openFile"];t.multiple&&e.push("multiSelections");var n=t.filters;u.Z.fileManager.openFiles({properties:e,filters:n},l.zz).then((function(e){var n=e.map((function(t){return a.qF(t)}));null!=n&&t.onChange({stopPropagation:function(){return null},preventDefault:function(){return null},currentTarget:{files:n}})})).catch((function(e){t.onChange({stopPropagation:function(){return null},preventDefault:function(){return null},currentTarget:{files:null,err:e}})}))}const m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,
configurable:!0}});e&&h(t,e)}(n,t);var e=b(n);function n(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n);var r;(r=e.call(this,t))._ref=o.createRef();r.setRef=r.setRef.bind(f(r));return r}var u=n.prototype;u.activateUploadDialogue=function(){if(null!=this._ref)return this._ref.activateUploadDialogue()};u.setRef=function(t){this._ref=t};u.render=function(){return(0,r.jsx)(i.Z,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))));r.forEach((function(e){s(t,e,n[e])}))}return t}({ref:this.setRef,handleNativeClick:v,embedded:(0,c.nI)()},this.props))};return n}(o.Component)},910866:(t,e,n)=>{n.d(e,{m:()=>r});var r;!function(t){t.MP4="video/mp4"}(r||(r={}))},567895:(t,e,n)=>{n.d(e,{Zj:()=>y,Fq:()=>b,ZP:()=>m})
;var r=n(785893),o=n(667294),i=n(678081),u=n(212271),a=n(910866),c=n(959797);function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t){f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)};return f(t)}function s(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t,e){p=Object.setPrototypeOf||function(t,e){t.__proto__=e;return t};return p(t,e)}var d=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){
var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function y(){return[{name:c.Z.Messages.IMAGES,extensions:["jpg","jpeg","png","gif"]}]}function b(t,e,n){!function(t,e){if(null!=t){var n=new FileReader;n.onload=function(n){var r;"string"==typeof(null===(r=n.target)||void 0===r?void 0:r.result)&&e(n.target.result,t)};n.readAsDataURL(t)}}(t,(function(r){if(t.type===a.m.MP4)return e(r,t);var o=new Image;o.src=r;o.onload=function(){e(r,t)};o.onerror=function(){n()}}))}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}});e&&p(t,e)}(n,t);var e=h(n);function n(){l(this,n);var t;(t=e.apply(this,arguments))._ref=o.createRef();t._isMounted=!1;t.handleFileChange=function(e){var n=t.props,r=n.onFileSizeError,o=n.maxFileSizeBytes;e.stopPropagation()
;e.preventDefault();if(null!=e.currentTarget.files)for(var i=0;i<e.currentTarget.files.length;i++){var u=e.currentTarget.files[i];u.size>o?null==r||r(o,u.size):b(u,t.handleFileRead,t.handleFileError)}};t.handleFileRead=function(e,n){var r=t.props.onChange;t._isMounted&&r(e,n)};t.handleFileError=function(){(0,u.xT)({title:c.Z.Messages.PREMIUM_ALERT_ERROR_TITLE,help:c.Z.Messages.UNABLE_TO_PROCESS_IMAGE})};return t}var a=n.prototype;a.componentDidMount=function(){this._isMounted=!0};a.activateUploadDialogue=function(){var t;null===(t=this._ref.current)||void 0===t||t.activateUploadDialogue()};a.render=function(){var t=this.props,e=t.multiple,n=t.disabled,o=t.className,u=t.tabIndex,a=t["aria-label"],c=t.filters;return(0,r.jsx)(i.Z,{ref:this._ref,onChange:this.handleFileChange,filters:null!=c?c:y(),multiple:e,disabled:n,className:o,tabIndex:u,"aria-label":a})};return n}(o.PureComponent);v.defaultProps={multiple:!0,tabIndex:-1,maxFileSizeBytes:1/0};const m=v},193197:(t,e,n)=>{n.d(e,{Z:()=>h
});var r=n(785893),o=n(667294);function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t){u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)};return u(t)}function a(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t,e){c=Object.setPrototypeOf||function(t,e){t.__proto__=e;return t};return c(t,e)}var l=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor
;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var s="file-input",p=function(t){return{position:"absolute",top:0,left:0,width:"100%",height:"100%",opacity:0,cursor:t?"not-allowed":"pointer",fontSize:0}},d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}});e&&c(t,e)}(n,t);var e=f(n);function n(){i(this,n);var t;(t=e.apply(this,arguments))._input=null;t.activateUploadDialogue=function(){t.props.embedded?t.handleNativeClick():t._input&&t._input.click()};t.handleNativeClick=function(){t.props.handleNativeClick&&t.props.handleNativeClick(t.props)};t.handleNativeKeyDown=function(e){" "!==e.key&&"Enter"!==e.key||t.handleNativeClick()};t.handleBrowserInputMouseDown=function(t){t.currentTarget.value=null};return t}n.prototype.render=function(){
var t=this,e=this.props,n=e.disabled,o=e.tabIndex,i=e.className,u=e.name,a=e["aria-label"],c=e["aria-hidden"];if(this.props.embedded)return(0,r.jsx)("div",{role:"button",style:p(n),className:i||s,tabIndex:o,onKeyDown:n?void 0:this.handleNativeKeyDown,onClick:n?void 0:this.handleNativeClick,"aria-disabled":n,"aria-label":a,"aria-hidden":c||void 0});var l="";this.props.filters&&(l=this.props.filters.map((function(t){return t.extensions.map((function(t){return".".concat(t)})).join(",")})).join(","));return(0,r.jsx)("input",{style:p(n),className:i||s,disabled:n,type:"file",tabIndex:o,onMouseDown:this.handleBrowserInputMouseDown,onChange:this.props.onChange,multiple:this.props.multiple,accept:l,name:u,"aria-label":a,"aria-hidden":c||void 0,ref:function(e){return t._input=e}})};return n}(o.Component);d.defaultProps={multiple:!1,disabled:!1,tabIndex:0};const h=d}}]);
//# sourceMappingURL=351b5af15e784ee2a279.js.map