const fn = require('./index');

const EXAMPLES = [
  {
    INPUT: [[3, 4, 5, 1, 2]],
    OUTPUT: 1,
  },
  {
    INPUT: [[4, 5, 6, 7, 0, 1, 2]],
    OUTPUT: 0,
  },
  {
    INPUT: [[11, 13, 15, 17]],
    OUTPUT: 11,
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

// for (let i = 0; i < EXAMPLES.length; i++) {
//   test(`Example ${i + 1}`, () => {
//     const result = fn(EXAMPLES[i].INPUT[0]);

//     expect(result).toEqual(EXAMPLES[i].OUTPUT);
//   });
// }
