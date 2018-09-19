class Sorter {
  constructor() {
    // your implementation
    this.array = [];
    this.compare = (left, right) => left - right;
  }

  add(element) {
    // your implementation
    this.array.push(element);
  }

  at(index) {
    // your implementation
    return this.array[index];
  }

  get length() {
    // your implementation
    return this.array.length;
  }

  toArray() {
    // your implementation
    return this.array;
  }

  sort(indices) {
    // your implementation
    var swap = [];
    for (var i = 0; i < indices.length; i++) {
      swap.push(this.array[indices[i]]);
    }
    swap.sort(this.compare);
    indices.sort();
    for (var i = 0; i < indices.length; i++) {
      this.array[indices[i]] = swap[i];
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.compare =  compareFunction;
  }
}

module.exports = Sorter;