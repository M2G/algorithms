class LRUCache {
    cache: Map<number, number>;
    capacity: number;
    constructor(capacity: number) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    get(key: number): number {
        if (!this.cache.has(key)) return -1;
        const getCuurentKey = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, getCuurentKey);
        return this.cache.get(key);
    }

    put(key: number, value: number): void {
        // if already existing
        if (this.cache.has(key)) {
          this.cache.delete(key);
        }

        this.cache.set(key, value);

         if (this.cache.size > this.capacity) {
          this.cache.delete(this.cache.keys().next().value);
        }
    }
}



 const obj = new LRUCache(2);

console.log('obj', obj)

obj.put(1, 1);
obj.put(2, 2);
obj.get(1);