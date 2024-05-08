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

    let root = this.root;

    while (true) {
      if (!root) {
        this.root = newNode;
        break;
      } else {
        if (root.value > value) {
          if (root.left) {
            root = root.left;
          } else {
            root.left = newNode;
            break;
          }
        } else {
          if (root.right) {
            root = root.right;
          } else {
            root.right = newNode;
            break;
          }
        }
      }
    }

    return this;
  }

  recursiveInsert(value, root = this.root) {
    const newNode = new BinarySearchTreeNode(value);

    if (!root) {
      this.root = newNode;
      return this;
    }

    if (root.value > value) {
      if (root.left) {
        this.recursiveInsert(value, root.left);
      } else {
        root.left = newNode;
        return this;
      }
    } else {
      if (root.right) {
        this.recursiveInsert(value, root.right);
      } else {
        root.right = newNode;
        return this;
      }
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
