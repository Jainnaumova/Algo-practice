class Queue {
  constructor() {
    this.memory = [];
    this.head = 0;
    this.tail = 0;
  }

  add(item) {
    this.memory[this.tail] = item;
    this.tail++;
    return this; // return all Queue
  }

  remove() {
    if (this.head === this.tail) {
      return undefined;
    } else {
      this.head++;
      return this.memory[this.head - 1] // return removed element
    }
  }
}
