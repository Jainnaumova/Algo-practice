Exercise: build an immutable singly-linked list. It should have `head`
property, and two methods: `addToHead` (which takes a value)
and `removeFromHead` (which takes nothing). Each node in the linked
list should have a `value` property (with the value given when
it was added to the head) and a `next` property pointing to the
next node, or null if it's the tail.

class ImmutableLinkedList {
  constructor(head) {
    if (!this.head) {
      this.head = null;
    } else {
      this.head = head;
    }
  }

  addToHead(value) {
    const node = {
      value: value,
      next: this.head
    }
    return new ImmutableLinkedList(node);
  }

  removeFromHead() {
    if (!this.head) return this;
    return new ImmutableLinkedList(this.head.next);
  }
}
