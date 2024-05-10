class BinarySearchTreeNode {
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
    const newNode = new BinarySearchTreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (current.value > value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }

        current = current.left;
      } else if (current.value < value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }

        current = current.right;
      } else return this;
    }
  }

  find(value) {
    if (!this.root) return undefined;

    let current = this.root;

    while (true) {
      if (current.value > value) {
        if (!current.left) return undefined;

        current = current.left;
      } else if (current.value < value) {
        if (!current.right) return undefined;

        current = current.right;
      } else return current;
    }
  }

  breadthFirstSearch() {
    if (!this.root) return [];

    const queue = [];
    const result = [];

    queue.push(this.root);

    while (queue.length) {
      let current = queue.shift();

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }

      result.push(current.value);
    }

    return result;
  }

  recursiveInsert(value, current = this.root) {
    const newNode = new BinarySearchTreeNode(value);

    if (!current) {
      this.root = newNode;
      return this;
    }

    if (current.value > value) {
      if (!current.left) {
        current.left = newNode;
        return this;
      }

      this.recursiveInsert(value, current.left);
    } else if (current.value < value) {
      if (!current.right) {
        current.right = newNode;
        return this;
      }

      this.recursiveInsert(value, current.right);
    } else return this;
  }

  recursiveFind(value, current = this.root) {
    if (!current) return undefined;

    if (current.value === value) {
      return current;
    } else if (current.value > value) {
      if (!current.left) return undefined;

      return this.recursiveFind(value, current.left);
    } else {
      if (!current.right) return undefined;

      return this.recursiveFind(value, current.right);
    }
  }
}

const BST = new BinarySearchTree();

console.log("========================= BST =========================");
console.log(BST);

console.log("========================= INSERTING =========================");
BST.insert(8);
BST.insert(3);
BST.insert(10);
BST.insert(1);
BST.recursiveInsert(9);
BST.recursiveInsert(14);
BST.recursiveInsert(6);

console.log(BST.root);

console.log("========================= FINDING =========================");
let found = BST.find(13);
console.log(found);
found = BST.recursiveFind(10);
console.log(found);

console.log("========================= BFS =========================");
let result = BST.breadthFirstSearch();
console.log(result);
