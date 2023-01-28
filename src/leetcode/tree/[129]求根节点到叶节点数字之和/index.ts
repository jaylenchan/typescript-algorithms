/*
 * @lc app=leetcode.cn id=129 lang=typescript
 *
 * [129] 求根节点到叶节点数字之和
 */

import TreeNode from '../TreeNode';
export default sumNumbers;
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

function sumNumbers(root: TreeNode | null): number {
  const pathList: number[] = [];
  let sum = 0;

  traverse(root, '', pathList);

  for (let i = 0; i < pathList.length; i++) {
    sum += pathList[i];
  }

  return sum;
}

function traverse(root: TreeNode | null, path: string, pathList: number[]) {
  if (root == null) {
    return;
  } else {
    if (root.left == null && root.right == null) {
      pathList.push(Number(path + root.val));
      return;
    }

    traverse(root.left, path + root.val, pathList);
    traverse(root.right, path + root.val, pathList);
  }
}
// @lc code=end
