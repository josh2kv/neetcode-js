function maxArea(height) {
  let iLeft = 0,
    iRight = height.length - 1,
    maxArea = 0;

  while (iLeft < iRight) {
    maxArea = Math.max(
      maxArea,
      (iRight - iLeft) * Math.min(height[iLeft], height[iRight])
    );

    height[iLeft] > height[iRight] ? iRight-- : iLeft++;
  }

  return maxArea;
}
