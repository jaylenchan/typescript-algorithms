import ISet from './interface';
import BinarySearchTree from '../binarySearchTree/impl';

class BinarySearchTreeSet<E> implements ISet<E> {
  private bst: BinarySearchTree<E>;

  constructor() {
    this.bst = new BinarySearchTree<E>();
  }

  public add(e: E): void {
    this.bst.add(e);
  }

  public remove(e: E): void {
    this.bst.remove(e);
  }

  public contains(e: E): boolean {
    return this.bst.contains(e);
  }

  public getSize(): number {
    return this.bst.getSize();
  }

  public isEmpty(): boolean {
    return this.bst.isEmpty();
  }
}

export default BinarySearchTreeSet;
