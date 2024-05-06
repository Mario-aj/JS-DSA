/**
 * Given a pointer to the head of a linked list and a specific position, determine the
 * data value at that position. Count backwards from the tail node. The tail is at
 * postion 0, its parent is at 1 and so on.

Example
head refers to 3 => 2 => 1 => 0 => null
posintionFromTail = 2

Each of the data values matches its distance from the tail. The value 2 is at the desired position.
 */

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    return this;
  }
}

function getNode(llist, positionFromTail) {
  if (!llist) return;

  let llLength = 0;
  let current = llist;

  while (current) {
    current = current.next;
    llLength++;
  }

  let count = 1;
  current = llist;
  const index = llLength - positionFromTail;

  while (count !== index) {
    current = current.next;
    count++;
  }

  return current.data;
}

const llist = new SinglyLinkedList();

llist.push(3);
llist.push(2);
llist.push(1);
llist.push(0);

console.log(llist);

const target = getNode(llist.head, 2);
console.log("value: ", target); // 2
console.log(llist);
