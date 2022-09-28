type StNode<T> = {
    value: T,
    prev?: StNode<T>,
}

export default class Stack<T> {
    public length: number;
    private head?: StNode<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T) {
        // 0. create node instance to contain the item value
        const node: StNode<T> = {value: item}; // prev is undefined

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
    }

    pop(): T | undefined {
        // 0. handle the length of the stack, make sure that it wont go below 0
        this.length = Math.max(0, this.length -1);

        // 1. if length is 0, clear the HEAD and return the last pop element
        if (this.length === 0) {
            // 1.1 create an instance of the node to hold the value when pop
            const tempHead: StNode<T> = this.head;
            this.head = undefined;
            return tempHead .value;
        }

        // 2. else, there is a HEAD. 
        // 2.1 create an instance of the node to hold the value when pop
        const tempHead: StNode<T> = this.head;
        this.head = tempHead.prev;

        // free memory, since the pop node is still pointing to the list or the stack
        tempHead.prev = null;

        // grab the pop value
        return tempHead.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}