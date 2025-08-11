// ex.9 : arrow function expression

const greet = (name) => "Hey, " + name;

const readlineSync = require ('readline-sync');
let input = readlineSync.question("Enter your name: "); 

console.log(greet(input)); 