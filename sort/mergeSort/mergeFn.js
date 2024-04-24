function merge(arr1 = [], arr2 = []) {
  let result = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

// O(n+m) + O(n) + O(m)
// Time complexity: O(n + m)
// Space complexity: O(n + m)

console.log(
  merge([1, 4, 9, 12, 20, 23, 300], [5, 8, 10, 50, 70, 80, 90, 99, 100])
);
