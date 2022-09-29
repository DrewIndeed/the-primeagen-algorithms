"use strict";
exports.__esModule = true;
var bubble_sort_1 = require("./bubble_sort");
var Queue_1 = require("./Queue");
var Stack_1 = require("./Stack");
var SinglyLinkedList_1 = require("./SinglyLinkedList");
// use Singly Linked List
var testSLL = new SinglyLinkedList_1["default"]();
console.log("\nPOPULATING");
// test constructor
console.log(testSLL);
// test prepend
testSLL.prepend(2);
testSLL.prepend(1);
// test append
testSLL.append(3);
testSLL.append(4);
// test print
testSLL.print(); // NORMAL
// test invalid insertAt
console.log("\nINSERT");
// test insertAt
testSLL.insertAt(8, 1);
testSLL.insertAt(9, 2);
// test print
testSLL.print();
// test failed insertAt
testSLL.insertAt(10, -10);
testSLL.insertAt(10, 10);
// test getAt
console.log("\nGETTING");
var getAt0 = testSLL.getAt(0);
console.log({ getAt0: getAt0 });
var getAt6 = testSLL.getAt(6);
console.log({ getAt6: getAt6 });
var getAt2 = testSLL.getAt(2);
console.log({ getAt2: getAt2 });
testSLL.getAt(-10);
testSLL.getAt(10);
// test removeAt
console.log("\nREMOVING");
var removeAt1 = testSLL.removeAt(0);
console.log({ removeAt1: removeAt1 });
testSLL.print();
var removeAt5 = testSLL.removeAt(5);
console.log({ removeAt5: removeAt5 });
testSLL.print();
var removeAt2 = testSLL.removeAt(2);
console.log({ removeAt2: removeAt2 });
testSLL.print();
// test invalid removeAt
testSLL.removeAt(-10);
testSLL.removeAt(10);
console.log("\n------------------------------------------");
// use bubble_sort
console.log((0, bubble_sort_1["default"])([1, 3, 7, 4, 2, 9]));
// use Queue
var testQueue = new Queue_1["default"]();
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
var testStack = new Stack_1["default"]();
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
