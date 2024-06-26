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
myBST.rInsert(4);
console.log(myBST);
