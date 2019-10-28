// recursion solution
const checkPalindrome = (word) => {
  if (word.length < 2) return true;
  if (word[0] === word[word.length-1]) {
    word = word.slice(1, word.length-1)
    return checkPalindrome(word)
  } else {
    return false;
  }
}

// using ES6 but worse time complexity
const checkPalindrome = word => {
  return word === word.split('').reverse().join('');
}

// using while loop
const checkPalindrom = str => {
  if (str.length < 2) return true;
  let firstIdx = 0;
  let lastIdx = str.split('').length-1;
  while (firstIdx <= lastIdx) {
    if (str[firstIdx] !== str[lastIdx]) {
      return false;
    }
    if (str[firstIdx] === str[lastIdx]) {
      firstIdx++;
      lastIdx--;
    }
    return true;
  }
}

checkPalindrome('mm') // return true
// runtime O(n)
