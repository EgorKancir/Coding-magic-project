let decisionResult = document.querySelector(".calculator-game__resulat");
const decisionBtn = document.getElementById("calculator-decision");

decisionBtn.addEventListener("click", () => {
    let userFirstNumber = document.getElementById("calculator-first-number");
    let userSecondNumber = document.getElementById("calculator-second-number");
    let userSign = document.querySelector('input[name="calculator-sign"]:checked');
    if (userFirstNumber && userSecondNumber && userSign) {
        calculator(userFirstNumber.value, userSign.value, userSecondNumber.value);
    } else {
        alert('Будь ласка, заповніть всі поля введеня.')
    }
})
function calculator(firstNum, sign, secondNum) {
    let result;
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    switch (sign) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '/':
            result = secondNum !== 0 ? firstNum / secondNum : 'ПОМИЛКА'
            break;
        default:
            result = "Невідомий знак";
            break;
    }
    decisionResult.textContent = result;
}
