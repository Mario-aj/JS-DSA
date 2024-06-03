function minSubArrayLen(arr, k) {
  let minLength = Number.MAX_VALUE;
  /**
   * 2, 3, 1, 2, 4, 3 / 7
   *
   * */
  let startWindow = 0;
  let endWindow = 0;

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (sum >= k) {
      startWindow++;
    } else {
      sum += arr[endWindow];
      endWindow++;
    }
  }

  console.log(minLength);
}
minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0
