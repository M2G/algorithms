/*  eslint-disable */

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    } 
} 

class LinkedList {
    constructor(head = null){
        //@ts-ignore
        this.head = head;
    }
}

function deleteGreater(head, value) {
    if (head == null) return null;
    if (head.data > value) {
        return null;
    }

    var current = head;

    while (true) { 
        if (current.next == null) return head; //end of list
        if (current.next.data > value) break;
        current = current.next;
    }

    current.next = null; 
    return head;
}

 

function main(){


    let node1 = new ListNode(7);
    let node2 = new ListNode(3);
    let node3 = new ListNode(4); 
    let node4 = new ListNode(8); 
    let node5 = new ListNode(5); 
    let node6 = new ListNode(1); 

     //@ts-ignore
    node1.next = node2;
      //@ts-ignore
    node1.next.next = node3;
      //@ts-ignore
    node1.next.next.next = node4; 
      //@ts-ignore   
    node1.next.next.next.next = node5;

    node1.next.next.next.next.next = node6;

    let list = new LinkedList(node1)

    console.log('list.head.next.data', list.head.next.next.next.next.next)

   deleteGreater(list, 6)

   console.log('list', list.head.next.next.next)
}

main();
