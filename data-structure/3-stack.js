class Stack {
  constructor() {
    this.memory = [];
    this.head = 0;
  }

  add(item) {
    this.memory[this.head] = item;
    this.head++;
    return this; // return all stack
  }

  remove() {
    this.head--;
    return this.memory[this.head]; // return the last element
  }
}
