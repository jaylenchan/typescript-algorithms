/*
 * @lc app=leetcode.cn id=303 lang=typescript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
class NumArray {
  private prefixSum: number[];
  constructor(nums: number[]) {
    this.prefixSum = [];

    this.prefixSum[0] = 0;
    for (let i = 1; i <= nums.length; i++) {
      this.prefixSum[i] = this.prefixSum[i - 1] + nums[i - 1];
    }
  }

  sumRange(left: number, right: number): number {
    return this.prefixSum[right + 1] - this.prefixSum[left];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
