// Topic: mix of concepts from closures, hoisting, promises, arrow functions, and event loop

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

const fetchData = new Promise((resolve, reject) => {
  console.log("3");
  resolve("4");
});

fetchData.then(data => console.log(data));

(function outer() {
  var name = "Shweta";
  function inner() {
    console.log("Hello", name);
  }
  name = "Superstar";
  return inner;
})()();

console.log("5");

// Predict the output in order. Explain why each line appears where it does
// output: 1 3 Hello Superstar 5 4 2

// What will happen if we move setTimeout to the end of the file?
// The setTimeout is still queued in the macrotask queue, so its position in code doesn’t matter — only when it enters the event loop does.

// What if we replaced var name with let name in the closure part?
// In this case, there's no scoping issue. The closure captures the reference to name, and both var and let will behave the same here.

//  How would the behavior change if fetchData used setTimeout(() => resolve(), 0) instead of resolving immediately?
// If you resolve the promise after a setTimeout, the resolution becomes asynchronous, meaning the .then() will move to the macrotask queue, 
// not the microtask queue.
// So:

// - setTimeout becomes macrotask

// - Promise.then() also becomes macrotask

// Since they are now in the same queue and both are delayed, the one that’s queued first (the setTimeout) will execute first → so 2 then 4.

// Why did the closure still remember "Superstar" instead of "Shweta"?
// The closure remembers variables by reference, not by value. So when you later assign "Superstar" to name, the closure refers to that 
// updated value — even though the outer function is done executing. That’s the beauty (and trickiness) of closures — they maintain 
// access to the live environment, not a frozen snapshot.