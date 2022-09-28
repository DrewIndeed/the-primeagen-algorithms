"use strict";
exports.__esModule = true;
var bubble_sort_1 = require("./bubble_sort");
var queue_1 = require("./queue");
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
