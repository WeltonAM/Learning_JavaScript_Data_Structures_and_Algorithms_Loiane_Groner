import SetFromZero from "./set_from_zero.js";

const setA = new SetFromZero();
setA.add(1);
setA.add(2);

const setB = new SetFromZero();
setB.add(1);
setB.add(2);
setB.add(3);

const setC = new SetFromZero();
setC.add(2);
setC.add(3);
setC.add(4);

console.log("SUBSET A => B ", setA.isSubsetOf(setB))

console.log("SUBSET A => C ", setA.isSubsetOf(setC))
