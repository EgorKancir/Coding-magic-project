const ball = document.querySelector(".football-game__ball");
const footballField = document.querySelector(".football-game");
let clickMouse = false;
let ballX, ballY, ballPosition;
ball.addEventListener("mousedown", (e) => {
    clickMouse = true;
    const rect = ball.getBoundingClientRect();
    ballX = e.clientX - rect.left;
    ballY = e.clientY - rect.top;
});
document.addEventListener('mousemove', (e) => {
    if (clickMouse) {
        const parentRect = footballField.getBoundingClientRect();
        const elementRect = ball.getBoundingClientRect();
        let newLeft = e.clientX - ballX;
        let newTop = e.clientY - ballY;
        newLeft = Math.max(parentRect.left, Math.min(newLeft, parentRect.right - elementRect.width));
        newTop = Math.max(parentRect.top, Math.min(newTop, parentRect.bottom - elementRect.height));
        ball.style.left = `${newLeft - parentRect.left}px`;
        ball.style.top = `${newTop - parentRect.top}px`;
    }
});
document.addEventListener("mouseup", () => {
    clickMouse = false;
});