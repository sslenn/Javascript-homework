// ex.07 : sum array exercise 

function sumArray(num){
    let sum =0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
const readlineSync = require ('readline-sync');
let input = readlineSync.question("Enter numbers separated by commas: "); 
let arr = input.split(",").map(item => Number(item.trim()));

console.log(sumArray(arr)); 