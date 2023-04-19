const fn = require('./index.js');

const EXAMPLES = [
  {
    INPUT: ['anagram', 'nagaram'],
    OUTPUT: true,
  },
  {
    INPUT: ['aacc', 'ccac'],
    OUTPUT: false,
  },
  {
    INPUT: ['a', 'ab'],
    OUTPUT: false,
  },
];

test('function exists', () => {
  expect(typeof fn).toEqual('function');
});

test('Example 1', () => {
  const result = fn(EXAMPLES[0].INPUT[0], EXAMPLES[0].INPUT[1]);

  expect(result).toEqual(EXAMPLES[0].OUTPUT);
});

test('Example 2', () => {
  const result = fn(EXAMPLES[1].INPUT[0], EXAMPLES[1].INPUT[1]);

  expect(result).toEqual(EXAMPLES[1].OUTPUT);
});

test('Example 3', () => {
  const result = fn(EXAMPLES[2].INPUT[0], EXAMPLES[2].INPUT[1]);

  expect(result).toEqual(EXAMPLES[2].OUTPUT);
});
