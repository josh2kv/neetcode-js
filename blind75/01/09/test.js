const fn = require('./index');

const EXAMPLES = [
  {
    INPUT: [[100, 4, 200, 1, 3, 2]],
    OUTPUT: 4,
  },
  {
    INPUT: [[0, 3, 7, 2, 5, 8, 4, 6, 0, 1]],
    OUTPUT: 9,
  },
  {
    INPUT: [[]],
    OUTPUT: 0,
  },
];

test('function exists', () => {
  expect(typeof fn).toEqual('function');
});

for (let i = 0; i < EXAMPLES.length; i++) {
  test(`Example ${i + 1}`, () => {
    const result = fn(EXAMPLES[i].INPUT[0]);

    expect(result).toEqual(EXAMPLES[i].OUTPUT);
  });
}
