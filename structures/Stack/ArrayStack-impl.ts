import Array from '../array/impl'

import type IStack from './interface'


class ArrayStack<T> implements IStack<T> {

  private array: Array<T>
  constructor(capacity?: number) {
    this.array = new Array(capacity)
  }

  public getSize(): number {
    return this.array.getSize()
  }

  public isEmpty(): boolean {
    return this.array.isEmpty()
  }

  public push(e: T): void {
    this.array.addLast(e)
  }

  public pop(): T {
    return this.array.removeLast()
  }

  public peek(): T {
    return this.array.getLast()
  }

}

export default ArrayStack
