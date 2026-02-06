(() => {
  Array.prototype.split = function () {
    return [this.slice(0, this.length / 2), this.slice(this.length / 2)];
  };
})();

const merge = (array1, array2) => {
  const result = [];

  while (array1.length && array2.length) {
    if (array1[0] < array2[0]) {
      result.push(array1.shift());
    } else {
      result.push()(array2.shift());
    }
  }

  return [...result, ...array1, ...array2];
};

const mergeSort = (array) => {
  if (array.length < 2) return array;
  const [start, end] = array.split();

  return merge(mergeSort(start), mergeSort(end));
};

export { mergeSort };
