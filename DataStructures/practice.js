class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor (){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if (this.length === 0){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.length === 0) return undefined;
        var current = this.head;
        if (this.length === 1){
            this.head = this.tail = null;
        } else {
            var newTail = current;
            while (current.next !== null){
                current = current.next;
                newTail = current;
            }
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return current;
    }
    shift(){
        if (this.length === 0) return undefined;
        var oldHead = this.head;
        if (this.length === 1){
            this.head = this.tail = null;
        } else {
            this.head = oldHead.next;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if (this.length === 0){
            this.head = newNode;
            this.tail = this.head;
        } else { //if the linked list already has at least one node
            newNode.next = this.head;
            this.head = newNode;
        }
        
        this.length++;
        return this;
    }
}