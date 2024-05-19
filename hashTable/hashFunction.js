function hash(key, arrayLenght) {
  let total = 0;

  for (let char of key) {
    let value = char.charCodeAt(0) - 96;

    total = (total + value) % arrayLenght;
  }

  return total;
}

console.log(hash("pink", 10));
console.log(hash("purple", 10));
console.log(hash("blue", 10));
console.log(hash("red", 10));
