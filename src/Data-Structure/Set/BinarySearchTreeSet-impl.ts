import Set from './interface';
import BinarySearchTree from '../BinarySearchTree/impl';

class BinarySearchTreeSet<E> implements Set<E> {
  private bst: BinarySearchTree<E>;

  constructor() {
    this.bst = new BinarySearchTree<E>();
  }

  add(e: E): void {
    this.bst.add(e);
  }

  remove(e: E): void {
    this.bst.remove(e);
  }

  contains(e: E): boolean {
    return this.bst.contains(e);
  }

  getSize(): number {
    return this.bst.getSize();
  }

  isEmpty(): boolean {
    return this.bst.isEmpty();
  }
}

export default BinarySearchTreeSet;
