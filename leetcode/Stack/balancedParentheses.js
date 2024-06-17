class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.top) return false;
    let temp = this.top;
    this.top = this.top.next;

    temp.next = null;
    this.length--;
    return temp;
  }

  isEmpty() {
    return this.top === null;
  }
}

function isBalancedParentheses(parentheses) {
  const stack = new Stack();

  const isBalanced = (str) => {
    const temp = stack.pop();

    if (!temp) return false;

    if (temp.value !== str) return false;

    return true;
  };

  for (let parenthese of parentheses) {
    switch (parenthese) {
      case "(":
      case "{":
      case "[":
        stack.push(parenthese);
        break;

      case ")": {
        if (!isBalanced("(")) return false;
        break;
      }
      case "}": {
        if (!isBalanced("}")) return false;
        break;
      }
      case "]": {
        if (!isBalanced("]")) return false;
        break;
      }
    }
  }

  if (!stack.isEmpty()) return false;

  return true;
}

console.log(isBalancedParentheses("(()())"));
console.log(isBalancedParentheses("(()"));
console.log(isBalancedParentheses(")("));
