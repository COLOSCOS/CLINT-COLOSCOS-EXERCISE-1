
var name = "Clint A. Coloscos";
let age = "19";
const PI = 3.1416;
let isStudent = age < 25;

let person = {
  name: name,
  age: age,
  birthday: "April 10, 2006",
  address: {
    street: "New loon",
    city: "Davao City",
    country: "Philippines"
  },
  hobbies: ["drawing", "cycling", " billaird"]
};

let colors = ["red", "blue", "green", "blue", "yellow", "red"];


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