// spread operator
let oddNumbers = [1, 3, 5, 7, 9];
let evenNumbers = [2, 4, 6, 8, 10];

let numbers = [...oddNumbers, ...evenNumbers];
console.log(numbers);

function add(...nums) {
  console.log(nums);
}

add(1, 2, 3, 4, 5);

// arrow function
let square = (a) => a * a;
console.log(square(5));

const addNumbers = (a, b) => {
  a = square(a);
  b = square(b);
  return a + b;
};

const person = { name: "John", age: 30 };
const updatedPerson = (age) => ({ ...person, age });
console.log(updatedPerson(35));

// callback - async
// js - High, oops, dynamically typed, intrepreted programming language.
// async, non blocking i/o, single thread.

// callback - function passed as an argument to another function

const sqCalc = (a, b, callback) => {
  a = a * a;
  b = b * b;
  return callback(a, b);
};

console.log(sqCalc(2, 3, (a, b) => a + b));
console.log(sqCalc(2, 3, (a, b) => a - b));
console.log(sqCalc(2, 3, (a, b) => a * b));

// asyn
console.log("Start");

setTimeout(() => {
  console.log("3000");
}, 3000);

setTimeout(() => {
  console.log("Zero");
}, 0);

setTimeout(() => {
  console.log("5000");
}, 5000);

console.log("End");

// left arrow right

// ()      =>  {}

// para         func body
//                 implicit return X{}, return ({})
//                 explicit return Y{}
