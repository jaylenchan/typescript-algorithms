import type ISegmentTree from './interface'


export default class SegmentTree<E> implements ISegmentTree<E> {

  private tree: E[]
  private data: E[]
  private merger: (leftChild: E, rightChild: E) => any

  constructor(arr: E[], merger: (leftChild: E, rightChild: E) => any) {
    this.tree = new Array(4 * arr.length).fill(null as E)
    this.data = new Array(arr.length).fill(null as E)
    this.merger = merger

    for (let i = 0; i < arr.length; i++) {
      this.data[i] = arr[i]
    }

    this._buildSegmentTree(0, 0, this.data.length - 1)
  }

  public get(index: number): E {
    if (index < 0 || index >= this.data.length) {
      throw new Error('Index is illegal.')
    }
    return this.data[index]
  }

  public getSize(): number {
    return this.data.length
  }

  public toString(): string {
    let res = '['

    for (let i = 0; i < this.tree.length; i++) {
      if (this.tree[i] != null) {
        res += this.tree[i]
      } else {
        res += 'null'
      }

      if (i != this.tree.length - 1) {
        res += ', '
      }
    }

    res += ']'

    return res
  }

  public query(queryLeft: number, queryRight: number): E {
    if (
      queryLeft < 0 ||
      queryRight < 0 ||
      queryLeft >= this.data.length ||
      queryRight >= this.data.length
    ) {
      throw new Error('Index is illegal.')
    }

    return this._query(0, 0, this.data.length - 1, queryLeft, queryRight)
  }

  private _query(
    treeIndex: number,
    left: number,
    right: number,
    queryLeft: number,
    queryRight: number
  ): E {
    if (left > right) throw new Error('data is empty.')
    if (left == queryLeft && right == queryRight) {
      return this.tree[treeIndex]
    }

    const leftChildIndex = this._leftChild(treeIndex)
    const rightChildIndex = this._rightChild(treeIndex)
    const mid = left + Math.floor((right - left) >> 1)

    if (queryLeft >= mid + 1) {
      return this._query(rightChildIndex, mid + 1, right, queryLeft, queryRight)
    } else if (queryRight <= mid) {
      return this._query(leftChildIndex, left, mid, queryLeft, queryRight)
    } else {
      const leftResult = this._query(leftChildIndex, left, mid, queryLeft, mid)
      const rightResult = this._query(
        rightChildIndex,
        mid + 1,
        right,
        mid + 1,
        queryRight
      )

      return this.merger(leftResult, rightResult)
    }
  }

  private _buildSegmentTree(
    treeIndex: number,
    left: number,
    right: number
  ): void {
    if (left > right) return // 空数组不进行线段树创建
    if (left == right) {
      // base case：如果左右区间相等，创建节点
      this.tree[treeIndex] = this.data[left]
      return
    }

    const leftChildIndex = this._leftChild(treeIndex)
    const rightChildIndex = this._rightChild(treeIndex)
    const mid = left + Math.floor((right - left) >> 1)

    this._buildSegmentTree(leftChildIndex, left, mid)
    this._buildSegmentTree(rightChildIndex, mid + 1, right)

    // 非base case，该节点需要依赖左右节点创建好之后，再来做节点创建的决策
    // 因此需要递归创建左右子树先
    this.tree[treeIndex] = this.merger(
      this.tree[leftChildIndex],
      this.tree[rightChildIndex]
    )
  }

  private _leftChild(index: number): number {
    return 2 * index + 1
  }

  private _rightChild(index: number): number {
    return 2 * index + 2
  }

}
