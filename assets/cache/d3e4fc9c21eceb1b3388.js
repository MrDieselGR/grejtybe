"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[19887],{588983:(e,t,n)=>{n.d(t,{Z:()=>b});var s=n(487462),i=n(263366),a=n(894578);n(45697);function r(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var o=n(667294),l=n(973935);const c=!1;var u=n(500220),p="unmounted",d="exited",f="entering",h="entered",E="exiting",m=function(e){(0,a.Z)(t,e);function t(t,n){var s;s=e.call(this,t,n)||this;var i,a=n&&!n.isMounting?t.enter:t.appear;s.appearStatus=null;if(t.in)if(a){i=d;s.appearStatus=f}else i=h;else i=t.unmountOnExit||t.mountOnEnter?p:d;s.state={status:i};s.nextCallback=null;return s}t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===p?{status:d}:null};var n=t.prototype;n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)};n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status
;this.props.in?n!==f&&n!==h&&(t=f):n!==f&&n!==h||(t=E)}this.updateStatus(!1,t)};n.componentWillUnmount=function(){this.cancelNextCallback()};n.getTimeouts=function(){var e,t,n,s=this.props.timeout;e=t=n=s;if(null!=s&&"number"!=typeof s){e=s.exit;t=s.enter;n=void 0!==s.appear?s.appear:t}return{exit:e,enter:t,appear:n}};n.updateStatus=function(e,t){void 0===e&&(e=!1);if(null!==t){this.cancelNextCallback();var n=l.findDOMNode(this);t===f?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===d&&this.setState({status:p})};n.performEnter=function(e,t){var n=this,s=this.props.enter,i=this.context?this.context.isMounting:t,a=this.getTimeouts(),r=i?a.appear:a.enter;if(!t&&!s||c)this.safeSetState({status:h},(function(){n.props.onEntered(e)}));else{this.props.onEnter(e,i);this.safeSetState({status:f},(function(){n.props.onEntering(e,i);n.onTransitionEnd(e,r,(function(){n.safeSetState({status:h},(function(){n.props.onEntered(e,i)}))}))}))}}
;n.performExit=function(e){var t=this,n=this.props.exit,s=this.getTimeouts();if(n&&!c){this.props.onExit(e);this.safeSetState({status:E},(function(){t.props.onExiting(e);t.onTransitionEnd(e,s.exit,(function(){t.safeSetState({status:d},(function(){t.props.onExited(e)}))}))}))}else this.safeSetState({status:d},(function(){t.props.onExited(e)}))};n.cancelNextCallback=function(){if(null!==this.nextCallback){this.nextCallback.cancel();this.nextCallback=null}};n.safeSetState=function(e,t){t=this.setNextCallback(t);this.setState(e,t)};n.setNextCallback=function(e){var t=this,n=!0;this.nextCallback=function(s){if(n){n=!1;t.nextCallback=null;e(s)}};this.nextCallback.cancel=function(){n=!1};return this.nextCallback};n.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var s=null==t&&!this.props.addEndListener;if(e&&!s){this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback);null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)};n.render=function(){
var e=this.state.status;if(e===p)return null;var t=this.props,n=t.children,s=(0,i.Z)(t,["children"]);delete s.in;delete s.mountOnEnter;delete s.unmountOnExit;delete s.appear;delete s.enter;delete s.exit;delete s.timeout;delete s.addEndListener;delete s.onEnter;delete s.onEntering;delete s.onEntered;delete s.onExit;delete s.onExiting;delete s.onExited;if("function"==typeof n)return o.createElement(u.Z.Provider,{value:null},n(e,s));var a=o.Children.only(n);return o.createElement(u.Z.Provider,{value:null},o.cloneElement(a,s))};return t}(o.Component);m.contextType=u.Z;m.propTypes={};function x(){}m.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:x,onEntering:x,onEntered:x,onExit:x,onExiting:x,onExited:x};m.UNMOUNTED=0;m.EXITED=1;m.ENTERING=2;m.ENTERED=3;m.EXITING=4;const v=m;var C=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return s=t,
void((n=e).classList?n.classList.remove(s):"string"==typeof n.className?n.className=r(n.className,s):n.setAttribute("class",r(n.className&&n.className.baseVal||"",s)));var n,s}))},g=function(e){(0,a.Z)(t,e);function t(){for(var t,n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];(t=e.call.apply(e,[this].concat(s))||this).appliedClasses={appear:{},enter:{},exit:{}};t.onEnter=function(e,n){t.removeClasses(e,"exit");t.addClass(e,n?"appear":"enter","base");t.props.onEnter&&t.props.onEnter(e,n)};t.onEntering=function(e,n){var s=n?"appear":"enter";t.addClass(e,s,"active");t.props.onEntering&&t.props.onEntering(e,n)};t.onEntered=function(e,n){var s=n?"appear":"enter";t.removeClasses(e,s);t.addClass(e,s,"done");t.props.onEntered&&t.props.onEntered(e,n)};t.onExit=function(e){t.removeClasses(e,"appear");t.removeClasses(e,"enter");t.addClass(e,"exit","base");t.props.onExit&&t.props.onExit(e)};t.onExiting=function(e){t.addClass(e,"exit","active")
;t.props.onExiting&&t.props.onExiting(e)};t.onExited=function(e){t.removeClasses(e,"exit");t.addClass(e,"exit","done");t.props.onExited&&t.props.onExited(e)};t.getClassNames=function(e){var n=t.props.classNames,s="string"==typeof n,i=s?""+(s&&n?n+"-":"")+e:n[e];return{baseClassName:i,activeClassName:s?i+"-active":n[e+"Active"],doneClassName:s?i+"-done":n[e+"Done"]}};return t}var n=t.prototype;n.addClass=function(e,t,n){var s=this.getClassNames(t)[n+"ClassName"];"appear"===t&&"done"===n&&(s+=" "+this.getClassNames("enter").doneClassName);"active"===n&&e&&e.scrollTop;this.appliedClasses[t][n]=s;!function(e,t){e&&t&&t.split(" ").forEach((function(t){return s=t,void((n=e).classList?n.classList.add(s):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,s)||("string"==typeof n.className?n.className=n.className+" "+s:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+s)));var n,s}))}(e,s)}
;n.removeClasses=function(e,t){var n=this.appliedClasses[t],s=n.base,i=n.active,a=n.done;this.appliedClasses[t]={};s&&C(e,s);i&&C(e,i);a&&C(e,a)};n.render=function(){var e=this.props,t=(e.classNames,(0,i.Z)(e,["classNames"]));return o.createElement(v,(0,s.Z)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))};return t}(o.Component);g.defaultProps={classNames:""};g.propTypes={};const b=g},494537:(e,t,n)=>{n.d(t,{Z:()=>h});var s=n(263366),i=n(487462),a=n(894578),r=n(497326),o=(n(45697),n(667294)),l=n(500220);function c(e,t){var n=Object.create(null);e&&o.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,o.isValidElement)(e)?t(e):e}(e)}));return n}function u(e,t,n){return null!=n[t]?n[t]:e.props[t]}function p(e,t,n){var s=c(e.children),i=function(e,t){e=e||{};t=t||{};function n(n){return n in t?t[n]:e[n]}var s,i=Object.create(null),a=[]
;for(var r in e)if(r in t){if(a.length){i[r]=a;a=[]}}else a.push(r);var o={};for(var l in t){if(i[l])for(s=0;s<i[l].length;s++){var c=i[l][s];o[i[l][s]]=n(c)}o[l]=n(l)}for(s=0;s<a.length;s++)o[a[s]]=n(a[s]);return o}(t,s);Object.keys(i).forEach((function(a){var r=i[a];if((0,o.isValidElement)(r)){var l=a in t,c=a in s,p=t[a],d=(0,o.isValidElement)(p)&&!p.props.in;!c||l&&!d?c||!l||d?c&&l&&(0,o.isValidElement)(p)&&(i[a]=(0,o.cloneElement)(r,{onExited:n.bind(null,r),in:p.props.in,exit:u(r,"exit",e),enter:u(r,"enter",e)})):i[a]=(0,o.cloneElement)(r,{in:!1}):i[a]=(0,o.cloneElement)(r,{onExited:n.bind(null,r),in:!0,exit:u(r,"exit",e),enter:u(r,"enter",e)})}}));return i}var d=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},f=function(e){(0,a.Z)(t,e);function t(t,n){var s,i=(s=e.call(this,t,n)||this).handleExited.bind((0,r.Z)((0,r.Z)(s)));s.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0};return s}var n=t.prototype
;n.componentDidMount=function(){this.mounted=!0;this.setState({contextValue:{isMounting:!1}})};n.componentWillUnmount=function(){this.mounted=!1};t.getDerivedStateFromProps=function(e,t){var n,s,i=t.children,a=t.handleExited;return{children:t.firstRender?(n=e,s=a,c(n.children,(function(e){return(0,o.cloneElement)(e,{onExited:s.bind(null,e),in:!0,appear:u(e,"appear",n),enter:u(e,"enter",n),exit:u(e,"exit",n)})}))):p(e,i,a),firstRender:!1}};n.handleExited=function(e,t){var n=c(this.props.children);if(!(e.key in n)){e.props.onExited&&e.props.onExited(t);this.mounted&&this.setState((function(t){var n=(0,i.Z)({},t.children);delete n[e.key];return{children:n}}))}};n.render=function(){var e=this.props,t=e.component,n=e.childFactory,i=(0,s.Z)(e,["component","childFactory"]),a=this.state.contextValue,r=d(this.state.children).map(n);delete i.appear;delete i.enter;delete i.exit;return null===t?o.createElement(l.Z.Provider,{value:a},r):o.createElement(l.Z.Provider,{value:a},o.createElement(t,i,r))
};return t}(o.Component);f.propTypes={};f.defaultProps={component:"div",childFactory:function(e){return e}};const h=f},500220:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n(667294).createContext(null)},497326:(e,t,n)=>{n.d(t,{Z:()=>s});function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}}}]);
//# sourceMappingURL=d3e4fc9c21eceb1b3388.js.map