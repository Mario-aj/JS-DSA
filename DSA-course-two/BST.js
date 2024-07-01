class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return;
    }

    let temp = this.root;

    while (true) {
      if (temp.value > value) {
        if (!temp.left) {
          temp.left = node;
          return;
        }

        temp = temp.left;
      } else if (temp.value < value) {
        if (!temp.right) {
          temp.right = node;
          return;
        }

        temp = temp.right;
      }
    }
  }
  makeEmpty() {
    this.root = null;
  }

  search(value) {
    if (!this.root) return false;

    let temp = this.root;

    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else return true;
    }

    return false;
  }

  rSearch(value, node = this.root) {
    if (!node) return false;

    if (node.value === value) return true;

    if (node.value > value) return this.rSearch(value, node.left);

    return this.rSearch(value, node.right);
  }

  rInsert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    this.#rInsert(this.root, value);
  }

  #rInsert(currentNode, value) {
    if (!currentNode) return new Node(value);

    if (currentNode.value > value) {
      currentNode.left = this.#rInsert(currentNode.left, value);
    } else if (currentNode.value < value) {
      currentNode.right = this.#rInsert(currentNode.right, value);
    }

    return currentNode;
  }

  remove(value) {
    this.root = this.#remove(value, this.root);
  }

  #remove(value, currentNode) {
    if (!currentNode) return null;

    if (currentNode.value > value) {
      currentNode.left = this.#remove(value, currentNode.left);
    } else if (currentNode.value < value) {
      currentNode.right = this.#remove(value, currentNode.right);
    } else {
      if (!currentNode.left && !currentNode.right) return null;

      if (!currentNode.right) return currentNode.left;
      if (!currentNode.left) return currentNode.right;

      let subTreeMinValue = this.#findMinValueOfSubTree(currentNode.right);

      currentNode.value = subTreeMinValue;
      currentNode.right = this.#remove(subTreeMinValue, currentNode.right);
    }

    return currentNode;
  }

  #findMinValueOfSubTree(node) {
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

  dfsPreOrder() {
    if (!this.root) return;
    let results = [];
    function traverse(node) {
      results.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return results;
  }

  dfsInOrder() {
    if (!this.root) return undefined;

    let results = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      results.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return results;
  }

  dfsPostOrder() {
    if (!this.root) return;
    let results = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      results.push(node.value);
    }

    traverse(this.root);

    return results;
  }
}

const myBST = new BinarySearchTree();
console.log("========================== INSERT ========================");
myBST.insert(45);
myBST.insert(50);
myBST.insert(25);
console.log(myBST);

myBST.insert(43);
console.log(myBST);

console.log("================== CONTAINS ========================");
console.log(myBST.search(25));
console.log(myBST.search(26));
console.log(myBST.search(45));

console.log("========================== R-INSERT ========================");
myBST.makeEmpty();
myBST.rInsert(45);
myBST.rInsert(50);
myBST.rInsert(25);
myBST.rInsert(15);
myBST.rInsert(2);
console.log(myBST.root);

console.log(
  "========================== REMOVE LEAF NODE ========================"
);
myBST.remove(2);
console.log(myBST.root);

console.log(
  "========================== REMOVE NODE WITH LEFT CHILD ========================"
);
myBST.remove(25);
console.log(myBST.root);

console.log(
  "========================== REMOVE NODE WITH RIGHT CHILD ========================"
);
myBST.rInsert(23);
console.log(myBST.root);
myBST.remove(15);
console.log(myBST.root);

console.log(
  "========================== REMOVE NODE WITH BITH LEFT AND RIGHT ========================"
);
myBST.rInsert(60);
myBST.rInsert(58);
myBST.rInsert(75);
myBST.rInsert(47);
myBST.rInsert(48);
myBST.rInsert(46);
myBST.remove(50);
console.log(myBST.root);

console.log("========================== BFS ========================");
console.log(myBST.bfs());
