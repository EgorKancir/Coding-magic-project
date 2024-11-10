let saveDateBtn = document.getElementById('timer-save-date-btn');
let timerResult = document.querySelector('.timer-game__result');
let countdownInterval;

saveDateBtn.addEventListener("click", startCountdown);

function startCountdown() {
    timerResult.textContent = 'YYYY-MM-DDTHH:MM';
    timerResult.style.color = 'black';
    let userDate = document.getElementById('timer-user-date').value;
    let targetDate = new Date(userDate);
    if (isNaN(targetDate.getTime())) {
        timerResult.textContent = 'Введіть коректну дату!';
        timerResult.style.color = 'red';
        return
    }
    function updateCountdown() {
        const now = new Date();
        let difference = targetDate - now;
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60 )) / 1000);
            timerResult.textContent = `${days} дн. ${hours}:${minutes}:${seconds}`
        } else {
            timerResult.textContent = 'Час вичерпано!';
            timerResult.style.color = 'red';
            clearInterval(countdownInterval);
        }
    }
    countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
}

