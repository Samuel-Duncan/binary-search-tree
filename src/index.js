import Tree from './modules/Tree';

// const array = [1, 3, 5, 7, 9, 2, 4, 6, 8];
// const newTree = new Tree(array);
// newTree.insertNode(10);
// newTree.deleteNode(7);

// console.log(newTree.findNode(9));
// console.log(newTree.findNode(7));
// console.log(`levelOrder: ${newTree.levelOrder()}`);
// console.log(`inOrder: ${newTree.inOrder()}`);
// console.log(`preOrder: ${newTree.preOrder()}`);
// console.log(`postOrder: ${newTree.postOrder()}`);
// console.log(newTree.findHeight(3));
// console.log(newTree.findDepth(3));
// newTree.prettyPrint(newTree.tree);
// console.log(`Balanced: ${newTree.isBalanced(newTree.tree)}`);
// for (let i = 11; i <= 21; i++) {
//   newTree.insertNode(i);
// }
// newTree.prettyPrint(newTree.tree);
// console.log(`Balanced: ${newTree.isBalanced(newTree.tree)}`);
// newTree.rebalance();
// newTree.prettyPrint(newTree.tree);
// console.log(`Balanced: ${newTree.isBalanced(newTree.tree)}`);

// generate random array 1-100
const randomArray = () => {
  const array = [];
  for (let i = 0; i < 100; i++) {
    array.push(Math.floor(Math.random() * (100 - 1)) + 1);
  }

  return array;
};

// Create Binary tree from random array
const newTree = new Tree(randomArray());

// Check if tree is balanced
console.log(newTree.isBalanced(newTree.tree));
console.log(`levelOrder: ${newTree.levelOrder()}`);
console.log(`preOrder: ${newTree.preOrder()}`);
console.log(`postOrder: ${newTree.postOrder()}`);
console.log(`inOrder: ${newTree.inOrder()}`);
