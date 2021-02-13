/*  eslint-disable */


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    } 
} 

class LinkedList {
     constructor() { 
        this.head = null; 
        this.size = 0; 
    } 

add(element) { 
    // creates a new node 
    const node = new Node(element); 
  
    // to store current node 
    let current; 
  
    // if list is Empty add the 
    // element and make it head 
    if (this.head == null) {
        this.head = node; 
    } else { 
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

printList() { 
    let curr = this.head; 
    let str = ""; 
    while (curr) { 
        str += curr.data + " "; 
        curr = curr.next; 
    } 
    console.log(str); 
}   


deleteGreater(value) { 

    let tmp = this.head;
    let prev = null; 

    if (!value) {
        return false;
    } 
 
  
    if (tmp?.data > value) {
        this.head = tmp.next;
      console.log('this.head', this.head)
        tmp = this.head;
       console.log('tmp', tmp)
    }
    while (tmp) { 
       while(tmp?.data <= value) {
          prev = tmp;
          tmp = tmp.next;
        }

        if (!tmp) {
            return;
        }
  
        prev.next = tmp.next

        tmp = prev.next;
      }
    }
} 

 

function main(){

    const list = new LinkedList();

/*
    list.add(7);
    list.add(3);
    list.add(4);
    list.add(8);
    list.add(5);
    list.add(1);
*/


    list.add(1);
    list.add(8);
    list.add(7);
    list.add(3);
    list.add(7);
    list.add(10);


    list.printList(); 

    const test = list.deleteGreater(7); 

    // console.log('test', test)

    list.printList(); 

}

main();
