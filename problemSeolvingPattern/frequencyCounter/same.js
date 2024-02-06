/**
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the array has it's corresponding value -
 * squared in the second array. The frequency of values must be the same.
 */

function same(array1, array2) {
  if (array1.length !== array2.length) return false;

  let freqCounter = {};

  for (let val of array1) {
    let key = val * val;

    if (freqCounter[key]) freqCounter[key] += 1;
    else freqCounter[key] = 1;
  }

  for (let val of array2) {
    if (freqCounter[val]) {
      freqCounter[val] -= 1;
    } else return false;
  }

  return true;
}

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false

// time complexity: O(n)
// space complecity: O(n)
