// Topic - groupBy, toSorted, toReversed, with

//groupBy() - method to group array items based on some property
// available under Array.prototpye.groupBy() (needs modern browsers/node)

// array.groupBy(callbackfn); - syntax
// callbackfn decides how to group items
// returns an object with group names as keys and arrays as values

const groupBy = (arr, callbackFn) => {
  return arr.reduce((acc, item) => {
    const key = callbackFn(item);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
};

const people = [
  { name: "Shweta", age: 22 },
  { name: "Riddhi", age: 23 },
  { name: "Anupreeti", age: 22 },
];

const groupByAge = groupBy(people, (person) => person.age);
console.log(groupByAge);
// output: {
//   '22': [ { name: 'Shweta', age: 22 }, { name: 'Anupreeti', age: 22 } ],
//   '23': [ { name: 'Riddhi', age: 23 } ]
// }

// toSorted - it is like sort() but does not mutate the original array
// returns a new sorted array

//array.toSorted(compareFunction)

const nums = [5, 3, 8, 1];
const sortedNums = nums.toSorted((a, b) => a - b);
console.log(sortedNums); // output: [ 1, 3, 5, 8 ]

// toReversed() - it is like reverse() but without changing the original array
// returns a new reversed array

// array.toReversed()

const numsRev = [1, 2, 3, 4, 5];
const reversedNums = numsRev.toReversed();
console.log(reversedNums); // output: [ 5, 4, 3, 2, 1 ]

// with - creates a copy of the array, but replaces one value at a given index 
// does not mutate the original array

//array.with(index, newValue);

const fruits = ["apple", "banana", "cherry"];
const newFruits = fruits.with(1, "orange");
console.log(newFruits) // output: [ 'apple', 'orange', 'cherry' ]

// in short
// groupby - groups items by property
// toSorted - new sorted array without touching the original
// toReversed - new reversed array without touching the original
// with - copy array with one item replaced