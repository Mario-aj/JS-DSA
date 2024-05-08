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
}

const BST = new BinarySearchTree();

console.log("========================= BST =========================");
console.log(BST);

console.log("========================= INSERTING =========================");
BST.insert(8);
BST.insert(3);
BST.insert(10);
BST.insert(1);
BST.insert(9);
BST.insert(14);
BST.insert(6);

console.log(BST.root);
