const fn = require('./index');

const EXAMPLES = [
  {
    INPUT: [[1, 2, 3, 4]],
    OUTPUT: [1, 4, 2, 3],
  },
  {
    INPUT: [[1, 2, 3, 4, 5]],
    OUTPUT: [1, 5, 2, 4, 3],
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
  fn(headOfInput);

  const headOfOutput = makeLinkedListFromArray(EXAMPLES[0].OUTPUT);
  expect(headOfOutput).toEqual(headOfInput);
});

test('Example 2', () => {
  const headOfInput = makeLinkedListFromArray(EXAMPLES[1].INPUT[0]);
  fn(headOfInput);

  const headOfOutput = makeLinkedListFromArray(EXAMPLES[1].OUTPUT);
  expect(headOfOutput).toEqual(headOfInput);
});
