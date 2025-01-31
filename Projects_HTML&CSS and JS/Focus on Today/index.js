let input_fill = document.querySelectorAll(".input-fill");
let input = document.querySelectorAll("input").value;
let circles = document.querySelectorAll(".circle");
circles.forEach((circle) => {
  circle.addEventListener("click", (e) => {
    const Allinput = [...input].every((e) => {
      return input.value;
    });

    if (Allinput) {
      document.querySelector(".circle").style.backgroundColor = "green";
      document.querySelector("input").style.backgroundColor = "orange";
    } else {
    }
  });
});
