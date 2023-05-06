function search(nums, target) {
  let [left, right] = [0, nums.length - 1];

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
      continue;
    }

    right = mid;
  }

  const pivot = left;
  [left, right] = [0, nums.length - 1];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const realMid = (mid + pivot) % nums.length;

    if (nums[realMid] === target) return realMid;

    if (nums[realMid] < target) {
      left = mid + 1;
      continue;
    }

    right = mid - 1;
  }

  return -1;
}
