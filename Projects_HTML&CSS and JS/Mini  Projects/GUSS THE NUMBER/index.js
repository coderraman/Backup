let form = document.querySelector("form");
let inputValue = document.getElementById("inputValue");
let EndValue = document.querySelector("#EndValue");
let Finaloutput = document.getElementById("Finaloutput");
let newArr = [];
Finaloutput.style.fontFamily = "sans-serif";
Finaloutput.style.fontSize = "1.2rem";
Finaloutput.style.background = "black";
Finaloutput.style.color = "orange";
Finaloutput.style.borderRadius = "15px";
Finaloutput.style.width = "15vw";
Finaloutput.style.display = "none";

let randomNum = Math.floor(Math.random() * 100);
form.addEventListener("submit", (element) => {
  element.preventDefault();
  let result = parseInt(inputValue.value);

  if (randomNum > result) {
    Finaloutput.innerText = "Low Number";
  } else if (randomNum < result) {
    Finaloutput.innerText = "High Number";
  } else {
    Finaloutput.innerText = "Congratulation You Did Well!";
    document.querySelector("#EndValue").innerHTML = "";
  }
  newArr.push(result);
  EndValue.innerText = "Your Guess" + " " + newArr.join(",");
  document.getElementById("inputValue").value = '';
  Finaloutput.style.display = "block";

});
