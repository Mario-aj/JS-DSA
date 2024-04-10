function collectOddValues(nums) {
  let results = [];

  function helper(inputs) {
    if (inputs.length === 0) return;

    if (inputs[0] % 2 !== 0) {
      results.push(inputs[0]);
    }

    return helper(inputs.slice(1));
  }

  helper(nums);

  return results;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
