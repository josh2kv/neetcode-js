function characterReplacement(s, k) {
  let left = 0,
    right = 0,
    maxCharCount = 0;

  const charMapInWindow = {};

  while (right < s.length) {
    const char = s[right];
    charMapInWindow[char] = charMapInWindow[char]
      ? charMapInWindow[char] + 1
      : 1;

    // The frequency of the current char increased.
    // Now has the most frequent char been changed within this window?
    if (charMapInWindow[char] > maxCharCount)
      maxCharCount = charMapInWindow[char];

    // Check if it still can make a continuous sequence of the same characters
    // with operations at k times within this window.
    const windowSize = right - left + 1;
    if (windowSize - maxCharCount > k) {
      // Can't make a continuous sequence of the same characters any more
      charMapInWindow[s[left]]--;
      left++;
    }

    right++;
  }

  return right - left;
}
