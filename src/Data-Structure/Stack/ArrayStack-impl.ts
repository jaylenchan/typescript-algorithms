import IStack from './interface';
import Array from '../Array/impl';

class ArrayStack<T> implements IStack<T> {
  private array: Array<T>;
  constructor(capacity?: number) {
    this.array = new Array(capacity);
  }

  getSize(): number {
    return this.array.getSize();
  }

  isEmpty(): boolean {
    return this.array.isEmpty();
  }

  push(e: T): void {
    this.array.addLast(e);
  }

  pop(): T {
    return this.array.removeLast();
  }

  peek(): T {
    return this.array.getLast();
  }
}

export default ArrayStack;
