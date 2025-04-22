// Topic: Closures(Part 2 - LEVEL UP), real questions & tricky patterns

// 1. Closures Inside Loops
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
//Output: 3 3 3 — Because var is function-scoped, all callbacks share the same i.

// fix using let
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // 0 1 2
  }, 1000);
}

// or using closure trick to get the same result as let using var 
for (var i = 0; i < 3; i++) {
  ((j) => {
    setTimeout(() => {
      console.log(j);
    }, 1000);
  })(i);
}

// 2. interview closure challenge

function createFunctions() {
  let result = [];

  for (let i = 0; i < 3; i++) {
    result.push(() => i);
  }

  return result;
}

const funcs = createFunctions();
console.log(funcs[0]()); // Output: 0
console.log(funcs[1]()); // Output: 1
console.log(funcs[2]()); // Output: 2

// Because let creates a new scope for each iteration.
// Replacing it with var - output is 3 3 3

// 3. Closures + setTimeout Counter
// Write a counter that prints numbers from 1 to 5 with 1-second delay between each using closures.

const counter = () => {
  for (let i = 1; i <= 5; i++) {
    ((x) => {
      setTimeout(() => console.log(x), x*1000);
    })(i);
  }
};

console.log(counter());


// 4. Module Pattern with Closures
// Used in libraries to keep private stuff hidden:

const Counter = (function() {
    let count = 0;

    return {
        increment() {
            count++;
            return count;
        },
        reset() {
            count = 0;
        }
    }
})();

console.log(Counter.increment()); // 1
console.log(Counter.increment()); // 2
Counter.reset();
console.log(Counter.increment()); // 1