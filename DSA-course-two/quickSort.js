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

const arr = [4, 1, 6, 7, 3, 2, 5];

console.log(pivot(arr, 0, arr.length - 1));
