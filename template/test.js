const fn = require('./index');

const EXAMPLES = [
  {
    INPUT: [true],
    OUTPUT: true,
  },
  {
    INPUT: [true],
    OUTPUT: false,
  },
  {
    INPUT: [true],
    OUTPUT: true,
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
