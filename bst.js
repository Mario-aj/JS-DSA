class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this.#rInsert(value, this.root);

    return this;
  }

  #rInsert(value, current) {
    if (!current) return new Node(value);

    if (current.value > value) {
      current.left = this.#rInsert(value, current.left);
    } else if (current.value < value) {
      current.right = this.#rInsert(value, current.right);
    }

    return current;
  }

  search(value, node = this.root) {
    if (!node) return false;

    if (node.value > value) {
      return this.search(value, node.left);
    }

    if (node.value < value) {
      return this.search(value, node.right);
    }

    return true;
  }

  delete(value) {
    this.root = this.#delete(value, this.root);
  }

  #delete(value, node) {
    if (!node) return null;

    if (node.value > value) {
      node.left = this.#delete(value, node.left);
    } else if (node.value < value) {
      node.right = this.#delete(value, node.right);
    } else {
      if (!node.left && !node.right) return null;

      if (!node.left) return node.right;
      if (!node.right) return node.left;

      let minSubtreeValue = this.#findMinSubtreeValue(node.right);

      node.value = minSubtreeValue;
      node.right = this.#delete(minSubtreeValue, node.right);
    }

    return node;
  }

  #findMinSubtreeValue(node) {
    while (node.left) {
      node = node.left;
    }

    return node.value;
  }

  bfs() {
    if (!this.root) return [];

    let queue = [];
    let result = [];

    queue.push(this.root);

    while (queue.length) {
      let node = queue.shift();

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      result.push(node.value);
    }

    return result;
  }
}

const myTree = new BinarySearchTree();

myTree.insert(50);
myTree.insert(80);
myTree.insert(40);
myTree.insert(23);
myTree.insert(60);
myTree.insert(90);
myTree.insert(45);
myTree.insert(65);
console.log(myTree.root);

console.log(myTree.search(100));
console.log(myTree.search(60));
console.log(myTree.search(10));
console.log(myTree.search(45));

myTree.delete(80);

console.log(myTree.bfs());
