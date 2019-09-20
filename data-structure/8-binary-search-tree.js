class BinarySearch {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(val) {
    let direction;
    if (val < this.value) {
      direction = 'left';
    } else {
      direction = 'right';
    }
    if (this[direction]) {
      this[direction].insert(val);
    } else {
      this[direction] = new BinarySearch(val);
    }
    return this;
  }

  min() {
    if (!this) return 0;
    if (this.left) {
      return this.left.min()
    }
    return this.value;
  }

  max() {
    if (!this) return 0;
    if (this.right) {
      return this.rigth.max();
    }
    return this.value;
  }

  contains(val) {
    if (this.value === val) return true;
    let direction;
    if (val < this.value) {
      direction = 'left';
    } else {
      direction = 'right';
    }
    if (this[direction]) {
      this[direction].contains(val);
    } else {
      return false;
    }
  }

  traverse(callBackFunc) {
    if (this.left) {
      this.left.traverse(callBackFunc);
    }
    callBackFunc(this.value);
    if (this.right) {
      this.right.traverse(callBackFunc);
    }
  }
}

// time complexity O(logn), space complexity O(n);

function findSecondLargest(root) {
  // If tree is null or is single node only, return null (no second largest)
  if (root==null || (root.left==null && root.right==null)) return null;
  parent = null, child = root;
  // find the right most child
  while (child.right!=null) {
      parent = child;
      child = child.right;
   }
   // if the right most child has no left child, then it's parent is second largest
   if (child.left==null) return parent.value;
   // otherwise, return left child's rightmost child as second largest
   child = child.left;
   while (child.right!=null) {
     child = child.right;
   }
   return child.value;

}
