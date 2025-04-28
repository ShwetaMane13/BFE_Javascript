// Topic - DSA: longest substring without repeating characters

// const longestSubstringWithoutRepeatingCharacters = (str) => {
//   let i = 0;
//   let j = i + 1;
//   let longestSubstring = 0;
//   let temp = 1;
//   while (i <= str.length && j <= str.length) {
//     if (str[i] !== str[j]) {
//       temp++;
//     } else {
//       if (longestSubstring < temp) {
//         longestSubstring = temp;
//       }
//       i++;
//       j = i + 1;
//       temp = 1;
//     }
//     j++;
//   }

//   return longestSubstring;
// };

const longestSubstringWithoutRepeatingCharacters = (str) => {
  let i = 0,
    j = 0,
    maxLength = 0;
  let set = new Set();

  while (j < str.length) {
    if (!set.has(str[j])) {
      set.add(str[j]);
      maxLength = Math.max(maxLength, set.size);
      j++;
    } else {
      set.delete(str[i]);
      i++;
    }
  }
  return maxLength;
};

console.log(longestSubstringWithoutRepeatingCharacters("pwwkew"));
// abcabcabc
// bbbb
// pwwkew

// my initial code was only checking for inequality between i and j and not the characters in between. it should check for duplicates in i and j 
// and every character between i and i 