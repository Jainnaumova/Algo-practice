// Implement a priority queue with the following 3 methods:
//
// `insert(data, priority)` // inserts data into the priority queue with the given priority
//
// `peek()` // returns the value of the item with the highest priority without removing it from the priority queue
//
// `popMax()` // returns the value of the item with the highest priority and also removes it from the priority queue
//
// For the purposes of our implementation, "higher priority" corresponds to a higher integer value. Note, however, that this could be implemented either way.

function Node (data, priority) {
  this.data = data;
  this.priority = priority;
  this.next = null;
}

function PriorityQueue () {
  this.first = null;
}

// insert

PriorityQueue.prototype.insert = function(data, priority) {
  const newItem = new Node(data, priority);
  // First case: Check if the PQ is empty, or newItem's priority > this.first's
  if(!this.first || this.first.priority < priority) {
    newItem.next = this.first;
    this.first = newItem;
  } else {
    // Second case: Find where to insert newItem
    let curNode = this.first;
    while (curNode.next && curNode.next.priority >= priority) {
      // Traverse queue until it finds a node with priority < search priority
      curNode = curNode.next;
    }
    // Here, currentNode is right before where you want to insert newItem. Point
    // newItem.next to currentNode.next, then point currentNode's next to newItem.
    newItem.next = curNode.next;
    curNode.next = newItem;
  }
}

// peek
PriorityQueue.prototype.peek = function() {
  return this.first.data;
}

// popMax
PriorityQueue.prototype.popMax = function() {
  const maxNode = this.first;
  this.first = this.first.next;
  return maxNode.data;
}

// This should be `O(1)` time complexity for peek and popMax, but `O(n)` time complexity for insert (where `n` is the number of nodes in the priority queue).
//
// Space complexity is `O(n)`, where `n` is the number of items in the queue.
