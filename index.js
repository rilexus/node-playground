import "./src/arrays/index.js";

(() => {
  Array.prototype.swap = function (i, j) {
    if (i > this.length - 1) {
      throw new Error("i out of bound");
    }
    if (j > this.length - 1) {
      throw new Error("j out of bound");
    }
    const t = this[i];
    this[i] = this[j];
    this[j] = t;
    return this;
  };

  Array.prototype.bubbleSort = function (predicate) {
    let count = 0;
    for (let i = 0; i < this.length - 1; i++) {
      let swapped = false;

      for (let j = 1; j < this.length; j++) {
        ++count;
        const r = predicate ? predicate(this[i], this[j]) : this[i] - this[j];
        if (r > 0) {
          this.swap(i, j);
          swapped = true;
        }
      }

      if (!swapped) return this;
    }
    return this;
  };

  Array.prototype.insertionSort = function () {
    for (let i = 0; i < this.length; i++) {
      const element = this[i];
      let j;
      for (j = i - 1; this[j] > element && j >= 0; j--) {
        this[j + 1] = this[j];
      }
      this[j + 1] = element;
    }
    return this;
  };

  Array.prototype.split = function () {
    return [
      this.splice(0, this.length / 2),
      this.splice(this.length / 2 - 1, this.length),
    ];
  };

  Array.prototype.mergeSort = function () {
    const merge = (array1, array2) => {
      const res = [];

      while (array1.length && array2.length) {
        if (array1[0] <= array2[0]) {
          res.push(array1.shift());
        } else {
          res.push(array2.shift());
        }
      }

      return res.concat(array1, array2);
    };

    const sort = (array) => {
      if (array.length < 2) return array;
      const [left, right] = array.split();
      return merge(sort(left), sort(right));
    };

    return sort(this);
  };
})();
