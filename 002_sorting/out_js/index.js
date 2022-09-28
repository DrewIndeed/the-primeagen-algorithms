"use strict";
exports.__esModule = true;
var bubble_sort_1 = require("./bubble_sort");
var queue_1 = require("./queue");
var stack_1 = require("./stack");
// use bubble_sort
console.log((0, bubble_sort_1["default"])([1, 3, 7, 4, 2, 9]));
// use Queue
var testQueue = new queue_1["default"]();
// test constructor
console.log(testQueue);
// test enqueue
testQueue.enqueue(1);
testQueue.enqueue(2);
testQueue.enqueue(3);
testQueue.enqueue(4);
// test dequeue
var dq1 = testQueue.dequeue(); // 1
var dq2 = testQueue.dequeue(); // 2
// test peek queue
var peek1 = testQueue.peek(); // 3
var dq3 = testQueue.dequeue(); // 3
var peek2 = testQueue.peek(); // 4
// results
console.log(dq1, dq2, peek1, dq3, peek2); // 1 2 3 3 4
// use Stack
var testStack = new stack_1["default"]();
// test constructor
console.log(testStack);
// test push
testStack.push(1);
testStack.push(2);
testStack.push(3);
testStack.push(4);
// test pop
var pop1 = testStack.pop(); // 4
var pop2 = testStack.pop(); // 3
// test peek
var peekSt1 = testStack.peek(); // 2
var pop3 = testStack.pop(); // 2
var peekSt2 = testStack.peek(); // 1
// results
console.log(pop1, pop2, peekSt1, pop3, peekSt2); // 3 4 2 2 1
