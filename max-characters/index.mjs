// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

export const getMaxCharacters = (str) => {
  const charMap = {};
  let maxChar = "";
  let maxCount = 0;

  for (const char of str) {
    charMap[char] = charMap[char] + 1 || 1;
    if (charMap[char] > maxCount) {
      maxCount = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
};

console.log(getMaxCharacters("abcccccccd"));
