/**
 * Given an array, find the maximun sum of subarray with k elements.
 *
 * example: [-1,2,3,1,-3,2]   k: 3
 */

function maxSubarraySum(arr, k) {
  let maxValue = 0;
  let i = 0;

  for (; i < k; i++) {
    maxValue += arr[i];
  }

  for (; i < arr.length; i++) {
    let total = maxValue - arr[i - k] + arr[i];

    maxValue = Math.max(total, maxValue);
  }

  console.log(maxValue);
}

maxSubarraySum([-1, 2, 3, 1, -3, 2], 3);
