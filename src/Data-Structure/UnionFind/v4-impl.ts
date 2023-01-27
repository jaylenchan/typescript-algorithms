import IUnionFind from './Interface';

// Quick Union optimize by rank 基于rank的优化
export default class UnionFind implements IUnionFind<number> {
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

  public inSameSet(p: number, q: number): boolean {
    return this._find(p) == this._find(q);
  }

  public union(p: number, q: number): void {
    if (this.inSameSet(p, q)) return;

    const rootP = this._find(p);
    const rootQ = this._find(q);

    // 将rank低的集合合并到rank高的集合
    if (this.rank[rootP] < this.rank[rootQ]) {
      this.parent[rootP] = rootQ;
    } else if (this.rank[rootP] > this.rank[rootQ]) {
      this.parent[rootQ] = this.parent[rootP];
    } else {
      this.parent[rootQ] = this.parent[rootP];
      this.rank[rootP] += 1;
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
