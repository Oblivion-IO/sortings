/**
 * Min Heap
 */
class MinHeap {
  constructor() {
    this.values = [];
  }

  /**
   *
   * @param {number} value
   */
  insert(value) {
    this.values.push(value);

    let i = this.values.length - 1;
    let parent = Math.floor((i - 1) / 2);
    while (i > 0 && this.values[i] < this.values[parent]) {
      let temp = this.values[parent];
      this.values[parent] = value;
      this.values[i] = temp;
      i = parent;
      parent = Math.floor((i - 1) / 2);
    }
  }

  popMin() {
    let min = this.values[0];
    let last = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = last;
      let i = 0;
      while (2 * i + 1 < this.values.length) {
        let j = 2 * i + 1;
        if (2 * i + 2 < this.values.length && this.values[2 * i + 2] < this.values[j]) {
          j = 2 * i + 2;
        }

        if (this.values[j] >= this.values[i]) {
          break;
        }

        let temp = this.values[j];
        this.values[j] = this.values[i];
        this.values[i] = temp;
        i = j;
      }
    }

    return min;
  }
}

let mh = new MinHeap();
mh.insert(5);
mh.insert(2);
mh.insert(12);
mh.insert(6);
mh.insert(2);
mh.insert(20);
mh.insert(1);

console.log(mh.values);
console.log(mh.popMin());
console.log(mh.popMin());
console.log(mh.popMin());
console.log(mh.popMin());
console.log(mh.popMin());
console.log(mh.popMin());
console.log(mh.popMin());
