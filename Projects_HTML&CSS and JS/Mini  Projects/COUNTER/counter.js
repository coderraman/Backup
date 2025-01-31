let head = document.querySelector(".head");
let PlusButton = document.getElementById("plusButton");
let minusButton = document.getElementById("minusButton");
let input = document.querySelector("#inputValue");
let resetButton = document.getElementById("resetButton");

PlusButton.addEventListener("click", () => {
  let Num = parseInt(head.innerText);
  if (!document.querySelector("#inputValue").value == "") {
    const finalValue = parseInt(input.value);
    head.innerHTML = Num + finalValue;
  }
});
minusButton.addEventListener("click", () => {
  let Num = parseInt(head.innerText);
  if (Num > 0) {
    const finalValue = parseInt(input.value);
    head.innerHTML = Num - finalValue;
  }
});

resetButton.addEventListener("click", () => {
  head.innerText = 0;
  document.querySelector("#inputValue").value = "";
});
