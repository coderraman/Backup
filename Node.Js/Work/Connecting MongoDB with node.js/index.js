// const express = require("express");
// const users = require("./MOCK_DATA.json");
// const fs = require("fs");

// const app = express();
// const port = 8008;

// app.use(express.urlencoded({ extended: false })); //This a Midalware which is helping the data in body

// app.use((req, res, next) => {
//   console.log("Hello Middleware 1");
//   req.Username = 'Hello IamRaman.dev'
// //   return res.json({msg: 'Hello From Middleware'})
//   next();    //Here we are passing the middleware for next task
// });

// app.use((req, res, next) => {
//     console.log("Hello Middleware 2",req.Username);
//     // return res.end('Hey Its stop')
//     next(); //Here we are passing the middleware for next task
//   });

// //Routing
// app.get("/api/users", (req, res) => {
//   console.log('I am in Routing', req.Username);
//   return res.json(users);
// });

// app.get("/users", (req, res) => {
//   const html = `
//     <ul>
//     ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
//     </ul>
//     `;
//   res.send(html);
// });

// app.get("/api/user/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   return res.json(user);
// });

// //Create User
// app.post("/api/users", (req, res) => {
//   const body = req.body;
//   users.push({ ...body, id: users.length + 1 });
//   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
//     console.log(body);
//     return res.json({ status: "pending" });
//   });
// });

// //Edit User with id
// // app.patch("/api/users/:id", (req, res) => {
// //   const id = Number(req.params.id);
// //   const body = req.body;

// //   const userIndex = users.findIndex((user) => user.id === id);
// //   if (userIndex !== -1) {
// //     users[userIndex] = { ...users[userIndex], ...body };
// //     fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
// //       if (err) {
// //         console.error(err);
// //         return res
// //           .status(500)
// //           .json({ status: "error", message: "Failed to update user" });
// //       }
// //       return res.json({ status: "success", data: users[userIndex] });
// //     });
// //   } else {
// //     return res.status(404).json({ status: "error", message: "User not found" });
// //   }
// // });

// //Delete User with id

// // app.delete("/api/users/:id", (req, res) => {
// //   const id = Number(req.params.id);

// //   const userIndex = users.findIndex((user) => user.id === id);
// //   if (userIndex === -1) {
// //     return res.status(404).json({ status: "error", message: "User not found" });
// //   }

// //   users.splice(userIndex, 1);

// //   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
// //     if (err) {
// //       console.error(err);
// //       return res
// //         .status(500)
// //         .json({ status: "error", message: "Failed to delete user" });
// //     }
// //     res.json({ status: "success", message: "User deleted successfully" });
// //   });
// // });

// app.listen(port, () => console.log("Server has started!"));

//Here we Will Append our Data of body in File

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 8010;

//Connection with mongodb
mongoose
  .connect("mongodb://127.0.0.1:27017/User-1")
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

//Schema_-----
const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
); // Ths Timestamps use for knowing Exect Time and Date of Entery..

//Schema Model --
const User = mongoose.model("user", userSchema);

app.use(express.urlencoded({ extended: false })); //This a Midalware which is helping the data in body

//Routing
//Get Request with Custom Header...
app.get("/api/users", async (req, res) => {
  const AlldbUsers = await User.find({});
  res.setHeader("X-myName", "Raman"); //Here we have set own header
  return res.json(AlldbUsers);
});


//Get Request with HTML Data
app.get("/users", async (req, res) => {
  const AlldbUsers = await User.find({});
  const html = `
    <ul>
    ${AlldbUsers.map(
      (user) => `<li>${user.first_name}: "Email" ${user.email}</li>`
    ).join("")}
    </ul>
    `;
  res.send(html);
});

//Get Request with id
app.get("/api/user/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: "Not Found" });
  }
  console.log(user);
  return res.json(user);
});

//Create User
//Post Request..---
app.post("/api/users", async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender
  ) {
    return res.status(404).json(`${message} "All Field are Required"`);
  }
  const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
  });
  console.log(result);
  return res.status(201).json({ status: "Success" });
});

//Patch Request 
app.patch("/api/user/:id", async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, {
    last_name: "Last_name has updated!",
  });
  return res.json({ Status: "Success" });
});

//Delete Request
app.delete("/api/user/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ Status: "Success" });
});
app.listen(port, () => console.log(`Server has started! PORT : ${port}`));

//In this Series we download nodemon also for get rid off server start again and again..._-
//After installing we have to put nodemon index.js in Script object in package.json___
