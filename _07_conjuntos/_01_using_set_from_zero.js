import SetFromZero from "./set_from_zero.js";

const set = new SetFromZero();
set.add(1);
console.log("VALUES => ", set.values());
console.log('-----------');

console.log("HAS => ", set.has(1))
console.log('-----------');

set.add(2);
console.log("VALUES => ", set.values());
console.log('-----------');

console.log("SIZE => ", set.size());
console.log('-----------');

set.delete(2)
console.log("SIZE => ", set.size());
console.log('-----------');

