// ex.04 : write a multiplication function

function multiplication(a,b){
    return a*b;
}
const readlinesync = require("readline-sync");
let num1 = Number(readlinesync.question("Enter a: "));
let num2 = Number(readlinesync.question("Enter b: "));

console.log(multiplication(num1,num2));