// Dictionary Word Finder

const dictionary = [
  'a - Used when mentioning someone or something for the first time in a text or conversation',
  'and - Used to connect words of the same part of speech, clauses, or sentences, that are to be taken jointly',
  'be - Exist',
  'in - Expressing the situation of something that is or appears to be enclosed or surrounded by something else',
  'of - Expressing the relationship between a part and a whole',
  'that - Used to identify a specific person or thing observed or heard by the speaker',
  'the - Denoting one or more people or things already mentioned or assumed to be common knowledge',
  'to - Expressing motion in the direction of (a particular location)'
];
// definitionOf('be', dictionary); // should return 'Exist'
// definitionOf('that', dictionary); // should return 'Used to identify a specific person or thing observed or heard by the speaker'
// definitionOf('to', dictionary); // should return 'Expressing motion in the direction of (a particular location)'
// definitionOf('wizbing', dictionary); // should return undefined

const findDefinitionOf = (dict, word) => {
  for (let i = 0; i < dict.length; i++) {
    let curEl = dict[i].split(' -')[0];
    if (curEl === word) return dict[i].split('- ')[1];
  }
  return -1;
}

const findDefinitionOf = (dict, word) => {
  const def = dict.filter(entry => entry.startsWith(word + ' -'));
  if (!def) return;
  return def.slice(word.length + 3);
}

// Big O (n)

// Case if dictionary is ordered !

const findDefinitionOf = (dict, word) => {
// Initialize left, right and middle indices
  let left = 0;
  let right = dict.length - 1;
  let index;
  while (index !== left && index !== right) {
    index = Math.floor((right + left) / 2); // middle of dictionary arbitrary
    if (dict[index].startsWith(word + ' - ')) return dict[index].split('- ')[1];

// continue searching in the left part of the dictionary
    if (word < dict[index]) {
      right = index - 1;
    } else {

// continue searching in the rigth part of the dictionary
      left = index + 1;
    }
  }
}

// Big O (log n)

// definitionOf('be', dictionary); // should return 'Exist'
// definitionOf('that', dictionary); // should return 'Used to identify a specific person or thing observed or heard by the speaker'
// definitionOf('to', dictionary); // should return 'Expressing motion in the direction of (a particular location)'
// definitionOf('wizbing', dictionary); // should return undefined
