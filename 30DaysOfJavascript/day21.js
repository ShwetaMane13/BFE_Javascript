// Topic: Longest Substring with at most K distinct characters
// Problem statement: Given a string s and an integer k, return the length of the longest substring that contains at most k distinct characters.

const lengthOfLongestSubstringKDistinct = (s, k) => {
  if (k === 0 || s.length === 0) return 0;

  let left = 0;
  let right = 0;
  let maxLen = 0;

  const map = new Map();

  while (right < s.length) {
    const char = s[right];

    map.set(char, (map.get(char) || 0) + 1);

    while(map.size > k){
        const leftChar = s[left];
        map.set(leftChar, map.get(leftChar) - 1);

        if(map.get(leftChar) === 0){
            map.delete(leftChar);
        }
        left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
    right++;
  }

  return maxLen;
};

console.log(lengthOfLongestSubstringKDistinct("eceba", 2)); // Output: 3 ("ece")
console.log(lengthOfLongestSubstringKDistinct("aa", 1));    // Output: 2 ("aa")
console.log(lengthOfLongestSubstringKDistinct("a", 0));     // Output: 0
