let decisionResult = document.querySelector(".calculator-game__resulat");
const decisionBtn = document.getElementById("calculator-decision");

function sendData() {
    let userFirstNumber = document.getElementById("calculator-first-number");
    let userSecondNumber = document.getElementById("calculator-second-number");
    let userSign = document.querySelector('input[name="calculator-sign"]:checked');
    if (!userFirstNumber.value.trim() || !userSecondNumber.value.trim() || !userSign) {
        alert('Будь ласка, заповніть всі поля введеня.');
        return
    } else if (!isNaN(Number(userFirstNumber.value)) && !isNaN(Number(userSecondNumber.value))) {
        calculator(userFirstNumber.value, userSign.value, userSecondNumber.value);
    } else {
        alert('Данні введено не вірно! Всі данні повинні бути числами.')
        return
    }
}
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
decisionBtn.addEventListener("click", sendData);