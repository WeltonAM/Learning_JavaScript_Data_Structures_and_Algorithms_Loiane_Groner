// Importing the Deque class from another module file named "deque.js"
import Deque from "./deque.js";

// Function to check if a given string is a palindrome
function palindromeChecker(aString) {
    // Check if the input string is undefined, null, or empty, and return false if it is
    if (aString === undefined || aString === null || (aString !== null && aString.length === 0)) {
        return false;
    }

    // Create a new instance of the Deque class
    const deque = new Deque();
    // Convert the input string to lowercase and remove all spaces
    const lowerString = aString.toLocaleLowerCase().split(' ').join('');

    // Initialize a boolean variable to track if the string is a palindrome
    let isEqual = true;
    // Variables to store the characters removed from the front and back of the deque
    let firstChar, lastChar;

    // Loop through each character in the processed string
    for (let i = 0; i < lowerString.length; i++) {
        // Add each character to the back of the deque
        deque.addBack(lowerString[i]);
    }

    // While the deque has more than one element and the characters are still equal
    while (deque.size() > 1 && isEqual) {
        // Remove the front character from the deque
        firstChar = deque.removeFront();
        // Remove the back character from the deque
        lastChar = deque.removeBack();

        // Compare the front and back characters
        if (firstChar !== lastChar) {
            // If they are not equal, set isEqual to false
            isEqual = false;
        }
    }

    // Return the result of the palindrome check
    return isEqual;
}

// Test cases to check the palindromeChecker function
console.log('a', palindromeChecker('a')); // Output: true (single character is a palindrome)
console.log('aa', palindromeChecker('aa')); // Output: true (two identical characters)
console.log('kayak', palindromeChecker('kayak')); // Output: true (a common palindrome word)
console.log('level', palindromeChecker('level')); // Output: true (another palindrome word)
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw')); // Output: true (phrase with spaces and mixed case)
console.log('Step on no pets', palindromeChecker('Step on no pets')); // Output: true (another phrase with spaces and mixed case)
