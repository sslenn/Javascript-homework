// ex.10: create an array of student 
let scores=[10, 60, 90, 75, 90, 30];
let passsedcount = 0;

for(let i =0; i<= scores.length; i++){
    if(scores[i] >= 60){
        passsedcount++;
    }
}
console.log(`Number of students who passed: ${passsedcount}`);