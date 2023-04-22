const fn = require('./index');

const EXAMPLES = [
  {
    INPUT: [[1, 2, 3, 4]],
    OUTPUT: [24, 12, 8, 6],
  },
  {
    INPUT: [[-1, 1, 0, -3, 3]],
    OUTPUT: [0, 0, 9, 0, 0],
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
  const result = fn(EXAMPLES[1].INPUT[0]).map(el =>
    el === 0 ? Math.abs(el) : el
  );

  expect(result).toEqual(EXAMPLES[1].OUTPUT);
});
