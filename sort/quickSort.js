function pivot(arr = [], start = 0, end = arr.length - 1) {
  let i = start;
  let indexToSwap = start;

  const swap = (array, current, incoming) => {
    let temp = array[current];
    array[current] = array[incoming];
    array[incoming] = temp;
  };

  while (i <= end) {
    if (arr[start] > arr[i]) {
      swap(arr, i, ++indexToSwap);
    }

    i++;
  }

  swap(arr, start, indexToSwap);

  return indexToSwap;
}

function quickSort(arr = [], left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);

    quickSort(arr, left, pivotIndex - 1); // left portion of the array
    quickSort(arr, pivotIndex + 1, right); // right portion of the array
  }

  return arr;
}

const unsorted = [5, 2, 1, 8, 4, 7, 6, 3];
const sorted = quickSort(unsorted);

console.log(sorted);
