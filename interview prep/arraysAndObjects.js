// i am creating this module for all kinds of interview problems asked on arrays and objects which are not DSA and also new methods
// and tricks i come across

//i was given an array with repeating numbers and was asked to print the sum of distinct numbers in the array

const arrayOne = [1, 2, 3, 3, 3, 4, 5, 6, 7, 7, 7, 8, 9, 20, 20, 36];

//the approach i used was so noob that it tells why i was not shortlisted but now i know better

const printSum = (arr) => {
  arr = [...new Set(arr)];
  const sum = arr.reduce((acc, i) => acc + i, 0);
  return sum;
};

console.log(printSum(arrayOne));

// 1. The Swapping Saga:
// Question: How can you swap the values of two variables without using a temporary variable?

let a = 10,
  b = 11;
[a, b] = [b, a]; //destructuring assignment

// 2. Object Overhaul:
// Question: Explain the process of cloning an object in JavaScript.

const originalObject = { one: 1, two: 2 };
const clonedObject = { ...originalObject };

//why do we need to clone an object though and what is a shallow copy and a deep copy?

//there are three ways the spread operator, Object.assign and JSON.parse().
//last one is a bad practice as it does not work with functions, symbol and undefined values.
//When you have a function, symbol, or undefined value, it will return an empty key-value pair and skip it.
//also it changes NaN and infinity to null. this can break your code.

// 3. Array Amalgamation:
// Question: How do you eliminate duplicates from an array?

const arrayWithDupes = [1, 2, 3, 1, 2, 4];
const noDupesArray = [...new Set(arrayWithDupes)]; //Duplicates vanish, leaving a pristine array. (i love how it is worded lol)

//https://dev.to/krishnapankhania/mastering-javascript-10-tricky-interview-questions-on-arrays-and-objects-205o today will finish
// the rest of the problems from this site.

// 4. The Palindrome Puzzle:
// Question: Write a function to determine if a string is a palindrome.

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

// 5. Object Inquiry:
// Question: How can you check if an object contains a specific property?

const myObject = { name: "JavaScript", age: 25 };
const hasProperty = "age" in myObject; //hasProperty value will be true
console.log("here", myObject.hasOwnProperty("age")); //we can use this as well
// we can use this inside for loop i.e. for in loop.

// 6. Object Fusion:
// Question: Merge two objects into one.

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const fusedObject = { ...obj1, ...obj2 };

// 9. The Filtering Feat:
// Question: Remove falsy values from an array.

const questionableArray = [0, false, "", null, undefined, 42];
const truthArray = questionableArray.filter(Boolean);
console.log("truthArray", truthArray); // False values eliminated, leaving truth behind.

/*  1. Object.entries()
    2. Object.fromEntries()
    3. Object.values()
    4. Object.groupby()
*/

// 1. Object.entries()

// Object.entries() - returns an array of arrays that each contain a key/value pair present in the object:

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

let text1 = Object.entries(person);
console.log("text", text1);
/* [
    [ 'firstName', 'John' ],
    [ 'lastName', 'Doe' ],
    [ 'age', 50 ],
    [ 'eyeColor', 'blue' ]
  ]
*/

//Object.entries() also makes it simple to convert objects to maps

const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

const myMap = new Map(Object.entries(fruits));
console.log("myMap", Object.entries(fruits), myMap);

/* output:

[ [ 'Bananas', 300 ], [ 'Oranges', 200 ], [ 'Apples', 500 ] ] Map(3) { 'Bananas' => 300, 'Oranges' => 200, 'Apples' => 500 }

*/

//Object.entries() makes it simple to use objects in loops:

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "\n";
}
console.log("text", text);

// 2. Object.fromEntries() - this method creates an object from a list of key/value pairs

const fruits1 = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500],
];

const myObj = Object.fromEntries(fruits1);
console.log("myObj", myObj);
/* output: { apples: 300, pears: 900, bananas: 500 } */

// 3. Object.values() - is similar to Object.entries(), but returns a single dimension array of the object values

let textt = Object.values(person);
console.log("textt", textt);

/* output: [ 'John', 'Doe', 50, 'blue' ] */

// 4. Object.groupBy() - this method groups elements of an object according to string values returned from a callback function.
// this method does not change the original object. this is an ES2024 feature

const fruits2 = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 },
];

//callback function to group elements
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

//Group by quantity
// const result = Object.groupBy(fruits2, myCallback);

// console.log("result", result);

// Object.groupBy() Vs Map.groupBy()
// the difference between these two is:
// Object.groupBy() groups elements into a javascript object
// Map.groupBy() groups elements into a Map object

// Object.keys() - this method returns an array with the keys of an object
const keys = Object.keys(person);


// Javascript for...in loop

// the javascript for...in statement loops through the properties of an object

// syntax for(let variable in object){ ...code to be executed... }

//the block of code inside of the for...in loop will be executed once for each property 

const person2 = {
    fname:" John",
    lname:" Doe",
    age: 25
  };

let txt = '';
for(let x in person){
    txt += person[x]
}
console.log("txt", txt);
// output: JohnDoe50blue

let newObj = {name: "Shweta"};
let newObj2 = {...newObj};
newObj2.name = "Riddhi";
console.log(newObj.name);