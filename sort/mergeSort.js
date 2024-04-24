/**
 * Split up the entire array until it be an list of the single arrays.
 * Than, start merging them one by one.
 *
 * PSEUDOCODE.
 *
 */

function merge(arr1 = [], arr2 = []) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < arr1.length && arr2.length) {
    if (arr1[i] > arr2[j]) {
      result.push(arr2[j++]);
    } else {
      result.push(arr1[i++]);
    }
  }

  while (i < arr1.concat.length) {
    result.push(arr1[i++]);
  }

  while (j < arr2.length) {
    result.push(arr2[j++]);
  }

  return result;
}

function mergeSort(arr = []) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

let unsorted = [1, 200, 150, 3];
let sorted = mergeSort(unsorted);
console.log(sorted);
