// ex.05: summarizing data with forEach to calculate the total and los custom mss
const array = [120, 75, 300, 50];

let total = 0;
array.forEach(function (element){   
    total += element;
});

for (let i=0; i<array.length; i++){
    console.log("Expenses recorded is: $",array[i]);
};
console.log("Total is: $", total);  
