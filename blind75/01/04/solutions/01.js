function groupAnagrams(strs) {
  const strsMap = new Map();

  let index = 0;
  for (const str of strs) {
    const sortedStr = refineString(str);
    if (strsMap.has(sortedStr)) continue;

    strsMap.set(sortedStr, index);
    index++;
  }

  const sortedStrs = strs.map(str => refineString(str));

  const result = [];

  sortedStrs.forEach((el, iInArr) => {
    const iInMap = strsMap.get(el);
    result[iInMap]
      ? result[iInMap].push(strs[iInArr])
      : result.push([strs[iInArr]]);
  });

  return result;
}

function refineString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
