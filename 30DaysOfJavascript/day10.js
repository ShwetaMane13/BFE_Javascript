// Topic: Objects, References & Equality

const obj1 = { name: "Shweta" };
const obj2 = { name: "Shweta" };
const obj3 = obj1;

console.log(obj1 == obj2); // Output: false
console.log(obj1 === obj2); // Output: false
console.log(obj1 === obj3); // Output: true

// What will be logged for each comparison and why?
// Answer: akready answered above

// How does reference equality work in JavaScript for objects?
// Answer: all these variables hold the memory references of the objects and not the actual values.
// when obj3 = obj1 happens, the same address is passed to obj3 so now both the variables are pointing
// to the same memory location which hold the object value

// Is there a way to deep compare two objects in JS to check if they have the same structure and values?

// function deepEqual(a, b) {
//   let keysInA = Object.keys(a);
//   let keysInB = Object.keys(b);

//   if (keysInA.length !== keysInB.length) {
//     return false;
//   } else {
//     for (let ele in a) {
//       if (a[ele] !== b[ele]) {
//         return false;
//       }
//     }
//     return true;
//   }
// }

// above is the answer i came up with.

function deepEqual(a, b) {
  if (a === b) return true;

  if (
    typeof a !== "object" ||
    a === null ||
    typeof b !== "object" ||
    b === null
  )
    return false;

  let keysInA = Object.keys(a);
  let keysInB = Object.keys(b);

  if (keysInA.length !== keysInB.length) return false;

  for (let key of keysInA) {
    if (!keysInB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }
  return true;
}

console.log(deepEqual({ a: { b: 2 } }, { a: { b: 2 } }));

const newObj = { a: "1", b: "2", c: "3" };
const keys = Object.keys(newObj);

for (let ele in newObj) {
  console.log("ele", newObj[ele]);
}

for (let key of keys) {
  console.log("keys", newObj[key]);
}
