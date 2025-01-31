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
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const message = "Output is :";

const app = express();
const port = 8010;

app.use(express.urlencoded({ extended: false })); //This a Midalware which is helping the data in body

app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `\n${Date.now()}: ${req.method}: ${req.path}: ${req.ip} \n`,
    (err, data) => {
      next();
    }
  );
});

//Routing
app.get("/api/users", (req, res) => {
  res.setHeader("X-myName", "Raman"); //Here we have set own header
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
  if(!user){
    return res.status(404).json({message : "Not Found"})
  }
  console.log(user);
  return res.json(user);
});

//Create User
app.post("/api/users", (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender
  ) {
    return res.status(404).json(`${message} "All Field are Required"`);
  } else {
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      if(err){
        return res.status(500).json({status: 'Error', error: err})
      }
      return res.status(201).json({ status: "Success", id: users.length });
    });
  }
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

app.listen(port, () => console.log(`Server has started! PORT : ${port}`));

//In this Series we download nodemon also for get rid off server start again and again..._-
//After installing we have to put nodemon index.js in Script object in package.json___
