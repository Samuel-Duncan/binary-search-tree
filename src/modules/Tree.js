import Node from './Node';

export default class Tree {
  constructor(array) {
    this.array = Tree.cleanArray(array);
    this.tree = null;
    this.buildTree(this.array);
  }

  static cleanArray(array) {
    return array.filter((item, index) => array.indexOf(item) === index).sort();
  }

  buildTree(array, start = 0, end = array.length - 1) {
    if (start > end) {
      return null;
    }

    const mid = Math.floor((start + end) / 2);
    const node = new Node(array[mid]);
    node.left = this.buildTree(array, start, mid - 1);
    node.right = this.buildTree(array, mid + 1, end);
    this.tree = node;
    return node;
  }

  prettyPrint(node, prefix = '', isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

  insertNode(data) {
    this.tree = Tree.insertRec(this.tree, data);
  }

  static insertRec(root, data) {
    if (root == null) {
      return new Node(data);
    }

    if (data < root.data) {
      root.left = this.insertRec(root.left, data);
    } else if (data > root.data) {
      root.right = this.insertRec(root.right, data);
    }

    return root;
  }

  deleteNode(data) {
    this.tree = Tree.deleteRec(this.tree, data);
  }

  static deleteRec(root, data) {
    if (root == null) {
      return root;
    }

    if (root.data > data) {
      root.left = this.deleteRec(root.left, data);
      return root;
    } if (root.data < data) {
      root.right = this.deleteRec(root.right, data);
      return root;
    }

    if (root.left == null) {
      const current = root.right;
      return current;
    } if (root.right == null) {
      const current = root.left;
      return current;
    }

    let succParent = root;
    let successor = root.right;
    while (successor.left !== null) {
      succParent = successor;
      successor = successor.left;
    }

    if (succParent !== root) {
      succParent.left = successor.right;
    } else {
      succParent.right = successor.right;
    }

    root.data = successor.data;
    return root;
  }

  findNode(data) {
    return (!Tree.findRec(this.tree, data)) ? null : Tree.findRec(this.tree, data);
  }

  static findRec(root, data) {
    if (root == null || root.data === data) {
      return root;
    }

    if (root.data < data) {
      return this.findRec(root.right, data);
    }

    return this.findRec(root.left, data);
  }

  inorder() {
    Tree.inorderRec(this.tree);
  }

  static inorderRec(root) {
    if (root != null) {
      this.inorderRec(root.left);
      console.log(root.data);
      this.inorderRec(root.right);
    }
  }
}
