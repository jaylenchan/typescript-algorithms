import IStack from './interface';
import LinkedList from '../LinkedList/impl';

class LinkedListStack<E> implements IStack<E> {
  private list: LinkedList<E>;

  constructor() {
    this.list = new LinkedList<E>();
  }

  getSize(): number {
    return this.list.getSize();
  }
  isEmpty(): boolean {
    return this.list.isEmpty();
  }
  push(e: E): void {
    this.list.addFrist(e);
  }
  pop(): E {
    return this.list.removeFirst();
  }
  peek(): E {
    return this.list.getFirst();
  }

  toString() {
    let res = '';

    res += 'Stack: top ';
    res += this.list.toString();

    return res;
  }
}

export default LinkedListStack;
