
// Task 1: Variables

let name = "suhasini";         
const age = 18;   
var isStudent = true;     


console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);



// Task 2: Data Types

let myString = "Hello world";
let myNumber = 10;
let myBoolean = true;
let myNull = null;
let myUndefined;
let myArray = [1,2,3];
let myObject = {city:"Nagpur"};

console.log("String:", myString, "Type:", typeof myString);
console.log("Number:", myNumber, "Type:", typeof myNumber);
console.log("Boolean:", myBoolean, "Type:", typeof myBoolean);
console.log("Null:", myNull, "Type:", typeof myNull);
console.log("Undefined:", myUndefined, "Type:", typeof myUndefined);
console.log("Array:", myArray, "Type:", typeof myArray);
console.log("Object:", myObject, "Type:", typeof myObject);



// Task 3: Water Glass Loop

// For Loop
for(let i=1;i<=5;i++){
    console.log("You have finished glass " + i + " of water");
}
console.log("Water drinking goal completed using for loop");


// while loop
let i=1;
while(i<=5){
    console.log("You have finished glass " + i + " of water");
    i++;
}
console.log("Water drinking goal completed using while loop");


// do while loop
let j=1;
do{
    console.log("You have finished glass " + j + " of water");
    j++;
}while(j<=5);

console.log("Water drinking goal completed using do while loop");



// Task 4: Even Number

for(let n=1;n<=5;n++){
    if(n%2===0){
        console.log("Number " + n + " is even");
    }
}

console.log("Loop with condition completed");


let numArr = [10,20,30,40,50]

console.log(numArr.slice(1,2))
