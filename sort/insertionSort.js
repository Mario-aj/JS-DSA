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
