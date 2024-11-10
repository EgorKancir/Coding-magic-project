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
        body.style.backgroundColor = 'rgb(103, 58, 145)';
    } else {
        darkType.classList.add("inactive");
        lightType.classList.remove("inactive");
        ball.classList.remove("move");
        body.style.backgroundColor = '#EEE';
    }
})
