var LRUCache = /** @class */ (function () {
    function LRUCache(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }
    LRUCache.prototype.get = function (key) {
        if (!this.cache.has(key))
            return -1;
        var getCuurentKey = this.cache.get(key);
        this.cache["delete"](key);
        this.cache.set(key, getCuurentKey);
        return this.cache.get(key);
    };
    LRUCache.prototype.put = function (key, value) {
        // if already existing
        if (this.cache.has(key)) {
            this.cache["delete"](key);
        }
        this.cache.set(key, value);
        if (this.cache.size > this.capacity) {
            this.cache["delete"](this.cache.keys().next().value);
        }
    };
    return LRUCache;
}());
var obj = new LRUCache(2);
console.log('obj', obj);
obj.put(1, 1);
obj.put(2, 2);
obj.get(1);
