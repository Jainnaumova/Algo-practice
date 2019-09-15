const stringPermutations = (str) => {
  const letters = str.split('');
  let results = [[letters.shift()]];

  while (letters.length) {
    const curLetter = letters.shift();
    let tmpResult = [];

    results.forEach(result => {
      let rIdx = 0;
      while(rIdx <= result.length) {
        let temp = result.slice(); // Make a copy so you retain the current result
        temp.splice(rIdx, 0, curLetter);
        tmpResult.push(temp);
        rIdx++;
      }
    })
    results = tmpResult;
  }

  return results.map(result => result.join(''))
                .filter((el, idx, self) => self.indexOf(el) === idx)
                .sort();
}

// Without sorting before we start finding permutations, we will get n! _ log(n!) -- we have an array that is n! in length at that point.
// If we sort before our sort time is n _ log(n). In both situations, n is the length of the input string. Overall, finding all string permutations is n!
