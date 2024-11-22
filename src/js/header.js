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
const burgerBtn = document.getElementById('burger-btn');
if (iconMenu) {
    const headerMenu = document.querySelector('.header');
    const menuBody = document.querySelector('.menu-body');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
    });
    burgerBtn.addEventListener("click", () => {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
    } )
}