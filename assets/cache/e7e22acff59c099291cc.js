(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[24492],{80574:(e,n,t)=>{e.exports=t.p+"433e3ec4319a9d11b0cbe39342614982.svg"},683801:(e,n,t)=>{"use strict";t.d(n,{Av:()=>s,wE:()=>u,hp:()=>i});var r=t(675860),a=t(173436),l=t(643830),o=t(461061);function s(e,n){(0,l.Z)(e,n);return r.Z.patch({url:o.ANM.ME,body:{date_of_birth:e.format("YYYY-MM-DD")},oldFormErrors:!0}).then((function(e){var n=e.body;a.Z.dispatch({type:"CURRENT_USER_UPDATE",user:n})}))}function u(){a.Z.dispatch({type:"AGE_GATE_PREVENT_UNDERAGE_REGISTRATION"})}function i(){a.Z.dispatch({type:"AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"})}},65440:(e,n,t)=>{"use strict";t.d(n,{Z:()=>g});var r=t(785893),a=t(667294),l=t(294184),o=t.n(l),s=t(730381),u=t.n(s),i=t(489992),c=t(601465),f=t(562181),d=t(959797),h=t(108083),y=t.n(h);function p(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function A(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){
var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,l=[],o=!0,s=!1;try{for(t=t.call(e);!(o=(r=t.next()).done);o=!0){l.push(r.value);if(n&&l.length===n)break}}catch(e){s=!0;a=e}finally{try{o||null==t.return||t.return()}finally{if(s)throw a}}return l}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return p(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return p(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=u()().localeData().months(),v=Array.from(Array(31).keys()).map((function(e){return{value:e+1,label:"".concat(e+1)}})),E=Array.from(Array(12).keys()).map((function(e){return{value:e+1,label:m[e]}}))
;var _=/[a-zA-Z0-9]/;function b(e){var n=e.options,t=e.selectOption,l=e.children,o=A(a.useState(""),2),s=o[0],u=o[1];a.useEffect((function(){if(""!==s){var e=setTimeout((function(){return u("")}),1e3);return function(){return clearTimeout(e)}}}),[s,u]);var i=a.useCallback((function(e){if(_.test(e.key)){var r="".concat(s).concat(e.key.toLowerCase()),a=n.find((function(e){return e.label.toLowerCase().startsWith(r)}));null!=a&&t(a.value);u(r)}}),[t,u,s,n]);return(0,r.jsx)("div",{onKeyDown:i,children:l})}function G(){var e=u()().localeData().longDateFormat("L"),n=e.indexOf("D"),t=e.indexOf("M"),r=e.indexOf("Y");if(-1===n||-1===t||-1===r){n=0;t=1;r=2}return[{index:n,type:"day"},{index:t,type:"month"},{index:r,type:"year"}].sort((function(e,n){return e.index<n.index?-1:1}))}const g=a.forwardRef((function(e,n){var t=function(e){switch(F[e].type){case"day":B.push({key:"day",input:(0,r.jsx)(b,{options:v,selectOption:M,children:(0,r.jsx)(c.Z,{ref:k,className:y().inputDay,
"aria-label":d.Z.Messages.AGE_GATE_DOB_DAY,menuPlacement:c.Z.MenuPlacements.TOP,placeholder:(0,r.jsx)("span",{"aria-hidden":!0,children:d.Z.Messages.AGE_GATE_DOB_DAY}),options:v,value:x,onChange:function(n){var t=n.value;M(t);w(e+1)},maxMenuHeight:215})})});break;case"month":B.push({key:"month",input:(0,r.jsx)(b,{options:E,selectOption:C,children:(0,r.jsx)(c.Z,{ref:I,className:y().inputMonth,"aria-label":d.Z.Messages.AGE_GATE_DOB_MONTH,menuPlacement:c.Z.MenuPlacements.TOP,placeholder:(0,r.jsx)("span",{"aria-hidden":!0,children:d.Z.Messages.AGE_GATE_DOB_MONTH}),options:E,value:T,onChange:function(n){var t=n.value;C(t);w(e+1)},maxMenuHeight:215})})});break;case"year":B.push({key:"year",input:(0,r.jsx)(b,{options:j,selectOption:N,children:(0,r.jsx)(c.Z,{ref:Y,className:y().inputYear,"aria-label":d.Z.Messages.AGE_GATE_DOB_YEAR,menuPlacement:c.Z.MenuPlacements.TOP,placeholder:(0,r.jsx)("span",{"aria-hidden":!0,children:d.Z.Messages.AGE_GATE_DOB_YEAR}),options:j,value:R,onChange:function(n){
var t=n.value;N(t);w(e+1)},maxMenuHeight:215})})})}},l=e.value,s=e.wrapperClassName,h=e.onChange,p=e.onPopulated,m=e.error,_=e.autoFocus,g=function(e){var n=null,t=null,r=null;if(null!=e){n=e.date();t=e.month()+1;r=e.year()}var l=A(a.useState(n),2),o=l[0],s=l[1],u=A(a.useState(t),2),i=u[0],c=u[1],f=A(a.useState(r),2);return{day:o,setDay:s,month:i,setMonth:c,year:f[0],setYear:f[1]}}(l),x=g.day,M=g.setDay,T=g.month,C=g.setMonth,R=g.year,N=g.setYear,O=a.useMemo((function(){return null!=x&&null!=T&&null!=R?u()("".concat(x,"/").concat(T,"/").concat(R),"DD/MM/YYYY"):null}),[x,T,R]);a.useEffect((function(){h((null==O?void 0:O.isValid())?O:null)}),[O,h]);var S=m;null==O||O.isValid()||(S=d.Z.Messages.AGE_GATE_INVALID_BIRTHDAY);var j=function(){var e=(new Date).getFullYear(),n=a.useRef(Array.from(Array(150).keys()).map((function(n){return{value:e-n-3,label:"".concat(e-n-3)}})));a.useEffect((function(){n.current=Array.from(Array(150).keys()).map((function(n){return{value:e-n-3,
label:"".concat(e-n-3)}}))}),[e]);return n.current}(),D=A(a.useState(_?0:-1),2),Z=D[0],w=D[1],k=a.useRef(null),I=a.useRef(null),Y=a.useRef(null),F=a.useMemo(G,[]),U=a.useCallback((function(){var e;switch(null===(e=F[Z])||void 0===e?void 0:e.type){case"day":var n;null===(n=k.current)||void 0===n||n.focus();break;case"month":var t;null===(t=I.current)||void 0===t||t.focus();break;case"year":var r;null===(r=Y.current)||void 0===r||r.focus()}}),[Z,k,I,Y,F]);a.useEffect((function(){setTimeout(U,500)}),[]);a.useEffect((function(){Z>=F.length?null==p||p():U()}),[Z,U]);for(var B=[],L=0;L<3;L++)t(L);return(0,r.jsxs)("fieldset",{className:o()(y().container,s),children:[(0,r.jsx)(f.vw,{tag:"legend",children:d.Z.Messages.AGE_GATE_DATE_OF_BIRTH}),(0,r.jsx)("div",{className:y().inputs,children:B.map((function(e,n){var t=e.key,a=e.input;return(0,r.jsx)("div",{tabIndex:n+1,className:y()[t],children:a},t)}))}),(0,r.jsx)(i.xv,{className:y().errors,variant:"text-sm/normal",children:S})]})}))},
324492:(e,n,t)=>{"use strict";t.r(n);t.d(n,{default:()=>Z});var r=t(785893),a=t(667294),l=t(441143),o=t.n(l),s=t(730381),u=t.n(s),i=t(791462),c=t(489992),f=t(354290),d=t(356004),h=t(379822),y=t(859023),p=t(191940),A=t(487502),m=t(272729),v=t(67416),E=t(95467),_=t(683801),b=t(533741),G=t(65440),g=t(461061),x=t(86030),M=t(959797),T=t(917386),C=t.n(T);function R(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function N(e,n,t,r,a,l,o){try{var s=e[l](o),u=s.value}catch(e){t(e);return}s.done?n(u):Promise.resolve(u).then(r,a)}function O(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var l=e.apply(n,t);function o(e){N(l,r,a,o,s,"next",e)}function s(e){N(l,r,a,o,s,"throw",e)}o(void 0)}))}}function S(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,l=[],o=!0,s=!1;try{
for(t=t.call(e);!(o=(r=t.next()).done);o=!0){l.push(r.value);if(n&&l.length===n)break}}catch(e){s=!0;a=e}finally{try{o||null==t.return||t.return()}finally{if(s)throw a}}return l}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return R(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return R(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j,D=function(e,n){var t,r,a,l,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function s(l){return function(s){return function(l){
if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;(r=0,a)&&(l=[2&l[0],a.value]);switch(l[0]){case 0:case 1:a=l;break;case 4:o.label++;return{value:l[1],done:!1};case 5:o.label++;r=l[1];l=[0];continue;case 7:l=o.ops.pop();o.trys.pop();continue;default:if(!(a=o.trys,a=a.length>0&&a[a.length-1])&&(6===l[0]||2===l[0])){o=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){o.label=l[1];break}if(6===l[0]&&o.label<a[1]){o.label=a[1];a=l;break}if(a&&o.label<a[2]){o.label=a[2];o.ops.push(l);break}a[2]&&o.ops.pop();o.trys.pop();continue}l=n.call(e,o)}catch(e){l=[6,e];r=0}finally{t=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}};!function(e){e[e.AGE_GATE_FORM=0]="AGE_GATE_FORM";e[e.CONFIRM=1]="CONFIRM"}(j||(j={}));function Z(e){var n=e.transitionState,l=function(){var e=null==T?void 0:T.getGuildId();if(null!=e){f.Z.nsfwReturnToSafety(e)
;(0,b.qV)()}},s=(0,i.e7)([y.default],(function(){return y.default.getCurrentUser()})),T=(0,i.e7)([h.Z,d.Z],(function(){return d.Z.getChannel(h.Z.getChannelId())})),R=S(a.useState(null),2),N=R[0],Z=R[1],w=S(a.useState(null),2),k=w[0],I=w[1],Y=S(a.useState(!1),2),F=Y[0],U=Y[1],B=S(a.useState(j.AGE_GATE_FORM),2),L=B[0],P=B[1],z=a.createRef(),H=a.createRef(),W=(0,m.Dt)(),K=null!=N?u()().diff(N,"years"):null;a.useEffect((function(){null!=s&&null!=s.nsfwAllowed&&(0,b.qq)()}));function V(){return q.apply(this,arguments)}function q(){q=O((function(){var e,n;return D(this,(function(t){switch(t.label){case 0:o()(null!=N,"Cannot submit null birthday.");t.label=1;case 1:t.trys.push([1,3,,4]);I(null);U(!0);return[4,(0,_.Av)(N,"NSFW Channel")];case 2:return[2,t.sent()];case 3:if(null!=(e=t.sent()).body&&null!=e.body.date_of_birth)(0,b.C8)(e.body.date_of_birth);else{
null!=(null==e||null===(n=e.body)||void 0===n?void 0:n.username)?I(M.Z.Messages.USER_SETTINGS_UPDATE_FAILURE):I(null==e?void 0:e.body.message);U(!1)}return[3,4];case 4:return[2]}}))}));return q.apply(this,arguments)}function X(){return $.apply(this,arguments)}function $(){return($=O((function(){return D(this,(function(e){switch(e.label){case 0:o()(null!=K,"Cannot submit if we haven't been able to calculate age.");if(K<18){P(j.CONFIRM);return[2]}return[4,V()];case 1:e.sent();return[2]}}))}))).apply(this,arguments)}function J(e){return Q.apply(this,arguments)}function Q(){return(Q=O((function(e){return D(this,(function(n){switch(n.label){case 0:e.preventDefault();return F||null==N?[2]:[4,X()];case 1:n.sent();return[2]}}))}))).apply(this,arguments)}function ee(){return ne.apply(this,arguments)}function ne(){return(ne=O((function(){return D(this,(function(e){switch(e.label){case 0:return[4,V()];case 1:null==e.sent()&&P(j.AGE_GATE_FORM);return[2]}}))}))).apply(this,arguments)}
var te=a.useCallback((function(e){Z(e)}),[Z]),re=a.useCallback((function(){var e;null===(e=H.current)||void 0===e||e.focus()}),[H]);return L===j.AGE_GATE_FORM?(0,r.jsxs)(v.Y0,{transitionState:n,size:v.Cg.SMALL,"aria-labelledby":W,children:[(0,r.jsxs)(v.hz,{children:[(0,r.jsxs)("div",{className:C().container,children:[(0,r.jsx)("img",{alt:"",src:t(80574),className:C().img}),(0,r.jsx)(c.X6,{variant:"heading-xl/semibold",className:C().title,id:W,children:M.Z.Messages.AGE_GATE_EXISTING_HEADER}),(0,r.jsx)(c.xv,{color:"header-secondary",variant:"text-sm/normal",children:M.Z.Messages.AGE_GATE_NSFW_BODY.format({helpURL:E.Z.getArticleURL(g.BhN.AGE_GATE)})})]}),(0,r.jsx)("form",{onSubmit:J,children:(0,r.jsx)(G.Z,{label:M.Z.Messages.AGE_GATE_YOUR_BIRTHDAY,wrapperClassName:C().birthday,name:"date_of_birth",onChange:te,onPopulated:re,error:k,value:N,ref:z,autoFocus:!0})})]}),(0,r.jsxs)(v.mz,{justify:A.Z.Justify.BETWEEN,children:[(0,r.jsx)(p.Co,{buttonRef:H,submitting:F,disabled:null==N,
size:p.Ph.SMALL,onClick:X,children:M.Z.Messages.AGE_GATE_SUBMIT}),(0,r.jsx)(p.Co,{look:p.Co.Looks.LINK,size:p.Co.Sizes.NONE,color:p.Co.Colors.PRIMARY,onClick:l,children:M.Z.Messages.AGE_GATE_GO_BACK})]})]}):(0,r.jsxs)(v.Y0,{transitionState:x.Dv.ENTERED,size:v.Cg.SMALL,"aria-labelledby":W,children:[(0,r.jsx)(v.hz,{children:(0,r.jsxs)("div",{className:C().confirmContainer,children:[(0,r.jsx)(c.X6,{variant:"heading-xl/semibold",className:C().confirmTitle,id:W,children:M.Z.Messages.AGE_GATE_CONFIRM_HEADER.format({age:K})}),(0,r.jsx)(c.xv,{color:"header-secondary",variant:"text-sm/normal",children:M.Z.Messages.AGE_GATE_NSFW_BODY.format({helpURL:E.Z.getArticleURL(g.BhN.AGE_GATE)})})]})}),(0,r.jsxs)(v.mz,{className:C().confirmFooter,children:[(0,r.jsx)(p.Co,{look:p.Co.Looks.LINK,size:p.Co.Sizes.NONE,color:p.Co.Colors.PRIMARY,onClick:function(){return P(j.AGE_GATE_FORM)},children:M.Z.Messages.AGE_GATE_CONFIRM_GO_BACK}),(0,r.jsx)(p.Co,{color:p.Co.Colors.BRAND,onClick:ee,
children:M.Z.Messages.AGE_GATE_CONFIRM_BUTTON})]})]})}},643830:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});var r=t(730381),a=t.n(r),l=t(932847),o=t(461061);function s(e,n){l.default.track(o.rMx.AGE_GATE_SUBMITTED,{dob:a()().diff(e,"years")<18?e.format("YYYY-MM-DD"):null,dob_day:e.date(),dob_month:e.month()+1,dob_year:e.year(),source:{section:n}})}}}]);
//# sourceMappingURL=e7e22acff59c099291cc.js.map