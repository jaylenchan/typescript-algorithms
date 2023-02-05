export default class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function findMidOrUpMidNode(head: ListNode | null): ListNode | null {
  // 处理0 | 1 | 2 个节点的情况
  if (head == null || head.next == null || head.next.next == null) {
    return head;
  }

  // 逻辑走到这里， 至少3个节点
  let slow = head.next; // 跳到第2个节点
  let fast = head.next.next; // 可以放心跳到第3个节点，因为逻辑走到这里就说明至少都有3个节点了

  // 循环不变量：fast指针后边还能跟着至少2个节点
  while (fast.next != null && fast.next.next != null) {
    slow = slow.next!;
    fast = fast.next.next;
  }

  return slow;
}
