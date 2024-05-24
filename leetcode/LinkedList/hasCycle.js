class SinglyLinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  insert(value) {
    const node = new SinglyLinkedListNode(value);

    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length++;
  }

  get(position) {
    if (position < 0 || position >= this.length) return undefined;

    let count = 0;

    let current = this.head;

    while (current) {
      if (count === position) return current;

      current = current.next;
      count++;
    }

    return undefined;
  }

  makeCicle(position) {
    if (position < 0 || position >= this.length - 1) return undefined;

    const elementToLink = this.get(position);

    if (!elementToLink) return undefined;

    this.tail.next = elementToLink;
  }
}

function hasCicle(head) {
  if (!head || !head.next) return false;

  const hashTable = {};
  let current = head;

  while (current) {
    let currentCopy = { ...current };

    currentCopy.next = null;

    if (hashTable[JSON.stringify(currentCopy)]) return true;

    hashTable[JSON.stringify(currentCopy)] = true;
    current = current.next;
  }

  return false;
}

const list = new SinglyLinkedList();

list.insert(1);
list.insert(2);

console.log("\n", hasCicle(list.head), "\n");

list.insert(3);
list.insert(4);

console.log(list);
console.log("\n", hasCicle(list.head), "\n");

list.makeCicle(1);
console.log(list);

console.log("======================== Has cicle ========================");
console.log(hasCicle(list.head));
console.log(list);
