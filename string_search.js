// You are attempting to find the index of the first appearance of one string (the needle)
// inside of another (the haystack).

const indexOf = (needle, haystack) => {
// Edge case
  if (haystack.length < needle.length) return -1;
  for (let i = 0; i < haystack.length - needle.length; i++) { // O(n)
    for (let j = 0; j < needle.length; j++) { // O(m)
      if (haystack[i+j] !== needle[j]) break;
      if (j + 1 === needle.length) return i;
    }
  }
  return -1;
}

const indexOf = (needle, haystack) => {
  return haystack.includes(needle);  // return true | false
}

const indexOf = (needle, haystack) => {
  return haystack.indexOf(needle) // should return 7 Big O (n*m)
}

indexOf('or', 'hello world'); // should return 7 Big O (n*m)
