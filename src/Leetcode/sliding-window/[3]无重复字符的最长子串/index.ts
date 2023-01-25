/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  if (!s) return 0;

  let left = 0;
  let right = 0;
  let maxLen = 0;
  const charSet = new Set<string>();

  while (right < s.length) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left += 1;
    }
    charSet.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
    right += 1;
  }

  return maxLen;
}
// @lc code=end
