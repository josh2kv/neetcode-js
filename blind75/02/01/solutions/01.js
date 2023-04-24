function isPalindrome(s) {
  const stripped = s.toLowerCase().replace(/[^a-z0-9]/gi, '');

  for (let i = 0; i < stripped.length; i++) {
    if (stripped[i] !== stripped[stripped.length - 1 - i]) return false;
  }

  return true;
}
