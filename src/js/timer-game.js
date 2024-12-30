let saveDateBtn = document.getElementById('timer-save-date-btn');
let timerResult = document.querySelector('.timer-game__result');
let userDateInput = document.getElementById('timer-user-date');
let decorLine = document.querySelector('.timer-game__decor-line');
let countdownInterval;

function startCountdown() {
    clearInterval(countdownInterval);
    decorLine.classList.remove("active-decor-line");
    timerResult.textContent = 'Введіть дату у форматі YYYY-MM-DDTHH:MM';
    timerResult.style.color = 'var(--black-text)';

    let userDate = userDateInput.value.trim();

    if (!userDateInput.value.trim()) {
        timerResult.textContent = 'Будь ласка, введіть дату!';
        timerResult.style.color = 'red';
        return
    }

    let targetDate = new Date(userDate);
    if (isNaN(targetDate.getTime())) {
        timerResult.textContent = 'Введіть коректну дату!';
        timerResult.style.color = 'red';
        return
    }

    const now = new Date();
    if (targetDate <= now) {
        timerResult.textContent = 'Час вичерпано!';
        timerResult.style.color = 'red';
        return;
    }

    clearInterval(countdownInterval);

    function updateCountdown() {
        const now = new Date();
        let difference = targetDate - now;
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60 )) / 1000);
            const formattedTime = `${days} дн. ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            timerResult.textContent = formattedTime;
            decorLine.classList.add("active-decor-line");
        } else {
            timerResult.textContent = 'Час вичерпано!';
            timerResult.style.color = 'red';
            clearInterval(countdownInterval);
        }
    }
    countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
}
saveDateBtn.addEventListener("click", startCountdown);
document.addEventListener("keydown", (event) => {
    if (event.code === "Enter" && document.activeElement === userDateInput) {
        event.preventDefault(); 
        startCountdown(); 
    }
})

// #Observer

const decorLineObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 1
});

decorLineObserver.observe(decorLine);