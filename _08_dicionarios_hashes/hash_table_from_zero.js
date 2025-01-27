import { defaultToString } from "../utils.js";
import ValuePair from "./value_pair.js";

export default class HashTableFromZero {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    loseLoseHashCode(key) {
        if (typeof key === 'number') return key;

        const tableKey = this.toStrFn(key);
        let hash = 0;

        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i);
        }

        return hash % 37;
    }

    hashCode(key) {
        return this.loseLoseHashCode(key);
    }

    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key);
            this.table[position] = new ValuePair(key, value);

            return true;
        }

        return false;
    }

    get(key) {
        const valuePair = this.table[this.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    remove(key) {
        const hash = this.hashCode(key);
        const valuePair = this.table[hash];

        if (valuePair != null) {
            delete this.table[hash];

            return true;
        }

        return false;
    }

    size() {
        let count = 0;

        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] != null) {
                count++;
            }
        }

        return count;
    }

    isEmpty() {
        return this.size() === 0;
    }

    toString() {
        if (this.isEmpty()) return '';

        const keys = Object.keys(this.table);
        let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;

        for (let i = 1; i < keys.length; i++) {
            objString += `, ${keys[i]} => ${this.table[keys[i]].toString()}`;
        }

        return objString;
    }
}