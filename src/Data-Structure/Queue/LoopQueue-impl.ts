import IQueue from './interface';

class LoopQueue<E> implements IQueue<E> {
  private data: E[];
  private size: number;
  private front: number;
  private tail: number;

  constructor(capacity?: number) {
    this.data = new Array(capacity ? capacity + 1 : 11).fill(new Object() as E);
    this.size = 0;
    this.front = 0;
    this.tail = 0;
  }

  getSize(): number {
    return this.size;
  }

  isFull(): boolean {
    return (this.tail + 1) % this.data.length == this.front;
  }

  isEmpty(): boolean {
    return this.front == (this.tail + 1) % this.data.length;
  }

  // 入队
  enqueue(e: E): void {
    if (this.isFull()) {
      this.resize(this.getCapacity() * 2);
    }

    this.data[this.tail] = e;
    this.tail = this.tail + 1;
    this.size += 1;
  }

  // 出队
  dequeue(): E {
    if (this.isEmpty()) {
      throw new Error('Cannot dequeue from an empty queue');
    }
    const result = this.data[this.front];

    this.front = (this.front + 1) % this.data.length;
    this.size -= 1;

    if (this.size == this.getCapacity() / 4 && this.getCapacity() / 2 != 0) {
      this.resize(this.getCapacity() / 2);
    }
    return result;
  }

  getFront(): E {
    if (this.isEmpty()) {
      throw new Error('Queue is empty.');
    }
    return this.data[this.front];
  }

  getCapacity(): number {
    return this.data.length - 1;
  }

  private resize(newCapacity: number) {
    const array = new Array(newCapacity + 1).fill(new Object() as E);
    for (let i = 0; i < this.size; i++) {
      array[i] = this.data[(i + this.front) % this.data.length];
    }
    this.data = array;
    this.front = 0;
    this.tail = this.size;
  }
}

export default LoopQueue;
