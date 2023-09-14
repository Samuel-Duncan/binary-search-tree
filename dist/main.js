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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Tree */ \"./src/modules/Tree.js\");\n\n\nconst array = [1, 3, 5, 7, 9, 2, 4, 6, 8];\nconst newTree = new _modules_Tree__WEBPACK_IMPORTED_MODULE_0__[\"default\"](array);\nnewTree.insertNode(10);\nnewTree.deleteNode(7);\nconsole.log(newTree.findNode(7));\nconsole.log(newTree.findNode(9));\nnewTree.inorder();\nconsole.log(newTree.tree);\nnewTree.prettyPrint(newTree.tree);\n\n\n//# sourceURL=webpack://binary-search-tree/./src/index.js?");

/***/ }),

/***/ "./src/modules/Node.js":
/*!*****************************!*\
  !*** ./src/modules/Node.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Node)\n/* harmony export */ });\nclass Node {\n  constructor(data) {\n    this.data = data;\n    this.left = null;\n    this.right = null;\n  }\n}\n\n\n//# sourceURL=webpack://binary-search-tree/./src/modules/Node.js?");

/***/ }),

/***/ "./src/modules/Tree.js":
/*!*****************************!*\
  !*** ./src/modules/Tree.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tree)\n/* harmony export */ });\n/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ \"./src/modules/Node.js\");\n\n\nclass Tree {\n  constructor(array) {\n    this.array = Tree.cleanArray(array);\n    this.tree = null;\n    this.buildTree(this.array);\n  }\n\n  static cleanArray(array) {\n    return array.filter((item, index) => array.indexOf(item) === index).sort();\n  }\n\n  buildTree(array, start = 0, end = array.length - 1) {\n    if (start > end) {\n      return null;\n    }\n\n    const mid = Math.floor((start + end) / 2);\n    const node = new _Node__WEBPACK_IMPORTED_MODULE_0__[\"default\"](array[mid]);\n    node.left = this.buildTree(array, start, mid - 1);\n    node.right = this.buildTree(array, mid + 1, end);\n    this.tree = node;\n    return node;\n  }\n\n  prettyPrint(node, prefix = '', isLeft = true) {\n    if (node === null) {\n      return;\n    }\n    if (node.right !== null) {\n      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);\n    }\n    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);\n    if (node.left !== null) {\n      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);\n    }\n  }\n\n  insertNode(data) {\n    this.tree = Tree.insertRec(this.tree, data);\n  }\n\n  static insertRec(root, data) {\n    if (root == null) {\n      return new _Node__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data);\n    }\n\n    if (data < root.data) {\n      root.left = this.insertRec(root.left, data);\n    } else if (data > root.data) {\n      root.right = this.insertRec(root.right, data);\n    }\n\n    return root;\n  }\n\n  deleteNode(data) {\n    this.tree = Tree.deleteRec(this.tree, data);\n  }\n\n  static deleteRec(root, data) {\n    if (root == null) {\n      return root;\n    }\n\n    if (root.data > data) {\n      root.left = this.deleteRec(root.left, data);\n      return root;\n    } if (root.data < data) {\n      root.right = this.deleteRec(root.right, data);\n      return root;\n    }\n\n    if (root.left == null) {\n      const current = root.right;\n      return current;\n    } if (root.right == null) {\n      const current = root.left;\n      return current;\n    }\n\n    let succParent = root;\n    let successor = root.right;\n    while (successor.left !== null) {\n      succParent = successor;\n      successor = successor.left;\n    }\n\n    if (succParent !== root) {\n      succParent.left = successor.right;\n    } else {\n      succParent.right = successor.right;\n    }\n\n    root.data = successor.data;\n    return root;\n  }\n\n  findNode(data) {\n    return (!Tree.findRec(this.tree, data)) ? null : Tree.findRec(this.tree, data);\n  }\n\n  static findRec(root, data) {\n    if (root == null || root.data === data) {\n      return root;\n    }\n\n    if (root.data < data) {\n      return this.findRec(root.right, data);\n    }\n\n    return this.findRec(root.left, data);\n  }\n\n  inorder() {\n    Tree.inorderRec(this.tree);\n  }\n\n  static inorderRec(root) {\n    if (root != null) {\n      this.inorderRec(root.left);\n      console.log(root.data);\n      this.inorderRec(root.right);\n    }\n  }\n}\n\n\n//# sourceURL=webpack://binary-search-tree/./src/modules/Tree.js?");

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