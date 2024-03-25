/**
 * Given two string, write the function that determine if the second string is an anagram of the first one.
 *
 * The string will be always in lower case and will never be empty.
 * The string will contain letters, numbers and special characters.
 */
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const frequencyCounter = createFrequencyCounter(str1);

  for (let val of str2) {
    if (!frequencyCounter[val]) {
      return false;
    }
    frequencyCounter[val] -= 1;
  }

  return true;
}

function createFrequencyCounter(str) {
  const freqCounter = {};

  for (let val of str) {
    freqCounter[val] = (freqCounter[val] || 0) + 1;
  }

  return freqCounter;
}

// Test cases
console.log(isAnagram("mario", "armio")); // true
console.log(isAnagram(" ", " ")); // true
console.log(isAnagram("carro", "arco")); // false
console.log(isAnagram("caro", "arco")); // true
console.log(isAnagram("aaz", "zza")); // false
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("awesome", "awesom")); // false
console.log(isAnagram("qwerty", "qeywrt")); // true
console.log(isAnagram("texttwisttime", "timetwisttext")); // true

