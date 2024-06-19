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

  get(key) {
    const index = this._hash(key);

    if (this.dataMap[index]) {
      const data = this.dataMap[index];
      for (let i = 0; i < data.length; i++) {
        if (data[i][0] === key) return data[i][1];
      }
    }

    return undefined;
  }

  keys() {
    const allKeys = [];

    for (let i = 0; i < this.dataMap.length; i++) {
      const data = this.dataMap[i];

      if (data) {
        for (let j = 0; j < data.length; j++) {
          allKeys.push(data[j][0]);
        }
      }
    }

    return allKeys;
  }
}

const myHash = new HashTable();

console.log("====================== SET =======================");
myHash.set("lumber", 70);
myHash.set("washers", 50);
myHash.set("bolts", 1400);

console.log(myHash.dataMap);

console.log("\n====================== GET =======================");
console.log(myHash.get("kdjlaskdjalksd"));
console.log(myHash.get("washers"));
console.log(myHash.get("lumber"));

console.log("\n====================== KEYS =======================");
console.log(myHash.keys());
