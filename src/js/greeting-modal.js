const modal = document.querySelector(".greeting-modal");
const closeBtn = document.querySelector(`.greeting-modal__close-btn[data-modal="close-main-modal"]`);
let userName = document.getElementById("user-name-modal");
const userNameSpan = document.querySelector(".header__welcome-user");
const saveBtn = document.querySelector(".greeting-modal__save-btn");
const backdrop = document.querySelector(".greeting-modal__backdrop");
document.body.style.overflow = 'hidden';

function verification() {
    let newUserName = userName.value;
    let userNameSize = newUserName.length;
    if (userNameSize > 1) {
        console.log(`Новий користувач має ім'я "${newUserName}".`);
        userNameSpan.textContent = newUserName;
        modal.classList.remove('open-modal');
        backdrop.classList.remove('open-modal__activ-backdrop');
        document.body.style.overflow = '';
    } else {
        alert('Введіть текст довший 1 літери');
        return
    }
}
closeBtn.addEventListener("click", () => {
    modal.classList.remove('open-modal');
    backdrop.classList.remove('open-modal__activ-backdrop');
    document.body.style.overflow = '';
})
saveBtn.addEventListener("click", () => {
    verification();
})
document.addEventListener("keydown", (event) => {
    if (event.code === "Enter" && document.activeElement === userName) {
        event.preventDefault();
        verification();
    }    
})