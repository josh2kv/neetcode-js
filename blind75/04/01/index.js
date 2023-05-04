function isValid(s) {
  const stack = [];

  for (const char of s) {
    if (char === '(') stack.push(')');
    else if (char === '{') stack.push('}');
    else if (char === '[') stack.push(']');
    else if (stack.length === 0 || char !== stack.pop()) return false;
  }

  return stack.length === 0;
}

module.exports = isValid;
