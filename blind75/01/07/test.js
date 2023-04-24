const { encode, decode } = require('./index');

const EXAMPLES = [
  {
    INPUT: [['lint', 'code', 'love', 'you']],
    OUTPUT: ['lint', 'code', 'love', 'you'],
  },
  {
    INPUT: [['we', 'say', ':', 'yes']],
    OUTPUT: ['we', 'say', ':', 'yes'],
  },
];

test('function exists', () => {
  expect(typeof encode).toEqual('function');
  expect(typeof decode).toEqual('function');
});

test('Example 1', () => {
  const encoded = encode(EXAMPLES[0].INPUT[0]);
  const result = decode(encoded);

  expect(result).toEqual(EXAMPLES[0].OUTPUT);
});

test('Example 2', () => {
  const encoded = encode(EXAMPLES[1].INPUT[0]);
  const result = decode(encoded);

  expect(result).toEqual(EXAMPLES[1].OUTPUT);
});
