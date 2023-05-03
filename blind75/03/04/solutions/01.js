function minWindow(s, t) {
  let start = 0,
    end = 0,
    counter = t.length,
    minStart = 0,
    minLen = Infinity;

  const tFreqMap = new Map();

  for (const char of t) {
    tFreqMap.set(char, (tFreqMap.get(char) || 0) + 1);
  }

  while (end < s.length) {
    if ((tFreqMap.get(s[end]) || 0) > 0) counter--;

    tFreqMap.set(s[end], (tFreqMap.get(s[end]) || 0) - 1);
    end++;

    while (counter === 0) {
      if (end - start < minLen) {
        minStart = start;
        minLen = end - start;
      }

      tFreqMap.set(s[start], (tFreqMap.get(s[start]) || 0) + 1);
      if ((tFreqMap.get(s[start]) || 0) > 0) counter++;

      start++;
    }
  }

  if (minLen !== Infinity) return s.slice(minStart, minStart + minLen);

  return '';
}
