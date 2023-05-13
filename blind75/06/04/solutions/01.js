//leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/1164542/js-python-java-c-easy-two-pointer-solution-w-explanation/?orderBy=most_votes&languageTags=javascript
https: function removeNthFromEnd(head, n) {
  let [slow, fast] = [head, head];

  for (let i = 0; i < n; i++) {
    fast = fast.next;
    if (!fast) return head.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return head;
}
