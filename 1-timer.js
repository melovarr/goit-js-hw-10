import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as d,i as l}from"./assets/vendor-BbSUbo7J.js";const f=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]");o.addEventListener("click",h);o.disabled=!0;let r;d("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){if(r=e[0],r<new Date){o.disabled=!0,m();return}o.disabled=!1}});function m(){l.error({message:"Please choose a date in the future",messageColor:"#fff",backgroundColor:"red",position:"topCenter"})}function h(){const e=setInterval(()=>{const t=(r-new Date)/1e3;Math.floor(t)/1e3===0&&(clearInterval(e),f.disabled=!1),y(p(r-new Date))},1e3)}function p(e){const s=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),u=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:c,minutes:i,seconds:u}}function y(e){const t=document.querySelectorAll(".value");e.forEach((n,a)=>{t[a].textContent=String(n).padStart(2,"0")})}
//# sourceMappingURL=1-timer.js.map
