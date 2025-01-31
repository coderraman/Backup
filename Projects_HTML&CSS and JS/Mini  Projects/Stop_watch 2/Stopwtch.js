let Time = document.querySelector(".time");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");
let [Minutes, Seconds, Hours] = [0, 0, 0];
let intvalue = null;

function displayTime() {
  Seconds++;
  if (Seconds === 60) {
    Seconds = 0;
    Minutes++;
    if (Minutes === 60) {
      Minutes = 0;
      Hours++; 
    }
  }

  let h = Hours < 10 ? "0" + Hours : Hours;
  let m = Minutes < 10 ? "0" + Minutes : Minutes;
  let s = Seconds < 10 ? "0" + Seconds : Seconds;

  Time.innerHTML = `${h}:${m}:${s}`;
}
startBtn.addEventListener("click", () => {
  if (intvalue !== null) {
    clearInterval(intvalue);
  } else {
    intvalue = setInterval(displayTime, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(intvalue);
  intvalue = null;
  
});

resetBtn.addEventListener("click", () => {
  clearInterval(intvalue);
  intvalue = null;
  Time.innerHTML = "00:00:00";
});
