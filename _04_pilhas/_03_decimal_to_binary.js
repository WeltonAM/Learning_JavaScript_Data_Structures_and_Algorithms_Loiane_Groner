import Stack from "./stack-array.js";

function decimalToBinary(decNum) {
    const remStack = new Stack()

    let number = decNum;
    let rem;
    let binaryString = '';

    while (number > 0) {
        rem = Math.floor(number % 2);
        remStack.push(rem);
        number = Math.floor(number / 2);
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}

console.log(decimalToBinary(233)) // 11101001
console.log(decimalToBinary(10)) // 1010
console.log(decimalToBinary(1000)) // 1111101000