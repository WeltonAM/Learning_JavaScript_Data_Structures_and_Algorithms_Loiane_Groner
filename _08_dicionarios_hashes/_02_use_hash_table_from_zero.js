import HashTableFromZero from "./hash_table_from_zero.js";

const hash = new HashTableFromZero();
hash.put('Gandalf', 'gandalf@mail.com');
hash.put('John', 'john@mail.com');
hash.put('Tyrion', 'tyrion@mail.com');

console.log(hash);
console.log(hash.hashCode('Gandalf') + ' - Gandalf');