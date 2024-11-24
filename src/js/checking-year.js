let userYear = document.getElementById("input-year");
let resultYear = document.querySelector(".checking-year__result");
let checkButton = document.getElementById("check-year-btn");

function sendYear() {
    let year = Number(userYear.value);
    if (!userYear.value.trim()) {
        resultYear.textContent = "Будь ласка, введіть рік.";
        resultYear.style.color = "red";
    } else if (!isNaN(year) && year >= 1900 && year <= 2025) {
        checkYear(year);
    } else {
        resultYear.textContent = "Упс! Ваш рік повинен бути реальним.";
        resultYear.style.color = "red";
    }
}
function checkYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) === true) {
        resultYear.textContent = 'Ви народилися у високосний рік!';
        resultYear.style.color = "#039900";
    } else {
        resultYear.textContent = 'Ви народилися у не високосний рік!';
        resultYear.style.color = "#039900";
    }
}
checkButton.addEventListener("click", sendYear);
document.addEventListener("keydown", (event) => {
    if (event.code === "Enter" && document.activeElement === userYear) {
        event.preventDefault(); 
        sendYear(); 
    }
})