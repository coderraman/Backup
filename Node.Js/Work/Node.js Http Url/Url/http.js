// const http = require("http");
// const fs = require("fs");
// const url = require('url')
// const  server = http.createServer((req, res) => {
//     if(req.url === '/favicon.ico') return res.end()
//   const log = `${Date.now()}: ${req.url} "New Request"\n`;
// const myUrl = url.parse(req.url)
// console.log(myUrl);
//   fs.appendFile("log.txt", log, (err, data) => {
//     switch (req.url) {
//       case "/":
//         res.end("Home");
//         break;
//       case "/home":
//         res.end("I am Raman");
//         break;
//       case "/about":
//         res.end("Developer");
//         break;
//       default:
//         res.end("404 Not Found");
//     }
//   });
// });
// server.listen(8005,(err)=>{
//     console.log("Server Has Started");
// })

const http = require("http");
const fs = require("fs");
const url = require("url");
const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.url} "New Request"\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Home");
        break;
      case "/home":
        const userName = myUrl.query.mynameis;
        res.end(`hy ,${userName}`);
        break;
      case "/about":
        res.end("Developer");
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end("Here is Output " + search);
      default:
        res.end("404 Not Found");
    }
  });
});
server.listen(8005, (err) => {
  console.log("Server Has Started");
});
