console.log("This is Promises Code!");

let prom = new Promise((resolve, reject) => {
  let a = Math.random();
  console.log(a);
  if (a < 0.5) {
    reject("Not Valid");
  } else {
    setTimeout(() => {
      console.log("Hello World!");
      resolve("Raman");
    }, 2000);
  }
});
// 
let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  console.log(a);
  if (a < 0.5) {
    reject("Not Valid");
  } else {
    setTimeout(() => {
      console.log("Hello World!");
      resolve("Raman Coder");
    }, 2000);
  }
});
// then & catch
prom
  .then((a) => {
    console.log(a);
  })
  .catch((err) => {
    console.log(err);
  })


// let p1 = Promise.all([prom,prom1]);
// p1.then((a) => {
//   console.log(a);
// }).catch((err) => {
//   console.log(err);
// });

// let p1 = Promise.allSettled([prom,prom1]);
// p1.then((a) => {
//   console.log(a);
// }).catch((err) => {
//   console.log(err);
// });
// let p1 = Promise.resolve([prom,prom1]);
// p1.then((a) => {
//   console.log(a);
// }).catch((err) => {
//   console.log(err);
// });
let p1 = Promise.reject([prom,prom1]);
p1.then((a) => {
  console.log(a);
}).catch((err) => {
  console.log(err);
});

