console.log("Hello World!");



// Note We can not put css in Html it works only on elements so here we have to do Following!
// document.querySelectorAll(".box").style.backgroundColor="green"

document.querySelectorAll(".box").forEach((e) => {
  e.style.backgroundColor = "green";
});
document.getElementById("Box-3").style.backgroundColor = "Orange";

