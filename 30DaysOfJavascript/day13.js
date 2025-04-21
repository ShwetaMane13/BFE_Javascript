// Topic: Sets and Maps in Javascript

// Set - Collection of unique values. Order is preserved but duplicates are removed automatically.

const mySet = new Set([1, 2, 1, 3, 4, 4, 5, 6, 6, 6, 7, 8]);

// console.log("mySet", mySet); // mySet Set(8) { 1, 2, 3, 4, 5, 6, 7, 8 }
// console.log("mySetInArray", [...mySet]); // mySet [1, 2, 3, 4, 5, 6, 7, 8]

// mySet.add(9); // adds a new element to the set
// console.log(mySet); // Set(9) { 1, 2, 3, 4, 5, 6, 7, 8, 9 }
// console.log(mySet.has(8)); //true // checks if the element is present in the set
// mySet.delete(9); // deletes the given element from the set
// mySet.delete(10); // nothing happened. 10 is not present in the set.
// console.log(mySet); // Set(8) { 1, 2, 3, 4, 5, 6, 7, 8 }
// console.log(mySet.size); // gives the number of total unique elements
// mySet.clear(); // removes all values
// console.log(mySet); // Set(0) {}

// real world example

const users = ["A", "B", "A", "C", "B"];
const uniqueUsers = [...new Set(users)];
// console.log(uniqueUsers); // [ 'A', 'B', 'C' ]

// Map - A collection of key value pairs, where keys can be any type(not just strings like objects)

const map = new Map();
console.log(map);
map.set("name", "Shweta"); // Add or update value
console.log(map);
map.set("name", "Shweta"); // cannot set the same key twice
console.log(map);
map.set(123, "ID"); // key can be any type
console.log(map);
map.set(true, "Active");
console.log(map);

console.log(map.get("name")); // get value by passing the key
console.log(map.get(123));
console.log(map.has(true)); // check if key exists
console.log(map.size); // check number of entries
map.delete(true); // delete entry
console.log(map);
map.clear(); // remove all entries
console.log(map);

// real world example

const userDetails = new Map();
userDetails.set("name", "Shweta");
userDetails.set("role", "Frontend Dev");

for (let [key, value] of userDetails) {
  console.log(`${key} : ${value}`);
}

// WeakSet - Like Set, but only stores objects, and they are weakly referenced
// cannot iterate
// helps in memory management (auto garbage collection)
// used in private data storage in frameworks

const obj1 = { a: 1 };
const two = 2;
const ws = new WeakSet([obj1]);
console.log(ws.has(obj1));


// WeakMap - Like Map, but only allows objects as keys and values are weakly referenced
// cannot iterate or check .size
// keys are garbage collected if not referenced elsewhere

const wm = new WeakMap();
const person = {name: "Shweta"};
wm.set(person, "Engineer");
console.log(wm.get(person));

// when to use what

// Use Case                                                                       Use This
// Unique values from array                                                          Set
// Mapping data to complex keys                                                      Map
// Temporarily storing object presence                                             WeakSet
// Storing private metadata (e.g., DOM nodes)                                      WeakMap