import{f as d,i as f}from"./assets/vendor-77e16229.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const u=document.querySelector("#datetime-picker"),n=document.querySelector("[data-start]");let l;n.disabled=!0;const m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:p};d(u,m);function p(t){l=t[0],l<=new Date?(f.warning({backgroundColor:"#EF4040",iconUrl:"/img/bi_x-octagon.svg",titleColor:"#FFFFFF",progressBarColor:"#B51B1B",position:"topRight",timeout:3e3,closeCaolor:"#FFFFFF",theme:"dark",title:"Please choose a date in the future"}),n.disabled=!0):(n.disabled=!1,n.style.backgroundColor="#4E75FF",n.style.color="#FFFFFF")}function y(t){const s=Math.floor(t/864e5),r=Math.floor(t%864e5/(1e3*60*60)),e=Math.floor(t%(1e3*60*60)/(1e3*60)),o=Math.floor(t%(1e3*60)/1e3);return{days:s,hours:r,minutes:e,seconds:o}}function F(t){return[c(t.days),c(t.hours),c(t.minutes),c(t.seconds)].join(":")}function c(t){return String(t).padStart(2,"0")}function h(){const t=setInterval(()=>{const s=l-new Date;if(s<=0){clearInterval(t),document.querySelector(".timer").textContent="00:00:00:00";return}const r=F(y(s));document.querySelector("[data-days]").textContent=r.split(":")[0],document.querySelector("[data-hours]").textContent=r.split(":")[1],document.querySelector("[data-minutes]").textContent=r.split(":")[2],document.querySelector("[data-seconds]").textContent=r.split(":")[3]},1e3)}n.addEventListener("click",()=>{u.disabled=!0,n.disabled=!0,n.style.backgroundColor="#CFCFCF",n.style.color="#989898",h()});
//# sourceMappingURL=commonHelpers.js.map
