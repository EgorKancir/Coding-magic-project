const userNumber = document.getElementById("user-number");
const saveBtn = document.getElementById("check-number-btn");
const numberResult = document.querySelector(".guess-number__result");

function sendNumber() {
    let numberInput = Number(userNumber.value);
    if (!userNumber.value.trim()) {
        numberResult.textContent = "Будь ласка, введіть число.";
        numberResult.style.color = "red";
        return
    }
    if (isNaN(numberInput) || numberInput < 1 || numberInput > 5) {
        numberResult.textContent = "Упс! Ваше число повинно бути від 1 до 5.";
        numberResult.style.color = "red";
        return
    }
    checkNumber(numberInput);
}
function checkNumber(number) {
    let randomNumber = Math.floor(Math.random() * (6 - 1) + 1); 
    if (randomNumber === number){
        numberResult.textContent = `Вітаю, ви вгадали число! (${randomNumber})`;
        numberResult.style.color = 'green';
    } else {
        numberResult.textContent = `Упс, ви не вгадали. Комп'ютер загадав число (${randomNumber}).`;
        numberResult.style.color = 'orange';
    }
}
saveBtn.addEventListener("click", sendNumber);
document.addEventListener("keydown", (event) => {
    if (event.code === "Enter" && document.activeElement === userNumber) {
        event.preventDefault(); 
        sendNumber(); 
    }
})