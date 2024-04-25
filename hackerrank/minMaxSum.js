/**
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example
 arr  = [1,3,5,7,9]
The minimum sum is 1+3+5+7=16 and the maximum sum is 3+5+7+9=24. The function prints:

16 24

Input Format
A single line of five space-separated integers.

Constraints
1<= arr[i] < 10⁹

Output Format
Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample Input
1 2 3 4 5

Sample Output
10 14
 */

function merge(left = [], right = []) {
  let results = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      results.push(right[j++]);
    } else {
      results.push(left[i++]);
    }
  }

  while (i < left.length) {
    results.push(left[i++]);
  }

  while (j < right.length) {
    results.push(right[j++]);
  }

  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let middlePoint = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middlePoint));
  let right = mergeSort(arr.slice(middlePoint));

  return merge(left, right);
}

function miniMaxSum(arr) {
  const sortedArray = mergeSort(arr);
  let sum = 0;

  for (let i = 0; i < sortedArray.length; i++) {
    sum += sortedArray[i];
  }

  const min = sum - sortedArray[sortedArray.length - 1];
  const max = sum - sortedArray[0];

  console.log(min, max);
}

function NaiveSolution(arr = []) {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] !== arr[i]) {
        sum += arr[j];
      }
    }

    if (sum > max) {
      max = sum;
    }

    if (sum < min) {
      min = sum;
    }
  }

  console.log(min, max);
}

miniMaxSum([1, 2, 3, 4, 5]);
NaiveSolution([1, 2, 3, 4, 5]);
