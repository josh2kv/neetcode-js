const fn = require('./index');

const EXAMPLES = [
  {
    INPUT: [[1, 2, 3, 4, 5], 2],
    OUTPUT: [1, 2, 3, 5],
  },
  {
    INPUT: [[1], 1],
    OUTPUT: [],
  },
  {
    INPUT: [[1, 2], 1],
    OUTPUT: [1],
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
  const headOfInput = makeLinkedListFromArray(EXAMPLES[0].INPUT[0]);
  const result = fn(headOfInput, EXAMPLES[0].INPUT[1]);

  const headOfOutput = makeLinkedListFromArray(EXAMPLES[0].OUTPUT);

  expect(result).toEqual(headOfOutput);
});

test('Example 2', () => {
  const headOfInput = makeLinkedListFromArray(EXAMPLES[1].INPUT[0]);
  const result = fn(headOfInput, EXAMPLES[1].INPUT[1]);

  const headOfOutput = makeLinkedListFromArray(EXAMPLES[1].OUTPUT);

  expect(result).toEqual(headOfOutput);
});

test('Example 3', () => {
  const headOfInput = makeLinkedListFromArray(EXAMPLES[2].INPUT[0]);
  const result = fn(headOfInput, EXAMPLES[2].INPUT[1]);

  const headOfOutput = makeLinkedListFromArray(EXAMPLES[2].OUTPUT);

  expect(result).toEqual(headOfOutput);
});
