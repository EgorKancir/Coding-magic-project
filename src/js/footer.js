const modal = document.querySelector(".subscribe-modal");
const closeBtn = document.querySelector(`.subscribe-modal__close-btn[data-modal="close-subscribe-modal"]`);
let userEmail = document.getElementById("footer-user-email");
const subscribeBtn = document.querySelector(".footer__form-submit");
const backdrop = document.querySelector(".greeting-modal__backdrop");


function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}
function sendEmail(event) {
    event.preventDefault(); 
    const newUserEmail = userEmail.value.trim();
    if (validateEmail(newUserEmail)) {
        console.log(`Email нового користувача: "${newUserEmail}".`);
        modal.classList.add('open-modal');
        backdrop.classList.add('open-modal__activ-backdrop');
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
closeBtn.addEventListener("click", () => {
    modal.classList.remove('open-modal');
    backdrop.classList.remove('open-modal__activ-backdrop');
    document.body.style.overflow = '';
})