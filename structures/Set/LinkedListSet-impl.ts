import LinkedList from '../linkedList/impl'

import type ISet from './interface'


class LinkedListSet<E> implements ISet<E> {

  private list: LinkedList<E>

  constructor() {
    this.list = new LinkedList<E>()
  }

  public add(e: E): void {
    if (!this.list.contains(e)) {
      this.list.addFrist(e)
    }
  }

  public remove(e: E): void {
    this.list.removeElement(e)
  }

  public contains(e: E): boolean {
    return this.list.contains(e)
  }

  public getSize(): number {
    return this.list.getSize()
  }

  public isEmpty(): boolean {
    return this.list.isEmpty()
  }

}

export default LinkedListSet
