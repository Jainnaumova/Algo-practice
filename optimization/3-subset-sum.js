Given a target sum and an array of positive integers, return true
if any combination of numbers in the array can add to the target.
Each number in the array may only be used once. Return false
if the numbers cannot be used to add to the target sum.

subsetSum(2, [1, 10, 5, 3]); // false
subsetSum(10, [1, 10, 5, 3]); // true
subsetSum(9, [1, 10, 5, 3]); // true
subsetSum(19, [1, 10, 5, 3]); // true
subsetSum(17, [1, 10, 5, 3]); // false

const subsetSum = (target, arr) => {
  // initialize possible sums to just a set containing 0
  const possibleSums = new Set([0]);
  for (let num of arr) {
    // copy the current set of possibilities so that we loop down it without the set changing right from under our feet
    const currentPossibleSums = new Set(possibleSums);
    const currentPosibleSums = new Set(possibleSums);
    for (let sum of currentPosibleSums) {
      // add each possible sum to each number in the original array of numbers
      const newSum = sum + num;
      // if it matches the target we're done!
      if (newSum === target) return true;
      // otherwise, add it to the set of possibilities (as long as it's less than the target)
      if (newSum < target) {
        possibleSums.add(newSum);
      }
    }
  }
  // if we get here that means we've exhausted all possible sums less than the target and have found nothing
  return false;
}

`O(n*m)` where `n` is the target number and `m` is the size of the array
 of possible numbers to draw from.

 // using memoization
// initialize the index to 0 and the memoized results to an empty object
 const subsetSum = (target, arr, idx = 0, memo={}) => {
  // if we've seen this target and already solved for it, return the answer right away
   if (memo.hasOwnProperty(target)) return memo[target];
   // if we've hit 0 we're done!
   if (target === 0) return true;
// stop trying and return false if the target is negative OR if we've reached the end of the array
   if (target < 0 || idx === arr.length) return false;
   const num = arr[idx];
   // capture the boolean result for the possibility of *excluding* the current number from the sum
  // recursively try with the same target, but continue onto the next index
   const excluded = subsetSum(target, arr, idx+1, memo);
   // capture the boolean result for the possibility of *including* the current number in the sum
// recursively try with the target minus this number and continue onto the next index
   const included = subsetSum(target - num, arr, idx+1, memo);
   // determine whether either possibility came back true
   const result = excluded || included;
   // cache this answer, associating it with this particular target
   memo[target] = result;
   return result;
 }

 // w/o memoization: would be `O(2^n)` because for each possibility,
 // we consider two more possibilities, etc. This generates a tree
 // of possibilities with 2^n nodes. On the other hand, many of the
 // nodes in this tree are identical.
 // w memoization: n decreased by number of duplicated nodes.
