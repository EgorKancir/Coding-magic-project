const userNumber = document.getElementById("user-number");
const saveBtn = document.getElementById("check-number-btn");
const numberResult = document.querySelector(".guess-number__result");
    
function gameNumber(number) {
    let randomNumber = Math.floor(Math.random() * (6 - 1) + 1); 
    if (randomNumber === number){
        numberResult.textContent = `Вітаю, ви вгадали число! (${randomNumber})`;
        numberResult.style.color = 'green';
    } else if (5 >= number) {
        numberResult.textContent = `Упс, ви не вгадали число (${randomNumber}).`;
        numberResult.style.color = 'orange';
    } else {
        numberResult.textContent = `Упс, мені здається що число (${number}) більше (5).`;
        numberResult.style.color = 'orange';
    }
}
saveBtn.addEventListener("click", () => {
    let numberInput = Number(userNumber.value);
    gameNumber(numberInput);
})