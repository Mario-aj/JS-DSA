/**
 * You are given the pointer to the head node of a sorted linked list, where the
 * data in the nodes is in ascending order. Delete nodes and return a sorted list
 * with each distinct value in the original list. The given head pointer may be null
 * indicating that the list is empty.

  Example

  head refers to the first node in the list 1 => 2 => 2 => 3 => 3 => 3 => null.

  Remove 1 of the  data values and return  pointing to the revised list 1 => 2 => 3 => null.
 */

const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }
};

function removeDuplicates(llist) {
  // Write your code here

  if (!llist) return;

  let head = llist;
  let prev = head;
  let current = llist.next;

  while (current) {
    if (prev.data !== current.data) {
      prev.next = current;
      prev = prev.next;
    }

    current = current.next;
  }

  prev.next = null;

  return head;
}

const llist = new SinglyLinkedList();
llist.insertNode(1);
llist.insertNode(2);
llist.insertNode(2);
llist.insertNode(3);
llist.insertNode(3);
llist.insertNode(3);

console.log(llist);

removeDuplicates(llist.head);
console.log(llist);
