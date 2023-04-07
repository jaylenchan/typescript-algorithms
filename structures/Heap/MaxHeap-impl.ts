import DArray from '../array/impl'

import type IHeap from './interface'


class MaxHeap<E> implements IHeap<E> {

  private data: DArray<E>

  // 堆的构造函数接收用户传递的容量，不传递的话由动态数组自身默认的容量决定
  constructor(capacity?: number) {
    this.data = new DArray(capacity)
  }

  public size() {
    return this.data.getSize()
  }

  public isEmpty(): boolean {
    return this.data.isEmpty()
  }

  public add(e: E): void {
    // 在数组最后加入元素
    this.data.addLast(e)
    // 使用siftUp进行堆元素调整，重新符合堆的结构定义
    this._siftUp(this.data.getSize() - 1)
  }

  public findMax(): E {
    if (this.data.isEmpty()) {
      throw new Error('Can not findMax when heap is empty.')
    }

    return this.data.get(0)
  }

  public extractMax(): E {
    const result = this.findMax()

    this.data.swap(0, this.data.getSize() - 1)
    this.data.removeLast()
    this._siftDown(0)

    return result
  }

  public replace(e: E): E {
    const result = this.findMax()
    this.data.set(0, e)
    this._siftDown(0)

    return result
  }

  public heapify(arr: E[]) {
    const data = new DArray<E>(arr.length)
    for (let i = 0; i < arr.length; i++) {
      data.add(i, arr[i])
    }
    this.data = data

    for (let i = this._parent(arr.length - 1); i >= 0; i--) {
      this._siftDown(i)
    }
  }

  /** 返回完全二叉树的数组表示当中，一个索引所表示的元素的父亲节点的索引（使用堆的计算方式1，从0开始放节点） */
  private _parent(index: number) {
    if (index == 0) {
      // 索引0无父亲节点
      throw new Error("index-0 doesn't have parent.")
    }
    // ts当中这里一定要注意取整，ts当中的除法不会自动取整
    return Math.floor((index - 1) / 2)
  }

  /** 返回完全二叉树的数组表示当中，一个索引所表示的元素的左孩子节点的索引（使用堆的计算方式1，从0开始放节点） */
  private _leftChild(index: number) {
    return index * 2 + 1
  }

  /** 返回完全二叉树的数组表示当中，一个索引所表示的元素的右孩子节点的索引（使用堆的计算方式1，从0开始放节点） */
  private _rightChild(index: number) {
    return index * 2 + 2
  }

  /** 添加堆元素时使用的额外操作 */
  /** 索引k表示从哪个地方开始往上浮动元素 */
  private _siftUp(k: number): void {
    while (k > 0 && this.data.get(this._parent(k)) < this.data.get(k)) {
      this.data.swap(k, this._parent(k))
      k = this._parent(k)
    }
  }

  /** 取出堆元素时使用的额外操作 */
  /** 索引k表示从哪个地方开始往下浮动元素 */
  private _siftDown(k: number): void {
    // 判断k的左孩子是否存在的依据：左孩子的索引要小于数组的大小
    // 能够进入循环就说明左孩子一定存在
    while (this._leftChild(k) < this.data.getSize()) {
      let j = this._leftChild(k)
      // 判断右孩子是否存在 && 判断右孩子是否比左孩子数值要大
      if (j + 1 < this.data.getSize()) {
        // 经过以上this.data[j]就是leftChild和rightChild当中的最大值
        if (this.data.get(j + 1) > this.data.get(j)) {
          j = this._rightChild(k)
        }
      }

      // 判断k位置元素跟它的左右孩子中最大的那个孩子的数值，看是否大于左右孩子中最大的那个孩子的数值
      // 如果是的话，直接退出循环
      // 这里的操作主要是为了判断是否继续交换+更新k，为了满足堆定义后退出循环做保证
      if (this.data.get(k) > this.data.get(j)) {
        break
      }

      // 下沉交换+更新k的主要逻辑是这里两个操作
      // 如果以上的退出循环条件不中，执行交换操作， 交换k位置节点和左右孩子中最大的孩子
      this.data.swap(k, j)
      // 交换完毕后，更新k位置
      k = j
    }
  }

}

export default MaxHeap
