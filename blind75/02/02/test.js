const fn = require('./index');

const EXAMPLES = [
  {
    INPUT: [[-1, 0, 1, 2, -1, -4]],
    OUTPUT: [
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  },
  {
    INPUT: [[0, 1, 1]],
    OUTPUT: [],
  },
  {
    INPUT: [[0, 0, 0]],
    OUTPUT: [[0, 0, 0]],
  },
];

test('function exists', () => {
  expect(typeof fn).toEqual('function');
});

test('Example 1', () => {
  const result = fn(EXAMPLES[0].INPUT[0]);

  expect(result).toContainEqual(...EXAMPLES[0].OUTPUT);
});

test('Example 2', () => {
  const result = fn(EXAMPLES[1].INPUT[0]);

  expect(result).toEqual(EXAMPLES[1].OUTPUT);
});

test('Example 3', () => {
  const result = fn(EXAMPLES[2].INPUT[0]);

  expect(result).toContainEqual(...EXAMPLES[2].OUTPUT);
});

// for (let i = 0; i < EXAMPLES.length; i++) {
//   test(`Example ${i + 1}`, () => {
//     const result = fn(EXAMPLES[i].INPUT[0]);

//     expect(result).toEqual(EXAMPLES[i].OUTPUT);
//   });
// }
