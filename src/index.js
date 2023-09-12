import Tree from './modules/Tree';

const array = [1, 3, 5, 7, 9, 2, 4, 6, 8];
const newTree = new Tree(array);
const sortedArray = newTree.cleanArray(array);
console.log(newTree.buildTree(sortedArray));
newTree.prettyPrint(newTree.tree);
