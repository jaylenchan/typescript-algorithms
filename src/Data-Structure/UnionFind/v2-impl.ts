import IUnionFind from './Interface';

// Quick Union
export default class UnionFind implements IUnionFind<number> {
  private parent: number[];

  constructor(size: number) {
    this.parent = new Array(size);

    for (let i = 0; i < this.parent.length; i++) {
      this.parent[i] = i;
    }
  }

  public getSize(): number {
    return this.parent.length;
  }

  public inSameSet(p: number, q: number): boolean {
    return this.find(p) == this.find(q);
  }

  public union(p: number, q: number): void {
    if (this.inSameSet(p, q)) return;

    const rootP = this.find(p);
    const rootQ = this.find(q);

    this.parent[rootP] = rootQ;
  }

  /** 查看元素p所对应的集合的编号 */
  public find(p: number): number {
    if (p < 0 || p > this.parent.length) {
      throw new Error('p is out of bound.');
    }

    while (p != this.parent[p]) {
      p = this.parent[p];
    }

    return p;
  }
}
