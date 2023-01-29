/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */
export default maxSlidingWindow;
// @lc code=start
class SlidingWindow {
  private array: number[]
  private left: number;
  private right: number;
  // 存储array当中可能当最大值的元素的索引
  private maxQueue: number[];
  private window: number[]


  constructor(array: number[]) {
    this.array = array;
    this.left = 0;
    this.right = -1;
    this.maxQueue = []
    this.window = []
  }

  /** 获取滑动窗口当前最大值 */
  public getCurMaximum(): number {
    if (this.maxQueue.length == 0) {
      throw new Error('can not found current maximum in sliding window.')
    }

    return this.array[this.maxQueue[0]];
  }

  /** 移动滑动窗口右边界 */
  public moveRightPtr(): void {
    if (this.right < this.array.length) {
      this.right++
      this._updateMaxDeque(this.right, true)
      // this._updateWindow()
    }
  }

  /** 移动滑动窗口左边界 */
  public moveLeftPtr(): void {
    if (this.left < this.right) {
      this._updateMaxDeque(this.left, false)
      this.left++
      // this._updateWindow()
    }

  }


  /** 获取当前窗口大小 */
  public getCurWindowSize(): number {
    if (this.left > this.right) return 0;

    return this.right - this.left + 1
  }

  /** 获取当前窗口 */
  public getWindow(): number[] {
    return this.window
  }

  /** 是否应该滑动窗口 */
  public stopSliding(): boolean {
    return this.right == this.array.length
  }

  /** 更新当前窗口 */
  private _updateWindow(): void {
    this.window = [];

    for (let i = this.left; i <= this.right; i++) {
      this.window.push(this.array[i]);
    }
  }


  /** 更新双端队列 */
  private _updateMaxDeque(index: number, isRightPtrMove: boolean): void {
    const maxQueue = this.maxQueue

    if (isRightPtrMove) {
      if (maxQueue.length == 0) {
        maxQueue.push(index)
        return;
      }

      while (maxQueue.length > 0 && this.array[maxQueue[maxQueue.length - 1]] < this.array[index]) {
        maxQueue.pop();
      }

      maxQueue.push(index)
    } else {
      // 查看当前移动前的left是否是双端队列的头部元素，不是的话，直接跳过不操作双端队列
      if (index == this.maxQueue[0]) {
        this.maxQueue.shift()
      }
    }
  }
}

function maxSlidingWindow(nums: number[], k: number): number[] {
  if (nums.length == 0) return []

  const window = new SlidingWindow(nums);

  let left = 0;
  let right = left + k - 1;

  while (left <= right) {
    window.moveRightPtr()
    left++
  }

  let ans: number[] = []

  while (true) {
    if (window.stopSliding()) break;
    ans.push(window.getCurMaximum());
    window.moveRightPtr()
    window.moveLeftPtr()
  }

  return ans;

};
// @lc code=end
