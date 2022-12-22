/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    let target = -nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      if (target == nums[left] + nums[right]) {
        result.push([-target, nums[left], nums[right]]);

        while (nums[left + 1] == nums[left]) {
          left += 1;
        }

        while (nums[right - 1] == nums[right]) {
          right -= 1;
        }

        left += 1;
        right -= 1;
      } else if (target > nums[left] + nums[right]) {
        // 说明和小了，需要增大和靠近目标,left右移
        left += 1;
      } else {
        // 说明和大了，需要减小和靠近目标,right左移
        right -= 1;
      }
    }
  }

  return result;
}
// @lc code=end
