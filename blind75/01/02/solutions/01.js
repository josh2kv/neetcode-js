function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const charMapS = getCharMap(s);
  const charMapT = getCharMap(t);

  if (Object.keys(charMapS).length !== Object.keys(charMapT).length)
    return false;

  for (const char in charMapS) {
    if (charMapS[char] !== charMapT[char]) return false;
  }

  return true;
}

function getCharMap(str) {
  const charMap = {};

  for (const char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}
