(window.webpackJsonp=window.webpackJsonp||[]).push([[2,6],{337:function(t,e,n){"use strict";function o(t,e,n,o,r,c,a){try{var s=t[c](a),l=s.value}catch(t){return void n(t)}s.done?e(l):Promise.resolve(l).then(o,r)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(r,c){var a=t.apply(e,n);function s(t){o(a,r,c,s,l,"next",t)}function l(t){o(a,r,c,s,l,"throw",t)}s(void 0)}))}}n.r(e),n.d(e,"illness",(function(){return a})),n.d(e,"deaths",(function(){return s})),n.d(e,"recovers",(function(){return l})),n.d(e,"nowIll",(function(){return u})),n.d(e,"dates",(function(){return i}));var c="https://api.covid19api.com/country/russia/status/",a=[],s=[],l=[],i=[],u=[];function d(t,e){return x.apply(this,arguments)}function x(){return(x=r(regeneratorRuntime.mark((function t(e,n){var o,r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(c+e);case 2:if(!(o=t.sent).ok){t.next=12;break}return t.next=6,o.json();case 6:return r=t.sent,a=[],r.map((function(t){if("dates"===n){var e=t.Date;a.push(e.slice(0,10))}else{var o=t.Cases;a.push(o)}})),t.abrupt("return",a);case 12:console.log("Ошибка HTTP: "+o.status);case 13:case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(){return(h=r(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d("deaths","dates");case 2:return i=t.sent,console.log(i),t.next=6,d("confirmed");case 6:return a=t.sent,console.log(a),t.next=10,d("deaths");case 10:return s=t.sent,console.log(s),t.next=14,d("recovered");case 14:for(l=t.sent,console.log(l),e=0;e<a.length;e++)u.push(a[e]-s[e]-l[e]);console.log(u);case 19:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){h.apply(this,arguments)}()},343:function(t,e,n){"use strict";n.r(e);for(var o,r,c,a=n(337),s=document.querySelector("#data__display_ill"),l=document.querySelector("#data__display_dead"),i=document.querySelector("#data__display_recover"),u=document.querySelector("#data__common_ill"),d=document.querySelector("#data__common_dead"),x=document.querySelector("#data__common_recover"),h=document.querySelector("#data__common_nowIll"),f=document.querySelector("#data__persent_ill"),C=document.querySelector("#data__persent_dead"),p=document.querySelector("#data__persent_recover"),m=document.querySelector("#data__persent_nowIll"),w=a.deaths[a.deaths.length-1],_=a.recovers[a.recovers.length-1],v=a.deaths[a.deaths.length-2],g=a.recovers[a.recovers.length-2],y=a.nowIll[a.nowIll.length-2],E=0;E<=a.illness.length;E++)o=a.illness[E-1],c=a.illness[E-2],r=o-a.illness[E-2];s.textContent=o.toLocaleString("ru-RU"),l.textContent=w.toLocaleString("ru-RU"),i.textContent=_.toLocaleString("ru-RU");var S=a.deaths[a.deaths.length-1]-a.deaths[a.deaths.length-2],L=a.recovers[a.recovers.length-1]-a.recovers[a.recovers.length-2],q=a.nowIll[a.nowIll.length-1];if(u.textContent=r.toLocaleString("ru-RU"),d.textContent=S.toLocaleString("ru-RU"),x.textContent=L.toLocaleString("ru-RU"),h.textContent=q.toLocaleString("ru-RU"),f.textContent="+".concat((r/c*100).toFixed(1),"%"),C.textContent="+".concat((S/v*100).toFixed(1),"%"),p.textContent="+".concat((L/g*100).toFixed(1),"%"),100*(q/y-1)<.1?(m.textContent="0.0%",m.style.color="#228B22"):q>y?(m.textContent="+".concat((100*(q/y-1)).toFixed(1),"%"),m.style.color="#A53E3E"):(m.textContent="".concat((100*(q/y-1)).toFixed(1),"%"),m.style.color="#228B22"),!isFinite(o)||""==o)throw s.textContent="?",u.textContent="?",f.textContent="?",h.textContent="?",m.textContent="?",m.style.color="#A53E3E",new Error("Left section. Error in data (Common ill)");if(q<0)throw h.textContent="?",m.textContent="?",new Error("Left section. Error in calculation! (nowill)");if(!isFinite(w)||""==w)throw d.textContent="?",C.textContent="?",l.textContent="?",h.textContent="?",m.textContent="?",new Error("Left section. Error in data (Common death)");if(!isFinite(_)||""==_)throw x.textContent="?",p.textContent="?",i.textContent="?",h.textContent="?",m.textContent="?",new Error("Left section. Error in data (Common recover)");if(o-w-_!==q)throw h.textContent="?",m.textContent="?",m.style.color="#A53E3E",new Error("Left section. Error in calculation nowill! (check the current data of all parts: dead, recover and ill)");if(r<0)throw u.textContent="?",f.textContent="?",h.textContent="?",m.textContent="?",m.style.color="#A53E3E",new Error("Left section. Error: curIll can not be less than zero!")}}]);