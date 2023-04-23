/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  const numSet = new Set(nums);
  let maxScore = 1;

  // Q: Why is `[...numSet]` used in `for/of` loop instead of just using `numSet`?
  // you can just pass test in leetcode with `numSet` in `for/of` loop
  for (const num of [...numSet]) {
    const prevNum = num - 1;
    if (numSet.has(prevNum)) continue;

    let [curNum, score] = [num, 1];

    const isStreak = () => numSet.has(curNum + 1);
    while (isStreak()) {
      curNum++;
      score++;
    }

    maxScore = Math.max(maxScore, score);
  }

  return maxScore;
}
