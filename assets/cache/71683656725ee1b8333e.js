"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[20914],{506907:t=>{t.exports=function(t){t=String(t||"");if(i.test(t))return"rtl";if(r.test(t))return"ltr";return"neutral"};var e="֑-߿יִ-﷽ﹰ-ﻼ",a="A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",i=new RegExp("^[^"+a+"]*["+e+"]"),r=new RegExp("^[^"+e+"]*["+a+"]")},379117:(t,e,a)=>{Object.defineProperty(e,"__esModule",{value:!0});e.ICalAlarmType=void 0;const i=a(816963);var r;!function(t){t.display="display";t.audio="audio"}(r=e.ICalAlarmType||(e.ICalAlarmType={}));e.default=class{constructor(t,e){this.data={type:null,trigger:null,repeat:null,interval:null,attach:null,description:null,x:[]};this.event=e;if(!e)throw new Error("`event` option required!");void 0!==t.type&&this.type(t.type);void 0!==t.trigger&&this.trigger(t.trigger);void 0!==t.triggerBefore&&this.triggerBefore(t.triggerBefore);void 0!==t.triggerAfter&&this.triggerAfter(t.triggerAfter);void 0!==t.repeat&&this.repeat(t.repeat)
;void 0!==t.interval&&this.interval(t.interval);void 0!==t.attach&&this.attach(t.attach);void 0!==t.description&&this.description(t.description);void 0!==t.x&&this.x(t.x)}type(t){if(void 0===t)return this.data.type;if(!t){this.data.type=null;return this}if(!Object.keys(r).includes(t))throw new Error("`type` is not correct, must be either `display` or `audio`!");this.data.type=t;return this}trigger(t){if(void 0===t&&"number"==typeof this.data.trigger)return-1*this.data.trigger;if(void 0===t&&this.data.trigger)return this.data.trigger;if(void 0===t)return null;if(t)if("number"==typeof t&&isFinite(t))this.data.trigger=-1*t;else{if("number"==typeof t)throw new Error("`trigger` is not correct, must be a finite number or a supported date!");this.data.trigger=(0,i.checkDate)(t,"trigger")}else this.data.trigger=null;return this}triggerAfter(t){return void 0===t?this.data.trigger:this.trigger("number"==typeof t?-1*t:t)}triggerBefore(t){return void 0===t?this.trigger():this.trigger(t)}repeat(t){
if(void 0===t)return this.data.repeat;if(!t){this.data.repeat=null;return this}if("number"!=typeof t||!isFinite(t))throw new Error("`repeat` is not correct, must be numeric!");this.data.repeat=t;return this}interval(t){if(void 0===t)return this.data.interval||null;if(!t){this.data.interval=null;return this}if("number"!=typeof t||!isFinite(t))throw new Error("`interval` is not correct, must be numeric!");this.data.interval=t;return this}attach(t){if(void 0===t)return this.data.attach;if(!t){this.data.attach=null;return this}let e=null;if("string"==typeof t)e={uri:t,mime:null};else{if("object"!=typeof t)throw new Error("`attachment` needs to be a valid formed string or an object. See https://sebbo2002.github.io/ical-generator/develop/reference/classes/icalalarm.html#attach");e={uri:t.uri,mime:t.mime||null}}if(!e.uri)throw new Error("`attach.uri` is empty!");this.data.attach={uri:e.uri,mime:e.mime};return this}description(t){if(void 0===t)return this.data.description;if(!t){
this.data.description=null;return this}this.data.description=t;return this}x(t,e){if(void 0===t)return(0,i.addOrGetCustomAttributes)(this.data);if("string"==typeof t&&"string"==typeof e)(0,i.addOrGetCustomAttributes)(this.data,t,e);else{if("object"!=typeof t)throw new Error("Either key or value is not a string!");(0,i.addOrGetCustomAttributes)(this.data,t)}return this}toJSON(){const t=this.trigger();return Object.assign({},this.data,{trigger:"number"==typeof t?t:(0,i.toJSON)(t),x:this.x()})}toString(){let t="BEGIN:VALARM\r\n";if(!this.data.type)throw new Error("No value for `type` in ICalAlarm given!");if(!this.data.trigger)throw new Error("No value for `trigger` in ICalAlarm given!");t+="ACTION:"+this.data.type.toUpperCase()+"\r\n";"number"==typeof this.data.trigger&&this.data.trigger>0?t+="TRIGGER;RELATED=END:"+(0,i.toDurationString)(this.data.trigger)+"\r\n":"number"==typeof this.data.trigger?t+="TRIGGER:"+(0,
i.toDurationString)(this.data.trigger)+"\r\n":t+="TRIGGER;VALUE=DATE-TIME:"+(0,i.formatDate)(this.event.timezone(),this.data.trigger)+"\r\n";if(this.data.repeat&&!this.data.interval)throw new Error("No value for `interval` in ICalAlarm given, but required for `repeat`!");this.data.repeat&&(t+="REPEAT:"+this.data.repeat+"\r\n");if(this.data.interval&&!this.data.repeat)throw new Error("No value for `repeat` in ICalAlarm given, but required for `interval`!");this.data.interval&&(t+="DURATION:"+(0,i.toDurationString)(this.data.interval)+"\r\n");"audio"===this.data.type&&this.data.attach&&this.data.attach.mime?t+="ATTACH;FMTTYPE="+this.data.attach.mime+":"+this.data.attach.uri+"\r\n":"audio"===this.data.type&&this.data.attach?t+="ATTACH;VALUE=URI:"+this.data.attach.uri+"\r\n":"audio"===this.data.type&&(t+="ATTACH;VALUE=URI:Basso\r\n");"display"===this.data.type&&this.data.description?t+="DESCRIPTION:"+(0,
i.escape)(this.data.description)+"\r\n":"display"===this.data.type&&(t+="DESCRIPTION:"+(0,i.escape)(this.event.summary())+"\r\n");t+=(0,i.generateCustomAttributes)(this.data);t+="END:VALARM\r\n";return t}}},34699:(t,e,a)=>{Object.defineProperty(e,"__esModule",{value:!0});e.ICalAttendeeType=e.ICalAttendeeStatus=e.ICalAttendeeRole=void 0;const i=a(816963);var r,n,s;!function(t){t.CHAIR="CHAIR";t.REQ="REQ-PARTICIPANT";t.OPT="OPT-PARTICIPANT";t.NON="NON-PARTICIPANT"}(r=e.ICalAttendeeRole||(e.ICalAttendeeRole={}));!function(t){t.ACCEPTED="ACCEPTED";t.TENTATIVE="TENTATIVE";t.DECLINED="DECLINED";t.DELEGATED="DELEGATED";t.NEEDSACTION="NEEDS-ACTION"}(n=e.ICalAttendeeStatus||(e.ICalAttendeeStatus={}));!function(t){t.INDIVIDUAL="INDIVIDUAL";t.GROUP="GROUP";t.RESOURCE="RESOURCE";t.ROOM="ROOM";t.UNKNOWN="UNKNOWN"}(s=e.ICalAttendeeType||(e.ICalAttendeeType={}));class o{constructor(t,e){this.data={name:null,email:null,mailto:null,status:null,role:r.REQ,rsvp:null,type:null,delegatedTo:null,
delegatedFrom:null,x:[]};this.event=e;if(!this.event)throw new Error("`event` option required!");void 0!==t.name&&this.name(t.name);void 0!==t.email&&this.email(t.email);void 0!==t.mailto&&this.mailto(t.mailto);void 0!==t.status&&this.status(t.status);void 0!==t.role&&this.role(t.role);void 0!==t.rsvp&&this.rsvp(t.rsvp);void 0!==t.type&&this.type(t.type);void 0!==t.delegatedTo&&this.delegatedTo(t.delegatedTo);void 0!==t.delegatedFrom&&this.delegatedFrom(t.delegatedFrom);t.delegatesTo&&this.delegatesTo(t.delegatesTo);t.delegatesFrom&&this.delegatesFrom(t.delegatesFrom);void 0!==t.x&&this.x(t.x)}name(t){if(void 0===t)return this.data.name;this.data.name=t||null;return this}email(t){if(!t)return this.data.email;this.data.email=t;return this}mailto(t){if(void 0===t)return this.data.mailto;this.data.mailto=t||null;return this}role(t){if(void 0===t)return this.data.role;this.data.role=(0,i.checkEnum)(r,t);return this}rsvp(t){if(void 0===t)return this.data.rsvp;if(null===t){
this.data.rsvp=null;return this}this.data.rsvp=Boolean(t);return this}status(t){if(void 0===t)return this.data.status;if(!t){this.data.status=null;return this}this.data.status=(0,i.checkEnum)(n,t);return this}type(t){if(void 0===t)return this.data.type;if(!t){this.data.type=null;return this}this.data.type=(0,i.checkEnum)(s,t);return this}delegatedTo(t){if(void 0===t)return this.data.delegatedTo;if(!t){this.data.delegatedTo=null;this.data.status===n.DELEGATED&&(this.data.status=null);return this}this.data.delegatedTo="string"==typeof t?new o((0,i.checkNameAndMail)("delegatedTo",t),this.event):t instanceof o?t:new o(t,this.event);this.data.status=n.DELEGATED;return this}delegatedFrom(t){if(void 0===t)return this.data.delegatedFrom;this.data.delegatedFrom=t?"string"==typeof t?new o((0,i.checkNameAndMail)("delegatedFrom",t),this.event):t instanceof o?t:new o(t,this.event):null;return this}delegatesTo(t){const e=t instanceof o?t:this.event.createAttendee(t);this.delegatedTo(e)
;e.delegatedFrom(this);return e}delegatesFrom(t){const e=t instanceof o?t:this.event.createAttendee(t);this.delegatedFrom(e);e.delegatedTo(this);return e}x(t,e){if(void 0===t)return(0,i.addOrGetCustomAttributes)(this.data);if("string"==typeof t&&"string"==typeof e)(0,i.addOrGetCustomAttributes)(this.data,t,e);else{if("object"!=typeof t)throw new Error("Either key or value is not a string!");(0,i.addOrGetCustomAttributes)(this.data,t)}return this}toJSON(){var t,e;return Object.assign({},this.data,{delegatedTo:(null===(t=this.data.delegatedTo)||void 0===t?void 0:t.email())||null,delegatedFrom:(null===(e=this.data.delegatedFrom)||void 0===e?void 0:e.email())||null,x:this.x()})}toString(){let t="ATTENDEE";if(!this.data.email)throw new Error("No value for `email` in ICalAttendee given!");t+=";ROLE="+this.data.role;this.data.type&&(t+=";CUTYPE="+this.data.type);this.data.status&&(t+=";PARTSTAT="+this.data.status);this.data.rsvp&&(t+=";RSVP="+this.data.rsvp.toString().toUpperCase())
;this.data.delegatedTo&&(t+=';DELEGATED-TO="'+this.data.delegatedTo.email()+'"');this.data.delegatedFrom&&(t+=';DELEGATED-FROM="'+this.data.delegatedFrom.email()+'"');this.data.name&&(t+=';CN="'+(0,i.escape)(this.data.name)+'"');this.data.email&&this.data.mailto&&(t+=";EMAIL="+(0,i.escape)(this.data.email));this.data.x.length&&(t+=";"+this.data.x.map((([t,e])=>t.toUpperCase()+"="+(0,i.escape)(e))).join(";"));t+=":MAILTO:"+(0,i.escape)(this.data.mailto||this.data.email)+"\r\n";return t}}e.default=o},235837:function(t,e,a){var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});e.ICalCalendarMethod=void 0;const r=a(816963),n=i(a(755910)),s=a(441246),o=a(441246);var d;!function(t){t.PUBLISH="PUBLISH";t.REQUEST="REQUEST";t.REPLY="REPLY";t.ADD="ADD";t.CANCEL="CANCEL";t.REFRESH="REFRESH";t.COUNTER="COUNTER";t.DECLINECOUNTER="DECLINECOUNTER"}(d=e.ICalCalendarMethod||(e.ICalCalendarMethod={}));e.default=class{
constructor(t={}){this.data={prodId:"//sebbo.net//ical-generator//EN",method:null,name:null,description:null,timezone:null,source:null,url:null,scale:null,ttl:null,events:[],x:[]};void 0!==t.prodId&&this.prodId(t.prodId);void 0!==t.method&&this.method(t.method);void 0!==t.name&&this.name(t.name);void 0!==t.description&&this.description(t.description);void 0!==t.timezone&&this.timezone(t.timezone);void 0!==t.source&&this.source(t.source);void 0!==t.url&&this.url(t.url);void 0!==t.scale&&this.scale(t.scale);void 0!==t.ttl&&this.ttl(t.ttl);void 0!==t.events&&this.events(t.events);void 0!==t.x&&this.x(t.x)}prodId(t){if(!t)return this.data.prodId;if("string"==typeof t&&/^\/\/(.+)\/\/(.+)\/\/([A-Z]{1,4})$/.test(t)){this.data.prodId=t;return this}if("string"==typeof t)throw new Error("`prodId` isn't formated correctly. See https://sebbo2002.github.io/ical-generator/develop/reference/classes/icalcalendar.html#prodid")
;if("object"!=typeof t)throw new Error("`prodid` needs to be a valid formed string or an object!");if(!t.company)throw new Error("`prodid.company` is a mandatory item!");if(!t.product)throw new Error("`prodid.product` is a mandatory item!");const e=(t.language||"EN").toUpperCase();this.data.prodId="//"+t.company+"//"+t.product+"//"+e;return this}method(t){if(void 0===t)return this.data.method;if(!t){this.data.method=null;return this}this.data.method=(0,r.checkEnum)(d,t);return this}name(t){if(void 0===t)return this.data.name;this.data.name=t?String(t):null;return this}description(t){if(void 0===t)return this.data.description;this.data.description=t?String(t):null;return this}timezone(t){var e;if(void 0===t)return(null===(e=this.data.timezone)||void 0===e?void 0:e.name)||null;this.data.timezone="string"==typeof t?{name:t}:null===t?null:t;return this}source(t){if(void 0===t)return this.data.source;this.data.source=t||null;return this}url(t){if(void 0===t)return this.data.url
;this.data.url=t||null;return this}scale(t){if(void 0===t)return this.data.scale;this.data.scale=null===t?null:t.toUpperCase();return this}ttl(t){if(void 0===t)return this.data.ttl;(0,r.isMomentDuration)(t)?this.data.ttl=t.asSeconds():this.data.ttl=t&&t>0?t:null;return this}createEvent(t){const e=t instanceof n.default?t:new n.default(t,this);this.data.events.push(e);return e}events(t){if(!t)return this.data.events;t.forEach((t=>this.createEvent(t)));return this}clear(){this.data.events=[];return this}save(t,e){if(e){(0,s.writeFile)(t,this.toString(),e);return this}return o.promises.writeFile(t,this.toString())}saveSync(t){(0,s.writeFileSync)(t,this.toString());return this}serve(t,e="calendar.ics"){t.writeHead(200,{"Content-Type":"text/calendar; charset=utf-8","Content-Disposition":`attachment; filename="${e}"`});t.end(this.toString());return this}toBlob(){return new Blob([this.toString()],{type:"text/calendar"})}toURL(){return URL.createObjectURL(this.toBlob())}x(t,e){
if(void 0===t)return(0,r.addOrGetCustomAttributes)(this.data);if("string"==typeof t&&"string"==typeof e)(0,r.addOrGetCustomAttributes)(this.data,t,e);else{if("object"!=typeof t)throw new Error("Either key or value is not a string!");(0,r.addOrGetCustomAttributes)(this.data,t)}return this}toJSON(){return Object.assign({},this.data,{timezone:this.timezone(),events:this.data.events.map((t=>t.toJSON())),x:this.x()})}length(){return this.data.events.length}toString(){var t,e;let a="";a="BEGIN:VCALENDAR\r\nVERSION:2.0\r\n";a+="PRODID:-"+this.data.prodId+"\r\n";this.data.url&&(a+="URL:"+this.data.url+"\r\n");this.data.source&&(a+="SOURCE;VALUE=URI:"+this.data.source+"\r\n");this.data.scale&&(a+="CALSCALE:"+this.data.scale+"\r\n");this.data.method&&(a+="METHOD:"+this.data.method+"\r\n");if(this.data.name){a+="NAME:"+this.data.name+"\r\n";a+="X-WR-CALNAME:"+this.data.name+"\r\n"}this.data.description&&(a+="X-WR-CALDESC:"+this.data.description+"\r\n")
;if(null===(t=this.data.timezone)||void 0===t?void 0:t.generator){[...new Set([this.timezone(),...this.data.events.map((t=>t.timezone()))])].filter((t=>null!==t&&!t.startsWith("/"))).forEach((t=>{var e;if(!(null===(e=this.data.timezone)||void 0===e?void 0:e.generator))return;const i=this.data.timezone.generator(t);i&&(a+=i.replace(/\r\n/g,"\n").replace(/\n/g,"\r\n").trim()+"\r\n")}))}if(null===(e=this.data.timezone)||void 0===e?void 0:e.name){a+="TIMEZONE-ID:"+this.data.timezone.name+"\r\n";a+="X-WR-TIMEZONE:"+this.data.timezone.name+"\r\n"}if(this.data.ttl){a+="REFRESH-INTERVAL;VALUE=DURATION:"+(0,r.toDurationString)(this.data.ttl)+"\r\n";a+="X-PUBLISHED-TTL:"+(0,r.toDurationString)(this.data.ttl)+"\r\n"}this.data.events.forEach((t=>a+=t.toString()));a+=(0,r.generateCustomAttributes)(this.data);a+="END:VCALENDAR";return(0,r.foldLines)(a)}}},639529:(t,e,a)=>{Object.defineProperty(e,"__esModule",{value:!0});const i=a(816963);e.default=class{constructor(t){this.data={name:null}
;void 0!==t.name&&this.name(t.name)}name(t){if(void 0===t)return this.data.name;this.data.name=t||null;return this}toJSON(){return Object.assign({},this.data)}toString(){if(!this.data.name)throw new Error("No value for `name` in ICalCategory given!");return(0,i.escape)(this.data.name)}}},755910:function(t,e,a){var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});e.ICalEventTransparency=e.ICalEventBusyStatus=e.ICalEventStatus=void 0;const r=i(a(362043)),n=a(816963),s=i(a(34699)),o=i(a(379117)),d=i(a(639529)),l=a(73281);var u,h,c;!function(t){t.CONFIRMED="CONFIRMED";t.TENTATIVE="TENTATIVE";t.CANCELLED="CANCELLED"}(u=e.ICalEventStatus||(e.ICalEventStatus={}));!function(t){t.FREE="FREE";t.TENTATIVE="TENTATIVE";t.BUSY="BUSY";t.OOF="OOF"}(h=e.ICalEventBusyStatus||(e.ICalEventBusyStatus={}));!function(t){t.TRANSPARENT="TRANSPARENT";t.OPAQUE="OPAQUE"}(c=e.ICalEventTransparency||(e.ICalEventTransparency={}))
;e.default=class{constructor(t,e){this.data={id:(0,r.default)(),sequence:0,start:null,end:null,recurrenceId:null,timezone:null,stamp:new Date,allDay:!1,floating:!1,repeating:null,summary:"",location:null,description:null,organizer:null,attendees:[],alarms:[],categories:[],status:null,busystatus:null,priority:null,url:null,transparency:null,created:null,lastModified:null,x:[]};this.calendar=e;if(!e)throw new Error("`calendar` option required!");t.id&&this.id(t.id);void 0!==t.sequence&&this.sequence(t.sequence);t.start&&this.start(t.start);void 0!==t.end&&this.end(t.end);void 0!==t.recurrenceId&&this.recurrenceId(t.recurrenceId);void 0!==t.timezone&&this.timezone(t.timezone);void 0!==t.stamp&&this.stamp(t.stamp);void 0!==t.allDay&&this.allDay(t.allDay);void 0!==t.floating&&this.floating(t.floating);void 0!==t.repeating&&this.repeating(t.repeating);void 0!==t.summary&&this.summary(t.summary);void 0!==t.location&&this.location(t.location)
;void 0!==t.description&&this.description(t.description);void 0!==t.organizer&&this.organizer(t.organizer);void 0!==t.attendees&&this.attendees(t.attendees);void 0!==t.alarms&&this.alarms(t.alarms);void 0!==t.categories&&this.categories(t.categories);void 0!==t.status&&this.status(t.status);void 0!==t.busystatus&&this.busystatus(t.busystatus);void 0!==t.priority&&this.priority(t.priority);void 0!==t.url&&this.url(t.url);void 0!==t.transparency&&this.transparency(t.transparency);void 0!==t.created&&this.created(t.created);void 0!==t.lastModified&&this.lastModified(t.lastModified);void 0!==t.x&&this.x(t.x)}id(t){if(void 0===t)return this.data.id;this.data.id=String(t);return this}uid(t){return void 0===t?this.id():this.id(t)}sequence(t){if(void 0===t)return this.data.sequence;const e=parseInt(String(t),10);if(isNaN(e))throw new Error("`sequence` must be a number!");this.data.sequence=t;return this}start(t){if(void 0===t)return this.data.start;this.data.start=(0,n.checkDate)(t,"start")
;if(this.data.start&&this.data.end&&(0,n.toDate)(this.data.start).getTime()>(0,n.toDate)(this.data.end).getTime()){const t=this.data.start;this.data.start=this.data.end;this.data.end=t}return this}end(t){if(void 0===t)return this.data.end;if(null===t){this.data.end=null;return this}this.data.end=(0,n.checkDate)(t,"end");if(this.data.start&&this.data.end&&(0,n.toDate)(this.data.start).getTime()>(0,n.toDate)(this.data.end).getTime()){const t=this.data.start;this.data.start=this.data.end;this.data.end=t}return this}recurrenceId(t){if(void 0===t)return this.data.recurrenceId;if(null===t){this.data.recurrenceId=null;return this}this.data.recurrenceId=(0,n.checkDate)(t,"recurrenceId");return this}timezone(t){if(void 0===t&&null!==this.data.timezone)return this.data.timezone;if(void 0===t)return this.calendar.timezone();this.data.timezone=t?t.toString():null;this.data.timezone&&(this.data.floating=!1);return this}stamp(t){if(void 0===t)return this.data.stamp;this.data.stamp=(0,
n.checkDate)(t,"stamp");return this}timestamp(t){return void 0===t?this.stamp():this.stamp(t)}allDay(t){if(void 0===t)return this.data.allDay;this.data.allDay=Boolean(t);return this}floating(t){if(void 0===t)return this.data.floating;this.data.floating=Boolean(t);this.data.floating&&(this.data.timezone=null);return this}repeating(t){if(void 0===t)return this.data.repeating;if(!t){this.data.repeating=null;return this}if((0,n.isRRule)(t)||"string"==typeof t){this.data.repeating=t;return this}this.data.repeating={freq:(0,n.checkEnum)(l.ICalEventRepeatingFreq,t.freq)};if(t.count){if(!isFinite(t.count))throw new Error("`repeating.count` must be a finite number!");this.data.repeating.count=t.count}if(t.interval){if(!isFinite(t.interval))throw new Error("`repeating.interval` must be a finite number!");this.data.repeating.interval=t.interval}void 0!==t.until&&(this.data.repeating.until=(0,n.checkDate)(t.until,"repeating.until"));if(t.byDay){const e=Array.isArray(t.byDay)?t.byDay:[t.byDay]
;this.data.repeating.byDay=e.map((t=>(0,n.checkEnum)(l.ICalWeekday,t)))}if(t.byMonth){const e=Array.isArray(t.byMonth)?t.byMonth:[t.byMonth];this.data.repeating.byMonth=e.map((t=>{if("number"!=typeof t||t<1||t>12)throw new Error("`repeating.byMonth` contains invalid value `"+t+"`!");return t}))}if(t.byMonthDay){const e=Array.isArray(t.byMonthDay)?t.byMonthDay:[t.byMonthDay];this.data.repeating.byMonthDay=e.map((t=>{if("number"!=typeof t||t<1||t>31)throw new Error("`repeating.byMonthDay` contains invalid value `"+t+"`!");return t}))}if(t.bySetPos){if(!this.data.repeating.byDay)throw"`repeating.bySetPos` must be used along with `repeating.byDay`!";if("number"!=typeof t.bySetPos||t.bySetPos<-1||t.bySetPos>4)throw"`repeating.bySetPos` contains invalid value `"+t.bySetPos+"`!";this.data.repeating.byDay.splice(1);this.data.repeating.bySetPos=t.bySetPos}if(t.exclude){const e=Array.isArray(t.exclude)?t.exclude:[t.exclude];this.data.repeating.exclude=e.map(((t,e)=>(0,
n.checkDate)(t,`repeating.exclude[${e}]`)))}t.startOfWeek&&(this.data.repeating.startOfWeek=(0,n.checkEnum)(l.ICalWeekday,t.startOfWeek));return this}summary(t){if(void 0===t)return this.data.summary;this.data.summary=t?String(t):"";return this}location(t){if(void 0===t)return this.data.location;if("string"==typeof t){this.data.location={title:t};return this}if(t&&!t.title||(null==t?void 0:t.geo)&&(!isFinite(t.geo.lat)||!isFinite(t.geo.lon)))throw new Error("`location` isn't formatted correctly. See https://sebbo2002.github.io/ical-generator/develop/reference/classes/icalevent.html#location");this.data.location=t||null;return this}description(t){if(void 0===t)return this.data.description;if(null===t){this.data.description=null;return this}this.data.description="string"==typeof t?{plain:t}:t;return this}organizer(t){if(void 0===t)return this.data.organizer;if(null===t){this.data.organizer=null;return this}this.data.organizer=(0,n.checkNameAndMail)("organizer",t);return this}
createAttendee(t={}){if(t instanceof s.default){this.data.attendees.push(t);return t}"string"==typeof t&&(t=(0,n.checkNameAndMail)("data",t));const e=new s.default(t,this);this.data.attendees.push(e);return e}attendees(t){if(!t)return this.data.attendees;t.forEach((t=>this.createAttendee(t)));return this}createAlarm(t={}){const e=t instanceof o.default?t:new o.default(t,this);this.data.alarms.push(e);return e}alarms(t){if(!t)return this.data.alarms;t.forEach((t=>this.createAlarm(t)));return this}createCategory(t={}){const e=t instanceof d.default?t:new d.default(t);this.data.categories.push(e);return e}categories(t){if(!t)return this.data.categories;t.forEach((t=>this.createCategory(t)));return this}status(t){if(void 0===t)return this.data.status;if(null===t){this.data.status=null;return this}this.data.status=(0,n.checkEnum)(u,t);return this}busystatus(t){if(void 0===t)return this.data.busystatus;if(null===t){this.data.busystatus=null;return this}this.data.busystatus=(0,
n.checkEnum)(h,t);return this}priority(t){if(void 0===t)return this.data.priority;if(null===t){this.data.priority=null;return this}if(t<0||t>9)throw new Error("`priority` is invalid, musst be 0 ≤ priority ≤ 9.");this.data.priority=Math.round(t);return this}url(t){if(void 0===t)return this.data.url;this.data.url=t?String(t):null;return this}transparency(t){if(void 0===t)return this.data.transparency;if(!t){this.data.transparency=null;return this}this.data.transparency=(0,n.checkEnum)(c,t);return this}created(t){if(void 0===t)return this.data.created;if(null===t){this.data.created=null;return this}this.data.created=(0,n.checkDate)(t,"created");return this}lastModified(t){if(void 0===t)return this.data.lastModified;if(null===t){this.data.lastModified=null;return this}this.data.lastModified=(0,n.checkDate)(t,"lastModified");return this}x(t,e){if(void 0===t)return(0,n.addOrGetCustomAttributes)(this.data);"string"==typeof t&&"string"==typeof e&&(0,n.addOrGetCustomAttributes)(this.data,t,e)
;"object"==typeof t&&(0,n.addOrGetCustomAttributes)(this.data,t);return this}toJSON(){var t;let e=null;(0,n.isRRule)(this.data.repeating)||"string"==typeof this.data.repeating?e=this.data.repeating.toString():this.data.repeating&&(e=Object.assign({},this.data.repeating,{until:(0,n.toJSON)(this.data.repeating.until),exclude:null===(t=this.data.repeating.exclude)||void 0===t?void 0:t.map((t=>(0,n.toJSON)(t)))}));return Object.assign({},this.data,{start:(0,n.toJSON)(this.data.start)||null,end:(0,n.toJSON)(this.data.end)||null,recurrenceId:(0,n.toJSON)(this.data.recurrenceId)||null,stamp:(0,n.toJSON)(this.data.stamp)||null,created:(0,n.toJSON)(this.data.created)||null,lastModified:(0,n.toJSON)(this.data.lastModified)||null,repeating:e,x:this.x()})}toString(){var t,e,a,i,r;let s="";if(!this.data.start)throw new Error("No value for `start` in ICalEvent #"+this.data.id+" given!");s+="BEGIN:VEVENT\r\n";s+="UID:"+this.data.id+"\r\n";s+="SEQUENCE:"+this.data.sequence+"\r\n";s+="DTSTAMP:"+(0,
n.formatDate)(this.calendar.timezone(),this.data.stamp)+"\r\n";if(this.data.allDay){s+="DTSTART;VALUE=DATE:"+(0,n.formatDate)(this.calendar.timezone(),this.data.start,!0)+"\r\n";this.data.end&&(s+="DTEND;VALUE=DATE:"+(0,n.formatDate)(this.calendar.timezone(),this.data.end,!0)+"\r\n");s+="X-MICROSOFT-CDO-ALLDAYEVENT:TRUE\r\n";s+="X-MICROSOFT-MSNCALENDAR-ALLDAYEVENT:TRUE\r\n"}else{s+=(0,n.formatDateTZ)(this.timezone(),"DTSTART",this.data.start,this.data)+"\r\n";this.data.end&&(s+=(0,n.formatDateTZ)(this.timezone(),"DTEND",this.data.end,this.data)+"\r\n")}if((0,n.isRRule)(this.data.repeating)||"string"==typeof this.data.repeating)s+=this.data.repeating.toString().replace(/\r\n/g,"\n").split("\n").filter((t=>t&&!t.startsWith("DTSTART:"))).join("\r\n")+"\r\n";else if(this.data.repeating){s+="RRULE:FREQ="+this.data.repeating.freq;this.data.repeating.count&&(s+=";COUNT="+this.data.repeating.count);this.data.repeating.interval&&(s+=";INTERVAL="+this.data.repeating.interval)
;this.data.repeating.until&&(s+=";UNTIL="+(0,n.formatDate)(this.calendar.timezone(),this.data.repeating.until));this.data.repeating.byDay&&(s+=";BYDAY="+this.data.repeating.byDay.join(","));this.data.repeating.byMonth&&(s+=";BYMONTH="+this.data.repeating.byMonth.join(","));this.data.repeating.byMonthDay&&(s+=";BYMONTHDAY="+this.data.repeating.byMonthDay.join(","));this.data.repeating.bySetPos&&(s+=";BYSETPOS="+this.data.repeating.bySetPos);this.data.repeating.startOfWeek&&(s+=";WKST="+this.data.repeating.startOfWeek);s+="\r\n";if(this.data.repeating.exclude)if(this.data.allDay)s+="EXDATE;VALUE=DATE:"+this.data.repeating.exclude.map((t=>(0,n.formatDate)(this.calendar.timezone(),t,!0))).join(",")+"\r\n";else{s+="EXDATE";this.timezone()?s+=";TZID="+this.timezone()+":"+this.data.repeating.exclude.map((t=>(0,n.formatDate)(this.timezone(),t,!1,!0))).join(",")+"\r\n":s+=":"+this.data.repeating.exclude.map((t=>(0,n.formatDate)(this.timezone(),t))).join(",")+"\r\n"}}
this.data.recurrenceId&&(s+=(0,n.formatDateTZ)(this.timezone(),"RECURRENCE-ID",this.data.recurrenceId,this.data)+"\r\n");s+="SUMMARY:"+(0,n.escape)(this.data.summary)+"\r\n";this.data.transparency&&(s+="TRANSP:"+(0,n.escape)(this.data.transparency)+"\r\n");if(null===(t=this.data.location)||void 0===t?void 0:t.title){s+="LOCATION:"+(0,n.escape)(this.data.location.title+(this.data.location.address?"\n"+this.data.location.address:""))+"\r\n";this.data.location.radius&&this.data.location.geo&&(s+="X-APPLE-STRUCTURED-LOCATION;VALUE=URI;"+(this.data.location.address?"X-ADDRESS="+(0,n.escape)(this.data.location.address)+";":"")+"X-APPLE-RADIUS="+(0,n.escape)(this.data.location.radius)+";X-TITLE="+(0,n.escape)(this.data.location.title)+":geo:"+(0,n.escape)(null===(e=this.data.location.geo)||void 0===e?void 0:e.lat)+","+(0,n.escape)(null===(a=this.data.location.geo)||void 0===a?void 0:a.lon)+"\r\n");this.data.location.geo&&(s+="GEO:"+(0,
n.escape)(null===(i=this.data.location.geo)||void 0===i?void 0:i.lat)+";"+(0,n.escape)(null===(r=this.data.location.geo)||void 0===r?void 0:r.lon)+"\r\n")}if(this.data.description){s+="DESCRIPTION:"+(0,n.escape)(this.data.description.plain)+"\r\n";this.data.description.html&&(s+="X-ALT-DESC;FMTTYPE=text/html:"+(0,n.escape)(this.data.description.html)+"\r\n")}if(this.data.organizer){s+='ORGANIZER;CN="'+(0,n.escape)(this.data.organizer.name)+'"';this.data.organizer.email&&this.data.organizer.mailto&&(s+=";EMAIL="+(0,n.escape)(this.data.organizer.email));this.data.organizer.email&&(s+=":mailto:"+(0,n.escape)(this.data.organizer.mailto||this.data.organizer.email));s+="\r\n"}this.data.attendees.forEach((function(t){s+=t.toString()}));this.data.alarms.forEach((function(t){s+=t.toString()}));this.data.categories.length>0&&(s+="CATEGORIES:"+this.data.categories.map((function(t){return t.toString()})).join()+"\r\n");this.data.url&&(s+="URL;VALUE=URI:"+(0,n.escape)(this.data.url)+"\r\n")
;this.data.status&&(s+="STATUS:"+this.data.status.toUpperCase()+"\r\n");this.data.busystatus&&(s+="X-MICROSOFT-CDO-BUSYSTATUS:"+this.data.busystatus.toUpperCase()+"\r\n");null!==this.data.priority&&(s+="PRIORITY:"+this.data.priority+"\r\n");s+=(0,n.generateCustomAttributes)(this.data);this.data.created&&(s+="CREATED:"+(0,n.formatDate)(this.calendar.timezone(),this.data.created)+"\r\n");this.data.lastModified&&(s+="LAST-MODIFIED:"+(0,n.formatDate)(this.calendar.timezone(),this.data.lastModified)+"\r\n");s+="END:VEVENT\r\n";return s}}},804564:function(t,e,a){var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0})
;e.foldLines=e.escape=e.formatDateTZ=e.formatDate=e.ICalWeekday=e.ICalEventRepeatingFreq=e.ICalEventTransparency=e.ICalEventBusyStatus=e.ICalEventStatus=e.ICalEvent=e.ICalCategory=e.ICalCalendarMethod=e.ICalCalendar=e.ICalAttendeeStatus=e.ICalAttendeeRole=e.ICalAttendeeType=e.ICalAttendee=e.ICalAlarmType=e.ICalAlarm=void 0;const r=i(a(235837));function n(t){return new r.default(t)}e.default=n;var s=a(379117);Object.defineProperty(e,"ICalAlarm",{enumerable:!0,get:function(){return i(s).default}});Object.defineProperty(e,"ICalAlarmType",{enumerable:!0,get:function(){return s.ICalAlarmType}});var o=a(34699);Object.defineProperty(e,"ICalAttendee",{enumerable:!0,get:function(){return i(o).default}});Object.defineProperty(e,"ICalAttendeeType",{enumerable:!0,get:function(){return o.ICalAttendeeType}});Object.defineProperty(e,"ICalAttendeeRole",{enumerable:!0,get:function(){return o.ICalAttendeeRole}});Object.defineProperty(e,"ICalAttendeeStatus",{enumerable:!0,get:function(){
return o.ICalAttendeeStatus}});var d=a(235837);Object.defineProperty(e,"ICalCalendar",{enumerable:!0,get:function(){return i(d).default}});Object.defineProperty(e,"ICalCalendarMethod",{enumerable:!0,get:function(){return d.ICalCalendarMethod}});var l=a(639529);Object.defineProperty(e,"ICalCategory",{enumerable:!0,get:function(){return i(l).default}});var u=a(755910);Object.defineProperty(e,"ICalEvent",{enumerable:!0,get:function(){return i(u).default}});Object.defineProperty(e,"ICalEventStatus",{enumerable:!0,get:function(){return u.ICalEventStatus}});Object.defineProperty(e,"ICalEventBusyStatus",{enumerable:!0,get:function(){return u.ICalEventBusyStatus}});Object.defineProperty(e,"ICalEventTransparency",{enumerable:!0,get:function(){return u.ICalEventTransparency}});var h=a(73281);Object.defineProperty(e,"ICalEventRepeatingFreq",{enumerable:!0,get:function(){return h.ICalEventRepeatingFreq}});Object.defineProperty(e,"ICalWeekday",{enumerable:!0,get:function(){return h.ICalWeekday}})
;var c=a(816963);Object.defineProperty(e,"formatDate",{enumerable:!0,get:function(){return c.formatDate}});Object.defineProperty(e,"formatDateTZ",{enumerable:!0,get:function(){return c.formatDateTZ}});Object.defineProperty(e,"escape",{enumerable:!0,get:function(){return c.escape}});Object.defineProperty(e,"foldLines",{enumerable:!0,get:function(){return c.foldLines}});t.exports=Object.assign(n,t.exports)},816963:(t,e,a)=>{var i=a(348764).Buffer;Object.defineProperty(e,"__esModule",{value:!0});e.toDurationString=e.toJSON=e.isRRule=e.isMomentDuration=e.isLuxonDate=e.isDayjs=e.isMomentTZ=e.isMoment=e.toDate=e.checkDate=e.checkEnum=e.checkNameAndMail=e.generateCustomAttributes=e.addOrGetCustomAttributes=e.foldLines=e.escape=e.formatDateTZ=e.formatDate=void 0;function r(t,e,a,i){(null==t?void 0:t.startsWith("/"))&&(t=t.substr(1));if("string"==typeof e||e instanceof Date){const r=new Date(e)
;let n=r.getUTCFullYear()+String(r.getUTCMonth()+1).padStart(2,"0")+r.getUTCDate().toString().padStart(2,"0");t&&(n=r.getFullYear()+String(r.getMonth()+1).padStart(2,"0")+r.getDate().toString().padStart(2,"0"));if(a)return n;if(t){n+="T"+r.getHours().toString().padStart(2,"0")+r.getMinutes().toString().padStart(2,"0")+r.getSeconds().toString().padStart(2,"0");return n}n+="T"+r.getUTCHours().toString().padStart(2,"0")+r.getUTCMinutes().toString().padStart(2,"0")+r.getUTCSeconds().toString().padStart(2,"0")+(i?"":"Z");return n}if(s(e)){const r=t?o(e)&&!e.tz()?e.clone().tz(t):e:i?e:e.utc();return r.format("YYYYMMDD")+(a?"":"T"+r.format("HHmmss")+(i||t?"":"Z"))}if(l(e)){const r=t?e.setZone(t):i?e:e.setZone("utc");return r.toFormat("yyyyLLdd")+(a?"":"T"+r.toFormat("HHmmss")+(i||t?"":"Z"))}{let r=e;if(t)r="function"==typeof e.tz?e.tz(t):e;else if(i);else{if("function"!=typeof e.utc)throw new Error("Unable to convert dayjs object to UTC value: UTC plugin is not available!");r=e.utc()}
return r.format("YYYYMMDD")+(a?"":"T"+r.format("HHmmss")+(i||t?"":"Z"))}}e.formatDate=r;e.formatDateTZ=function(t,e,a,i){let n="",s=(null==i?void 0:i.floating)||!1;if(null==i?void 0:i.timezone){n=";TZID="+i.timezone;s=!0}return e+n+":"+r(t,a,!1,s)};function n(t){return String(t).replace(/[\\;,"]/g,(function(t){return"\\"+t})).replace(/(?:\r\n|\r|\n)/g,"\\n")}e.escape=n;e.foldLines=function(t){return t.split("\r\n").map((function(t){let e="",a=0;for(let r=0;r<t.length;r++){let n=t.charAt(r);n>="\ud800"&&n<="\udbff"&&(n+=t.charAt(++r));const s=i.from(n).length;a+=s;if(a>74){e+="\r\n ";a=s}e+=n}return e})).join("\r\n")};e.addOrGetCustomAttributes=function(t,e,a){if(Array.isArray(e))t.x=e.map((t=>{if(Array.isArray(t))return t;if("string"!=typeof t.key||"string"!=typeof t.value)throw new Error("Either key or value is not a string!");if("X-"!==t.key.substr(0,2))throw new Error("Key has to start with `X-`!");return[t.key,t.value]
}));else if("object"==typeof e)t.x=Object.entries(e).map((([t,e])=>{if("string"!=typeof t||"string"!=typeof e)throw new Error("Either key or value is not a string!");if("X-"!==t.substr(0,2))throw new Error("Key has to start with `X-`!");return[t,e]}));else{if("string"!=typeof e||"string"!=typeof a)return t.x.map((t=>({key:t[0],value:t[1]})));if("X-"!==e.substr(0,2))throw new Error("Key has to start with `X-`!");t.x.push([e,a])}};e.generateCustomAttributes=function(t){const e=t.x.map((([t,e])=>t.toUpperCase()+":"+n(e))).join("\r\n");return e.length?e+"\r\n":""};e.checkNameAndMail=function(t,e){let a=null;if("string"==typeof e){const t=e.match(/^(.+) ?<([^>]+)>$/);t?a={name:t[1].trim(),email:t[2].trim()}:e.includes("@")&&(a={name:e.trim(),email:e.trim()})}else"object"==typeof e&&(a={name:e.name,email:e.email,mailto:e.mailto})
;if(!a&&"string"==typeof e)throw new Error("`"+t+"` isn't formated correctly. See https://sebbo2002.github.io/ical-generator/develop/reference/interfaces/icalorganizer.html");if(!a)throw new Error("`"+t+"` needs to be a valid formed string or an object. See https://sebbo2002.github.io/ical-generator/develop/reference/interfaces/icalorganizer.html");if(!a.name)throw new Error("`"+t+".name` is empty!");return a};e.checkEnum=function(t,e){const a=Object.values(t),i=String(e).toUpperCase();if(!i||!a.includes(i))throw new Error(`Input must be one of the following: ${a.join(", ")}`);return i};e.checkDate=function(t,e){if(t instanceof Date&&isNaN(t.getTime())||"string"==typeof t&&isNaN(new Date(t).getTime()))throw new Error(`\`${e}\` has to be a valid date!`);if(t instanceof Date||"string"==typeof t)return t;if(l(t)&&!0===t.isValid)return t;if((s(t)||d(t))&&t.isValid())return t;throw new Error(`\`${e}\` has to be a valid date!`)};e.toDate=function(t){
return"string"==typeof t||t instanceof Date?new Date(t):l(t)?t.toJSDate():t.toDate()};function s(t){return null!=t&&null!=t._isAMomentObject}e.isMoment=s;function o(t){return s(t)&&"function"==typeof t.tz}e.isMomentTZ=o;function d(t){return!("object"!=typeof t||null===t||t instanceof Date||s(t)||l(t))}e.isDayjs=d;function l(t){return"object"==typeof t&&null!==t&&"function"==typeof t.toJSDate}e.isLuxonDate=l;e.isMomentDuration=function(t){return null!==t&&"object"==typeof t&&"function"==typeof t.asSeconds};e.isRRule=function(t){return null!==t&&"object"==typeof t&&"function"==typeof t.between&&"function"==typeof t.toString};e.toJSON=function(t){return t?"string"==typeof t?t:t.toJSON():t};e.toDurationString=function(t){let e="";if(t<0){e="-";t*=-1}e+="P";if(t>=86400){e+=Math.floor(t/86400)+"D";t%=86400}if(!t&&e.length>1)return e;e+="T";if(t>=3600){e+=Math.floor(t/3600)+"H";t%=3600}if(t>=60){e+=Math.floor(t/60)+"M";t%=60}t>0?e+=t+"S":e.length<=2&&(e+="0S");return e}},73281:(t,e)=>{
Object.defineProperty(e,"__esModule",{value:!0});e.ICalWeekday=e.ICalEventRepeatingFreq=void 0;!function(t){t.SECONDLY="SECONDLY";t.MINUTELY="MINUTELY";t.HOURLY="HOURLY";t.DAILY="DAILY";t.WEEKLY="WEEKLY";t.MONTHLY="MONTHLY";t.YEARLY="YEARLY"}(e.ICalEventRepeatingFreq||(e.ICalEventRepeatingFreq={}));!function(t){t.SU="SU";t.MO="MO";t.TU="TU";t.WE="WE";t.TH="TH";t.FR="FR";t.SA="SA"}(e.ICalWeekday||(e.ICalWeekday={}))},362043:(t,e,a)=>{!function(){var e,i,r,n=0,s=[];for(i=0;i<256;i++)s[i]=(i+256).toString(16).substr(1);d.BUFFER_SIZE=4096;d.bin=o;d.clearBuffer=function(){e=null;n=0};d.test=function(t){return"string"==typeof t&&/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(t)};"undefined"!=typeof crypto?r=crypto:"undefined"!=typeof window&&void 0!==window.msCrypto&&(r=window.msCrypto);r=r||a(339061);t.exports=d;d.randomBytes=function(){if(r){if(r.randomBytes)return r.randomBytes
;if(r.getRandomValues)return"function"!=typeof Uint8Array.prototype.slice?function(t){var e=new Uint8Array(t);r.getRandomValues(e);return Array.from(e)}:function(t){var e=new Uint8Array(t);r.getRandomValues(e);return e}}return function(t){var e,a=[];for(e=0;e<t;e++)a.push(Math.floor(256*Math.random()));return a}}();function o(){var t=function(t){if(!e||n+t>d.BUFFER_SIZE){n=0;e=d.randomBytes(d.BUFFER_SIZE)}return e.slice(n,n+=t)}(16);t[6]=15&t[6]|64;t[8]=63&t[8]|128;return t}function d(){var t=o();return s[t[0]]+s[t[1]]+s[t[2]]+s[t[3]]+"-"+s[t[4]]+s[t[5]]+"-"+s[t[6]]+s[t[7]]+"-"+s[t[8]]+s[t[9]]+"-"+s[t[10]]+s[t[11]]+s[t[12]]+s[t[13]]+s[t[14]]+s[t[15]]}}()}}]);
//# sourceMappingURL=71683656725ee1b8333e.js.map