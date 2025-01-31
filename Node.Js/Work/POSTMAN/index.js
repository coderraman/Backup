const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const port = 8007;

app.use(express.urlencoded({ extended: false })); //This a Midalware which is helping the data in body

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
  console.log(user);
  return res.json(user);
});

//Create User
app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    console.log(fs.appendFile('./MOCK_DATA.json',JSON.stringify));
    return res.json({ status: "Success" });
  });
});

//Edit User with id
// app.patch("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const body = req.body;

//   const userIndex = users.findIndex((user) => user.id === id);
//   if (userIndex !== -1) {
//     users[userIndex] = { ...users[userIndex], ...body };
//     fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
//       if (err) {
//         console.error(err);
//         return res
//           .status(500)
//           .json({ status: "error", message: "Failed to update user" });
//       }
//       return res.json({ status: "success", data: users[userIndex] });
//     });
//   } else {
//     return res.status(404).json({ status: "error", message: "User not found" });
//   }
// });

//Delete User with id

// app.delete("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);

//   const userIndex = users.findIndex((user) => user.id === id);
//   if (userIndex === -1) {
//     return res.status(404).json({ status: "error", message: "User not found" });
//   }

//   users.splice(userIndex, 1);

//   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
//     if (err) {
//       console.error(err);
//       return res
//         .status(500)
//         .json({ status: "error", message: "Failed to delete user" });
//     }
//     res.json({ status: "success", message: "User deleted successfully" });
//   });
// });

app.listen(port, () => console.log("Server has started!"));
