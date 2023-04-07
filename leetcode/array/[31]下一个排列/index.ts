/*
 * @lc app=leetcode.cn id=31 lang=typescript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  if (nums.length == 0 || nums.length == 1) return

  const end = nums.length - 1
  let [small, j] = [-1, -1]

  for (let index = end; index >= 0; index--) {
    if (nums[index - 1] < nums[index]) {
      small = index - 1
      j = index
      break
    }
  }

  let big = end
  while (big >= j) {
    if (nums[big] > nums[small]) {
      break
    }
    big -= 1
  }

  ;[nums[small], nums[big]] = [nums[big], nums[small]]

  while (j <= end) {
    let min = j
    for (let i = j + 1; i <= end; i++) {
      if (nums[i] < nums[min]) {
        min = i
      }
    }

    ;[nums[min], nums[j]] = [nums[j], nums[min]]

    j += 1
  }
}

/**
 * 思路
 * 1. 确定小数 （办法：找第一对升序的数（small，j），小数就是nums[small]）
 * 2. 确定大数 （办法: 在[j, end]区间，从后往前找，找到第一个比nums[small]大的数nums[big] ）
 * 3. 交换小数和大数
 * 4. 重新排序[j,end]使得这个区间升序
 */

// @lc code=end
