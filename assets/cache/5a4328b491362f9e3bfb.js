"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[36056],{136056:(e,t,r)=>{r.r(t);r.d(t,{default:()=>_});var n=r(785893),o=r(667294),c=r(489992),s=r(830395),i=r(200056),a=r(784238),l=r(191940),u=r(801593),f=r(562181),p=r(67416),h=r(461061),d=r(959797),b=r(728494),y=r.n(b);function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function j(e){j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return j(e)}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){m(e,t,r[t])}))}return e}function v(e,t){
t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}function C(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e,t){E=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return E(e,t)}var P=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{
Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var r,n=j(e);if(t){var o=j(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return C(this,r)}}var w=(0,i.Un)({createPromise:function(){return Promise.all([r.e(40532),r.e(7943),r.e(36623)]).then(r.bind(r,504773))},webpackId:504773});const _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&E(e,t)}(r,e);var t=S(r);function r(){O(this,r);var e,n;(e=t.apply(this,arguments)).state={name:null!==(n=e.props.folderName)&&void 0!==n?n:"",color:e.props.folderColor};e.close=function(){e.props.onClose()};e.handleNameChange=function(t){e.setState({name:t})};e.handleColorChange=function(t){e.setState({color:t})};e.handleSubmit=function(t){t.preventDefault()
;var r=e.props.folderId,n=e.state,o=n.name,c=n.color,i=a.Z.guildFolders.map((function(e){return e.folderId===r?v(g({},e),{folderName:o,folderColor:c}):e}));(0,s.V)(i);e.close()};return e}r.prototype.render=function(){var e=this.props.transitionState,t=this.state,r=t.name,o=t.color;return(0,n.jsxs)(p.Y0,{transitionState:e,"aria-label":d.Z.Messages.SERVER_FOLDER_SETTINGS,size:p.Cg.DYNAMIC,children:[(0,n.jsxs)(p.xB,{className:y().header,separator:!1,children:[(0,n.jsx)(c.X6,{variant:"heading-lg/semibold",children:d.Z.Messages.SERVER_FOLDER_SETTINGS}),(0,n.jsx)(p.ol,{onClick:this.close})]}),(0,n.jsx)(p.hz,{children:(0,n.jsxs)("form",{onSubmit:this.handleSubmit,children:[(0,n.jsx)(f.xJ,{title:d.Z.Messages.GUILD_FOLDER_NAME,className:y().formItem,children:(0,n.jsx)(u.ZP,{maxLength:h.dYL,value:r,onChange:this.handleNameChange,placeholder:d.Z.Messages.SERVER_FOLDER_PLACEHOLDER,autoFocus:!0})}),(0,n.jsx)(f.xJ,{title:d.Z.Messages.GUILD_FOLDER_COLOR,className:y().formItem,children:(0,n.jsx)(w,{
defaultColor:h.Wyy,colors:h.pmI,value:null!=o?o:h.Wyy,onChange:this.handleColorChange})})]})}),(0,n.jsx)(p.mz,{children:(0,n.jsx)(l.Co,{type:"submit",onClick:this.handleSubmit,children:d.Z.Messages.DONE})})]})};return r}(o.PureComponent)}}]);
//# sourceMappingURL=5a4328b491362f9e3bfb.js.map