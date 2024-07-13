function radixSort(array, radixSort = 10) {
    if (array.length < 2) {
        return array;
    }

    const minValue = findMinValue(array);
    const maxValue = findMaxValue(array);

    let significantDigit = 1;

    while ((maxValue - minValue) / significantDigit >= 1) {
        array = countingSort(array, radixSort, significantDigit, minValue);
        significantDigit *= radixSort;
    }

    return array;
}

function countingSortForRadix(array, radixBase, significantDigit, minValue) {
    let bucketsIndex;
    const buckets = [];
    const aux = [];

    for (let i = 0; i < radixBase; i++) {
        buckets[i] = 0;
    }

    for (let i = 0; i < array.length; i++) {
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase);
        buckets[bucketsIndex]++;
    }

    for (let i = 0; i < radixBase; i++) {
        buckets[i] += buckets[i - 1];
    }

    for (let i = array.length - 1; i >= 0; i--) {
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase);
        aux[--buckets[bucketsIndex]] = array[i];
    }

    for (let i = 0; i < array.length; i++) {
        array[i] = aux[i];
    }

    return array;
}