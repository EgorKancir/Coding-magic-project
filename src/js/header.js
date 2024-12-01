const checkBox = document.getElementById("checkbox-style");
const lightType = document.querySelector(".type-page__light")
const darkType = document.querySelector(".type-page__dark")
const ball = document.querySelector(".type-page__ball")
const headerLogoImageLight = document.querySelector(".header__logo-image-light");
const headerLogoImagenNigh = document.querySelector(".header__logo-image-nigh");
const footerLogoImageLight = document.querySelector(".footer__logo-image-light");
const footerLogoImagenNigh = document.querySelector(".footer__logo-image-nigh");
const body = document.body

checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
        lightType.classList.add("inactive");
        ball.classList.add("move");
        darkType.classList.remove("inactive");
        headerLogoImageLight.classList.remove("logo-image--active");
        footerLogoImageLight.classList.remove("logo-image--active");
        headerLogoImagenNigh.classList.add("logo-image--active");
        footerLogoImagenNigh.classList.add("logo-image--active");
        body.classList.remove("theme-light");
        body.classList.add("theme-dark");
    } else {
        darkType.classList.add("inactive");
        lightType.classList.remove("inactive");
        ball.classList.remove("move");
        headerLogoImagenNigh.classList.remove("logo-image--active");
        footerLogoImagenNigh.classList.remove("logo-image--active");
        headerLogoImageLight.classList.add("logo-image--active");
        footerLogoImageLight.classList.add("logo-image--active");
        body.classList.remove("theme-dark");
        body.classList.add("theme-light");
    }
})

// modal
const iconMenu = document.querySelector('.menu-icon');
const selectOption1 = document.getElementById('select-option-1');
const selectOption2 = document.getElementById('select-option-2');
const selectOption3 = document.getElementById('select-option-3');
const firstLink = document.getElementById('nav-first-link');
const secondLink = document.getElementById('nav-second-link');

if (iconMenu) {
    const headerMenu = document.querySelector('.header');
    const menuBody = document.querySelector('.menu-body');
    function closeMenu() {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
    }
    iconMenu.addEventListener("click", closeMenu);
    firstLink.addEventListener("click", closeMenu);
    secondLink.addEventListener("click", closeMenu);
    selectOption1.addEventListener("click", closeMenu);
    selectOption2.addEventListener("click", closeMenu);
    selectOption3.addEventListener("click", closeMenu);
}