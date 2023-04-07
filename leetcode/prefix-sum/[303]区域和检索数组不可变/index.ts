/*
 * @lc app=leetcode.cn id=303 lang=typescript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
class NumArray {

  private prefixSum: number[]
  constructor(nums: number[]) {
    this.prefixSum = this.createPrefixSum(nums)
  }

  sumRange(left: number, right: number): number {
    return this.prefixSum[right + 1] - this.prefixSum[left]
  }

  createPrefixSum(nums: number[]): number[] {
    const prefixSum: number[] = []

    for (let i = 0; i <= nums.length; i++) {
      if (i == 0) {
        prefixSum[i] = 0
      } else {
        prefixSum[i] = prefixSum[i - 1] + nums[i - 1]
      }
    }

    return prefixSum
  }

}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
