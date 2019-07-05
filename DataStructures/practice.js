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
                newTail = current;
                current = current.next;
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
    get(index){
        if (index < 0 || index >= this.length) return undefined;
        var counter = 0;
        var current = this.head;
        while (counter !== index){
            current = current.next;
            counter++;
        } return current;
    }
    set(index, val){
        var findNode = this.get(index);
        if (findNode !== undefined){
            findNode.val = val;
            return true
        }
        return false
    }
    insert(index, val){
        if (index < 0|| index >= this.length) return undefined;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);
        
        var newNode = new Node(val);
        var prevNode = this.get(index-1)
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++;
        return newNode;
    }
    remove (index){
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length-1) return this.pop();
        if (index === 0) return this.shift();
        
        var prevNode = this.get(index-1);
        var removeNode = prevNode.next;
        prevNode.next = removeNode.next;
        removeNode.next = null;
        this.length--;
        return removeNode;
    }
    
}