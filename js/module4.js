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
// ------------------Exercise #10
// ------------------Exercise #11
// ------------------Exercise #12
// ------------------Exercise #13
// ------------------Exercise #14
// ------------------Exercise #15
// ------------------Exercise #16
// ------------------Exercise #17
// ------------------Exercise #18
// ------------------Exercise #19
// ------------------Exercise #20
// ------------------Exercise #21
// ------------------Exercise #22
// ------------------Exercise #23
// ------------------Exercise #24
// ------------------Exercise #25
// ------------------Exercise #26
// ------------------Exercise #27
// ------------------Exercise #28
// ------------------Exercise #29
// ------------------Exercise #30
// ------------------Exercise #31
// ------------------Exercise #32
// ------------------Exercise #33
// ------------------Exercise #34
// ------------------Exercise #35
// ------------------Exercise #36
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
