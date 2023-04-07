/*
 * @lc app=leetcode.cn id=739 lang=typescript
 *
 * [739] 每日温度
 */
export default dailyTemperatures
// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
  if (temperatures.length == 0) return []

  // 单调递减栈
  const stack: number[] = []
  const temSize = temperatures.length
  const ans: number[] = []

  // 枚举每一天的温度
  for (let i = 0; i < temSize; i++) {
    if (stack.length == 0) {
      stack.push(i)
    } else {
      while (temperatures[i] > temperatures[stack[stack.length - 1]]) {
        const target = stack.pop()!
        ans[target] = i - target
      }

      stack.push(i)
    }
  }

  while (stack.length > 0) {
    const target = stack.pop()!
    ans[target] = 0
  }

  return ans
}

/**
 * 思路：单调栈
 * 1. 设置一个单调非递增栈，栈里存放数组的索引
 * 2. 遍历整个数组，当栈为空的时候，直接进栈当前遍历的元素
 * 3. 遍历数组时，当栈不为空，试图往栈中压入当前元素的索引
 *    - 但是，如果发现栈顶索引对应的数组值比数组当前遍历元素值小，那么如果当前遍历元素索引强行压入，就会破坏栈的单调结构
 *    - 于是我们需要循环查看栈顶索引，发现该索引的数组值比准备压入的小，就释放它，弹出来，开始组合我们的信息
 *    - 此时弹出索引跟准备压栈的索引之间的关系就是：压栈索引的数组值一定是弹出索引数组值右边第一个比它大的值
 *    - 生成信息：压栈索引 - 弹出索引 就是我们要的答案，只需要把它放入结果ans对应弹出索引的位置即可，这就是第x天后第一个比它大的温度
 * 4. 当遍历完数组后，栈中还有元素的话，进入结算阶段：说明右边没有比栈中元素还要大的元素了，直接对弹出索引赋值0就好。
 * 5. 返回结果
 */
// @lc code=end
