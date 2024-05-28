/**
 * leetcode 9
 * Given an integer x, return true if x is a palindrome , and false otherwise.

Example 1:
  Input: x = 121
  Output: true
  Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
  Input: x = -121
  Output: false
  Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
  Input: x = 10
  Output: false
  Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 
Constraints:
  -231 <= x <= 231 - 1
 
Follow up: Could you solve it without converting the integer to a string?
 */

/**
 * The Idea behind the algorithm
 * Just reversing the number and compare in the last if them are equal.
 * I'm reversing the number by picking the rest of division by ten which is always the last digit of the number, so for ex:
 *
 * x = 1245
 * my while will do:
 *  first step:
 *    0 * 10 + 5 => 5;
 *    num = 124;
 *  second step:
 *    5 * 10 + 4 => 54;
 *    num = 12
 * and so on.
 */

function isPalindrome(x) {
  if (x < 0) return false;

  let num = x;
  let result = 0;

  while (num > 0) {
    result = result * 10 + (num % 10);

    num = Math.floor(num / 10);
  }

  return result === x;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
