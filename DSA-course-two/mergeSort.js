function merge(array1, array2) {
  let i = 0;
  let j = 0;
  let combinedArray = [];

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      combinedArray.push(array1[i++]);
    } else {
      combinedArray.push(array2[j++]);
    }
  }

  while (i < array1.length) combinedArray.push(array1[i++]);

  while (j < array2.length) combinedArray.push(array2[j++]);

  return combinedArray;
}

function mergeSort(arr = []) {
  if (!arr.length) return [];

  if (arr.length === 1) return arr;

  let middle = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, middle));
  let rigth = mergeSort(arr.slice(middle));

  return merge(left, rigth);
}

const unsorted = [5, 4, 7, 1, 3, 2, 8, 6];
const sorted = mergeSort(unsorted);
console.log(sorted); // [1,2,3,4,5,6,7,8]
