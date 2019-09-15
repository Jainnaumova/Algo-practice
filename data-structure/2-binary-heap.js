// A **binary heap** has 2 properties:
//
// 1. Uses a *complete* binary tree, which means that every level of the tree is full except the bottom level, which is filled from left to right
// 2. Insertions satisfy the *heap-order-property*, which says that no child's value is greater than its parent's value (in a *max* heap)

// Because binary heaps are complete binary trees, they're often stored as arrays in an order that follows a level ordered traversal starting at the root.
// We could use a pointer-and-node-based (linked) data structure for the heap implementation, but the array runs faster because we don't have to set and reset references from one node to another.

// Note that this is a **max heap**, in which the maximum-priority element ends up at the root of the heap.
// This is in contrast with a **min heap**, in which the minimum-priority element ends up at the root of the heap.
// Consider the tradeoffs in either variety for `popMax()` and `popMin()`.

class HeapPQ {
  constructor() {
    this.items = [];
  }

  swap(parentId,childId) {
    [this.items[parentId], this.items[childId]] = [this.items[childId], this.items[parentId]];
  }

  parentId(childId) {
    return Math.floor((childId - 1) / 2);
  }

  childId(parentId) {
    return [parentId * 2 + 1, parentId * 2 + 2];
  }

  priority(i) {
    return this.items[i].priority;
  }
}

// insert

insert(data, priority) {
  this.items.push({data, priority});
  this.heapifyUp();
}

heapifyUp() {
  let curIdx = this.items.length - 1;
  while(curIdx > 0 && this.items[curIdx].priority > this.items[this._parentId(curIdx)]priority) {
    swap(curIdx, this._parentId(curIdx));
    curIdx = this._parentId(curIdx);
  }
}

// peak

peak () {
  return this.items[0].data;
}

// popMax
