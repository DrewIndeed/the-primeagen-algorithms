import bubble_sort from "./bubble_sort";
import Queue from './queue'
import Stack from './stack'

// use bubble_sort
console.log(bubble_sort([1,3,7,4,2,9]))

// use Queue
const testQueue = new Queue<Number>()
// test constructor
console.log(testQueue)
// test enqueue
testQueue.enqueue(1)
testQueue.enqueue(2)
testQueue.enqueue(3)
testQueue.enqueue(4)
// test dequeue
const dq1 = testQueue.dequeue(); // 1
const dq2 = testQueue.dequeue(); // 2
// test peek queue
const peek1 = testQueue.peek() // 3
const dq3 = testQueue.dequeue(); // 3
const peek2 = testQueue.peek() // 4
// results
console.log(dq1, dq2, peek1, dq3, peek2) // 1 2 3 3 4

// use Stack
const testStack = new Stack<Number>()
// test constructor
console.log(testStack)
// test push
testStack.push(1)
testStack.push(2)
testStack.push(3)
testStack.push(4)
// test pop
const pop1 = testStack.pop() // 4
const pop2 = testStack.pop() // 3
// test peek
const peekSt1 = testStack.peek() // 2
const pop3 = testStack.pop() // 2
const peekSt2 = testStack.peek() // 1
// results
console.log(pop1,pop2,peekSt1,pop3,peekSt2) // 3 4 2 2 1