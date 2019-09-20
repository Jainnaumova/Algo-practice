const mergeSort = arr => {
  if (arr.length < 2) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return merge(left, right);
}

const merge = (arrLeft, arrRight) => {
  let result = [];
  while (arrLeft.length && arrRight.length) {
    let el;
    if (arrLeft[0] < arrRight[0]) {
      el = arrLeft.shift();
    } else {
      el = arrRight.shift();
    }
    result.push(el);
  }
  return result.concat(arrLeft.length ? arrLeft[0] : arrRight[0]);
}

mergeSort([2,5,6,10,11,3,15]) // return [ 2, 3, 5, 6, 10, 11, 15 ]  n*log(n)
