import IUnionSet from './Interface';

// Quick Union optimize by rank 基于rank的优化
export default class UnionSet implements IUnionSet<number> {
  protected parent: number[];
  protected rank: number[]; // rank[i]表示以i为根的集合中元素的个数

  constructor(rank: number) {
    this.parent = new Array(rank);
    this.rank = new Array(rank);

    for (let i = 0; i < this.parent.length; i++) {
      this.parent[i] = i;
      this.rank[i] = 1;
    }
  }

  public getSize(): number {
    return this.parent.length;
  }

  public isConnected(p: number, q: number): boolean {
    return this._find(p) == this._find(q);
  }

  public union(p: number, q: number): void {
    if (this.isConnected(p, q)) return;

    const pRoot = this._find(p);
    const qRoot = this._find(q);

    // 将rank低的集合合并到rank高的集合
    if (this.rank[pRoot] < this.rank[qRoot]) {
      this.parent[pRoot] = qRoot;
    } else if (this.rank[pRoot] > this.rank[qRoot]) {
      this.parent[qRoot] = this.parent[pRoot];
    } else {
      this.parent[qRoot] = this.parent[pRoot];
      this.rank[pRoot] += 1;
    }
  }

  /** 查看元素p所对应的集合的编号 */
  protected _find(p: number): number {
    if (p < 0 || p > this.parent.length) {
      throw new Error('p is out of bound.');
    }

    while (p != this.parent[p]) {
      p = this.parent[p];
    }

    return p;
  }
}
