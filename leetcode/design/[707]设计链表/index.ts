/*
 * @lc app=leetcode.cn id=707 lang=typescript
 *
 * [707] 设计链表
 */

// @lc code=start
class LNode {

  public val: number
  public next: LNode | null
  public prev: LNode | null

  constructor(val: number) {
    this.val = val
    this.next = null
    this.prev = null
  }

}
class MyLinkedList {

  private dummyHead: LNode
  private dummyTail: LNode

  constructor() {
    this.dummyHead = new LNode(-1)
    this.dummyTail = new LNode(-1)

    this.dummyHead.next = this.dummyTail
    this.dummyTail.prev = this.dummyHead
  }

  get(index: number): number {
    let cur = this.dummyHead.next
    let n = 0
    while (n < index && cur != this.dummyTail) {
      cur = cur!.next
      n++
    }

    if (cur == this.dummyTail) return -1

    return cur!.val
  }

  addAtHead(val: number): void {
    const oldNext = this.dummyHead.next
    const node = new LNode(val)

    this.dummyHead.next = node
    node.prev = this.dummyHead

    node.next = oldNext
    oldNext!.prev = node
  }

  addAtTail(val: number): void {
    const oldPrev = this.dummyTail.prev
    const node = new LNode(val)

    this.dummyTail.prev = node
    node.next = this.dummyTail

    oldPrev!.next = node
    node.prev = oldPrev
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0) return this.addAtHead(val)

    let cur = this.dummyHead.next
    let n = 0

    while (n < index && cur != this.dummyTail) {
      cur = cur!.next
      n++
    }

    if (cur == this.dummyTail && n < index) return

    const oldNode = cur!.prev
    const node = new LNode(val)

    oldNode!.next = node
    node.prev = oldNode

    node.next = cur
    cur!.prev = node
  }

  deleteAtIndex(index: number): void {
    let cur = this.dummyHead.next
    let n = 0

    while (n < index && cur != this.dummyTail) {
      cur = cur!.next
      n++
    }

    if (cur == this.dummyTail || n < index) return

    const delPrev = cur!.prev
    const delNext = cur!.next

    delPrev!.next = delNext
    delNext!.prev = delPrev

    cur!.prev = null
    cur!.next = null
  }

}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
