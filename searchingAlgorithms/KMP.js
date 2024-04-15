/**
 * 1. First of all, I need to implement the IPS array.
 * 1.1 IPS array is an array that is built from the pattern string.
 *    The idea behind it, it's to loopover the pattern and if I find and a character that
 *    is in the begining of the string and in the other position, that mean that it is
 *    the bigest prefix which is also a sufix.
 *
 * 2. Write the search function, which receives the text and pattern.
 *    - This function, first should call the builtISP function to previouslly compile the longest prefix and sufix.
 *    - Loop over the entire text while the i (which is the index of each character in the text) is less than the text length.
 *        - If the the text[i] === pattern[j], increment both i, and j;
 *        - otherwise, verify if the j === 0; if so, just increment the i, if not, make j = ips[j - 1];
 *        - after that, if J === pattern.length, we found a match.
 *              - increment the count.
 *              - j = 0; to looking for another occurence of the pattern.
 */
function buildPartialMatchTable(pattern) {
  const lps = [0]; // Initialize the partial match table with 0 for the first element
  let len = 0; // Length of the previous longest prefix suffix

  for (let i = 1; i < pattern.length; ) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  return lps;
}

function search(text, pattern) {
  if (!text || !pattern) {
    return 0;
  }

  const lps = buildPartialMatchTable(pattern);
  let count = 0;
  let i = 0;
  let j = 0;

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      count++;
      j = lps[j - 1];
    } else if (i < text.length && text[i] !== pattern[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return count;
}

console.log(search("THIS IS A TEST TEXT", "TEST"));
console.log(search("AABAACAADAABAABA", "AABA"));
console.log(search("AAAAAAAAAAAAAAAAAB", "AAAAB"));
console.log(search("ABABABCABABABCABABABC", "ABABAC"));
console.log(search("abababababababababab", "abab"));
console.log(search("abxabcabcaby", "abcaby"));
