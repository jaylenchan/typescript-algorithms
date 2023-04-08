interface IBinarySearchTree<E> {
  /** 获取一棵二叉搜索树的结点总数 */
  get size(): number
  isEmpty(): boolean
  add(e: E): void
  contains(e: E): boolean
  remove(e: E): void
  preOrder(): void
  inOrder(): void
  postOrder(): void
}

export default IBinarySearchTree
