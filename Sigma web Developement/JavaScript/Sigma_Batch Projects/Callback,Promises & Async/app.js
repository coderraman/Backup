console.log("Hello World!");

console.log("Hello Coders!");

setTimeout(() => {
  alert("RAMAN");
}, 2000);

const callback = (argu, sc) => {
  console.log("Hello Coders");
};
const loadScript = (src, calback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Raman");
  document.head.append(sc);
};
loadScript("app.js", callback);
