"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[37959],{877414:(t,e,r)=>{r.d(e,{Z:()=>n});const n=(0,r(553494).B)({kind:"user",id:"2022-09_sticker_upload_resize",label:"Sticker Upload Resize",defaultConfig:{enabled:!1},treatments:[{id:1,label:"Automatic resize PNG on sticker upload flow",config:{enabled:!0}}]})},204660:(t,e,r)=>{r.d(e,{$p:()=>s,PT:()=>d,U$:()=>p,Es:()=>g,kH:()=>v,AK:()=>w,Ae:()=>C});var n=r(496486),i=r(476154);function a(t,e,r,n,i,a,h){try{var o=t[a](h),u=o.value}catch(t){r(t);return}o.done?e(u):Promise.resolve(u).then(n,i)}function h(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var h=t.apply(e,r);function o(t){a(h,n,i,o,u,"next",t)}function u(t){a(h,n,i,o,u,"throw",t)}o(void 0)}))}}var o=function(t,e){var r,n,i,a,h={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this
}),a;function o(a){return function(o){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;h;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;(n=0,i)&&(a=[2&a[0],i.value]);switch(a[0]){case 0:case 1:i=a;break;case 4:h.label++;return{value:a[1],done:!1};case 5:h.label++;n=a[1];a=[0];continue;case 7:a=h.ops.pop();h.trys.pop();continue;default:if(!(i=h.trys,i=i.length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){h=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){h.label=a[1];break}if(6===a[0]&&h.label<i[1]){h.label=i[1];i=a;break}if(i&&h.label<i[2]){h.label=i[2];h.ops.push(a);break}i[2]&&h.ops.pop();h.trys.pop();continue}a=e.call(t,h)}catch(t){a=[6,t];n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}};function u(t){return new Promise((function(e){var r=new FileReader;r.onload=function(t){var r,n=null===(r=t.target)||void 0===r?void 0:r.result
;e("string"==typeof n?n:"")};r.readAsDataURL(t)}))}function c(t,e,r,n){var i=t.naturalWidth/t.width,a=e.width/2,h=e.height/2,o=(t.width/2-a-r.x)*i,u=(t.height/2-h-r.y)*i,c=e.width*i,s=e.height*i;return{x:o,y:u,scaledCropWidth:c,scaledCropHeight:s,canvasWidth:Math.min(c,n.width),canvasHeight:Math.min(s,n.height)}}function s(t,e,r,n,i){return l.apply(this,arguments)}function l(){return(l=h((function(t,e,n,a,h){var s,l,d,p,f,g,v,w;return o(this,(function(o){switch(o.label){case 0:s=c(e,n,a,h),l=s.x,d=s.y,p=s.scaledCropWidth,f=s.scaledCropHeight;return[4,t.arrayBuffer()];case 1:g=o.sent();v=new Worker(new URL(r.p+r.u(44499),r.b));w=new Promise((function(t,e){v.onmessage=function(r){var n=r.data;if(n.type===i.u.CROP_GIF_COMPLETE){t(u(new Blob([n.result])));v.terminate()}else if(n.type===i.u.CROP_GIF_ERROR){e(new Error("Error cropping GIF"));v.terminate()}}}));v.postMessage({type:i.u.CROP_GIF_START,gif:new Uint8Array(g),x:0|l,y:0|d,width:0|p,height:0|f});return[2,{result:w,
cancelFn:function(){return v.terminate()}}]}}))}))).apply(this,arguments)}function d(t,e,r,n){var i=c(t,e,r,n),a=i.x,h=i.y,o=i.scaledCropWidth,u=i.scaledCropHeight,s=i.canvasWidth,l=i.canvasHeight,d=document.createElement("canvas");d.width=s;d.height=l;var p=d.getContext("2d");null!=p&&p.drawImage(t,a,h,o,u,0,0,d.width,d.height);return d.toDataURL("image/png")}function p(t,e,r){return{x:(0,n.clamp)(t,r.left,r.right),y:(0,n.clamp)(e,r.bottom,r.top)}}function f(t,e,r,n){var a=r,h=n;if(r>i.vJ){a=i.vJ;h=n*(i.vJ/r)}return r/n<t?{width:a,height:h}:{width:a*(e/h),height:e}}function g(t,e,r){switch(t){case i.pC.AVATAR:return{width:e,height:r};case i.pC.BANNER:return f(i.MY,i.qj,e,r);case i.pC.BANNER_V2:return f(i.U9,i.qj,e,r);case i.pC.GUILD_BANNER:return f(i.Ij,i.C5,e,r);case i.pC.VIDEO_BACKGROUND:return f(i.Ff,i.PB,e,r);case i.pC.SCHEDULED_EVENT_IMAGE:return f(i.ut,i.WV,e,r);case i.pC.HOME_HEADER:return f(i.sX,i.SW,e,r)}}function v(t,e,r){var n={top:0,bottom:0,left:0,right:0
},i=t-r.width,a=e-r.height;if(0!==i){n.left=-Math.abs(i/2);n.right=i/2}if(0!==a){n.bottom=-Math.abs(a/2);n.top=a/2}return n}function w(t,e,r,n){switch(t){case i.pC.AVATAR:var a=Math.min(e,r);return{width:a,height:a};case i.pC.BANNER:var h=Math.min(e,i.vJ);return{width:h,height:h*(1/i.MY)};case i.pC.BANNER_V2:var o=Math.min(e,i.vJ);return{width:o,height:o*(1/i.U9)};case i.pC.GUILD_BANNER:var u=Math.min(e,i.vJ);return{width:u,height:Math.min(u*(9/16),n)};case i.pC.VIDEO_BACKGROUND:var c=Math.min(e,i.vJ);return{width:c,height:c*(9/16)};case i.pC.SCHEDULED_EVENT_IMAGE:var s=Math.min(e,i.vJ);return{width:s,height:.4*s};case i.pC.HOME_HEADER:var l=Math.min(e,i.vJ);return{width:l,height:l*(1/i.sX)}}}function C(t,e,r){var n=t.naturalWidth/t.naturalHeight,i=e,a=r;t.naturalWidth>t.naturalHeight?i/=n:a*=n;var h={height:i,width:a};return d(t,{width:t.width,height:t.height},{x:0,y:0},h)}},70804:(t,e,r)=>{r.d(e,{h:()=>n});var n=(0,r(553494).B)({kind:"guild",id:"2021-07_stickers_lottie_upload",
label:"Lottie Sticker Uploads",defaultConfig:{enabled:!1},treatments:[{id:1,label:"Allow Lottie sticker uploads",config:{enabled:!0}}]})}}]);
//# sourceMappingURL=91edf8cf7ad90d166d5e.js.map