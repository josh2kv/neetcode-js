/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  const freqMap = new Map();

  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const freqEntries = Array.from(freqMap.entries());

  const ordered = freqEntries.sort((a, b) => b[1] - a[1]);

  return ordered.slice(0, k).map(el => el[0]);
}

module.exports = topKFrequent;
