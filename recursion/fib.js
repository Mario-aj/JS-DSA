/**
 * fib
 * Write a recursive function called fib which accepts a number and returns
 * the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the
 * sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where
 * every number thereafter is equal to the sum of the previous two numbers.
 */

function fib(target) {
  if (target <= 1) return target;

  let results = [1, 1]; // the first two numbers in the serie
  let count = 1;

  function helper(input) {
    if (results.length === input) return;

    let elem = results[count - 1] + results[count];

    results.push(elem);
    count++;

    helper(input);
  }

  helper(target);

  return results[results.length - 1];
}

// Teacher solution
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
