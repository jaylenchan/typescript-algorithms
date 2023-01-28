/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
  let sum = 0;
  let min = Infinity;
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    sum += nums[right];

    while (sum >= target) {
      sum -= nums[left];
      min = Math.min(min, right - left + 1);
      left += 1;
    }

    right += 1;
  }

  return min == Infinity ? 0 : min;
}
// @lc code=end
