/*  eslint-disable */


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    } 
} 

class LinkedList {
     constructor() 
    { 
        this.head = null; 
        this.size = 0; 
    } 

add(element) 
{ 
    // creates a new node 
    const node = new Node(element); 
  
    // to store current node 
    let current; 
  
    // if list is Empty add the 
    // element and make it head 
    if (this.head == null) 
        this.head = node; 
    else { 
        current = this.head; 
  
        // iterate to the end of the 
        // list 
        while (current.next) { 
            current = current.next; 
        } 
  
        // add node 
        current.next = node; 
    } 
    this.size++; 
}  
printList() 
{ 
    let curr = this.head; 
    let str = ""; 
    while (curr) { 
        str += curr.data + " "; 
        curr = curr.next; 
    } 
    console.log(str); 
}  
}

function deleteGreater(head, value) {
    /*
    if (head === null){
        return null;
    }

    if (head.data > value) {
        return null;
    }

    let current = head;

    while (true) { 
        if (current.next === null) { 
          return head;
        } //end of list

        console.log('current', current.next)

       if (current.next.data > value) {
         break;
       } 

       current = current.next;
    }

    current.next = null; 
    return head;*/

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

    const list = new LinkedList();

    list.add(7);


    list.printList(); 

    list.add(3);
    list.add(4);
    list.add(8);
    list.add(5);
    list.add(1);

    const test = deleteGreater(list, 6); 

    console.log('test', test)

    list.printList(); 

}

main();
