console.log("Hello");

const fs = require("fs");

// fs.writeFileSync("./test.txt", "Raman") //It's a sync.. Call

// fs.writeFile("./test.txt", "Raman_Pal", (err)=>{}) //It's a Async.. Call

fs.writeFileSync("./Contact.txt", "Raman: 730341####"); //here we are creating a another File

// const readFileResult = fs.readFileSync('./Contact.txt', "utf-8")
// console.log(readFileResult); //This is Sync.. Method readFileSynnc

// const readFileResult = fs.readFile('./Contact.txt', "utf-8",(err, readFileResult)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(readFileResult);
//     }
// }) // Its a Async.. method AsyncreadFile

// Now Here is appendFile and appendFileSync

// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString()); // This is appendSyc.. Method for Date Now

// fs.appendFileSync("./test.txt",`${Date.now()}"Hey Coder"\n , ${Date()}`) // This is appendSyc.. Method

// Now we can copy this file in another copy file like
// fs.cpSync('./test.txt', "./copy.txt")


//And We can Delete also this copy File like
// fs.unlinkSync('./copy.txt') //This File has Deleted Now


//And One is state method also which gives states like
// const StatRes =  fs.statSync("./test.txt")
// console.log(StatRes);

//And One is mkdir and mkdirSync to make a Folder like
// fs.mkdirSync("./my-doc",) //So Now we have a Doc Folder with name my-doc..

fs.mkdirSync("./my-doc/a/b", {recursive:true}) //So Now we have a Doc Folder with name my-doc..