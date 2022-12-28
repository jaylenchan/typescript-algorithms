import IBinarySearchTree from './interface';

class TNode<E> {
  e: E;
  left: TNode<E> | null;
  right: TNode<E> | null;

  constructor(e: E, left?: TNode<E>, right?: TNode<E>) {
    this.e = e;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

class BinarySearchTree<E> implements IBinarySearchTree<E> {
  private root: TNode<E> | null;
  private size: number;

  constructor() {
    this.root = null;
    this.size = 0;
  }

  getSize(): number {
    return this.size;
  }

  isEmpty(): boolean {
    return this.size == 0;
  }

  add(e: E): void {
    this.root = this._add(this.root, e);
  }

  // 返回插入新节点后二分搜索树的根
  private _add(root: TNode<E> | null, e: E): TNode<E> {
    if (root == null) {
      root = new TNode(e);
      this.size += 1;

      return root;
    }

    if (e < root.e) {
      root.left = this._add(root.left, e);
    } else if (e > root.e) {
      root.right = this._add(root.right, e);
    }

    return root;
  }

  // 寻找二分搜索树当中的最小元素
  minimum(): E {
    if (this.size == 0) {
      throw new Error('BinarySearchTree is empty!');
    }

    return this._minimum(this.root!).e;
  }

  private _minimum(root: TNode<E>): TNode<E> {
    if (root.left == null) return root;

    return this._minimum(root.left);
  }

  // 寻找二分搜索树当中的最大元素
  maxmum(): E {
    if (this.size == 0) {
      throw new Error('BinarySearchTree is empty!');
    }

    return this._maxmum(this.root!).e;
  }

  private _maxmum(root: TNode<E>): TNode<E> {
    if (root.right == null) return root;

    return this._maxmum(root.right);
  }

  // 从二分搜索树当中删除最小的节点，并返回最小值
  // 删除掉以root为根的二分搜索树当中的最小节点
  removeMin(): E {
    if (this.root == null) throw new Error('BinarySearchTree is empty!');

    const result = this.minimum();
    this.root = this._removeMin(this.root);

    return result;
  }

  // 删除最小值有两种场景
  // 场景1：删除的元素是整个树中的叶子节点 - 直接删除即可
  // 场景2：删除的元素不是整个树中的叶子节点 - 将该元素的右子树保留，删除该元素，然后让保留的右子树直接替代这个元素成为父亲元素的左子树
  private _removeMin(root: TNode<E>): TNode<E> | null {
    if (root.left == null) {
      this.size -= 1;
      const rightNode = root.right;
      root.right = null;
      return rightNode;
    } else {
      root.left = this._removeMin(root.left);
      return root;
    }
  }

  removeMax(): E {
    if (this.root == null) throw new Error('BinarySearchTree is empty!');

    const result = this.maxmum();
    this._removeMax(this.root);

    return result;
  }

  private _removeMax(root: TNode<E>): TNode<E> | null {
    if (root.right == null) {
      this.size -= 1;
      const leftNode = root.left;
      root.left = null;
      return leftNode;
    } else {
      root.right = this._removeMax(root.right);
      return root;
    }
  }

  remove(e: E) {
    this.root = this._remove(this.root, e);
  }

  // 删除以node为根的二分搜索树中指为e的节点
  // 返回删除节点后新的二分搜索树的根
  private _remove(root: TNode<E> | null, e: E): TNode<E> | null {
    if (root == null) {
      return null;
    } else {
      if (e < root.e) {
        root.left = this._remove(root.left, e);

        return root;
      } else if (e > root.e) {
        root.right = this._remove(root.right, e);

        return root;
      } else {
        // e == root.e

        if (root.left == null) {
          const rightNode = root.right;
          root.right = null;
          this.size -= 1;
          return rightNode;
        }
        if (root.right == null) {
          const leftNode = root.left;
          root.left = null;
          this.size -= 1;
          return leftNode;
        }

        // 待删除的节点左右子树均不为空
        const successor = this._minimum(root.right);
        successor.right = this._removeMin(root.right);
        successor.left = root.left;

        root.left = root.right = null;

        return successor;
      }
    }
  }

  // 二分搜索树中是否包含e
  contains(e: E): boolean {
    return this._contains(this.root, e);
  }

  // 查看以root为根的二分搜索树是否包含元素e
  private _contains(root: TNode<E> | null, e: E): boolean {
    if (root == null) return false;

    if (e == root.e) {
      return true;
    } else if (e < root.e) {
      return this._contains(root.left, e);
    } else {
      return this._contains(root.right, e);
    }
  }

  preOrder(): void {
    this._preOrder(this.root);
  }

  // 以root为根的二分搜索树进行前序遍历
  // 找到比待删除节点大的最小节点，其实就是待删除节点右子树上的最小节点
  // 用这个节点顶替待删除节点的位置
  private _preOrder(root: TNode<E> | null) {
    if (root == null) return;

    console.log(root.e);

    this._preOrder(root.left);
    this._preOrder(root.right);
  }

  inOrder(): void {
    this._inOrder(this.root);
  }

  private _inOrder(root: TNode<E> | null): void {
    if (root == null) return;

    this._inOrder(root.left);

    console.log(root.e);

    this._inOrder(root.right);
  }

  postOrder(): void {
    this._postOrder(this.root);
  }

  private _postOrder(root: TNode<E> | null): void {
    if (root == null) return;

    this._postOrder(root.left);
    this._postOrder(root.right);

    console.log(root.e);
  }
}

export default BinarySearchTree;
