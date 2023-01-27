import IUnionFind from './Interface';

// Quick Find
export default class UnionFind implements IUnionFind {
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

  public isConnected(p: number, q: number): boolean {
    return this._find(p) == this._find(q);
  }

  public union(p: number, q: number): void {
    if (this.isConnected(p, q)) return;

    const pID = this._find(p);
    const qID = this._find(q);

    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] == pID) {
        this.id[i] = qID;
      }
    }
  }

  /** 查看元素p所对应的集合的编号 */
  private _find(p: number): number {
    if (p < 0 || p > this.id.length) {
      throw new Error('p is out of bound.');
    }

    return this.id[p];
  }
}
