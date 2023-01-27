/*
 * @lc app=leetcode.cn id=662 lang=typescript
 *
 * [662] 二叉树最大宽度
 */

import TreeNode from '../TreeNode';
export default widthOfBinaryTree;
// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function widthOfBinaryTree(root: TreeNode | null): BigInt {
  if (root == null) return BigInt(0);
  let queue: [TreeNode, bigint][] = [];
  let maxLen = BigInt(1);

  queue.push([root, BigInt(1)]);

  while (queue.length > 0) {
    const size = queue.length;
    let right = queue[size - 1][1];
    let left = queue[0][1];

    for (let i = 0; i < size; i++) {
      const [node, index] = queue.shift()!;

      if (node.left) {
        queue.push([node.left, BigInt(2) * index]);
      }

      if (node.right) {
        queue.push([node.right, BigInt(2) * index + BigInt(1)]);
      }
    }

    if (maxLen < right - left + BigInt(1)) {
      maxLen = right - left + BigInt(1);
    }
  }

  return maxLen;
}
// @lc code=end
