type QNode<T> = {
    value: T,
    next?: QNode<T>,
}

export default class Queue<T> {
    public length: number;
    private head?: QNode<T>;
    private tail?: QNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T) {
        // 0. create node instance to contain the item value
        const node: QNode<T> = {value: item}; // next is undefined

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
    }

    dequeue(): T | undefined {
        // 1. if there is no HEAD, nothing to dequeue
        if (!this.head) return undefined

        // 2. else, decrement the length
        this.length--;

        // 3. update the REAL head
        const tempHead = this.head; // store head as temp for later return its value
        this.head = this.head.next; // update the REAL head to point to the next Node it is pointing

        // ONLY FOR LANGUAGES WITH NO GARBAGE COLLECTOR LIKE C, C++
        // free memory
        // point temp head to nowhere, so that it will be cleaned, aka auto remove from queue
        tempHead.next = null;

        // THE DEQUEUE OR REMOVAL IS DONE AT THIS POINT
        // SO WE NEED TO TAKE THE TAIL IN ACCOUNT ALSO aka FREE ITS MEMORY ALSO
        if (this.length === 0) this.tail = undefined;

        // 4. grab the remove value
        return tempHead.value;
    }

    peek(): T | undefined  {
        return this.head?.value;
    }
}
