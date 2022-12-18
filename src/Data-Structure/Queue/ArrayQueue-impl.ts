import IQueue from './interface';
import Array from '../Array/impl';

class ArrayQueue<E> implements IQueue<E> {
  private array: Array<E>;

  constructor(capacity?: number) {
    this.array = new Array<E>(capacity);
  }

  getSize(): number {
    return this.array.getSize();
  }

  isFull(): boolean {
    return this.getSize() == this.getCapacity();
  }

  isEmpty(): boolean {
    return this.array.isEmpty();
  }

  enqueue(e: E): void {
    this.array.addLast(e);
  }

  dequeue(): E {
    return this.array.removeFirst();
  }

  getFront(): E {
    return this.array.getFirst();
  }

  getCapacity(): number {
    return this.array.getCapacity();
  }
}

export default ArrayQueue;
