const fn = require('./index');

const EXAMPLES = [
  {
    INPUT: [[3, 2, 0, -4], 1],
    OUTPUT: true,
  },
  {
    INPUT: [[1, 2], 0],
    OUTPUT: true,
  },
  {
    INPUT: [[1], -1],
    OUTPUT: false,
  },
];

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function makeLinkedListFromArray(nums, pos = -1) {
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

  let count = 0;
  let posNode = head || null;

  while (count <= pos) {
    if (count === pos) {
      curr.next = posNode;
      break;
    }

    posNode = posNode.next;
    count++;
  }

  return head;
}

test('function exists', () => {
  expect(typeof fn).toEqual('function');
});

test('Example 1', () => {
  const headOfInput = makeLinkedListFromArray(
    EXAMPLES[0].INPUT[0],
    EXAMPLES[0].INPUT[1]
  );
  const result = fn(headOfInput);
  expect(result).toEqual(EXAMPLES[0].OUTPUT);
});

test('Example 2', () => {
  const headOfInput = makeLinkedListFromArray(
    EXAMPLES[1].INPUT[0],
    EXAMPLES[1].INPUT[1]
  );
  const result = fn(headOfInput);
  expect(result).toEqual(EXAMPLES[1].OUTPUT);
});

test('Example 3', () => {
  const headOfInput = makeLinkedListFromArray(
    EXAMPLES[2].INPUT[0],
    EXAMPLES[2].INPUT[1]
  );
  const result = fn(headOfInput);
  expect(result).toEqual(EXAMPLES[2].OUTPUT);
});
