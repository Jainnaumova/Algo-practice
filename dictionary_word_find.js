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
  const def = dict.filter(entry => entry.startsWith(word));
  if (!def) return;
  return def.slice(word.length + 3);
}

// definitionOf('be', dictionary); // should return 'Exist'
// definitionOf('that', dictionary); // should return 'Used to identify a specific person or thing observed or heard by the speaker'
// definitionOf('to', dictionary); // should return 'Expressing motion in the direction of (a particular location)'
// definitionOf('wizbing', dictionary); // should return undefined

// Big O (n)
