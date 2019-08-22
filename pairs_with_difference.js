// Given an array of distinct integer values, count the number of pairs of integers that have difference k.

const findPairs = (arr, k) => {
  if (arr.length < 2) return -1;

  let obj = {};
  for (let i = 0; i < arr.length; i++) {  // O (n)

// Avoid duplicates in object
    if (!obj[arr[i]]) {
      obj[arr[i]] = i;
    }
  }

  let count = 0;
  for (let i = 0; i < arr.length; i++) {  // O (n)
    if(obj[arr[i] - k]) {
      count++;
    }
    if(obj[arr[i] + k]) {
      count++;
    }
// Avoid count duplicate pairs
    delete obj[arr[i]]
  }
  return count;
}

//  Big O (n)

findPairs([1,7,5,9,2,12,3], 2) // return 4
