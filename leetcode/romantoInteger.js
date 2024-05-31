const romanToInt = function (s) {
  const symbolMap = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  let idx = 0;
  let result = 0;

  while (idx < s.length) {
    if (s[idx + 1]) {
      let composedKey = s[idx] + s[idx + 1];

      if (symbolMap[composedKey]) {
        result += symbolMap[composedKey];
        idx += 2;
        continue;
      }
    }

    result += symbolMap[s[idx++]];
  }

  return result;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
