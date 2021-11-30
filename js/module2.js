// ----------------------Module #2

// ------------------Exercise #1

// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return "You are an adult";
//   }
//   return "You are a minor";
// }

// ------------------Exercise #2

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";
//   // Change code above this line
// }

// ------------------Exercise #3

// function checkStorage(available, ordered) {
//   // Change code below this line
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";
//   // Change code above this line
// }

// ------------------Exercise #4

// // Change code below this line
// const fruits = ["apple", "plum", "pear", "orange"];

// ------------------Exercise #5

// const fruits = ["apple", "plum", "pear", "orange"];
// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// ------------------Exercise #6

// const fruits = ["apple", "plum", "pear", "orange"];
// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";

// ------------------Exercise #7

// const fruits = ["apple", "peach", "pear", "banana"];
// // Change code below this line
// const fruitsArrayLength = fruits.length;

// ------------------Exercise #8

// const fruits = ["apple", "peach", "pear", "banana"];
// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// ------------------Exercise #9

// function getExtremeElements(array) {
//   // Change code below this line
//   const extremeElements = [array[0], array[array.length - 1]];
//   return extremeElements;
//   // Change code above this line
// }

// ------------------Exercise #10

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }

// ------------------Exercise #11

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   const words = message.split(" ");
//   let EngravingPrice = words.length * pricePerWord;
//   return EngravingPrice;
//   // Change code above this line
// }

// ------------------Exercise #12

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimeter);
//   // Change code above this line
//   return string;
// }

// ------------------Exercise #13

// function slugify(title) {
//   // Change code below this line
//   let slug;
//   const slugArray = title.toLowerCase().split(" ");
//   slug = slugArray.join("-");
//   return slug;
//   // Change code above this line
// }

// ------------------Exercise #14

// const fruits = ["apple", "plum", "pear", "orange", "banana"];
// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// ------------------Exercise #15

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients); // Change this line

// ------------------Exercise #16

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const array = firstArray.concat(secondArray).slice(0, maxLength);
//   return array;
//   // Change code above this line
// }

// ------------------Exercise #17

// const start = 3;
// const end = 7;
// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

// ------------------Exercise #18

// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//     total += i;
//   }
//   return total;
//   // Change code above this line
// }

// ------------------Exercise #19

// const fruits = ["apple", "plum", "pear", "orange"];
// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// ------------------Exercise #20

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }

// ------------------Exercise #21

// function findLongestWord(string) {
//   // Change code below this line
//   const stringSplit = string.split(" ");
//   let longestWord = "";
//   for (const word of stringSplit) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
//   // Change code above this line
// }

// ------------------Exercise #22

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }

// ------------------Exercise #23

// function filterArray(numbers, value) {
//   // Change code below this line
//   let maxNumbers = [];
//   for (const pushNumbers of numbers) {
//     // console.log(pushNumbers);
//     if (value < pushNumbers) {
//       maxNumbers.push(pushNumbers);
//     }
//   }
//   return maxNumbers;
//   // Change code above this line
// }

// ------------------Exercise #23 - ALTERNATIVE

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
//   // Change code above this line
// }

// ------------------Exercise #24

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   return fruits.includes(fruit); // Change this line
// }

// ------------------Exercise #25

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let array3 = [];
//   let pushedElement = 0;
//   for (const element of array1) {
//     if (array2.includes(element)) {
//       pushedElement = element;
//       array3.push(pushedElement);
//     }
//   }
//   return array3;
//   // Change code above this line
// }

// ------------------Exercise #26

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (const price of order) {
//     total += price;
//   }
//   // Change code above this line
//   return total;
// }

// ------------------Exercise #27

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];
//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
//   // Change code above this line
// }

// ------------------Exercise #28

// // Change code below this line
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;
