import { Compare, defaultCompare, swap } from "../utils.js";

function selectionSort(array, compareFn = defaultCompare) {
    const { length } = array;
    let minIndex;

    for (let i = 0; i < length; i++) {
        minIndex = i;

        for (let j = i + 1; j < length; j++) {
            if (compareFn(array[minIndex], array[j]) === Compare.BIGGER_THAN) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }

    return array;
}