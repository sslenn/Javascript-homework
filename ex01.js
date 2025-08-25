// ex01. Array modification with push, pop, splice //
    
// create an array of fruits
const fruits = ['apple', 'banana', 'cherry'];
fruits.push("mango", "organge");
fruits.pop()
fruits.splice(1,1, "grape", "kiwi"); // replace banana with grape and kiwi
console.log(fruits);
