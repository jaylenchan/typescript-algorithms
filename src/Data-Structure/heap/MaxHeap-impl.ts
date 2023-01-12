import DArray from '../Array/impl';
import IHeap from './interface';

class MaxHeap<E> implements IHeap<E> {
  private data: DArray<E>;

  constructor(capacity?: number) {
    this.data = new DArray(capacity);
  }

  public findMax(): E {
    if (this.data.isEmpty()) {
      throw new Error('Can not findMax when heap is empty.');
    }

    return this.data.get(0);
  }

  public extractMax(): E {
    const result = this.findMax();

    this.data.swap(0, this.data.getSize() - 1);
    this.data.removeLast();
    this._siftDown(0);

    return result;
  }

  public size() {
    return this.data.getSize();
  }

  public isEmpty(): boolean {
    return this.data.isEmpty();
  }

  public add(e: E): void {
    this.data.addLast(e);
    this._siftUp(this.data.getSize() - 1);
  }

  private _siftDown(k: number): void {
    while (this._leftChild(k) < this.data.getSize()) {
      let j = this._leftChild(k);
      if (
        j + 1 < this.data.getSize() &&
        this.data.get(j + 1) > this.data.get(j)
      ) {
        j = this._rightChild(k);
        // 经过以上this.data[j]就是leftChild和rightChild当中的最大值
      }

      if (this.data.get(k) > this.data.get(j)) {
        break;
      }

      this.data.swap(k, j);
      k = j;
    }
  }

  private _siftUp(k: number): void {
    const parentIndex = this._parent(k);
    const parentNode = this.data.get(parentIndex);
    const kNode = this.data.get(k);
    while (k > 0 && parentNode < kNode) {
      this.data.swap(k, parentIndex);
      k = parentIndex;
    }
  }

  /** 返回完全二叉树的数组表示当中，一个索引所表示的元素的父亲节点的索引 */
  private _parent(index: number) {
    if (index == 0) {
      throw new Error("index-0 doesn't have parent.");
    }
    return (index - 1) / 2;
  }

  /** 返回完全二叉树的数组表示当中，一个索引所表示的元素的左孩子节点的索引 */
  private _leftChild(index: number) {
    return index * 2 + 1;
  }

  /** 返回完全二叉树的数组表示当中，一个索引所表示的元素的右孩子节点的索引 */
  private _rightChild(index: number) {
    return index * 2 + 2;
  }
}

export default MaxHeap;
