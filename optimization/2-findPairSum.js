Given an array of sorted numbers, and another number (the target),
return true if any pair of numbers in the array adds to the target.

const findPairSum = (arr, target) => {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx < rightIdx) {
    const possibleSum = arr[leftIdx] + arr[rightIdx];
    if (possibleSum < target) {
      leftIdx++;
    } else if (possibleSum > target) {
      rightIdx--;
    } else {
      return true;
    }
  }
  return false;
}

// O(n) time, O(1) extra space
