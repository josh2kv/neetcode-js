const fn = require('./index');

const EXAMPLES = [
  {
    INPUT: [
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      3,
    ],
    OUTPUT: true,
  },
  {
    INPUT: [
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      13,
    ],
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

// for (let i = 0; i < EXAMPLES.length; i++) {
//   test(`Example ${i + 1}`, () => {
//     const result = fn(EXAMPLES[i].INPUT[0]);

//     expect(result).toEqual(EXAMPLES[i].OUTPUT);
//   });
// }
