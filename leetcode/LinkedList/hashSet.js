class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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
  }
  remove(value) {
    if (!this.head) return false;

    let prev = null;
    let current = this.head;

    while (current) {
      if (current.value === value) {
        if (!prev) {
          this.head = this.head.next;
          prev = this.head;
          current = this.head.next;
        } else {
          prev.next = current.next;
          current = current.next;
        }
        this.length--;
      } else {
        prev = current;
        current = current.next;
      }
    }

    if (!this.head.next) {
      this.tail = this.head;
    }

    return false;
  }

  contains(value) {
    if (!this.head) return false;

    let current = this.head;

    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }

    return false;
  }
}

class MyHashSet {
  constructor() {
    this.list = new LinkedList();
  }

  add(key) {
    this.list.push(key);
  }

  remove(key) {
    this.list.remove(key);
  }

  contains(key) {
    return this.list.contains(key);
  }
}

const obj = new MyHashSet();

/**
 * ["MyHashSet","add","add","contains","contains","add","contains","remove","contains","add","contains"]
   [[],[1],[2],[1],[3],[2],[2],[2],[2],[1000000],[1000000]]
 */
obj.add(1);
obj.add(2);
obj.contains(2);
obj.contains(3);
obj.add(2);
obj.contains(2);
obj.remove(2);
obj.contains(2);
obj.add(1000000);
obj.contains(1000000);
