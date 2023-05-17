const fn = require('./index');

const EXAMPLES = [
  {
    INPUT: [
      [
        [1, 4, 5],
        [1, 3, 4],
        [2, 6],
      ],
    ],
    OUTPUT: [1, 1, 2, 3, 4, 4, 5, 6],
  },
  {
    INPUT: [[]],
    OUTPUT: [],
  },
  {
    INPUT: [[[]]],
    OUTPUT: [],
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
  const arrayOfLinkedList = EXAMPLES[0].INPUT[0].map(el =>
    makeLinkedListFromArray(el)
  );
  const result = fn(arrayOfLinkedList);

  const headOfOutput = makeLinkedListFromArray(EXAMPLES[0].OUTPUT);
  expect(result).toEqual(headOfOutput);
});

test('Example 2', () => {
  const arrayOfLinkedList = EXAMPLES[1].INPUT[0].map(el =>
    makeLinkedListFromArray(el)
  );
  const result = fn(arrayOfLinkedList);

  const headOfOutput = makeLinkedListFromArray(EXAMPLES[1].OUTPUT);
  expect(result).toEqual(headOfOutput);
});

test('Example 3', () => {
  const arrayOfLinkedList = EXAMPLES[2].INPUT[0].map(el =>
    makeLinkedListFromArray(el)
  );
  const result = fn(arrayOfLinkedList);

  const headOfOutput = makeLinkedListFromArray(EXAMPLES[2].OUTPUT);
  expect(result).toEqual(headOfOutput);
});
