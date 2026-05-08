
class LCUcache {
    constructor(size){
        this.size = size;
        this.keyStorage = new Set;
        this.cache = {}
    }
    get(key){
        if(!this.keyStorage.has(key))return null;
            const value = this.cache[key];
            this.keyStorage.delete(key)
            this.keyStorage.add(key)
        return value
    }
    put(key,value){
        if(this.keyStorage.has(key)){
            this.keyStorage.delete(key)
        } else if(this.keyStorage.size >= this.size){
            const oldest = this.keyStorage.keys().next().value;
            delete this.cache[oldest]
            this.keyStorage.delete(oldest)
        }
        this.keyStorage.add(key)
        this.cache[key] = value;
    }
}
