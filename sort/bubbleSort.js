function sort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j);
      }
    }
  }
  return arr;
}

function swap(arr, j) {
  let temp = arr[j];
  arr[j] = arr[j + 1];
  arr[j + 1] = temp;
}

console.log(sort([8, 5, 9, 10, 2, 15, 4]));
