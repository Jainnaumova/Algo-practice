class Queue {
  constructor() {
    this.memory = [];
    this.head = 0;
    this.tail = 0;
  }

  addToTail(item) {
    this.memory[this.tail] = item;
    this.tail++;
    return this; // return all Queue
  }

  removeFromHead() {
    if (this.head === this.tail) {
      return undefined;
    } else {
      this.head++;
      return this.memory[this.head - 1] // return removed element
    }
  }
}
