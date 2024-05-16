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

  DFSPreorder() {
    let results = [];
    function traverse(current) {
      if (!current) return;
      results.push(current.value);

      traverse(current.left);
      traverse(current.right);
    }

    traverse(this.root);

    return results;
  }

  DFSPostorder() {
    let results = [];

    function traverse(current) {
      if (!current) return;

      traverse(current.left);
      traverse(current.right);

      results.push(current.value);
    }

    traverse(this.root);

    return results;
  }

  DFSInorder() {
    let results = [];

    function traverse(current) {
      if (!current) return;

      traverse(current.left);
      results.push(current.value);
      traverse(current.right);
    }

    traverse(this.root);

    return results;
  }

  remove(value) {
    if (!this.root) return;

    this.root = this.#removeNode(this.root, value);
  }

  #removeNode(node, value) {
    if (node.value === value) {
      if (node.right && node.left) {
        let current = node.right;

        while (current.left) {
          current = current.left;
        }

        let temp = node;
        node.value = current.value;
        current.value = temp.value;

        node.right = this.#removeNode(node.right, current.value);

        return node;
      }

      if (node.left) {
        node = node.left;
        return node;
      }

      if (node.right) {
        node = node.right;
        return node;
      }

      return null;
    } else if (node.value > value) {
      if (node.left) {
        node.left = this.#removeNode(node.left, value);
      }

      return node;
    } else {
      if (node.right) {
        node.right = this.#removeNode(node.right, value);
      }

      return node;
    }
  }

  findSecondLargest() {
    if (!this.root || (!this.root.right && !this.root.left)) return;

    let results = this.DFSInorder();

    return results[results.length - 2];
  }

  DFSPreorderRecursive(current = this.root, results = []) {
    if (!current) return;

    results.push(current.value);

    this.DFSPreorderRecursive(current.left, results);
    this.DFSPreorderRecursive(current.right, results);

    return results;
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
BST.recursiveInsert(15);

console.log(BST.root);

console.log("========================= FINDING =========================");
let found = BST.find(13);
console.log(found);
found = BST.recursiveFind(10);
console.log(found);

console.log("========================= BFS =========================");
let result = BST.breadthFirstSearch();
console.log(result);

console.log("========================= DFS PREORDER =========================");
result = BST.DFSPreorderRecursive();
console.log(result);
result = BST.DFSPreorder();
console.log(result);

console.log("======================== DFS POSTORDER ========================");
result = BST.DFSPostorder();
console.log(result);

console.log("======================== DFS INORDER ========================");
result = BST.DFSInorder();
console.log(result);

console.log("====================== DFS REMOVE a left ======================");
console.log(BST);
BST.remove(1);
console.log(BST.root);

console.log("================== DFS REMOVE with one Child ==================");
BST.remove(14);
console.log(BST.root);

console.log("================ DFS REMOVE with two children =================");
BST.remove(10);
console.log(BST.root);

console.log("======================= DFS REMOVE ROOT =======================");
BST.remove(8);
console.log(BST.root);

console.log("========== DFS REMOVE a value that is not in the tree ==========");
BST.remove(100);
console.log(BST.root);

console.log("========== DFS SECONDA LARGEST VALUE ==========");
result = BST.findSecondLargest();
console.log(result);
