/*
 * @lc app=leetcode.cn id=437 lang=typescript
 *
 * [437] 路径总和 III
 */

import TreeNode from '../TreeNode';
export default pathSum;
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

function pathSum(root: TreeNode | null, targetSum: number): number {
  if (root == null) return 0;

  let count = 0;
  const queue: TreeNode[] = [];

  queue.push(root);

  while (queue.length > 0) {
    const node = queue.shift()!;

    findPathFrom(node, targetSum, 0);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return count;

  function findPathFrom(
    node: TreeNode | null,
    targetSum: number,
    curSum: number
  ): void {
    if (node == null) {
      return;
    }

    if (curSum + node.val == targetSum) {
      count += 1;
    }

    findPathFrom(node.left, targetSum, curSum + node.val);
    findPathFrom(node.right, targetSum, curSum + node.val);
  }
}

/**
 * 思路： 广度优先遍历拿到每个节点 + 从每个节点出发寻找符合条件的个数
 */
// @lc code=end
