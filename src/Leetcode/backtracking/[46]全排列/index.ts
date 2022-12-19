/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const path: number[] = [];
  backtrack(nums, path, result);

  return result;
}

function backtrack(nums: number[], path: number[], result: number[][]) {
  if (path.length == nums.length) {
    result.push([...path]);
  } else {
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (path.includes(num)) continue;
      path.push(num);
      backtrack(nums, path, result);
      path.pop();
    }
  }
}
// @lc code=end
