import SetFromZero from "./set_from_zero.js";

const setA = new SetFromZero();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new SetFromZero();
setB.add(2);
setB.add(3);
setB.add(4);

const differenceAB = setA.difference(setB);
console.log("DIF A => B ", differenceAB.values())

const differenceBA = setB.difference(setA);
console.log("DIF B => A ", differenceBA.values())
