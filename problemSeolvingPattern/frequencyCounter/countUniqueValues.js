/**
 * Implement a function called countUniqueValues,which accepts a sorted array, and counts the
 * unique values in the array. The can be negative numbers in the array, but it will always be sorted.
 */

function countUniqueValues(array) {
  if (!array.length) return 0;

  // O(n)
  let freqCount = {};

  // O(n)
  for (let val of array) {
    freqCount[val] ? (freqCount[val] += 1) : (freqCount[val] = 1);
  }

  // O(n)
  return Object.keys(freqCount).length;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

// time complexity: O(n)
// space complexity: O(n)
