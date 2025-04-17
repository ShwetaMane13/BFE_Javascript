// Topic: Closures in loop

function createButtons() {
  for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
      console.log(`Button ${i} clicked`);
    }, i * 1000);
  }
}

createButtons();

// What will this output? (Think about what gets logged and when.)
// Output: Button 4 clicked Button 4 clicked Button 4 clicked (loop exits after i=4, please remember this)

// Why does this happen?
// Answer: by the time the setTimeout executes, the for loop has already done executing and i is referencing
// to the value 3

// How can we fix it so that it logs:
// Button 1 clicked
// Button 2 clicked
// Button 3 clicked

// Answer: we can use let
// let is block-scoped — this means each iteration of the for loop gets a new copy of i.
// When the setTimeout runs, it remembers the correct i because it closed over that iteration’s version of i.

//Whereas var is function-scoped, so all callbacks closed over the same i, which was 4 by the
// end (not 3 — because loop exits after i = 4).

// Another way to fix it (without let) is using an IIFE (Immediately Invoked Function Expression):

function createButtons() {
  for (var i = 1; i <= 3; i++) {
    (function (j) {
      setTimeout(function () {
        console.log(`Button ${j} clicked`);
      }, j * 1000);
    })(i);
  }
}

createButtons();

// we can achieve this using a normal function also

//  You can use a normal function instead of an IIFE — the key idea is still the same:
// create a new scope per iteration, and capture the value of i during each loop.

function logButton(i) {
  setTimeout(function () {
    console.log(`Button ${i} clicked`);
  }, i * 1000);
}

function createButtons() {
  for (var i = 1; i <= 3; i++) {
    logButton(i); // passing the current value of i
  }
}

createButtons();

// Why this works:
// By passing i as a parameter to the function logButton, it becomes a local variable inside that function's scope,
// and setTimeout closes over that — not the loop’s i.
// So yeah — IIFE is one way, let is another, and passing i into a separate function works just as well.

// bonus twist

for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 0);
}

//   var is function-scoped, so the same i is shared across all iterations.
//   By the time the setTimeout callbacks run, the loop is done, and i is 4.
//   Hence, all three console.log(i) log 4.
//   Output: 4, 4, 4

for (let j = 1; j <= 3; j++) {
  setTimeout(() => console.log(j), 0);
}

// let is block-scoped, so each iteration of the loop gets a new j.
// The callback inside setTimeout closes over the current j.
// When the timers execute, each callback has its own j value preserved.
// Output: 1, 2, 3
