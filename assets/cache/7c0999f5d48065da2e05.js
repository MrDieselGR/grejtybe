"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[14328],{114328:(e,r,t)=>{t.r(r);t.d(r,{AddRoleMembersModalContent:()=>_,default:()=>T});var n=t(785893),o=t(667294),a=t(316921),i=t(791462),l=t(489992),s=t(97638),u=t(87310),c=t(191940),f=t(487502),d=t(943327),b=t(67416),m=t(462020),y=t(158033),h=t(7046),p=t(49497),v=t(361102),g=t(461061),C=t(862045),R=t(959797),S=t(58638),E=t.n(S);function j(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function x(e,r,t,n,o,a,i){try{var l=e[a](i),s=l.value}catch(e){t(e);return}l.done?r(s):Promise.resolve(s).then(n,o)}function M(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function i(e){x(a,n,o,i,l,"next",e)}function l(e){x(a,n,o,i,l,"throw",e)}i(void 0)}))}}function w(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t;return e}function k(e,r){if(null==e)return{}
;var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++){t=a[n];r.indexOf(t)>=0||(o[t]=e[t])}return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++){t=a[n];r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}}return o}function O(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(n=t.next()).done);i=!0){a.push(n.value);if(r&&a.length===r)break}}catch(e){l=!0;o=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return j(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t)
;if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e){var r=function(e,r){if("object"!==I(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===I(r)?r:String(r)}var I=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};var L=function(e,r){var t,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){
if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;(n=0,o)&&(a=[2&a[0],o.value]);switch(a[0]){case 0:case 1:o=a;break;case 4:i.label++;return{value:a[1],done:!1};case 5:i.label++;n=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1];o=a;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(a);break}o[2]&&i.ops.pop();i.trys.pop();continue}a=r.call(e,i)}catch(e){a=[6,e];n=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};function _(e){var r=e.onClose,t=e.roleId,S=e.guildId,j=e.onBack,x=e.isCreateRoleFlow,I=e.focusSearchAfterReady,_=e.isReady,T=(0,i.e7)([p.Z],(function(){return p.Z.getRole(t)
}),[t]),N=O(o.useState(""),2),P=N[0],Z=N[1],B=O(o.useState({}),2),D=B[0],z=B[1],U=O(o.useState(!1),2),Y=U[0],F=U[1];o.useEffect((function(){m.Z.requestMembers(S,P.trim().toLowerCase(),v._4)}),[S,P]);var K,q=o.useCallback((function(e){return!e.roles.includes(t)}),[t]),H=(0,v.lJ)(S,q),G=o.useMemo((function(){return H.filter((function(e){return(0,v.eg)(P,e)}))}),[P,H]),J=o.useCallback(M((function(){var e;return L(this,(function(n){switch(n.label){case 0:e=Object.values(D).map((function(e){return e.row.id}));F(!0);n.label=1;case 1:n.trys.push([1,3,,4]);return[4,h.Z.bulkAddMemberRoles(S,t,e)];case 2:n.sent();(0,y.H)(S,t,!1);r();return[3,4];case 3:n.sent();F(!1);return[3,4];case 4:return[2]}}))})),[S,t,D,r]),Q=o.useCallback((function(e){var r=e;z((function(e){var t=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){
return Object.getOwnPropertyDescriptor(t,e).enumerable}))));n.forEach((function(r){w(e,r,t[r])}))}return e}({},e),n=(0,u.getFullRowId)(r);if(n in t){delete t[n];return t}t[n]={display:{type:s.Fj.MEMBER,label:r.name,avatar:r.avatarURL},row:r};return t}))}),[]),V=o.useCallback((function(e){z((function(r){r[e];return k(r,[e].map(A))}))}),[]),X=o.useMemo((function(){return G.map((function(e){return{rowType:C.aC.MEMBER,name:e.name,userTag:e.userTag,id:e.id,avatarURL:e.avatarURL,bot:e.bot,verifiedBot:e.verifiedBot,disabled:!1,key:e.id}}))}),[G]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(b.xB,{className:E().header,separator:!1,direction:f.Z.Direction.VERTICAL,children:[(0,n.jsx)(l.X6,{variant:"heading-xl/semibold",children:R.Z.Messages.ROLE_ADD_MEMBERS_TITLE}),x?(0,n.jsx)(l.xv,{className:E().subtitle,color:"text-normal",variant:"text-md/normal",children:R.Z.Messages.ROLE_CREATE_ADD_MEMBERS_SUBTITLE}):(0,n.jsxs)("div",{className:E().roleContainer,children:[(0,n.jsx)(d.Z,{
color:null!==(K=null==T?void 0:T.colorString)&&void 0!==K?K:(0,a.Rf)(g.p6O),width:16,height:16}),(0,n.jsx)(l.xv,{className:E().roleName,color:"text-normal",variant:"text-md/normal",children:null==T?void 0:T.name})]})]}),(0,n.jsx)(u.MemberRoleSelector,{listClassName:E().list,pendingAdditions:D,query:P,onQueryChange:Z,onClickRow:Q,onRemovePendingAddition:V,roles:[],members:X,placeholderText:R.Z.Messages.ROLE_ADD_MEMBERS_SEARCH,renderEmptyText:function(e){return R.Z.Messages.ROLE_EDIT_MEMBERS_NO_RESULTS.format({query:e})},focusSearchAfterReady:I,isReady:_}),(0,n.jsxs)(b.mz,{className:E().footer,children:[(0,n.jsxs)("div",{className:E().buttonsRight,children:[x&&0===Object.keys(D).length?(0,n.jsx)(c.Co,{onClick:r,color:c.Co.Colors.PRIMARY,children:R.Z.Messages.ROLE_CREATION_SKIP}):(0,n.jsx)(c.Co,{onClick:J,submitting:Y,children:R.Z.Messages.ADD}),!x&&(0,n.jsx)(c.Co,{look:c.Co.Looks.LINK,color:c.Co.Colors.PRIMARY,size:c.Co.Sizes.SMALL,onClick:r,children:R.Z.Messages.CANCEL})]}),null!=j&&(0,
n.jsx)(c.Co,{color:c.Co.Colors.PRIMARY,look:c.Co.Looks.LINK,size:c.Co.Sizes.TINY,onClick:j,className:E().backButton,children:R.Z.Messages.BACK})]})]})}function T(e){var r=e.transitionState,t=e.onClose,o=e.roleId,a=e.guildId;return(0,n.jsx)(b.Y0,{transitionState:r,size:b.Cg.SMALL,children:(0,n.jsx)(_,{onClose:t,roleId:o,guildId:a})})}}}]);
//# sourceMappingURL=7c0999f5d48065da2e05.js.map