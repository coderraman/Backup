const express = require("express");
const users = require("./MOCK_DATA.json");
const { stat } = require("fs");

const app = express();
const port = 8007;

//Routing
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
  res.send(html);
});

app.get("/api/user/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user)
});

//Create User
app.post("/api/users",(req,res)=>{
    return res.json({status: "pending"})
})
 
// Edit User with id
app.patch("/api/users/:id",(req,res)=>{
    return res.json({status: "pending"})
})

//Delete User with id

app.delete("/api/users/:id",(req,res)=>{
    return res.json({status: "pending"})
})

app.listen(port, () => console.log("Server has started!"));
