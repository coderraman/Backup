// const http = require('http')
// const server = http.createServer((req,res)=>{
//     console.log("request to Server");
//     res.end("Response From Server")
// })
// server.listen(8001,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Server is Started");
//     }
// })

// const http = require("http");
// const server = http.createServer((req,res)=>{
//     console.log("Request to Server", req.headers); //Header use for knowng aditional information about request
//     res.end("Hello From Server")
// });
// server.listen(8002,(err)=>{
//     console.log("Server has Started");
// })

// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req, res) => {
//   const log = `${Date.now()}:"New Request"\n`;
//   fs.appendFile("./log.txt", log, (err, data) => {
//     res.end("Hello Coder From Server");
//   });
// });
// server.listen(8003,(err)=>{
//     console.log("Server is Runing");
// })

const http = require("http");
const fs = require("fs");
const  server = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} "New Request"\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home");
        break;
      case "/home":
        res.end("I am Raman");
        break;
      case "/about":
        res.end("Developer");
        break;
      default:
        res.end("404 Not Found");
    }
  });
}); 
server.listen(8005,(err)=>{
    console.log("Server Has Started");
})

