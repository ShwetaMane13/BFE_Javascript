// Topic: Filter, Reduce, Find, Every, Some

// filter - returns a new array with elements that pass the condition
const numsFilter = [1, 2, 3, 4, 5];
const evens = numsFilter.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4]

// reduce - boils down the array to a single value
const numsReduce = [1, 2, 3, 4];
const sum = numsReduce.reduce((num, acc) => num + acc, 0);
console.log(sum); // 10

// find - returns the first element that matches the condition
const users = [
  { name: "Shweta", active: true },
  { name: "Vikram", active: false },
];
const activeUser = users.find((user) => user.active);
console.log(activeUser); // { name: 'Shweta', active: true }

// every - checks if every element passes the condition
const allPositive = [1, 2, 3].every((num) => num > 0);
console.log(allPositive); // true

// some - checks if at least one element passes the condition
const hasNegative = [1, 2, -3].some((num) => num < 0);
console.log(hasNegative); // true

// challenge
// Given an array of numbers,
// filter out even numbers
// double each even number
// then sum them all together.

const arrayOfNumbers = [23, 49, 28, 39, 88, 96, 17];
const result = arrayOfNumbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2)
  .reduce((acc, num) => acc + num, 0);

console.log(result);

//find odd, square, add
const arr = [1, 2, 3, 4, 5];
const res = arr
  .filter((num) => num % 2 !== 0)
  .map((num) => num * num)
  .reduce((acc, num) => acc + num, 0);

  console.log(res)