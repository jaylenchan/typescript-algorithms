/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function twoSum(
  nums: number[],
  begin: number,
  end: number,
  target: number
): number[][] {
  const ans: number[][] = [];

  let L = begin;
  let R = end;

  while (L < R) {
    const numL = nums[L];
    const numR = nums[R];
    if (numL + numR == target) {
      ans.push([-target, numL, numR]);
      L++;
      R--;
      while (nums[L] == numL) {
        L++;
      }

      while (nums[R] == numR) {
        R--;
      }
    } else if (numL + numR < target) {
      L++;
    } else {
      R--;
    }
  }

  return ans;
}

function threeSum(nums: number[]): number[][] {
  const ans: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; ) {
    const curRes = twoSum(nums, i + 1, nums.length - 1, -nums[i]);
    for (let j = 0; j < curRes.length; j++) {
      ans.push(curRes[j]);
    }

    i++;
    while (nums[i] == nums[i - 1]) {
      i++;
    }
  }

  return ans;
}
// @lc code=end

/**
 * #思路#
 * 1. 三数之和的思路就是枚举一遍数组，将每个数的相反数作为target
 * 2. 对每一个target进行两数之和操作
 * 3. 当枚举的值重复的时候，直接跳过，不需要对重复值进行两数之和操作
 * 4. 遍历完所有target的两数之和操作后，收集返回总结果
 */
