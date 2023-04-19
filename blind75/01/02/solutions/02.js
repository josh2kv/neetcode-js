function isAnagram(s, t) {
  return cleanString(s) === cleanString(t);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
