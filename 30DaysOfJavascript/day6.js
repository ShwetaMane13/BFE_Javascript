// Topic: Promises and Asynchronous JavaScript

const fetchData = new Promise((resolve, reject) => {
    const data = "Some data"; 
    let success = true;
    
    if(success) {
      resolve(data);
    } else {
      reject("Error: Failed to fetch data");
    }
  });
  
  fetchData
    .then(response => {
      console.log("Data fetched: ", response);  // If success, log the data
    })
    .catch(error => {
      console.log(error);  // If failed, log the error
    });

// What will be the output if success = true? Output: Data fetched: Some data

// What will happen if success = false? Output: Error: Failed to fetch data

// How can you add a .finally() block? What is its purpose? // we can add .finally() after .catch() block. 
// its purpose is to perform any activity regardless of the result of the promise (resolve or reject)
// fetchData
//   .then(...)
//   .catch(...)
//   .finally(() => console.log("Operation complete"));
// It always runs, regardless of resolve or reject — super useful for cleanup (like hiding loaders, closing modals, etc).


// What happens when multiple .then() blocks are chained together? // if multiple .then() are chained it will look for next 
// promise in the chain and resolve or reject it
// fetchData
//   .then(res => {
//     console.log("Step 1", res);
//     return res + " extended";
//   })
//   .then(modified => {
//     console.log("Step 2", modified);
//   });
// Each .then() receives the result from the one before it. If any of them throws an error, it skips to .catch().