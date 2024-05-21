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

  get(key) {
    const idx = this._hash(key);

    if (!this.keyMap[idx]) return undefined;

    let tagetKey = this.keyMap[idx];

    const element = tagetKey.find((tk) => tk[0] === key);

    return element[1];
  }

  keys() {
    let results = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      let currentMap = this.keyMap[i];

      if (currentMap && currentMap.length >= 1) {
        for (let j = 0; j < currentMap.length; j++) {
          results.push(currentMap[j][0]);
        }
      }
    }

    return results;
  }
}

const hashTable = new HashTable();

hashTable.set("foo", "test");
hashTable.set("bar", "test1");
hashTable.set("foobar", "complete test");

console.log(hashTable.keyMap);

console.log("============================ GET ============================");
console.log(hashTable.get("foo"));
console.log(hashTable.get("test5"));

console.log("============================ Keys ============================");
console.log(hashTable.keys());
