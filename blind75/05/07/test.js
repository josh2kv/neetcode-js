const fn = require('./index');

const EXAMPLES = [
  {
    INPUT: [[1, 3], [2]],
    OUTPUT: 2.0,
  },
  {
    INPUT: [
      [1, 2],
      [3, 4],
    ],
    OUTPUT: 2.5,
  },
  {
    INPUT: [
      [1, 3, 8, 9, 15],
      [7, 11, 18, 19, 21, 25],
    ],
    OUTPUT: 11,
  },
  {
    INPUT: [
      [23, 26, 31, 35],
      [3, 4, 7, 9, 11, 193],
    ],
    OUTPUT: 17,
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

test('Example 4', () => {
  const result = fn(EXAMPLES[3].INPUT[0], EXAMPLES[3].INPUT[1]);

  expect(result).toEqual(EXAMPLES[3].OUTPUT);
});

// for (let i = 0; i < EXAMPLES.length; i++) {
//   test(`Example ${i + 1}`, () => {
//     const result = fn(EXAMPLES[i].INPUT[0]);

//     expect(result).toEqual(EXAMPLES[i].OUTPUT);
//   });
// }
