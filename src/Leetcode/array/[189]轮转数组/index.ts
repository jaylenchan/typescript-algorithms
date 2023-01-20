/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const help: number[] = [];

  for (let i = 0; i < k; i++) {
    help[i] = nums.pop()!;
    nums.unshift(help[i]);
  }
}
// @lc code=end
