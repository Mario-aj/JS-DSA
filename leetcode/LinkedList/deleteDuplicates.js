class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length++;

    return this;
  }

  print() {
    let arr = [];

    let current = this.head;

    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    console.log(arr);
  }
}

var deleteDuplicates = function (head) {
  if (!head) return;

  let prev = head;
  let current = head.next;
  let nxt = current.next;
  let count = 0;

  while (current) {
    if (current.value !== nxt?.value) {
      if (!count) {
        prev.next = current;
        prev = prev.next;
      } else {
        count = 0;
      }
    } else {
      count++;
    }

    current = nxt;
    nxt = current?.next;
  }

  prev.next = null;

  return head;
};

const ll = new SinglyLinkedList();
ll.push(1);
ll.push(2);
ll.push(3);
ll.push(3);
ll.push(4);
ll.push(4);
ll.push(5);

deleteDuplicates(ll.head);

ll.print();
