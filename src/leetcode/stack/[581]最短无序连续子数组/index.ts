/*
 * @lc app=leetcode.cn id=581 lang=typescript
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
function findUnsortedSubarray(nums: number[]): number {
  if (nums.length == 0) return 0;

  let stack: number[] = [];
  const size = nums.length;

  // 单调栈：从左往右找左边界
  let left = size;
  for (let i = 0; i < size; i++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] > nums[i]) {
      left = Math.min(left, stack.pop()!);
    }

    stack.push(i);
  }

  // 单调栈：从右往左找右边界
  let right = -1;
  stack = [];
  for (let i = size - 1; i >= 0; i--) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
      right = Math.max(right, stack.pop()!);
    }
    stack.push(i);
  }

  return left < right ? right - left + 1 : 0;
}
// @lc code=end
