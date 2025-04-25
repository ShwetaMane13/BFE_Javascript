// Topic: Map, ForEach and Selection Sort

// difference between map and foreach
// map - returns a new array with the results of calling function on every element
// forEach - just runs the function on each element but does not return anything

const numbers = [1, 2, 3];

const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6]

const doubledAgain = [];
numbers.forEach((num) => doubledAgain.push(num * 2));
console.log(doubledAgain); // [2, 4, 6]

// so if you need a new transformed array, go with map
// if you are doing just something per item (like logging or mutating external stuff), go with forEach

// quick challenge
const capitalizeAndSayHello = (arr) => {
  const answer = arr.map((ele) => {
    ele = ele.split("");
    ele[0] = ele[0].toUpperCase();
    return `Hello, ${ele.join("")}`;
  });

  return answer;
};

// shorter version
const capitalizeAndSayHelloShorter = (arr) => {
  return arr.map((ele) => `Hello, ${ele[0].toUpperCase()}${ele.slice(1)}`);
};

console.log(capitalizeAndSayHelloShorter(["shweta", "vikram", "riddhi"]));

console.log(capitalizeAndSayHello(["shweta", "vikram", "riddhi"]));

// DSA - Selection Sort

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
};

console.log(selectionSort([5, 3, 8, 4, 2]));

// how it works
// find the smallest element in the array
// swap it with the first element
// repeat the process with the rest of the array (excluding the already sorted part)
