// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

const findSingle = (nums) => {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
}

// Time complexity of this solution is O(n) and it requires O(1) extra space.

const findSingle = nums => {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      delete obj[nums[i]];
    } else {
      obj[nums[i]] = 1;
    }
  }
  return Object.keys(obj)[0];
}

// Time complexity of this solution is O(n) and it requires O(n) extra space.

const findSingle = nums => {
  let myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!myMap.has(nums[i])) {
      myMap.set(nums[i], 1);
    } else {
      myMap.set(nums[i], 2)
    }
  }
  for (let [key, value] of myMap.entries()) {
    if (value === 1) {
      return key;
    }
  }
}

const findSingle = nums => {
  let myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!myMap.has(nums[i])) {
      myMap.set(nums[i], 1);
    } else {
      myMap.delete(nums[i]);
    }
  }
  for (let [key, value] of myMap.entries()) {
    return key;
  }
}
