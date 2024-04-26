/**
 * You are in charge of the cake for a child's birthday. You have decided the cake will
 * have one candle for each year of their total age. They will only be able to blow out
 * the tallest of the candles. Count how many candles are tallest.

 * Example
 * candle = [4,4,1,3]

 * The maximum height candles are 4 units high. There are 2 of them, so return 2.
 */

function birthdayCakeCandles(candles = []) {
  let frequencyCandlesCount = {};

  for (let candle of candles) {
    frequencyCandlesCount[candle]
      ? frequencyCandlesCount[candle]++
      : (frequencyCandlesCount[candle] = 1);
  }

  let tallestCandle = -Infinity;

  Object.keys(frequencyCandlesCount).forEach((candle) => {
    if (Number(candle) > tallestCandle) {
      tallestCandle = candle;
    }
  });

  return frequencyCandlesCount[tallestCandle];
}

console.log(birthdayCakeCandles([4, 4, 1, 3])); // 2
console.log(birthdayCakeCandles([3, 2, 1, 3])); // 2
console.log(birthdayCakeCandles([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 1
