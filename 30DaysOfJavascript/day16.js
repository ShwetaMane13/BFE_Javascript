// Topic: Search

// Linear Search
// this is the simplest search algorithm where you check each element of the array until you find the target.
// its O(n), meaning it works well for small datasets but might not scale for larger ones.

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // target found, return index
    }
  }
  return -1; // target not found
};

const arrLS = [3, 6, 1, 8, 4, 2];
console.log(linearSearch(arrLS, 8));

// Binary Search (for sorted arrays)
// a more efficient search algorithm. works only on sorted arrays and has a time complexity of O(log n).
// instead of checking each element, you keep dividing the array in half, checking if the middle element is the target.

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // target found at the middle
    }

    if (arr[mid] < target) {
      left = mid + 1; // target is in the right half
    } else {
      right = mid - 1; // target is in the left half
    }
  }

  return -1;
};

const arrBS = [1, 2, 3, 4, 6, 8];
console.log(binarySearch(arrBS, 6));
