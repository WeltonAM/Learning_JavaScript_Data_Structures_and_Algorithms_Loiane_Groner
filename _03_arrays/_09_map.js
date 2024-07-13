import { isEven } from "./_07_isEven.js";

let numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const myMap = numbs.map(isEven);

// const myMap = numbs.map(x => x % 2 === 0);
console.log(myMap)