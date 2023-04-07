import LinkedList from '../linkedList/impl'

import type IStack from './interface'


class LinkedListStack<E> implements IStack<E> {

  private list: LinkedList<E>

  constructor() {
    this.list = new LinkedList<E>()
  }

  public getSize(): number {
    return this.list.getSize()
  }

  public isEmpty(): boolean {
    return this.list.isEmpty()
  }

  public push(e: E): void {
    this.list.addFrist(e)
  }

  public pop(): E {
    return this.list.removeFirst()
  }

  public peek(): E {
    return this.list.getFirst()
  }

  public toString() {
    let res = ''

    res += 'Stack: top '
    res += this.list.toString()

    return res
  }

}

export default LinkedListStack
