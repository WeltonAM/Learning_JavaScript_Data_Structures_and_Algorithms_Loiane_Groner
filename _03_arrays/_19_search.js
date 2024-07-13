let numbers = [1, 10, 11, 12, 13, 14, 15, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100]

console.log(numbers.indexOf(10))
console.log('---------------')

console.log(numbers.lastIndexOf(10))
console.log('---------------')

console.log(numbers.find(e => e % 13 == 0))
console.log('---------------')

console.log(numbers.findIndex(e => e % 13 == 0))
console.log('---------------')

console.log(numbers.includes(15))
console.log('---------------')

console.log(numbers.includes(4, 5))
console.log('---------------')