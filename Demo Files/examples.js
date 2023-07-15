// Example 1: Map Function

const numbers1 = [1, 2, 3, 4, 5];

const doubledNumbers = numbers1.map((num) => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


// Example 2: Reduce Function

const numbers2 = [1, 2, 3, 4, 5];

const sum = numbers2.reduce((acc, num) => acc + num, 0);

console.log(sum); // Output: 15


// Example 3: Filter Function

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]


// Example 4: Spread Operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];

console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]


// Example 5: Destructuring Assignment

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

const { name, age, city } = person;

console.log(name, age, city); // Output: John 30 New York


// Example 6: Arrow Function

const multiply = (a, b) => a * b;

console.log(multiply(2, 3)); // Output: 6


// Example 7: Template Literals

const myName = "Pavitra Prabhakar";
const myAge = 24;

const message = `Hi! My name is ${myName} and I'm ${myAge} years old.`;

console.log(message); // Output: Hi! My name is Pavitra Prabhakar and I'm 24 years old.