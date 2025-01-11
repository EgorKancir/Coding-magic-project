const modal = document.querySelector(".subscribe-modal");
const userIdText = document.querySelector(".subscribe-modal__user-id");
const closeBtn = document.querySelector(`.subscribe-modal__close-btn[data-modal="close-subscribe-modal"]`);
let userEmail = document.getElementById("footer-user-email");
const subscribeBtn = document.querySelector(".footer__form-submit");
const backdrop = document.querySelector(".greeting-modal__backdrop");
import { nanoid } from 'nanoid'
import * as basicLightbox from 'basiclightbox';


function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}
function sendEmail(event) {
    event.preventDefault(); 
    const newUserEmail = userEmail.value.trim();
    if (validateEmail(newUserEmail)) {
        console.log(`Email нового користувача: "${newUserEmail}".`);
        const id = nanoid(8);
        const modal = basicLightbox.create(`
            <div class="subscribe-modal">
                <button class="subscribe-modal__close-btn" type="button" data-modal="close-subscribe-modal">
                    <svg class="subscribe-modal__close-btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" fill="none">
                        <path d="M1 1L8.5 8.5M16 16L8.5 8.5M8.5 8.5L16 1L1 16" stroke="inherit"/>
                    </svg>
                </button>
                <h2 class="subscribe-modal__title">Дякую за підписку!</h2>
                <p class="subscribe-modal__user-id">Ваш унікальний ID: ${id}</p>
            </div>
        `);
        modal.show();
        document.querySelector('.subscribe-modal__close-btn').addEventListener('click', () => modal.close());
        document.body.style.overflow = 'hidden';
    } else {
        alert('Введіть коректну електронну адресу.');
    }
}

subscribeBtn.addEventListener("click", (event) => {
    sendEmail(event);
});
document.addEventListener("keydown", (event) => {
    if (event.code === "Enter" && document.activeElement === userEmail) {
        event.preventDefault(); 
        sendEmail(event); 
    }
})