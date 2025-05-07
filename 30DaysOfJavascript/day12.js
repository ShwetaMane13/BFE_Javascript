// Topic: Prototypes & Inheritance

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, I'm ${this.name}`);
};

const shweta = new Person("Shweta");

shweta.sayHello(); // Output: Hello, I'm Shweta

console.log(shweta.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true

// What is the prototype chain, and how does it work here?

// Answer: Every object in javascript has a parent object from which it inherits its properties and methods.
// This is called a prototype chain. On invoking a method on some object, it will first check if the method exists in the
// prototype of the object, if it does not it will go a step higher and check in its parent prototype.

//Every object in JavaScript has an internal reference to another object called its prototype.
// This creates a prototype chain, where properties and methods are looked up step-by-step.
// When you call a method on an object, JavaScript first looks for it on the object itself.
// If it doesn’t find it, it moves up to the object’s prototype, then to that prototype’s prototype,
// and so on — until it reaches Object.prototype, which is at the top of the chain.
// If the property/method isn’t found anywhere in the chain, JavaScript returns undefined.

// What will be the output of the two console.log lines?
// Answer: true and true.
// 1. When you create an object using a constructor function like new Person("Shweta"),
// JavaScript automatically sets the internal [[Prototype]] of that new object (shweta) to
// point to the prototype property of the constructor function (Person.prototype).
// So essentially:
// shweta.__proto__ === Person.prototype // true

// 2. All constructor functions in JavaScript (including Person) are derived from Function,
// and their prototype objects inherit from Object.prototype by default.
// That’s why Person.prototype is an object, and its prototype is Object.prototype.
// So:
// Person.prototype.__proto__ === Object.prototype // true

// Bonus: What happens if we add a method to Object.prototype? Will shweta be able to access it?
// Answer: Yes, shweta will be able to access it since object prototype is the parent of any object that is created in
// javascript.

// At the very end of the prototype chain is:
// null

// That means:
// Object.prototype.__proto__ === null

// So the full prototype chain looks something like this:
// shweta → Person.prototype → Object.prototype → null
// Once JavaScript reaches null, it stops looking — that's the end of the chain.
// null means there's no further prototype to look up.
// This is why null is considered the "prototype of nothing" — it's the base of all objects in JavaScript.

// DSA Challenge: Frequency Counter

// Problem: Anagram Checker
// Write a function isAnagram(str1, str2) that returns true if the two strings are anagrams of each other, false otherwise.

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < str1.length; i++) {
    obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
    obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
  }

  for (let ele in obj1) {
    if (obj1[ele] !== obj2[ele]) return false;
  }
  return true;
};

// Example:
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "bello")); // false

// solution using just one object

const isAnagramOptimized = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  let lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let char1 = str1[i];
    let char2 = str2[i];

    lookup[char1] = (lookup[char1] || 0) + 1;
    lookup[char2] = (lookup[char2] || 0) - 1;
  }

  for (let key in lookup) {
    if (lookup[key] !== 0) return false;
  }

  return true;
};

// O(n) time and space complexity
console.log(isAnagramOptimized("hello", "bello")); // false

const areAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  const map = new Map();

  for (let char of str1) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of str2) {
    if (!map.has(char)) return false;
    map.set(char, map.get(char) - 1);
    if (map.get(char) < 0) return false;
  }

  return true;
};

console.log(areAnagrams("Listen", "Silent"));
