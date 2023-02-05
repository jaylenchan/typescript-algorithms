export default class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function findMidOrDownMidNode(head: ListNode | null): ListNode | null {
  // 处理 0 | 1个节点的情况
  if (head == null || head.next == null) {
    return null;
  }
  // 处理至少2个节点的情况
  let slow = head;
  let fast = head.next;

  while (fast.next != null && fast.next.next != null) {
    slow = slow.next!;
    fast = fast.next.next;
  }

  return slow;
}
