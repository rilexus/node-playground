export const getConcatenation = (nums) => {
  if (!Array.isArray(nums)) {
    throw new TypeError("Input must be an array");
  }
  const result = Array.from({ length: nums.length * 2 });

  for (let i = 0; i < nums.length; ++i) {
    result[i] = nums[i];
    result[i + nums.length] = nums[i];
  }

  return result;
};
