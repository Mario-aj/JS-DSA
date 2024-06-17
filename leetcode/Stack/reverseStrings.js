/**
Stack: Reverse String ( ** Interview Question)
Implement a function called reverseString() that takes a string as input and returns a new string with its characters reversed, using the Stack class provided.

Output:
  The method should return a new string with the characters of the input string reversed.

Constraints:
  You must use the provided Stack class to reverse the string.
  You cannot use built-in string manipulation methods for reversing the string.

Function Signature:
  function reverseString(string) {
      // Your implementation goes here
  }

Example 1:
  const input = "hello";
  const output = reverseString(input);
  The output should be the string "olleh".

Example 2:
  const input = "Udemy";
  const output = reverseString(input);
  The output should be the string "ymedU". 
 */

class Stack {
  constructor() {
    this.stackList = [];
  }

  getStackList() {
    return this.stackList;
  }

  printStack() {
    for (let i = this.stackList.length - 1; i >= 0; i--) {
      console.log(this.stackList[i]);
    }
  }

  isEmpty() {
    return this.stackList.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.stackList[this.stackList.length - 1];
    }
  }

  size() {
    return this.stackList.length;
  }

  push(value) {
    this.stackList.push(value);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.stackList.pop();
  }
}

function reverseString(str) {
  if (!str) return "";

  const stack = new Stack();

  for (let s of str) {
    stack.push(s);
  }

  let reversedString = "";
  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }

  return reversedString;
}
