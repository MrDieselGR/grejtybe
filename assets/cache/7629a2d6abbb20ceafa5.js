"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[76213],{476213:(e,t,n)=>{n.d(t,{Z:()=>S});var r=n(785893),a=n(667294),o=n(294184),i=n.n(o),l=n(496486),s=n.n(l),u=n(647446),c=n(388721),d=n(730189),f=n(757987),v=n(73432),h=n.n(v);function p(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function m(e){m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return m(e)}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){p(e,t,n[t])}))}return e}function y(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){
var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function k(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e,t){g=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return g(e,t)}var w,x=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){
var n,r=m(e);if(t){var a=m(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return k(this,n)}}!function(e){e[e.ABOVE=0]="ABOVE";e[e.BELOW=1]="BELOW"}(w||(w={}));function O(e,t){for(var n=0,r=0;r<t.length;r++){var a=t[r];if(e===a)return r;if(e<a)return 0===n||a-e<n?r:r-1;n=e-a}return null}function V(e){var t=e.markers,n=e.initialValue,r=e.minValue,a=e.maxValue,o=e.equidistant,i=[],l=[];if(null==t)return{min:r,max:a,range:a-r,sortedMarkers:i,markerPositions:l};var s=O(n,i=t.sort((function(e,t){return e-t}))),u=i[0],c=i[i.length-1],d=c-u;if(o){var f=100/(i.length-1);l=i.map((function(e,t){return t*f}))}else{l=i.map((function(e){return 100*(e-u)/d}))}return{min:u,max:c,range:d,sortedMarkers:i,markerPositions:l,closestMarkerIndex:s}}function P(e){return b({value:Math.min(Math.max(e.initialValue,e.minValue),e.maxValue),initialValueProp:e.initialValue,newClosestIndex:null},V(e))}var j=function(e){!function(e,t){
if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&g(e,t)}(n,e);var t=M(n);function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var r;(r=t.call(this,e)).containerRef=a.createRef();r.grabberRef=a.createRef();r.moveGrabber=function(e){var t=r.state,n=t.sortedMarkers,a=t.value,o=t.min,i=t.max,l=r.props,u=l.asValueChanges,c=l.onValueChange,d={};if(l.stickToMarkers){var f=n.indexOf(a);if(f<0)return;var v=f+e,h=n[v];if(null==h)return;d.value=h;d.closestMarkerIndex=v;d.newClosestIndex=v}else d.value=s().clamp(a+e,o,i);r.setState(d);if(d.value!==r.state.value){null==u||u(d.value);null==c||c(d.value)}};r.handleContainerMouseDown=function(e){
var t=r.props,n=t.disabled,a=t.maxValue,o=t.minValue,i=t.asValueChanges,l=t.onValueChange,s=t.stickToMarkers,u=r.state,d=u.sortedMarkers,f=u.markerPositions;if(!n){var v=e.clientX,h=e.currentTarget;if((0,c.k)(h)){var p,m=h.getBoundingClientRect(),b=(v-m.left)/m.width;if(s){var y=f.reduce((function(e,t,n){var r=Math.abs(t/100-b);return r<=e.smallestDelta?{smallestDelta:r,nextClosestMarkerIndex:n}:e}),{smallestDelta:1,nextClosestMarkerIndex:-1}).nextClosestMarkerIndex;if(-1===y)return;r.setState({closestMarkerIndex:y});p=d[y]}else{p=o+(a-o)*b;r.setState({value:p});r.handleMouseDown(e)}null!=l&&l(p);null!=i&&i(p)}}};r.handleKeyDown=function(e){var t=r.props,n=t.disabled,a=t.orientation,o=t.keyboardStep,i=void 0===o?1:o;if(!n){var l=e.key,s=[],u=[];switch(a){case"horizontal":s=["ArrowRight"];u=["ArrowLeft"];break;case"vertical":s=["ArrowUp"];u=["ArrowDown"];break;default:s=["ArrowRight","ArrowUp"];u=["ArrowLeft","ArrowDown"]}if(u.includes(l)){e.preventDefault();e.stopPropagation()
;r.moveGrabber(-i)}else if(s.includes(l)){e.preventDefault();e.stopPropagation();r.moveGrabber(i)}}};r.handleMouseDown=function(e){var t,n;if(!r.props.disabled){e.stopPropagation();var a=r.containerRef.current;null==a||null===(t=a.ownerDocument)||void 0===t||t.addEventListener("mousemove",r.handleMouseMove,!0);null==a||null===(n=a.ownerDocument)||void 0===n||n.addEventListener("mouseup",r.handleMouseUp,!0);if(!(0,c.k)(a))throw new Error("[UIKit]Slider.handleMouseDown(): assert failed: domNode nodeType !== Element");r.setState({x:e.clientX,active:!0,boundingRect:a.getBoundingClientRect(),newClosestIndex:r.state.closestMarkerIndex})}};r.handleMouseUp=function(e){e.stopPropagation();r.reset();var t=r.props,n=t.onValueChange,a=t.stickToMarkers,o=r.state.newClosestIndex;if(a&&null!=o){null==n||n(r.state.sortedMarkers[o]);r.setState({newClosestIndex:null,closestMarkerIndex:o})}else null==n||n(r.state.value);r.setState({active:!1})};r.handleMouseMove=function(e){e.preventDefault()
;r.props.stickToMarkers?r.moveStaggered(e):r.moveSmoothly(e)};r.onFocus=function(){r.setState({focused:!0})};r.onBlur=function(){r.setState({focused:!1})};r.state=b({active:!1,focused:!1},P(e));return r}var o=n.prototype;o.componentWillUnmount=function(){this.reset()};o.renderMark=function(e){var t=this.props.onMarkerRender;return null!=t?t(e):e};o.render=function(){var e=this,t=this.state,n=t.value,a=t.active,o=t.focused,l=t.sortedMarkers,s=t.markerPositions,c=t.closestMarkerIndex,v=t.newClosestIndex,m=t.min,k=t.max,g=this.props,x=g.disabled,M=g.stickToMarkers,O=g.className,V=g.children,P=g.barStyles,j=g.fillStyles,S=g.mini,D=g.hideBubble,C=g.defaultValue,R=g.orientation,E=g.onValueRender,I=g.renderMarker,N=g.getAriaValueText,B=g.barClassName,A=g.grabberClassName,T=g.grabberStyles,_=void 0===T?{}:T,L=g.markerPosition,X=void 0===L?w.ABOVE:L,F=g["aria-hidden"],U=g["aria-label"],G=g["aria-labelledby"],K=g["aria-describedby"],W=0
;M?null!=s&&(null!=v?W=s[v]:null!=c&&(W=s[c])):W=this.scaleValue(n);var Z,z,q="".concat(W,"%"),Y=null!=s&&null!=l?s.map((function(t,n){var a,o=l[n],s=null!=C&&C===o,u=e.renderMark(o);return(0,r.jsx)("div",{className:i()(h().mark,(a={},p(a,h().defaultValue,s),p(a,h().markAbove,X===w.ABOVE),p(a,h().markBelow,X===w.BELOW),a)),style:{left:"".concat(t,"%")},children:null!=I?I(o):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:h().markValue,children:u}),(0,r.jsx)("div",{className:h()["markDash".concat(null==u?"simple":"")]})]})},n)})):null,H=null!=E?E(n):"".concat(W.toFixed(0),"%"),J=null!==(Z=null==N?void 0:N(n))&&void 0!==Z?Z:void 0;return(0,r.jsx)(u.tE,{focusTarget:this.containerRef,ringTarget:this.grabberRef,children:(0,r.jsxs)("div",{className:i()(h().slider,O,(z={},p(z,h().disabled,x),p(z,h().mini,S),z)),"aria-valuemin":m,"aria-valuemax":k,"aria-valuenow":n,"aria-disabled":x,"aria-orientation":R,"aria-hidden":F,"aria-label":U,"aria-labelledby":G,"aria-describedby":K,
"aria-valuetext":J,role:"slider",tabIndex:0,onKeyDown:this.handleKeyDown,onMouseDown:this.handleContainerMouseDown,onFocus:this.onFocus,onBlur:this.onBlur,ref:this.containerRef,children:[(0,r.jsx)("div",{className:h().track,children:Y}),(0,r.jsx)("div",{className:i()(h().bar,B),style:P,children:(0,r.jsx)("div",{className:h().barFill,style:y(b({},j),{width:q})})}),V,(0,r.jsx)("div",{className:h().track,children:(0,r.jsx)(f.ZP,{color:f.ZP.Colors.GREY,hideOnClick:!1,text:D||M?null:H,forceOpen:a||o&&d.Z.keyboardModeEnabled,children:function(t){return(0,r.jsx)("div",y(b({},t),{className:i()(h().grabber,A),style:y(b({},_),{left:q}),onMouseDown:e.handleMouseDown,ref:e.grabberRef}))}})})]})})};o.reset=function(){var e,t,n,r;null===(e=this.containerRef.current)||void 0===e||null===(t=e.ownerDocument)||void 0===t||t.removeEventListener("mousemove",this.handleMouseMove,!0)
;null===(n=this.containerRef.current)||void 0===n||null===(r=n.ownerDocument)||void 0===r||r.removeEventListener("mouseup",this.handleMouseUp,!0)};o.scaleValue=function(e){return 100*(e-this.state.min)/this.state.range};o.unscaleValue=function(e){return e*this.state.range/100+this.state.min};o.focus=function(){var e;null===(e=this.containerRef.current)||void 0===e||e.focus()};o.blur=function(){var e;null===(e=this.containerRef.current)||void 0===e||e.blur()};o.moveStaggered=function(e){var t=this.state,n=t.boundingRect,r=t.x,a=void 0===r?0:r,o=t.closestMarkerIndex,i=t.markerPositions,l=t.sortedMarkers,s=this.props.asValueChanges,u=null!=n?n:{left:NaN,right:NaN},c=u.left,d=u.right;if(!(e.clientX<=c||e.clientX>=d)){var f,v=d-c,h=(e.clientX-a)/v,p=i[o]+100*h;if(this.props.equidistant)f=O(p,i);else{f=O(this.unscaleValue(p),l)}null!=f&&s&&s(l[f]);this.setState({newClosestIndex:f})}};o.moveSmoothly=function(e){
var t=this.props,n=t.minValue,r=t.maxValue,a=t.handleSize,o=t.asValueChanges,i=this.state.boundingRect,l=i.left,s=i.right,u=this.state.x-e.clientX,c=(this.state.value-n)/(r-n);if(!(e.clientX<=l&&u<0||e.clientX>=s&&u>0)){var d=s-l-a,f=d*c;c=Math.min(Math.max(f-u,0),d)/d}var v=n+c*(r-n);null==o||o(v);this.setState({value:v,x:e.clientX})};n.getDerivedStateFromProps=function(e,t){return e.initialValue!==t.initialValueProp?y(b({},P(e)),{active:t.active}):null};return n}(a.PureComponent);j.defaultProps={initialValue:10,minValue:0,maxValue:100,keyboardStep:1,handleSize:10,disabled:!1,stickToMarkers:!1,fillStyles:{}};const S=j}}]);
//# sourceMappingURL=7629a2d6abbb20ceafa5.js.map