import bubble_sort from "./bubble_sort";
import Queue from './queue'

// use bubble_sort
console.log(bubble_sort([1,3,7,4,2,9]))

// use Queue
const testQueue = new Queue<Number>()
// test constructor
console.log(testQueue)
// test enqueue
testQueue.enqueue(1);
testQueue.enqueue(2);
testQueue.enqueue(3);
testQueue.enqueue(4);
// test dequeue
const dq1 = testQueue.dequeue(); // 1
const dq2 = testQueue.dequeue(); // 2
// test peek queue
const peek1 = testQueue.peek() // 3
const dq3 = testQueue.dequeue(); // 3
const peek2 = testQueue.peek() // 4
// results
console.log(dq1, dq2, peek1, dq3, peek2) // 1 2 3 3 4