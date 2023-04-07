import Array from '../array/impl'

import type IQueue from './interface'


class ArrayQueue<E> implements IQueue<E> {

  private array: Array<E>

  constructor(capacity?: number) {
    this.array = new Array<E>(capacity)
  }

  public getSize(): number {
    return this.array.getSize()
  }

  public isFull(): boolean {
    return this.getSize() == this.getCapacity()
  }

  public isEmpty(): boolean {
    return this.array.isEmpty()
  }

  public enqueue(e: E): void {
    this.array.addLast(e)
  }

  public dequeue(): E {
    return this.array.removeFirst()
  }

  public getFront(): E {
    return this.array.getFirst()
  }

  public getCapacity(): number {
    return this.array.getCapacity()
  }

}

export default ArrayQueue
