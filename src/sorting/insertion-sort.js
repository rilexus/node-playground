(() => {
  Array.prototype.swap = function (i, j) {
    const temp = this[i];
    this[i] = this[j];
    this[j] = temp;
    return this;
  };
})();

export const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    let j;
    for (j = i - 1; j >= 0 && arr[j] > current; --j) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = current;
  }

  return arr;
};
