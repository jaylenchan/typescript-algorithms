import IQueue from './interface';

class LNode<E> {
  value: E;
  next: LNode<E> | null;

  constructor(value: E, next?: LNode<E> | null) {
    this.value = value;
    this.next = next || null;
  }
}

class LinkedListQueue<E> implements IQueue<E> {
  private size: number;
  private head: LNode<E> | null; // 指向头结点
  private tail: LNode<E> | null; // 指向尾结点

  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  public getSize(): number {
    return this.size;
  }

  public isEmpty(): boolean {
    return this.size == 0;
  }

  // 入队：从链表的尾部入队
  public enqueue(e: E): void {
    if (this.tail == null) {
      // 空链表
      this.tail = new LNode(e);
      this.head = this.tail;
    } else {
      // 非空链表
      const newTail = new LNode(e);
      this.tail.next = newTail;
      this.tail = newTail;
    }

    this.size += 1;
  }

  public dequeue(): E {
    if (this.isEmpty()) {
      throw new Error('Cannot dequeue from an empty queue.');
    }
    const target = this.head!;
    this.head = this.head!.next;
    target.next = null;

    if (this.head == null) {
      this.tail = this.head;
    }

    return target.value;
  }

  public getFront(): E {
    if (this.isEmpty()) {
      throw new Error('Cannot getFront from an empty queue.');
    }

    return this.head!.value;
  }

  public toString() {
    let res = 'Queue: front  ';
    let cur = this.head;

    while (cur != null) {
      res += `${cur.value}->`;
      cur = cur.next;
    }

    res += 'NULL tail';

    return res;
  }
}

export default LinkedListQueue;
