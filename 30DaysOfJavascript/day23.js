// Topic: JS revision mini quiz

// 1. what is the output of this code?
console.log(typeof null);

// a) "object"
// b) "null"
// c) "undefined"
// d) error

// answer: "object"

// 2. what is the difference between let, const and, var in terms of scoping?

// a) All are function-scoped
// b) var is block-scoped, let and const are function-scoped
// c) var is function-scoped, let and const are block-scoped
// d) All are block-scoped

// answer: var is function scoped, let and const are block-scoped



// 3. What does "use strict" do in JavaScript?

// a) It prevents runtime errors
// b) It enables strict typing
// c) It disables automatic semicolon insertion
// d) It enforces stricter parsing and error handling

// answer: it enforces stricter parsing and error handling



// 4. What is the value of this inside an arrow function?

// a) Refers to the function itself
// b) Refers to the global object
// c) Inherits this from its lexical scope
// d) Always undefined

// answer: inherits this from its lexical scope

// 5. What will be the output?
let x = [1, 2, 3];
let y = x;
y.push(4);
console.log(x);

// a) [1, 2, 3]
// b) [1, 2, 3, 4]
// c) [4]
// d) Error

// answer: [1, 2, 3, 4]