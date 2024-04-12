/**
 * Binary Search Exercise
 * Write a function called binarySearch which accepts a sorted array and a value and
 * returns the index at which the value exists. Otherwise, return -1.
 */

function binarySearch(arr = [], value) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    let current = arr[middle];

    if (current < value) {
      left = ++middle;
    } else if (current > value) {
      right = --middle;
    } else {
      return middle;
    }
  }

  return -1;
}

function recursiveBinarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (!arr.length || left > right) {
    return -1;
  }

  let middle = Math.floor((left + right) / 2);

  if (arr[middle] < target) {
    return recursiveBinarySearch(arr, target, ++middle, right);
  }

  if (arr[middle] > target) {
    return recursiveBinarySearch(arr, target, left, --middle);
  }

  return middle;
}

console.log(recursiveBinarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(recursiveBinarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(recursiveBinarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(recursiveBinarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); // 16
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
); // -1
