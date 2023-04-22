function productExceptSelf(nums) {
  const result = [];

  const fromLeft = [];
  let multiplicationFromLeft = 1;

  for (let i = 0; i < nums.length; i++) {
    fromLeft[i] = multiplicationFromLeft;
    multiplicationFromLeft *= nums[i];
  }

  const fromRight = [];
  let multiplicationFromRight = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    fromRight[i] = multiplicationFromRight;
    multiplicationFromRight *= nums[i];

    result[i] = fromRight[i] * fromLeft[i];
  }

  return result;
}
