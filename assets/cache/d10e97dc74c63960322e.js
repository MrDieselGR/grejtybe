"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[88028],{888028:(t,e,n)=>{n.d(e,{Z:()=>N});var r=n(785893),i=n(667294),a=n(294184),o=n.n(a),s=n(489992),l=n(40188),c=n(191940),u=n(272729),p=n(67416),f=n(959797),h=n(282373),d=n.n(h);function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function g(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}function v(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,a=[],o=!0,s=!1;try{for(n=n.call(t);!(o=(r=n.next()).done);o=!0){a.push(r.value);if(e&&a.length===e)break}}catch(t){s=!0;i=t}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}}(t,e)||b(t,e)||function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||b(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){if(t){if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);return"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}}var S=function(t){var e=t.index,n=t.title,i=t.selected;return(0,r.jsxs)("div",{className:o()(d().overviewStep,g({},d().selected,i)),children:[(0,r.jsx)(s.xv,{className:d().stepIndex,
variant:"text-sm/normal",children:e+1}),(0,r.jsx)(s.xv,{variant:"text-md/normal",className:d().stepTitle,children:n})]})};const N=function(t){var e=t.className,n=t.title,a=t.stepData,h=t.transitionState,m=t.onClose,g=t.completeButtonText,b=t.overviewFooter,N=t.onNextPressed,j=t.onPrevPressed,O=t.onComplete,P=t.sequencerClassName,x=t.initialStep,C=void 0===x?0:x,E=t.forceStep,w=t.submitting,A=void 0!==w&&w,R=t.autoCloseOnComplete,I=void 0===R||R,H=v(i.useState([]),2),T=H[0],D=H[1],M=v(i.useState(C),2),Z=M[0],_=M[1],k=(0,u.Dt)();i.useEffect((function(){D(y(Array(a.length).keys()))}),[a.length]);var G=null!=E?E:Z,B=a[G],L=0===G,V=G===a.length-1,z=null!=g?g:f.Z.Messages.DONE,U=i.useCallback((function(){null==j||j();_(G-1)}),[j,G,_]);return(0,r.jsxs)(p.Y0,{size:p.Cg.MEDIUM,className:o()(d().container,e),transitionState:h,"aria-labelledby":k,children:[(0,r.jsxs)("div",{className:d().overviewSidebar,children:[(0,r.jsx)(s.X6,{id:k,variant:"heading-xl/semibold",className:d().header,children:n
}),(0,r.jsx)("div",{className:d().overviewSteps,children:a.map((function(t,e){return(0,r.jsx)(S,{index:e,title:t.overviewTitle,selected:e===G},e)}))}),b]}),(0,r.jsxs)("div",{className:d().modal,children:[(0,r.jsxs)(p.hz,{children:[(0,r.jsx)(p.ol,{focusProps:{offset:{top:4,right:4,left:4}},onClick:m,className:d().closeButton}),(0,r.jsx)(l.Z,{step:G,steps:T,sideMargin:24,verticalMargin:24,className:o()(d().sequencer,P),innerClassName:d().innerSequencer,children:B.modalContent})]}),(0,r.jsxs)(p.mz,{className:d().footer,children:[(0,r.jsx)(c.Co,{type:"submit",submitting:A,onClick:function(){if(V){O();I&&m()}else{null==N||N();_(G+1)}},color:c.Co.Colors.GREEN,disabled:B.disableNextStep,children:V?z:f.Z.Messages.NEXT}),L?null:(0,r.jsx)(c.Co,{look:c.Co.Looks.LINK,color:c.Co.Colors.PRIMARY,size:c.Co.Sizes.MIN,onClick:U,children:f.Z.Messages.BACK})]})]})]})}},40188:(t,e,n)=>{n.d(e,{Z:()=>O});var r=n(785893),i=n(667294),a=n(294184),o=n.n(a),s=n(738017),l=n(589175),c=n(39802),u=n(913165),p=n.n(u)
;function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}function d(t){d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)};return d(t)}function m(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}});e&&y(t,e)}function g(t,e){e=null!=e?e:{};Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})));n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){
Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}function v(t,e){return!e||"object"!==S(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t,e){y=Object.setPrototypeOf||function(t,e){t.__proto__=e;return t};return y(t,e)}var b,S=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function N(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(t){return!1}}();return function(){var n,r=d(t);if(e){var i=d(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return v(this,n)}}!function(t){t[t.ENTERING=0]="ENTERING";t[t.LEAVING=1]="LEAVING";t[t.APPEARING=2]="APPEARING";t[t.STATIC=3]="STATIC"
}(b||(b={}));var j=function(t){m(n,t);var e=N(n);function n(){f(this,n);var t;(t=e.apply(this,arguments)).state={animationProgress:new s.Z.Value(0),targetHeight:0,baseHeight:0,animationState:null};t.direction=t.props.getDirection();t._measureRef=i.createRef();return t}var a=n.prototype;a.componentDidMount=function(){if(null!=this._measureRef.current){var t=this._measureRef.current.getBoundingClientRect().height;this.setState({targetHeight:t,baseHeight:this.props.getBaseHeight()})}};a.componentDidUpdate=function(t,e){e.targetHeight!==this.state.targetHeight&&this.props.setHeight(this.state.targetHeight)};a.componentWillAppear=function(t){this.setState({animationState:b.APPEARING});t()};a.componentDidAppear=function(){var t=this.state,e=t.animationProgress,n=t.targetHeight;e.setValue(2);this.setState({animationState:b.STATIC,baseHeight:n})};a.componentWillEnter=function(t){var e=this.props.duration,n=this.state.animationProgress;this.setState({animationState:b.ENTERING})
;this.props.setHeight(this.state.targetHeight);s.Z.timing(n,{toValue:2,duration:e,delay:e/2}).start(t)};a.componentDidEnter=function(){this.setState({animationState:b.STATIC})};a.componentWillLeave=function(t){var e=this.state.animationProgress,n=this.props,r=n.duration,i=n.getDirection;this.direction=i();this.setState({animationState:b.LEAVING});s.Z.timing(e,{toValue:0,duration:r}).start(t)};a.componentDidLeave=function(){this.setState({animationState:b.STATIC})};a.getAnimatedStyle=function(){var t,e,n=this.context.reducedMotion,r=this.props.fillParent,i=this.state,a=i.animationProgress,o=i.animationState,l=i.baseHeight,c=i.targetHeight,u=null!==(t=this.props.sideMargin)&&void 0!==t?t:0,p=null!==(e=this.props.verticalMargin)&&void 0!==e?e:0,f=o===b.LEAVING,d=o===b.ENTERING,m=(f?-1:1)*this.direction,v={overflow:d||f?"hidden":"visible",position:f?"absolute":void 0,top:f?p:void 0,left:f?u:void 0,right:f?u:void 0,bottom:f?p:void 0},y={transform:[{translateX:a.interpolate({
inputRange:[0,2],outputRange:["".concat(150*m,"%"),"0%"],extrapolate:"clamp",easing:s.Z.Easing.inOut(s.Z.Easing.ease)})}]};return g(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))));r.forEach((function(e){h(t,e,n[e])}))}return t}({},v,n.enabled?null:y),{opacity:a.interpolate({inputRange:[0,2],outputRange:[0,1],extrapolate:"clamp",easing:s.Z.Easing.inOut(s.Z.Easing.ease)}),height:d?a.interpolate({inputRange:[0,1],outputRange:[l,c],extrapolate:"clamp",easing:s.Z.Easing.inOut(s.Z.Easing.ease)}):r?"100%":"auto"})};a.render=function(){var t=this.props,e=t.fillParent,n=t.className,i=t.animatedNodeClassName,a=t.staticClassName,l=this.state.animationState;return e?(0,r.jsx)("div",{ref:this._measureRef,
className:o()(p().measurementFill,n,h({},o()(p().measurementFillStatic,a),l===b.STATIC)),children:(0,r.jsx)(s.Z.div,{className:o()(p().animatedNode,i),style:this.getAnimatedStyle(),children:this.props.children})}):(0,r.jsx)("div",{ref:this._measureRef,className:o()(p().measurement,n),children:(0,r.jsx)(s.Z.div,{className:o()(p().animatedNode,i),style:this.getAnimatedStyle(),children:this.props.children})})};return n}(i.PureComponent);j.contextType=c.S;j.defaultProps={duration:300};var O=function(t){m(n,t);var e=N(n);function n(){f(this,n);var t;(t=e.apply(this,arguments)).stepHeights={};t.prevStep=null;t.prevSteps=[];t.getBaseHeight=function(){return null!=t.prevStep&&null!=t.stepHeights[t.prevStep]?t.stepHeights[t.prevStep]:0};t.getDirection=function(){var e=t.props,n=e.steps,r=e.step,i=null!=t.prevStep?n.indexOf(t.prevStep):-1,a=-1===i&&null!=t.prevStep?t.prevSteps.indexOf(t.prevStep):-1;return Math.max(i,a)>n.indexOf(r)?-1:1};t.setHeight=function(e){var n=t.props.step
;t.stepHeights[n]=e};return t}var i=n.prototype;i.componentDidMount=function(){this.setPrevSteps()};i.componentDidUpdate=function(){this.setPrevSteps()};i.setPrevSteps=function(){var t=this.props,e=t.step,n=t.steps;this.prevStep=e;this.prevSteps=n};i.render=function(){var t=this.props,e=t.step,n=t.className,i=t.innerClassName,a=t.animatedNodeClassName,s=t.staticClassName,c=t.sideMargin,u=t.verticalMargin,f=t.children,h=t.fillParent;return(0,r.jsx)(l.Z,{component:"div",className:o()(p().transitionGroup,n),children:(0,r.jsx)(j,{fillParent:h,sideMargin:c,verticalMargin:u,getDirection:this.getDirection,getBaseHeight:this.getBaseHeight,className:i,animatedNodeClassName:a,staticClassName:s,setHeight:this.setHeight,children:f},"".concat(e))})};return n}(i.Component);O.defaultProps={fillParent:!1}}}]);
//# sourceMappingURL=d10e97dc74c63960322e.js.map