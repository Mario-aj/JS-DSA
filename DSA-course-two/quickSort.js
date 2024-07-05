function swap(arr, firstIdx, secondIdx) {
  let temp = arr[firstIdx];
  arr[firstIdx] = arr[secondIdx];
  arr[secondIdx] = temp;
}

function pivot(arr, pivotIndex = 0, maxIdx = arr.length - 1) {
  let swapIndex = pivotIndex;

  for (let i = pivotIndex + 1; i <= maxIdx; i++) {
    if (arr[i] < arr[pivotIndex]) {
      swapIndex++;
      swap(arr, i, swapIndex);
    }
  }

  swap(arr, pivotIndex, swapIndex);

  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

const arr = [4, 1, 6, 7, 3, 2, 5];
const sorted = quickSort(arr);
console.log(sorted);
