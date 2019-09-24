You are given an input string consisting of brackets—square `[ ]`,
round `( )`, and curly `{ }`. The input string can include other text.
 Write a function that returns either `true` if the brackets in the
 input string are balanced or `false` if they are not. Balanced means
 that any opening bracket of a particular type must also have
 a closing bracket of the same type.

An empty input string or a string without brackets can also be
considered "balanced".

const pattern = /[[\](){}]/g;

const pairs = {
  '(': ')',
  '{': '}',
  '[': ']'
}

const hasBalancedBrackets = str => {
  const inputBrackets = str.match(pattern);

  if (!str.length || !inputBrackets.length) return true;

  const brackets = [];
  inputBrackets.forEach((bracket) => {
    const lastBracket = brackets[brackets.length - 1];
    if (pairs[lastBracket] === bracket) {
      brackets.pop();
    } else {
      brackets.push(bracket);
    }
  });

  return !brackets.length;
}
