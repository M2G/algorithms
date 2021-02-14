/* eslint-disable */
//@ts-ignore


// User defined class node 
class Node { 
    // constructor 
    constructor(element) 
    { 
        this.element = element; 
        this.next = null
    } 
} 


// linkedlist class 
class LinkedList { 
    constructor() { 
        this.head = null; 
        this.size = 0; 
    } 


size_of_list(): number { 
    console.log(this.size); 
    return this.size;
} 

// removes an element from the 
// specified location 
removeFrom(index) { 
    if (index > 0 && index > this.size) 
        return -1; 
    else { 
        var curr, prev, it = 0; 
        curr = this.head; 
        prev = curr; 

        // deleting first element 
        if (index === 0) { 
            this.head = curr.next; 
        } else { 
            // iterate over the list to the 
            // position to removce an element 
            while (it < index) { 
                it += 1; 
                prev = curr; 
                curr = curr.next; 
            } 

            // remove the element 
            prev.next = curr.next; 
        } 
        this.size -= 1; 

        // return the remove element 
        return curr.element; 
    } 
} 


// adds an element at the end 
// of list 
add(element) { 
    // creates a new node 
    var node = new Node(element); 

    // to store current node 
    var current; 

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
    this.size += 1; 
}

contains(value): boolean {

    if(!value){
        return false;
    }

  var node = this.head;

  while (node) {


  // console.log('node', node?.element)

    if (node?.element === value) {
      return true;
    }
    node = node.next;
  }
  return false;
}; 

deleteFirstNode(){
    if (!this.head){
        return;
    }
    this.head = this.head.next;
    return this.head;
}

printList() { 
    var curr = this.head; 
    var str = ""; 
    while (curr) { 
        str += curr.element + " "; 
        curr = curr.next; 
    } 
    console.log(str); 
} 


    // functions to be implemented 
    // add(element) 
    // insertAt(element, location) 
    // removeFrom(location) 
    // removeElement(element) 

    // Helper Methods 
    // isEmpty 
    // size_Of_List 
    // PrintList 
} 





class LRUCache {
  // maximum capacity of cache 
  private CACHE_SIZE;
  private list;

  public constructor(capacity: number){
      this.list = new LinkedList();
      this.CACHE_SIZE = capacity;

  }


  public refer(key: number){
        if(this.get(key) === false){
            this.put(key);
        }
  }

  public get(key: number): boolean {

  console.log('contain', this.list.contains(key))

      if(!this.list.contains(key)){
          return false;
      }

      this.list.removeFrom(key);
      this.list.add(key); 
      return true;
  }

    public put(key: number): boolean {
        if(this.list.size_of_list() === this.CACHE_SIZE){
            this.list.deleteFirstNode();
        }

        this.list.add(key);
    }

    printList() { 
    var curr = this.head; 
    var str = ""; 
    while (curr) { 
        str += curr.element + " "; 
        curr = curr.next; 
    } 
    console.log(str); 
} 
}




function main(){

    const lru = new LRUCache(4);

        lru.refer(1);
        lru.refer(2);
        lru.refer(3);
        lru.refer(1);
        lru.refer(4);
        lru.refer(5);


       //  lru.printList();

}

main();
