// Shuffle array
const shuffleArray = (arr) => {
  let temp, rand;
  i = arr.length;
  while (i--) {
    rand = Math.floor(Math.random()*i);
    temp = arr[i];
    arr[i] = arr[rand];
    arr[rand] = temp;
  }
  return arr;
}

shuffleArray([1,6,2,3,4,5,5,6])
// runtime O(n)

// get intersection of two arrays
const getIntersection = (arr1, arr2) => {
  let intersectedArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        intersectedArr.push(arr2[j])
      }
    }
  }
  return intersectedArr;
}

getIntersection([1,2,3,4,5], [2,3,4,8,9,0]) // return [2,3,4]
// runtime O(n*m)

//reverse array
const reverseArray = arr => {
  for (let leftIdx = 0; leftIdx < arr.length / 2; leftIdx++) {
    const rigthIdx = arr.length - 1 - leftIdx;
    const left = arr[leftIdx];
    const rigth = arr[rigthIdx];
    arr[rigthIdx] = left;
    arr[leftIdx] = rigth;
  }
  return arr;
}

reverseArray([1,2,3,4,5])
// runtime O(n)
// O(n) time
// O(1) extra space
// (O(n) total space)
