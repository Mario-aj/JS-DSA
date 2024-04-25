/**
 * Consider an array of numeric strings where each string is a positive number with anywhere from  to  digits. Sort the array's elements in non-decreasing, or ascending order of their integer values and return the sorted array.

Example

Return the array ['1', '3', '150', '200'].

Function Description

Complete the bigSorting function in the editor below.

bigSorting has the following parameter(s):

string unsorted[n]: an unsorted array of integers as strings
Returns

string[n]: the array sorted in numerical order
Input Format

The first line contains an integer, , the number of strings in .
Each of the  subsequent lines contains an integer string, .

Constraints

Each string is guaranteed to represent a positive integer.
There will be no leading zeros.
The total number of digits across all strings in  is between  and  (inclusive).
Sample Input 0

6
31415926535897932384626433832795
1
3
10
3
5
Sample Output 0

1
3
3
5
10
31415926535897932384626433832795
Explanation 0

The initial array of strings is . When we order each string by the real-world integer value it represents, we get:

We then print each value on a new line, from smallest to largest.

Sample Input 1

8
1
2
100
12303479849857341718340192371
3084193741082937
3084193741082938
111
200
Sample Output 1

1
2
100
111
200
3084193741082937
3084193741082938
12303479849857341718340192371
 */

// [1,200,150, 3]

// i = 0; j = 0
// arr[j] =200;
// arr[j+ 1] = 150;
// [1,150, 200, 3]
// i = 0;
// j = 2;
//arr[j] = 200;
// arr[j+ 1] = 3;
// [1,150,3, 200]
// i = 1;
// j = 0;
//arr[j] = 200;
// arr[j+ 1] = 3;

function bigSortingWithBubbleSort(unsortedArray = []) {
  for (let i = 0; i < unsortedArray.length; i++) {
    let hasSwap = false;

    for (let j = 0; j < unsortedArray.length - i; j++) {
      if (unsortedArray[j] > unsortedArray[j + 1]) {
        let temp = unsortedArray[j];
        unsortedArray[j] = unsortedArray[j + 1];
        unsortedArray[j + 1] = temp;
        hasSwap = true;
      }
    }

    if (!hasSwap) {
      break;
    }
  }

  return unsortedArray;
}

function bigSortingWithSelectionSort(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    let noSwap = true;
    if (lowest !== i) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
      noSwap = false;
    }

    if (i !== 0 && !noSwap) {
      break;
    }
  }
}

function bigSortingWithInsertionSort(arr = []) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];

    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentValue;
  }
}

function merge(arr1 = [], arr2 = []) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (Number(arr1[i]) < Number(arr2[j])) {
      results.push(arr1[i++]);
    } else {
      results.push(arr2[j++]);
    }
  }

  while (i < arr1[i]) {
    results.push(arr1[i++]);
  }

  while (j < arr2.length) {
    results.push(arr2[j++]);
  }

  return results;
}

function mergeSort(arr = []) {
  if (arr.length <= 1) return arr;

  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

// let unsortedArray = [1, 200, 150, 3];
// bigSortingWithBubbleSort(unsortedArray);
// console.log(unsortedArray);

// unsortedArray = [6, 31415926535897932384626433832795, 1, 3, 10, 3, 5];
// bigSortingWithBubbleSort(unsortedArray);
// console.log(unsortedArray);

// unsortedArray = [
//   8, 1, 2, 100, 12303479849857341718340192371, 3084193741082937,
//   3084193741082938, 111, 200,
// ];
// bigSortingWithBubbleSort(unsortedArray);
// console.log(unsortedArray);

// let unsortedArray = [1, 200, 150, 3];
// bigSortingWithSelectionSort(unsortedArray);
// console.log(unsortedArray);

// unsortedArray = [6, 31415926535897932384626433832795, 1, 3, 10, 3, 5];
// bigSortingWithSelectionSort(unsortedArray);
// console.log(unsortedArray);

// unsortedArray = [
//   8, 1, 2, 100, 12303479849857341718340192371, 3084193741082937,
//   3084193741082938, 111, 200,
// ];
// bigSortingWithSelectionSort(unsortedArray);
// console.log(unsortedArray);

// let unsortedArray = [1, 200, 150, 3];
// bigSortingWithInsertionSort(unsortedArray);
// console.log(unsortedArray);

// unsortedArray = [6, 31415926535897932384626433832795, 1, 3, 10, 3, 5];
// bigSortingWithInsertionSort(unsortedArray);
// console.log(unsortedArray);

// unsortedArray = [
//   8, 1, 2, 100, 12303479849857341718340192371, 3084193741082937,
//   3084193741082938, 111, 200,
// ];
// bigSortingWithInsertionSort(unsortedArray);
// console.log(unsortedArray);

let unsortedArray = ["1", "3", "150", "200"];
console.log(mergeSort(unsortedArray));

unsortedArray = [
  "6",
  "31415926535897932384626433832795",
  "1",
  "3",
  "10",
  "3",
  "5",
];
console.log(mergeSort(unsortedArray));

unsortedArray = [
  "8",
  "1",
  "2",
  "100",
  "12303479849857341718340192371",
  "3084193741082937",
  "3084193741082938",
  "111",
  "200",
];
console.log(mergeSort(unsortedArray));
