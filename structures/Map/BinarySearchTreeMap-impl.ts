import type IMap from './interface'


class TNode<K, V> {

  public key: K
  public value: V
  public left: TNode<K, V> | null
  public right: TNode<K, V> | null

  constructor(key: K, value: V) {
    this.key = key
    this.value = value
    this.left = null
    this.right = null
  }

}

class BinarySearchTreeMap<K, V> implements IMap<K, V> {

  private root: TNode<K, V> | null
  private size: number

  constructor() {
    this.root = null
    this.size = 0
  }

  // 向二分搜索树当中添加新的key，value
  public add(key: K, value: V): void {
    this.root = this._add(this.root, key, value)
  }

  // 向以root为根的二分搜索树当中插入key，value
  // 返回插入新节点后二分搜索树的根
  private _add(root: TNode<K, V> | null, key: K, value: V): TNode<K, V> {
    if (root == null) {
      this.size += 1
      return new TNode(key, value)
    }

    if (root.key < key) {
      root.left = this._add(root.left, key, value)
    } else if (root.key > key) {
      root.right = this._add(root.right, key, value)
    } else {
      root.value = value
    }

    return root
  }

  // 返回以root为根的二分搜索树中，key所在的节点
  private _getNode(root: TNode<K, V> | null, key: K): TNode<K, V> | null {
    if (root == null) return null

    if (root.key == key) {
      return root
    } else if (root.key > key) {
      return this._getNode(root.right, key)
    } else {
      return this._getNode(root.left, key)
    }
  }

  // 返回以root为根的二分搜索树中的最小节点
  private _minimum(root: TNode<K, V>): TNode<K, V> {
    if (root.left == null) {
      return root
    } else {
      return this._minimum(root)
    }
  }

  // 删除掉以root为根的二分搜索树当中的最小节点
  // 返回删除节点后新的二分搜索树的根
  private _removeMin(root: TNode<K, V>): TNode<K, V> | null {
    if (root.left == null) {
      this.size -= 1
      const rightNode = root.right
      root.right = null
      return rightNode
    } else {
      root.left = this._removeMin(root.left)
      return root
    }
  }

  // 删除以node为根的二分搜索树中键为key的节点
  // 返回删除节点后新的二分搜索树的根
  private _remove(root: TNode<K, V> | null, key: K): TNode<K, V> | null {
    if (root == null) {
      return null
    } else {
      if (key < root.key) {
        root.left = this._remove(root.left, key)

        return root
      } else if (key > root.key) {
        root.right = this._remove(root.right, key)

        return root
      } else {
        if (root.left == null) {
          const rightNode = root.right
          root.right = null
          this.size -= 1
          return rightNode
        }
        if (root.right == null) {
          const leftNode = root.left
          root.left = null
          this.size -= 1
          return leftNode
        }

        // 待删除的节点左右子树均不为空
        const successor = this._minimum(root.right)
        successor.right = this._removeMin(root.right)
        successor.left = root.left

        root.left = root.right = null

        return successor
      }
    }
  }

  public remove(key: K): V | null {
    const node = this._getNode(this.root, key)

    if (node != null) {
      this.root = this._remove(this.root, key)
      return node.value
    }

    return null
  }

  public contains(key: K): boolean {
    const node = this._getNode(this.root, key)

    return node != null
  }

  public get(key: K): V | null {
    const node = this._getNode(this.root, key)

    return node == null ? null : node.value
  }

  public set(key: K, newValue: V): void {
    const node = this._getNode(this.root, key)

    if (node == null) {
      throw new Error(`${key} doesn't exist!`)
    } else {
      node.value = newValue
    }
  }

  public getSize(): number {
    return this.size
  }

  public isEmpty(): boolean {
    return this.size == 0
  }

}

export default BinarySearchTreeMap
