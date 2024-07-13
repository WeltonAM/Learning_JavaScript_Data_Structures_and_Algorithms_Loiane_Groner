function palindromeCheckerTwoPointers(aString) {
    if (aString === undefined || aString === null || aString.length === 0) {
        return false;
    }

    const lowerString = aString.toLowerCase().replace(/\s+/g, '');
    let left = 0;
    let right = lowerString.length - 1;

    while (left < right) {
        if (lowerString[left] !== lowerString[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

console.log('a', palindromeCheckerTwoPointers('a'));
console.log('aa', palindromeCheckerTwoPointers('aa'));
console.log('kayak', palindromeCheckerTwoPointers('kayak'));
console.log('level', palindromeCheckerTwoPointers('level'));
console.log('Was it a car or a cat I saw', palindromeCheckerTwoPointers('Was it a car or a cat I saw'));
console.log('Step on no pets', palindromeCheckerTwoPointers('Step on no pets'));
