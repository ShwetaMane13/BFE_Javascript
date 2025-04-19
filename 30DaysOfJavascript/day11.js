// Topic: this Keyword & Binding (Call, Apply, Bind)

const user = {
    name: "Shweta",
    greet() {
      console.log(`Hi, I'm ${this.name}`);
    },
  };
  
  const greet = user.greet;
  greet(); // What will this log? Output: Hi, I'm undefined (in strict mode)
  
  const boundGreet = user.greet.bind(user);
  boundGreet(); // What about this? Output: Hi, I'm Shweta
  
  // Twist:
  const anotherUser = { name: "Mona" };
  user.greet.call(anotherUser); // And this? Output: Hi, I'm Mona
  
  const greetWithApply = user.greet.apply({ name: "Avi" }); // And this one? Output: Hi, I'm Avi

// What does greet() log, and why?
// Answer: You're assigning the method to a standalone variable. Once detached from user, 
// this no longer points to the original object. 
// In non-strict mode, this becomes window; in strict mode, it's undefined.

// What about boundGreet()?
//Answered above

// What's the difference between call, apply, and bind?
// Answer: 
// Method	             Description	                                                    Invocation
// .call()	       Calls function immediately with a specified this value               func.call(thisArg, arg1, arg2)
//                 and individual arguments.	
// .apply()	       Same as .call() but arguments are passed as an array.	              func.apply(thisArg, [arg1, arg2])
// .bind()	       Returns a new function with bound this                               const newFunc = func.bind(thisArg) 
//                 (doesn’t call it immediately).	                                      then newFunc();
//      


// Bonus: Can you explain a real-world use-case of .bind()?

// Scenario: Personalized greeting button
// Suppose you have a **user object** and you want to greet that user when a button is clicked.

// const user = {
//   name: "Shweta",
//   greet() {
//     console.log(`Hi, I'm ${this.name}`);
//   },
// };

// const button = document.getElementById("greetBtn");

// If you do this:
button.addEventListener("click", user.greet); 
// It logs: "Hi, I'm undefined" because `this` is now the button!

// Correct way:
button.addEventListener("click", user.greet.bind(user));
// It will now log: "Hi, I'm Shweta"

// Why it matters:
// When you pass a method like `user.greet` to something like an `event listener`, it **loses its original context**
// — so `this` no longer refers to `user`.

// `.bind(user)` **locks** the `this` context so no matter where the function is used, it still "remembers" it belongs to `user`.





// so if this does not refer to user inside event listener then what does it refer to?

// <button id="greetBtn">Greet</button>

// const user = {
//   name: "Shweta",
//   greet() {
//     console.log(`Hi, I'm ${this.name}`);
//   },
// };

// const button = document.getElementById("greetBtn");

// // Watch this:
// button.addEventListener("click", user.greet);

// When the button is clicked, this inside greet() will refer to the button element (<button id="greetBtn">Greet</button>), 
// not the user object.

// console.log(this); 

// Inside greet() will log:

// <button id="greetBtn">Greet</button>

// button.addEventListener("click", user.greet.bind(user));

// Now this is locked to user, so this.name becomes "Shweta" again.

// When you use .bind(user), you are explicitly telling JavaScript:

// “Hey, no matter who calls this function, I want this inside it to always refer to user.”

// You're tying a red thread from the function to the user object.
// Now even if someone else (like a button) tries to call it, it still knows it's supposed to act like it's user.


const person = {
  name: "Shweta",
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  },
};

setTimeout(person.greet, 1000); // ❓What will this log? Output: Hello, I'm undefined

setTimeout(person.greet.bind(person), 2000); // ❓And what about this? Output: Hello, I'm Shweta

const greetFn = person.greet;
setTimeout(greetFn.bind({ name: "Mona" }), 3000); //  Output: Hello, I'm Mona


// This is super useful when you're working with event handlers or callbacks, 
// where this can get lost in the async maze. Using bind helps preserve the intended context.

