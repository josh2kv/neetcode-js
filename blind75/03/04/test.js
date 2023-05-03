const fn = require('./index');

const EXAMPLES = [
  {
    INPUT: ['ADOBECODEBANC', 'ABC'],
    OUTPUT: 'BANC',
  },
  {
    INPUT: ['a', 'a'],
    OUTPUT: 'a',
  },
  {
    INPUT: ['a', 'aa'],
    OUTPUT: '',
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

// for (let i = 0; i < EXAMPLES.length; i++) {
//   test(`Example ${i + 1}`, () => {
//     const result = fn(EXAMPLES[i].INPUT[0]);

//     expect(result).toEqual(EXAMPLES[i].OUTPUT);
//   });
// }
