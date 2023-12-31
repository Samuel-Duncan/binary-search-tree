/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Tree */ \"./src/modules/Tree.js\");\n\n\n// Generate random array 1-100\nconst randomArray = () => {\n  const array = [];\n  for (let i = 0; i < 100; i++) {\n    array.push(Math.floor(Math.random() * (100 - 1)) + 1);\n  }\n\n  return array;\n};\n\n// Create Binary tree from random array\nconst newTree = new _modules_Tree__WEBPACK_IMPORTED_MODULE_0__[\"default\"](randomArray());\nnewTree.prettyPrint(newTree.tree);\n\n// Check if tree is balanced\nconsole.log(`Balanced: ${newTree.isBalanced(newTree.tree)}`);\n\n// Print tree in level, pre, post, and in order\nconsole.log(`levelOrder: ${newTree.levelOrder()}`);\nconsole.log(`preOrder: ${newTree.preOrder()}`);\nconsole.log(`postOrder: ${newTree.postOrder()}`);\nconsole.log(`inOrder: ${newTree.inOrder()}`);\n\n// Unbalance the tree by adding several numbers > 100\nconst insertRandom = (tree) => {\n  for (let i = 0; i < 25; i++) {\n    tree.insertNode(Math.floor(Math.random() * (200 - 101)) + 101);\n  }\n};\n\ninsertRandom(newTree);\nnewTree.prettyPrint(newTree.tree);\n\n// Confirm tree is unbalanced\nconsole.log(`Balanced: ${newTree.isBalanced(newTree.tree)}`);\n\n// Rebalance the tree\nnewTree.rebalance();\nnewTree.prettyPrint(newTree.tree);\n\n// Confirm tree is rebalanced\nconsole.log(`Balanced: ${newTree.isBalanced(newTree.tree)}`);\n\n// Print tree in level, pre, post, and in order\nconsole.log(`levelOrder: ${newTree.levelOrder()}`);\nconsole.log(`preOrder: ${newTree.preOrder()}`);\nconsole.log(`postOrder: ${newTree.postOrder()}`);\nconsole.log(`inOrder: ${newTree.inOrder()}`);\n\n\n//# sourceURL=webpack://binary-search-tree/./src/index.js?");

/***/ }),

/***/ "./src/modules/Node.js":
/*!*****************************!*\
  !*** ./src/modules/Node.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Node)\n/* harmony export */ });\nclass Node {\n  constructor(data) {\n    this.data = data;\n    this.left = null;\n    this.right = null;\n  }\n}\n\n\n//# sourceURL=webpack://binary-search-tree/./src/modules/Node.js?");

/***/ }),

/***/ "./src/modules/Queue.js":
/*!******************************!*\
  !*** ./src/modules/Queue.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Queue)\n/* harmony export */ });\nclass Queue {\n  constructor() {\n    this.items = [];\n  }\n\n  enqueue(item) {\n    this.items.push(item);\n  }\n\n  dequeue() {\n    if (this.isEmpty()) {\n      return null;\n    }\n    return this.items.shift();\n  }\n\n  front() {\n    if (this.isEmpty()) {\n      return null;\n    }\n    return this.items[0];\n  }\n\n  isEmpty() {\n    return this.items.length === 0;\n  }\n\n  size() {\n    return this.items.length;\n  }\n\n  clear() {\n    this.items = [];\n  }\n}\n\n\n//# sourceURL=webpack://binary-search-tree/./src/modules/Queue.js?");

/***/ }),

/***/ "./src/modules/Tree.js":
/*!*****************************!*\
  !*** ./src/modules/Tree.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tree)\n/* harmony export */ });\n/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ \"./src/modules/Node.js\");\n/* harmony import */ var _Queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Queue */ \"./src/modules/Queue.js\");\n\n\n\nclass Tree {\n  constructor(array) {\n    this.array = Tree.cleanArray(array);\n    this.tree = null;\n    this.buildTree(this.array);\n  }\n\n  static cleanArray(array) {\n    return array.filter((item, index) => array.indexOf(item) === index).sort();\n  }\n\n  buildTree(array, start = 0, end = array.length - 1) {\n    if (start > end) {\n      return null;\n    }\n\n    const mid = Math.floor((start + end) / 2);\n    const node = new _Node__WEBPACK_IMPORTED_MODULE_0__[\"default\"](array[mid]);\n    node.left = this.buildTree(array, start, mid - 1);\n    node.right = this.buildTree(array, mid + 1, end);\n    this.tree = node;\n    return node;\n  }\n\n  prettyPrint(node, prefix = '', isLeft = true) {\n    if (node === null) {\n      return;\n    }\n    if (node.right !== null) {\n      this.prettyPrint(\n        node.right,\n        `${prefix}${isLeft ? '│   ' : '    '}`,\n        false,\n      );\n    }\n    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);\n    if (node.left !== null) {\n      this.prettyPrint(\n        node.left,\n        `${prefix}${isLeft ? '    ' : '│   '}`,\n        true,\n      );\n    }\n  }\n\n  insertNode(data) {\n    this.tree = Tree.insertRec(this.tree, data);\n  }\n\n  static insertRec(root, data) {\n    if (root == null) {\n      return new _Node__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data);\n    }\n\n    if (data < root.data) {\n      root.left = this.insertRec(root.left, data);\n    } else if (data > root.data) {\n      root.right = this.insertRec(root.right, data);\n    }\n\n    return root;\n  }\n\n  deleteNode(data) {\n    this.tree = Tree.deleteRec(this.tree, data);\n  }\n\n  static deleteRec(root, data) {\n    if (root == null) {\n      return root;\n    }\n\n    if (root.data > data) {\n      root.left = this.deleteRec(root.left, data);\n      return root;\n    } if (root.data < data) {\n      root.right = this.deleteRec(root.right, data);\n      return root;\n    }\n\n    if (root.left == null) {\n      const current = root.right;\n      return current;\n    } if (root.right == null) {\n      const current = root.left;\n      return current;\n    }\n\n    let succParent = root;\n    let successor = root.right;\n    while (successor.left !== null) {\n      succParent = successor;\n      successor = successor.left;\n    }\n\n    if (succParent !== root) {\n      succParent.left = successor.right;\n    } else {\n      succParent.right = successor.right;\n    }\n\n    root.data = successor.data;\n    return root;\n  }\n\n  findNode(data) {\n    return (\n      !Tree.findRec(this.tree, data)) ? `Node ${data} not found.`\n      : Tree.findRec(this.tree, data);\n  }\n\n  static findRec(root, data) {\n    if (root == null || root.data === data) {\n      return root;\n    }\n\n    if (root.data < data) {\n      return this.findRec(root.right, data);\n    }\n\n    return this.findRec(root.left, data);\n  }\n\n  levelOrder() {\n    return Tree.levelOrderRec(this.tree);\n  }\n\n  static levelOrderRec(root) {\n    const result = [];\n\n    const levelOrder = () => {\n      if (root == null) {\n        return;\n      }\n\n      const queue = new _Queue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n      queue.enqueue(root);\n\n      while (!queue.isEmpty()) {\n        const current = queue.dequeue();\n        result.push(current.data);\n\n        if (current.left != null) {\n          queue.enqueue(current.left);\n        }\n        if (current.right != null) {\n          queue.enqueue(current.right);\n        }\n      }\n    };\n\n    levelOrder();\n    return result;\n  }\n\n  inOrder() {\n    return Tree.inOrderRec(this.tree);\n  }\n\n  static inOrderRec(root) {\n    const result = [];\n\n    const inOrder = (node) => {\n      if (node != null) {\n        inOrder(node.left);\n        result.push(node.data);\n        inOrder(node.right);\n      }\n    };\n\n    inOrder(root);\n    return result;\n  }\n\n  preOrder() {\n    return Tree.preOrderRec(this.tree);\n  }\n\n  static preOrderRec(root) {\n    const result = [];\n\n    const preOrder = (node) => {\n      if (node == null) {\n        return;\n      }\n\n      result.push(node.data);\n      preOrder(node.left);\n      preOrder(node.right);\n    };\n\n    preOrder(root);\n    return result;\n  }\n\n  postOrder() {\n    return Tree.postOrderRec(this.tree);\n  }\n\n  static postOrderRec(root) {\n    const result = [];\n\n    const postOrder = (node) => {\n      if (node == null) {\n        return;\n      }\n\n      postOrder(node.left);\n      postOrder(node.right);\n      result.push(node.data);\n    };\n\n    postOrder(root);\n    return result;\n  }\n\n  findHeight(x) {\n    const height = Tree.findHeightRec(this.tree, x);\n    if (height !== undefined) {\n      return `Height: ${height}`;\n    }\n    return `Node ${x} not found.`;\n  }\n\n  static findHeightRec(root, x) {\n    let height;\n\n    const findHeight = (node, y) => {\n      if (node == null) {\n        return -1;\n      }\n\n      const leftHeight = findHeight(node.left, y);\n      const rightHeight = findHeight(node.right, y);\n      const answer = Math.max(leftHeight, rightHeight) + 1;\n\n      if (node.data === y) {\n        height = answer;\n      }\n\n      return answer;\n    };\n\n    findHeight(root, x);\n    return height;\n  }\n\n  findDepth(x) {\n    const depth = Tree.findDepthRec(this.tree, x);\n    if (depth >= 0) {\n      return `Depth: ${depth}`;\n    }\n    return `Node ${x} not found.`;\n  }\n\n  static findDepthRec(root, x) {\n    if (root == null) {\n      return -1;\n    }\n\n    let depth = -1;\n    if ((root.data === x)\n    || (depth = this.findDepthRec(root.left, x)) >= 0\n    || (depth = this.findDepthRec(root.right, x)) >= 0) {\n      return depth + 1;\n    }\n\n    return depth;\n  }\n\n  isBalanced(root) {\n    if (root == null) {\n      return true;\n    }\n\n    const leftHeight = Tree.height(root.left);\n    const rightHeight = Tree.height(root.right);\n\n    if (Math.abs(leftHeight - rightHeight) <= 1\n    && this.isBalanced(root.left) === true\n    && this.isBalanced(root.right) === true) {\n      return true;\n    }\n\n    return false;\n  }\n\n  static height(root) {\n    if (root == null) {\n      return 0;\n    }\n\n    return Math.max(\n      this.height(root.left),\n      this.height(root.right),\n    ) + 1;\n  }\n\n  rebalance() {\n    return this.buildTree(this.inOrder());\n  }\n}\n\n\n//# sourceURL=webpack://binary-search-tree/./src/modules/Tree.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;