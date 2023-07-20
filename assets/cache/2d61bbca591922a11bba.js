"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[18241],{276256:(e,n,t)=>{t.d(n,{B:()=>a});var r=t(496486),o=t.n(r),a=function(e,n){var t=o().shuffle(e),r=t.findIndex((function(e){return e.value===n}));if(r>-1){var a=t[r];t.splice(r,1);t.push(a)}return t}},518241:(e,n,t)=>{t.d(n,{L:()=>O,Z:()=>S});var r=t(785893),o=t(667294),a=t(294184),l=t.n(a),i=t(496486),s=t.n(i),u=t(489992),c=t(244028),h=t(191940),f=t(146530),d=t(825611),p=t(629590),g=t(487502),m=t(309494),v=t(272729),x=t(562181),y=t(160036),b=t(67416),j=t(95467),C=t(276256),N=t(76997),L=t(959797),E=t(839319),Z=t.n(E);function w(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function M(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(r=t.next()).done);l=!0){a.push(r.value)
;if(n&&a.length===n)break}}catch(e){i=!0;o=e}finally{try{l||null==t.return||t.return()}finally{if(i)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return w(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var R=[{className:Z().emojiSad,rating:N.aZ.BAD},{className:Z().emojiNeutral,rating:N.aZ.NEUTRAL},{className:Z().emojiHappy,rating:N.aZ.GOOD}];function O(e){var n=e.className,t=e.selectedRating,o=e.onChangeRating;return(0,r.jsx)(g.Z,{justify:g.Z.Justify.BETWEEN,align:g.Z.Align.CENTER,className:l()(Z().ratingsSelector,n),children:R.map((function(e){var n=e.rating,a=e.className;return(0,
r.jsx)(p.Z,{onClick:function(){return o(n)},"aria-label":n,children:(0,r.jsx)("div",{className:l()(a,t===n?Z().selected:null)})},n)}))})}function I(){return(0,r.jsx)(u.xv,{className:Z().helpdeskLink,variant:"text-xs/normal",color:"text-muted",children:L.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({helpdeskURL:j.Z.getSubmitRequestURL()})})}function S(e){var n=e.header,t=e.body,a=e.problemTitle,l=e.problems,i=e.transitionState,p=e.feedbackProblems,j=void 0===p?[]:p,E=e.otherKey,w=e.onSubmit,R=e.onClose,S=(0,c.Z)(l),_=M(o.useState(!1),2),A=_[0],D=_[1],T=M(o.useState(null),2),k=T[0],B=T[1],U=M(o.useState(null),2),z=U[0],P=U[1],F=M(o.useState(s().shuffle(l)),2),G=F[0],H=F[1],K=M(o.useState(""),2),q=K[0],J=K[1],Q=(0,v.Dt)(),W=(0,y.Z)(k),X=(0,y.Z)(A),Y=(0,y.Z)(z),V=(0,y.Z)(w),$=(0,y.Z)(q),ee=null!=z&&j.includes(z);o.useEffect((function(){s().isEqual(S,l)||H((0,C.B)(l,E))}),[l,S,E]);o.useEffect((function(){return function(){V.current({rating:W.current,problem:Y.current,dontShowAgain:X.current,
feedback:$.current})}}),[]);return(0,r.jsxs)(b.Y0,{transitionState:i,className:Z().modalRoot,"aria-labelledby":Q,children:[(0,r.jsxs)(b.xB,{separator:!1,className:Z().headerContainer,children:[(0,r.jsx)(u.X6,{id:Q,variant:"heading-xl/extrabold",color:"none",children:n}),(0,r.jsx)(u.xv,{variant:"text-md/normal",color:"none",className:Z().ratingBody,children:t}),ee?null:(0,r.jsx)(O,{className:Z().emojis,selectedRating:k,onChangeRating:function(e){B(e);e===N.aZ.GOOD&&R()}})]}),(0,r.jsxs)(b.hz,{className:Z().content,children:[null==k||k===N.aZ.GOOD||ee?null:(0,r.jsx)(x.xJ,{title:a,className:Z().problemInfo,children:(0,r.jsx)(d.Z,{options:G,onClick:function(e){var n=e.value;P(n);j.includes(n)||R()}})}),ee?(0,r.jsxs)(x.xJ,{title:L.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,className:Z().problemInfo,children:[(0,r.jsx)(m.Z,{value:q,maxLength:N.iF,onChange:J}),(0,r.jsx)(I,{})]}):null]}),(0,r.jsx)(b.mz,{className:Z().footer,direction:g.Z.Direction.HORIZONTAL,children:ee?(0,r.jsxs)(r.Fragment,{
children:[(0,r.jsx)(h.Co,{size:h.Co.Sizes.SMALL,look:h.Co.Looks.LINK,color:h.Co.Colors.PRIMARY,onClick:function(){P(null);J("")},children:L.Z.Messages.BACK}),(0,r.jsx)(h.Co,{size:h.Co.Sizes.SMALL,onClick:R,children:L.Z.Messages.SUBMIT})]}):(0,r.jsx)(f.Z,{type:f.Z.Types.INVERTED,size:18,value:A,onChange:function(){return D(!A)},children:(0,r.jsx)(u.xv,{variant:"text-sm/normal",children:L.Z.Messages.DONT_SHOW_AGAIN})})})]})}},825611:(e,n,t)=>{t.d(n,{Z:()=>h});var r=t(785893),o=(t(667294),t(294184)),a=t.n(o),l=t(489992),i=t(629590),s=t(414597),u=t(94480),c=t.n(u);function h(e){var n=e.options,t=e.onClick,o=e.className,u=e.optionClassName;return(0,r.jsx)("div",{className:a()(c().root,o),children:n.map((function(e,n){return(0,r.jsxs)(i.Z,{onClick:function(){return t(e)},className:a()(c().option,u),children:[(0,r.jsx)(l.xv,{className:c().text,color:"none",variant:"text-md/normal",children:e.label}),(0,r.jsx)(s.Z,{className:c().caret,direction:s.Z.Directions.RIGHT})]},n)}))})}},
309494:(e,n,t)=>{t.d(n,{Z:()=>R});var r=t(785893),o=t(667294),a=t(294184),l=t.n(a),i=t(647446),s=t(747465),u=t(629620),c=t(272729),h=t(881186),f=t(959797),d=t(17676),p=t.n(d),g=t(641501),m=t.n(g),v=t(840348),x=t.n(v);function y(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function b(e){b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return b(e)}function j(e,n){return!n||"object"!==N(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function C(e,n){C=Object.setPrototypeOf||function(e,n){e.__proto__=n;return e};return C(e,n)}var N=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function L(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1
;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var t,r=b(e);if(n){var o=b(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return j(this,t)}}var E=(0,c.hQ)(),Z=(0,c.hQ)(),w=(0,c.hQ)(),M=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}});n&&C(e,n)}(t,e);var n=L(t);function t(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t);var r,o;(r=n.call(this,e)).onChange=function(e){var n=r.props,t=n.onChange,o=n.name;null==t||t(e.currentTarget.value,o);r.setState({dirty:!0})};r.onFocus=function(e){var n=r.props,t=n.onFocus,o=n.name;null==t||t(e,o)};r.onBlur=function(e){var n=r.props,t=n.onBlur,o=n.name
;null==t||t(e,o)};r.onKeyDown=function(e){var n=r.props.onKeyDown;null==n||n(e)};r.state={dirty:null!==(o=e.defaultDirty)&&void 0!==o&&o};return r}var o=t.prototype;o.getPaddingRight=function(){var e=this.props.maxLength;return null==e?10:7.23*"".concat(e).length+10};o.getCharsLeftLength=function(){var e=this.props,n=e.maxLength,t=e.value;return null==n?null:n-(null!=t?t.length:0)};o.getIsOverflowing=function(){var e=this.getCharsLeftLength();return null!=e&&e<0};o.getIsUnderflowing=function(){var e=this.props,n=e.minLength,t=e.value;return null!=n&&(null!=t?t.length:0)<n};o.renderCharacterCount=function(){if(this.props.showCharacterCount){var e,n=this.props,t=n.value,o=n.maxLength;return(0,r.jsxs)("div",{className:l()(p().maxLength,y({},p().errorOverflow,this.hasError())),"aria-hidden":"true",children:[null!==(e=null==t?void 0:t.length)&&void 0!==e?e:0," ",null!=o&&"/ ".concat(o)]})}return null};o.renderMaxLength=function(){
if(this.props.showCharacterCount||!1===this.props.showRemainingCharacterCount)return null;var e=this.getCharsLeftLength();return null==e?null:(0,r.jsx)("div",{className:l()(p().maxLength,y({},p().errorOverflow,e<0)),"aria-hidden":"true",children:e})};o.hasError=function(){return null!=this.props.error||!1!==this.state.dirty&&(this.getIsOverflowing()||this.getIsUnderflowing()||!1)};o.getErrorMessage=function(){var e=this.props,n=e.error,t=e.maxLength,r=e.minLength,o=this.getIsOverflowing()?f.Z.Messages.MAXIMUM_LENGTH_ERROR.format({maxLength:t}):null,a=this.getIsUnderflowing()?f.Z.Messages.MINIMUM_LENGTH_ERROR.format({minLength:r}):null;return null!=n&&n.length<1||null===n?null:void 0!==n?n:!1===this.state.dirty?null:null!=o?o:a};o.renderErrorMessage=function(){var e=this.getErrorMessage();return null==e?null:(0,r.jsx)("div",{id:E,className:p().errorMessage,children:e})};o.render=function(){
var e,n,t,o=this.props,a=o.disabled,c=o.value,h=o.placeholder,d=o.autoFocus,g=o.minLength,v=o.maxLength,b=o.allowOverflow,j=o.resizeable,C=o.className,N=o.id,L=o.rows,M=o.flex,R=o.autosize,O=o.required,I=o.onInvalid,S=o.inputRef,_=R?u.Z:"textarea",A=this.hasError(),D=null!==(n=this.props["aria-labelledby"])&&void 0!==n?n:null===(e=this.context)||void 0===e?void 0:e.titleId;return(0,r.jsxs)("div",{className:l()(m().inputWrapper,y({},p().flex,M)),children:[(0,r.jsxs)("div",{className:l()(p().inputMaxLength,y({},p().flex,M)),children:[(0,r.jsx)(i.tE,{children:(0,r.jsx)(_,{type:"text",className:l()(m().inputDefault,p().textArea,x().scrollbarDefault,C,(t={},y(t,m().error,A),y(t,m().disabled,a),y(t,p().resizeable,j),t)),"aria-labelledby":D,"aria-describedby":null!=this.props.error?E:"".concat(Z," ").concat(w),"aria-invalid":A,style:{paddingRight:this.getPaddingRight()},id:N,disabled:a,placeholder:h,value:c,autoFocus:d,minLength:g,maxLength:b?void 0:v,required:O,onChange:this.onChange,
onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeyDown,onInvalid:I,rows:L,ref:S})}),null!=g&&(0,r.jsx)(s.Z,{id:Z,children:f.Z.Messages.MINIMUM_LENGTH.format({minLength:g})}),null!=v&&(0,r.jsx)(s.Z,{id:w,children:f.Z.Messages.MAXIMUM_LENGTH.format({maxLength:v})}),this.renderCharacterCount(),this.renderMaxLength()]}),this.renderErrorMessage()]})};return t}(o.Component);M.contextType=h.q3;M.defaultProps={name:"",disabled:!1,placeholder:"",autoFocus:!1,resizeable:!1,flex:!1,autosize:!1,rows:3,allowOverflow:!1};const R=M}}]);
//# sourceMappingURL=2d61bbca591922a11bba.js.map