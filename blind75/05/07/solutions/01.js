function findMedianSortedArrays(arrA, arrB) {
  // `arrA` should be smaller than `arrB`
  const canSwap = arrB.length < arrA.length;
  if (canSwap) [arrA, arrB] = [arrB, arrA];

  // `left` and `right` will be the most middle element of the merged array
  let [left, right] = [0, arrA.length - 1];
  const totalLength = arrA.length + arrB.length;
  const mid = totalLength >> 1;
  const isEven = totalLength % 2 === 0;

  while (true) {
    const midA = (left + right) >> 1;
    const midB = mid - midA - 2;
    const { aLeft, aRight, bLeft, bRight } = getPointers(
      arrA,
      midA,
      arrB,
      midB
    );

    const isTarget = aLeft <= bRight && bLeft <= aRight;
    if (isTarget)
      return isEven
        ? (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2
        : Math.min(aRight, bRight);

    const isTargetGreater = aLeft <= bRight;
    if (isTargetGreater) left = midA + 1;

    const isTargetLess = bRight < aLeft;
    if (isTargetLess) right = midA - 1;
  }
}

const getPointers = (nums1, mid1, nums2, mid2) => {
  const getLeft = (nums, index) => (0 <= index ? nums[index] : -Infinity);

  const [aLeft, bLeft] = [getLeft(nums1, mid1), getLeft(nums2, mid2)];

  const getRight = (nums, index) =>
    index + 1 < nums.length ? nums[index + 1] : Infinity;

  const [aRight, bRight] = [getRight(nums1, mid1), getRight(nums2, mid2)];

  return { aLeft, aRight, bLeft, bRight };
};
