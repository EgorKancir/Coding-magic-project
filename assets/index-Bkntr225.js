(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const b of o.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&s(b)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const D=document.querySelector(".greeting-modal"),X=document.querySelector('.greeting-modal__close-btn[data-modal="close-main-modal"]');let z=document.getElementById("user-name-modal");const U=document.querySelector(".greeting-modal__save-btn"),F=document.querySelector(".greeting-modal__backdrop");U.addEventListener("click",()=>{let e=z.value;if(e.length>1)console.log(`Новий користувач має ім'я "${e}".`),D.classList.remove("open-modal"),F.classList.remove("open-modal__activ-backdrop");else{alert("Введіть текст довший 1 літери");return}});X.addEventListener("click",()=>{D.classList.remove("open-modal"),F.classList.remove("open-modal__activ-backdrop")});const I=document.getElementById("checkbox-style"),q=document.querySelector(".type-page__light"),w=document.querySelector(".type-page__dark"),$=document.querySelector(".type-page__ball"),M=document.body;I.addEventListener("change",()=>{I.checked?(q.classList.add("inactive"),$.classList.add("move"),w.classList.remove("inactive"),M.style.backgroundColor="rgb(103, 58, 145)"):(w.classList.add("inactive"),q.classList.remove("inactive"),$.classList.remove("move"),M.style.backgroundColor="#EEE")});let j=document.getElementById("input-year"),N=document.querySelector(".checking-year__result"),J=document.getElementById("check-year-btn");function V(e){e%4===0&&e%100!==0||e%400===0?N.textContent="Ви народилися у високосний рік!":N.textContent="Ви народилися у не високосний рік!"}J.addEventListener("click",()=>{let e=Number(j.value);V(e)});const Q=document.getElementById("user-number"),Z=document.getElementById("check-number-btn"),g=document.querySelector(".guess-number__result");function ee(e){let t=Math.floor(Math.random()*5+1);t===e?(g.textContent=`Вітаю, ви вгадали число! (${t})`,g.style.color="green"):5>=e?(g.textContent=`Упс, ви не вгадали число (${t}).`,g.style.color="orange"):(g.textContent=`Упс, мені здається що число (${e}) більше (5).`,g.style.color="orange")}Z.addEventListener("click",()=>{let e=Number(Q.value);ee(e)});let l=document.querySelector(".ssp-game__result-text");const te=document.querySelector(".ssp-game__btn");let S=document.getElementById("ssp-game__result-computer"),x=document.getElementById("ssp-game__result-user"),_=0,v=0;te.addEventListener("click",()=>{let e=document.querySelector('input[name="ssp-game"]:checked');if(e){let t=e.value;ne(t)}else l.textContent="Будь ласка, виберіть один із варіантів.",l.style.color="orange"});function ne(e){const t=["stone","scissors","paper"];let n=Math.floor(Math.random()*3+0),s=t[n];console.log(n),e==="stone"?s==="scissors"?(v+=1,l.textContent="Ви виграли раунд!",l.style.color="green",x.textContent=`Ви - ${v}`):s==="paper"?(_+=1,l.textContent="Комп’ютер виграв раунд!!",l.style.color="red",S.textContent=`Комп'ютер - ${_}`):(l.textContent="Вау! В вас нічия.",l.style.color="orange"):e==="scissors"?s==="stone"?(_+=1,l.textContent="Комп’ютер виграв раунд!!",l.style.color="red",S.textContent=`Комп'ютер - ${_}`):s==="paper"?(v+=1,l.textContent="Ви виграли раунд!",l.style.color="green",x.textContent=`Ви - ${v}`):(l.textContent="Вау! В вас нічия.",l.style.color="orange"):s==="stone"?(v+=1,l.textContent="Ви виграли раунд!",l.style.color="green",x.textContent=`Ви - ${v}`):s==="scissors"?(_+=1,l.textContent="Комп’ютер виграв раунд!!",l.style.color="red",S.textContent=`Комп'ютер - ${_}`):(l.textContent="Вау! В вас нічия.",l.style.color="orange")}let se=document.querySelector(".calculator-game__resulat");const ie=document.getElementById("calculator-decision");ie.addEventListener("click",()=>{let e=document.getElementById("calculator-first-number"),t=document.getElementById("calculator-second-number"),n=document.querySelector('input[name="calculator-sign"]:checked');e&&t&&n?le(e.value,n.value,t.value):alert("Будь ласка, заповніть всі поля введеня.")});function le(e,t,n){let s;switch(e=Number(e),n=Number(n),t){case"+":s=e+n;break;case"*":s=e*n;break;case"-":s=e-n;break;case"/":s=n!==0?e/n:"ПОМИЛКА";break;default:s="Невідомий знак";break}se.textContent=s}let oe=document.getElementById("timer-save-date-btn"),u=document.querySelector(".timer-game__result"),A;oe.addEventListener("click",re);function re(){u.textContent="YYYY-MM-DDTHH:MM",u.style.color="black";let e=document.getElementById("timer-user-date").value,t=new Date(e);if(isNaN(t.getTime())){u.textContent="Введіть коректну дату!",u.style.color="red";return}function n(){let i=t-new Date;if(i>0){const o=Math.floor(i/864e5),b=Math.floor(i%(1e3*60*60*24)/(1e3*60*60)),W=Math.floor(i%(1e3*60*60)/(1e3*60)),K=Math.floor(i%(1e3*60)/1e3);u.textContent=`${o} дн. ${b}:${W}:${K}`}else u.textContent="Час вичерпано!",u.style.color="red",clearInterval(A)}A=setInterval(n,1e3),n()}const y=document.querySelector(".football-game__ball"),ce=document.querySelector(".football-game");let k=!1,T,G;y.addEventListener("mousedown",e=>{k=!0;const t=y.getBoundingClientRect();T=e.clientX-t.left,G=e.clientY-t.top});document.addEventListener("mousemove",e=>{if(k){const t=ce.getBoundingClientRect(),n=y.getBoundingClientRect();let s=e.clientX-T,i=e.clientY-G;s=Math.max(t.left,Math.min(s,t.right-n.width)),i=Math.max(t.top,Math.min(i,t.bottom-n.height)),y.style.left=`${s-t.left}px`,y.style.top=`${i-t.top}px`}});document.addEventListener("mouseup",()=>{k=!1});let P=document.getElementById("max-number-game-first"),R=document.getElementById("max-number-game-second"),Y=document.getElementById("max-number-game-third"),ae=document.querySelector(".max-number-game__resulat");function de(e,t,n){let s=Math.max(Number(e.value),Number(t.value),Number(n.value));ae.textContent=`Найбільше число, яке ви ввели - (${s})`}[P,R,Y].forEach(e=>{e.addEventListener("input",()=>{de(P,R,Y)})});const ue=document.querySelector(".team-slider__left-arrow"),me=document.querySelector(".team-slider__right-arrow"),p=document.querySelectorAll(".team-slider__student-slide"),fe=document.getElementById("team-slider-bottom");let m=0;const L=[];function ge(){const e=document.createElement("div");e.classList.add("team-slider__pagination-line"),fe.appendChild(e),L.push(e)}function _e(){p.forEach(ge),L[0].classList.add("team-slider__pagination-line--active"),L.forEach((e,t)=>{e.addEventListener("click",()=>B(t))})}function ve(){L[m].classList.add("team-slider__pagination-line--active")}function be(){L[m].classList.remove("team-slider__pagination-line--active")}function ye(){p[m].classList.add("team-slider__student-slide--block")}function Le(){p[m].classList.remove("team-slider__student-slide--block")}function B(e){Le(),be(),m=e,ve(),ye()}function pe(){let e=m+1;e>p.length-1&&(e=0),B(e)}function he(){let e=m-1;e<0&&(e=p.length-1),B(e)}_e();me.addEventListener("click",pe);ue.addEventListener("click",he);const Ee=document.querySelector(".filter-scientists__image-group"),r=Array.from(Ee.children);document.querySelectorAll(".filter-scientists__filter-option-group");const Se=document.querySelector(".filter-scientists__filter-option-left-section"),c=Array.from(Se.children),xe=document.querySelector(".filter-scientists__filter-option-right-section"),a=Array.from(xe.children),C=document.querySelector(".filter-scientists__filter-option-btn-bottom"),f=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}];function h(e){let t=e-1;r[t].classList.add("filter-scientists__active-scientist")}function Ce(e){let t=e-1;r[t].classList.add("filter-scientists__active-scientist-red")}function ke(e){let t=e-1;r[t].classList.add("filter-scientists__remove-scientist")}function d(){r.forEach(e=>{for(let t=0;t<r.length;t++)e.classList.remove(`filter-scientists__image--${t+1}`)});for(let e=0;e<r.length;e++)r[e].classList.add(`filter-scientists__image--${e+1}`);r.forEach(e=>{e.classList.remove("filter-scientists__active-scientist"),e.classList.remove("filter-scientists__active-scientist-red"),e.classList.remove("filter-scientists__image--default"),e.classList.remove("filter-scientists__image--after"),e.classList.remove("filter-scientists__remove-scientist")}),c.forEach(e=>{e.classList.remove("filter-scientists__active-btn")}),a.forEach(e=>{e.classList.remove("filter-scientists__active-btn")}),C.classList.remove("filter-scientists__active-btn")}function Be(e,t,n){for(let s=0;s<e.length;s++)if(e[s].born>t&&e[s].born<n)h(e[s].id);else continue}c[0].addEventListener("click",()=>{d(),Be(f,1801,1900),c[0].classList.add("filter-scientists__active-btn")});const Ie=f.slice(),O=Ie.sort((e,t)=>e.surname<t.surname?-1:e.surname>t.surname?1:0),H=[];for(let e=0;e<O.length;e++)H.push(O[e].id);function qe(e,t){for(let n=0;n<e.length;n++)t[n].classList.remove(`filter-scientists__image--${n+1}`),t[n].classList.add(`filter-scientists__image--${e[n]}`),t[n].classList.add("filter-scientists__image--default")}c[1].addEventListener("click",()=>{d(),qe(H,r),c[1].classList.add("filter-scientists__active-btn")});const E=[];f.forEach(e=>{let t=e.born,n=e.dead,s={age:we(t,n),id:e.id};E.push(s)});function we(e,t){return t-e}E.sort((e,t)=>e.age-t.age);function $e(e,t){for(let n=0;n<e.length;n++)t[n].classList.remove(`filter-scientists__image--${n+1}`),t[n].classList.add(`filter-scientists__image--${e[n].id}`),t[n].classList.add("filter-scientists__image--default")}c[2].addEventListener("click",()=>{d(),$e(E,r),c[2].classList.add("filter-scientists__active-btn")});function Me(e){let t=e[0].born,n=e[0].id;for(let s=0;s<e.length;s++)if(t<e[s].born)t=e[s].born,n=e[s].id;else continue;h(n)}c[3].addEventListener("click",()=>{d(),Me(f),c[3].classList.add("filter-scientists__active-btn")});a[0].addEventListener("click",()=>{d(),r[0].classList.add("filter-scientists__image--after"),a[0].classList.add("filter-scientists__active-btn")});function Ne(e,t){for(let n=0;n<e.length;n++)e[n].surname.split("")[0]===t&&h(e[n].id)}a[1].addEventListener("click",()=>{d(),Ne(f,"C"),a[1].classList.add("filter-scientists__active-btn")});function Ae(e,t){for(let n=0;n<e.length;n++)e[n].name.split("")[0]===t&&ke(e[n].id)}a[2].addEventListener("click",()=>{d(),Ae(f,"A"),a[2].classList.add("filter-scientists__active-btn")});function Pe(e){let t,n;for(let s=0;s<e.length;s++)t=e[0].id,n=e[e.length-1].id;h(t),Ce(n)}a[3].addEventListener("click",()=>{d(),Pe(E),a[3].classList.add("filter-scientists__active-btn")});function Re(e){for(let t=0;t<e.length;t++){let n=e[t].name.split(""),s=e[t].surname.split("");n[0]===s[0]&&h(e[t].id)}}C.addEventListener("click",()=>{d(),Re(f),C.classList.add("filter-scientists__active-btn")});