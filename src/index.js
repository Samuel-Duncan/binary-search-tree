import Tree from './modules/Tree';

// Generate random array 1-100
const randomArray = () => {
  const array = [];
  for (let i = 0; i < 100; i++) {
    array.push(Math.floor(Math.random() * (100 - 1)) + 1);
  }

  return array;
};

// Create Binary tree from random array
const newTree = new Tree(randomArray());
newTree.prettyPrint(newTree.tree);

// Check if tree is balanced
console.log(`Balanced: ${newTree.isBalanced(newTree.tree)}`);

// Print tree in level, pre, post, and in order
console.log(`levelOrder: ${newTree.levelOrder()}`);
console.log(`preOrder: ${newTree.preOrder()}`);
console.log(`postOrder: ${newTree.postOrder()}`);
console.log(`inOrder: ${newTree.inOrder()}`);

// Unbalance the tree by adding several numbers > 100
const insertRandom = (tree) => {
  for (let i = 0; i < 25; i++) {
    tree.insertNode(Math.floor(Math.random() * (200 - 101)) + 101);
  }
};

insertRandom(newTree);
newTree.prettyPrint(newTree.tree);

// Confirm tree is unbalanced
console.log(`Balanced: ${newTree.isBalanced(newTree.tree)}`);

// Rebalance the tree
newTree.rebalance();
newTree.prettyPrint(newTree.tree);

// Confirm tree is rebalanced
console.log(`Balanced: ${newTree.isBalanced(newTree.tree)}`);

// Print tree in level, pre, post, and in order
console.log(`levelOrder: ${newTree.levelOrder()}`);
console.log(`preOrder: ${newTree.preOrder()}`);
console.log(`postOrder: ${newTree.postOrder()}`);
console.log(`inOrder: ${newTree.inOrder()}`);
