// https://leetcode.com/problems/koko-eating-bananas/solutions/1703427/javascript-binary-search-explained/
function minEatingSpeed(piles, h) {
  let [low, high] = [1, Math.max(...piles)];

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const estimatedTime = calculateTime(piles, mid);

    if (estimatedTime === h) return mid;

    if (estimatedTime < h) {
      high = mid - 1;
    }

    if (estimatedTime > h) {
      low = mid + 1;
    }
  }

  return low;
}

const calculateTime = (piles, speed) =>
  piles.reduce((acc, cur) => acc + Math.ceil(cur / speed), 0);
