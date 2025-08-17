// Basic Declarations
var name = "Clint A. Coloscos";
let age = "19";
const PI = 3.1416;
let isStudent = age < 25;

let person = {
  name: name,
  age: age,
  birthday: "April 10, 2006",
  address: {
    street: "123 Main St",
    city: "Sample City",
    country: "Philippines"
  },
  hobbies: ["coding", "gaming", "reading"]
};

let colors = ["red", "blue", "green", "blue", "yellow", "red"];

// Exercise 1: Reverse and Transform
let words = ["apple", "banana", "cherry", "date", "elderberry"];
let transformedWords = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let reversedWord = "";
  
  for (let j = word.length - 1; j >= 0; j--) {
    reversedWord += word[j];
  }
  
  transformedWords.push(reversedWord.toUpperCase());
}

console.log("Transformed words:", transformedWords);

// Exercise 2: Filtering and Counting
let numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28];
let evenAndGreaterThan20 = [];
let count = 0;

for (let number of numbers) {
  if (number % 2 === 0 && number > 20) {
    evenAndGreaterThan20.push(number);
    count++;
  }
}

console.log(`Found ${count} numbers: [${evenAndGreaterThan20}]`);