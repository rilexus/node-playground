/*
    @returns {number} - number of unique elements in nums
*/
const removeDuplicates = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[i] === nums[j]) {
        // remove the duplicate
        nums.splice(j, 1);
        --j;
      } else {
        break;
      }
    }
  }

  return nums.length;
};

const nums = [1, 1, 2, 3];
console.log(removeDuplicates(nums));

export { removeDuplicates };
