"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[78487],{778487:(e,n,t)=>{t.r(n);t.d(n,{default:()=>k});var r=t(785893),a=t(667294),i=t(737325),s=t(859169),o=t(64833),l=t(661623),c=t(191940),u=t(326440),C=t(954766),I=t(276842),N=t(272729),A=t(67416),f=t(932847),_=t(451325),d=t(489992),S=t(830395),h=t(146530),E=t(138402),T=t(801593),O=t(461061),p=t(959797),L=t(60598),m=t.n(L);function P(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function b(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],s=!0,o=!1;try{for(t=t.call(e);!(s=(r=t.next()).done);s=!0){i.push(r.value);if(n&&i.length===n)break}}catch(e){o=!0;a=e}finally{try{s||null==t.return||t.return()}finally{if(o)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return P(e,n)
;var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return P(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=["APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH","APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE","APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH","APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE","APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER"];function v(e){var n=e.application,t=e.onClose,i=b(a.useState(!1),2),s=i[0],o=i[1],l=b(a.useState(null),2),u=l[0],C=l[1],N=b(a.useState(""),2),_=N[0],L=N[1],P=a.useCallback((function(){if(null!=u){
f.default.track(O.rMx.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED,{answer:u,application_id:n.id,reason:_});t()}}),[n.id,u,t,_]);a.useEffect((function(){S.Z.updatedUnsyncedSettings({disableApplicationSubscriptionCancellationSurvey:s})}),[s]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(A.xB,{className:m().headerContainer,separator:!1,children:[(0,r.jsxs)("div",{className:m().titleContainer,children:[(0,r.jsx)(d.xv,{className:m().headerTitle,variant:"text-lg/semibold",children:p.Z.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_TITLE}),(0,r.jsx)(A.ol,{className:m().modalCloseButton,onClick:t})]}),(0,r.jsx)(I.Z,{size:8}),(0,r.jsx)(d.xv,{className:m().headerSubtitle,variant:"text-md/medium",children:p.Z.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_SUBTITLE})]}),(0,r.jsxs)(A.hz,{children:[(0,r.jsx)("div",{className:m().answerChoicesContainer,children:(0,r.jsx)(E.ZP,{value:u,options:y.map((function(e){return{name:p.Z.Messages[e],value:e}})),onChange:function(e){
return C(e.value)},withTransparentBackground:!0})}),"APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER"===u&&(0,r.jsx)(T.ZP,{autoFocus:!0,className:m().otherField,placeholder:p.Z.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_OTHER_PLACEHOLDER,value:_,onChange:L})]}),(0,r.jsxs)(A.mz,{className:m().footer,children:[(0,r.jsx)(c.Co,{onClick:P,color:c.Co.Colors.BRAND,disabled:null==u,children:p.Z.Messages.SUBMIT}),(0,r.jsx)(h.Z,{type:h.Z.Types.INVERTED,value:s,onChange:function(e,n){return o(n)},size:20,className:m().checkbox,children:(0,r.jsx)(d.xv,{variant:"text-sm/medium",children:p.Z.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_DONT_SHOW_AGAIN})})]})]})}var R=t(534440),x=t.n(R);function U(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function j(e,n,t,r,a,i,s){try{var o=e[i](s),l=o.value}catch(e){t(e);return}o.done?n(l):Promise.resolve(l).then(r,a)}function g(e){return function(){var n=this,t=arguments
;return new Promise((function(r,a){var i=e.apply(n,t);function s(e){j(i,r,a,s,o,"next",e)}function o(e){j(i,r,a,s,o,"throw",e)}s(void 0)}))}}function M(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],s=!0,o=!1;try{for(t=t.call(e);!(s=(r=t.next()).done);s=!0){i.push(r.value);if(n&&i.length===n)break}}catch(e){o=!0;a=e}finally{try{s||null==t.return||t.return()}finally{if(o)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return U(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return U(e,n)}(e,n)||function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var B,w=function(e,n){var t,r,a,i,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;(r=0,a)&&(i=[2&i[0],a.value]);switch(i[0]){case 0:case 1:a=i;break;case 4:s.label++;return{value:i[1],done:!1};case 5:s.label++;r=i[1];i=[0];continue;case 7:i=s.ops.pop();s.trys.pop();continue;default:if(!(a=s.trys,a=a.length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){s.label=i[1];break}if(6===i[0]&&s.label<a[1]){
s.label=a[1];a=i;break}if(a&&s.label<a[2]){s.label=a[2];s.ops.push(i);break}a[2]&&s.ops.pop();s.trys.pop();continue}i=n.call(e,s)}catch(e){i=[6,e];r=0}finally{t=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}};!function(e){e[e.CANCEL=0]="CANCEL";e[e.SURVEY=1]="SURVEY"}(B||(B={}));function k(e){var n,t=e.transitionState,d=e.application,S=e.listing,h=e.subscription,E=e.onClose,T=(0,N.Dt)(),L=(0,o.Z)(s.Z.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL).analyticsLocations,m=function(e){var n,t=M(a.useState(!1),2),r=t[0],s=t[1],o=M(a.useState(null),2),l=o[0],c=o[1],u=(n=g((function(n){var t;return w(this,(function(r){switch(r.label){case 0:r.trys.push([0,2,3,4]);s(!0);return[4,i.EO(n,e)];case 1:r.sent();return[2,!0];case 2:t=r.sent();c(t);return[3,4];case 3:s(!1);return[7];case 4:return[2]}}))})),function(e){return n.apply(this,arguments)});return{cancelSubscription:u,error:l,submitting:r}
}(L),P=m.cancelSubscription,b=m.error,y=m.submitting,R=M(a.useState(B.CANCEL),2),U=R[0],j=R[1],k=(n=g((function(){return w(this,(function(e){switch(e.label){case 0:return[4,P(h.id)];case 1:e.sent()&&(l.ZP.disableApplicationSubscriptionCancellationSurvey?E():j(B.SURVEY));return[2]}}))})),function(){return n.apply(this,arguments)});a.useEffect((function(){f.default.track(O.rMx.CANCELLATION_FLOW_STARTED,{location_stack:L})}),[L]);return(0,r.jsx)(A.Y0,{transitionState:t,className:x().modal,"aria-labelledby":T,children:(0,r.jsxs)(C.My,{activeSlide:U,width:440,children:[(0,r.jsx)(C.Mi,{id:B.CANCEL,children:(0,r.jsxs)("div",{className:x().slideContainer,children:[null!=b?(0,r.jsx)(u.Z,{children:b.message}):null,(0,r.jsxs)(A.hz,{className:x().content,children:[(0,r.jsx)(I.Z,{size:16}),(0,r.jsxs)(_.q$,{children:[(0,r.jsx)(_.CW,{application:d}),(0,r.jsx)(_.r0,{id:T,children:p.Z.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_TITLE_V2.format({tier:S.name})}),(0,r.jsx)(_.K9,{
children:p.Z.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_DESCRIPTION.format({timestamp:h.currentPeriodEnd.getTime()})}),(0,r.jsx)(_.Uj,{children:p.Z.Messages.APPLICATION_CANCEL_SUBSCRIPTION_PREMIUM_BENEFITS}),(0,r.jsx)(_.G9,{benefits:S.sku_benefits.benefits})]})]}),(0,r.jsxs)(A.mz,{className:x().footer,children:[(0,r.jsx)(c.Co,{color:c.Co.Colors.RED,onClick:k,submitting:y,children:p.Z.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_CANCEL_CTA}),(0,r.jsx)(c.Co,{look:c.Co.Looks.LINK,color:c.Co.Colors.WHITE,className:x().goBackButton,onClick:E,children:p.Z.Messages.APPLICATION_CANCEL_SUBSCRIPTION_MODAL_NEVERMIND_CTA})]})]})}),(0,r.jsx)(C.Mi,{id:B.SURVEY,children:(0,r.jsx)("div",{className:x().slideContainer,children:(0,r.jsx)(v,{application:d,onClose:E})})})]})})}}}]);
//# sourceMappingURL=b9db979b5fdae0afca06.js.map