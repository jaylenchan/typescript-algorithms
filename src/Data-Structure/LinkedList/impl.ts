class LNode<E> {
  value: E;
  next: LNode<E> | null;

  constructor(value: E, next?: LNode<E> | null) {
    this.value = value;
    this.next = next || null;
  }
}

class LinkedList<E> {
  private dummyHead: LNode<E>;
  private size: number;

  constructor() {
    this.dummyHead = new LNode('dummyNode' as E, null);
    this.size = 0;
  }

  getSize(): number {
    return this.size;
  }

  isEmpty(): boolean {
    return this.size == 0;
  }

  // 在链表中间添加节点
  // 要在index处放置e，就要遍历到index-1处的元素，在index-1处的元素后边放置新元素
  // 设置prev指针，要遍历到index-1,只需要遍历index-2次，因为每次操作是prev = prev.next;从当前prev往下跑一个地方
  add(index: number, e: E) {
    if (index < 0 || index > this.size) {
      throw new Error('Add failed. Illegal index.');
    }

    let prev = this.dummyHead; // 指向0索引元素之前的那个虚拟头节点
    for (let i = 0; i < index; i++) {
      prev = prev.next!;
    }
    prev.next = new LNode(e, prev.next);
    this.size += 1;
  }

  addFrist(e: E) {
    this.add(0, e);
  }

  addLast(e: E) {
    this.add(this.size, e);
  }

  // 查
  get(index: number): E {
    if (this.isEmpty()) {
      throw new Error('Add failed. list is empty.');
    }
    if (index < 0 || index >= this.size) {
      throw new Error('Get failed. Index is illegal.');
    }

    let cur = this.dummyHead.next!;

    for (let i = 0; i < index; i++) {
      cur = cur.next!;
    }

    return cur.value;
  }

  getFirst(): E {
    return this.get(0);
  }

  getLast(): E {
    return this.get(this.size - 1);
  }

  // 查找链表当中是否有元素e
  contains(e: E): boolean {
    let cur = this.dummyHead.next;

    while (cur != null) {
      if (cur.value == e) return true;
      cur = cur.next;
    }

    return false;
  }

  // 改
  set(index: number, e: E) {
    if (index < 0 || index >= this.size) {
      throw new Error('Set failed. Index is illegal.');
    }

    let cur = this.dummyHead.next!;

    for (let i = 0; i < index; i++) {
      cur = cur.next!;
    }
    cur.value = e;
  }

  remove(index: number): E {
    if (index < 0 || index >= this.size) {
      throw new Error('Get failed. Index is illegal.');
    }

    let prev = this.dummyHead;

    for (let i = 0; i < index; i++) {
      prev = prev.next!; // 找到待删除节点的前边那个节点
    }

    let target = prev.next!;
    prev.next = target!.next!;
    target.next = null;

    this.size -= 1;

    return target.value;
  }

  removeFirst(): E {
    return this.remove(0);
  }

  removeLast(): E {
    return this.remove(this.size - 1);
  }

  toString() {
    let res = '';
    let cur = this.dummyHead.next;

    while (cur != null) {
      res += `${cur.value}->`;
      cur = cur.next;
    }

    res += 'NULL';

    return res;
  }
}

export default LinkedList;
