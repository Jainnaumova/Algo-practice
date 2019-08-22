const removeDuplicates = arr => {
// Edge case
  if (arr.length < 2) return arr;

// Initialize obj & newArr to store Unique data
  let obj = {};
  let newArr = []; // additional memory space
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
      newArr.push(arr[i]);
    } else {
      continue;
    }
  }
  return newArr;
}

// Big O (n)

// Return amount of unique elements
const removeDuplicates = arr => {
// Edge case
  if (arr.length === 1) return 1;

  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[index]) {
      index++;
      arr[index] = arr[i];
    }
  }
  return index + 1;
}

// arr = [ 1, 2, 3, 4, 5, 2, 2, 3, 4, 4, 5 ]
// Big O (n)

removeDuplicates([1,1,1,1,1,2,2,3,4,4,5])
