/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
class KMinHeap {

  private data: number[]
  private size: number

  constructor(public map: Map<number, number>) {
    this.data = []
    this.size = 0
  }

  isEmpty(): boolean {
    return this.size == 0
  }

  peek(): number {
    return this.map.get(this.data[0])!
  }

  insert(item: number): void {
    this.data[this.size++] = item
    this.swim(this.size - 1)
  }

  delMin(): number {
    const max = this.data[0]

    this.swap(0, this.size - 1)
    this.data.pop()
    this.size--
    this.sink(0)

    return max
  }

  private swim(index: number): void {
    while (
      this.map.get(this.data[index])! <
      this.map.get(this.data[this.parent(index)])!
    ) {
      this.swap(index, this.parent(index))
      index = this.parent(index)
    }
  }

  private sink(index: number): void {
    while (this.left(index) < this.size) {
      let minIndex = this.left(index)
      const right = this.right(index)

      if (right < this.size) {
        minIndex =
          this.map.get(this.data[minIndex])! < this.map.get(this.data[right])!
            ? minIndex
            : right
      }

      if (this.map.get(this.data[index])! < this.map.get(this.data[minIndex])!)
        break

      this.swap(index, minIndex)
      index = minIndex
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

function topKFrequent(nums: number[], k: number): number[] {
  if (nums.length == 0) return []

  const numMap = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    if (!numMap.has(nums[i])) {
      numMap.set(nums[i], 1)
    } else {
      numMap.set(nums[i], numMap.get(nums[i])! + 1)
    }
  }

  const heap = new KMinHeap(numMap)

  let n = 0
  for (const [num, count] of numMap) {
    if (n == k) {
      if (count > heap.peek()) {
        heap.delMin()
        heap.insert(num)
      }
    } else {
      heap.insert(num)
      n++
    }
  }

  const ans = []

  while (!heap.isEmpty()) {
    ans.push(heap.delMin())
  }

  return ans
}

/**
 * 思路：
 * 1. 使用map建立数字跟次数之间映射
 * 2. 遍历map建立小根堆：
 *    - 当不够k个数时，我们往堆里插入节点（因为我们要找前k个最高频的数，我们就先放k个假装现在最高频的是这k个）
 *    - 当count次数比小根堆的根大的时候，删除小根堆的根，然后将新num插入堆
 * 3. 不断循环整个操作，直到map遍历完成，由于我们每次都会把最低频的数从小根堆去除，总共就map size个数，从头遍历一遍后，剩下的k个数就是次数最频繁的数
 * 4. 从小根堆中收集结果，返回结果
 */
// @lc code=end
