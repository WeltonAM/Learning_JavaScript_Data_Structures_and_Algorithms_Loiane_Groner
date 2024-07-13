import BinarySearchTree from "./BinarySearchTree.js";

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(3);
tree.insert(6);
tree.insert(7);
tree.insert(2);
tree.insert(10);

console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.');
console.log(tree.search(6) ? 'Key 6 found.' : 'Key 6 not found.');
