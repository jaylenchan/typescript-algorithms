/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start

function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = []
  let firstRow = 0
  let lastRow = matrix.length - 1
  let firstCol = 0
  let lastCol = matrix[0].length - 1

  while (firstRow <= lastRow && firstCol <= lastCol) {
    _spiralOrder(matrix, firstRow, lastRow, firstCol, lastCol, result)
    firstRow += 1
    firstCol += 1
    lastRow -= 1
    lastCol -= 1
  }

  return result
}

function _spiralOrder(
  matrix: number[][],
  top: number,
  down: number,
  left: number,
  right: number,
  result: number[]
) {
  const firstRow = top
  const firstCol = left
  const lastRow = down
  const lastCol = right

  if (top == down) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i])
    }
  } else if (left == right) {
    for (let i = top; i <= down; i++) {
      result.push(matrix[i][left])
    }
  } else {
    while (left < lastCol) {
      result.push(matrix[firstRow][left])
      left += 1
    }

    while (top < lastRow) {
      result.push(matrix[top][lastCol])
      top += 1
    }

    while (right > firstCol) {
      result.push(matrix[lastRow][right])
      right -= 1
    }

    while (down > firstRow) {
      result.push(matrix[down][firstCol])
      down -= 1
    }
  }
}

// 思路：考虑矩阵宏观代码调度，不要陷入局部坐标变换怎么跑的。

// @lc code=end
