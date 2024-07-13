import Stack from "./stack-array.js";

const stack = new Stack()
console.log('IS EMPTY NOW => ', stack.isEmpty())
console.log('----------')

stack.push(5)
stack.push(8)
console.log('LAST CUR EL => ', stack.peek())
console.log('----------')

stack.push(11)
console.log('SIZE => ', stack.size())
console.log('----------')
console.log('IS EMPTY NOW => ', stack.isEmpty())
console.log('----------')

stack.pop()
stack.pop()
console.log('SIZE => ', stack.size())
console.log('----------')
console.log('LAST CUR EL => ', stack.peek())
console.log('----------')