const fn = require('./index');

const EXAMPLES = [
  {
    INPUT: ['A man, a plan, a canal: Panama'],
    OUTPUT: true,
  },
  {
    INPUT: ['race a car'],
    OUTPUT: false,
  },
  {
    INPUT: [' '],
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
