function hash(key, arrayLength) {
  let total = 0;
  let WEIRD_PRIME = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;

    total = (total * WEIRD_PRIME + value) % arrayLength;
  }
  return total;
}

console.log(hash("pink", 10));
console.log(hash("purple", 10));
console.log(hash("blue", 10));
console.log(hash("red", 10));
console.log(hash("goodbye", 10));
