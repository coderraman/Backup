const http = require("http");
const fs = require("fs");
const url = require("url");
const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.url} ${req.method} "New Request"\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        if(req.method==="GET") res.end("Home");
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

        case '/singup':
          if(req.method==='GET') res.end('This is Sign in Form') 
            else if(req.method==='POST') res.end('Sucsess')
      default:
        res.end("404 Not Found");
    }
  });
});
server.listen(8005, (err) => {
  console.log("Server Has Started");
});

//HTTP Methods
//Get : When we get any request to our Server and Bydefault Browser take get request
//Put : When we Upload any Image or File at that time we do Put Request
//Patch: Patch When we Update data from Browser
//Post : When we Fill any Form or Sign in at that time we Post Data From Server
//Delete: Delete Data From database