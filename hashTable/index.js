class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;

      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    const idx = this._hash(key);

    if (!this.keyMap[idx]) {
      this.keyMap[idx] = [];
    }

    this.keyMap[idx].push([key, value]);

    return this;
  }
}

const hashTable = new HashTable();

hashTable.set("foo", "test");
hashTable.set("bar", "test1");
hashTable.set("foobar", "complete test");

console.log(hashTable.keyMap);
