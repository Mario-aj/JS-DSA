function collectOddValues(nums) {
  let results = [];

  if (nums.length === 0) return [];

  if (nums[0] % 2 !== 0) {
    results.push(nums[0]);
  }

  results = results.concat(collectOddValues(nums.slice(1)));

  return results;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
