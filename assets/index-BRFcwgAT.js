(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const w=document.querySelector(".greeting-modal"),O=document.querySelector('.greeting-modal__close-btn[data-modal="close-main-modal"]');let D=document.getElementById("user-name-modal");const P=document.querySelector(".greeting-modal__save-btn"),M=document.querySelector(".greeting-modal__backdrop");P.addEventListener("click",()=>{let e=D.value;if(e.length>1)console.log(`Новий користувач має ім'я "${e}".`),w.classList.remove("open-modal"),M.classList.remove("open-modal__activ-backdrop");else{alert("Введіть текст довший 1 літери");return}});O.addEventListener("click",()=>{w.classList.remove("open-modal"),M.classList.remove("open-modal__activ-backdrop")});const _=document.getElementById("checkbox-style"),x=document.querySelector(".type-page__light"),L=document.querySelector(".type-page__dark"),E=document.querySelector(".type-page__ball"),C=document.body;_.addEventListener("change",()=>{_.checked?(x.classList.add("inactive"),E.classList.add("move"),L.classList.remove("inactive"),C.style.backgroundColor="rgb(103, 58, 145)"):(L.classList.add("inactive"),x.classList.remove("inactive"),E.classList.remove("move"),C.style.backgroundColor="#EEE")});let T=document.getElementById("input-year"),S=document.querySelector(".checking-year__result"),A=document.getElementById("check-year-btn");function F(e){e%4===0&&e%100!==0||e%400===0?S.textContent="Ви народилися у високосний рік!":S.textContent="Ви народилися у не високосний рік!"}A.addEventListener("click",()=>{let e=Number(T.value);F(e)});const W=document.getElementById("user-number"),X=document.getElementById("check-number-btn"),i=document.querySelector(".guess-number__result");function z(e){let t=Math.floor(Math.random()*5+1);t===e?(i.textContent=`Вітаю, ви вгадали число! (${t})`,i.style.color="green"):5>=e?(i.textContent=`Упс, ви не вгадали число (${t}).`,i.style.color="orange"):(i.textContent=`Упс, мені здається що число (${e}) більше (5).`,i.style.color="orange")}X.addEventListener("click",()=>{let e=Number(W.value);z(e)});let r=document.querySelector(".ssp-game__result-text");const G=document.querySelector(".ssp-game__btn");let p=document.getElementById("ssp-game__result-computer"),b=document.getElementById("ssp-game__result-user"),d=0,u=0;G.addEventListener("click",()=>{let e=document.querySelector('input[name="ssp-game"]:checked');if(e){let t=e.value;H(t)}else r.textContent="Будь ласка, виберіть один із варіантів.",r.style.color="orange"});function H(e){const t=["stone","scissors","paper"];let o=Math.floor(Math.random()*3+0),l=t[o];console.log(o),e==="stone"?l==="scissors"?(u+=1,r.textContent="Ви виграли раунд!",r.style.color="green",b.textContent=`Ви - ${u}`):l==="paper"?(d+=1,r.textContent="Комп’ютер виграв раунд!!",r.style.color="red",p.textContent=`Комп'ютер - ${d}`):(r.textContent="Вау! В вас нічия.",r.style.color="orange"):e==="scissors"?l==="stone"?(d+=1,r.textContent="Комп’ютер виграв раунд!!",r.style.color="red",p.textContent=`Комп'ютер - ${d}`):l==="paper"?(u+=1,r.textContent="Ви виграли раунд!",r.style.color="green",b.textContent=`Ви - ${u}`):(r.textContent="Вау! В вас нічия.",r.style.color="orange"):l==="stone"?(u+=1,r.textContent="Ви виграли раунд!",r.style.color="green",b.textContent=`Ви - ${u}`):l==="scissors"?(d+=1,r.textContent="Комп’ютер виграв раунд!!",r.style.color="red",p.textContent=`Комп'ютер - ${d}`):(r.textContent="Вау! В вас нічия.",r.style.color="orange")}let U=document.querySelector(".calculator-game__resulat");const K=document.getElementById("calculator-decision");K.addEventListener("click",()=>{let e=document.getElementById("calculator-first-number"),t=document.getElementById("calculator-second-number"),o=document.querySelector('input[name="calculator-sign"]:checked');e&&t&&o?V(e.value,o.value,t.value):alert("Будь ласка, заповніть всі поля введеня.")});function V(e,t,o){let l;switch(e=Number(e),o=Number(o),t){case"+":l=e+o;break;case"*":l=e*o;break;case"-":l=e-o;break;case"/":l=o!==0?e/o:"ПОМИЛКА";break;default:l="Невідомий знак";break}U.textContent=l}let j=document.getElementById("timer-save-date-btn"),c=document.querySelector(".timer-game__result"),k;j.addEventListener("click",J);function J(){c.textContent="YYYY-MM-DDTHH:MM",c.style.color="black";let e=document.getElementById("timer-user-date").value,t=new Date(e);if(isNaN(t.getTime())){c.textContent="Введіть коректну дату!",c.style.color="red";return}function o(){let n=t-new Date;if(n>0){const s=Math.floor(n/864e5),m=Math.floor(n%(1e3*60*60*24)/(1e3*60*60)),R=Math.floor(n%(1e3*60*60)/(1e3*60)),Y=Math.floor(n%(1e3*60)/1e3);c.textContent=`${s} дн. ${m}:${R}:${Y}`}else c.textContent="Час вичерпано!",c.style.color="red",clearInterval(k)}k=setInterval(o,1e3),o()}const g=document.querySelector(".football-game__ball"),Q=document.querySelector(".football-game");let v=!1,$,N;g.addEventListener("mousedown",e=>{v=!0;const t=g.getBoundingClientRect();$=e.clientX-t.left,N=e.clientY-t.top});document.addEventListener("mousemove",e=>{if(v){const t=Q.getBoundingClientRect(),o=g.getBoundingClientRect();let l=e.clientX-$,n=e.clientY-N;l=Math.max(t.left,Math.min(l,t.right-o.width)),n=Math.max(t.top,Math.min(n,t.bottom-o.height)),g.style.left=`${l-t.left}px`,g.style.top=`${n-t.top}px`}});document.addEventListener("mouseup",()=>{v=!1});let B=document.getElementById("max-number-game-first"),I=document.getElementById("max-number-game-second"),q=document.getElementById("max-number-game-third"),Z=document.querySelector(".max-number-game__resulat");function ee(e,t,o){let l=Math.max(Number(e.value),Number(t.value),Number(o.value));Z.textContent=`Найбільше число, яке ви ввели - (${l})`}[B,I,q].forEach(e=>{e.addEventListener("input",()=>{ee(B,I,q)})});const te=document.querySelector(".team-slider__left-arrow"),ne=document.querySelector(".team-slider__right-arrow"),y=document.querySelectorAll(".team-slider__student-slide"),oe=document.getElementById("team-slider-bottom");let a=0;const f=[];function le(){const e=document.createElement("div");e.classList.add("team-slider__pagination-line"),oe.appendChild(e),f.push(e)}function re(){y.forEach(le),f[0].classList.add("team-slider__pagination-line--active"),f.forEach((e,t)=>{e.addEventListener("click",()=>h(t))})}function se(){f[a].classList.add("team-slider__pagination-line--active")}function ce(){f[a].classList.remove("team-slider__pagination-line--active")}function ae(){y[a].classList.add("team-slider__student-slide--block")}function ie(){y[a].classList.remove("team-slider__student-slide--block")}function h(e){ie(),ce(),a=e,se(),ae()}function de(){let e=a+1;e>y.length-1&&(e=0),h(e)}function ue(){let e=a-1;e<0&&(e=y.length-1),h(e)}re();ne.addEventListener("click",de);te.addEventListener("click",ue);
