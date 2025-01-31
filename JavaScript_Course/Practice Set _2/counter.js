let counter = document.getElementById("value");
let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");

increaseBtn.addEventListener("click", () => {
  let currentValue = parseInt(counter.textContent);
  counter.textContent = currentValue+1;
  
});

decreaseBtn.addEventListener("click", () => {
    let currentValue = parseInt(counter.textContent)
    if(currentValue>0){
        counter.textContent = currentValue-1;
    }
});
