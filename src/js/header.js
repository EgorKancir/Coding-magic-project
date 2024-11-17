const checkBox = document.getElementById("checkbox-style");
const lightType = document.querySelector(".type-page__light")
const darkType = document.querySelector(".type-page__dark")
const ball = document.querySelector(".type-page__ball")
const body = document.body

checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
        lightType.classList.add("inactive");
        ball.classList.add("move");
        darkType.classList.remove("inactive");
        body.classList.remove('theme-light');
        body.classList.add('theme-dark');
    } else {
        darkType.classList.add("inactive");
        lightType.classList.remove("inactive");
        ball.classList.remove("move");
        body.classList.remove('theme-dark');
        body.classList.add('theme-light');
    }
})