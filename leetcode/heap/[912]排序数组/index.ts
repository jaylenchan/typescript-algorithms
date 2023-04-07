/*
 * @lc app=leetcode.cn id=912 lang=typescript
 *
 * [912] 排序数组
 */

// @lc code=start
class MinHeap {
  private data: number[];
  public size: number;

  constructor() {
    this.data = [];
    this.size = 0;
  }

  add(num: number): void {
    this.data[this.size++] = num;
    this.swim(this.size - 1);
  }

  delMin(): number {
    const min = this.data[0];

    this.swap(0, this.size - 1);
    this.data.pop();
    this.size--;
    this.sink(0);

    return min;
  }

  private parent(index: number): number {
    if (index == 0) return 0;

    return Math.floor((index - 1) / 2);
  }

  private left(index: number): number {
    return 2 * index + 1;
  }

  private right(index: number): number {
    return 2 * index + 2;
  }

  private swim(index: number): void {
    while (this.data[index] < this.data[this.parent(index)]) {
      this.swap(index, this.parent(index));

      index = this.parent(index);
    }
  }

  private sink(index: number): void {
    while (this.left(index) < this.size) {
      let min = this.left(index);

      if (this.right(index) < this.size) {
        min =
          this.data[min] > this.data[this.right(index)]
            ? this.right(index)
            : min;
      }

      if (this.data[min] > this.data[index]) break;

      this.swap(min, index);
      index = min;
    }
  }

  private swap(i: number, j: number) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }
}

function sortArray(nums: number[]): number[] {
  const heap = new MinHeap();

  for (let i = 0; i < nums.length; i++) {
    heap.add(nums[i]);
  }

  let j = 0;
  const size = heap.size;
  while (j < size) {
    nums[j++] = heap.delMin();
  }

  return nums;
}
// @lc code=end
