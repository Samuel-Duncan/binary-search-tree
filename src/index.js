import Tree from './modules/Tree';

const array = [1, 3, 5, 7, 9, 2, 4, 6, 8];
const newTree = new Tree(array);
newTree.insertNode(10);
newTree.deleteNode(7);
console.log(newTree.findNode(7));
console.log(newTree.findNode(9));
newTree.levelOrder();
newTree.inOrder();
newTree.preOrder();
newTree.postOrder();
newTree.findHeight(2);
newTree.findDepth(10);
newTree.prettyPrint(newTree.tree);
