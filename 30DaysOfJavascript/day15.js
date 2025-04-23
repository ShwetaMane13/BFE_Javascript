// Topic: Functions as First-Class Citizens + Higher Order Functions + Callback Hell + Promises

// First-Class Functions

// functions can be assigned to variables
// passed as arguments to other functions
// returned from other functions

// that's what makes them first class citizens

const greet = () => console.log("Hello!");
const sayHi = greet; // assigning a function to a variable
sayHi(); // output: Hello!

// passing as arguments
function saySomething(fn) {
  fn(); // executes whatever function is passed
}

saySomething(() => console.log("I am a callback!"));

// Higher-Order Functions
// a higher order function either takes a function as an argument or returns one or does both
function multiplyBy(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // output: 10

// Callback Hell
// when you nest callbacks within callbacks within callbacks, you end with a pyramid of doom
setTimeout(() => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("3");
    }, 1000);
  }, 1000);
}, 1000);
// This gets hard to read and maintain

// Promises to the Rescue
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("It worked!");
  } else {
    reject("Something went wrong!");
  }
});

myPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// Challenge

// Write a function called delayedLog that:
// Accepts a message and a delay (in ms)
// Returns a promise
// Resolves with the message after the delay

function delayedLog(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(message), delay);
  });
}

delayedLog("promise is resolved", 2000).then((res) => console.log(res));
