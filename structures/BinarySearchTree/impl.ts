import TreeNode from './TreeNode'

import type IBinarySearchTree from './interface'


class BinarySearchTree<V> implements IBinarySearchTree<V> {

  private _root: TreeNode<V>
  private _size: number

  constructor() {
    this._root = TreeNode.None()
    this._size = 0
  }

  public get size(): number {
    return this._size
  }

  public isEmpty(): boolean {
    return this._size == 0
  }

  public add(e: V): void {
    this._root = this._add(this._root, e)
  }

  // 寻找二分搜索树当中的最小元素
  public minimum(): V {
    if (this._size == 0) {
      throw new Error('BinarySearchTree is empty!')
    }

    return this._minimum(this._root).value
  }

  // 寻找二分搜索树当中的最大元素
  public maxmum(): V {
    if (this._size == 0) {
      throw new Error('BinarySearchTree is empty!')
    }

    return this._maxmum(this._root).value
  }

  // 从二分搜索树当中删除最小的节点，并返回最小值
  // 删除掉以root为根的二分搜索树当中的最小节点
  public removeMin(): V {
    if (this._root == null) throw new Error('BinarySearchTree is empty!')

    const result = this.minimum()
    this._root = this._removeMin(this._root)

    return result
  }

  public removeMax(): V {
    if (this._root.value == null) throw new Error('BinarySearchTree is empty!')

    const result = this.maxmum()
    this._removeMax(this._root)

    return result
  }

  public remove(e: V): void {
    this._root = this._remove(this._root, e)
  }

  // 二分搜索树中是否包含e
  public contains(e: V): boolean {
    return this._contains(this._root, e)
  }

  public preOrder(): void {
    this._preOrder(this._root)
  }

  public inOrder(): void {
    this._inOrder(this._root)
  }

  public postOrder(): void {
    this._postOrder(this._root)
  }

  private _maxmum(_root: TreeNode<V>): TreeNode<V> {
    if (_root.right == null) return _root

    return this._maxmum(_root.right)
  }

  private _minimum(_root: TreeNode<V>): TreeNode<V> {
    if (_root.left == null) return _root

    return this._minimum(_root.left)
  }

  // 返回插入新节点后二分搜索树的根
  private _add(_root: TreeNode<V>, e: V): TreeNode<V> {
    if (_root.value == null) {
      _root = new TreeNode(e)
      this._size += 1

      return _root
    }

    if (e < _root.value) {
      _root.left = this._add(_root.left, e)
    } else if (e > _root.value) {
      _root.right = this._add(_root.right, e)
    }

    return _root
  }

  // 删除最小值有两种场景
  // 场景1：删除的元素是整个树中的叶子节点 - 直接删除即可
  // 场景2：删除的元素不是整个树中的叶子节点 - 将该元素的右子树保留，删除该元素，然后让保留的右子树直接替代这个元素成为父亲元素的左子树
  private _removeMin(_root: TreeNode<V>): TreeNode<V> {
    if (_root.left == null) {
      this._size -= 1
      const rightNode = _root.right
      _root.right = TreeNode.None()
      return rightNode
    } else {
      _root.left = this._removeMin(_root.left)
      return _root
    }
  }

  private _removeMax(_root: TreeNode<V>): TreeNode<V> {
    if (_root.right == null) {
      this._size -= 1
      const leftNode = _root.left
      _root.left = TreeNode.None()
      return leftNode
    } else {
      _root.right = this._removeMax(_root.right)
      return _root
    }
  }

  // 删除以node为根的二分搜索树中指为e的节点
  // 返回删除节点后新的二分搜索树的根
  private _remove(_root: TreeNode<V>, e: V): TreeNode<V> {
    if (_root.value == null) {
      return TreeNode.None()
    } else {
      if (e < _root.value) {
        _root.left = this._remove(_root.left, e)

        return _root
      } else if (e > _root.value) {
        _root.right = this._remove(_root.right, e)

        return _root
      } else {
        // e == _root.e

        if (_root.left.value == null) {
          const rightNode = _root.right
          _root.right = TreeNode.None()
          this._size -= 1
          return rightNode
        }
        if (_root.right.value == null) {
          const leftNode = _root.left
          _root.left = TreeNode.None()
          this._size -= 1
          return leftNode
        }

        // 待删除的节点左右子树均不为空
        const successor = this._minimum(_root.right)
        successor.right = this._removeMin(_root.right)
        successor.left = _root.left

        _root.left = TreeNode.None()
        _root.right = TreeNode.None()

        return successor
      }
    }
  }

  // 查看以root为根的二分搜索树是否包含元素e
  private _contains(_root: TreeNode<V>, e: V): boolean {
    if (_root.value == null) return false

    if (e == _root.value) {
      return true
    } else if (e < _root.value) {
      return this._contains(_root.left, e)
    } else {
      return this._contains(_root.right, e)
    }
  }

  // 以root为根的二分搜索树进行前序遍历
  // 找到比待删除节点大的最小节点，其实就是待删除节点右子树上的最小节点
  // 用这个节点顶替待删除节点的位置
  private _preOrder(_root: TreeNode<V>): void {
    if (_root.value == null) return

    this._preOrder(_root.left)
    this._preOrder(_root.right)
  }

  private _inOrder(_root: TreeNode<V>): void {
    if (_root.value == null) return

    this._inOrder(_root.left)

    this._inOrder(_root.right)
  }

  private _postOrder(_root: TreeNode<V>): void {
    if (_root.value == null) return

    this._postOrder(_root.left)
    this._postOrder(_root.right)
  }

}

export default BinarySearchTree
