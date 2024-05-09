/**
 * rotate

 * This function should rotate all the nodes in the list by some number passed in. For instance,
 * if your list looks like 1 -> 2 -> 3 -> 4 -> 5 and you rotate by 2, the list should be modified
 * to 3 -> 4 -> 5 -> 1 -> 2. The number passed in to rotate can be any integer.

 * Time Complexity: O(N), where N is the length of the list.

 * Space Complexity: O(1)


  ** Solution:
  The idea behind this algorithm, it should move each element from the head of the list and
  put it in the tail, it must be in the same order until you hit the number of the rotation.

  PSEUDOCODE:
    while the count is less than the rotate numbers: 
      pick the head
      move the head to be head.next;
      make tail.next to be picked head;
      move tail to be tail.next; 
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
    if (!this.head || num > this.length) return;

    if (num < 0) {
      num += this.length;
    }

    let countOfRotation = 0;

    while (countOfRotation < num) {
      const currentHead = this.head;
      this.head = currentHead.next;

      currentHead.next = null;
      this.tail.next = currentHead;
      this.tail = currentHead;

      countOfRotation++;
    }
  }
}

const ll = new SinglyLinkedList();

ll.push(1);
ll.push(2);
ll.push(3);
ll.push(4);
ll.push(5);

ll.rotate(-1);

console.log(ll.head);
console.log(ll.head.next);
console.log(ll.head.next.next);
