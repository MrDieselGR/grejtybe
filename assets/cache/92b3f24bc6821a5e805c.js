(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[92164,25691,8570],{55146:(e,n,r)=>{e.exports=r.p+"608f64b01193073a0148ebd815d86784.webm"},485618:(e,n,r)=>{e.exports=r.p+"ac85024be0ac6a35c59ceff448502169.webm"},745920:(e,n,r)=>{e.exports=r.p+"2d889bf9114df188325d15f9e517c325.mov"},161693:(e,n,r)=>{e.exports=r.p+"6d5b64b094944af6d52d895c8c2b8a59.mp4"},28743:(e,n,r)=>{e.exports=r.p+"dff87c953f43b561d71fbcfe8a93a79a.png"},106632:(e,n,r)=>{e.exports=r.p+"3b0d96ed8113994f3d139088726cfecd.webm"},894919:(e,n,r)=>{e.exports=r.p+"d44a33e33f751afe9a0e5e42e2156d8f.mov"},858739:(e,n,r)=>{e.exports=r.p+"90c2f45413660019fa25f4f9f40ecb5d.mp4"},172129:(e,n,r)=>{e.exports=r.p+"61c5375ee8d8dbf35c109b06044394d8.png"},243874:(e,n,r)=>{e.exports=r.p+"1eae6aab9a6b4e7da646db415479560b.webm"},665369:(e,n,r)=>{e.exports=r.p+"214ec30d4b1191df4e04a35063e5d9e6.mov"},537020:(e,n,r)=>{e.exports=r.p+"56dfe2d14c375037f02ae2144856c939.webm"},978476:(e,n,r)=>{
e.exports=r.p+"98808f8535c2ac6947658982e27e6e1e.mov"},88070:(e,n,r)=>{e.exports=r.p+"49b63c2ef79b40545d891bde041934b4.webm"},442751:(e,n,r)=>{e.exports=r.p+"751cc59a57dba194e85ca502f93e548f.mov"},289465:(e,n,r)=>{e.exports=r.p+"7209f284854b7ea1e5642c91fd2e43d4.webm"},915550:(e,n,r)=>{e.exports=r.p+"53c2cf0b4b9a824f2aa76e49894802c3.mov"},479871:(e,n,r)=>{e.exports=r.p+"69a0ecf46982cea47de18b3e75dfe8f5.webm"},101577:(e,n,r)=>{"use strict";r.d(n,{R:()=>T,Z:()=>S});var t=r(785893),a=r(667294),s=r(791462),i=r(489992),l=r(318007),o=r(733730),c=r(53551),u=r(989232),d=r(948571),p=r(859023),m=r(693518),f=r(709990),v=r(757987),_=r(908570),E=r(440455),h=r(461061),N=r(225691),I=r(848545),x=r(959797),g=r(256813),b=r.n(g),T=function(){return(0,t.jsxs)(a.Fragment,{children:[(0,t.jsx)(_.qE,{src:null,size:_.qE.Sizes.DEPRECATED_SIZE_100,className:b().avatar}),(0,t.jsx)(_.DK,{children:x.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN}),(0,t.jsx)(_.Dx,{className:b().inviteResolvingGuildName,
children:x.Z.Messages.LOADING})]})},O=function(e){var n=e.guild,r=e.user,a=e.application,s=e.compact;return null!=a?(0,t.jsx)(m.Z,{className:b().appIcon,game:a,size:b().appIconSize}):null!=r?(0,t.jsx)(_.qE,{src:null!=r?r.getAvatarURL(void 0,80):null,size:_.qE.Sizes.SIZE_80,className:s?b().compactAvatar:b().avatar}):null!=n?(0,t.jsx)(E.ZP,{mask:E.ZP.Masks.SQUIRCLE,width:64,height:64,className:b().guildIcon,children:(0,t.jsx)(_.Vj,{guild:n,size:_.Vj.Sizes.LARGER,animate:!0})}):null};const S=function(e){var n,r=e.invite,a=e.disableUser,m=void 0!==a&&a,E=e.error,g=e.flatActivityCount,T=void 0!==g&&g,S=e.isRegister,A=void 0!==S&&S,j=(0,s.cj)([l.Z,p.default],(function(){return{currentUser:p.default.getCurrentUser(),multiAccounts:l.Z.getUsers()}})),y=j.currentUser,R=j.multiAccounts;if(null==r)return null;var C,D,M,L=null!=r.guild?new u.Z(r.guild):null,P=null!=r.channel?(0,
c.jD)(r.channel):null,w=null!=r.target_application?new o.Z(r.target_application):null,Z=m||null==r.inviter?null:new d.Z(r.inviter),V=!(null!=r.approximate_member_count&&r.approximate_member_count>100||null!=L&&L.hasFeature(h.oNc.COMMUNITY))&&null!=Z,k=null,U=!1;if(null!=L){k=null==Z?x.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN:x.Z.Messages.AUTH_MESSAGE_INVITED_BY.format({username:Z.username});r.target_type===I.Iq.STREAM&&null!=r.target_user&&(k=x.Z.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({username:r.target_user.username}));r.target_type===I.Iq.EMBEDDED_APPLICATION&&null!=r.target_application&&(k=null!=Z?x.Z.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({username:Z.username}):x.Z.Messages.AUTH_MESSAGE_INVITED_TO_PLAY);V&&null==w&&(C=(0,t.jsx)(_.Vj,{guild:L,size:_.Vj.Sizes.SMALL}));D=L.name;if(null!=w){D=w.name;M=(0,t.jsxs)("div",{children:[(0,t.jsx)(_.DK,{className:b().appIn,children:x.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_IN}),(0,t.jsxs)("div",{
className:b().guildContainer,children:[(0,t.jsx)(_.Vj,{guild:L,size:_.Vj.Sizes.SMALL}),(0,t.jsx)(i.xv,{tag:"span",variant:"text-lg/normal",color:"header-primary",className:b().appGuildName,children:L.name})]})]})}}else if(null!=P){if(null==Z)throw new Error("no inviter in group DM invite");var F=Z.username;if(null!=P.name&&""!==P.name){k=x.Z.Messages.AUTH_MESSAGE_INVITED_BY.format({username:F});D=P.name;null!=P.icon&&(C=(0,t.jsx)(_.MC,{channel:P,size:_.qE.Sizes.SIZE_32}))}else{k=x.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM;D=F}}else if(null!=Z){D=x.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({username:Z.username});U=!0;M=null!=E?null:(0,t.jsx)(_.DK,{className:b().directInviteSubTitle,children:A?x.Z.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format({username:"".concat(Z.username,"#").concat(Z.discriminator)}):x.Z.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({username:"".concat(Z.username,"#").concat(Z.discriminator)})
})}return(0,t.jsxs)("div",{className:b().container,children:[(0,t.jsx)(O,{application:w,guild:L,user:V?Z:null,compact:U}),null!=E?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(_.DK,{children:x.Z.Messages.INVITE_MODAL_ERROR_TITLE}),(0,t.jsx)(_.Dx,{children:E})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(_.DK,{children:k}),(0,t.jsxs)(_.Dx,{className:b().title,children:[null!=L?(0,t.jsx)(f.Z,{guild:L,className:b().guildBadge,tooltipPosition:v.ZP.Positions.LEFT}):null,C,D]})]}),M,null!=w||U||(null==r||null===(n=r.guild)||void 0===n?void 0:n.id)===N.fQ?null:(0,t.jsx)(_.EJ,{className:b().activityCount,online:r.approximate_presence_count,total:r.approximate_member_count,flat:T}),R.length>1?(0,t.jsx)(_.jQ,{user:y}):null]})}},744:(e,n,r)=>{"use strict";r.d(n,{Z:()=>I});var t=r(131795),a=r.n(t),s=r(951660),i=r(531286),l=r(865622),o=r(478695),c=r(655695),u=r(631134),d=r(18700),p=r(932847),m=r(618468),f=r(461061);function v(e,n,r,t,a,s,i){try{var l=e[s](i),o=l.value}catch(e){r(e);return}
l.done?n(o):Promise.resolve(o).then(t,a)}function _(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var s=e.apply(n,r);function i(e){v(s,t,a,i,l,"next",e)}function l(e){v(s,t,a,i,l,"throw",e)}i(void 0)}))}}var E=function(e,n){var r,t,a,s,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function l(s){return function(l){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,t&&(a=2&s[0]?t.return:s[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,s[1])).done)return a;(t=0,a)&&(s=[2&s[0],a.value]);switch(s[0]){case 0:case 1:a=s;break;case 4:i.label++;return{value:s[1],done:!1};case 5:i.label++;t=s[1];s=[0];continue;case 7:s=i.ops.pop();i.trys.pop();continue;default:if(!(a=i.trys,a=a.length>0&&a[a.length-1])&&(6===s[0]||2===s[0])){i=0;continue}
if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){i.label=s[1];break}if(6===s[0]&&i.label<a[1]){i.label=a[1];a=s;break}if(a&&i.label<a[2]){i.label=a[2];i.ops.push(s);break}a[2]&&i.ops.pop();i.trys.pop();continue}s=n.call(e,i)}catch(e){s=[6,e];t=0}finally{r=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}};function h(e){return N.apply(this,arguments)}function N(){return(N=_((function(e){var n,r,t,l,c;return E(this,(function(d){switch(d.label){case 0:if("Android"!==(r=null===(n=a().os)||void 0===n?void 0:n.family)&&"iOS"!==r)return[3,5];l=null!==(t=u.default.getFingerprint())&&void 0!==t?t:u.default.getId();c=(0,i.WS)();if(null!=l||!u.default.isAuthenticated())return[3,4];d.label=1;case 1:d.trys.push([1,3,,4]);return[4,(0,o.k)()];case 2:d.sent();l=u.default.getId();return[3,4];case 3:d.sent();return[3,4];case 4:return[2,(0,i.ZP)((0,s.Gk)(),{utmSource:e,fingerprint:l,attemptId:c})];case 5:return[2,"discord://"]}}))}))).apply(this,arguments)}function I(e){
return x.apply(this,arguments)}function x(){return(x=_((function(e){var n,r;return E(this,(function(t){switch(t.label){case 0:return[4,h(e)];case 1:n=t.sent();null!=(r=(0,i.zS)(n))&&p.default.track(f.rMx.DEEP_LINK_CLICKED,{fingerprint:(0,l.K)(r.fingerprint),attempt_id:r.attemptId,source:r.utmSource});m.Z.launch(n,(function(e){e||(0,c.dL)(d.Z.fallbackRoute)}));return[2]}}))}))).apply(this,arguments)}},225691:(e,n,r)=>{"use strict";r.d(n,{tF:()=>t,fQ:()=>a});var t;!function(e){e.STUDENT_PROMPT="STUDENT_PROMPT";e.VERIFY_EMAIL="VERIFY_EMAIL";e.VERIFY_PIN="VERIFY_PIN";e.SELECT_SCHOOL="SELECT_SCHOOL";e.SELECT_SCHOOL_SEARCH="SELECT_SCHOOL_SEARCH";e.SUBMIT_SCHOOL="SUBMIT_SCHOOL";e.EMAIL_CONFIRMATION="EMAIL_CONFIRMATION";e.EMAIL_WAITLIST="EMAIL_WAITLIST"}(t||(t={}));var a="884924873015689226"},99918:(e,n,r)=>{"use strict";r.d(n,{L:()=>p,Z:()=>f});var t=r(506884),a=r(675860),s=r(173436),i=r(631134),l=r(666492),o=r(330665),c=r(461061);function u(e,n,r,t,a,s,i){try{var l=e[s](i),o=l.value
}catch(e){r(e);return}l.done?n(o):Promise.resolve(o).then(t,a)}function d(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var s=e.apply(n,r);function i(e){u(s,t,a,i,l,"next",e)}function l(e){u(s,t,a,i,l,"throw",e)}i(void 0)}))}}var p,m=function(e,n){var r,t,a,s,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function l(s){return function(l){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,t&&(a=2&s[0]?t.return:s[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,s[1])).done)return a;(t=0,a)&&(s=[2&s[0],a.value]);switch(s[0]){case 0:case 1:a=s;break;case 4:i.label++;return{value:s[1],done:!1};case 5:i.label++;t=s[1];s=[0];continue;case 7:s=i.ops.pop();i.trys.pop();continue;default:if(!(a=i.trys,a=a.length>0&&a[a.length-1])&&(6===s[0]||2===s[0])){i=0
;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){i.label=s[1];break}if(6===s[0]&&i.label<a[1]){i.label=a[1];a=s;break}if(a&&i.label<a[2]){i.label=a[2];i.ops.push(s);break}a[2]&&i.ops.pop();i.trys.pop();continue}s=n.call(e,i)}catch(e){s=[6,e];t=0}finally{r=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}};!function(e){e.USER_ACTION_REQUIRED="user_action_required";e.USER_SETTINGS_UPDATE="user_settings_update";e.GUILD_PHONE_REQUIRED="guild_phone_required";e.MFA_PHONE_UPDATE="mfa_phone_update";e.CONTACT_SYNC="contact_sync"}(p||(p={}));const f={setCountryCode:function(e){s.Z.dispatch({type:"PHONE_SET_COUNTRY_CODE",countryCode:e})},removePhone:function(e,n){return a.Z.delete({url:c.ANM.PHONE,body:{password:e,change_phone_reason:n},oldFormErrors:!0})},resendCode:function(e){var n={},r=i.default.getFingerprint();null!=r&&""!==r&&(n["X-Fingerprint"]=r);return a.Z.post({url:c.ANM.RESEND_PHONE,headers:n,body:{phone:e}})},beginAddPhone:function(e,n,r){return a.Z.post({
url:c.ANM.PHONE,body:{phone:e,captcha_key:r,change_phone_reason:n}})},addPhone:function(e,n,r){return a.Z.post({url:c.ANM.PHONE,body:{phone_token:e,password:n,change_phone_reason:r},oldFormErrors:!0})},addPhoneWithoutPassword:function(e){return a.Z.post({url:c.ANM.PHONE_VERIFY_NO_PASSWORD,body:{code:e}})},validatePhoneForSupport:function(e){return a.Z.post({url:c.ANM.VERIFY_PHONE_FOR_TICKET,body:{token:e},oldFormErrors:!0})},verifyPhone:function(e,n){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return d((function(){var a,u,d;return m(this,(function(p){switch(p.label){case 0:a={};null!=(u=i.default.getFingerprint())&&""!==u&&(a["X-Fingerprint"]=u);return[4,l.Z.post({url:c.ANM.VERIFY_PHONE,headers:a,body:{phone:e,code:n},oldFormErrors:!0,trackedActionData:{event:t.a9.USER_VERIFY_PHONE}})];case 1:d=p.sent();r&&s.Z.dispatch({type:"MODAL_POP",key:o.M});return[2,d.body]}}))}))()}}},330665:(e,n,r)=>{"use strict";r.d(n,{M:()=>t,z:()=>a})
;var t="PHONE_VERIFICATION_MODAL_KEY",a=6},908570:(e,n,r)=>{"use strict";r.d(n,{Dx:()=>A,DK:()=>j,Ee:()=>y,zx:()=>R,qE:()=>C,Vj:()=>D,MC:()=>M,II:()=>L,gO:()=>P,i_:()=>w,Hh:()=>Z,EJ:()=>V,jQ:()=>k,v6:()=>U,ZP:()=>F});var t=r(785893),a=(r(667294),r(294184)),s=r.n(a),i=r(489992),l=r(125628),o=r(191940),c=r(487502),u=r(969225),d=r(801593),p=r(272729),m=r(983319),f=r(604175),v=r(918513),_=r(766936),E=r(503280),h=r(95467),N=r(170729),I=r(461061),x=r(959797),g=r(385994),b=r.n(g);function T(e,n,r){n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r;return e}function O(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++){r=s[t];n.indexOf(r)>=0||(a[r]=e[r])}return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++){r=s[t];n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}}return a}var S=_.ZP
;null==S&&(S=function(){return null});var A=function(e){var n=e.className,r=e.id,a=e.children;return(0,t.jsx)(i.X6,{variant:"heading-xl/semibold",color:"header-primary",className:s()(b().title,n),id:r,children:a})},j=function(e){var n=e.className,r=e.children;return(0,t.jsx)(i.xv,{variant:"text-md/normal",color:"header-secondary",className:n,children:r})},y=function(e){var n=e.className,r=e.src;return(0,t.jsx)("img",{alt:"",src:r,className:s()(b().image,n)})},R=function(e){var n,r=e.className,a=O(e,["className"]),i=a.look===o.Co.Looks.LINK;return(0,t.jsx)(o.Co,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));t.forEach((function(n){T(e,n,r[n])}))}return e}({size:i?o.Co.Sizes.MIN:o.Co.Sizes.LARGE,fullWidth:!i,className:s()(r,(n={},T(n,b().button,!i),
T(n,b().linkButton,i),n))},a))};R.Looks=o.Co.Looks;R.Colors=o.Co.Colors;R.Sizes=o.Co.Sizes;var C=function(e){var n=e.className,r=e.src,a=e.size;return(0,t.jsx)(S,{src:r,size:a,className:s()(b().inviteLargeIcon,n),"aria-hidden":!0})};C.Sizes=S.Sizes;var D=function(e){var n=e.guild,r=e.size,a=e.animate,s=void 0!==a&&a;return(0,t.jsx)(u.Z,{active:!0,guild:n,size:r,animate:s})};D.Sizes=u.Z.Sizes;var M=function(e){var n=e.className,r=e.channel,a=e.size;return(0,t.jsx)(S,{src:(0,l.x)(r),size:a,className:s()(b().inviteIcon,n),"aria-hidden":!0})};M.Sizes=S.Sizes;var L=function(e){var n=e.label,r=e.error,a=e.placeholder,i=e.value,l=e.className,o=e.inputClassName,c=e.setRef,u=e.type,v=void 0===u?"text":u,_=e.onChange,E=e.autoComplete,h=e.autoFocus,N=e.maxLength,I=e.spellCheck,x=e.name,g=e.description,O=e.required,S=(0,p.Dt)();return(0,t.jsxs)(m.Z,{title:n,error:r,className:l,required:O,tag:"label",htmlFor:S,children:[(0,t.jsx)(d.ZP,{name:x,type:v,value:i,inputRef:c,placeholder:a,
inputClassName:s()(o,T({},b().inputError,null!=r)),"aria-label":n,onChange:_,autoComplete:E,autoFocus:h,maxLength:N,spellCheck:I,id:S}),null!=g?(0,t.jsx)(f.Z,{type:f.Z.Types.DESCRIPTION,className:b().description,children:g}):null]})},P=function(e){var n=e.className,r=e.children;return(0,t.jsx)("div",{className:s()(b().block,n),children:r})},w=function(e){var n=e.className,r=e.children,a=e.isProminent;return(0,t.jsx)(i.xv,{variant:a?"text-sm/normal":"text-xs/normal",className:s()(b().subText,n),children:r})},Z=function(e){var n=e.className;return(0,t.jsx)(c.Z,{direction:c.Z.Direction.VERTICAL,align:c.Z.Align.CENTER,className:n,children:(0,t.jsx)(v.Z,{className:b().spinnerVideo})})},V=function(e){var n,r=e.online,a=e.total,l=e.className,o=e.flat,u=e.textClassName;if(null==a)return null;null!=r&&r>0&&(n=(0,t.jsxs)("div",{className:s()(b().pill,b().pillOnline,o&&b().pillFlat),children:[(0,t.jsx)("i",{className:b().pillIconOnline}),(0,t.jsx)(i.xv,{tag:"span",
className:s()(b().pillMessage,u),variant:"text-sm/normal",children:x.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({membersOnline:r})})]}));return(0,t.jsxs)(c.Z,{justify:c.Z.Justify.CENTER,className:l,children:[n,(0,t.jsxs)("div",{className:s()(b().pill,o&&b().pillFlat),children:[(0,t.jsx)("i",{className:b().pillIconTotal}),(0,t.jsx)(i.xv,{tag:"span",className:s()(b().pillMessage,u),variant:"text-sm/normal",children:x.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({count:a})})]})]})},k=function(e){var n=e.user;return null==n?null:(0,t.jsxs)("div",{className:b().joiningAs,children:[(0,t.jsx)(i.xv,{tag:"span",variant:"text-md/normal",color:"header-secondary",children:x.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS}),(0,t.jsx)(C,{className:b().joiningAsAvatar,src:n.getAvatarURL(void 0,24),size:C.Sizes.SIZE_24,"aria-label":n.username}),(0,t.jsx)(i.xv,{className:b().joiningAsUsername,tag:"span",variant:"text-md/semibold",color:"header-primary",children:n.username})]})
},U=function(e){var n=e.className;return(0,t.jsxs)(P,{className:n,children:[(0,t.jsx)(R,{onClick:function(){return window.open((0,E.t3)())},children:x.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({platform:(0,E.DW)()})}),(0,t.jsx)(w,{className:b().downloadButtonSubtext,children:x.Z.Messages.INCOMPATIBLE_BROWSER.format({supportedBrowserURL:h.Z.getArticleURL(I.BhN.SUPPORTED_BROWSERS)})})]})};const F=function(e){var n=e.className,r=e.contentClassName,a=e.tag,i=void 0===a?"section":a,l=e.onSubmit,o=e.children,c=e.expanded,u=void 0!==c&&c,d=e.theme,p=void 0===d?I.BRd.DARK:d,m=e.style;return(0,t.jsxs)(i,{onSubmit:l,style:m,className:s()(u?b().authBoxExpanded:b().authBox,(0,N.Q)(p),n),children:[(0,t.jsx)("div",{className:b().discordLogo}),(0,t.jsx)("div",{className:s()(b().centeringWrapper,r),children:o})]})}},918513:(e,n,r)=>{"use strict";r.d(n,{Z:()=>ie})
;var t=r(785893),a=r(667294),s=r(730381),i=r.n(s),l=r(39802),o=r(956299),c=r(201930),u=r(745920),d=r.n(u),p=r(894919),m=r.n(p),f=r(665369),v=r.n(f),_=r(978476),E=r.n(_),h=r(442751),N=r.n(h),I=r(915550),x=r.n(I),g=r(109813),b=r(461061),T=r(55146),O=r.n(T),S=r(485618),A=r.n(S),j=r(161693),y=r.n(j),R=r(28743),C=r.n(R),D=r(106632),M=r.n(D),L=r(858739),P=r.n(L),w=r(172129),Z=r.n(w),V=r(243874),k=r.n(V),U=r(537020),F=r.n(U),z=r(88070),H=r.n(z),B=r(289465),G=r.n(B),Y=r(479871),K=r.n(Y);function q(e,n,r){n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r;return e}function W(e){var n,r,a,s,i,l=e.movDark,o=void 0===l?d():l,u=e.movLight,p=void 0===u?m():u,f=e.mp4Dark,v=void 0===f?y():f,_=e.mp4Light,E=void 0===_?P():_,h=e.pngDark,N=void 0===h?C():h,I=e.pngLight,x=void 0===I?Z():I,g=e.webmDark,T=void 0===g?M():g,O=e.webmLight,S=void 0===O?k():O,A=(0,c.vu)(),j=[(0,t.jsx)("source",{src:v,type:"video/mp4"},"mp4"),(0,t.jsx)("img",{alt:"",src:N},"png")],R=[(0,
t.jsx)("source",{src:E,type:"video/mp4"},"mp4"),(0,t.jsx)("img",{alt:"",src:x},"png")];if(A>52||-1===A){j.unshift((0,t.jsx)("source",{src:T,type:"video/webm"},"webm"));R.unshift((0,t.jsx)("source",{src:S,type:"video/webm"},"webm"))}if(r=window.navigator,a=r.userAgent.toLowerCase(),s=null!=(null===(n=r.mediaCapabilities)||void 0===n?void 0:n.decodingInfo),-1!==a.indexOf("safari")&&-1===a.indexOf("chrome")&&-1!==a.indexOf("version/")&&s){j.unshift((0,t.jsx)("source",{src:o,type:"video/mp4"},"hevc"));R.unshift((0,t.jsx)("source",{src:p,type:"video/mp4"},"hevc"))}return q(i={},b.BRd.DARK,j),q(i,b.BRd.LIGHT,R),i}var Q=i()("5/13/2022 10:00 -0800").valueOf(),J=i()("5/16/2022 17:00 -0800").valueOf(),X=W({webmDark:O(),webmLight:A()}),$=i()("10/24/2022 08:00 -0800").valueOf(),ee=i()("11/3/2022 11:00 -0800").valueOf(),ne=W({webmDark:F(),webmLight:H(),movDark:v(),movLight:E()}),re=i()("12/05/2022 10:00 -0800").valueOf(),te=i()("01/03/2023 10:00 -0800").valueOf(),ae=W({webmDark:G(),webmLight:K(),
movDark:N(),movLight:x()}),se=W({});const ie=function(e){var n,r=e.loop,s=void 0===r||r,i=e.autoPlay,c=void 0===i||i,u=e.setRef,d=e.className,p=e.onReady,m=a.useContext(o.Z),f=a.useContext(l.S).reducedMotion,v=Date.now(),_=se;v>=Q&&v<=J?_=X:v>=$&&v<=ee?_=ne:v>=re&&v<=te&&(_=ae);return(0,t.jsx)(g.Z,{ref:u,onLoadedData:p,className:d,loop:!f.enabled&&s,autoPlay:!f.enabled&&c,playsInline:!0,"data-testid":"app-spinner",children:null!==(n=_[m])&&void 0!==n?n:_[b.BRd.DARK]},m)}}}]);
//# sourceMappingURL=92b3f24bc6821a5e805c.js.map