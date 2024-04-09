function sumRange(num) {
  if (num === 1) {
    return num;
  }

  return num + sumRange(--num);
}

console.log(sumRange(4)); // 10
console.log(sumRange(3)); // 6
console.log(sumRange(10)); // 55
