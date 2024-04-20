/**
This is a staircase of size :

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Function Description

Complete the staircase function in the editor below.

staircase has the following parameter(s):

int n: an integer
Print

Print a staircase as described above.

Input Format

A single integer, , denoting the size of the staircase.

Constraints

 .

Output Format

Print a staircase of size  using # symbols and spaces.

Note: The last line must have  spaces in it.

Sample Input

6 
Sample Output

     #
    ##
   ###
  ####
 #####
######
Explanation

The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n 
 */

function staircase(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i + j >= n - 1) {
        process.stdout.write("#");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}

// staircase(4);

function staircase_O_OF_N_2(n) {
  for (let i = 1; i <= n; i++) {
    process.stdout.write(" ".repeat(n - i));
    process.stdout.write("#".repeat(i));
    console.log();
  }
}

function staircase_O_OF_N(n) {
  let str = "#";
  let spaces = " ".repeat(n - 1);

  for (let i = 1; i <= n; i++) {
    console.log(spaces + str);
    spaces = spaces.substring(1);
    str += "#";
  }
}

staircase_O_OF_N(4);
