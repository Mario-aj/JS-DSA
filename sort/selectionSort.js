/**
 * Idea
 * Place the small values into sorted position
 *
 * PSEUDOCODE
 * Start looping the array.
 * define the lowest value as the current index of the loop.
 * Start the inner loop, where the index start from i + 1 and goes until array.length
 * Now, we should make a comparision:
 *    if array[j] < array[lowest]:
 *        lowest = j;
 *
 * After the inner loop, check the the lowest if different of the first loop index.
 * If it's, than, swap their positions
 *
 * And in the the end, check if there was made a swap and if the first loop index is different of 0.
 *    if not, that means the array is sorted.
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    let noSwap = true;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
      noSwap = false;
    }

    if (noSwap && i !== 0) break;
  }
}

const unsortedArray = [1, 5, 2, 6, 4];

console.log("Unsorted: ", unsortedArray);
selectionSort(unsortedArray);
console.log("Sorted: ", unsortedArray);
