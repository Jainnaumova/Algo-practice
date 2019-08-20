// Find first Unique Character in a string

const findUniqChar = str => {
  if (str.length === 1) return str;
  for (let i = 0; i < str.length; i++) {   // O(n)
    let char = str[i];
    if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) { // O(n)
      return i;
    }
  }
  return -1;
}

findUniqChar('flrjdpsgfljsr') return 4; // O(n*n)
