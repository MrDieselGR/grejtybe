"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[84976],{662322:(e,r,t)=>{t.d(r,{W:()=>I});var i=t(675860),s=t(173436),n=t(630206),p=t(461061);function I(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(n.Z.needsRefresh()){s.Z.dispatch({type:"LOAD_USER_AFFINITIES"});return i.Z.get({url:p.ANM.USER_AFFINITIES,retries:e?3:0,oldFormErrors:!0}).then((function(e){var r=e.body;s.Z.dispatch({type:"LOAD_USER_AFFINITIES_SUCCESS",affinities:r})}),(function(){s.Z.dispatch({type:"LOAD_USER_AFFINITIES_FAILURE"})}))}return Promise.resolve()}}}]);
//# sourceMappingURL=d1b6c73bed0dd6756b63.js.map