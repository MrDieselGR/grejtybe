"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[55615],{755615:(e,t,n)=>{n.r(t);n.d(t,{default:()=>L});var r=n(785893),o=n(667294),s=n(791462),c=n(489992),i=n(160156),l=n(549425),u=n(7046),a=n(577088),f=n(356004),p=n(191940),d=n(82961),b=n(30741),y=n(461061),h=n(959797),O=n(878101),g=n.n(O);function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function w(e){w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return w(e)}function v(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))
;n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++){n=s[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++){n=s[r];t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}}return o}function E(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e,t){j=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return j(e,t)}var P=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return E(this,n)}}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&j(e,t)}(n,e);var t=C(n);function n(){_(this,n);var e;(e=t.apply(this,arguments)).openSettings=function(){var t=e.props,n=t.guildId,r=t.onClose;if(null!=n&&null!=r){r();u.Z.open(n,y.pNK.ANALYTICS)}};return e}var o=n.prototype;o.componentDidMount=function(){var e=this.props.channelId;this.needsReload()&&i.Z.fetchChannelFollowerStats(e)};o.needsReload=function(){var e=this.props.followerStats
;return null==e||Date.now()-e.lastFetched>36e5};o.render=function(){var e=this.props,t=e.channelId,n=e.messageId,o=e.followerStats,s=m(e,["channelId","messageId","followerStats"]),i=null!=o&&null!=o.guildsFollowing&&o.guildsFollowing>0?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.xv,{className:g().spacing,variant:"text-sm/normal",children:h.Z.Messages.PUBLISH_FOLLOWED_NEWS_BODY_REACH.format({numGuildsFollowing:o.guildsFollowing})}),(0,r.jsx)(c.xv,{variant:"text-sm/normal",children:h.Z.Messages.PUBLISH_FOLLOWED_NEWS_BODY_SETTINGS_INSIGHTS.format({onClick:this.openSettings})})]}):h.Z.Messages.PUBLISH_FOLLOWED_NEWS_BODY;return(0,r.jsx)(b.default,v(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){S(e,t,n[t])}))}return e}({
header:h.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER,confirmText:h.Z.Messages.CONFIRM,cancelText:h.Z.Messages.CANCEL,confirmButtonColor:p.Co.Colors.BRAND,onConfirm:function(){return l.Z.crosspostMessage(t,n)}},s),{children:(0,r.jsx)(c.xv,{variant:"text-md/normal",className:g().spacing,children:this.needsReload()?(0,r.jsx)(d.Z,{}):i})}))};return n}(o.PureComponent);const L=s.ZP.connectStores([f.Z,a.Z],(function(e){var t=e.channelId,n=f.Z.getChannel(t);return{followerStats:a.Z.getFollowerStatsForChannel(t),guildId:null!=n?n.guild_id:null}}))(F)},577088:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(791462),o=n(173436);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e){c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return c(e)}function i(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){
if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e,t){l=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return l(e,t)}var u,a=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}!function(e){e.FAILED="failed";e.SUCCEEDED="succeeded"}(u||(u={}));var p={};var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{
constructor:{value:e,writable:!0,configurable:!0}});t&&l(e,t)}(n,e);var t=f(n);function n(){s(this,n);return t.apply(this,arguments)}var r=n.prototype;r.getFollowerStatsForChannel=function(e){return p[e]};r.__getLocalVars=function(){return{ChannelFollowerStatsFetchStates:u,channelIdToFollowerStats:p}};return n}(r.ZP.Store);d.displayName="ChannelFollowerStatsStore";const b=new d(o.Z,{CONNECTION_OPEN:function(){p={}},CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS:function(e){var t=e.channelId,n=e.stats;n=null!=n?n:{};p[t]={loadingStatus:u.SUCCEEDED,lastFetched:Date.now(),channelsFollowing:n.channels_following,guildMembers:n.guild_members,guildsFollowing:n.guilds_following,usersSeenEver:n.users_seen_ever,subscribersGainedSinceLastPost:n.subscribers_gained_since_last_post,subscribersLostSinceLastPost:n.subscribers_lost_since_last_post}},CHANNEL_FOLLOWER_STATS_FETCH_FAILURE:function(e){var t=e.channelId;p[t]={loadingStatus:u.FAILED,lastFetched:Date.now(),channelsFollowing:0,guildMembers:0,
guildsFollowing:0,usersSeenEver:0,subscribersGainedSinceLastPost:0,subscribersLostSinceLastPost:0}}})}}]);
//# sourceMappingURL=8c2d0040ec04f4de3e0e.js.map