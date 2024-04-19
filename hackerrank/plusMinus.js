/**
 * 
Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

0.400000
0.400000
0.200000
Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

int arr[n]: an array of integers
Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

Input Format

The first line contains an integer, , the size of the array.
The second line contains  space-separated integers that describe .

Constraints



Output Format

Print the following  lines, each to  decimals:

proportion of positive values
proportion of negative values
proportion of zeros
Sample Input

STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
Sample Output

0.500000
0.333333
0.166667
Explanation

There are  positive numbers,  negative numbers, and  zero in the array.
The proportions of occurrence are positive: , negative:  and zeros: 
 */

function plusMinus(arr) {
  let freqCounter = {
    positive: 0,
    negative: 0,
    zero: 0,
  };

  for (let element of arr) {
    if (element > 0) {
      freqCounter["positive"]++;
    } else if (element < 0) {
      freqCounter["negative"]++;
    } else freqCounter["zero"]++;
  }

  Object.values(freqCounter).forEach((val) => {
    console.log((val / arr.length).toFixed(6));
  });
}

plusMinus([1, -2, -7, 9, 1, -8, -5]);

/**
 * Time complexity: O(n)
 * Space complecity: O(1) => because the freqCounter object has a fixed size and does not grow with the input size.
 */
