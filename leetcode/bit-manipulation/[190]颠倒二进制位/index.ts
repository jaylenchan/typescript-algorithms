/*
 * @lc app=leetcode.cn id=190 lang=typescript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
function reverseBits(n: number): number {
  const bits = n.toString(2).padStart(32, '0').split('');
  let left = 0;
  let right = bits.length - 1;

  _reverseBits(bits, left, right);
  return parseInt(bits.join(''), 2);
}

function _reverseBits(bits: string[], left: number, right: number) {
  if (left >= right) return;
  [bits[right], bits[left]] = [bits[left], bits[right]];
  _reverseBits(bits, left + 1, right - 1);
}
// @lc code=end
