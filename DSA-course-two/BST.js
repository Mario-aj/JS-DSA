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

    while (temp) {
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
}

const myBST = new BinarySearchTree();
console.log("========================== INSERT ========================");
myBST.insert(45);
myBST.insert(50);
myBST.insert(25);
console.log(myBST);

myBST.insert(43);
console.log(myBST);
