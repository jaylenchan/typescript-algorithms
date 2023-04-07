/*
 * @lc app=leetcode.cn id=380 lang=typescript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start
class RandomizedSet {
  private data: number[];
  private idxMap: Map<number, number>;
  private size: number;

  constructor() {
    this.data = [];
    this.idxMap = new Map<number, number>();
    this.size = 0;
  }

  insert(val: number): boolean {
    if (this.contains(val)) return false;

    this.data[this.size] = val;
    this.idxMap.set(val, this.size++);

    return true;
  }

  remove(val: number): boolean {
    if (!this.contains(val)) return false;

    const index = this.idxMap.get(val)!;

    this.swap(index, this.size - 1);
    this.idxMap.set(this.data[index], index);
    this.idxMap.delete(val);
    this.size--;

    return true;
  }

  getRandom(): number {
    const random = Math.floor(Math.random() * this.size);

    return this.data[random];
  }

  private contains(val: number): boolean {
    return this.idxMap.has(val);
  }

  private swap(i: number, j: number): void {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

/**
 * 思路：题目重点要求规则是：满足每个函数的 平均 时间复杂度为 O(1)
 * 1. 要求insert插入和remove删除都是O(1)比较好办，那就是利用哈希表结构。但是对于random要在O(1)时间内，没法办到
 * 2. 数组可以O(1)寻址，并且对于任意在范围内的index 都能快速获得相应的值。我们的想法是，结合数组和哈希表一起实现这个结构
 * 3. 我们利用数组记录元素值，利用哈希表记录元素值到数组索引的映射。这么做的原因是开放给用户的接口参数只有元素值，我们需要
 * 这个映射关系去数组快速寻址，然后执行元素的删除操作。
 * 4. 我们定义从0-size这个范围内的数才是有效数，所以当remove的时候，我们并不会真的把数据删除掉，只是用size标记从哪里到size
 * 才是有效值，其余的就是被删除了的数据。当然我们也可以直接使用pop删除到数组外。
 * 5. 删除操作注意点：删除的操作是通过交换映射找到的index和数据有效范围size-1这个位置的数，然后让size--来表示删除了原来index的元素值
 * 由于我们交换了老的size-1成为了新的index这个位置的值，所以我们一定要记得更新map中对应关系index，否则我们从val到索引的映射就还是
 * 原来的size-1（然而现在应该是替代成为了新的index）。同时我们还要记得在idxMap删除掉要删除的val，不然就有两个val对应同一个index了。
 * 本质上，我们这里的删除操作就是size--，从0-size范围缩小，我们就认为删除了某些数。
 */
// @lc code=end
