class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key = "") {
    let hash = 0;
    let BIG_PRIME_NUMBER = 23;

    for (let i = 0; i < key.length; i++) {
      hash =
        (hash + key.charCodeAt(i) * BIG_PRIME_NUMBER) % this.dataMap.length;
    }

    return hash;
  }

  set(key, value) {
    const index = this._hash(key);

    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }

    this.dataMap[index].push([key, value]);

    return this;
  }
}

const myHash = new HashTable();

myHash.set("lumber", 70);
myHash.set("washers", 50);
myHash.set("bolts", 1400);

console.log(myHash.dataMap);
