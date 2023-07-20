"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[17126],{822567:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(506884),o=n(974119),i=n(675860),l=n(444450),u=n(173436),c=n(323657),s=n(682),a=n(655695),f=n(631134),p=n(692410),d=n(742269),h=n(666492),y=n(461061),E=n(959797);function v(e,t,n,r,o,i,l){try{var u=e[i](l),c=u.value}catch(e){n(e);return}u.done?t(c):Promise.resolve(c).then(r,o)}function O(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function l(e){v(i,r,o,l,u,"next",e)}function u(e){v(i,r,o,l,u,"throw",e)}l(void 0)}))}}function b(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){
return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){b(e,t,n[t])}))}return e}var _,g=function(e,t){var n,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:l.label++;return{value:i[1],done:!1};case 5:l.label++;r=i[1];i=[0];continue;case 7:i=l.ops.pop();l.trys.pop();continue;default:if(!(o=l.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1];o=i;break}if(o&&l.label<o[2]){l.label=o[2]
;l.ops.push(i);break}o[2]&&l.ops.pop();l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},S=null;function R(e){return null==e?E.Z.Messages.NETWORK_ERROR_REST_REQUEST:null!=e.message?e.message:null!=e.code&&Array.isArray(e.code)?e.code[0]:E.Z.Messages.NETWORK_ERROR_REST_REQUEST}function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y.Z5c.DEFAULT_LOGGED_OUT;u.Z.dispatch({type:"LOGOUT"});null!=e&&(0,a.uL)(e)}const w={startSession:function(e){u.Z.wait((function(){u.Z.dispatch({type:"START_SESSION",token:e})}))},setLoginCredentials:function(e,t){u.Z.dispatch({type:"SET_LOGIN_CREDENTIALS",login:e,password:t})},login:function(e){var t,n=e.login,o=e.password,i=e.loginCode,l=e.undelete,s=e.captchaKey,a=e.source,f=e.giftCodeSKUId,p=e.invite,d=e.isMultiAccount;u.Z.dispatch({type:"LOGIN",login:n,loginMethod:null!=i&&""!==i?y.nnr.LOGIN_CODE:y.nnr.PASSWORD})
;this.setLoginCredentials(n,null!==(t=null!=o?o:i)&&void 0!==t?t:void 0);h.Z.post(m({url:y.ANM.LOGIN,body:{login:n,password:o,undelete:l,login_code:i,captcha_key:s,login_source:a,gift_code_sku_id:f},retries:2,oldFormErrors:!0,trackedActionData:{event:r.a9.USER_LOGIN,properties:{invite_code:null==p?void 0:p.code,is_multi_account:d}}},d?{headers:{authorization:""}}:{})).then((function(e){var t=e.body,n=t.mfa,r=t.sms,o=t.webauthn,i=t.ticket,l=t.token,c=t.user_id,s=t.required_actions;u.Z.dispatch({type:"LOGIN_ATTEMPTED",user_id:c,required_actions:s});if(n)u.Z.dispatch({type:"LOGIN_MFA_STEP",ticket:i,sms:r,webauthn:o});else{d&&u.Z.dispatch({type:"LOGOUT",isSwitchingAccount:!0});u.Z.dispatch({type:"LOGIN_SUCCESS",token:l})}}),(function(e){var t,r=null===(t=e.body)||void 0===t?void 0:t.code;r===y.evJ.ACCOUNT_SCHEDULED_FOR_DELETION&&null!=o&&""!==o?u.Z.dispatch({type:"LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION",credentials:{login:n,password:o}
}):r===y.evJ.ACCOUNT_DISABLED&&null!=o&&""!==o?u.Z.dispatch({type:"LOGIN_ACCOUNT_DISABLED",credentials:{login:n,password:o}}):r===y.evJ.PHONE_VERIFICATION_REQUIRED?u.Z.dispatch({type:"LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED"}):u.Z.dispatch({type:"LOGIN_FAILURE",error:new c.yZ(e)})}))},loginMFA:function(e){var t=e.code,n=e.ticket,o=e.source,i=e.giftCodeSKUId,l=e.isMultiAccount,c=e.isWebAuthn;u.Z.dispatch({type:"LOGIN_MFA"});h.Z.post({url:c?y.ANM.LOGIN_WEBAUTHN:y.ANM.LOGIN_MFA,body:{code:t,ticket:n,login_source:o,gift_code_sku_id:i},retries:2,oldFormErrors:!0,trackedActionData:{event:r.a9.USER_LOGIN_MFA}}).then((function(e){l&&u.Z.dispatch({type:"LOGOUT",isSwitchingAccount:!0});u.Z.dispatch({type:"LOGIN_SUCCESS",token:e.body.token})}),(function(e){return u.Z.dispatch({type:"LOGIN_MFA_FAILURE",message:R(e.body)})}))},requestSMSToken:function(e){u.Z.dispatch({type:"LOGIN_MFA_SMS"});h.Z.post({url:y.ANM.LOGIN_SMS_SEND,body:{ticket:e},oldFormErrors:!0,trackedActionData:{
event:r.a9.LOGIN_REQUEST_SMS_TOKEN}}).then((function(e){var t=e.body.phone;u.Z.dispatch({type:"LOGIN_MFA_SMS_REQUEST_SUCCESS",phone:t})}),(function(e){u.Z.dispatch({type:"LOGIN_MFA_FAILURE",message:R(e.body)})}))},loginSMS:function(e){var t=e.code,n=e.ticket,o=e.source,i=e.giftCodeSKUId,l=e.isMultiAccount;u.Z.dispatch({type:"LOGIN_MFA_SMS"});h.Z.post({url:y.ANM.LOGIN_SMS,body:{code:t,ticket:n,login_source:o,gift_code_sku_id:i},retries:2,oldFormErrors:!0,trackedActionData:{event:r.a9.USER_LOGIN_MFA_SMS}}).then((function(e){l&&u.Z.dispatch({type:"LOGOUT",isSwitchingAccount:!0});u.Z.dispatch({type:"LOGIN_SUCCESS",token:e.body.token})}),(function(e){return u.Z.dispatch({type:"LOGIN_MFA_SMS_FAILURE",message:R(e.body)})}))},loginToken:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this;u.Z.dispatch({type:"LOGIN"});return new Promise((function(r){setImmediate((function(){u.Z.dispatch({type:"LOGIN_SUCCESS",token:e});t&&n.startSession(e);r()}))}))},
loginReset:function(e){u.Z.dispatch({type:"LOGIN_RESET",isMultiAccount:e})},loginStatusReset:function(){u.Z.dispatch({type:"LOGIN_STATUS_RESET"})},logout:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y.Z5c.DEFAULT_LOGGED_OUT,n=arguments.length>1?arguments[1]:void 0;return h.Z.post(m({url:y.ANM.LOGOUT,body:{provider:(0,d.xJ)(),token:l.Z.get(y.JkL),voip_provider:y.mvA,voip_token:l.Z.get(y.scU)},oldFormErrors:!0,trackedActionData:{event:r.a9.USER_LOGOUT}},null!=n&&{headers:{authorization:null!==(e=o.Z.getToken(n))&&void 0!==e?e:""}})).finally((function(){null!=n&&n!==f.default.getId()||I(t)}))},verifySSOToken:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y.Z5c.DEFAULT_LOGGED_OUT;return i.Z.get({url:y.ANM.ME,oldFormErrors:!0}).catch((function(){return I(e)}))},verify:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;null!=e?h.Z.post({url:y.ANM.VERIFY,body:{token:e,captcha_key:t},oldFormErrors:!0,
trackedActionData:{event:r.a9.USER_VERIFY}}).then((function(e){u.Z.dispatch({type:"LOGIN_SUCCESS",token:e.body.token});u.Z.dispatch({type:"VERIFY_SUCCESS",verifyingUserId:e.body.user_id})}),(function(e){return u.Z.dispatch({type:"VERIFY_FAILURE",errors:e.body})})):u.Z.dispatch({type:"VERIFY_FAILURE",errors:{}})},authorizePayment:function(e){return O((function(){return g(this,(function(t){switch(t.label){case 0:t.trys.push([0,2,,3]);return[4,h.Z.post({url:y.ANM.AUTHORIZE_PAYMENT,body:{token:e},oldFormErrors:!0,trackedActionData:{event:r.a9.AUTHORIZE_PAYMENT}})];case 1:t.sent();u.Z.dispatch({type:"VERIFY_SUCCESS"});return[3,3];case 2:t.sent();u.Z.dispatch({type:"VERIFY_FAILURE",errors:{}});return[3,3];case 3:return[2]}}))}))()},authorizeIPAddress:function(e){return O((function(){return g(this,(function(t){switch(t.label){case 0:if(null==e){u.Z.dispatch({type:"VERIFY_FAILURE",errors:{}});return[2]}t.label=1;case 1:t.trys.push([1,3,,4]);return[4,h.Z.post({url:y.ANM.AUTHORIZE_IP,body:{
token:e},oldFormErrors:!0,trackedActionData:{event:r.a9.AUTHORIZE_IP}})];case 2:t.sent();u.Z.dispatch({type:"VERIFY_SUCCESS"});return[3,4];case 3:t.sent();u.Z.dispatch({type:"VERIFY_FAILURE",errors:{}});return[3,4];case 4:return[2]}}))}))()},verifyResend:function(){return h.Z.post({url:y.ANM.VERIFY_RESEND,oldFormErrors:!0,trackedActionData:{event:r.a9.USER_VERIFY_RESEND}})},resetPassword:function(e,t){return O((function(){var n,o,i,s,a,f,p,E,v,O,b,m;return g(this,(function(_){switch(_.label){case 0:u.Z.dispatch({type:"LOGIN"});n={token:e,password:t};o=l.Z.get(y.JkL);if(null!=(i=(0,d.xJ)())&&null!=o){n.push_provider=i;n.push_token=o}s=l.Z.get(y.scU);if(null!=y.mvA&&null!=s){n.push_voip_provider=y.mvA;n.push_voip_token=s}_.label=1;case 1:_.trys.push([1,3,,4]);return[4,h.Z.post({url:y.ANM.RESET_PASSWORD,body:n,oldFormErrors:!0,trackedActionData:{event:r.a9.USER_RESET_PASSWORD}})];case 2:a=_.sent(),f=a.body,p=f.mfa,E=f.sms,v=f.webauthn,O=f.ticket,b=f.token;if(p){u.Z.dispatch({
type:"LOGIN_MFA_STEP",ticket:O,sms:E,webauthn:v});return[2,!1]}u.Z.dispatch({type:"LOGIN_SUCCESS",token:b});return[2,!0];case 3:m=_.sent();u.Z.dispatch({type:"LOGIN_FAILURE",error:new c.yZ(m)});throw m;case 4:return[2]}}))}))()},resetPasswordMFA:function(e,t,n,o){return O((function(){var i,l;return g(this,(function(c){switch(c.label){case 0:u.Z.dispatch({type:"LOGIN_MFA"});c.label=1;case 1:c.trys.push([1,3,,4]);return[4,h.Z.post({url:y.ANM.RESET_PASSWORD,body:{code:e,ticket:t,password:n,token:o},oldFormErrors:!0,trackedActionData:{event:r.a9.USER_RESET_PASSWORD,properties:{mfa:!0}}})];case 2:i=c.sent();u.Z.dispatch({type:"LOGIN_SUCCESS",token:i.body.token});return[3,4];case 3:l=c.sent();u.Z.dispatch({type:"LOGIN_MFA_FAILURE",message:R(l.body)});throw l;case 4:return[2]}}))}))()},forgotPassword:function(e,t){return O((function(){var n,o;return g(this,(function(i){switch(i.label){case 0:this.setLoginCredentials(e);u.Z.dispatch({type:"FORGOT_PASSWORD_REQUEST"});i.label=1;case 1:
i.trys.push([1,3,,4]);return[4,h.Z.post({url:y.ANM.FORGOT_PASSWORD,body:{login:e,captcha_key:t},oldFormErrors:!0,trackedActionData:{event:r.a9.FORGOT_PASSWORD}})];case 2:i.sent();u.Z.dispatch({type:"FORGOT_PASSWORD_SENT"});return[3,4];case 3:n=i.sent();o=new c.yZ(n);o.code===y.evJ.PHONE_VERIFICATION_REQUIRED?u.Z.dispatch({type:"LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION"}):u.Z.dispatch({type:"LOGIN_FAILURE",error:o});throw n;case 4:return[2]}}))})).apply(this)},setFingerprint:function(e){u.Z.dispatch({type:"FINGERPRINT",fingerprint:e})},getExperiments:function(e){u.Z.dispatch({type:"EXPERIMENTS_FETCH",withGuildExperiments:e})},getLocationMetadata:function(){if(null!=S)return S;clearTimeout(_);_=setTimeout((function(){u.Z.dispatch({type:"SET_CONSENT_REQUIRED",consentRequired:!0})}),5e3);return S=i.Z.get({url:y.ANM.AUTH_LOCATION_METADATA,retries:2,oldFormErrors:!0}).then((function(e){var t,n,r;clearTimeout(_);if(null==p.Z.getAuthenticationConsentRequired()){
var o,i,l=null===(i=null==e||null===(o=e.body)||void 0===o?void 0:o.consent_required)||void 0===i||i;u.Z.dispatch({type:"SET_CONSENT_REQUIRED",consentRequired:l})}u.Z.dispatch({type:"SET_LOCATION_METADATA",countryCode:null!==(r=null==e||null===(t=e.body)||void 0===t?void 0:t.country_code)&&void 0!==r?r:void 0});S=null;if(null!=(null==e||null===(n=e.body)||void 0===n?void 0:n.promotional_email_opt_in)){var c=e.body.promotional_email_opt_in;(0,s.K4)({required:c.required,checked:c.pre_checked,preChecked:c.pre_checked})}}),(function(){clearTimeout(_);u.Z.dispatch({type:"SET_CONSENT_REQUIRED",consentRequired:!0});S=null}))}}},665232:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(667294);function o(e){var t=(0,r.useRef)(null),n=(0,r.useRef)(null);if(!Object.is(e,n.current)){t.current=n.current;n.current=e}return t.current}},682:(e,t,n)=>{n.d(t,{K4:()=>o,ZJ:()=>i,MD:()=>l});var r=(0,n(185253).Z)((function(){return{required:!1,checked:!1,preChecked:!1}})),o=function(e){r.setState(e)},i=function(e){
r.setState({checked:e})},l=r},377305:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(675860),o=n(173436),i=n(913416),l=n(33055),u=n(46323),c=n(212218),s=n(142583),a=n(859023),f=n(461061);function p(e,t,n,r,o,i,l){try{var u=e[i](l),c=u.value}catch(e){n(e);return}u.done?t(c):Promise.resolve(c).then(r,o)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function l(e){p(i,r,o,l,u,"next",e)}function u(e){p(i,r,o,l,u,"throw",e)}l(void 0)}))}}var h,y=function(e,t){var n,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){
case 0:case 1:o=i;break;case 4:l.label++;return{value:i[1],done:!1};case 5:l.label++;r=i[1];i=[0];continue;case 7:i=l.ops.pop();l.trys.pop();continue;default:if(!(o=l.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1];o=i;break}if(o&&l.label<o[2]){l.label=o[2];l.ops.push(i);break}o[2]&&l.ops.pop();l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},E=(h=d((function(e,t){var n,i,l,p,d;return y(this,(function(h){switch(h.label){case 0:n=null!=t?t:s.Z.getInviteKeyForGuildId(e);i=a.default.getCurrentUser();l=!c.ZP.isMember(e,null==i?void 0:i.id);h.label=1;case 1:h.trys.push([1,3,,4]);return[4,r.Z.get({url:f.ANM.GUILD_MEMBER_VERIFICATION(e),query:{with_guild:l,invite_code:null!=n?(0,u.jX)(n):void 0},oldFormErrors:!0})];case 2:if(null==(p=h.sent()).body)throw p;d=p.body;o.Z.dispatch({
type:"MEMBER_VERIFICATION_FORM_UPDATE",guildId:e,form:{version:d.version,description:d.description,formFields:d.form_fields,guild:d.guild}});return[2,d];case 3:h.sent();o.Z.dispatch({type:"MEMBER_VERIFICATION_FORM_FETCH_FAIL",guildId:e});return[3,4];case 4:return[2]}}))})),function(e,t){return h.apply(this,arguments)}),v=function(){var e=d((function(e,t){var n,i;return y(this,(function(l){switch(l.label){case 0:return[4,r.Z.patch({url:f.ANM.GUILD_MEMBER_VERIFICATION(e),body:{form_fields:t},oldFormErrors:!0})];case 1:n=l.sent();i=n.body;o.Z.dispatch({type:"MEMBER_VERIFICATION_FORM_UPDATE",guildId:e,form:{version:i.version,description:i.description,formFields:i.form_fields}});return[2]}}))}));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=d((function(e,t){var n,i;return y(this,(function(l){switch(l.label){case 0:return[4,r.Z.patch({url:f.ANM.GUILD_MEMBER_VERIFICATION(e),body:{description:t},oldFormErrors:!0})];case 1:n=l.sent();i=n.body;o.Z.dispatch({
type:"MEMBER_VERIFICATION_FORM_UPDATE",guildId:e,form:{version:i.version,description:i.description,formFields:i.form_fields}});return[2]}}))}));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e=d((function(e,t){return y(this,(function(n){switch(n.label){case 0:return[4,r.Z.patch({url:f.ANM.GUILD_MEMBER_VERIFICATION(e),body:{enabled:t},oldFormErrors:!0})];case 1:n.sent();return[2]}}))}));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=d((function(e,t){var n,u;return y(this,(function(c){switch(c.label){case 0:if(l.Z.isFullServerPreview(e)){(0,i.KY)(e,{memberOptions:{isPending:!1}});return[2]}c.label=1;case 1:c.trys.push([1,3,,4]);return[4,r.Z.put({url:f.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),body:{version:t.version,form_fields:t.formFields}})];case 2:n=c.sent();u=n.body;o.Z.dispatch({type:"USER_GUILD_JOIN_REQUEST_UPDATE",guildId:e,request:u});return[2,u];case 3:throw c.sent();case 4:return[2]}}))}));return function(t,n){
return e.apply(this,arguments)}}();const _={fetchVerificationForm:E,updateVerificationForm:v,updateVerificationFormDescription:O,enableVerificationForm:b,submitVerificationForm:m}},448536:(e,t,n)=>{n.d(t,{t:()=>h,Z:()=>v});var r=n(496486),o=n.n(r),i=n(791462),l=n(173436),u=n(570239);function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e){s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return s(e)}function a(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e,t){f=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return f(e,t)}var p=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var h={version:"",description:"",formFields:[]},y={};var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&f(e,t)}(n,e);var t=d(n);function n(){c(this,n);return t.apply(this,arguments)}var r=n.prototype;r.get=function(e){if(null!=e)return y[e]};r.getRulesPrompt=function(e){var t;return o().find(null===(t=y[e])||void 0===t?void 0:t.formFields,u.J)};r.__getLocalVars=function(){return{memberVerificationForms:y}};return n}(i.ZP.Store);E.displayName="MemberVerificationFormStore"
;const v=new E(l.Z,{INVITE_ACCEPT_SUCCESS:function(e){var t=e.invite,n=t.member_verification_form,r=t.guild;if(null!=r&&null!=n){var o;y[r.id]={version:n.version,description:null!==(o=n.description)&&void 0!==o?o:"",formFields:n.form_fields,guild:r};return!0}return!1},MEMBER_VERIFICATION_FORM_UPDATE:function(e){var t=e.form,n=e.guildId;y[n]=null!=t?t:h},MEMBER_VERIFICATION_FORM_FETCH_FAIL:function(e){var t,n=e.guildId;y[n]=null!==(t=y[n])&&void 0!==t?t:h},GUILD_DELETE:function(e){var t=e.guild;delete y[null==t?void 0:t.id]}})},124264:(e,t,n)=>{n.d(t,{e:()=>o,P:()=>i});var r=(0,n(553494).B)({kind:"guild",id:"2021-11_member_verification_manual_approval",label:"Member Verification Manual Approval",defaultConfig:{manualApprovalEnabled:!1},treatments:[{id:1,label:"Enable manual approval for membership verification",config:{manualApprovalEnabled:!0}}]});function o(e){r.trackExposure({guildId:e});return r.useExperiment({guildId:e}).manualApprovalEnabled}function i(e){
return r.getCurrentConfig({guildId:e}).manualApprovalEnabled}},913416:(e,t,n)=>{n.d(t,{fU:()=>S,Jz:()=>R,zS:()=>I,og:()=>w,KY:()=>T,mL:()=>A});var r=n(173436),o=n(23816),i=n(655695),l=n(356004),u=n(1812),c=n(212218),s=n(653772),a=n(940712),f=n(379822),p=n(390504),d=n(932847),h=n(33055),y=n(461061),E=n(35236);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){O(e,t,n[t])}))}return e}function m(e,t){t=null!=t?t:{}
;Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function _(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e)||function(){
throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e){var t=f.Z.getChannelId(e),n=l.Z.getChannel(t);if(!(null!=t&&(0,E.AB)(t))&&!a.Z.can(y.Plq.VIEW_CHANNEL,n)){var r=u.ZP.getDefaultChannel(e);null!=r&&(0,i.uL)(y.Z5c.CHANNEL(e,r.id))}}function S(e,t,n){d.default.track(y.rMx.VIEW_AS_ROLES_SELECTED,b({num_roles:Object.keys(t).length},(0,o.hH)(e)));r.Z.dispatch({type:"IMPERSONATE_UPDATE",guildId:e,roles:t,options:n});g(e)}function R(e,t,n){d.default.track(y.rMx.VIEW_AS_ROLES_SELECTED,m(b({num_roles:Object.keys(t).length},(0,o.hH)(e)),{is_viewing_as_member:!0}));r.Z.dispatch({type:"IMPERSONATE_UPDATE",guildId:e,roles:t,options:n});g(e)}function I(e,t,n){if(h.Z.isFullServerPreview(e)){var r,o=new Set(p.Z.getOptedInChannels(e));t.forEach((function(e){return o.add(e)}));n.forEach((function(e){return o.delete(e)}))
;R(e,null!==(r=h.Z.getViewingRoles(e))&&void 0!==r?r:{},m(b({},h.Z.getViewingRolesOptions(e)),{isFullServerPreview:!0,optInChannels:o}))}else;}function w(e,t){d.default.track(y.rMx.VIEW_AS_ROLES_SELECTED,m(b({num_roles:Object.keys(t).length},(0,o.hH)(e)),{is_viewing_as_member:!0}));if(h.Z.isFullServerPreview(e)){var n=s.Z.getGuild(e);if(null==n)return;!function(e,t){var n=_(u.ZP.getSelectableChannelIds(e)).concat(_(u.ZP.getVocalChannelIds(e))),r=Array.from(t);u.ZP.addConditionalChangeListener((function(){var t=c.ZP.getSelfMember(e);if(null==t)return!1;if(r.some((function(e){return!t.roles.includes(e)})))return!0;var o=_(u.ZP.getSelectableChannelIds(e)).concat(_(u.ZP.getVocalChannelIds(e))).filter((function(e){return!n.includes(e)}));o.length>0&&I(e,o,[]);return!1}))}(e,t);var r,i={};t.forEach((function(e){return i[e]=n.roles[e]}));R(e,i,null!==(r=h.Z.getViewingRolesOptions(e))&&void 0!==r?r:{})}else;}function T(e,t){if(h.Z.isFullServerPreview(e)){var n;if(null==s.Z.getGuild(e))return
;R(e,null!==(n=h.Z.getViewingRoles(e))&&void 0!==n?n:{},b({},h.Z.getViewingRolesOptions(e),t))}else;}function A(e){r.Z.dispatch({type:"IMPERSONATE_STOP",guildId:e})}},692410:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(791462),o=n(173436);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1;r.configurable=!0;"value"in r&&(r.writable=!0);Object.defineProperty(e,r.key,r)}}function u(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function c(e){c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return c(e)}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){
return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){u(e,t,n[t])}))}return e}function a(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e,t){f=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return f(e,t)}var p=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var h=!1,y=!1,E={},v=null;var O=function(e){!function(e,t){
if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&f(e,t)}(n,e);var t=d(n);function n(){i(this,n);return t.apply(this,arguments)}var r=n.prototype;r.hasConsented=function(e){return null!=E[e]&&E[e].consented};r.getAuthenticationConsentRequired=function(){return v};r.__getLocalVars=function(){return{fetchedConsents:h,receivedConsentsInConnectionOpen:y,consents:E,authenticationConsentRequired:v}};!function(e,t,n){t&&l(e.prototype,t);n&&l(e,n)}(n,[{key:"fetchedConsents",get:function(){return h}},{key:"receivedConsentsInConnectionOpen",get:function(){return y}}]);return n}(r.ZP.Store);O.displayName="ConsentStore";const b=new O(o.Z,{CONNECTION_OPEN:function(e){var t=e.consents;if(null!=t){E=s({},E,t);y=!0}},UPDATE_CONSENTS:function(e){var t=e.consents;E=s({},t);h=!0},SET_CONSENT_REQUIRED:function(e){v=e.consentRequired},LOGOUT:function(){
v=null}})},801593:(e,t,n)=>{n.d(t,{jj:()=>w,ZP:()=>A});var r=n(785893),o=n(667294),i=n(294184),l=n.n(i),u=n(647446),c=n(248088),s=n(489992),a=n(665232),f=n(511716),p=n(881186),d=n(959797),h=n(641501),y=n.n(h);function E(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function v(e){v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return v(e)}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){E(e,t,n[t])}))}return e}function b(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){
var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}}return o}function _(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e,t){g=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return g(e,t)}var S=function(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _(this,n)}}var I={DEFAULT:"default",MINI:"mini"};function w(e){var t=e.error,n=(0,c.useTransition)(t,{config:{tension:250,clamp:!0},from:{marginTop:0,height:0,opacity:0,transform:"translate3d(0, -100%, 0)"},enter:{marginTop:4,height:"auto",opacity:1,transform:"translate3d(0, -0px, 0)"},leave:{marginTop:0,height:0,opacity:0,transform:"translate3d(0, -100%, 0)"}}),o=(0,a.Z)(t);return(0,r.jsx)(r.Fragment,{children:n((function(e,n,i){var l=i.key,u=e.transform,a=m(e,["transform"]);return null!=n&&""!==n?(0,
r.jsx)(c.animated.div,{style:b(O({},a),{overflow:"hidden"}),children:(0,r.jsx)(c.animated.div,{style:{transform:u},children:(0,r.jsx)(s.xv,{color:"text-danger",variant:"text-xs/normal",children:null!=t&&""!==t?t:o})})},l):null}))})}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&g(e,t)}(n,e);var t=R(n);function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var r,o;(r=t.call(this,e)).hasError=function(){return null!=r.props.error&&r.props.error.length>0||!1!==r.state.dirty&&(r.getIsUnderFlowing()||r.getIsOverFlowing())};r.getError=function(){var e=r.props,t=e.error,n=e.minLength,o=e.maxLength,i=r.getIsUnderFlowing()?d.Z.Messages.MINIMUM_LENGTH_ERROR.format({minLength:n}):null,l=r.getIsOverFlowing()?d.Z.Messages.MAXIMUM_LENGTH_ERROR.format({
maxLength:o}):null;return null!=t&&t.length<1||null===t?null:null!=t?t:!1===r.state.dirty?null:null!=i?i:l};r.getIsUnderFlowing=function(){var e,t=r.props,n=t.value,o=t.minLength;return null!=o&&(null!==(e=null==n?void 0:n.length)&&void 0!==e?e:0)<o};r.getIsOverFlowing=function(){var e,t=r.props,n=t.value,o=t.maxLength;return null!=o&&(null!==(e=null==n?void 0:n.length)&&void 0!==e?e:0)>o};r.onChange=function(e){var t,n;null===(n=(t=r.props).onChange)||void 0===n||n.call(t,e.currentTarget.value,r.props.name);r.setState({dirty:!0})};r.onFocus=function(e){var t,n;null===(n=(t=r.props).onFocus)||void 0===n||n.call(t,e,r.props.name)};r.onBlur=function(e){var t,n;null===(n=(t=r.props).onBlur)||void 0===n||n.call(t,e,r.props.name)};r.state={dirty:null!==(o=e.defaultDirty)&&void 0!==o&&o};return r}n.prototype.render=function(){
var e,t,n,o=this.props,i=o.className,c=o.inputClassName,s=o.inputPrefix,a=o.disabled,p=o.size,d=o.editable,h=o.inputRef,v=o.prefixElement,_=o.focusProps,g=m(o,["className","inputClassName","inputPrefix","disabled","size","editable","inputRef","prefixElement","focusProps"]),S=null!==(t=g["aria-labelledby"])&&void 0!==t?t:null===(e=this.context)||void 0===e?void 0:e.titleId;return(0,r.jsxs)("div",{className:l()(y().inputWrapper,i),children:[null!=v&&v,null!=s?(0,r.jsx)("span",{className:y().inputPrefix,children:s}):null,(0,r.jsx)(u.tE,b(O({},_),{children:(0,r.jsx)("input",b(O({className:l()((0,f.l)(y(),"input",p),c,(n={},E(n,y().error,this.hasError()),E(n,y().disabled,a),E(n,y().editable,d),n)),disabled:a,readOnly:!1===d||void 0},g),{"aria-labelledby":S,onChange:this.onChange,onBlur:this.onBlur,onFocus:this.onFocus,ref:h}))})),(0,r.jsx)(w,{error:this.getError()})]})};return n}(o.Component);T.Sizes=I;T.contextType=p.q3;T.defaultProps={name:"",size:I.DEFAULT,disabled:!1,type:"text",
placeholder:"",autoFocus:!1,maxLength:999};const A=T},757987:(e,t,n)=>{n.d(t,{as:()=>h.vK,mK:()=>h.xM,FG:()=>w,Cy:()=>Z,ZP:()=>U,DY:()=>G});var r=n(785893),o=n(667294),i=n(294184),l=n.n(i),u=n(973935),c=n(248088),s=n(606076),a=n(388721),f=n(365523),p=n(39802),d=n(730189),h=n(409830),y=n(577990),E=n(589367),v=n.n(E);function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function m(e){m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return m(e)}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){b(e,t,n[t])}))}return e}
function g(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function S(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}}return o}function R(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?function(e){
if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e,t){I=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return I(e,t)}var w,T=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return R(this,n)}}!function(e){e.PRIMARY="primary";e.BLACK="black";e.GREY="grey";e.BRAND="brand";e.GREEN="green";e.YELLOW="yellow";e.RED="red";e.CUSTOM="custom"}(w||(w={}));var N,P=Object.freeze({}),C=Object.freeze((b(N={},h.vK.TOP,v().tooltipTop),b(N,h.vK.BOTTOM,v().tooltipBottom),
b(N,h.vK.LEFT,v().tooltipLeft),b(N,h.vK.RIGHT,v().tooltipRight),b(N,h.vK.CENTER,v().tooltipCenter),b(N,h.vK.WINDOW_CENTER,v().tooltipCenter),b(N,w.PRIMARY,v().tooltipPrimary),b(N,w.BLACK,v().tooltipBlack),b(N,w.GREY,v().tooltipGrey),b(N,w.BRAND,v().tooltipBrand),b(N,w.GREEN,v().tooltipGreen),b(N,w.YELLOW,v().tooltipYellow),b(N,w.RED,v().tooltipRed),b(N,w.CUSTOM,null),N));function M(e,t,n){var r=e===h.vK.LEFT||e===h.vK.RIGHT,o=r?"top":"left",i=r?h.xM.TOP:h.xM.LEFT,l=r?h.xM.BOTTOM:h.xM.RIGHT,u="50%",c=n;if(t===i){u="0%";c+=16}else if(t===l){u="100%";c-=20}return b({},o,"calc(".concat(u," + ").concat(c,"px)"))}var Z=function(e){var t=e.targetElementRef,n=e.align,o=void 0===n?h.xM.CENTER:n,i=e.position,u=e.color,s=e.children,a=e.onNonAccessibleClick,f=e.tooltipClassName,p=e.tooltipContentClassName,d=e.spacing,E=void 0===d?8:d,O=e.animationStyle,m=e.disableTooltipPointerEvents,_=void 0!==m&&m,g=e.allowOverflow,S=void 0!==g&&g,R="".concat("string"==typeof s?s:"",":").concat(i);return(0,
r.jsx)(y.W5,{disablePointerEvents:_,reference:t,position:i,autoInvert:!0,align:o,positionKey:R,spacing:E,nudgeAlignIntoViewport:!0,children:function(e){var t=e.position,n=e.nudge;return(0,r.jsxs)(c.animated.div,{onClick:a,className:l()(v().tooltip,C[null!=t?t:i],C[u],b({},v().tooltipDisablePointerEvents,_),f),style:O,children:[(0,r.jsx)("div",{className:v().tooltipPointer,style:M(null!=t?t:i,o,n)}),(0,r.jsx)("div",{className:l()(v().tooltipContent,b({},v().tooltipContentAllowOverflow,S),p),children:s})]})}})},F={scale:.95,opacity:0},L={scale:1,opacity:0},j={scale:1,opacity:1},k={tension:2400,friction:52},D=function(e){var t=e.isVisible,n=e.onAnimationRest,i=e.targetElementRef,l=S(e,["isVisible","onAnimationRest","targetElementRef"]),u=o.useContext(p.S).reducedMotion,s=(0,c.useTransition)(t,{keys:function(e){return e?"tooltip":"empty"},config:k,from:u.enabled?L:F,enter:j,leave:u.enabled?L:F,onRest:n});return s((function(e,t){return t?(0,r.jsx)(Z,_({animationStyle:e,targetElementRef:i
},l)):null}))},U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&I(e,t)}(n,e);var t=A(n);function n(){O(this,n);var e;(e=t.apply(this,arguments)).showTimeout=new f.V7;e.domElementRef=o.createRef();e.hasDomElement=!1;e.state={shouldShowTooltip:!1};e.handleMouseEnter=function(){(s.tq||s.Em)&&!0===e.props.clickableOnMobile||e.show()};e.handleMouseLeave=function(){(s.tq||s.Em)&&!0===e.props.clickableOnMobile||e.hide()};e.handleFocus=function(){d.Z.keyboardModeEnabled&&e.show()};e.handleBlur=function(){e.hide()};e.handleClick=function(){var t=e.hasDomElement;t&&e.props.hideOnClick?e.hide():t||!s.tq&&!s.Em||!0!==e.props.clickableOnMobile||e.show()};e.handleContextMenu=function(){e.hide()};return e}var i=n.prototype;i.componentDidMount=function(){
this.shouldShowTooltip(this.props,this.state)&&this.setDomElement()};i.componentDidUpdate=function(e,t){var n=this.shouldShowTooltip(this.props,this.state);n!==this.shouldShowTooltip(e,t)&&(n?this.setDomElement():this.hasDomElement=!1)};i.setDomElement=function(){var e=u.findDOMNode(this);if(!(0,a.k)(e))throw new Error("Tooltip cannot find DOM node");this.domElementRef.current=e;this.hasDomElement=!0;this.forceUpdate()};i.componentWillUnmount=function(){this.showTimeout.stop();this.domElementRef.current=null};i.render=function(){var e,t=this.props,n=t.children,i=t.text,l=t["aria-label"];if(null==i)return n(P);"string"==typeof l?e=l:"string"==typeof i&&!1!==l&&(e=i);0;var u={onClick:this.handleClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onContextMenu:this.handleContextMenu,onFocus:this.handleFocus,onBlur:this.handleBlur};null!=e&&(u["aria-label"]=e);return(0,r.jsxs)(o.Fragment,{children:[n(u),this.renderTooltip()]})};i.shouldShowTooltip=function(e,t){
return e.shouldShow&&(t.shouldShowTooltip||e.forceOpen)&&!e.hide};i.renderTooltip=function(){var e=this.props,t=e.text,n=e.align,o=e.position,i=e.color,l=e.spacing,u=e.tooltipClassName,c=e.tooltipContentClassName,a=e.disableTooltipPointerEvents,f=e.onAnimationRest,p=e.allowOverflow,d=e.clickableOnMobile,h=e.hideOnClick,y=(s.tq||s.Em)&&!0===d&&h,E=!1!==a&&!y||!0===a;return(0,r.jsx)(D,{disableTooltipPointerEvents:E,targetElementRef:this.domElementRef,tooltipClassName:u,tooltipContentClassName:c,align:n,position:o,color:i,spacing:l,isVisible:this.shouldShowTooltip(this.props,this.state)&&this.hasDomElement,onAnimationRest:f,onNonAccessibleClick:y?this.handleClick:void 0,allowOverflow:p,children:t})};i.show=function(){var e=this,t=this.props.delay;null!=t?this.showTimeout.start(t,(function(){return e.toggleShow(!0)}),!1):this.toggleShow(!0)};i.hide=function(){this.showTimeout.stop();this.toggleShow(!1)};i.toggleShow=function(e){var t=this;if(this.state.shouldShowTooltip!==e){if(e){var n,r
;null===(r=(n=this.props).onTooltipShow)||void 0===r||r.call(n)}u.flushSync((function(){t.setState({shouldShowTooltip:e})}))}};n.getDerivedStateFromProps=function(e,t){return t.shouldShowTooltip&&null==e.text?{shouldShowTooltip:!1}:null};return n}(o.Component);U.Positions=h.vK;U.Colors=w;U.defaultProps={hideOnClick:!0,position:h.vK.TOP,color:w.PRIMARY,forceOpen:!1,hide:!1,spacing:8,shouldShow:!0,allowOverflow:!1};var G=function(e){var t=e.children,n=e.className,i=e.element,l=void 0===i?"div":i,u=S(e,["children","className","element"]);return(0,r.jsx)(U,g(_({},u),{children:function(e){return o.createElement(l,null!=n?g(_({},e),{className:n}):e,t)}}))}}}]);
//# sourceMappingURL=a0bbfb22af34dcb56589.js.map