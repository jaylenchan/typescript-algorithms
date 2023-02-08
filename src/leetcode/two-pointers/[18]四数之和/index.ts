/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 */
export { fourSum };
// @lc code=start
function twoSum(
  nums: number[],
  begin: number,
  end: number,
  target: number
): number[][] {
  const ans2: number[][] = [];

  let L = begin;
  let R = end;

  while (L < R) {
    const numL = nums[L];
    const numR = nums[R];
    const sumLR = numL + numR;

    if (sumLR == target) {
      L++;
      R--;

      ans2.push([numL, numR]);

      while (nums[L] == numL) {
        L++;
      }

      while (nums[R] == numR) {
        R--;
      }
    } else if (sumLR < target) {
      L++;
      while (nums[L] == nums[L - 1]) L++;
    } else {
      R--;
      while (nums[R] == nums[R + 1]) R--;
    }
  }

  return ans2;
}

function treeSum(nums: number[], begin: number, target: number): number[][] {
  const ans3: number[][] = [];
  for (let i = begin; i < nums.length - 2; ) {
    const curRes = twoSum(nums, i + 1, nums.length - 1, target - nums[i]);

    for (let j = 0; j < curRes.length; j++) {
      ans3.push([nums[i], ...curRes[j]]);
    }
    i++;
    while (nums[i] == nums[i - 1]) i++;
  }

  return ans3;
}

function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);

  const ans4: number[][] = [];
  for (let i = 0; i < nums.length - 3; ) {
    const curRes = treeSum(nums, i + 1, target - nums[i]);

    for (let j = 0; j < curRes.length; j++) {
      ans4.push([nums[i], ...curRes[j]]);
    }

    i++;
    while (nums[i] == nums[i - 1]) i++;
  }

  return ans4;
}
// @lc code=end
/**
 * #思路#
 * 1. 遍历数组，固定第1个数num[i],通解为[num[i], ...三数之和]
 * 2. 三数之和再转两数之和即可， 返回给四数之和用
 * 3. 两数之和直接算，返回给三数之和用
 * 4. 去重：所有数之和过程中都记得去重
 */
