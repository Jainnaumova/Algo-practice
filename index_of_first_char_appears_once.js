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

// using Map
const findUniqChar = str => {
  let mapChar = new Map();
  for (let i = 0; i < str.length; i++) {
    if (!mapChar.has(str[i])) {
      mapChar.set(str[i], 1)
    } else {
      const newValue = +mapChar.get(str[i]) + 1;
      mapChar.set(str[i], newValue)
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (mapChar.get(str[i]) > 1) {
      continue;
    }
    if (mapChar.get(str[i]) === 1) {
      return str[i];
    }
  }
}

// using object
const findUniqChar = str => {
  let objChar = {};
  for (let i = 0; i < str.length; i++) {
    if (!objChar[str[i]]) {
      objChar[str[i]] = 1;
    } else {
      objChar[str[i]]++;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (objChar[str[i]] > 1) {
      continue;
    }
    if (objChar[str[i]] === 1) {
      return str[i];
    }
  }
}

findUniqChar('flrjdpsgfljsr') return 4; // O(n*n)
