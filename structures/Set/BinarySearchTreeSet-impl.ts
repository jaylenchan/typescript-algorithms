import BinarySearchTree from '../BinarySearchTree/impl'

import type ISet from './interface'


class BinarySearchTreeSet<E> implements ISet<E> {

  private _bst: BinarySearchTree<E>

  constructor() {
    this._bst = new BinarySearchTree<E>()
  }

  public add(e: E): void {
    this._bst.add(e)
  }

  public remove(e: E): void {
    this._bst.remove(e)
  }

  public contains(e: E): boolean {
    return this._bst.contains(e)
  }

  public getSize(): number {
    return this._bst.getSize()
  }

  public isEmpty(): boolean {
    return this._bst.isEmpty()
  }

}

export default BinarySearchTreeSet
