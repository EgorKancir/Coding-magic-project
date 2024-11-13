const modal = document.querySelector(".subscribe-modal");
const closeBtn = document.querySelector(`.subscribe-modal__close-btn[data-modal="close-subscribe-modal"]`);
let userEmail = document.getElementById("footer-user-email");
const subscribeBtn = document.querySelector(".footer__form-submit");
const backdrop = document.querySelector(".greeting-modal__backdrop");

subscribeBtn.addEventListener("click", () => {
    let newUserEmail = userEmail.value;
    let userEmailSize = newUserEmail.length;
    if (userEmailSize > 1) {
        console.log(`Email нового користувача "${newUserEmail}".`);
        modal.classList.add('open-modal');
        backdrop.classList.add('open-modal__activ-backdrop');
    } else {
        alert('Введіть текст довший 1 літери');
        return
    }
})
closeBtn.addEventListener("click", () => {
    modal.classList.remove('open-modal');
    backdrop.classList.remove('open-modal__activ-backdrop');
})