/*
 * @lc app=leetcode.cn id=378 lang=typescript
 *
 * [378] 有序矩阵中第 K 小的元素
 */

// @lc code=start
function kthSmallest(matrix: number[][], k: number): number {
  if (matrix.length == 0 || matrix[0].length == 0) return 0;

  const heap = new MaxHeap();
  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (count == k) {
        if (heap.peek() > matrix[i][j]) {
          heap.delMax();
          heap.insert(matrix[i][j])
        }
      } else {
        heap.insert(matrix[i][j])
        count++
      }
    }
  }
  return heap.delMax()
};


class MaxHeap {
  private size: number;
  private data: number[];

  constructor() {
    this.data = []
    this.size = 0
  }

  getSize(): number {
    return this.size;
  }

  peek(): number {
    return this.data[0];
  }

  insert(item: number): void {
    this.data[this.size++] = item;
    this.swim(this.size - 1)
  }

  delMax(): number {
    const max = this.data[0]

    this.swap(0, this.size - 1)
    this.data.pop();
    this.size--
    this.sink(0);

    return max;
  }

  private swim(index: number): void {
    while (this.data[this.parent(index)] < this.data[index]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  private sink(index: number): void {
    while (this.left(index) < this.size) {
      let maxIndex = this.left(index);
      const right = this.right(index);

      if (right < this.size) {
        maxIndex = this.data[maxIndex] > this.data[right] ? maxIndex : right;
      }

      if (this.data[maxIndex] < this.data[index]) break;

      this.swap(maxIndex, index);

      index = maxIndex;
    }
  }

  private parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private left(index: number): number {
    return 2 * index + 1;
  }

  private right(index: number): number {
    return 2 * index + 2
  }

  private swap(i: number, j: number): void {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }
}

/**
 * 思路：循环整个矩阵 + 建立大根堆
   1. 遍历整个矩阵,每次遍历到一个数就加入建立堆
   2. 建立大根堆，最多建立k个元素，堆顶的元素就是要求的第k小元素
 */

// @lc code=end
