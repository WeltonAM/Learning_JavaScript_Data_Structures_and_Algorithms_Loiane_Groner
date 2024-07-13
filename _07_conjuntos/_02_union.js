import SetFromZero from "./set_from_zero.js";

const setA = new SetFromZero();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new SetFromZero();
setB.add(4);
setB.add(5);
setB.add(6);

const unionAB = setA.union(setB);
console.log(unionAB.values())
