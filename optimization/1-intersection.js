Given two sorted arrays of numbers, return an array containing all values
that appear in *both* arrays. The numbers in the resulting array
(the "intersection") may be returned in any order, they needn't be sorted.

You can assume that each array has only unique values
(no duplicates within the array).

const intersection = (arrA, arrB) => {
  let shared = [];
  let idxA = 0;
  let idxB = 0;
  while (idxA <= arrA.length && idxB <= arrB.length) {
    if (arrA[idxA] === arrB[idxB]) {
      shared.push(arrA[idxA]);
    }
    if (arrA[idxA] <= arrB[idxB]) {
      idxA++;
    }
    if (arrA[idxA] => arrB[idxB]) {
      idxB++;
    }
  }
  return shared;
}

`O(n+m)` time complexity
