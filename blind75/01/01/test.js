const fn = require('./index');

const EXAMPLES = [
  {
    INPUT: [[1, 2, 3, 1]],
    OUTPUT: true,
  },
  {
    INPUT: [[1, 2, 3, 4]],
    OUTPUT: false,
  },
  {
    INPUT: [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]],
    OUTPUT: true,
  },
];

test('function exists', () => {
  expect(typeof fn).toEqual('function');
});

test('Example 1', () => {
  const result = fn(EXAMPLES[0].INPUT[0]);

  expect(result).toEqual(EXAMPLES[0].OUTPUT);
});

test('Example 2', () => {
  const result = fn(EXAMPLES[1].INPUT[0]);

  expect(result).toEqual(EXAMPLES[1].OUTPUT);
});

test('Example 3', () => {
  const result = fn(EXAMPLES[2].INPUT[0]);

  expect(result).toEqual(EXAMPLES[2].OUTPUT);
});
