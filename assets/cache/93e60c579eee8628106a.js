"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[32282],{783772:(i,n,t)=>{t.d(n,{Z:()=>r});var e=t(13882),a=t(159025);function r(i,n,t){(0,e.Z)(2,arguments);var r=(0,a.Z)(i,t),u=(0,a.Z)(n,t);return r.getTime()===u.getTime()}},732282:(i,n,t)=>{t.r(n);t.d(n,{default:()=>h});function e(i,n){if(void 0!==i.one&&1===n)return i.one;var t=n%10,e=n%100;return 1===t&&11!==e?i.singularNominative.replace("{{count}}",String(n)):t>=2&&t<=4&&(e<10||e>20)?i.singularGenitive.replace("{{count}}",String(n)):i.pluralGenitive.replace("{{count}}",String(n))}function a(i){return function(n,t){return null!=t&&t.addSuffix?t.comparison&&t.comparison>0?i.future?e(i.future,n):"через "+e(i.regular,n):i.past?e(i.past,n):e(i.regular,n)+" назад":e(i.regular,n)}}var r={lessThanXSeconds:a({regular:{one:"меньше секунды",singularNominative:"меньше {{count}} секунды",singularGenitive:"меньше {{count}} секунд",pluralGenitive:"меньше {{count}} секунд"},future:{
one:"меньше, чем через секунду",singularNominative:"меньше, чем через {{count}} секунду",singularGenitive:"меньше, чем через {{count}} секунды",pluralGenitive:"меньше, чем через {{count}} секунд"}}),xSeconds:a({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунды",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду назад",singularGenitive:"{{count}} секунды назад",pluralGenitive:"{{count}} секунд назад"},future:{singularNominative:"через {{count}} секунду",singularGenitive:"через {{count}} секунды",pluralGenitive:"через {{count}} секунд"}}),halfAMinute:function(i,n){return null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"через полминуты":"полминуты назад":"полминуты"},lessThanXMinutes:a({regular:{one:"меньше минуты",singularNominative:"меньше {{count}} минуты",singularGenitive:"меньше {{count}} минут",pluralGenitive:"меньше {{count}} минут"},future:{one:"меньше, чем через минуту",
singularNominative:"меньше, чем через {{count}} минуту",singularGenitive:"меньше, чем через {{count}} минуты",pluralGenitive:"меньше, чем через {{count}} минут"}}),xMinutes:a({regular:{singularNominative:"{{count}} минута",singularGenitive:"{{count}} минуты",pluralGenitive:"{{count}} минут"},past:{singularNominative:"{{count}} минуту назад",singularGenitive:"{{count}} минуты назад",pluralGenitive:"{{count}} минут назад"},future:{singularNominative:"через {{count}} минуту",singularGenitive:"через {{count}} минуты",pluralGenitive:"через {{count}} минут"}}),aboutXHours:a({regular:{singularNominative:"около {{count}} часа",singularGenitive:"около {{count}} часов",pluralGenitive:"около {{count}} часов"},future:{singularNominative:"приблизительно через {{count}} час",singularGenitive:"приблизительно через {{count}} часа",pluralGenitive:"приблизительно через {{count}} часов"}}),xHours:a({regular:{singularNominative:"{{count}} час",singularGenitive:"{{count}} часа",
pluralGenitive:"{{count}} часов"}}),xDays:a({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} дня",pluralGenitive:"{{count}} дней"}}),aboutXWeeks:a({regular:{singularNominative:"около {{count}} недели",singularGenitive:"около {{count}} недель",pluralGenitive:"около {{count}} недель"},future:{singularNominative:"приблизительно через {{count}} неделю",singularGenitive:"приблизительно через {{count}} недели",pluralGenitive:"приблизительно через {{count}} недель"}}),xWeeks:a({regular:{singularNominative:"{{count}} неделя",singularGenitive:"{{count}} недели",pluralGenitive:"{{count}} недель"}}),aboutXMonths:a({regular:{singularNominative:"около {{count}} месяца",singularGenitive:"около {{count}} месяцев",pluralGenitive:"около {{count}} месяцев"},future:{singularNominative:"приблизительно через {{count}} месяц",singularGenitive:"приблизительно через {{count}} месяца",pluralGenitive:"приблизительно через {{count}} месяцев"}}),xMonths:a({regular:{
singularNominative:"{{count}} месяц",singularGenitive:"{{count}} месяца",pluralGenitive:"{{count}} месяцев"}}),aboutXYears:a({regular:{singularNominative:"около {{count}} года",singularGenitive:"около {{count}} лет",pluralGenitive:"около {{count}} лет"},future:{singularNominative:"приблизительно через {{count}} год",singularGenitive:"приблизительно через {{count}} года",pluralGenitive:"приблизительно через {{count}} лет"}}),xYears:a({regular:{singularNominative:"{{count}} год",singularGenitive:"{{count}} года",pluralGenitive:"{{count}} лет"}}),overXYears:a({regular:{singularNominative:"больше {{count}} года",singularGenitive:"больше {{count}} лет",pluralGenitive:"больше {{count}} лет"},future:{singularNominative:"больше, чем через {{count}} год",singularGenitive:"больше, чем через {{count}} года",pluralGenitive:"больше, чем через {{count}} лет"}}),almostXYears:a({regular:{singularNominative:"почти {{count}} год",singularGenitive:"почти {{count}} года",
pluralGenitive:"почти {{count}} лет"},future:{singularNominative:"почти через {{count}} год",singularGenitive:"почти через {{count}} года",pluralGenitive:"почти через {{count}} лет"}})};const u=function(i,n,t){return r[i](n,t)};var o=t(849526);const l={date:(0,o.Z)({formats:{full:"EEEE, d MMMM y 'г.'",long:"d MMMM y 'г.'",medium:"d MMM y 'г.'",short:"dd.MM.y"},defaultWidth:"full"}),time:(0,o.Z)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,o.Z)({formats:{any:"{{date}}, {{time}}"},defaultWidth:"any"})};var s=t(783772),c=["воскресенье","понедельник","вторник","среду","четверг","пятницу","субботу"];function v(i){var n=c[i];return 2===i?"'во "+n+" в' p":"'в "+n+" в' p"}var d={lastWeek:function(i,n,t){var e=i.getUTCDay();return(0,s.Z)(i,n,t)?v(e):function(i){var n=c[i];switch(i){case 0:return"'в прошлое "+n+" в' p";case 1:case 2:case 4:return"'в прошлый "+n+" в' p";case 3:case 5:case 6:return"'в прошлую "+n+" в' p"}}(e)},
yesterday:"'вчера в' p",today:"'сегодня в' p",tomorrow:"'завтра в' p",nextWeek:function(i,n,t){var e=i.getUTCDay();return(0,s.Z)(i,n,t)?v(e):function(i){var n=c[i];switch(i){case 0:return"'в следующее "+n+" в' p";case 1:case 2:case 4:return"'в следующий "+n+" в' p";case 3:case 5:case 6:return"'в следующую "+n+" в' p"}}(e)},other:"P"};const g=function(i,n,t,e){var a=d[i];return"function"==typeof a?a(n,t,e):a};var m=t(688486);const f={ordinalNumber:function(i,n){var t=Number(i),e=null==n?void 0:n.unit;return t+("date"===e?"-е":"week"===e||"minute"===e||"second"===e?"-я":"-й")},era:(0,m.Z)({values:{narrow:["до н.э.","н.э."],abbreviated:["до н. э.","н. э."],wide:["до нашей эры","нашей эры"]},defaultWidth:"wide"}),quarter:(0,m.Z)({values:{narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},defaultWidth:"wide",argumentCallback:function(i){return i-1}}),month:(0,m.Z)({values:{
narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","март","апр.","май","июнь","июль","авг.","сент.","окт.","нояб.","дек."],wide:["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"]},defaultWidth:"wide",formattingValues:{narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","мар.","апр.","мая","июн.","июл.","авг.","сент.","окт.","нояб.","дек."],wide:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]},defaultFormattingWidth:"wide"}),day:(0,m.Z)({values:{narrow:["В","П","В","С","Ч","П","С"],short:["вс","пн","вт","ср","чт","пт","сб"],abbreviated:["вск","пнд","втр","срд","чтв","птн","суб"],wide:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},defaultWidth:"wide"}),dayPeriod:(0,m.Z)({values:{narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",
night:"ночь"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утро",afternoon:"день",evening:"вечер",night:"ночь"}},defaultWidth:"any",formattingValues:{narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утра",afternoon:"дня",evening:"вечера",night:"ночи"}},defaultFormattingWidth:"wide"})};var p=t(276723);const h={code:"ru",formatDistance:u,formatLong:l,formatRelative:g,localize:f,match:{ordinalNumber:(0,t(360974).Z)({matchPattern:/^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i,parsePattern:/\d+/i,valueCallback:function(i){return parseInt(i,10)}}),era:(0,p.Z)({matchPatterns:{narrow:/^((до )?н\.?\s?э\.?)/i,
abbreviated:/^((до )?н\.?\s?э\.?)/i,wide:/^(до нашей эры|нашей эры|наша эра)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^д/i,/^н/i]},defaultParseWidth:"any"}),quarter:(0,p.Z)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?[ыои]?й?)? кв.?/i,wide:/^[1234](-?[ыои]?й?)? квартал/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(i){return i+1}}),month:(0,p.Z)({matchPatterns:{narrow:/^[яфмаисонд]/i,abbreviated:/^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,wide:/^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^я/i,/^ф/i,/^м/i,/^а/i,/^м/i,/^и/i,/^и/i,/^а/i,/^с/i,/^о/i,/^н/i,/^я/i],any:[/^я/i,/^ф/i,/^мар/i,/^ап/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^ав/i,/^с/i,/^о/i,/^н/i,/^д/i]},defaultParseWidth:"any"}),day:(0,p.Z)({matchPatterns:{narrow:/^[впсч]/i,
short:/^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,abbreviated:/^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,wide:/^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^в/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^в[ос]/i,/^п[он]/i,/^в/i,/^ср/i,/^ч/i,/^п[ят]/i,/^с[уб]/i]},defaultParseWidth:"any"}),dayPeriod:(0,p.Z)({matchPatterns:{narrow:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,abbreviated:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,wide:/^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^дп/i,pm:/^пп/i,midnight:/^полн/i,noon:/^полд/i,morning:/^у/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}}}}]);
//# sourceMappingURL=93e60c579eee8628106a.js.map