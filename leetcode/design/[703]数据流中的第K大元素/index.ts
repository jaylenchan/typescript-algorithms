/*
 * @lc app=leetcode.cn id=703 lang=typescript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
class KthLargest {

  private data: number[]
  private size: number
  private capacity: number

  constructor(k: number, nums: number[]) {
    this.data = []
    this.size = 0
    this.capacity = k

    this.init(nums)
  }

  add(val: number): number {
    if (this.size != this.capacity) {
      while (this.size != this.capacity) {
        this.insert(val)
      }
    } else {
      if (val > this.peek()) {
        this.delMin()
        this.insert(val)
      }
    }
    return this.peek()
  }

  private init(nums: number[]): void {
    for (let i = 0; i < nums.length; i++) {
      if (this.size != this.capacity) {
        this.insert(nums[i])
      } else {
        if (nums[i] > this.peek()) {
          this.delMin()
          this.insert(nums[i])
        }
      }
    }
  }

  private peek(): number {
    return this.data[0]
  }

  private insert(val: number): void {
    this.data[this.size++] = val
    this.swim(this.size - 1)
  }

  private delMin(): number {
    const min = this.data[0]

    this.swap(0, this.size - 1)
    this.size--
    this.sink(0)

    return min
  }

  private sink(index: number): void {
    while (this.left(index) < this.size) {
      let min = this.left(index)
      if (this.right(index) < this.size) {
        min =
          this.data[min] < this.data[this.right(index)]
            ? min
            : this.right(index)
      }

      if (this.data[min] > this.data[index]) break

      this.swap(min, index)

      index = min
    }
  }

  private swim(index: number): void {
    while (this.data[index] < this.data[this.parent(index)]) {
      this.swap(index, this.parent(index))
      index = this.parent(index)
    }
  }

  private parent(index: number): number {
    if (index == 0) return 0

    return Math.floor((index - 1) / 2)
  }

  private left(index: number): number {
    return 2 * index + 1
  }

  private right(index: number): number {
    return 2 * index + 2
  }

  private swap(i: number, j: number): void {
    ;[this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }

}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

/**
 * #思路#
 * 题目要求实现求数据流中的第K大元素，首先我们进行模式分析，求topK相关的问题，我们立马想到了堆。由于本题要求的是第K大，
 * 所以可以立马想到小根堆的实现，最小的元素总是在堆顶的。我们就假设存放k个数，则堆顶就是当前第K大元素。
 * 1. 实现一个小根堆
 * 2. 根据题目要求实现add方法：add要求加入元素的同时，还需要返回加入后的第K大。我们可以想到，先实现堆的insert和delMin
 * 然后再组合起来实现add方法。在初始化的时候，题目给了nums数组，和k表示第K大。但是nums数组长度是有可能跟k不相等的，所以
 * 我们先在construtor初始化的时候，先对nums进行第一次堆元素加入初始化，规则如下：
 *   - 当堆的元素没达到k的时候，我们加入nums[i]
 *   - 当堆的元素达到k的时候，nums还有数没加入，我们判断nums[i] > 堆顶元素，我们删除堆顶元素，再加入nums[i]
 * 3. 经过以上我们初始化了堆，但是有一种情况就是，很可能一开始nums的元素个数就小于k，压根不够堆存放元素容量k。
 *    所以我们在进行add的时候，首先判断一下size 跟 capacity的关系，
 *    - 情况1：size < capacity : 也就是说堆元素个数，没达到我们设置的容量k那么大，此时就没法进行k大比较。我们需要先加入元素，达到k那么多个元素时，才进行堆顶元素返回第k大元素。
 *    - 情况2：size == capacity: 直接判断当前val是否比堆顶元素大，是的话删除堆顶，加入元素，然后返回新的堆顶元素
 *    - 无情况3： size > capacity只在初始化一次性给到nums多个元素才有可能，我们已经在初始化处理这种情况了！
 */
