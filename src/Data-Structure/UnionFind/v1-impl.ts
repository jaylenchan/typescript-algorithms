import IUnionFind from './Interface';

// Quick Find
export default class UnionFind implements IUnionFind<number> {
  private id: number[];

  constructor(size: number) {
    this.id = new Array(size);

    for (let i = 0; i < this.id.length; i++) {
      this.id[i] = i;
    }
  }

  public getSize(): number {
    return this.id.length;
  }

  public inSameSet(p: number, q: number): boolean {
    return this.find(p) == this.find(q);
  }

  public union(p: number, q: number): void {
    if (this.inSameSet(p, q)) return;

    const pID = this.find(p);
    const qID = this.find(q);

    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] == pID) {
        this.id[i] = qID;
      }
    }
  }

  /** 查看元素p所对应的集合的编号 */
  public find(p: number): number {
    if (p < 0 || p > this.id.length) {
      throw new Error('p is out of bound.');
    }

    return this.id[p];
  }
}
