(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[34068],{455021:(e,t,r)=>{e.exports=r.p+"d55a815e67ecc4faaafeb63dd2379a5a.png"},595200:(e,t,r)=>{"use strict";r.d(t,{Z:()=>w,$:()=>P});var n=r(391809),o=r(356004),i=r(337823),a=r(561388),c=r(710536),l=r(927119),s=r(461061),u=r(959797);function f(e,t,r,n,o,i,a){try{var c=e[i](a),l=c.value}catch(e){r(e);return}c.done?t(l):Promise.resolve(l).then(n,o)}function p(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){f(i,n,o,a,c,"next",e)}function c(e){f(i,n,o,a,c,"throw",e)}a(void 0)}))}}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function y(e){y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return y(e)}function b(e,t){t=null!=t?t:{}
;Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}function O(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e,t){_=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return _(e,t)}var g=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{
Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var r,n=y(e);if(t){var o=y(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return O(this,r)}}var v=function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;(n=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:a.label++;return{value:i[1],done:!1};case 5:a.label++;n=i[1];i=[0];continue;case 7:i=a.ops.pop();a.trys.pop();continue;default:if(!(o=a.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}
if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1];o=i;break}if(o&&a.label<o[2]){a.label=o[2];a.ops.push(i);break}o[2]&&a.ops.pop();a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e];n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},E=new n.Z("CloudUploaderBase.tsx"),w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&_(e,t)}(r,e);var t=m(r);function r(){h(this,r);var e;(e=t.apply(this,arguments)).files=[];return e}var n=r.prototype;n._fileSize=function(){return this.files.reduce((function(e,t){var r;return e+=null!==(r=t.size)&&void 0!==r?r:0}),0)};n.compressAndCheckFileSize=function(){var e=this;return p((function(){var t,r,n,c,l,u,f,p,h,d,y;return v(this,(function(b){switch(b.label){case 0:if(e.files.length>s.dN1){
E.log("Too many attachments for ".concat(e.id));e._handleError(s.evJ.TOO_MANY_ATTACHMENTS);return[2,!1]}return[3,10];case 1:b.trys.push([1,8,9,10]);c=e.files[Symbol.iterator]();b.label=2;case 2:if(t=(l=c.next()).done)return[3,7];u=l.value;b.label=3;case 3:b.trys.push([3,5,,6]);return[4,u.reactNativeCompressAndExtractData()];case 4:b.sent();if(0==(null!==(f=u.size)&&void 0!==f?f:0)){e._handleError(s.evJ.ENTITY_EMPTY);return[2,!1]}p=o.Z.getBasicChannel(u.channelId);if((null!==(h=u.size)&&void 0!==h?h:0)>(0,i.dg)(null==p?void 0:p.guild_id)){e._handleError(s.evJ.ENTITY_TOO_LARGE);return[2,!1]}return[3,6];case 5:d=b.sent();e._handleError(d);return[2,!1];case 6:t=!0;return[3,2];case 7:return[3,10];case 8:y=b.sent();r=!0;n=y;return[3,10];case 9:try{t||null==c.return||c.return()}finally{if(r)throw n}return[7];case 10:if(e._fileSize()>a.zz){e._handleError(s.evJ.ENTITY_TOO_LARGE);return[2,!1]}return[2,!0]}}))}))()};n._filesTooLarge=function(){return this.files.some((function(e){
return e.error===s.evJ.ENTITY_TOO_LARGE}))};n.setUploadingTextForUI=function(){var e=1===this.files.length&&null!=this.files[0].filename?this.files[0].filename:u.Z.Messages.UPLOADING_FILES.format({count:this.files.length}),t=this.files.some((function(e){return e.isImage})),r=this.files.some((function(e){return e.isVideo})),n=this._fileSize();E.log("setUploadingTextForUI - total content: ".concat(n," bytes and ").concat(this.files.length," attachments for ").concat(this.id));this._file=b(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){d(e,t,r[t])}))}return e}({},this._file),{size:n,name:e,hasVideo:r,hasImage:t,attachmentsCount:this.files.length,items:this.files})};n._recomputeProgress=function(){
var e=this._fileSize(),t=this.files.reduce((function(e,t){var r;return e+=null!==(r=t.loaded)&&void 0!==r?r:0}),0);this._handleProgress(t,e);return{loaded:t,total:e}};n.cancel=function(){E.log("Cancel called for ".concat(this.id));if(!this._aborted){this._aborted=!0;null!=this._cancel&&this._cancel();this.files.forEach((function(e){return e.cancel()}));this._handleComplete()}};n.failed=function(){return this.files.some((function(e){return e.status===c.m.ERROR}))};n._remainingUploadCount=function(){var e=this.files;return e.length-e.filter((function(e){return e.status===c.m.COMPLETED})).length};n.clear=function(){this.cancel();this.files=[]};return r}(l.Z);function P(e){return S.apply(this,arguments)}function S(){S=p((function(e){var t,r,n,o=arguments;return v(this,(function(i){switch(i.label){case 0:t=o.length>1&&void 0!==o[1]&&o[1],r=o.length>2?o[2]:void 0;n=e.map((function(e){return new Promise((function(n,o){switch(e.status){case c.m.NOT_STARTED:e.upload();break;case c.m.COMPLETED:
n("complete");break;case c.m.ERROR:t&&e.error!==s.evJ.ENTITY_TOO_LARGE?e.upload():o(new Error("File failed to upload"));break;case c.m.CANCELED:o(new Error("Upload is canceled"))}e.on("complete",(function(){n("complete")}));e.on("error",(function(){o(new Error("File ".concat(e.id," failed to upload")))}));e.on("progress",(function(e,t){null==r||r(e,t)}))}))}));return[4,Promise.all(n)];case 1:i.sent();return[2]}}))}));return S.apply(this,arguments)}},927119:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(717187),o=r.n(n),i=r(496486),a=r.n(i),c=r(832691);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function f(e){f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)}
;return f(e)}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){u(e,t,r[t])}))}return e}function h(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}function d(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}
function y(e,t){y=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return y(e,t)}function b(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var O=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1
;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var r,n=f(e);if(t){var o=f(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return d(this,r)}}var g=new c.Z("UploaderBase.tsx"),m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&y(e,t)}(r,e);var t=_(r);function r(e){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"POST";s(this,r);(n=t.call(this))._token="";n._lastUpdate=0;n._loaded=0;n._aborted=!1;n._errored=!1;n.alreadyStarted=!1;n._handleStart=function(e){n._cancel=e;n.alreadyStarted||n.emit("start",n._file);n.alreadyStarted=!0};n._handleProgress=function(e,t){
var r=Date.now(),o=Math.min(Math.floor(e/t*100),100),i=Math.floor((e-n._loaded)/((r-n._lastUpdate)/1e3));n._lastUpdate=r;n._loaded=e;n._file=h(p({},n._file),{size:t,progress:o,rate:i});n.emit("progress",n._file)};n._handleError=function(e,t){n.clearProcessingMessageInterval();if(!n._aborted){n._errored=!0;g.log("_handleError: ".concat(e," for ").concat(n.id));n.emit("error",n._file,e,t);n.removeAllListeners()}};n._handleComplete=function(e){n.clearProcessingMessageInterval();g.log("_handleComplete for ".concat(n.id));n.emit("complete",n._file,e);n.removeAllListeners()};n.id=a().uniqueId("Uploader");n._url=e;n._method=o;return n}var n=r.prototype;n._addAttachmentsToPayload=function(e,t,r){var n=p({},e),o=b(a().get(n,t,[])).concat(b(r));return a().set(n,t,o)};n.clearProcessingMessageInterval=function(){if(null!=this.processingMessageChangeInterval){clearInterval(this.processingMessageChangeInterval);this.processingMessageChangeInterval=void 0}};n.cancel=function(){
g.log("cancel() for ".concat(this.id));this._aborted=!0;null!=this._cancel&&this._cancel();this._handleComplete()};n.upload=function(e,t,r){if(null!=this._cancel)throw new Error("Uploader.upload(...): An upload is already in progress.");this._lastUpdate=Date.now();this._loaded=0;this._file={id:this.id,name:e.name,size:0,compressionProgress:0,progress:0,rate:0,hasImage:!1,hasVideo:!1,attachmentsCount:0,draftContent:null==t?void 0:t.content,channelId:null==t?void 0:t.channel_id,items:r}};return r}(o())},862780:(e,t,r)=>{"use strict";r.r(t);r.d(t,{default:()=>y});var n=r(785893),o=(r(667294),r(402124)),i=r(337823),a=r(56133),c=r(324920),l=r(237886),s=r(298716),u=r(461061),f=r(959797);function p(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function h(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++){r=i[n];t.indexOf(r)>=0||(o[r]=e[r])}return o}(e,t)
;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++){r=i[n];t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}}return o}function d(e){return null!=(null==e?void 0:e.getGuildId())?u.ZY5.GUILD_CHANNEL:(null==e?void 0:e.isGroupDM())||(null==e?void 0:e.isPrivate())?u.ZY5.DM_CHANNEL:null}function y(e){var t=function(){b();(0,c.z)(!0)},y=e.channel,b=e.onClose,O=e.content,_=h(e,["channel","onClose","content"]);return(0,n.jsx)(l.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){p(e,t,r[t])}))}return e}({artURL:r(455021),type:s.cd.MESSAGE_LENGTH_UPSELL,title:f.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_HEADER,
body:f.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_BODY.format({maxLength:u.J6R,onLearnMore:t}),context:f.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT.format({maxLength:u.J6R}),glowUp:f.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_GLOW_UP.format({onLearnMore:t}),analyticsSource:{page:d(y)},analyticsLocation:{section:u.jXE.MESSAGE_LENGTH_UPSELL_MODAL,object:u.qAy.BUTTON_CTA},onClose:b,secondaryCTA:f.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_UPLOAD,onSecondaryClick:function(){b();var e=new Blob([O],{type:"text/plain"});(0,a.d)([(0,i.dp)(e,"message.txt")],y,o.d.ChannelMessage,{requireConfirm:!0,showLargeMessageDialog:!0})}},_))}}}]);
//# sourceMappingURL=dc41099d123547693258.js.map