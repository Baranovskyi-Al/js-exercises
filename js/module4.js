// ----------------------Module #4

// ------------------Exercise #1

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line
// const result = makePizza();
// const pointer = makePizza;

// ------------------Exercise #2
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }
// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }
// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// ------------------Exercise #3

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }
// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line
// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

// ------------------Exercise #4

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return onError(
//         `There is no pizza with a name ${pizzaName} in the assortment.`
//       );
//     } else {
//       return onSuccess(pizzaName);
//     }
//   },
// };
// // Change code above this line
// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }
// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }
// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// ------------------Exercise #5

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//   orderedItems.forEach(function (number) {
//     totalPrice += number;
//   });
//   // Change code above this line
//   return totalPrice;
// }

// ------------------Exercise #6

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//   numbers.forEach(function (item) {
//     if (item > value) {
//       filteredNumbers.push(item);
//     }
//   });
//   // Change code above this line
//   return filteredNumbers;
// }

// ------------------Exercise #7

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   firstArray.forEach(function (elements) {
//     if (secondArray.includes(elements)) {
//       commonElements.push(elements);
//     }
//   });
//   return commonElements;
//   // Change code above this line
// }

// ------------------Exercise #8

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// };

// ------------------Exercise #9

// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // Change code above this line

// ------------------Exercise #10

// // Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });
//   return totalPrice;
// };
// // Change code above this line

// ------------------Exercise #11

// // Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];
//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   // Change code above this line
//   return filteredNumbers;
// };

// ------------------Exercise #12

// // Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   // Change code above this line
//   return commonElements;
// };

// ------------------Exercise #13

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   numbers.forEach((element) => {
//     if (element % 2 === 0) {
//       newArray.push(element + value);
//     } else {
//       newArray.push(element);
//     }
//   });
//   return newArray;
//   // Change code above this line
// }

// ------------------Exercise #14

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planet) => planet.length);

// ------------------Exercise #15

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line
// const titles = books.map((book) => book.title);

// ------------------Exercise #16

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line
// const genres = books.flatMap((book) => book.genres);

// ------------------Exercise #17

// // Change code below this line
// const getUserNames = (users) => {
//   const userNames = users.map((user) => user.name);
//   return userNames;
// };
// // Change code above this line

// ------------------Exercise #18

// // Change code below this line
// const getUserEmails = (users) => {
//   const userEmails = users.map((user) => user.email);
//   return userEmails;
// };
// // Change code above this line

// ------------------Exercise #19

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);

// ------------------Exercise #20

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (book, index, array) => array.indexOf(book) === index
// );

// ------------------Exercise #21

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line
// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// ------------------Exercise #22

// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//   const userEyeColor = users.filter((user) => user.eyeColor === color);
//   return userName;
// };
// // Change code above this line

// ------------------Exercise #23

// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
//  const userAge = users.filter((user) => user.age > minAge && user.age < maxAge);
//    return userAge;
// };
// // Change code above this line

// ------------------Exercise #24

// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//    const userWithFriend = users.filter((user) => user.friends.includes(friendName));
//   return userWithFriend;
// };
// // Change code above this line

// ------------------Exercise #25

// // Change code below this line
// const getFriends = (users) => {
//   const allFriends = users.flatMap((user) => user.friends);
//   const uniqueFriends = allFriends.filter(
//     (user, index, array) => array.indexOf(user) === index
//   );
//   return uniqueFriends;
// };
// // Change code above this line

// ------------------Exercise #26

// // Change code below this line
// const getActiveUsers = (users) => {
//    const activeUsers = users.filter (user => user.isActive === true);
//   return activeUsers;
// };
// // Change code above this line

// ------------------Exercise #27

// // Change code below this line
// const getInactiveUsers = (users) => {
//   const inactiveUsers = users.filter((user) => user.isActive === false);
//   return inactiveUsers;
// };
// // Change code above this line

// ------------------Exercise #28

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line
// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);

// ------------------Exercise #29

// // Change code below this line
// const getUserWithEmail = (users, email) => {
//   const userWithEmail = users.find(user => user.email === email);
//   return userWithEmail;
// };
// // Change code above this line

// ------------------Exercise #30

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);

// ------------------Exercise #31

// // Change code below this line
// const isEveryUserActive = (users) => {
//   const everyUserActive = users.every(user => user.isActive === true);
//   return everyUserActive;
// };
// // Change code above this line

// ------------------Exercise #32

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line
// const anyElementInFirstIsEven = firstArray.some((value) => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((value) => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);

// ------------------Exercise #33

// // Change code below this line
// const isAnyUserActive = users => {
//    const anyUserActive = users.some(user => user.isActive === true);
//    return anyUserActive;
// };
// // Change code above this line

// ------------------Exercise #34

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((value, number) => {
//   return value + number;
// }, 0);
// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// ------------------Exercise #35

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line
// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed;
// }, 0);

// ------------------Exercise #36

// // Change code below this line
// const calculateTotalBalance = (users) => {
//   const totalBalance = users.reduce((total, user) => {
//     return total + user.balance;
//   }, 0);
//   return totalBalance;
// };
// // Change code above this line

// ------------------Exercise #37
// ------------------Exercise #38
// ------------------Exercise #39
// ------------------Exercise #40
// ------------------Exercise #41
// ------------------Exercise #42
// ------------------Exercise #43
// ------------------Exercise #44
// ------------------Exercise #45
// ------------------Exercise #46
// ------------------Exercise #47
// ------------------Exercise #48
