// let arr = [1, 2, 3, 4, 5, 6];
// let fact = (x, y) => {
//   return x * y;
// };
// alert(arr.reduce(fact));
// console.log(arr.reduce(fact));

// let a = 6;
// function fact(fac) {
//   let result = Array.from(Array(fac + 1).keys());
//   console.log(result.slice(1));
//   let c = result.slice(1).reduce((a, b) => {
//     return a * b;
//   });
//   console.log(c);
// }

// function forfac(num) {
//   let arr = 1;
//   for (let index = 1; index <= num; index++) {
//     arr = arr * index;
//   }
//   return arr

// }
// console.log(forfac(a));
// console.log(fact(a));

let x = 9;

function gajab(num) {
  let arrr = Array.from(Array(num + 1).keys());
  console.log(arrr.slice(1));
  let result = arrr.slice(1).reduce((x, y) => {
    return x * y;
  });
  console.log(result);
}

function facfor(ind) {
  let cat = 1;
  for (let index = 1; index <= ind; index++) {
    cat = cat * index;
  }
  return cat;
}
console.log(gajab(x));
console.log(facfor(x));
