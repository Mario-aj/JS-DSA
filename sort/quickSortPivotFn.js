/**
 * [5,2,1,8,4,7,6,3]
 */

function pivot(arr = []) {
  let point = 0;
  let indexToSwap = 0;

  let i = 1;

  const swap = (array, current, incoming) => {
    let temp = array[current];
    array[current] = array[incoming];
    array[incoming] = temp;
  };

  while (i < arr.length) {
    if (arr[point] > arr[i]) {
      swap(arr, i, ++indexToSwap);
    }

    i++;
  }

  swap(arr, point, indexToSwap);

  return indexToSwap;
}

console.log(pivot([5, 2, 1, 8, 4, 7, 6, 3]));
