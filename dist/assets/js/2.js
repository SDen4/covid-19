(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{346:function(t,e,n){"use strict";n.r(e);for(var o,r,c,l=n(132),a=document.querySelector("#data__display_ill"),i=document.querySelector("#data__display_dead"),d=document.querySelector("#data__display_recover"),x=document.querySelector("#data__common_ill"),C=document.querySelector("#data__common_dead"),u=document.querySelector("#data__common_recover"),_=document.querySelector("#data__common_nowIll"),s=document.querySelector("#data__persent_ill"),m=document.querySelector("#data__persent_dead"),h=document.querySelector("#data__persent_recover"),w=document.querySelector("#data__persent_nowIll"),y=l.b[l.b.length-1],E=l.e[l.e.length-1],g=l.b[l.b.length-2],S=l.e[l.e.length-2],f=l.d[l.d.length-2],p=0;p<=l.c.length;p++)o=l.c[p-1],c=l.c[p-2],r=o-l.c[p-2];a.textContent=o.toLocaleString("ru-RU"),i.textContent=y.toLocaleString("ru-RU"),d.textContent=E.toLocaleString("ru-RU");var L=l.b[l.b.length-1]-l.b[l.b.length-2],b=l.e[l.e.length-1]-l.e[l.e.length-2],q=l.d[l.d.length-1];if(x.textContent=r.toLocaleString("ru-RU"),C.textContent=L.toLocaleString("ru-RU"),u.textContent=b.toLocaleString("ru-RU"),_.textContent=q.toLocaleString("ru-RU"),s.textContent="+".concat((r/c*100).toFixed(1),"%"),m.textContent="+".concat((L/g*100).toFixed(1),"%"),h.textContent="+".concat((b/S*100).toFixed(1),"%"),100*(q/f-1)<.1?(w.textContent="0.0%",w.style.color="#228B22"):q>f?(w.textContent="+".concat((100*(q/f-1)).toFixed(1),"%"),w.style.color="#A53E3E"):(w.textContent="".concat((100*(q/f-1)).toFixed(1),"%"),w.style.color="#228B22"),!isFinite(o)||""==o)throw a.textContent="?",x.textContent="?",s.textContent="?",_.textContent="?",w.textContent="?",w.style.color="#A53E3E",new Error("Left section. Error in data (Common ill)");if(q<0)throw _.textContent="?",w.textContent="?",new Error("Left section. Error in calculation! (nowill)");if(!isFinite(y)||""==y)throw C.textContent="?",m.textContent="?",i.textContent="?",_.textContent="?",w.textContent="?",new Error("Left section. Error in data (Common death)");if(!isFinite(E)||""==E)throw u.textContent="?",h.textContent="?",d.textContent="?",_.textContent="?",w.textContent="?",new Error("Left section. Error in data (Common recover)");if(o-y-E!==q)throw _.textContent="?",w.textContent="?",w.style.color="#A53E3E",new Error("Left section. Error in calculation nowill! (check the current data of all parts: dead, recover and ill)");if(r<0)throw x.textContent="?",s.textContent="?",_.textContent="?",w.textContent="?",w.style.color="#A53E3E",new Error("Left section. Error: curIll can not be less than zero!")}}]);