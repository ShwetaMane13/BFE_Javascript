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


