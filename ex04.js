// ex.04: tranfroming Objects with map
const students = [
    {name: "Alice", score: 85},
    {name: "bob",   score: 92},    
    {name: "Charlie",  score: 78},    
];

let result = students.map(students =>`${students.name}: ${students.score >= 80 ? "Passed" : "Failed"}`);
console.log(result);


