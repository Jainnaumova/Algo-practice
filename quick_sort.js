const swap = (arr, leftIdx, rightIdx) => {
  let temp = arr[leftIdx];
  arr[leftIdx] = arr[rightIdx];
  arr[rightIdx] = temp;
}

const partition = (arr, left, right) => {
  if (arr.length < 2) return arr;
  let pivot = arr[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while(arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
}

const quickSort = (arr, left, right) => {
  let index;
  if (arr.length > 1) {
    index = partition(arr, left, right);
    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }
    if (index < right) {
      quickSort(arr, index, right);
    }
  }
  return arr;
}

quickSort([2,5,6,10,4,7,11,3,15], 0, 8) // [ 2, 3, 4, 5, 6, 7, 10, 11, 15 ]

// n*log(n)
