// ex.05 : 
function isShortWeather(temp){
   return temp >= 35;
}
const readlinesync = require("readline-sync");
let num = readlinesync.question("Enter a degree : ");

if(isShortWeather(num)){
    console.log("True");
}else{
    console.log("False");
}