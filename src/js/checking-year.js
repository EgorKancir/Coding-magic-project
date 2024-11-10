let userYear = document.getElementById("input-year");
let resultYear = document.querySelector(".checking-year__result");
let checkButton = document.getElementById("check-year-btn");
function checkYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) === true) {
        resultYear.textContent = 'Ви народилися у високосний рік!';
    } else {
        resultYear.textContent = 'Ви народилися у не високосний рік!';
    }
}
checkButton.addEventListener("click", () => {
    let year = Number(userYear.value);
    checkYear(year);
})