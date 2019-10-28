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

// using Set
const findPairSum = (arr, target) => {
  let setDif = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (!setDif.has(arr[i])) {
      setDif.add(arr[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (setDif.has(target - arr[i])) {
      return true;
    }
    return false;
  }

}

// O(n) time, O(1) extra space
