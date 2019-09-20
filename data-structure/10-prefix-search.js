// Given a "book" and a string to search for, return an array of the character indices for every word in the book that begins with that string.

// The book will contain two things: a book id and a string of English text. The search should be case *insensitive*.

const book = {
  id: 1,
  text: `Once upon a time, there was a book with words.
  The book had not been catalogued, but would catch the
  eyes of onlookers nonetheless.`
};

const findWordsStartingWith = (book, prefix) => {
  const text = book.text.toLowerCase();
  prefix = prefix.toLowerCase();
  let result = [];
  for (let i = 0; i < text.length - prefix.length; i++) {
    if (text[i] != 0 && text[i - 1] != ' ') continue;
    if (text.slice(i).startsWith(prefix)) result.push(i);
  }
  return result;
}

const findWordsStartingWith = (book, prefix) => {
  const text = book.text.toLowerCase();
  prefix = prefix.toLowerCase();
  let result = [];
  for (let i = 0; i < text.length - prefix.length; i++) {
    if (text[i] != 0 && text[i-1] != ' ') continue;

    for (let j = 0; j < prefix.length; j++) {
      if (prefix[j] != text[i+j]) break;
      if (j+1 === prefix.length) result.push(i);
    }
  }
  return result;
}

// O (n*m) n - text.length, m - prefix.length


// HashMap solution but string splitted to array and found the words indixes
const findWordsStartingWith = (book, prefix) => {
  const text = book.text.toLowerCase().split(' ');
  prefix = prefix.toLowerCase();

  let myMap = new Map();
  for (let i = 0; i < text.length; i++) {

    if (!myMap.has(text[i])) {
      myMap.set(text[i], [i])
    } else {
      const indexes = myMap.get(text[i]);
      myMap.set(text[i], indexes.concat(i));
    }
  }
  return myMap.get(prefix);
}

findWordsStartingWith(book, 'the') // return [10,19]

// O (n)
