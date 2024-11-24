let firstNumber = document.getElementById("max-number-game-first");
let secondNumber = document.getElementById("max-number-game-second");
let thirdNumber = document.getElementById("max-number-game-third");
let resultText = document.querySelector(".max-number-game__resulat");

function maxNumberFunc(first, second, third) {
    let firstValue = Number(first.value);
    let secondValue = Number(second.value);
    let thirdValue = Number(third.value);

    if (isNaN(firstValue) || isNaN(secondValue) || isNaN(thirdValue)) {
        resultText.textContent = "Помилка!";
        resultText.style.color = "red";
        return
    }

    let maxNumber = Math.max(firstValue, secondValue, thirdValue);
    resultText.textContent = `Найбільше число, яке ви ввели - (${maxNumber})`;
    resultText.style = "black";
    
};
[firstNumber, secondNumber, thirdNumber].forEach(inputField => {
    inputField.addEventListener("input", () => {
        maxNumberFunc(firstNumber, secondNumber, thirdNumber);
    });
});
    

