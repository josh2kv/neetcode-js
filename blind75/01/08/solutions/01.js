/**
 * @param {string[]} strs
 * @return {string}
 */
function encode(strs) {
  return strs.map(str => `${str.length}#${str}`).join('');
}

/**
 * @param {string} str
 * @return {string[]}
 */
function decode(str) {
  let currentIndex = 0;
  const result = [];

  while (currentIndex < str.length) {
    const delimiterIndex = str.indexOf('#', currentIndex);
    const length = Number(str.slice(currentIndex, delimiterIndex));
    const [start, end] = [delimiterIndex + 1, delimiterIndex + length + 1];
    const word = str.slice(start, end);

    result.push(word);
    currentIndex = end;
  }

  return result;
}
