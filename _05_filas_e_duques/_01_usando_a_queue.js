import Queue from "./queue.js";

const queue = new Queue();
console.log("IS EMP => ", queue.isEmpty());
console.log('---------------');

queue.enqueue('John');
queue.enqueue('Jack');
console.log("QUEUE => ", queue.toString());

console.log('---------------');
queue.enqueue('Camila');
console.log("QUEUE => ", queue.toString());

console.log('---------------');
console.log("SIZE => ", queue.size());

queue.dequeue()
console.log('---------------');
console.log("QUEUE => ", queue.toString());