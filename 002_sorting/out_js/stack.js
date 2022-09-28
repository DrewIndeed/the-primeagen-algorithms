"use strict";
exports.__esModule = true;
var Stack = /** @class */ (function () {
    function Stack() {
        this.length = 0;
        this.head = undefined;
    }
    Stack.prototype.push = function (item) {
        // 0. create node instance to contain the item value
        var node = { value: item }; // prev is undefined
        // 1. update the length
        this.length++;
        // 2. if there is no HEAD, first node is HEAD
        if (!this.head) {
            this.head = node;
            return;
        }
        // 3. point the new node prev to the last HEAD
        node.prev = this.head;
        this.head = node;
    };
    Stack.prototype.pop = function () {
        // 0. handle the length of the stack, make sure that it wont go below 0
        this.length = Math.max(0, this.length - 1);
        // 1. if length is 0, clear the HEAD and return the last pop element
        if (this.length === 0) {
            // 1.1 create an instance of the node to hold the value when pop
            var tempHead_1 = this.head;
            this.head = undefined;
            return tempHead_1.value;
        }
        // 2. else, there is a HEAD. 
        // 2.1 create an instance of the node to hold the value when pop
        var tempHead = this.head;
        this.head = tempHead.prev;
        // free memory, since the pop node is still pointing to the list or the stack
        tempHead.prev = null;
        // grab the pop value
        return tempHead.value;
    };
    Stack.prototype.peek = function () {
        var _a;
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
    };
    return Stack;
}());
exports["default"] = Stack;
