function searchKMP(text = "", pattern = "") {
  if (!text || !pattern) {
    return 0;
  }

  let i = 0;
  let j = 0;
  let count = 0;

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
    } else if (text[i] !== pattern[j]) {
      if (j !== 0) {
        j--;
      } else {
        i++;
      }
    }

    if (j === pattern.length) {
      count++;
      j = 0;
    }
  }

  return count;
}

console.log(searchKMP("THIS IS A TEST TEXT", "TEST"));
console.log(searchKMP("AABAACAADAABAABA", "AABA"));
console.log(searchKMP("AAAAAAAAAAAAAAAAAB", "AAAAB"));
console.log(searchKMP("ABABABCABABABCABABABC", "ABABAC"));
console.log(searchKMP("abababababababababab", "abab"));
