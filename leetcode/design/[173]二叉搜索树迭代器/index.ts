/*
 * @lc app=leetcode.cn id=173 lang=typescript
 *
 * [173] 二叉搜索树迭代器
 */
export { BSTIterator }
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

class BSTIterator {

  private queue: number[]

  constructor(root: TreeNode | null) {
    this.queue = []
    this.traverse(root)
  }

  next(): number {
    if (this.queue.length == 0) return -1

    return this.queue.shift()!
  }

  hasNext(): boolean {
    return this.queue.length > 0
  }

  traverse(root: TreeNode | null): void {
    if (root == null) return

    this.traverse(root.left)
    this.queue.push(root.val)
    this.traverse(root.right)
  }

}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

/**
 * #思路#
 * 1.二叉搜索树中序遍历一定是单调递增序列，放入queue中
 * 2. next直接取queue的对头
 * 3. hasNext直接判断队空否
 */
