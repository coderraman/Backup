// const PasswordBox = document.querySelector("#Password");
// const length = 6;
// const Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const Lowercase = "abcdefghijklmnopqrstuvwxyz";
// const specialChar = "!@#$%^&*?/~`.<+-_";
// const num = "0123456789";
// let allchar = Uppercase + Lowercase + num + specialChar;

// function cretePass() {
//   let Password = "";
//   Password += Uppercase[Math.floor(Math.random() * Uppercase.length)];
//   Password += Lowercase[Math.floor(Math.random() * Lowercase.length)];
//   Password += specialChar[Math.floor(Math.random() * specialChar.length)];
//   Password += num[Math.floor(Math.random() * num.length)];

//   while (length>Password.length) {
//       Password += allchar[Math.floor(Math.random()*allchar.length)]
//   }
//   PasswordBox.value = Password;
// }
// function copypass(){
//   PasswordBox.select()
//   document.execCommand("copy")
// }
const PasswordBox = document.querySelector("#Password");
const length = 8;
const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
let num = "0123456789";
let symbols = "!@#$%^&*_-=+";
let allChar = UpperCase + lowerCase + symbols + num;

function cretePass() {
  let Password = "";
  Password +=UpperCase[Math.floor(Math.random() * UpperCase.length)];
  Password +=lowerCase[Math.floor(Math.random() * lowerCase.length)];
  Password +=symbols[Math.floor(Math.random() * symbols.length)];
  Password +=num[Math.floor(Math.random() * num.length)];

  while (length > Password.length) {
    Password +=allChar[Math.floor(Math.random() * allChar.length)];
  }
  PasswordBox.value = Password;
}
