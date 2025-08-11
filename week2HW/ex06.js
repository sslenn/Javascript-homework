// ex.6 Last element exercise 
function lastElement(arr) {
    if (arr.length === 0) {
        return null;
    }
    return arr[arr.length - 1];
}
const readlineSync = require("readline-sync");

let input = readlineSync.question("Enter numbers separated by commas: "); 
let arr = input.split(",").map(item => Number(item.trim()));
console.log(arr); 
