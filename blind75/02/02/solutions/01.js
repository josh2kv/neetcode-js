function threeSum(nums, target = 0) {
  const results = [];

  if (nums.length < 3) return results;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > target) break;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let iLeft = i + 1;
    let iRight = nums.length - 1;

    while (iLeft < iRight) {
      let sum = nums[i] + nums[iLeft] + nums[iRight];

      if (sum === target) {
        results.push([nums[iLeft], nums[i], nums[iRight]]);

        while (nums[iLeft] === nums[iLeft + 1]) iLeft++;
        while (nums[iRight] === nums[iRight - 1]) iRight--;

        iLeft++;
        iRight--;
      } else if (sum < target) {
        iLeft++;
      } else if (sum > target) {
        iRight--;
      }
    }
  }

  return results;
}
