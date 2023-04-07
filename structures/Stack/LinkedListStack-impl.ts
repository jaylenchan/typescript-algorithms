import LinkedList from '../LinkedList/impl'

import type IStack from './interface'


class LinkedListStack<E> implements IStack<E> {

  private _list: LinkedList<E>

  constructor() {
    this._list = new LinkedList<E>()
  }

  public getSize(): number {
    return this._list.getSize()
  }

  public isEmpty(): boolean {
    return this._list.isEmpty()
  }

  public push(e: E): void {
    this._list.addFrist(e)
  }

  public pop(): E {
    return this._list.removeFirst()
  }

  public peek(): E {
    return this._list.getFirst()
  }

  public toString(): string {
    let res = ''

    res += 'Stack: top '
    res += this._list.toString()

    return res
  }

}

export default LinkedListStack
