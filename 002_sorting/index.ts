import bubble_sort from "./bubble_sort";
import Queue from "./Queue";
import Stack from "./Stack";
import SinglyLinkedList from "./SinglyLinkedList";

// use Singly Linked List
const testSLL = new SinglyLinkedList<number>();

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
const getAt0 = testSLL.getAt(0);
console.log({ getAt0 });
const getAt6 = testSLL.getAt(6);
console.log({ getAt6 });
const getAt2 = testSLL.getAt(2);
console.log({ getAt2 });
testSLL.getAt(-10);
testSLL.getAt(10);

// test removeAt
console.log("\nREMOVING");
const removeAt1 = testSLL.removeAt(0);
console.log({ removeAt1 });
testSLL.print();
const removeAt5 = testSLL.removeAt(5);
console.log({ removeAt5});
testSLL.print();
const removeAt2 = testSLL.removeAt(2);
console.log({ removeAt2 });
testSLL.print();
// test invalid removeAt
testSLL.removeAt(-10);
testSLL.removeAt(10);

console.log("\n------------------------------------------");
// use bubble_sort
console.log(bubble_sort([1, 3, 7, 4, 2, 9]));

// use Queue
const testQueue = new Queue<Number>();
// test constructor
console.log(testQueue);
// test enqueue
testQueue.enqueue(1);
testQueue.enqueue(2);
testQueue.enqueue(3);
testQueue.enqueue(4);
// test dequeue
const dq1 = testQueue.dequeue(); // 1
const dq2 = testQueue.dequeue(); // 2
// test peek queue
const peek1 = testQueue.peek(); // 3
const dq3 = testQueue.dequeue(); // 3
const peek2 = testQueue.peek(); // 4
// results
console.log(dq1, dq2, peek1, dq3, peek2); // 1 2 3 3 4

// use Stack
const testStack = new Stack<Number>();
// test constructor
console.log(testStack);
// test push
testStack.push(1);
testStack.push(2);
testStack.push(3);
testStack.push(4);
// test pop
const pop1 = testStack.pop(); // 4
const pop2 = testStack.pop(); // 3
// test peek
const peekSt1 = testStack.peek(); // 2
const pop3 = testStack.pop(); // 2
const peekSt2 = testStack.peek(); // 1
// results
console.log(pop1, pop2, peekSt1, pop3, peekSt2); // 3 4 2 2 1
