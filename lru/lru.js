class Node {
  constructor(key, value) {
    if (typeof key !== 'undefined' || typeof key !== null) {
      this.key = key
    }
    if (typeof value !== 'undefined' || typeof value !== null) {
      this.value = value
    }
    this.next = null
    this.prev = null
  }
}

class LRU {
  constructor(capacity) {
    this.size = 0;
    (typeof capacity == "number") ? this.capacity = capacity: this.capacity = 10;
    this.map = {};
    // save the head and tail so we can update it easily
    this.head = null;
    this.tail = null;
  }

  setHeadNode(node) {
    node.next = this.head; // add to head position
    node.prev = null;

    if (this.head !== null) {
      this.head.prev = node;
    }

    console.log('setHeadNode : ', node)
    console.log('this.head : ', this.head)

    this.size++;
    console.log('this.size : ', this.size)
  }

  get(key) {
    if (this._map[key]) {
      console.log('get ', this._map[key])
    }
  }

// add an item to the cache. overwrite if already exists
  set(key = '', value = '') {
    const node = new Node(key, value);
    if (this.map.hasOwnProperty(key)) {
      this.remove(key);
      console.log('ok')
    } else {
      // if cache is full
      if (this.size >= this.capacity) {
        console.log('cache is full ::::::::::: ')
        this.size--;
        console.log('cache is full ::::::::::: size ', this.size)
      }
    }
    this.setHeadNode(node);
  }

  remove(key = '') {
    if (this.map.hasOwnProperty(key)) {
      const node = this.map[key];
      console.log('remove node', node);
    }
  }
}


const lru = new LRU(4);
lru.set('key_0', 2);
lru.set('key_1', 4);
lru.set('key_2', 6);
lru.set('key_4', 8);
lru.set('key_5', 10);
lru.set('key_6', 12);