/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  let top = 0;
  let down = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  const result = [];

  while (true) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top += 1;
    if (top > down) break;

    for (let i = top; i <= down; i++) {
      result.push(matrix[i][right]);
    }
    right -= 1;
    if (right < left) break;

    for (let i = right; i >= left; i--) {
      result.push(matrix[down][i]);
    }
    down -= 1;
    if (top > down) break;

    for (let i = down; i >= top; i--) {
      result.push(matrix[i][left]);
    }
    left += 1;
    if (right < left) break;
  }

  return result;
}
// @lc code=end
