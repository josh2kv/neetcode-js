// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/158940/beat-100-very-simple-python-very-detailed-explanation/
function findMin(nums) {
  let [left, right] = [0, nums.length - 1];

  // Because there is no `if(numns[mid] === target)` inside `while` loop unlike regular binary search,
  // `left <= right` will result in infinite loop
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    // It's normal the number to the right is bigger than to the left(mid)
    // So if `nums[mid] > nums[right]` it's abnormal and the minimum number should be in between them
    if (nums[mid] > nums[right]) {
      left = mid + 1;
      continue;
    }

    right = mid;
  }

  return nums[left];
}
