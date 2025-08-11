// ex.08 : Days of the week 

function returnDay(num){
    let days =["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ];
    if(num >=1 && num <=7){
        return days[num-1];
    }else {
        return null;
    }
}
const readlineSync = require ('readline-sync');
let input =number(readlineSync.question("Enter numbers of the day(1-7): ")); 

console.log(returnDay(input));