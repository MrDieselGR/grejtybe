"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[25715,37958],{754780:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(173436);const o={addKeybind:function(e){r.Z.dispatch({type:"KEYBINDS_ADD_KEYBIND",keybind:e})},setKeybind:function(e){r.Z.dispatch({type:"KEYBINDS_SET_KEYBIND",keybind:e})},deleteKeybind:function(e){r.Z.dispatch({type:"KEYBINDS_DELETE_KEYBIND",id:e})},enableAll:function(e){r.Z.dispatch({type:"KEYBINDS_ENABLE_ALL_KEYBINDS",enable:e})}}},737958:(e,t,n)=>{n.r(t);n.d(t,{default:()=>j});var r=n(785893),o=n(667294),s=n(791462),a=n(489992),i=n(754780),c=n(363157),l=n(78979),u=n(931439),d=n(892472),f=n(191940),y=n(554062),D=n(363798),b=n(185347),O=n(881904),p=n(461061),h=n(959797),N=n(838886),E=n.n(N);function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function m(e,t){t=null!=t?t:{}
;Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,s=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done);a=!0){s.push(r.value);if(t&&s.length===t)break}}catch(e){i=!0;o=e}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return s}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name)
;if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e){var t,n=e.transitionState,N=e.onClose,S=(0,s.e7)([u.Z],(function(){return u.Z.getKeybindForAction(p.kg4.SOUNDBOARD_HOLD)})),j=g(o.useState(null!==(t=null==S?void 0:S.shortcut)&&void 0!==t?t:[]),2),B=j[0],I=j[1];o.useEffect((function(){l.Z.disable();return function(){l.Z.enable()}}),[]);return(0,r.jsxs)(D.Y0,{transitionState:n,children:[(0,r.jsxs)(D.xB,{separator:!1,children:[(0,r.jsx)(a.X6,{className:E().header,variant:"heading-xl/semibold",children:h.Z.Messages.SOUNDBOARD_KEYBIND_MODAL_HEADER}),(0,r.jsx)(D.ol,{className:E().closeButton,onClick:N})]}),(0,r.jsxs)(D.hz,{className:E().content,children:[(0,r.jsx)(y.Z,{className:E().warning,messageType:y.Q.WARNING,
children:h.Z.Messages.SOUNDBOARD_KEYBIND_MODAL_KEYBINDS_DISABLED_MESSAGE}),(0,r.jsx)(a.X6,{className:E().formHeader,variant:"eyebrow",color:"header-secondary",children:h.Z.Messages.USER_SETTINGS_KEYBINDS_ACTION}),(0,r.jsx)(a.xv,{className:E().action,variant:"text-md/normal",children:h.Z.Messages.KEYBIND_SOUNDBOARD_HOLD}),(0,r.jsx)(a.xv,{className:E().actionDescription,variant:"text-sm/normal",children:h.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD}),(0,r.jsx)(a.X6,{className:E().formHeader,variant:"eyebrow",color:"header-secondary",children:h.Z.Messages.USER_SETTINGS_KEYBINDS_KEYBIND}),(0,r.jsx)(c.Z,{defaultValue:B,onChange:I}),(0,r.jsx)(d.Z,{className:E().resetButton,onClick:function(){return I((0,b.Kd)(O.D_))},children:h.Z.Messages.SOUNDBOARD_KEYBIND_MODAL_RESET_KEYBIND})]}),(0,r.jsxs)(D.mz,{children:[(0,r.jsx)(f.Co,{onClick:function(){if(0===B.length){null!=S&&i.Z.deleteKeybind(S.id);return N()}null==S?i.Z.addKeybind({action:p.kg4.SOUNDBOARD_HOLD,shortcut:B
}):i.Z.setKeybind(m(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){_(e,t,n[t])}))}return e}({},S),{shortcut:B}));N()},children:h.Z.Messages.SAVE}),(0,r.jsx)(f.Co,{onClick:N,look:f.Co.Looks.LINK,color:f.Co.Colors.PRIMARY,children:h.Z.Messages.CANCEL})]})]})}}}]);
//# sourceMappingURL=811c290ec2d94beb51b0.js.map