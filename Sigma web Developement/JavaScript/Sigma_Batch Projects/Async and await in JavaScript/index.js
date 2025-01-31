// it's a callback
// console.log(data);
// data.then((value) => {
//   console.log("Procces Data");
// });

// Promise Resolve Means : Promise has settled  succesfully
// Promise Reject Means: Promise has not Settled succesfully


async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello Coders ");
    }, 3000);
  });
}


// fetch API
// In fetch API we use Two "await" function and use json() function and "Text" also for getting data in string
// fetch API already builtin in JavaScript
// Fetch API main 2 await data lane or parse karne ke liye use hota hain
// Note: if we not write await before call so data would not show

async function getData(){
   let fetchApi =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
      let data = await fetchApi.text()
      console.log(data);
}



async function main() {
  console.log("Hello World");
  console.log("Welcome in Codeworld");
  data = await getData();
  console.log(data);
  console.log("Love javaScript");
}

main();

// post request and get request
// Post request basically use for submit data like form
// same like we use put request for"update" and delete request "for delete in server"
// Example POST method implementation:*********
// async function postData(url = "", data = {}) {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },

//       body: JSON.stringify(data),
//     });
//     return response.json();
//   }

//   postData("https://example.com/answer", { answer: 42 }).then((data) => {
//     console.log(data);
//   });


  async function getData(){
   let fetchApi = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })  
         let data = await fetchApi.json()
       console.log(data);
 }

