/*! For license information please see 0384964b4ae5479e49f0.js.LICENSE.txt */
(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[331],{178598:function(e,t,n){var r,o=o||function(e){"use strict";if("undefined"==typeof navigator||!/MSIE [1-9]\./.test(navigator.userAgent)){var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,i=/Version\/[\d\.]+.*Safari/.test(navigator.userAgent),a=e.webkitRequestFileSystem,s=e.requestFileSystem||a||e.mozRequestFileSystem,c=function(t){(e.setImmediate||e.setTimeout)((function(){throw t}),0)},l="application/octet-stream",u=0,f=function(e){setTimeout((function(){"string"==typeof e?n().revokeObjectURL(e):e.remove()}),4e4)},d=function(e,t,n){for(var r=(t=[].concat(t)).length;r--;){var o=e["on"+t[r]];if("function"==typeof o)try{o.call(e,n||e)}catch(e){c(e)}}},p=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["ï»¿",e],{type:e.type}):e},h=function(t,c,h){h||(t=p(t))
;var S,y,b,O=this,_=t.type,m=!1,v=function(){d(O,"writestart progress write writeend".split(" "))},M=function(){if(y&&i&&"undefined"!=typeof FileReader){var r=new FileReader;r.onloadend=function(){var e=r.result;y.location.href="data:attachment/file"+e.slice(e.search(/[,;]/));O.readyState=O.DONE;v()};r.readAsDataURL(t);O.readyState=O.INIT}else{!m&&S||(S=n().createObjectURL(t));if(y)y.location.href=S;else{void 0===e.open(S,"_blank")&&i&&(e.location.href=S)}O.readyState=O.DONE;v();f(S)}},g=function(e){return function(){if(O.readyState!==O.DONE)return e.apply(this,arguments)}},C={create:!0,exclusive:!1};O.readyState=O.INIT;c||(c="download");if(o){S=n().createObjectURL(t);setTimeout((function(){r.href=S;r.download=c;e=r,t=new MouseEvent("click"),e.dispatchEvent(t);var e,t;v();f(S);O.readyState=O.DONE}))}else{if(e.chrome&&_&&_!==l){b=t.slice||t.webkitSlice;t=b.call(t,0,t.size,l);m=!0}a&&"download"!==c&&(c+=".download");(_===l||a)&&(y=e);if(s){u+=t.size;s(e.TEMPORARY,u,g((function(e){
e.root.getDirectory("saved",C,g((function(e){var n=function(){e.getFile(c,C,g((function(e){e.createWriter(g((function(n){n.onwriteend=function(t){y.location.href=e.toURL();O.readyState=O.DONE;d(O,"writeend",t);f(e)};n.onerror=function(){var e=n.error;e.code!==e.ABORT_ERR&&M()};"writestart progress write abort".split(" ").forEach((function(e){n["on"+e]=O["on"+e]}));n.write(t);O.abort=function(){n.abort();O.readyState=O.DONE};O.readyState=O.WRITING})),M)})),M)};e.getFile(c,{create:!1},g((function(e){e.remove();n()})),g((function(e){e.code===e.NOT_FOUND_ERR?n():M()})))})),M)})),M)}else M()}},S=h.prototype;if("undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob)return function(e,t,n){n||(e=p(e));return navigator.msSaveOrOpenBlob(e,t||"download")};S.abort=function(){var e=this;e.readyState=e.DONE;d(e,"abort")};S.readyState=S.INIT=0;S.WRITING=1;S.DONE=2;S.error=S.onwritestart=S.onprogress=S.onwrite=S.onabort=S.onerror=S.onwriteend=null;return function(e,t,n){return new h(e,t,n)}}
}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);e.exports?e.exports.saveAs=o:null!==n.amdD&&null!==n.amdO&&void 0!==(r=function(){return o}.apply(t,[]))&&(e.exports=r)},394330:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(667294),o=n(178598),i=n(891153),a=n(742269);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e){c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return c(e)}function l(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t){u=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return u(e,t)}var f=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&u(e,t)}(n,e);var t=d(n);function n(){s(this,n);var e;(e=t.apply(this,arguments)).handleFileDownload=function(t){t.preventDefault();var n=e.getFileContents(),r=e.props,o=r.fileName,i=r.onDownload;a.FB?e.downloadNative(n,o):e.downloadHtml5(n,o);null==i||i()};return e}var c=n.prototype;c.getFileContents=function(){var e=this.props.fileContents;"function"==typeof e&&(e=e());return e};c.downloadNative=function(e,t){
i.Z.fileManager.saveWithDialog(e,t)};c.downloadHtml5=function(e,t){var n=new Blob([e],{type:this.props.contentType});(0,o.saveAs)(n,t)};c.render=function(){var e=this.props.children,t=r.Children.only(e);return r.cloneElement(t,{onClick:this.handleFileDownload})};return n}(r.Component)},900331:(e,t,n)=>{"use strict";n.r(t);n.d(t,{default:()=>U});var r=n(785893),o=n(667294),i=n(441143),a=n.n(i),s=n(791462),c=n(489992),l=n(179211),u=n(394330),f=n(997846),d=n(74907),p=n(99918),h=n(585771),S=n(859023),y=n(191940),b=n(487502),O=n(15063),_=n(962271),m=n(30741),v=n(67416),M=n(897576),g=n(444133),C=n(461061),w=n(330665),E=n(959797),A=n(748350),x=n.n(A);function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function R(e){R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return R(e)}
function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){j(e,t,n[t])}))}return e}function F(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function P(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,t)
;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}}return o}function T(e,t){return!t||"object"!==B(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Z(e,t){Z=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return Z(e,t)}var B=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function L(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=R(e);if(t){var o=R(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return T(this,n)}}
var k=function(e){var t=e.label,n=e.text,o=e.children,i=P(e,["label","text","children"]);return(0,r.jsxs)(b.Z,F(D({direction:b.Z.Direction.VERTICAL},i),{children:[(0,r.jsx)(_.Z,{tag:"h2",children:t}),null!=n?(0,r.jsx)(c.xv,{variant:"text-md/normal",className:x().sectionBody,children:n}):null,(0,r.jsx)(b.Z.Child,{wrap:!0,children:o})]}))},I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&Z(e,t)}(n,e);var t=L(n);function n(){N(this,n);var e;(e=t.apply(this,arguments)).state={didAddBackup:!1,showConfirmModal:!1};e.handleCloseModal=function(){var t=e.props,n=t.onClose,r=t.currentUser,o=e.state.didAddBackup,i=r.hasFlag(C.xW$.MFA_SMS);o||i?null==n||n():e.setState({showConfirmModal:!0})};e.getDownloadFileContents=function(){var t=e.props.backupCodes.map((function(e){var t=e.consumed,n=e.code
;return"* ".concat(n.substr(0,4),"-").concat(n.substr(4)," ").concat(t?"(".concat(E.Z.Messages.TWO_FA_BACKUP_CODE_USED,")"):"")})).join("\r\n"),n=E.Z.Messages.TWO_FA_DISCORD_BACKUP_CODES.format({email:e.props.currentUser.email});return"".concat(n,"\r\n\r\n").concat(t)};e.handleChangePhoneNumber=function(){e.openPhoneVerificationModal()};e.handleEnableSMS=function(){var t=function(){(0,M.h7)((function(t){return(0,r.jsx)(g.default,F(D({},t),{handleSubmit:function(t){e.setState({didAddBackup:!0});return l.Z.enableSMS(t)},title:E.Z.Messages.MFA_SMS_ENABLE}))}))};null==e.props.currentUser.phone?e.openPhoneVerificationModal({onAddedPhone:t}):t()};return e}var o=n.prototype;o.renderSMSSection=function(){var e=this.props.currentUser,t=null!=this.props.currentUser.phone,n=e.hasFlag(C.xW$.MFA_SMS),o=e.hasFlag(C.xW$.PARTNER)||e.hasFlag(C.xW$.STAFF);return t?(0,r.jsxs)(k,{label:E.Z.Messages.MFA_SMS_ENABLE,text:E.Z.Messages.MFA_SMS_AUTH_SALES_PITCH,children:[(0,r.jsxs)(c.xv,{
variant:"text-md/normal",className:x().sectionBody,children:[(0,r.jsx)("strong",{className:x().phoneNumber,children:E.Z.Messages.MFA_SMS_AUTH_CURRENT_PHONE.format({phoneNumber:e.phone})}),(0,r.jsx)(y.Co,{look:y.Co.Looks.LINK,color:y.Co.Colors.LINK,size:y.Co.Sizes.MIN,className:x().linkButton,onClick:this.handleChangePhoneNumber,children:E.Z.Messages.CHANGE_PHONE_NUMBER})]}),(0,r.jsx)(y.Co,{onClick:this.handleEnableSMS,disabled:n||o,color:y.Co.Colors.GREEN,size:y.Co.Sizes.SMALL,children:o?E.Z.Messages.MFA_SMS_DISABLED_PARTNER:n?E.Z.Messages.MFA_SMS_ALREADY_ENABLED:E.Z.Messages.MFA_SMS_ENABLE})]}):(0,r.jsx)(k,{label:E.Z.Messages.MFA_SMS_ENABLE,text:E.Z.Messages.MFA_SMS_AUTH_SALES_PITCH,children:(0,r.jsx)(y.Co,{onClick:this.handleEnableSMS,color:y.Co.Colors.GREEN,size:y.Co.Sizes.SMALL,disabled:o,children:o?E.Z.Messages.MFA_SMS_DISABLED_PARTNER:E.Z.Messages.MFA_SMS_ADD_PHONE})})};o.renderBackupCodesSection=function(){var e=this;return(0,r.jsx)(k,{label:E.Z.Messages.TWO_FA_DOWNLOAD_CODES,
text:E.Z.Messages.TWO_FA_BACKUP_CODES_WARNING.format(),children:(0,r.jsx)(u.Z,{fileContents:this.getDownloadFileContents,contentType:"text/plain",fileName:"discord_backup_codes.txt",onDownload:function(){return e.setState({didAddBackup:!0})},children:(0,r.jsx)(y.Co,{color:y.Co.Colors.GREEN,size:y.Co.Sizes.SMALL,children:E.Z.Messages.TWO_FA_DOWNLOAD_CODES})})})};o.renderHeader=function(){return(0,r.jsxs)(v.xB,{separator:!1,children:[(0,r.jsxs)(b.Z.Child,{grow:1,shrink:1,children:[(0,r.jsx)(c.X6,{variant:"heading-lg/semibold",className:x().header,children:d.Z.parse(E.Z.Messages.TWO_FA_SUCCESS_HEADER)}),(0,r.jsx)(c.xv,{variant:"text-xs/normal",className:x().subHeader,children:E.Z.Messages.MFA_SMS_ENABLE_SHOULD_DO.format()})]}),(0,r.jsx)(b.Z.Child,{grow:0,children:(0,r.jsx)(v.ol,{onClick:this.handleCloseModal})})]})};o.renderConfirmModal=function(){var e=this,t=this.props.onClose;return(0,r.jsx)(m.DeclarativeConfirmModal,{dismissable:!0,header:E.Z.Messages.TWO_FA_CONFIRM_TITLE,
confirmText:E.Z.Messages.TWO_FA_CONFIRM_CONFIRM,cancelText:E.Z.Messages.CANCEL,onCancel:function(){return e.setState({showConfirmModal:!1})},onConfirm:t,children:(0,r.jsx)(c.xv,{variant:"text-md/normal",color:"text-normal",children:E.Z.Messages.TWO_FA_CONFIRM_BODY})})};o.render=function(){var e=this.props.transitionState,t=this.state.showConfirmModal;return(0,r.jsxs)(v.Y0,{transitionState:e,className:x().modal,children:[this.renderHeader(),(0,r.jsxs)(v.hz,{className:x().modalInner,children:[this.renderSMSSection(),(0,r.jsx)(O.Z,{className:x().divider}),this.renderBackupCodesSection()]}),t&&this.renderConfirmModal()]})};o.openPhoneVerificationModal=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,M.h7)((function(t){return(0,r.jsx)(f.default,D({reason:p.L.MFA_PHONE_UPDATE},t,e))}),{modalKey:w.M})};return n}(o.PureComponent);const U=s.ZP.connectStores([S.default,h.Z],(function(){var e=S.default.getCurrentUser()
;a()(null!=e,"MFAEnableSuccess: currentUser cannot be undefined");return{currentUser:e,backupCodes:h.Z.getBackupCodes()}}))(I)}}]);
//# sourceMappingURL=0384964b4ae5479e49f0.js.map