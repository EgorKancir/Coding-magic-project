let resultGame = document.querySelector('.ssp-game__result-text');
const saveBtn = document.querySelector('.ssp-game__btn');
let compWinResult = document.getElementById('ssp-game__result-computer');
let userWinResult = document.getElementById('ssp-game__result-user');
let numberCompWin = 0;
let numberUserWin = 0;

function sendOption() {
    let userOption = document.querySelector('input[name="ssp-game"]:checked');
    if (userOption) {
        let userOptionValue = userOption.value;
        sspGame(userOptionValue);
    } else {
        resultGame.textContent = 'Будь ласка, виберіть один із варіантів.';
        resultGame.style.color = 'orange';
    }
}
function sspGame(userElement) {
    const elementArr = ['stone', 'scissors', 'paper'];
    let randomNumber = Math.floor(Math.random() * (3 - 0) + 0); 
    let compOption = elementArr[randomNumber];
    if (userElement === 'stone') {
        if (compOption === 'scissors') {
            numberUserWin += 1;
            resultGame.textContent = 'Ви виграли раунд!';
            resultGame.style.color = 'green';
            userWinResult.textContent = `Ви - ${numberUserWin}`;
        } else if (compOption === 'paper') {
            numberCompWin += 1;
            resultGame.textContent = 'Комп’ютер виграв раунд!!';
            resultGame.style.color = 'red';
            compWinResult.textContent = `Комп'ютер - ${numberCompWin}`;  
        } else {
            resultGame.textContent = 'Вау! В вас нічия.';
            resultGame.style.color = 'orange';
        }
    } else if (userElement === 'scissors') {
        if (compOption === 'stone') {
            numberCompWin += 1;
            resultGame.textContent = 'Комп’ютер виграв раунд!!';
            resultGame.style.color = 'red';
            compWinResult.textContent = `Комп'ютер - ${numberCompWin}`; 
        } else if (compOption === 'paper') {
            numberUserWin += 1;
            resultGame.textContent = 'Ви виграли раунд!';
            resultGame.style.color = 'green';
            userWinResult.textContent = `Ви - ${numberUserWin}`;
        } else {
            resultGame.textContent = 'Вау! В вас нічия.';
            resultGame.style.color = 'orange';
        }
    } else {
        if (compOption === 'stone') {
            numberUserWin += 1;
            resultGame.textContent = 'Ви виграли раунд!';
            resultGame.style.color = 'green';
            userWinResult.textContent = `Ви - ${numberUserWin}`;
        } else if (compOption === 'scissors') {
            numberCompWin += 1;
            resultGame.textContent = 'Комп’ютер виграв раунд!!';
            resultGame.style.color = 'red';
            compWinResult.textContent = `Комп'ютер - ${numberCompWin}`; 
        } else {
            resultGame.textContent = 'Вау! В вас нічия.';
            resultGame.style.color = 'orange';
        }
    }
}

saveBtn.addEventListener("click", sendOption);