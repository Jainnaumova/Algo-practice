Given an an array of numbers, find the length of the longest possible
subsequence that is increasing. This subsequence can "jump" over
numbers in the array. For example in `[3, 10, 4, 5]` the longest
increasing subsequence (LIS) is `[3, 4, 5]`.

const longestIncreasingSubsequence = sequence => {
  const lengths = new Array(sequence.length).fill(1);
  for (let i = 1; i < sequence.length; i++) {
    for (let j = 0; j < i; j++) {
      //check 1: are we in an increasing sequence?
      const isSequence = sequence[j] < sequence[i];
      //check 2: what would be the sequence[i]'s sequence length if we added sequence[j]'s subsequence to it?
      //lengths[j] is the longest sequence so far that includes sequence[j], so we should build upon that
      const seqLength = lengths[j] + 1;
      //check 3: is the subsequence that include sequence[j] and it's longest subsquence + sequence[i] LONGER than
      //the longest subsequence we have save in lengths for sequence[i] at lengths[i]?
      const isLonger = lengths[i] < seqLength;
      //if check 1 and check 3 are true, save that new length to the lengths array at lengths[i]
      if (isSequence && isLonger) {
        lengths[i] = seqLength;
      }
    }
  }
  return Math.max(...lengths);
}

Time complexity is O(n^2) with an O(n) space complexity.
