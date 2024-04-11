/**
 * capitalizeWords
 * Write a recursive function called capitalizeWords. Given an array of words,
 * return a new array containing each word capitalized.
 */

// space complexity O(N)
// time complexity O(N)
function capitalizeWords(arr) {
  if (!arr.length) return [];

  let result = [arr[0].toUpperCase()];

  return result.concat(capitalizeWords(arr.slice(1)));
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
