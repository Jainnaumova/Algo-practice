You are given an array of strings only (could be words, phrases etc).
Create a function to find all the anagrams within that array.
The output should be an array where each element in the array
is itself an array of anagrams.

const words = ['cat', 'act', 'ignore', 'a phrase', 'tape', 'pate', 'e hpsara'];
listAnagrams(words);
// [['cat', 'act'], ['a phrase', 'e hpsara'], ['tape', 'pate']]

1. Sort each string in the array
2. Create a hash table of these sorted strings and arrays of words that match
3. Go through all of the values in that hash table and add them to the output array if they contain at least two elements

const listAnagrams = words => {
  const wordsObj = {};
  words.forEach((word) => {
    const wordKey = word.split('').sort().join('');
    if (wordsObj[wordKey]) {
      wordsObj[wordKey].push(word);
    } else {
      wordsObj[wordKey] = [word];
    }
  });

  const result = [];
  Object.keys(wordsObj).forEach((wordKey) => {
    const anagram = wordsObj[wordKey];
    if (anagram.length > 1) {
      result.push(anagram);
    }
  });
  return result;
}

O(n) time complexity, O(n) space complexity
