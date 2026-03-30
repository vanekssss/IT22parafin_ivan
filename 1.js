let timeLeft = 0;
let timer = null;
let isRunning = false;

const display = document.getElementById("display");
const message = document.getElementById("message");

function updateDisplay() {
    display.textContent = timeLeft;
}

function startTimer() {
    if (!isRunning) {
        if (timeLeft === 0) {
            const input = document.getElementById("secondsInput").value;
            timeLeft = parseInt(input) || 0;
        }

        if (timeLeft <= 0) return;

        isRunning = true;
        message.textContent = "";

        timer = setInterval(() => {
            timeLeft--;
            updateDisplay();

            if (timeLeft <= 0) {
                clearInterval(timer);
                isRunning = false;
                message.textContent = "Час вийшов!";
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function increaseTime() {
    timeLeft += 10;
    updateDisplay();
}

function decreaseTime() {
    timeLeft = Math.max(0, timeLeft - 10);
    updateDisplay();
}

updateDisplay();