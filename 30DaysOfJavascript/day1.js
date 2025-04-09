// Q1. Write a function that takes a string as an argument and returns true if it's a palindrome, false otherwise.

const str = "abccba";

const checkPalindrome = (value) => {
    let n = value.length;
    let i = 0;
    let j = n-1;
    for(let k = 0; k < n - 1 / 2; k++){
        if(value[i] !== value[j]){
            return false;
        }
        i++;
        j--;
    }

    return true;
}

console.log(checkPalindrome(str));