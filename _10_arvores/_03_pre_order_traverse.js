import BinarySearchTree from "./BinarySearchTree.js";

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(3);
tree.insert(6);
tree.insert(7);
tree.insert(2);
tree.insert(10);

const printNode = (value) => console.log(value);

tree.preOrderTraverse(printNode);
