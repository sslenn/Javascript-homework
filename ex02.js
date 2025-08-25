// ex.02 : extrct filter with slice  and filter 

const numbers = [5, 12, 8, 130, 44];
let sliced = numbers.slice(1,2,3);
let filtered = numbers.filter(numbers => numbers > 10);

console.log(filtered);
