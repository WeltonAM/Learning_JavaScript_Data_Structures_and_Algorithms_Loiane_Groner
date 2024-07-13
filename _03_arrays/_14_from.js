let numbs = [1, 2, 3];

let numbs_2 = Array.from(numbs)
console.log(numbs_2)
console.log('---------')

let even = Array.from(numbs, x => (x % 2 === 0))
console.log(even)