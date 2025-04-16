// Topic: Event Loop and setTimeout

console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("End");

// In what order will the logs appear? Start End Promise 1 Timeout 1 Timeout 2

// Why does Promise 1 come before Timeout 1, even though both are async? because promises go into microtask queue and setTimeout into 
// macrotask queue and microtasl queue has priority over macrotask queue

//Because microtasks (like .then() callbacks) are run right after the current call stack is empty, before any macrotasks (like setTimeout).

// What's the difference between macro-task and micro-task queues? 

// Microtask Queue	                                                                        Macrotask Queue
//  Higher priority	                                                                         Lower priority
// Includes: Promise.then(), catch, finally, queueMicrotask	                   Includes: setTimeout, setInterval, setImmediate
// Always emptied before moving to the macrotask queue	                            Runs after microtasks are cleared

// Bonus: What would happen if we put a Promise inside a setTimeout? 

setTimeout(() => {
    Promise.resolve().then(() => console.log("Promise inside timeout"));
  });
  
// setTimeout waits, then when it fires, it schedules a microtask inside the macrotask
// So output order might look like: Start → End → Promise 1 → Timeout 1 → Promise inside timeout
