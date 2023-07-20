"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[53280],{276256:(e,n,t)=>{t.d(n,{B:()=>a});var r=t(496486),o=t.n(r),a=function(e,n){var t=o().shuffle(e),r=t.findIndex((function(e){return e.value===n}));if(r>-1){var a=t[r];t.splice(r,1);t.push(a)}return t}},789039:(e,n,t)=>{t.d(n,{Z:()=>A});var r=t(785893),o=t(667294),a=t(496486),s=t.n(a),l=t(489992),i=t(244028),u=t(190422),c=t(191940),E=t(146530),f=t(825611),d=t(487502),h=t(309494),b=t(272729),p=t(562181),m=t(160036),v=t(462428),D=t(67416),_=t(95467),C=t(276256),T=t(76997),y=t(959797),L=t(839319),x=t.n(L);function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Z(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],s=!0,l=!1;try{for(t=t.call(e);!(s=(r=t.next()).done);s=!0){a.push(r.value);if(n&&a.length===n)break}
}catch(e){l=!0;o=e}finally{try{s||null==t.return||t.return()}finally{if(l)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(){return(0,r.jsx)(l.xv,{className:x().helpdeskLink,variant:"text-xs/normal",color:"text-muted",children:y.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({helpdeskURL:_.Z.getSubmitRequestURL()})})}function A(e){
var n=e.header,t=e.body,a=e.problems,_=e.transitionState,L=e.feedbackProblems,g=void 0===L?[]:L,A=e.otherKey,O=e.hasCloseButton,S=e.onSubmit,j=e.onClose,M=e.canDismissForever,N=void 0===M||M,k=e.showHelpdeskLink,B=void 0===k||k,R=(0,i.Z)(a),w=Z(o.useState(!1),2),G=w[0],U=w[1],K=Z(o.useState(null),2),F=K[0],P=K[1],H=Z(o.useState(s().shuffle(a)),2),z=H[0],V=H[1],Y=Z(o.useState(""),2),W=Y[0],q=Y[1],J=(0,b.Dt)(),$=(0,m.Z)(G),Q=(0,m.Z)(F),X=(0,m.Z)(S),ee=(0,m.Z)(W),ne=null!=F&&g.includes(F);o.useEffect((function(){s().isEqual(R,a)||V((0,C.B)(a,A))}),[a,R,A]);o.useEffect((function(){return function(){X.current({problem:Q.current,dontShowAgain:$.current,feedback:ee.current})}}),[]);return(0,r.jsxs)(D.Y0,{transitionState:_,className:x().modalRoot,"aria-labelledby":J,children:[(0,r.jsx)(u.Z,{}),(0,r.jsxs)(D.xB,{separator:!1,className:x().headerContainer,children:[(0,r.jsx)(v.Z,{id:J,className:x().header,color:v.Z.Colors.CUSTOM,size:v.Z.Sizes.SIZE_24,children:n}),(0,r.jsx)(l.xv,{
variant:"text-md/normal",color:"none",className:x().ratingBody,children:t}),O?(0,r.jsx)(D.ol,{className:x().modalCloseButton,onClick:j}):null]}),(0,r.jsxs)(D.hz,{className:x().content,children:[ne?null:(0,r.jsx)(p.xJ,{className:x().problemInfo,children:(0,r.jsx)(f.Z,{options:z,onClick:function(e){var n=e.value;P(n);g.includes(n)||j()}})}),ne?(0,r.jsxs)(p.xJ,{title:y.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,className:x().problemInfo,children:[(0,r.jsx)(h.Z,{value:W,maxLength:T.iF,onChange:q}),B?(0,r.jsx)(I,{}):null]}):null]}),N||ne?(0,r.jsx)(D.mz,{className:x().footer,direction:d.Z.Direction.HORIZONTAL,children:ne?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Co,{size:c.Co.Sizes.SMALL,look:c.Co.Looks.LINK,color:c.Co.Colors.PRIMARY,onClick:function(){P(null);q("")},children:y.Z.Messages.BACK}),(0,r.jsx)(c.Co,{size:c.Co.Sizes.SMALL,onClick:j,children:y.Z.Messages.SUBMIT})]}):N?(0,r.jsx)(E.Z,{size:18,type:E.Z.Types.INVERTED,value:G,onChange:function(){return U(!G)},children:(0,r.jsx)(l.xv,{
variant:"text-sm/normal",children:y.Z.Messages.DONT_SHOW_AGAIN})}):null}):null]})}},190422:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(667294),o=t(953143),a=t(742269),s=t(959797);function l(){r.useEffect((function(){a.FB||(0,o.EM)({messages:[s.Z.Messages.GO_LIVE_HEY,s.Z.Messages.GO_LIVE_LOOK,s.Z.Messages.GO_LIVE_LISTEN],interval:600,count:20,onlyWhenBlurred:!0})}),[]);return null}},453280:(e,n,t)=>{t.r(n);t.d(n,{default:()=>_});var r=t(785893),o=t(667294),a=t(126136),s=t(820028),l=t(635940),i=t(789039),u=t(897576),c=t(932847),E=t(461061);var f,d=t(959797);!function(e){e.TOO_HARD="Too hard";e.TEST="Testing purposes";e.ACCIDENT="Created on accident";e.TEMPLATE="Curious about server/template";e.LONELY="Empty guild";e.INACTIVE="Inactive guild";e.OTHER="Other"}(f||(f={}));function h(){return[{value:f.TOO_HARD,label:d.Z.Messages.GUILD_DELETE_FEEDBACK_TOO_HARD},{value:f.TEST,label:d.Z.Messages.GUILD_DELETE_FEEDBACK_TEST},{value:f.ACCIDENT,label:d.Z.Messages.GUILD_DELETE_FEEDBACK_ACCIDENT},{
value:f.TEMPLATE,label:d.Z.Messages.GUILD_DELETE_FEEDBACK_TEMPLATE},{value:f.LONELY,label:d.Z.Messages.GUILD_DELETE_FEEDBACK_LONELY},{value:f.INACTIVE,label:d.Z.Messages.GUILD_DELETE_FEEDBACK_INACTIVE},{value:f.OTHER,label:d.Z.Messages.GUILD_DELETE_FEEDBACK_OTHER}]}function b(e,n,t,r,o,a,s){try{var l=e[a](s),i=l.value}catch(e){t(e);return}l.done?n(i):Promise.resolve(i).then(r,o)}function p(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function s(e){b(a,r,o,s,l,"next",e)}function l(e){b(a,r,o,s,l,"throw",e)}s(void 0)}))}}function m(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}var v=function(e,n){var t,r,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){
if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;(r=0,o)&&(a=[2&a[0],o.value]);switch(a[0]){case 0:case 1:o=a;break;case 4:s.label++;return{value:a[1],done:!1};case 5:s.label++;r=a[1];a=[0];continue;case 7:a=s.ops.pop();s.trys.pop();continue;default:if(!(o=s.trys,o=o.length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1];o=a;break}if(o&&s.label<o[2]){s.label=o[2];s.ops.push(a);break}o[2]&&s.ops.pop();s.trys.pop();continue}a=n.call(e,s)}catch(e){a=[6,e];r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},D=[f.OTHER];function _(e){var n=e.transitionState,b=e.onClose,_=e.guildId,C=(0,a.Z)(h);o.useEffect((function(){c.default.track(E.rMx.OPEN_MODAL,{type:"Guild Delete Report"})}),[]);return(0,r.jsx)(i.Z,{
header:d.Z.Messages.GUILD_DELETE_FEEDBACK_HEADER,body:d.Z.Messages.GUILD_DELETE_FEEDBACK_BODY,problems:C,feedbackProblems:D,onSubmit:function(e){var n=e.problem,o=e.dontShowAgain,a=e.feedback;o&&(0,l.EW)(s.z$.GUILD_DELETE_FEEDBACK);var i=null==n;!function(e,n,t,r){c.default.track(E.rMx.USER_REPORT_SUBMITTED,{report_name:"Guild Deletion",guild_id:e,reason:n,feedback:t,skipped:r})}(_,n,a,i);i||u.ZD(p((function(){var e,n;return v(this,(function(o){switch(o.label){case 0:return[4,Promise.all([t.e(40532),t.e(76325)]).then(t.bind(t,876325))];case 1:e=o.sent(),n=e.default;return[2,function(e){return(0,r.jsx)(n,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){m(e,n,t[n])}))}return e}({body:d.Z.Messages.GUILD_DELETE_FEEDBACK_REPORT},e))}]}}))})))
},onClose:b,transitionState:n,otherKey:f.OTHER})}},825611:(e,n,t)=>{t.d(n,{Z:()=>E});var r=t(785893),o=(t(667294),t(294184)),a=t.n(o),s=t(489992),l=t(629590),i=t(414597),u=t(94480),c=t.n(u);function E(e){var n=e.options,t=e.onClick,o=e.className,u=e.optionClassName;return(0,r.jsx)("div",{className:a()(c().root,o),children:n.map((function(e,n){return(0,r.jsxs)(l.Z,{onClick:function(){return t(e)},className:a()(c().option,u),children:[(0,r.jsx)(s.xv,{className:c().text,color:"none",variant:"text-md/normal",children:e.label}),(0,r.jsx)(i.Z,{className:c().caret,direction:i.Z.Directions.RIGHT})]},n)}))})}}}]);
//# sourceMappingURL=850877b1e461001a230e.js.map