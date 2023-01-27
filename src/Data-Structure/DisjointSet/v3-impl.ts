import IDisjointSet from './Interface';
// Quick Union optimize by size 基于size的优化
export default class DisjointSet implements IDisjointSet<number> {
  private parent: number[];
  private size: number[]; // size[i]表示以i为根的集合中元素的个数

  constructor(size: number) {
    this.parent = new Array(size);
    this.size = new Array(size);

    for (let i = 0; i < this.parent.length; i++) {
      this.parent[i] = i;
      this.size[i] = 1;
    }
  }

  public getSize(): number {
    return this.parent.length;
  }

  public inSameSet(p: number, q: number): boolean {
    return this._find(p) == this._find(q);
  }

  public union(p: number, q: number): void {
    if (this.inSameSet(p, q)) return;

    const pRoot = this._find(p);
    const qRoot = this._find(q);

    /**
     * 将以pRoot或者qRoot为根的集合，做两个集合元素大小的判断，哪个集合元素少，就被合并到元素多的集合上去
     * 合并的方式就是：将元素少的集合的根的父亲指向元素多的集合的根
     */
    if (this.size[pRoot] < this.size[qRoot]) {
      this.parent[pRoot] = qRoot;
      this.size[qRoot] += this.size[pRoot];
    } else {
      // 以pRoot为根的集合中元素的个数 >= 以qRoot为根的集合中元素的个数
      this.parent[qRoot] = this.parent[pRoot];
      this.size[pRoot] += this.size[qRoot];
    }
  }

  /** 查看元素p所对应的集合的编号 */
  private _find(p: number): number {
    if (p < 0 || p > this.parent.length) {
      throw new Error('p is out of bound.');
    }

    while (p != this.parent[p]) {
      p = this.parent[p];
    }

    return p;
  }
}
