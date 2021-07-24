/* eslint-disable */
// @ts-ignore
class Node {
   element: number;
   next: any;
   public constructor(element: number) {
        this.element = element;
        this.next = null;
    }
}


// linkedlist class
// @ts-ignore
class LinkedList {
  private head: Node;
  private size: any;
    constructor() {
        this.head = null;
        this.size = 0;
    }


    sizeOfList(): number {
        console.log("sizeOfList", this.size);
        return this.size;
    }

    // removes an element from the
    // specified location
    removeFrom(index: number) {
        if (index > 0 && index > this.size) {
            return -1;
        } else {
            let curr;
            let prev;
            let it = 0;
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
    add(element: number) {
        // creates a new node
        // @ts-ignore
      let node = new Node(element);

        // to store current node
        let current;

        // if list is Empty add the
        // element and make it head
        if (this.head === null) {
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

    contains(value: any): boolean {

        if(!value){
            return false;
        }

      let node = this.head;

      while (node) {
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
        let curr = this.head;
        const str = [];
        while (curr) {
            str.push(curr.element);
            curr = curr.next;
        }
        console.log(str.reverse());
    }
}

/**
 * Javascript implementation of
 * Complexity: O(n^2)
 * In Place Sorting: True
 */

class LRUCache {
  // maximum capacity of cache
  private CACHE_SIZE: number;
  private list: LinkedList;

  public constructor(capacity: number){
      this.list = new LinkedList();
      this.CACHE_SIZE = capacity;

  }


  public refer(key: number): void {
        if (!this.get(key)){
            this.put(key);
        }
  }

  public get(key: number): boolean {

      if (!this.list.contains(key)){
          return false;
      }

    console.log(':::::', { contains: this.list.contains(key), key })

      this.list.removeFrom(key);
      this.list.add(key);
      return true;
  }

    public put(key: number): void {
        if (this.list.sizeOfList() === this.CACHE_SIZE){
            this.list.deleteFirstNode();
        }

        this.list.add(key);
    }

    display() {
       this.list.printList();
    }
}




// @ts-ignore
function main(){

    const lru = new LRUCache(5);

        lru.refer(1);
        lru.refer(2);
        lru.refer(3);
        lru.refer(1);
        lru.refer(4);
        lru.refer(5);

        lru.display();

}

main();
