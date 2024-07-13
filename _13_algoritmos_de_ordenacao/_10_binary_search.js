import { Compare, DOES_NOT_EXIST } from '../utils.js';
import quickSort from './_05_quick_sort.js';

function binarySearch(array, value, compareFn = defaultCompare) {
    const sortedArray = quickSort(array);
    let low = 0;
    let high = array.length - 1;

    while (lesserOrEquals(low, high, compareFn)) {
        const mid = Math.floor((low + high) / 2);
        const element = sortedArray[mid];

        if (compareFn(element, value) === Compare.LESS_THAN) {
            low = mid + 1;
        } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
            high = mid - 1;
        } else {
            return mid;
        }
    };

    return DOES_NOT_EXIST;
}