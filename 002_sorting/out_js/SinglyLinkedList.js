"use strict";
exports.__esModule = true;
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        this.head = this.tail = undefined;
        this.length = 0;
    }
    SinglyLinkedList.prototype.print = function () {
        var needle = this.head;
        for (var i = 0; i < this.length && needle; i++) {
            console.log(needle);
            needle = needle.next;
        }
    };
    SinglyLinkedList.prototype.prepend = function (item) {
        // 0. create a node instance to contain the value
        var node = { value: item };
        // 1. update the length
        this.length++;
        // 2 if there is no TAIL, first node is both HEAD and TAIL
        if (!this.tail || !this.head) {
            this.head = this.tail = node;
            return;
        }
        // 3. update the REAL head as the new node
        node.next = this.head;
        this.head = node;
    };
    SinglyLinkedList.prototype.append = function (item) {
        // 0. create a node instance to contain the value
        var node = { value: item };
        // 1. update the length
        this.length++;
        // 2 if there is no TAIL, first node is both HEAD and TAIL
        if (!this.tail || !this.head) {
            this.head = this.tail = node;
            return;
        }
        // 3. update the REAL tail as the new node
        this.tail.next = node;
        this.tail = node;
        node.next = null;
    };
    SinglyLinkedList.prototype.insertAt = function (item, index) {
        // index validation
        if (index < 0 || index > this.length) {
            console.log("[ERORR - SLL - insertAt]: invalid index = ".concat(index, ", current length = ").concat(this.length));
            return;
        }
        // if index = 0
        if (index === 0) {
            this.prepend(item);
            return;
        }
        // if index = last index
        if (index === this.length) {
            this.append(item);
            return;
        }
        // else, if index is valid and not 0
        // 0. creating a needle to traverse the list AND instance node to contain new value
        var node = { value: item };
        // 1. update the length
        this.length++;
        // 2 if there is no TAIL, first node is both HEAD and TAIL
        if (!this.tail || !this.head) {
            this.head = this.tail = node;
            return;
        }
        // 3. start traversing
        // as long as needle has not reached target point or index AND needle node exists,
        // move needle to the next node
        var needleCurr = this.head;
        var needlePrev = undefined;
        for (var i = 0; i != index && needleCurr.next; i++) {
            needlePrev = needleCurr;
            needleCurr = needleCurr.next;
        }
        // 4. insert value at found location
        node.next = needlePrev.next;
        needlePrev.next = node;
    };
    SinglyLinkedList.prototype.getAt = function (index) {
        var _a, _b;
        // index validation
        if (index < 0 || index > this.length) {
            console.log("[ERORR - SLL - getAt]: invalid index = ".concat(index, ", current length = ").concat(this.length));
            return;
        }
        // if index = 0
        if (index === 0)
            return (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
        // if index = last index
        if (index === this.length)
            return (_b = this.tail) === null || _b === void 0 ? void 0 : _b.value;
        // else, if index is valid and not 0 and not the last index
        // 0. creating a needle to traverse the list
        var needleCurr = this.head;
        for (var i = 0; i != index; i++)
            needleCurr = needleCurr.next;
        // 1. grab the target of finding value
        return needleCurr.value;
    };
    SinglyLinkedList.prototype.removeAt = function (index) {
        // index validation
        if (index < 0 || index > this.length) {
            console.log("[ERORR - SLL - removeAt]: invalid index = ".concat(index, ", current length = ").concat(this.length));
            return;
        }
        // update the length
        this.length--;
        // if index = 0
        if (index === 0) {
            var tempHead = this.head;
            this.head = tempHead.next;
            tempHead.next = null;
            return tempHead.value;
        }
        // else, if index is valid and not 0 and not the last index
        var needleCurr = this.head;
        var needlePrev = undefined;
        for (var i = 0; i != index && needleCurr.next; i++) {
            needlePrev = needleCurr;
            needleCurr = needleCurr.next;
        }
        if (index === this.length) {
            this.tail = needlePrev;
            needlePrev.next = null;
            return needleCurr.value;
        }
        needlePrev.next = needleCurr.next;
        needleCurr.next = null;
        return needleCurr.value;
    };
    return SinglyLinkedList;
}());
exports["default"] = SinglyLinkedList;
