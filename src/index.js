import Tree from './modules/Tree';

const array = [1, 3, 5, 7, 9, 2, 4, 6, 8];
const newTree = new Tree(array);
newTree.insertNode(10);
newTree.deleteNode(7);
console.log(newTree.findNode(7));
console.log(newTree.findNode(9));
console.log(`levelOrder: ${newTree.levelOrder()}`);
console.log(`inOrder: ${newTree.inOrder()}`);
console.log(`preOrder: ${newTree.preOrder()}`);
console.log(`postOrder: ${newTree.postOrder()}`);
console.log(newTree.findHeight(3));
console.log(newTree.findDepth(3));
newTree.prettyPrint(newTree.tree);
