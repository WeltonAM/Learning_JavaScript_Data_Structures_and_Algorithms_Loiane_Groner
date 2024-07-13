import { defaultToString } from "../utils.js";
import LinkedList from '../index.js';
import ValuePair from "./value_pair.js";

export default class HashTableSeparateChaining {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key);

            if (this.table[position] == null) {
                this.table[position] = new LinkedList();
            } else {
                let index = position + 1;

                // while (this.table[index] != null) {
                //     index++;
                // }

                // this.table[index] = new ValuePair(key, value);
            }

            this.table[position].push(new ValuePair(key, value));

            return true;
        }

        return false;
    }

    get(key) {
        const position = this.hashCode(key);
        const linkedList = this.table[position];

        if (linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();

            while (current != null) {
                if (current.element.key === key) {
                    return current.element.value;
                }

                current = current.nextElement;
            }
        }

        return undefined;
    }

    remove(key) {
        const position = this.hashCode(key);
        const linkedList = this.table[position];

        if (linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();

            while (current != null) {
                if (current.element.key === key) {
                    linkedList.remove(current.element);

                    if (linkedList.isEmpty()) {
                        delete this.table[position];
                    }

                    return true;
                }

                current = current.next;
            }
        }

        return false;
    }
}