// Double Linked List Node class
class DoubleLinkedListNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

function sortedInsert(head, data) {
    let node = head
    let newNode = new DoublyLinkedListNode();
    newNode.data = data
    
    // check for empty
    if (head === null) {
        return newNode
    }
    // check if data is less than head
      // insert to beginning
    if (head.data >= data) {
        head.prev = newNode
        newNode.next = head
        return newNode
    }
    while (node !== null) {
      if (newNode.data < node.data) {
        // we want to insert here
        node.prev.next = newNode
        newNode.prev = node.prev
        newNode.next = node
        node.prev = newNode
        return head
      }
      
      // handle adding newNode to end of LL
      if (node.next == null) {
        node.next = newNode
        newNode.prev = node
        return head
      }

      node = node.next
    }
}