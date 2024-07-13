import StackObj from "./stack-obj.js";

const stackObj = new StackObj()

stackObj.push(5)
stackObj.push(8)
console.log('SIZE => ', stackObj.size())
console.log('----------------')
console.log('IS EMPTY => ', stackObj.isEmpty())
console.log('----------------')

stackObj.pop()
console.log('LAST CUR EL => ', stackObj.peek())
console.log('----------------')

console.log(stackObj.toString())
console.log('----------------')

console.log(Object.getOwnPropertyNames(stackObj))
console.log('----------------')
console.log(Object.keys(stackObj))
console.log('----------------')
console.log(stackObj.items)