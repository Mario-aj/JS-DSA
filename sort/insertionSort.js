/**
 * Idea
 * Sort the array by picking  one element at a time and comper it with all
 * elements before, make a swap of j+1 and j until find an element which is small than
 *  the current one, and insert the current into j+1.
 *
 *
 * PSEUDOCODE
 *
 * Starting loop over the entire array, by starting from the second position (index = 1).
 * asign the currentValue as array[i];
 * make the inner loop which start from the i-1, and goes until j >= 0 and arr[j] > currentValue;
 *  make a swap, or arr[j+1] = arr[j]
 * After the inner loop, probabily j will be -1 or arr[j] will be less then currentValue.
 *    So, insert the currentValue in j, position.
 *      We should insert in j+1, because if j = -1, there is no position -1, or the arrj[j]
 *        is less then currentValue.
 */

function insertionSort(arr = []) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];

    for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = current;
  }
}

const unsortedArray = [1, 5, 2, 6, 4];

console.log("Unsorted: ", unsortedArray);
insertionSort(unsortedArray);
console.log("Sorted: ", unsortedArray);
