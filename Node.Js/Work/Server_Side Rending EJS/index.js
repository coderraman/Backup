// const express = require("express");
// const app = express();
// const port = 8002;

// app.set("view engine", "ejs"); // This is our Template Engine For Setting the variable in HTML file etc..

// app.get("/", (req, res) => {
//   let search = "Search Here";
//   let Code = "CodewithRaman";
//   res.render("index.ejs", { search: search, Code: Code });
// });
// app.listen(port, () => {
//   console.log("Server has Started on Port", `${port}`);
// });

const express = require("express");
const app = express();
const port = 8002;

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  let Code = "CodewithChiku";
  let search = "Search Here";
  res.render("index.ejs", { search: search, Code: Code });
});
app.listen(port, () => {
  console.log("Server is Running on",`${port}`);
});
