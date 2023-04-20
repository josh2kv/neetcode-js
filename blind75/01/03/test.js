const fn = require('./index');

const EXAMPLES = [
  {
    INPUT: [[2, 7, 11, 15], 9],
    OUTPUT: [0, 1],
  },
  {
    INPUT: [[3, 2, 4], 6],
    OUTPUT: [1, 2],
  },
  {
    INPUT: [[3, 3], 6],
    OUTPUT: [0, 1],
  },
];

test('function exists', () => {
  expect(typeof fn).toEqual('function');
});

test('Example 1', () => {
  const result = fn(EXAMPLES[0].INPUT[0], EXAMPLES[0].INPUT[1]);

  expect(result).toContainEqual(...EXAMPLES[0].OUTPUT);
});

test('Example 2', () => {
  const result = fn(EXAMPLES[1].INPUT[0], EXAMPLES[1].INPUT[1]);

  expect(result).toContainEqual(...EXAMPLES[1].OUTPUT);
});

test('Example 3', () => {
  const result = fn(EXAMPLES[2].INPUT[0], EXAMPLES[2].INPUT[1]);

  expect(result).toContainEqual(...EXAMPLES[2].OUTPUT);
});
