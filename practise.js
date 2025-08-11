// // ex.01  : Variables and strings //

// const readlinesync=require("readline-sync");
// let first_name = readlinesync.question("Enter your first name : ");
// let last_name = readlinesync.question("Enter your last name: ");
// console.log("Hello my name is "+first_name+" "+ last_name);

// // ex.02 : Numbers and operators //

// let a = 10;
// let b = 5;
// let c = 2;
// console.log( a*b +c);


// // ex.03 : Boolean & if else //

// let isSunny = true;
// if(isSunny){
//     console.log("wear glasses");
// }else{
//     console.log("Take an umbrella");
// }

// // ex.04  : array  //

// let num=[2,5,16,7,24];
// for(let i =0; i <= num.length; i++){
//     if(num[i]> 10){
//         console.log(num[i]);
//     }
// }

// // ex.05 : Objects //

// let book ={ 
//     title: "JavaScript Basics",
//     author: "Sreypov",
//     pages: 120
// };
// console.log(`The book "${book.title}" by ${book.author} has ${book.pages} pages.`);


// // ex.06 : loops and even numbers //
 
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) { 
//         console.log(i);
//     }
// }


// // ex.07 : loop countdown //

// let count =10;
// while(count >= 1){
//     console.log(count);
//     count--;
// }

// // ex.08 : array methods - for each//

// let numbers = [2, 6, 9, 10, 11];

// numbers.forEach(function(num) {
//     console.log(num * 2);
// });


// // ex.09 
// let strings = " JavaScript is fun! ";

// let trimmed = strings.trim();           
// let uppercased = trimmed.toUpperCase();  

// console.log(uppercased);

// // EX.10 : Count Passed Students //


let scores=[10, 60, 90, 75, 90, 30];
let passsedcount = 0;

for(let i =0; i<= scores.length; i++){
    if(scores[i] >= 60){
        passsedcount++;
    }
}
console.log(`Number of students who passed: ${passsedcount}`);
