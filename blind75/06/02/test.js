const fn = require('./index');

const EXAMPLES = [
  {
    INPUT: [
      [1, 2, 4],
      [1, 3, 4],
    ],
    OUTPUT: [1, 1, 2, 3, 4, 4],
  },
  {
    INPUT: [[], []],
    OUTPUT: [],
  },
  {
    INPUT: [[], [0]],
    OUTPUT: [0],
  },
];

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function makeLinkedListFromArray(nums) {
  let head = null;
  let curr = null;

  for (let num of nums) {
    const node = new ListNode(num);

    if (!head) {
      head = node;
      curr = node;
    } else {
      curr.next = node;
      curr = node;
    }
  }

  return head;
}

test('function exists', () => {
  expect(typeof fn).toEqual('function');
});

test('Example 1', () => {
  const headOfInput1 = makeLinkedListFromArray(EXAMPLES[0].INPUT[0]);
  const headOfInput2 = makeLinkedListFromArray(EXAMPLES[0].INPUT[1]);
  const result = fn(headOfInput1, headOfInput2);

  const headOfOutput = makeLinkedListFromArray(EXAMPLES[0].OUTPUT);
  expect(result).toEqual(headOfOutput);
});

test('Example 2', () => {
  const headOfInput1 = makeLinkedListFromArray(EXAMPLES[1].INPUT[0]);
  const headOfInput2 = makeLinkedListFromArray(EXAMPLES[1].INPUT[1]);
  const result = fn(headOfInput1, headOfInput2);

  const headOfOutput = makeLinkedListFromArray(EXAMPLES[1].OUTPUT);
  expect(result).toEqual(headOfOutput);
});

test('Example 3', () => {
  const headOfInput1 = makeLinkedListFromArray(EXAMPLES[2].INPUT[0]);
  const headOfInput2 = makeLinkedListFromArray(EXAMPLES[2].INPUT[1]);
  const result = fn(headOfInput1, headOfInput2);

  const headOfOutput = makeLinkedListFromArray(EXAMPLES[2].OUTPUT);
  expect(result).toEqual(headOfOutput);
});

// for (let i = 0; i < EXAMPLES.length; i++) {
//   test(`Example ${i + 1}`, () => {
//     const result = fn(EXAMPLES[i].INPUT[0]);

//     expect(result).toEqual(EXAMPLES[i].OUTPUT);
//   });
// }
