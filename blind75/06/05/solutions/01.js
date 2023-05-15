// https://leetcode.com/problems/linked-list-cycle/solutions/1829768/javascript-easy-to-understand-slow-fast-pointers-detailed-explanation
function hasCycle(head) {
  let fast = head;
  while (fast && fast.next) {
    head = head.next;
    fast = fast.next.next;
    if (head === fast) return true;
  }
  return false;
}
