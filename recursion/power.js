/**
 * power
 Write a function called power which accepts a base and an exponent.
 The function should return the power of the base to the exponent.
 This function should mimic the functionality of Math.pow()
 Do not worry about negative bases and exponents.
 */

function power(base, exponent) {
  let result = 1;

  function helper(input) {
    if (input < 1) return;

    result *= base;

    helper(--input);
  }

  helper(exponent);

  return result;
}

function powerPureFn(base, exponent) {
  if (exponent < 1) return 1;

  return base * powerPureFn(base, --exponent);
}

// 2 * 4
// 2 * 2
// 2 * 1
// 1

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
console.log(power(10, 5));

console.log(powerPureFn(2, 0));
console.log(powerPureFn(2, 2));
console.log(powerPureFn(2, 4));
console.log(powerPureFn(10, 5));
