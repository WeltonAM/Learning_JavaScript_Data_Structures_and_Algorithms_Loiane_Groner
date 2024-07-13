let numbs = [1, 2, 3];

let iterator = numbs[Symbol.iterator]();
console.log('NEXT => ', iterator.next().value)
console.log('NEXT => ', iterator.next().value)
console.log('-------ITERATOR--------')

for (const n of iterator) {
    console.log(n);
}

console.log('--------ENTRIES---------')
let aEntries = numbs.entries()
console.log('KEY E VALUE => ', aEntries.next().value)

console.log('-----------------')
for (const b of aEntries) {
    console.log(b)
}

console.log('--------KEYS---------')
let aKeys = numbs.entries()
console.log('KEY => ', aKeys.next())

console.log('-----------------')
for (const c of aKeys) {
    console.log(c)
}

console.log('--------VALUES---------')
let aValues = numbs.entries()
console.log('VALUE => ', aValues.next())

console.log('-----------------')
for (const d of aValues) {
    console.log(d)
}

