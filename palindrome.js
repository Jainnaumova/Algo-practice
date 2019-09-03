const checkPalindrome = (word) => {
  if (word.length < 2) return true;
  if (word[0] === word[word.length-1]) {
    let first = word[0];
    let last = word[word.length-1];
    word = word.slice(1, word.length-1)
    return checkPalindrome(word)
  } else {
    return false;
  }
}

checkPalindrome('mm') // return true
// runtime O(n)
