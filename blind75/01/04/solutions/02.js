function groupAnagrams(strs) {
  const map = new Map();

  for (let str of strs) {
    const sorted = str.split('').sort().join('');

    map.has(sorted)
      ? map.set(sorted, [...map.get(sorted), str])
      : map.set(sorted, [str]);
  }

  return Array.from(map.values());
}
