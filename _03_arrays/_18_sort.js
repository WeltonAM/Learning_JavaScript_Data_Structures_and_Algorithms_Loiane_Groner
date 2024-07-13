let numbers = [1, 10, 11, 12, 13, 14, 15, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(numbers.sort((a, b) => a - b))

let names = ["John", "ana", "john", "Ana"]

console.log('---------------')
console.log(names.sort((a, b) => {
    if (a.toLocaleLowerCase() < b.toLocaleLowerCase()) {
        return -1
    }

    if (a.toLocaleLowerCase() > b.toLocaleLowerCase()) {
        return 1
    }

    return 0
}))