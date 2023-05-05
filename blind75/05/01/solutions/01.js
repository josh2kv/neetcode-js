function search(nums, target) {
  let low = 0,
    high = nums.length - 1;

  while (low <= high) {
    const mid = low + Math.floor(high - low);

    if (nums[mid] === target) return mid;

    if (nums[mid] < target) {
      low = mid + 1;
      continue;
    }

    if (nums[mid] > target) {
      high = mid - 1;
    }
  }

  return -1;
}
