"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[98153],{905091:(e,t,r)=>{r.r(t);r.d(t,{default:()=>S});var n=r(785893),o=r(667294),s=r(64228),a=r(294184),c=r.n(a),u=r(517563),i=r(737325),l=r(772731),p=r(82961),f=r(552067),y=r(461061),d=r(609993),h=r(959797),g=r(796275),_=r.n(g),A=r(12066),m=r.n(A);function v(e,t,r,n,o,s,a){try{var c=e[s](a),u=c.value}catch(e){r(e);return}c.done?t(u):Promise.resolve(u).then(n,o)}function b(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var s=e.apply(t,r);function a(e){v(s,n,o,a,c,"next",e)}function c(e){v(s,n,o,a,c,"throw",e)}a(void 0)}))}}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e){L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return L(e)}function E(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e)
;for(n=0;n<s.length;n++){r=s[n];t.indexOf(r)>=0||(o[r]=e[r])}return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++){r=s[n];t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}}return o}function O(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e,t){P=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return P(e,t)}var N=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var r,n=L(e);if(t){var o=L(this).constructor
;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return O(this,r)}}var T=function(e,t){var r,n,o,s,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function c(s){return function(c){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;(n=0,o)&&(s=[2&s[0],o.value]);switch(s[0]){case 0:case 1:o=s;break;case 4:a.label++;return{value:s[1],done:!1};case 5:a.label++;n=s[1];s=[0];continue;case 7:s=a.ops.pop();a.trys.pop();continue;default:if(!(o=a.trys,o=o.length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1];o=s;break}if(o&&a.label<o[2]){a.label=o[2];a.ops.push(s);break}
o[2]&&a.ops.pop();a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e];n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}};const S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&P(e,t)}(r,e);var t=R(r);function r(){C(this,r);var e,n;(e=t.apply(this,arguments)).state={loading:!0,success:!1,pending:!1};e.stringToSourceType=function(e){if(null==e)return y.HeQ.UNKNOWN;var t=parseInt(e);return isNaN(t)?y.HeQ.UNKNOWN:t};e.adyenResult=(n=b((function(e,t){return T(this,(function(r){switch(r.label){case 0:r.trys.push([0,3,,4]);return[4,(0,s.Z)({session:{sessionId:e}})];case 1:return[4,r.sent().session.submitDetails({details:{redirectResult:t}})];case 2:return[2,r.sent().resultCode===f.Of.Authorised];case 3:r.sent();return[2,!1];case 4:return[2]}}))})),function(e,t){
return n.apply(this,arguments)});e.getLogo=function(e){switch(e){case y.HeQ.PAYPAL:return _().paypalLogo;case y.HeQ.SOFORT:return _().sofortLogo;case y.HeQ.PAYSAFE_CARD:return _().paysafeCardLogo;case y.HeQ.GCASH:return _().gcashLogo;case y.HeQ.GRABPAY_MY:return _().grabPayLogo;case y.HeQ.MOMO_WALLET:return _().momoLogo;case y.HeQ.KAKAOPAY:return _().kakaopayLogo;case y.HeQ.GOPAY_WALLET:return _().goPayLogo;case y.HeQ.BANCONTACT:return _().bancontactLogo;case y.HeQ.EPS:return _().epsLogo;case y.HeQ.IDEAL:return _().idealLogo;case y.HeQ.GIROPAY:return _().giropayLogo;case y.HeQ.PRZELEWY24:return _().p24Logo}return""};return e}var o=r.prototype;o.componentDidMount=function(){var e=this,t=(0,u.parse)(this.props.location.search),r=t.state,n=t.path,o=t.payment_source_type,s=t.redirect_status,a=t.payment_source_id,c=t.resultCode,p=E(t,["state","path","payment_source_type","redirect_status","payment_source_id","resultCode"]),f=this.stringToSourceType(o);null!=a&&(p.payment_source_id=a)
;var h=function(t){var r=t.status,n="succeeded"===s||d.T2.has(f)&&"pending"===s;f===y.HeQ.PAYPAL&&(n=204===r&&"cancel"!==p.response_type);var o=!1;if(d.QL.has(f))if(null!=c)switch(c){case y.ekg.AUTHORISED:n=!0;break;case y.ekg.PENDING:o=!0;n=!1;break;default:n=!1}else n=null!=a;e.setState({loading:!1,success:n,pending:o})};l.default.request(y.Etm.BILLING_POPUP_BRIDGE_CALLBACK,{payment_source_type:f,state:r,path:n,query:p}).then(h,(function(e){return t="RPCError"!==e.name,(0,i.rt)({paymentSourceType:Number(f),state:r,path:n,query:p,insecure:t}).then(h,h);var t})).then((function(){return l.default.disconnect()}))};o.render=function(){var e,t=this.state,r=t.loading,o=t.success,s=t.pending,a=(0,u.parse)(this.props.location.search),i=a.payment_source_type,l=a.payment_source_id,f=this.stringToSourceType(i);e=r?(0,n.jsx)("div",{className:_().message,children:f===y.HeQ.PAYPAL?h.Z.Messages.PAYPAL_ACCOUNT_VERIFYING:h.Z.Messages.PAYMENT_ACCOUNT_VERIFYING}):o?(0,n.jsx)("div",{
className:_().message,children:f===y.HeQ.PAYPAL?h.Z.Messages.PAYPAL_CALLBACK_SUCCESS.format():null!=l?h.Z.Messages.REDIRECTED_PAYMENT_METHOD_CONFIRMATION_CALLBACK_SUCCESS.format():h.Z.Messages.REDIRECTED_CONFIRMATION_CALLBACK_SUCCESS.format()}):s?(0,n.jsx)("div",{className:_().message,children:h.Z.Messages.REDIRECTED_CALLBACK_PENDING}):(0,n.jsx)("div",{className:c()(_().message),children:h.Z.Messages.REDIRECTED_CALLBACK_ERROR});return(0,n.jsx)("div",{className:m().verifyConnectedAccount,children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:m().logos,children:[(0,n.jsx)("div",{className:c()(m().logo,m().logoDiscord)}),(0,n.jsx)("div",{className:m().logosDivider}),(0,n.jsx)("div",{className:c()(m().logo,this.getLogo(f))})]}),e,r?(0,n.jsx)(p.Z,{type:p.Z.Type.WANDERING_CUBES}):null]})})};return r}(o.Component)}}]);
//# sourceMappingURL=b5521390785cf76cab60.js.map