// ex.10: function expression //
const square = function (num){
    return  num * num;
} 

const readlineSync = require ('readline-sync');
let input = Number(readlineSync.question("Enter a number: ")); 

console.log(square(input)); 
