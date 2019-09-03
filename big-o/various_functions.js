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
