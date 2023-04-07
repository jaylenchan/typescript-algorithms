class PriorityQueue {

  private data: number[]
  private size: number

  constructor() {
    this.data = []
    this.size = 0
  }

  isEmpty(): boolean {
    return this.size == 0
  }

  getSize(): number {
    return this.size
  }

  insert(item: number) {
    this.data[this.size++] = item
    this.swim(this.size - 1)
  }

  delMax(): number {
    const max = this.data[0]

    this.swap(0, this.size - 1)
    this.data.pop()
    this.size--
    this.sink(0)

    return max
  }

  private getParentIndex(index: number): number {
    if (index == 0) return 0
    return Math.floor((index - 1) / 2)
  }

  private getRightIndex(index: number): number {
    return 2 * index + 1
  }

  private getLeftIndex(index: number): number {
    return 2 * index + 2
  }

  private swim(index: number): void {
    while (this.less(index, this.getParentIndex(index))) {
      this.swap(index, this.getParentIndex(index))
      index = this.getParentIndex(index)
    }
  }

  private sink(index: number): void {
    while (this.getLeftIndex(index) < this.size) {
      let maxChildIndex = this.getLeftIndex(index)
      const rightIndex = this.getRightIndex(index)
      if (rightIndex < this.size) {
        maxChildIndex =
          this.data[maxChildIndex] > this.data[rightIndex]
            ? maxChildIndex
            : rightIndex
      }

      if (this.data[index] > this.data[maxChildIndex]) break

      this.swap(maxChildIndex, index)
      index = maxChildIndex
    }
  }

  private less(i: number, j: number): boolean {
    return this.data[i] < this.data[j]
  }

  private swap(i: number, j: number): void {
    ;[this.data[j], this.data[i]] = [this.data[i], this.data[j]]
  }

}

export default PriorityQueue
