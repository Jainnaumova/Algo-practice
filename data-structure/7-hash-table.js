function hash(key) {
  let hashedKey = 0;
  for (let i = 0; i < key.length; i++) {
    hashedKey += key.charCodeAt(i);
  }
  return hashedKey % 20;
}

class HashTable {
  constructor() {
    this.buckets = Array(20);
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Alist();
    }
  }

  set(key, value) {
    const newHash = hash(key);
    this.buckets[newHash].set(key, value);
    return this;
  }

  get(key) {
    const newHash = hash(key);
    return this.buckets[newHash].get(key);
  }
}
