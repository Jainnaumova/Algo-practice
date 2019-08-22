// 2. Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

const twoSum = (arr, target) => {
  if (arr.length < 2) return -1;

  let obj = {};
  for (let i = 0; i < arr.length; i++) {  // O (n)
    obj[arr[i]] = i;
  }

  for (let i = 0; i < arr.length; i++) {  // O (n)
    let complement = target - arr[i];
    if (obj[complement] && obj[complement] !== i) {
      return [i, obj[complement]]
    }
  }

}
// Time complexity : O(n)
// Space complexity : O(1)
twoSum([2, 11, 7, 15], 9) // return [0, 2]
