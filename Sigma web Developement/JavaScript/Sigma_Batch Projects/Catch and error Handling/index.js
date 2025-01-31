let a = prompt("Enter Frist Number");
let b = prompt("Enter second Number");
let x = 1;
if (isNaN(a) || isNaN(b)) {
  throw SyntaxError();
}
let sum = parseInt(a) + parseInt(b);
// ParsInt Use to Make Number to a String and value!
function main(){
try {
console.log(sum*x);
return true
// Basically we all know after return syentex our code will be stop here but finally helps to run code after return call also!

} catch (error) {
console.log("There is an error");    
return false
}
// finally help to run code ahead also after return value
finally{
    console.log("Logo ko error Pasand hain kya!");
}
}
main();