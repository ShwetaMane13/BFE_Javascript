// Topic: Closures

function outer() {
    let count = 0;
    return function inner() {
      count++;
      console.log(`Count is: ${count}`);
    };
  }
  
  const counter1 = outer();
  counter1(); // ? output: 1
  counter1(); // ? output: 2
  counter1(); // ? output: 3
  
  const counter2 = outer();
  counter2(); // ? output: 1

  // What will be logged in each of the counter1() and counter2() calls? 

  // Why does counter2 start from a fresh count? 
  // Answer: outer() creates a new execution context every time it's called. 
  // So counter2 gets a fresh new count = 0 — it’s a separate closure.

  // How is count still accessible to inner even though outer() has already finished executing? 
  // Answer: Because inner() closes over the variables in outer() — that’s literally what a closure is. 
  // It preserves access to its lexical environment, even after the outer function is done executing.