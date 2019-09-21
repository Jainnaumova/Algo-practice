const mergeSort = arr => {
  if (arr.length < 2) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));
  return merge(left, right);
}

const merge = (arrLeft, arrRight) => {
  let result = []
  while (arrLeft.length || arrRight.length) {
    if (arrLeft[0] <= arrRight[0] || !arrRight.length) {
      result.push(arrLeft.shift());
    } else {
      result.push(arrRight.shift());
    }
  }
  return result;
}

mergeSort([2,5,6,10,11,3,15]) // return [ 2, 3, 5, 6, 10, 11, 15 ]  n*log(n)
