function isPalindrome(num) {
  if (num < 0) return false;

  let digits = [];

  while (num >= 10) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }

  digits.push(num);

  let left = 0;
  let right = digits.length - 1;

  while (left <= right) {
    if (digits[left++] !== digits[right--]) return false;
  }

  return true;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
