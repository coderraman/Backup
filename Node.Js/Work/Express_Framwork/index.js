const express = require("express");
const app = express();
app.get("/", (req, res) => {
  return res.send(`<div>
        <h1>
        "Hello ${req.query.myname}"
        </h1>
        </div>
        `);
});
app.listen(8005, () => {
  console.log("Server Has Started");
});

//So Here We can write minimum code express make easy to understand the code and help to reduce make comlicated the code and look neat and clean also.

//Express Helps to routing easy and Time save
