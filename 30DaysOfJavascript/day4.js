// Today's topic will test your knowledge of hoisting and function declaration vs expression — super useful and super interview-friendly.

greet();        // What will this output? // output: "Hello from greet!"
greetAgain();   // What will this output? // output: TypeError: greetAgain is not a function (not undefined!)

function greet() {
  console.log("Hello from greet!");
}

var greetAgain = function () {
  console.log("Hello from greetAgain!");
};

// function declarations are fully hoisted whereas var greetAgain = function() { ... } is a function expression assigned to a var, 
// greetAgain is hoisted, but only as a variable, so at the time of the call it’s still undefined.
// So calling greetAgain() is like doing: undefined(); // TypeError

// Type	                          Hoisted?	                    Can you use before definition?
// function declaration	       Fully hoisted	                             Yes
// function expression	      Var hoisted only	                       No — causes error


console.log(myName); // What will happen here?

let myName = "Shweta";

// output: reference error. variables declared with let are hoisted but they are not initialized with any value,
// not even undefined. they remain inaccessible until they are initialized. hence theyre said to be in 
// temporal dead zone until then.


// some chatgpt explanation

// 🧠 Why?
// let and const are hoisted, BUT...

// They’re placed in the Temporal Dead Zone (TDZ) from the start of the scope until the line where they are declared and initialized.

// So during that TDZ window, trying to access them gives you a ReferenceError, not undefined.

// 🔥 Your Explanation Recap:
// ✔️ Let/const are hoisted but not initialized
// ✔️ var gets hoisted and initialized with undefined
// ✔️ let/const stay in TDZ until declaration line