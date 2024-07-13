import { defaultCompare } from "../utils.js";

export default function headSort(array, compareFn = defaultCompare) {
    let heapSize = array.length;
    buildMaxHeap(array, compareFn);

    while (heapSize > 1) {
        swap(array, 0, --heapSize);
        heapify(array, 0, heapSize, compareFn);
    }

    return array;
}

function buildMaxHeap(array, compareFn) {
    for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
        heapify(array, i, array.length, compareFn);
    }

    return array;
}
