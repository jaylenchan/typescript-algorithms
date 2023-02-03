/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
class AMinHeap {
  private size: number;
  private data: number[];

  constructor() {
    this.data = [];
    this.size = 0;
  }

  getSize(): number {
    return this.size;
  }

  peek(): number {
    return this.data[0];
  }

  insert(item: number): void {
    this.data[this.size++] = item;
    this.swim(this.size - 1);
  }

  delMin(): number {
    const max = this.data[0];

    this.swap(0, this.size - 1);
    this.data.pop();
    this.size--;
    this.sink(0);

    return max;
  }

  private swim(index: number): void {
    while (this.data[this.parent(index)] > this.data[index]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  private sink(index: number): void {
    while (this.left(index) < this.size) {
      let minIndex = this.left(index);
      const right = this.right(index);

      if (right < this.size) {
        minIndex = this.data[minIndex] < this.data[right] ? minIndex : right;
      }

      if (this.data[minIndex] > this.data[index]) break;

      this.swap(minIndex, index);

      index = minIndex;
    }
  }

  private parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private left(index: number): number {
    return 2 * index + 1;
  }

  private right(index: number): number {
    return 2 * index + 2;
  }

  private swap(i: number, j: number): void {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }
}

function findKthLargest(nums: number[], k: number): number {
  if (nums.length == 0) return -1;

  const heap = new AMinHeap();
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count == k) {
      if (heap.peek() < nums[i]) {
        heap.delMin();
        heap.insert(nums[i]);
      }
    } else {
      heap.insert(nums[i]);
      count++;
    }
  }

  return heap.delMin();
}

/**
 * 思路：题目要求数组中第K个最大元素，那么我们可以建立一个小根堆。然后利用这个小根堆，先存k个数
 * 我们发现，拥有k个节点的小根堆的根一定是这k个数中最小的，于是我们遍历数组剩下的数，然后发现如
 * 果说当前被遍历到的数比根大，说明根不再参与k个大元素的比拼，从堆里删除，我们将新的数字加入堆，
 * 继续进行新的K大比较，最后我们遍历完成数组之后，直接返回小根堆的堆顶就是题目要的第k个最大元素
 */
// @lc code=end
