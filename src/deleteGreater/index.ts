/*  eslint-disable */

// class to get a new node
class Node {
    data: number;
    next: null;
    public constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    private head: Node;
    private size: number;
     public constructor() {
        this.head = null;
        this.size = 0;
    }

add(element: number) {
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
    this.size += 1;
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

// function to delete all the nodes from the list
// that are greater than the specified value x
deleteGreater(value: number) {

    let tmp = this.head;
    let prev = null;

    if (!value) {
        return false;
    }

    // If head node itself holds the value greater than 'x'
    if (tmp?.data > value) {
        this.head = tmp.next;
      console.log('this.head', this.head)
        tmp = this.head;
       console.log('tmp', tmp)
    }

    // Delete occurrences other than head
    while (tmp) {

        // Search for the node to be deleted,
        // keep track of the previous node as we
        // need to change 'prev->next'
       while(tmp?.data <= value) {
          prev = tmp;
          tmp = tmp.next;
        }
        // If required value node was not present
        // in linked list
        if (!tmp) {
          return false;
        }

       // Unlink the node from linked list
        prev.next = tmp.next;

        // Update Temp for next iteration of
        // outer loop
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

    list.deleteGreater(7);

    // console.log('test', test)

    list.printList();

}

main();
