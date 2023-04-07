import MaxHeap from '../heap/MaxHeap-impl'

import type IQueue from './interface'


class PriorityQueue<E> implements IQueue<E> {

  private maxHeap: MaxHeap<E>

  constructor() {
    this.maxHeap = new MaxHeap<E>()
  }

  public getSize(): number {
    return this.maxHeap.size()
  }

  public isEmpty(): boolean {
    return this.maxHeap.isEmpty()
  }

  public enqueue(e: E): void {
    this.maxHeap.add(e)
  }

  public dequeue(): E {
    return this.maxHeap.extractMax()
  }

  public getFront(): E {
    return this.maxHeap.findMax()
  }

}

export default PriorityQueue
