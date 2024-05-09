/**
 * rotate

 * This function should rotate all the nodes in the list by some number passed in. For instance,
 * if your list looks like 1 -> 2 -> 3 -> 4 -> 5 and you rotate by 2, the list should be modified
 * to 3 -> 4 -> 5 -> 1 -> 2. The number passed in to rotate can be any integer.

 * Time Complexity: O(N), where N is the length of the list.

 * Space Complexity: O(1)
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  rotate(num) {
    if (!this.head) return;

    let prev = null;
    let current = this.head;
    let countOfRotation = 0;

    while (countOfRotation < num && current) {
      let nxt = current.next;
      current.next = prev;
      prev = current;
      current = nxt;
      countOfRotation++;
    }

    this.tail = this.head;
    this.tail.next = null;

    if (countOfRotation === num && current) {
      this.head = current;

      while (current.next) {
        current = current.next;
      }

      current.next = prev;
      return;
    }

    this.head = prev;
  }
}

const ll = new SinglyLinkedList();

ll.push(1);
ll.push(2);
ll.push(3);
ll.push(4);
ll.push(5);

ll.rotate(2);

console.log(ll);
