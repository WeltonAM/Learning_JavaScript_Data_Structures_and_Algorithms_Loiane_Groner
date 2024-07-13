let numbs = [1, 2, 3, 4, 5, 6, 7];

let copy = numbs.fill(0)
console.log(copy)

console.log('----------')
let numbsCopy = numbs.fill(1, 2)
console.log(numbsCopy)

console.log('-----------')
numbsCopy.fill(1, 3, 5)
console.log(numbsCopy)