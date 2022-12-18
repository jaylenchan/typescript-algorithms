import BinarySearchTree from './interface';

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

class BST<E> implements BinarySearchTree<E> {
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

  remove(e: E) {
    console.log(e);
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

export default BST;
