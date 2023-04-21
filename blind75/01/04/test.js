const fn = require('./index');

const EXAMPLES = [
  {
    INPUT: [['eat', 'tea', 'tan', 'ate', 'nat', 'bat']],
    OUTPUT: [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']],
  },
  {
    INPUT: [['']],
    OUTPUT: [['']],
  },
  {
    INPUT: [['a']],
    OUTPUT: [['a']],
  },
];

test('function exists', () => {
  expect(typeof fn).toEqual('function');
});

test('Example 1', () => {
  const result = fn(EXAMPLES[0].INPUT[0]);

  expect(result).toContainEqual(...EXAMPLES[0].OUTPUT);
});

test('Example 2', () => {
  const result = fn(EXAMPLES[1].INPUT[0]);

  expect(result).toContainEqual(...EXAMPLES[1].OUTPUT);
});

test('Example 3', () => {
  const result = fn(EXAMPLES[2].INPUT[0]);

  expect(result).toContainEqual(...EXAMPLES[2].OUTPUT);
});
