import Set from './interface';
import LinkedList from '../LinkedList/impl';

class LinkedListSet<E> implements Set<E> {
  private list: LinkedList<E>;

  constructor() {
    this.list = new LinkedList<E>();
  }

  add(e: E): void {
    if (!this.list.contains(e)) {
      this.list.addFrist(e);
    }
  }

  remove(e: E): void {
    this.list.removeElement(e);
  }

  contains(e: E): boolean {
    return this.list.contains(e);
  }

  getSize(): number {
    return this.list.getSize();
  }

  isEmpty(): boolean {
    return this.list.isEmpty();
  }
}

export default LinkedListSet;
