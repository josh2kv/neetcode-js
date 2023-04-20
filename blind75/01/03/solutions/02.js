function twoSum(nums, target) {
  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numsMap.has(complement)) return [i, numsMap.get(complement)];

    numsMap.set(nums[i], i);
  }
}
