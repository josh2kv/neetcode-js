// https://leetcode.com/problems/merge-two-sorted-lists/solutions/9963/simple-javascript-solution/?orderBy=most_votes&languageTags=javascript
function mergeTwoLists(list1, list2) {
  const mergedHead = new ListNode(-1);
  let curr = mergedHead;
  let l1 = list1;
  let l2 = list2;

  while (l1 && l2) {
    if (l1.val > l2.val) {
      curr.next = l2;
      l2 = l2.next;
    } else {
      curr.next = l1;
      l1 = l1.next;
    }
    curr = curr.next;
  }

  curr.next = l1 || l2;

  return mergedHead.next;
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
