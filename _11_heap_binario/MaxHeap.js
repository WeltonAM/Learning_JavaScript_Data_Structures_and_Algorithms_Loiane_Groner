import { defaultCompare } from "../utils.js";
import MinHeap from "./MinHeap.js";

export default class MaxHeap extends MinHeap {
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = reserveCompare(compareFn)
    }

    reserveCompare(compareFn) {
        return (a, b) => compareFn(b, a);
    }
}