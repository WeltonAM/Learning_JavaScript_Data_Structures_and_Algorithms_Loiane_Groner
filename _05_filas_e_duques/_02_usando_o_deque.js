import Deque from "./deque.js";

const deque = new Deque();
console.log("IS EMP => ", deque.isEmpty());
console.log("---------------");

deque.addBack('Jack');
deque.addBack('John');
console.log("DEQUE => ", deque.toString());
console.log("---------------");

deque.addFront('Camila');
console.log("DEQUE => ", deque.toString());
console.log("---------------");

deque.removeBack();
console.log("REMOVE BACK => ", deque.toString());
console.log("---------------");

deque.removeFront();
console.log("REMOVE FRONT => ", deque.toString());
console.log("---------------");

console.log("SIZE => ", deque.size());
console.log("---------------");