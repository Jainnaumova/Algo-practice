class AlistNode {
  // constructor function
  constructor(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

// always put node in to the head of Alist
class Alist {
  constructor() {
    this.head = null;
  }

  set(key, value) {
    const exHead = this.head;
    const newNode = new AlistNode(key, value, exHead);
    this.head = newNode;
    return this;
  }

  get(key) {
    let curEl = this.head;
    while(curEl) {
      if (curEl.key === key) return curEl.value;
      curEl = curEl.next;
    }
  }
}
