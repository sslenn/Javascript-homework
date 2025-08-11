// ex.03 : multiple arguments exercises
function isSnakeEyes(a, b){
    if(a == 1 & b == 1){
        console.log("Snake Eyes");
    }else{
        console.log("Not Snake Eyes");
    }
}
const readlinesync = require("readline-sync");
let num1 = Number(readlinesync.question("Enter a: "));
let num2 = Number(readlinesync.question("Enter b: "));

isSnakeEyes(num1,num2);