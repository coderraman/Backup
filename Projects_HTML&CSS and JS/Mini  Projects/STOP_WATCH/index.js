// console.log("Hello World");
let display = document.querySelector("#display");
let Startbtn = document.querySelector("#startStopBtn");
let resetBtn = document.querySelector("#resetBtn");

let timer = null;
let isRunning = false;
let hours = 0,
  minutes = 0,
  seconds = 0;

function formatTime(value) {
  return value < 10 ? "0" + value : value;
}

function updateDisplay() {
  display.innerText =
    formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function startStopwatch() {
  timer = setInterval(function () {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
    updateDisplay();
  }, 1000);
}

function stopStopwatch() {
  clearInterval(timer);
}

startStopBtn.addEventListener("click", () => {
  if (isRunning) {
    stopStopwatch();
    startStopBtn.innerText = "Stop";
  } else {
    startStopwatch();
    startStopBtn.innerText = "Start";
  }
  isRunning = !isRunning;
});

resetBtn.addEventListener("click", () => {
  stopStopwatch();
  isRunning = false;
  startStopBtn.textContent = "Start";
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
});
