// Task 1
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [10, 20, 30];
const result1 = sum(...numbers);
console.log("Task 1 - Sum result:", result1);

// Task 2
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = [...array1, ...array2];
console.log("Task 2 - Merged array:", mergedArray);

// Task 3
const colors = ["red", "green", "blue"];
const extendedColors = ["yellow", ...colors, "purple"];
console.log("Task 3 - Extended colors:", extendedColors);

// Task 4
const person = { name: "John", age: 30 };
const newPerson = { ...person, name: "Jane", gender: "female" };

console.log("Task 4 - person (original):", person);     
console.log("Task 4 - newPerson (modified clone):", newPerson); 

// Task 5
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };

const combinedObject = { ...object1, ...object2 };

console.log("Task 5 - Combined object:", combinedObject);
