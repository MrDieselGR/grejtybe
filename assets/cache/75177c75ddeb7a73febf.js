"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[79370],{679370:(e,n,r)=>{r.r(n);r.d(n,{default:()=>I});var t=r(785893),o=r(667294),a=r(496486),i=r.n(a),l=r(791462),u=r(489992),s=r(675860),c=r(461061);function f(e,n,r,t,o,a,i){try{var l=e[a](i),u=l.value}catch(e){r(e);return}l.done?n(u):Promise.resolve(u).then(t,o)}function d(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var a=e.apply(n,r);function i(e){f(a,t,o,i,l,"next",e)}function l(e){f(a,t,o,i,l,"throw",e)}i(void 0)}))}}var h=function(e,n){var r,t,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,t&&(o=2&a[0]?t.return:a[0]?t.throw||((o=t.return)&&o.call(t),
0):t.next)&&!(o=o.call(t,a[1])).done)return o;(t=0,o)&&(a=[2&a[0],o.value]);switch(a[0]){case 0:case 1:o=a;break;case 4:i.label++;return{value:a[1],done:!1};case 5:i.label++;t=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1];o=a;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(a);break}o[2]&&i.ops.pop();i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e];t=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};const p=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:7,r=arguments.length>2?arguments[2]:void 0;return d((function(){return h(this,(function(t){switch(t.label){case 0:return[4,s.Z.get({url:c.ANM.GUILD_PRUNE(e),query:{days:n,include_roles:r},oldFormErrors:!0})];case 1:return[2,t.sent().body.pruned]}}))}))()
},y=function(e,n,r){return s.Z.post({url:c.ANM.GUILD_PRUNE(e),body:{days:n,compute_prune_count:!1,include_roles:r},oldFormErrors:!0})};var v=r(429111),b=r(940712),m=r(191940),g=r(138402),S=r(601465),E=r(983319),w=r(604175),_=r(67416),x=r(959797),M=r(249860),R=r.n(M);function Z(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function A(e,n,r,t,o,a,i){try{var l=e[a](i),u=l.value}catch(e){r(e);return}l.done?n(u):Promise.resolve(u).then(t,o)}function N(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var a=e.apply(n,r);function i(e){A(a,t,o,i,l,"next",e)}function l(e){A(a,t,o,i,l,"throw",e)}i(void 0)}))}}function k(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(t=r.next()).done);i=!0){a.push(t.value);if(n&&a.length===n)break}}catch(e){l=!0;o=e
}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,n)||C(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e){return function(e){if(Array.isArray(e))return Z(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||C(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,n){if(e){if("string"==typeof e)return Z(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);return"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Z(e,n):void 0}}var L=function(e,n){var r,t,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1]
;return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,t&&(o=2&a[0]?t.return:a[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,a[1])).done)return o;(t=0,o)&&(a=[2&a[0],o.value]);switch(a[0]){case 0:case 1:o=a;break;case 4:i.label++;return{value:a[1],done:!1};case 5:i.label++;t=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1];o=a;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(a);break}o[2]&&i.ops.pop();i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e];t=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}
;const I=function(e){var n=e.guild,r=e.transitionState,a=e.onClose,s=k(o.useState(7),2),c=s[0],f=s[1],d=k(o.useState(null),2),h=d[0],M=d[1],Z=k(o.useState([]),2),A=Z[0],C=Z[1],I=o.useCallback(N((function(){var e;return L(this,(function(r){switch(r.label){case 0:M(null);return[4,p(n.id,c,A)];case 1:e=r.sent();M(e);return[2]}}))})),[c,n.id,A]);o.useEffect((function(){I()}),[I]);var P=(0,l.e7)([b.Z],(function(){var e=b.Z.getHighestRole(n);return i()(n.roles).sortBy((function(e){return e.position})).filter((function(e){return e.id!==n.id})).filter((function(r){return b.Z.isRoleHigher(n,e,r)})).value()})).map((function(e){var n=e.id;return{label:e.name,value:n}}));return(0,t.jsxs)(_.Y0,{transitionState:r,children:[(0,t.jsx)(_.xB,{separator:!1,children:(0,t.jsxs)(u.X6,{variant:"heading-lg/semibold",children:[x.Z.Messages.PRUNE_MEMBERS,"—",null!=n?n.toString():""]})}),(0,t.jsxs)("div",{className:R().content,children:[(0,t.jsx)(E.Z,{title:x.Z.Messages.FORM_LABEL_LAST_SEEN,children:(0,
t.jsx)(g.ZP,{value:c,options:[{name:x.Z.Messages.LAST_SEEN.format({days:7}),value:7},{name:x.Z.Messages.LAST_SEEN.format({days:30}),value:30}],onChange:function(e){var n=e.value;f(n)},className:R().spacing})}),(0,t.jsx)(E.Z,{title:x.Z.Messages.PRUNE_WITH_ROLES,children:(0,t.jsx)(S.Z,{isMulti:!0,options:P,onChange:function(e){C(e.map((function(e){return e.value})))},value:A,multiValueRenderer:function(e){var r=e.value,o=n.getRole(r);if(null==o)return null;var a=A.indexOf(r);return(0,t.jsx)(v.U,{className:R().role,role:o,canRemove:!0,onRemove:function(){C(j(A.slice(0,a)).concat(j(A.slice(a+1))))},guildId:n.id})},maxMenuHeight:200})}),(0,t.jsx)(w.Z,{type:w.Z.Types.DESCRIPTION,className:R().spacing,children:A.length>0?x.Z.Messages.FORM_HELP_LAST_SEEN_WITH_ROLES_1.format({members:h,days:c}):x.Z.Messages.FORM_HELP_LAST_SEEN_1.format({members:h,days:c})})]}),(0,t.jsxs)(_.mz,{children:[(0,t.jsx)(m.Co,{onClick:function(){y(n.id,c,A);a()},children:x.Z.Messages.PRUNE}),(0,t.jsx)(m.Co,{
look:m.Co.Looks.LINK,color:m.Co.Colors.PRIMARY,onClick:a,children:x.Z.Messages.CANCEL})]})]})}}}]);
//# sourceMappingURL=75177c75ddeb7a73febf.js.map