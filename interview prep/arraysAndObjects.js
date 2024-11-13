// i am creating this module for all kinds of interview problems asked on arrays and objects which are not DSA and also new methods
// and tricks i come across 

//i was given an array with repeating numbers and was asked to print the sum of distinct numbers in the array

const arrayOne = [1, 2, 3, 3, 3, 4, 5, 6, 7, 7, 7, 8, 9, 20, 20, 36];

//the approach i used was so noob that it tells why i was not shortlisted but now i know better

const printSum = (arr) => {
    arr = [...new Set(arr)];
    const sum = arr.reduce((acc, i) => acc + i, 0);
    return sum;
}

console.log(printSum(arrayOne));

// 1. The Swapping Saga:
// Question: How can you swap the values of two variables without using a temporary variable?

let a = 10, b = 11;
[a, b] = [b, a]; //destructuring assignment





// 2. Object Overhaul:
// Question: Explain the process of cloning an object in JavaScript.

const originalObject = {one: 1, two: 2}
const clonedObject = {...originalObject}

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

function isPalindrome(str){
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// 5. Object Inquiry:
// Question: How can you check if an object contains a specific property?

const myObject = {name: 'JavaScript', age: 25};
const hasProperty = 'age' in myObject; //hasProperty value will be true
console.log("here", myObject.hasOwnProperty('age')); //we can use this as well 
// we can use this inside for loop i.e. for in loop.


// 6. Object Fusion:
// Question: Merge two objects into one.

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const fusedObject = {...obj1, ...obj2};

// 9. The Filtering Feat:
// Question: Remove falsy values from an array.

const questionableArray = [0, false, '', null, undefined, 42];
const truthArray = questionableArray.filter(Boolean);
console.log("truthArray", truthArray); // False values eliminated, leaving truth behind.