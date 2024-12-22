const ball = document.querySelector(".football-game__ball");
const footballField = document.querySelector(".football-game");

let isDragging = false;
let ballX, ballY, ballPosition;

function startDragging(e) {
    isDragging = true;
    ballPosition = ball.getBoundingClientRect();
    const clientX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === "touchstart" ? e.touches[0].clientY : e.clientY;
    ballX = clientX - ballPosition.left - ballPosition.width / 2;
    ballY = clientY - ballPosition.top - ballPosition.height / 2;
}

function moveBall(e) {
    if (!isDragging) return;
    const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === "touchmove" ? e.touches[0].clientY : e.clientY;
    const newLeft = clientX - ballX;
    const newTop = clientY - ballY;
    const fieldRect = footballField.getBoundingClientRect();
    const ballDiameter = ball.offsetWidth;
    const minLeft = fieldRect.left;
    const maxLeft = fieldRect.right - ballDiameter;
    const minTop = fieldRect.top;
    const maxTop = fieldRect.bottom - ballDiameter;
    ball.style.transform = "none";
    ball.style.left = `${Math.min(Math.max(newLeft, minLeft), maxLeft) - fieldRect.left}px`;
    ball.style.top = `${Math.min(Math.max(newTop, minTop), maxTop) - fieldRect.top}px`;
}

function stopDragging() {
    isDragging = false;
}
ball.addEventListener("mousedown", startDragging);
document.addEventListener("mousemove", _.throttle((event) => {
    moveBall(event);
    }, 20)
);
// document.addEventListener("mousemove", moveBall);
document.addEventListener("mouseup", stopDragging);

ball.addEventListener("touchstart", startDragging);
document.addEventListener("touchmove", _.throttle((event) => {
    moveBall(event);
    }, 20)
);
// document.addEventListener("touchmove", moveBall);
document.addEventListener("touchend", stopDragging);