// Topic: Find the first non-repeating character
// Problem statement: given a string s, find the first character that does not repeat. return that character. 
// if every character repeats then return null.

const findFirstNonRepeatingCharacter = (s) => {
    const map = new Map();

    for(let i = 0; i < s.length; i++) {
        if(map.has(s[i])){
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }

    for(let [char, count] of map) {
        if(count === 1) return char;
    }

    return null;
}

console.log(findFirstNonRepeatingCharacter("aabbcdd")); //output: c
console.log(findFirstNonRepeatingCharacter("aabbcc")); //output: null
console.log(findFirstNonRepeatingCharacter("javascript")); //output: j