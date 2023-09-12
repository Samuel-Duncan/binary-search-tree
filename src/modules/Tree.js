import Node from './Node';

export default class Tree {
  constructor(array) {
    this.array = array;
    this.tree = null;
  }

  cleanArray(array) {
    return array.filter((item, index) => array.indexOf(item) === index).sort();
  }

  buildTree(array, start = 0, end = array.length - 1) {
    const mid = Math.floor((start + end) / 2);

    if (start > end) {
      return null;
    }

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
}
