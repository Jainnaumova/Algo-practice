class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  addToTail(item) {
    const newItem = new ListNode(item, this.prev, null);
    const exTail = this.tail;
    this.tail = newItem;
    if (exTail) {
      exTail.next = newItem;
      newItem.prev = exTail;
    } else {
      this.tail = newItem;
    }
    return this;
  }

  removeFromTail() {
    const exTail = this.tail;
    if (!exTail) return undefined;
    if (exTail.prev) {
      this.tail = exTail.prev;
      this.tail.next = null;
    } else {
      this.head = null;
      this.head = null;
    }
    return exTail.item;
  }

  forEach(callBackFunc) {
    let arr = [];
    let curNode = this.head;
    while(curNode) {
      arr.push(callBackFunc(curNode.item));
      curNode = curNode.next;
    }
  }
}

class ListNode {
  constructor(item, prev, next) {
    this.item = item;
    this.prev = prev || null;
    this.next = next || null;
  }
}
