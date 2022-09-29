type SLLNode<T> = {
    value: T;
    next?: SLLNode<T>;
};

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: SLLNode<T>;
    private tail?: SLLNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    print() {
        let needle = this.head;
        for (let i = 0; i < this.length && needle; i++) {
            console.log(needle);
            needle = needle.next;
        }
    }

    prepend(item: T) {
        // 0. create a node instance to contain the value
        const node: SLLNode<T> = { value: item };

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
    }

    append(item: T) {
        // 0. create a node instance to contain the value
        const node: SLLNode<T> = { value: item };

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
    }

    insertAt(item: T, index: number) {
        // index validation
        if (index < 0 || index > this.length) {
            console.log(
                `[ERORR - SLL - insertAt]: invalid index = ${index}, current length = ${this.length}`
            );
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
        const node: SLLNode<T> = { value: item };

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
        let needleCurr = this.head;
        let needlePrev = undefined;
        for (let i = 0; i != index && needleCurr.next; i++) {
            needlePrev = needleCurr;
            needleCurr = needleCurr.next;
        }

        // 4. insert value at found location
        node.next = needlePrev.next;
        needlePrev.next = node;
    }

    getAt(index: number): T | undefined {
        // index validation
        if (index < 0 || index > this.length) {
            console.log(
                `[ERORR - SLL - getAt]: invalid index = ${index}, current length = ${this.length}`
            );
            return;
        }

        // if index = 0
        if (index === 0) return this.head?.value;

        // if index = last index
        if (index === this.length) return this.tail?.value;

        // else, if index is valid and not 0 and not the last index
        // 0. creating a needle to traverse the list
        let needleCurr = this.head;
        for (let i = 0; i != index; i++) needleCurr = needleCurr.next;

        // 1. grab the target of finding value
        return needleCurr.value;
    }

    removeAt(index: number): T | undefined {
        // index validation
        if (index < 0 || index > this.length) {
            console.log(
                `[ERORR - SLL - removeAt]: invalid index = ${index}, current length = ${this.length}`
            );
            return;
        }

        // update the length
        this.length--;

        // if index = 0
        if (index === 0) {
            const tempHead = this.head;
            this.head = tempHead.next;
            tempHead.next = null;
            return tempHead.value;
        }

        // else, if index is valid and not 0 and not the last index
        let needleCurr = this.head;
        let needlePrev = undefined;
        for (let i = 0; i != index && needleCurr.next; i++) {
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
    }
}
