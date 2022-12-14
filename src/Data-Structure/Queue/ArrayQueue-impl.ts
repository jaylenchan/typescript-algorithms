import Queue from './interface';
import Array from '../Array/impl';

class ArrayQueue<E> implements Queue<E> {
  private array: Array<E>;

  constructor(capacity?: number) {
    this.array = new Array<E>(capacity);
  }

  getSize(): number {
    return this.array.getSize();
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
