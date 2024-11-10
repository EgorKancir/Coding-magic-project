let firstNumber = document.getElementById("max-number-game-first");
let secondNumber = document.getElementById("max-number-game-second");
let thirdNumber = document.getElementById("max-number-game-third");
let resultText = document.querySelector(".max-number-game__resulat");

function maxNumberFunc(first, second, third) {
    let maxNumber = Math.max(Number(first.value), Number(second.value), Number(third.value));
    resultText.textContent = `Найбільше число, яке ви ввели - (${maxNumber})`;
};
[firstNumber, secondNumber, thirdNumber].forEach(inputField => {
    inputField.addEventListener("input", () => {
        maxNumberFunc(firstNumber, secondNumber, thirdNumber);
    })
});
    

