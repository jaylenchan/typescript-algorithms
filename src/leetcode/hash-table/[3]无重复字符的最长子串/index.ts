/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */
export { lengthOfLongestSubstring };
// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  if (!s) return 0;

  let len = 1;

  const lastMap: number[] = new Array(256).fill(-1);
  let prev = -1;

  for (let i = 0; i < s.length; i++) {
    prev = Math.max(prev, lastMap[s[i].charCodeAt(0)]);
    len = Math.max(len, i - prev);
    lastMap[s[i].charCodeAt(0)] = i;
  }

  return len;
}
// @lc code=end

/**
 * #思路#
 * # 子串问题思考方式
 * # 求子串的思考方式是：定义假设必须以i位置为结尾的情况得子串，最长的长度是什么，遍历数组，求所有的i为结尾的最长子串的长度，最大就是这些答案中的最大值
 * # 本质上，无论什么子串，都是以某个字符为结尾，所以上述思考方式是有依据的。
 *
 * 假设以i位置为结尾的子串s[0:i]，那么它的最长不重复字符长度应该取决于以下两个因素：
 * 1. s[0:i-1]，即i的上一个位置为结尾的子串的不重复字符最大长度（或者说i-1位置往左边推，最多能推到哪个位置）
 * 2. s[i]这个字符从i位置往左边找第一个出现相同字符的位置：说明就算i能够推到左边，最左边也不可能来到这个出现相同字符的位置
 *
 * 为了记录i位置的字符，上一次出现的地方，我们可以使用map来记录，映射关系：字符->索引
 */
