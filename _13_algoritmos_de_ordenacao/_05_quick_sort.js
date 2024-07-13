import { Compare, defaultCompare, swap } from "../utils.js";

// function quickSort(array, compareFn = defaultCompare) {
//     return quickSort(array, 0, array.length - 1, compareFn);
// }

export function quickSort(array, left, right, compareFn) {
    let index;

    if (array.length > 1) {
        index = partition(array, left, right, compareFn);

        if (left < index - 1) {
            quickSort(array, left, index - 1, compareFn);
        }

        if (index < right) {
            quickSort(array, index, right, compareFn);
        }
    }

    return array;
}

function partition(array, left, right, compareFn) {
    const pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
            i++;
        }

        while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
            j--;
        }

        if (i <= j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }

    return i;
}