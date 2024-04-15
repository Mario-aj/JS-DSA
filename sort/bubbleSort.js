/**
 * Bubble sort algorithm.
 *
 * The idea.
 * Loop over the array elements unitl the end of the array.
 * Create a inner loop wich will going untill the size of the array - 1 - i (i represents the index of the external loop)
 * inside the inner loop, verify if arr[j] > arr[j+1], if so, mmake a swap.
 * One more thing to make it better, is to add a flag, which will control whether was made a swap or not,
 * to avoid unnecessary loop sections, once the array is already sorted.
 * Then, return the sorted array.
 */

function sort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSwap = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j);
        noSwap = false;
      }
    }

    if (noSwap) break;
  }
  return arr;
}

function swap(arr, j) {
  let temp = arr[j];
  arr[j] = arr[j + 1];
  arr[j + 1] = temp;
}

console.log(sort([8, 5, 9, 10, 2, 15, 4]));
