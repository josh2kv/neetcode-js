function lengthOfLongestSubstring(s) {
  const charMap = new Map();
  let iStart = 0;

  return s.split('').reduce((max, v, i) => {
    if (charMap.has(v)) {
      iStart = charMap.get(v) + 1;
    }

    charMap.set(v, i);
    return Math.max(max, i - iStart + 1);
  }, 0);
}
