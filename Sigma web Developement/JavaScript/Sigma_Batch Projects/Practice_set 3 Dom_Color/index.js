console.log("Hello World!");

// document.querySelector("#Box-1").style.backgroundColor = "red";
// document.querySelector("#Box-1").nextElementSibling.style.backgroundColor =
//   "green";

// document.querySelector("#Box-4").style.backgroundColor = "yellow";

// document.querySelector("#Box-4").previousElementSibling.style.backgroundColor =
//   "brown";

// document.querySelector("#Box-4").nextElementSibling.style.backgroundColor =
//   "orange";

document.querySelectorAll(".bx").forEach((e) => {
  e.style.backgroundColor = "orange";
  e.style.color="White"
  e.style.fontSize="1rem"
});
