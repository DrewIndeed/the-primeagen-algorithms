"use strict";
exports.__esModule = true;
var Queue = /** @class */ (function () {
    function Queue() {
        this.head = this.tail = undefined;
        this.length = 0;
    }
    Queue.prototype.enqueue = function (item) {
        // 0. create node instance to contain the item value
        var node = { value: item }; // next is undefined
        // 1. update the length
        this.length++;
        // 2 if there is no TAIL, first node is both HEAD and TAIL
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }
        // 3. point the REAL tail to the new node
        this.tail.next = node;
        this.tail = node;
    };
    Queue.prototype.dequeue = function () {
        // 1. if there is no HEAD, nothing to dequeue
        if (!this.head)
            return undefined;
        // 2. else, decrement the length
        this.length--;
        // 3. update the REAL head
        var tempHead = this.head; // store head as temp for later return its value
        this.head = this.head.next; // update the REAL head to point to the next Node it is pointing
        // ONLY FOR LANGUAGES WITH NO GARBAGE COLLECTOR LIKE C, C++
        // free memory
        // point temp head to nowhere, so that it will be cleaned, aka auto remove from queue
        tempHead.next = null;
        // THE DEQUEUE OR REMOVAL IS DONE AT THIS POINT
        // SO WE NEED TO TAKE THE TAIL IN ACCOUNT ALSO aka FREE ITS MEMORY ALSO
        if (this.length === 0)
            this.tail = undefined;
        // 4. grab the remove value
        return tempHead.value;
    };
    Queue.prototype.peek = function () {
        var _a;
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
    };
    return Queue;
}());
exports["default"] = Queue;
