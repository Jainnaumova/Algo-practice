Given n non-negative integers representing an elevation map
where the width of each bar is 1, compute how much water your
collection device is able to trap after raining.

const getWater = arr => {
  const rightMaxes = [];
  let rightMax = 0;

  for (let i = arr.length-1; i >=0; i--) {
    rightMax = Math.max(rightMax, arr[i]);
    rightMaxes[i] = rightMax;
  }

  let water = 0;
  let leftMax = 0;
  for (let i = 0; i < arr.length; i++) {
    leftMax = Math.max(leftMax, arr[i]);
    const rigthMax = rightMaxes[i];
    water += Math.min(leftMax, rigthMax) - arr[i];
  }
  return water;
}
