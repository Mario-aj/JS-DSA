class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  #hash(key = "") {
    let hash = 0;
    let BIG_PRIME_NUMBER = 35;

    for (let i = 0; i < key.length; i++) {
      hash =
        (hahs + key.charCodeAt(i) * BIG_PRIME_NUMBER) % this.dataMap.length;
    }

    return hash;
  }
}

const myHash = new HashTable();
