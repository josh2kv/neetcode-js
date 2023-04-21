const fn = require('./index');

const EXAMPLES = [
  {
    INPUT: [[1, 1, 1, 2, 2, 3], 2],
    OUTPUT: [1, 2],
  },
  {
    INPUT: [[1], 1],
    OUTPUT: [1],
  },
];

test('function exists', () => {
  expect(typeof fn).toEqual('function');
});

test('Example 1', () => {
  const result = fn(EXAMPLES[0].INPUT[0], EXAMPLES[0].INPUT[1]);

  expect(result).toEqual(expect.arrayContaining(EXAMPLES[0].OUTPUT));
});

test('Example 2', () => {
  const result = fn(EXAMPLES[1].INPUT[0], EXAMPLES[1].INPUT[1]);

  expect(result).toEqual(expect.arrayContaining(EXAMPLES[1].OUTPUT));
});
